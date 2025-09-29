import React from 'react';
import Link from 'next/link';
import { Star, ArrowRight, Zap, Shield, Cloud, Brain } from 'lucide-react';

export default function NewServicesShowcaseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            New Services 2025
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Services
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Experience the next generation of AI services designed to transform your business. 
            From autonomous operations to quantum-enhanced computing, we deliver cutting-edge solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Brain className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">AI Agent Orchestration</h3>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Multi-agent systems with 95% automation efficiency and $5M+ ROI.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">NEW</span>
              <Link href="/services/ai-agent-orchestration" className="text-white hover:text-yellow-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">Quantum AI Computing</h3>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Quantum-enhanced AI with 1000x faster optimization and revolutionary capabilities.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">NEW</span>
              <Link href="/services/ai-quantum-computing" className="text-white hover:text-yellow-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Shield className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">AI Cybersecurity</h3>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Next-gen threat detection with 99.7% accuracy and autonomous incident response.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">NEW</span>
              <Link href="/services/ai-cybersecurity" className="text-white hover:text-yellow-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                <Cloud className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold">AI Cloud Migration</h3>
            </div>
            <p className="text-white/80 text-sm mb-4">
              Seamless cloud migration with AI-powered optimization and zero downtime.
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium bg-white/20 px-2 py-1 rounded">NEW</span>
              <Link href="/services/ai-cloud-migration" className="text-white hover:text-yellow-300 transition-colors text-sm">
                Learn More →
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/services"
            className="inline-flex items-center bg-white text-emerald-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            <Star className="w-5 h-5 mr-2" />
            Explore All Services
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}