'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import {
  CloudIcon,
  ServerIcon,
  CpuChipIcon,
  ChartBarIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline';

export default function CloudSolutionsPage() {
  const services = [
    {
      icon: CloudIcon,
      title: 'Cloud Migration',
      description: 'Seamless migration of your applications and data to the cloud with minimal downtime.',
      features: ['Assessment & planning', 'Data migration', 'Application modernization', 'Performance optimization']
    },
    {
      icon: ServerIcon,
      title: 'Infrastructure Management',
      description: 'Complete management of your cloud infrastructure with 24/7 monitoring and support.',
      features: ['Server provisioning', 'Load balancing', 'Auto-scaling', 'Backup & recovery']
    },
    {
      icon: CpuChipIcon,
      title: 'Container Solutions',
      description: 'Docker and Kubernetes solutions for modern application deployment and management.',
      features: ['Container orchestration', 'Microservices architecture', 'CI/CD pipelines', 'Service mesh']
    },
    {
      icon: ChartBarIcon,
      title: 'Cloud Analytics',
      description: 'Advanced analytics and monitoring solutions for your cloud infrastructure and applications.',
      features: ['Performance monitoring', 'Cost optimization', 'Security analytics', 'Predictive insights']
    }
  ];

  const platforms = [
    { name: 'Amazon Web Services (AWS)', logo: 'AWS' },
    { name: 'Microsoft Azure', logo: 'Azure' },
    { name: 'Google Cloud Platform', logo: 'GCP' },
    { name: 'IBM Cloud', logo: 'IBM' },
    { name: 'Oracle Cloud', logo: 'Oracle' },
    { name: 'DigitalOcean', logo: 'DO' }
  ];

  return (
    <React.Fragment>
      <SEO
        title="Cloud Solutions - Zion Tech Group"
        description="Comprehensive cloud solutions including migration, infrastructure management, and analytics."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-600 to-purple-700 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Cloud Solutions</h1>
              <p className="text-xl md:text-2xl text-blue-100 mb-8">
                Transform your business with our comprehensive cloud services
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Get Started
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Request Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cloud Services</h2>
              <p className="text-xl text-gray-300">
                End-to-end cloud solutions tailored to your business needs
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                  <service.icon className="h-12 w-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="h-4 w-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Platforms Section */}
        <div className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Supported Platforms</h2>
              <p className="text-xl text-gray-300">
                We work with all major cloud providers
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {platforms.map((platform, index) => (
                <div key={index} className="text-center">
                  <div className="bg-slate-700 p-6 rounded-lg hover:bg-slate-600 transition-colors">
                    <h3 className="font-semibold text-lg">{platform.logo}</h3>
                    <p className="text-sm text-gray-300 mt-2">{platform.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Move to the Cloud?</h2>
              <p className="text-xl text-blue-100 mb-8">
                Let our experts help you migrate and optimize your cloud infrastructure
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  to="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
                >
                  Start Your Migration
                </Link>
                <Link
                  to="/demo"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}