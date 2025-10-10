'use client'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Users, DollarSign, BarChart } from 'lucide-react';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      name: 'AI Content Generator',
      description: 'Generate high-quality content for blogs, social media, and marketing materials using advanced AI.',
      features: ['Content Templates', 'SEO Optimization', 'Multi-language Support', 'Brand Voice Customization'],
      price: '$29/month',
      category: 'Content Creation'
    },
    {
      name: 'Smart Analytics Dashboard',
      description: 'Real-time analytics and insights for small businesses with easy-to-understand visualizations.',
      features: ['Real-time Data', 'Custom Reports', 'Mobile App', 'Team Collaboration'],
      price: '$49/month',
      category: 'Analytics'
    },
    {
      name: 'Automated Email Marketing',
      description: 'Create, send, and track email campaigns with AI-powered personalization and automation.',
      features: ['Email Templates', 'A/B Testing', 'Automation Workflows', 'Performance Analytics'],
      price: '$39/month',
      category: 'Marketing'
    },
    {
      name: 'Project Management Tool',
      description: 'Streamline project workflows with AI-powered task management and team collaboration features.',
      features: ['Task Automation', 'Team Chat', 'Time Tracking', 'Progress Reports'],
      price: '$59/month',
      category: 'Productivity'
    },
    {
      name: 'Customer Support Bot',
      description: 'AI-powered chatbot that handles customer inquiries 24/7 with natural language processing.',
      features: ['24/7 Availability', 'Multi-language Support', 'Integration APIs', 'Analytics Dashboard'],
      price: '$79/month',
      category: 'Customer Service'
    },
    {
      name: 'Social Media Scheduler',
      description: 'Plan, schedule, and optimize social media posts across multiple platforms with AI insights.',
      features: ['Multi-platform Support', 'Optimal Timing', 'Content Suggestions', 'Performance Tracking'],
      price: '$34/month',
      category: 'Social Media'
    }
  ];

  const categories = ['All', 'Content Creation', 'Analytics', 'Marketing', 'Productivity', 'Customer Service', 'Social Media'];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Micro SaaS Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Powerful, focused software solutions designed for specific business needs. 
            Get started quickly with our ready-to-use micro SaaS products.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Quick Setup</h3>
            <p className="text-gray-300">Get up and running in minutes, not months. No complex installations or configurations.</p>
          </div>
          <div className="text-center">
            <DollarSign className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Affordable Pricing</h3>
            <p className="text-gray-300">Cost-effective solutions that provide maximum value for your investment.</p>
          </div>
          <div className="text-center">
            <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Easy to Use</h3>
            <p className="text-gray-300">Intuitive interfaces designed for users of all technical skill levels.</p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Our Micro SaaS Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasProducts.map((product, index) => (
              <div key={index} className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {product.category}
                    </span>
                    <span className="text-2xl font-bold text-white">{product.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                  <p className="text-gray-300 text-sm">{product.description}</p>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-3">
                  <button className="flex-1 bg-cyan-500 hover:bg-cyan-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm">
                    Try Free
                  </button>
                  <Link
                    to="/contact"
                    className="flex-1 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-4 py-2 rounded-lg font-semibold transition-colors text-sm text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Micro SaaS */}
        <div className="bg-slate-700/50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Why Choose Micro SaaS?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Focused Solutions</h3>
              <p className="text-gray-300 mb-4">
                Each micro SaaS product is designed to solve a specific business problem with precision and efficiency.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  No unnecessary features or complexity
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Faster implementation and adoption
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Lower learning curve for your team
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Scalable Growth</h3>
              <p className="text-gray-300 mb-4">
                Start small and scale up as your business grows. Add more micro SaaS products as needed.
              </p>
              <ul className="space-y-2">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Pay only for what you use
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Easy integration between products
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" />
                  Regular updates and improvements
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Choose from our range of micro SaaS products or let us create a custom solution for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MicroSaasPage;