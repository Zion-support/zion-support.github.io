<<<<<<< HEAD
import React from 'react';
import { Helmet } from 'react-helmet-async';
=======
import React, { useState } from 'react';

import Link from 'next/link';
import {
  CheckCircle,
  TrendingUp,
  Users,
  DollarSign,
  Clock,
  Target,
  ArrowRight,
  Star,
  Award,
  Zap,
  Shield,
  Cloud,
  Brain,
  Globe
} from 'lucide-react';

const caseStudies = [
  {
    id: 1,
    title: "AI-Powered Customer Service Transformation",
    company: "TechCorp Solutions",
    industry: "Technology",
    challenge: "High customer service costs and long response times",
    solution: "Implemented AI chatbot with natural language processing",
    results: [
      "40% reduction in customer service costs",
      "85% faster response times",
      "95% customer satisfaction rate",
      "24/7 automated support"
    ],
    metrics: {
      costReduction: "40%",
      responseTime: "85% faster",
      satisfaction: "95%",
      availability: "24/7"
    },
    technologies: ["AI/ML", "NLP", "Cloud Computing", "API Integration"],
    duration: "6 months",
    roi: "300%",
    image: "/images/case-study-1.jpg"
  },
  {
    id: 2,
    title: "Cloud Migration & DevOps Automation",
    company: "InnovateLab Inc",
    industry: "Healthcare",
    challenge: "Legacy infrastructure causing downtime and security risks",
    solution: "Complete cloud migration with CI/CD pipeline implementation",
    results: [
      "99.9% uptime achieved",
      "60% reduction in deployment time",
      "Enhanced security compliance",
      "Scalable infrastructure"
    ],
    metrics: {
      uptime: "99.9%",
      deploymentTime: "60% faster",
      securityScore: "A+",
      scalability: "10x"
    },
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins", "Terraform"],
    duration: "8 months",
    roi: "250%",
    image: "/images/case-study-2.jpg"
  },
  {
    id: 3,
    title: "Data Analytics & Business Intelligence Platform",
    company: "DataFlow Analytics",
    industry: "Finance",
    challenge: "Scattered data sources and lack of real-time insights",
    solution: "Centralized data warehouse with real-time analytics dashboard",
    results: [
      "Real-time data insights",
      "30% improvement in decision making",
      "Automated reporting system",
      "Predictive analytics capabilities"
    ],
    metrics: {
      dataProcessing: "Real-time",
      decisionMaking: "30% better",
      reporting: "Automated",
      predictions: "90% accuracy"
    },
    technologies: ["Big Data", "Apache Spark", "Tableau", "Python", "SQL"],
    duration: "10 months",
    roi: "400%",
    image: "/images/case-study-3.jpg"
  },
  {
    id: 4,
    title: "Cybersecurity & Compliance Implementation",
    company: "SecureBank Ltd",
    industry: "Banking",
    challenge: "Increasing cyber threats and regulatory compliance requirements",
    solution: "Comprehensive security framework with SOC2 compliance",
    results: [
      "Zero security breaches",
      "SOC2 Type II compliance achieved",
      "Advanced threat detection",
      "Employee security training"
    ],
    metrics: {
      breaches: "0",
      compliance: "SOC2 Type II",
      threatDetection: "99.9%",
      training: "100% staff"
    },
    technologies: ["SIEM", "EDR", "Firewall", "VPN", "Security Training"],
    duration: "12 months",
    roi: "200%",
    image: "/images/case-study-4.jpg"
  },
  {
    id: 5,
    title: "IoT & Edge Computing Solution",
    company: "SmartManufacturing Co",
    industry: "Manufacturing",
    challenge: "Inefficient production monitoring and quality control",
    solution: "IoT sensors with edge computing for real-time monitoring",
    results: [
      "25% increase in production efficiency",
      "90% reduction in quality issues",
      "Predictive maintenance",
      "Real-time monitoring"
    ],
    metrics: {
      efficiency: "25% increase",
      qualityIssues: "90% reduction",
      maintenance: "Predictive",
      monitoring: "Real-time"
    },
    technologies: ["IoT", "Edge Computing", "Machine Learning", "5G", "Cloud"],
    duration: "9 months",
    roi: "350%",
    image: "/images/case-study-5.jpg"
  },
  {
    id: 6,
    title: "Digital Transformation & Legacy Modernization",
    company: "LegacyCorp Enterprises",
    industry: "Retail",
    challenge: "Outdated systems limiting growth and customer experience",
    solution: "Complete digital transformation with modern tech stack",
    results: [
      "50% increase in online sales",
      "Enhanced customer experience",
      "Streamlined operations",
      "Mobile-first approach"
    ],
    metrics: {
      onlineSales: "50% increase",
      customerExperience: "Enhanced",
      operations: "Streamlined",
      mobile: "First priority"
    },
    technologies: ["React", "Node.js", "Microservices", "API Gateway", "Mobile"],
    duration: "15 months",
    roi: "500%",
    image: "/images/case-study-6.jpg"
  }
];

const industries = ['All', 'Technology', 'Healthcare', 'Finance', 'Banking', 'Manufacturing', 'Retail'];
const technologies = ['All', 'AI/ML', 'Cloud Computing', 'Cybersecurity', 'IoT', 'Data Analytics', 'DevOps'];

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('All');
  const [selectedTechnology, setSelectedTechnology] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredCaseStudies = caseStudies.filter(study => {
    const matchesIndustry = selectedIndustry === 'All' || study.industry === selectedIndustry;
    const matchesTechnology = selectedTechnology === 'All' || 
      study.technologies.some(tech => tech.toLowerCase().includes(selectedTechnology.toLowerCase()));
    const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         study.challenge.toLowerCase().includes(searchTerm.toLowerCase());
    
    return matchesIndustry && matchesTechnology && matchesSearch;
  });
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d

const case-studies.page: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 text-white">
      <Helmet>
        <title>case-studies.page | Zion Tech Group</title>
        <meta name="description" content="case-studies.page - Revolutionary technology solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-6">case-studies.page</h1>
          <p className="text-xl text-gray-300">Revolutionary technology solutions</p>
        </div>
      </div>
    </div>
  );
};

export default case-studies.page;