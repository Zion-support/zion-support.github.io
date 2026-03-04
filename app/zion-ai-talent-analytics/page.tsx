import ProductPageLayout from '../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zion AI Talent Analytics | Zion Tech Group',
  description:
    'Track team performance, skill gaps, and retention signals with AI-powered workforce insights for data-driven HR decisions.',
  alternates: { canonical: '/zion-ai-talent-analytics' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Zion AI Talent Analytics',
        category: 'Operations',
        description:
          'Track team performance, skill gaps, and retention signals with AI-powered workforce insights. Make data-driven HR decisions that improve productivity and reduce turnover.',
        iconEmoji: '👥',
        features: [
          { title: 'Performance Insights', description: 'Aggregate performance data across projects, goals, and feedback.' },
          { title: 'Skill Gap Analysis', description: 'Identify gaps between current skills and future needs with recommendations.' },
          { title: 'Retention Risk', description: 'Early warning signals for flight risk based on engagement and behavior patterns.' },
          { title: 'Succession Planning', description: 'Map internal talent for key roles and development paths.' },
          { title: 'Diversity & Inclusion', description: 'Track representation and equity metrics across teams and levels.' },
          { title: 'Privacy-First', description: 'Aggregated insights with role-based access and anonymization options.' },
        ],
        useCases: [
          { title: 'HR & People Ops', description: 'Strategic workforce planning and talent development programs.', icon: '📊' },
          { title: 'Engineering Leaders', description: 'Team health, capacity, and skill alignment for delivery planning.', icon: '👨‍💻' },
          { title: 'Executive Dashboards', description: 'Org-wide talent metrics for board and leadership reviews.', icon: '📈' },
        ],
        benefits: [
          'Reduced turnover and attrition',
          'Data-driven hiring and development',
          'Proactive retention interventions',
          'Better workforce planning',
        ],
        ctaLabel: 'Get Started with Zion AI Talent Analytics',
      }}
    />
  );
}
