import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Settings, Workflow, Globe, Server, Clock, ShoppingCart } from 'lucide-react';

const features = [
  {
    title: 'Workflow Automation',
    description: 'Automate complex business processes with intelligent workflow management.',
    icon: <Workflow className="w-8 h-8" />,
  },
  {
    title: 'AI-Powered Analytics',
    description: 'Get insights from your data with advanced AI analytics and reporting.',
    icon: <BarChart className="w-8 h-8" />,
  },
  {
    title: 'Smart Chatbots',
    description: 'Deploy intelligent chatbots that understand and respond to customer queries.',
    icon: <MessageCircle className="w-8 h-8" />,
  },
  {
    title: 'Predictive Maintenance',
    description: 'Prevent issues before they occur with AI-driven predictive analytics.',
    icon: <Settings className="w-8 h-8" />,
  },
];

const benefits = [
  {
    title: 'Increased Efficiency',
    description: 'Reduce manual work by up to 80% with intelligent automation.',
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: 'Cost Savings',
    description: 'Lower operational costs through automated processes and reduced errors.',
    icon: <Target className="w-6 h-6" />,
  },
  {
    title: 'Better Customer Experience',
    description: 'Provide 24/7 support and faster response times with AI automation.',
    icon: <Users className="w-6 h-6" />,
  },
  {
    title: 'Scalable Solutions',
    description: 'Grow your business without proportional increases in manual work.',
    icon: <Globe className="w-6 h-6" />,
  },
];

const AiAutomationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI <span className="text-blue-600">Automation</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Transform your business with intelligent automation solutions that work 24/7 
              to streamline operations and boost productivity.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Automation Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Powerful AI-driven automation tools designed to transform your business operations.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-600">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AI Automation?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Experience the power of intelligent automation and transform your business today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white bg-opacity-20 rounded-full mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Automate Your Business?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Let's discuss how AI automation can transform your operations and drive growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Start Your Automation Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AiAutomationPage;