import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us - Zion Tech Group',
  description: 'Learn about Zion Tech Group, a leading provider of AI solutions, micro SaaS development, and enterprise IT services.',
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto">
            Empowering businesses with cutting-edge AI, micro SaaS solutions, and enterprise-grade IT services.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-slate-300 leading-relaxed">
                To deliver enterprise-grade AI solutions, innovative micro SaaS platforms, and comprehensive IT services that drive real business results and digital transformation.
              </p>
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-slate-300 leading-relaxed">
                To be the leading provider of intelligent automation solutions that help businesses scale efficiently and stay competitive in the digital age.
              </p>
            </div>
          </div>

          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700">
            <h2 className="text-3xl font-bold text-white mb-6">What We Do</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤖</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">AI Solutions</h3>
                <p className="text-slate-300">
                  Custom AI development, machine learning models, and intelligent automation systems.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Micro SaaS</h3>
                <p className="text-slate-300">
                  Scalable software-as-a-service solutions tailored to specific business needs.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🛠️</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">IT Services</h3>
                <p className="text-slate-300">
                  Enterprise IT infrastructure, cloud solutions, and digital transformation services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}