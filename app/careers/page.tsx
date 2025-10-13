import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award, Briefcase, GraduationCap, Heart, Lightbulb } from "lucide-react";
import { Helmet } from "react-helmet-async";
import React from 'react';
import { Link } from "react-router-dom";

export default function Careers() {
  const openPositions = [
    {
      id: 1,
      title: "Senior AI Engineer",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.",
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years experience with Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong understanding of ML algorithms and deep learning",
        "Experience with MLOps and model deployment"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health, dental, vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401k with company matching"
      ],
      featured: true
    },
    {
      id: 2,
      title: "Cybersecurity Specialist",
      department: "Security",
      location: "Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Protect our clients' digital assets and infrastructure with advanced security solutions and threat detection.",
      requirements: [
        "Bachelor's degree in Cybersecurity or related field",
        "3+ years experience in cybersecurity",
        "Certifications: CISSP, CISM, or equivalent",
        "Experience with SIEM, IDS/IPS, and security tools",
        "Knowledge of compliance frameworks (SOC 2, ISO 27001)"
      ],
      benefits: [
        "Competitive salary",
        "Health, dental, vision insurance",
        "Professional certification support",
        "Flexible PTO",
        "401k with company matching"
      ],
      featured: true
    },
    {
      id: 3,
      title: "Cloud Solutions Architect",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Design and implement scalable cloud infrastructure solutions for enterprise clients.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience with cloud platforms",
        "Certifications: AWS Solutions Architect, Azure Expert",
        "Experience with Kubernetes, Docker, Terraform",
        "Strong understanding of microservices architecture"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health, dental, vision insurance",
        "Remote work flexibility",
        "Professional development budget",
        "401k with company matching"
      ],
      featured: false
    },
    {
      id: 4,
      title: "Frontend Developer",
      department: "Development",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "2+ years",
      description: "Build beautiful, responsive user interfaces for our AI and technology solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "2+ years experience with React, TypeScript",
        "Experience with modern CSS frameworks",
        "Knowledge of web performance optimization",
        "Experience with testing frameworks"
      ],
      benefits: [
        "Competitive salary",
        "Health, dental, vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401k with company matching"
      ],
      featured: false
    },
    {
      id: 5,
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      description: "Automate deployment pipelines and maintain infrastructure for our AI and cloud solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years experience with CI/CD pipelines",
        "Experience with Docker, Kubernetes, Jenkins",
        "Knowledge of monitoring and logging tools",
        "Experience with infrastructure as code"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health, dental, vision insurance",
        "Remote work flexibility",
        "Professional development budget",
        "401k with company matching"
      ],
      featured: false
    },
    {
      id: 6,
      title: "Data Scientist",
      department: "AI Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Extract insights from data and build predictive models to drive business decisions.",
      requirements: [
        "Master's degree in Data Science, Statistics, or related field",
        "3+ years experience with Python, R, SQL",
        "Experience with machine learning libraries",
        "Knowledge of statistical analysis and modeling",
        "Experience with data visualization tools"
      ],
      benefits: [
        "Competitive salary + equity",
        "Health, dental, vision insurance",
        "Flexible work arrangements",
        "Professional development budget",
        "401k with company matching"
      ],
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Innovation",
      description: "We encourage creative thinking and embrace new technologies to solve complex problems."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and open communication across all departments."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Work-Life Balance",
      description: "We support flexible schedules and remote work to help you thrive both personally and professionally."
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Growth",
      description: "We invest in your professional development with training, conferences, and learning opportunities."
    }
  ];

  const benefits = [
    {
      category: "Health & Wellness",
      items: [
        "Comprehensive health, dental, and vision insurance",
        "Mental health support and counseling services",
        "Gym membership reimbursement",
        "Wellness programs and health screenings"
      ]
    },
    {
      category: "Professional Development",
      items: [
        "$2,000 annual learning and development budget",
        "Conference attendance and training opportunities",
        "Mentorship programs",
        "Internal knowledge sharing sessions"
      ]
    },
    {
      category: "Work Environment",
      items: [
        "Flexible work arrangements and remote options",
        "Modern office space with latest technology",
        "Collaborative team environment",
        "Regular team building activities"
      ]
    },
    {
      category: "Financial Benefits",
      items: [
        "Competitive salary with performance bonuses",
        "Equity participation for key roles",
        "401k with company matching up to 6%",
        "Stock option programs"
      ]
    }
  ];

  const featuredPositions = openPositions.filter(position => position.featured);

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and technology. Explore open positions, benefits, and our company culture." />
        <meta name="keywords" content="careers, jobs, AI engineer, cybersecurity, cloud architect, frontend developer, data scientist, tech jobs" />
        <meta property="og:title" content="Careers - Zion Tech Group | Join Our Team" />
        <meta property="og:description" content="Join Zion Tech Group and help shape the future of AI and technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Briefcase className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Build the Future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Technology</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Join our team of innovators and help shape the future of AI, cybersecurity, and cloud technology. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#open-positions"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/contact"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Contact Us
                <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and a supportive work environment to help you thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <h3 className="text-lg font-semibold text-white mb-4 text-center">
                    {benefit.category}
                  </h3>
                  <ul className="space-y-3">
                    {benefit.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Positions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our most exciting open positions and find your next career opportunity.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredPositions.map((position) => (
                <div
                  key={position.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium mb-2">
                        {position.type}
                      </span>
                      <span className="text-gray-400 text-sm">{position.experience}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 mt-1 flex-shrink-0" />
                            <span>{req}</span>
                          </li>
                        ))}
                        {position.requirements.length > 3 && (
                          <li className="text-cyan-400 text-sm">
                            +{position.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Star className="w-4 h-4 text-yellow-400" />
                      <span>Featured Position</span>
                    </div>
                    <Link
                      to={`/careers/${position.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group font-medium"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Positions */}
        <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                All Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse all available positions and find the perfect role for your skills and interests.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                        <span>{position.department}</span>
                        <span>•</span>
                        <span>{position.location}</span>
                      </div>
                    </div>
                    {position.featured && (
                      <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-black px-2 py-1 rounded-full text-xs font-medium">
                        Featured
                      </span>
                    )}
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed line-clamp-2">
                    {position.description}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                    <Link
                      to={`/careers/${position.id}`}
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors group text-sm font-medium"
                    >
                      View Details
                      <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See the Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Send Your Resume
                <Mail className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Learn About Us
                <Users className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
