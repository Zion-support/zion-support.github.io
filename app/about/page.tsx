'use client';
import React from 'react';
import { Users, CheckCircle, Star, Shield, Brain, Cloud, Code, BarChart, Zap, Target, Globe, Database, Award, TrendingUp, Phone, Mail, MapPin, Clock } from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and enterprise technology.',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Leadership']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      image: '/team/sarah-chen.jpg',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing.',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      image: '/team/michael-rodriguez.jpg',
      bio: 'Technology architect specializing in scalable cloud solutions.',
      expertise: ['Cloud Architecture', 'DevOps', 'Security']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Research',
      image: '/team/emily-watson.jpg',
      bio: 'Leading researcher in autonomous systems and robotics.',
      expertise: ['Robotics', 'Autonomous Systems', 'Innovation']
    }
  ];

  const achievements = [
    { icon: Award, number: '50+', label: 'Successful Projects' },
    { icon: Users, number: '100+', label: 'Happy Clients' },
    { icon: TrendingUp, number: '300%', label: 'Average ROI' },
    { icon: Shield, number: '99.9%', label: 'Uptime Guarantee' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and technology solutions.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we build.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering measurable results.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more efficient, and more connected.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-24 pt-32">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Leading the future of AI and IT solutions with innovation, expertise, and unwavering commitment to excellence.
          </p>
        </div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Founded in 2020, Zion Tech Group emerged from a vision to democratize advanced AI and IT solutions 
              for enterprises worldwide. What started as a small team of passionate technologists has grown into 
              a global leader in artificial intelligence, quantum computing, and digital transformation.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our journey began when our founder, Kleber Santos, recognized the immense potential of AI to 
              transform businesses but saw a gap in accessible, enterprise-grade solutions. Today, we serve 
              over 100 clients across 15 countries, delivering cutting-edge technology that drives real results.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">Mission</h3>
                <p className="text-gray-300">Empowering businesses with AI-driven solutions</p>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Our Vision</h3>
              <p className="text-gray-300">
                To be the world's leading provider of AI and IT solutions, creating a future where technology 
                seamlessly integrates with human potential to solve the world's most complex challenges.
              </p>
            </div>
            <div className="cyber-card p-6">
              <h3 className="text-xl font-bold text-white mb-4">Core Values</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Innovation and Excellence</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Client-Centric Approach</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Ethical AI Development</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-cyan-400" />
                  <span>Continuous Learning</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div key={index} className="cyber-card p-6 text-center">
              <achievement.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl font-bold text-white mb-2">{achievement.number}</div>
              <div className="text-gray-300">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Team */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-slate-800 text-cyan-400 text-xs rounded">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact CTA */}
        <div className="cyber-card p-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Join the growing number of businesses that trust Zion Tech Group for their AI and IT needs. 
            Let's discuss how we can help transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:+13024640950"
              className="cyber-button inline-flex items-center justify-center"
            >
              <Phone className="w-4 h-4 mr-2" />
              Call (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center justify-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              <Mail className="w-4 h-4 mr-2" />
              Get In Touch
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;