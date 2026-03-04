import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Accessibility Checker | Zion Tech Group',
  description:
    'Scan web applications for WCAG compliance issues and generate AI-powered remediation guides for inclusive, accessible experiences.',
  alternates: { canonical: '/zion-ai-accessibility-checker' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Zion AI Accessibility Checker',
        category: 'Engineering',
        description:
          'Scan web applications for WCAG compliance issues and generate AI-powered remediation guides. Build inclusive, accessible experiences that meet legal and ethical standards.',
        iconEmoji: '♿',
        features: [
          { title: 'Automated Scanning', description: 'Crawl and audit pages for WCAG 2.1 AA/AAA issues across structure, contrast, and semantics.' },
          { title: 'AI Remediation', description: 'Get concrete fix suggestions and code snippets for each finding.' },
          { title: 'CI/CD Integration', description: 'Run accessibility checks in pipelines to catch regressions early.' },
          { title: 'Component-Level Audits', description: 'Test design system components and shared UI before release.' },
          { title: 'Compliance Reporting', description: 'Generate audit-ready reports for legal and procurement reviews.' },
          { title: 'Continuous Monitoring', description: 'Track accessibility scores over time as new pages and features ship.' },
        ],
        useCases: [
          { title: 'Pre-Launch Audits', description: 'Ensure new products and features meet accessibility standards before release.', icon: '🚀' },
          { title: 'Legacy Remediation', description: 'Prioritize and fix issues across existing applications systematically.', icon: '🔧' },
          { title: 'Compliance & Legal', description: 'Demonstrate WCAG compliance for contracts and regulatory requirements.', icon: '📋' },
        ],
        benefits: [
          'Inclusive user experiences',
          'Reduced legal and reputational risk',
          'Faster remediation with AI guidance',
          'Automated compliance tracking',
        ],
        ctaLabel: 'Get Started with Zion AI Accessibility Checker',
      }}
    />
  );
}
