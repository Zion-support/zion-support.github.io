'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Brain, Shield, Zap, ArrowRight, CheckCircle, Star, Play, Calendar, Clock } from 'lucide-react';

export default function DemoPage() {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot in action',
      duration: '5 minutes',
      icon: <Brain className="w-8 h-8" />,
      features: ['Natural language processing', 'Multi-language support', 'Sentiment analysis', 'Real-time responses']
    },
    {
      id: 'ai-analytics',
      title: 'AI Analytics Demo',
      description: 'See how AI transforms your data into insights',
      duration: '10 minutes',
      icon: <Zap className="w-8 h-8" />,
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization']
    },
    {
      id: 'security-demo',
      title: 'Security Demo',
      description: 'Explore our cybersecurity solutions',
      duration: '8 minutes',
      icon: <Shield className="w-8 h-8" />,
      features: ['Threat detection', 'Automated response', 'Compliance monitoring', 'Risk assessment']
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions with interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI demo, IT solutions demo, interactive demo, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Interactive Demos
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand. Try our interactive demos to see how our technology can transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Start Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Selection */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Choose Your Demo
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Select a demo to explore our solutions and see how they can benefit your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {demos.map((demo) => (
              <div
                key={demo.id}
                onClick={() => setSelectedDemo(demo.id)}
                className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border cursor-pointer transition-all duration-300 ${
                  selectedDemo === demo.id
                    ? 'border-purple-500 bg-white/20'
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">
                    {demo.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4">{demo.title}</h3>
                  <p className="text-gray-300 mb-4">{demo.description}</p>
                  <div className="flex items-center justify-center text-gray-400 text-sm">
                    <Clock className="w-4 h-4 mr-2" />
                    {demo.duration}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Selected Demo Details */}
          {selectedDemoData && (
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-4">{selectedDemoData.title}</h3>
                  <p className="text-gray-300 mb-6">{selectedDemoData.description}</p>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-white">Features:</h4>
                    <ul className="space-y-2">
                      {selectedDemoData.features.map((feature, index) => (
                        <li key={index} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-purple-500/20 to-blue-600/20 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Play className="w-12 h-12 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-white mb-4">Ready to Start?</h4>
                    <p className="text-gray-300 mb-6">
                      Click the button below to launch the interactive demo.
                    </p>
                    <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center mx-auto">
                      <Play className="w-5 h-5 mr-2" />
                      Launch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Want a Personalized Demo?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Schedule a live demo with our experts to see how our solutions can be customized for your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Link>
            <Link 
              to="/contact" 
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              Contact Sales
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}