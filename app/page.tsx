import React from 'react';
import Link from 'next/link';

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

export default function HomePage() {
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
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-blue-600 block">Cutting-Edge Technology</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We specialize in AI solutions, micro SaaS development, IT services, and blockchain technology 
            to help businesses innovate and scale efficiently.
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
              View Our Services
            </Link>
          </div>
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

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Let's discuss your project and discover how our solutions can accelerate your growth.
          </p>
          <Link
            href="/contact"
            className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </div>
  );
}