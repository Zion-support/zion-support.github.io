import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata = {
  title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
  description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group. Competitive pricing, proven ROI, and expert implementation.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, SRE, enterprise software, competitive pricing',
  authors: [{ name: 'Zion Tech Group' }],
  openGraph: {
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
    url: 'https://ziontechgroup.com',
    siteName: 'Zion Tech Group',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Zion Tech Group — AI, Micro SaaS, and IT Services',
    description: 'Enterprise-grade AI, micro SaaS, and IT solutions. Build faster with Zion Tech Group.',
  },
};

export default function HomePage() {
  const featuredServices = [
    {
      title: 'Comprehensive AI Services',
      description: 'Full-spectrum AI solutions including machine learning, NLP, computer vision, and autonomous systems',
      icon: '🧠',
      href: '/services/ai-services-comprehensive',
      pricing: 'Starting from $2,500/project',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Autonomous Systems'],
      benefits: ['95% accuracy rate', '300% average ROI', 'Real-time processing']
    },
    {
      title: 'Advanced Micro SaaS Solutions',
      description: 'Cutting-edge micro SaaS platforms designed to solve specific business challenges with AI-powered automation',
      icon: '🚀',
      href: '/services/advanced-micro-saas-solutions',
      pricing: 'Starting from $199/month',
      features: ['Content Creation Suite', 'Inventory Management', 'Customer Support AI', 'Financial Analytics'],
      benefits: ['75% time reduction', '400% average ROI', 'Automated workflows']
    },
    {
      title: 'Complete IT Services',
      description: 'Comprehensive IT services including cloud migration, DevOps, cybersecurity, and digital transformation',
      icon: '💻',
      href: '/services/it-services-comprehensive',
      pricing: 'Starting from $1,500/month',
      features: ['Cloud Migration', 'DevOps Implementation', 'Cybersecurity', 'Infrastructure Management'],
      benefits: ['99.9% uptime', '40% cost reduction', '24/7 support']
    }
  ];

  const successMetrics = [
    { metric: 'Projects Delivered', value: '500+', description: 'Successful implementations worldwide' },
    { metric: 'Cost Savings Generated', value: '$2.3B', description: 'Across all client implementations' },
    { metric: 'Average ROI', value: '156%', description: 'Within first year of implementation' },
    { metric: 'Customer Satisfaction', value: '4.9/5', description: 'Based on client feedback' }
  ];

  const technologies = [
    { name: 'AI/ML', icon: '🧠', description: 'Machine Learning & AI' },
    { name: 'Cloud', icon: '☁️', description: 'AWS, Azure, Google Cloud' },
    { name: 'DevOps', icon: '🔄', description: 'CI/CD & Automation' },
    { name: 'Security', icon: '🔒', description: 'Cybersecurity Solutions' },
    { name: 'SaaS', icon: '🚀', description: 'Micro SaaS Platforms' },
    { name: 'Analytics', icon: '📊', description: 'Business Intelligence' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                {' '}AI & Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto">
              Enterprise-grade AI services, micro SaaS solutions, and IT consulting with competitive pricing, 
              proven ROI, and expert implementation. Build faster with Zion Tech Group.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link 
                href="/services"
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Our Services
              </Link>
              <a 
                href="tel:+13024640950"
                className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
              >
                📞 Call +1 302 464 0950
              </a>
            </div>
            
            {/* Contact Information */}
            <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Get Started Today</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="text-center">
                  <div className="text-blue-600 font-semibold">📞 Phone</div>
                  <a href="tel:+13024640950" className="text-gray-600 hover:text-blue-600">+1 302 464 0950</a>
                </div>
                <div className="text-center">
                  <div className="text-green-600 font-semibold">✉️ Email</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="text-gray-600 hover:text-green-600">kleber@ziontechgroup.com</a>
                </div>
                <div className="text-center">
                  <div className="text-purple-600 font-semibold">📍 Address</div>
                  <div className="text-gray-600">364 E Main St STE 1008<br />Middletown, DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Our Comprehensive Service Categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our three main service categories, each designed to address specific business needs 
              with competitive pricing and proven results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-gray-100">
                <div className="p-8">
                  <div className="text-center mb-6">
                    <span className="text-5xl mb-4 block">{service.icon}</span>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <div className="text-lg font-semibold text-green-600 mb-4">{service.pricing}</div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Proven Benefits:</h4>
                    <ul className="text-sm text-gray-600 space-y-2">
                      {service.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center">
                          <span className="text-blue-500 mr-2">📈</span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link 
                    href={service.href}
                    className="w-full bg-blue-600 text-white text-center py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors block"
                  >
                    Learn More & Get Quote
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Proven Results & Success Metrics
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our track record speaks for itself. Here are the measurable results we've achieved for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl font-bold text-blue-600 mb-2">{metric.value}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{metric.metric}</h3>
                <p className="text-gray-600">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Master */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver the best solutions for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                <div className="text-4xl mb-3">{tech.icon}</div>
                <h3 className="font-semibold text-gray-900 mb-1">{tech.name}</h3>
                <p className="text-sm text-gray-600">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Let's discuss how our AI and technology solutions can accelerate your growth and drive innovation. 
            Get a custom quote tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              📞 Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ Email Us
            </a>
            <Link
              href="/services-advertising"
              className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl"
            >
              📋 View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Quick Links</h2>
            <p className="text-xl text-gray-600">Explore our services and resources</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Link href="/services" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-semibold text-gray-900 mb-2">All Services</h3>
              <p className="text-sm text-gray-600">Comprehensive service catalog</p>
            </Link>
            <Link href="/services-advertising" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-900 mb-2">Pricing & Quotes</h3>
              <p className="text-sm text-gray-600">Competitive pricing information</p>
            </Link>
            <Link href="/case-studies" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">📊</div>
              <h3 className="font-semibold text-gray-900 mb-2">Case Studies</h3>
              <p className="text-sm text-gray-600">Client success stories</p>
            </Link>
            <Link href="/contact" className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow text-center">
              <div className="text-3xl mb-3">📞</div>
              <h3 className="font-semibold text-gray-900 mb-2">Contact Us</h3>
              <p className="text-sm text-gray-600">Get in touch today</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}