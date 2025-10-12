'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Mail, MessageSquare, Brain, Settings, Zap, Shield } from 'lucide-react';

export default function AIEmailAssistant() {
  const features = [
    {
      icon: <Mail className="w-6 h-6 text-cyan-400" />,
      title: 'Smart Classification',
      description: 'Automatically categorize and prioritize emails based on content and sender.'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-purple-400" />,
      title: 'Auto-Responses',
      description: 'Generate intelligent responses using AI to handle common inquiries.'
    },
    {
      icon: <Brain className="w-6 h-6 text-yellow-400" />,
      title: 'Sentiment Analysis',
      description: 'Understand the emotional tone of emails to respond appropriately.'
    },
    {
      icon: <Settings className="w-6 h-6 text-green-400" />,
      title: 'Workflow Automation',
      description: 'Set up automated workflows to streamline email management processes.'
    },
    {
      icon: <Zap className="w-6 h-6 text-blue-400" />,
      title: 'Quick Actions',
      description: 'One-click actions for common tasks like scheduling, forwarding, and archiving.'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" />,
      title: 'Security Features',
      description: 'Advanced spam detection and phishing protection to keep your inbox safe.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Email Assistant - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered email assistant that helps you manage, organize, and respond to emails with intelligent automation." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI Email
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Assistant
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Transform your email management with our intelligent AI assistant that 
                categorizes, prioritizes, and helps you respond to emails efficiently.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="inline-flex items-center bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  to="/demo" 
                  className="inline-flex items-center border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-semibold py-4 px-8 rounded-lg transition-colors"
                >
                  View Demo
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to master your email workflow
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700 hover:border-cyan-400 transition-colors">
                  <div className="mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Master Your Email?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of professionals who have transformed their email productivity 
              with our AI assistant.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all transform hover:scale-105"
            >
              Start Your Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}