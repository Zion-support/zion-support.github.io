'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Settings, Workflow, Globe, Server, Clock, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: "Workflow",
    title: 'No-Code Builder',
    description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
    color: 'from-cyan-500 to-blue-500'
  },
  {
    icon: "Globe",
    title: 'Multi-Language Support',
    description: 'Build chatbots that communicate in multiple languages for global reach',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: "Brain",
    title: 'AI-Powered Intelligence',
    description: 'Advanced natural language processing for human-like conversations',
    color: 'from-purple-500 to-pink-500'
  },
  {
    icon: "Users",
    title: 'User Management',
    description: 'Comprehensive user management and conversation history tracking',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: "BarChart",
    title: 'Analytics Dashboard',
    description: 'Real-time analytics and insights into chatbot performance',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    icon: "Settings",
    title: 'Custom Integrations',
    description: 'Seamlessly integrate with your existing systems and platforms',
    color: 'from-gray-500 to-slate-500'
  }
];

export default function AiChatbotBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Chatbot Builder</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Create intelligent, conversational chatbots that engage your customers and automate 
            support with our powerful no-code platform powered by advanced AI technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
              Start Building <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/demo" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              Try Demo
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Powerful Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon as any;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className={`w-12 h-12 mb-4 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                    <IconComponent className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Build Your Chatbot?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our AI chatbot builder to enhance 
            customer experience and streamline operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center text-lg">
              Start Building Now <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg">
              View Pricing
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}