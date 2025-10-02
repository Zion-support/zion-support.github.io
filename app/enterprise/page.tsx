import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Comprehensive enterprise AI and IT solutions designed for Fortune 500 companies. Transform your business with our advanced autonomous systems and quantum computing solutions.',
  keywords: 'enterprise AI, Fortune 500, autonomous systems, quantum computing, enterprise transformation, business intelligence',
};

export default function EnterprisePage() {
  const enterpriseSolutions = [
    {
      title: 'AI Autonomous Enterprise Operations',
      description: 'Complete automation of enterprise operations with AI-powered autonomous systems',
      features: ['Autonomous Decision Making', 'Self-Healing Infrastructure', 'Predictive Analytics', 'Real-time Optimization'],
      roi: '$500B+',
      link: '/services/ai-autonomous-operations-2026',
      icon: '🤖'
    },
    {
      title: 'Quantum Computing Solutions',
      description: 'Revolutionary quantum computing implementations for enterprise-scale problems',
      features: ['Quantum Optimization', 'Quantum Machine Learning', 'Quantum Security', 'Quantum Simulation'],
      roi: '$50B+',
      link: '/services/ai-quantum-computing-2026',
      icon: '⚛️'
    },
    {
      title: 'Autonomous Business Intelligence',
      description: 'Self-evolving business intelligence systems that adapt and optimize continuously',
      features: ['Autonomous Analytics', 'Self-Learning Models', 'Real-time Insights', 'Predictive Intelligence'],
      roi: '$25B+',
      link: '/services/ai-business-intelligence-2025',
      icon: '🧠'
    },
    {
      title: 'Enterprise AI Security Platform',
      description: 'Advanced AI-powered security solutions for enterprise environments',
      features: ['AI Threat Detection', 'Autonomous Response', 'Zero-Trust Architecture', 'Quantum-Safe Encryption'],
      roi: '$15B+',
      link: '/services/ai-cybersecurity-2025',
      icon: '🔒'
    },
    {
      title: 'Cloud Infrastructure Automation',
      description: 'Fully automated cloud infrastructure management and optimization',
      features: ['Autonomous Scaling', 'Cost Optimization', 'Performance Tuning', 'Disaster Recovery'],
      roi: '$10B+',
      link: '/services/ai-cloud-infrastructure-2025',
      icon: '☁️'
    },
    {
      title: 'Manufacturing AI Platform',
      description: 'AI-powered manufacturing optimization and autonomous production systems',
      features: ['Predictive Maintenance', 'Quality Control', 'Supply Chain Optimization', 'Autonomous Production'],
      roi: '$8B+',
      link: '/services/manufacturing-ai-platform',
      icon: '🏭'
    }
  ];

  const successMetrics = [
    { metric: '$500B+', label: 'Total ROI Delivered', description: 'Across all enterprise implementations' },
    { metric: '100+', label: 'Fortune 500 Clients', description: 'Successfully transformed' },
    { metric: '99.9%', label: 'Uptime Achieved', description: 'Across all autonomous systems' },
    { metric: '24/7', label: 'Autonomous Operations', description: 'Continuous optimization and monitoring' }
  ];

  const industries = [
    { name: 'Financial Services', icon: '🏦', clients: '25+ Fortune 500' },
    { name: 'Manufacturing', icon: '🏭', clients: '30+ Fortune 500' },
    { name: 'Healthcare', icon: '🏥', clients: '20+ Fortune 500' },
    { name: 'Technology', icon: '💻', clients: '35+ Fortune 500' },
    { name: 'Retail', icon: '🛒', clients: '15+ Fortune 500' },
    { name: 'Energy', icon: '⚡', clients: '10+ Fortune 500' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Enterprise Solutions
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your enterprise with our advanced AI and autonomous systems designed for Fortune 500 companies
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="bg-blue-600 px-4 py-2 rounded-full">
                <span className="font-semibold">$500B+</span> ROI Delivered
              </div>
              <div className="bg-green-600 px-4 py-2 rounded-full">
                <span className="font-semibold">100+</span> Fortune 500 Clients
              </div>
              <div className="bg-purple-600 px-4 py-2 rounded-full">
                <span className="font-semibold">99.9%</span> Uptime Achieved
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Success Metrics */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Proven Enterprise Results
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our enterprise solutions have delivered unprecedented results for Fortune 500 companies
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {successMetrics.map((metric, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                  {metric.metric}
                </div>
                <div className="text-lg font-semibold text-gray-900 mb-1">
                  {metric.label}
                </div>
                <div className="text-sm text-gray-600">
                  {metric.description}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Enterprise Solutions */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive AI and IT solutions designed for enterprise-scale operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enterpriseSolutions.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{solution.icon}</span>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs font-bold">
                          {solution.roi} ROI
                        </span>
                      </div>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {solution.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {solution.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-600 flex items-center gap-2">
                          <svg className="w-3 h-3 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link 
                    href={solution.link}
                    className="text-blue-600 hover:text-blue-800 font-medium text-sm flex items-center gap-1"
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries Served */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Industries We Serve
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by Fortune 500 companies across multiple industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center hover:shadow-md transition-shadow duration-300">
                <div className="text-4xl mb-3">{industry.icon}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {industry.name}
                </h3>
                <p className="text-sm text-gray-600">
                  {industry.clients}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Enterprise Implementation Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our proven methodology for enterprise AI transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Assessment</h3>
              <p className="text-gray-600 text-sm">
                Comprehensive analysis of your current systems and AI readiness
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Strategy</h3>
              <p className="text-gray-600 text-sm">
                Custom AI transformation strategy tailored to your enterprise needs
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Implementation</h3>
              <p className="text-gray-600 text-sm">
                Phased implementation with continuous monitoring and optimization
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Optimization</h3>
              <p className="text-gray-600 text-sm">
                Continuous optimization and scaling for maximum ROI
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Enterprise?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join the Fortune 500 companies that have achieved breakthrough results with our enterprise AI solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
            >
              Start Enterprise Transformation
            </Link>
            <Link 
              href="/case-studies"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors duration-200"
            >
              View Success Stories
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}