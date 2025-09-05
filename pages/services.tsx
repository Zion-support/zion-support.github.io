import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

export default function Services() {
  const services = [
    {
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions including machine learning, natural language processing, and computer vision.',
      features: ['Machine Learning Models', 'AI Chatbots', 'Predictive Analytics', 'Computer Vision'],
      href: '/ai-services'
    },
    {
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure and cloud solutions to modernize your technology stack.',
      features: ['Cloud Migration', 'DevOps Implementation', 'Infrastructure Management', 'Security Solutions'],
      href: '/it-services'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Custom software-as-a-service applications designed to solve specific business challenges.',
      features: ['Custom Web Applications', 'API Development', 'Database Design', 'User Management'],
      href: '/micro-saas'
    },
    {
      title: 'Cybersecurity',
      description: 'Advanced security solutions to protect your business from evolving cyber threats.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      href: '/cybersecurity'
    },
    {
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights with our advanced analytics solutions.',
      features: ['Business Intelligence', 'Data Visualization', 'Predictive Modeling', 'Real-time Dashboards'],
      href: '/data-analytics'
    },
    {
      title: 'Digital Transformation',
      description: 'Complete digital transformation services to modernize your business processes.',
      features: ['Process Automation', 'Workflow Optimization', 'Technology Integration', 'Change Management'],
      href: '/digital-transformation'
    }
  ];

  return (
    <div>
      <Head>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Explore our comprehensive range of technology services including AI, IT solutions, micro SaaS development, and more." />
      </Head>
      
      <main className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Services
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer a comprehensive range of technology services designed to help your business thrive in the digital age.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link href={service.href} className="block w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center">
                  Learn More
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8">
              Let's discuss how our services can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Contact Us
              </Link>
              <Link href="/pricing" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}