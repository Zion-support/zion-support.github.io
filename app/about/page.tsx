'use client';
import React from 'react';
import { Phone, Mail, MapPin, Users, Award, Target, Brain, Cpu, BarChart, Shield, Cloud, Database, CheckCircle, ArrowRight } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOEnhancer from '../components/SEOEnhancer';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI Strategy & Quantum Computing',
      image: '👨‍💼',
      description: '20+ years in AI research and enterprise solutions'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Machine Learning & Cloud Architecture',
      image: '👩‍💻',
      description: 'Former Google AI researcher with 15+ years experience'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      expertise: 'DevOps & Infrastructure',
      image: '👨‍🔧',
      description: 'Expert in scalable systems and automation'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Research',
      expertise: 'Computer Vision & NLP',
      image: '👩‍🔬',
      description: 'PhD in Computer Science, MIT graduate'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '300%', label: 'Average ROI', icon: BarChart }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: Brain
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our worth by your achievements',
      icon: Target
    },
    {
      title: 'Security & Trust',
      description: 'Bank-level security and complete transparency in everything we do',
      icon: Shield
    },
    {
      title: 'Continuous Learning',
      description: 'We stay ahead of the curve with cutting-edge research and development',
      icon: Award
    }
  ];

  return (
    <>
      <SEOEnhancer
        title="About Zion Tech Group - Leading AI and IT Solutions Provider"
        description="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions that transform businesses worldwide."
        keywords={['about zion tech group', 'AI company', 'IT solutions provider', 'team', 'mission', 'values']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
              About Zion Tech Group
            </h1>
            <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
              Pioneering the future of AI and IT solutions since 2020
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a leading technology company specializing in artificial intelligence, 
              quantum computing, and digital transformation solutions that help businesses 
              achieve unprecedented growth and efficiency.
            </p>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To democratize advanced AI and IT technologies, making them accessible 
                  to businesses of all sizes while maintaining the highest standards of 
                  security, reliability, and innovation.
                </p>
                <div className="flex items-center text-cyan-400">
                  <Target className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Empowering Digital Transformation</span>
                </div>
              </div>
              
              <div className="cyber-card p-8">
                <h2 className="text-3xl font-bold text-white mb-4 neon-text">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed mb-6">
                  To be the world's most trusted partner in AI and IT solutions, 
                  creating a future where technology seamlessly integrates with 
                  human potential to solve complex global challenges.
                </p>
                <div className="flex items-center text-purple-400">
                  <Brain className="w-6 h-6 mr-2" />
                  <span className="font-semibold">Shaping Tomorrow's Technology</span>
                </div>
              </div>
            </div>
          </section>

          {/* Achievements */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="cyber-card p-6 text-center">
                  <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <div className="text-3xl font-bold text-white mb-2 neon-text">
                    {achievement.number}
                  </div>
                  <div className="text-gray-300">{achievement.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Values */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3 neon-text">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Team */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-6xl mb-4">{member.image}</div>
                  <h3 className="text-xl font-bold text-white mb-2 neon-text">
                    {member.name}
                  </h3>
                  <div className="text-cyan-400 font-semibold mb-2">{member.role}</div>
                  <div className="text-purple-400 text-sm mb-3">{member.expertise}</div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Company Story */}
          <section className="mb-16">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-300 leading-relaxed">
                <p className="mb-6">
                  Founded in 2020 by Dr. Kleber Santos, Zion Tech Group began as a vision 
                  to bridge the gap between cutting-edge AI research and practical business 
                  applications. What started as a small team of passionate technologists 
                  has grown into a global leader in AI and IT solutions.
                </p>
                <p className="mb-6">
                  Our journey has been marked by breakthrough innovations, including the 
                  development of proprietary quantum computing algorithms, advanced machine 
                  learning frameworks, and revolutionary automation solutions that have 
                  transformed how businesses operate.
                </p>
                <p className="mb-6">
                  Today, we serve over 50 enterprise clients worldwide, delivering solutions 
                  that have generated over $50 million in annual savings and achieved an 
                  average ROI of 300%. Our commitment to excellence and innovation continues 
                  to drive us forward as we shape the future of technology.
                </p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="text-center">
            <div className="cyber-card p-8">
              <h2 className="text-3xl font-bold text-white mb-4 neon-text">
                Ready to Transform Your Business?
              </h2>
              <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
                Let's discuss how our AI and IT solutions can help your organization 
                achieve unprecedented growth and efficiency.
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
                  +1 302 464 0950
                </a>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default AboutPage;