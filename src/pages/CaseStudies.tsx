<<<<<<< HEAD
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, TrendingUp, Users, DollarSign, Clock, Star } from 'lucide-react';

const CaseStudies: React.FC = () => {
  const caseStudies = [
    {
      id: 1,
      title: 'AI-Powered Financial Services Transformation',
      company: 'Global Bank Corp',
      industry: 'Financial Services',
      challenge: 'Complex legacy systems and manual processes causing delays and errors',
      solution: 'Implemented AI-powered automation platform with quantum computing capabilities',
      results: {
        efficiency: '85%',
        costReduction: '60%',
        timeToMarket: '70%',
        customerSatisfaction: '95%'
      },
      image: '/api/placeholder/400/250',
      category: 'AI & Automation'
    },
    {
      id: 2,
      title: 'Healthcare AI Implementation Success',
      company: 'Metro Health Systems',
      industry: 'Healthcare',
      challenge: 'Patient data analysis taking weeks, affecting treatment decisions',
      solution: 'Deployed AI-powered diagnostic and treatment recommendation system',
      results: {
        efficiency: '90%',
        costReduction: '45%',
        timeToMarket: '80%',
        customerSatisfaction: '98%'
      },
      image: '/api/placeholder/400/250',
      category: 'Healthcare AI'
    },
    {
      id: 3,
      title: 'Manufacturing Process Optimization',
      company: 'Tech Manufacturing Inc',
      industry: 'Manufacturing',
      challenge: 'Production inefficiencies and quality control issues',
      solution: 'Integrated AI-powered predictive maintenance and quality control systems',
      results: {
        efficiency: '75%',
        costReduction: '55%',
        timeToMarket: '65%',
        customerSatisfaction: '92%'
      },
      image: '/api/placeholder/400/250',
      category: 'Industrial AI'
    },
    {
      id: 4,
      title: 'Retail Customer Experience Revolution',
      company: 'Smart Retail Chain',
      industry: 'Retail',
      challenge: 'Poor customer engagement and inventory management',
      solution: 'AI-powered customer analytics and inventory optimization platform',
      results: {
        efficiency: '80%',
        costReduction: '40%',
        timeToMarket: '75%',
        customerSatisfaction: '96%'
      },
      image: '/api/placeholder/400/250',
      category: 'Retail AI'
    },
    {
      id: 5,
      title: 'Government Digital Transformation',
      company: 'City Government',
      industry: 'Government',
      challenge: 'Slow citizen services and outdated systems',
      solution: 'Modernized infrastructure with AI-powered citizen service platform',
      results: {
        efficiency: '70%',
        costReduction: '50%',
        timeToMarket: '85%',
        customerSatisfaction: '94%'
      },
      image: '/api/placeholder/400/250',
      category: 'Government Tech'
    },
    {
      id: 6,
      title: 'Education Technology Innovation',
      company: 'University Network',
      industry: 'Education',
      challenge: 'Limited student engagement and outdated learning methods',
      solution: 'AI-powered personalized learning platform with adaptive content',
      results: {
        efficiency: '85%',
        costReduction: '35%',
        timeToMarket: '90%',
        customerSatisfaction: '97%'
      },
      image: '/api/placeholder/400/250',
      category: 'EdTech'
    }
  ];

  const categories = ['All', 'AI & Automation', 'Healthcare AI', 'Industrial AI', 'Retail AI', 'Government Tech', 'EdTech'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-blue-900/20"></div>
        <div className="absolute inset-0 bg-gray-800/20"></div>
        
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50 text-cyan-400 text-sm font-medium mb-6">
              <TrendingUp className="w-4 h-4 mr-2" />
              Success Stories
            </div>
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-6">
              Case Studies
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how organizations across industries are transforming their operations 
              with our cutting-edge AI and technology solutions.
            </p>
          </div>
=======
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
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
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
import React from 'react';

const CaseStudies: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
<<<<<<< HEAD
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

=======
import React from 'react';
import { motion } from 'framer-motion';
import { 
  Building, 
  Users, 
  TrendingUp, 
  Shield, 
  Cpu, 
  Brain,
  CheckCircle,
  ArrowRight,
  Star,
  Award
} from 'lucide-react';

export default function CaseStudies() {
  const caseStudies = [
    {
      id: 1,
      title: "AI-Powered Healthcare Analytics Transformation",
      company: "Regional Medical Center",
      industry: "Healthcare",
      challenge: "Complex patient data analysis and predictive modeling for improved care outcomes",
      solution: "Implemented AI-powered analytics platform with machine learning algorithms for patient risk assessment",
      results: [
        "30% improvement in patient outcome predictions",
        "25% reduction in readmission rates",
        "40% faster diagnosis processing"
      ],
      technologies: ["AI/ML", "Healthcare Analytics", "Predictive Modeling"],
      icon: Brain,
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: 2,
      title: "Quantum-Safe Cybersecurity Implementation",
      company: "Global Financial Institution",
      industry: "Financial Services",
      challenge: "Need for future-proof security against quantum computing threats",
      solution: "Deployed quantum-resistant encryption and advanced threat detection systems",
      results: [
        "100% quantum-safe encryption coverage",
        "60% reduction in security incidents",
        "Enhanced compliance with regulatory requirements"
      ],
      technologies: ["Quantum Security", "Cybersecurity", "Compliance"],
      icon: Shield,
      color: "from-red-500 to-pink-500"
    },
    {
      id: 3,
      title: "Autonomous Business Operations Platform",
      company: "Manufacturing Corporation",
      industry: "Manufacturing",
      challenge: "Manual business processes causing delays and inefficiencies",
      solution: "Implemented AI-driven autonomous business operations platform",
      results: [
        "45% reduction in process execution time",
        "35% increase in operational efficiency",
        "Real-time decision making capabilities"
      ],
      technologies: ["AI Automation", "Business Process Management", "IoT"],
      icon: Building,
      color: "from-green-500 to-emerald-500"
    },
    {
      id: 4,
      title: "5G Enterprise Network Infrastructure",
      company: "Technology Enterprise",
      industry: "Technology",
      challenge: "Legacy network infrastructure limiting growth and innovation",
      solution: "Designed and deployed enterprise-grade 5G network with edge computing",
      results: [
        "10x faster data transfer speeds",
        "99.9% network uptime reliability",
        "Scalable infrastructure for future growth"
      ],
      technologies: ["5G Networks", "Edge Computing", "Network Infrastructure"],
      icon: Cpu,
      color: "from-purple-500 to-violet-500"
    },
    {
      id: 5,
      title: "AI Research Assistant Implementation",
      company: "Research Institute",
      industry: "Research & Development",
      challenge: "Manual research processes slowing down innovation cycles",
      solution: "Deployed AI-powered research assistant with autonomous capabilities",
      results: [
        "50% faster research completion",
        "Enhanced data analysis accuracy",
        "Automated literature review processes"
      ],
      technologies: ["AI Research", "Natural Language Processing", "Data Analytics"],
      icon: Brain,
      color: "from-orange-500 to-yellow-500"
    },
    {
      id: 6,
      title: "SOC2 Compliance Automation",
      company: "SaaS Platform",
      industry: "Software as a Service",
      challenge: "Complex compliance requirements and manual audit processes",
      solution: "Implemented automated SOC2 compliance monitoring and reporting",
      results: [
        "90% reduction in compliance audit time",
        "Continuous compliance monitoring",
        "Automated report generation"
      ],
      technologies: ["Compliance Automation", "Security Monitoring", "Audit Management"],
      icon: Shield,
      color: "from-indigo-500 to-blue-500"
    }
  ];

>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      <Helmet>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore real-world success stories and case studies from Zion Tech Group. See how our AI, 5G, and technology solutions transform businesses across industries." />
        <meta name="keywords" content="case studies, success stories, AI transformation, 5G implementation, technology ROI, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/case-studies" />
      </Helmet>

      {/* Hero Section */}
<<<<<<< HEAD
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
=======
                className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Success Story
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center px-8 py-4 rounded-lg border border-gray-600 text-white font-semibold hover:border-blue-500 hover:text-blue-400 transition-all duration-300"
              >
                Request Demo
              </Link>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
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

<<<<<<< HEAD
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
=======
import React, { useState } from 'react';
>>>>>>> origin/main
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
=======
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Discover how Zion Tech Group has transformed businesses across industries with cutting-edge AI, 
              quantum technology, and innovative solutions that drive real results.
            </p>
          </motion.div>
>>>>>>> origin/cursor/website-audit-and-enhancement-bd86
        </div>
<<<<<<< HEAD
      </div>
=======
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
=======
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/50 to-purple-900/50"></div>
        <div className="relative z-10 container mx-auto px-4 py-24">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Success Stories
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Discover how Zion Tech Group has transformed businesses across industries with cutting-edge technology solutions
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white shadow-lg'
                      : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50'
                  }`}
                >
                  {category}
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01
                </button>
              ))}
            </div>
=======
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Success Stories That
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"> Transform</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how Zion Tech Group has empowered organizations across industries with cutting-edge AI solutions, 
              quantum technology, and digital transformation services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">50+</span> Successful Projects
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">95%</span> Client Satisfaction
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-full px-6 py-3 text-white">
                <span className="font-semibold">$15M+</span> Client ROI
              </div>
            </div>
          </motion.div>
=======
      title: 'Healthcare AI Transformation',
      company: 'Regional Medical Center',
      industry: 'Healthcare',
      challenge: 'Needed to reduce diagnostic errors and improve patient outcomes while maintaining HIPAA compliance.',
      solution: 'Implemented AI-powered diagnostic assistance system with real-time image analysis and predictive analytics.',
      results: [
        'Reduced diagnostic errors by 35%',
        'Improved patient outcomes by 28%',
        'Achieved 99.9% HIPAA compliance',
        'Reduced diagnostic time by 40%'
      ],
      technologies: ['AI/ML', 'Computer Vision', 'HIPAA Compliance', 'Predictive Analytics'],
      image: '🏥',
      readTime: '5 min read'
    },
    {
      id: 2,
      title: 'Financial Services Automation',
      company: 'Global Investment Bank',
      industry: 'Finance',
      challenge: 'Required automated risk assessment and fraud detection across multiple global markets.',
      solution: 'Developed comprehensive AI-driven risk management platform with real-time monitoring and automated alerts.',
      results: [
        'Reduced fraud incidents by 60%',
        'Improved risk assessment accuracy by 45%',
        'Automated 80% of compliance processes',
        'Saved $2.5M annually in operational costs'
      ],
      technologies: ['AI/ML', 'Risk Management', 'Fraud Detection', 'Compliance Automation'],
      image: '🏦',
      readTime: '7 min read'
    },
    {
      id: 3,
      title: 'Manufacturing IoT Integration',
      company: 'Automotive Manufacturer',
      industry: 'Manufacturing',
      challenge: 'Needed to optimize production efficiency and reduce downtime through predictive maintenance.',
      solution: 'Implemented IoT-based monitoring system with AI-powered predictive analytics and automated maintenance scheduling.',
      results: [
        'Reduced unplanned downtime by 55%',
        'Increased production efficiency by 32%',
        'Reduced maintenance costs by 40%',
        'Improved product quality by 25%'
      ],
      technologies: ['IoT', 'Predictive Analytics', 'Automation', 'Quality Control'],
      image: '🏭',
      readTime: '6 min read'
    },
    {
      id: 4,
      title: 'Retail Digital Transformation',
      company: 'National Retail Chain',
      industry: 'Retail',
      challenge: 'Required omnichannel customer experience with personalized recommendations and inventory optimization.',
      solution: 'Built comprehensive e-commerce platform with AI-powered personalization and real-time inventory management.',
      results: [
        'Increased online sales by 150%',
        'Improved customer satisfaction by 45%',
        'Reduced inventory costs by 30%',
        'Enhanced customer retention by 60%'
      ],
      technologies: ['E-commerce', 'AI Personalization', 'Inventory Management', 'Omnichannel'],
      image: '🛍️',
      readTime: '8 min read'
    },
    {
      id: 5,
      title: 'Government Cybersecurity',
      company: 'Federal Agency',
      industry: 'Government',
      challenge: 'Needed to protect sensitive data from advanced cyber threats while maintaining compliance standards.',
      solution: 'Implemented multi-layered cybersecurity framework with AI-powered threat detection and automated response.',
      results: [
        'Prevented 99.9% of cyber attacks',
        'Reduced incident response time by 70%',
        'Achieved 100% compliance standards',
        'Protected 10M+ citizen records'
      ],
      technologies: ['Cybersecurity', 'AI Threat Detection', 'Compliance', 'Automated Response'],
      image: '🏛️',
      readTime: '6 min read'
    },
    {
      id: 6,
      title: 'Education AI Platform',
      company: 'University System',
      industry: 'Education',
      challenge: 'Required personalized learning experiences and automated assessment for 50,000+ students.',
      solution: 'Developed AI-powered learning management system with adaptive content and intelligent tutoring.',
      results: [
        'Improved student performance by 35%',
        'Reduced administrative workload by 50%',
        'Enhanced learning engagement by 60%',
        'Scaled to support 100,000+ students'
      ],
      technologies: ['AI/ML', 'Learning Analytics', 'Adaptive Learning', 'Automated Assessment'],
      image: '🎓',
      readTime: '7 min read'
    }
  ];

  const industries = [
    'All Industries',
    'Healthcare',
    'Finance',
    'Manufacturing',
    'Retail',
    'Government',
    'Education',
    'Technology'
  ];

  const technologies = [
    'All Technologies',
    'AI/ML',
    'Cybersecurity',
    'IoT',
    'Cloud Computing',
    'Data Analytics',
    'Automation',
    'Blockchain'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Header Section */}
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-6">
            Case Studies
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Discover how organizations across industries are transforming their businesses with Zion Tech Group solutions.
          </p>
          
          {/* Filters */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <select className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
              {industries.map((industry) => (
                <option key={industry} value={industry}>{industry}</option>
              ))}
            </select>
            <select className="px-4 py-3 bg-white/10 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500">
              {technologies.map((tech) => (
                <option key={tech} value={tech}>{tech}</option>
              ))}
            </select>
          </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-4b12
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
        </div>
      </section>

<<<<<<< HEAD
      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className="px-6 py-3 rounded-xl border border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/20 transition-all duration-300 font-medium"
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {caseStudies.map((study) => (
              <div key={study.id} className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl overflow-hidden border border-cyan-500/30 hover:border-cyan-400/60 transition-all duration-300 group">
                <div className="aspect-video bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center">
                  <div className="text-cyan-400 text-4xl font-bold">{study.company.charAt(0)}</div>
                </div>
                
                <div className="p-6">
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-xs font-medium mb-3">
                      {study.category}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                      {study.title}
                    </h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {study.company} • {study.industry}
                    </p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300 text-sm mb-4">{study.challenge}</p>
                    
                    <h4 className="font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300 text-sm">{study.solution}</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-400">{study.results.efficiency}</div>
                      <div className="text-xs text-gray-400">Efficiency Gain</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-400">{study.results.costReduction}</div>
                      <div className="text-xs text-gray-400">Cost Reduction</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-blue-400">{study.results.timeToMarket}</div>
                      <div className="text-xs text-gray-400">Faster Delivery</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-purple-400">{study.results.customerSatisfaction}</div>
                      <div className="text-xs text-gray-400">Satisfaction</div>
=======
<<<<<<< HEAD
      {/* Industry Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300">Transforming businesses across diverse sectors with innovative technology solutions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={industry.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${industry.color} rounded-lg flex items-center justify-center mb-4 mx-auto`}>
                  <industry.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400 mb-4">{industry.count} Case Studies</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className={`bg-gradient-to-r ${industry.color} h-2 rounded-full transition-all duration-500`}
                    style={{ width: `${(industry.count / 20) * 100}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
>>>>>>> origin/cursor/website-audit-and-enhancement-2bc0
          </div>
        </div>
<<<<<<< HEAD
      </section>
>>>>>>> origin/main
=======
      </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-8a01

<<<<<<< HEAD
      {/* Case Studies Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
=======
>>>>>>> origin/main
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
<<<<<<< HEAD
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
=======
                      </span>
                    ))}
>>>>>>> origin/main
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
=======
      {/* Industry Overview */}
      <section className="py-20 bg-black/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Trusted Across Industries
            </h2>
            <p className="text-xl text-gray-300">
              Our solutions have delivered measurable results across diverse sectors
            </p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">InnovateLab Success</h3>
            <p className="text-gray-300">Revolutionary autonomous business platform deployment</p>
          </div>
          
          <div className="bg-white/5 backdrop-blur-sm border border-gray-600 rounded-2xl p-6">
            <h3 className="text-xl font-semibold text-white mb-3">DataFlow Innovation</h3>
            <p className="text-gray-300">Cutting-edge technology partnership success</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
=======
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div
              key={study.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:transform hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-cyan-500"
            >
              {/* Category Badge */}
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-xs font-medium rounded-full">
                  {study.category}
                </span>
              </div>

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

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-400 mb-3">Technologies Used</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gray-700/50 text-cyan-400 text-sm rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
                    </div>
                  </div>

                  <Link
<<<<<<< HEAD
                    to={`/case-studies/${study.id}`}
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors duration-300 font-medium group"
                  >
                    Read Full Case Study
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </Link>
                </div>
              </div>
=======
                    to="/contact"
                    className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors duration-300"
                  >
                    Learn More About This Solution
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </div>

              {/* Title */}
              <h4 className="text-xl font-bold text-white mb-4 leading-tight">
                {study.title}
              </h4>

              {/* Challenge */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Challenge</h5>
                <p className="text-gray-300 text-sm">{study.challenge}</p>
              </div>

              {/* Solution */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Solution</h5>
                <p className="text-gray-300 text-sm">{study.solution}</p>
              </div>

              {/* Results */}
              <div className="mb-4">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Results</h5>
                <ul className="space-y-1">
                  {study.results.map((result, index) => (
                    <li key={index} className="flex items-center text-gray-300 text-sm">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {result}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-6">
                <h5 className="text-sm font-semibold text-cyan-400 mb-2">Technologies Used</h5>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 flex items-center justify-center group">
                View Full Case Study
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* All Case Studies Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              All Success Stories
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse our complete collection of client success stories across all industries and technologies.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {caseStudies.map((caseStudy) => (
              <div
                key={caseStudy.id}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${caseStudy.color} flex items-center justify-center`}>
                    <caseStudy.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-gray-400">{caseStudy.industry}</div>
                    <div className="text-sm font-semibold text-white">{caseStudy.company}</div>
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3">{caseStudy.title}</h3>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-blue-400 mb-1">Challenge</h4>
                  <p className="text-gray-300 text-sm line-clamp-2">{caseStudy.challenge}</p>
                </div>
                
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-green-400 mb-1">Results</h4>
                  <ul className="space-y-1">
                    {caseStudy.results.slice(0, 2).map((result, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300 text-xs">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to={`/case-studies/${caseStudy.id}`}
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 text-sm"
                >
                  Read More
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Link>
              </div>
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30 rounded-3xl p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful organizations that have transformed their operations with our solutions.
=======
      {/* Industry Breakdown */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Success Across Industries
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Our AI solutions have delivered measurable results across diverse industry sectors.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mb-4">
                  <industry.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{industry.name}</h3>
                <p className="text-gray-400">{industry.count} success stories</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-900/50 to-blue-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Hear directly from the leaders who have experienced our AI transformation firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/50 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-gray-300 mb-6 italic">
                  "{testimonial.quote}"
                </blockquote>
                
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.position}</div>
                </div>
>>>>>>> origin/cursor/website-audit-and-enhancement-82f7
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
<<<<<<< HEAD
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
=======
>>>>>>> origin/main

          {filteredCaseStudies.length === 0 && (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-semibold text-gray-300 mb-2">No Case Studies Found</h3>
              <p className="text-gray-500">Try adjusting your filters to see more results.</p>
            </div>
          )}
<<<<<<< HEAD
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
=======
>>>>>>> origin/main
        </div>
      </section>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
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
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
<<<<<<< HEAD
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl font-semibold text-lg hover:from-cyan-400 hover:to-blue-400 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/30 inline-flex items-center"
              >
                Start Your Transformation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border border-cyan-400/50 text-cyan-400 rounded-xl font-semibold text-lg hover:bg-cyan-400/20 transition-all duration-300"
              >
                Explore Our Solutions
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;
=======
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
=======
=======
            className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-3xl p-12 border border-cyan-500/20"
          >
            <Award className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our solutions can transform your business and deliver 
              measurable results like the ones you see above.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
=======
};

export default CaseStudies;
>>>>>>> origin/cursor/website-audit-and-enhancement-ac08
>>>>>>> 2569ab8784f28177b60ebf1fb896001693b757b7
