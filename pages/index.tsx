import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain, Cloud, Shield, Code, Zap, Users, TrendingUp, Star, Globe, Target } from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: <Brain className="h-8 w-8" />,
      title: 'AI Services',
      description: 'Advanced AI solutions including computer vision, NLP, and predictive analytics',
      href: '/services/ai-services',
      color: 'blue'
    },
    {
      icon: <Code className="h-8 w-8" />,
      title: 'Micro SaaS',
      description: 'Custom software solutions and innovative micro SaaS platforms',
      href: '/services/micro-saas',
      color: 'green'
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: 'IT Services',
      description: 'Cloud platforms, DevOps, and comprehensive IT infrastructure solutions',
      href: '/services/it-services',
      color: 'purple'
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: 'Cybersecurity',
      description: 'Enterprise-grade security frameworks and compliance automation',
      href: '/services/cybersecurity',
      color: 'red'
    }
  ];

  const newServices = [
    {
      icon: <TrendingUp className="h-6 w-6" />,
      title: 'Affiliate Marketing Tracking',
      description: 'Advanced tracking platform with fraud detection and automated payouts',
      href: '/services/affiliate-marketing-tracking',
      price: 'From $99/month'
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: 'Email Automation',
      description: 'AI-powered email campaigns with personalization and analytics',
      href: '/services/email-automation',
      price: 'From $49/month'
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: 'AI Content Tools',
      description: 'Generate high-quality content with AI-powered writing and design tools',
      href: '/services/ai-content-tools',
      price: 'From $79/month'
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: 'Helpdesk Platform',
      description: 'Comprehensive customer support with AI chatbots and ticket management',
      href: '/services/helpdesk-platform',
      price: 'From $29/month'
    }
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading AI & Technology Solutions Provider</title>
        <meta name="description" content="Leading provider of revolutionary technology solutions, AI services, micro SaaS platforms, and cutting-edge innovations. Transform your business with intelligent automation." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="AI services, micro SaaS, IT solutions, cybersecurity, computer vision, NLP, email automation, helpdesk platform" />
      </Head>
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Welcome to Zion Tech Group
            </h1>
            <p className="text-xl sm:text-2xl text-gray-200 max-w-4xl mx-auto mb-8 leading-relaxed">
              Leading provider of revolutionary technology solutions, AI services, and cutting-edge innovations. 
              Transform your business with intelligent automation and scalable platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors text-lg font-semibold"
              >
                Get Started Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-900 transition-colors text-lg font-semibold"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and innovation.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm hover:shadow-lg transition-all duration-300 hover:border-blue-300">
                <div className="flex items-center gap-x-4 mb-6">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-lg bg-${service.color}-600 group-hover:bg-${service.color}-700 transition-colors`}>
                    {service.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{service.title}</h3>
                    <p className="text-sm text-gray-600">Comprehensive Solutions</p>
                  </div>
                </div>
                <p className="text-gray-600 mb-6">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* New Services Section */}
      <section className="py-24 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <Star className="h-6 w-6 text-yellow-500 mr-2" />
              <span className="text-base font-semibold leading-7 text-yellow-600">New & Innovative</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Latest Micro SaaS Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge micro SaaS platforms designed to solve specific business challenges with intelligent automation.
            </p>
          </div>
          
          <div className="grid gap-6 lg:grid-cols-2">
            {newServices.map((service, index) => (
              <div key={index} className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-100 group-hover:bg-blue-200 transition-colors">
                      {service.icon}
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">{service.title}</h3>
                      <p className="text-sm text-blue-600 font-medium">{service.price}</p>
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-500 transition-colors group"
                >
                  Explore Service
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver exceptional results through innovation, expertise, and cutting-edge technology.
            </p>
          </div>
          
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Average 3x improvement in efficiency and 2x increase in ROI for our clients across all industries.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 mb-6">
                <Zap className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Rapid Deployment</h3>
              <p className="text-gray-600">
                Get your solutions up and running in weeks, not months, with our agile development methodology.
              </p>
            </div>
            
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 mb-6">
                <Globe className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Global Expertise</h3>
              <p className="text-gray-600">
                World-class team of experts with deep experience in AI, cloud computing, and enterprise solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            Let's discuss your project requirements and how we can help you achieve your goals with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-blue-600 px-8 py-4 rounded-lg hover:bg-gray-50 transition-colors text-lg font-semibold"
            >
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <a
              href="tel:+13024640950"
              className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-lg hover:bg-white hover:text-blue-600 transition-colors text-lg font-semibold"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
}