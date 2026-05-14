import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Robotics Integration & Autonomous Systems — Zion Tech Group",
  description: "AI integration for industrial and commercial robotics — computer vision navigation, autonomous task planning, human-robot collaboration, and fleet management.",
  keywords: "AI services, IT services, AI Robotics Integration & Autonomous Systems",
  openGraph: {
    title: "AI Robotics Integration & Autonomous Systems",
    description: "AI integration for industrial and commercial robotics — computer vision navigation, autonomous task planning, human-robot collaboration, and fleet management.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Robotics Integration & Autonomous Systems",
    description: "AI integration for industrial and commercial robotics — computer vision navigation, autonomous task planning, human-robot collaboration, and fleet management."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-robotics-integration',
    title: 'AI Robotics Integration & Autonomous Systems',
    description: 'AI integration for industrial and commercial robotics — computer vision navigation, autonomous task planning, human-robot collaboration, and fleet management.',
    features: ['Computer vision for robot navigation and obstacle avoidance', 'Autonomous task planning with reinforcement learning', 'Human-robot collaboration and safety monitoring', 'Multi-robot fleet management and coordination', 'Edge AI deployment for low-latency real-time control'],
    benefits: ['Automate complex physical workflows with AI robotics', 'Improve workplace safety with intelligent monitoring', 'Scale robot fleet operations without proportional overhead', 'Reduce cycle times by 40% with autonomous optimization'],
    pricing: { basic: '1499', pro: '3499', enterprise: '7999' },
    contactInfo: { website: '/ai-services/ai-robotics-integration', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '🤖',
    href: '/ai-services/ai-robotics-integration',
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

export default function AiRoboticsIntegrationAndAutonomousSystemsPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
