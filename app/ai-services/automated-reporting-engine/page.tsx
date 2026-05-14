import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Automated Reporting Engine — Zion Tech Group",
  description: "Automated Reporting Engine",
  keywords: "AI services, IT services, Automated Reporting Engine",
  openGraph: {
    title: "Automated Reporting Engine",
    description: "Automated Reporting Engine",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Automated Reporting Engine",
    description: "Automated Reporting Engine"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-automated-reporting',
    title: 'Automated Reporting Engine',
    description: `Turn raw data into formatted PDF/PPT reports with natural language summaries. Schedule distributions to stakeholders.`,
    features: ["Natural language summaries", "Custom templates (PDF, PPT)", "Scheduled distribution", "Drill-down charts", "Email & Slack delivery"],
    benefits: ["Save 20+ hours/month on reporting", "Ensure consistent formatting", "Deliver insights faster"],
    pricing: {"basic":"149","pro":"399","enterprise":"999"},
    contactInfo: {
      website: '/ai-services/ai-automated-reporting',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📊',
    href: '/ai-services/ai-automated-reporting',
    category: 'ai'
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

export default function AutomatedReportingEnginePage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
