import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Navigation from '../src/components/Navigation';
import Footer from '../src/components/Footer';
import { Play, ArrowRight, CheckCircle, Users, Clock, Calendar, Phone, Mail, Monitor, Smartphone, Globe } from 'lucide-react';

export default function Demo() {
  const [selectedDemo, setSelectedDemo] = useState('ai-services');

  const demos = [
    {
      id: 'ai-services',
      title: 'AI Services Demo',
      description: 'See how our AI solutions can transform your business processes',
      duration: '15 minutes',
      features: ['Natural Language Processing', 'Computer Vision', 'Predictive Analytics', 'Automated Workflows']
    },
    {
      id: 'it-services',
      title: 'IT Services Demo',
      description: 'Explore our comprehensive IT infrastructure and support solutions',
      duration: '20 minutes',
      features: ['Cloud Migration', 'Security Assessment', 'Network Optimization', '24/7 Support']
    },
    {
      id: 'micro-saas',
      title: 'Micro SaaS Demo',
      description: 'Discover our scalable software-as-a-service solutions',
      duration: '25 minutes',
      features: ['Custom Development', 'API Integration', 'Scalable Architecture', 'Performance Monitoring']
    }
  ];

  const demoFeatures = [
    {
      icon: Monitor,
      title: 'Live Product Tour',
      description: 'Interactive walkthrough of our platform features and capabilities'
    },
    {
      icon: Users,
      title: 'Expert Consultation',
      description: 'One-on-one session with our technical experts and solution architects'
    },
    {
      icon: CheckCircle,
      title: 'Custom Use Cases',
      description: 'Tailored demonstrations based on your specific business requirements'
    },
    {
      icon: Clock,
      title: 'Q&A Session',
      description: 'Get answers to all your questions about our services and solutions'
    }
  ];

  const benefits = [
    'See real-world applications of our solutions',
    'Understand how our services fit your needs',
    'Get personalized recommendations',
    'Experience our platform firsthand',
    'Meet our expert team',
    'Get pricing and implementation details'
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Head>
        <title>Request a Demo | Zion Tech Group</title>
        <meta name="description" content="Schedule a personalized demo of our AI services, IT solutions, and Micro SaaS platforms. See how we can transform your business." />
        <meta name="keywords" content="demo, product tour, consultation, AI services, IT solutions, Micro SaaS" />
        <link rel="canonical" href="https://ziontechgroup.com/demo" />
      </Head>

      <Navigation />

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-6">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                <Play className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Request a Demo
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              See our solutions in action with a personalized demo tailored to your business needs. 
              Experience the power of our AI services, IT solutions, and Micro SaaS platforms.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#demo-form"
                className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
              >
                Schedule Demo Now
                <ArrowRight className="w-5 h-5 ml-2 inline" />
              </a>
              <Link
                href="/contact"
                className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:bg-gray-800 transition-all duration-300"
              >
                Contact Us Instead
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Types Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select the type of demo that best matches your interests and business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`bg-gray-900/50 border rounded-xl p-8 cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-purple-500/50 bg-purple-900/20'
                    : 'border-gray-700 hover:border-purple-500/30'
                }`}
                onClick={() => setSelectedDemo(demo.id)}
              >
                <div className="text-center">
                  <h3 className="text-2xl font-semibold mb-4">{demo.title}</h3>
                  <p className="text-gray-300 mb-6">{demo.description}</p>
                  <div className="flex items-center justify-center mb-6">
                    <Clock className="w-5 h-5 text-purple-400 mr-2" />
                    <span className="text-purple-400 font-medium">{demo.duration}</span>
                  </div>
                  <ul className="space-y-2 text-left">
                    {demo.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Features Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What to Expect
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our demos are designed to give you a comprehensive understanding of our solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {demoFeatures.map((feature, index) => (
              <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-purple-400" />
                  </div>
                  <h3 className="text-2xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Schedule a Demo?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get the most out of your demo experience with these key benefits.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center bg-gray-900/50 border border-gray-700 rounded-lg p-6">
                <CheckCircle className="w-6 h-6 text-green-400 mr-4 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Demo Form Section */}
      <section id="demo-form" className="py-20 bg-gradient-to-r from-purple-900/20 to-pink-900/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Schedule Your Demo
            </h2>
            <p className="text-xl text-gray-300">
              Fill out the form below and we'll contact you to schedule your personalized demo.
            </p>
          </div>

          <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-8">
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                    placeholder="Enter your phone number"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="Enter your company name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Demo Type *
                </label>
                <select
                  value={selectedDemo}
                  onChange={(e) => setSelectedDemo(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                >
                  {demos.map((demo) => (
                    <option key={demo.id} value={demo.id}>
                      {demo.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Tell us about your needs
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
                  placeholder="Describe your business needs and what you'd like to see in the demo..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
                >
                  Schedule My Demo
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}