import React from 'react';
import Link from 'next/link';
import { Brain, Rocket, Shield, ArrowRight, Zap, Users, TrendingUp } from 'lucide-react';

export function AINeuralInterfacesBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Neural Interfaces 2026
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Direct brain-computer communication with 99.9% accuracy and sub-100ms response times. 
              Transform human-computer interaction forever.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm">99.9% Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span className="text-sm">Sub-100ms Response</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">$2.5B Market</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-neural-interfaces-2026"
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Read the Article
              </Link>
              <Link
                href="/case-studies/ai-neural-interface-success-2026"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-purple-600 transition-colors"
              >
                View $12M ROI Case Study
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Brain className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Neural Interface Revolution</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">99.9%</div>
                    <div className="text-sm opacity-90">Accuracy</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">&lt;100ms</div>
                    <div className="text-sm opacity-90">Response</div>
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
    <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                SPACE TECH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Space Technology 2026
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Autonomous space operations with 99.8% mission success rates. 
              Revolutionize space exploration with AI-powered satellites and manufacturing.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                <span className="text-sm">99.8% Success</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm">50x Faster</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">$15B Market</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-space-tech-2026"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Explore Space AI
              </Link>
              <Link
                href="/case-studies"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                View Space Case Studies
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Rocket className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Space AI Revolution</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">99.8%</div>
                    <div className="text-sm opacity-90">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">24/7</div>
                    <div className="text-sm opacity-90">Autonomous</div>
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
    <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
                PRIVACY TECH
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              AI Synthetic Data 2026
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Privacy-preserving intelligence with 99.9% data quality and zero privacy risks. 
              Train AI models without compromising data security.
            </p>
            <div className="flex flex-wrap gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="text-sm">0% Privacy Risk</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5" />
                <span className="text-sm">10x Faster</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm">$8B Market</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-synthetic-data-2026"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
              >
                Learn About Synthetic Data
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-green-600 transition-colors"
              >
                Get Privacy Consultation
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white bg-opacity-10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-6 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Privacy-Preserving AI</h3>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">99.9%</div>
                    <div className="text-sm opacity-90">Data Quality</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-yellow-300">0%</div>
                    <div className="text-sm opacity-90">Privacy Risk</div>
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

export function NeuralInterfaceSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
              NEW CASE STUDY
            </span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-semibold">
              $12M ROI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Neural Interface Success Story
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            See how a Fortune 500 healthcare company achieved $12M ROI and 95% productivity improvement 
            with AI neural interface implementation in just 18 months.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
            <div className="text-4xl font-bold text-yellow-300 mb-2">$12M</div>
            <div className="text-lg font-semibold mb-2">Total ROI</div>
            <div className="text-sm opacity-90">Achieved in 18 months</div>
          </div>
          <div className="text-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
            <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
            <div className="text-lg font-semibold mb-2">Productivity Gain</div>
            <div className="text-sm opacity-90">Surgical efficiency improvement</div>
          </div>
          <div className="text-center p-6 bg-white bg-opacity-10 backdrop-blur-sm rounded-xl">
            <div className="text-4xl font-bold text-yellow-300 mb-2">99.9%</div>
            <div className="text-lg font-semibold mb-2">Accuracy Rate</div>
            <div className="text-sm opacity-90">Neural signal processing</div>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/case-studies/ai-neural-interface-success-2026"
            className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            <Brain className="w-6 h-6 mr-2" />
            Read the Full Case Study
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}

export function NewContent2026ShowcaseBanner() {
  return (
    <section className="py-20 bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-sm font-medium mb-6">
            <span className="w-4 h-4 mr-2">🚀</span>
            Latest 2026 Innovations
          </div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Revolutionary AI Technologies for 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore cutting-edge AI innovations that are transforming industries and creating 
            unprecedented opportunities for growth and efficiency.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          <Link href="/blog/ai-neural-interfaces-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-purple-600 via-pink-600 to-blue-600">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Brain className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">Neural Interfaces</h3>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                  AI Neural Interfaces 2026
                </h4>
                <p className="text-gray-600 mb-4">
                  Direct brain-computer communication with 99.9% accuracy and sub-100ms response times.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">99.9%</div>
                      <div className="text-xs text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">&lt;100ms</div>
                      <div className="text-xs text-gray-500">Response</div>
                    </div>
                  </div>
                  <div className="text-purple-600 font-semibold text-sm group-hover:text-purple-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-space-tech-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-blue-600 via-purple-600 to-indigo-600">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Rocket className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">Space Technology</h3>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                  AI Space Technology 2026
                </h4>
                <p className="text-gray-600 mb-4">
                  Autonomous space operations with 99.8% mission success rates and 24/7 operations.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">99.8%</div>
                      <div className="text-xs text-gray-500">Success</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-600">24/7</div>
                      <div className="text-xs text-gray-500">Autonomous</div>
                    </div>
                  </div>
                  <div className="text-blue-600 font-semibold text-sm group-hover:text-blue-700 transition-colors">
                    Read More →
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link href="/blog/ai-synthetic-data-2026" className="group">
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden">
              <div className="relative h-48 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center text-white">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white bg-opacity-20 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-bold">Synthetic Data</h3>
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    NEW 2026
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-green-600 transition-colors">
                  AI Synthetic Data 2026
                </h4>
                <p className="text-gray-600 mb-4">
                  Privacy-preserving intelligence with 99.9% data quality and zero privacy risks.
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex gap-4">
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">99.9%</div>
                      <div className="text-xs text-gray-500">Quality</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-blue-600">0%</div>
                      <div className="text-xs text-gray-500">Privacy Risk</div>
                    </div>
                  </div>
                  <div className="text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                    Read More →
                  </div>
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
            <span className="w-5 h-5 mr-2">🚀</span>
            Explore All 2026 Innovations
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}