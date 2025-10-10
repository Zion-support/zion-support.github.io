'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Download, Star, ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
  const demos = [
    {
      title: 'AI Chat Assistant',
      description: 'Experience our advanced AI chat assistant with natural language processing capabilities',
      category: 'AI Solutions',
      duration: '5 min demo',
      features: ['Natural Language Processing', 'Context Awareness', 'Multi-language Support', 'Real-time Responses']
    },
    {
      title: 'Data Analytics Dashboard',
      description: 'Explore our comprehensive data analytics platform with real-time insights and visualizations',
      category: 'Analytics',
      duration: '10 min demo',
      features: ['Real-time Data', 'Interactive Charts', 'Custom Reports', 'Export Capabilities']
    },
    {
      title: 'Cloud Infrastructure',
      description: 'See our scalable cloud infrastructure solutions in action with live monitoring',
      category: 'Cloud Services',
      duration: '8 min demo',
      features: ['Auto-scaling', 'Load Balancing', 'Security Monitoring', 'Performance Metrics']
    },
    {
      title: 'Mobile App Builder',
      description: 'Try our no-code mobile app builder and create apps without programming knowledge',
      category: 'Development',
      duration: '15 min demo',
      features: ['Drag & Drop Interface', 'Real-time Preview', 'Cross-platform', 'Instant Deployment']
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group | Try Our AI & IT Solutions</title>
        <meta name="description" content="Experience our AI and IT solutions with interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="demo, trial, AI solutions, IT services, interactive demo, try before buy" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Try Our Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand with interactive demos. See how our technology can transform your business.
            </p>
          </div>
        </section>

        {/* Demo Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {demos.map((demo) => (
                <div key={demo.title} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                  <div className="h-48 bg-gradient-to-r from-cyan-500 to-blue-600 flex items-center justify-center">
                    <Play className="w-16 h-16 text-white" />
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm font-semibold text-cyan-600">{demo.category}</span>
                      <span className="text-sm text-gray-500">{demo.duration}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{demo.title}</h3>
                    <p className="text-gray-600 mb-4">{demo.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-900 mb-2">Key Features:</h4>
                      <ul className="space-y-1">
                        {demo.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-600">
                            <Star className="w-3 h-3 text-cyan-500 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex gap-3">
                      <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                        <Play className="w-4 h-4 mr-2" />
                        Start Demo
                      </button>
                      <button className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors flex items-center">
                        <Download className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Live Demo Section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Live Product Demo
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join our weekly live demo sessions to see our solutions in action and ask questions directly to our experts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Upcoming Sessions</h3>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">AI Solutions Demo</h4>
                      <p className="text-sm text-gray-600">Wednesday, Jan 24 at 2:00 PM PST</p>
                    </div>
                    <button className="text-cyan-600 hover:text-cyan-700 font-semibold">
                      Register
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="font-semibold text-gray-900">Cloud Services Demo</h4>
                      <p className="text-sm text-gray-600">Friday, Jan 26 at 10:00 AM PST</p>
                    </div>
                    <button className="text-cyan-600 hover:text-cyan-700 font-semibold">
                      Register
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Request Custom Demo</h3>
                <p className="text-gray-600 mb-4">
                  Need a personalized demo for your specific use case? Our experts can create a custom demonstration tailored to your business needs.
                </p>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Request Custom Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Experience the power of our AI and IT solutions. Start your free trial today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
                Start Free Trial
              </button>
              <button className="border border-white/20 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;