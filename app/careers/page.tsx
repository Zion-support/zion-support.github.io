import React from 'react';
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Careers() {
  const openPositions = [
    {
      title: "Senior AI Engineer",
      department: "AI & Machine Learning",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "5+ years",
      description: "Lead the development of cutting-edge AI solutions and machine learning models.",
      requirements: [
        "Master's degree in Computer Science or related field",
        "5+ years experience in AI/ML development",
        "Proficiency in Python, TensorFlow, PyTorch",
        "Experience with cloud platforms (AWS, Azure, GCP)",
        "Strong problem-solving and communication skills"
      ],
      benefits: [
        "Competitive salary ($120k - $180k)",
        "Health, dental, and vision insurance",
        "401(k) with company matching",
        "Flexible work arrangements",
        "Professional development budget"
      ]
    },
    {
      title: "Quantum Computing Specialist",
      department: "Quantum Computing",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "3+ years",
      description: "Develop quantum algorithms and solutions for business applications.",
      requirements: [
        "PhD in Physics, Computer Science, or related field",
        "3+ years experience in quantum computing",
        "Knowledge of quantum programming languages (Qiskit, Cirq)",
        "Experience with quantum simulators and hardware",
        "Strong mathematical background"
      ],
      benefits: [
        "Competitive salary ($140k - $200k)",
        "Research and development opportunities",
        "Conference attendance budget",
        "Cutting-edge technology access",
        "Collaboration with leading researchers"
      ]
    },
    {
      title: "Blockchain Developer",
      department: "Blockchain Solutions",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and deploy blockchain solutions and smart contracts.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "4+ years experience in blockchain development",
        "Proficiency in Solidity, Web3.js, and smart contracts",
        "Experience with DeFi protocols and NFT development",
        "Knowledge of consensus mechanisms"
      ],
      benefits: [
        "Competitive salary ($100k - $150k)",
        "Crypto and token incentives",
        "Remote work flexibility",
        "Innovation lab access",
        "Blockchain certification support"
      ]
    },
    {
      title: "IoT Solutions Architect",
      department: "IoT & Edge Computing",
      location: "Remote / Middletown, DE",
      type: "Full-time",
      experience: "6+ years",
      description: "Design and implement IoT solutions for smart cities and industrial applications.",
      requirements: [
        "Bachelor's degree in Engineering or Computer Science",
        "6+ years experience in IoT development",
        "Knowledge of edge computing and sensor networks",
        "Experience with IoT platforms (AWS IoT, Azure IoT)",
        "Understanding of wireless communication protocols"
      ],
      benefits: [
        "Competitive salary ($110k - $160k)",
        "Project ownership opportunities",
        "Technology leadership role",
        "Industry conference participation",
        "Mentorship programs"
      ]
    }
  ];

  const benefits = [
    {
      title: "Competitive Compensation",
      description: "Industry-leading salaries and performance bonuses",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision coverage",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Flexible Work",
      description: "Remote work options and flexible schedules",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Professional Growth",
      description: "Learning budget and career development programs",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Innovation Lab",
      description: "Access to cutting-edge technology and research",
      icon: <Star className="w-8 h-8" />
    },
    {
      title: "Team Culture",
      description: "Collaborative environment with brilliant minds",
      icon: <Users className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta
          name="description"
          content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, blockchain, and IoT solutions. Explore career opportunities and be part of the future of technology."
        />
        <meta
          name="keywords"
          content="careers, jobs, AI engineer, quantum computing, blockchain developer, IoT architect, tech jobs, remote work, Zion Tech Group"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
              <Users className="w-4 h-4 text-cyan-400 mr-2" />
              <span className="text-cyan-400 text-sm font-medium">Join Our Team</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              Build the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                {" "}Future
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join our team of innovators and help shape the future of technology. 
              Work on cutting-edge AI, quantum computing, blockchain, and IoT solutions 
              that are transforming industries worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/about"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Learn About Us
              </Link>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Open Positions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore exciting career opportunities and find your perfect role
              </p>
            </div>
            
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-2 text-cyan-400" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                          {position.type}
                        </span>
                        <span className="flex items-center">
                          <Star className="w-4 h-4 mr-2 text-cyan-400" />
                          {position.experience}
                        </span>
                      </div>
                    </div>
                    <Link
                      to="/contact"
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group lg:w-auto w-full"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {position.description}
                  </p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Requirements</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 mr-2 text-green-400 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Benefits</h4>
                      <ul className="space-y-2">
                        {position.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 mr-2 text-cyan-400 mt-0.5 flex-shrink-0" />
                            {benefit}
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

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Join Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, innovate, and make a real impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 text-center"
                >
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join our team and help us build the future of technology. 
              We're looking for passionate individuals who want to make a difference.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Apply Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Contact HR
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}