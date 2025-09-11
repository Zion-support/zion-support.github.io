import React from 'react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, CheckCircle, Brain, Zap, Shield, Cloud, Users, Star, TrendingUp, BarChart3, MessageCircle, Settings } from 'lucide-react';
const ComprehensiveServicesOverviewPage: NextPage = () => {;
  const serviceCategories = [;
    {;
      title: "AI & Machine Learning Services",
      description: "Cutting-edge AI solutions to automate and optimize your business processes",
      icon: <Brain className="w-8 h-8" />,
      services: [;
        {;
          name: "AI Customer Sentiment Analyzer Pro",
          description: "Monitor customer feedback across all channels in real-time with AI-powered sentiment analysis",
          price: "From $199/month",
          link: "/services/ai-customer-sentiment-analyzer",
          features: ["Real-time monitoring", "Multi-channel integration", "Predictive insights"];
},
        {;
          name: "AI SEO Content Optimizer",
          description: "Advanced AI-powered SEO optimization platform with real-time suggestions and competitive analysis",
          price: "From $79/month",
          link: "/services/ai-seo-content-optimizer",
          features: ["Real-time SEO scoring", "Keyword research", "Content optimization"];
},
        {;
          name: "AI Customer Support Automation",
          description: "Comprehensive AI-powered customer support platform with intelligent chatbots and automated resolution",
          price: "From $299/month",
          link: "/services/ai-customer-support-automation",
          features: ["Intelligent chatbots", "Automated routing", "Multi-language support"];
}
      ];
},
    {;
      title: "Micro SaaS Solutions",
      description: "Powerful, affordable SaaS applications designed to solve specific business challenges",
      icon: <Zap className="w-8 h-8" />,
      services: [;
        {;
          name: "AI Automated Email Follow-up System",
          description: "Intelligent email automation platform with personalized sequences and optimal timing predictions",
          price: "From $49/month",
          link: "/services/ai-automated-email-followup",
          features: ["Behavior-triggered sequences", "AI personalization", "A/B testing"];
},
        {;
          name: "AI Affiliate Marketing Tracker",
          description: "Advanced affiliate marketing platform with AI-powered fraud detection and performance optimization",
          price: "From $99/month",
          link: "/services/ai-affiliate-marketing-tracker",
          features: ["Real-time tracking", "Fraud detection", "Automated payments"];
},
        {;
          name: "AI Project Management Assistant",
          description: "Intelligent project management platform with AI-powered task prioritization and resource allocation",
          price: "From $29/month",
          link: "/services/ai-project-management-assistant",
          features: ["Task prioritization", "Resource allocation", "Risk prediction"];
}
      ];
},
    {;
      title: "IT Services & Infrastructure",
      description: "Enterprise-grade IT solutions to modernize and secure your infrastructure",
      icon: <Shield className="w-8 h-8" />,
      services: [;
        {;
          name: "Cloud Cost Optimization Suite",
          description: "Comprehensive cloud cost management platform with AI-powered optimization across AWS, Azure, and GCP",
          price: "From $500/month",
          link: "/services/cloud-cost-optimization-suite",
          features: ["Multi-cloud optimization", "AI-powered analysis", "Cost forecasting"];
},
        {;
          name: "Zero Trust Security Platform",
          description: "Comprehensive zero trust security solution with identity verification and network segmentation",
          price: "From $2,000/month",
          link: "/services/zero-trust-security-platform",
          features: ["Identity management", "Network segmentation", "Continuous monitoring"];
},
        {;
          name: "AI DevOps Automation Platform",
          description: "Intelligent DevOps platform that automates CI/CD pipelines and infrastructure provisioning",
          price: "From $1,000/month",
          link: "/services/ai-devops-automation-platform",
          features: ["CI/CD automation", "Infrastructure provisioning", "Performance monitoring"];
}
      ];
}
  ];
  const benefits = [;
    {;
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Proven Results",
      description: "Our clients see average improvements of 40-60% in key performance metrics";
},
    {;
      icon: <Users className="w-8 h-8" />,
      title: "Expert Team",
      description: "AI specialists, cloud architects, and security experts with decades of experience";
},
    {;
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise Security",
      description: "Bank-level security with SOC 2 compliance and industry-standard encryption";
},
    {;
      icon: <Settings className="w-8 h-8" />,
      title: "24/7 Support",
      description: "Round-the-clock support and monitoring to ensure your systems run smoothly";
}
  ];
  const stats = [;
    { number: "500+", label: "Happy Clients" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "40%", label: "Average Cost Reduction" },