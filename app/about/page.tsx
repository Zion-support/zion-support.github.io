'use client';
import React from 'react';
import { Users, Award, Target, Globe, Shield, Zap, Brain, Code, BarChart, TrendingUp, CheckCircle, Star } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      image: '/team/sarah-chen.jpg',
      bio: 'Technical architect specializing in scalable AI systems',
      expertise: ['Machine Learning', 'Cloud Infrastructure', 'System Design']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      image: '/team/michael-rodriguez.jpg',
      bio: 'Leading researcher in quantum computing and autonomous systems',
      expertise: ['Quantum Computing', 'Neural Networks', 'Research & Development']
    }
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
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.'
    },
    {
      icon: Target,
      title: 'Client Success',
      description: 'We measure our success by the measurable impact we create for our clients\' businesses.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Building solutions that scale globally and make a positive impact on society.'
    }
  ];

  const achievements = [
    { number: '50+', label: 'Successful Projects', icon: Award },
    { number: '100+', label: 'Happy Clients', icon: Users },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 neon-text">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are pioneers in AI-powered enterprise solutions, transforming businesses through 
              cutting-edge technology, quantum computing, and autonomous systems.
            </p>
            <div className="flex flex-wrap justify-center gap-8 mt-12">
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white">{achievement.number}</div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize advanced AI technology and make it accessible to businesses of all sizes, 
                  enabling them to achieve unprecedented levels of efficiency, innovation, and growth through 
                  intelligent automation and data-driven insights.
                </p>
              </div>
              <div className="cyber-card p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-4">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the global leader in AI-powered enterprise solutions, creating a future where 
                  intelligent systems seamlessly integrate with human creativity to solve the world's 
                  most complex challenges and drive sustainable progress.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-transform duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
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
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-4xl font-bold text-white text-center mb-16 neon-text">
              Meet Our Team
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                    <Users className="w-16 h-16 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-4">{member.role}</p>
                  <p className="text-gray-300 mb-4">{member.bio}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.expertise.map((skill, skillIndex) => (
                      <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="cyber-card p-12">
              <h2 className="text-4xl font-bold text-white text-center mb-12 neon-text">
                Our Story
              </h2>
              <div className="max-w-4xl mx-auto">
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Founded in 2020, Zion Tech Group emerged from a vision to bridge the gap between 
                  cutting-edge AI research and practical business applications. Our founders, having 
                  witnessed the transformative potential of AI in enterprise environments, set out to 
                  create solutions that would democratize access to advanced technology.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Starting as a small team of AI researchers and engineers, we quickly gained recognition 
                  for our innovative approach to solving complex business challenges. Our early success 
                  in implementing AI solutions for Fortune 500 companies established us as a trusted 
                  partner in digital transformation.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Today, we continue to push the boundaries of what's possible, investing heavily in 
                  quantum computing, autonomous systems, and next-generation AI technologies. Our 
                  commitment to research and development ensures that our clients always have access 
                  to the most advanced solutions available.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join the hundreds of companies that have already transformed their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button inline-flex items-center px-8 py-4 text-lg"
              >
                <Zap className="w-5 h-5 mr-2" />
                Get Started Today
              </a>
              <a
                href="/case-studies"
                className="cyber-button-secondary inline-flex items-center px-8 py-4 text-lg"
              >
                <CheckCircle className="w-5 h-5 mr-2" />
                View Case Studies
              </a>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default AboutPage;