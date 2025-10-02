import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services Advertising & Pricing Guide | Zion Tech Group',
  description: 'Comprehensive guide to our AI, micro SaaS, and IT services with detailed pricing, features, and market comparisons.',
  keywords: 'AI services pricing, micro SaaS pricing, IT services cost, enterprise software pricing, technology solutions pricing',
};

export default function ServicesAdvertisingPage() {
  const services = [
    {
      category: 'AI Micro SaaS Solutions',
      services: [
        {
          name: 'AI Customer Support Automation',
          description: 'Revolutionary AI-powered customer support with intelligent routing and 24/7 multilingual support',
          features: ['Intelligent Intent Recognition', 'Real-time Sentiment Analysis', '50+ Languages Support', 'Smart Ticket Routing', 'Predictive Analytics'],
          pricing: { starter: '$499/month', professional: '$1,299/month', enterprise: '$2,999/month' },
          marketPrice: '$800-3,500/month',
          benefits: ['87% faster resolution', '94% customer satisfaction', '$2.4M annual savings', '2.3min avg response time'],
          link: '/services/ai-customer-support-automation',
          icon: '🎧'
        },
        {
          name: 'AI Financial Analysis Platform',
          description: 'Advanced AI-powered financial analysis with real-time market insights and predictive analytics',
          features: ['Real-time Market Analysis', 'Predictive Financial Modeling', 'Automated Reporting', 'Portfolio Optimization', 'Fraud Detection'],
          pricing: { professional: '$1,999/month', enterprise: '$4,999/month', institutional: '$9,999/month' },
          marketPrice: '$3,000-15,000/month',
          benefits: ['23% portfolio returns', '67% time savings', '$4.2M additional revenue', '99.8% compliance rate'],
          link: '/services/ai-financial-analysis-platform',
          icon: '💰'
        },
        {
          name: 'AI Project Management Suite',
          description: 'Intelligent project management with AI-powered resource allocation and risk prediction',
          features: ['Smart Resource Allocation', 'Risk Prediction & Mitigation', 'Automated Workflow Optimization', 'Predictive Analytics', 'Performance Intelligence'],
          pricing: { team: '$299/month', business: '$799/month', enterprise: '$1,999/month' },
          marketPrice: '$500-2,500/month',
          benefits: ['78% on-time delivery', '45% cost reduction', '$12.8M annual savings', '92% team productivity'],
          link: '/services/ai-project-management-suite',
          icon: '📋'
        },
        {
          name: 'AI HR Recruitment Platform',
          description: 'Revolutionary AI-powered recruitment with intelligent candidate matching and bias-free hiring',
          features: ['Smart Candidate Matching', 'Automated Screening', 'Bias-Free Hiring', 'AI-Powered Interviews', 'Predictive Analytics'],
          pricing: { startup: '$399/month', professional: '$999/month', enterprise: '$2,499/month' },
          marketPrice: '$600-3,000/month',
          benefits: ['67% faster hiring', '45% cost reduction', '89% quality hires', '156% diversity increase'],
          link: '/services/ai-hr-recruitment-platform',
          icon: '👥'
        }
      ]
    },
    {
      category: 'Advanced AI Solutions',
      services: [
        {
          name: 'Autonomous Business Process Orchestrator',
          description: 'Revolutionary AI system that autonomously manages and optimizes entire business processes',
          features: ['Autonomous Process Discovery', 'Self-Optimizing Workflow Execution', 'Predictive Process Failure Prevention', 'Dynamic Resource Allocation'],
          pricing: { standard: '$4,999/month', premium: '$14,999/month', enterprise: '$24,999/month' },
          marketPrice: '$8,000-30,000/month',
          benefits: ['98.7% automation rate', '3,847% ROI', '14,200 AI agents', '$12B Fortune 100 success'],
          link: '/services/autonomous-orchestrator',
          icon: '🤖'
        },
        {
          name: 'Quantum-Enhanced Business Intelligence',
          description: 'Next-generation BI platform leveraging quantum computing principles for advanced analytics',
          features: ['Quantum-Inspired Optimization Algorithms', 'Advanced Pattern Recognition', 'Multi-dimensional Data Analysis', 'Real-time Predictive Modeling'],
          pricing: { professional: '$8,999/month', enterprise: '$24,999/month', institutional: '$49,999/month' },
          marketPrice: '$15,000-60,000/month',
          benefits: ['500x faster processing', '99.9% accuracy', 'Real-time insights', 'Quantum-safe encryption'],
          link: '/services/quantum-bi',
          icon: '⚛️'
        }
      ]
    },
    {
      category: 'IT Services & Solutions',
      services: [
        {
          name: 'Autonomous Cloud Infrastructure Platform',
          description: 'Self-managing cloud infrastructure that automatically scales and optimizes resources',
          features: ['Autonomous Resource Provisioning', 'Intelligent Cost Optimization', 'Predictive Infrastructure Maintenance', 'Multi-cloud Orchestration'],
          pricing: { standard: '$9,999/month', premium: '$24,999/month', enterprise: '$49,999/month' },
          marketPrice: '$15,000-80,000/month',
          benefits: ['99.9% uptime', '60% cost reduction', 'Zero-downtime deployments', 'Auto-scaling'],
          link: '/services/autonomous-cloud',
          icon: '☁️'
        },
        {
          name: 'Edge Computing Intelligence Network',
          description: 'Distributed computing platform that brings AI processing to the edge',
          features: ['Edge AI Model Deployment', 'Distributed Processing Orchestration', 'Real-time Data Streaming', 'Edge-to-cloud Synchronization'],
          pricing: { standard: '$7,999/month', premium: '$19,999/month', enterprise: '$39,999/month' },
          marketPrice: '$12,000-50,000/month',
          benefits: ['<10ms latency', '2,400% ROI', '47,000+ edge devices', '99.99% accuracy'],
          link: '/services/edge-computing',
          icon: '🌐'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Services Advertising & Pricing Guide
          </h1>
          <p className="text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Comprehensive overview of our AI, micro SaaS, and IT services with transparent pricing, 
            market comparisons, and proven ROI metrics.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call +1 302 464 0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get Custom Quote
            </a>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {services.map((category, categoryIndex) => (
        <section key={categoryIndex} className="py-20 px-6">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">
                {category.category}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.category === 'AI Micro SaaS Solutions' && 'Affordable, scalable AI solutions designed for rapid deployment and immediate ROI'}
                {category.category === 'Advanced AI Solutions' && 'Cutting-edge AI technologies for enterprise transformation and competitive advantage'}
                {category.category === 'IT Services & Solutions' && 'Comprehensive IT infrastructure and cloud solutions for modern businesses'}
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {category.services.map((service, serviceIndex) => (
                <div key={serviceIndex} className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                  {/* Service Header */}
                  <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 border-b border-gray-200">
                    <div className="flex items-center justify-between mb-4">
                      <div className="text-4xl">{service.icon}</div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">Market Price Range</div>
                        <div className="text-lg font-bold text-green-600">{service.marketPrice}</div>
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing Tiers */}
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-gray-900 mb-4">Our Pricing Tiers</h4>
                    <div className="space-y-3 mb-6">
                      {Object.entries(service.pricing).map(([tier, price]) => (
                        <div key={tier} className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                          <span className="font-semibold text-gray-700 capitalize">{tier}</span>
                          <span className="font-bold text-blue-600">{price}</span>
                        </div>
                      ))}
                    </div>

                    {/* Features */}
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Key Features</h4>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <svg className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    {/* Proven Benefits */}
                    <h4 className="text-lg font-bold text-gray-900 mb-3">Proven Benefits</h4>
                    <div className="grid grid-cols-2 gap-3 mb-6">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="bg-green-50 p-3 rounded-lg text-center">
                          <div className="text-sm text-green-800 font-semibold">{benefit}</div>
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <a
                      href={service.link}
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
                    >
                      Learn More & Get Started
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Market Comparison Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Market Comparison & Value Proposition
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our pricing compares to industry standards and understand the value we deliver
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">40-60%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lower Than Market</h3>
              <p className="text-gray-600">Our pricing is significantly below industry standards while delivering superior functionality and support.</p>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">99.9%</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Uptime Guarantee</h3>
              <p className="text-gray-600">Enterprise-grade reliability with comprehensive SLA guarantees and 24/7 monitoring.</p>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">24/7</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Expert Support</h3>
              <p className="text-gray-600">Round-the-clock support from certified AI and technology experts with average 2-hour response time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-xl shadow-lg p-8 md:p-12">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                ROI Calculator
              </h2>
              <p className="text-xl text-gray-600">
                Calculate your potential savings and ROI with our services
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Typical ROI Metrics</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Cost Savings</span>
                    <span className="text-2xl font-bold text-blue-600">45-67%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-green-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Efficiency Gains</span>
                    <span className="text-2xl font-bold text-green-600">78-94%</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Time to Value</span>
                    <span className="text-2xl font-bold text-purple-600">30-60 days</span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-orange-50 rounded-lg">
                    <span className="font-semibold text-gray-700">Average ROI</span>
                    <span className="text-2xl font-bold text-orange-600">156-3,847%</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-xl">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Ready to Calculate Your ROI?</h3>
                <p className="text-gray-600 mb-6">
                  Contact us for a personalized ROI analysis based on your specific business needs and current operations.
                </p>
                <div className="space-y-3">
                  <a
                    href="tel:+13024640950"
                    className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold text-center block hover:bg-blue-700 transition-colors"
                  >
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="w-full border-2 border-blue-600 text-blue-600 py-3 px-6 rounded-lg font-semibold text-center block hover:bg-blue-600 hover:text-white transition-colors"
                  >
                    Email for ROI Analysis
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Get started with our AI and technology solutions today. Contact us for a free consultation and custom pricing.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="text-xl font-bold mb-2">Phone</h3>
              <a href="tel:+13024640950" className="text-blue-100 hover:text-white transition-colors">
                +1 302 464 0950
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl mb-2">✉️</div>
              <h3 className="text-xl font-bold mb-2">Email</h3>
              <a href="mailto:kleber@ziontechgroup.com" className="text-blue-100 hover:text-white transition-colors">
                kleber@ziontechgroup.com
              </a>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <div className="text-2xl mb-2">📍</div>
              <h3 className="text-xl font-bold mb-2">Address</h3>
              <div className="text-blue-100">
                <div>364 E Main St STE 1008</div>
                <div>Middletown DE 19709</div>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
            >
              Call Now
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
            >
              Send Email
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}