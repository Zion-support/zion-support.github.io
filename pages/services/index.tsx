import Head from 'next/head';
import Link from 'next/link';
const Services: NextPage = () => {
  const serviceCategories = [
    {
      title: "AI & Machine Learning Services",
      description: "Cutting-edge AI solutions to transform your business",
      services: [
        { name: "AI Model Development", href: "/services/ai-model-development", price: "Starting at $2,500/month" },
        { name: "Chatbot Development", href: "/services/ai-chatbot-development", price: "Starting at $1,200/month" },
        { name: "Predictive Analytics", href: "/services/predictive-analytics", price: "Starting at $3,000/month" },
        { name: "Computer Vision", href: "/services/computer-vision", price: "Starting at $4,000/month" },
        { name: "Natural Language Processing", href: "/services/nlp-services", price: "Starting at $2,800/month" },
        { name: "AI-Powered Document Processing", href: "/services/ai-document-processing", price: "Starting at $1,800/month" },
        { name: "Intelligent Recommendation Systems", href: "/services/recommendation-systems", price: "Starting at $3,500/month" },
        { name: "AI Voice Assistants", href: "/services/ai-voice-assistants", price: "Starting at $2,200/month" }
      ]
    },
    {
      title: "Cloud & Infrastructure Services",
      description: "Scalable cloud solutions for modern businesses",
      services: [
        { name: "Cloud Migration", href: "/services/cloud-migration", price: "Starting at $5,000/project" },
        { name: "DevOps Automation", href: "/services/devops-automation", price: "Starting at $3,500/month" },
        { name: "Container Orchestration", href: "/services/container-orchestration", price: "Starting at $2,200/month" },
        { name: "Serverless Architecture", href: "/services/serverless-architecture", price: "Starting at $1,800/month" },
        { name: "Cloud Security", href: "/services/cloud-security", price: "Starting at $2,500/month" }
      ]
    },
    {
      title: "Software Development Services",
      description: "Custom software solutions tailored to your needs",
      services: [
        { name: "Web Application Development", href: "/services/web-development", price: "Starting at $4,000/project" },
        { name: "Mobile App Development", href: "/services/mobile-development", price: "Starting at $6,000/project" },
        { name: "API Development", href: "/services/api-development", price: "Starting at $2,000/project" },
        { name: "Microservices Architecture", href: "/services/microservices", price: "Starting at $8,000/project" },
        { name: "Legacy System Modernization", href: "/services/legacy-modernization", price: "Starting at $10,000/project" }
      ]
    },
    {
      title: "Data & Analytics Services",
      description: "Transform data into actionable business insights",
      services: [
        { name: "Data Pipeline Engineering", href: "/services/data-pipeline-engineering", price: "Starting at $3,500/month" },
        { name: "Business Intelligence", href: "/services/business-intelligence", price: "Starting at $2,800/month" },
        { name: "Real-time Analytics", href: "/services/real-time-analytics", price: "Starting at $4,200/month" },
        { name: "Data Visualization", href: "/services/data-visualization", price: "Starting at $2,000/project" },
        { name: "Database Design", href: "/services/database-design", price: "Starting at $1,500/project" }
      ]
    },
    {
      title: "Security & Compliance Services",
      description: "Protect your business with enterprise-grade security",
      services: [
        { name: "Security Auditing", href: "/services/security-auditing", price: "Starting at $3,000/audit" },
        { name: "Network Security", href: "/services/network-security", price: "Starting at $2,500/month" },
        { name: "Compliance Management", href: "/services/compliance-management", price: "Starting at $4,000/month" },
        { name: "Penetration Testing", href: "/services/penetration-testing", price: "Starting at $5,000/test" },
        { name: "Security Training", href: "/services/security-training", price: "Starting at $1,500/session" }
      ]
    },
    {
      title: "Automation & Integration Services",
      description: "Streamline operations with intelligent automation",
      services: [
        { name: "Workflow Automation", href: "/services/workflow-automation", price: "Starting at $2,000/month" },
        { name: "System Integration", href: "/services/system-integration", price: "Starting at $3,500/project" },
        { name: "RPA Solutions", href: "/services/rpa-solutions", price: "Starting at $4,500/month" },
        { name: "API Integration", href: "/services/api-integration", price: "Starting at $1,800/project" },
        { name: "Process Optimization", href: "/services/process-optimization", price: "Starting at $2,200/month" }
      ]
    },
    {
      title: "Micro SAAS Solutions",
      description: "Innovative micro applications for modern businesses",
      services: [
        { name: "Smart URL Shortener", href: "/services/url-shortener", price: "$29/month" },
        { name: "AI Invoice Generator", href: "/services/invoice-generator", price: "$49/month" },
        { name: "Enterprise Password Manager", href: "/services/password-manager", price: "$79/month" },
        { name: "Business Analytics Dashboard", href: "/services/analytics-dashboard", price: "$99/month" },
        { name: "Task Management System", href: "/services/task-management", price: "$39/month" },
        { name: "Email Marketing Automation", href: "/services/email-marketing", price: "$59/month" },
        { name: "Social Media Scheduler", href: "/services/social-scheduler", price: "$69/month" },
        { name: "Customer Support Ticketing", href: "/services/support-ticketing", price: "$89/month" }
      ]
    },
    {
      title: "Blockchain & Web3 Services",
      description: "Next-generation decentralized solutions",
      services: [
        { name: "Smart Contract Development", href: "/services/smart-contracts", price: "Starting at $5,000/project" },
        { name: "DeFi Platform Development", href: "/services/defi-platform", price: "Starting at $15,000/project" },
        { name: "NFT Marketplace Development", href: "/services/nft-marketplace", price: "Starting at $8,000/project" },
        { name: "Cryptocurrency Wallet Development", href: "/services/crypto-wallet", price: "Starting at $6,000/project" },
        { name: "Blockchain Consulting", href: "/services/blockchain-consulting", price: "Starting at $200/hour" }
      ]
    }
  ];
=======
import { enhancedRealMicroSaasServices } from '../../data/enhanced-real-micro-saas-services';
import { additionalEnhancedServices } from '../../data/additional-real-services';
import { extraServices } from '../../data/extra-services';
import { newlyAddedServices } from '../../data/newly-added-services';
import { curatedMarketServices } from '../../data/curated-market-services';
import { realMarketServices } from '../../data/real-market-services';
import { new2025Services } from '../../data/new-2025-services';
import { marketValidatedServices } from '../../data/market-validated-services';
import { moreRealServices2025 } from '../../data/more-real-services-2025';
import { realOperationalServices } from '../../data/real-operational-services';
import { verified2025Additions } from '../../data/verified-2025-additions';
import { realServicesQ12025 } from '../../data/real-services-q1-2025';
import { realEnterpriseServices2025 } from '../../data/real-enterprise-services-2025';
import { realMarketAugmentations2025 } from '../../data/real-market-augmentations-2025';
import { verifiedRealServices2025Batch2 } from '../../data/verified-real-services-2025-batch2';
import { additionalLiveServices2025 } from '../../data/additional-live-services-2025';
import { real2025Q2Additions } from '../../data/real-2025-q2-additions';
import { real2025Q3Additions } from '../../data/real-2025-q3-additions';

function toSlug(value: string) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

const categories = [
  'AI & Data',
  'Developer Tools',
  'Cloud & FinOps',
  'Observability',
  'Quality & Monitoring',
];

export default function ServicesIndexPage() {
  const all = (enhancedRealMicroSaasServices as unknown[])
    .concat(
      extraServices as unknown[],
      additionalEnhancedServices as unknown[],
      newlyAddedServices as unknown[],
      curatedMarketServices as unknown[],
      realMarketServices as unknown[],
      new2025Services as unknown[],
      marketValidatedServices as unknown[],
      moreRealServices2025 as unknown[],
      realOperationalServices as unknown[],
      verified2025Additions as unknown[],
      realServicesQ12025 as unknown[],
      realEnterpriseServices2025 as unknown[],
      realMarketAugmentations2025 as unknown[],
      verifiedRealServices2025Batch2 as unknown[],
      additionalLiveServices2025 as unknown[],
      real2025Q2Additions as unknown[],
      real2025Q3Additions as unknown[]
    )
    .filter((item: any) => item && item.name && item.description);

  const anchorMap: Record<string, string> = {
    'AI & Data': 'ai',
    'Developer Tools': 'developer-tools',
    'Cloud & FinOps': 'cloud',
    'Observability': 'observability',
    'Quality & Monitoring': 'quality',
  };

export default function ServicesIndex() {
  return (
    <>
      <Head>
        <title>Our Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI development, cloud solutions, software development, data analytics, security, and automation services. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI services, cloud solutions, software development, data analytics, cybersecurity, automation, micro SAAS, technology consulting" />
      </Head>
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive IT solutions and services to help your business thrive in the digital age
            </p>
          </div>

          {categories.map((category) => (
            <div key={category} className="mb-12">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b-2 border-blue-500 pb-2">
                {category}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {grouped[category]?.map((service: any) => (
                  <div
                    key={service.id || service.name}
                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {service.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-blue-600">
                        {service.price}
                      </span>
                      <Link
                        href={`/services/${toSlug(service.name)}`}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200"
                      >
                        Learn More
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div className="text-center mt-12">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 text-lg font-semibold"
            >
              Get Started Today
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
=======
        <title>Services — Zion Tech Solutions</title>
        <meta name="description" content="AI development, cloud, data analytics, and blockchain services." />
      </Head>
      <h1 className="text-3xl font-bold mb-6">Services</h1>
      <ul className="grid md:grid-cols-2 gap-4">
        <li className="enhanced-card"><Link href="/services/ai-development"><a className="underline">AI Development</a></Link></li>
        <li className="enhanced-card"><Link href="/services/cloud-services"><a className="underline">Cloud & MLOps</a></Link></li>
        <li className="enhanced-card"><Link href="/services/data-analytics"><a className="underline">Data Analytics</a></Link></li>
        <li className="enhanced-card"><Link href="/services/blockchain"><a className="underline">Web3 & Blockchain</a></Link></li>
      </ul>
    </div>
  );
}
