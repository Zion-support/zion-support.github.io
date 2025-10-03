import React from 'react';
import Link from 'next/link';

const services = [
  {
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions for your business needs. From machine learning to natural language processing.',
    icon: '🤖',
    features: ['Machine Learning', 'NLP', 'Computer Vision', 'Predictive Analytics'],
    href: '/services/ai-services'
  },
  {
    title: 'IT Services',
    description: 'Comprehensive IT services and infrastructure management. Keep your systems running smoothly and securely.',
    icon: '💻',
    features: ['System Administration', 'Network Security', 'Cloud Migration', '24/7 Support'],
    href: '/services/it-services'
  },
  {
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and migration services. Modernize your infrastructure with our cloud expertise.',
    icon: '☁️',
    features: ['AWS/Azure/GCP', 'DevOps', 'Containerization', 'Auto-scaling'],
    href: '/services/cloud-solutions'
  },
  {
    title: 'Cybersecurity',
    description: 'Advanced security solutions to protect your business from evolving threats and ensure compliance.',
    icon: '🔒',
    features: ['Threat Detection', 'Compliance', 'Penetration Testing', 'Security Audits'],
    href: '/services/cybersecurity'
  },
  {
    title: 'Data Analytics',
    description: 'Transform your data into actionable insights with our advanced analytics and business intelligence solutions.',
    icon: '📊',
    features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Analytics'],
    href: '/services/data-analytics'
  },
  {
    title: 'Blockchain',
    description: 'Revolutionary blockchain solutions for secure, transparent, and decentralized business operations.',
    icon: '⛓️',
    features: ['Smart Contracts', 'DeFi', 'NFTs', 'Web3 Integration'],
    href: '/services/blockchain'
  }
];

const features = [
  {
    title: '24/7 Support',
    description: 'Round-the-clock technical support to keep your systems running smoothly.',
    icon: '🕐'
  },
  {
    title: 'Scalable Solutions',
    description: 'Solutions that grow with your business, from startup to enterprise scale.',
    icon: '📈'
  },
  {
    title: 'Cutting-Edge Technology',
    description: 'Stay ahead with the latest in AI, cloud, and emerging technologies.',
    icon: '🚀'
  },
  {
    title: 'Expert Team',
    description: 'Experienced professionals dedicated to your success.',
    icon: '👥'
  }
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Welcome to <span className="text-yellow-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Leading the future of technology with AI, autonomous systems, quantum computing, and innovative business solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/solutions"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                Explore Solutions
              </Link>
              <Link 
                href="/contact"
                className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to transform your business and drive innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link 
                  href={service.href}
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                >
                  Learn More
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through innovation, expertise, and unwavering commitment to your success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl mb-8">
            Let's discuss how our cutting-edge technology solutions can drive your success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              Start Your Project
            </Link>
            <Link 
              href="/research"
              className="border-2 border-white hover:bg-white hover:text-blue-600 font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300"
            >
              View Our Research
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}