import React from 'react';
import Link from 'next/link';

// Latest 2026 Content Banner
export function Latest2026ContentBanner() {
  return (
    <section className="bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span>✨</span>
            NEW 2026 CONTENT
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest AI Innovations & Success Stories
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-3xl mx-auto">
            Discover our newest content featuring AI business intelligence, autonomous enterprise systems, and proven ROI case studies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/blog/ai-business-intelligence-2026"
              className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              AI BI Guide 2026
            </Link>
            <Link
              href="/case-studies/ai-autonomous-enterprise-success-2026"
              className="border-2 border-white text-white hover:bg-white hover:text-purple-600 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              $25M ROI Case Study
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Autonomous Cloud Ops Banner
export function AIAutonomousCloudOpsBanner() {
  return (
    <section className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <span>☁️</span>
              AUTONOMOUS CLOUD OPS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Autonomous Cloud Operations 2026
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Achieve 99.9% uptime with self-managing cloud infrastructure. Automated scaling, intelligent monitoring, and predictive maintenance.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">99.9% Uptime</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Auto-scaling</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Predictive Maintenance</span>
            </div>
            <Link
              href="/blog/ai-autonomous-cloud-ops-2026"
              className="inline-block bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Read Complete Guide
            </Link>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">☁️</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-75">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold">80%</div>
                <div className="text-sm opacity-75">Cost Reduction</div>
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
    <section className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="text-6xl mb-4">💰</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm opacity-75">Automation</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$3M+</div>
                <div className="text-sm opacity-75">Savings</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <span>🏦</span>
              FINTECH TRANSFORMATION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI FinTech Transformation 2026
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Revolutionize financial services with AI automation. 95% process automation, fraud detection, and $3M+ annual savings.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Fraud Detection</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Risk Assessment</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Real-time Analytics</span>
            </div>
            <Link
              href="/blog/ai-fintech-transformation-2026"
              className="inline-block bg-white text-green-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// AI Retail Automation Banner
export function AIRetailAutomationBanner() {
  return (
    <section className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <span>🛒</span>
              RETAIL AUTOMATION
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI Retail Automation 2026
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Transform retail operations with AI automation. 150% revenue growth, 80% cost reduction, and intelligent inventory management.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Smart Inventory</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Demand Forecasting</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Customer Analytics</span>
            </div>
            <Link
              href="/case-studies/ai-retail-automation-2026"
              className="inline-block bg-white text-orange-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Case Study
            </Link>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">🛒</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">150%</div>
                <div className="text-sm opacity-75">Revenue Growth</div>
              </div>
              <div>
                <div className="text-3xl font-bold">80%</div>
                <div className="text-sm opacity-75">Cost Reduction</div>
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
    <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🤖</span>
            AUTONOMOUS OPERATIONS
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Autonomous Operations 2026
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Achieve complete business autonomy with self-managing AI systems. Zero-touch operations, predictive maintenance, and intelligent decision making.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-xl font-bold mb-2">Self-Managing Systems</h3>
              <p className="text-sm opacity-90">Autonomous operations with minimal human intervention</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🔮</div>
              <h3 className="text-xl font-bold mb-2">Predictive Intelligence</h3>
              <p className="text-sm opacity-90">Anticipate issues before they occur</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-xl font-bold mb-2">Continuous Optimization</h3>
              <p className="text-sm opacity-90">Self-improving performance over time</p>
            </div>
          </div>
          <Link
            href="/blog/ai-autonomous-operations-2026"
            className="inline-block bg-white text-indigo-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Explore Autonomous Operations
          </Link>
        </div>
      </div>
    </section>
  );
}

// FinOps Advanced Banner
export function FinOpsAdvancedBanner() {
  return (
    <section className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left order-2 md:order-1">
            <div className="text-6xl mb-4">📊</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">70%</div>
                <div className="text-sm opacity-75">Cost Reduction</div>
              </div>
              <div>
                <div className="text-3xl font-bold">90%</div>
                <div className="text-sm opacity-75">Accuracy</div>
              </div>
            </div>
          </div>
          <div className="order-1 md:order-2">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <span>💹</span>
              ADVANCED FINOPS
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI FinOps Advanced 2026
            </h2>
            <p className="text-lg opacity-90 mb-6">
              Master financial operations with AI-powered FinOps. 70% cost reduction, 90% accuracy, and intelligent resource optimization.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Cost Optimization</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Resource Planning</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Budget Forecasting</span>
            </div>
            <Link
              href="/blog/ai-finops-advanced-2026"
              className="inline-block bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Learn FinOps
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

// Platform Architecture Banner
export function PlatformArchitectureBanner() {
  return (
    <section className="bg-gradient-to-r from-slate-600 to-gray-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🏗️</span>
            PLATFORM ARCHITECTURE
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            AI Platform Architecture 2026
          </h2>
          <p className="text-lg opacity-90 mb-8 max-w-3xl mx-auto">
            Build scalable, resilient AI platforms with enterprise-grade architecture. Microservices, containerization, and cloud-native design.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-xl font-bold mb-2">Microservices</h3>
              <p className="text-sm opacity-90">Scalable, maintainable architecture</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">🐳</div>
              <h3 className="text-xl font-bold mb-2">Containerization</h3>
              <p className="text-sm opacity-90">Docker and Kubernetes deployment</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
              <div className="text-3xl mb-3">☁️</div>
              <h3 className="text-xl font-bold mb-2">Cloud-Native</h3>
              <p className="text-sm opacity-90">Optimized for cloud environments</p>
            </div>
          </div>
          <Link
            href="/blog/ai-platform-architecture-2026"
            className="inline-block bg-white text-slate-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
          >
            Learn Architecture
          </Link>
        </div>
      </div>
    </section>
  );
}

// Autonomous Operations Success Banner
export function AutonomousOperationsSuccessBanner() {
  return (
    <section className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold mb-4">
              <span>🏆</span>
              SUCCESS STORY
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Autonomous Operations Success 2026
            </h2>
            <p className="text-lg opacity-90 mb-6">
              See how a Fortune 500 company achieved 99.9% uptime with autonomous operations. $15M savings, zero downtime, complete transformation.
            </p>
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">99.9% Uptime</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">$15M Savings</span>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">Zero Downtime</span>
            </div>
            <Link
              href="/case-studies/ai-autonomous-operations-success-2026"
              className="inline-block bg-white text-violet-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              View Success Story
            </Link>
          </div>
          <div className="text-center">
            <div className="text-6xl mb-4">🏆</div>
            <div className="grid grid-cols-2 gap-4 text-center">
              <div>
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm opacity-75">Uptime</div>
              </div>
              <div>
                <div className="text-3xl font-bold">$15M</div>
                <div className="text-sm opacity-75">Savings</div>
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
    <section className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <span>🌟</span>
            NEW 2026 CONTENT SHOWCASE
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Latest AI Innovations & Success Stories
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Discover our newest content featuring cutting-edge AI technologies, proven case studies, and implementation guides for 2026.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="text-xl font-bold mb-3">AI Business Intelligence</h3>
            <p className="text-sm opacity-90 mb-4">Complete guide to AI-powered BI with 400% faster growth</p>
            <Link
              href="/blog/ai-business-intelligence-2026"
              className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Guide
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">🏆</div>
            <h3 className="text-xl font-bold mb-3">$25M ROI Case Study</h3>
            <p className="text-sm opacity-90 mb-4">Fortune 500 autonomous enterprise transformation</p>
            <Link
              href="/case-studies/ai-autonomous-enterprise-success-2026"
              className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study
            </Link>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <div className="text-3xl mb-3">☁️</div>
            <h3 className="text-xl font-bold mb-3">Autonomous Cloud Ops</h3>
            <p className="text-sm opacity-90 mb-4">99.9% uptime with self-managing infrastructure</p>
            <Link
              href="/blog/ai-autonomous-cloud-ops-2026"
              className="inline-block bg-white text-pink-600 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-pink-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors shadow-lg"
          >
            Explore All 2026 Content
          </Link>
        </div>
      </div>
    </section>
  );
}