<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react';
<<<<<<< HEAD

<<<<<<< HEAD
import EnhancedSEO from '../components/EnhancedSEO';
=======
'use client';
import React from "react";
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0738
import { Helmet } from 'react-helmet-async';

export default function CareersPage() {

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Careers solutions by Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <div className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold mb-8">Careers</h1>
        <div className="prose prose-invert max-w-none">
          <p className="text-xl text-gray-300 mb-8">
            Discover our comprehensive careers solutions designed to meet your business needs.
          </p>
<<<<<<< HEAD
          
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
=======

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Be part of the future of technology. Join our team of innovators, creators, and problem-solvers who are building the next generation of AI and IT solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {culture.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.description}</div>
=======
'use client'
import React from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, ArrowRight, CheckCircle, Zap, Brain, Code, Shield } from 'lucide-react'

const CareersPage: React.FC = () => {
  const openPositions = [
<<<<<<< HEAD
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
=======
    {}
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'full-time',
      level: 'Senior',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Strong Python and TensorFlow skills',
        'Experience with cloud platforms',
        'PhD in Computer Science preferred'
      ],
      benefits: [
        'Competitive salary + equity',
        'Health, dental, vision insurance',
        '401 k with company matching',
        'Flexible work arrangements'
      ],
      postedDate: '2024-01-15',
      salary: '$120,000 - $180,000',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      experience: '5+ years',
      description: 'Design and implement cutting-edge AI solutions for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in machine learning and AI',
        'Proficiency in Python, TensorFlow, and PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
<<<<<<< HEAD
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
=======
    {}
      id: 2,
      title: 'AI Research Scientist',
      department: 'ai-research',
      location: 'san-francisco-ca',
      type: 'full-time',
      level: 'Senior',
      description: 'Conduct groundbreaking research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in AI/ML or related field',
        'Strong publication record',
        'Experience with deep learning',
        'Knowledge of quantum computing'
      ],
      benefits: [
        'Research budget and resources',
        'Conference attendance',
        'Patent filing support',
        'Collaboration opportunities'
      ],
      postedDate: '2024-01-12',
      salary: '$150,000 - $220,000',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      experience: '3+ years',
      description: 'Build scalable web applications and APIs for our AI platform.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with React, Node.js, and TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
<<<<<<< HEAD
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage and scale our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience with AWS, Docker, and Kubernetes',
        'Experience with CI/CD pipelines and monitoring',
        'Knowledge of infrastructure as code (Terraform, CloudFormation)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
