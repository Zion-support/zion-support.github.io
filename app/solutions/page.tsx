import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Comprehensive AI and technology solutions designed to transform your business operations.",
};

export default function SolutionsPage() {
  const solutions = [
    {
      title: 'AI-Powered Automation',
      description: 'Streamline your operations with intelligent automation solutions.',
      icon: '🤖',
      features: ['Process Automation', 'Intelligent Workflows', 'Predictive Analytics']
    },
    {
      title: 'Digital Transformation',
      description: 'Modernize your business with comprehensive digital solutions.',
      icon: '🔄',
      features: ['Legacy System Migration', 'Cloud Adoption', 'Process Optimization']
    },
    {
      title: 'Enterprise Security',
      description: 'Protect your business with advanced cybersecurity solutions.',
      icon: '🔒',
      features: ['Security Audits', 'Threat Detection', 'Compliance Management']
    },
    {
      title: 'Data Intelligence',
      description: 'Transform data into actionable business insights.',
      icon: '📊',
      features: ['Data Analytics', 'Business Intelligence', 'Real-time Dashboards']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable and reliable cloud solutions for your business.',
      icon: '☁️',
      features: ['Cloud Migration', 'DevOps Automation', 'Infrastructure Management']
    },
    {
      title: 'Custom Development',
      description: 'Tailored software solutions for your specific needs.',
      icon: '💻',
      features: ['Web Applications', 'Mobile Apps', 'API Development']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600 mb-6">{solution.description}</p>
              <ul className="space-y-2">
                {solution.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-gray-600 flex items-center">
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's discuss how our solutions can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center"
            >
              Contact Us
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </Link>
            <Link
              href="/services"
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              View Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}