'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Play, Pause, RotateCcw, Download, Share2 } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      id: 1,
      title: 'AI-Powered Data Analytics',
      description: 'See how our AI algorithms analyze complex datasets and provide actionable insights in real-time.',
      duration: '2:30',
      category: 'AI & Analytics'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Experience our cloud management platform with automated scaling and monitoring capabilities.',
      duration: '3:15',
      category: 'Cloud & Infrastructure'
    },
    {
      id: 3,
      title: 'Cybersecurity Dashboard',
      description: 'Explore our comprehensive security monitoring and threat detection system.',
      duration: '2:45',
      category: 'Cybersecurity'
    },
    {
      id: 4,
      title: 'AI Chatbot Integration',
      description: 'Watch our AI chatbot handle customer inquiries with natural language processing.',
      duration: '1:50',
      category: 'AI & Automation'
    }
  ];

  const features = [
    {
      icon: Play,
      title: 'Interactive Demos',
      description: 'Hands-on experience with our cutting-edge technology solutions'
    },
    {
      icon: Download,
      title: 'Download Resources',
      description: 'Access whitepapers, case studies, and technical documentation'
    },
    {
      icon: Share2,
      title: 'Share with Team',
      description: 'Easily share demos and insights with your team members'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demos - Zion Tech Group | See Our Solutions in Action</title>
        <meta name="description" content="Experience our AI and IT solutions through interactive demos. See how our technology can transform your business operations." />
        <meta name="keywords" content="live demos, AI demonstrations, technology showcase, interactive demos, solution preview" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              See It in
              <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Action
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Experience our AI and IT solutions through interactive demos. See how our technology can transform your business operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Start Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Live Demo
              </button>
            </div>
          </div>
        </section>

        {/* Demo Player Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Demo List */}
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-bold text-white mb-6">Available Demos</h2>
                  <div className="space-y-4">
                    {demos.map((demo, index) => (
                      <div
                        key={demo.id}
                        className={`p-4 rounded-lg cursor-pointer transition-all ${
                          currentDemo === index
                            ? 'bg-cyan-500/20 border border-cyan-500'
                            : 'bg-white/5 hover:bg-white/10'
                        }`}
                        onClick={() => setCurrentDemo(index)}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <h3 className="text-lg font-semibold text-white">{demo.title}</h3>
                          <span className="text-sm text-gray-400">{demo.duration}</span>
                        </div>
                        <p className="text-gray-300 text-sm mb-2">{demo.description}</p>
                        <span className="inline-block bg-purple-500 text-white px-2 py-1 rounded text-xs">
                          {demo.category}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Demo Player */}
                <div className="lg:col-span-2">
                  <div className="bg-black rounded-lg aspect-video mb-6 relative overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                        <p className="text-white text-lg font-medium">
                          {demos[currentDemo].title}
                        </p>
                        <p className="text-gray-300 text-sm">
                          Click to start demo
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Demo Controls */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center hover:bg-cyan-600 transition-colors"
                      >
                        {isPlaying ? <Pause className="w-6 h-6 text-white" /> : <Play className="w-6 h-6 text-white ml-1" />}
                      </button>
                      <button className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                        <RotateCcw className="w-5 h-5 text-white" />
                      </button>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                      <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                        <Download className="w-5 h-5 mr-2" />
                        Download
                      </button>
                      <button className="flex items-center text-gray-300 hover:text-white transition-colors">
                        <Share2 className="w-5 h-5 mr-2" />
                        Share
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Demo Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Ready to See More?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Schedule a personalized demo with our experts to see how our solutions can address your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Schedule Live Demo
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default DemoPage;