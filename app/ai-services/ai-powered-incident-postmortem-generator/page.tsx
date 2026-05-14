import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI-Powered Incident Postmortem Generator — Zion Tech Group",
  description: "Automatically generate blameless postmortem reports from incident data: timeline reconstruction, root cause hypothesis, action items, and status tracking.",
  keywords: "AI services, IT services, AI-Powered Incident Postmortem Generator",
  openGraph: {
    title: "AI-Powered Incident Postmortem Generator",
    description: "Automatically generate blameless postmortem reports from incident data: timeline reconstruction, root cause hypothesis, action items, and status tracking.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI-Powered Incident Postmortem Generator",
    description: "Automatically generate blameless postmortem reports from incident data: timeline reconstruction, root cause hypothesis, action items, and status tracking."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =    {
     id: 'ai-powered-incident-postmortem',
     title: 'AI-Powered Incident Postmortem Generator',
     description: 'Automatically generate blameless postmortem reports from incident data: timeline reconstruction, root cause hypothesis, action items, and status tracking.',
     features: [
       'Timeline assembly from logs/metrics/alerts',
       'Root cause inference via causal graph',
       'Impact quantification (users, revenue, SLA)',
       'Auto-generated action items with owners',
       'Follow-up tracking & closure verification'
     ],
     benefits: [
       'Write postmortems in 10 minutes vs. hours',
       'Consistent structure & quality across teams',
       'Identify systemic issues faster',
       'Improve reliability documentation'
     ],
     pricing: { basic: '299', pro: '699', enterprise: '1999' },
     contactInfo: { website: '/ai-services/ai-powered-incident-postmortem', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
     icon: '📝',
     href: '/ai-services/ai-powered-incident-postmortem',
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

export default function AipoweredIncidentPostmortemGeneratorPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
