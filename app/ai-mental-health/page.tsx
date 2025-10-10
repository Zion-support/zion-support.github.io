'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Heart, BarChart, Brain, Target, Users, Globe, Shield } from 'lucide-react';

const AIMentalHealthPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>AI Mental Health Solutions | Zion Tech Group</title>
        <meta name="description" content="AI-powered mental health support and wellness solutions. Personalized therapy, mood tracking, and intelligent mental health monitoring for better wellbeing." />
        <meta name="keywords" content="AI mental health, mental wellness AI, therapy AI, mood tracking, mental health support, wellness technology" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-mental-health" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Mental Health
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Support mental wellness with AI-powered therapy, mood tracking, and personalized 
                mental health monitoring for improved wellbeing and quality of life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Get Started
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              AI Mental Health Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Heart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Personalized Therapy</h3>
                <p className="text-gray-300">
                  AI-powered therapy sessions that adapt to individual needs, 
                  providing personalized mental health support and guidance.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <BarChart className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Mood Tracking</h3>
                <p className="text-gray-300">
                  Intelligent mood monitoring and analysis that helps users 
                  understand patterns and triggers in their mental health.
                </p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20">
                <Brain className="w-12 h-12 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Wellness Insights</h3>
                <p className="text-gray-300">
                  AI-generated insights and recommendations for improving 
                  mental wellness and maintaining healthy habits.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Support Mental Wellness
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our mental health AI experts to learn how our solutions can 
              support better mental wellness and quality of life.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
              Contact Us Today
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIMentalHealthPage;