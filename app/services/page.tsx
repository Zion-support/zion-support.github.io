import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: "Services | Zion Tech Group",
  description: "Comprehensive AI, micro SaaS, and IT services to help your business scale and succeed.",
};

interface ServiceCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  features: string[];
}

function ServiceCard({ title, description, href, icon, features }: ServiceCardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4">{icon}</span>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm text-gray-600">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
            {feature}
          </li>
        ))}
      </ul>
    </Link>
  );
}

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive solutions designed to accelerate your digital transformation. 
            From AI and micro SaaS to IT services, we provide everything you need to succeed.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <ServiceCard
            title="AI Services"
            href="/services/ai-services"
            description="Comprehensive AI solutions including RAG, agents, fine-tuning, and MLOps"
            icon="🤖"
            features={["RAG Systems", "AI Agents", "Fine-tuning", "MLOps", "AI Consulting"]}
          />
          
          <ServiceCard
            title="Micro SaaS"
            href="/services/micro-saas"
            description="Build and scale micro SaaS applications with our proven framework"
            icon="🚀"
            features={["MVP Development", "Full SaaS Platform", "Enterprise SaaS", "Growth Features"]}
          />
          
          <ServiceCard
            title="IT Services"
            href="/services/it-services"
            description="Enterprise IT solutions including cloud migration, DevOps, and SRE"
            icon="⚙️"
            features={["Cloud Migration", "DevOps & CI/CD", "SRE Implementation", "Infrastructure Management"]}
          />
          
          <ServiceCard
            title="Blockchain Solutions"
            href="/services/blockchain"
            description="Comprehensive blockchain development including DeFi, NFTs, and Web3"
            icon="⛓️"
            features={["Smart Contracts", "DeFi Protocols", "NFT Marketplaces", "Web3 Applications"]}
          />
          
          <ServiceCard
            title="Cybersecurity"
            href="/services/cybersecurity"
            description="Comprehensive security solutions and compliance management"
            icon="🔒"
            features={["Penetration Testing", "Security Audits", "Incident Response", "Compliance Management"]}
          />
          
          <ServiceCard
            title="Data Analytics"
            href="/services/data-analytics"
            description="Advanced analytics and business intelligence solutions"
            icon="📊"
            features={["Business Intelligence", "Data Engineering", "Machine Learning Analytics", "Real-time Analytics"]}
          />
        </div>
        
        <div className="bg-white rounded-lg shadow-md p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6 text-center">Why Choose Zion Tech Group?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
              <p className="text-gray-600">We deliver solutions faster without compromising quality</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🔧</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
              <p className="text-gray-600">Our team combines deep technical expertise with business acumen</p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">📈</div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Proven Results</h3>
              <p className="text-gray-600">We've helped 500+ companies achieve their digital transformation goals</p>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how our services can help transform your business.
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </main>
  );
}