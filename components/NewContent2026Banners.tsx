import React from 'react';
import Link from 'next/link';
import { ArrowRight, Brain, Rocket, Database, Zap, Shield, Users } from 'lucide-react';

export function NewContent2026Banners() {
  return (
    <>
      {/* Neural Interfaces Banner */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  FEATURED
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AI Neural Interfaces 2026:
                <br />
                <span className="text-yellow-300">Brain-Computer Integration Revolution</span>
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Discover revolutionary AI neural interfaces with 99.7% accuracy, sub-100ms response times, 
                and 10x productivity gains. Transform human-computer interaction forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-neural-interfaces-2026"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Read Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/case-studies/ai-neural-interface-success-2026"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  View Case Study
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">99.7%</div>
                <div className="text-sm opacity-90">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">&lt;100ms</div>
                <div className="text-sm opacity-90">Response Time</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">10x</div>
                <div className="text-sm opacity-90">Faster Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">$2.5B</div>
                <div className="text-sm opacity-90">Market Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Space Technology Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-cyan-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  SPACE TECH
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AI Space Technology 2026:
                <br />
                <span className="text-yellow-300">Autonomous Space Operations</span>
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Explore how AI is revolutionizing space exploration with autonomous satellites, 
                Mars missions, and space-based computing infrastructure with 99.9% reliability.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-space-tech-2026"
                  className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Read Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services/ai-space-technology"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">99.9%</div>
                <div className="text-sm opacity-90">Reliability Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">50x</div>
                <div className="text-sm opacity-90">Faster Processing</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">$15B</div>
                <div className="text-sm opacity-90">Market Value</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">1000+</div>
                <div className="text-sm opacity-90">Active Satellites</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Synthetic Data Banner */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW 2026
                </span>
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  PRIVACY TECH
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AI Synthetic Data 2026:
                <br />
                <span className="text-yellow-300">Privacy-Preserving ML Revolution</span>
              </h2>
              <p className="text-xl mb-8 opacity-90">
                Discover how AI synthetic data is revolutionizing machine learning with privacy-preserving 
                techniques that maintain 99.9% accuracy while eliminating privacy risks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/blog/ai-synthetic-data-2026"
                  className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Database className="w-5 h-5 mr-2" />
                  Read Article
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/services/ai-synthetic-data"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors flex items-center justify-center"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Explore Services
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">99.9%</div>
                <div className="text-sm opacity-90">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">100%</div>
                <div className="text-sm opacity-90">Privacy Preserved</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">10x</div>
                <div className="text-sm opacity-90">Faster Training</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">$8B</div>
                <div className="text-sm opacity-90">Market Value</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Story Banner */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  NEW CASE STUDY
                </span>
                <span className="bg-yellow-400 text-gray-900 px-3 py-1 rounded-full text-sm font-semibold">
                  $15M ROI
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                AI Neural Interface Success:
                <br />
                <span className="text-yellow-300">$15M ROI Case Study</span>
              </h2>
              <p className="text-xl mb-8 opacity-90">
                See how a Fortune 500 company achieved $15M ROI and 10x productivity gains 
                by implementing AI neural interfaces across their global operations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/case-studies/ai-neural-interface-success-2026"
                  className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl flex items-center justify-center"
                >
                  <Users className="w-5 h-5 mr-2" />
                  View Case Study
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">$15M</div>
                <div className="text-sm opacity-90">Total ROI</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">10x</div>
                <div className="text-sm opacity-90">Productivity Gain</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">99.7%</div>
                <div className="text-sm opacity-90">Accuracy Rate</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <div className="text-3xl font-bold text-yellow-300 mb-2">85%</div>
                <div className="text-sm opacity-90">Cost Reduction</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}