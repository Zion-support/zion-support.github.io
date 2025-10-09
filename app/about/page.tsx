'use client';
import React from 'react';
import { Brain, Users, Award, Target, CheckCircle, ArrowRight, Phone, Mail, MapPin } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: '🚀' },
    { number: '$50M+', label: 'Client Savings', icon: '💰' },
    { number: '300%', label: 'Average ROI', icon: '📈' },
    { number: '99.9%', label: 'Uptime Guarantee', icon: '⚡' },
    { number: '24/7', label: 'Support Available', icon: '🛡️' },
    { number: '50+', label: 'Expert Team Members', icon: '👥' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.',
      icon: '🧠'
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by the value we create for our clients.',
      icon: '🎯'
    },
    {
      title: 'Quality Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: '⭐'
    },
    {
      title: 'Transparent Communication',
      description: 'We believe in open, honest communication and keep you informed throughout every project.',
      icon: '💬'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI & Quantum Computing',
      description: 'Leading expert in artificial intelligence and quantum computing with 15+ years of experience.',
      image: '👨‍💼'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Machine Learning & Cloud',
      description: 'Former Google engineer specializing in large-scale machine learning systems and cloud architecture.',
      image: '👩‍💻'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Deep Learning & NLP',
      description: 'PhD in Computer Science with expertise in natural language processing and neural networks.',
      image: '👨‍🔬'
    },
    {
      name: 'Emily Johnson',
      role: 'Head of IT Solutions',
      expertise: 'Cybersecurity & DevOps',
      description: 'Cybersecurity expert with extensive experience in enterprise IT infrastructure and DevOps.',
      image: '👩‍🔧'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse glitch" data-text="About Zion Tech Group">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We are a leading technology company specializing in AI solutions, quantum computing, and digital transformation. 
            Our mission is to empower businesses with cutting-edge technology that drives unprecedented growth and innovation.
          </p>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{stat.icon}</div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text flex items-center">
                <Target className="w-8 h-8 mr-3 text-cyan-400" />
                Our Mission
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To democratize access to advanced AI and IT solutions, enabling businesses of all sizes to leverage 
                cutting-edge technology for growth, efficiency, and innovation. We believe technology should be 
                accessible, powerful, and transformative.
              </p>
            </div>
            <div className="cyber-card p-8">
              <h3 className="text-2xl font-bold text-white mb-4 neon-text flex items-center">
                <Brain className="w-8 h-8 mr-3 text-purple-400" />
                Our Vision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                To be the world's leading provider of AI-powered solutions, driving the next generation of 
                technological advancement. We envision a future where artificial intelligence seamlessly integrates 
                with human creativity to solve the world's most complex challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Our Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="text-6xl mb-4">{member.image}</div>
                <h3 className="text-xl font-bold text-white mb-2 neon-text">{member.name}</h3>
                <div className="text-cyan-400 font-semibold mb-2">{member.role}</div>
                <div className="text-purple-400 text-sm mb-3">{member.expertise}</div>
                <p className="text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Proven Expertise</h3>
              </div>
              <p className="text-gray-300">15+ years of experience in AI and IT solutions with a track record of successful implementations.</p>
            </div>
            <div className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Cutting-Edge Technology</h3>
              </div>
              <p className="text-gray-300">We use the latest AI, quantum computing, and IT technologies to deliver superior results.</p>
            </div>
            <div className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">24/7 Support</h3>
              </div>
              <p className="text-gray-300">Round-the-clock support to ensure your systems run smoothly and efficiently.</p>
            </div>
            <div className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Scalable Solutions</h3>
              </div>
              <p className="text-gray-300">Our solutions grow with your business, from startup to enterprise scale.</p>
            </div>
            <div className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">Security First</h3>
              </div>
              <p className="text-gray-300">Bank-level security and compliance to protect your data and operations.</p>
            </div>
            <div className="cyber-card p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="w-6 h-6 text-green-400 mr-3" />
                <h3 className="text-xl font-bold text-white">ROI Guarantee</h3>
              </div>
              <p className="text-gray-300">We guarantee measurable ROI or we'll work with you to achieve your goals.</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Let's discuss how we can help transform your business with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Get Started Today
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default AboutPage;