'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight, Star, Zap, Brain, Shield, Globe, BarChart, Users, Target } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time data visualization and predictive analytics powered by AI',
      features: [
        'Real-time data processing',
        'Predictive analytics',
        'Interactive dashboards',
        'Custom reporting',
        'Automated insights'
      ],
      icon: BarChart,
      duration: '5 min',
      difficulty: 'Beginner'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Customer Service Bot',
      description: 'Intelligent chatbot that handles customer inquiries 24/7',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Escalation to human agents',
        'Learning from interactions'
      ],
      icon: Brain,
      duration: '3 min',
      difficulty: 'Beginner'
    },
    {
      id: 'ai-security',
      title: 'AI Security Monitoring',
      description: 'Advanced threat detection and security monitoring system',
      features: [
        'Real-time threat detection',
        'Behavioral analysis',
        'Automated response',
        'Compliance monitoring',
        'Incident reporting'
      ],
      icon: Shield,
      duration: '7 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'ai-automation',
      title: 'Process Automation',
      description: 'Automate repetitive tasks and workflows with AI',
      features: [
        'Workflow automation',
        'Document processing',
        'Data extraction',
        'Task scheduling',
        'Performance monitoring'
      ],
      icon: Zap,
      duration: '6 min',
      difficulty: 'Intermediate'
    },
    {
      id: 'ai-recommendations',
      title: 'AI Recommendation Engine',
      description: 'Personalized recommendations for products and content',
      features: [
        'Personalized recommendations',
        'Collaborative filtering',
        'Content-based filtering',
        'A/B testing',
        'Performance analytics'
      ],
      icon: Target,
      duration: '4 min',
      difficulty: 'Beginner'
    },
    {
      id: 'ai-insights',
      title: 'Business Intelligence',
      description: 'AI-powered business insights and decision support',
      features: [
        'Data visualization',
        'Trend analysis',
        'Forecasting',
        'Anomaly detection',
        'Executive dashboards'
      ],
      icon: Globe,
      duration: '8 min',
      difficulty: 'Advanced'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, technology demo, interactive demo, solution showcase" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Interactive Demos
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand. Try our interactive demos to see how our technology can transform your business.
            </p>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Choose a Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select from our range of interactive demos to explore different AI and IT solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border cursor-pointer transition-all duration-300 hover:bg-white/10 ${
                  selectedDemo === demo.id
                    ? 'border-cyan-500 shadow-2xl shadow-cyan-500/20'
                    : 'border-white/10 hover:border-white/20'
                }`}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <demo.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{demo.title}</h3>
                <p className="text-gray-300 text-sm mb-4 text-center">{demo.description}</p>
                <div className="flex items-center justify-center gap-4 text-sm text-gray-400 mb-4">
                  <span className="flex items-center gap-1">
                    <Play className="w-4 h-4" />
                    {demo.duration}
                  </span>
                  <span className="px-2 py-1 bg-white/10 rounded-full">
                    {demo.difficulty}
                  </span>
                </div>
                <div className="text-center">
                  <span className="text-cyan-400 font-semibold">Try Demo</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected Demo Details */}
      {selectedDemoData && (
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6">
                  <selectedDemoData.icon className="w-10 h-10 text-white" />
                </div>
                <h2 className="text-4xl font-bold text-white mb-4">{selectedDemoData.title}</h2>
                <p className="text-xl text-gray-300 mb-8">{selectedDemoData.description}</p>
                
                <div className="space-y-4 mb-8">
                  <h3 className="text-2xl font-bold text-white mb-4">Key Features:</h3>
                  <ul className="space-y-3">
                    {selectedDemoData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center gap-4 mb-8">
                  <div className="flex items-center gap-2 text-gray-300">
                    <Play className="w-5 h-5" />
                    <span>Duration: {selectedDemoData.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <Star className="w-5 h-5" />
                    <span>Level: {selectedDemoData.difficulty}</span>
                  </div>
                </div>

                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center">
                  <Play className="w-5 h-5 mr-2" />
                  Start Demo
                </button>
              </div>

              <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mb-6">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-white text-lg">Interactive Demo</p>
                    <p className="text-gray-300 text-sm">Click to start</p>
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-gray-300 mb-4">
                    Experience the full functionality of our {selectedDemoData.title} solution.
                  </p>
                  <div className="flex items-center justify-center gap-2 text-cyan-400">
                    <span>Live Demo Available</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Experience the power of our AI and IT solutions. Contact us to schedule a personalized demo for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Users className="w-5 h-5 mr-2" />
              Schedule Custom Demo
            </a>
            <a
              href="/contact"
              className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center"
            >
              <Target className="w-5 h-5 mr-2" />
              Contact Sales
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DemoPage;