import React from 'react';
import Link from 'next/link';

export function Latest2026ContentBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🚀 Latest 2026 AI Content & Innovations
          </h2>
          <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
            Discover cutting-edge AI predictions, security strategies, and sustainability 
            transformations that will shape the future of enterprise technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <Link href="/blog/ai-2026-predictions" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-white/20 px-3 py-1 rounded-full text-sm font-semibold">
                  AI Predictions
                </span>
                <span className="text-indigo-200 text-sm">25 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                AI Predictions 2026: The Future of Artificial Intelligence
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Discover the top AI predictions for 2026, including autonomous agents, 
                quantum AI, and enterprise transformation trends.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                Read Predictions →
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-enterprise-security-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-red-500/20 px-3 py-1 rounded-full text-sm font-semibold">
                  AI Security
                </span>
                <span className="text-indigo-200 text-sm">22 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                AI Enterprise Security 2026: Next-Gen Protection
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Comprehensive guide to AI enterprise security covering zero-trust 
                architecture and AI-powered threat detection.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                Read Security Guide →
              </div>
            </div>
          </Link>
          
          <Link href="/blog/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm font-semibold">
                  Sustainability
                </span>
                <span className="text-indigo-200 text-sm">18 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                AI Sustainability Transformation 2026
              </h3>
              <p className="text-indigo-100 text-sm mb-4">
                Achieve carbon-neutral operations with AI-powered sustainability 
                solutions and $2M+ in cost savings.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                Read Sustainability Guide →
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-block bg-white text-indigo-700 hover:bg-indigo-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explore All 2026 Content
          </Link>
        </div>
      </div>
    </div>
  );
}

export function NewContentShowcaseBanner2026() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ✨ New Success Stories & Case Studies
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            See how leading companies achieved remarkable results with AI transformation, 
            delivering millions in savings and unprecedented efficiency gains.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Link href="/case-studies/ai-sustainability-transformation-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-green-500/20 px-3 py-1 rounded-full text-sm font-semibold">
                  Fortune 500 Success
                </span>
                <span className="text-emerald-200 text-sm">12 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                AI Sustainability Transformation: $3M ROI Case Study
              </h3>
              <p className="text-emerald-100 text-sm mb-4">
                See how EcoTech Solutions achieved carbon-neutral operations with 
                85% emission reduction and $3M annual savings.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                View Case Study →
              </div>
            </div>
          </Link>
          
          <Link href="/case-studies/ai-manufacturing-excellence-2026" className="group">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 border border-white/20">
              <div className="flex items-center gap-3 mb-3">
                <span className="bg-blue-500/20 px-3 py-1 rounded-full text-sm font-semibold">
                  Manufacturing Excellence
                </span>
                <span className="text-emerald-200 text-sm">10 min read</span>
              </div>
              <h3 className="text-xl font-bold mb-2 group-hover:text-yellow-200 transition-colors">
                AI Manufacturing Excellence: $5M ROI Success Story
              </h3>
              <p className="text-emerald-100 text-sm mb-4">
                Discover how Industrial Dynamics achieved 95% automation and 
                300% productivity gains with AI transformation.
              </p>
              <div className="flex items-center text-yellow-200 font-semibold text-sm">
                View Success Story →
              </div>
            </div>
          </Link>
        </div>
        
        <div className="text-center">
          <Link
            href="/case-studies"
            className="inline-block bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            View All Success Stories
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AIAutonomousCloudOpsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-slate-800 via-gray-800 to-slate-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ☁️ AI Autonomous Cloud Operations 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Self-healing infrastructure with 99.9% uptime and 90% cost reduction. 
            Experience the future of autonomous cloud management.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">90%</div>
              <div className="text-gray-300 text-sm">Cost Reduction</div>
            </div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Autonomous Management</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-autonomous-cloud-ops-2026"
            className="inline-block bg-cyan-600 text-white hover:bg-cyan-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Learn About Autonomous Cloud Ops
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AIFinTechTransformationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💰 AI FinTech Transformation 2026
          </h2>
          <p className="text-xl text-green-100 max-w-3xl mx-auto">
            95% automation, $5M+ savings, and digital banking revolution. 
            Transform your financial operations with AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-green-100 text-sm">Process Automation</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$5M+</div>
              <div className="text-green-100 text-sm">Annual Savings</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">99.7%</div>
              <div className="text-green-100 text-sm">Accuracy Rate</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-fintech-transformation-2026"
            className="inline-block bg-white text-green-700 hover:bg-green-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explore FinTech Transformation
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AIRetailAutomationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🛍️ AI Retail Automation 2026
          </h2>
          <p className="text-xl text-orange-100 max-w-3xl mx-auto">
            98% automation, 300% productivity gains, and $8M annual ROI. 
            Revolutionize your retail operations with AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">98%</div>
              <div className="text-orange-100 text-sm">Automation Rate</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">300%</div>
              <div className="text-orange-100 text-sm">Productivity Gains</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$8M</div>
              <div className="text-orange-100 text-sm">Annual ROI</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/case-studies/ai-retail-automation-2026"
            className="inline-block bg-white text-orange-700 hover:bg-orange-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            View Retail Success Story
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AutonomousOperationsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🤖 Autonomous Operations 2026
          </h2>
          <p className="text-xl text-purple-100 max-w-3xl mx-auto">
            Complete self-managing business operations with zero-touch management, 
            predictive analytics, and self-optimizing systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <div className="text-2xl font-bold text-cyan-300 mb-1">100%</div>
            <div className="text-purple-100 text-xs">Autonomous</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <div className="text-2xl font-bold text-green-300 mb-1">99.9%</div>
            <div className="text-purple-100 text-xs">Uptime</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <div className="text-2xl font-bold text-yellow-300 mb-1">$25M</div>
            <div className="text-purple-100 text-xs">ROI</div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20 text-center">
            <div className="text-2xl font-bold text-pink-300 mb-1">90%</div>
            <div className="text-purple-100 text-xs">Cost Reduction</div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-autonomous-operations-2026"
            className="inline-block bg-white text-purple-700 hover:bg-purple-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Learn About Autonomous Operations
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FinOpsAdvancedBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            💼 AI FinOps Advanced 2026
          </h2>
          <p className="text-xl text-teal-100 max-w-3xl mx-auto">
            Master advanced AI FinOps with predictive cost optimization, automated 
            financial reporting, and intelligent resource allocation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">70%</div>
              <div className="text-teal-100 text-sm">Cost Optimization</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-teal-100 text-sm">Automation Rate</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$2M+</div>
              <div className="text-teal-100 text-sm">Annual Savings</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-finops-advanced-2026"
            className="inline-block bg-white text-teal-700 hover:bg-teal-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Advanced FinOps
          </Link>
        </div>
      </div>
    </div>
  );
}

