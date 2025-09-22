import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { 
  SparklesIcon, 
  CloudIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  CodeBracketIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CogIcon
} from '@heroicons/react/24/outline';

export const metadata: Metadata = {
  title: 'Services - Zion Tech Group',
  description: 'Comprehensive AI solutions, development services, and technology consulting by Zion Tech Group.',
};

const services = [
  {
    category: 'AI & Machine Learning',
    icon: SparklesIcon,
    color: 'from-blue-500 to-purple-500',
    services: [
      { name: 'AI Chatbot Development', href: '/services/ai-chatbot' },
      { name: 'Predictive Analytics', href: '/services/ai-predictive-analytics' },
      { name: 'Natural Language Processing', href: '/services/natural-language-processing' },
      { name: 'Computer Vision Solutions', href: '/services/computer-vision-solutions' },
      { name: 'AI-Powered Automation', href: '/services/automation-solutions' }
    ]
  },
  {
    category: 'Cloud Services',
    icon: CloudIcon,
    color: 'from-green-500 to-blue-500',
    services: [
      { name: 'Cloud Migration', href: '/services/cloud-migration' },
      { name: 'Cloud Optimization', href: '/services/cloud-optimization' },
      { name: 'Cloud Security Audit', href: '/services/cloud-security-audit' },
      { name: 'Multi-Cloud Solutions', href: '/services/cloud-services' }
    ]
  },
  {
    category: 'Cybersecurity',
    icon: ShieldCheckIcon,
    color: 'from-red-500 to-orange-500',
    services: [
      { name: 'Security Consulting', href: '/services/cybersecurity-consulting' },
      { name: 'Vulnerability Assessment', href: '/services/vulnerability-scanner' },
      { name: 'Security Suite', href: '/services/cybersecurity-suite' },
      { name: 'Compliance Solutions', href: '/services/cybersecurity' }
    ]
  },
  {
    category: 'Data Analytics',
    icon: ChartBarIcon,
    color: 'from-purple-500 to-pink-500',
    services: [
      { name: 'Business Intelligence', href: '/services/data-analytics' },
      { name: 'Real-time Processing', href: '/services/real-time-data-processing' },
      { name: 'Customer Insights', href: '/services/ai-customer-insights' },
      { name: 'Predictive Analytics', href: '/services/predictive-analytics' }
    ]
  },
  {
    category: 'Development',
    icon: CodeBracketIcon,
    color: 'from-indigo-500 to-purple-500',
    services: [
      { name: 'Web Development', href: '/services/web-development' },
      { name: 'API Development', href: '/services/api-development' },
      { name: 'Software Development', href: '/services/software-development' },
      { name: 'DevOps Automation', href: '/services/devops-automation' }
    ]
  },
  {
    category: 'Mobile Solutions',
    icon: DevicePhoneMobileIcon,
    color: 'from-teal-500 to-green-500',
    services: [
      { name: 'Mobile App Development', href: '/services/mobile-app-development' },
      { name: 'Cross-Platform Apps', href: '/services/mobile-development' },
      { name: 'App Optimization', href: '/services/mobile-app-development' }
    ]
  },
  {
    category: 'AI Tools',
    icon: CpuChipIcon,
    color: 'from-cyan-500 to-blue-500',
    services: [
      { name: 'AI-Powered Tools', href: '/services/ai-powered-tools' },
      { name: 'Code Assistant', href: '/services/ai-code-assistant' },
      { name: 'Content Generator', href: '/services/ai-content-generator' },
      { name: 'Project Manager', href: '/services/ai-project-manager' }
    ]
  },
  {
    category: 'Business Automation',
    icon: CogIcon,
    color: 'from-yellow-500 to-orange-500',
    services: [
      { name: 'Workflow Automation', href: '/services/automated-workflow-builder' },
      { name: 'Process Automation', href: '/services/business-automation' },
      { name: 'Email Automation', href: '/services/email-automation' },
      { name: 'Social Media Automation', href: '/services/social-media-automation' }
    ]
  }
];

export default function ServicePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your digital transformation and drive business growth.
            </p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {services.map((category, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{category.category}</h3>
                <ul className="space-y-2">
                  {category.services.map((service, serviceIndex) => (
                    <li key={serviceIndex}>
                      <Link 
                        href={service.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm block py-1"
                      >
                        {service.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Services */}
      <div className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our most popular and impactful solutions that have transformed businesses across industries.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center mb-6">
                <SparklesIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">AI-Powered CRM</h3>
              <p className="text-gray-300 mb-6">
                Intelligent customer relationship management that predicts customer behavior and automates sales processes.
              </p>
              <Link 
                href="/services/ai-powered-crm"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center mb-6">
                <CloudIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>
              <p className="text-gray-300 mb-6">
                Seamless migration to cloud infrastructure with zero downtime and enhanced security.
              </p>
              <Link 
                href="/services/cloud-migration"
                className="inline-flex items-center text-green-400 hover:text-green-300 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
            
            <div className="bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl p-8 border border-white/20">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheckIcon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity Suite</h3>
              <p className="text-gray-300 mb-6">
                Comprehensive security solutions that protect your business from evolving cyber threats.
              </p>
              <Link 
                href="/services/cybersecurity-suite"
                className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss your specific needs and create a customized solution that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 transition-all duration-200"
            >
              Start Your Project
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}