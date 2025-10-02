import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Enterprise Solutions - Zion Tech Group',
  description: 'Comprehensive AI and IT solutions for enterprise transformation. Discover our suite of services designed to drive innovation and efficiency.',
  keywords: 'enterprise solutions, AI solutions, IT solutions, digital transformation, business automation',
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI-Powered Automation',
      description: 'Transform your business processes with intelligent automation solutions that learn and adapt.',
      features: [
        'Autonomous Business Process Automation',
        'Intelligent Document Processing',
        'Predictive Analytics & Insights',
        'Natural Language Processing'
      ],
      icon: '🤖'
    },
    {
      title: 'Cloud & Infrastructure',
      description: 'Scalable, secure, and efficient cloud solutions tailored to your enterprise needs.',
      features: [
        'Multi-Cloud Architecture Design',
        'DevOps & CI/CD Implementation',
        'Infrastructure as Code',
        'Cloud Security & Compliance'
      ],
      icon: '☁️'
    },
    {
      title: 'Data Analytics & Intelligence',
      description: 'Unlock the power of your data with advanced analytics and business intelligence solutions.',
      features: [
        'Real-time Data Processing',
        'Advanced Analytics Dashboards',
        'Machine Learning Models',
        'Data Governance & Security'
      ],
      icon: '📊'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Protect your enterprise with comprehensive cybersecurity solutions and threat detection.',
      features: [
        'Zero-Trust Security Architecture',
        'Advanced Threat Detection',
        'Security Compliance Management',
        'Incident Response & Recovery'
      ],
      icon: '🔒'
    },
    {
      title: 'Micro SaaS Platforms',
      description: 'Build and deploy scalable micro SaaS solutions that grow with your business.',
      features: [
        'Rapid Prototyping & Development',
        'Scalable Architecture Design',
        'API-First Development',
        'Multi-Tenant Solutions'
      ],
      icon: '⚡'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your enterprise operations.',
      features: [
        'Legacy System Modernization',
        'Process Optimization',
        'Change Management',
        'Technology Roadmapping'
      ],
      icon: '🚀'
    }
  ];

  const industries = [
    { name: 'Financial Services', description: 'AI-driven financial analytics and risk management' },
    { name: 'Healthcare', description: 'Healthcare automation and patient data analytics' },
    { name: 'Manufacturing', description: 'Smart manufacturing and supply chain optimization' },
    { name: 'Retail & E-commerce', description: 'Personalized customer experiences and inventory management' },
    { name: 'Technology', description: 'Software development and cloud infrastructure solutions' },
    { name: 'Government', description: 'Public sector digital transformation and security' }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Enterprise Solutions
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Comprehensive AI and IT solutions designed to transform your business operations, 
          drive innovation, and deliver measurable results.
        </p>
      </div>

      {/* Solutions Grid */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Solution Categories</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-700 flex items-start">
                    <span className="text-green-500 mr-2">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Industries We Serve</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{industry.name}</h3>
              <p className="text-gray-600">{industry.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Success Metrics */}
      <div className="bg-blue-50 p-8 rounded-lg mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Proven Results</h2>
        <div className="grid md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">$43M+</div>
            <div className="text-gray-700">Average ROI Delivered</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-700">Projects Completed</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">95%</div>
            <div className="text-gray-700">Client Satisfaction Rate</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-blue-600 mb-2">24/7</div>
            <div className="text-gray-700">Support Available</div>
          </div>
        </div>
      </div>

      {/* Implementation Process */}
      <div className="mb-16">
        <h2 className="text-3xl font-semibold text-gray-900 mb-8 text-center">Our Implementation Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-blue-600">1</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Discovery</h3>
            <p className="text-gray-600">We analyze your current systems and identify opportunities for improvement.</p>
          </div>
          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Strategy</h3>
            <p className="text-gray-600">We develop a comprehensive strategy tailored to your business goals.</p>
          </div>
          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-purple-600">3</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation</h3>
            <p className="text-gray-600">Our experts implement solutions with minimal disruption to your operations.</p>
          </div>
          <div className="text-center">
            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl font-bold text-orange-600">4</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Optimization</h3>
            <p className="text-gray-600">We continuously monitor and optimize for maximum performance.</p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-8 rounded-lg text-center">
        <h2 className="text-3xl font-semibold mb-4">Ready to Transform Your Business?</h2>
        <p className="text-blue-100 mb-6 text-lg">
          Let's discuss how our solutions can drive innovation and growth in your organization.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/contact" 
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Get Started Today
          </Link>
          <Link 
            href="/case-studies" 
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
          >
            View Success Stories
          </Link>
        </div>
      </div>
    </div>
  );
}