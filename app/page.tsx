import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata = {
  title: 'Zion Tech Group - AI, Micro SaaS & IT Solutions',
  description: 'Leading provider of enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
  keywords: 'AI services, micro SaaS, IT solutions, enterprise technology, automation',
  openGraph: {
    title: 'Zion Tech Group - AI, Micro SaaS & IT Solutions',
    description: 'Leading provider of enterprise-grade AI, micro SaaS, and IT solutions that drive real business results.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
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
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="flex items-center text-sm text-gray-500">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

export default function HomePage() {
  const services = [
    {
      title: 'AI Services',
      href: '/services/ai-services',
      description: 'Comprehensive AI solutions for your business needs',
      bullets: ['Machine Learning', 'Natural Language Processing', 'Computer Vision'],
      icon: '🤖'
    },
    {
      title: 'Micro SaaS',
      href: '/services/micro-saas',
      description: 'Scalable software solutions for modern businesses',
      bullets: ['Custom Development', 'API Integration', 'Cloud Deployment'],
      icon: '⚡'
    },
    {
      title: 'IT Services',
      href: '/services/it-services',
      description: 'Complete IT infrastructure and support services',
      bullets: ['Infrastructure Management', 'Security Solutions', 'Technical Support'],
      icon: '💻'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Leading provider of enterprise-grade AI, micro SaaS, and IT solutions 
              that drive real business results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/services"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Explore Services
              </Link>
              <Link
                href="/contact"
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card key={index} {...service} />
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI, micro SaaS, and IT solutions can drive your business forward.
            </p>
            <Link
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Contact Us Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}