import React from 'react';
import Link from 'next/link';

// AI Enterprise Adoption Banner
export function AIEnterpriseAdoptionBanner() {
  return (
    <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">🚀</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">New: AI Enterprise Adoption 2025 Guide</h3>
              <p className="text-sm opacity-90">Master AI implementation with 300% ROI strategies</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blog/ai-enterprise-adoption-2025"
              className="bg-white text-blue-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Guide
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
            >
              Get AI Services
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Trends 2025 Banner
export function AITrends2025Banner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">🔮</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">AI Trends 2025: Top 10 Predictions</h3>
              <p className="text-sm opacity-90">Discover the technologies shaping the future</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blog/ai-trends-2025-predictions"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Predictions
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get Consultation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Supply Chain Optimization Banner
export function SupplyChainOptimizationBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">📦</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">AI Supply Chain Success: 60% Cost Reduction</h3>
              <p className="text-sm opacity-90">See how we saved $12M with AI optimization</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/case-studies/ai-supply-chain-optimization-2025"
              className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study
            </Link>
            <Link
              to="/services/ai-supply-chain-optimization"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Get Supply Chain AI
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
    <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Transform Your Business with AI</h3>
              <p className="text-sm opacity-90">Join 500+ companies achieving 300% ROI with AI</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blog/ai-enterprise-adoption-2025"
              className="bg-white text-orange-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Learn How
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
            >
              Start Today
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Customer Experience Banner
export function AICustomerExperienceBanner() {
  return (
    <div className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">💬</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">AI-Powered Customer Experience</h3>
              <p className="text-sm opacity-90">80% faster response times, 90% cost reduction</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blog/ai-customer-service-2025"
              className="bg-white text-cyan-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Article
            </Link>
            <Link
              to="/services/ai-virtual-assistant"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
            >
              Get AI Assistant
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Enterprise AI Transformation Banner
export function EnterpriseAITransformationBanner() {
  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">🏢</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Enterprise AI Transformation</h3>
              <p className="text-sm opacity-90">Complete guide to enterprise AI adoption and implementation</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blog/ai-enterprise-adoption-2025"
              className="bg-white text-indigo-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Guide
            </Link>
            <Link
              to="/case-studies/enterprise-ai-transformation-2025"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-colors"
            >
              View Success Story
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
    <div className="bg-gradient-to-r from-pink-600 to-rose-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">🧠</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Latest AI Insights & Trends</h3>
              <p className="text-sm opacity-90">Stay ahead with cutting-edge AI knowledge and strategies</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blog"
              className="bg-white text-pink-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read All Articles
            </Link>
            <Link
              to="/blog/ai-trends-2025-predictions"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-pink-600 transition-colors"
            >
              View 2025 Trends
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// AI Services Showcase Banner
export function AIServicesShowcaseBanner() {
  return (
    <div className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">🤖</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Comprehensive AI Services Portfolio</h3>
              <p className="text-sm opacity-90">From data analytics to autonomous agents - we've got you covered</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/services"
              className="bg-white text-teal-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Explore Services
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors"
            >
              Get Custom Quote
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
    <div className="bg-gradient-to-r from-violet-600 to-purple-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">⚙️</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">AI Workflow Automation</h3>
              <p className="text-sm opacity-90">Automate 90% of your business processes with intelligent workflows</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blog/ai-workflow-automation-guide"
              className="bg-white text-violet-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Guide
            </Link>
            <Link
              to="/services/ai-workflow-automation"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-violet-600 transition-colors"
            >
              Get Automation
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
    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">🛡️</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Enterprise AI Security</h3>
              <p className="text-sm opacity-90">99.7% threat detection accuracy with AI-powered security</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blog/enterprise-ai-security-2025"
              className="bg-white text-red-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Security Guide
            </Link>
            <Link
              to="/services/cybersecurity-consulting"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-red-600 transition-colors"
            >
              Get Security Audit
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Multimodal AI Integration Banner
export function MultimodalAIIntegrationBanner() {
  return (
    <div className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">🎯</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Multimodal AI Integration 2025</h3>
              <p className="text-sm opacity-90">250% efficiency gains with text, voice, and video AI</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/blog/ai-multimodal-integration-2025"
              className="bg-white text-purple-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Read Article
            </Link>
            <Link
              to="/services"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-colors"
            >
              Get AI Solutions
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

// Multimodal AI Customer Service Success Banner
export function MultimodalAICustomerServiceBanner() {
  return (
    <div className="bg-gradient-to-r from-green-600 to-teal-600 text-white py-4 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="bg-white/20 rounded-full p-2">
              <span className="text-2xl">⚡</span>
            </div>
            <div>
              <h3 className="font-bold text-lg">Multimodal AI Customer Service: 80% Faster Response</h3>
              <p className="text-sm opacity-90">See how e-commerce leader achieved 95% accuracy and 60% cost reduction</p>
            </div>
          </div>
          <div className="flex gap-3">
            <Link
              to="/case-studies/multimodal-ai-customer-service-transformation"
              className="bg-white text-green-600 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              View Case Study
            </Link>
            <Link
              to="/services/ai-customer-support-automation"
              className="border-2 border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-colors"
            >
              Get AI Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}