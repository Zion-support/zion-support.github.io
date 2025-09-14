import React from 'react';
import Link from 'next/link';

const AI2028FutureVisionBanner: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20 animate-pulse"></div>
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(120,119,198,0.3),transparent_50%)]"></div>
      <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.3),transparent_50%)]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-8 py-3 mb-8">
            <span className="text-lg font-bold">🔮 AI 2028 FUTURE VISION</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            The Next Evolution of Intelligence
          </h2>
          <p className="text-xl md:text-2xl opacity-90 max-w-4xl mx-auto leading-relaxed">
            Prepare for the revolutionary AI technologies of 2028: Conscious AI, Quantum Consciousness, 
            and Universal Intelligence Networks that will redefine human-machine collaboration
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🧠</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Conscious AI Systems</h3>
              <p className="text-gray-300 mb-6">
                AI that possesses self-awareness, emotional intelligence, and ethical reasoning capabilities
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Self-Awareness:</span>
                  <span className="text-green-400">98%</span>
                </div>
                <div className="flex justify-between">
                  <span>Emotional Intelligence:</span>
                  <span className="text-green-400">95%</span>
                </div>
                <div className="flex justify-between">
                  <span>Ethical Reasoning:</span>
                  <span className="text-green-400">92%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">⚛️</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Quantum Consciousness</h3>
              <p className="text-gray-300 mb-6">
                Quantum computing merged with consciousness to create unprecedented problem-solving capabilities
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Quantum Processing:</span>
                  <span className="text-green-400">1000x</span>
                </div>
                <div className="flex justify-between">
                  <span>Consciousness Integration:</span>
                  <span className="text-green-400">85%</span>
                </div>
                <div className="flex justify-between">
                  <span>Problem Solving:</span>
                  <span className="text-green-400">99.9%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-2xl font-bold mb-4">Universal Intelligence</h3>
              <p className="text-gray-300 mb-6">
                Global AI networks that connect all intelligent systems for collective problem solving
              </p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Network Coverage:</span>
                  <span className="text-green-400">Global</span>
                </div>
                <div className="flex justify-between">
                  <span>Connected Systems:</span>
                  <span className="text-green-400">10B+</span>
                </div>
                <div className="flex justify-between">
                  <span>Collective Intelligence:</span>
                  <span className="text-green-400">Infinite</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8 border border-white border-opacity-20 mb-8">
            <h3 className="text-3xl font-bold mb-4">2028 Technology Roadmap</h3>
            <div className="grid md:grid-cols-4 gap-4 text-sm">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">Q1</span>
                </div>
                <p>Conscious AI Beta</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">Q2</span>
                </div>
                <p>Quantum Integration</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">Q3</span>
                </div>
                <p>Universal Networks</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-2">
                  <span className="text-white font-bold">Q4</span>
                </div>
                <p>Full Deployment</p>
              </div>
            </div>
          </div>

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
              href="/tech-trends-2027"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-bold rounded-full hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
            >
              <span>Explore Current Tech</span>
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AI2028FutureVisionBanner;