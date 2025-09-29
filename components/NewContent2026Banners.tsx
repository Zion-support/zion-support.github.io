import React from 'react';
import Link from 'next/link';

// Latest 2026 Content Banner
export function Latest2026ContentBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-10"></div>
      <div className="max-w-6xl mx-auto px-4 relative z-10">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              🚀 NEW 2026 CONTENT
            </span>
            <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
              BREAKTHROUGH AI
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Revolutionary AI Content for 2026
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover the latest AI breakthroughs, autonomous operations, and transformation strategies 
            that are reshaping industries worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/ai-autonomous-cloud-ops-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW ARTICLE
                </span>
                <span className="text-sm opacity-75">30 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-pink-200 transition-colors">
                AI Autonomous Cloud Operations 2026
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Master autonomous cloud operations with 99.9% uptime and 70% cost reduction.
              </p>
              <div className="flex items-center gap-2 text-pink-200 font-semibold text-sm">
                <span>⚡</span>
                <span>Zero-touch operations</span>
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-fintech-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW ARTICLE
                </span>
                <span className="text-sm opacity-75">25 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-pink-200 transition-colors">
                AI FinTech Transformation 2026
              </h3>
              <p className="text-sm opacity-90 mb-3">
                Transform financial services with 95% automation and $5M+ annual savings.
              </p>
              <div className="flex items-center gap-2 text-pink-200 font-semibold text-sm">
                <span>💳</span>
                <span>Banking revolution</span>
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-retail-automation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center gap-2 mb-3">
                <span className="bg-white/20 text-white px-2 py-1 rounded-full text-xs font-semibold">
                  NEW CASE STUDY
                </span>
                <span className="text-sm opacity-75">20 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-pink-200 transition-colors">
                AI Retail Automation Success 2026
              </h3>
              <p className="text-sm opacity-90 mb-3">
                $50M revenue growth with 150% growth rate and 80% cost reduction.
              </p>
              <div className="flex items-center gap-2 text-pink-200 font-semibold text-sm">
                <span>🛍️</span>
                <span>Retail transformation</span>
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="bg-white text-indigo-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore All 2026 Content →
          </Link>
        </div>
      </div>
    </section>
  );
}

// AI Autonomous Cloud Ops Banner
export function AIAutonomousCloudOpsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-cyan-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🚀 NEW 2026
              </span>
              <span className="text-sm opacity-90">Autonomous Operations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Autonomous Cloud Operations 2026
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Master autonomous cloud operations with AI-driven infrastructure management. 
              Achieve 99.9% uptime, 70% cost reduction, and zero-touch operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-autonomous-cloud-ops-2026"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Read Complete Guide
              </Link>
              <Link
                href="/services/ai-autonomous-cloud-ops"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-blue-600 transition-colors"
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
                <span>99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>70% cost reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>Zero-touch operations</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Predictive analytics</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI FinTech Transformation Banner
export function AIFinTechTransformationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-green-600 to-teal-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                💳 NEW 2026
              </span>
              <span className="text-sm opacity-90">FinTech Revolution</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI FinTech Transformation 2026
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Transform your financial services with AI-powered solutions. Achieve 95% automation, 
              70% cost reduction, and $5M+ annual savings.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/blog/ai-fintech-transformation-2026"
                className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Read Transformation Guide
              </Link>
              <Link
                href="/services/ai-fintech-transformation"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-green-600 transition-colors"
              >
                Start Transformation
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Transformation Results</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>95% process automation</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$5M+ annual savings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>99.7% fraud detection</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>2-minute loan approval</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Retail Automation Banner
export function AIRetailAutomationBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🛍️ NEW CASE STUDY
              </span>
              <span className="text-sm opacity-90">Retail Success</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Retail Automation Success 2026
            </h2>
            <p className="text-lg mb-6 opacity-90">
              See how a retail giant achieved $50M revenue growth, 150% growth rate, 
              and 80% cost reduction with AI automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-retail-automation-2026"
                className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Read Case Study
              </Link>
              <Link
                href="/services/ai-retail-automation"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-orange-600 transition-colors"
              >
                Get Retail AI Solutions
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Success Metrics</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">📈</span>
                <span>150% revenue growth</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$50M additional revenue</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>80% cost reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>500% ROI achieved</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Autonomous Operations Banner
