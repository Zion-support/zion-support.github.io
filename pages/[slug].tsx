import React, { useMemo } from 'react';
import Head from 'next/head';
import UltraFuturisticBackground from '../components/ui/UltraFuturisticBackground';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import { Check, Mail, MapPin, Phone, ExternalLink } from 'lucide-react';
import { enhancedRealMicroSaasServices } from '../data/enhanced-real-micro-saas-services';
import { extraServices } from '../data/extra-services';
import { additionalEnhancedServices } from '../data/additional-real-services';
import { newlyAddedServices } from '../data/newly-added-services';
import { curatedMarketServices } from '../data/curated-market-services';
import { new2025Services } from '../data/new-2025-services';
import { marketValidatedServices } from '../data/market-validated-services';
import { moreRealServices2025 } from '../data/more-real-services-2025';
import { verified2025Additions } from '../data/verified-2025-additions';
import { realServicesQ12025 } from '../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../data/real-enterprise-services-2025';
import { verifiedRealServices2025Batch2 } from '../data/verified-real-services-2025-batch2';
import { realMarketAugmentations2025 } from '../data/real-market-augmentations-2025';
import { additionalLiveServices2025 } from '../data/additional-live-services-2025';
import { real2025Q2Additions } from '../data/real-2025-q2-additions';
import { augmentedServicesBatch3 } from '../data/real-augmented-services-2025-batch3';
import { realServicesQ22025 } from '../data/real-services-q2-2025';
import { realServicesQ32025 } from '../data/real-services-q3-2025';
import { realQ4Services2025, real2025Q4Additions } from '../data/real-2025-q4-additions';
import { realMarketServicesExtended } from '../data/real-market-services-extended';
import { real2026Additions } from '../data/real-2026-additions';
import { real2026Q1Additions } from '../data/real-2026-q1-additions';
import { added2026Q2Services } from '../data/added-2026-q2-services';
import { real2026Q3Additions } from '../data/real-2026-q3-additions';
import { real2026Q4Additions } from '../data/real-2026-q4-additions';
import { real2026Q4NewServices } from '../data/real-2026-q4-new-services';
import { real2027Q1Additions } from '../data/real-2027-q1-additions';
import { newSaasItAiServices2025 } from '../data/new-saas-it-ai-services-2025';
import fs from 'fs';
import path from 'path';

type Service = typeof enhancedRealMicroSaasServices[number];

function getAllServices(): Service[] {
  return enhancedRealMicroSaasServices
    .concat(extraServices as Service[], additionalEnhancedServices as Service[])
    .concat(newlyAddedServices as unknown as Service[])
    .concat(curatedMarketServices as Service[])
    .concat(new2025Services as unknown as Service[])
    .concat(marketValidatedServices as unknown as Service[])
    .concat(moreRealServices2025 as unknown as Service[])
    .concat(verified2025Additions as unknown as Service[])
    .concat(realServicesQ12025 as unknown as Service[])
    .concat(realEnterpriseServices2025 as unknown as Service[])
    .concat(verifiedRealServices2025Batch2 as unknown as Service[])
    .concat(realMarketAugmentations2025 as unknown as Service[])
    .concat(additionalLiveServices2025 as unknown as Service[])
    .concat(real2025Q2Additions as unknown as Service[])
    .concat(augmentedServicesBatch3 as unknown as Service[])
    .concat(realServicesQ22025 as unknown as Service[])
    .concat(realServicesQ32025 as unknown as Service[])
    .concat(realQ4Services2025 as unknown as Service[])
    .concat(real2025Q4Additions as unknown as Service[])
    .concat(realMarketServicesExtended as unknown as Service[])
    .concat(real2026Q1Additions as unknown as Service[])
    .concat(real2026Additions as unknown as Service[])
    .concat(added2026Q2Services as unknown as Service[])
    .concat(real2026Q3Additions as unknown as Service[])
    .concat(real2026Q4Additions as unknown as Service[])
    .concat(real2026Q4NewServices as unknown as Service[])
    .concat(real2027Q1Additions as unknown as Service[])
    .concat(newSaasItAiServices2025 as unknown as Service[]);
}

