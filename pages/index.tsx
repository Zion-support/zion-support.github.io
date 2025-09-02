import React from 'react';
import Link from 'next/link';
import MainLayout from "../src/components/layout/MainLayout";
import { ArrowRight, CheckCircle, Zap, Shield, Users, Brain, Cloud, Code, Phone, Mail } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Brain,
      title: 'AI Services',
      description: 'Cutting-edge artificial intelligence solutions to automate and optimize your business processes.',
      href: '/services/ai-services',
      color: 'from-blue-500 to-purple-600'
    },
    {
      icon: Cloud,
      title: 'IT Services',
      description: 'Comprehensive IT infrastructure, cloud migration, and cybersecurity solutions.',
      href: '/services/it-services',
      color: 'from-green-500 to-blue-600'
    },
    {
      icon: Code,
      title: 'Micro SaaS',
      description: 'Custom software solutions and micro SaaS applications tailored to your business needs.',
      href: '/services/micro-saas',
      color: 'from-purple-500 to-pink-600'
    }
  ];

  const features = [
    '24/7 Expert Support',
    'Enterprise-Grade Security',
    'Scalable Solutions',
    'Fast Implementation',
    'Cost-Effective Pricing',
    'Proven Methodologies'
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Happy Clients' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <MainLayout
      title="Zion Tech Group - Leading Technology Solutions"
      description="Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations for businesses worldwide."
    >
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Welcome to
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations 
              that transform businesses and drive digital success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/request-quote" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Get Free Quote
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/services" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Core Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <Link 
                    href={service.href}
                    className="text-blue-600 hover:text-blue-700 font-semibold inline-flex items-center"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine cutting-edge technology with proven methodologies to deliver solutions that drive real business value. 
                Our team of experts is committed to your success.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-xl">
                <Zap className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Delivery</h3>
                <p className="text-gray-600">Rapid development and deployment of your technology solutions.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-xl">
                <Shield className="w-8 h-8 text-green-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Secure & Reliable</h3>
                <p className="text-gray-600">Enterprise-grade security and 99.9% uptime guarantee.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-xl">
                <Users className="w-8 h-8 text-purple-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Expert Team</h3>
                <p className="text-gray-600">Experienced professionals with deep industry expertise.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-xl">
                <Brain className="w-8 h-8 text-orange-600 mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">AI-Powered</h3>
                <p className="text-gray-600">Leveraging artificial intelligence for optimal results.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-200">
            Let's discuss how our technology solutions can accelerate your growth and drive digital success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
              <Phone className="w-5 h-5 mr-2" />
              Call +1 302 464 0950
            </Link>
            <Link href="mailto:kleber@ziontechgroup.com" className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center justify-center">
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Link>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}