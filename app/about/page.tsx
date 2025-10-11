'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, Target, Award, ArrowRight, CheckCircle, Brain, Cloud, Shield, Zap, BarChart, Heart, MessageCircle, Settings, Globe, Cpu, Database, Lock, TrendingUp, Star, Quote, Building, GraduationCap, ThumbsUp, Share2, Bookmark, Eye, Play, Download, ExternalLink, ChevronRight, Phone, Mail, MapPin, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong relationships with our clients.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to customer service.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: '15+ years in AI and technology leadership, passionate about transforming businesses through innovation.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in machine learning and cloud architecture with a focus on scalable solutions.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'Leading our AI research initiatives and developing cutting-edge algorithms.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Design',
      description: 'Passionate about creating beautiful, user-centered experiences that delight users.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      description: 'Full-stack developer specializing in modern web technologies and cloud platforms.'
    },
    {
      name: 'Lisa Wang',
      role: 'Head of Operations',
      description: 'Ensuring smooth operations and exceptional client experiences across all projects.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Team Members' },
    { number: '99%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  const achievements = [
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Awarded "Best AI Solutions Provider" by TechCrunch in 2024'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Helped 200+ companies transform their operations with AI'
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      description: '300% year-over-year growth in client satisfaction and project delivery'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'SOC 2 Type II certified with enterprise-grade security measures'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're a team of passionate technologists dedicated to transforming businesses through innovative AI and IT solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize access to cutting-edge AI and IT solutions, empowering businesses of all sizes to thrive in the digital age.
              </p>
              <p className="text-lg text-gray-300 mb-8">
                We believe technology should be accessible, understandable, and transformative. Our team works tirelessly to create solutions that not only meet today's needs but anticipate tomorrow's challenges.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center">
                Learn More
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Impact</h3>
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                    <div className="text-gray-300">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Values
            </h2>
            <p className="text-xl text-gray-300">
              The principles that guide everything we do.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-300">
              The talented individuals behind our success.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-300">
              Recognition and milestones that define our journey.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
              Get Started
            </button>
            <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-medium transition-all duration-300">
              Contact Us
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;