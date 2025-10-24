'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Zap, Brain, CheckCircle, Users, BarChart, MessageCircle, Target, Settings, Workflow, Globe, Server, Clock, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: "Workflow",
    title: 'Workflow Automation',
    description: 'Automate complex business processes with intelligent workflow management.'
  },
  {
    icon: "Brain",
    title: 'Intelligent Decision Making',
    description: 'AI-powered decision making based on data analysis and business rules.'
  },
  {
    icon: "Zap",
    title: 'Process Optimization',
    description: 'Continuously optimize processes for maximum efficiency and performance.'
  },
  {
    icon: "Users",
    title: 'Team Collaboration',
    description: 'Enhance team productivity with automated collaboration tools.'
  },
  {
    icon: "BarChart",
    title: 'Analytics & Reporting',
    description: 'Get real-time insights and automated reports on your business processes.'
  },
  {
    icon: "MessageCircle",
    title: 'Communication Automation',
    description: 'Automate customer communications and internal messaging systems.'
  }
];

export default function AiAutomationPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Automation</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Transform your business with intelligent automation solutions that streamline processes, 
            reduce costs, and enhance productivity through cutting-edge AI technology.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center">
              Get Started <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/pricing" className="border border-purple-400 text-purple-400 px-8 py-3 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300">
              View Pricing
            </Link>
          </div>
        </div>

        {/* Features Section */}
        <div className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">Key Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const IconComponent = feature.icon as any;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 mb-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI automation experts help you identify opportunities and implement solutions 
            that will transform your business operations.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/contact" className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center text-lg">
              Start Your Automation Journey <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link href="/demo" className="border border-purple-400 text-purple-400 px-8 py-4 rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-lg">
              Schedule Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}