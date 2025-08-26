import React from 'react';
import Head from 'next/head';
import { motion } from 'framer-motion';
import { Heart, Brain, Users, ArrowRight } from 'lucide-react';

export default function AIEmotionIntelligencePlatformPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Head>
        <title>AI Emotion Intelligence Platform | Zion Tech Group</title>
        <meta name="description" content="AI-powered emotion intelligence and sentiment analysis platform" />
      </Head>
      
      {/* Simple background instead of complex component */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 opacity-50"></div>
      
      <main className="relative z-10 container mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            AI Emotion Intelligence Platform
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Revolutionary AI platform for understanding and analyzing human emotions and sentiment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Emotion Recognition</h3>
            <p className="text-gray-300 text-center">Advanced emotion detection and analysis</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Sentiment Analysis</h3>
            <p className="text-gray-300 text-center">Intelligent sentiment understanding</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20"
          >
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3 text-center">Human-AI Interaction</h3>
            <p className="text-gray-300 text-center">Enhanced emotional intelligence in AI systems</p>
          </motion.div>
        </div>
      </main>
    </div>
  );
}