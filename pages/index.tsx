import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Check, Star, Users, Zap, Shield } from 'lucide-react';

export default function Home() {
  const services = [
    {
      name: 'AI & Machine Learning',
      description: 'Advanced AI solutions for business automation and intelligence',
      href: '/services/ai-machine-learning',
      icon: '🤖'
    },
    {
      name: 'Micro SaaS Solutions',
      description: 'Specialized software solutions for specific business needs',
      href: '/services/micro-saas',
      icon: '⚡'
    },
    {
      name: 'AI Content Creation',
      description: 'Generate high-quality content at scale with AI-powered tools',
      href: '/services/ai-content-creation',
      icon: '✍️'
    },
    {
      name: 'Email Automation',
      description: 'Automate email marketing campaigns with intelligent sequences',
      href: '/services/email-automation',
      icon: '📧'
    },
    {
      name: 'Customer Support Platform',
      description: 'AI-powered customer support with chatbots and ticketing',
      href: '/services/customer-support',
      icon: '🎧'
    },
    {
      name: 'Event Management',
      description: 'Complete event planning and management solution',
      href: '/services/event-management',
      icon: '📅'
    }
  ];

  const benefits = [
    'Reduce operational costs by 50%',
    'Increase productivity by 70%',
    'Improve business efficiency by 60%',
    'Scale operations without proportional cost increase',
    'Enhance customer experience and satisfaction',
    'Accelerate time-to-market for new features'
  ];

  return (
    <>
      <Head>
        <title>Zion Tech Group - Leading Technology Solutions Provider</title>
        <meta name="description" content="Zion Tech Group provides cutting-edge technology solutions for modern businesses. From AI development to cloud architecture, we help companies transform their digital presence." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="bg-white shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-6">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-xl">Z</span>
                </div>
                <div className="ml-3">
                  <h1 className="text-xl font-bold text-gray-900">Zion Tech Group</h1>
                  <p className="text-xs text-gray-600">Innovation & Technology</p>
                </div>
              </div>
              <nav className="hidden md:flex space-x-8">
                <Link href="/" className="text-gray-900 hover:text-blue-600">Home</Link>
                <Link href="/services" className="text-gray-700 hover:text-blue-600">Services</Link>
                <Link href="/about" className="text-gray-700 hover:text-blue-600">About</Link>
                <Link href="/contact" className="text-gray-700 hover:text-blue-600">Contact</Link>
              </nav>
              <Link href="/contact" className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                Get Started
              </Link>
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 py-20 text-center">
          <div className="max-w-5xl mx-auto px-6">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Transform Your Business with
              <span className="block text-cyan-300">AI & Technology Solutions</span>
            </h1>
            <p className="text-blue-100 text-xl mb-8 max-w-3xl mx-auto">
              Zion Tech Group provides cutting-edge AI, micro SaaS, and technology solutions that drive growth, efficiency, and innovation for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/services" className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
                Explore Services <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/contact" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
                Get Started
              </Link>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.name}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link 
                  href={service.href}
                  className="w-full bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
                >
                  Learn More <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Choose Zion Tech Group?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
                  <div className="flex items-center mb-3">
                    <Check className="w-6 h-6 text-green-500 mr-3" />
                    <h3 className="text-lg font-semibold text-gray-900">Performance</h3>
                  </div>
                  <p className="text-gray-600">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-blue-600">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform Your Business?</h2>
            <p className="text-blue-100 text-xl mb-8">
              Get started with our comprehensive technology solutions today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="px-8 py-3 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-colors inline-flex items-center">
                Get Started <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
              <Link href="/services" className="px-8 py-3 border border-white text-white rounded-lg hover:bg-white/10 transition-colors inline-flex items-center">
                View Services
              </Link>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="col-span-2">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">Z</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Zion Tech Group</h3>
                    <p className="text-gray-400 text-sm">Innovation & Technology</p>
                  </div>
                </div>
                <p className="text-gray-400 mb-6 max-w-md">
                  Empowering businesses with cutting-edge technology solutions, AI innovation,
                  and digital transformation expertise to drive growth and competitive advantage.
                </p>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Services</h4>
                <ul className="space-y-2">
                  <li><Link href="/services/ai-machine-learning" className="text-gray-400 hover:text-white transition-colors text-sm">AI & Machine Learning</Link></li>
                  <li><Link href="/services/micro-saas" className="text-gray-400 hover:text-white transition-colors text-sm">Micro SaaS Solutions</Link></li>
                  <li><Link href="/services/ai-content-creation" className="text-gray-400 hover:text-white transition-colors text-sm">AI Content Creation</Link></li>
                  <li><Link href="/services/email-automation" className="text-gray-400 hover:text-white transition-colors text-sm">Email Automation</Link></li>
                </ul>
              </div>
              <div>
                <h4 className="text-white font-semibold mb-4">Contact</h4>
                <div className="space-y-2 text-gray-400 text-sm">
                  <p><strong>Phone:</strong> +1 302 464 0950</p>
                  <p><strong>Email:</strong> kleber@ziontechgroup.com</p>
                  <p><strong>Address:</strong> 364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            <div className="border-t border-gray-800 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Zion Tech Group. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}