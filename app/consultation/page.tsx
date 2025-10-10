'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Users, Shield } from 'lucide-react';

const ConsultationPage: React.FC = () => {
  const services = [
    {
      icon: Star,
      title: 'AI Strategy',
      description: 'Develop a comprehensive AI strategy tailored to your business needs.',
      benefits: ['AI readiness assessment', 'Technology roadmap', 'ROI analysis', 'Implementation planning']
    },
    {
      icon: Shield,
      title: 'Cybersecurity Audit',
      description: 'Comprehensive security assessment and recommendations.',
      benefits: ['Security vulnerability analysis', 'Compliance review', 'Risk assessment', 'Remediation plan']
    },
    {
      icon: Users,
      title: 'Digital Transformation',
      description: 'Guide your organization through digital transformation initiatives.',
      benefits: ['Process optimization', 'Technology integration', 'Change management', 'Performance monitoring']
    }
  ];

  const processSteps = [
    {
      step: '1',
      title: 'Initial Assessment',
      description: 'Analyze your current technology stack and business requirements.'
    },
    {
      step: '2',
      title: 'Strategy Development',
      description: 'Create a customized strategy based on your specific needs and goals.'
    },
    {
      step: '3',
      title: 'Implementation Plan',
      description: 'Develop a detailed roadmap with timelines and milestones.'
    },
    {
      step: '4',
      title: 'Ongoing Support',
      description: 'Provide continuous guidance and support throughout implementation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900">
      <Helmet>
        <title>IT Consultation Services - Zion Tech Group</title>
        <meta name="description" content="Expert IT consultation services to help your business leverage technology for growth and efficiency." />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Expert IT Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get professional guidance to transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Schedule Consultation
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Consultation Services</h2>
              <p className="text-xl text-gray-300">Comprehensive technology guidance for your business</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mb-6">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Our Process</h2>
              <p className="text-xl text-gray-300">How we work with you to achieve your goals</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-white">{step.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a consultation with our experts and discover how technology can drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ConsultationPage;