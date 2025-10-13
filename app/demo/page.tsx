'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, CheckCircle, ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState(1);

  const demos = [
    {
      id: 1,
      title: 'AI Data Analytics Pro',
      description: 'Experience our advanced AI-powered data analytics platform with real-time insights and predictive modeling.',
      features: ['Real-time dashboards', 'Predictive analytics', 'Custom reports', 'Data visualization'],
      duration: '5 minutes'
    },
    {
      id: 2,
      title: 'AI Email Assistant',
      description: 'See how our AI email assistant can transform your email marketing with intelligent automation.',
      features: ['Smart email generation', 'Automated campaigns', 'Performance tracking', 'Personalization'],
      duration: '3 minutes'
    },
    {
      id: 3,
      title: 'Cybersecurity Solutions',
      description: 'Explore our comprehensive cybersecurity platform with threat detection and prevention capabilities.',
      features: ['Threat detection', 'Real-time monitoring', 'Automated responses', 'Security analytics'],
      duration: '4 minutes'
    }
  ];

  const selectedDemoData = demos.find(demo => demo.id === selectedDemo);

  return (
    <>
      <Helmet>
        <title>Demo - Zion Tech Group</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Interactive Demos
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience our AI and IT solutions firsthand. Choose a demo below to see how our technology 
              can transform your business operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Demo List */}
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-white mb-8">Choose a Demo</h2>
              {demos.map((demo) => (
                <div
                  key={demo.id}
                  className={`bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border cursor-pointer transition-all ${
                    selectedDemo === demo.id ? 'border-purple-500 ring-2 ring-purple-500/20' : 'border-gray-700 hover:border-purple-500'
                  }`}
                  onClick={() => setSelectedDemo(demo.id)}
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">{demo.title}</h3>
                      <p className="text-gray-300 mb-4">{demo.description}</p>
                      <ul className="space-y-2">
                        {demo.features.map((feature, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="ml-4">
                      <Play className="w-6 h-6 text-purple-400" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Demo Preview */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold text-white mb-6">
                {selectedDemoData?.title} Demo
              </h3>
              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="aspect-video bg-gradient-to-br from-purple-900/20 to-blue-900/20 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                    <p className="text-gray-300">Demo Preview</p>
                    <p className="text-sm text-gray-400">Duration: {selectedDemoData?.duration}</p>
                  </div>
                </div>
              </div>
              <p className="text-gray-300 mb-6">
                {selectedDemoData?.description}
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 flex items-center justify-center">
                  Start Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </button>
                <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-3 px-6 rounded-lg transition duration-300">
                  Schedule Live Demo
                </button>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't just watch the demos - experience the full power of our solutions with a personalized consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition duration-300">
                Get Free Consultation
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DemoPage;