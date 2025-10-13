import React from 'react';
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle, Star, Brain, Zap, Globe } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Dr. Kleber Santos",
      role: "CEO & Founder",
      expertise: "AI & Machine Learning",
      bio: "Visionary leader with 15+ years in AI and technology innovation. PhD in Computer Science from MIT, former Google AI researcher.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/klebersantos",
        twitter: "https://twitter.com/klebersantos",
        email: "kleber@ziontechgroup.com"
      },
      achievements: ["AI Research Pioneer", "Tech Innovation Award 2023", "Forbes 30 Under 30"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      expertise: "Cloud Infrastructure & DevOps",
      bio: "Cloud architecture expert with 12+ years building scalable systems. Former AWS Solutions Architect, certified in multiple cloud platforms.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/sarahchen",
        github: "https://github.com/sarahchen",
        email: "sarah@ziontechgroup.com"
      },
      achievements: ["Cloud Architecture Expert", "DevOps Innovation Award", "Open Source Contributor"],
      icon: <Globe className="w-6 h-6" />
    },
    {
      name: "Michael Rodriguez",
      role: "Head of Cybersecurity",
      expertise: "Cybersecurity & Risk Management",
      bio: "Cybersecurity specialist with 10+ years protecting enterprise systems. Former NSA security analyst, CISSP certified.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/michaelrodriguez",
        twitter: "https://twitter.com/mikecybersec",
        email: "michael@ziontechgroup.com"
      },
      achievements: ["Cybersecurity Expert", "Security Innovation Award", "CISSP Certified"],
      icon: <Shield className="w-6 h-6" />
    },
    {
      name: "Emily Johnson",
      role: "Head of AI Research",
      expertise: "Machine Learning & NLP",
      bio: "AI research leader with 8+ years in machine learning. PhD in AI from Stanford, published 20+ research papers.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/emilyjohnson",
        github: "https://github.com/emilyai",
        email: "emily@ziontechgroup.com"
      },
      achievements: ["AI Research Leader", "ML Innovation Award", "Published Researcher"],
      icon: <Brain className="w-6 h-6" />
    },
    {
      name: "David Kim",
      role: "Head of Product",
      expertise: "Product Strategy & UX",
      bio: "Product strategist with 10+ years building user-centric solutions. Former product manager at Microsoft and Apple.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/davidkim",
        twitter: "https://twitter.com/davidproduct",
        email: "david@ziontechgroup.com"
      },
      achievements: ["Product Strategy Expert", "UX Innovation Award", "Tech Product Leader"],
      icon: <BarChart3 className="w-6 h-6" />
    },
    {
      name: "Lisa Wang",
      role: "Head of Engineering",
      expertise: "Software Engineering & Architecture",
      bio: "Engineering leader with 12+ years building robust software systems. Former senior engineer at Google and Facebook.",
      image: "/api/placeholder/300/300",
      social: {
        linkedin: "https://linkedin.com/in/lisawang",
        github: "https://github.com/lisawang",
        email: "lisa@ziontechgroup.com"
      },
      achievements: ["Engineering Leader", "Software Architecture Expert", "Open Source Maintainer"],
      icon: <Zap className="w-6 h-6" />
    }
  ];

  const stats = [
    { number: "50+", label: "Team Members", icon: <Users className="w-6 h-6" /> },
    { number: "15+", label: "Years Average Experience", icon: <Award className="w-6 h-6" /> },
    { number: "25+", label: "PhD Holders", icon: <Brain className="w-6 h-6" /> },
    { number: "100+", label: "Certifications", icon: <CheckCircle className="w-6 h-6" /> }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We constantly push the boundaries of what's possible with technology",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Collaboration",
      description: "We believe the best solutions come from diverse teams working together",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Excellence",
      description: "We strive for the highest quality in everything we deliver",
      icon: <Award className="w-8 h-8" />
    },
    {
      title: "Continuous Learning",
      description: "We stay ahead by constantly learning and adapting to new technologies",
      icon: <Clock className="w-8 h-8" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Our Team - Zion Tech Group | Expert Technology Professionals"
        description="Meet the expert team behind Zion Tech Group. Our diverse group of AI researchers, engineers, and technology leaders driving innovation."
        keywords="team, experts, AI researchers, engineers, technology leaders, cybersecurity experts, cloud architects"
        canonical="https://ziontechgroup.com/team"
      />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Meet Our
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              {" "}Expert Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Our diverse team of AI researchers, engineers, and technology leaders is dedicated to pushing the boundaries of innovation and delivering exceptional solutions.
          </p>
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

      {/* Team Members */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Leadership Team
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Meet the visionary leaders driving innovation and excellence at Zion Tech Group.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  {/* Profile Image */}
                  <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold group-hover:scale-110 transition-transform duration-300">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  
                  {/* Member Info */}
                  <div className="text-center mb-4">
                    <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-cyan-300 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      {member.icon}
                      <span className="text-gray-300 text-sm">{member.expertise}</span>
                    </div>
                  </div>
                  
                  {/* Bio */}
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">
                    {member.bio}
                  </p>
                  
                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-white font-medium mb-2 text-sm">Key Achievements:</h4>
                    <div className="space-y-1">
                      {member.achievements.map((achievement, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <Star className="w-3 h-3 text-yellow-400" />
                          <span className="text-gray-300 text-xs">{achievement}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    {member.social.linkedin && (
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
                      >
                        <Linkedin className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.github && (
                      <a
                        href={member.social.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a
                        href={member.social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
                      >
                        <Twitter className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.email && (
                      <a
                        href={`mailto:${member.social.email}`}
                        className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center text-gray-300 hover:text-cyan-400 hover:bg-white/20 transition-all duration-300"
                      >
                        <Mail className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Our Values
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide our team and shape our approach to technology and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden text-center"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to be part of the future of technology? We're always looking for talented individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
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
        </div>
      </section>
    </div>
  );
}
