<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======

import Head from 'next/head';
import Link from 'next/link';
import { 
  Cloud,
  Shield,
  Database,
  Smartphone,
  Globe,
  Code,
  Server,
  BarChart3,
  Link as LinkIcon,
  Cpu,
  TestTube,
  BookOpen,
  Wrench,
  Brain
} from 'lucide-react';

export default function ITServices() {
  const contact = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    site: 'https://ziontechgroup.com'
  }
  const itServices = [
    {
      icon: Cloud,
      name: 'Cloud DevOps & SRE',
      description: 'Complete cloud infrastructure management with CI/CD pipelines, infrastructure as code, and site reliability engineering.',
      features: [
        'CI/CD pipeline setup and optimization',
        'Infrastructure as Code (Terraform, Pulumi)',
        'Container orchestration (Kubernetes, Docker)',
        'Monitoring, logging, and alerting systems',
        'Auto-scaling and load balancing',
        'Disaster recovery and backup strategies'
      ],
      pricing: '$120 – $220/hour',
      projectPricing: '$6,000 – $30,000/project',
      timeline: '2–8 weeks',
      benefits: [
        '99.9% uptime guarantee',
        'Automated deployment processes',
        'Reduced infrastructure costs',
        'Improved system reliability'
      ],
      category: 'Cloud & Infrastructure'
    },
    {
      icon: Shield,
      name: 'Cybersecurity Hardening & SOC',
      description: 'Comprehensive security solutions including zero trust architecture, endpoint detection, and security operations center setup.',
      features: [
        'Zero Trust security architecture',
        'Endpoint Detection and Response (EDR)',
        'Security Operations Center (SOC) setup',
        'Vulnerability assessment and penetration testing',
        'Compliance and regulatory adherence',
        'Security awareness training programs'
      ],
      pricing: '$5,000 – $40,000/project',
      projectPricing: '$2,000 – $8,000/month managed',
      timeline: '4–12 weeks',
      benefits: [
        'Enhanced security posture',
        'Reduced security incidents',
        'Compliance with regulations',
        '24/7 security monitoring'
      ],
      category: 'Security'
    },
    {
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud migration and infrastructure setup with AWS, Azure, and Google Cloud Platform expertise.",
      icon: Cloud,
      features: [
        "Multi-cloud architecture design",
        "Serverless computing setup",
        "Container orchestration (Kubernetes)",
        "Auto-scaling configuration",
        "Cost optimization strategies",
        "Disaster recovery planning",
        "Cloud security implementation",
        "24/7 monitoring & support"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability by 300%",
        "Enhance security posture",
        "Increase system reliability to 99.9%"
      ],
      price: "$2,500 - $8,000/month",
      marketPrice: "$4,000 - $12,000/month",
      category: "Cloud Computing",
      popular: true,
      setupTime: "2-4 weeks"
    },
    {
      name: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions including zero-trust architecture, threat detection, and compliance management.",
      icon: Shield,
      features: [
        "Security assessment & auditing",
        "Penetration testing",
        "Zero-trust architecture implementation",
        "Threat detection & response",
        "Identity & access management",
        "Compliance management (SOC 2, ISO 27001)",
        "Security training & awareness",
        "Incident response planning"
      ],
      benefits: [
        "Reduce security incidents by 90%",
        "Achieve compliance certification",
        "Protect against advanced threats",
        "Improve security posture by 200%"
      ],
      price: "$3,000 - $10,000/month",
      marketPrice: "$5,000 - $15,000/month",
      category: "Security",
      popular: true,
      setupTime: "3-6 weeks"
    },
    {
      name: "Network Infrastructure & Management",
      description: "Enterprise-grade network design, implementation, and management with advanced monitoring and optimization.",
      icon: Network,
      features: [
        "Network design & architecture",
        "Wireless network deployment",
        "Network security implementation",
        "Performance monitoring & optimization",
        "Load balancing configuration",
        "VPN setup & management",
        "Network automation",
        "24/7 network monitoring"
      ],
      benefits: [
        "Improve network performance by 150%",
        "Reduce downtime by 95%",
        "Enhance security posture",
        "Optimize network costs by 30%"
      ],
      price: "$1,800 - $6,000/month",
      marketPrice: "$3,000 - $9,000/month",
      category: "Networking",
      popular: true,
      setupTime: "2-3 weeks"
    },
    {
      name: "Database Solutions & Management",
      description: "Advanced database design, optimization, and management with real-time monitoring and backup solutions.",
      icon: Database,
      features: [
        "Database design & architecture",
        "Performance tuning & optimization",
        "Data migration services",
        "Backup & disaster recovery",
        "Real-time monitoring",
        "Security implementation",
        "Scalability planning",
        "Database automation"
      ],
      benefits: [
        "Improve database performance by 200%",
        "Reduce data loss risk by 99%",
        "Optimize query performance",
        "Ensure data integrity & security"
      ],
      price: "$2,200 - $7,500/month",
      marketPrice: "$4,000 - $11,000/month",
      category: "Database",
      popular: true,
      setupTime: "2-4 weeks"
    },
    {
      name: "DevOps & Automation",
      description: "Complete DevOps implementation with CI/CD pipelines, infrastructure as code, and automated deployment strategies.",
      icon: GitBranch,
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Automated testing & deployment",
        "Monitoring & logging",
        "Configuration management",
        "Release management",
        "Performance optimization"
      ],
      benefits: [
        "Reduce deployment time by 80%",
        "Improve code quality by 150%",
        "Increase deployment frequency by 500%",
        "Reduce manual errors by 95%"
      ],
      price: "$2,800 - $9,000/month",
      marketPrice: "$4,500 - $13,000/month",
      category: "DevOps",
      popular: true,
      setupTime: "3-5 weeks"
    },
    {
      name: "IT Support & Help Desk",
      description: "Comprehensive IT support services with 24/7 monitoring, remote assistance, and proactive maintenance.",
      icon: Headphones,
      features: [
        "24/7 technical support",
        "Remote desktop assistance",
        "Proactive system monitoring",
        "Hardware & software maintenance",
        "User training & onboarding",
        "Incident management",
        "Change management",
        "Performance optimization"
      ],
      benefits: [
        "Reduce IT downtime by 90%",
        "Improve user satisfaction by 200%",
        "Lower IT support costs by 50%",
        "Proactive issue resolution"
      ],
      price: "$1,500 - $5,000/month",
      marketPrice: "$2,500 - $7,500/month",
      category: "Support",
      popular: true,
      setupTime: "1-2 weeks"
    },
    {
      name: "System Integration & APIs",
      description: "Seamless integration of disparate systems with custom APIs, middleware, and data synchronization solutions.",
      icon: Layers,
      features: [
        "Custom API development",
        "System integration planning",
        "Data synchronization",
        "Middleware implementation",
        "Legacy system modernization",
        "Real-time data processing",
        "Error handling & monitoring",
        "Documentation & testing"
      ],
      benefits: [
        "Improve system efficiency by 180%",
        "Reduce manual data entry by 95%",
        "Enhance data accuracy by 99%",
        "Streamline business processes"
      ],
      price: "$2,000 - $8,000/month",
      marketPrice: "$3,500 - $12,000/month",
      category: "Integration",
      popular: true,
      setupTime: "3-6 weeks"
    },
    {
      name: "Data Analytics & Business Intelligence",
      description: "Advanced data analytics platform with real-time dashboards, predictive analytics, and business intelligence solutions.",
      icon: BarChart3,
      features: [
        "Data warehouse design",
        "ETL/ELT processes",
        "Real-time dashboards",
        "Predictive analytics",
        "Machine learning integration",
        "Data visualization",
        "Report automation",
        "Data governance"
      ],
      benefits: [
        "Make data-driven decisions",
        "Identify trends 5x faster",
        "Improve business performance by 40%",
        "Reduce reporting time by 85%"
      ],
      price: "$3,500 - $12,000/month",
      marketPrice: "$6,000 - $18,000/month",
      category: "Analytics",
      popular: true,
      setupTime: "4-8 weeks"
    },
    {
      name: "Mobile & Web Development",
      description: "Full-stack development services for web applications, mobile apps, and progressive web applications with modern technologies.",
      icon: Smartphone,
      features: [
        "Web application development",
        "Mobile app development (iOS/Android)",
        "Progressive Web Apps (PWA)",
        "API development & integration",
        "UI/UX design",
        "Performance optimization",
        "Security implementation",
        "Testing & quality assurance"
      ],
      benefits: [
        "Modern, responsive applications",
        "Cross-platform compatibility",
        "Enhanced user experience",
        "Scalable architecture"
      ],
      price: "$4,000 - $15,000/month",
      marketPrice: "$7,000 - $25,000/month",
      category: "Development",
      popular: true,
      setupTime: "6-12 weeks"
    },
    {
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting services including technology roadmaps, digital transformation, and IT governance.",
      icon: Users,
      features: [
        "Technology roadmap planning",
        "Digital transformation strategy",
        "IT governance & compliance",
        "Technology assessment",
        "Vendor management",
        "Cost optimization",
        "Risk assessment",
        "Change management"
      ],
      benefits: [
        "Align IT with business goals",
        "Reduce technology costs by 30%",
        "Improve IT efficiency by 150%",
        "Strategic technology planning"
      ],
      price: "$2,000 - $8,000/month",
      marketPrice: "$3,500 - $12,000/month",
      category: "Consulting",
      popular: true,
      setupTime: "2-4 weeks"
    },
    {
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to ensure business continuity and data protection.",
      icon: HardDrive,
      features: [
        "Automated backup systems",
        "Disaster recovery planning",
        "Data replication",
        "Recovery testing",
        "Compliance reporting",
        "Cloud backup solutions",
        "Offsite storage management",
        "Recovery time optimization"
      ],
      benefits: [
        "Protect against data loss",
        "Minimize downtime during disasters",
        "Ensure business continuity",
        "Comply with regulations"
      ],
      price: "$1,200 - $4,500/month",
      marketPrice: "$2,000 - $6,500/month",
      category: "Data Protection",
      popular: true,
      setupTime: "1-3 weeks"
    },
    {
      name: "IT Security Monitoring",
      description: "24/7 security monitoring and threat detection with advanced SIEM solutions and incident response capabilities.",
      icon: Eye,
      features: [
        "24/7 security monitoring",
        "Threat detection & analysis",
        "SIEM implementation",
        "Incident response",
        "Vulnerability scanning",
        "Security reporting",
        "Compliance monitoring",
        "Threat intelligence"
      ],
      benefits: [
        "Detect threats in real-time",
        "Reduce security incidents by 85%",
        "Improve response time by 90%",
        "Maintain compliance standards"
      ],
      price: "$2,500 - $7,500/month",
      marketPrice: "$4,000 - $11,000/month",
      category: "Security Monitoring",
      popular: true,
      setupTime: "2-4 weeks"
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const it-services: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>it-services | Zion Tech Group</title>
        <meta name="description" content="it-services - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">it-services</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default it-services;