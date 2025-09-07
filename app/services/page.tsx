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
  title: 'Services | Zion Tech Group',
  description: 'Comprehensive AI, Micro SaaS, and IT services to transform your business.',
  keywords: 'AI services, micro SaaS, IT services, cloud migration, DevOps, enterprise software'
};

const services = [
  {
    name: 'AI-Powered Solutions',
    description: 'Cutting-edge artificial intelligence to automate and optimize your business processes.',
    icon: CpuChipIcon,
    features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
    pricing: 'Starting at $5,000'
  },
  {
    name: 'Micro SaaS Platforms',
    description: 'Scalable, focused software solutions that grow with your business needs.',
    icon: RocketLaunchIcon,
    features: ['Custom Web Applications', 'API Development', 'Database Design', 'User Management'],
    pricing: 'Starting at $3,000'
  },
  {
    name: 'Enterprise IT Services',
    description: 'Comprehensive IT infrastructure and support for modern businesses.',
    icon: ShieldCheckIcon,
    features: ['Cloud Migration', 'DevOps Implementation', 'Security Audits', 'System Monitoring'],
    pricing: 'Starting at $2,000'
  },
  {
    name: 'Data Analytics',
    description: 'Transform your data into actionable insights with our analytics solutions.',
    icon: ChartBarIcon,
    features: ['Business Intelligence', 'Data Visualization', 'Real-time Dashboards', 'Custom Reports'],
    pricing: 'Starting at $1,500'
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {services.map((service) => (
            <div key={service.name} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-colors">
              <div className="flex items-center mb-6">
                <div className="p-3 bg-blue-600 rounded-lg mr-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                  <p className="text-blue-400 font-semibold">{service.pricing}</p>
                </div>
              </div>
              <p className="text-gray-300 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
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