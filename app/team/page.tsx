'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Star, CheckCircle, ArrowRight, Mail, Linkedin, Github, Twitter } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      id: 'kleber',
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology. Former Microsoft and Google executive.',
      image: '/images/team/kleber.jpg',
      email: 'kleber@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      github: 'https://github.com/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Leadership']
    },
    {
      id: 'sarah',
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'AI research expert with PhD in Machine Learning from Stanford. Led AI initiatives at Tesla and OpenAI.',
      image: '/images/team/sarah.jpg',
      email: 'sarah@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      github: 'https://github.com/sarah-chen',
      twitter: 'https://twitter.com/sarah_chen',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research']
    },
    {
      id: 'michael',
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      bio: 'Full-stack architect with expertise in scalable systems and cloud infrastructure. Former AWS principal engineer.',
      image: '/images/team/michael.jpg',
      email: 'michael@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/michael-rodriguez',
      github: 'https://github.com/michael-rodriguez',
      twitter: 'https://twitter.com/michael_rodriguez',
      expertise: ['Cloud Architecture', 'DevOps', 'Scalability']
    },
    {
      id: 'emma',
      name: 'Emma Thompson',
      role: 'Head of AI Research',
      bio: 'Leading AI researcher specializing in natural language processing and computer vision. Published 50+ papers.',
      image: '/images/team/emma.jpg',
      email: 'emma@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/emma-thompson',
      github: 'https://github.com/emma-thompson',
      twitter: 'https://twitter.com/emma_thompson',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    },
    {
      id: 'david',
      name: 'David Kim',
      role: 'Head of Product',
      bio: 'Product strategist with a track record of launching successful AI products. Former product lead at Meta and Google.',
      image: '/images/team/david.jpg',
      email: 'david@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/david-kim',
      github: 'https://github.com/david-kim',
      twitter: 'https://twitter.com/david_kim',
      expertise: ['Product Strategy', 'UX Design', 'Market Analysis']
    },
    {
      id: 'lisa',
      name: 'Lisa Wang',
      role: 'Head of Operations',
      bio: 'Operations expert with 12+ years managing high-growth tech companies. Former COO at two successful startups.',
      image: '/images/team/lisa.jpg',
      email: 'lisa@ziontechgroup.com',
      linkedin: 'https://linkedin.com/in/lisa-wang',
      github: 'https://github.com/lisa-wang',
      twitter: 'https://twitter.com/lisa_wang',
      expertise: ['Operations', 'Strategy', 'Team Management']
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '100+', label: 'Projects Delivered' },
    { number: '99%', label: 'Client Satisfaction' }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | AI & IT Experts</title>
        <meta name="description" content="Meet the talented team behind Zion Tech Group. Our experts in AI, engineering, and technology are dedicated to delivering exceptional solutions." />
        <meta name="keywords" content="team, AI experts, engineers, technology leaders, Zion Tech Group" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Meet Our <span className="text-cyan-400">Expert Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Our diverse team of AI researchers, engineers, and technology leaders 
              brings together decades of experience to deliver cutting-edge solutions.
            </p>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm md:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 group">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed">{member.bio}</p>
                  </div>
                  
                  {/* Expertise Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {member.expertise.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-xs rounded-full">
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {/* Social Links */}
                  <div className="flex justify-center space-x-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`LinkedIn profile for ${member.name}`}
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`GitHub profile for ${member.name}`}
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label={`Twitter profile for ${member.name}`}
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Our <span className="text-cyan-400">Culture</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Collaborative</h3>
                <p className="text-gray-300">
                  We believe in the power of teamwork and cross-functional collaboration to solve complex problems.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">
                  We strive for excellence in everything we do, from code quality to client relationships.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We embrace new technologies and innovative approaches to stay ahead of the curve.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Join Us CTA */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Ready to work with cutting-edge AI and IT technologies? 
              We're always looking for talented individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default TeamPage;