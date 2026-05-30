import ProductPageLayout from '../../components/ProductPageLayout';
/* eslint-disable */
import Metadata from 'next';

export const metadata = {
  title: 'AI Customer Insights | Zion Tech Group',
  description:
    'Analyze customer interactions across channels to uncover actionable insights that drive satisfaction, retention, and revenue growth.',
  alternates: { canonical: '/ai-services/customer-insights' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Customer Insights',
        category: 'AI Services',
        description:
          'Analyze customer interactions across channels to uncover actionable insights that drive satisfaction, retention, and revenue growth.',
        iconEmoji: '💡',
        features: [
          {
            title: 'Multi-channel Sentiment Analysis',
            description: 'Analyze customer sentiment from emails, chats, social media, and support tickets in real time.',
          },
          {
            title: 'Automated Ticket Categorization',
            description: 'Automatically tag and route support tickets based on content, urgency, and customer sentiment.',
          },
          {
            title: 'Predictive Churn Detection',
            description: 'Identify at-risk customers before they churn with AI-powered predictive models.',
          },
          {
            title: 'Customer Journey Mapping',
            description: 'Visualize and optimize the complete customer journey across all touchpoints and channels.',
          },
          {
            title: 'Real-time Alerting',
            description: 'Get instant alerts for critical customer issues, sentiment shifts, or emerging trends.',
          },
        ],
        useCases: [
          {
            title: 'Support Optimization',
            description: 'Reduce support costs while improving customer satisfaction through intelligent ticket routing.',
            icon: '🎧',
          },
          {
            title: 'Customer Retention',
            description: 'Proactively identify and address churn risks to improve customer lifetime value.',
            icon: '🔒',
          },
          {
            title: 'Product Improvement',
            description: 'Use customer insights to drive product development and feature prioritization.',
            icon: '🚀',
          },
        ],
        benefits: [
          'Increased customer satisfaction by 25%',
          'Reduced support costs by 30%',
          'Higher retention rates',
          'Data-driven product decisions',
          'Proactive issue resolution',
        ],
        ctaLabel: 'Get Started with AI Customer Insights',
      }}
    />
  );
}