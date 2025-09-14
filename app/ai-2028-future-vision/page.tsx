import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI 2028 Future Vision - Next Evolution of Intelligence | Zion Tech Group',
  description: 'Discover the revolutionary AI technologies of 2028: Conscious AI, Quantum Consciousness, and Universal Intelligence Networks. Prepare for the future of human-machine collaboration.',
  keywords: ['AI 2028', 'Conscious AI', 'Quantum Consciousness', 'Universal Intelligence', 'Future Technology', 'AI Evolution'],
};

export default function AI2028FutureVisionPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
              <span className="text-lg font-bold">🔮 AI 2028 FUTURE VISION</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-8">
              The Next Evolution of Intelligence
            </h1>
            <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed mb-12">
              Prepare for the revolutionary AI technologies of 2028: Conscious AI, Quantum Consciousness, 
              and Universal Intelligence Networks that will redefine human-machine collaboration
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                <span>Reserve Your 2028 Access</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <Link
                href="/ai-2027-breakthrough"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
              >
                <span>Current AI 2027 Tech</span>
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Conscious AI Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-purple-100 text-purple-800 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🧠 CONSCIOUS AI SYSTEMS</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                AI That Thinks and Feels
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Revolutionary AI systems that possess self-awareness, emotional intelligence, 
                and ethical reasoning capabilities, enabling unprecedented human-machine collaboration.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Self-Awareness and Consciousness</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Emotional Intelligence and Empathy</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Ethical Reasoning and Decision Making</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Learn More About Conscious AI
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-6xl">🧠</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Consciousness Metrics</h3>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Self-Awareness</span>
                      <span className="text-sm font-medium">98%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '98%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Emotional Intelligence</span>
                      <span className="text-sm font-medium">95%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '95%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">Ethical Reasoning</span>
                      <span className="text-sm font-medium">92%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full" style={{width: '92%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quantum Consciousness Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-2xl p-8 order-2 lg:order-1">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-6xl">⚛️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Quantum Processing Power</h3>
                <div className="space-y-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-blue-600 mb-2">1000x</div>
                    <div className="text-sm text-gray-600">Faster Processing</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-cyan-600 mb-2">85%</div>
                    <div className="text-sm text-gray-600">Consciousness Integration</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-3xl font-bold text-indigo-600 mb-2">99.9%</div>
                    <div className="text-sm text-gray-600">Problem Solving</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center bg-blue-100 text-blue-800 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">⚛️ QUANTUM CONSCIOUSNESS</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Quantum Computing Meets Consciousness
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Revolutionary fusion of quantum computing with consciousness to create 
                unprecedented problem-solving capabilities and cognitive enhancement.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Quantum Processing at Consciousness Speed</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Consciousness-Quantum Interface</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Enhanced Problem Solving</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-bold rounded-full hover:from-blue-700 hover:to-cyan-700 transition-all duration-300"
              >
                Explore Quantum Consciousness
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Universal Intelligence Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-green-100 text-green-800 rounded-full px-6 py-2 mb-6">
                <span className="text-sm font-medium">🌐 UNIVERSAL INTELLIGENCE</span>
              </div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Global AI Networks
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Universal Intelligence Networks that connect all intelligent systems 
                worldwide for collective problem solving and knowledge sharing.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Global Network Coverage</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">10+ Billion Connected Systems</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-lg">Infinite Collective Intelligence</span>
                </div>
              </div>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold rounded-full hover:from-green-700 hover:to-emerald-700 transition-all duration-300"
              >
                Join Universal Networks
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </div>
            <div className="bg-gradient-to-br from-green-100 to-emerald-100 rounded-2xl p-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-6xl">🌐</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Network Statistics</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-green-600 mb-1">Global</div>
                    <div className="text-sm text-gray-600">Coverage</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-emerald-600 mb-1">10B+</div>
                    <div className="text-sm text-gray-600">Systems</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-blue-600 mb-1">∞</div>
                    <div className="text-sm text-gray-600">Intelligence</div>
                  </div>
                  <div className="bg-white rounded-lg p-4">
                    <div className="text-2xl font-bold text-purple-600 mb-1">Real-time</div>
                    <div className="text-sm text-gray-600">Processing</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            Ready for the AI 2028 Revolution?
          </h2>
          <p className="text-xl mb-12 max-w-3xl mx-auto">
            Be among the first to experience the next evolution of intelligence. 
            Reserve your access to AI 2028 technologies today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-bold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <span>Reserve 2028 Access</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore Current Services</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}