'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Code, Zap, CheckCircle, Star, ArrowRight, Brain, Cpu, Shield } from 'lucide-react';

export default function AICodeGeneratorPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <div className="text-6xl mb-6">🧠</div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              AI Code Generator
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Generate clean, optimized code in multiple languages with AI assistance and automated testing. 
              Boost your development productivity with intelligent code generation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="#pricing" 
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a 
                href="#features" 
                className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12 neon-text">
              Powerful Features
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-6">
                <Code className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Multi-Language Support</h3>
                <p className="text-gray-300">
                  Generate code in Python, JavaScript, TypeScript, Java, C++, Go, and more with AI assistance.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <Zap className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Smart Optimization</h3>
                <p className="text-gray-300">
                  AI automatically optimizes code for performance, readability, and best practices.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <CheckCircle className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Automated Testing</h3>
                <p className="text-gray-300">
                  Generate unit tests, integration tests, and documentation automatically.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <Brain className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Context Awareness</h3>
                <p className="text-gray-300">
                  Understands your project context and generates code that fits your architecture.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <Cpu className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Real-time Generation</h3>
                <p className="text-gray-300">
                  Get instant code generation with real-time suggestions and completions.
                </p>
              </div>
              <div className="cyber-card hologram-card p-6">
                <Shield className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security Focused</h3>
                <p className="text-gray-300">
                  Generates secure code with built-in security best practices and vulnerability prevention.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section id="pricing" className="py-16 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12 neon-text">
              Simple Pricing
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Starter</h3>
                <div className="text-4xl font-bold text-emerald-400 mb-6">$29/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    100 code generations/month
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    5 programming languages
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Basic testing generation
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8 border-2 border-emerald-500">
                <div className="bg-emerald-500 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                  Most Popular
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
                <div className="text-4xl font-bold text-emerald-400 mb-6">$89/month</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Unlimited code generations
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    15+ programming languages
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Advanced testing & documentation
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Context-aware generation
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors block text-center">
                  Get Started
                </a>
              </div>
              
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
                <div className="text-4xl font-bold text-emerald-400 mb-6">Custom</div>
                <ul className="text-gray-300 space-y-3 mb-8">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Everything in Professional
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Custom AI training
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-emerald-400 mr-3" />
                    On-premise deployment
                  </li>
                </ul>
                <a href="/contact" className="w-full bg-emerald-500 text-white py-3 rounded-lg font-semibold hover:bg-emerald-600 transition-colors block text-center">
                  Contact Sales
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Boost Your Development?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of developers who are already using AI to write better code faster.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-emerald-500 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-emerald-600 hover:to-green-700 transition-all duration-300"
              >
                Start Free Trial
              </a>
              <a 
                href="tel:+13024640950" 
                className="border-2 border-emerald-500 text-emerald-400 px-8 py-4 rounded-lg font-semibold hover:bg-emerald-500 hover:text-white transition-all duration-300"
              >
                Call +1 (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
}