=======
    {}
      id: 3,
      title: 'Data Scientist',
      department: 'data-science',
      location: 'remote',
      type: 'full-time',
      level: 'Mid',
      description: 'Analyze complex data sets and build predictive models for business insights.',
      requirements: [
        '3+ years data science experience',
        'Strong statistical background',
        'Python/R programming skills',
        'Experience with big data tools'
      ],
      benefits: [
        'Learning and development budget',
        'Mentorship program',
        'Career growth opportunities',
        'Work-life balance'
      ],
      postedDate: '2024-01-10',
      salary: '$90,000 - $130,000',
      experience: '3+ years',
      skills: ['Python', 'R', 'SQL', 'Machine Learning', 'Statistics']
    },
    {}
      id: 4,
      title: 'Product Manager',
      department: 'product',
      location: 'middletown-de',
      type: 'full-time',
      level: 'Senior',
      description: 'Lead product strategy and development for AI-powered solutions.',
      requirements: [
        '5+ years product management',
        'Experience with AI products',
        'Strong analytical skills',
        'MBA preferred'
      ],
      benefits: [
        'Product ownership',
        'Cross-functional collaboration',
        'Customer interaction',
        'Strategic impact'
      ],
      postedDate: '2024-01-08',
      salary: '$110,000 - $160,000',
      experience: '5+ years',
      skills: ['Product Strategy', 'AI Products', 'Analytics', 'Leadership']
    },
    {}
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'remote',
      type: 'full-time',
      level: 'Mid',
      description: 'Build and maintain scalable cloud infrastructure for AI applications.',
      requirements: [
        '3+ years DevOps experience',
        'AWS/Azure/GCP expertise',
        'Kubernetes and Docker',
        'Infrastructure as Code'
      ],
      benefits: [
        'Cutting-edge technology',
        'Scalable systems',
        'Automation focus',
        'Team collaboration'
      ],
      postedDate: '2024-01-05',
      salary: '$85,000 - $125,000',
      experience: '3+ years',
      skills: ['AWS', 'Kubernetes', 'Docker', 'Terraform', 'CI/CD']
    },
    {}
      id: 6,
      title: 'UX Designer',
      department: 'product',
      location: 'san-francisco-ca',
      type: 'full-time',
      level: 'Mid',
      description: 'Design intuitive user experiences for AI-powered applications.',
      requirements: [
        '3+ years UX design experience',
        'Portfolio of AI/ML products',
        'Figma and prototyping skills',
        'User research experience'
      ],
      benefits: [
        'Creative freedom',
        'User impact',
        'Design system ownership',
        'Cross-team collaboration'
      ],
      postedDate: '2024-01-03',
      salary: '$80,000 - $120,000',
      experience: '3+ years',
      skills: ['Figma', 'User Research', 'Prototyping', 'AI/ML UX']
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  ]

  const benefits = [
<<<<<<< HEAD
    {
<<<<<<< HEAD
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries, equity, and performance bonuses.',
      icon: Star
    },
    {
=======
    {}
      icon: Award,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity participation and performance bonuses'},
    {}
      icon: Heart,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.',
      icon: Heart
    },
<<<<<<< HEAD
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.',
=======
    {}
      icon: Home,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'},
    {}
      icon: Brain,
      title: 'Learning & Growth',
      description: 'Annual learning budget, conference attendance, and mentorship programs'
    },
    {}
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and company retreats'},
    {}
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that make a real difference in the world'}
  ];

  const culture = [
    {}
      title: 'Innovation First',
      description: 'We encourage experimentation and reward bold ideas that push boundaries',
      icon: Sparkles;
    },
    {}
      title: 'Collaboration',
      description: 'We believe the best solutions come from diverse teams working together',
      icon: Users;
    },
    {}
      title: 'Growth Mindset',
      description: 'We invest in our people\'s development and provide opportunities to learn',
      icon: TrendingUp
    },
    {}
      title: 'Work-Life Balance',
      description: 'We understand that great work comes from well-rested, happy people',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
      icon: Clock
    },
    {
      title: 'Professional Growth',
      description: 'Learning budget, conference attendance, and mentorship opportunities.',
      icon: Award
    },
    {
      title: 'Modern Tools',
      description: 'Latest technology and tools to help you do your best work.',
      icon: Code
    },
    {
      title: 'Team Culture',
      description: 'Collaborative, inclusive environment where everyone can thrive.',
      icon: Users
=======
      icon: Star,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results',
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We create solutions that make a real difference',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
    }
  ]

<<<<<<< HEAD
  const stats = [
    { label: 'Open Positions', value: '15+', icon: Briefcase },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Remote Friendly', value: '100%', icon: MapPin },
    { label: 'Employee Satisfaction', value: '98%', icon: Star }
  ]

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, developer, remote work, Zion Tech Group" />
      </Helmet>
<<<<<<< HEAD
      
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-16">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of a team that's shaping the future of AI and technology. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm rounded-lg px-4 py-2 border border-slate-700">
                  <stat.icon className="w-5 h-5 text-cyan-400" />
                  <span className="text-white font-semibold">{stat.value}</span>
                  <span className="text-gray-400 text-sm">{stat.label}</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
                </div>
