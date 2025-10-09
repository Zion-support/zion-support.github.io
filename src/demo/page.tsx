'use client';
import React, { useState } from 'react';
import { Play, CheckCircle, Star, Users, Zap, Shield, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights',
      duration: '5 minutes',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      icon: '📊'
    },
    {
      id: 'ai-content',
      title: 'AI Content Writer',
      description: 'Watch our AI create engaging content for blogs, social media, and marketing',
      duration: '3 minutes',
      features: ['Blog post generation', 'Social media content', 'SEO optimization', 'Brand voice matching'],
      icon: '✍️'
    },
    {
      id: 'ai-fraud',
      title: 'AI Fraud Detection',
      description: 'Experience real-time fraud detection and prevention in action',
      duration: '4 minutes',
      features: ['Real-time monitoring', 'Pattern recognition', 'Risk scoring', 'Instant alerts'],
      icon: '🛡️'
    },
    {
      id: 'ai-automation',
      title: 'AI Workflow Automation',
      description: 'See how AI can automate your business processes and workflows',
      duration: '6 minutes',
      features: ['Process automation', 'Smart routing', 'Exception handling', 'Performance tracking'],
      icon: '⚡'
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: '100+ Happy Clients',
      description: 'Join companies already using our AI solutions'
    },
    {
      icon: Star,
      title: '5-Star Rating',
      description: 'Consistently rated excellent by our clients'
    },
    {
      icon: Zap,
      title: 'Quick Setup',
      description: 'Get started in minutes, not months'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security and compliance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            See Our AI in Action
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Experience the Power of AI Solutions
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Watch live demonstrations of our AI-powered solutions and see how they can transform your business. 
            No commitment required - just pure AI innovation in action.
          </p>
        </section>

        {/* Demo Selection */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Choose Your Demo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`cyber-card p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                  selectedDemo === demo.id ? 'ring-2 ring-cyan-400' : ''
                }`}
                onClick={() => setSelectedDemo(demo.id)}
              >
                <div className="text-4xl mb-4 text-center">{demo.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 text-center">{demo.title}</h3>
                <p className="text-gray-300 mb-4 text-sm text-center">{demo.description}</p>
                <div className="text-cyan-400 text-sm text-center mb-4">{demo.duration}</div>
                <ul className="space-y-1">
                  {demo.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Demo Video Section */}
        <section className="mb-16">
          <div className="cyber-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              {demos.find(d => d.id === selectedDemo)?.title} Demo
            </h2>
            <div className="bg-slate-800 rounded-lg p-8 text-center">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Play className="w-12 h-12 text-white ml-1" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Demo Video Coming Soon</h3>
              <p className="text-gray-300 mb-6">
                We're preparing an amazing demo video for you. In the meantime, 
                schedule a live demo with our experts to see our AI solutions in action.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold"
                >
                  Schedule Live Demo
                </a>
                <a
                  href="tel:+13024640950"
                  className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Our AI Solutions?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to See More?
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              Schedule a personalized demo with our AI experts and discover how our solutions 
              can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Schedule Your Demo
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="flex items-center justify-center gap-2 border-2 border-purple-400 text-purple-400 px-8 py-4 rounded-lg font-semibold hover:bg-purple-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                kleber@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DemoPage;