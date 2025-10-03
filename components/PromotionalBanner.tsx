"use client";

import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

interface PromotionalBannerProps {
  message: string;
  ctaText: string;
  ctaLink: string;
  backgroundColor?: string;
  textColor?: string;
  showClose?: boolean;
  autoHide?: boolean;
  hideAfter?: number; // in seconds
}

export default function PromotionalBanner({
  message,
  ctaText,
  ctaLink,
  backgroundColor = "bg-gradient-to-r from-blue-600 to-purple-600
  textColor = "text-white
  showClose = true,
  autoHide = false,
  hideAfter = 10
}: PromotionalBannerProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (autoHide) {
      const timer = setTimeout(() => {
        handleClose();
      }, hideAfter * 1000);
      return () => clearTimeout(timer);
    }
  }, [autoHide, hideAfter]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  };

  if (!isVisible) return null;

  return (
    <div className={`relative ${backgroundColor} ${textColor} py-3 px-4 transition-all duration-300 ${
      isClosing ? 'opacity-0 transform -translate-y-full' : 'opacity-100 transform translate-y-0'
    }`}>
      <div className="text-left">
        <div className="text-left">
          <div className="text-left">
            <span className="text-left"><
            <span className="text-left">{message}<
          </div>
          
          <div className="text-left">
            <Link
              to={ctaLink}
              className="text-left"
            >
              {ctaText}
            </Link>
            
            {showClose && (
              <button
                onClick={handleClose}
                className="text-left"
                aria-label="Close banner"
              >
                <svg className="text-left" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// Pre-configured banner variants
export const NewContentBanner = () => (
  <PromotionalBanner
    message="🎉 New: AI Autonomous Cloud Ops 2026 — 99.9% uptime with zero‑touch ops"
    ctaText="Read the article"
    ctaLink="/blog/ai-autonomous-cloud-ops-2026"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    autoHide={true}
    hideAfter={18}
  />
);

export const LimitedTimeBanner = () => (
  <PromotionalBanner
    message="⚡ Limited Time: 20% Off AI Chatbot Development"
    ctaText="Get Quote"
    ctaLink="/contact"
    backgroundColor="bg-gradient-to-r from-orange-600 to-red-600"
    autoHide={false}
  />
);

export const CaseStudyBanner = () => (
  <PromotionalBanner
    message="📈 See How We Helped Clients Save $2M+ with AI Solutions"
    ctaText="View Case Studies"
    ctaLink="/case-studies"
    backgroundColor="bg-gradient-to-r from-purple-600 to-indigo-600"
    autoHide={true}
    hideAfter={12}
  />
);

export const NewBlogBanner = () => (
  <PromotionalBanner
    message="🔥 Fresh Insights: AI Roadmaps 2026 and FinOps Scorecards 2025 now live"
    ctaText="Browse Latest Posts"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-orange-600 to-pink-600"
    autoHide={true}
    hideAfter={18}
  />
);

export const AnalyticsPlatformBanner = () => (
  <PromotionalBanner
    message="🚀 Launch: AI Analytics Platform - Transform Data into Actionable Insights"
    ctaText="Explore Platform"
    ctaLink="/services/ai-analytics-platform"
    backgroundColor="bg-gradient-to-r from-teal-600 to-cyan-600"
    autoHide={true}
    hideAfter={18}
  />
);

export const TechCorpSuccessBanner = () => (
  <PromotionalBanner
    message="🏆 Success Story: TechCorp Achieved 90% Efficiency Gain with AI Transformation"
    ctaText="View Case Study"
    ctaLink="/case-studies/techcorp-ai-transformation"
    backgroundColor="bg-gradient-to-r from-green-600 to-emerald-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const FreeTrialBanner = () => (
  <PromotionalBanner
    message="🎯 Limited Time: 30-Day Free Trial for AI Analytics Platform - No Credit Card Required"
    ctaText="Start Free Trial"
    ctaLink="/services/ai-analytics-platform#pricing"
    backgroundColor="bg-gradient-to-r from-yellow-600 to-orange-600"
    autoHide={false}
  />
);

export const WorkflowAutomationBanner = () => (
  <PromotionalBanner
    message="⚙️ New Guide: AI Workflow Automation Implementation - Reduce Manual Work by 80%"
    ctaText="Read Guide"
    ctaLink="/blog/ai-workflow-automation-guide"
    backgroundColor="bg-gradient-to-r from-emerald-600 to-teal-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const AIAnalyticsBanner = () => (
  <PromotionalBanner
    message="📊 New Article: AI Analytics Implementation - Transform Data into Actionable Insights"
    ctaText="Read Article"
    ctaLink="/blog/ai-analytics-implementation"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    autoHide={true}
    hideAfter={18}
  />
);

export const AIRoadmapsBanner = () => (
  <PromotionalBanner
    message="🗺️ New: AI Roadmaps 2026 — What to Build Next and Why"
    ctaText="Read Roadmap"
    ctaLink="/blog/ai-roadmaps-2026"
    backgroundColor="bg-gradient-to-r from-blue-600 to-teal-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const AIFinOpsBanner = () => (
  <PromotionalBanner
    message="📉 New: AI FinOps Scorecards 2025 — Control LLM Spend"
    ctaText="Read Scorecards"
    ctaLink="/blog/ai-finops-scorecards-2025"
    backgroundColor="bg-gradient-to-r from-amber-600 to-pink-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const HealthTechSuccessBanner = () => (
  <PromotionalBanner
    message="🏥 Success Story: HealthTech Solutions Achieved 80% Efficiency Gain with AI Virtual Assistant"
    ctaText="View Case Study"
    ctaLink="/case-studies/healthtech-ai-transformation"
    backgroundColor="bg-gradient-to-r from-green-600 to-emerald-600"
    autoHide={true}
    hideAfter={22}
  />
);

export const ComprehensiveAIBanner = () => (
  <PromotionalBanner
    message="🚀 Complete AI Transformation Guide: From Strategy to Implementation - Everything You Need to Know"
    ctaText="Explore Resources"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
    autoHide={true}
    hideAfter={25}
  />
);

export const EnterpriseAIBanner = () => (
  <PromotionalBanner
    message="🏢 Enterprise AI Solutions: Scale Your Business with Custom AI Implementation and Support"
    ctaText="Get Consultation"
    ctaLink="/contact"
    backgroundColor="bg-gradient-to-r from-blue-600 to-indigo-600"
    autoHide={false}
  />
);

export const CustomerServiceAIBanner = () => (
  <PromotionalBanner
    message="💬 New Article: AI-Powered Customer Service Revolution - 80% Faster Response Times, 90% Cost Reduction"
    ctaText="Read Article"
    ctaLink="/blog/ai-customer-service-2025"
    backgroundColor="bg-gradient-to-r from-purple-600 to-indigo-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const HealthcareAIBanner = () => (
  <PromotionalBanner
    message="🏥 Featured: AI Healthcare Transformation Guide - 40% Better Diagnostics, 60% Improved Outcomes"
    ctaText="Explore Healthcare AI"
    ctaLink="/blog/ai-healthcare-transformation-2025"
    backgroundColor="bg-gradient-to-r from-green-600 to-teal-600"
    autoHide={true}
    hideAfter={22}
  />
);

export const RetailSuccessBanner = () => (
  <PromotionalBanner
    message="🛍️ Success Story: RetailAI Corp Achieved 150% Revenue Growth with AI Transformation"
    ctaText="View Case Study"
    ctaLink="/case-studies/retail-ai-transformation"
    backgroundColor="bg-gradient-to-r from-orange-600 to-red-600"
    autoHide={true}
    hideAfter={25}
  />
);

export const AIContentShowcaseBanner = () => (
  <PromotionalBanner
    message="📚 Fresh Content: New AI Articles & Case Studies - Customer Service, Healthcare, Retail Success Stories"
    ctaText="Browse All Content"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    autoHide={true}
    hideAfter={18}
  />
);

export const AIRevolutionBanner = () => (
  <PromotionalBanner
    message="🚀 AI Revolution 2025: Complete Business Transformation Guide - Latest Trends, Strategies & Implementation"
    ctaText="Read Complete Guide"
    ctaLink="/blog/ai-revolution-2025"
    backgroundColor="bg-gradient-to-r from-blue-600 to-purple-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const AutonomousAgentsBanner = () => (
  <PromotionalBanner
    message="🤖 New: AI Autonomous Agents 2025 - Complete Enterprise Implementation Guide with 300% ROI Strategies"
    ctaText="Read Guide"
    ctaLink="/blog/ai-autonomous-agents-2025"
    backgroundColor="bg-gradient-to-r from-purple-600 to-indigo-600"
    autoHide={true}
    hideAfter={22}
  />
);

export const AIGovernanceBanner = () => (
  <PromotionalBanner
    message="🛡️ Featured: AI Governance Framework 2025 - 70% Risk Reduction with Enterprise-Ready Implementation"
    ctaText="Read Framework"
    ctaLink="/blog/ai-governance-framework-2025"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    autoHide={true}
    hideAfter={25}
  />
);

export const FinTechSuccessBanner = () => (
  <PromotionalBanner
    message="🏦 Success Story: FinTech Achieved 70% Risk Reduction & $2.5M Savings with AI Governance"
    ctaText="View Case Study"
    ctaLink="/case-studies/fintech-ai-risk-compliance-2025"
    backgroundColor="bg-gradient-to-r from-green-600 to-emerald-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const NewContentShowcaseBanner = () => (
  <PromotionalBanner
    message="📚 Fresh Content: AI Autonomous Agents, Governance Framework, FinTech Success Stories - Latest 2025 Insights"
    ctaText="Browse All Content"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-teal-600 to-cyan-600"
    autoHide={true}
    hideAfter={18}
  />
);

// New 2026 Content Banners
export const AIMultimodalEnterpriseBanner = () => (
  <PromotionalBanner
    message="🎯 NEW: AI Multimodal Enterprise 2026 - 85% Efficiency Gains & $2M+ ROI with Vision, Language & Audio AI"
    ctaText="Read Article"
    ctaLink="/blog/ai-multimodal-enterprise-2026"
    backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const AIEnterpriseAutomation2026Banner = () => (
  <PromotionalBanner
    message="⚙️ NEW: AI Enterprise Automation 2026 - 95% Process Automation & $5M+ Savings with Zero-Touch Operations"
    ctaText="Read Guide"
    ctaLink="/blog/ai-enterprise-automation-2026"
    backgroundColor="bg-gradient-to-r from-green-600 to-emerald-600"
    autoHide={true}
    hideAfter={22}
  />
);

export const AIDataAnalyticsEnterpriseBanner = () => (
  <PromotionalBanner
    message="📊 NEW: AI Data Analytics Enterprise 2026 - 90% Faster Insights & $3M+ ROI with Predictive Intelligence"
    ctaText="Read Article"
    ctaLink="/blog/ai-data-analytics-enterprise-2026"
    backgroundColor="bg-gradient-to-r from-blue-600 to-indigo-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const EnterpriseTransformationSuccessBanner = () => (
  <PromotionalBanner
    message="🏆 NEW: $10M ROI Case Study - Fortune 500 AI Transformation with 95% Automation & 300% Productivity Gains"
    ctaText="View Case Study"
    ctaLink="/case-studies/ai-enterprise-transformation-success-2026"
    backgroundColor="bg-gradient-to-r from-orange-600 to-red-600"
    autoHide={true}
    hideAfter={25}
  />
);

export const HealthcareTransformationBanner = () => (
  <PromotionalBanner
    message="🏥 NEW: AI Healthcare Transformation 2026 - 40% Better Diagnostics & 60% Improved Outcomes Case Study"
    ctaText="View Success Story"
    ctaLink="/case-studies/ai-healthcare-transformation-2026"
    backgroundColor="bg-gradient-to-r from-cyan-600 to-blue-600"
    autoHide={true}
    hideAfter={22}
  />
);

export const NewContent2026Banner = () => (
  <PromotionalBanner
    message="🚀 NEW 2026 Content: Multimodal AI, Enterprise Automation, Data Analytics & Success Stories - Latest AI Insights"
    ctaText="Explore 2026 Content"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    autoHide={true}
    hideAfter={18}
  />
);

// New 2026 Operational Excellence & Observability Banners
export const AIOperationalExcellenceBanner = () => (
  <PromotionalBanner
    message="⚙️ NEW: AI Operational Excellence 2026 - 95% Automation & $5M+ Savings with Zero-Touch Operations"
    ctaText="Read Guide"
    ctaLink="/blog/ai-operational-excellence-2026"
    backgroundColor="bg-gradient-to-r from-emerald-600 to-teal-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const AIAgentObservabilityBanner = () => (
  <PromotionalBanner
    message="🔍 NEW: AI Agent Observability 2026 - 99.9% Reliability with Real-time Monitoring & 85% Faster Debugging"
    ctaText="Read Guide"
    ctaLink="/blog/ai-agent-observability-2026"
    backgroundColor="bg-gradient-to-r from-blue-600 to-cyan-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const ManufacturingTransformationBanner = () => (
  <PromotionalBanner
    message="🏭 NEW: $12M ROI Manufacturing Case Study - 98% Automation, 400% Productivity Gains & Zero-Defect Production"
    ctaText="View Case Study"
    ctaLink="/case-studies/ai-manufacturing-transformation-2026"
    backgroundColor="bg-gradient-to-r from-orange-600 to-red-600"
    autoHide={true}
    hideAfter={22}
  />
);

export const Latest2026ContentBanner = () => (
  <PromotionalBanner
    message="✨ LATEST 2026: Operational Excellence, Agent Observability & Manufacturing Success - Premium AI Content"
    ctaText="Browse Latest"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
    autoHide={true}
    hideAfter={18}
  />
);

// New 2026 Content Banners
export const AISecurityEnterprise2026Banner = () => (
  <PromotionalBanner
    message="🛡️ NEW: AI Enterprise Security 2026 - Zero-Trust Architecture with 99.9% Security Compliance"
    ctaText="Read Article"
    ctaLink="/blog/ai-enterprise-security-2026"
    backgroundColor="bg-gradient-to-r from-red-600 to-orange-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const AIMultimodalEnterprise2026Banner = () => (
  <PromotionalBanner
    message="🎯 NEW: AI Multimodal Enterprise 2026 - Vision, Language & Audio Integration with 40% Accuracy Improvement"
    ctaText="Read Guide"
    ctaLink="/blog/ai-multimodal-enterprise-2026"
    backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const AISustainabilityTransformationBanner = () => (
  <PromotionalBanner
    message="🌱 NEW: AI Sustainability Case Study - 60% Carbon Reduction & $15M Savings for Fortune 500 Energy Company"
    ctaText="View Case Study"
    ctaLink="/case-studies/ai-sustainability-transformation-2026"
    backgroundColor="bg-gradient-to-r from-green-600 to-teal-600"
    autoHide={true}
    hideAfter={20}
  />
);

export const LatestContent2026Banner = () => (
  <PromotionalBanner
    message="✨ LATEST 2026: AI Security, Multimodal AI & Sustainability Transformation - Premium Enterprise Content"
    ctaText="Explore Latest"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    autoHide={true}
    hideAfter={18}
  />
);

export const AIAgentReliabilityBanner = () => (
  <PromotionalBanner
    message="🛡️ NEW: AI Agent Reliability 2026 - Achieve 99.9% uptime with production-ready autonomous systems and fault tolerance"
    ctaText="Read Guide"
    ctaLink="/blog/ai-agent-reliability-2026"
    backgroundColor="bg-gradient-to-r from-blue-600 to-cyan-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={15}
  />
);

export const AIMultimodalIntegrationBanner = () => (
  <PromotionalBanner
    message="🎯 NEW: Multimodal Enterprise Integration 2026 - Unify vision, voice & text AI for 95% accuracy in context understanding"
    ctaText="Learn More"
    ctaLink="/blog/ai-multimodal-enterprise-integration-2026"
    backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={15}
  />
);

export const AIEnterpriseAutomationBanner = () => (
  <PromotionalBanner
    message="⚡ FEATURED: Enterprise Automation Blueprint 2026 - Achieve 95% process efficiency and $5M+ savings with zero-touch operations"
    ctaText="Get Blueprint"
    ctaLink="/blog/ai-enterprise-automation-blueprint-2026"
    backgroundColor="bg-gradient-to-r from-green-600 to-teal-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={15}
  />
);

// New 2026 Breakthrough Banners
export const AIAdvancedNeuralInterfacesBanner = () => (
  <PromotionalBanner
    message="🧠 BREAKTHROUGH: Advanced Neural Interfaces 2026 - 10x Productivity, 95% Accuracy, $15B Success Story"
    ctaText="Read the Breakthrough"
    ctaLink="/blog/ai-2026-advanced-neural-interfaces-breakthrough"
    backgroundColor="bg-gradient-to-r from-purple-700 to-indigo-700"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const AIQuantumOptimizationBanner = () => (
  <PromotionalBanner
    message="⚡ REVOLUTION: Quantum AI Optimization 2026 - 1000x Faster, 95% Accuracy, $12B Financial Success"
    ctaText="Discover Quantum AI"
    ctaLink="/blog/ai-2026-quantum-ai-optimization-revolution"
    backgroundColor="bg-gradient-to-r from-cyan-600 to-blue-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const NeuralInterfacesSuccessBanner = () => (
  <PromotionalBanner
    message="💰 SUCCESS STORY: Neural Interfaces Enterprise Transformation - $15B Value Creation, 10x Productivity"
    ctaText="View Case Study"
    ctaLink="/case-studies/ai-2026-neural-interfaces-enterprise-transformation-15-billion-success"
    backgroundColor="bg-gradient-to-r from-green-600 to-teal-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={22}
  />
);

export const QuantumAIFinanceBanner = () => (
  <PromotionalBanner
    message="💎 FINANCIAL BREAKTHROUGH: Quantum AI Financial Optimization - $12B Additional Returns, 1000x Speed"
    ctaText="See Financial Success"
    ctaLink="/case-studies/ai-2026-quantum-ai-financial-optimization-12-billion-success"
    backgroundColor="bg-gradient-to-r from-yellow-600 to-orange-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={22}
  />
);

export const AITrends2025Banner = () => (
  <PromotionalBanner
    message="📈 NEW: AI Trends 2025 - Complete Industry Analysis with 15 Key Predictions and Implementation Strategies"
    ctaText="Read Trends"
    ctaLink="/blog/ai-trends-2025"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={18}
  />
);

export const NewServicesShowcaseBanner = () => (
  <PromotionalBanner
    message="🚀 NEW SERVICES: Neural Interfaces, Quantum AI, Enterprise Automation - Revolutionary 2026 Solutions"
    ctaText="Explore Services"
    ctaLink="/services"
    backgroundColor="bg-gradient-to-r from-teal-600 to-cyan-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const CognitiveMeshBanner = () => (
  <PromotionalBanner
    message="🔥 NEW: Cognitive Mesh Networks - Revolutionary Enterprise AI Architecture, $6.5B Success Story"
    ctaText="Read More"
    ctaLink="/blog/ai-2025-oct-cognitive-mesh-enterprise-revolution"
    backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const IntelligentAutomationBanner = () => (
  <PromotionalBanner
    message="⚡ NEW: Intelligent Automation Platform Excellence - Transform Your Enterprise, Save 70%+ on Costs"
    ctaText="Learn More"
    ctaLink="/blog/ai-2025-oct-intelligent-automation-platform-excellence"
    backgroundColor="bg-gradient-to-r from-blue-600 to-indigo-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const CognitiveMeshCaseStudyBanner = () => (
  <PromotionalBanner
    message="💎 SUCCESS: Fortune 50 Cognitive Mesh Transformation - $6.5B Savings, 85% Latency Reduction, 99.999% Uptime"
    ctaText="View Case Study"
    ctaLink="/case-studies/ai-2025-oct-global-enterprise-cognitive-mesh-65-billion-success"
    backgroundColor="bg-gradient-to-r from-green-600 to-emerald-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={22}
  />
);

export const ManufacturingAutomationBanner = () => (
  <PromotionalBanner
    message="🏭 MANUFACTURING WIN: Fortune 100 Intelligent Automation - $3.2B Savings, 72% Faster Processes, 95% Quality Boost"
    ctaText="See Results"
    ctaLink="/case-studies/ai-2025-oct-manufacturing-intelligent-automation-platform-3-2-billion-success"
    backgroundColor="bg-gradient-to-r from-orange-600 to-red-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={22}
  />
);

export const MLPipelineOptimizationBanner = () => (
  <PromotionalBanner
    message="🚀 NEW OCT 2025: Practical ML Pipeline Optimization - 10x Faster Training, 60% Cost Reduction, Production-Ready Systems"
    ctaText="Read Article"
    ctaLink="/blog/ai-2025-oct-practical-ml-pipeline-optimization"
    backgroundColor="bg-gradient-to-r from-blue-700 to-cyan-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const MLPipelineOptimizationCaseStudyBanner = () => (
  <PromotionalBanner
    message="💎 SUCCESS STORY: Global Tech Company ML Pipeline Optimization - $14.2M Annual ROI, 12x Faster Training, 68% Cost Savings"
    ctaText="View Case Study"
    ctaLink="/case-studies/ai-2025-oct-ml-pipeline-optimization-14m-roi-success"
    backgroundColor="bg-gradient-to-r from-green-700 to-teal-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={22}
  />
);

// NEW OCTOBER 1, 2025 - ENTERPRISE INTEGRATION CONTENT
export const EnterpriseIntegrationBlogBanner = () => (
  <PromotionalBanner
    message="🔥 JUST PUBLISHED: Enterprise Integration Orchestration Revolution - 85% Faster Integration, Real-Time Data Sync, $47M ROI"
    ctaText="Read Blog Post"
    ctaLink="/blog/ai-2025-oct-01-enterprise-integration-orchestration-revolution"
    backgroundColor="bg-gradient-to-r from-purple-700 via-indigo-600 to-blue-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

export const BankIntegrationCaseStudyBanner = () => (
  <PromotionalBanner
    message="💰 BREAKTHROUGH: Fortune 500 Bank $89M ROI - 247 Systems Integrated in 6 Months, 99.97% Uptime, Zero Breaches"
    ctaText="View Success Story"
    ctaLink="/case-studies/ai-2025-oct-01-fortune-500-bank-integration-transformation-89m-success"
    backgroundColor="bg-gradient-to-r from-emerald-700 via-green-600 to-teal-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={22}
  />
);

export const IntegrationPlatformServiceBanner = () => (
  <PromotionalBanner
    message="⚡ NEW SERVICE: AI-Powered Integration Orchestration Platform - Connect 500+ Systems, Real-Time Sync, Enterprise-Grade Security"
    ctaText="Explore Platform"
    ctaLink="/services/ai-integration-orchestration-platform-2025"
    backgroundColor="bg-gradient-to-r from-orange-600 via-red-600 to-pink-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);

// New 2026 Content Banners
export const NeuralQuantumConsciousnessBanner = () => (
  <PromotionalBanner
    message="🧠 BREAKTHROUGH: Neural Quantum Consciousness Fusion - Infinite Cognitive Capacity, True AI Consciousness Achieved"
    ctaText="Discover the Future"
    ctaLink="/blog/ai-2026-neural-quantum-consciousness-fusion-breakthrough"
    backgroundColor="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700"
    textColor="text-white"
    autoHide={true}
    hideAfter={25}
  />
);

export const AutonomousEnterpriseTranscendenceBanner = () => (
  <PromotionalBanner
    message="🚀 REVOLUTION: Autonomous Enterprise Transcendence - 100% Autonomy, Infinite Efficiency, Beyond Human Management"
    ctaText="Learn More"
    ctaLink="/blog/ai-2026-autonomous-enterprise-transcendence-revolution"
    backgroundColor="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={25}
  />
);

export const QuantumNeuralSuperintelligenceBanner = () => (
  <PromotionalBanner
    message="⚡ ULTIMATE BREAKTHROUGH: Quantum Neural Superintelligence - Infinite Computation, Transcendent Reasoning Beyond Human Limits"
    ctaText="Explore Now"
    ctaLink="/blog/ai-2026-quantum-neural-superintelligence-breakthrough"
    backgroundColor="bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={25}
  />
);

export const Revolutionary2026ContentBanner = () => (
  <PromotionalBanner
    message="🌟 2026 REVOLUTION: Three Groundbreaking AI Breakthroughs - Consciousness Fusion, Enterprise Transcendence, Quantum Superintelligence"
    ctaText="See All Breakthroughs"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={30}
  />
);

// New October 1, 2025 Edge Computing Blog Promo
export const IntelligentEdgeComputingBanner = () => (
  <PromotionalBanner
    message="⚡ New: Intelligent Edge Computing (2025) — <5ms latency, 99.99% uptime, 90% cost reduction"
    ctaText="Read the guide"
    ctaLink="/blog/ai-2025-oct-01-intelligent-edge-computing-revolution"
    backgroundColor="bg-gradient-to-r from-cyan-600 to-blue-600"
    textColor="text-white"
    autoHide={true}
    hideAfter={20}
  />
);