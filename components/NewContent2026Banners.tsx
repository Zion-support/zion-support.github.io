import React from 'react';
import Link from 'next/link';
import { Brain, Rocket, Database, ArrowRight, Zap, Shield, Target } from 'lucide-react';

export function AINeuralInterfacesBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-yellow-400 text-purple-800 px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Neural Interfaces 2026:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-pink-300">
                Brain-Computer Integration Revolution
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Experience the future of human-computer interaction with direct brain-computer 
              communication. Achieve 99.7% accuracy and sub-100ms response times with 
              revolutionary neural interface technology.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">99.7%</div>
                <div className="text-sm opacity-80">Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">&lt;100ms</div>
                <div className="text-sm opacity-80">Response Time</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">10x</div>
                <div className="text-sm opacity-80">Faster</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-neural-interfaces-2026"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Brain className="w-5 h-5 mr-2" />
                Read the Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies/ai-neural-interface-success-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
              >
                View Case Study
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Brain className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Neural Interface Technology</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span>Real-time neural signal processing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-300" />
                    <span>Advanced privacy protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-blue-300" />
                    <span>Sub-millimeter precision control</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AISpaceTechBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-cyan-400 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                SPACE TECH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Space Technology 2026:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-blue-300">
                Autonomous Space Operations Revolution
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Discover how AI is revolutionizing space technology with autonomous satellites, 
              space manufacturing, and interplanetary communication systems. Achieve 95% 
              autonomous operations and $50M in cost savings.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">500+</div>
                <div className="text-sm opacity-80">AI Satellites</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">95%</div>
                <div className="text-sm opacity-80">Autonomous</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">$50M</div>
                <div className="text-sm opacity-80">Savings</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-space-tech-2026"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Rocket className="w-5 h-5 mr-2" />
                Read the Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/case-studies/ai-space-mission-success-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
              >
                View Case Study
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Rocket className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Space AI Revolution</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span>Autonomous satellite operations</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-300" />
                    <span>Space-based AI computing</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-cyan-300" />
                    <span>Zero-gravity manufacturing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AISyntheticDataBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-blue-400 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                PRIVACY TECH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI Synthetic Data 2026:
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-300 to-green-300">
                Privacy-Preserving Data Generation Revolution
              </span>
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Transform your data strategy with AI-powered synthetic data generation. Achieve 
              99.9% data accuracy while maintaining 100% privacy compliance. Enable data-driven 
              innovation without compromising individual privacy.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">99.9%</div>
                <div className="text-sm opacity-80">Data Accuracy</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">100%</div>
                <div className="text-sm opacity-80">Privacy Safe</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold mb-1">10x</div>
                <div className="text-sm opacity-80">Faster Training</div>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-synthetic-data-2026"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                <Database className="w-5 h-5 mr-2" />
                Read the Article
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                href="/services/ai-synthetic-data"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center"
              >
                Explore Services
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Database className="w-12 h-12" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Synthetic Data Revolution</h3>
                <div className="space-y-4 text-left">
                  <div className="flex items-center gap-3">
                    <Zap className="w-5 h-5 text-yellow-300" />
                    <span>Advanced generation techniques</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-green-300" />
                    <span>Privacy-preserving algorithms</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-teal-300" />
                    <span>Regulatory compliance</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Revolutionary2026ContentBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="mb-8">
          <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4 inline-block">
            🚀 REVOLUTIONARY 2026 CONTENT
          </span>
        </div>
        <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
          The Future of AI is Here
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-300">
            Revolutionary Technologies Transforming Industries
          </span>
        </h2>
        <p className="text-xl mb-12 max-w-4xl mx-auto opacity-90 leading-relaxed">
          Discover cutting-edge AI technologies that are reshaping the world. From neural interfaces 
          to space technology, explore the innovations that will define the next decade of human progress.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Brain className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Neural Interfaces</h3>
            <p className="text-gray-300 mb-6">
              Direct brain-computer communication with 99.7% accuracy and sub-100ms response times.
            </p>
            <div className="text-3xl font-bold text-yellow-300 mb-2">$15M</div>
            <div className="text-sm text-gray-400">ROI Achieved</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Rocket className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Space Technology</h3>
            <p className="text-gray-300 mb-6">
              Autonomous satellite operations with 95% automation and $50M in cost savings.
            </p>
            <div className="text-3xl font-bold text-cyan-300 mb-2">500+</div>
            <div className="text-sm text-gray-400">AI Satellites</div>
          </div>
          
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 hover:bg-opacity-20 transition-all duration-300">
            <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <Database className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4">Synthetic Data</h3>
            <p className="text-gray-300 mb-6">
              Privacy-preserving data generation with 99.9% accuracy and 100% compliance.
            </p>
            <div className="text-3xl font-bold text-teal-300 mb-2">$3.2B</div>
            <div className="text-sm text-gray-400">Market Value</div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <Link
            href="/blog"
            className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center justify-center"
          >
            <span className="mr-2">🚀</span>
            Explore All 2026 Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
          <Link
            href="/case-studies"
            className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-indigo-900 transition-all duration-300 flex items-center justify-center"
          >
            View Success Stories
          </Link>
        </div>
      </div>
    </section>
  );
}