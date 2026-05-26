// app/pricing-calculator/layout.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pricing Calculator — Estimate Your Monthly Costs',
  description:
    'Use our interactive pricing calculator to estimate monthly costs for AI, IT, cloud, security, data, and automation services. Configure tier, services, and support level for an instant bundled estimate.',
  openGraph: {
    title: 'Pricing Calculator — Zion Tech Group',
    description:
      'Estimate your monthly AI, IT, cloud, and security service costs instantly.',
  },
};

export default function PricingCalculatorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}