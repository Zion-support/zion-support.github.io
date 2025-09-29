import React from 'react';
import Link from 'next/link';
import { Brain, Rocket, Shield, ArrowRight, Zap, Target, Users } from 'lucide-react';

// Neural Interfaces Banner
export function AINeuralInterfacesBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                FEATURED
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              AI Neural Interfaces 2026: The Future of Human-AI Collaboration
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Experience revolutionary brain-computer interfaces with 95% accuracy and 50ms response times. 
              Transform your operations with direct neural control of AI systems.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span className="font-semibold">95% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">50ms Response</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span className="font-semibold">$5M+ ROI</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-neural-interfaces-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies/ai-neural-interface-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Brain className="w-16 h-16" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">95%</div>
                <div className="text-sm opacity-90">Accuracy</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">50ms</div>
                <div className="text-sm opacity-90">Response</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Space Technology Banner
export function AISpaceTechBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-blue-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                FEATURED
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              AI Space Technology 2026: Interplanetary Intelligence Revolution
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Discover how AI is revolutionizing space exploration with 99.9% mission success rates, 
              autonomous spacecraft, and Mars colonization capabilities.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">99.9% Success</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">50M+ Miles</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span className="font-semibold">$15B Savings</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-space-tech-2026"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies/ai-space-mission-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
              >
                View Mission Stories
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Rocket className="w-16 h-16" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">2027</div>
                <div className="text-sm opacity-90">Mars Landing</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Synthetic Data Banner
export function AISyntheticDataBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                FEATURED
              </span>
            </div>
            <h2 className="text-4xl font-bold mb-4">
              AI Synthetic Data 2026: Privacy-Preserving Intelligence Revolution
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Achieve 99.9% privacy protection while maintaining 95% AI accuracy. 
              Build powerful models without compromising sensitive data through revolutionary synthetic data generation.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">99.9% Privacy</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-5 h-5" />
                <span className="font-semibold">95% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="font-semibold">10x Faster</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-synthetic-data-2026"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
              >
                Read Full Article
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/case-studies/ai-synthetic-data-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
              >
                View Success Stories
              </Link>
            </div>
          </div>
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
              <Shield className="w-16 h-16" />
            </div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">99.9%</div>
                <div className="text-sm opacity-90">Privacy</div>
              </div>
              <div className="bg-white bg-opacity-10 rounded-lg p-4">
                <div className="text-2xl font-bold">$5B</div>
                <div className="text-sm opacity-90">Market</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Combined New Content Showcase
export function NewContent2026Showcase() {
  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500 to-blue-500 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🚀</span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Technologies for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest research and case studies on cutting-edge AI technologies that are transforming industries and creating unprecedented opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Neural Interfaces Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-purple-600 via-blue-600 to-teal-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Neural Interfaces</h3>
                  <p className="text-purple-100">Human-AI Collaboration</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                AI Neural Interfaces 2026
              </h4>
              <p className="text-gray-600 mb-6">
                Master brain-computer interfaces with 95% accuracy and 50ms response times for revolutionary human-AI collaboration.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">95%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">50ms</div>
                    <div className="text-xs text-gray-500">Response</div>
                  </div>
                </div>
                <Link
                  href="/blog/ai-neural-interfaces-2026"
                  className="bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Space Technology Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Rocket className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Space AI</h3>
                  <p className="text-indigo-100">Interplanetary Intelligence</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-indigo-600 transition-colors">
                AI Space Technology 2026
              </h4>
              <p className="text-gray-600 mb-6">
                Explore autonomous spacecraft and Mars colonization with 99.9% mission success rates and revolutionary space AI.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">99.9%</div>
                    <div className="text-xs text-gray-500">Success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">2027</div>
                    <div className="text-xs text-gray-500">Mars</div>
                  </div>
                </div>
                <Link
                  href="/blog/ai-space-tech-2026"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>

          {/* Synthetic Data Card */}
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Shield className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Synthetic Data</h3>
                  <p className="text-green-100">Privacy-Preserving AI</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                AI Synthetic Data 2026
              </h4>
              <p className="text-gray-600 mb-6">
                Achieve 99.9% privacy protection while maintaining 95% AI accuracy through revolutionary synthetic data generation.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">99.9%</div>
                    <div className="text-xs text-gray-500">Privacy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>
                <Link
                  href="/blog/ai-synthetic-data-2026"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Read More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All 2026 Content
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}