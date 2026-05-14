// ComparisonTable — renders side-by-side service comparison
'use client';

import type { ServiceData } from '@/components/ServiceLayout';

export default function ComparisonTable({ services }: { services: ServiceData[] }) {
  if (services.length === 0) return null;

  // All unique features and benefits across selected services
  const allFeatures = Array.from(new Set(services.flatMap(s => s.features || [])));
  const allBenefits = Array.from(new Set(services.flatMap(s => s.benefits || [])));
  const allPricingTiers = Array.from(new Set(services.flatMap(s => Object.keys(s.pricing || {}))));

  // Helper: checkmark if service has this feature
  const hasFeature = (service: ServiceData, feature: string) =>
    (service.features || []).includes(feature) ? '✓' : '';

  const hasBenefit = (service: ServiceData, benefit: string) =>
    (service.benefits || []).includes(benefit) ? '✓' : '';

  const getPrice = (service: ServiceData, tier: string) =>
    service.pricing?.[tier] || '-';

  return (
    <div className="overflow-x-auto rounded-xl border border-slate-700/50 bg-slate-900/40">
      <table className="min-w-full">
        <thead>
          <tr className="border-b border-slate-700/50 bg-slate-800/60">
            <th className="p-4 text-left text-sm font-semibold text-white">Feature / Service</th>
            {services.map(s => (
              <th key={s.id} className="p-4 text-center text-sm font-semibold text-purple-300 min-w-[200px]">
                {s.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700/30">
          {/* Features Section */}
          {allFeatures.length > 0 && (
            <>
              <tr className="bg-slate-800/30">
                <td colSpan={services.length + 1} className="p-3 text-sm font-medium text-purple-200">
                  Features
                </td>
              </tr>
              {allFeatures.slice(0, 15).map((feature, idx) => (
                <tr key={`feat-${idx}`} className="hover:bg-slate-800/20">
                  <td className="p-3 text-sm text-slate-300">{feature}</td>
                  {services.map(s => (
                    <td key={s.id} className="p-3 text-center text-sm">
                      {hasFeature(s, feature)}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )}

          {/* Benefits Section */}
          {allBenefits.length > 0 && (
            <>
              <tr className="bg-slate-800/30">
                <td colSpan={services.length + 1} className="p-3 text-sm font-medium text-purple-200">
                  Benefits
                </td>
              </tr>
              {allBenefits.slice(0, 10).map((benefit, idx) => (
                <tr key={`ben-${idx}`} className="hover:bg-slate-800/20">
                  <td className="p-3 text-sm text-slate-300">{benefit}</td>
                  {services.map(s => (
                    <td key={s.id} className="p-3 text-center text-sm">
                      {hasBenefit(s, benefit)}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )}

          {/* Pricing Section */}
          {allPricingTiers.length > 0 && (
            <>
              <tr className="bg-slate-800/30">
                <td colSpan={services.length + 1} className="p-3 text-sm font-medium text-purple-200">
                  Pricing (per month)
                </td>
              </tr>
              {allPricingTiers.map((tier, idx) => (
                <tr key={`price-${idx}`} className="hover:bg-slate-800/20">
                  <td className="p-3 text-sm text-slate-300 capitalize">{tier.replace('_', ' ')}</td>
                  {services.map(s => (
                    <td key={s.id} className="p-3 text-center text-sm text-white font-medium">
                      {getPrice(s, tier)}
                    </td>
                  ))}
                </tr>
              ))}
            </>
          )}

          {/* Contact CTA row */}
          <tr className="bg-slate-800/40">
            <td className="p-4" />
            {services.map(s => (
              <td key={s.id} className="p-4 text-center">
                <a
                  href="/contact"
                  className="inline-block rounded-lg bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-500"
                >
                  Get Started
                </a>
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    </div>
  );
}
