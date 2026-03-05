import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight } from 'lucide-react';
import Breadcrumb from '../../components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Veterinary & Animal Health AI Solutions | Zion Tech Group',
  description:
    'Appointment scheduling, medical records, inventory management, and client communications for veterinary clinics with AI-powered workflows.',
  alternates: { canonical: '/solutions/veterinary-animal-health' },
};

const veterinaryApps = [
  { name: 'AI Scheduling Assistant', href: '/zion-ai-scheduling-assistant' },
  { name: 'AI Document Processor', href: '/zion-ai-document-processor' },
  { name: 'Smart Inventory Manager', href: '/zion-smart-inventory-manager' },
  { name: 'AI Chatbot Builder', href: '/zion-ai-chatbot-builder' },
  { name: 'Invoice Genius', href: '/zion-invoice-genius' },
  { name: 'AI Report Generator', href: '/zion-ai-report-generator' },
];

export default function VeterinaryAnimalHealthSolutionsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-16 left-[-9rem] h-[26rem] w-[26rem] rounded-full bg-purple-500/25 blur-3xl" />
        <div className="absolute right-[-8rem] top-40 h-[22rem] w-[22rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-12 pt-16 sm:px-6 sm:pt-20 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Solutions', href: '/solutions' },
            { label: 'Veterinary & Animal Health' },
          ]}
          className="mb-6"
        />
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Industry Solutions
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Veterinary & Animal Health{' '}
            <span className="bg-gradient-to-r from-purple-300 via-fuchsia-300 to-pink-300 bg-clip-text text-transparent">
              AI Solutions
            </span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Appointment scheduling, medical records, inventory management, and client communications
            for veterinary clinics. Reduce no-shows, automate reminders, and streamline patient
            intake.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-7 py-3 text-base font-semibold text-white shadow-lg shadow-purple-700/20 transition hover:-translate-y-0.5 hover:from-purple-500 hover:to-pink-500"
            >
              Book a Discovery Call
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-7 py-3 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
            >
              View All Solutions
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-700/70 bg-slate-900/65 p-6 shadow-lg shadow-black/20 sm:p-8">
          <h2 className="text-xl font-bold text-white">
            Featured AI Apps for Veterinary & Animal Health
          </h2>
          <p className="mt-2 text-slate-300">
            Production-ready tools for scheduling, records, inventory, and client engagement.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {veterinaryApps.map((app) => (
              <Link
                key={app.href}
                href={app.href}
                className="flex items-center justify-between rounded-xl border border-slate-700/70 bg-slate-950/60 px-4 py-3 text-slate-100 transition hover:border-purple-400/50 hover:text-white"
              >
                <span>{app.name}</span>
                <ArrowRight className="h-4 w-4 text-purple-400" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
        <Link
          href="/industries"
          className="inline-flex items-center text-sm font-medium text-purple-300 hover:text-purple-200"
        >
          ← Back to Industry Solutions
        </Link>
      </section>
    </div>
  );
}
