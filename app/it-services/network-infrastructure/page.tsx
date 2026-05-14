import ProductPageLayout from '../../components/ProductPageLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Enterprise Network Infrastructure | Zion Tech Group',
  description: 'Design, deploy, and manage enterprise-grade networks with SD-WAN, wireless optimization, zero-trust architecture, and real-time performance monitoring.',
  alternates: { canonical: '/it-services/network-infrastructure' },
};

export default function Page() {
  return (
    <ProductPageLayout
      data={{
        title: 'Enterprise Network Infrastructure',
        category: 'Infrastructure',
        description: 'Design, deploy, and manage enterprise-grade networks with SD-WAN, wireless optimization, zero-trust architecture, and real-time performance monitoring.',
        iconEmoji: '🌐',
        features: [
          { title: 'Enterprise-Grade Delivery', description: 'Built for uptime, security, and scale — meeting the demands of large organizations with strict SLAs and compliance requirements.' },
          { title: 'Expert Team', description: 'Certified engineers and architects with 10+ years of industry experience across Fortune 500 and high-growth environments.' },
          { title: 'AI-Powered Automation', description: 'AI-assisted monitoring, automated remediation, and intelligent alerting to reduce mean time to resolution by 70%.' },
          { title: 'Scalable Architecture', description: 'Solutions designed to grow with your business — from startup to enterprise-level scale without re-architecture.' },
          { title: '24/7 Monitoring & Support', description: 'Round-the-clock infrastructure monitoring, proactive maintenance, and dedicated support team for critical issues.' },
          { title: 'Compliance & Audit Ready', description: 'Built-in compliance with SOC 2, ISO 27001, HIPAA, GDPR, and PCI DSS with automated evidence collection.' },
        ],
        useCases: [
          { title: 'Enterprise Transformation', description: 'Modernize legacy infrastructure with cloud-native solutions that reduce costs by 40% while improving performance and reliability.', icon: '🏢' },
          { title: 'Security Hardening', description: 'Strengthen your security posture with zero-trust architecture, continuous monitoring, and rapid incident response capabilities.', icon: '🔒' },
          { title: 'Operational Excellence', description: 'Automate routine operations, reduce manual intervention, and build self-healing infrastructure that stays up without human intervention.', icon: '⚡' },
        ],
        benefits: ['99.99% uptime SLA', '70% faster incident resolution', '40% cost reduction on average', '24/7 expert monitoring', 'Automated compliance reporting', 'Scalable cloud-native architecture'],
        ctaLabel: 'Get Started with Enterprise Network Infrastructure',
        pricing: [
          { tier: 'Essential', price: '$1,999', period: '/month', features: ['Core infrastructure management', '8x5 monitoring & support', 'Quarterly reviews', 'Basic SLA (99.9%)', 'Up to 100 endpoints'], popular: false },
          { tier: 'Professional', price: '$4,999', period: '/month', features: ['Advanced infrastructure + AI automation', '24/7 monitoring & support', 'Monthly reviews & optimization', 'Premium SLA (99.95%)', 'Up to 500 endpoints', 'Dedicated account manager'], popular: true },
          { tier: 'Enterprise', price: 'Custom', period: '', features: ['Full-stack managed services', '24/7 dedicated engineers', 'Weekly reviews & strategic planning', 'Enterprise SLA (99.99%)', 'Unlimited endpoints', 'On-site support option', 'Custom security configurations', 'Quarterly architecture reviews'], popular: false },
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
