'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Globe, Lock, Code2, MessageSquare, Target, TrendingUp, Sparkles, Rocket, Mail, Video, FileText, Smartphone, Cpu, Database, BarChart3, Settings } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: Rocket },
    { number: '99.8%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Globe },
    { number: '150+', label: 'Expert Team Members', icon: Users },
    { number: '50+', label: 'Countries Served', icon: Globe },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '48hr', label: 'Response Time', icon: MessageSquare }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      bio: 'AI and technology visionary with 15+ years of experience in enterprise solutions.',
      image: 'KS',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Leadership']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      bio: 'Cloud infrastructure expert and technical architect with deep expertise in scalable systems.',
      image: 'SJ',
      expertise: ['Cloud Computing', 'DevOps', 'System Architecture']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      bio: 'Machine learning researcher and AI specialist with PhD in Computer Science.',
      image: 'MC',
      expertise: ['Machine Learning', 'Deep Learning', 'Research']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      bio: 'Cybersecurity expert with extensive experience in enterprise security solutions.',
      image: 'ER',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures.',
      color: 'from-red-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering exceptional results.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service.',
      color: 'from-cyan-500 to-blue-500'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions company, team, mission, values" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Pioneering the future of AI and IT solutions with cutting-edge technology and expert consulting
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Mission</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 leading-relaxed">
              To democratize access to cutting-edge AI and IT solutions, empowering businesses of all sizes 
              to leverage technology for growth, innovation, and competitive advantage. We believe that 
              technology should be accessible, reliable, and transformative.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="w-8 h-8 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Pushing the boundaries of what's possible with AI and technology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Empowerment</h3>
                <p className="text-gray-300">Enabling businesses to achieve their full potential through technology</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Trust</h3>
                <p className="text-gray-300">Building secure, reliable solutions that businesses can depend on</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence and client success
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-cyan-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {member.image}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-semibold mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-cyan-500/10 text-cyan-400 text-xs rounded-full">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
            <div className="relative z-10">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how our team can help transform your business with cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
                >
                  Get In Touch
                </Link>
                <Link 
                  to="/services"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  View Our Services
                </Link>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📞 +1 302 464 0950</p>
                <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
