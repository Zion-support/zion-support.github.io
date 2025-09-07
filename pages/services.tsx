import React from 'react';
import Layout from '../components/Layout';

export default function Services() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies like React, Next.js, and Node.js.',
      features: ['Responsive Design', 'SEO Optimization', 'Performance Optimization', 'Cross-browser Compatibility'],
      icon: '🌐'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      features: ['iOS Development', 'Android Development', 'React Native', 'Flutter'],
      icon: '📱'
    },
    {
      title: 'AI Integration',
      description: 'Artificial intelligence solutions to automate processes and enhance user experiences.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics'],
      icon: '🤖'
    },
    {
      title: 'Cloud Services',
      description: 'Cloud infrastructure setup, migration, and management for scalable applications.',
      features: ['AWS Services', 'Azure Solutions', 'Google Cloud', 'DevOps'],
      icon: '☁️'
    },
    {
      title: 'E-commerce Solutions',
      description: 'Complete e-commerce platforms with payment integration and inventory management.',
      features: ['Online Stores', 'Payment Processing', 'Inventory Management', 'Order Tracking'],
      icon: '🛒'
    },
    {
      title: 'Consulting',
      description: 'Technology consulting to help businesses make informed decisions about their digital strategy.',
      features: ['Technology Assessment', 'Digital Strategy', 'Process Optimization', 'Training'],
      icon: '💼'
    }
  ];

  return (
    <Layout 
      title="Our Services - Zion Tech Group" 
      description="Comprehensive technology services including web development, mobile apps, AI integration, and cloud solutions."
    >
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-6">Let's discuss how we can help transform your business with technology.</p>
            <a 
              href="/contact" 
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Contact Us Today
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}