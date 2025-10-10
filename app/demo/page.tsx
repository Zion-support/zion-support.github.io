'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Play, Pause, RotateCcw, Settings, Download, Share2, Star, CheckCircle, ArrowRight, Clock, Users, Zap } from 'lucide-react';

const DemoPage: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentDemo, setCurrentDemo] = useState(0);

  const demos = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'See how our AI analytics platform transforms raw data into actionable insights in real-time.',
      duration: '3:45',
      features: ['Real-time data processing', 'Predictive analytics', 'Interactive visualizations', 'Custom dashboards'],
      category: 'AI & Analytics'
    },
    {
      id: 2,
      title: 'Quantum Computing Simulation',
      description: 'Experience the power of quantum algorithms solving complex optimization problems.',
      duration: '4:20',
      features: ['Quantum algorithms', 'Optimization problems', 'Performance comparison', 'Scalability analysis'],
      category: 'Quantum Computing'
    },
    {
      id: 3,
      title: 'Smart City IoT Platform',
      description: 'Discover how IoT sensors and AI create intelligent city management systems.',
      duration: '5:15',
      features: ['IoT sensor networks', 'Real-time monitoring', 'Predictive maintenance', 'Citizen engagement'],
      category: 'IoT & Smart Cities'
    },
    {
      id: 4,
      title: 'Cybersecurity Threat Detection',
      description: 'Watch our AI system detect and respond to cyber threats in real-time.',
      duration: '3:30',
      features: ['Threat detection', 'Automated response', 'Risk assessment', 'Compliance monitoring'],
      category: 'Cybersecurity'
    }
  ];

  const currentDemoData = demos[currentDemo];

  const stats = [
    { icon: Users, label: 'Active Users', value: '10,000+' },
    { icon: Clock, label: 'Uptime', value: '99.9%' },
    { icon: Zap, label: 'Performance', value: '5x Faster' },
    { icon: Star, label: 'Satisfaction', value: '4.9/5' }
  ];

  return (
    <>
      <Helmet>
        <title>Live Demo - Zion Tech Group | Experience Our Solutions</title>
        <meta name="description" content="Experience our AI, quantum computing, and IT solutions through interactive demos. See how our technology can transform your business." />
        <meta name="keywords" content="live demo, AI demo, quantum computing demo, technology showcase, interactive demo" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6">
                Live
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
                  Demo
                </span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Experience our cutting-edge technology solutions through interactive demos. 
                See firsthand how our AI, quantum computing, and IT solutions can transform your business.
              </p>
            </div>
          </div>
        </section>

        {/* Demo Selector */}
        <section className="py-10 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Choose a Demo</h2>
              <p className="text-gray-300">Select a demo to see our technology in action</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {demos.map((demo, index) => (
                <button
                  key={demo.id}
                  onClick={() => setCurrentDemo(index)}
                  className={`p-6 rounded-xl text-left transition-all duration-300 ${
                    currentDemo === index
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    <div className="w-2 h-2 bg-current rounded-full"></div>
                    <span className="text-sm font-semibold">{demo.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{demo.title}</h3>
                  <p className="text-sm opacity-90 mb-3">{demo.description}</p>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{demo.duration}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Player */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
                {/* Demo Header */}
                <div className="p-6 border-b border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{currentDemoData.title}</h3>
                      <p className="text-gray-300">{currentDemoData.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-gray-400" />
                        <span className="text-gray-400">{currentDemoData.duration}</span>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <Share2 className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <Download className="w-5 h-5 text-white" />
                        </button>
                        <button className="p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors">
                          <Settings className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Video Area */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 aspect-video">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        {isPlaying ? (
                          <Pause className="w-8 h-8 text-white" />
                        ) : (
                          <Play className="w-8 h-8 text-white ml-1" />
                        )}
                      </div>
                      <h4 className="text-xl font-semibold text-white mb-2">Interactive Demo</h4>
                      <p className="text-gray-300 mb-4">Click play to start the demonstration</p>
                      <button
                        onClick={() => setIsPlaying(!isPlaying)}
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center gap-2 mx-auto"
                      >
                        {isPlaying ? 'Pause Demo' : 'Start Demo'}
                        {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>
                  
                  {/* Demo Controls */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <div className="bg-black/50 backdrop-blur-sm rounded-lg p-4">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={() => setIsPlaying(!isPlaying)}
                          className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
                        >
                          {isPlaying ? <Pause className="w-5 h-5 text-white" /> : <Play className="w-5 h-5 text-white" />}
                        </button>
                        <div className="flex-1 bg-white/20 rounded-full h-2">
                          <div className="bg-gradient-to-r from-cyan-500 to-purple-600 h-2 rounded-full w-1/3"></div>
                        </div>
                        <span className="text-white text-sm">1:23 / {currentDemoData.duration}</span>
                        <button className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors">
                          <RotateCcw className="w-5 h-5 text-white" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Demo Features */}
                <div className="p-6">
                  <h4 className="text-lg font-semibold text-white mb-4">Key Features Demonstrated</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentDemoData.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our technology delivers measurable results for businesses worldwide
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience More?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Schedule a personalized demo with our experts and see how our solutions can work for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Schedule Demo</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="/services"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>View All Services</span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default DemoPage;