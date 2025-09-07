import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout/Layout';
import { ArrowRight, CheckCircle, Zap, Cloud, Brain, Code } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Brain,
      title: 'AI Solutions',
      description: 'Custom AI implementations, machine learning models, and intelligent automation systems.',
      features: ['Machine Learning Models', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      price: 'Starting at $15k'
    },
    {
      icon: Code,
      title: 'Micro SaaS Development',
      description: 'Scalable software-as-a-service platforms built for rapid growth and market expansion.',
      features: ['Multi-tenant Architecture', 'API Development', 'Payment Integration', 'Analytics Dashboard'],
      price: 'Starting at $25k'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & DevOps',
      description: 'Seamless cloud migration, infrastructure automation, and DevOps implementation.',
      features: ['AWS/Azure/GCP Migration', 'CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Logging'],
      price: 'Starting at $10k'
    },
    {
      icon: Zap,
      title: 'IT Consulting',
      description: 'Strategic technology consulting to optimize your infrastructure and processes.',
      features: ['Technology Assessment', 'Architecture Design', 'Security Audits', 'Performance Optimization'],
      price: 'Starting at $5k'
    }
  ];

  return (
    <Layout title="Services - Zion Tech Group" description="Comprehensive AI, micro SaaS, and IT services to accelerate your digital transformation.">
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth 
                and digital transformation.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg border border-gray-200 p-8 hover:shadow-xl transition-shadow">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-lg mr-4">
                      <service.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                      <p className="text-blue-600 font-semibold">{service.price}</p>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a 
                    href="/contact" 
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Process
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                A proven methodology that ensures successful project delivery
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Discovery</h3>
                <p className="text-gray-600">
                  We analyze your requirements and define project scope
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Design</h3>
                <p className="text-gray-600">
                  We create detailed architecture and user experience designs
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Development</h3>
                <p className="text-gray-600">
                  We build your solution using agile development practices
                </p>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-600 text-white rounded-full mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Deployment</h3>
                <p className="text-gray-600">
                  We deploy and provide ongoing support for your solution
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss your requirements and create a custom solution for your business.
            </p>
            <a 
              href="/contact" 
              className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </section>
      </div>
    </Layout>
  );
}