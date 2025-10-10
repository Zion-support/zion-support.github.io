'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {
  Brain,
  Users,
  Target,
  Award,
  Globe,
  CheckCircle,
  ArrowRight,
  BarChart,
  Zap,
  Shield,
  Code,
  Cloud,
  Database,
  Smartphone,
  Lock,
  TrendingUp,
  Settings,
  Calendar,
  CheckSquare,
  FileText
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      expertise: 'AI Strategy & Leadership',
      image: '/images/team/sarah-johnson.jpg',
      bio: '20+ years in AI research and enterprise technology leadership.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      expertise: 'Quantum Computing & Cloud Architecture',
      image: '/images/team/michael-chen.jpg',
      bio: 'Leading expert in quantum computing and distributed systems.'
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & Neural Networks',
      image: '/images/team/emily-rodriguez.jpg',
      bio: 'Pioneer in advanced machine learning algorithms and applications.'
    },
    {
      name: 'James Wilson',
      role: 'Head of Cybersecurity',
      expertise: 'Cybersecurity & Risk Management',
      image: '/images/team/james-wilson.jpg',
      bio: 'Cybersecurity expert with 15+ years protecting enterprise systems.'
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering exceptional results.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better for everyone.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed' },
    { number: '50+', label: 'Expert Team Members' },
    { number: '99.9%', label: 'Client Satisfaction Rate' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions for modern businesses." />
        <meta name="keywords" content="about us, AI company, IT solutions, team, mission, values, technology leadership" />
      </Helmet>

      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]" />
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Zion Tech Group</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                We're a team of passionate technologists dedicated to transforming businesses through 
                cutting-edge AI and IT solutions. Our mission is to make advanced technology accessible 
                and beneficial for organizations of all sizes.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  To democratize access to advanced AI and IT technologies, enabling businesses to 
                  innovate, grow, and thrive in the digital age. We believe that every organization, 
                  regardless of size, should have access to world-class technology solutions.
                </p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Empowering businesses with AI-driven solutions</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Building secure, scalable, and efficient systems</p>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle className="w-6 h-6 text-cyan-400 mr-3 mt-1 flex-shrink-0" />
                    <p className="text-gray-300">Fostering innovation through cutting-edge technology</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the world's leading provider of AI and IT solutions, recognized for our 
                  innovation, reliability, and commitment to client success. We envision a future 
                  where technology seamlessly integrates with business operations to create 
                  unprecedented value and opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 text-center hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-24 bg-gradient-to-b from-slate-800 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                cybersecurity, cloud computing, and digital transformation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                  <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                  <p className="text-sm text-gray-300">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Achievements</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Numbers that reflect our commitment to excellence and client success.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="text-center bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8"
                >
                  <div className="text-4xl font-bold text-cyan-400 mb-2">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our team can help transform your business with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-2xl transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/25 hover:scale-105"
              >
                <span className="relative z-10">Get In Touch</span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-700 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              <a
                href="/careers"
                className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-2xl transition-all duration-300 hover:bg-cyan-400 hover:text-slate-900 hover:scale-105"
              >
                Join Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AboutPage;