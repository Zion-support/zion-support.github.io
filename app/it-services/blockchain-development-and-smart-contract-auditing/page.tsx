import ServiceLayout from '../../components/ServiceLayout';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Blockchain Development & Smart Contract Auditing — Zion Tech Group",
  description: "End-to-end blockchain solution development — smart contract creation, security auditing, tokenomics design, and Web3 integration for enterprises.",
  keywords: "AI services, IT services, Blockchain Development & Smart Contract Auditing",
  openGraph: {
    title: "Blockchain Development & Smart Contract Auditing",
    description: "End-to-end blockchain solution development — smart contract creation, security auditing, tokenomics design, and Web3 integration for enterprises.",
    type: "website",
    locale: "en_US",
    siteName: "Zion Tech Group"
  },
  twitter: {
    card: "summary_large_image",
    title: "Blockchain Development & Smart Contract Auditing",
    description: "End-to-end blockchain solution development — smart contract creation, security auditing, tokenomics design, and Web3 integration for enterprises."
  },
  robots: {
    index: true,
    follow: true
  }
};

const service =   {
    id: 'it-blockchain-development',
    title: 'Blockchain Development & Smart Contract Auditing',
    description: 'End-to-end blockchain solution development — smart contract creation, security auditing, tokenomics design, and Web3 integration for enterprises.',
    features: ['Smart contract development and deployment', 'Formal verification and security auditing', 'Tokenomics and governance design', 'DeFi protocol integration and development', 'Enterprise blockchain consulting and strategy'],
    benefits: ['Launch secure blockchain products faster', 'Prevent exploits with formal verification', 'Access decentralized finance opportunities', 'Enterprise-grade blockchain integration'],
    pricing: { basic: '4999', pro: '9999', enterprise: '24999' },
    contactInfo: { website: '/it-services/blockchain-development', email: 'commercial@ziontechgroup.com', phone: '+1 302 464 0950' },
    icon: '⛓️',
    href: '/it-services/blockchain-development',
    category: 'it'
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

export default function BlockchainDevelopmentAndSmartContractAuditingPage() {
  return (
    <ServiceLayout service={mergedService} />
  );
}
