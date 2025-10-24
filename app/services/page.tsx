'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Brain, Zap, Shield, Target, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    title: 'AI Solutions',
    description: 'Advanced AI-powered solutions for modern businesses including machine learning, natural language processing, and predictive analytics.',
    features: ['Machine Learning', 'Natural Language Processing', 'Predictive Analytics', 'Computer Vision'],
    icon: Brain,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud solutions designed to support your business growth and digital transformation.',
    features: ['Cloud Migration', 'Infrastructure Management', 'Security & Compliance', '24/7 Monitoring'],
    icon: Zap,
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets and ensure business continuity.',
    features: ['Threat Detection', 'Security Audits', 'Compliance Management', 'Incident Response'],
    icon: Shield,
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Digital Transformation',
    description: 'Complete digital transformation solutions to modernize your business processes and operations.',
    features: ['Process Automation', 'Data Analytics', 'System Integration', 'Change Management'],
    icon: Target,
    color: 'from-orange-500 to-red-500',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Services - ZionTechGroup"
        description="Comprehensive AI solutions, cloud infrastructure, cybersecurity, and digital transformation services for modern businesses."
        keywords="AI solutions, cloud infrastructure, cybersecurity, digital transformation, technology services"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive technology solutions designed to transform your business and drive growth in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="p-8 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-full mb-6`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our services can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}