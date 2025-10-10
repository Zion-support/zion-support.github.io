'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, Target, CheckCircle, Phone, Clock, Zap, Shield, Eye, Building, BookOpen, Mail, MapPin, Award, Star, TrendingUp, Globe, Cpu, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in AI and technology innovation, driving Zion Tech Group\'s mission to democratize AI solutions.',
      image: '/team/kleber-santos.jpg',
      expertise: ['AI Strategy', 'Leadership', 'Innovation'],
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      bio: 'Leading AI researcher with PhD in Machine Learning, specializing in neural networks and deep learning applications.',
      image: '/team/sarah-chen.jpg',
      expertise: ['Machine Learning', 'Neural Networks', 'Research'],
      linkedin: 'https://linkedin.com/in/sarah-chen',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      bio: 'Technology architect with expertise in cloud infrastructure, DevOps, and scalable AI system design.',
      image: '/team/michael-rodriguez.jpg',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design'],
      linkedin: 'https://linkedin.com/in/michael-rodriguez',
      email: 'michael@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      bio: 'Data science expert with focus on predictive analytics, business intelligence, and data-driven decision making.',
      image: '/team/emily-watson.jpg',
      expertise: ['Data Science', 'Analytics', 'Business Intelligence'],
      linkedin: 'https://linkedin.com/in/emily-watson',
      email: 'emily@ziontechgroup.com'
    }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.',
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the value we deliver to our clients.',
      icon: Target,
      color: 'text-cyan-400'
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI solutions responsibly, ensuring fairness, transparency, and ethical considerations.',
      icon: Shield,
      color: 'text-green-400'
    },
    {
      title: 'Continuous Learning',
      description: 'We stay at the forefront of technology through continuous learning and adaptation.',
      icon: BookOpen,
      color: 'text-yellow-400'
    }
  ];

  const achievements = [
    { metric: '300%', label: 'Average ROI for Clients', icon: TrendingUp },
    { metric: '95%', label: 'Process Automation Rate', icon: Zap },
    { metric: '$50M+', label: 'Annual Client Savings', icon: DollarSign },
    { metric: '500+', label: 'Successful Projects', icon: CheckCircle },
    { metric: '50+', label: 'Enterprise Clients', icon: Building },
    { metric: '24/7', label: 'Support Availability', icon: Clock }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            The Visionaries Behind Zion Tech Group
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Our diverse team of AI experts, engineers, and business leaders work together to deliver 
            cutting-edge solutions that transform businesses worldwide.
          </p>
        </section>

        {/* Team Members */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Leadership Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-6 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300 hover:scale-105">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2 text-center">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-3 text-center">{member.role}</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="text-xs bg-slate-700 text-cyan-400 px-2 py-1 rounded">
                      {skill}
                    </span>
                  ))}
                </div>
                <div className="flex justify-center space-x-4">
                  <a href={`mailto:${member.email}`} className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Mail className="w-5 h-5" />
                  </a>
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-cyan-400 hover:text-cyan-300 transition-colors">
                    <Users className="w-5 h-5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                <value.icon className={`w-16 h-16 ${value.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Achievements</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <div className="text-3xl font-bold text-white mb-2">{achievement.metric}</div>
                <div className="text-sm text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Team */}
        <section className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for AI and technology. 
              Explore our open positions and become part of the future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                View Open Positions
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                careers@ziontechgroup.com
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;
