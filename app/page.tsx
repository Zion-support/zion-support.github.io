import React from 'react';
import Link from 'next/link';
import {
  LightBulbIcon,
  CpuChipIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  UserGroupIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  StarIcon,
  RocketLaunchIcon
} from '@heroicons/react/24/outline';

interface CardProps {
  title: string;
  href: string;
  description: string;
  bullets?: string[];
  icon?: React.ReactNode;
}

function ServiceCard({
  title,
  href,
  description,
  bullets = [],
  icon,
}: CardProps) {
  return (
    <Link
      href={href}
      className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      aria-label={`Learn more about ${title} services`}
    >
      <div className="flex items-center mb-4">
        {icon && <span className="text-2xl mr-3" aria-hidden="true">{icon}</span>}
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
      </div>
      <p className="text-gray-600 leading-relaxed mb-4">{description}</p>
      {bullets.length > 0 && (
        <ul className="space-y-1" role="list">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm text-gray-600 flex items-center">
              <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0" aria-hidden="true"></span>
              {bullet}
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
}

export const metadata = {
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

export default function Home() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg" role="banner" aria-labelledby="hero-title">
        <h1 id="hero-title" className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Enterprise AI & IT Solutions
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
          Transform your business with cutting-edge AI solutions, micro SaaS development, and enterprise-grade IT services. 
          We deliver 500+ specialized services to accelerate your digital transformation.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Get started with our services"
          >
            Get Started
          </Link>
          <Link
            href="/services"
            className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Explore our services"
          >
            Explore Services
          </Link>
        </div>
      </section>

      {/* Key Services */}
      <section className="py-12" role="region" aria-labelledby="services-title">
        <div className="text-center mb-12">
          <h2 id="services-title" className="text-3xl font-bold text-gray-900 mb-4">Our Core Services</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comprehensive solutions designed to drive innovation and growth across all industries.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Solutions"
            href="/services/ai-services"
            description="Advanced artificial intelligence solutions including machine learning, natural language processing, and predictive analytics."
            bullets={[
              "Machine Learning Models",
              "Natural Language Processing",
              "Predictive Analytics",
              "Computer Vision"
            ]}
            icon={<CpuChipIcon className="w-8 h-8 text-blue-600" />}
          />
          <ServiceCard
            title="Micro SaaS Development"
            href="/services/micro-saas"
            description="Build and scale micro SaaS applications with modern technologies and best practices."
            bullets={[
              "Custom SaaS Applications",
              "API Development",
              "Cloud Integration",
              "Scalable Architecture"
            ]}
            icon={<RocketLaunchIcon className="w-8 h-8 text-green-600" />}
          />
          <ServiceCard
            title="IT Services"
            href="/services/it-services"
            description="Comprehensive IT services including infrastructure management, cybersecurity, and cloud solutions."
            bullets={[
              "Infrastructure Management",
              "Cybersecurity Solutions",
              "Cloud Migration",
              "DevOps & SRE"
            ]}
            icon={<ShieldCheckIcon className="w-8 h-8 text-purple-600" />}
          />
          <ServiceCard
            title="Blockchain Solutions"
            href="/services/blockchain-solutions"
            description="Enterprise blockchain solutions including smart contracts, DeFi platforms, and Web3 applications."
            bullets={[
              "Smart Contract Development",
              "DeFi Platforms",
              "Web3 Applications",
              "Token Economics"
            ]}
            icon={<GlobeAltIcon className="w-8 h-8 text-orange-600" />}
          />
          <ServiceCard
            title="Data Analytics"
            href="/services/data-analytics"
            description="Transform your data into actionable insights with advanced analytics and business intelligence solutions."
            bullets={[
              "Business Intelligence",
              "Data Visualization",
              "Real-time Analytics",
              "Data Engineering"
            ]}
            icon={<ChartBarIcon className="w-8 h-8 text-red-600" />}
          />
          <ServiceCard
            title="Consulting"
            href="/contact"
            description="Strategic technology consulting to help you make informed decisions and optimize your digital transformation."
            bullets={[
              "Technology Strategy",
              "Digital Transformation",
              "Process Optimization",
              "Change Management"
            ]}
            icon={<UserGroupIcon className="w-8 h-8 text-indigo-600" />}
          />
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 bg-gray-50 rounded-lg" role="region" aria-labelledby="why-choose-title">
        <div className="text-center mb-12">
          <h2 id="why-choose-title" className="text-3xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We combine deep technical expertise with business acumen to deliver solutions that drive real results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <LightBulbIcon className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Cutting-edge technologies and innovative approaches to solve complex business challenges.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircleIcon className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Enterprise-grade solutions built with attention to detail and rigorous quality standards.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <StarIcon className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Expertise</h3>
            <p className="text-gray-600">Deep technical expertise across AI, cloud computing, blockchain, and enterprise software.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <ArrowRightIcon className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Results</h3>
            <p className="text-gray-600">Proven track record of delivering measurable business value and ROI for our clients.</p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-blue-600 rounded-lg text-white text-center" role="region" aria-labelledby="cta-title">
        <h2 id="cta-title" className="text-3xl font-bold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Let&apos;s discuss how our AI and IT solutions can accelerate your digital transformation and drive growth.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            aria-label="Contact us to get started"
          >
            Contact Us
          </Link>
          <Link
            href="/services"
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            aria-label="View all our services"
          >
            View All Services
          </Link>
        </div>
      </section>
    </div>
  );
}