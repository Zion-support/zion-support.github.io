'use client';
import React from 'react';
import { Phone, Mail, MapPin, Clock, Star, Zap, Shield, Globe, Brain, Cpu, Target, BarChart, MessageSquare, Eye, Sparkles, ArrowRight, CheckCircle, TrendingUp, Users, Award, Lock, Database, Cloud, Code, Smartphone, Settings, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation, PieChart, TrendingDown, Activity } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.',
      expertise: ['AI Strategy', 'Technology Leadership', 'Business Development']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/team/sarah.jpg',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing.',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '/team/michael.jpg',
      bio: 'Full-stack architect specializing in scalable AI solutions and cloud infrastructure.',
      expertise: ['Cloud Architecture', 'AI Engineering', 'DevOps']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '/team/emily.jpg',
      bio: 'Leading researcher in natural language processing and computer vision.',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we build.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Our success is measured by the success of our clients and their digital transformation journey.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more connected, and more efficient.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Successful Projects', icon: CheckCircle },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Pioneering the Future of AI and Technology
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
              Founded in 2020, Zion Tech Group has been at the forefront of AI innovation, 
              helping businesses transform through cutting-edge technology solutions.
            </p>
          </div>
        </section>

        {/* Company Story */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                  Our Story
                </h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Zion Tech Group was born from a vision to democratize AI technology and make it 
                  accessible to businesses of all sizes. What started as a small team of passionate 
                  technologists has grown into a leading force in the AI industry.
                </p>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Today, we're proud to serve clients worldwide, from startups to Fortune 500 companies, 
                  helping them harness the power of AI to drive innovation, efficiency, and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="/contact"
                    className="cyber-button inline-flex items-center justify-center"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    Get in Touch
                  </a>
                  <a
                    href="/services"
                    className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                  >
                    <ArrowRight className="w-4 h-4 mr-2" />
                    Our Services
                  </a>
                </div>
              </div>
              <div className="cyber-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6 text-center">Our Mission</h3>
                <p className="text-gray-300 text-center leading-relaxed mb-6">
                  To empower businesses with AI-driven solutions that transform operations, 
                  enhance customer experiences, and drive sustainable growth in the digital age.
                </p>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="cyber-card p-4">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">2020</h4>
                    <p className="text-sm text-gray-300">Founded</p>
                  </div>
                  <div className="cyber-card p-4">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">50+</h4>
                    <p className="text-sm text-gray-300">Projects</p>
                  </div>
                  <div className="cyber-card p-4">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">100+</h4>
                    <p className="text-sm text-gray-300">Clients</p>
                  </div>
                  <div className="cyber-card p-4">
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">24/7</h4>
                    <p className="text-sm text-gray-300">Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-2xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  <div className="space-y-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="inline-block bg-slate-800 text-cyan-400 text-xs px-2 py-1 rounded mr-1 mb-1"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Achievements
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto">
            <div className="cyber-card p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Work With Us?
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the growing number of businesses that trust Zion Tech Group 
                for their AI and technology needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Start Your Project
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;