'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Eye, Brain, Globe, Rocket, Star, Zap, Shield } from 'lucide-react';

const AI2030FutureVisionPromotionBanner = () => {
  const visionFeatures = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: "Conscious AI",
      description: "Self-aware artificial intelligence that understands context and emotion",
      year: "2030"
    },
    {
      icon: <Globe className="w-8 h-8 text-emerald-400" />,
      title: "Global Neural Network",
      description: "Worldwide interconnected AI systems working in perfect harmony",
      year: "2031"
    },
    {
      icon: <Rocket className="w-8 h-8 text-purple-400" />,
      title: "Space AI",
      description: "AI systems designed for interplanetary exploration and colonization",
      year: "2032"
    },
    {
      icon: <Shield className="w-8 h-8 text-blue-400" />,
      title: "Quantum Security",
      description: "Unbreakable quantum encryption protecting all digital assets",
      year: "2033"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-cyan-500/20 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 text-black text-sm font-bold mb-6">
            <Eye className="w-5 h-5 mr-2" />
            AI 2030 FUTURE VISION
          </div>
          <h2 className="text-5xl md:text-7xl font-bold text-white mb-6">
            The Future is
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent"> Closer Than You Think</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Step into a world where artificial intelligence transcends human limitations, where technology and consciousness merge, 
            and where the impossible becomes reality. This is the future we're building today.
          </p>
        </div>

        {/* Vision Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {visionFeatures.map((feature, index) => (
            <div key={index} className="group relative">
              <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 h-full border border-white/10 hover:bg-white/10 transition-all duration-500 hover:scale-105">
                <div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <div className="text-sm font-bold text-cyan-400 mb-2">{feature.year}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
              
              {/* Connection Line */}
              {index < visionFeatures.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>

        {/* Revolutionary Stats */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-3xl p-12 mb-20 border border-cyan-400/20">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-cyan-400 mb-2">1B+</div>
              <div className="text-gray-300">AI Interactions Daily</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-400 mb-2">99.99%</div>
              <div className="text-gray-300">Prediction Accuracy</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Countries Connected</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-400 mb-2">24/7</div>
              <div className="text-gray-300">Continuous Learning</div>
            </div>
          </div>
        </div>

        {/* Future Predictions */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-white text-center mb-12">What the Future Holds</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Conscious Machines</h4>
              </div>
              <p className="text-gray-300">
                AI systems that not only think but feel, creating emotional connections and understanding human nuances like never before.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <Zap className="w-6 h-6 text-blue-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Instant Knowledge</h4>
              </div>
              <p className="text-gray-300">
                Access to the sum of human knowledge instantly, with AI that can synthesize and explain any concept in real-time.
              </p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="flex items-center mb-4">
                <Globe className="w-6 h-6 text-green-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Global Harmony</h4>
              </div>
              <p className="text-gray-300">
                AI systems that bridge cultural and linguistic barriers, fostering global understanding and cooperation.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-3xl p-12">
            <h3 className="text-3xl font-bold text-white mb-4">Be Part of the Future</h3>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Join the revolution and help shape the future of artificial intelligence. The future starts with you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/ai-2030-vision" 
                className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 font-bold rounded-xl hover:bg-gray-100 transition-colors duration-300"
              >
                Explore the Vision
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link 
                href="/join-future" 
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white hover:text-cyan-600 transition-colors duration-300"
              >
                Join the Movement
                <Rocket className="w-5 h-5 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2030FutureVisionPromotionBanner;