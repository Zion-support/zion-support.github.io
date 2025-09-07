import React from 'react';
import Link from 'next/link';
import {
  CpuChipIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export const metadata = {
  title: 'Solutions | Zion Tech Group',
  description: 'Comprehensive technology solutions for modern businesses.',
  keywords: 'AI solutions, micro SaaS, IT solutions, digital transformation'
};

const solutions = [
  {
    name: 'AI-Powered Automation',
    description: 'Streamline your operations with intelligent automation solutions.',
    icon: CpuChipIcon,
    features: ['Process Automation', 'Intelligent Workflows', 'Predictive Analytics', 'Natural Language Processing']
  },
  {
    name: 'Micro SaaS Platforms',
    description: 'Build and scale focused software solutions for specific business needs.',
    icon: RocketLaunchIcon,
    features: ['Custom Applications', 'API Development', 'User Management', 'Scalable Architecture']
  },
  {
    name: 'Enterprise Security',
    description: 'Comprehensive security solutions to protect your digital assets.',
    icon: ShieldCheckIcon,
    features: ['Security Audits', 'Threat Detection', 'Compliance Management', 'Incident Response']
  },
  {
    name: 'Data Intelligence',
    description: 'Transform raw data into actionable business insights.',
    icon: ChartBarIcon,
    features: ['Business Intelligence', 'Real-time Analytics', 'Custom Dashboards', 'Data Visualization']
  }
];

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {solutions.map((solution) => (
            <div key={solution.name} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <solution.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">{solution.name}</h3>
              </div>
              <p className="text-gray-300 mb-6">{solution.description}</p>
              <ul className="space-y-2 mb-6">
                {solution.features.map((feature) => (
                  <li key={feature} className="flex items-center text-gray-300">
                    <CheckCircleIcon className="h-5 w-5 text-green-400 mr-3" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold"
              >
                Learn More
                <ArrowRightIcon className="ml-2 h-4 w-4" />
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and find the perfect solution for your business needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us Today
            <ArrowRightIcon className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}