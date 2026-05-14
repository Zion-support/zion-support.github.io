import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "AI Knowledge Base & Knowledge Graph Agent — Zion Tech Group",
  description: "Turn your documents, wikis, and internal data into an intelligent, queryable knowledge graph with conversational AI search and automated content synchronization.",
  keywords: "AI services, IT services, AI Knowledge Base & Knowledge Graph Agent",
  openGraph: {
    title: "AI Knowledge Base & Knowledge Graph Agent",
    description: "Turn your documents, wikis, and internal data into an intelligent, queryable knowledge graph with conversational AI search and automated content synchronization.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Knowledge Base & Knowledge Graph Agent",
    description: "Turn your documents, wikis, and internal data into an intelligent, queryable knowledge graph with conversational AI search and automated content synchronization."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-knowledge-base-agent',
    title: 'AI Knowledge Base & Knowledge Graph Agent',
    description: 'Turn your documents, wikis, and internal data into an intelligent, queryable knowledge graph with conversational AI search and automated content synchronization.',
    features: [
      'Multi-source document ingestion (PDF, DOC, Confluence, Notion)',
      'Semantic search with natural language queries',
      'Automated knowledge graph construction',
      'Answer citation & source linking',
      'Real-time sync with source systems'
    ],
    benefits: [
      'Cut research time by 80%',
      'Eliminate knowledge silos',
      'Onboard new hires 3x faster',
      'Maintain a single source of truth'
    ],
    pricing: {
      basic: '299',
      pro: '699',
      enterprise: '1999'
    },
    contactInfo: {
      website: '/ai-services/ai-knowledge-base-agent',
      email: 'commercial@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '📚',
    href: '/ai-services/ai-knowledge-base-agent',
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

export default function AiKnowledgeBaseAndKnowledgeGraphAgentPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
