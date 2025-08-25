<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
<<<<<<< HEAD
  TrendingUp, 
  Users, 
  DollarSign, 
  Clock, 
  CheckCircle, 
  Star,
  ArrowRight,
  Building,
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  Target,
  BarChart3
} from 'lucide-react';

export default function CaseStudies() {
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = [
    { id: 'all', name: 'All Industries', icon: Building },
    { id: 'healthcare', name: 'Healthcare', icon: Users },
    { id: 'finance', name: 'Financial Services', icon: DollarSign },
    { id: 'manufacturing', name: 'Manufacturing', icon: Cpu },
    { id: 'retail', name: 'Retail', icon: Target },
    { id: 'technology', name: 'Technology', icon: Brain }
  ];

  const services = [
    { id: 'all', name: 'All Services', icon: Rocket },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'quantum', name: 'Quantum Technology', icon: Cpu },
    { id: 'cybersecurity', name: 'Cybersecurity', icon: Shield },
    { id: 'cloud', name: 'Cloud & Infrastructure', icon: Zap }
  ];
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
<<<<<<< HEAD
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
>>>>>>> origin/main
import { 
  ChartBarIcon, 
  CpuChipIcon, 
  GlobeAltIcon, 
  RocketLaunchIcon,
  ShieldCheckIcon,
  LightBulbIcon,
  UsersIcon,
  CogIcon
} from '@heroicons/react/24/outline';
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
=======
>>>>>>> origin/main

  const caseStudies = [
    {
      id: 1,
<<<<<<< HEAD
<<<<<<< HEAD
      title: 'AI-Powered Healthcare Analytics Platform',
      company: 'MedTech Solutions Inc.',
      industry: 'healthcare',
      service: 'ai',
      challenge: 'Needed to process and analyze massive amounts of patient data to improve diagnosis accuracy and treatment outcomes.',
      solution: 'Implemented an AI-powered analytics platform with autonomous data processing, predictive modeling, and real-time insights.',
      results: [
        '95% improvement in diagnosis accuracy',
        '40% reduction in treatment time',
        '30% cost savings in operational efficiency',
        'Real-time patient monitoring capabilities'
      ],
      metrics: {
        roi: '450%',
        timeframe: '8 months',
        teamSize: '15 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['AI Analytics', 'Healthcare', 'Predictive Modeling', 'Real-time Processing']
    },
    {
      id: 2,
      title: 'Quantum-Secure Financial Trading System',
      company: 'Global Finance Corp.',
      industry: 'finance',
      service: 'quantum',
      challenge: 'Required ultra-secure, high-frequency trading capabilities with quantum-resistant encryption and real-time market analysis.',
      solution: 'Developed a quantum-secure trading platform with AI-powered market prediction, autonomous risk management, and quantum encryption.',
      results: [
        '99.99% system uptime achieved',
        'Zero security breaches in 2 years',
        '25% improvement in trading accuracy',
        'Quantum-resistant encryption implemented'
=======
  Building, 
  Users, 
  TrendingUp, 
  Zap, 
  Shield, 
  Globe, 
  Award, 
  ArrowRight,
  Star,
  CheckCircle,
  Clock,
  Target,
  BarChart3,
  Cpu,
  Database
} from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "Global Financial Services",
      industry: "Financial Services",
      challenge: "Complex legacy systems and compliance requirements",
      solution: "AI-powered digital transformation and SOC2 compliance automation",
      results: [
        "40% reduction in operational costs",
        "100% SOC2 compliance achievement",
        "60% faster time-to-market for new products"
      ],
      icon: Building,
      color: "from-blue-500 to-cyan-500"
    },
    {
      company: "Healthcare Technology Provider",
      industry: "Healthcare",
      challenge: "Patient data security and HIPAA compliance",
      solution: "Advanced cybersecurity suite with AI-powered threat detection",
      results: [
        "99.9% security incident prevention",
        "50% reduction in security response time",
        "Full HIPAA compliance certification"
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
      ],
      metrics: {
        roi: '320%',
        timeframe: '12 months',
        teamSize: '20 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['Quantum Security', 'Financial Trading', 'AI Prediction', 'Risk Management']
    },
    {
<<<<<<< HEAD
      id: 3,
      title: 'Autonomous Manufacturing Intelligence',
      company: 'Smart Manufacturing Ltd.',
      industry: 'manufacturing',
      service: 'ai',
      challenge: 'Faced production inefficiencies, quality control issues, and high operational costs in a complex manufacturing environment.',
      solution: 'Deployed AI autonomous systems for predictive maintenance, quality control automation, and intelligent supply chain management.',
      results: [
        '60% reduction in production downtime',
        '45% improvement in product quality',
        '35% reduction in operational costs',
        'Predictive maintenance alerts'
      ],
      metrics: {
        roi: '280%',
        timeframe: '10 months',
        teamSize: '18 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['AI Manufacturing', 'Predictive Maintenance', 'Quality Control', 'Supply Chain']
    },
    {
      id: 4,
      title: 'Cybersecurity Operations Center',
      company: 'TechSecure Enterprises',
      industry: 'technology',
      service: 'cybersecurity',
      challenge: 'Needed 24/7 threat detection and response capabilities with automated incident handling and compliance management.',
      solution: 'Built an autonomous cybersecurity operations center with AI threat detection, automated response systems, and SOC2 compliance automation.',
      results: [
        '99.9% threat detection rate',
        '90% reduction in response time',
        '100% SOC2 compliance achieved',
        '24/7 autonomous monitoring'
      ],
      metrics: {
        roi: '380%',
        timeframe: '6 months',
        teamSize: '12 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['Cybersecurity', 'SOC2 Compliance', 'AI Threat Detection', 'Automated Response']
    },
    {
      id: 5,
      title: 'Cloud Infrastructure Transformation',
      company: 'Digital Retail Solutions',
      industry: 'retail',
      service: 'cloud',
      challenge: 'Required scalable cloud infrastructure to handle seasonal traffic spikes and improve customer experience.',
      solution: 'Implemented cloud-native architecture with AI-powered auto-scaling, load balancing, and performance optimization.',
      results: [
        '99.99% availability during peak traffic',
        '50% reduction in infrastructure costs',
        '3x faster page load times',
        'Automatic scaling capabilities'
      ],
      metrics: {
        roi: '250%',
        timeframe: '9 months',
        teamSize: '16 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['Cloud Infrastructure', 'Auto-scaling', 'Performance Optimization', 'Cost Reduction']
    },
    {
      id: 6,
      title: 'AI-Powered Customer Intelligence',
      company: 'E-Commerce Innovations',
      industry: 'retail',
      service: 'ai',
      challenge: 'Needed to understand customer behavior, personalize experiences, and increase conversion rates.',
      solution: 'Developed AI customer intelligence platform with behavioral analysis, personalized recommendations, and predictive marketing.',
      results: [
        '40% increase in conversion rates',
        '35% improvement in customer retention',
        '25% reduction in marketing costs',
        'Personalized customer experiences'
      ],
      metrics: {
        roi: '310%',
        timeframe: '7 months',
        teamSize: '14 people'
      },
      image: '/api/placeholder/400/300',
      tags: ['Customer Intelligence', 'Personalization', 'Predictive Marketing', 'Behavioral Analysis']
    }
  ];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.service === selectedService;
    return industryMatch && serviceMatch;
  });
=======
      company: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Supply chain inefficiencies and quality control",
      solution: "AI-powered supply chain optimization and predictive maintenance",
      results: [
        "30% improvement in supply chain efficiency",
        "25% reduction in equipment downtime",
        "20% increase in product quality"
      ],
      icon: Cpu,
      color: "from-orange-500 to-red-500"
    },
    {
      company: "E-commerce Platform",
      industry: "Retail",
      challenge: "Customer experience and operational scalability",
      solution: "AI-powered customer analytics and autonomous operations",
      results: [
        "35% increase in customer satisfaction",
        "45% improvement in conversion rates",
        "24/7 autonomous customer support"
      ],
      icon: Globe,
      color: "from-purple-500 to-pink-500"
    },
    {
      company: "Cloud Infrastructure Provider",
      industry: "Technology",
      challenge: "Multi-cloud management and cost optimization",
      solution: "Intelligent cloud orchestration and cost management",
      results: [
        "50% reduction in cloud costs",
        "99.99% uptime achievement",
        "Automated scaling and optimization"
      ],
      icon: Database,
      color: "from-indigo-500 to-blue-500"
    },
    {
      company: "Research Institution",
      industry: "Education",
      challenge: "Research data management and collaboration",
      solution: "AI-powered research platform and collaborative tools",
      results: [
        "3x faster research completion",
        "Enhanced collaboration capabilities",
        "Automated data analysis and insights"
      ],
      icon: Users,
      color: "from-teal-500 to-cyan-500"
    }
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire IT infrastructure. Their AI solutions have given us a competitive edge we never thought possible.",
      author: "Sarah Johnson",
      title: "CTO",
      company: "Global Financial Services"
    },
    {
      quote: "The cybersecurity implementation exceeded our expectations. We've achieved unprecedented security levels while maintaining operational efficiency.",
      author: "Michael Chen",
      title: "Security Director",
      company: "Healthcare Technology Provider"
    },
    {
      quote: "Our supply chain optimization has revolutionized our manufacturing process. The AI insights are invaluable for strategic decision-making.",
      author: "David Rodriguez",
      title: "Operations Manager",
      company: "Manufacturing Corporation"
    }
  ];

  const industries = [
    "Financial Services",
    "Healthcare",
    "Manufacturing",
    "Retail & E-commerce",
    "Technology",
    "Education",
    "Government",
    "Energy",
    "Transportation",
    "Media & Entertainment"
  ];
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
=======
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, TrendingUp, Users, DollarSign, Clock, Target } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      client: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive modeling for improved care outcomes",
      solution: "Implemented AI-powered analytics platform with machine learning algorithms for patient risk assessment",
      results: [
        "30% improvement in patient outcome predictions",
        "25% reduction in readmission rates",
        "40% faster diagnosis turnaround time",
        "$2.5M annual cost savings"
      ],
      metrics: {
        roi: "450%",
        timeframe: "18 months",
        teamSize: "8 specialists"
      }
    },
    {
      id: 2,
      title: "Quantum Neural Network for Financial Risk Assessment",
      client: "Global Investment Bank",
      industry: "Financial Services",
      challenge: "Complex market risk modeling requiring quantum-level computational power",
      solution: "Deployed quantum neural network platform for real-time risk assessment and portfolio optimization",
      results: [
        "60% faster risk calculations",
        "35% improvement in prediction accuracy",
        "Real-time portfolio rebalancing",
        "$15M additional trading profits"
      ],
      metrics: {
        roi: "320%",
        timeframe: "24 months",
        teamSize: "12 quantum specialists"
      }
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      client: "Manufacturing Conglomerate",
      industry: "Manufacturing",
      challenge: "Manual business processes causing delays and inefficiencies across 15 facilities",
      solution: "Implemented autonomous business operations platform with AI-driven process automation",
      results: [
        "70% reduction in manual processing time",
        "45% improvement in operational efficiency",
        "24/7 autonomous operations",
        "$8M annual operational cost savings"
      ],
      metrics: {
        roi: "280%",
        timeframe: "12 months",
        teamSize: "15 automation experts"
      }
    },
    {
      id: 4,
      title: "SOC2 Compliance Automation Suite",
      client: "SaaS Technology Company",
      industry: "Technology",
      challenge: "Manual compliance processes taking 3+ months annually with high error rates",
      solution: "Deployed automated SOC2 compliance platform with continuous monitoring and reporting",
      results: [
        "90% reduction in compliance preparation time",
        "100% accuracy in compliance reporting",
        "Real-time compliance monitoring",
        "Zero compliance violations in 2 years"
      ],
      metrics: {
        roi: "600%",
        timeframe: "6 months",
        teamSize: "6 compliance specialists"
      }
    },
    {
      id: 5,
      title: "5G Enterprise Network Infrastructure",
      client: "Smart City Initiative",
      industry: "Government",
      challenge: "Legacy network infrastructure unable to support IoT devices and smart city applications",
      solution: "Designed and deployed enterprise-grade 5G network with edge computing capabilities",
      results: [
        "10x faster network speeds",
        "Support for 100,000+ IoT devices",
        "99.99% network uptime",
        "40% reduction in infrastructure costs"
      ],
      metrics: {
        roi: "380%",
        timeframe: "36 months",
        teamSize: "25 network engineers"
=======
import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Star, TrendingUp, Users, Globe, Shield } from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Digital Transformation for Fortune 500 Manufacturing",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Legacy systems causing 40% operational inefficiency and $2M annual losses",
      solution: "Implemented AI-autonomous business operations platform with predictive analytics",
      results: [
        "65% reduction in operational costs",
        "3x faster decision-making processes",
        "$5M annual savings achieved",
        "99.9% system uptime maintained"
      ],
      metrics: {
        roi: "450%",
        timeframe: "18 months",
        teamSize: "25+ stakeholders"
      }
    },
    {
      id: 2,
      title: "Quantum Neural Network Implementation for Financial Services",
      company: "Quantum Finance Solutions",
      industry: "Financial Services",
      challenge: "Complex risk modeling taking weeks to process, limiting trading opportunities",
      solution: "Deployed quantum neural network platform for real-time risk assessment",
      results: [
        "1000x faster risk calculations",
        "Real-time trading decisions enabled",
        "Risk prediction accuracy improved by 35%",
        "Trading volume increased by 200%"
      ],
      metrics: {
        roi: "320%",
        timeframe: "12 months",
        teamSize: "15+ developers"
      }
    },
    {
      id: 3,
      title: "AI-Autonomous Research Assistant for Pharmaceutical R&D",
      company: "BioTech Innovations Inc",
      industry: "Healthcare & Life Sciences",
      challenge: "Drug discovery process taking 5+ years with 90% failure rate",
      solution: "Integrated AI-autonomous research assistant with machine learning algorithms",
      results: [
        "Drug discovery timeline reduced by 60%",
        "Success rate improved to 25%",
        "Research costs reduced by $50M annually",
        "Patent applications increased by 300%"
      ],
      metrics: {
        roi: "280%",
        timeframe: "24 months",
        teamSize: "40+ researchers"
      }
    },
    {
      id: 4,
      title: "Cybersecurity & SOC2 Compliance Automation",
      company: "SecureTech Enterprises",
      industry: "Technology",
      challenge: "Manual compliance processes taking 6+ months annually with security gaps",
      solution: "Implemented automated SOC2 compliance platform with AI-powered security monitoring",
      results: [
        "Compliance time reduced to 2 weeks",
        "Security incidents decreased by 80%",
        "Audit preparation automated 95%",
        "Annual compliance costs reduced by 70%"
      ],
      metrics: {
        roi: "380%",
        timeframe: "9 months",
        teamSize: "20+ security professionals"
      }
    },
    {
      id: 5,
      title: "5G Enterprise Solutions for Smart City Infrastructure",
      company: "SmartCity Municipal Corp",
      industry: "Government & Infrastructure",
      challenge: "Outdated communication infrastructure limiting smart city capabilities",
      solution: "Deployed comprehensive 5G enterprise solution with IoT integration",
      results: [
        "City-wide connectivity improved by 500%",
        "Smart traffic management reduced congestion by 40%",
        "Emergency response time improved by 60%",
        "Energy efficiency increased by 35%"
      ],
      metrics: {
        roi: "520%",
        timeframe: "30 months",
        teamSize: "50+ engineers"
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
      }
    }
  ];

