'use client';
import React from 'react';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import { Shield, Zap, Users, ArrowRight } from 'lucide-react';

const HomePage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations and drive innovation.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Robust security measures to protect your data and ensure compliance with industry standards.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals dedicated to delivering exceptional results for your projects.'
    }
  ];

  const services = [
    {
      title: 'AI Analytics & BI',
      description: 'Transform your data into actionable insights with our advanced AI-powered analytics platform.',
      href: '/ai-analytics'
    },
    {
      title: 'Cloud Architecture',
      description: 'Scalable and secure cloud solutions designed to grow with your business needs.',
      href: '/cloud-architecture'
    },
    {
      title: 'Web Development',
      description: 'Modern, responsive websites and web applications built with the latest technologies.',
      href: '/web-development'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications for iOS and Android devices.',
      href: '/mobile-development'
    },
    {
      title: 'Data Analytics',
      description: 'Comprehensive data analysis and visualization services to drive informed decisions.',
      href: '/data-analytics'
    },
    {
      title: 'Cybersecurity',
      description: 'Protect your business with our comprehensive cybersecurity solutions and monitoring.',
      href: '/cybersecurity'
    }
  ];

  return (
    <>
      <Navigation />
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold mb-6">
                Transform Your Business with 
                <span className="block text-yellow-300">Cutting-Edge Technology</span>
              </h1>
              <p className="text-xl mb-8 text-blue-100">
=======
        <section className="relative bg-gradient-to-br from-blue-600 to-purple-700 text-white py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto text-center">
              <h1 className="text-6xl font-bold mb-6">
                Transform Your Business with
                <span className="block text-yellow-400">AI & Technology</span>
              </h1>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
>>>>>>> cursor/fix-errors-and-merge-to-main-56bf
                Leading technology solutions provider helping businesses transform their digital
                presence with AI, cloud architecture, and innovative development services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">
                  Why Choose Zion Tech Group?
                </h2>
                <p className="text-xl text-gray-600">
                  We deliver exceptional results through innovative technology solutions
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
                    <feature.icon className="w-12 h-12 text-purple-400 mb-4" />
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
=======
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Why Choose Zion Tech Group?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-56bf
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-4">
                  Our Impact in Numbers
                </h2>
                <p className="text-xl text-blue-100">
                  Delivering measurable results for our clients
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-4xl font-bold mb-2">
                      {stat.number}
                    </div>
                    <div className="text-blue-100">
                      {stat.label}
                    </div>
=======
        {/* Services Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
                Our Services
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                  <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <a
                      href={service.href}
                      className="text-blue-600 font-medium hover:text-blue-700 transition-colors"
                    >
                      Learn More →
                    </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-56bf
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
<<<<<<< HEAD
        <section className="py-20 bg-gray-900 text-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss how our technology solutions can drive your success
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center">
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors">
                  Schedule Consultation
                </button>
=======
        <section className="py-16 bg-blue-600">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your business with cutting-edge technology solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us Today
                </a>
                <a
                  href="/about"
                  className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn More About Us
                </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-56bf
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default HomePage;