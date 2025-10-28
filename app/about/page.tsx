import React from 'react';
import type { Metadata } from 'next';
import { CheckCircle, Users, Target, Award, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, our mission, values, and the team behind our innovative technology solutions.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a leading technology company dedicated to delivering innovative solutions that transform businesses and drive digital transformation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Quality First</h3>
            <p className="text-gray-300">We deliver high-quality solutions that exceed expectations.</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
            <p className="text-gray-300">Our team consists of industry experts and innovators.</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Target className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Focused Solutions</h3>
            <p className="text-gray-300">We focus on delivering targeted solutions for your needs.</p>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-lg border border-white/20">
            <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-white mb-2">Award Winning</h3>
            <p className="text-gray-300">Recognized for excellence in technology innovation.</p>
          </div>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Our Mission</h2>
          <p className="text-lg text-gray-300 text-center max-w-4xl mx-auto">
            To empower businesses with cutting-edge technology solutions that drive growth, efficiency, and innovation. 
            We believe in the power of technology to transform industries and create meaningful impact.
          </p>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Get Started?</h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust Zion Tech Group for their technology needs.
          </p>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
            Get Started Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}