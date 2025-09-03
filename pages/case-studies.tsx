import React from 'react';
<<<<<<< HEAD
import { motion } from 'framer-motion';
import { SEO } from '../components/SEO';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Badge } from '../components/ui/Badge';
import { 
  TrendingUp, Users,
  DollarSign, Clock,
  Target, CheckCircle,
  ArrowRight, Star,
  Award, BarChart3,
  Brain, Shield,
  Cloud, Database,
  Network, Zap,
  Globe, Phone,
  Mail, Eye,
  Download, Share2,
  Filter, Search
} from 'lucide-react';
=======
import Head from 'next/head';
import Link from 'next/link';
<<<<<<< HEAD
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
<<<<<<< HEAD
import Navigation from '../components/layout/EnhancedNavigation';
import Footer from '../components/layout/Footer';
import { ArrowRight, BarChart3, Brain, CheckCircle, Clock, DollarSign, Globe, Shield, TrendingUp, Users } from 'lucide-react';
=======
import { ArrowRight, TrendingUp, Users, Clock, Award, CheckCircle, Star, Building, Target, Lightbulb, Shield, Cloud } from 'lucide-react';
>>>>>>> main
>>>>>>> main

>>>>>>> main
export default function CaseStudies() {
  const caseStudies = [
<<<<<<< HEAD
    {
<<<<<<< HEAD
      id: 1, title: "AI-Powered Supply Chain Optimization for Global Manufacturing",
      company: "TechCorp Industries", industry: "Manufacturing",
      challenge: "Inefficient supply chain operations leading to 30% inventory waste and delayed deliveries", solution: "Implemented AI-driven demand forecasting and autonomous logistics optimization",
      results: [
        "40% reduction in inventory costs", "60% improvement in delivery times",
        "25% increase in customer satisfaction", "$2.5M annual cost savings"
      ], duration: "6 months",
      teamSize: "12 experts", technologies: ["Machine Learning", "IoT", "Predictive Analytics", "Cloud Computing"], image: "/api/placeholder/600/400",
      featured: true
    }, {
      id: 2,
      title: "Healthcare AI Platform for Diagnostic Accuracy", company: "MedTech Solutions",
      industry: "Healthcare", challenge: "High diagnostic error rates and lengthy patient wait times",
      solution: "Developed AI-powered medical imaging analysis and clinical decision support system", results: [
        "95% diagnostic accuracy improvement",
        "50% reduction in patient wait times", "30% increase in patient throughput",
        "Compliance with HIPAA regulations"
      ], duration: "8 months",
      teamSize: "15 experts", technologies: ["Computer Vision", "Deep Learning", "Medical AI", "Data Security"], image: "/api/placeholder/600/400",
      featured: false
    }, {
      id: 3,
      title: "Financial Services AI Risk Assessment Platform", company: "FinSecure Bank",
      industry: "Financial Services", challenge: "Manual risk assessment processes causing delays and inconsistencies",
      solution: "Built comprehensive AI risk assessment and fraud detection system", results: [
        "80% faster loan processing",
        "90% reduction in false positives", "35% decrease in fraud losses",
        "Full regulatory compliance"
      ], duration: "10 months",
      teamSize: "18 experts", technologies: ["Risk Analytics", "Fraud Detection", "Regulatory AI", "Real-time Processing"], image: "/api/placeholder/600/400",
      featured: false
    }, {
      id: 4,
      title: "Retail AI Customer Experience Transformation", company: "ShopSmart Retail",
      industry: "Retail", challenge: "Poor customer experience and low conversion rates",
      solution: "Implemented AI-powered personalization and customer service automation", results: [
        "45% increase in conversion rates",
        "60% improvement in customer satisfaction", "25% reduction in support costs",
        "40% increase in average order value"
      ], duration: "5 months",
      teamSize: "10 experts", technologies: ["Personalization AI", "NLP", "Recommendation Engines", "Chatbots"], image: "/api/placeholder/600/400",
      featured: false
    }, {
      id: 5,
      title: "Energy Sector Predictive Maintenance System", company: "PowerGrid Energy",
      industry: "Energy", challenge: "Unexpected equipment failures causing costly downtime",
      solution: "Deployed AI-powered predictive maintenance and asset optimization platform", results: [
        "70% reduction in unplanned downtime",
        "50% decrease in maintenance costs", "35% improvement in equipment efficiency",
        "$5M annual savings"
      ], duration: "7 months",
      teamSize: "14 experts", technologies: ["IoT Analytics", "Predictive Maintenance", "Asset Optimization", "Edge Computing"], image: "/api/placeholder/600/400",
      featured: false
    }, {
      id: 6,
      title: "Education AI Learning Platform", company: "EduTech Academy",
      industry: "Education", challenge: "One-size-fits-all learning approach limiting student success",
      solution: "Created personalized AI learning platform with adaptive content delivery", results: [
        "40% improvement in student performance",
        "60% increase in course completion rates", "50% reduction in learning time",
        "95% student satisfaction rate"
      ], duration: "9 months",
      teamSize: "16 experts", technologies: ["Adaptive Learning", "Educational AI", "Content Personalization", "Learning Analytics"], image: "/api/placeholder/600/400",
      featured: false
=======
      title: 'Enterprise Cloud Migration Success', client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing', challenge: 'Legacy system migration and digital transformation',
      solution: 'Complete cloud migration with AI-powered automation', results: [
        '60% reduction in operational costs',
        '40% improvement in system performance', '99.9% uptime achieved',
        '50% faster deployment cycles'
      ], duration: '6 months',
      team: '12 specialists', icon: Cloud,
=======
  {
      title: 'Enterprise Cloud Migration Success',
      client: 'Fortune 500 Manufacturing Company',
      industry: 'Manufacturing',
      challenge: 'Legacy system migration and digital transformation',
      solution: 'Complete cloud migration with AI-powered automation',
      results: [
        '60% reduction in operational costs,40% improvement in system performance,99.9% uptime achieved,50% faster deployment cycles'
      ],
      duration: '6 months',
      team: '12 specialists',
      icon: Cloud,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'AI-Powered Customer Service Revolution',
      client: 'Leading E-commerce Platform', industry: 'E-commerce',
      challenge: 'High customer service volume and response times', solution: 'AI chatbot implementation with natural language processing',
      results: [
<<<<<<< HEAD
        '80% reduction in response time', '90% customer satisfaction rate',
        '24/7 automated support', '70% cost savings on support staff'
      ], duration: '4 months',
      team: '8 specialists', icon: Target,
=======
        '80% reduction in response time,90% customer satisfaction rate,24/7 automated support,70% cost savings on support staff'
      ],
      duration: '4 months',
      team: '8 specialists',
      icon: Target,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'Cybersecurity Transformation',
      client: 'Financial Services Firm', industry: 'Financial Services',
      challenge: 'Advanced threat protection and compliance', solution: 'Comprehensive security framework with AI monitoring',
      results: [
<<<<<<< HEAD
        '99.8% threat detection accuracy', 'Zero security breaches',
        'SOC 2 Type II compliance', '50% reduction in security incidents'
      ], duration: '8 months',
      team: '15 specialists', icon: Shield,
=======
        '99.8% threat detection accuracy,Zero security breaches,SOC 2 Type II compliance,50% reduction in security incidents'
      ],
      duration: '8 months',
      team: '15 specialists',
      icon: Shield,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'Data Analytics Platform Development',
      client: 'Healthcare Provider Network', industry: 'Healthcare',
      challenge: 'Patient data analysis and predictive insights', solution: 'Custom analytics platform with machine learning',
      results: [
<<<<<<< HEAD
        '30% improvement in patient outcomes', '25% reduction in readmission rates',
        'Real-time data insights', 'HIPAA compliance maintained'
      ], duration: '10 months',
      team: '10 specialists', icon: TrendingUp,
=======
        '30% improvement in patient outcomes,25% reduction in readmission rates,Real-time data insights,HIPAA compliance maintained'
      ],
      duration: '10 months',
      team: '10 specialists',
      icon: TrendingUp,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'Micro SaaS Development',
      client: 'Startup Technology Company', industry: 'Technology',
      challenge: 'Rapid product development and market entry', solution: 'Custom micro SaaS platform with scalable architecture',
      results: [
<<<<<<< HEAD
        '3x faster time to market', '500% user growth in 6 months',
        '99.5% platform reliability', 'Seamless scalability achieved'
      ], duration: '5 months',
      team: '6 specialists', icon: Lightbulb,
=======
        '3x faster time to market,500% user growth in 6 months,99.5% platform reliability,Seamless scalability achieved'
      ],
      duration: '5 months',
      team: '6 specialists',
      icon: Lightbulb,
