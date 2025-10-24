import React from 'react';
import Link from 'next/link';
import { ArrowRight, MessageCircle, Brain, Zap, Users, BarChart, Settings, Globe, Shield, Clock, CheckCircle } from 'lucide-react';

const features = [
  {
    title: 'No-Code Builder',
    description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    title: 'AI-Powered Responses',
    description: 'Leverage advanced AI to provide intelligent, context-aware responses to user queries',
    color: 'from-purple-500 to-pink-500',
  },
  {
    title: 'Multi-Channel Support',
    description: 'Deploy your chatbot across websites, social media, and messaging platforms',
    color: 'from-green-500 to-teal-500',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track performance, user engagement, and conversation insights with detailed analytics',
    color: 'from-orange-500 to-red-500',
  },
  {
    title: 'Custom Integrations',
    description: 'Connect with your existing tools and systems for seamless workflow integration',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    title: '24/7 Availability',
    description: 'Provide round-the-clock customer support and assistance with your AI chatbot',
    color: 'from-pink-500 to-rose-500',
  },
];

const benefits = [
  {
    icon: <Users className="w-6 h-6" />,
    title: 'Improved Customer Experience',
    description: 'Provide instant, accurate responses to customer queries 24/7',
  },
  {
    icon: <BarChart className="w-6 h-6" />,
    title: 'Increased Efficiency',
    description: 'Reduce response time and handle multiple conversations simultaneously',
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: 'Cost Effective',
    description: 'Reduce customer support costs while maintaining high service quality',
  },
  {
    icon: <Globe className="w-6 h-6" />,
    title: 'Scalable Solution',
    description: 'Easily scale your customer support as your business grows',
  },
];

export default function AIChatbotBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              AI <span className="text-blue-600">Chatbot Builder</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              Create intelligent, conversational AI chatbots that engage your customers 
              and streamline your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Start Building
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
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to build, deploy, and manage intelligent chatbots.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-4`}>
                  <MessageCircle className="w-8 h-8 text-white" />
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
              Why Choose Our Chatbot Builder?
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Transform your customer support with intelligent automation.
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
            Ready to Build Your AI Chatbot?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Start creating intelligent chatbots that will revolutionize your customer experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-gray-300 text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 transition-colors"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
