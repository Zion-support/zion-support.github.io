'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Star, ArrowRight } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState('ai-analytics');

  const demos = [
    {
      id: 'ai-analytics',
      title: 'AI Analytics Dashboard',
      description: 'Real-time analytics powered by artificial intelligence',
      rating: 5,
      duration: '5 min'
    },
    {
      id: 'workflow-automation',
      title: 'Workflow Automation',
      description: 'Streamline your business processes with AI automation',
      rating: 4.8,
      duration: '3 min'
    },
    {
      id: 'voice-assistant',
      title: 'AI Voice Assistant',
      description: 'Natural language processing and voice interaction',
      rating: 4.9,
      duration: '4 min'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Demo - Zion AI | Interactive AI Demonstrations</title>
        <meta name="description" content="Experience our AI solutions through interactive demos and see the power of artificial intelligence in action." />
        <meta name="keywords" content="AI demo, interactive demo, AI showcase, technology demonstration" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Interactive
              <span className="block bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                AI Demos
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience the power of our AI solutions through interactive demonstrations. 
              See how artificial intelligence can transform your business.
            </p>
          </div>
        </section>

        {/* Demo Selection */}
        <section className="pb-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {demos.map((demo) => (
                <button
                  key={demo.id}
                  onClick={() => setSelectedDemo(demo.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    selectedDemo === demo.id
                      ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {demo.title}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Content */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">
                  {demos.find(d => d.id === selectedDemo)?.title}
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  {demos.find(d => d.id === selectedDemo)?.description}
                </p>
                
                <div className="flex items-center space-x-6 mb-8">
                  <div className="flex items-center space-x-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-300">
                      {demos.find(d => d.id === selectedDemo)?.rating}
                    </span>
                  </div>
                  <div className="text-gray-400">
                    {demos.find(d => d.id === selectedDemo)?.duration}
                  </div>
                </div>
                
                <button className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center space-x-2">
                  <Play className="w-5 h-5" />
                  <span>Start Demo</span>
                </button>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-gray-600">
                <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Play className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                    <p className="text-gray-300">Demo Preview</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to See More?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our AI experts to see how our solutions 
              can work for your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-medium rounded-lg hover:from-cyan-500 hover:to-blue-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="px-8 py-4 bg-white/10 text-white border border-gray-600 font-medium rounded-lg hover:bg-white/20 transition-all duration-200"
              >
                Free Consultation
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DemoPage;