<<<<<<< HEAD
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
=======
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, TrendingUp, Users, Award, Clock, DollarSign, CheckCircle, Star, Zap, Shield, Globe, Target, Brain, Rocket } from 'lucide-react';
import { SEO } from '@/components/SEO';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "Global Manufacturing Company Digital Transformation",
      client: "Fortune 500 Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Legacy systems integration and real-time production monitoring",
      solution: "AI-powered IoT platform with predictive maintenance",
      results: [
        "35% reduction in downtime",
        "28% increase in production efficiency",
        "$2.3M annual cost savings",
        "99.8% system uptime achieved"
      ],
      technologies: ["AI/ML", "IoT", "Cloud Computing", "Predictive Analytics"],
      duration: "8 months",
      teamSize: "12 specialists",
      image: "/api/placeholder/600/400",
      category: "Digital Transformation",
      icon: Building2,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Healthcare Network Cybersecurity Enhancement",
      client: "Regional Healthcare Network",
      industry: "Healthcare",
      challenge: "Protecting patient data and ensuring HIPAA compliance",
      solution: "Zero-trust security architecture with AI threat detection",
      results: [
        "100% HIPAA compliance achieved",
        "Zero security breaches in 18 months",
        "45% faster threat response",
        "Risk assessment improved by 60%"
      ],
      technologies: ["Cybersecurity", "AI Threat Detection", "Zero Trust", "Compliance"],
      duration: "6 months",
      teamSize: "8 specialists",
      image: "/api/placeholder/600/400",
      category: "Cybersecurity",
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Financial Services AI Trading Platform",
      client: "Mid-Market Investment Firm",
      industry: "Financial Services",
      challenge: "Manual trading processes and market analysis inefficiencies",
      solution: "AI-powered algorithmic trading and risk management platform",
      results: [
        "40% increase in trading accuracy",
        "67% faster market analysis",
        "$5.1M increase in annual revenue",
        "Risk exposure reduced by 32%"
      ],
      technologies: ["AI/ML", "Algorithmic Trading", "Risk Management", "Real-time Analytics"],
      duration: "10 months",
      teamSize: "15 specialists",
      image: "/api/placeholder/600/400",
      category: "AI Solutions",
      icon: Brain,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "Retail Chain Inventory Optimization",
      client: "National Retail Chain",
      industry: "Retail",
      challenge: "Inventory management across 200+ locations",
      solution: "AI-driven demand forecasting and automated inventory system",
      results: [
        "25% reduction in inventory costs",
        "90% improvement in stock accuracy",
        "15% increase in customer satisfaction",
        "30% reduction in out-of-stock incidents"
      ],
      technologies: ["AI Forecasting", "Inventory Management", "Supply Chain", "Analytics"],
      duration: "7 months",
      teamSize: "10 specialists",
      image: "/api/placeholder/600/400",
      category: "Supply Chain",
      icon: Target,
      color: "from-purple-500 to-indigo-500"
    },
    {
      id: 5,
      title: "Smart City Infrastructure Platform",
      client: "Metropolitan City Government",
      industry: "Government",
      challenge: "Modernizing city infrastructure and improving citizen services",
      solution: "Integrated IoT platform for traffic, utilities, and public services",
      results: [
        "22% reduction in traffic congestion",
        "18% decrease in energy consumption",
        "95% citizen satisfaction rating",
        "40% faster emergency response"
      ],
      technologies: ["IoT", "Smart Infrastructure", "Data Analytics", "Public Services"],
      duration: "14 months",
      teamSize: "20 specialists",
      image: "/api/placeholder/600/400",
      category: "Smart Cities",
      icon: Globe,
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 6,
      title: "Startup Quantum Computing Research Platform",
      client: "Quantum Technology Startup",
      industry: "Technology",
      challenge: "Building scalable quantum computing research infrastructure",
      solution: "Hybrid quantum-classical computing platform with AI optimization",
      results: [
        "50x improvement in computation speed",
        "3 research breakthroughs achieved",
        "$15M Series A funding secured",
        "5 patent applications filed"
      ],
      technologies: ["Quantum Computing", "AI Optimization", "Research Platform", "Innovation"],
      duration: "12 months",
      teamSize: "18 specialists",
      image: "/api/placeholder/600/400",
      category: "Quantum Technology",
      icon: Rocket,
      color: "from-pink-500 to-rose-500"
    }
  ];

  const metrics = [
    { icon: Building2, value: "150+", label: "Projects Completed" },
    { icon: Users, value: "98%", label: "Client Satisfaction" },
    { icon: DollarSign, value: "$50M+", label: "Cost Savings Generated" },
    { icon: Award, value: "25+", label: "Industry Awards" }
  ];
