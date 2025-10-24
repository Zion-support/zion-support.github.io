'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Settings, Workflow, Globe, Server, Clock, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: Workflow,
    title: 'No-Code Builder',
    description: 'Create sophisticated chatbots without any programming knowledge using our visual interface',
    color: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Globe,
    title: 'Multi-Language Support',
    description: 'Build chatbots that communicate in multiple languages for global reach',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Brain,
    title: 'AI-Powered Responses',
    description: 'Leverage advanced AI to provide intelligent and contextual responses',
    color: 'from-green-500 to-teal-500',
  },
  {
    icon: BarChart,
    title: 'Analytics Dashboard',
    description: 'Track performance and optimize your chatbot with comprehensive analytics',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: Settings,
    title: 'Custom Integrations',
    description: 'Integrate with your existing systems and third-party applications',
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Collaborate with your team to build and manage chatbots effectively',
    color: 'from-pink-500 to-rose-500',
  },
];

export default function AIChatbotBuilderPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Chatbot Builder</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create intelligent, conversational chatbots that engage your customers and automate support with our no-code platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
            >
              Start Building
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-3 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Key Features</h2>
            <p className="text-xl text-gray-300">Everything you need to build powerful chatbots</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} rounded-full mb-4`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Your Chatbot?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start creating intelligent chatbots that will transform your customer experience.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}