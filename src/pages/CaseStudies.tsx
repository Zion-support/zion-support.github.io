import React from 'react';
import { SEO } from '../components/SEO';
export default function CaseStudies() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <SEO title="Case Studies - Zion Tech Group" description="Customer success stories and case studies." />
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Case Studies</h1>
        <p className="text-slate-300">Content coming soon.</p>
      </div>
    </div>
  );
}

// Legacy content removed to prevent build errors
/*
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import {
  Brain,
  Cloud,
  Shield,
  Zap,
  Rocket,
  Users,
  Globe,
  CheckCircle,
  Star,
  ArrowRight,
  TrendingUp,
  Award,
  Clock,
  DollarSign,
  Target,
  Lightbulb,
  BarChart3,
  Database,
  Network,
  Server,
  Eye,
  BrainCircuit,
  GitBranch,
  RefreshCw,
  Briefcase,
  BarChart,
  ShieldCheck,
  Atom,
  BrainCircuit2
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedIndustry, setSelectedIndustry] = useState('all');

  const categories = [
    { id: 'all', name: 'All Cases', icon: Globe, count: 0 },
    { id: 'ai-ml', name: 'AI & Machine Learning', icon: Brain, count: 0 },
    { id: 'cloud', name: 'Cloud Infrastructure', icon: Cloud, count: 0 },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield, count: 0 },
    { id: 'digital-transformation', name: 'Digital Transformation', icon: Zap, count: 0 },
    { id: 'micro-saas', name: 'Micro SAAS', icon: Rocket, count: 0 }
  ];

  const industries = [
    { id: 'all', name: 'All Industries', count: 0 },
    { id: 'healthcare', name: 'Healthcare', count: 0 },
    { id: 'finance', name: 'Finance', count: 0 },
    { id: 'manufacturing', name: 'Manufacturing', count: 0 },
    { id: 'retail', name: 'Retail', count: 0 },
    { id: 'technology', name: 'Technology', count: 0 }
  ];

  const caseStudies = [
    {
      id: 'ai-consciousness-breakthrough',
      title: 'AI Consciousness Research Breakthrough',
      category: 'ai-ml',
      industry: 'technology',
      company: 'QuantumLabs Inc.',
      description: 'Revolutionary research in artificial consciousness that achieved self-aware AI systems',
      challenge: 'Developing truly self-aware AI systems that could understand and reason about their own existence',
      solution: 'Implemented advanced neural architecture with consciousness modeling frameworks and ethical AI guidelines',
      results: [
        'Achieved breakthrough in AI consciousness research',
        'Published 15 peer-reviewed papers in top journals',
        'Secured $50M in additional research funding',
        'Established industry-leading AI ethics framework'
      ],
      metrics: {
        researchOutput: '15 peer-reviewed papers',
        fundingSecured: '$50M',
        timeline: '18 months',
        teamSize: '25 researchers'
      },
      technologies: ['Advanced Neural Networks', 'Consciousness Modeling', 'Ethical AI Frameworks', 'Quantum Computing'],
      image: '/images/case-studies/ai-consciousness.jpg'
    },
    {
      id: 'quantum-financial-modeling',
      title: 'Quantum Financial Modeling Platform',
      category: 'ai-ml',
      industry: 'finance',
      company: 'Global Finance Corp',
      description: 'Next-generation financial modeling using quantum computing and AI for unprecedented accuracy',
      challenge: 'Traditional financial models couldn\'t handle market complexity and real-time risk assessment',
      solution: 'Developed hybrid quantum-classical AI system with real-time market analysis and predictive modeling',
      results: [
        '300% improvement in prediction accuracy',
        'Real-time risk assessment capabilities',
        'Reduced trading losses by 85%',
        'Increased portfolio returns by 40%'
      ],
      metrics: {
        accuracyImprovement: '300%',
        riskReduction: '85%',
        returnIncrease: '40%',
        timeline: '24 months'
      },
      technologies: ['Quantum Computing', 'Machine Learning', 'Real-time Analytics', 'Financial APIs'],
      image: '/images/case-studies/quantum-finance.jpg'
    },
    {
      id: 'autonomous-manufacturing',
      title: 'Autonomous Manufacturing Revolution',
      category: 'digital-transformation',
      industry: 'manufacturing',
      company: 'FutureTech Manufacturing',
      description: 'Complete transformation of manufacturing processes using autonomous robots and AI systems',
      challenge: 'High production costs, quality inconsistencies, and safety concerns in hazardous environments',
      solution: 'Implemented fully autonomous manufacturing with AI-powered quality control and predictive maintenance',
      results: [
        '95% reduction in production errors',
        '60% increase in production efficiency',
        '100% improvement in workplace safety',
        '40% reduction in operational costs'
      ],
      metrics: {
        errorReduction: '95%',
        efficiencyIncrease: '60%',
        safetyImprovement: '100%',
        costReduction: '40%'
      },
      technologies: ['Autonomous Robotics', 'Computer Vision', 'Predictive Analytics', 'IoT Sensors'],
      image: '/images/case-studies/autonomous-manufacturing.jpg'
    },
    {
      id: 'cyber-threat-intelligence',
      title: 'Advanced Cyber Threat Intelligence',
      category: 'cybersecurity',
      industry: 'technology',
      company: 'SecureNet Solutions',
      description: 'AI-powered threat detection and response system for enterprise cybersecurity',
      challenge: 'Increasingly sophisticated cyber threats requiring real-time detection and automated response',
      solution: 'Developed comprehensive threat intelligence platform with machine learning and behavioral analysis',
      results: [
        '99.9% threat detection accuracy',
        '90% reduction in response time',
        'Zero successful breaches in 2 years',
        'Automated response to 95% of threats'
      ],
      metrics: {
        detectionAccuracy: '99.9%',
        responseTimeReduction: '90%',
        breachPrevention: '100%',
        automationRate: '95%'
      },
      technologies: ['Machine Learning', 'Behavioral Analysis', 'Threat Intelligence', 'Automated Response'],
      image: '/images/case-studies/cyber-threat.jpg'
    },
    {
      id: 'cloud-migration-transformation',
      title: 'Enterprise Cloud Migration Success',
      category: 'cloud',
      industry: 'retail',
      company: 'MegaRetail Inc.',
      description: 'Seamless migration of legacy systems to cloud infrastructure with zero downtime',
      challenge: 'Complex legacy systems, strict compliance requirements, and need for zero downtime migration',
      solution: 'Implemented hybrid cloud strategy with automated migration tools and comprehensive testing',
      results: [
        'Zero downtime during migration',
        '50% reduction in infrastructure costs',
        '99.9% uptime achieved',
        'Improved scalability by 300%'
      ],
      metrics: {
        downtime: '0 minutes',
        costReduction: '50%',
        uptime: '99.9%',
        scalabilityImprovement: '300%'
      },
      technologies: ['Cloud Infrastructure', 'Migration Automation', 'Load Balancing', 'Monitoring Tools'],
      image: '/images/case-studies/cloud-migration.jpg'
    },
    {
      id: 'micro-saas-platform',
      title: 'Micro SAAS Platform Launch',
      category: 'micro-saas',
      industry: 'technology',
      company: 'StartupHub',
      description: 'Rapid development and launch of micro SAAS platform with automated scaling',
      challenge: 'Need for rapid MVP development, automated scaling, and cost-effective infrastructure',
      solution: 'Built micro SAAS platform using modern cloud-native technologies and automated DevOps',
      results: [
        'MVP launched in 6 weeks',
        'Automated scaling from 0 to 10K users',
        '99.9% uptime maintained',
        'Profitable within 3 months'
      ],
      metrics: {
        developmentTime: '6 weeks',
        userScaling: '0 to 10K',
        uptime: '99.9%',
        profitability: '3 months'
      },
      technologies: ['Microservices', 'Cloud-Native', 'DevOps Automation', 'Auto-scaling'],
      image: '/images/case-studies/micro-saas.jpg'
    }
  ];

  // Calculate counts for categories and industries
  React.useEffect(() => {
    const categoryCounts = categories.map(cat => ({
      ...cat,
      count: cat.id === 'all' ? caseStudies.length : caseStudies.filter(cs => cs.category === cat.id).length
    }));
    
    const industryCounts = industries.map(ind => ({
      ...ind,
      count: ind.id === 'all' ? caseStudies.length : caseStudies.filter(cs => cs.industry === ind.id).length
    }));
  }, []);

  const filteredCaseStudies = caseStudies.filter(cs => {
    const categoryMatch = selectedCategory === 'all' || cs.category === selectedCategory;
    const industryMatch = selectedIndustry === 'all' || cs.industry === selectedIndustry;
    return categoryMatch && industryMatch;
  });

  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId);
    return category?.icon || Globe;
  };

  const getIndustryColor = (industry: string) => {
    const colors = {
      healthcare: 'from-green-500 to-emerald-600',
      finance: 'from-blue-500 to-indigo-600',
      manufacturing: 'from-orange-500 to-red-600',
      retail: 'from-purple-500 to-pink-600',
      technology: 'from-cyan-500 to-blue-600',
      government: 'from-gray-500 to-slate-600'
    };
    return colors[industry as keyof typeof colors] || 'from-gray-500 to-slate-600';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center">
      <SEO title="Case Studies - Zion Tech Group" description="Customer success stories and case studies." />
      <div className="text-center text-white">
        <h1 className="text-4xl font-bold mb-2">Case Studies</h1>
        <p className="text-slate-300">Content coming soon.</p>
      </div>
    </div>
  );
}
*/
