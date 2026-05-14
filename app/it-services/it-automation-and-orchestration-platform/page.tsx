import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "IT Automation & Orchestration Platform — Zion Tech Group",
  description: "Enterprise IT automation platform with workflow orchestration, infrastructure provisioning, configuration management, and self-healing system capabilities.",
  keywords: "AI services, IT services, IT Automation & Orchestration Platform",
  openGraph: {
    title: "IT Automation & Orchestration Platform",
    description: "Enterprise IT automation platform with workflow orchestration, infrastructure provisioning, configuration management, and self-healing system capabilities.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "IT Automation & Orchestration Platform",
    description: "Enterprise IT automation platform with workflow orchestration, infrastructure provisioning, configuration management, and self-healing system capabilities."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-automation-orchestrator',
    title: 'IT Automation & Orchestration Platform',
    description: 'Enterprise IT automation platform with workflow orchestration, infrastructure provisioning, configuration management, and self-healing system capabilities.',
    features: ['Infrastructure automation with Terraform and Ansible', 'Workflow orchestration across IT systems', 'Self-healing infrastructure with event-driven automation', 'Compliance enforcement and drift detection', 'Centralized automation catalog and governance'],
    benefits: ['Reduce manual IT operations by 80%', 'Eliminate configuration drift across environments', 'Accelerate service provisioning from days to minutes', 'Maintain compliance with automated enforcement'],
    pricing: { basic: '1499', pro: '3499', enterprise: '7999' },
    contactInfo: { website: '/it-services/automation-orchestrator', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⚙️',
    href: '/it-services/automation-orchestrator',
    category: 'automation'
  }
;

const mergedService = {
  ...service,
  contactInfo: {
    website: 'https://ziontechgroup.com',
    email: 'kleber@ziontechgroup.com',
    phone: '+1 302 464 0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709'
  }
};

export default function ItAutomationAndOrchestrationPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
