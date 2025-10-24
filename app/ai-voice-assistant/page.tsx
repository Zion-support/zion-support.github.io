'use client';
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Mic, Volume2, MessageCircle, Brain, Zap, Settings, Globe } from 'lucide-react';
export default function AIVoiceAssistantPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 pt-16">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            AI Voice <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Assistant</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Intelligent voice assistant powered by advanced AI for natural conversations and task automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
              Get Started
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
            <h2 className="text-4xl font-bold text-white mb-4">AI Voice Features</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience natural voice interactions with our advanced AI assistant.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Mic className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Voice Recognition</h3>
              <p className="text-gray-300">Advanced speech-to-text with high accuracy in multiple languages.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Brain className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Natural Language</h3>
              <p className="text-gray-300">Understand context and intent for meaningful conversations.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Volume2 className="w-8 h-8 text-green-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Voice Synthesis</h3>
              <p className="text-gray-300">Natural-sounding voice responses with customizable personalities.</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 hover:bg-white/20 transition-all duration-300">
              <Zap className="w-8 h-8 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Task Automation</h3>
              <p className="text-gray-300">Execute complex tasks through simple voice commands.</p>
            </div>
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-12">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Experience AI Voice?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Start using our intelligent voice assistant for natural conversations and automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                Get Started Now
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