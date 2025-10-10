'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Star, Users, Zap, Shield, Brain } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights.',
      features: [
        'Real-time data visualization',
        'AI-powered predictions',
        'Custom report generation',
        'Interactive dashboards'
      ],
      video: '/api/placeholder/800/450',
      duration: '5 min'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Customer Support',
      description: 'Experience our intelligent chatbot that provides 24/7 customer support.',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Sentiment analysis',
        'Human handoff capabilities'
      ],
      video: '/api/placeholder/800/450',
      duration: '3 min'
    },
    {
      id: 'cloud-migration',
      title: 'Cloud Migration',
      description: 'Watch how we seamlessly migrate your infrastructure to the cloud.',
      features: [
        'Automated migration tools',
        'Zero downtime migration',
        'Cost optimization',
        'Security enhancement'
      ],
      video: '/api/placeholder/800/450',
      duration: '7 min'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Quick Setup',
      description: 'Get started in minutes, not months'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-500" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and 99.9% uptime'
    },
    {
      icon: <Brain className="w-8 h-8 text-purple-500" />,
      title: 'AI-Powered',
      description: 'Cutting-edge artificial intelligence'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Expert Support',
      description: '24/7 technical support from our experts'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Watch live demos of our AI and IT solutions. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, technology showcase, live demonstration" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              See Our Solutions <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">in Action</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Watch live demos of our AI and IT solutions. Experience the power of our technology before you buy.
            </p>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Choose a Demo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our range of solution demos to see how we can help your business.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                    selectedDemo === demo.id
                      ? 'border-cyan-500 bg-cyan-500/10'
                      : 'border-white/20 bg-white/5 hover:border-cyan-400/50'
                  }`}
                >
                  <h3 className="text-xl font-bold text-white mb-3">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Play className="w-4 h-4" />
                    <span>{demo.duration} demo</span>
                  </div>
                </button>
              ))}
            </div>

            {/* Selected Demo */}
            {selectedDemoData && (
              <div className="glass-card quantum-field">
                <div className="p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                      <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-4">Key Features:</h4>
                        <ul className="space-y-2">
                          {selectedDemoData.features.map((feature, index) => (
                            <li key={index} className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2">
                        <Play className="w-5 h-5" />
                        Watch Demo
                      </button>
                    </div>
                    
                    <div className="relative">
                      <div className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden">
                        <img
                          src={selectedDemoData.video}
                          alt={selectedDemoData.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                          <button className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our solutions are designed to deliver real business value with cutting-edge technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="holographic-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo with our experts and see how our solutions can transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Schedule Demo
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default DemoPage;