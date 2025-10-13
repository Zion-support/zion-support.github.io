import React from 'react';
import { Helmet } from 'react-helmet-async';

import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Star } from 'lucide-react';
import { Shield } from 'lucide-react';
import { Database } from 'lucide-react';
import { Zap } from 'lucide-react';
import { Settings } from 'lucide-react';
import { Network } from 'lucide-react';
import { Code } from 'lucide-react';
import { Monitor } from 'lucide-react';
import { Target } from 'lucide-react';
import { BarChart3 } from 'lucide-react';
import { Headphones } from 'lucide-react';
import { Smartphone } from 'lucide-react';
import { Cloud } from 'lucide-react';

export default function ITServices() {
  const itServices = [
    {,
    id: "cloud-infrastructure",
        name: "Cloud Infrastructure & Migration",
        description: "Complete cloud transformation services including AWS, Azure, and Google Cloud Platform migration and optimization",
        price: "From $2,500/month",
        icon: <Cloud className="w-8 h-8" />,
        color: "from-blue-500 to-cyan-500",
        features: [
        "Multi-cloud strategy & planning",
        "AWS/Azure/GCP migration",
        "Cloud cost optimization",
        "Disaster recovery setup",
        "Auto-scaling configuration",
        "Security & compliance",
        "24/7 monitoring & support",
        "Performance optimization"
      ],
        benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability & flexibility",
        "Enhance security & compliance",
        "Increase system reliability"
        category: "Infrastructure",
        rating: 4.9,
        reviews: 1247,
        link: "/cloud-infrastructure",
        featured: true
      featured: true;
    },
    id: "cybersecurity-suite",
        name: "Advanced Cybersecurity Suite",
        description: "Comprehensive security solutions including threat detection, vulnerability assessment, and incident response",
        price: "From $1,800/month",
        icon: <Shield className="w-8 h-8" />,
        color: "from-red-500 to-pink-500",
        "24/7 threat monitoring",
        "Vulnerability assessments",
        "Penetration testing",
        "Security awareness training",
        "Incident response planning",
        "Compliance audits (SOC2, ISO27001)",
        "Firewall & endpoint protection",
        "Data encryption & backup"
        "Protect against 99.9% of threats",
        "Reduce security incidents by 95%",
        "Ensure regulatory compliance",
        "Minimize business disruption"
        category: "Security",
        rating: 4.8,
        reviews: 892,
        link: "/cybersecurity-suite",
    id: "network-engineering",
        name: "Network Engineering & Optimization",
        description: "Enterprise network design, implementation, and optimization for maximum performance and reliability",
        price: "From $1,200/month",
        icon: <Network className="w-8 h-8" />,
        color: "from-green-500 to-emerald-500",
        "Network architecture design",
        "WAN/LAN optimization",
        "SD-WAN implementation",
        "Network security hardening",
        "Performance monitoring",
        "Bandwidth optimization",
        "VoIP & unified communications",
        "Wireless network setup"
        "Improve network performance by 60%",
        "Reduce downtime by 80%",
        "Enhance security posture",
        "Lower operational costs"
        category: "Networking",
        rating: 4.7,
        reviews: 1567,
        link: "/network-engineering",
    id: "database-management",
        name: "Database Management & Optimization",
        description: "Expert database administration, optimization, and migration services for all major database platforms",
        price: "From $1,500/month",
        icon: <Database className="w-8 h-8" />,
        color: "from-purple-500 to-pink-500",
        "Database design & architecture",
        "Performance tuning & optimization",
        "Backup & recovery strategies",
        "Database migration services",
        "High availability setup",
        "Security hardening",
        "Monitoring & alerting",
        "Capacity planning"
        "Improve query performance by 70%",
        "Ensure 99.99% uptime",
        "Reduce storage costs by 30%",
        "Enhance data security"
        category: "Database",
        reviews: 1123,
        link: "/database-management",
        featured: false
      featured: false;
    id: "devops-automation",
        name: "DevOps & Automation Services",
        description: "Complete DevOps transformation with CI/CD pipelines, infrastructure as code, and automated deployments",
        price: "From $2,000/month",
        icon: <Code className="w-8 h-8" />,
        color: "from-orange-500 to-red-500",
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration (Kubernetes)",
        "Automated testing & deployment",
        "Monitoring & logging solutions",
        "Configuration management",
        "Release management",
        "Deploy 10x faster",
        "Reduce deployment errors by 90%",
        "Improve team productivity",
        "Scale infrastructure efficiently"
        category: "DevOps",
        reviews: 1345,
        link: "/devops-automation",
    id: "helpdesk-support",
        name: "24/7 IT Helpdesk & Support",
        description: "Comprehensive IT support services with rapid response times and expert technical assistance",
        price: "From $800/month",
        icon: <Headphones className="w-8 h-8" />,
        color: "from-indigo-500 to-blue-500",
        "24/7 technical support",
        "Remote desktop assistance",
        "Hardware & software support",
        "User training & onboarding",
        "Incident management",
        "Knowledge base maintenance",
        "SLA compliance monitoring",
        "Proactive maintenance"
        "Reduce downtime by 75%",
        "Improve user satisfaction",
        "Lower support costs",
        "Increase productivity"
        category: "Support",
        reviews: 2156,
        link: "/helpdesk-support",
    id: "mobile-app-development",
        name: "Mobile App Development",
        description: "Native and cross-platform mobile application development for iOS and Android platforms",
        price: "From $3,500/month",
        icon: <Smartphone className="w-8 h-8" />,
        color: "from-teal-500 to-cyan-500",
        "Native iOS & Android apps",
        "Cross-platform development (React Native, Flutter)",
        "UI/UX design & optimization",
        "App store deployment",
        "Performance optimization",
        "Security implementation",
        "Backend integration",
        "Maintenance & updates"
        "Reach mobile users effectively",
        "Improve customer engagement",
        "Increase revenue opportunities",
        "Stay competitive in market"
        category: "Development",
        reviews: 987,
        link: "/mobile-app-development",
    id: "web-development",
        name: "Web Development & E-commerce",
        description: "Custom web applications, e-commerce solutions, and digital platforms for modern businesses",
        price: "From $2,200/month",
        icon: <Monitor className="w-8 h-8" />,
        color: "from-violet-500 to-purple-500",
        "Custom web applications",
        "E-commerce platform development",
        "Content management systems",
        "API development & integration",
        "Responsive design",
        "SEO optimization",
        "Security implementation"
        "Increase online presence",
        "Boost conversion rates",
        "Improve user experience",
        "Scale with business growth"
        reviews: 1456,
        link: "/web-development",
    id: "data-analytics",
        name: "Data Analytics & Business Intelligence",
        description: "Advanced data analytics solutions with real-time insights and predictive modeling capabilities",
        icon: <BarChart3 className="w-8 h-8" />,
        color: "from-rose-500 to-pink-500",
        "Data warehouse design",
        "ETL/ELT pipeline development",
        "Real-time analytics dashboards",
        "Predictive modeling & ML",
        "Data visualization",
        "Report automation",
        "Data governance",
        "Performance monitoring"
        "Make data-driven decisions",
        "Identify business opportunities",
        "Improve operational efficiency",
        "Increase competitive advantage"
        category: "Analytics",
        reviews: 1234,
        link: "/data-analytics",
    id: "it-consulting",
        name: "IT Strategy & Consulting",
        description: "Strategic IT consulting services to align technology with business objectives and drive digital transformation",
        icon: <Target className="w-8 h-8" />,
        color: "from-amber-500 to-orange-500",
        "IT strategy development",
        "Digital transformation planning",
        "Technology assessment",
        "Vendor evaluation & selection",
        "Project management",
        "Change management",
        "ROI analysis",
        "Risk assessment"
        "Align IT with business goals",
        "Optimize technology investments",
        "Reduce implementation risks",
        "Accelerate digital transformation"
        category: "Consulting",
        reviews: 876,
        link: "/it-consulting",
    id: "backup-disaster-recovery",
        name: "Backup & Disaster Recovery",
        description: "Comprehensive backup solutions and disaster recovery planning to ensure business continuity",
        price: "From $1,000/month",
        icon: <HardDrive className="w-8 h-8" />,
        color: "from-emerald-500 to-green-500",
        "Automated backup solutions",
        "Disaster recovery planning",
        "Business continuity testing",
        "Data replication services",
        "Recovery time optimization",
        "Compliance reporting",
        "24/7 monitoring",
        "Emergency response"
        "Minimize data loss risks",
        "Ensure business continuity",
        "Meet compliance requirements",
        "Reduce recovery time"
        category: "Backup",
        reviews: 654,
        link: "/backup-disaster-recovery",
    id: "managed-it-services",
        name: "Managed IT Services",
        description: "Complete IT management services including monitoring, maintenance, and proactive support",
        icon: <Settings className="w-8 h-8" />,
        color: "from-sky-500 to-blue-500",
        "Proactive monitoring & maintenance",
        "Patch management",
        "Security updates",
        "Asset management",
        "License management",
        "Compliance monitoring",
        "Regular reporting"
        "Reduce IT management overhead",
        "Improve system reliability",
        "Lower operational costs",
        "Focus on core business"
        category: "Managed Services",
        reviews: 1789,
        link: "/managed-it-services",
    }

  const processSteps = [
    step: "01",
        title: "Discovery & Assessment",
        description: "We analyze your current IT infrastructure, identify pain points, and understand your business objectives.",
        icon: <Target className="w-8 h-8" />
    step: "02",
        title: "Strategy & Planning",
        description: "Develop a comprehensive IT strategy aligned with your business goals and create a detailed implementation plan.",
        icon: <Settings className="w-8 h-8" />
    step: "03",
        title: "Implementation",
        description: "Execute the plan with minimal disruption to your business operations, ensuring smooth transitions.",
        icon: <Zap className="w-8 h-8" />
    step: "04",
        title: "Monitoring & Support",
        description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance and security.",
        icon: <Monitor className="w-8 h-8" />


export default function itServices() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>It Services - Zion Tech Group</title>
        <meta name="description" content="It Services solutions by Zion Tech Group" />
      </Helmet>

      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">It Services</h1>
          <p className="text-xl text-gray-300 mb-8">
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <meta name="description" content="Advanced it services solutions by Zion Tech Group" />

      <div className="container mx-auto px-4 py-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            It Services
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            This page is under development. Please check back later.

    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">It Services</h1>
            Advanced AI and IT solutions for your business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 1</h3>
            <p className="text-gray-600">
              Comprehensive solution for your business requirements.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 2</h3>
              Advanced technology integration and optimization.

            <h3 className="text-xl font-semibold text-gray-900 mb-4">Feature 3</h3>
              Scalable and secure implementation.

        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started
          </button>
  );
import React from "react";

  ];
