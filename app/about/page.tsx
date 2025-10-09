'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Users, 
  Award, 
  Target, 
  TrendingUp, 
  Globe, 
  Shield, 
  Brain, 
  Cloud, 
  Zap, 
  CheckCircle, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin, 
  Star, 
  Clock, 
  BarChart, 
  Code, 
  Database, 
  Settings, 
  MessageSquare,
  Eye,
  Cpu,
  Lock,
  Smartphone,
  FileText,
  Palette,
  ShoppingCart,
  CreditCard,
  Video,
  Music,
  Calendar,
  Download,
  Play,
  Monitor,
  Network,
  Key,
  AlertTriangle,
  CheckSquare,
  RefreshCw,
  Layers,
  Activity
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      position: 'CEO & Founder',
      image: '/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
    },
    {
      name: 'Dr. Sarah Chen',
      position: 'Chief AI Officer',
      image: '/team/sarah.jpg',
      bio: 'AI research expert with PhD in Machine Learning from MIT',
      expertise: ['Machine Learning', 'Neural Networks', 'AI Research']
    },
    {
      name: 'Michael Rodriguez',
      position: 'CTO',
      image: '/team/michael.jpg',
      bio: 'Technology architect with expertise in cloud infrastructure and DevOps',
      expertise: ['Cloud Architecture', 'DevOps', 'System Design']
    },
    {
      name: 'Emily Johnson',
      position: 'Head of Product',
      image: '/team/emily.jpg',
      bio: 'Product strategist focused on user experience and business growth',
      expertise: ['Product Strategy', 'UX Design', 'Growth Marketing']
    }
  ];

  const achievements = [
    {
      icon: Award,
      number: '500+',
      title: 'Successful Projects',
      description: 'Delivered innovative solutions across various industries'
    },
    {
      icon: Users,
      number: '1000+',
      title: 'Happy Clients',
      description: 'Trusted by businesses worldwide for their technology needs'
    },
    {
      icon: TrendingUp,
      number: '300%',
      title: 'Average ROI',
      description: 'Our clients see significant returns on their technology investments'
    },
    {
      icon: Shield,
      number: '99.9%',
      title: 'Uptime Guarantee',
      description: 'Reliable and secure solutions with enterprise-grade availability'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology, staying ahead of industry trends and delivering cutting-edge solutions.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Our success is measured by our clients\' success. We are committed to understanding their needs and delivering solutions that drive real business value.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We prioritize security and data protection in everything we do, ensuring our clients can trust us with their most sensitive information.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better. Our solutions are designed to create positive impact and drive sustainable growth.'
    }
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Machine Learning, Deep Learning, NLP, Computer Vision' },
    { name: 'Cloud Computing', icon: Cloud, description: 'AWS, Azure, Google Cloud, Multi-cloud Architecture' },
    { name: 'Cybersecurity', icon: Shield, description: 'Threat Detection, Compliance, Security Monitoring' },
    { name: 'Data Analytics', icon: BarChart, description: 'Business Intelligence, Predictive Analytics, Data Visualization' },
    { name: 'Mobile Development', icon: Smartphone, description: 'iOS, Android, Cross-platform Solutions' },
    { name: 'Web Development', icon: Code, description: 'React, Node.js, Full-stack Applications' }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'SOC 2 Type II', description: 'Security, Availability, and Confidentiality' },
    { name: 'AWS Advanced Partner', description: 'Cloud Infrastructure Solutions' },
    { name: 'Microsoft Gold Partner', description: 'Azure and Office 365 Solutions' },
    { name: 'Google Cloud Partner', description: 'AI and Machine Learning Services' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI-powered solutions and IT services. Our mission is to transform businesses through innovative technology." />
        <meta name="keywords" content="about us, AI company, IT services provider, technology solutions, business transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                We are a leading technology company specializing in AI-powered solutions, 
                IT services, and digital transformation. Our mission is to empower businesses 
                with cutting-edge technology that drives growth, efficiency, and innovation.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Award className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">Est. 2020</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Globe className="w-5 h-5 text-blue-400" />
                  <span className="text-white">Global Reach</span>
                </div>
                <div className="flex items-center space-x-2 bg-slate-800/50 px-4 py-2 rounded-lg">
                  <Shield className="w-5 h-5 text-green-400" />
                  <span className="text-white">Enterprise Security</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 cyber-card">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize access to advanced AI and IT solutions, enabling businesses of all sizes 
                to leverage cutting-edge technology for growth, efficiency, and competitive advantage. 
                We believe technology should be accessible, reliable, and transformative.
              </p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 cyber-card">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the world's leading provider of AI-powered business solutions, creating a future 
                where every organization can harness the power of artificial intelligence and advanced 
                technology to solve complex challenges and achieve unprecedented success.
              </p>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Achievements</h2>
            <p className="text-gray-300 text-lg">Numbers that speak for our success and impact</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{achievement.number}</div>
                <div className="text-xl font-semibold text-white mb-2">{achievement.title}</div>
                <div className="text-gray-400 text-sm">{achievement.description}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Our Values */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Values</h2>
            <p className="text-gray-300 text-lg">The principles that guide everything we do</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-8 cyber-card hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Meet Our Team</h2>
            <p className="text-gray-300 text-lg">The experts behind our innovative solutions</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <div className="text-cyan-400 font-medium mb-3">{member.position}</div>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="space-y-1">
                  {member.expertise.map((skill, skillIndex) => (
                    <div key={skillIndex} className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technologies We Use */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Technologies We Use</h2>
            <p className="text-gray-300 text-lg">Cutting-edge tools and platforms for optimal results</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card hover:bg-slate-800/70 transition-all duration-300">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white">{tech.name}</h3>
                </div>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="container mx-auto px-4 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Certifications & Compliance</h2>
            <p className="text-gray-300 text-lg">Trusted by industry standards and regulations</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 cyber-card text-center hover:bg-slate-800/70 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{cert.name}</h3>
                <p className="text-gray-300 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="container mx-auto px-4 mb-16">
          <div className="bg-gradient-to-r from-cyan-600/20 to-purple-600/20 rounded-lg p-8 cyber-card text-center">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">Ready to Work With Us?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our innovative solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center space-x-2">
                <Phone className="w-5 h-5" />
                <span>Schedule Consultation</span>
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <Download className="w-5 h-5" />
                <span>Download Company Profile</span>
              </button>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="container mx-auto px-4 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Call Us</h3>
              <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
              <p className="text-gray-400 text-sm">24/7 Support Available</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Email Us</h3>
              <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
              <p className="text-gray-400 text-sm">Quick Response Guaranteed</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Visit Us</h3>
              <p className="text-cyan-400 font-medium">Middletown, DE</p>
              <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;