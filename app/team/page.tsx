'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, Globe, Brain, Code, Shield, Zap, Star, Linkedin, Twitter, Github, Mail } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Quantum Computing',
      image: '/images/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and quantum computing. Former Google AI researcher and MIT graduate.',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos',
      github: 'https://github.com/kleber-santos',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Machine Learning & Cloud Architecture',
      image: '/images/team/sarah-chen.jpg',
      bio: 'Cloud architecture expert with 12+ years building scalable AI systems. Former AWS Principal Engineer.',
      linkedin: 'https://linkedin.com/in/sarah-chen',
      twitter: 'https://twitter.com/sarah_chen',
      github: 'https://github.com/sarah-chen',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of AI Research',
      expertise: 'Deep Learning & Neural Networks',
      image: '/images/team/marcus-johnson.jpg',
      bio: 'AI research pioneer with 10+ years developing cutting-edge neural networks. PhD from Stanford.',
      linkedin: 'https://linkedin.com/in/marcus-johnson',
      twitter: 'https://twitter.com/marcus_johnson',
      github: 'https://github.com/marcus-johnson',
      email: 'marcus@ziontechgroup.com'
    },
    {
      name: 'Dr. Elena Rodriguez',
      role: 'Head of Quantum Computing',
      expertise: 'Quantum Algorithms & Cryptography',
      image: '/images/team/elena-rodriguez.jpg',
      bio: 'Quantum computing specialist with 8+ years in quantum algorithms. Former IBM Quantum researcher.',
      linkedin: 'https://linkedin.com/in/elena-rodriguez',
      twitter: 'https://twitter.com/elena_rodriguez',
      github: 'https://github.com/elena-rodriguez',
      email: 'elena@ziontechgroup.com'
    },
    {
      name: 'David Kim',
      role: 'Head of Cybersecurity',
      expertise: 'AI Security & Threat Intelligence',
      image: '/images/team/david-kim.jpg',
      bio: 'Cybersecurity expert with 14+ years protecting enterprise systems. Former NSA security analyst.',
      linkedin: 'https://linkedin.com/in/david-kim',
      twitter: 'https://twitter.com/david_kim',
      github: 'https://github.com/david-kim',
      email: 'david@ziontechgroup.com'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Product',
      expertise: 'AI Product Strategy & UX',
      image: '/images/team/lisa-wang.jpg',
      bio: 'Product strategy expert with 11+ years building AI-powered products. Former Microsoft Product Manager.',
      linkedin: 'https://linkedin.com/in/lisa-wang',
      twitter: 'https://twitter.com/lisa_wang',
      github: 'https://github.com/lisa-wang',
      email: 'lisa@ziontechgroup.com'
    }
  ];

  const stats = [
    { number: '50+', label: 'Expert Team Members', icon: Users },
    { number: '15+', label: 'Years Average Experience', icon: Award },
    { number: '25+', label: 'Countries Represented', icon: Globe },
    { number: '100+', label: 'AI Patents Filed', icon: Brain }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | AI & Technology Experts</title>
        <meta name="description" content="Meet our world-class team of AI researchers, quantum computing experts, and technology leaders driving innovation at Zion Tech Group." />
        <meta name="keywords" content="AI team, technology experts, quantum computing team, machine learning experts, AI researchers" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20"></div>
          <div className="relative container mx-auto px-4 py-24">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Expert Team</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                World-class AI researchers, quantum computing experts, and technology leaders working together to build the future of intelligent systems.
              </p>
              <div className="flex flex-wrap justify-center gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4">
                      <stat.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div className="container mx-auto px-4 py-20">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team brings together decades of experience from leading technology companies and research institutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-4xl font-bold text-white">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.expertise}</p>
                </div>
                
                <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                  {member.bio}
                </p>

                <div className="flex justify-center space-x-4">
                  <a
                    href={member.linkedin}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                  <a
                    href={member.twitter}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="w-5 h-5" />
                  </a>
                  <a
                    href={member.github}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href={`mailto:${member.email}`}
                    className="text-gray-400 hover:text-cyan-400 transition-colors"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Company Culture */}
        <div className="bg-slate-800/30 py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Culture & Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We foster an environment of innovation, collaboration, and continuous learning.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Pushing the boundaries of what's possible with AI and technology.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">Working together to solve complex challenges and create breakthrough solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">Delivering exceptional results through attention to detail and quality.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Integrity</h3>
                <p className="text-gray-300">Building trust through transparency, honesty, and ethical practices.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Join Our Team CTA */}
        <div className="container mx-auto px-4 py-20">
          <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-4">Join Our Team</h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
              Ready to shape the future of AI and technology? We're always looking for talented individuals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamPage;