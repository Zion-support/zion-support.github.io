<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react'
import { Helmet } from 'react-helmet-async'
=======
import React from 'react';
<<<<<<< HEAD
import Link from 'next/link';
<<<<<<< HEAD
import { ArrowRight, MapPin, Clock, Users, Award, Zap } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-10c6

<<<<<<< HEAD
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Careers services by Zion Tech Group. Advanced AI and IT solutions for your business." />
=======
'use client';
<<<<<<< HEAD
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
=======
=======
'use client';
import React, { useState } from 'react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase, GraduationCap } from 'lucide-react';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  posted: string;
  description: string;
  requirements: string[];
  benefits: string[];
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>('all');
  const [selectedLocation, setSelectedLocation] = useState<string>('all');

  const openPositions: JobPosition[] = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
<<<<<<< HEAD
      description: 'Design and implement cutting-edge AI solutions for enterprise clients.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years AI experience', 'Machine Learning expertise']},
    {title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']},
    {title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets to drive business decisions.',
      requirements: ['Python, R, SQL', '3+ years data science experience', 'Statistical analysis skills']}];
  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1232
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
=======
const CareersPage = () => {
  const jobOpenings = [
    {
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience with Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong background in machine learning and deep learning"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Flexible work hours"]
    },
    {
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients' digital assets with advanced cybersecurity solutions and threat detection.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with SIEM tools and incident response"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Professional development"]
    },
    {
      title: "Cloud Infrastructure Architect",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "7+ years",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "7+ years experience with cloud platforms",
        "Certifications: AWS Solutions Architect, Azure Expert",
        "Experience with DevOps and automation tools"
      ],
      benefits: ["Competitive salary", "Health insurance", "401k matching", "Remote work", "Learning budget"]
    }
  ];

  const companyBenefits = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaborative Environment",
      description: "Work with talented professionals in a supportive, innovative culture"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Cutting-Edge Technology",
      description: "Access to the latest tools and technologies in AI, cloud, and cybersecurity"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Growth Opportunities",
      description: "Continuous learning and career advancement opportunities"
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Global Impact",
      description: "Make a difference with solutions that impact businesses worldwide"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's revolutionizing technology. Explore career opportunities in AI, cybersecurity, cloud computing, and more." />
        <meta name="keywords" content="careers, jobs, AI engineer, cybersecurity specialist, cloud architect, technology careers, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. We're looking for passionate individuals 
              who want to make a real impact in AI, cybersecurity, and cloud computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#openings"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group"
              >
                Contact Us
                <Mail className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Company Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, learn, and make a real impact.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyBenefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Current Openings
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for your skills and career goals.
              </p>
            </div>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {job.experience}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  <p className="text-gray-300 mb-6">{job.description}</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start">
                            <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start">
                            <Star className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
<<<<<<< HEAD
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
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Star, ArrowRight, CheckCircle, Zap, Heart, Brain, Rocket } from 'lucide-react';
=======

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460

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
<<<<<<< HEAD
=======
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460

const CareersPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Careers page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Careers
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
            </p>
          </div>
        </div>
        <Footer />
=======
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group mx-auto w-fit"
            >
              Send Us Your Resume
              <Mail className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </section>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
      </div>
    </>
  );
};
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009

