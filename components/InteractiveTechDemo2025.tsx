'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Play, Pause, RotateCcw, CheckCircle, Zap, Brain, Cpu } from 'lucide-react';

const InteractiveTechDemo2025 = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const demoSteps = [
    {
      title: "AI Model Training",
      description: "Watch as our AI learns from data patterns in real-time",
      icon: Brain,
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Data Processing",
      description: "See how we process millions of data points instantly",
      icon: Cpu,
      color: "from-green-500 to-green-600"
    },
    {
      title: "Predictive Analysis",
      description: "Observe AI making accurate predictions and recommendations",
      icon: Zap,
      color: "from-purple-500 to-purple-600"
    }
  ];

  const handlePlayPause = () => {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      // Simulate demo progression
      const interval = setInterval(() => {
        setCurrentStep(prev => {
          if (prev >= demoSteps.length - 1) {
            clearInterval(interval);
            setIsPlaying(false);
            return 0;
          }
          return prev + 1;
        });
      }, 2000);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setCurrentStep(0);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <Play className="w-4 h-4 mr-2" />
            Interactive Tech Demo 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Experience Our Technology in Action
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get hands-on with our cutting-edge AI and automation solutions through interactive demonstrations and real-time simulations.
          </p>
        </div>

        {/* Demo Interface */}
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 mb-16 border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Demo Controls */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Interactive Demo Controls</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-4">
                  <button
                    onClick={handlePlayPause}
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full hover:from-blue-600 hover:to-blue-700 transition-all duration-200"
                  >
                    {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
                  </button>
                  <button
                    onClick={handleReset}
                    className="flex items-center justify-center w-12 h-12 bg-gray-600 rounded-full hover:bg-gray-700 transition-colors duration-200"
                  >
                    <RotateCcw className="w-6 h-6" />
                  </button>
                  <span className="text-gray-300">
                    {isPlaying ? 'Demo Running...' : 'Demo Paused'}
                  </span>
                </div>
              </div>

              {/* Demo Steps */}
              <div className="space-y-4">
                {demoSteps.map((step, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-xl border-2 transition-all duration-300 ${
                      currentStep === index
                        ? 'border-blue-500 bg-blue-500/20'
                        : currentStep > index
                        ? 'border-green-500 bg-green-500/20'
                        : 'border-gray-600 bg-gray-700/50'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        currentStep > index
                          ? 'bg-green-500'
                          : currentStep === index
                          ? 'bg-blue-500'
                          : 'bg-gray-600'
                      }`}>
                        {currentStep > index ? (
                          <CheckCircle className="w-5 h-5 text-white" />
                        ) : (
                          <step.icon className="w-5 h-5 text-white" />
                        )}
                      </div>
                      <div>
                        <h4 className="font-semibold">{step.title}</h4>
                        <p className="text-sm text-gray-400">{step.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Demo Visualization */}
            <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-700">
              <h3 className="text-xl font-bold mb-4">Live Demo Visualization</h3>
              <div className="h-64 bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg flex items-center justify-center relative overflow-hidden">
                {isPlaying ? (
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse mx-auto mb-4"></div>
                    <p className="text-gray-300">Processing {demoSteps[currentStep]?.title}...</p>
                  </div>
                ) : (
                  <div className="text-center text-gray-500">
                    <Play className="w-12 h-12 mx-auto mb-4 opacity-50" />
                    <p>Click play to start the demo</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Real-time AI Processing</h3>
            <p className="text-gray-400">Experience AI models learning and adapting in real-time</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Interactive Simulations</h3>
            <p className="text-gray-400">Hands-on demos of our most advanced technologies</p>
          </div>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold mb-2">Live Data Processing</h3>
            <p className="text-gray-400">See how we handle massive datasets in real-time</p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-3xl font-bold mb-4">
            Ready to See More Advanced Demos?
          </h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Schedule a personalized demo with our experts to explore solutions tailored to your business needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/schedule-demo" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 inline-flex items-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Schedule Live Demo
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link 
              href="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-gray-900 transition-all duration-200"
            >
              Contact Our Experts
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveTechDemo2025;