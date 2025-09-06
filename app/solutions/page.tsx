import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions | Zion Tech Group - Industry-Specific Technology Solutions',
  description: 'Comprehensive technology solutions for FinTech, HealthTech, EdTech, and enterprise applications.',
  keywords: 'FinTech solutions, HealthTech, EdTech, enterprise solutions, industry technology'
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'FinTech Solutions',
      description: 'Revolutionary financial technology solutions for modern banking and payment systems.',
      href: '/solutions/fintech',
      icon: '💳',
      features: ['Payment Processing', 'Digital Banking', 'Cryptocurrency Integration', 'Risk Management']
    },
    {
      title: 'HealthTech Solutions',
      description: 'Advanced healthcare technology solutions for improved patient care and management.',
      href: '/solutions/healthtech',
      icon: '🏥',
      features: ['Electronic Health Records', 'Telemedicine Platforms', 'Health Analytics', 'Patient Management']
    },
    {
      title: 'EdTech Solutions',
      description: 'Innovative educational technology solutions for modern learning experiences.',
      href: '/solutions/edtech',
      icon: '🎓',
      features: ['Learning Management Systems', 'Virtual Classrooms', 'Student Analytics', 'Content Management']
    },
    {
      title: 'Enterprise Solutions',
      description: 'Comprehensive enterprise technology solutions for large-scale operations.',
      href: '/solutions/enterprise',
      icon: '🏢',
      features: ['Enterprise Resource Planning', 'Customer Relationship Management', 'Business Intelligence', 'Workflow Automation']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Industry Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Specialized technology solutions designed for specific industries and use cases.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <Link
              key={index}
              href={solution.href}
              className="block p-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-gray-200 hover:border-blue-300"
            >
              <div className="text-5xl mb-6">{solution.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-3">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 flex items-center">
                    <span className="text-green-500 mr-3">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </Link>
          ))}
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">Our Approach</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔍</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Analysis</h3>
              <p className="text-gray-600">We analyze your industry requirements and challenges to design the perfect solution.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛠️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Development</h3>
              <p className="text-gray-600">We develop custom solutions using the latest technologies and best practices.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚀</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Deployment</h3>
              <p className="text-gray-600">We ensure smooth deployment and provide ongoing support for your solution.</p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Let's discuss your industry-specific requirements and create a solution that drives real results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Start Your Project
            </Link>
            <Link
              href="/services"
              className="border border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}