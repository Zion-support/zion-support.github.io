import { NextResponse } from 'next/server';
import { z } from 'zod';
import { allServices } from '@/data/servicesData';

const ServiceSchema = z.object({
  id: z.string(),
  href: z.string(),
  icon: z.string(),
  category: z.enum(['ai', 'it']),
  title: z.string().min(3),
  description: z.string().min(10),
  features: z.array(z.string()).min(1),
  benefits: z.array(z.string()).min(1),
  pricing: z.record(z.string()),
  marketPrice: z.string(),
  link: z.string(),
  tags: z.array(z.string()),
  // Optional contactInfo in merged output
  contactInfo: z.object({
    website: z.string().url().optional(),
    email: z.string().email().optional(),
    phone: z.string().optional(),
    address: z.string().optional(),
  }).optional(),
});

export async function GET() {
  const results = {
    valid: true,
    total: allServices.length,
    errors: {},
    summary: {
      byCategory: {},
      missingContact: 0,
      priceIssues: 0,
    },
  };

  allServices.forEach((svc, idx) => {
    const parse = ServiceSchema.safeParse(svc);
    if (!parse.success) {
      results.valid = false;
      results.errors[svc.id || `index-${idx}`] = parse.error.errors.map(e => ({
        path: e.path.join('.'),
        message: e.message,
      }));
    }
    // Summary stats
    const cat = svc.category || 'unknown';
    results.summary.byCategory[cat] = (results.summary.byCategory[cat] || 0) + 1;
    if (!svc.contactInfo) results.summary.missingContact++;
    if (!svc.pricing || Object.keys(svc.pricing).length === 0) results.summary.priceIssues++;
  });

  return NextResponse.json(results, { status: results.valid ? 200 : 400 });
}