>>>>>>> origin/cursor/website-audit-and-enhancement-53a4

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our manufacturing operations with their AI-powered solutions. The results exceeded our expectations.",
      author: "Sarah Johnson",
      position: "CTO, Global Manufacturing Corp",
      company: "Fortune 500 Company"
    },
    {
      quote: "Their cybersecurity expertise helped us achieve complete HIPAA compliance while improving our operational efficiency.",
      author: "Dr. Michael Chen",
      position: "Chief Information Officer",
      company: "Regional Healthcare Network"
    },
    {
      quote: "The AI trading platform delivered exceptional results and significantly improved our market performance.",
      author: "Robert Williams",
      position: "Head of Technology",
      company: "Investment Firm"
    }
<<<<<<< HEAD
  };
>>>>>>> origin/cursor/website-audit-and-enhancement-b812

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how we've transformed businesses across industries with our cutting-edge 
              AI, quantum technology, and autonomous systems solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 justify-center items-center">
            {/* Industry Filter */}
            <div className="flex flex-wrap gap-3">
              {industries.map((industry) => (
                <button
                  key={industry.id}
                  onClick={() => setSelectedIndustry(industry.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedIndustry === industry.id
                      ? 'border-cyan-500 bg-cyan-500/20 text-cyan-400'
                      : 'border-gray-600 text-gray-400 hover:border-cyan-500/50 hover:text-cyan-400'
                  }`}
                >
                  <industry.icon className="w-4 h-4" />
                  <span>{industry.name}</span>
                </button>
              ))}
=======
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover how organizations across industries have transformed their operations 
              with Zion Tech Group's AI-powered solutions. Real results, real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                View All Services
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            </div>

            {/* Service Filter */}
            <div className="flex flex-wrap gap-3">
              {services.map((service) => (
                <button
                  key={service.id}
                  onClick={() => setSelectedService(service.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all duration-300 ${
                    selectedService === service.id
                      ? 'border-purple-500 bg-purple-500/20 text-purple-400'
                      : 'border-gray-600 text-gray-400 hover:border-purple-500/50 hover:text-purple-400'
                  }`}
                >
                  <service.icon className="w-4 h-4" />
                  <span>{service.name}</span>
                </button>
              ))}
