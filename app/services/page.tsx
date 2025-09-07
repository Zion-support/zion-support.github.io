import React from 'react';
import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  price?: string;
  features?: string[];
}

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};

function ServiceCard({ title, href, description, bullets = [], icon, price, features = [] }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {price && (
        <div className="text-lg font-bold text-blue-600 mb-4">Starting at {price}</div>
      )}
      {bullets.length > 0 && (
        <ul className="space-y-1 mb-4">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      {features.length > 0 && (
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
              {feature}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <div className="space-y-16">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive solutions to help your business scale and succeed. 
          From AI-powered applications to complete IT infrastructure.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard
          title="AI Services"
          href="/services/ai-services"
          description="Cutting-edge AI solutions including RAG, agents, fine-tuning, and MLOps for intelligent applications."
          price="$3,000"
          features={[
            "RAG systems",
            "AI agents",
            "Model fine-tuning",
            "MLOps pipelines",
            "AI evaluation",
            "AI consulting"
          ]}
          icon="🤖"
        />
        
        <ServiceCard
          title="Micro SaaS Development"
          href="/services/micro-saas"
          description="End-to-end micro SaaS development with billing, auth, analytics, and growth features."
          price="$5,000"
          features={[
            "MVP development",
            "Payment integration",
            "User analytics",
            "Security & auth",
            "Performance optimization",
            "Growth features"
          ]}
          icon="🚀"
        />
        
        <ServiceCard
          title="IT Services"
          href="/services/it-services"
          description="Complete IT infrastructure, cloud migration, DevOps, and security solutions."
          price="$8,000"
          features={[
            "Cloud migration",
            "DevOps & CI/CD",
            "Site reliability engineering",
            "Security solutions",
            "Infrastructure management",
            "Web development"
          ]}
          icon="💻"
        />
        
        <ServiceCard
          title="Data Analytics"
          href="/services/data-analytics"
          description="Transform your data into actionable insights with advanced analytics and business intelligence."
          price="$5,000"
          features={[
            "Business intelligence",
            "Data visualization",
            "Predictive analytics",
            "Data engineering",
            "Performance analytics",
            "Custom analytics"
          ]}
          icon="📊"
        />
        
        <ServiceCard
          title="Cybersecurity"
          href="/services/cybersecurity"
          description="Comprehensive security solutions including penetration testing, audits, and incident response."
          price="$8,000"
          features={[
            "Penetration testing",
            "Security audits",
            "Compliance management",
            "Incident response",
            "Vulnerability assessment",
            "Security consulting"
          ]}
          icon="🔒"
        />
        
        <ServiceCard
          title="Blockchain Solutions"
          href="/services/blockchain"
          description="Decentralized applications, smart contracts, and blockchain infrastructure development."
          price="$12,000"
          features={[
            "DeFi platforms",
            "NFT marketplaces",
            "Smart contract audits",
            "Token development",
            "DAO platforms",
            "Cross-chain bridges"
          ]}
          icon="⛓️"
        />
      </div>

      <div className="bg-blue-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
        <p className="text-gray-600 mb-6">
          Let's discuss your project and find the perfect solution for your business needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="mailto:kleber@ziontechgroup.com"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Free Consultation
          </a>
          <a
            href="tel:+13024640950"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
          >
            Call +1 302 464 0950
          </a>
        </div>
      </div>
    </div>
  );
}