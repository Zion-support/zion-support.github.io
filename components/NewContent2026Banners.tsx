import React from 'react';
import Link from 'next/link';
import { ArrowRight, Rocket, Shield, Brain, Globe, Network } from 'lucide-react';

export function AISpaceTech2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Space Technology 2026: Revolutionary Space AI Systems
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Transform space operations with 99.9% mission success rate and $2.5B cost savings. 
              Autonomous space missions, satellite AI, and space exploration automation.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5" />
                <span className="font-semibold">99.9% Mission Success</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">$2.5B Savings</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                <span className="font-semibold">50x Faster Analysis</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-space-tech-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Space AI Guide
              </Link>
              <Link
                href="/case-studies/ai-space-mission-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                View Success Story
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Rocket className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Space AI Revolution</h3>
                <p className="text-lg opacity-90 mb-4">99.9% Autonomous Space Operations</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">99.9%</div>
                    <div className="text-sm opacity-75">Success Rate</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$2.5B</div>
                    <div className="text-sm opacity-75">Cost Savings</div>
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

export function AISyntheticData2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 via-teal-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                PRIVACY-FIRST
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Synthetic Data 2026: Privacy-Preserving AI Development
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Master AI synthetic data generation with 100% privacy compliance and $5M+ cost savings. 
              Privacy-preserving AI training, synthetic data pipelines, and secure model development.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">100% Privacy Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                <span className="font-semibold">99.9% Data Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">$5M+ Savings</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-synthetic-data-2026"
                className="bg-white text-green-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Synthetic Data Guide
              </Link>
              <Link
                href="/case-studies/ai-synthetic-data-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
              >
                View Success Story
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Shield className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Synthetic Data Revolution</h3>
                <p className="text-lg opacity-90 mb-4">100% Privacy-Preserving AI Training</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-75">Privacy Compliant</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$5M+</div>
                    <div className="text-sm opacity-75">Cost Savings</div>
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

export function AICognitiveComputing2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                BREAKTHROUGH
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Cognitive Computing 2026: Next-Generation Intelligence
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Achieve human-level reasoning with 95% accuracy and $8M+ cost savings. 
              Advanced reasoning, decision-making, and cognitive AI systems.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Brain className="w-5 h-5" />
                <span className="font-semibold">95% Reasoning Accuracy</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                <span className="font-semibold">10x Faster Decisions</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">$8M+ Savings</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-cognitive-computing-2026"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Cognitive AI Guide
              </Link>
              <Link
                href="/case-studies/ai-cognitive-computing-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
              >
                View Success Story
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Brain className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Cognitive AI Revolution</h3>
                <p className="text-lg opacity-90 mb-4">Human-Level Reasoning & Decision Making</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">95%</div>
                    <div className="text-sm opacity-75">Reasoning Accuracy</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$8M+</div>
                    <div className="text-sm opacity-75">Cost Savings</div>
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

export function AIMetaverseEnterprise2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                IMMERSIVE
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Metaverse Enterprise 2026: Virtual Business Transformation
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Transform your enterprise with 90% productivity boost and $12M+ cost savings. 
              Immersive virtual workspaces, AI-powered collaboration, and metaverse business automation.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                <span className="font-semibold">90% Productivity Boost</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                <span className="font-semibold">95% Employee Satisfaction</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5" />
                <span className="font-semibold">$12M+ Savings</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-metaverse-enterprise-2026"
                className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Metaverse Guide
              </Link>
              <Link
                href="/case-studies/ai-metaverse-enterprise-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
              >
                View Success Story
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Globe className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Metaverse Enterprise</h3>
                <p className="text-lg opacity-90 mb-4">Immersive Virtual Business Operations</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">90%</div>
                    <div className="text-sm opacity-75">Productivity Boost</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$12M+</div>
                    <div className="text-sm opacity-75">Cost Savings</div>
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

export function AIFederatedLearning2026Banner() {
  return (
    <section className="py-16 bg-gradient-to-r from-teal-600 via-blue-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                NEW 2026
              </span>
              <span className="bg-gradient-to-r from-green-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                PRIVACY-FIRST
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Federated Learning 2026: Privacy-Preserving Distributed AI
            </h2>
            <p className="text-xl mb-6 opacity-90">
              Master distributed AI training with 100% privacy compliance and $15M+ cost savings. 
              Collaborative model development without data sharing.
            </p>
            <div className="flex flex-wrap gap-4 mb-6">
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5" />
                <span className="font-semibold">100% Privacy Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <ArrowRight className="w-5 h-5" />
                <span className="font-semibold">50x Faster Training</span>
              </div>
              <div className="flex items-center gap-2">
                <Network className="w-5 h-5" />
                <span className="font-semibold">$15M+ Savings</span>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-federated-learning-2026"
                className="bg-white text-teal-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-center"
              >
                Read Federated Learning Guide
              </Link>
              <Link
                href="/case-studies/ai-federated-learning-success-2026"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors text-center"
              >
                View Success Story
              </Link>
            </div>
          </div>
          <div className="relative">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                  <Network className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold mb-2">Federated Learning Revolution</h3>
                <p className="text-lg opacity-90 mb-4">Distributed AI Without Data Sharing</p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold">100%</div>
                    <div className="text-sm opacity-75">Privacy Compliant</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">$15M+</div>
                    <div className="text-sm opacity-75">Cost Savings</div>
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