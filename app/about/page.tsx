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
      bio: 'Leading researcher in natural language processing and computer vision',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology, staying ahead of industry trends and delivering cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security is at the core of everything we do. We protect your data and systems with bank-level security measures and compliance standards.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We believe in building long-term partnerships with our clients, working closely with them to understand their unique needs and deliver tailored solutions.'
    },
    {
      icon: Globe,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards and delivering results that exceed expectations.'
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions in enterprise automation',
      icon: Award
    },
    {
      year: '2023',
      title: 'Best Tech Startup',
      description: 'Named top AI startup by TechCrunch and Forbes',
      icon: Star
    },
    {
      year: '2022',
      title: 'ISO 27001 Certification',
      description: 'Achieved highest security standards for data protection',
      icon: Shield
    },
    {
      year: '2021',
      title: 'Series A Funding',
      description: 'Raised $25M to accelerate AI research and development',
      icon: TrendingUp
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer 
        title="About Zion Tech Group - Leading AI & IT Solutions"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions that transform businesses worldwide."
        keywords="about us, AI company, IT solutions, team, mission, values"
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
            Pioneering the future of AI and IT solutions with cutting-edge technology, 
            innovative thinking, and unwavering commitment to excellence.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize artificial intelligence and make cutting-edge technology 
                accessible to businesses of all sizes. We believe that AI should be a 
                force for good, driving innovation, efficiency, and growth across all industries.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our mission is to bridge the gap between complex AI technologies and 
                practical business applications, ensuring that every organization can 
                harness the power of artificial intelligence to achieve their goals.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center text-purple-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Innovation First</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Client Success</span>
                </div>
                <div className="flex items-center text-purple-400">
                  <CheckCircle className="w-5 h-5 mr-2" />
                  <span>Ethical AI</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-2xl p-8 backdrop-blur-sm border border-purple-500/30">
                <div className="text-center">
                  <Brain className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Future</h3>
                  <p className="text-gray-300">
                    We're building the foundation for a world where AI enhances human 
                    capabilities and creates unprecedented opportunities for growth.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative AI and IT solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Milestones that showcase our commitment to excellence and innovation
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-xl p-6 backdrop-blur-sm border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 group">
                <div className="flex items-center justify-between mb-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-purple-400 font-bold">{achievement.year}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-12 backdrop-blur-sm border border-purple-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations 
              with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25">
                Get Started Today
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;