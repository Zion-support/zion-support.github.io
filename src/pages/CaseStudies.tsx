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

  const caseStudies = [
    {
      id: 1,
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
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
        </div>
      </section>

      {/* Case Studies Grid */}
<<<<<<< HEAD
<<<<<<< HEAD
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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
                        </li>
                      ))}
                    </ul>
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
                  </div>
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
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
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
        </div>
      </section>

      {/* CTA Section */}
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
        </div>
      </section>
    </div>
  );
}