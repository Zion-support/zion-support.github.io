import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion GTM Growth Ideas — Zion Tech Group',
  description: 'Zion Tech Group GTM growth ideas: pricing tiers, pilots, outbound, GEO, partnerships.',
  alternates: { canonical: 'https://ziontechgroup.com/gtm-ideas/' },
};

const GROUPS = [
  { key: 'pricing', label: 'Pricing &amp; Packages', href: '#pricing' },
  { key: 'sales', label: 'Sales Modality', href: '#sales' },
  { key: 'channels', label: 'Lead Acquisition Channels', href: '#channels' },
];

export default function GTMPage() {
  return (
    <main className='max-w-3xl mx-auto px-4 py-12'>
      <h1>Zion Growth Ideas — GTM</h1>
      <p className='mt-3 text-slate-400'>Playbook to take Zion Tech Group to the next level with own delivery and full operational control.</p>

      <section id='pricing' className='mt-10'>
        <h2 className='text-lg font-semibold text-purple-300'>Pricing &amp; Packages</h2>
        <ul className='list-disc list-inside text-slate-300'>
          <li>Starter: Discovery + 3 apps — low risk entry.</li>
          <li>Growth: ongoing 10 apps + CI/CD + monitoring.</li>
          <li>Enterprise: consulting, governance and training.</li>
        </ul>
      </section>

      <section id='sales' className='mt-10'>
        <h2 className='text-lg font-semibold text-purple-300'>Sales Modality</h2>
        <ul className='list-disc list-inside text-slate-300'>
          <li>Pilot free: maps the problem, returns a priority field and a payment option.</li>
          <li>Monthly retainer with a meeting-scheduling metric.</li>
        </ul>
      </section>

      <section id='channels' className='mt-10'>
        <h2 className='text-lg font-semibold text-purple-300'>Lead Acquisition Channels</h2>
        <ul className='list-disc list-inside text-slate-300'>
          <li>AI SDR (email + LinkedIn) with delivery guardrails and reference messages.</li>
          <li>GEO/reviews (Case studies + G2 + Clutch) so the company appears before the client researches.</li>
          <li>Partnerships with MSPs, consultants and cross-selling to current clients.</li>
        </ul>
      </section>

      <p className='mt-10 text-center text-sm text-slate-500'>
        <Link href='/' className='text-purple-300 underline'>
          &larr; Zion Tech Group
        </Link>
      </p>
    </main>
  );
};
