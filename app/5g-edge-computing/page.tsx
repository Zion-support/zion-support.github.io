'use client'
import React from 'react'
import { CheckCircle, Brain, BarChart, Target, TrendingUp, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const FiveGEdgeComputingPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="h-8 w-8 text-blue-600" />,
      title: "Ultra-Low Latency",
      description: "Achieve sub-millisecond response times with edge computing infrastructure."
    },
    {
      icon: <BarChart className="h-8 w-8 text-green-600" />,
      title: "Real-Time Analytics",
      description: "Process data at the edge for instant insights and decision making."
    },
    {
      icon: <Target className="h-8 w-8 text-purple-600" />,
      title: "Scalable Infrastructure",
      description: "Deploy and scale applications across distributed edge locations."
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-600" />,
      title: "5G Integration",
      description: "Leverage 5G networks for high-speed, low-latency connectivity."
    }
  ];

  const benefits = [
    "Reduce latency by up to 90%",
    "Improve application performance by 70%",
    "Enable real-time processing capabilities",
    "Reduce bandwidth costs by 60%"
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              5G Edge Computing
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your applications with ultra-low latency edge computing powered by 5G networks
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm p-6 rounded-lg hover:bg-white/20 transition-colors">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Why Choose Our 5G Edge Computing?
              </h2>
              <p className="text-xl text-gray-300">
                Experience the future of computing with our cutting-edge edge infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-400 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-lg text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
              <div className="bg-white/20 backdrop-blur-sm p-6 rounded-lg">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Ready to Transform Your Applications?
                </h3>
                <p className="text-gray-300 mb-6">
                  Join the edge computing revolution and unlock the full potential of 5G technology.
                </p>
                <button className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Start Free Trial
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </main>
    </>
  );
};

export default FiveGEdgeComputingPage;