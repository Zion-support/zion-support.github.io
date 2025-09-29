import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Cpu, Database, Zap, Target } from 'lucide-react';

export default function LatestAIInnovations2026Banner() {
  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-purple-50 py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🧠</span>
            Latest AI Innovations 2026
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Cutting-Edge AI Technologies Transforming Business
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover the latest AI innovations that are revolutionizing industries and delivering unprecedented 
            performance improvements. From advanced neural networks to quantum-enhanced algorithms.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-teal-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Brain className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Neural Architecture Search</h3>
                  <p className="text-blue-100">AutoML Evolution</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm font-medium">Innovation</span>
                <span className="text-gray-500 text-sm">Latest Technology</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Next-Generation Neural Architecture Search
              </h4>
              <p className="text-gray-600 mb-6">
                Revolutionary AutoML technology that designs optimal neural networks automatically, 
                achieving 95% accuracy with 70% fewer parameters and 50% faster training times.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-blue-600">95%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">70%</div>
                    <div className="text-xs text-gray-500">Fewer Parameters</div>
                  </div>
                </div>
                <Link
                  href="/blog/neural-architecture-search-2026"
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group">
            <div className="relative h-64 bg-gradient-to-br from-green-600 via-teal-600 to-blue-600">
              <div className="absolute inset-0 bg-black opacity-20"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                    <Cpu className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Edge AI Processing</h3>
                  <p className="text-green-100">Real-time Intelligence</p>
                </div>
              </div>
              <div className="absolute top-4 left-4">
                <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
              </div>
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm font-medium">Technology</span>
                <span className="text-gray-500 text-sm">Edge Computing</span>
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Ultra-Fast Edge AI Processing
              </h4>
              <p className="text-gray-600 mb-6">
                Breakthrough edge AI technology delivering sub-10ms response times with 99.9% accuracy. 
                Perfect for autonomous vehicles, IoT devices, and real-time applications.
              </p>
              <div className="flex items-center justify-between">
                <div className="flex gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-green-600">&lt;10ms</div>
                    <div className="text-xs text-gray-500">Response Time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-teal-600">99.9%</div>
                    <div className="text-xs text-gray-500">Accuracy</div>
                  </div>
                </div>
                <Link
                  href="/blog/edge-ai-processing-2026"
                  className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-green-700 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/federated-learning-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-blue-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-blue-600 font-medium">📊 Innovation</span>
                <span className="text-sm text-gray-500">Federated Learning</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                Privacy-Preserving Federated Learning
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Train AI models across distributed data sources without compromising privacy. 
                Achieve 90% accuracy with zero data exposure.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">90%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-600">0%</div>
                  <div className="text-xs text-gray-500">Data Exposure</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Database className="w-4 h-4 mr-1" />
                  Privacy-First
                </div>
                <div className="flex items-center text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                  Learn More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-optimization-algorithms-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-purple-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-purple-600 font-medium">⚡ Innovation</span>
                <span className="text-sm text-gray-500">Optimization</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                Self-Optimizing AI Algorithms
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                AI algorithms that continuously optimize themselves, improving performance by 200% 
                over time without human intervention.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">200%</div>
                  <div className="text-xs text-gray-500">Improvement</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-600">100%</div>
                  <div className="text-xs text-gray-500">Autonomous</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Zap className="w-4 h-4 mr-1" />
                  Self-Learning
                </div>
                <div className="flex items-center text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                  Learn More →
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-predictive-analytics-2026" className="group">
            <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 border border-gray-100 hover:border-green-200 hover:scale-105">
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW 2026
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-green-600 font-medium">🎯 Innovation</span>
                <span className="text-sm text-gray-500">Predictive Analytics</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                Hyper-Accurate Predictive Analytics
              </h3>
              <p className="text-gray-600 text-sm mb-4">
                Next-generation predictive models with 98% accuracy for business forecasting, 
                market analysis, and risk assessment.
              </p>
              <div className="flex gap-4 mb-4">
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">98%</div>
                  <div className="text-xs text-gray-500">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-lg font-bold text-green-600">24/7</div>
                  <div className="text-xs text-gray-500">Real-time</div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center text-sm text-gray-500">
                  <Target className="w-4 h-4 mr-1" />
                  Predictive
                </div>
                <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                  Learn More →
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <span className="w-5 h-5 mr-2">🧠</span>
            Explore All AI Innovations
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}