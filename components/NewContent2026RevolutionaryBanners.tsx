import React from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Sparkles, Zap, Shield, Brain, Users, DollarSign, Clock, CheckCircle, Star } from 'lucide-react';

// Revolutionary AI Enterprise Automation Banner
export function RevolutionaryAIEnterpriseAutomationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-900 via-purple-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-4 py-2 rounded-full text-sm font-bold mb-4">
            🚀 REVOLUTIONARY BREAKTHROUGH • January 30, 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI Enterprise Automation Revolution 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover how next-generation AI automation is revolutionizing enterprise operations, delivering unprecedented efficiency gains, massive cost reductions, and complete business process autonomy.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🏭</div>
            <h3 className="text-xl font-bold mb-3">400% Efficiency Gains</h3>
            <p className="text-sm opacity-90 mb-4">
              Transform your operations with AI systems that work 24/7, making intelligent decisions and optimizing processes automatically.
            </p>
            <Link
              href="/blog/ai-2026-enterprise-automation-revolution"
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Read Full Article →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-bold mb-3">90% Cost Reduction</h3>
            <p className="text-sm opacity-90 mb-4">
              Achieve massive savings through intelligent automation that eliminates manual processes and optimizes resource utilization.
            </p>
            <Link
              href="/blog/ai-2026-enterprise-automation-revolution"
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              Learn Implementation →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-bold mb-3">99.9% Uptime</h3>
            <p className="text-sm opacity-90 mb-4">
              Self-healing AI systems that detect and resolve issues automatically, ensuring continuous operation and reliability.
            </p>
            <Link
              href="/blog/ai-2026-enterprise-automation-revolution"
              className="inline-flex items-center text-yellow-400 font-semibold hover:text-yellow-300 transition-colors"
            >
              View Case Studies →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-2026-enterprise-automation-revolution"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-black font-bold py-4 px-8 rounded-xl hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 shadow-lg hover:shadow-yellow-500/50 transform hover:-translate-y-1"
          >
            <span>Explore the Revolution</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Quantum AI Breakthrough Banner
export function QuantumAIBreakthroughBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-900 via-indigo-900 to-blue-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-purple-400 to-indigo-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            ⚛️ QUANTUM BREAKTHROUGH • January 30, 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            AI 2026 Quantum Neural Networks
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            The convergence of quantum computing and neural networks has created the most significant breakthrough in artificial intelligence. Discover how quantum-enhanced AI is solving problems 1000x faster.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">⚛️</div>
            <h3 className="text-xl font-bold mb-3">1000x Faster Processing</h3>
            <p className="text-sm opacity-90 mb-4">
              Quantum neural networks leverage superposition and entanglement to process information in ways classical computers cannot match.
            </p>
            <Link
              href="/blog/ai-2026-quantum-neural-networks"
              className="inline-flex items-center text-purple-300 font-semibold hover:text-purple-200 transition-colors"
            >
              Read Full Article →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🧠</div>
            <h3 className="text-xl font-bold mb-3">99.9% Accuracy Rate</h3>
            <p className="text-sm opacity-90 mb-4">
              Quantum error correction ensures reliable operation even in noisy environments, making quantum AI systems robust for enterprise applications.
            </p>
            <Link
              href="/blog/ai-2026-quantum-neural-networks"
              className="inline-flex items-center text-purple-300 font-semibold hover:text-purple-200 transition-colors"
            >
              Learn More →
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">∞</div>
            <h3 className="text-xl font-bold mb-3">Infinite Scalability</h3>
            <p className="text-sm opacity-90 mb-4">
              Quantum systems can scale exponentially, handling complex problems that would be impossible for classical computers to solve.
            </p>
            <Link
              href="/blog/ai-2026-quantum-neural-networks"
              className="inline-flex items-center text-purple-300 font-semibold hover:text-purple-200 transition-colors"
            >
              Explore Applications →
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-2026-quantum-neural-networks"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-indigo-600 text-white font-bold py-4 px-8 rounded-xl hover:from-purple-400 hover:to-indigo-500 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1"
          >
            <span>Discover Quantum AI</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// Enterprise Automation Success Case Study Banner
export function EnterpriseAutomationSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-900 via-emerald-900 to-teal-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-block bg-gradient-to-r from-green-400 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-bold mb-4">
            🏆 SUCCESS STORY • Fortune 500 • January 30, 2026
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            $2.3B Cost Savings & 99.97% Uptime
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Discover how a Fortune 500 manufacturing giant achieved unprecedented success through AI enterprise automation, delivering massive cost savings and complete operational autonomy in just 6 months.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-green-400 mb-2">$2.3B</div>
            <div className="text-sm opacity-90">Cost Savings</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">99.97%</div>
            <div className="text-sm opacity-90">Uptime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-purple-400 mb-2">400%</div>
            <div className="text-sm opacity-90">Efficiency Gain</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="text-4xl font-bold text-orange-400 mb-2">6</div>
            <div className="text-sm opacity-90">Months</div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/case-studies/ai-enterprise-automation-success-2026"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-bold py-4 px-8 rounded-xl hover:from-green-400 hover:to-emerald-500 transition-all duration-300 shadow-lg hover:shadow-green-500/50 transform hover:-translate-y-1"
          >
            <span>Read Full Case Study</span>
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}