function toSlug(value: string): string {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

function getExistingRootPageSlugs(): Set<string> {
  const pagesDir = path.join(process.cwd(), 'pages');
  const entries = fs.readdirSync(pagesDir, { withFileTypes: true });
  const reserved = new Set<string>(['api', 'reports', 'services']);
  const slugs = new Set<string>();
  for (const entry of entries) {
    if (entry.name.startsWith('_')) continue;
    if (reserved.has(entry.name)) continue;
    // Files at root
    if (entry.isFile()) {
      const m = entry.name.match(/^(.*)\.(tsx|ts|jsx|js)$/);
      if (m) {
        const base = m[1];
        if (base !== 'index' && base !== '404' && base !== '500' && base !== '[slug]') {
          slugs.add(base);
        }
      }
    }
    // Directories at root (folder routes)
    if (entry.isDirectory()) {
      slugs.add(entry.name);
    }
  }
  return slugs;
}

export async function getStaticPaths() {
  const services = getAllServices();
  const slugs = new Set<string>();
  for (const s of services) {
    if (s.id) slugs.add(toSlug(s.id));
    else if (s.name) slugs.add(toSlug(s.name));
  }
  // Add existing page slugs
  const existing = getExistingRootPageSlugs();
  for (const slug of existing) {
    slugs.add(slug);
  }
  return {
    paths: Array.from(slugs).map(slug => ({ params: { slug } })),
    fallback: false
  };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const services = getAllServices();
  const service = services.find(s => 
    (s.id && toSlug(s.id) === params.slug) || 
    (s.name && toSlug(s.name) === params.slug)
  );
  return { props: { service } };
}

export default function ServicePage({ service }: { service: Service }) {
  if (!service) {
    return (
      <UltraFuturisticBackground>
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Service Not Found</h1>
            <p className="text-gray-300">The service you're looking for doesn't exist.</p>
          </div>
        </div>
      </UltraFuturisticBackground>
    );
  }

  const canonical = `https://ziontechgroup.com/${service.id || service.name}`;

  return (
    <UltraFuturisticBackground>
      <Head>
        <title>{service.name} - Zion Tech Group</title>
        <meta name="description" content={service.tagline || service.description} />
        <link rel="canonical" href={canonical} />
      </Head>
      
      <div className="min-h-screen py-12">
        <div className="max-w-6xl mx-auto px-4">
          <Card className="p-8 mb-8">
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold text-white mb-4">{service.name}</h1>
              <p className="text-xl text-gray-300 mb-6">{service.tagline || service.description}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {service.categories?.map((category, index) => (
                  <span key={index} className="px-3 py-1 bg-blue-600 text-white rounded-full text-sm">
                    {category}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Service Details</h2>
                <p className="text-gray-300 mb-6">{service.description}</p>
                
                {service.features && (
                  <div className="mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <Check className="w-5 h-5 text-green-500 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
              
              <div>
                <h2 className="text-2xl font-semibold text-white mb-4">Get Started</h2>
                <div className="space-y-4">
                  <Button
                    href={service.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full"
                  >
                    <ExternalLink className="w-5 h-5 mr-2" />
                    Visit Service
                  </Button>
                  
                  <div className="text-center text-gray-300">
                    <p className="mb-2">Need help or have questions?</p>
                    <div className="flex justify-center space-x-4">
                      <Button variant="outline" href="mailto:contact@ziontechgroup.com">
                        <Mail className="w-4 h-4 mr-2" />
                        Email Us
                      </Button>
                      <Button variant="outline" href="tel:+1234567890">
                        <Phone className="w-4 h-4 mr-2" />
                        Call Us
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </UltraFuturisticBackground>
  );
}