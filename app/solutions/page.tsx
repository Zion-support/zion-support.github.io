<<<<<<< HEAD
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Solutions | Zion Tech Group - Enterprise AI Platforms',
  description: 'Comprehensive AI solutions for enterprise transformation. Custom AI platforms, machine learning models, and intelligent automation.',
  keywords: 'AI solutions, enterprise AI, machine learning, artificial intelligence, AI platforms, intelligent automation',
=======
export const metadata = {
  title: "Solutions | Zion Tech Group",
  description: "Comprehensive AI and technology solutions designed to transform your business operations.",
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
};

export default function SolutionsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
<<<<<<< HEAD
            AI Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI solutions for enterprise transformation. Custom AI platforms, machine learning models, and intelligent automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Custom AI Models</h3>
            <p className="text-gray-300 mb-4">
              Tailored machine learning models designed specifically for your business needs and data.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Process Automation</h3>
            <p className="text-gray-300 mb-4">
              Intelligent automation solutions that streamline your workflows and reduce manual effort.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">Learn More →</a>
          </div>
          <div className="bg-slate-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-white mb-4">Data Analytics</h3>
            <p className="text-gray-300 mb-4">
              Advanced analytics and insights powered by AI to drive data-driven decision making.
            </p>
            <a href="#" className="text-blue-400 hover:text-blue-300">Learn More →</a>
=======
            Our Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive AI and technology solutions designed to transform your business operations and drive growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">01</div>
            <h3 className="text-xl font-bold text-white mb-4">Discovery & Assessment</h3>
            <p className="text-gray-300">
              We analyze your current systems, identify opportunities, and develop a comprehensive AI strategy.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">02</div>
            <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>
            <p className="text-gray-300">
              Our experts design custom AI solutions tailored to your specific business needs and objectives.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">03</div>
            <h3 className="text-xl font-bold text-white mb-4">Development & Testing</h3>
            <p className="text-gray-300">
              We develop and rigorously test your AI solution to ensure optimal performance and reliability.
            </p>
          </div>

          <div className="bg-gray-800 rounded-lg p-6 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">04</div>
            <h3 className="text-xl font-bold text-white mb-4">Deployment & Training</h3>
            <p className="text-gray-300">
              Seamless deployment with comprehensive training for your team to maximize solution adoption.
            </p>
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss your project and discover how our solutions can accelerate your business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </a>
            <a
              href="/services"
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
            >
              View Services
            </a>
>>>>>>> aaab064a7a1e0805f280c1c5c0c14b6814bfc295
          </div>
        </div>
      </div>
    </div>
  );
}