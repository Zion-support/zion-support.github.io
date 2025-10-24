'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Video, Scissors, Play, Upload, Download, Zap, Sparkles } from 'lucide-react';

export default function AIVideoEditorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Video <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Editor</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Create professional videos with AI-powered editing, effects, and automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Start Editing
              <ArrowRight className="w-8 h-8" />
            </Link>
            <Link href="/ai-services" className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">AI-Powered Video Editing</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Transform your video content with intelligent editing tools and automation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Video className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Auto Editing</h3>
              <p className="text-gray-300">AI automatically cuts and arranges your footage for optimal flow.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Scissors className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Smart Cuts</h3>
              <p className="text-gray-300">Intelligent scene detection and seamless transitions.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Sparkles className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">AI Effects</h3>
              <p className="text-gray-300">Apply professional effects and filters automatically.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Zap className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Fast Processing</h3>
              <p className="text-gray-300">Lightning-fast rendering and export capabilities.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Create Amazing Videos?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start editing professional videos with AI-powered tools today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Start Editing Now
                <ArrowRight className="w-8 h-8" />
              </Link>
              <Link href="/ai-services" className="border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-4 px-8 rounded-lg transition-all duration-300 flex items-center justify-center">
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}