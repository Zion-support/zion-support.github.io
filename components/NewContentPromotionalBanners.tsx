import React from 'react';
import Link from 'next/link';

// AI Multimodal Enterprise Banner
export function AIMultimodalEnterpriseBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                New Article
              </span>
              <span className="text-sm opacity-90">15 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Multimodal Enterprise Solutions 2025
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Master multimodal AI with vision, audio, and text processing. Achieve 300% ROI with our comprehensive implementation strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-multimodal-enterprise-2025"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Read Full Article
              </Link>
              <Link
                href="/services/ai-multimodal-solutions"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-purple-600 transition-colors"
              >
                Get Implementation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Key Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>300% efficiency increase</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>95% accuracy in complex decisions</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$2M+ annual savings potential</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span>Real-time multimodal processing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Sustainability Green Tech Banner
export function AISustainabilityBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured Article
              </span>
              <span className="text-sm opacity-90">12 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI for Sustainability: Green Tech Solutions 2025
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Reduce carbon footprint by 40% with smart energy management and green technology solutions powered by AI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-sustainability-green-tech-2025"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Read Full Article
              </Link>
              <Link
                href="/services/ai-sustainability-solutions"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-green-600 transition-colors"
              >
                Get Green AI Solutions
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Environmental Impact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🌱</span>
                <span>40% carbon footprint reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>60% energy efficiency improvement</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">♻️</span>
                <span>50% waste reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$1M - $4M annual savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Quantum Computing Banner
export function AIQuantumComputingBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Breakthrough Article
              </span>
              <span className="text-sm opacity-90">18 min read</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Quantum Computing Breakthroughs 2025
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Achieve exponential speedup in optimization, cryptography, and machine learning with quantum computing solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-quantum-computing-2025"
                className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Read Full Article
              </Link>
              <Link
                href="/services/ai-quantum-solutions"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-indigo-600 transition-colors"
              >
                Get Quantum AI
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Quantum Advantages</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>1000x optimization speedup</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔐</span>
                <span>Unbreakable quantum cryptography</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <span>10x machine learning acceleration</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$3.5M - $17M annual value</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Enterprise Transformation Banner
export function AIEnterpriseTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Success Story
              </span>
              <span className="text-sm opacity-90">Enterprise</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Enterprise Transformation: $5M Savings & 400% ROI
            </h2>
            <p className="text-lg mb-6 opacity-90">
              See how a Fortune 500 company achieved $5M annual savings and 400% ROI with comprehensive AI transformation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-enterprise-transformation-2025"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Read Case Study
              </Link>
              <Link
                href="/services/ai-enterprise-transformation"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-orange-600 transition-colors"
              >
                Start Your Transformation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Transformation Results</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$5M annual cost savings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <span>400% ROI achieved</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>85% process automation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>60% reduction in manual work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Latest AI Insights Banner
export function LatestAIInsightsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest AI Insights & Breakthroughs
          </h2>
          <p className="text-lg opacity-90 max-w-3xl mx-auto">
            Stay ahead with cutting-edge AI technologies and revolutionary solutions that are transforming industries
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/ai-multimodal-enterprise-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  New Article
                </span>
                <span className="text-sm opacity-75">15 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-200 transition-colors">
                AI Multimodal Enterprise Solutions
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Master multimodal AI with vision, audio, and text processing. Achieve 300% ROI.
              </p>
              <div className="text-cyan-200 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-sustainability-green-tech-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Featured Article
                </span>
                <span className="text-sm opacity-75">12 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-200 transition-colors">
                AI for Sustainability: Green Tech
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Reduce carbon footprint by 40% with smart energy management and green AI.
              </p>
              <div className="text-cyan-200 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-quantum-computing-2025" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  Breakthrough Article
                </span>
                <span className="text-sm opacity-75">18 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-200 transition-colors">
                AI Quantum Computing Breakthroughs
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Achieve exponential speedup in optimization and cryptography with quantum AI.
              </p>
              <div className="text-cyan-200 font-semibold text-sm">
                Read Article →
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors shadow-lg hover:shadow-xl"
          >
            View All AI Insights
          </Link>
        </div>
      </div>
    </section>
  );
}

// AI Business Transformation Banner
export function AIBusinessTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Transformation Guide
              </span>
              <span className="text-sm opacity-90">2025 Edition</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Complete AI Business Transformation Guide
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Transform your business with AI solutions that deliver measurable results. From strategy to implementation, we guide you every step.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-business-transformation"
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Start Transformation
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-pink-600 transition-colors"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Transformation Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <span>300-500% ROI typical</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>50-80% efficiency gains</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$1M - $10M annual savings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🚀</span>
                <span>Competitive advantage</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Workflow Automation Banner
export function AIWorkflowAutomationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Automation Solution
              </span>
              <span className="text-sm opacity-90">Proven Results</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Workflow Automation Platform
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Automate 200+ business processes with intelligent workflow design. Reduce manual work by 80% and achieve 95% accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-workflow-automation"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Get Automation Platform
              </Link>
              <Link
                href="/case-studies/ai-enterprise-transformation-2025"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-emerald-600 transition-colors"
              >
                See Success Story
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Automation Results</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>200+ processes automated</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>80% reduction in manual work</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>95% accuracy achieved</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$2M+ annual savings</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Enterprise AI Security Banner
export function EnterpriseAISecurityBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-orange-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Security Solution
              </span>
              <span className="text-sm opacity-90">Enterprise Grade</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise AI Security & Governance
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Protect your AI systems with advanced security, governance, and compliance frameworks. Achieve 99.7% threat detection accuracy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-security-governance"
                className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Get Security Solutions
              </Link>
              <Link
                href="/blog/ai-cybersecurity-2025"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-red-600 transition-colors"
              >
                Read Security Guide
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Security Features</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>99.7% threat detection</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔐</span>
                <span>Zero-trust architecture</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📋</span>
                <span>Compliance automation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Real-time monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}