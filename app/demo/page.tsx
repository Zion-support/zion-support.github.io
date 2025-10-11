'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Brain, Cloud, Shield, Code, ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-chatbot');

  const demos = [
    {
      id: 'ai-chatbot',
      name: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries and provide instant support.',
      category: 'AI',
      duration: '5 min',
      icon: Brain,
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Integration capabilities'
      ]
    },
    {
      id: 'cloud-dashboard',
      name: 'Cloud Infrastructure Dashboard',
      description: 'Monitor and manage your cloud resources with our comprehensive dashboard.',
      category: 'Cloud',
      duration: '10 min',
      icon: Cloud,
      features: [
        'Real-time monitoring',
        'Resource optimization',
        'Cost tracking',
        'Security alerts'
      ]
    },
    {
      id: 'security-scan',
      name: 'Security Vulnerability Scanner',
      description: 'Scan your applications for security vulnerabilities and get detailed reports.',
      category: 'Security',
      duration: '8 min',
      icon: Shield,
      features: [
        'Automated scanning',
        'Vulnerability assessment',
        'Compliance checking',
        'Remediation guidance'
      ]
    },
    {
      id: 'code-analyzer',
      name: 'AI Code Analyzer',
      description: 'Analyze your code for quality, performance, and security issues using AI.',
      category: 'Development',
      duration: '7 min',
      icon: Code,
      features: [
        'Code quality analysis',
        'Performance optimization',
        'Security vulnerability detection',
        'Best practice recommendations'
      ]
    }
  ];

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'AI':
        return 'from-purple-500 to-pink-500';
      case 'Cloud':
        return 'from-blue-500 to-cyan-500';
      case 'Security':
        return 'from-red-500 to-orange-500';
      case 'Development':
        return 'from-green-500 to-emerald-500';
      default:
        return 'from-gray-500 to-slate-500';
    }
  };

  return (
    <>
      <Helmet>
        <title>Demos - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos." />
      </Helmet>

      <Navigation />

      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl font-bold text-white mb-6">Interactive Demos</h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experience our AI and IT solutions firsthand through interactive demonstrations.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {demos.map((demo) => {
                const IconComponent = demo.icon;
                return (
                  <button
                    key={demo.id}
                    onClick={() => setSelectedDemo(demo.id)}
                    className={`p-6 rounded-xl transition-all duration-300 ${
                      selectedDemo === demo.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-800/70'
                    }`}
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 rounded-lg flex items-center justify-center mx-auto mb-4 ${
                        selectedDemo === demo.id
                          ? 'bg-white/20'
                          : `bg-gradient-to-r ${getCategoryColor(demo.category)}`
                      }`}>
                        <IconComponent className="w-8 h-8" />
                      </div>
                      <h3 className="text-lg font-bold mb-2">{demo.name}</h3>
                      <p className="text-sm opacity-90">{demo.duration}</p>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Demo Details</h2>
                {demos.map((demo) => {
                  const IconComponent = demo.icon;
                  return (
                    <div
                      key={demo.id}
                      className={`p-8 rounded-xl transition-all duration-300 ${
                        selectedDemo === demo.id
                          ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/20'
                          : 'bg-slate-800/50'
                      }`}
                      style={{ display: selectedDemo === demo.id ? 'block' : 'none' }}
                    >
                      <div className="flex items-center mb-4">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mr-4 bg-gradient-to-r ${getCategoryColor(demo.category)}`}>
                          <IconComponent className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{demo.name}</h3>
                          <p className="text-cyan-400 font-semibold">{demo.category} • {demo.duration}</p>
                        </div>
                      </div>
                      
                      <p className="text-gray-300 mb-6">{demo.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {demo.features.map((feature, index) => (
                            <li key={index} className="flex items-center text-gray-300">
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600 flex items-center justify-center">
                        <Play className="w-5 h-5 mr-2" />
                        Start Demo
                      </button>
                    </div>
                  );
                })}
              </div>

              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Demo Environment</h2>
                <div className="bg-slate-800/50 rounded-xl p-8">
                  <div className="bg-slate-900 rounded-lg p-6 mb-6">
                    <div className="flex items-center mb-4">
                      <div className="w-3 h-3 bg-red-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                      <span className="text-gray-400 text-sm ml-4">Demo Environment</span>
                    </div>
                    <div className="bg-slate-800 rounded p-4 text-green-400 font-mono text-sm">
                      <div>Loading demo environment...</div>
                      <div className="text-gray-400 mt-2">
                        {selectedDemo === 'ai-chatbot' && 'Initializing AI chatbot...'}
                        {selectedDemo === 'cloud-dashboard' && 'Connecting to cloud services...'}
                        {selectedDemo === 'security-scan' && 'Preparing security scanner...'}
                        {selectedDemo === 'code-analyzer' && 'Loading code analysis engine...'}
                      </div>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Demo Status</span>
                      <span className="text-green-400 font-semibold">Ready</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Environment</span>
                      <span className="text-cyan-400">Production-like</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-300">Data</span>
                      <span className="text-cyan-400">Sample Data</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-bold text-white mb-4">What You'll Experience</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Interactive interface with real functionality
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Live data processing and analysis
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Performance metrics and insights
                    </li>
                    <li className="flex items-center text-gray-300">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></div>
                      Integration capabilities demonstration
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="text-center mt-16">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to See More?</h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a personalized demo with our experts to explore solutions tailored to your needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:from-cyan-600 hover:to-purple-600"
                >
                  Schedule Custom Demo
                </a>
                <a
                  href="/consultation"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Talk to an Expert
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default DemoPage;
