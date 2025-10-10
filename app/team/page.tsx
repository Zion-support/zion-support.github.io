'use client';
import React from 'react';
import { Brain, Award, Users, Globe, Code, Shield, Zap, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Linkedin, Twitter, Github } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEO from '../components/EnhancedSEO';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      bio: 'AI researcher and technology visionary with 15+ years of experience in machine learning and enterprise solutions.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: 'https://linkedin.com/in/klebersantos',
      twitter: 'https://twitter.com/klebersantos',
      github: 'https://github.com/klebersantos',
      expertise: ['AI/ML', 'Leadership', 'Strategy', 'Research']
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      bio: 'Full-stack architect and cloud computing expert specializing in scalable AI infrastructure and DevOps.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: 'https://linkedin.com/in/sarahchen',
      twitter: 'https://twitter.com/sarahchen',
      github: 'https://github.com/sarahchen',
      expertise: ['Cloud Architecture', 'DevOps', 'AI Infrastructure', 'Security']
    },
    {
      name: 'Marcus Johnson',
      role: 'Head of AI Research',
      bio: 'PhD in Computer Science with expertise in deep learning, natural language processing, and quantum computing.',
      image: '/images/team/marcus-johnson.jpg',
      linkedin: 'https://linkedin.com/in/marcusjohnson',
      twitter: 'https://twitter.com/marcusjohnson',
      github: 'https://github.com/marcusjohnson',
      expertise: ['Deep Learning', 'NLP', 'Quantum Computing', 'Research']
    },
    {
      name: 'Elena Rodriguez',
      role: 'Head of Product',
      bio: 'Product strategist with a passion for user experience and AI-powered solutions that drive business value.',
      image: '/images/team/elena-rodriguez.jpg',
      linkedin: 'https://linkedin.com/in/elenarodriguez',
      twitter: 'https://twitter.com/elenarodriguez',
      github: 'https://github.com/elenarodriguez',
      expertise: ['Product Strategy', 'UX/UI', 'AI Products', 'Business Analysis']
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      bio: 'Senior software engineer with expertise in distributed systems, microservices, and AI model deployment.',
      image: '/images/team/david-kim.jpg',
      linkedin: 'https://linkedin.com/in/davidkim',
      twitter: 'https://twitter.com/davidkim',
      github: 'https://github.com/davidkim',
      expertise: ['Distributed Systems', 'Microservices', 'AI Deployment', 'Backend']
    },
    {
      name: 'Amanda Foster',
      role: 'Head of Cybersecurity',
      bio: 'Cybersecurity expert with certifications in ethical hacking and AI security, protecting enterprise systems.',
      image: '/images/team/amanda-foster.jpg',
      linkedin: 'https://linkedin.com/in/amandafoster',
      twitter: 'https://twitter.com/amandafoster',
      github: 'https://github.com/amandafoster',
      expertise: ['Cybersecurity', 'AI Security', 'Ethical Hacking', 'Compliance']
    }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, always seeking the next breakthrough.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'We believe in the power of diverse teams working together to solve complex challenges.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'We prioritize security and ethical AI practices in everything we build and deploy.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We\'re committed to using technology to solve real-world problems and create positive change.'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Years Experience' },
    { number: '25+', label: 'Countries Served' },
    { number: '99.9%', label: 'Uptime SLA' }
  ];

  return (
    <EnhancedSEO
      title="Our Team - Zion Tech Group"
      description="Meet the talented team of AI researchers, engineers, and technology experts driving innovation at Zion Tech Group."
      keywords={['team', 'leadership', 'AI experts', 'technology team', 'Zion Tech Group team']}
      canonicalUrl="https://ziontechgroup.com/team"
    >
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Meet Our
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Expert Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Our diverse team of AI researchers, engineers, and technology experts is dedicated to 
                pushing the boundaries of what's possible with artificial intelligence and technology.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-cyan-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Members */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our leadership team brings together decades of experience in AI, technology, and business strategy.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div
                  key={index}
                  className="bg-slate-800/80 backdrop-blur-sm border border-cyan-400/20 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {member.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {member.bio}
                    </p>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-medium mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="bg-cyan-400/20 text-cyan-300 px-3 py-1 rounded-full text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4">
                    <a
                      href={member.linkedin}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={member.twitter}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                    <a
                      href={member.github}
                      className="text-gray-400 hover:text-cyan-400 transition-colors"
                      aria-label="GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our work and shape our culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Join Our Team
              </h2>
              <p className="text-xl text-cyan-100 mb-8">
                We're always looking for talented individuals who share our passion for AI and technology. 
                Explore our open positions and be part of the future.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="/careers"
                  className="bg-white text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-50 transition-colors"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="flex items-center space-x-2 text-white hover:text-cyan-100 transition-colors text-lg font-medium"
                >
                  <Mail className="w-5 h-5" />
                  <span>Contact Us</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </EnhancedSEO>
  );
};

export default TeamPage;