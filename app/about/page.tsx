'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, Zap, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, TrendingUp, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AboutPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: BarChart },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.webp',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.webp',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '/images/team/michael-rodriguez.webp',
      bio: 'Full-stack architect specializing in scalable AI systems',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '/images/team/emily-watson.webp',
      bio: 'Leading researcher in neural networks and deep learning applications',
      expertise: ['Deep Learning', 'Neural Networks', 'AI Ethics', 'Research']
    }
  ];

  const industries = [
    { name: 'Healthcare', icon: Stethoscope, description: 'AI-powered diagnostics and treatment optimization' },
    { name: 'Finance', icon: BarChart, description: 'Fraud detection and algorithmic trading solutions' },
    { name: 'Manufacturing', icon: Factory, description: 'Predictive maintenance and quality control' },
    { name: 'Education', icon: GraduationCap, description: 'Personalized learning and intelligent tutoring' },
    { name: 'Retail', icon: ShoppingBag, description: 'Customer analytics and inventory optimization' },
    { name: 'Transportation', icon: Car, description: 'Autonomous vehicles and route optimization' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="About Zion Tech Group - Leading AI & IT Solutions Provider"
        description="Learn about Zion Tech Group's mission, team, and expertise in AI, machine learning, and enterprise IT solutions. Discover our innovative approach to technology."
        keywords="AI company, machine learning, enterprise solutions, technology consulting, artificial intelligence"
      />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            About
            <span className="block bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            We are a leading technology company specializing in AI, machine learning, and enterprise solutions. 
            Our mission is to transform businesses through innovative technology and cutting-edge AI solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  <stat.icon className="w-12 h-12 text-purple-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6">
                To democratize artificial intelligence and make advanced technology accessible to businesses of all sizes. 
                We believe in the power of AI to solve complex problems and create meaningful impact.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Innovation First</h3>
                    <p className="text-gray-300">We stay at the forefront of technology, constantly exploring new possibilities in AI and machine learning.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Client Success</h3>
                    <p className="text-gray-300">Your success is our success. We work closely with clients to understand their unique challenges and deliver tailored solutions.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">Ethical AI</h3>
                    <p className="text-gray-300">We develop AI solutions that are fair, transparent, and beneficial to society as a whole.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
              <h3 className="text-2xl font-bold text-white mb-6">Our Values</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Shield className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Integrity</h4>
                    <p className="text-gray-300">We maintain the highest ethical standards in all our work.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Brain className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Innovation</h4>
                    <p className="text-gray-300">We continuously push the boundaries of what's possible with AI.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Users className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Collaboration</h4>
                    <p className="text-gray-300">We work together with our clients as partners in success.</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Award className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h4 className="text-lg font-semibold text-white">Excellence</h4>
                    <p className="text-gray-300">We strive for excellence in everything we do.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, machine learning, 
              and enterprise technology solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work across diverse industries, bringing AI solutions that drive real business value.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <industry.icon className="w-8 h-8 text-purple-400 mr-3" />
                  <h3 className="text-xl font-semibold text-white">{industry.name}</h3>
                </div>
                <p className="text-gray-300">{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how our AI solutions can help your business achieve its goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Get Started Today
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
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