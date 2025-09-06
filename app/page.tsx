import React from 'react';
import Link from 'next/link';

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
}

function Card({ title, href, description, bullets, icon }: CardProps) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets && (
        <ul className="space-y-2 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="text-green-500 mr-2">✓</span>
              <span className="text-gray-600 text-sm">{bullet}</span>
            </li>
          ))}
        </ul>
      )}
      <Link
        href={href}
        className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        Learn More
      </Link>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section className="text-center py-12 md:py-20">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          Build and scale with{' '}
          <span className="text-blue-600">AI</span>,{' '}
          <span className="text-green-600">Micro SaaS</span>{' '}
          and{' '}
          <span className="text-purple-600">Enterprise IT</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
          We design, build and operate production-grade platforms: AI copilots, data/ML pipelines, 
          automation, cloud infrastructure, and secure micro SaaS products. Trusted by 500+ companies worldwide.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="border border-gray-300 text-gray-700 px-8 py-4 rounded-lg font-semibold hover:border-gray-400 transition-colors"
          >
            View Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card
              title="AI Solutions"
              href="/services/ai-services"
              description="Transform your business with cutting-edge artificial intelligence solutions"
              icon="🤖"
              bullets={[
                "Machine Learning Models",
                "Natural Language Processing",
                "Computer Vision",
                "Predictive Analytics",
                "AI Consulting"
              ]}
            />
            
            <Card
              title="Cybersecurity"
              href="/services/cybersecurity"
              description="Protect your digital assets with advanced security solutions"
              icon="🔒"
              bullets={[
                "Security Assessment",
                "Penetration Testing",
                "Incident Response",
                "Compliance Management",
                "24/7 Monitoring"
              ]}
            />
            
            <Card
              title="Cloud Infrastructure"
              href="/services/cloud-infrastructure"
              description="Scale your operations with robust cloud solutions"
              icon="☁️"
              bullets={[
                "Cloud Migration",
                "Infrastructure as Code",
                "Auto-scaling",
                "Disaster Recovery",
                "Cost Optimization"
              ]}
            />
            
            <Card
              title="Micro SaaS Development"
              href="/services/micro-saas"
              description="Build and launch your next micro SaaS product"
              icon="🚀"
              bullets={[
                "MVP Development",
                "API Integration",
                "Payment Processing",
                "User Management",
                "Analytics Dashboard"
              ]}
            />
            
            <Card
              title="Blockchain Solutions"
              href="/services/blockchain"
              description="Leverage blockchain technology for secure transactions"
              icon="⛓️"
              bullets={[
                "Smart Contracts",
                "DeFi Applications",
                "NFT Marketplaces",
                "Token Development",
                "Blockchain Consulting"
              ]}
            />
            
            <Card
              title="IT Services"
              href="/services/it-services"
              description="Comprehensive IT support and infrastructure management"
              icon="💻"
              bullets={[
                "System Administration",
                "Network Security",
                "Data Backup",
                "Technical Support",
                "IT Consulting"
              ]}
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss how we can help you achieve your technology goals
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
        </div>
      </section>
    </div>
  );
}