export function PlatformArchitectureBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-gray-800 via-slate-800 to-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🏗️ AI Platform Architecture 2026
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Design and implement enterprise-scale AI platforms with microservices, 
            edge computing, and autonomous scaling.
          </p>
        </div>
        
        <div className="grid md:grid-cols-4 gap-4 mb-8">
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-2xl font-bold text-cyan-400 mb-1">99.9%</div>
            <div className="text-gray-300 text-xs">Reliability</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-2xl font-bold text-green-400 mb-1">10x</div>
            <div className="text-gray-300 text-xs">Performance</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-2xl font-bold text-purple-400 mb-1">Auto</div>
            <div className="text-gray-300 text-xs">Scaling</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10 text-center">
            <div className="text-2xl font-bold text-yellow-400 mb-1">Edge</div>
            <div className="text-gray-300 text-xs">Computing</div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-platform-architecture-2026"
            className="inline-block bg-cyan-600 text-white hover:bg-cyan-700 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Learn Platform Architecture
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AutonomousOperationsSuccessBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🎯 Autonomous Operations Success Story
          </h2>
          <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
            See how a Fortune 500 company achieved $25M ROI with autonomous operations, 
            delivering 99.9% uptime and 90% cost reduction.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$25M</div>
              <div className="text-emerald-100 text-sm">ROI Achieved</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">99.9%</div>
              <div className="text-emerald-100 text-sm">Uptime</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">90%</div>
              <div className="text-emerald-100 text-sm">Cost Reduction</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/case-studies/ai-autonomous-operations-success-2026"
            className="inline-block bg-white text-emerald-700 hover:bg-emerald-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            View Success Story
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AINeuralArchitectureOptimizationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🧠 AI Neural Architecture Optimization 2026
          </h2>
          <p className="text-xl text-violet-100 max-w-3xl mx-auto">
            Optimize neural network architectures for maximum performance and efficiency 
            with advanced AI techniques and automated optimization.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">50%</div>
              <div className="text-violet-100 text-sm">Performance Gain</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">60%</div>
              <div className="text-violet-100 text-sm">Efficiency Boost</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">Auto</div>
              <div className="text-violet-100 text-sm">Optimization</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-neural-architecture-optimization-2026"
            className="inline-block bg-white text-violet-700 hover:bg-violet-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Learn Neural Optimization
          </Link>
        </div>
      </div>
    </div>
  );
}

export function AIFederatedLearningBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🔗 AI Federated Learning 2026
          </h2>
          <p className="text-xl text-rose-100 max-w-3xl mx-auto">
            Train AI models across distributed data sources while preserving privacy 
            and maintaining model performance with federated learning.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-rose-100 text-sm">Privacy Preserved</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-rose-100 text-sm">Model Accuracy</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">10x</div>
              <div className="text-rose-100 text-sm">Faster Training</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/blog/ai-federated-learning-2026"
            className="inline-block bg-white text-rose-700 hover:bg-rose-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Federated Learning
          </Link>
        </div>
      </div>
    </div>
  );
}

export function FederatedLearningSuccessBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            🏆 Federated Learning Success Story
          </h2>
          <p className="text-xl text-amber-100 max-w-3xl mx-auto">
            See how a healthcare consortium achieved 95% model accuracy while maintaining 
            100% data privacy with federated learning implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">95%</div>
              <div className="text-amber-100 text-sm">Model Accuracy</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">100%</div>
              <div className="text-amber-100 text-sm">Data Privacy</div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
            <div className="text-center">
              <div className="text-4xl font-bold text-yellow-300 mb-2">$2M</div>
              <div className="text-amber-100 text-sm">Cost Savings</div>
            </div>
          </div>
        </div>
        
        <div className="text-center">
          <Link
            href="/case-studies/ai-federated-learning-success-2026"
            className="inline-block bg-white text-amber-700 hover:bg-amber-50 px-8 py-3 rounded-lg font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            View Success Story
          </Link>
        </div>
      </div>
    </div>
  );
}