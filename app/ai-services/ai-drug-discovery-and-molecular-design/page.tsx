import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Drug Discovery & Molecular Design — Zion Tech Group",
  description: "Accelerate pharmaceutical R&D with AI-powered molecular simulation, target identification, toxicity prediction, and clinical trial optimization.",
  keywords: "AI services, IT services, AI Drug Discovery & Molecular Design",
  openGraph: {
    title: "AI Drug Discovery & Molecular Design",
    description: "Accelerate pharmaceutical R&D with AI-powered molecular simulation, target identification, toxicity prediction, and clinical trial optimization.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Drug Discovery & Molecular Design",
    description: "Accelerate pharmaceutical R&D with AI-powered molecular simulation, target identification, toxicity prediction, and clinical trial optimization."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-drug-discovery',
    title: 'AI Drug Discovery & Molecular Design',
    description: 'Accelerate pharmaceutical R&D with AI-powered molecular simulation, target identification, toxicity prediction, and clinical trial optimization.',
    features: ['De novo molecular design with generative AI', 'Protein-ligand binding affinity prediction', 'ADMET toxicity and pharmacokinetics modeling', 'Clinical trial cohort matching and optimization', 'Multi-target drug candidate screening'],
    benefits: ['Reduce drug discovery timelines from 12 to 4 years', 'Cut R&D costs by 60% with AI-guided candidate selection', 'Predict toxicity before expensive animal studies', 'Increase first-in-human trial success rates'],
    pricing: { basic: '2999', pro: '6999', enterprise: '16999' },
    contactInfo: { website: '/ai-services/ai-drug-discovery', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '💊',
    href: '/ai-services/ai-drug-discovery',
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

export default function AiDrugDiscoveryAndMolecularDesignPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