export function AutonomousOperationsBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-600 to-indigo-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🤖 AUTONOMOUS AI
              </span>
              <span className="text-sm opacity-90">Self-Managing Systems</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Autonomous Operations Platform
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Deploy fully autonomous AI systems that manage themselves with minimal human intervention. 
              Achieve unprecedented efficiency and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-autonomous-operations"
                className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Get Autonomous Platform
              </Link>
              <Link
                href="/case-studies/ai-autonomous-enterprise-success-2026"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-purple-600 transition-colors"
              >
                See Success Story
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Autonomous Capabilities</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>Self-healing infrastructure</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Predictive maintenance</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <span>Auto-scaling systems</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🧠</span>
                <span>Intelligent decision making</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// FinOps Advanced Banner
export function FinOpsAdvancedBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                💰 ADVANCED FINOPS
              </span>
              <span className="text-sm opacity-90">Financial Operations</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Advanced AI Financial Operations
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Optimize financial operations with AI-driven cost management, automated billing, 
              and intelligent resource allocation for maximum ROI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-finops-automation"
                className="bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Get FinOps Solutions
              </Link>
              <Link
                href="/case-studies/ai-finance-automation"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-emerald-600 transition-colors"
              >
                View Case Study
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">FinOps Benefits</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>60% cost optimization</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Real-time cost visibility</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>Automated billing</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🎯</span>
                <span>Intelligent resource allocation</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Platform Architecture Banner
export function PlatformArchitectureBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🏗️ PLATFORM ARCHITECTURE
              </span>
              <span className="text-sm opacity-90">Enterprise Scale</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Enterprise AI Platform Architecture
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Build scalable, secure, and high-performance AI platforms that can handle enterprise workloads 
              with 99.9% uptime and unlimited scalability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/services/ai-platform-architecture"
                className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Get Platform Design
              </Link>
              <Link
                href="/case-studies/ai-enterprise-transformation-success-2026"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-cyan-600 transition-colors"
              >
                See Enterprise Success
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Platform Features</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>99.9% uptime guarantee</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🔄</span>
                <span>Auto-scaling capabilities</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🛡️</span>
                <span>Enterprise security</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📊</span>
                <span>Real-time monitoring</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Autonomous Operations Success Banner
export function AutonomousOperationsSuccessBanner() {
  return (
    <section className="py-16 bg-gradient-to-r from-pink-600 to-purple-600 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                🏆 SUCCESS STORY
              </span>
              <span className="text-sm opacity-90">Fortune 500</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Autonomous Operations Success Story
            </h2>
            <p className="text-lg mb-6 opacity-90">
              See how a Fortune 500 company achieved $25M ROI with autonomous AI systems. 
              99.9% uptime, 90% cost reduction, and zero-touch operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/case-studies/ai-autonomous-enterprise-success-2026"
                className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold text-center hover:bg-gray-100 transition-colors"
              >
                Read Success Story
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold text-center hover:bg-white hover:text-pink-600 transition-colors"
              >
                Start Your Journey
              </Link>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="text-xl font-bold mb-4">Success Metrics</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="text-2xl">💰</span>
                <span>$25M ROI achieved</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">⚡</span>
                <span>99.9% uptime</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">📉</span>
                <span>90% cost reduction</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-2xl">🤖</span>
                <span>Zero-touch operations</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// New Content Showcase Banner 2026
export function NewContentShowcaseBanner2026() {
  return (
    <section className="py-16 bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            🚀 2026 AI Content Hub
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Explore our comprehensive collection of AI insights, case studies, and implementation guides 
            that are transforming businesses worldwide.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Link href="/blog" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                AI Blog Posts
              </h3>
              <p className="text-sm opacity-90">
                50+ articles covering AI trends, strategies, and implementations
              </p>
            </div>
          </Link>
          
          <Link href="/case-studies" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                Success Stories
              </h3>
              <p className="text-sm opacity-90">
                Real-world case studies with proven ROI and results
              </p>
            </div>
          </Link>
          
          <Link href="/services" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">⚙️</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                AI Services
              </h3>
              <p className="text-sm opacity-90">
                Comprehensive AI solutions for enterprise transformation
              </p>
            </div>
          </Link>
          
          <Link href="/contact" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 text-center">
              <div className="text-4xl mb-4">💬</div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-300 transition-colors">
                Consultation
              </h3>
              <p className="text-sm opacity-90">
                Get personalized AI transformation guidance
              </p>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/content-hub"
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Explore Complete Content Hub →
          </Link>
        </div>
      </div>
    </section>
  );
}