const CareersPage: React.FC = () => {
  const positions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
<<<<<<< HEAD
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: ['PhD in Computer Science or related field', '5+ years ML/AI experience', 'Expert in Python, TensorFlow, PyTorch'],
=======
      description: 'Design and implement cutting-edge AI solutions for enterprise clients.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years AI experience', 'Machine Learning expertise'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Professional development'],
      posted: '2024-01-15',
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
      featured: true
    },
    {
      id: '2',
<<<<<<< HEAD
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
=======
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Lead cloud migration projects and design scalable cloud architectures.',
      requirements: ['AWS/Azure/GCP certification', '7+ years cloud experience', 'Architecture design skills'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Learning budget'],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect client systems and implement security best practices.',
      requirements: ['CISSP/CISM certification', '4+ years security experience', 'Threat analysis skills'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Security training'],
      posted: '2024-01-05',
      featured: false
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
    }
  ];

  return (
<<<<<<< HEAD
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
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and IT solutions. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, tech careers" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and shape the future of technology" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and IT solutions. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Open Positions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {openPositions.map((position) => (
            <div
              key={position.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                position.featured
                  ? 'border-purple-400 shadow-2xl shadow-purple-500/25'
                  : 'border-white/20'
              }`}
            >
              {position.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Featured</span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{position.department}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{position.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Briefcase className="w-4 h-4" />
                  <span>{position.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>{position.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Posted {position.posted}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4">{position.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Requirements</h4>
                <ul className="space-y-1">
                  {position.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Why Work With Us */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Great Team</h3>
              <p className="text-gray-300 text-sm">Work with talented and passionate professionals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Work-Life Balance</h3>
              <p className="text-gray-300 text-sm">Flexible hours and remote work options</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-300 text-sm">Continuous learning and career development</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300 text-sm">Work on cutting-edge technologies and projects</p>
            </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
          </div>
        </div>

        {/* CTA Section */}
<<<<<<< HEAD
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
=======
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      posted: '1 week ago',
      description: 'Build beautiful and responsive user interfaces for our AI-powered applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of React/Next.js experience',
        'Proficiency in TypeScript and modern CSS',
        'Experience with design systems',
        'Knowledge of accessibility best practices'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work options',
        'Learning and development opportunities',
        'Team building events'
      ],
      featured: false
    },
    {
      id: 3,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      posted: '3 days ago',
      description: 'Drive product strategy and roadmap for our AI solutions portfolio.',
      requirements: [
        'Bachelor\'s degree in Business or Technical field',
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'MBA preferred'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health benefits',
        'Flexible PTO',
        'Stock options',
        'Professional development'
      ],
      featured: true
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Manage and scale our cloud infrastructure and deployment pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Proficiency in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Remote work flexibility',
        'Equipment allowance',
        'Conference attendance budget'
      ],
      featured: false
    }
  ];

  const departments = ['all', 'Engineering', 'Product', 'Sales', 'Marketing'];
  const locations = ['all', 'Remote', 'New York, NY', 'San Francisco, CA', 'Austin, TX'];

  const filteredPositions = openPositions.filter(position => {
    const departmentMatch = selectedDepartment === 'all' || position.department === selectedDepartment;
    const locationMatch = selectedLocation === 'all' || position.location === selectedLocation;
    return departmentMatch && locationMatch;
  });

  const companyBenefits = [
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented individuals in a supportive and inclusive environment'
    },
    {
      icon: Star,
      title: 'Career Growth',
      description: 'Opportunities for professional development and career advancement'
    },
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options to support your lifestyle'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition and rewards for outstanding performance'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of AI and technology. We're looking for passionate individuals to help us build the next generation of intelligent solutions.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                50+ Open Positions
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Remote Friendly
              </span>
              <span className="flex items-center">
                <CheckCircle className="w-4 h-4 mr-2 text-green-400" />
                Competitive Benefits
              </span>
            </div>
          </div>
        </section>

        {/* Company Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Work With Us
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {companyBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-slate-900" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Filters */}
        <section className="py-8 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              <div className="flex items-center space-x-2">
                <Briefcase className="w-5 h-5 text-cyan-400" />
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="bg-slate-700 text-white rounded-lg px-4 py-2 border border-slate-600 focus:border-cyan-400 focus:outline-none"
                >
                  {departments.map(dept => (
                    <option key={dept} value={dept}>
                      {dept === 'all' ? 'All Departments' : dept}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-slate-700 text-white rounded-lg px-4 py-2 border border-slate-600 focus:border-cyan-400 focus:outline-none"
                >
                  {locations.map(location => (
                    <option key={location} value={location}>
                      {location === 'all' ? 'All Locations' : location}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              {filteredPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-slate-800/50 backdrop-blur-sm border rounded-xl p-6 hover:border-cyan-400 transition-all duration-300 ${
                    position.featured ? 'border-cyan-400 shadow-lg shadow-cyan-400/20' : 'border-slate-700'
                  }`}
                >
                  {position.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-4 h-4 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 text-sm font-medium">Featured</span>
                    </div>
                  )}
                  
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="text-sm text-gray-400">{position.posted}</span>
                  </div>
                  
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-gray-400">
                    <span className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-1" />
                      {position.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </span>
                    <span className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </span>
                    <span className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-1" />
                      {position.experience}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {position.requirements.slice(0, 3).map((req, index) => (
                      <span
                        key={index}
                        className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs"
                      >
                        {req.split(' ')[0]} {req.split(' ')[1]}
                      </span>
                    ))}
                    {position.requirements.length > 3 && (
                      <span className="bg-slate-700 text-gray-300 px-3 py-1 rounded-full text-xs">
                        +{position.requirements.length - 3} more
                      </span>
                    )}
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-2 px-4 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300 flex items-center justify-center">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
            
            {filteredPositions.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No positions found matching your criteria.</p>
                <button
                  onClick={() => {
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}
                  className="mt-4 text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-300">
                Submit Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="inline-flex items-center justify-center px-8 py-3 border border-slate-600 text-white font-semibold rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300">
                Contact HR
                <Users className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
=======
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              Send Resume
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
  );
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1247

<<<<<<< HEAD
export default CareersPage
=======
export default CareersPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1256
=======

export default CareersPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-13a2
=======
export default CareersPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1460
