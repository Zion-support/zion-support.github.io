import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

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
}

function Card({ title, href, description, bullets = [], icon }: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-200 hover:border-blue-300"
    >
      <div className="flex items-start space-x-4">
        {icon && (
          <div className="flex-shrink-0 w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
            <span className="text-blue-600 text-lg">{icon}</span>
          </div>
        )}
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-600 mb-3">{description}</p>
          {bullets.length > 0 && (
            <ul className="space-y-1">
              {bullets.map((bullet, index) => (
                <li key={index} className="text-sm text-gray-500 flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  {bullet}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  const services = [
    {
      title: 'AI Solutions',
      href: '/services/ai-solutions',
      description: 'Cutting-edge artificial intelligence solutions for enterprise needs',
      bullets: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      icon: '🤖'
    },
    {
      title: 'Micro SaaS Development',
      href: '/services/micro-saas',
      description: 'Scalable micro SaaS applications for modern businesses',
      bullets: ['Rapid Development', 'Cloud-Native', 'API-First', 'Scalable Architecture'],
      icon: '⚡'
    },
    {
      title: 'IT Services',
      href: '/services/it-services',
      description: 'Comprehensive IT services and infrastructure solutions',
      bullets: ['Cloud Migration', 'DevOps', 'Security', 'Monitoring'],
      icon: '🔧'
    },
    {
      title: 'Blockchain Solutions',
      href: '/services/blockchain',
      description: 'Decentralized applications and blockchain infrastructure',
      bullets: ['Smart Contracts', 'DeFi', 'NFTs', 'Web3'],
      icon: '⛓️'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise AI & IT Solutions
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Leading provider of enterprise-grade AI solutions, micro SaaS development, and IT services. 
              Transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Let's discuss how our AI and IT solutions can drive your success
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}