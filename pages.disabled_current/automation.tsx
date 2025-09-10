import React from "react";
import Head from "next/head";
export default function AutomationPage() {

  const automationCategories = [
    {
      title: "Content Generation",
      description: "AI-powered content creation and management",
      icon: "📝",
      count: "2,960+ pages",
      features: ["Blog posts", "Technical docs", "Marketing copy", "SEO optimization"]
    },
    {
      title: "Infrastructure Management",
      description: "Autonomous cloud infrastructure operations",
      icon: "☁️",
      count: "99.9% uptime",
      features: ["Auto-scaling", "Self-healing", "Performance monitoring", "Security automation"]
    },
    {
      title: "CI/CD Automation",
      description: "Intelligent build and deployment systems",
      icon: "🚀",
      count: "Continuous",
      features: ["Automated testing", "Smart deployments", "Rollback systems", "Quality gates"]
    },
    {
      title: "Monitoring & Alerting",
      description: "Proactive system health management",
      icon: "🔍",
      count: "24/7 monitoring",
      features: ["Real-time alerts", "Predictive maintenance", "Performance analytics", "Incident response"]
    },
    {
      title: "Security Automation",
      description: "Intelligent threat detection and response",
      icon: "🛡️",
      count: "Real-time protection",
      features: ["Threat detection", "Vulnerability scanning", "Access control", "Compliance monitoring"]
    },
    {
      title: "Data Processing",
      description: "Automated data analysis and insights",
      icon: "📊",
      count: "Real-time processing",
      features: ["ETL pipelines", "Analytics automation", "Report generation", "Data quality checks"]