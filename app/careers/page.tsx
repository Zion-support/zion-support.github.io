<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Careers services by Zion Tech Group. Advanced AI and IT solutions for your business." />
=======
'use client';
=======
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Star, Brain, Globe, Target } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

const CareersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', label: 'All Positions', icon: <Briefcase className="w-5 h-5" /> },
    { id: 'engineering', label: 'Engineering', icon: <Code className="w-5 h-5" /> },
    { id: 'ai', label: 'AI & ML', icon: <Brain className="w-5 h-5" /> },
    { id: 'security', label: 'Cybersecurity', icon: <Shield className="w-5 h-5" /> },
    { id: 'cloud', label: 'Cloud & DevOps', icon: <Cloud className="w-5 h-5" /> },
    { id: 'product', label: 'Product', icon: <Target className="w-5 h-5" /> },
    { id: 'data', label: 'Data & Analytics', icon: <BarChart3 className="w-5 h-5" /> }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI & ML",
      category: "ai",
      location: "Remote / New York",
      type: "Full-time",
      experience: "5+ years",
      salary: "$120,000 - $180,000",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "PhD in Computer Science or related field",
        "5+ years experience in AI/ML",
        "Expertise in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, GCP, Azure)"
      ],
      benefits: ["Health Insurance", "401k Matching", "Flexible Hours", "Learning Budget"],
      posted: "2 days ago",
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Architect",
      department: "Cybersecurity",
      category: "security",
      location: "Remote / Delaware",
      type: "Full-time",
      experience: "7+ years",
      salary: "$130,000 - $200,000",
      description: "Design and implement enterprise-grade security solutions and frameworks.",
      requirements: [
        "CISSP, CISM, or similar certification",
        "7+ years in cybersecurity",
        "Experience with security frameworks (NIST, ISO 27001)",
        "Knowledge of cloud security best practices"
      ],
      benefits: ["Health Insurance", "401k Matching", "Security Training", "Home Office Setup"],
      posted: "1 week ago",
      featured: false
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Cloud & DevOps",
      category: "cloud",
      location: "Remote / San Francisco",
      type: "Full-time",
      experience: "6+ years",
      salary: "$140,000 - $220,000",
      description: "Architect scalable cloud solutions and lead DevOps transformation initiatives.",
      requirements: [
        "AWS/Azure/GCP certifications",
        "6+ years cloud architecture experience",
        "Expertise in Kubernetes, Docker, Terraform",
        "Experience with CI/CD pipelines"
      ],
      benefits: ["Health Insurance", "401k Matching", "Cloud Certifications", "Flexible Schedule"],
      posted: "3 days ago",
      featured: true
    },
    {
      id: 4,
      title: "Product Manager - AI Solutions",
      department: "Product",
      category: "product",
      location: "Remote / Austin",
      type: "Full-time",
      experience: "4+ years",
      salary: "$110,000 - $160,000",
      description: "Drive product strategy and roadmap for our AI-powered solutions portfolio.",
      requirements: [
        "MBA or technical degree",
        "4+ years product management experience",
        "Experience with AI/ML products",
        "Strong analytical and communication skills"
      ],
      benefits: ["Health Insurance", "401k Matching", "Stock Options", "Professional Development"],
      posted: "5 days ago",
      featured: false
    },
    {
      id: 5,
      title: "Data Scientist",
      department: "Data & Analytics",
      category: "data",
      location: "Remote / Boston",
      type: "Full-time",
      experience: "3+ years",
      salary: "$100,000 - $150,000",
      description: "Extract insights from complex datasets and build predictive models for business applications.",
      requirements: [
        "MS in Data Science or related field",
        "3+ years data science experience",
        "Proficiency in Python, R, SQL",
        "Experience with statistical modeling and ML"
      ],
      benefits: ["Health Insurance", "401k Matching", "Data Science Conferences", "Research Time"],
      posted: "1 week ago",
      featured: false
    },
    {
      id: 6,
      title: "Frontend Developer",
      department: "Engineering",
      category: "engineering",
      location: "Remote / Seattle",
      type: "Full-time",
      experience: "3+ years",
      salary: "$90,000 - $130,000",
      description: "Build beautiful, responsive user interfaces for our web applications and dashboards.",
      requirements: [
        "3+ years frontend development experience",
        "Expertise in React, TypeScript, CSS",
        "Experience with modern build tools",
        "Portfolio demonstrating UI/UX skills"
      ],
      benefits: ["Health Insurance", "401k Matching", "Design Tools", "Creative Freedom"],
      posted: "4 days ago",
      featured: false
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Open Positions", icon: <Briefcase className="w-6 h-6" /> },
    { number: "95%", label: "Employee Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "100%", label: "Remote Friendly", icon: <Globe className="w-6 h-6" /> }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Careers - Zion Tech Group | Join Our Team"
        description="Join Zion Tech Group and be part of the future of technology. Explore exciting career opportunities in AI, cybersecurity, and digital transformation."
        keywords="careers, jobs, technology careers, AI jobs, cybersecurity jobs, software development"
        canonical="https://ziontechgroup.com/careers"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Mission
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Be part of the future of technology. Join our diverse team of innovators, engineers, and visionaries who are building the next generation of AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="#open-positions"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Why Join Zion Tech Group?
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just building technology – we're shaping the future. Here's what makes us special.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings Section */}
      <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Open Positions
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your perfect role and help us build the future of technology.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg'
                    : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                }`}
              >
                {category.icon}
                <span>{category.label}</span>
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div
                key={job.id}
                className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden ${
                  job.featured ? 'ring-2 ring-cyan-500/50' : ''
                }`}
              >
                {job.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Featured
                    </span>
                  </div>
                )}
                
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-3">
                      <h3 className="text-xl font-semibold text-white group-hover:text-cyan-300 transition-colors">
                        {job.title}
                      </h3>
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <DollarSign className="w-4 h-4" />
                        <span>{job.salary}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>Posted {job.posted}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {job.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {job.requirements.slice(0, 3).map((req, idx) => (
                        <span
                          key={idx}
                          className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs"
                        >
                          {req}
                        </span>
                      ))}
                      {job.requirements.length > 3 && (
                        <span className="bg-white/10 text-gray-300 px-3 py-1 rounded-full text-xs">
                          +{job.requirements.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  
                  <div className="flex flex-col sm:flex-row lg:flex-col gap-3 mt-4 lg:mt-0 lg:ml-6">
                    <button className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
              <p className="text-gray-300">Try selecting a different category or check back later for new openings.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/team"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Meet Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Star, ArrowRight, CheckCircle, Zap, Heart, Brain, Rocket } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  description: string;
  requirements: string[];
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const positions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: ['PhD in Computer Science or related field', '5+ years ML/AI experience', 'Expert in Python, TensorFlow, PyTorch'],
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing Researcher',
      department: 'Research & Development',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Research and develop quantum algorithms and applications for real-world problems.',
      requirements: ['PhD in Physics or Computer Science', 'Quantum computing experience', 'Strong mathematical background'],
      featured: true
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      posted: '3 days ago',
      description: 'Design and maintain cloud infrastructure for scalable AI and IT solutions.',
      requirements: ['AWS/Azure/GCP certification', 'Kubernetes experience', 'Infrastructure as Code'],
      featured: false
    },
    {
      id: '4',
      title: 'UX Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      posted: '5 days ago',
      description: 'Create intuitive user experiences for complex AI and technology products.',
      requirements: ['Portfolio of AI/tech products', 'Figma expertise', 'User research experience'],
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'AI Solutions',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: '2+ years',
      posted: '1 week ago',
      description: 'Analyze complex datasets and build predictive models for business insights.',
      requirements: ['Masters in Data Science', 'Python/R expertise', 'Statistical modeling'],
      featured: false
    },
    {
      id: '6',
      title: 'Product Manager',
      department: 'Product',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '5+ years',
      posted: '4 days ago',
      description: 'Lead product strategy and development for AI-powered enterprise solutions.',
      requirements: ['Technical background', 'Product management experience', 'AI/ML knowledge'],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and mental health coverage'
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance'
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Clear promotion paths and mentorship programs'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, and autonomous systems. Explore open positions and career opportunities." />
        <meta name="keywords" content="tech careers, AI jobs, quantum computing jobs, software engineering, remote work, tech company" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Careers
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Careers solutions by Zion Tech Group
            </p>
          </div>
        </div>
=======
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate individuals to join our mission of advancing AI, quantum computing, and autonomous systems.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-300">Remote Friendly</div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position) => (
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
                      <p className="text-cyan-400 font-medium">{position.department}</p>
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

                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-medium">
                      Apply Now
                    </button>
                    <button className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Join Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We foster an environment of innovation, collaboration, and continuous learning. 
                  Our team is diverse, inclusive, and passionate about pushing the boundaries of technology.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Innovation First</h3>
                  <p className="text-gray-300">We encourage experimentation and bold ideas that challenge the status quo.</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Collaborative Spirit</h3>
                  <p className="text-gray-300">We believe the best solutions come from diverse teams working together.</p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-pink-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Rocket className="w-10 h-10 text-pink-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Growth Mindset</h3>
                  <p className="text-gray-300">We invest in our team's development and provide opportunities to learn and grow.</p>
                </div>
              </div>
            </div>
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
                We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Send Your Resume
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  Contact HR Team
                </button>
              </div>
            </div>
          </div>
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
      </div>
    </>
  )
}

export default CareersPage
