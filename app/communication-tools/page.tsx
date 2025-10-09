'use client';
import React from 'react';
import { MessageSquare, Video, Phone, Mail, ArrowRight, CheckCircle, Star, Users, Shield, Clock } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CommunicationToolsPage: React.FC = () => {
  const features = [
    {
      icon: MessageSquare,
      title: 'Team Chat & Messaging',
      description: 'Real-time messaging platform with channels, direct messages, and file sharing capabilities.',
      benefits: ['Real-time messaging', 'File sharing', 'Message history']
    },
    {
      icon: Video,
      title: 'Video Conferencing',
      description: 'HD video calls and meetings with screen sharing, recording, and collaboration tools.',
      benefits: ['HD video calls', 'Screen sharing', 'Meeting recording']
    },
    {
      icon: Phone,
      title: 'Voice Communication',
      description: 'Crystal-clear voice calls with advanced features like call recording and transcription.',
      benefits: ['Voice calls', 'Call recording', 'Transcription']
    },
    {
      icon: Mail,
      title: 'Email Integration',
      description: 'Seamless email integration with smart filtering, scheduling, and automation features.',
      benefits: ['Email management', 'Smart filtering', 'Automation']
    }
  ];

  const tools = [
    {
      title: 'Slack Alternative',
      description: 'Team collaboration platform with advanced features.',
      icon: MessageSquare
    },
    {
      title: 'Zoom Alternative',
      description: 'Video conferencing solution with enterprise features.',
      icon: Video
    },
    {
      title: 'WhatsApp Business',
      description: 'Business messaging and customer communication.',
      icon: Phone
    },
    {
      title: 'Email Marketing',
      description: 'Automated email campaigns and newsletters.',
      icon: Mail
    }
  ];

  const stats = [
    { number: '10K+', label: 'Active Users' },
    { number: '99.9%', label: 'Uptime' },
    { number: '50+', label: 'Integrations' },
    { number: '24/7', label: 'Support' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Communication Tools
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Streamline team communication with our comprehensive suite of communication tools. 
              From messaging to video calls, keep your team connected and productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button inline-flex items-center">
                Get Started <ArrowRight className="ml-2 w-4 h-4" />
              </button>
              <button className="px-8 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-gray-900 transition-all">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Powerful Communication Features</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Our communication tools are designed to enhance collaboration and productivity 
              with intuitive interfaces and powerful features.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            {features.map((feature, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold">{feature.title}</h3>
                </div>
                <p className="text-gray-300 mb-6">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Available Tools</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Choose from our comprehensive suite of communication tools designed for modern teams.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <tool.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{tool.title}</h3>
                <p className="text-gray-400">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Connect Your Team Today</h2>
          <p className="text-xl mb-8 text-purple-100">
            Start using our communication tools to improve team collaboration and productivity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all">
              Start Free Trial
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all">
              View Pricing
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommunicationToolsPage;