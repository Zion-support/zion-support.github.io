'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, Zap, Shield } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Advanced artificial intelligence to transform your business operations'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to your success'
    }
  ];

  const stats = [
    { label: 'Projects Completed', value: '500+' },
    { label: 'Happy Clients', value: '200+' },
    { label: 'Years Experience', value: '10+' },
    { label: 'Team Members', value: '50+' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Helmet>
        <title>Zion Tech Group - AI & IT Solutions</title>
        <meta name="description" content="Leading provider of AI and IT solutions for modern businesses. Transform your operations with our cutting-edge technology." />
        <meta name="keywords" content="AI solutions, IT services, artificial intelligence, business automation, technology consulting" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Transform Your Business with
            <span className="text-blue-600"> AI & IT Solutions</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Leading provider of cutting-edge artificial intelligence and information technology solutions 
            that drive innovation and growth for modern businesses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
              Get Started
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button className="px-8 py-4 border border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional value through innovative technology solutions and expert guidance.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-lg">
                <feature.icon className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-blue-600">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join hundreds of companies that trust Zion Tech Group for their AI and IT needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Your Project
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;