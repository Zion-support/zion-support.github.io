'use client';
import React from 'react';
import { ArrowRight, Brain, Shield, Users, Award } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">About Zion Tech Group</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, IT services, and digital transformation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mb-6">
              <Brain className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">AI Innovation</h3>
            <p className="text-gray-300">
              Cutting-edge artificial intelligence solutions that transform businesses and drive growth.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
              <Shield className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Security First</h3>
            <p className="text-gray-300">
              Enterprise-grade security measures to protect your data and ensure compliance.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mb-6">
              <Users className="h-8 w-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-4">Expert Team</h3>
            <p className="text-gray-300">
              Experienced professionals dedicated to delivering exceptional results.
            </p>
          </div>
        </div>

        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 mb-16">
          <h2 className="text-2xl font-bold text-white mb-4">Our Mission</h2>
          <p className="text-gray-300 mb-4">
            To empower businesses with innovative technology solutions that drive growth, efficiency, and success in the digital age.
          </p>
          <p className="text-gray-300">
            We believe in the transformative power of technology and are committed to helping our clients achieve their goals through cutting-edge AI and IT solutions.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-6">
            Contact us today to learn how we can help transform your business.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </div>
      </div>
    </div>
  );
}