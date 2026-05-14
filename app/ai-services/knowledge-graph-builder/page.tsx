import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Knowledge Graph Builder — Zion Tech Group",
  description: "Knowledge Graph Builder",
  keywords: "AI services, IT services, Knowledge Graph Builder",
  openGraph: {
    title: "Knowledge Graph Builder",
    description: "Knowledge Graph Builder",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Knowledge Graph Builder",
    description: "Knowledge Graph Builder"
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'ai-knowledge-graph-builder',
    title: 'Knowledge Graph Builder',
    description: `Automatically structure unstructured data into queryable knowledge graph. Entity extraction, relationship mapping, semantic search.`,
    features: ["Entity extraction (NER)", "Relationship inference", "Semantic search", "Graph visualization", "REST API + GraphQL"],
    benefits: ["Find any fact in seconds", "Surface hidden connections", "Power AI agents with your data"],
    pricing: {"basic":"199","pro":"499","enterprise":"1299"},
    contactInfo: {
      website: '/ai-services/ai-knowledge-graph-builder',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 302 464 0950'
    },
    icon: '🕸️',
    href: '/ai-services/ai-knowledge-graph-builder',
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

export default function KnowledgeGraphBuilderPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
