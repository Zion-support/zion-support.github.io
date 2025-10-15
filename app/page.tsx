<<<<<<< HEAD
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CpuChipIcon, CloudIcon, ShieldCheckIcon, ChartBarIcon, CogIcon, GlobeAltIcon } from '@heroicons/react/24/outline';
const services = [
  {
    icon: 'CpuChipIcon',
    title: 'AI Solutions',
    description: 'Cutting-edge artificial intelligence solutions to transform your business.',
    href: '/ai-solutions'
  },
  {
    icon: 'CloudIcon',
    title: 'Cloud Infrastructure',
    description: 'Scalable and secure cloud infrastructure solutions for modern businesses.',
    href: '/cloud-infrastructure'
  },
  {
    icon: 'ShieldCheckIcon',
    title: 'Cybersecurity',
    description: 'Comprehensive security solutions to protect your digital assets.',
    href: '/cybersecurity'
  },
  {
    icon: 'ChartBarIcon',
    title: 'Data Analytics',
    description: 'Advanced analytics and business intelligence solutions.',
    href: '/ai-analytics'
  },
  {
    icon: 'CogIcon',
    title: 'IT Services',
    description: 'Complete IT support and management services.',
    href: '/it-services'
  },
  {
    icon: 'GlobeAltIcon',
    title: 'Web Development',
    description: 'Modern, responsive web applications and websites.',
    href: '/web-development'
  }
];
export default function HomePage() {
=======
import { Helmet } from "react-helmet-async";
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Shield, Users } from 'lucide-react';

function HomePage() {
  const features = [
    {
      icon: <CheckCircle className="w-8 h-8" />,
      title: 'AI Solutions',
      description: 'Advanced AI services for your business needs.'
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'IT Services',
      description: 'Comprehensive IT solutions and support.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: '5G Solutions',
      description: 'Next-generation 5G network services.'
    }
  ];

>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
<<<<<<< HEAD
        <meta name="description" content="Leading provider of AI, cloud, and IT solutions. Transform your business with cutting-edge technology." />
        <meta name="keywords" content="AI solutions, cloud infrastructure, cybersecurity, data analytics, IT services, web development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm: 'px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Advanced AI & IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your business with cutting-edge artificial intelligence', cloud infrastructure, and innovative technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get Started
                </a>
                <a
                  href="/services"
                  className="border border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg transition-all duration-300"
                >
                  Our Services
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Services
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive technology solutions designed to accelerate your business growth and innovation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border border-gray-200"
                >
                  <div className="flex items-center mb-4">
                    <service.icon className="h-8 w-8 text-purple-600 mr-3" />
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <a
                    href={service.href}
                    className="text-purple-600 hover:text-purple-700 font-medium inline-flex items-center"
                  >
                    Learn More
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600 to-cyan-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can drive your success.
            </p>
            <a
              href="/contact"
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Contact Us Today
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
=======
        <meta name="description" content="Professional AI, IT, and 5G solutions for your business" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional AI, IT, and 5G solutions for your business needs.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-lg">
                <div className="text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
          
          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomePage;
>>>>>>> 12ad1f6b6cfd812b560a1dd10f09dfa9de4eb0ce
