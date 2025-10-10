'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Pause, RotateCcw, Settings, Download, Share2, ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [activeDemo, setActiveDemo] = useState(0);

  const demos = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'See how our AI analytics can transform your business data into actionable insights.',
      category: 'Analytics',
      duration: '5 min',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Interactive visualizations',
        'Automated reporting'
      ]
    },
    {
      id: 2,
      title: 'Intelligent Customer Support',
      description: 'Experience our AI chatbot handling customer inquiries with human-like responses.',
      category: 'Customer Service',
      duration: '3 min',
      features: [
        'Natural language processing',
        'Context-aware responses',
        'Multi-language support',
        'Seamless handoff to humans'
      ]
    },
    {
      id: 3,
      title: 'Automated Workflow Management',
      description: 'Watch how our AI automates complex business processes and workflows.',
      category: 'Automation',
      duration: '4 min',
      features: [
        'Process automation',
        'Exception handling',
        'Performance monitoring',
        'Custom rule creation'
      ]
    },
    {
      id: 4,
      title: 'Predictive Maintenance System',
      description: 'See how our AI predicts equipment failures before they happen.',
      category: 'Maintenance',
      duration: '6 min',
      features: [
        'Failure prediction',
        'Maintenance scheduling',
        'Cost optimization',
        'Risk assessment'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo | Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, interactive demo, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            See Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Solutions</span> in Action
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Experience our AI and IT solutions through interactive demos. See how our technology can transform your business operations.
          </p>
        </section>

        {/* Demo Selector */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {demos.map((demo, index) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(index)}
                className={`p-6 rounded-xl border transition-all duration-300 ${
                  activeDemo === index
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 border-cyan-400 text-white'
                    : 'bg-white/5 border-white/20 text-gray-300 hover:border-white/40 hover:text-white'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Play className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{demo.title}</h3>
                  <p className="text-sm mb-3">{demo.description}</p>
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-2 py-1 bg-white/20 rounded-full">
                      {demo.category}
                    </span>
                    <span>{demo.duration}</span>
                  </div>
                </div>
              </button>
            ))}
          </div>
        </section>

        {/* Active Demo */}
        <section className="mb-16">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">
                  {demos[activeDemo].title}
                </h2>
                <p className="text-gray-300">
                  {demos[activeDemo].description}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <button className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Play className="w-6 h-6 text-white" />
                </button>
                <button className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Pause className="w-6 h-6 text-white" />
                </button>
                <button className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <RotateCcw className="w-6 h-6 text-white" />
                </button>
                <button className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                  <Settings className="w-6 h-6 text-white" />
                </button>
              </div>
            </div>

            {/* Demo Area */}
            <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-lg flex items-center justify-center mb-6">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Play className="w-12 h-12 text-white" />
                </div>
                <p className="text-white text-lg">Demo Video Placeholder</p>
                <p className="text-gray-300 text-sm">Click play to start the demo</p>
              </div>
            </div>

            {/* Demo Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
                <ul className="space-y-2">
                  {demos[activeDemo].features.map((feature, index) => (
                    <li key={index} className="flex items-center space-x-2 text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Demo Controls</h3>
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
                    <Play className="w-5 h-5" />
                    <span>Start Demo</span>
                  </button>
                  <div className="flex space-x-2">
                    <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <Download className="w-4 h-4" />
                      <span>Download</span>
                    </button>
                    <button className="flex-1 bg-white/10 hover:bg-white/20 text-white font-semibold py-2 px-4 rounded-lg transition-colors flex items-center justify-center space-x-2">
                      <Share2 className="w-4 h-4" />
                      <span>Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to See More?
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Schedule a personalized demo with our team to see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default DemoPage;