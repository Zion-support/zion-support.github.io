'use client';
import React from 'react';
import { Brain, Cpu, Shield, Cloud, Zap, Code, Settings, BarChart, MessageSquare, Eye, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity, Zap as Lightning, Target as Crosshair, Shield as Security, Users as People, Star as StarIcon, CheckCircle as Check, ArrowRight as Arrow, Phone as PhoneIcon, Mail as MailIcon, MapPin as Location, Box, Mic, DollarSign, Truck, Link, HardDrive, FileCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Chief AI Officer',
      expertise: 'AI Research, Quantum Computing, Autonomous Systems',
      experience: '15+ years',
      education: 'PhD in Computer Science, MIT',
      achievements: ['Published 50+ AI research papers', 'Led AI teams at Google and Microsoft', 'Quantum computing pioneer']
    },
    {
      name: 'Sarah Chen',
      role: 'CTO & Head of Engineering',
      expertise: 'Cloud Architecture, DevOps, Microservices',
      experience: '12+ years',
      education: 'MS Computer Science, Stanford',
      achievements: ['Built scalable systems for Fortune 500', 'Open source contributor', 'DevOps thought leader']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Machine Learning, Deep Learning, NLP',
      experience: '10+ years',
      education: 'PhD in Machine Learning, Carnegie Mellon',
      achievements: ['Developed breakthrough ML algorithms', 'AI ethics advocate', 'Conference speaker']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Quantum Computing',
      expertise: 'Quantum Algorithms, Quantum Machine Learning',
      experience: '8+ years',
      education: 'PhD in Quantum Physics, Caltech',
      achievements: ['Quantum computing researcher', 'Published in Nature', 'Quantum ML pioneer']
    }
  ];

  const companyStats = [
    { number: '500+', label: 'Enterprise Clients', icon: Building },
    { number: '$50M+', label: 'Annual Cost Savings', icon: DollarSign },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '50+', label: 'AI Experts', icon: Brain },
    { number: '24/7', label: 'Support Available', icon: Clock3 }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers and developing breakthrough solutions.',
      icon: Brain
    },
    {
      title: 'Client Success',
      description: 'Our success is measured by our clients\' success. We are committed to delivering exceptional value and measurable results.',
      icon: Target
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI solutions that are fair, transparent, and beneficial to society, ensuring responsible AI deployment.',
      icon: Shield
    },
    {
      title: 'Continuous Learning',
      description: 'We stay at the forefront of technology through continuous learning, research, and development of cutting-edge solutions.',
      icon: BookOpen
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="About Us">
            About Us
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            Leading the future of AI and IT solutions with cutting-edge technology, expert teams, and proven results.
          </p>
        </section>

        {/* Company Overview */}
        <section className="mb-16" aria-labelledby="company-overview">
          <div className="cyber-card p-8 max-w-6xl mx-auto">
            <h2 id="company-overview" className="text-3xl font-bold text-white mb-6 text-center neon-text">
              Our Story
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Founded in 2020, Zion Tech Group emerged from a vision to democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes. Our journey began when our founders, having worked at leading tech companies like Google, Microsoft, and IBM, recognized the gap between advanced AI research and practical business applications.
                </p>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  Today, we serve over 500 enterprise clients worldwide, delivering $50M+ in annual cost savings and achieving an average ROI of 300%. Our team of 50+ AI experts, including PhD researchers and industry veterans, continues to push the boundaries of what's possible with artificial intelligence.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Our Mission</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  To transform businesses through intelligent automation, predictive analytics, and cutting-edge AI solutions that drive unprecedented growth and efficiency.
                </p>
                <h3 className="text-2xl font-bold text-purple-400 mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the world's leading provider of AI-powered solutions, enabling every business to harness the power of artificial intelligence for sustainable growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Stats */}
        <section className="mb-16" aria-labelledby="company-stats">
          <h2 id="company-stats" className="text-3xl font-bold text-white mb-8 text-center neon-text">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <stat.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16" aria-labelledby="leadership-team">
          <h2 id="leadership-team" className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 neon-text">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-2">{member.role}</div>
                <div className="text-sm text-gray-300 mb-3">{member.expertise}</div>
                <div className="text-xs text-gray-400 mb-4">{member.experience} • {member.education}</div>
                <div className="space-y-1">
                  {member.achievements.map((achievement, achievementIndex) => (
                    <div key={achievementIndex} className="text-xs text-gray-300 flex items-center">
                      <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                      {achievement}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16" aria-labelledby="our-values">
          <h2 id="our-values" className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 neon-text">{value.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technology Focus */}
        <section className="mb-16" aria-labelledby="technology-focus">
          <div className="cyber-card p-8 max-w-6xl mx-auto">
            <h2 id="technology-focus" className="text-3xl font-bold text-white mb-6 text-center neon-text">
              Technology Focus Areas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Artificial Intelligence</h3>
                <p className="text-gray-300 text-sm">Machine learning, deep learning, NLP, computer vision, and autonomous systems</p>
              </div>
              <div className="text-center">
                <Cpu className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-300 text-sm">Quantum algorithms, quantum machine learning, and quantum optimization</p>
              </div>
              <div className="text-center">
                <Cloud className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Cloud & Edge</h3>
                <p className="text-gray-300 text-sm">Cloud migration, edge computing, and distributed systems</p>
              </div>
              <div className="text-center">
                <Shield className="w-16 h-16 text-red-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-300 text-sm">AI-powered security, threat detection, and compliance solutions</p>
              </div>
              <div className="text-center">
                <BarChart className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Data Analytics</h3>
                <p className="text-gray-300 text-sm">Big data processing, predictive analytics, and business intelligence</p>
              </div>
              <div className="text-center">
                <Settings className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">Automation</h3>
                <p className="text-gray-300 text-sm">Process automation, RPA, and intelligent workflow management</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Work with Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join 500+ enterprise clients who trust us to transform their business with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <PhoneIcon className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;