=======
  const getDepartmentIcon = (department: string) => {}
    const icons = {}
      engineering: Code,

  const getDepartmentIcon = (department: string) => {
    const icons = {
      engineering: Code;
      'ai-research': Brain,
      'data-science': BarChart,
      product: Target;
    };
    return icons[department as keyof typeof icons] || Briefcase;
  };

  const getDepartmentColor = (department: string) => {}
    const colors = {}
      engineering: 'text-blue-400',
      'ai-research': 'text-purple-400',
      'data-science': 'text-green-400',
      product: 'text-orange-400'};
    return colors[department as keyof typeof colors] || 'text-gray-400';
  };

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden"></section>
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse"></h1>
              Join Our Team;
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed"></p>
              Build the future of AI with us. Join a team of passionate innovators;
              working on cutting-edge technology that transforms businesses worldwide.
            </p>
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">100+ Open Positions</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Home className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Remote-First</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Award className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Top Benefits</span>
              </div>)
            </div>)
          </div>)
        </div>)
      </section>)),
      {/* Filters */}
      <section className="py-8"></section>
        <div className="container mx-auto px-4"></section>
          <div className="max-w-6xl mx-auto"></div>
            <div className="flex flex-col md:flex-row gap-4 mb-8"></div>
              <div className="flex-1 relative"></div>
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input;
                  type="text"
                  placeholder="Search positions..."
                  className="w-full pl-10 pr-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="flex gap-2 overflow-x-auto">{departments.map((dept) => (</div><button
                    key={dept.name}
                    onClick={() =>setSelectedDepartment(dept.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                      selectedDepartment === dept.name;
                        ? 'bg-cyan-500 text-white'}
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
              <div className="flex gap-2 overflow-x-auto"></div>
                {departments.map((dept) => (}
                  <button
                    key={dept.name}
                    onClick={() => setSelectedDepartment(dept.name)}
                    className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${}
                      selectedDepartment === dept.name
                        ? 'bg-cyan-500 text-white'
                        : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                    }`}
                  ></button>
                    {dept.label} ({dept.count})</button>
                  </button>
                ))}
              </div>
            </div>
            <div className="flex gap-2 overflow-x-auto"></div>
              <div className="flex gap-2 overflow-x-auto">{locations.map((location) => (</div><button
                  key={location.name}
                  onClick={() =>setSelectedLocation(location.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedLocation === location.name;
                      ? 'bg-purple-500 text-white'}
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
              {locations.map((location) => (}
                <button
                  key={location.name}
                  onClick={() => setSelectedLocation(location.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${}
                    selectedLocation === location.name
                      ? 'bg-purple-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                ></button>
                  {location.label} ({location.count})</button>
                </button>
              ))}
            </div>
            <div className="flex gap-2 overflow-x-auto mt-2"></div>
            <div className="flex gap-2 overflow-x-auto mt-2">{jobTypes.map((type) => (</div><button
                  key={type.name}
                  onClick={() =>setSelectedType(type.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${
                    selectedType === type.name;
                      ? 'bg-green-500 text-white'}
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'}
              {jobTypes.map((type) => (}
                <button
                  key={type.name}
                  onClick={() => setSelectedType(type.name)}
                  className={`px-4 py-2 rounded-lg font-medium whitespace-nowrap transition-all ${}
                    selectedType === type.name
                      ? 'bg-green-500 text-white'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                ></button>
                  {type.label} ({type.count})</button>
                </button>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              ))}
            </div>
=======

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Work on cutting-edge AI and IT solutions that transform businesses worldwide.
          </p>
        </div></div></div></div>
      </section>

<<<<<<< HEAD
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center space-x-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{position.department}</span>
                  </div></div></div></div></div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
