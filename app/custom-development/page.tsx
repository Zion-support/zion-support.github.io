'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Code, Settings, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CustomDevelopmentPage: React.FC = () => {
  const features = [
    {
      icon: Code,
      title: 'Custom Software Development',
      description: 'Tailored software solutions built specifically for your business needs.',
      benefits: ['Bespoke functionality', 'Scalable architecture', 'Modern technologies', 'Ongoing support']
    },
    {
      icon: Settings,
      title: 'System Integration',
      description: 'Seamlessly connect your existing systems with new solutions.',
      benefits: ['API integration', 'Data synchronization', 'Workflow automation', 'Legacy system support']
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Enhance the performance and efficiency of your existing applications.',
      benefits: ['Speed improvements', 'Resource optimization', 'Scalability enhancements', 'Performance monitoring']
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We analyze your requirements and create a detailed project plan.'
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'We design the system architecture and user interface.'
    },
    {
      step: '03',
      title: 'Development',
      description: 'Our team builds your custom solution using best practices.'
    },
    {
      step: '04',
      title: 'Testing & Quality Assurance',
      description: 'Rigorous testing ensures your solution works perfectly.'
    },
    {
      step: '05',
      title: 'Deployment & Support',
      description: 'We deploy your solution and provide ongoing maintenance.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Custom Development - Zion Tech Group</title>
        <meta name="description" content="Professional custom software development services tailored to your business needs." />
        <meta name="keywords" content="custom development, software development, bespoke solutions, system integration" />
      </Helmet>
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
                <Code className="w-8 h-8 text-blue-600" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Custom Development
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Transform your ideas into powerful, custom software solutions that drive your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                  Start Your Project
                </button>
                <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive custom development services to meet your unique business requirements.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Development Process
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We follow a proven methodology to ensure your project is delivered on time and within budget.
              </p>
            </div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {process.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Build Your Custom Solution?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project requirements and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CustomDevelopmentPage;