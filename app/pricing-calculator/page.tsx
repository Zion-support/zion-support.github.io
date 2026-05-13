'use client';

import React, { useState, useMemo, useCallback } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import Breadcrumb from '../components/Breadcrumb';
import PricingCalculator from '../components/PricingCalculator';

export const metadata: Metadata = {
  title: 'Pricing Calculator | Zion Tech Group',
  description:
    'Get an instant, personalized cost estimate for AI and IT services. Configure your team size, services, and support level in seconds.',
  alternates: { canonical: '/pricing-calculator' },
};

export default function PricingCalculatorPage() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-1/3 h-[24rem] w-[24rem] rounded-full bg-purple-500/20 blur-3xl" />
        <div className="absolute bottom-[-8rem] right-[-4rem] h-[20rem] w-[20rem] rounded-full bg-fuchsia-500/15 blur-3xl" />
      </div>

      <section className="relative mx-auto max-w-7xl px-4 pb-12 pt-20 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Pricing', href: '/pricing' },
            { label: 'Pricing Calculator' },
          ]}
          className="mb-6"
        />
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Interactive Cost Estimator
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Pricing Calculator
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300">
            Configure your project requirements and get an instant, personalized cost estimate in seconds.
            Adjust team size, services, and support level to find the perfect plan.
          </p>
        </div>
      </section>

      <PricingCalculator />

      {/* Results contact CTA */}
      <section className="relative mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-fuchsia-900/30 to-pink-900/40 p-8 text-center shadow-2xl sm:p-12">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Ready to Get an Accurate Quote?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-200">
            Use the calculator above for a quick estimate, then let our team build a detailed proposal
            tailored to your exact requirements.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact?topic=pricing-calculator&source=calculator"
              className="rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              data-cta-event="cta_primary"
              data-cta-label="calculator_contact_sales"
            >
              Contact Sales for Custom Quote
            </Link>
            <Link
              href="/pricing"
              className="rounded-xl border border-white/40 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              View Standard Pricing Plans
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}