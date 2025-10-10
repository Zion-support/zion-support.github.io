'use client';
import React, { useState, useEffect } from 'react';
import { ArrowRight, Play, Pause, RotateCcw } from 'lucide-react';

const DynamicContentShowcase: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const showcases = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'Real-time business intelligence with predictive insights and automated reporting.',
      features: ['Real-time data processing', 'Predictive analytics', 'Custom dashboards', 'Automated alerts'],
      image: '/images/analytics-dashboard.jpg',
      category: 'AI Solutions'
    },
    {
      id: 2,
      title: 'Cloud Infrastructure Management',
      description: 'Scalable and secure cloud solutions with automated scaling and monitoring.',
      features: ['Auto-scaling', 'Security monitoring', 'Cost optimization', 'Disaster recovery'],
      image: '/images/cloud-infrastructure.jpg',
      category: 'IT Services'
    },
    {
      id: 3,
      title: 'Micro SaaS Applications',
      description: 'Ready-to-use business tools that solve specific problems with AI and automation.',
      features: ['Quick deployment', 'Easy integration', 'Scalable architecture', 'User-friendly interface'],
      image: '/images/micro-saas.jpg',
      category: 'Micro SaaS'
    }
  ];

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % showcases.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, showcases.length]);

  const nextShowcase = () => {
    setCurrentIndex((prev) => (prev + 1) % showcases.length);
  };

  const prevShowcase = () => {
    setCurrentIndex((prev) => (prev - 1 + showcases.length) % showcases.length);
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const resetShowcase = () => {
    setCurrentIndex(0);
    setIsPlaying(true);
  };

  const currentShowcase = showcases[currentIndex];

  return (
    <div className="bg-slate-800/50 rounded-lg p-8">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-white mb-4">Dynamic Solutions Showcase</h2>
        <p className="text-gray-300">Explore our innovative solutions and see how they can transform your business</p className="text-gray-300">
        </p>
      </div>
<//div>
      <div className="relative">
        <div className="bg-gradient-to-r from-slate-700 to-slate-800 rounded-lg p-8 min-h-[400px] flex items-center">
          <div className="w-full">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center space-x-4">
                <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">{currentShowcase.category}</span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                </span>
                <span className="text-gray-400 text-sm">{currentIndex + 1} of {showcases.length}</span className="text-gray-400 text-sm">
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  onClick={prevShowcase}
                  className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
                  aria-label="Previous showcase"
                >
                  <ArrowRight className="w-4 h-4 rotate-180" />
                </button>
                <button
                  onClick={togglePlayPause}
                  className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
                  aria-label={isPlaying ? 'Pause' : 'Play'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}</Play className="w-4 h-4" />
                </button>
                <button
                  onClick={resetShowcase}
                  className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
                  aria-label="Reset showcase"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
                <button
                  onClick={nextShowcase}
                  className="p-2 bg-slate-600 hover:bg-slate-500 text-white rounded-lg transition-colors"
                  aria-label="Next showcase"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
<//div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-white mb-4">{currentShowcase.title}</h3>
                <p className="text-gray-300 text-lg mb-6">{currentShowcase.description}</p>  {currentShowcase.features.map((feature, index) => (<//p>
                    <div key={index} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>))} <//div>
<//div>
                <div className="flex space-x-4">
                  <a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >Learn More</a
                    href="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                  <a
                    href="/demo"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >View Demo</a
                    href="/demo"
                    className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300"
                  >
                  </a>
                </div>
<//div>
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg p-8 text-center text-white">
                <div className="text-6xl mb-4">🚀</div>
                <h4 className="text-xl font-bold mb-2">Interactive Demo</h4>
                <p className="text-cyan-100">Experience our solutions in action</p className="text-cyan-100">
                </p>
              </div>{/* Progress Indicator */} {showcases.map((_, index) => (<//div>
            <button
              key={index}
              onClick={() =>setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-colors ${
                index === currentIndex ? 'bg-cyan-400' : 'bg-gray-600'
              }`}
              aria-label={`Go to showcase ${index + 1}`}
            /></button
              key={index}
              onClick={() =>
          ))}</button
              key={index}
              onClick={() =>
        </div>);<//div>
}<//div>
export default DynamicContentShowcase<//div>