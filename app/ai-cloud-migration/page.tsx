import React from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Star, Cloud, Shield, Zap, Clock, Users, TrendingUp, Brain, Database, Server } from 'lucide-react';

const AICloudMigrationPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Migration Planning',
      description: 'Intelligently analyze your current infrastructure and create optimized migration strategies using advanced AI algorithms.',
      benefits: ['Infrastructure analysis', 'Migration strategy', 'Risk assessment', 'Cost optimization']
    },
    {
      icon: Cloud,
      title: 'Multi-Cloud Support',
      description: 'Migrate to AWS, Azure, Google Cloud, or any combination with seamless cross-platform compatibility.',
      benefits: ['AWS migration', 'Azure migration', 'GCP migration', 'Hybrid cloud setup']
    },
    {
      icon: Shield,
      title: 'Zero-Downtime Migration',
      description: 'Ensure business continuity with advanced migration techniques that minimize downtime and data loss.',
      benefits: ['Live migration', 'Data synchronization', 'Rollback capability', 'Disaster recovery']
    },
    {
      icon: Zap,
      title: 'Automated Migration',
      description: 'Automate the entire migration process with AI-driven scripts and monitoring for seamless transitions.',
      benefits: ['Automated scripts', 'Real-time monitoring', 'Error handling', 'Progress tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Assessment',
      price: '$2,999',
      period: 'one-time',
      description: 'Comprehensive cloud readiness assessment and migration planning',
      features: [
        'Infrastructure audit',
        'Migration strategy',
        'Cost analysis',
        'Risk assessment',
        'Timeline planning',
        'Recommendations report'
      ],
      popular: false
    },
    {
      name: 'Standard Migration',
      price: '$9,999',
      period: 'project',
      description: 'Complete migration service for small to medium businesses',
      features: [
        'Full migration planning',
        'Data migration',
        'Application migration',
        'Testing & validation',
        'Go-live support',
        '30-day post-migration support'
      ],
      popular: true
    },
    {
      name: 'Enterprise Migration',
      price: 'Custom',
      period: 'pricing',
      description: 'Comprehensive migration solution for large organizations',
      features: [
        'Custom migration strategy',
        'Multi-cloud architecture',
        'Advanced security setup',
        'Performance optimization',
        'Dedicated team',
        '24/7 support',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const useCases = [
    {
      title: 'Legacy System Modernization',
      description: 'Modernize outdated systems and migrate to cloud-native architectures for better performance and scalability.',
      icon: '🔄',
      results: '300% performance improvement'
    },
    {
      title: 'Data Center Consolidation',
      description: 'Consolidate multiple data centers into a unified cloud infrastructure for better management and cost savings.',
      icon: '🏢',
      results: '60% cost reduction'
    },
    {
      title: 'Disaster Recovery Setup',
      description: 'Implement robust disaster recovery solutions in the cloud with automated failover and data replication.',
      icon: '🛡️',
      results: '99.9% uptime guarantee'
    },
    {
      title: 'Compliance Migration',
      description: 'Migrate to compliant cloud environments that meet industry standards like HIPAA, SOX, and GDPR.',
      icon: '📋',
      results: '100% compliance'
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Walsh',
      role: 'CTO',
      company: 'FinanceCorp Inc',
      content: 'The AI-powered migration planning was incredibly detailed and accurate. We saved 40% on cloud costs while improving performance by 200%.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'IT Director',
      company: 'Healthcare Solutions',
      content: 'The zero-downtime migration was flawless. Our critical healthcare systems were migrated without any service interruption.',
      rating: 5
    },
    {
      name: 'Sarah Rodriguez',
      role: 'VP of Technology',
      company: 'RetailMax',
      content: 'The automated migration process was incredibly efficient. What would have taken months was completed in weeks with better results.',
      rating: 5
    }
  ];

  const cloudProviders = [
    { name: 'Amazon Web Services', icon: '☁️', description: 'AWS migration expertise' },
    { name: 'Microsoft Azure', icon: '🔵', description: 'Azure cloud solutions' },
    { name: 'Google Cloud Platform', icon: '🔍', description: 'GCP migration services' },
    { name: 'IBM Cloud', icon: '🔷', description: 'IBM cloud migration' },
    { name: 'Oracle Cloud', icon: '🔴', description: 'Oracle cloud services' },
    { name: 'Alibaba Cloud', icon: '🟡', description: 'Alibaba cloud solutions' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-700 text-white py-20">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm mb-6">
              <Star className="w-5 h-5 mr-2" />
              <span className="text-sm font-medium">AI Cloud Migration</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              AI Cloud Migration Services
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
              Migrate to the cloud intelligently with AI-powered planning, zero-downtime migration, and automated optimization
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 Call: (302) 464-0950
              </a>
              <a 
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ Get Free Assessment
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Cloud Providers */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              All Major Cloud Providers
            </h2>
            <p className="text-xl text-gray-600">
              We support migration to all leading cloud platforms
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cloudProviders.map((provider, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center mx-auto mb-3">
                  <span className="text-2xl">{provider.icon}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{provider.name}</h3>
                <p className="text-sm text-gray-600">{provider.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need for a successful cloud migration
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-8 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Real-World Results
            </h2>
            <p className="text-xl text-gray-600">
              See how businesses are using our AI cloud migration to transform their infrastructure
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{useCase.title}</h3>
                <p className="text-gray-600 mb-4 text-sm">{useCase.description}</p>
                <div className="text-blue-600 font-bold text-lg">{useCase.results}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Transparent Pricing
            </h2>
            <p className="text-xl text-gray-600">
              Choose the migration service that fits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`bg-white rounded-xl shadow-lg p-8 relative ${plan.popular ? 'ring-2 ring-blue-500' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                  <p className="text-gray-600 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                    <span className="text-gray-600 ml-1">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <a
                  href="tel:+13024640950"
                  className={`w-full py-3 px-4 rounded-lg font-semibold text-center transition-colors ${
                    plan.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of businesses already using our AI cloud migration services
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Migrate to the Cloud?
          </h2>
          <p className="text-xl mb-8 text-blue-100">
            Start with a free cloud readiness assessment and migration planning
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
            >
              📞 Call: (302) 464-0950
            </a>
            <a 
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              ✉️ kleber@ziontechgroup.com
            </a>
          </div>
          <div className="mt-8 text-sm text-blue-200">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🕒 Mon-Fri: 9AM-6PM EST</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AICloudMigrationPage;