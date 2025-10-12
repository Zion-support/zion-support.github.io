'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Star,
  TrendingUp,
  Shield,
  Brain,
  Cloud,
  Code,
  Smartphone,
  BarChart3,
  MessageSquare,
  FileText,
  Mail,
  Phone,
  Award,
  Rocket,
  Target,
  Settings,
  Globe,
  Zap,
  DollarSign
} from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      id: 'senior-ai-engineer',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for our micro SAAS platforms.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      id: 'cloud-architect',
      title: 'Cloud Solutions Architect',
      department: 'Cloud & Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$140,000 - $200,000',
      description: 'Design and implement scalable cloud architectures for our enterprise clients and micro SAAS services.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of security best practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      icon: <Cloud className="w-8 h-8 text-blue-400" />
    },
    {
      id: 'frontend-developer',
      title: 'Senior Frontend Developer',
      department: 'Product Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$90,000 - $130,000',
      description: 'Build beautiful, responsive user interfaces for our micro SAAS applications using modern web technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in frontend development',
        'Expertise in React, TypeScript, and Next.js',
        'Experience with Tailwind CSS and modern UI libraries',
        'Strong understanding of responsive design'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      icon: <Code className="w-8 h-8 text-green-400" />
    },
    {
      id: 'devops-engineer',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80,000 - $120,000',
      description: 'Manage our cloud infrastructure, CI/CD pipelines, and ensure high availability of our services.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in DevOps',
        'Expertise in AWS, Docker, and Kubernetes',
        'Experience with CI/CD tools (GitHub Actions, Jenkins)',
        'Strong scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      icon: <Settings className="w-8 h-8 text-purple-400" />
    },
    {
      id: 'data-scientist',
      title: 'Data Scientist',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$100,000 - $150,000',
      description: 'Analyze data to drive business insights and develop predictive models for our AI-powered solutions.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years experience in data science',
        'Expertise in Python, R, and SQL',
        'Experience with machine learning frameworks',
        'Strong analytical and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />
    },
    {
      id: 'product-manager',
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$110,000 - $160,000',
      description: 'Lead product strategy and development for our micro SAAS platforms and AI solutions.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '5+ years experience in product management',
        'Experience with SAAS products',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      icon: <Target className="w-8 h-8 text-red-400" />
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity participation',
      icon: <DollarSign className="w-6 h-6 text-green-400" />
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: <Shield className="w-6 h-6 text-blue-400" />
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules',
      icon: <Globe className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Professional Growth',
      description: 'Learning budget and career development opportunities',
      icon: <TrendingUp className="w-6 h-6 text-orange-400" />
    },
    {
      title: 'Modern Technology',
      description: 'Work with cutting-edge AI and cloud technologies',
      icon: <Zap className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'Team Culture',
      description: 'Collaborative, innovative, and inclusive environment',
      icon: <Users className="w-6 h-6 text-pink-400" />
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '15+', label: 'Countries', icon: <Globe className="w-6 h-6" /> },
    { number: '95%', label: 'Employee Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '100%', label: 'Remote Friendly', icon: <MapPin className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our AI & Technology Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI solutions, cloud technologies, and micro SAAS platforms. Explore our open positions and benefits." />
        <meta name="keywords" content="careers, jobs, ai engineer, cloud architect, frontend developer, devops, data scientist, zion tech group" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join Zion Tech Group and work on cutting-edge AI solutions and cloud technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <meta property="og:image" content="https://ziontechgroup.com/og-careers.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers - Zion Tech Group" />
        <meta name="twitter:description" content="Join Zion Tech Group and work on cutting-edge AI solutions and cloud technologies." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-careers.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 px-4 py-12 sm:py-16 lg:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                Join Our Team
              </h1>
              <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-6 sm:mb-8 px-4">
                Build the future of AI and cloud technology with us. Join a team of passionate innovators working on cutting-edge solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  View Open Positions
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link 
                  to="/about" 
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                >
                  Learn About Us
                </Link>
              </div>
            </div>

            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
              {stats.map((stat, index) => (
                <div key={index} className="text-center px-2">
                  <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs sm:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Why Work With Us?</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                We offer competitive benefits and a culture that values innovation, growth, and work-life balance.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group text-center">
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300 flex justify-center">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Open Positions</h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto px-4">
                Explore our current job openings and find the perfect role for you
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="group-hover:scale-110 transition-transform duration-300">{position.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white group-hover:text-purple-300 transition-colors">{position.title}</h3>
                        <p className="text-cyan-400 text-sm">{position.department}</p>
                      </div>
                    </div>
                    <span className="text-lg font-bold text-white">{position.salary}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">{position.type}</span>
                    <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm">{position.experience}</span>
                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm">{position.location}</span>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link 
                      to="/contact"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 text-center flex items-center justify-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                    <Link 
                      to="/contact"
                      className="flex-1 border-2 border-white text-white px-4 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 lg:py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 px-4">Don't See Your Perfect Role?</h2>
                <p className="text-lg sm:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
                  We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link 
                    to="/contact" 
                    className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                  >
                    Send Your Resume
                  </Link>
                  <Link 
                    to="/about" 
                    className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
                  >
                    Learn About Our Culture
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}