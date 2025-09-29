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
  backgroundColor = "bg-gradient-to-r from-blue-600 to-purple-600",
  textColor = "text-white",
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
      <div className="container mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <span className="inline-flex h-2 w-2 rounded-full bg-white animate-pulse"></span>
            <span className="font-medium text-sm md:text-base">{message}</span>
          </div>
          
          <div className="flex items-center space-x-3">
            <Link
              href={ctaLink}
              className="bg-white/20 hover:bg-white/30 px-4 py-1.5 rounded-full text-sm font-semibold transition-colors duration-200 border border-white/30"
            >
              {ctaText}
            </Link>
            
            {showClose && (
              <button
                onClick={handleClose}
                className="hover:bg-white/20 p-1 rounded-full transition-colors duration-200"
                aria-label="Close banner"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
    message="🎉 New: AI Roadmaps 2026, GenAI Guardrails Blueprints, FinOps Scorecards"
    ctaText="Read the latest"
    ctaLink="/blog"
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

export const AIBusinessTransformationBanner = () => (
  <PromotionalBanner
    message="🎯 NEW: AI Business Transformation 2025 - Complete Implementation Guide with Real-World Case Studies"
    ctaText="Read Guide"
    ctaLink="/blog/ai-business-transformation-2025"
    backgroundColor="bg-gradient-to-r from-indigo-600 to-purple-600"
    autoHide={true}
    hideAfter={18}
  />
);

export const AIWorkflowAutomationBanner = () => (
  <PromotionalBanner
    message="⚙️ BREAKING: AI Automation Workflows 2025 - Reduce Manual Work by 80% with Proven Strategies"
    ctaText="Learn More"
    ctaLink="/blog/ai-automation-workflows-2025"
    backgroundColor="bg-gradient-to-r from-emerald-600 to-teal-600"
    autoHide={true}
    hideAfter={22}
  />
);

export const EnterpriseAISecurityBanner = () => (
  <PromotionalBanner
    message="🛡️ CRITICAL: Enterprise AI Security 2025 - Comprehensive Security Framework for AI Systems"
    ctaText="Secure Your AI"
    ctaLink="/blog/enterprise-ai-security-2025"
    backgroundColor="bg-gradient-to-r from-red-600 to-orange-600"
    autoHide={true}
    hideAfter={25}
  />
);

export const NewContentShowcaseBanner = () => (
  <PromotionalBanner
    message="📚 FRESH CONTENT: New AI Guides & Security Frameworks - Business Transformation, Workflow Automation, Enterprise Security"
    ctaText="Browse All Content"
    ctaLink="/blog"
    backgroundColor="bg-gradient-to-r from-purple-600 to-pink-600"
    autoHide={true}
    hideAfter={20}
  />
);