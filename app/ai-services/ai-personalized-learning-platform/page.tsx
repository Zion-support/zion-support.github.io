import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Personalized Learning Platform — Zion Tech Group",
  description: "Adaptive learning paths powered by AI: skill gap analysis, micro-lesson generation, progress tracking, and competency-based assessments.",
  keywords: "AI services, IT services, AI Personalized Learning Platform",
  openGraph: {
    title: "AI Personalized Learning Platform",
    description: "Adaptive learning paths powered by AI: skill gap analysis, micro-lesson generation, progress tracking, and competency-based assessments.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Personalized Learning Platform",
    description: "Adaptive learning paths powered by AI: skill gap analysis, micro-lesson generation, progress tracking, and competency-based assessments."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-personalized-learning',
    title: 'AI Personalized Learning Platform',
    description: 'Adaptive learning paths powered by AI: skill gap analysis, micro-lesson generation, progress tracking, and competency-based assessments.',
    features: [
      'Skill assessment & gap analysis',
      'Personalized learning path generation',
      'Auto-generated micro-lessons (5–10 min)',
      'Progress analytics & leaderboards',
      'Integration with LMS (SCORM, xAPI)'
    ],
    benefits: [
      'Increase training completion rates by 60%',
      'Reduce training development time by 80%',
      'Personalize at scale for 1000s of employees',
      'Maintain compliance certifications'
    ],
    pricing: {
      basic: '299',
      pro: '799',
      enterprise: '2499'
    },
    contactInfo: {
      website: '/ai-services/ai-personalized-learning',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎓',
    href: '/ai-services/ai-personalized-learning',
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

export default function AiPersonalizedLearningPlatformPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
