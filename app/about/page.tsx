'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  Award,
  Target,
  Globe,
  Shield,
  Brain,
  BarChart,
  CheckCircle,
  User,
  GraduationCap,
  Phone,
  Mail,
  Stethoscope,
  Factory,
  Car,
  ShoppingBag
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      expertise: 'AI Strategy & Leadership',
      image: '/images/team/sarah-johnson.jpg',
      bio: '20+ years in AI and technology leadership, former VP at Google AI.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      expertise: 'Quantum Computing & AI',
      image: '/images/team/michael-chen.jpg',
      bio: 'Leading expert in quantum algorithms and machine learning systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & NLP',
      image: '/images/team/emily-rodriguez.jpg',
      bio: 'PhD in Computer Science, published researcher in AI and robotics.'
    },
    {
      name: 'David Kim',
      role: 'VP of Engineering',
      expertise: 'Cloud Infrastructure & DevOps',
      image: '/images/team/david-kim.jpg',
      bio: '15+ years building scalable cloud platforms and distributed systems.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, always seeking the next breakthrough.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security and compliance standards.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering measurable results and ROI.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more efficient, and more connected.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Delivered' },
    { number: '300%', label: 'Average ROI' },
    { number: '50+', label: 'Countries Served' },
    { number: '24/7', label: 'Support Available' }
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
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI, machine learning, and enterprise IT solutions. Discover our innovative approach to technology." />
        <meta name="keywords" content="about us, AI company, machine learning, enterprise solutions, technology consulting, artificial intelligence, team" />
      </Helmet>

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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
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

      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              World-class experts in AI, quantum computing, and enterprise technology
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <User className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <div className="text-cyan-400 font-medium mb-2">
                    {member.role}
                  </div>
                  <div className="text-sm text-gray-300 mb-3">
                    {member.expertise}
                  </div>
                  <p className="text-sm text-gray-400">
                    {member.bio}
                  </p>
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
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of companies already using our AI solutions to drive growth and innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Get Started Today
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;