import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award, Brain, BarChart3, Settings, Code, Database, Cloud, Smartphone, Target, Calendar, DollarSign, Briefcase, GraduationCap, Heart, Coffee, Gamepad2 } from "lucide-react";
import { Helmet } from "react-helmet-async";
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

  const benefits = [
    {
      title: "Health & Wellness",
      description: "Comprehensive health insurance, dental, vision, and mental health support",
      icon: <Heart className="w-8 h-8" />
    },
    {
      title: "Learning & Development",
      description: "Annual learning budget, conference attendance, and certification support",
      icon: <GraduationCap className="w-8 h-8" />
    },
    {
      title: "Work-Life Balance",
      description: "Flexible hours, remote work options, and unlimited PTO",
      icon: <Coffee className="w-8 h-8" />
    },
    {
      title: "Growth Opportunities",
      description: "Clear career paths, mentorship programs, and internal mobility",
      icon: <Target className="w-8 h-8" />
    },
    {
      title: "Modern Tools",
      description: "Latest technology stack, top-tier equipment, and home office setup",
      icon: <Settings className="w-8 h-8" />
    },
    {
      title: "Team Culture",
      description: "Collaborative environment, team events, and innovation time",
      icon: <Users className="w-8 h-8" />
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
  );}
}'
