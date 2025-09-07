import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive AI solutions, micro SaaS development, and enterprise IT services.',
  keywords: 'AI solutions, micro SaaS, IT services, enterprise software, blockchain, cloud computing',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Services | Zion Tech Group',
    description: 'Comprehensive AI solutions, micro SaaS development, and enterprise IT services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Services | Zion Tech Group',
    description: 'Comprehensive AI solutions, micro SaaS development, and enterprise IT services.',
  },
};

// ServiceCard component
function ServiceCard({ title, description, bullets, icon, href }: {
  title: string;
  description: string;
  bullets: string[];
  icon: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transform hover:-translate-y-2 hover:scale-105"
    >
      <div className="flex items-center mb-4">
        <span className="text-3xl mr-4 group-hover:scale-110 transition-transform duration-300" aria-hidden="true">
          {icon}
        </span>
        <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4 group-hover:text-gray-700 transition-colors duration-300">
        {description}
      </p>
      <ul className="space-y-2" role="list">
        {bullets.map((bullet, index) => (
          <li key={index} className="text-sm text-gray-600 flex items-center group-hover:text-gray-700 transition-colors duration-300">
            <span className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0 group-hover:bg-blue-600 transition-colors duration-300" aria-hidden="true"></span>
            {bullet}
          </li>
        ))}
      </ul>
      <div className="mt-4 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors duration-300">
        Learn more →
      </div>
    </Link>
  );
}

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations.',
      icon: '🤖',
      href: '/services/ai-services',
      bullets: [
        'AI Chatbot Builder',
        'AI Content Generator',
        'AI Customer Support',
        'AI Data Analytics',
        'AI Marketing Automation'
      ]
    },
    {
      title: 'Micro SaaS Solutions',
      description: 'Scalable micro SaaS applications built for modern businesses.',
      icon: '🚀',
      href: '/services/micro-saas',
      bullets: [
        'Custom Web Applications',
        'API Development',
        'Database Design',
        'User Authentication',
        'Payment Integration'
      ]
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services and infrastructure solutions.',
      icon: '💻',
      href: '/services/it-services',
      bullets: [
        'System Administration',
        'Network Security',
        'Cloud Migration',
        'DevOps Automation',
        'Technical Support'
      ]
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your digital assets.',
      icon: '🔒',
      href: '/services/cybersecurity',
      bullets: [
        'Security Audits',
        'Penetration Testing',
        'Compliance Consulting',
        'Incident Response',
        'Security Training'
      ]
    },
    {
      title: 'Cloud Solutions',
      description: 'Scalable cloud infrastructure and management services.',
      icon: '☁️',
      href: '/services/cloud-solutions',
      bullets: [
        'AWS/Azure/GCP Migration',
        'Container Orchestration',
        'CI/CD Pipelines',
        'Monitoring & Logging',
        'Cost Optimization'
      ]
    },
    {
      title: 'Blockchain Solutions',
      description: 'Smart contracts and blockchain integration services.',
      icon: '⛓️',
      href: '/services/blockchain-solutions',
      bullets: [
        'Smart Contract Development',
        'DeFi Protocols',
        'NFT Marketplaces',
        'Token Economics',
        'Security Auditing'
      ]
    },
    {
      title: 'Data Analytics',
      description: 'Transform raw data into actionable business insights.',
      icon: '📊',
      href: '/services/data-analytics',
      bullets: [
        'Data Warehousing',
        'Business Intelligence',
        'Real-time Dashboards',
        'Predictive Modeling',
        'Data Visualization'
      ]
    },
    {
      title: 'DevOps Automation',
      description: 'Streamline your development and deployment processes.',
      icon: '⚙️',
      href: '/services/devops-automation',
      bullets: [
        'CI/CD Pipeline Setup',
        'Infrastructure as Code',
        'Automated Testing',
        'Monitoring Solutions',
        'Performance Optimization'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI solutions, micro SaaS development, and enterprise IT services
            designed to transform your business and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              bullets={service.bullets}
              icon={service.icon}
              href={service.href}
            />
          ))}
        </div>

        <div className="text-center bg-white rounded-xl shadow-lg p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and discover how our services can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Contact Us
            </Link>
            <Link
              href="/solutions"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}