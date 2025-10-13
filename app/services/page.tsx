'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Zap, Shield, Users, BarChart3, Cloud, Smartphone } from 'lucide-react';

const ServicesPage: React.FC = () => {
  const services = [
    {
      icon: Zap,
      title: 'AI Solutions',
      description: 'Advanced artificial intelligence solutions to automate and optimize your business processes.',
      features: ['Machine Learning', 'Natural Language Processing', 'Computer Vision', 'Predictive Analytics']
    },
    {
      icon: Shield,
      title: 'IT Security',
      description: 'Comprehensive cybersecurity solutions to protect your business from threats.',
      features: ['Network Security', 'Data Protection', 'Compliance', 'Incident Response']
    },
    {
      icon: Users,
      title: 'IT Consulting',
      description: 'Expert guidance to help you make the right technology decisions.',
      features: ['Technology Strategy', 'Digital Transformation', 'System Integration', 'Training']
    },
    {
      icon: BarChart3,
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights for better decision making.',
      features: ['Business Intelligence', 'Data Visualization', 'Reporting', 'KPI Tracking']
    },
    {
      icon: Cloud,
      title: 'Cloud Services',
      description: 'Scalable cloud solutions to modernize your infrastructure.',
      features: ['Cloud Migration', 'Infrastructure as Code', 'DevOps', 'Monitoring']
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Custom mobile applications for iOS and Android platforms.',
      features: ['Native Apps', 'Cross-Platform', 'UI/UX Design', 'App Store Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Our Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI and IT services including AI solutions, cybersecurity, cloud services, and mobile development." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Comprehensive AI and IT solutions designed to transform your business 
            and drive growth in the digital age.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 hover:shadow-xl transition-shadow">
                <service.icon className="h-12 w-12 text-blue-600 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-600">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Contact us today to discuss your project requirements and discover 
            how our services can help your business succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Get a Quote
            </a>
            <a
              href="/demo"
              className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Schedule Demo
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;