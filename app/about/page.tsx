import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Users, CheckCircle, Star, Shield, Award, TrendingUp, Globe, Brain, Cloud, Code, BarChart, Zap, Target, Calendar, FileText, Settings, CheckSquare, Phone, Mail, MapPin, Clock, MessageSquare, Building, Globe as GlobeIcon, Award as AwardIcon, Target as TargetIcon, Star as StarIcon, ArrowRight, Sparkles, Cpu, Database, Smartphone, Lock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: "Dr. Kleber Santos",
      role: "CEO & Founder",
      image: "/images/team/kleber.jpg",
      bio: "AI researcher with 15+ years in enterprise solutions",
      expertise: ["AI Strategy", "Quantum Computing", "Leadership"]
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      image: "/images/team/sarah.jpg", 
      bio: "Former Google AI engineer, expert in machine learning",
      expertise: ["Machine Learning", "Cloud Architecture", "DevOps"]
    },
    {
      name: "Michael Rodriguez",
      role: "Head of AI Research",
      image: "/images/team/michael.jpg",
      bio: "PhD in Computer Science, published researcher",
      expertise: ["Deep Learning", "NLP", "Computer Vision"]
    }
  ];

  const values = [
    {
      icon: Brain,
      title: "Innovation First",
      description: "We push the boundaries of what's possible with AI and technology"
    },
    {
      icon: Shield,
      title: "Security & Trust",
      description: "Enterprise-grade security and compliance in everything we build"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success - we're committed to your growth"
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Building solutions that make a positive impact worldwide"
    }
  ];

  const achievements = [
    { icon: Award, number: "50+", label: "Awards Won" },
    { icon: Users, number: "500+", label: "Happy Clients" },
    { icon: TrendingUp, number: "300%", label: "Average ROI" },
    { icon: Shield, number: "99.9%", label: "Uptime Guarantee" }
  ];

  return (
    <div className="min-h-screen bg-slate-900 cyber-grid">
      <Navigation />
      <SEOOptimizer 
        title="About Zion Tech Group - AI & IT Solutions"
        description="Learn about our mission to revolutionize business through AI, quantum computing, and autonomous systems. Meet our expert team and discover our values."
        keywords="about us, AI company, team, mission, values, leadership"
      />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 neural-network-bg">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span className="text-cyan-400 text-sm font-medium">About Zion Tech Group</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold text-white leading-tight">
              Pioneering the
              <span className="block holographic-text cyber-text">Future of Technology</span>
            </h1>
            
            <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
              Founded in 2020, Zion Tech Group has been at the forefront of AI innovation, 
              helping enterprises transform their operations through cutting-edge technology 
              and intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our Mission</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  To democratize artificial intelligence and make advanced technology accessible 
                  to businesses of all sizes. We believe that every organization should have 
                  access to the tools that will define the future of work.
                </p>
              </div>
              
              <div>
                <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our Vision</h2>
                <p className="text-lg text-gray-300 leading-relaxed">
                  A world where AI and human intelligence work in perfect harmony, creating 
                  unprecedented opportunities for growth, innovation, and positive impact 
                  on society.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-2xl border border-cyan-400/30 cyber-scan-line flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto energy-pulse">
                    <Brain className="w-12 h-12 text-white" />
                  </div>
                  <div className="text-cyan-400 font-bold text-xl">AI + Human</div>
                  <div className="text-gray-300">Perfect Harmony</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-slate-800/50 to-purple-900/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="quantum-card p-8 text-center space-y-4">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <value.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class experts in AI, quantum computing, and enterprise solutions.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="quantum-card p-8 text-center space-y-6">
                <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto">
                  <span className="text-4xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-gradient-to-br from-purple-900/20 to-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">Our Achievements</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center space-y-4">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto">
                  <achievement.icon className="w-10 h-10 text-cyan-400" />
                </div>
                <div className="text-4xl font-bold text-white neon-text">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="quantum-card p-12 text-center space-y-8">
            <h2 className="text-4xl font-bold text-white neon-text">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Join hundreds of companies that have already revolutionized their operations 
              with our AI-powered solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="cyber-button inline-flex items-center justify-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 group"
              >
                <span>Get Started Today</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;