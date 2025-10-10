'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  BarChart, 
  Users, 
  Zap, 
  Target, 
  Globe, 
  Database, 
  Smartphone, 
  Lock, 
  TrendingUp, 
  Settings, 
  Calendar, 
  CheckSquare, 
  FileText,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
const AboutPage: React.FC = () => {
  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology',
      image: '/team/kleber.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Expert in cloud architecture and AI implementation',
      image: '/team/sarah.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Lead AI Engineer',
      description: 'Machine learning specialist and AI researcher',
      image: '/team/michael.jpg'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security and compliance are at the core of everything we do'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with our clients to understand their unique needs and challenges'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project and deliver results that exceed expectations'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us | Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Our team of experts is dedicated to transforming businesses with cutting-edge technology." />
        <meta name="keywords" content="about us, AI solutions, IT services, team, company, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-cyan-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI solutions, cloud infrastructure, 
            and digital transformation services. Our mission is to help businesses leverage 
            cutting-edge technology to achieve unprecedented growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To democratize AI and advanced technology by making it accessible, 
                affordable, and effective for businesses of all sizes. We believe 
                that every company should have access to the tools they need to 
                compete and thrive in the digital age.
              </p>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h2 className="text-3xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                To be the world's most trusted partner for AI and technology solutions, 
                empowering businesses to transform their operations and achieve 
                sustainable growth through innovative technology.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-8">Get in Touch</h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to transform your business with AI and technology? 
            Let's discuss how we can help you achieve your goals.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center space-x-3">
              <Phone className="w-6 h-6 text-cyan-400" />
              <span className="text-white">+1 (302) 464-0950</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <Mail className="w-6 h-6 text-cyan-400" />
              <span className="text-white">kleber@ziontechgroup.com</span>
            </div>
            <div className="flex items-center justify-center space-x-3">
              <MapPin className="w-6 h-6 text-cyan-400" />
              <span className="text-white">Middletown, DE</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