=======
      {/* Open Positions */}
      <section className="py-20"></section>
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-6"></div>
              {filteredPositions.map((position) => (}
                <div key={position.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4"></div>
                    <div className="flex-1"></div>
                      <div className="flex items-center space-x-3 mb-2"></div>
                        <h3 className="text-2xl font-bold text-white">{position.title}<span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">{position.level}</span>
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
            <div className="space-y-6"></div>
              {filteredPositions.map((position) => (
                <div key={position.id} className="bg-slate-800/50 rounded-lg p-6 hover: bg-slate-700/50 transition-all duration-300">,
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">,
                    <div className="flex-1">,
                      <div className="flex items-center space-x-3 mb-2">,
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                        <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium"></span>
                          {position.level}
        <div className="container mx-auto px-4"></section>
          <div className="max-w-6xl mx-auto"></div>
            <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2><div className="space-y-6">{filteredPositions.map((position) => (</div>
                <div key={position.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-700/50 transition-all duration-300"></div>
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4"></div>
                    <div className="flex-1"></div>
                      <div className="flex items-center space-x-3 mb-2"></div>
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3><span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">{position.level}</span>
                        </span>
                      </div>
                      <div className="flex items-center space-x-4 text-gray-400 text-sm mb-3"></div>
                        <div className="flex items-center space-x-1"></div>
                          <MapPin className="w-4 h-4" />
                          <span className="capitalize">{position.location.replace('-', ', ')}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>
                          <Clock className="w-4 h-4" />
                          <span className="capitalize">{position.type.replace('-', ' ')}</span>
                        </div>
                        <div className="flex items-center space-x-1"></div>
                          <Calendar className="w-4 h-4" />
                          <span>Posted {new Date(position.postedDate).toLocaleDateString()}</span><p className="text-gray-300 mb-4">{position.description}</p>
                    </div>
                    <div className="lg:ml-6 lg:text-right"></div>
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{position.salary}</div><div className="text-gray-400 text-sm">{position.experience}</div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"></div>
                    <div></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Requirements:<ul className="space-y-1">{position.requirements.slice(0, 3).map((req, index) => (</ul>
                    <div className="lg: ml-6 lg:text-right">,
                      <div className="text-2xl font-bold text-cyan-400 mb-1">{position.salary}</div>
                      <div className="text-gray-400 text-sm">{position.experience}</div>
                    </div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {position.requirements?.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center hover:border-purple-400 transition-all duration-300">
                  <div className={`w-16 h-16 ${value.color} bg-white/10 rounded-full mx-auto mb-6 flex items-center justify-center`}>
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h3 className={`text-xl font-bold ${value.color} mb-4`}>{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
=======
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div></div></div></div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Benefits & Perks</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and perks to support our team members' well-being and growth.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
=======
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div></div></div></div>
                <span className="text-gray-300">{benefit}</span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {position.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-semibold">Featured Position</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-gray-300">{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Posted {position.posted}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="text-sm text-gray-300 flex items-center">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                      {position.requirements.length > 3 && (
                        <li className="text-sm text-gray-400">
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {position.benefits.length} benefits included
                    </div>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
=======
        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-8 border border-slate-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-2">
                          <Briefcase className="w-4 h-4" />
                          <span>{position.department}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Award className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                      </div>
                      <p className="text-gray-300">{position.description}</p>
                    </div>
                    <Link
                      to="/contact"
                      className="mt-4 lg:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{benefit}</span>
                          </li>
=======
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6"></div>
                    <div></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Requirements:</h4>
                      <ul className="space-y-1"></ul>
                        {position.requirements.slice(0, 3).map((req, index) => (}
                          <li key={index} className="flex items-center text-sm text-gray-300"></li>
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" >{req}</CheckCircle>
                          </CheckCircle>
                        ))}
                      </ul>
                    </div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Skills: </h4>,
                      <div className="flex flex-wrap gap-2">,
                        {position.skills.map((skill, index) => (
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Skills:</h4>
                      <div className="flex flex-wrap gap-2"></div>
                        {position.skills.map((skill, index) => (}
                          <span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded"></span>
                            {skill}
                    <div></div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Skills:<div className="flex flex-wrap gap-2">{position.skills.map((skill, index) => (</div><span key={index} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">{skill}</span>
                          </span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                        ))}
                      </ul>
                    </div>
<<<<<<< HEAD
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
                  </div>
                </div>
              ))}
=======
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4"></div>
                    <Link
                      to={`/careers/${position.id}`}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-lg font-medium hover: from-cyan-600 hover:to-purple-700 transition-all text-center"
                    ></Link>
                      Apply Now;
                      <ArrowRight className="w-4 h-4 ml-2 inline" />
                    </Link>
                    <button className="border border-cyan-400 text-cyan-400 py-3 px-6 rounded-lg font-medium hover:bg-cyan-400 hover:text-white transition-all"></button>
                      Save Job;
                    </button>,
                  </div>,
                </div>))}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
<<<<<<< HEAD
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0234
              </p>
            </div>
          </div>
        </div>
<<<<<<< HEAD
      </div>
=======
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
          </div>
        </section>
=======
      </section>

      {/* Benefits */}
      <section className="py-20 bg-slate-800/50"></section>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              We offer competitive benefits and a culture that values innovation, growth, and work-life balance
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            {benefits.map((benefit, index) => (}
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <benefit.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}<p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">,
              Why Work With Us?,
            </h2>,
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">,
              We offer competitive benefits and a culture that values innovation, growth, and work-life balance;
=======
import {Helmet} from 'react-helmet-async';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function Careers() {return (
    <title>Careers - Zion Tech Group</title>

            <h1 className="text-4xl font-bold text-white mb-6">Careers</h1>
            <p className="text-lg text-gray-300 mb-8">Professional careers services coming soon.</p>

              Contact Us

      <  />
  );}

    <><  />
      <Helmet></Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Careers services by Zion Tech Group. Professional AI and IT solutions."   /></meta>
        <meta name="keywords" content="careers, AI solutions, IT services"   /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h1 className="w-5h-5ml-2"   /></h1>
              <span className="w-5h-5ml-2"   />Careers;
              </span>
            </h1>
            <p className="w-5h-5ml-2">Professional careers services by Zion Tech Group.
            </p>
          </div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="text-2 xl font-bold text-white mb-4"  >Coming Soon</h2>
            <p className="w-5h-5ml-2">We're working on bringing you comprehensive careers solutions.
              Contact us to learn more about our services.
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
            </p>
          </div>
<<<<<<< HEAD
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <benefit.icon className="w-8 h-8 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Why Work With Us?</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">We offer competitive benefits and a culture that values innovation, growth, and work-life balance</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{benefits.map((benefit, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <benefit.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20"></section>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4"></h2>
              Our Culture
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              The values and principles that shape how we work together
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
            {culture.map((item, index) => (}
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <item.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}<p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4"></h2>
              Our Culture;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto"></p>
              The values and principles that shape how we work together;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {culture.map((item, index) => (
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <item.icon className="w-8 h-8 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Culture</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">The values and principles that shape how we work together</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{culture.map((item, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <item.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{item.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700"></section>
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Don't See the Right Role?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">We're always looking for talented individuals. Send us your resume and we'll</p>
            reach out when we have a position that matches your skills.</p>
          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6"></h2>
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto"></p>
            We're always looking for talented individuals. Send us your resume and we'll;
            reach out when we have a position that matches your skills.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link
              to="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            ></Link>
              <Mail className="w-5 h-5 mr-2" />
              Send Your Resume;
            </Link>
            <Link;
              to="/team"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            ></Link>
              <Users className="w-5 h-5 mr-2" />
              Meet Our Team;
            </Link>
          </div>
        </div>
      </section>,
    </div>);
};
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know 
              how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
              >
                Send Your Resume
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}

export default CareersPage
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02d3
=======
      </div>
    <  />
  );
};

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Professional careers services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Careers</h1>
          <p className="text-lg text-gray-300 mb-8">Professional careers services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
