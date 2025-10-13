import React from "react";
import SEOOptimizer from "../components/SEOOptimizer";
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
    {
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
      ],
      category: "Infrastructure",
      rating: 4.9,
      reviews: 1247,
      link: "/cloud-infrastructure",
      featured: true
    },
    {
      id: "cybersecurity-suite",
      name: "Advanced Cybersecurity Suite",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, and incident response",
      price: "From $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      features: [
        "24/7 threat monitoring",
        "Vulnerability assessments",
        "Penetration testing",
        "Security awareness training",
        "Incident response planning",
        "Compliance audits (SOC2, ISO27001)",
        "Firewall & endpoint protection",
        "Data encryption & backup"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Reduce security incidents by 95%",
        "Ensure regulatory compliance",
        "Minimize business disruption"
      ],
      category: "Security",
      rating: 4.8,
      reviews: 892,
      link: "/cybersecurity-suite",
      featured: true
    },
    {
      id: "network-engineering",
      name: "Network Engineering & Optimization",
      description: "Enterprise network design, implementation, and optimization for maximum performance and reliability",
      price: "From $1,200/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      features: [
        "Network architecture design",
        "WAN/LAN optimization",
        "SD-WAN implementation",
        "Network security hardening",
        "Performance monitoring",
        "Bandwidth optimization",
        "VoIP & unified communications",
        "Wireless network setup"
      ],
      benefits: [
        "Improve network performance by 60%",
        "Reduce downtime by 80%",
        "Enhance security posture",
        "Lower operational costs"
      ],
      category: "Networking",
      rating: 4.7,
      reviews: 1567,
      link: "/network-engineering",
      featured: true
    },
    {
      id: "database-management",
      name: "Database Management & Optimization",
      description: "Expert database administration, optimization, and migration services for all major database platforms",
      price: "From $1,500/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      features: [
        "Database design & architecture",
        "Performance tuning & optimization",
        "Backup & recovery strategies",
        "Database migration services",
        "High availability setup",
        "Security hardening",
        "Monitoring & alerting",
        "Capacity planning"
      ],
      benefits: [
        "Improve query performance by 70%",
        "Ensure 99.99% uptime",
        "Reduce storage costs by 30%",
        "Enhance data security"
      ],
      category: "Database",
      rating: 4.8,
      reviews: 1123,
      link: "/database-management",
      featured: false
    },
    {
      id: "devops-automation",
      name: "DevOps & Automation Services",
      description: "Complete DevOps transformation with CI/CD pipelines, infrastructure as code, and automated deployments",
      price: "From $2,000/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration (Kubernetes)",
        "Automated testing & deployment",
        "Monitoring & logging solutions",
        "Configuration management",
        "Release management",
        "Performance optimization"
      ],
      benefits: [
        "Deploy 10x faster",
        "Reduce deployment errors by 90%",
        "Improve team productivity",
        "Scale infrastructure efficiently"
      ],
      category: "DevOps",
      rating: 4.9,
      reviews: 1345,
      link: "/devops-automation",
      featured: false
    },
    {
      id: "helpdesk-support",
      name: "24/7 IT Helpdesk & Support",
      description: "Comprehensive IT support services with rapid response times and expert technical assistance",
      price: "From $800/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      features: [
        "24/7 technical support",
        "Remote desktop assistance",
        "Hardware & software support",
        "User training & onboarding",
        "Incident management",
        "Knowledge base maintenance",
        "SLA compliance monitoring",
        "Proactive maintenance"
      ],
      benefits: [
        "Reduce downtime by 75%",
        "Improve user satisfaction",
        "Lower support costs",
        "Increase productivity"
      ],
      category: "Support",
      rating: 4.7,
      reviews: 2156,
      link: "/helpdesk-support",
      featured: false
    },
    {
      id: "mobile-app-development",
      name: "Mobile App Development",
      description: "Native and cross-platform mobile application development for iOS and Android platforms",
      price: "From $3,500/month",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development (React Native, Flutter)",
        "UI/UX design & optimization",
        "App store deployment",
        "Performance optimization",
        "Security implementation",
        "Backend integration",
        "Maintenance & updates"
      ],
      benefits: [
        "Reach mobile users effectively",
        "Improve customer engagement",
        "Increase revenue opportunities",
        "Stay competitive in market"
      ],
      category: "Development",
      rating: 4.8,
      reviews: 987,
      link: "/mobile-app-development",
      featured: false
    },
    {
      id: "web-development",
      name: "Web Development & E-commerce",
      description: "Custom web applications, e-commerce solutions, and digital platforms for modern businesses",
      price: "From $2,200/month",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      features: [
        "Custom web applications",
        "E-commerce platform development",
        "Content management systems",
        "API development & integration",
        "Responsive design",
        "SEO optimization",
        "Performance optimization",
        "Security implementation"
      ],
      benefits: [
        "Increase online presence",
        "Boost conversion rates",
        "Improve user experience",
        "Scale with business growth"
      ],
      category: "Development",
      rating: 4.7,
      reviews: 1456,
      link: "/web-development",
      featured: false
    },
    {
      id: "data-analytics",
      name: "Data Analytics & Business Intelligence",
      description: "Advanced data analytics solutions with real-time insights and predictive modeling capabilities",
      price: "From $1,800/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      features: [
        "Data warehouse design",
        "ETL/ELT pipeline development",
        "Real-time analytics dashboards",
        "Predictive modeling & ML",
        "Data visualization",
        "Report automation",
        "Data governance",
        "Performance monitoring"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify business opportunities",
        "Improve operational efficiency",
        "Increase competitive advantage"
      ],
      category: "Analytics",
      rating: 4.8,
      reviews: 1234,
      link: "/data-analytics",
      featured: false
    },
    {
      id: "it-consulting",
      name: "IT Strategy & Consulting",
      description: "Strategic IT consulting services to align technology with business objectives and drive digital transformation",
      price: "From $1,500/month",
      icon: <Target className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      features: [
        "IT strategy development",
        "Digital transformation planning",
        "Technology assessment",
        "Vendor evaluation & selection",
        "Project management",
        "Change management",
        "ROI analysis",
        "Risk assessment"
      ],
      benefits: [
        "Align IT with business goals",
        "Optimize technology investments",
        "Reduce implementation risks",
        "Accelerate digital transformation"
      ],
      category: "Consulting",
      rating: 4.9,
      reviews: 876,
      link: "/it-consulting",
      featured: false
    },
    {
      id: "backup-disaster-recovery",
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to ensure business continuity",
      price: "From $1,000/month",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      features: [
        "Automated backup solutions",
        "Disaster recovery planning",
        "Business continuity testing",
        "Data replication services",
        "Recovery time optimization",
        "Compliance reporting",
        "24/7 monitoring",
        "Emergency response"
      ],
      benefits: [
        "Minimize data loss risks",
        "Ensure business continuity",
        "Meet compliance requirements",
        "Reduce recovery time"
      ],
      category: "Backup",
      rating: 4.7,
      reviews: 654,
      link: "/backup-disaster-recovery",
      featured: false
    },
    {
      id: "managed-it-services",
      name: "Managed IT Services",
      description: "Complete IT management services including monitoring, maintenance, and proactive support",
      price: "From $1,200/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      features: [
        "Proactive monitoring & maintenance",
        "Patch management",
        "Security updates",
        "Performance optimization",
        "Asset management",
        "License management",
        "Compliance monitoring",
        "Regular reporting"
      ],
      benefits: [
        "Reduce IT management overhead",
        "Improve system reliability",
        "Lower operational costs",
        "Focus on core business"
      ],
      category: "Managed Services",
      rating: 4.8,
      reviews: 1789,
      link: "/managed-it-services",
      featured: false
    }
  ];

  const processSteps = [
    {
      step: "01",
      title: "Discovery & Assessment",
      description: "We analyze your current IT infrastructure, identify pain points, and understand your business objectives.",
      icon: <Target className="w-8 h-8" />
    },
    {
      step: "02",
      title: "Strategy & Planning",
      description: "Develop a comprehensive IT strategy aligned with your business goals and create a detailed implementation plan.",
      icon: <Settings className="w-8 h-8" />
    },
    {
      step: "03",
      title: "Implementation",
      description: "Execute the plan with minimal disruption to your business operations, ensuring smooth transitions.",
      icon: <Zap className="w-8 h-8" />
    },
    {
      step: "04",
      title: "Monitoring & Support",
      description: "Provide ongoing monitoring, maintenance, and support to ensure optimal performance and security.",
      icon: <Monitor className="w-8 h-8" />
    }
  ];

export default function ItServicesPage() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>It Services - Zion Tech Group</title>
        <meta name="description" content="It Services solutions by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">It Services</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive it services solutions designed to meet your business needs.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Expert Solutions</h3>
              <p className="text-gray-300">
                Our team of experts delivers tailored solutions for your specific requirements.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Cutting-Edge Technology</h3>
              <p className="text-gray-300">
                We use the latest technologies and best practices to ensure optimal performance.
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Get round-the-clock support from our dedicated team of professionals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

}