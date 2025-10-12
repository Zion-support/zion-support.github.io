'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  ArrowRight, Users, Shield, Globe, Brain, Cloud, CheckCircle, Award, Zap, Code, Star
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Cutting-edge artificial intelligence to transform your business operations',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Tailored software solutions built with modern technologies',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'CEO & AI Research Director',
      image: '/api/placeholder/300/300',
      bio: 'Leading AI researcher with 15+ years in machine learning and neural networks.'
    },
    {
      name: 'Michael Chen',
      role: 'CTO & Cloud Architect',
      image: '/api/placeholder/300/300',
      bio: 'Expert in cloud infrastructure and scalable system design.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Cybersecurity',
      image: '/api/placeholder/300/300',
      bio: 'Cybersecurity specialist with expertise in threat detection and prevention.'
    },
    {
      name: 'David Kim',
      role: 'Lead Developer',
      image: '/api/placeholder/300/300',
      bio: 'Full-stack developer passionate about creating innovative solutions.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading technology company providing AI, cloud, cybersecurity, and custom software solutions." />
        <meta name="keywords" content="about zion tech, technology company, ai solutions, cloud services, cybersecurity" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className={`text-5xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company dedicated to transforming businesses through innovative AI solutions,
            robust cloud infrastructure, and cutting-edge cybersecurity services.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Our Core <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Capabilities</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`}>
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            Meet Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Team</span>
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our technology solutions can help your business grow and succeed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              View Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
