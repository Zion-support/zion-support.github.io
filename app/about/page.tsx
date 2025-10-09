'use client';
import React from 'react';
import { Users, Award, Target, Globe, Phone, Mail, MapPin, CheckCircle, Star, TrendingUp, Shield, Zap, Brain, Cloud, Code, BarChart, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'AI and quantum computing expert with 15+ years in enterprise technology solutions.',
      expertise: ['AI Research', 'Quantum Computing', 'Enterprise Architecture']
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Leading expert in machine learning and cloud infrastructure with a focus on scalable AI systems.',
      expertise: ['Machine Learning', 'Cloud Architecture', 'DevOps']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      image: '/images/team/michael.jpg',
      bio: 'PhD in Computer Science specializing in neural networks and autonomous systems.',
      expertise: ['Neural Networks', 'Autonomous Systems', 'Research']
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Cybersecurity',
      image: '/images/team/emily.jpg',
      bio: 'Cybersecurity expert with extensive experience in enterprise security and compliance.',
      expertise: ['Cybersecurity', 'Compliance', 'Risk Management']
    }
  ];

  const achievements = [
    { icon: Award, number: '500+', label: 'Projects Completed' },
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI' },
    { icon: Shield, number: '99.9%', label: 'Uptime Guarantee' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.'
    },
    {
      icon: Target,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the impact we create for our clients.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We maintain the highest standards of security and data protection in everything we do.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more connected, and more sustainable.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="pt-24 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8">
              Pioneering the Future of AI and Technology
            </p>
            <p className="text-lg text-gray-300 mb-12 max-w-4xl mx-auto">
              Founded in 2020, Zion Tech Group has been at the forefront of AI innovation, 
              helping businesses transform through cutting-edge technology solutions. We combine 
              deep technical expertise with a passion for solving complex challenges.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300 font-medium">{achievement.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4 neon-text">Our Mission</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize AI and advanced technology, making it accessible and beneficial 
                  for businesses of all sizes. We believe that every organization should have 
                  access to cutting-edge AI solutions that can transform their operations and 
                  drive unprecedented growth.
                </p>
              </div>
              <div className="cyber-card p-8">
                <h2 className="text-2xl font-bold text-white mb-4 neon-text">Our Vision</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's leading provider of AI-powered solutions, creating a future 
                  where technology seamlessly integrates with human potential to solve the most 
                  complex challenges facing our world today.
                </p>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
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
                  <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-2 py-1 bg-gray-800 text-gray-300 text-xs rounded">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Contact Section */}
          <section className="mb-16">
            <div className="bg-gradient-to-r from-indigo-900/50 to-purple-900/50 rounded-2xl p-8 text-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Join the hundreds of companies that trust Zion Tech Group to transform their business with AI.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg transition-all duration-300 hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
              <div className="mt-8 text-sm text-gray-400">
                <p>📧 kleber@ziontechgroup.com | 📍 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;