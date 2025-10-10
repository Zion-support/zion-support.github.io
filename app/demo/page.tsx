'use client';

import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Pause, RotateCcw, Settings, Download } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState('ai-chatbot');

  const demos = [
    {
      id: 'ai-chatbot',
      title: 'AI Chatbot Demo',
      description: 'Experience our intelligent chatbot that can handle customer inquiries 24/7',
      features: [
        'Natural language processing',
        'Multi-language support',
        'Context awareness',
        'Integration capabilities'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics Dashboard',
      description: 'See how our AI-powered analytics can transform your data into actionable insights',
      features: [
        'Real-time data visualization',
        'Predictive analytics',
        'Custom reporting',
        'Automated insights'
      ]
    },
    {
      id: 'automation',
      title: 'Process Automation',
      description: 'Watch our automation solutions streamline your business processes',
      features: [
        'Workflow automation',
        'Document processing',
        'Task scheduling',
        'Error handling'
      ]
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const handleReset = () => {
    setIsPlaying(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Interactive
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Demos
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Experience our AI and IT solutions firsthand. Try our interactive demos to see the power of our technology.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {demos.map((demo) => (
              <div
                key={demo.id}
                className={`bg-white/5 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 cursor-pointer ${
                  currentDemo === demo.id ? 'ring-2 ring-purple-500' : ''
                }`}
                onClick={() => setCurrentDemo(demo.id)}
              >
                <h3 className="text-xl font-bold text-white mb-3">{demo.title}</h3>
                <p className="text-gray-300 text-sm mb-4">{demo.description}</p>
                <ul className="space-y-1">
                  {demo.features.map((feature, idx) => (
                    <li key={idx} className="text-xs text-gray-400">• {feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-white">
                {demos.find(d => d.id === currentDemo)?.title}
              </h2>
              <div className="flex items-center space-x-4">
                <button
                  onClick={handlePlayPause}
                  className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white p-3 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                </button>
                <button
                  onClick={handleReset}
                  className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300"
                >
                  <RotateCcw className="w-6 h-6" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300">
                  <Settings className="w-6 h-6" />
                </button>
                <button className="bg-white/10 hover:bg-white/20 text-white p-3 rounded-lg transition-all duration-300">
                  <Download className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="bg-black rounded-lg p-8 min-h-[400px] flex items-center justify-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  {isPlaying ? <Pause className="w-8 h-8 text-white" /> : <Play className="w-8 h-8 text-white" />}
                </div>
                <p className="text-gray-400">
                  {isPlaying ? 'Demo is running...' : 'Click play to start the demo'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DemoPage;
