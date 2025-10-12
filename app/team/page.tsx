'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Award, Target, Lightbulb, Shield, Globe, Zap, Brain, Cpu, Rocket, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Mail, Phone, MapPin, Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, FileText, Package, DollarSign } from 'lucide-react';

export default function TeamPage() {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'Founder & CEO',
      description: 'AI and Technology Visionary with 15+ years of experience in enterprise solutions.',
      image: '/team/kleber-santos.jpg',
      expertise: ['AI Strategy', 'Technology Leadership', 'Business Development'],
      education: 'PhD in Computer Science, MIT',
      experience: '15+ years',
      linkedin: 'https://linkedin.com/in/kleber-santos'
    },
    {
      name: 'Sarah Johnson',
      role: 'Chief Technology Officer',
      description: 'Cloud Architecture Expert specializing in scalable infrastructure and DevOps.',
      image: '/team/sarah-johnson.jpg',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      education: 'MS in Software Engineering, Stanford',
      experience: '12+ years',
      linkedin: 'https://linkedin.com/in/sarah-johnson'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'Machine Learning Specialist with expertise in NLP and computer vision.',
      image: '/team/michael-chen.jpg',
      expertise: ['Machine Learning', 'NLP', 'Computer Vision'],
      education: 'PhD in Machine Learning, Carnegie Mellon',
      experience: '10+ years',
      linkedin: 'https://linkedin.com/in/michael-chen'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Cybersecurity',
      description: 'Cybersecurity Expert with certifications in ethical hacking and compliance.',
      image: '/team/emily-rodriguez.jpg',
      expertise: ['Cybersecurity', 'Ethical Hacking', 'Compliance'],
      education: 'MS in Cybersecurity, Georgia Tech',
      experience: '8+ years',
      linkedin: 'https://linkedin.com/in/emily-rodriguez'
    },
    {
      name: 'David Kim',
      role: 'Lead Software Engineer',
      description: 'Full-stack developer with expertise in modern web technologies and mobile development.',
      image: '/team/david-kim.jpg',
      expertise: ['Full-stack Development', 'Mobile Apps', 'API Design'],
      education: 'BS in Computer Science, UC Berkeley',
      experience: '7+ years',
      linkedin: 'https://linkedin.com/in/david-kim'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Data Science',
      description: 'Data Science expert specializing in predictive analytics and business intelligence.',
      image: '/team/lisa-wang.jpg',
      expertise: ['Data Science', 'Predictive Analytics', 'Business Intelligence'],
      education: 'PhD in Statistics, Harvard',
      experience: '9+ years',
      linkedin: 'https://linkedin.com/in/lisa-wang'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: <Users className="w-6 h-6 text-cyan-400" /> },
    { number: '15+', label: 'Years Experience', icon: <Clock className="w-6 h-6 text-emerald-400" /> },
    { number: '25+', label: 'Countries Represented', icon: <Globe className="w-6 h-6 text-blue-400" /> },
    { number: '100+', label: 'Certifications', icon: <Award className="w-6 h-6 text-purple-400" /> }
  ];

  const values = [
    {
      icon: <Lightbulb className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: <Shield className="w-8 h-8 text-emerald-400" />,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Client-Centric',
      description: 'We put our clients at the center of everything we do.'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Results-Driven',
      description: 'We measure our success by the tangible results we deliver to our clients.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | Expert AI and IT Professionals</title>
        <meta name="description" content="Meet the expert team at Zion Tech Group. Our diverse group of AI specialists, engineers, and technology leaders are dedicated to delivering exceptional solutions." />
        <meta name="keywords" content="team, AI experts, IT professionals, technology team, software engineers, data scientists, cybersecurity experts" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="author" content="Zion Tech Group" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Our Team - Zion Tech Group | Expert AI and IT Professionals" />
        <meta property="og:description" content="Meet the expert team at Zion Tech Group. Our diverse group of AI specialists, engineers, and technology leaders are dedicated to delivering exceptional solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/team" />
        <meta property="og:image" content="https://ziontechgroup.com/team-og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Our Team - Zion Tech Group | Expert AI and IT Professionals" />
        <meta name="twitter:description" content="Meet the expert team at Zion Tech Group. Our diverse group of AI specialists, engineers, and technology leaders are dedicated to delivering exceptional solutions." />
        <meta name="twitter:image" content="https://ziontechgroup.com/team-twitter-image.jpg" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.4)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.4)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          
          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30">
              <Users className="w-4 h-4" />
              <span>Meet Our Team</span>
            </div>
            
            <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
              The <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent animate-pulse">
                Brilliant Minds
              </span>
              <br />
              Behind Our Success
            </h1>
            
            <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Our diverse team of AI specialists, engineers, and technology leaders 
              brings together decades of experience to deliver exceptional solutions 
              that transform businesses worldwide.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span> by Numbers
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                A global team of experts united by passion for technology and innovation.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="group text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
                  <div className="flex justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Leadership</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The visionary leaders and technical experts who drive our innovation and success.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <span className="text-white font-bold text-3xl">{member.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {member.description}
                    </p>
                    
                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-gray-400">
                        <strong>Education:</strong> {member.education}
                      </div>
                      <div className="text-xs text-gray-400">
                        <strong>Experience:</strong> {member.experience}
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center gap-2 mb-4">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm"
                    >
                      <Users className="w-4 h-4 mr-1" />
                      LinkedIn Profile
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                The principles that guide everything we do and shape our culture of excellence.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
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

        {/* CTA Section */}
        <section className="py-20 px-4 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
          <div className="relative max-w-7xl mx-auto">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3xl p-8 sm:p-12 lg:p-16 relative overflow-hidden">
                <div className="relative z-10">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                    Ready to Join <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent">Our Team?</span>
                  </h2>
                  
                  <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                    We're always looking for talented individuals who share our passion for innovation 
                    and excellence. Join us in building the future of technology.
                  </p>
                  
                  <div className="flex flex-col sm:flex-row gap-6 justify-center">
                    <Link 
                      to="/careers" 
                      className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      <span>View Open Positions</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link 
                      to="/contact" 
                      className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                    >
                      <span>Contact HR</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}