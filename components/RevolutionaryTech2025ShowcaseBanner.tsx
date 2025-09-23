import React from 'react';
import Link from 'next/link';

const RevolutionaryTech2025ShowcaseBanner = () => {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-2 mb-6">
            <span className="text-sm font-medium">🔥 REVOLUTIONARY TECH 2025</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary Technology Showcase 2025
          </h2>
          <p className="text-xl md:text-2xl opacity-90 mb-8 max-w-4xl mx-auto">
            Experience the future of business technology with our cutting-edge AI, quantum computing, 
            and neural interface solutions that are transforming industries worldwide.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🤖</div>
              <div>
                <h3 className="text-2xl font-bold">AI & Machine Learning</h3>
                <p className="text-lg opacity-80">Advanced AI solutions for enterprise transformation</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Predictive Analytics & Business Intelligence</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Autonomous Business Operations</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Natural Language Processing</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Computer Vision & Image Recognition</span>
              </li>
            </ul>
            <Link 
              href="/services/ai-automation"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore AI Solutions →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">⚛️</div>
              <div>
                <h3 className="text-2xl font-bold">Quantum Computing</h3>
                <p className="text-lg opacity-80">Next-generation computational power</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Optimization Problem Solving</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Cryptography & Security</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Machine Learning Acceleration</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Financial Modeling & Risk Analysis</span>
              </li>
            </ul>
            <Link 
              href="/services/quantum-computing"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Discover Quantum Power →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">🧠</div>
              <div>
                <h3 className="text-2xl font-bold">Neural Interfaces</h3>
                <p className="text-lg opacity-80">Brain-computer interface technology</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Thought-Controlled Computing</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Enhanced Productivity Tools</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Real-time Cognitive Analytics</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Accessibility Solutions</span>
              </li>
            </ul>
            <Link 
              href="/services/neural-interfaces"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Experience Neural Tech →
            </Link>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20">
            <div className="flex items-center mb-6">
              <div className="text-4xl mr-4">☁️</div>
              <div>
                <h3 className="text-2xl font-bold">Cloud & Infrastructure</h3>
                <p className="text-lg opacity-80">Scalable, secure, and intelligent cloud solutions</p>
              </div>
            </div>
            <ul className="space-y-3 mb-6">
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Multi-Cloud Architecture</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Edge Computing Solutions</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Automated Scaling & Optimization</span>
              </li>
              <li className="flex items-center">
                <span className="text-green-400 mr-2">✓</span>
                <span>Advanced Security & Compliance</span>
              </li>
            </ul>
            <Link 
              href="/services/cloud-infrastructure"
              className="inline-block bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Build Cloud Future →
            </Link>
          </div>
        </div>

        <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-xl p-8 border border-white border-opacity-20 text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Revolutionize Your Business?</h3>
          <p className="text-xl opacity-90 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies already transforming their operations with our revolutionary technology solutions. 
            Get started with a free consultation and discover your transformation potential.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-lg"
            >
              Schedule Free Consultation
            </Link>
            <Link
              href="/resources"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-lg"
            >
              Download Resources
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RevolutionaryTech2025ShowcaseBanner;