import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI 1:1 Tutor for K–12 & Higher Ed — Zion Tech Group",
  description: "AI 1:1 Tutor for K–12 & Higher Ed",
  keywords: "AI services, IT services, AI 1:1 Tutor for K–12 & Higher Ed",
  openGraph: {
    title: "AI 1:1 Tutor for K–12 & Higher Ed",
    description: "AI 1:1 Tutor for K–12 & Higher Ed",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI 1:1 Tutor for K–12 & Higher Ed",
    description: "AI 1:1 Tutor for K–12 & Higher Ed"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-education-tutor',
    title: 'AI 1:1 Tutor for K–12 & Higher Ed',
    description: `Personalized learning companion that adapts to student's pace, identifies knowledge gaps, and provides Socratic questioning to deepen understanding.`,
    features: ["Curriculum-aligned (Common Core, IB, AP)", "Progress dashboards for parents/teachers", "Multilingual support (25 languages)", "Plagiarism-resistant homework assistance"],
    benefits: ["Improves test scores by 1\u20132 letter grades", "Reduces teacher workload", "Provides equitable access to tutoring"],
    pricing: {"basic":"299","pro":"799","enterprise":"2499"},
    contactInfo: {
      website: '/ai-services/ai-education-tutor',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🎓',
    href: '/ai-services/ai-education-tutor',
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

export default function Ai11TutorForKand12AndHigherEdPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
