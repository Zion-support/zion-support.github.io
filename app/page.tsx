import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Zion Tech Group - Enterprise AI & IT Solutions | Micro SaaS Development',
  description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services. 500+ services including AI automation, blockchain solutions, and cloud infrastructure.',
  keywords: 'AI solutions, micro SaaS, IT services, enterprise software, blockchain, cloud computing, automation, machine learning, software development',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.',
    type: 'website',
    locale: 'en_US',
    siteName: 'Zion Tech Group',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group - Enterprise AI & IT Solutions',
    description: 'Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: string;
  pricing?: string;
}

function ServiceCard({
  title,
  href,
  description,
  bullets = [],
  icon,
  pricing,
}: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Learn more about ${title} services`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          {icon && <span className="text-2xl mr-3" aria-hidden="true">{icon}</span>}
          <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        </div>
        {pricing && (
          <span className="text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded">
            {pricing}
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets && (
        <ul className="space-y-2 mb-6">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center text-sm text-gray-600">
              <span className="text-green-500 mr-2">✓</span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
      <div className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
        Learn more →
      </div>
    </Link>
  );
}

export default function Home() {
  const services = [
    {
      title: 'AI Solutions',
      href: '/services/ai-solutions',
      description: 'Transform your business with cutting-edge AI technologies including machine learning, natural language processing, and computer vision.',
      bullets: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots & Virtual Assistants'
      ],
      icon: '🤖',
      pricing: 'Starting at $5K'
    },
    {
      title: 'Micro SaaS Development',
      href: '/services/micro-saas',
      description: 'Build and launch your own micro SaaS products with our full-stack development expertise and proven business models.',
      bullets: [
        'Full-Stack Development',
        'API Integration',
        'Payment Processing',
        'User Management',
        'Analytics & Reporting'
      ],
      icon: '💼',
      pricing: 'Starting at $10K'
    },
    {
      title: 'IT Services',
      href: '/services/it-solutions',
      description: 'Comprehensive IT solutions including cloud migration, cybersecurity, infrastructure management, and technical support.',
      bullets: [
        'Cloud Migration',
        'Cybersecurity',
        'Infrastructure Management',
        'Technical Support',
        'System Integration'
      ],
      icon: '⚙️',
      pricing: 'Starting at $3K'
    },
    {
      title: 'Blockchain Solutions',
      href: '/services/blockchain',
      description: 'Leverage blockchain technology for secure, transparent, and decentralized applications across various industries.',
      bullets: [
        'Smart Contracts',
        'DeFi Applications',
        'NFT Marketplaces',
        'Blockchain Integration',
        'Cryptocurrency Development'
      ],
      icon: '⛓️',
      pricing: 'Starting at $15K'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg" role="banner">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Zion Tech Group
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services.
          Empowering businesses with cutting-edge technology that drives innovation and transforms operations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get Started Today
          </Link>
          <Link
            href="/services"
            className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            View All Services
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our comprehensive range of technology services designed to meet your specific business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how we can help you achieve your technology goals
          </p>
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  );
}