import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Employee Onboarding Hub | Zion Tech Group',
  description: 'Complete onboarding automation platform with AI-powered task orchestration, personalized training paths, equipment provisioning, and new-hire engagement tracking.',
  alternates: { canonical: '/micro-saas/ai-employee-onboarding-hub' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'AI Employee Onboarding Hub',
        category: 'HR & Workforce Management',
        description: 'Complete onboarding automation platform with AI-powered task orchestration, personalized training paths, equipment provisioning, and new-hire engagement tracking.',
        iconEmoji: '🤝',
        features: [
            {
                        "title": "AI Task Orchestration",
                        "description": "Intelligent onboarding workflows that automatically coordinate IT provisioning, HR paperwork, team introductions, and training schedules."
            },
            {
                        "title": "Personalized Training Paths",
                        "description": "AI-generated learning plans based on role, experience level, and skill gaps with progress tracking and milestone alerts."
            },
            {
                        "title": "Smart Equipment Provisioning",
                        "description": "Automated laptop configuration, software licensing, access provisioning, and welcome kit ordering integrated with your IT asset management."
            },
            {
                        "title": "New Hire Engagement Tracker",
                        "description": "Sentiment analysis and engagement scoring from daily check-ins to identify at-risk employees and improve retention."
            },
            {
                        "title": "Buddy & Mentor Matching",
                        "description": "AI-powered matching of new hires with experienced team members based on role, skills, personality, and interests."
            },
            {
                        "title": "Compliance & Policy Training",
                        "description": "Automated delivery and tracking of required compliance training (anti-harassment, data privacy, security awareness) with sign-off records."
            }
],
        useCases: [
            {
                        "title": "Enterprise-Scale Onboarding",
                        "description": "Orchestrate onboarding for dozens of new hires simultaneously with zero manual coordination between HR, IT, and managers.",
                        "icon": "\ud83c\udfe2"
            },
            {
                        "title": "Remote Team Integration",
                        "description": "Seamlessly onboard remote and distributed team members with virtual tours, async training, and digital welcome experiences.",
                        "icon": "\ud83c\udf0d"
            },
            {
                        "title": "Acquisition & Merger Rollout",
                        "description": "Rapidly onboard acquired-team members with customized integration plans, culture orientation, and system access provisioning.",
                        "icon": "\ud83d\udd04"
            }
],
        benefits: [
      "50% faster onboarding time-to-productivity",
      "Eliminate IT/HR coordination overhead",
      "Personalized training per role",
      "Early retention risk detection",
      "Automated compliance training tracking",
      "Improved new hire satisfaction scores"
],
        ctaLabel: 'Get Started with AI Employee Onboarding Hub',
        pricing: [
          { tier: 'Starter', price: '$49', period: '/month', features: ['Up to 10 documents per month', 'Basic OCR & extraction', 'Email support', 'Standard security'], popular: false },
          { tier: 'Professional', price: '$149', period: '/month', features: ['Up to 500 documents per month', 'Full AI extraction & classification', 'Priority support', 'API access', 'Workflow automation'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Unlimited documents', 'Custom models & fine-tuning', 'Dedicated support engineer', 'SLA guarantee', 'On-premise deployment option', 'SSO & advanced security'], popular: false },
        ],
        contact: {
          phone: '+1 302 464 0950',
          email: 'kleber@ziontechgroup.com',
          address: '364 E Main St STE 1008, Middletown DE 19709',
        },
      }}
    />
  );
}