=======
import React from 'react';
import { 
  Building, 
  TrendingUp, 
  Users, 
  Clock, 
  ArrowRight,
  Filter,
  Search,
  Star,
  CheckCircle,
  BarChart3
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Customer Service Transformation',
      company: 'TechCorp Solutions',
      industry: 'Technology',
      challenge: 'High customer service costs and long response times',
      solution: 'Implemented AI-powered chatbots and automated ticket routing',
      results: [
        'Reduced response time by 85%',
        'Cut customer service costs by 60%',
        'Improved customer satisfaction to 94%'
      ],
      duration: '3 months',
      teamSize: '8 people',
      technologies: ['AI/ML', 'NLP', 'Automation'],
      image: '🤖',
      featured: true
    },
    {
      id: 2,
      title: 'Quantum-Safe Cybersecurity Implementation',
      company: 'GlobalBank International',
      industry: 'Financial Services',
      challenge: 'Vulnerability to quantum computing attacks',
      solution: 'Deployed quantum-resistant cryptography and security protocols',
      results: [
        'Enhanced security against future threats',
        'Compliant with new regulatory requirements',
        'Zero security breaches in 18 months'
      ],
      duration: '6 months',
      teamSize: '12 people',
      technologies: ['Quantum Cryptography', 'Security', 'Compliance'],
      image: '🔒',
      featured: false
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Migration',
      company: 'ManufacturePro Inc.',
      industry: 'Manufacturing',
      challenge: 'Outdated on-premise systems limiting scalability',
      solution: 'Migrated to hybrid cloud infrastructure with automation',
      results: [
        'Increased system performance by 300%',
        'Reduced infrastructure costs by 40%',
        'Enabled 24/7 global operations'
      ],
      duration: '8 months',
      teamSize: '15 people',
      technologies: ['Cloud Migration', 'DevOps', 'Automation'],
      image: '☁️',
      featured: false
    },
    {
      id: 4,
      title: 'AI Business Intelligence Platform',
      company: 'RetailChain Corp',
      industry: 'Retail',
      challenge: 'Poor data visibility and decision-making capabilities',
      solution: 'Built comprehensive AI-powered BI platform',
      results: [
        'Improved decision-making speed by 70%',
        'Increased revenue by 25%',
        'Enhanced inventory optimization'
      ],
      duration: '5 months',
      teamSize: '10 people',
      technologies: ['AI/ML', 'Data Analytics', 'Business Intelligence'],
      image: '📊',
      featured: false
    },
    {
      id: 5,
      title: 'Autonomous Manufacturing Systems',
      company: 'AutoTech Industries',
      industry: 'Automotive',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'Implemented AI-driven autonomous manufacturing systems',
      results: [
        'Increased production efficiency by 45%',
        'Reduced defects by 80%',
        'Lowered operational costs by 35%'
      ],
      duration: '10 months',
      teamSize: '20 people',
      technologies: ['AI/ML', 'IoT', 'Robotics'],
      image: '🏭',
      featured: false
    },
    {
      id: 6,
      title: 'Healthcare Data Analytics Platform',
      company: 'MediCare Systems',
      industry: 'Healthcare',
      challenge: 'Fragmented patient data and poor insights',
      solution: 'Developed unified healthcare analytics platform',
      results: [
        'Improved patient outcomes by 30%',
        'Reduced administrative overhead by 50%',
        'Enhanced diagnostic accuracy'
      ],
      duration: '7 months',
      teamSize: '18 people',
      technologies: ['Data Analytics', 'Healthcare IT', 'AI/ML'],
      image: '🏥',
      featured: false
    }
  ];

  const industries = [
    'All Industries',
    'Technology',
    'Financial Services',
    'Manufacturing',
    'Retail',
    'Healthcare',
    'Government'
  ];

  const technologies = [
    'All Technologies',
    'AI/ML',
    'Quantum Technology',
    'Cybersecurity',
    'Cloud Computing',
    'Data Analytics',
    'IoT'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Case Studies
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            Discover how we've helped organizations across industries transform their 
            operations with cutting-edge technology solutions.
          </p>
        </div>
      </section>

      {/* Featured Case Study */}
      {caseStudies.filter(cs => cs.featured).map((caseStudy) => (
        <section key={caseStudy.id} className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-2xl p-8">
              <div className="flex items-center mb-4">
                <Star className="w-6 h-6 text-yellow-400 mr-2" />
                <span className="text-yellow-400 font-semibold">Featured Case Study</span>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{caseStudy.title}</h2>
                  <div className="flex items-center space-x-4 mb-4">
                    <Building className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{caseStudy.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-gray-300">{caseStudy.industry}</span>
                  </div>
                  <p className="text-gray-300 mb-6">{caseStudy.challenge}</p>
                  <div className="space-y-3">
                    <h4 className="font-semibold text-white">Key Results:</h4>
                    {caseStudy.results.map((result, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-8xl mb-4 text-center">{caseStudy.image}</div>
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Clock className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Duration</p>
                      <p className="font-semibold text-white">{caseStudy.duration}</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-lg p-4">
                      <Users className="w-6 h-6 text-cyan-400 mx-auto mb-2" />
                      <p className="text-sm text-gray-400">Team Size</p>
                      <p className="font-semibold text-white">{caseStudy.teamSize}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Filters */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search case studies..."
                className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>

            {/* Industry Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                {industries.map((industry) => (
                  <option key={industry} value={industry}>{industry}</option>
                ))}
              </select>
            </div>

            {/* Technology Filter */}
            <div className="flex items-center space-x-2">
              <Filter className="w-5 h-5 text-gray-400" />
              <select className="px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent">
                {technologies.map((tech) => (
                  <option key={tech} value={tech}>{tech}</option>
                ))}
              </select>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
            </div>
          </div>
=======
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
      <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6"
<<<<<<< HEAD
=======
=======
>>>>>>> origin/main
      title: "AI-Powered Manufacturing Transformation",
      company: "Global Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Inefficient production processes, high defect rates, and limited predictive maintenance capabilities.",
      solution: "Implemented AI autonomous systems with predictive analytics and automated quality control.",
      results: [
        "Production efficiency increased by 45%",
        "Defect rates reduced by 78%",
        "Maintenance costs decreased by 60%",
        "ROI achieved in 8 months"
      ],
      icon: CpuChipIcon,
      color: "from-cyan-500 to-blue-600"
    },
    {
      id: 2,
      title: "5G Network Infrastructure Overhaul",
      company: "TechConnect Solutions",
      industry: "Telecommunications",
      challenge: "Outdated network infrastructure unable to support modern enterprise demands and IoT deployments.",
      solution: "Deployed comprehensive 5G enterprise solutions with network slicing and edge computing.",
      results: [
        "Network speed increased by 100x",
        "Latency reduced to under 1ms",
        "IoT device support increased by 500%",
        "Customer satisfaction improved by 85%"
      ],
      icon: GlobeAltIcon,
      color: "from-purple-500 to-pink-600"
    },
    {
      id: 3,
      title: "Autonomous Security Implementation",
      company: "SecureBank Financial",
      industry: "Financial Services",
      challenge: "Increasing cyber threats, manual security monitoring, and compliance requirements.",
      solution: "Deployed AI autonomous security platform with 24/7 threat detection and automated response.",
      results: [
        "Security incidents reduced by 95%",
        "Threat response time reduced to under 30 seconds",
        "Compliance automation achieved 100%",
        "Security operations costs reduced by 70%"
      ],
      icon: ShieldCheckIcon,
      color: "from-green-500 to-emerald-600"
    },
    {
      id: 4,
      title: "Quantum Computing Research Platform",
      company: "Quantum Research Institute",
      industry: "Research & Development",
      challenge: "Limited computational power for complex scientific simulations and research projects.",
      solution: "Implemented quantum neural network platform with advanced AI algorithms.",
      results: [
        "Research speed increased by 300%",
        "Complex simulations completed 10x faster",
        "Breakthrough discoveries accelerated",
        "Research funding success rate improved by 150%"
      ],
      icon: RocketLaunchIcon,
      color: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "IoT Data Analytics Revolution",
      company: "SmartCity Municipal",
      industry: "Government",
      challenge: "Inefficient city services, limited data insights, and poor resource allocation.",
      solution: "Deployed comprehensive IoT data analytics platform with AI-powered insights.",
      results: [
        "City services efficiency improved by 65%",
        "Resource allocation optimized by 40%",
        "Public safety response time reduced by 50%",
        "Citizen satisfaction increased by 75%"
      ],
      icon: ChartBarIcon,
      color: "from-indigo-500 to-purple-600"
    },
    {
      id: 6,
      title: "AI Content Generation Automation",
      company: "MediaCorp International",
      industry: "Media & Entertainment",
      challenge: "High content production costs, slow turnaround times, and inconsistent quality.",
      solution: "Implemented AI content generation platform with automated creation and optimization.",
      results: [
        "Content production speed increased by 400%",
        "Production costs reduced by 65%",
        "Content quality improved by 85%",
        "Market reach expanded by 200%"
      ],
      icon: LightBulbIcon,
      color: "from-yellow-500 to-orange-600"
    }
  ];

  const industries = [
    "Manufacturing",
    "Healthcare",
    "Financial Services",
    "Telecommunications",
    "Government",
    "Retail",
    "Education",
    "Transportation"
  ];

  const technologies = [
    "AI & Machine Learning",
    "5G Networks",
    "IoT & Edge Computing",
    "Quantum Computing",
    "Cybersecurity",
    "Cloud Infrastructure",
    "Blockchain",
    "Robotic Process Automation"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies from Zion Tech Group. See how our AI, 5G, and technology solutions transform businesses across industries." />
        <meta name="keywords" content="case studies, success stories, AI transformation, 5G implementation, technology ROI, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
<<<<<<< HEAD
            Success Stories
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8"
=======
  const stats = [
    { label: "Successful Projects", value: "150+", icon: CheckCircle },
    { label: "Client Satisfaction", value: "98%", icon: Star },
    { label: "Average ROI", value: "350%", icon: TrendingUp },
    { label: "Global Clients", value: "25+", icon: Globe },
    { label: "Team Members", value: "100+", icon: Users },
    { label: "Security Certifications", value: "15+", icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate-darker">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Success Stories That
            <span className="bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent"> Transform Industries</span>
          </motion.h1>
          <motion.p 
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-zion-slate-light max-w-3xl mx-auto mb-8"
          >
<<<<<<< HEAD
            Discover how Zion Tech Group has transformed businesses across industries with cutting-edge AI, quantum computing, and autonomous solutions.
          </motion.p>
          <motion.div 
            className="flex flex-wrap justify-center gap-4 text-sm text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              AI & Machine Learning
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Quantum Computing
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Autonomous Systems
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400" />
              Cybersecurity
            </span>
<<<<<<< HEAD
=======
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
              Discover how leading organizations across industries are transforming their 
              operations with Zion Tech Group's cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Success Story
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Download Case Studies
              </button>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
          </motion.div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
=======
>>>>>>> origin/main
=======
            Discover how Zion Tech Group's innovative solutions have revolutionized businesses across industries, 
            delivering measurable results and sustainable growth.
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full flex items-center justify-center">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-sm text-zion-slate-light">{stat.label}</div>
              </motion.div>
            ))}
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
=======
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, TrendingUp, Users, DollarSign, Clock, Target, Award, CheckCircle, Lightbulb, Zap, Shield, Globe, Database, Cloud, Brain, Atom, Rocket, Wifi, Building2 } from 'lucide-react';

const CaseStudies = () => {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Business Intelligence Transformation",
      company: "Fortune 500 Manufacturing Corp",
      industry: "Manufacturing",
      challenge: "Complex data silos and manual reporting processes causing 40% delays in decision-making",
      solution: "Implemented AI-driven business intelligence platform with autonomous data processing",
      results: [
        "85% reduction in reporting time",
        "40% improvement in decision accuracy",
        "$2.3M annual cost savings",
        "Real-time insights across 12 departments"
      ],
      technologies: ["AI Business Intelligence", "Data Analytics", "Machine Learning"],
      duration: "6 months",
      teamSize: "8 specialists",
      icon: Brain,
      category: "AI & Analytics"
    },
    {
      id: 2,
      title: "Quantum Neural Network Implementation",
      company: "Global Financial Services Ltd",
      industry: "Financial Services",
      challenge: "Traditional algorithms unable to handle complex market prediction scenarios",
      solution: "Deployed quantum neural network platform for advanced financial modeling",
      results: [
        "300% improvement in prediction accuracy",
        "60% faster risk assessment",
        "$15M additional revenue generated",
        "Competitive advantage in algorithmic trading"
      ],
      technologies: ["Quantum Computing", "Neural Networks", "Financial Modeling"],
      duration: "8 months",
      teamSize: "12 specialists",
      icon: Atom,
      category: "Quantum Technology"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      company: "Healthcare Network Alliance",
      industry: "Healthcare",
      challenge: "Manual patient scheduling and resource allocation causing 30% inefficiency",
      solution: "AI autonomous business operations platform with intelligent resource management",
      results: [
        "45% improvement in resource utilization",
        "25% reduction in patient wait times",
        "$1.8M operational cost savings",
        "24/7 autonomous operations"
      ],
      technologies: ["AI Automation", "Resource Management", "Healthcare AI"],
      duration: "7 months",
      teamSize: "10 specialists",
      icon: Rocket,
      category: "AI Automation"
    },
    {
      id: 4,
      title: "Cybersecurity SOC2 Compliance Automation",
      company: "Tech Startup Accelerator",
      industry: "Technology",
      challenge: "Manual compliance processes taking 6+ months and high error rates",
      solution: "Automated SOC2 compliance platform with continuous monitoring",
      results: [
        "90% reduction in compliance time",
        "99.9% accuracy in compliance reporting",
        "Real-time security monitoring",
        "Zero compliance violations"
      ],
      technologies: ["Cybersecurity", "Compliance Automation", "SOC2"],
      duration: "4 months",
      teamSize: "6 specialists",
      icon: Shield,
      category: "Security & Compliance"
    },
    {
      id: 5,
      title: "5G Enterprise Infrastructure Deployment",
      company: "Smart City Initiative",
      industry: "Government & Infrastructure",
      challenge: "Legacy infrastructure unable to support smart city IoT requirements",
      solution: "5G enterprise infrastructure with edge computing capabilities",
      results: [
        "10x faster data transmission",
        "Support for 100,000+ IoT devices",
        "Real-time city monitoring",
        "Future-ready infrastructure"
      ],
      technologies: ["5G Technology", "Edge Computing", "IoT Infrastructure"],
      duration: "12 months",
      teamSize: "15 specialists",
      icon: Wifi,
      category: "Infrastructure"
    },
    {
      id: 6,
      title: "AI Content Generation Revolution",
      company: "Global Media Corporation",
      industry: "Media & Entertainment",
      challenge: "Content creation bottlenecks limiting production capacity by 50%",
      solution: "AI content generation platform with autonomous creative capabilities",
      results: [
        "500% increase in content production",
        "70% reduction in creation time",
        "Consistent brand voice across all content",
        "Multi-language content generation"
      ],
      technologies: ["AI Content Generation", "Natural Language Processing", "Creative AI"],
      duration: "5 months",
      teamSize: "9 specialists",
      icon: Lightbulb,
      category: "AI Content"
    }
  ];

  const categories = [
    { name: "All", count: caseStudies.length, icon: Globe },
    { name: "AI & Analytics", count: caseStudies.filter(cs => cs.category === "AI & Analytics").length, icon: Brain },
    { name: "Quantum Technology", count: caseStudies.filter(cs => cs.category === "Quantum Technology").length, icon: Atom },
    { name: "AI Automation", count: caseStudies.filter(cs => cs.category === "AI Automation").length, icon: Rocket },
    { name: "Security & Compliance", count: caseStudies.filter(cs => cs.category === "Security & Compliance").length, icon: Shield },
    { name: "Infrastructure", count: caseStudies.filter(cs => cs.category === "Infrastructure").length, icon: Wifi },
    { name: "AI Content", count: caseStudies.filter(cs => cs.category === "AI Content").length, icon: Lightbulb }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-zion-slate via-zion-slate-dark to-zion-slate">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 to-zion-purple/20"></div>
        <div className="relative container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="text-gradient block">Transform Businesses</span>
            </h1>
            <p className="text-xl text-zion-slate-light mb-8 leading-relaxed">
              Discover how leading organizations leverage Zion Tech Group's innovative solutions 
              to achieve breakthrough results and competitive advantages.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 text-zion-cyan">
                <CheckCircle className="h-5 w-5" />
                <span className="text-white">Proven Results</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <Award className="h-5 w-5" />
                <span className="text-white">Industry Recognition</span>
              </div>
              <div className="flex items-center space-x-2 text-zion-cyan">
                <TrendingUp className="h-5 w-5" />
                <span className="text-white">Measurable Impact</span>
              </div>
            </div>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
        </div>
      </div>

<<<<<<< HEAD
      {/* Case Studies Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
<<<<<<< HEAD
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCaseStudies.map((study) => (
              <div key={study.id} className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group">
                {/* Image Placeholder */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 flex items-center justify-center">
                  <div className="text-center">
                    <Building className="w-16 h-16 text-cyan-400 mx-auto mb-2" />
                    <p className="text-gray-400 text-sm">Case Study Image</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-xs bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                      {study.industry.charAt(0).toUpperCase() + study.industry.slice(1)}
                    </span>
                    <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                      {study.service.toUpperCase()}
                    </span>
                  </div>

                  <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-cyan-400 transition-colors duration-300">
                    {study.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm mb-4">
                    <strong className="text-white">{study.company}</strong>
                  </p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-1">Challenge</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.challenge}</p>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-purple-400 mb-1">Solution</h4>
                      <p className="text-gray-400 text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-green-400 mb-2">Key Results</h4>
                    <div className="space-y-1">
                      {study.results.map((result, index) => (
                        <div key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-6 p-4 bg-gray-700/30 rounded-lg">
                    <div className="text-center">
                      <div className="text-lg font-bold text-cyan-400">{study.metrics.roi}</div>
                      <div className="text-xs text-gray-400">ROI</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-purple-400">{study.metrics.timeframe}</div>
                      <div className="text-xs text-gray-400">Timeline</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-400">{study.metrics.teamSize}</div>
                      <div className="text-xs text-gray-400">Team Size</div>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {study.tags.map((tag, index) => (
                      <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                        {tag}
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            All Case Studies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.filter(cs => !cs.featured).map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
              >
                {/* Case Study Image */}
                <div className="h-48 bg-gradient-to-br from-cyan-500/20 to-blue-600/20 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {caseStudy.image}
                </div>

                {/* Case Study Content */}
                <div className="p-6">
                  {/* Company and Industry */}
                  <div className="flex items-center space-x-2 mb-3">
                    <Building className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm text-gray-400">{caseStudy.company}</span>
                    <span className="text-gray-500">•</span>
                    <span className="text-sm text-gray-400">{caseStudy.industry}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-200">
                    {caseStudy.title}
                  </h3>

                  {/* Challenge */}
                  <p className="text-gray-400 mb-4 line-clamp-2">
                    {caseStudy.challenge}
                  </p>

                  {/* Key Results */}
                  <div className="mb-4">
                    <h4 className="font-medium text-white mb-2">Key Results:</h4>
                    <ul className="space-y-1">
                      {caseStudy.results.slice(0, 2).map((result, index) => (
                        <li key={index} className="flex items-center space-x-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 line-clamp-1">{result}</span>
=======
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {caseStudies.map((study) => (
              <motion.div
                key={study.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20"
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-cyan-500/20 text-cyan-400 rounded-full mb-3">
                    {study.industry}
                  </span>
                  <h3 className="text-xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">Client: {study.client}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Challenge</h4>
                    <p className="text-gray-400 text-sm">{study.challenge}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Solution</h4>
                    <p className="text-gray-400 text-sm">{study.solution}</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-300 mb-2">Results</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                          {result}
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
                        </li>
                      ))}
                    </ul>
<<<<<<< HEAD
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Featured Case Studies
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore real-world examples of how our AI solutions have delivered 
              measurable results for organizations like yours.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-12 h-12 bg-gradient-to-r ${study.color} rounded-lg flex items-center justify-center mr-3`}>
                    <study.icon className="w-6 h-6 text-white" />
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
                  </div>
<<<<<<< HEAD
                  <div>
                    <h3 className="text-lg font-semibold text-white">{study.company}</h3>
                    <p className="text-sm text-gray-400">{study.industry}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {caseStudy.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full"
                      >
                        {tech}
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
                      </span>
                    ))}
                  </div>

<<<<<<< HEAD
                  {/* CTA */}
                  <Link
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center justify-center w-full px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-medium rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                  >
                    <span>View Full Case Study</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
=======
                  {/* Meta Information */}
                  <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{caseStudy.duration}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span>{caseStudy.teamSize}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <button className="w-full flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 group-hover:scale-105">
                    <span>Read Full Case Study</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
                </div>
<<<<<<< HEAD
=======
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h4>
                  <p className="text-gray-300 text-sm">{study.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h4>
                  <p className="text-gray-300 text-sm">{study.solution}</p>
                </div>
                
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Results</h4>
                  <ul className="space-y-1">
                    {study.results.map((result, resultIndex) => (
                      <li key={resultIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {result}
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
>>>>>>> origin/main
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Real Results, Real Impact
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore detailed case studies showcasing the transformative power of our 
              technology solutions across diverse industries and use cases.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-cyan-500 transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${study.color} rounded-xl flex items-center justify-center`}>
                    <study.icon className="w-8 h-8 text-white" />
                  </div>
                  <span className="text-sm text-cyan-400 font-medium bg-cyan-400/10 px-3 py-1 rounded-full">
                    {study.industry}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                <p className="text-cyan-400 font-semibold mb-4">{study.company}</p>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Challenge</h4>
                  <p className="text-gray-300">{study.challenge}</p>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Solution</h4>
                  <p className="text-gray-300">{study.solution}</p>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{result}</span>
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
=======
>>>>>>> origin/main
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-zion-cyan/20 text-zion-cyan text-sm rounded-full">
                      {study.industry}
                    </span>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-zion-cyan">{study.metrics.roi}</div>
                      <div className="text-xs text-zion-slate-light">ROI</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{study.title}</h3>
                  <p className="text-zion-slate-light mb-4">{study.company}</p>
=======
      {/* Category Filter */}
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.name}
              className="flex items-center space-x-2 px-6 py-3 rounded-full bg-zion-slate-dark hover:bg-zion-cyan/20 border border-zion-cyan/30 text-white hover:text-zion-cyan transition-all duration-300 group"
            >
              <category.icon className="h-4 w-4" />
              <span>{category.name}</span>
              <span className="bg-zion-cyan/20 text-zion-cyan px-2 py-1 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>

        {/* Case Studies Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-8 hover:border-zion-cyan/40 hover:shadow-2xl hover:shadow-zion-cyan/10 transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="p-3 bg-zion-cyan/20 rounded-lg group-hover:bg-zion-cyan/30 transition-colors">
                    <study.icon className="h-6 w-6 text-zion-cyan" />
                  </div>
                  <div>
                    <span className="text-zion-cyan text-sm font-medium">{study.category}</span>
                    <h3 className="text-xl font-bold text-white group-hover:text-zion-cyan transition-colors">
                      {study.title}
                    </h3>
                  </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
                </div>
                <div className="flex space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>

<<<<<<< HEAD
                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Challenge</h4>
                    <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-zion-cyan mb-2">Solution</h4>
                    <p className="text-zion-slate-light text-sm">{study.solution}</p>
=======
              {/* Company Info */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 text-sm text-zion-slate-light mb-3">
                  <div className="flex items-center space-x-2">
                    <Building2 className="h-4 w-4" />
                    <span>{study.company}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Globe className="h-4 w-4" />
                    <span>{study.industry}</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
                  </div>
                </div>
              </div>

<<<<<<< HEAD
                <div className="mb-6">
                  <h4 className="font-semibold text-zion-cyan mb-3">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-zion-cyan mt-0.5 flex-shrink-0" />
                        <span className="text-zion-slate-light text-sm">{result}</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
                      </li>
                    ))}
                  </ul>
                </div>
<<<<<<< HEAD
<<<<<<< HEAD
              </div>
            ))}
          </div>
=======

<<<<<<< HEAD
                  <div className="pt-4 border-t border-gray-700/50">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400">{study.metrics.roi}</div>
                        <div className="text-xs text-gray-400">ROI</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-blue-400">{study.metrics.timeframe}</div>
                        <div className="text-xs text-gray-400">Timeline</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-purple-400">{study.metrics.teamSize}</div>
                        <div className="text-xs text-gray-400">Team</div>
                      </div>
                    </div>
=======
                <div className="pt-4 border-t border-white/10">
                  <div className="flex justify-between text-sm text-zion-slate-light">
                    <span>Timeline: {study.metrics.timeframe}</span>
                    <span>Team: {study.metrics.teamSize}</span>
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
                  </div>
                </div>
<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
=======
>>>>>>> origin/main
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Industries We Transform
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our technology solutions are designed to work across all industries, 
              providing tailored solutions for your specific business challenges.
            </p>
          </motion.div>
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Client Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Hear directly from our clients about their experience working with Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700"
              >
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                <div>
                  <p className="text-white font-semibold">{testimonial.author}</p>
                  <p className="text-gray-400 text-sm">{testimonial.title}</p>
                  <p className="text-cyan-400 text-sm">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Industries We Serve
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI solutions are designed to work across all industries, 
              delivering measurable results regardless of your sector.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700 text-center hover:border-cyan-500 transition-all duration-300"
              >
                <p className="text-gray-300 text-sm">{industry}</p>
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
              </div>
            ))}
          </div>
<<<<<<< HEAD

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No Case Studies Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
=======
=======
>>>>>>> origin/main

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white">{industry}</h3>
              </motion.div>
            ))}
          </div>
<<<<<<< HEAD
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
=======
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Deploy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies that drive innovation and deliver measurable 
              business results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
>>>>>>> origin/main
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Technologies We Deploy
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Cutting-edge technologies that drive innovation and deliver measurable 
              business results for our clients.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <h3 className="text-lg font-semibold text-white">{tech}</h3>
              </motion.div>
            ))}
          </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
        </div>
      </section>

      {/* CTA Section */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our AI and technology solutions can transform your business 
            and deliver measurable results like the ones you see above.
=======
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/50 to-purple-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Write Your Success Story?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join the organizations that have already transformed their operations with 
            Zion Tech Group's AI-powered solutions. Let's discuss how we can help you achieve similar results.
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
<<<<<<< HEAD
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
            >
              <Zap className="w-5 h-5 mr-2" />
              Start Your Transformation
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Our Services
=======
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
            >
              Explore Our Solutions
>>>>>>> origin/cursor/website-audit-and-enhancement-98d1
            </Link>
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Let's discuss how our technology solutions can help you achieve similar 
            results and drive your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
              <span>Schedule a Consultation</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200">
              <span>View Our Services</span>
              <ArrowRight className="w-5 h-5" />
            </button>
>>>>>>> origin/cursor/website-audit-and-enhancement-ee8a
          </div>
=======
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
      <section className="pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div 
            className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30"
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-600/20 to-blue-600/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
<<<<<<< HEAD
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-gray-300 mb-6">
              Let's discuss how Zion Tech Group can transform your business with cutting-edge technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/20 transition-all duration-300">
                View More Cases
<<<<<<< HEAD
=======
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful organizations that have transformed their 
              operations with Zion Tech Group's innovative technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Start Your Transformation
              </button>
              <button className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300">
                Schedule Consultation
>>>>>>> origin/cursor/analyze-improve-and-deploy-ziontechgroup-app-d2cf
=======
>>>>>>> origin/cursor/resolve-and-merge-open-pull-requests-fe6d
=======
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-zion-purple to-zion-cyan rounded-3xl p-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join the ranks of industry leaders who have transformed their businesses with Zion Tech Group's 
              cutting-edge solutions. Let's discuss how we can help you achieve similar results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-zion-purple px-8 py-3 rounded-lg font-semibold hover:bg-zion-slate-light transition-colors duration-300">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-zion-purple transition-colors duration-300">
                View More Case Studies
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
              </button>
            </div>
          </motion.div>
<<<<<<< HEAD
>>>>>>> origin/cursor/website-audit-and-enhancement-b812
=======
>>>>>>> origin/main
=======
              {/* Challenge & Solution */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Challenge</h4>
                  <p className="text-zion-slate-light text-sm">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Solution</h4>
                  <p className="text-zion-slate-light text-sm">{study.solution}</p>
                </div>
              </div>

              {/* Results */}
              <div className="mb-6">
                <h4 className="text-zion-cyan font-semibold mb-3">Results</h4>
                <div className="grid grid-cols-1 gap-2">
                  {study.results.map((result, index) => (
                    <div key={index} className="flex items-center space-x-2 text-sm text-zion-slate-light">
                      <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                      <span>{result}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies & Metrics */}
              <div className="space-y-4 mb-6">
                <div>
                  <h4 className="text-zion-cyan font-semibold mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-zion-cyan/10 text-zion-cyan text-xs rounded-full border border-zion-cyan/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <Clock className="h-5 w-5 text-zion-cyan mx-auto mb-1" />
                    <div className="text-zion-slate-light">Duration</div>
                    <div className="text-white font-semibold">{study.duration}</div>
                  </div>
                  <div className="text-center">
                    <Users className="h-5 w-5 text-zion-cyan mx-auto mb-1" />
                    <div className="text-zion-slate-light">Team Size</div>
                    <div className="text-white font-semibold">{study.teamSize}</div>
                  </div>
                  <div className="text-center">
                    <Target className="h-5 w-5 text-zion-cyan mx-auto mb-1" />
                    <div className="text-zion-slate-light">Success Rate</div>
                    <div className="text-white font-semibold">100%</div>
                  </div>
                </div>
              </div>

              {/* CTA */}
              <div className="flex items-center justify-between">
                <Link
                  to={`/case-studies/${study.id}`}
                  className="text-zion-cyan hover:text-white transition-colors font-medium group-hover:underline"
                >
                  Read Full Case Study
                </Link>
                <ArrowRight className="h-4 w-4 text-zion-cyan group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-zion-slate-dark border border-zion-cyan/20 rounded-xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-zion-slate-light mb-8 text-lg">
              Let's discuss how Zion Tech Group can transform your business with cutting-edge AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-zion-purple to-zion-cyan hover:from-zion-purple-light hover:to-zion-cyan-light text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-zion-cyan/30 flex items-center justify-center space-x-2"
              >
                <span>Start Your Project</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                to="/services"
                className="border border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-a3a9
        </div>
      </div>
    </div>
<<<<<<< HEAD
=======
  ];

  return (
    <>
      <SEO 
        title="Case Studies | Success Stories - Zion Tech Group"
        description="Explore our client success stories and case studies. See how Zion Tech Group has helped businesses transform with AI, cybersecurity, and innovative technology solutions."
        keywords="case studies, client success stories, digital transformation, AI solutions, cybersecurity, technology consulting"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Hero Section */}
        <motion.section 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-sm font-medium mb-8"
              >
                <Award className="w-4 h-4 mr-2" />
                Proven Results & Success Stories
              </motion.div>
              
              <motion.h1 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="text-4xl md:text-6xl font-bold text-white mb-6"
              >
                Client
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                  Success Stories
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto"
              >
                Discover how we've helped businesses across industries achieve remarkable results through innovative technology solutions and strategic digital transformation.
              </motion.p>
            </div>
          </div>
        </motion.section>

        {/* Metrics Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {metrics.map((metric, index) => {
                const Icon = metric.icon;
                return (
                  <motion.div
                    key={metric.label}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="inline-flex p-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                    <div className="text-gray-300">{metric.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured Case Studies
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Real results from real clients across diverse industries
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {caseStudies.map((study, index) => {
                const Icon = study.icon;
                return (
                  <motion.div
                    key={study.id}
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1, duration: 0.8 }}
                    viewport={{ once: true }}
                    className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10 hover:border-white/20 transition-all duration-300"
                  >
                    <div className="flex items-center mb-6">
                      <div className={`inline-flex p-3 rounded-lg bg-gradient-to-r ${study.color} mr-4`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-sm text-blue-300 font-medium">{study.category}</div>
                        <h3 className="text-xl font-bold text-white">{study.title}</h3>
                      </div>
                    </div>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <div className="text-sm text-gray-400 font-medium">Client</div>
                        <div className="text-gray-300">{study.client}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium">Challenge</div>
                        <div className="text-gray-300">{study.challenge}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-400 font-medium">Solution</div>
                        <div className="text-gray-300">{study.solution}</div>
                      </div>
                    </div>

                    <div className="mb-6">
                      <div className="text-sm text-gray-400 font-medium mb-3">Key Results</div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                        {study.results.map((result, idx) => (
                          <div key={idx} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {result}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex justify-between text-sm text-gray-400">
                      <div>
                        <Clock className="w-4 h-4 inline mr-1" />
                        {study.duration}
                      </div>
                      <div>
                        <Users className="w-4 h-4 inline mr-1" />
                        {study.teamSize}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Clients Say
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Hear directly from the leaders who trusted us with their digital transformation
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  viewport={{ once: true }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/10"
                >
                  <div className="flex mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-300 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div>
                    <div className="font-semibold text-white">{testimonial.author}</div>
                    <div className="text-sm text-gray-400">{testimonial.position}</div>
                    <div className="text-sm text-blue-300">{testimonial.company}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Become Our Next Success Story?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Let's discuss how we can help transform your business with innovative technology solutions
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-white text-blue-600 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
                >
                  Start Your Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link 
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border border-white text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-200"
                >
                  Explore Services
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/website-audit-and-enhancement-53a4
=======
>>>>>>> origin/cursor/website-audit-and-enhancement-232f
  );
}