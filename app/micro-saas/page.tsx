import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Shield, Globe, Code, Smartphone, Brain, Cloud } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasServices = [
    {
      icon: Brain,
      title: 'AI Customer Support Chatbot',
      description: 'Intelligent chatbot that handles customer inquiries 24/7 with natural language processing.',
      features: ['24/7 Support', 'Multi-language', 'CRM Integration', 'Analytics Dashboard'],
      price: '$99/month',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'AI Email Marketing Automation',
      description: 'Automated email campaigns with AI-powered personalization and optimization.',
      features: ['Smart Segmentation', 'A/B Testing', 'Analytics', 'Template Library'],
      price: '$149/month',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Smartphone,
      title: 'AI Expense Tracker',
      description: 'Smart expense tracking with receipt scanning and automated categorization.',
      features: ['Receipt Scanning', 'Auto Categorization', 'Reports', 'Team Management'],
      price: '$79/month',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Globe,
      title: 'AI Inventory Manager',
      description: 'Intelligent inventory management with demand forecasting and automated reordering.',
      features: ['Demand Forecasting', 'Auto Reordering', 'Multi-location', 'Analytics'],
      price: '$199/month',
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Zap,
      title: 'AI Project Manager',
      description: 'Smart project management with AI-powered task prioritization and resource allocation.',
      features: ['Task Automation', 'Resource Planning', 'Progress Tracking', 'Team Collaboration'],
      price: '$129/month',
      color: 'from-indigo-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'AI Social Media Scheduler',
      description: 'Automated social media posting with AI-optimized timing and content suggestions.',
      features: ['Auto Posting', 'Content Suggestions', 'Analytics', 'Multi-platform'],
      price: '$89/month',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get up and running in minutes with our easy-to-use interface and pre-built templates.'
    },
    {
      icon: Shield,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with 99.9% uptime guarantee and data encryption.'
    },
    {
      icon: Globe,
      title: 'Scalable',
      description: 'Grows with your business from startup to enterprise with flexible pricing plans.'
    },
    {
      icon: Code,
      title: 'Customizable',
      description: 'Tailor the solution to your specific needs with our flexible configuration options.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SaaS Services - AI-Powered Business Solutions | Zion Tech Group</title>
        <meta name="description" content="Discover our micro SaaS services including AI chatbots, email automation, expense tracking, inventory management, and more. Affordable AI solutions for small businesses." />
        <meta name="keywords" content="micro SaaS, AI solutions, business automation, small business tools, AI chatbots, email automation" />
      </Helmet>

      <div className="min-h-screen bg-gray-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SaaS
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Affordable AI-powered micro SaaS solutions designed for small businesses. Get enterprise-level features at startup-friendly prices.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/pricing"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SaaS Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our range of AI-powered micro SaaS solutions designed to solve specific business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasServices.map((service, index) => (
                <div key={index} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors duration-300">
                  <div className={`w-12 h-12 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <Link
                      to="/contact"
                      className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${service.color} text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity duration-300`}
                    >
                      Get Started
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 bg-gray-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SaaS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SaaS solutions are designed with small businesses in mind, offering enterprise features at affordable prices.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and experience the power of AI-driven micro SaaS solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Start Free Trial
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/ai-services"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View AI Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;