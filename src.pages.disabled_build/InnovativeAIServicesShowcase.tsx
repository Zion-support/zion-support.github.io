import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  Zap, Sparkles, TrendingUp, Route, Users, PenTool,
  CheckCircle, ArrowRight, ExternalLink, Phone, Mail,
  BarChart3, Shield, Briefcase, Package, Target
} from "lucide-react";
import SEO from "@/components/SEO";
export default function InnovativeAIServicesShowcase(...args: unknown[]): unknown {
  const services = [
    {
      id: "ai-project-manager",
      title: "AI Project Manager",
      description: "Transform your project management with AI-driven insights, automated planning, and intelligent resource optimization.",
      icon: Zap,
      color: "from-blue-600 to-indigo-700",
      features: [
        "AI-powered project planning and scheduling",
        "Automated resource allocation and team management",
        "Real-time progress tracking with predictive analytics",
        "Intelligent risk assessment and mitigation"
      ],
      benefits: ["70% faster project planning", "40% higher success rate", "3x ROI within 6 months"],
      pricing: { starter: "$99/mo", professional: "$299/mo", enterprise: "$799/mo" },
      route: "/services/ai-project-manager"
    },
    {
      id: "ai-content-marketing-suite",
      title: "AI Content Marketing Suite",
      description: "Transform your content marketing with AI that writes, optimizes, and distributes content across all channels.",
      icon: PenTool,
      color: "from-purple-600 to-indigo-700",
      features: [
        "AI-powered content generation for blogs, social media, and emails",
        "Multi-language content creation and localization",
        "SEO optimization with keyword research and content planning",
        "Content performance analytics and A/B testing"
      ],
      benefits: ["10x more content output", "60% better SEO rankings", "70% cost reduction"],
      pricing: { starter: "$79/mo", professional: "$199/mo", enterprise: "$499/mo" },
      route: "/services/ai-content-marketing-suite"
    },
    {
      id: "ai-financial-analytics",
      title: "AI Financial Analytics Platform",
      description: "Transform your financial decision-making with AI-driven insights, predictive analytics, and automated portfolio optimization.",
      icon: TrendingUp,
      color: "from-green-600 to-emerald-700",
      features: [
        "AI-powered financial forecasting and trend analysis",
        "Real-time market data integration and analysis",
        "Automated financial reporting and compliance",
        "Risk assessment and portfolio optimization"
      ],
      benefits: ["25-40% better investment returns", "80% faster analysis time", "85% market prediction accuracy"],
      pricing: { starter: "$199/mo", professional: "$499/mo", enterprise: "$1,299/mo" },
      route: "/services/ai-financial-analytics"
    },
    {
      id: "ai-hr-talent-platform",
      title: "AI HR & Talent Platform",
      description: "Transform your HR operations with AI-driven insights, automated workflows, and intelligent talent management.",
      icon: Users,
      color: "from-orange-600 to-red-700",
      features: [
        "AI-powered candidate screening and matching",
        "Automated resume parsing and skill assessment",
        "Intelligent interview scheduling and feedback",
        "Employee performance analytics and insights"
      ],
      benefits: ["60% faster time-to-hire", "40% better candidate quality", "30% reduced hiring costs"],
      pricing: { starter: "$149/mo", professional: "$399/mo", enterprise: "$999/mo" },
      route: "/services/ai-hr-talent-platform"
    },
    {
      id: "ai-supply-chain-optimization",
      title: "AI Supply Chain Optimization",
      description: "Transform your supply chain with AI-driven insights, predictive analytics, and automated optimization.",
      icon: Route,
      color: "from-teal-600 to-cyan-700",
      features: [
        "AI-powered demand forecasting and inventory optimization",
        "Real-time supply chain visibility and tracking",
        "Automated route optimization and logistics planning",;
        "Supplier performance analytics and risk assessment";
      ],;
      benefits: ["20-30% reduced inventory costs", "25% improved delivery times", "40% fewer disruptions"],;
      pricing: { starter: "$299/mo", professional: "$799/mo", enterprise: "$1,999/mo" },;
      route: "/services/ai-supply-chain-optimization";
    };