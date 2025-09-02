import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Brain, Cloud, Shield, Zap, Users, Star, CheckCircle, TrendingUp, Award } from 'lucide-react';

export default function Home() {
  const featuredServices = [
    {
      title: 'AI Voice Cloning Studio',
      description: 'Professional voice cloning and synthesis platform for content creators, podcasters, and businesses.',
      price: 'Starting at $49/month',
      icon: '🎤',
      link: '/services/ai-voice-cloning-studio'
    },
    {
      title: 'Smart Inventory Optimizer',
      description: 'AI-powered inventory management system that predicts demand and reduces carrying costs by 25-40%.',
      price: 'Starting at $79/month',
      icon: '📦',
      link: '/services/smart-inventory-optimizer'
    },
    {
      title: 'Zero Trust Security Implementation',
      description: 'Comprehensive zero trust security architecture with identity verification and continuous monitoring.',
      price: 'Starting at $15,000',
      icon: '🔒',
      link: '/services/zero-trust-security-implementation'
    },
    {
      title: 'Generative AI Content Platform',
      description: 'Advanced generative AI platform for creating high-quality text, images, videos, and code.',
      price: 'Starting at $5,000',
      icon: '🎨',
      link: '/services/generative-ai-content-platform'
    }
  ];

  const stats = [
    { number: '500+', label: 'Successful Projects' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '24/7', label: 'Expert Support' },
    { number: '50+', label: 'Countries Served' }
  ];

  const benefits = [
    {
      icon: <Brain className="w-8 h-8 text-blue-600" />,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence and machine learning technologies to automate and optimize your business processes.'
    },
    {
      icon: <Cloud className="w-8 h-8 text-green-600" />,
      title: 'Cloud-Native Architecture',
      description: 'Scalable, secure, and cost-effective cloud solutions designed for modern businesses and enterprises.'
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: 'Enterprise Security',
      description: 'Bank-level security with SOC 2 compliance, zero trust architecture, and 24/7 monitoring.'
    },
    {
      icon: <Zap className="w-8 h-8 text-orange-600" />,
      title: 'Rapid Deployment',
      description: 'Quick implementation with proven methodologies and best practices to get you up and running fast.'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI, IT & Micro SaaS Solutions Provider</title>
        <meta name="description" content="Transform your business with our innovative AI services, IT solutions, and micro SaaS applications. Expert team delivering cutting-edge technology solutions with 99.9% uptime guarantee." />
        <meta name="keywords" content="AI services, IT solutions, micro SaaS, cloud computing, cybersecurity, machine learning, automation" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://ziontechgroup.com" />
      </Head>
      
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="flex items-center justify-center mb-6">
                <Award className="h-8 w-8 text-blue-400 mr-3" />
                <span className="text-lg font-semibold text-blue-400">Trusted by 500+ Companies Worldwide</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Transform Your Business with
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> AI & Technology</span>
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto text-gray-200 leading-relaxed">
                Leading provider of innovative AI services, IT solutions, and micro SaaS applications. 
                We deliver cutting-edge technology solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link href="/contact">
                  <span className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer inline-flex items-center">
                    Get Free Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </span>
                </Link>
                <Link href="/services">
                  <span className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors cursor-pointer">
                    Explore Our Services
                  </span>
                </Link>
              </div>
              
              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl md:text-4xl font-bold text-blue-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Featured Services */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Services</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover our most popular and innovative solutions designed to transform your business operations.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {featuredServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="text-lg font-bold text-blue-600 mb-4">{service.price}</div>
                  <Link href={service.link}>
                    <span className="text-blue-600 hover:text-blue-700 font-semibold cursor-pointer inline-flex items-center">
                      Learn More
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Zion Tech Group?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We deliver results-driven solutions with proven methodologies and cutting-edge technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="mb-4 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that trust Zion Tech Group for their technology needs. 
              Get started with a free consultation today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <span className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer inline-flex items-center">
                  Get Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </span>
              </Link>
              <Link href="/services">
                <span className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 rounded-lg font-semibold transition-colors cursor-pointer">
                  View All Services
                </span>
              </Link>
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-12 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Get in Touch</h3>
              <div className="grid md:grid-cols-3 gap-8 text-gray-600">
                <div>
                  <div className="font-semibold mb-2">Phone</div>
                  <a href="tel:+13024640950" className="hover:text-blue-600">+1 302 464 0950</a>
                </div>
                <div>
                  <div className="font-semibold mb-2">Email</div>
                  <a href="mailto:kleber@ziontechgroup.com" className="hover:text-blue-600">kleber@ziontechgroup.com</a>
                </div>
                <div>
                  <div className="font-semibold mb-2">Address</div>
                  <div>364 E Main St STE 1008<br />Middletown DE 19709</div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}