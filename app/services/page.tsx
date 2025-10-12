import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Brain, Code, Zap, ArrowRight, CheckCircle } from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      title: 'AI Solutions',
      description: 'Cutting-edge artificial intelligence solutions to transform your business operations.',
      features: [
        'Machine Learning Models',
        'Natural Language Processing',
        'Computer Vision',
        'Predictive Analytics',
        'AI Chatbots',
        'Automated Decision Making'
      ],
      icon: Brain
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT services to keep your technology infrastructure running smoothly.',
      features: [
        'Cloud Migration',
        'Cybersecurity',
        'Network Infrastructure',
        'Database Management',
        'System Integration',
        'IT Support & Maintenance'
      ],
      icon: Code
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G technology solutions for ultra-fast connectivity and IoT.',
      features: [
        '5G Network Design',
        'Edge Computing',
        'IoT Integration',
        'Mobile Applications',
        'Data Analytics',
        'Smart City Solutions'
      ],
      icon: Zap
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery',
      description: 'We analyze your business needs and technical requirements to understand your goals.',
      icon: Users
    },
    {
      step: '02',
      title: 'Strategy',
      description: 'We develop a comprehensive strategy and roadmap tailored to your specific needs.',
      icon: Brain
    },
    {
      step: '03',
      title: 'Implementation',
      description: 'Our expert team implements the solution with precision and attention to detail.',
      icon: Code
    },
    {
      step: '04',
      title: 'Support',
      description: 'We provide ongoing support and maintenance to ensure optimal performance.',
      icon: Zap
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of AI and IT services. From AI solutions to 5G technology, we help businesses transform with cutting-edge technology." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-4xl font-bold text-white mb-6">Our Services</h1>
            <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto">
              We provide comprehensive AI and IT solutions to help businesses transform and thrive in the digital age.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-800/50 rounded-2xl p-8 hover:bg-gray-800/70 transition-all duration-300">
                <div className="flex items-center mb-6">
                  <div className="bg-cyan-500/20 p-3 rounded-lg mr-4">
                    <service.icon className="w-8 h-8 text-cyan-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{service.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Process Section */}
          <div className="mb-20">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Process</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="bg-cyan-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-cyan-500" />
                  </div>
                  <div className="text-cyan-500 font-bold text-sm mb-2">{step.step}</div>
                  <h3 className="text-xl font-semibold text-white mb-3">{step.title}</h3>
                  <p className="text-gray-300">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800/50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our services can help transform your business. Contact us today for a free consultation.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flex items-center">
              Get Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}