>>>>>>> main
      image: '/api/placeholder/600/400'
    }, {
      title: 'Digital Transformation Initiative',
      client: 'Traditional Retail Chain', industry: 'Retail',
      challenge: 'Digital modernization and omnichannel experience', solution: 'End-to-end digital transformation with AI integration',
      results: [
<<<<<<< HEAD
        '45% increase in online sales', '60% improvement in customer engagement',
        'Unified omnichannel experience', '40% reduction in operational costs'
      ], duration: '12 months',
      team: '20 specialists', icon: Building,
=======
        '45% increase in online sales,60% improvement in customer engagement,Unified omnichannel experience,40% reduction in operational costs'
      ],
      duration: '12 months',
      team: '20 specialists',
      icon: Building,
>>>>>>> main
      image: '/api/placeholder/600/400'
>>>>>>> main
    }
  ];

  const industries = [
<<<<<<< HEAD
    { name: "All Industries", count: 24, active: true }, { name: "Manufacturing", count: 6, active: false },
    { name: "Healthcare", count: 4, active: false }, { name: "Financial Services", count: 5, active: false },
    { name: "Retail", count: 3, active: false }, { name: "Energy", count: 3, active: false },
    { name: "Education", count: 2, active: false }, { name: "Other", count: 1, active: false }
=======
<<<<<<< HEAD
    { name: 'Manufacturing', count: 15, icon: Building }, { name: 'Healthcare', count: 12, icon: Shield },
    { name: 'Financial Services', count: 18, icon: TrendingUp }, { name: 'E-commerce', count: 22, icon: Target },
    { name: 'Technology', count: 25, icon: Lightbulb }, { name: 'Retail', count: 14, icon: Users }
>>>>>>> main
  ];

  const testimonials = [
    {
      quote: "Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations, and we&apos;ve seen significant improvements in efficiency and cost savings.",
=======
  { name: 'Manufacturing', count: 15, icon: Building },
    { name: 'Healthcare', count: 12, icon: Shield },
    { name: 'Financial Services', count: 18, icon: TrendingUp },
    { name: 'E-commerce', count: 22, icon: Target },
    { name: 'Technology', count: 25, icon: Lightbulb },
    { name: 'Retail', count: 14, icon: Users }
  ];

  const testimonials = [
  {
      quote: "Zion Tech Group transformed our entire IT infrastructure. The results exceeded our expectations, and we've seen significant improvements in efficiency and cost savings.",
>>>>>>> main
      author: "Sarah Johnson",
      title: "CTO", company: "Manufacturing Corp",
      rating: 5
    }, {
      quote: "Their AI solutions revolutionized our customer service operations. We now provide 24/7 support with higher satisfaction rates than ever before.",
      author: "Michael Chen", title: "VP of Operations",
      company: "E-commerce Platform", rating: 5
    },
    {
      quote: "The cybersecurity implementation was flawless. We feel confident knowing our data is protected by the most advanced security measures available.", author: "Dr. Emily Rodriguez",
      title: "Chief Information Officer", company: "Healthcare Network",
      rating: 5
    }
  ];

  return (
    <>
      <Head>
        <title>Case Studies - Zion Tech Group</title>
        <meta name="description" content="Explore our successful client projects and case studies. See how Zion Tech Group delivers results across industries." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      
<<<<<<< HEAD
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Award className="w-4 h-4 mr-2" />
              Success Stories
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Case Studies
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Discover how we&apos;ve helped businesses across industries achieve remarkable results with AI-powered solutions.''
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured Case Study */}
      {featuredCaseStudy && (
        <section className="py-20 px-4 sm: px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8">Featured Success Story</h2>
              <Card className="overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative h-64 lg:h-full">
                    <img 
                      src={featuredCaseStudy.image} 
                      alt={featuredCaseStudy.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
                        <Star className="w-4 h-4 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  </div>
                  <div className="p-8">
                    <div className="flex items-center mb-4">
                      <Badge variant="outline" className="mr-3">{featuredCaseStudy.industry}</Badge>
                      <span className="text-gray-400 text-sm">{featuredCaseStudy.duration}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{featuredCaseStudy.title}</h3>
                    <p className="text-gray-300 mb-6">{featuredCaseStudy.solution}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{featuredCaseStudy.results[0]}</div>
                        <div className="text-sm text-gray-400">Key Result</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{featuredCaseStudy.teamSize}</div>
                        <div className="text-sm text-gray-400">Team Size</div>
                      </div>
                    </div>
                    
                    <Button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                      Read Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
=======
      <main className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 py-20 sm:py-32">
            <div className="text-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                Success Stories
              </h1>
              <p className="text-xl sm:text-2xl text-blue-100 max-w-4xl mx-auto mb-8">
                Discover how we&apos;ve helped businesses across industries achieve their goals through innovative technology solutions.'
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
                <Link href="/contact">
                  <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2 inline" />
                  </button>
                </Link>
                <Link href="#case-studies">
                  <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 text-lg font-semibold rounded-lg transition-colors">
                    View Case Studies
                  </button>
                </Link>
              </div>
            </div>
>>>>>>> main
          </div>
        </section>

<<<<<<< HEAD
      {/* Case Studies Grid */}
      <section className="py-20 px-4 sm: px-6 lg:px-8 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content */}
            <div className="lg:w-2/3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8"
              >
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-3xl font-bold text-white">All Case Studies</h2>
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <Search className="w-5 h-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        placeholder="Search case studies..."
                        className="pl-10 pr-4 py-2 rounded-lg bg-slate-700 border border-slate-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>
                    <Button variant="outline" size="sm">
                      <Filter className="w-4 h-4 mr-2" />
                      Filter
                    </Button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {caseStudies.filter(study => !study.featured).map((study, index) => (
                    <motion.div
                      key={study.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * index }}
                    >
                      <Card className="overflow-hidden h-full">
                        <div className="relative h-48">
                          <img 
                            src={study.image} 
                            alt={study.title}
                            className="w-full h-full object-cover"
                          />
                          <div className="absolute top-4 left-4">
                            <Badge variant="outline">{study.industry}</Badge>
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-white mb-3">{study.title}</h3>
                          <p className="text-gray-300 mb-4 text-sm">{study.solution}</p>
                          
                          <div className="grid grid-cols-2 gap-4 mb-4">
                            <div className="text-center">
                              <div className="text-lg font-bold text-green-400">{study.results[0]}</div>
                              <div className="text-xs text-gray-400">Key Result</div>
                            </div>
                            <div className="text-center">
                              <div className="text-lg font-bold text-blue-400">{study.duration}</div>
                              <div className="text-xs text-gray-400">Duration</div>
                            </div>
                          </div>
                          
                          <div className="flex flex-wrap gap-2 mb-4">
                            {study.technologies.slice(0, 3).map((tech, techIndex) => (
                              <Badge key={techIndex} variant="secondary" className="text-xs">
                                {tech}
                              </Badge>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between">
                            <Button variant="outline" size="sm">
                              <Eye className="w-4 h-4 mr-2" />
                              View Details
                            </Button>
                            <div className="flex gap-2">
                              <Button variant="outline" size="sm">
                                <Download className="w-4 h-4" />
                              </Button>
                              <Button variant="outline" size="sm">
                                <Share2 className="w-4 h-4" />
                              </Button>
                            </div>
                          </div>
                        </div>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg: w-1/3">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="space-y-8"
              >
                {/* Industries Filter */}
                <Card className="p-6">
                  <h3 className="text-xl font-bold text-white mb-4">Filter by Industry</h3>
                  <div className="space-y-2">
                    {industries.map((industry, index) => (
                      <button
                        key={industry.name}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          industry.active 
                            ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white' 
                            : 'text-gray-300 hover:bg-slate-700'
                        }`}
                      >
                        <span>{industry.name}</span>
                        <Badge variant="secondary" className="text-xs">
                          {industry.count}
                        </Badge>
                      </button>
                    ))}
=======
        {/* Industries We Serve */}
        <section className="py-20 sm:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Industries We Serve
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Proven expertise across diverse industries
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <industry.icon className="w-8 h-8 text-white" />
>>>>>>> main
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{industry.name}</h3>
                  <p className="text-blue-600 font-semibold">{industry.count} Projects</p>
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join the ranks of successful businesses that have transformed their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-purple-600 text-white">
                <Phone className="w-5 h-5 mr-2" />
                Start Your Project
              </Button>
              <Button size="lg" variant="outline">
                <Mail className="w-5 h-5 mr-2" />
                Download Case Study
              </Button>
=======
        {/* Case Studies */}
        <section id="case-studies" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Featured Case Studies
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from real clients
              </p>
>>>>>>> main
            </div>
            
            <div className="space-y-16">
              {caseStudies.map((study, index) => (
                <div key={index} className={`flex flex-col lg: flex-row gap-8 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                  <div className="lg:w-1/2">
                    <div className="bg-gray-200 rounded-xl h-80 flex items-center justify-center">
                      <study.icon className="w-24 h-24 text-gray-400" />
                    </div>
                  </div>
                  <div className="lg:w-1/2 flex flex-col justify-center">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                        <study.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
                          {study.industry}
                        </span>
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{study.title}</h3>
                    <p className="text-lg text-gray-600 mb-6 font-semibold">{study.client}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Challenge:</h4>
                      <p className="text-gray-600 mb-4">{study.challenge}</p>
                      <h4 className="text-lg font-semibold text-gray-900 mb-2">Solution:</h4>
                      <p className="text-gray-600 mb-4">{study.solution}</p>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3">Results:</h4>
                      <ul className="space-y-2">
                        {study.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-center">
                            <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                            <span className="text-gray-700">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="flex items-center space-x-6 text-sm text-gray-500 mb-6">
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {study.duration}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {study.team}
                      </div>
                    </div>
                    
                    <Link href="/contact">
                      <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover: from-blue-700 hover:to-purple-700 transition-all duration-300">
                        Start Similar Project
                        <ArrowRight className="w-4 h-4 ml-2 inline" />
                      </button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Client Testimonials
              </h2>
              <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
                What our clients say about working with us
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-6 italic">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{testimonial.author}</p>
                      <p className="text-gray-600">{testimonial.title}</p>
                      <p className="text-blue-600 font-semibold">{testimonial.company}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
          <div className="max-w-7xl mx-auto px-4 sm: px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve similar results for your business.'
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">
              <Link href="/contact">
                <button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2 inline" />
                </button>
              </Link>
              <Link href="/services">
                <button className="border-2 border-white text-white hover:bg-white hover:text-blue-600 px-8 py-4 rounded-lg font-semibold transition-colors text-lg">
                  View Our Services
                </button>
              </Link>
            </div>
          </div>
        </section>
      </main>
</>
  );


