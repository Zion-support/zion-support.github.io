import { Link  } from 'react-router-dom';
export default function Page(function Page(function Page() {): any {): any {}

export default function ComprehensivePricingGuide2025(...args: unknown[]): unknown {
  const pricingTiers = [
    {
      name: 'Starter',
      price: '$99',
      period: 'month',
      description: 'Perfect for small businesses and startups',
      color: 'from-blue-500 to-cyan-500',
      features: [
        'AI Content Creation (5 articles/month)',
        'Basic Analytics Dashboard',
        'Email Support',
        'Standard Security',
        '5GB Storage',
        'Basic API Access'
      ],
      popular: false,
      cta: 'Get Started',
      href: '/request-quote'
    },
    {
      name: 'Professional',
      price: '$299',
      period: 'month',
      description: 'Ideal for growing businesses',
      color: 'from-purple-500 to-pink-500',
      features: [
        'AI Content Creation (25 articles/month)',
        'Advanced Analytics & Reporting',
        'Priority Support',
        'Enhanced Security',
        '25GB Storage',
        'Full API Access',
        'Custom Integrations',
        'Training Sessions'
      ],
      popular: true,
      cta: 'Get Professional',
      href: '/request-quote'
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: 'month',
      description: 'For large organizations',
      color: 'from-emerald-500 to-green-500',
      features: [
        'Unlimited AI Content Creation',
        'Custom Analytics Platform',
        '24/7 Dedicated Support',
        'Enterprise Security',
        'Unlimited Storage',
        'Custom API Development',
        'White-label Solutions',
        'Dedicated Account Manager',
        'Custom Training Programs',
        'SLA Guarantees'
      ],
      popular: false,
      cta: 'Contact Sales',
      href: '/contact'
    }