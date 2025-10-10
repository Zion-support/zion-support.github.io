'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, ArrowRight, CheckCircle, Star, Zap, Shield, BarChart, Users } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Experience real-time AI-powered analytics and insights for your business data.',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom reporting',
        'Interactive dashboards'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-cyan-600'
    },
    {
      id: 'ai-chatbot',
      title: 'AI Customer Service Bot',
      description: 'See how our AI chatbot can handle customer inquiries and provide instant support.',
      features: [
        'Natural language processing',
        '24/7 availability',
        'Multi-language support',
        'Seamless handoff to humans'
      ],
      icon: Users,
      color: 'from-green-500 to-emerald-600'
    },
    {
      id: 'ai-security',
      title: 'AI Security Monitor',
      description: 'Discover how AI can protect your business with advanced threat detection and prevention.',
      features: [
        'Real-time threat detection',
        'Automated response',
        'Behavioral analysis',
        'Compliance monitoring'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-600'
    },
    {
      id: 'ai-automation',
      title: 'AI Process Automation',
      description: 'Witness the power of AI-driven automation in streamlining business processes.',
      features: [
        'Workflow automation',
        'Document processing',
        'Data extraction',
        'Process optimization'
      ],
      icon: Zap,
      color: 'from-purple-500 to-violet-600'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, AI solutions, interactive demo, technology showcase, business transformation" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Experience Our Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Try our AI and IT solutions through interactive demos. 
              See firsthand how our technology can transform your business.
            </p>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Choose a Demo
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Select from our range of AI and IT solutions to experience their capabilities
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`p-6 rounded-2xl border transition-all duration-300 ${
                    selectedDemo === demo.id
                      ? 'bg-white/10 border-blue-400 ring-2 ring-blue-400'
                      : 'bg-white/5 border-white/20 hover:bg-white/10'
                  }`}
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${demo.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                    <demo.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{demo.title}</h3>
                  <p className="text-sm text-gray-300 text-left">{demo.description}</p>
                </button>
              ))}
            </div>

            {/* Selected Demo Details */}
            {selectedDemoData && (
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 border border-white/20">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <div className="flex items-center mb-6">
                      <div className={`w-16 h-16 bg-gradient-to-r ${selectedDemoData.color} rounded-2xl flex items-center justify-center mr-4`}>
                        <selectedDemoData.icon className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white">{selectedDemoData.title}</h3>
                        <p className="text-gray-300">{selectedDemoData.description}</p>
                      </div>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-lg font-semibold text-white mb-4">Key Features</h4>
                      <ul className="space-y-2">
                        {selectedDemoData.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                        <Play className="w-5 h-5 mr-2" />
                        Start Demo
                      </button>
                      <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center">
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-8 border border-white/10">
                    <div className="text-center mb-6">
                      <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Play className="w-12 h-12 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-2">Interactive Demo</h4>
                      <p className="text-gray-300">Experience the full capabilities of our solution</p>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Duration</span>
                        <span className="text-white font-semibold">5-10 minutes</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Difficulty</span>
                        <span className="text-white font-semibold">Beginner</span>
                      </div>
                      <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                        <span className="text-gray-300">Requirements</span>
                        <span className="text-white font-semibold">None</span>
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
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Try Our Demos?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience the power of our solutions before making a decision
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Hands-on Experience</h3>
                <p className="text-gray-300">Get a real feel for how our solutions work in practice</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">No Commitment</h3>
                <p className="text-gray-300">Try our solutions risk-free with no obligation to purchase</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Instant Results</h3>
                <p className="text-gray-300">See immediate value and understand the potential impact</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                After trying our demos, contact us to discuss how we can implement 
                these solutions for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Schedule Call
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