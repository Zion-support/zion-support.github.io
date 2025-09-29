import React from 'react';
import Link from 'next/link';

// AI Multimodal Agents Banner
export function AIMultimodalAgentsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                New Article
              </span>
              <span className="text-purple-200 text-sm">15 min read</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              AI Multimodal Agents 2025: Vision, Voice, and Text Integration
            </h2>
            <p className="text-purple-100 mb-4 text-lg">
              Discover how multimodal AI agents are revolutionizing enterprise workflows with vision, 
              voice, and text processing capabilities. Achieve 85% better task completion rates.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-purple-500 px-3 py-1 rounded-full">85% Better Performance</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">70% Manual Work Reduction</span>
              <span className="bg-purple-500 px-3 py-1 rounded-full">40% Customer Satisfaction</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/blog/ai-multimodal-agents-2025"
              className="bg-white text-purple-600 px-6 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors text-center"
            >
              Read Article →
            </Link>
            <Link
              href="/services/ai-multimodal-agents"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Enterprise Automation Banner
export function AIEnterpriseAutomationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Featured Article
              </span>
              <span className="text-orange-200 text-sm">20 min read</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              AI Enterprise Automation 2025: Complete Business Transformation Guide
            </h2>
            <p className="text-orange-100 mb-4 text-lg">
              Transform your enterprise with AI automation. Learn strategies, implementation patterns, 
              and achieve 300% ROI with proven methodologies.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-orange-500 px-3 py-1 rounded-full">300% ROI</span>
              <span className="bg-orange-500 px-3 py-1 rounded-full">80% Process Reduction</span>
              <span className="bg-orange-500 px-3 py-1 rounded-full">95% Accuracy</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/blog/ai-enterprise-automation-2025"
              className="bg-white text-orange-600 px-6 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors text-center"
            >
              Read Guide →
            </Link>
            <Link
              href="/services/ai-enterprise-automation"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Edge Computing Banner
export function AIEdgeComputingBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                New Article
              </span>
              <span className="text-cyan-200 text-sm">12 min read</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              AI Edge Computing 2025: Real-Time Intelligence at the Network Edge
            </h2>
            <p className="text-cyan-100 mb-4 text-lg">
              Experience the future of AI with edge computing solutions that deliver sub-50ms response times, 
              offline capabilities, and real-time decision making.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-cyan-500 px-3 py-1 rounded-full">&lt;50ms Response</span>
              <span className="bg-cyan-500 px-3 py-1 rounded-full">99.9% Uptime</span>
              <span className="bg-cyan-500 px-3 py-1 rounded-full">95% Offline Capability</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/blog/ai-edge-computing-2025"
              className="bg-white text-cyan-600 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors text-center"
            >
              Read Article →
            </Link>
            <Link
              href="/services/ai-edge-computing"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors text-center"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Manufacturing Success Story Banner
export function ManufacturingSuccessBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-green-600 to-emerald-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Success Story
              </span>
              <span className="text-green-200 text-sm">Manufacturing</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              AI Manufacturing Transformation: 90% Efficiency Gain & $3M Savings
            </h2>
            <p className="text-green-100 mb-4 text-lg">
              See how a leading automotive manufacturer achieved 90% efficiency improvement and 
              $3M annual savings with comprehensive AI transformation.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-green-500 px-3 py-1 rounded-full">90% Efficiency Gain</span>
              <span className="bg-green-500 px-3 py-1 rounded-full">$3M Annual Savings</span>
              <span className="bg-green-500 px-3 py-1 rounded-full">95% Quality Accuracy</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/case-studies/ai-manufacturing-transformation-2025"
              className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-green-50 transition-colors text-center"
            >
              View Case Study →
            </Link>
            <Link
              href="/services/ai-manufacturing"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Latest AI Insights Banner
export function LatestAIInsightsBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-indigo-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Latest Insights
              </span>
              <span className="text-indigo-200 text-sm">3 New Articles</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Stay Ahead with Latest AI Trends & Innovations
            </h2>
            <p className="text-indigo-100 mb-4 text-lg">
              Discover cutting-edge AI technologies, implementation strategies, and success stories 
              that are transforming industries in 2025.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-indigo-500 px-3 py-1 rounded-full">Multimodal AI</span>
              <span className="bg-indigo-500 px-3 py-1 rounded-full">Edge Computing</span>
              <span className="bg-indigo-500 px-3 py-1 rounded-full">Enterprise Automation</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/blog"
              className="bg-white text-indigo-600 px-6 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors text-center"
            >
              View All Articles →
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors text-center"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Business Transformation Banner
export function AIBusinessTransformationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-pink-600 to-rose-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Transformation
              </span>
              <span className="text-pink-200 text-sm">Complete Guide</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Transform Your Business with AI-Powered Solutions
            </h2>
            <p className="text-pink-100 mb-4 text-lg">
              Join thousands of enterprises already achieving 300% ROI with our comprehensive 
              AI transformation strategies and proven implementation methodologies.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-pink-500 px-3 py-1 rounded-full">300% ROI</span>
              <span className="bg-pink-500 px-3 py-1 rounded-full">90% Efficiency</span>
              <span className="bg-pink-500 px-3 py-1 rounded-full">$3M+ Savings</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/services"
              className="bg-white text-pink-600 px-6 py-3 rounded-lg font-semibold hover:bg-pink-50 transition-colors text-center"
            >
              Explore Services →
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors text-center"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Workflow Automation Banner
export function AIWorkflowAutomationBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-teal-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Automation
              </span>
              <span className="text-teal-200 text-sm">Workflow AI</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Automate Complex Workflows with AI Intelligence
            </h2>
            <p className="text-teal-100 mb-4 text-lg">
              Reduce manual work by 80% with intelligent workflow automation that adapts, 
              learns, and optimizes your business processes in real-time.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-teal-500 px-3 py-1 rounded-full">80% Manual Work Reduction</span>
              <span className="bg-teal-500 px-3 py-1 rounded-full">95% Process Accuracy</span>
              <span className="bg-teal-500 px-3 py-1 rounded-full">24/7 Automation</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/services/ai-workflow-automation"
              className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-teal-50 transition-colors text-center"
            >
              Learn More →
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors text-center"
            >
              Get Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enterprise AI Security Banner
export function EnterpriseAISecurityBanner() {
  return (
    <div className="w-full bg-gradient-to-r from-red-600 to-orange-600 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-3">
              <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Security
              </span>
              <span className="text-red-200 text-sm">Enterprise AI</span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Secure AI Implementation for Enterprise Environments
            </h2>
            <p className="text-red-100 mb-4 text-lg">
              Deploy AI solutions with enterprise-grade security, compliance, and governance. 
              Achieve 99.7% threat detection accuracy with zero-trust architecture.
            </p>
            <div className="flex flex-wrap gap-4 text-sm">
              <span className="bg-red-500 px-3 py-1 rounded-full">99.7% Threat Detection</span>
              <span className="bg-red-500 px-3 py-1 rounded-full">Zero-Trust Architecture</span>
              <span className="bg-red-500 px-3 py-1 rounded-full">Compliance Ready</span>
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <Link
              href="/services/ai-cybersecurity"
              className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-red-50 transition-colors text-center"
            >
              Learn More →
            </Link>
            <Link
              href="/contact"
              className="border border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors text-center"
            >
              Security Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}