import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { generateSEOMetadata } from '../../components/SEOEnhancer';
import { 
  SparklesIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  CpuChipIcon,
  CogIcon,
  ArrowRightIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = generateSEOMetadata({
  title: 'Solutions - Zion Tech Group',
  description: 'Comprehensive technology solutions including AI platforms, cloud services, cybersecurity, and digital transformation by Zion Tech Group.',
  keywords: ['technology solutions', 'AI platforms', 'cloud services', 'cybersecurity', 'digital transformation', 'automation', 'business solutions'],
  canonicalUrl: '/solutions',
  ogImage: '/images/og-solutions.jpg'
});

const solutions = [
  {
    category: 'AI & Automation',
    icon: SparklesIcon,
    color: 'from-blue-500 to-purple-500',
    description: 'Intelligent automation solutions that streamline operations and boost productivity',
    solutions: [
      'AI-Powered Chatbots & Virtual Assistants',
      'Intelligent Process Automation',
      'Machine Learning Models',
      'Predictive Analytics Platforms',
      'Natural Language Processing'
    ]
  },
  {
    category: 'Cloud Solutions',
    icon: CloudIcon,
    color: 'from-green-500 to-blue-500',
    description: 'Scalable cloud infrastructure and migration services for modern businesses',
    solutions: [
      'Cloud Migration & Optimization',
      'Multi-Cloud Architecture',
      'Container Orchestration',
      'Serverless Applications',
      'Cloud Security & Compliance'
    ]
  },
  {
    category: 'Cybersecurity',
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-orange-500',
    description: 'Enterprise-grade security solutions to protect your digital assets',
    solutions: [
      'Security Assessment & Auditing',
      'Identity & Access Management',
      'Threat Detection & Response',
      'Data Protection & Encryption',
      'Compliance & Governance'
    ]
  },
  {
    category: 'Data & Analytics',
    icon: ChartBarIcon,
    color: 'from-purple-500 to-pink-500',
    description: 'Transform data into actionable insights with advanced analytics',
    solutions: [
      'Business Intelligence Dashboards',
      'Real-time Data Processing',
      'Customer Analytics & Insights',
      'Predictive Modeling',
      'Data Visualization Tools'
    ]
  },
  {
    category: 'Digital Transformation',
    icon: CpuChipIcon,
    color: 'from-indigo-500 to-purple-500',
    description: 'End-to-end digital transformation to modernize your business',
    solutions: [
      'Legacy System Modernization',
      'API Development & Integration',
      'Microservices Architecture',
      'DevOps & CI/CD Pipelines',
      'Technology Consulting'
    ]
  },
  {
    category: 'Business Automation',
    icon: CogIcon,
    color: 'from-teal-500 to-green-500',
    description: 'Streamline workflows and automate repetitive business processes',
    solutions: [
      'Workflow Automation',
      'Document Processing',
      'Email & Marketing Automation',
      'CRM & ERP Integration',
      'Business Process Optimization'
    ]
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Technology <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation, enhance security, and drive business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Solutions Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${solution.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{solution.category}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{solution.description}</p>
                <ul className="space-y-2">
                  {solution.solutions.map((item, itemIndex) => (
                    <li key={itemIndex} className="text-gray-300 text-sm flex items-start">
                      <span className="text-blue-400 mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Industry Focus */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industry-Focused Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Tailored solutions for specific industries and business challenges.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏦</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">FinTech</h3>
              <p className="text-gray-300 text-sm">
                AI-powered financial analytics, fraud detection, and automated trading systems.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏥</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">HealthTech</h3>
              <p className="text-gray-300 text-sm">
                Healthcare analytics, patient management systems, and medical AI solutions.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛒</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">E-Commerce</h3>
              <p className="text-gray-300 text-sm">
                Intelligent recommendation engines, inventory optimization, and customer analytics.
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-orange-600/20 to-red-600/20 rounded-xl p-6 border border-white/20 text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🏭</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Manufacturing</h3>
              <p className="text-gray-300 text-sm">
                IoT integration, predictive maintenance, and smart manufacturing solutions.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your specific challenges and create a customized solution that drives measurable results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Start Your Project
              <ArrowRightIcon className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services" 
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}