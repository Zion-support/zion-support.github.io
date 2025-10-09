'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, Award, GraduationCap, Briefcase, Globe, Mail, Linkedin, Github, Twitter, Phone, MapPin, Clock, Star, CheckCircle, ArrowRight, Brain, Cloud, Shield, Code, BarChart, Zap, Target, TrendingUp } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'Founder & CEO',
      image: '/team/kleber-santos.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation. Former tech executive with expertise in enterprise AI solutions and digital transformation.',
      expertise: ['AI Strategy', 'Enterprise Solutions', 'Digital Transformation', 'Leadership'],
      education: 'MBA in Technology Management, Computer Science Degree',
      experience: '15+ years',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      email: 'kleber@ziontechgroup.com',
      phone: '+1 (302) 464-0950'
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/team/sarah-chen.jpg',
      bio: 'AI research pioneer with PhD in Machine Learning. Published researcher with expertise in quantum computing and advanced AI algorithms.',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development', 'AI Architecture'],
      education: 'PhD in Computer Science, MIT',
      experience: '12+ years',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      email: 'sarah@ziontechgroup.com'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI Engineering',
      image: '/team/michael-rodriguez.jpg',
      bio: 'Senior AI engineer with expertise in large-scale machine learning systems and cloud infrastructure. Led AI implementations for Fortune 500 companies.',
      expertise: ['AI Engineering', 'Cloud Infrastructure', 'MLOps', 'System Architecture'],
      education: 'MS Computer Science, Stanford',
      experience: '10+ years',
      linkedin: 'https://linkedin.com/in/michael-rodriguez-ai',
      email: 'michael@ziontechgroup.com'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Healthcare AI',
      image: '/team/emily-watson.jpg',
      bio: 'Medical AI specialist with MD and PhD in Biomedical Engineering. Expert in medical imaging AI and healthcare data analytics.',
      expertise: ['Medical AI', 'Healthcare Analytics', 'Medical Imaging', 'Regulatory Compliance'],
      education: 'MD, PhD Biomedical Engineering, Johns Hopkins',
      experience: '8+ years',
      linkedin: 'https://linkedin.com/in/emily-watson-md',
      email: 'emily@ziontechgroup.com'
    },
    {
      name: 'James Kim',
      role: 'Head of Cybersecurity',
      image: '/team/james-kim.jpg',
      bio: 'Cybersecurity expert with CISSP certification and extensive experience in AI-powered security solutions and threat detection.',
      expertise: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Risk Management'],
      education: 'MS Cybersecurity, CISSP Certified',
      experience: '12+ years',
      linkedin: 'https://linkedin.com/in/james-kim-security',
      email: 'james@ziontechgroup.com'
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Client Success',
      image: '/team/lisa-thompson.jpg',
      bio: 'Client success leader with deep understanding of enterprise needs and AI implementation challenges. Expert in change management and user adoption.',
      expertise: ['Client Success', 'Change Management', 'User Adoption', 'Project Management'],
      education: 'MBA, PMP Certified',
      experience: '10+ years',
      linkedin: 'https://linkedin.com/in/lisa-thompson-success',
      email: 'lisa@ziontechgroup.com'
    }
  ];

  const achievements = [
    { icon: Award, title: '50+ Successful AI Projects', description: 'Delivered transformative AI solutions across industries' },
    { icon: Users, title: '100+ Happy Clients', description: 'Trusted by leading enterprises worldwide' },
    { icon: TrendingUp, title: '300% Average ROI', description: 'Consistent value delivery for our clients' },
    { icon: Shield, title: '99.9% Uptime', description: 'Reliable and secure AI infrastructure' },
    { icon: Brain, title: '15+ Patents', description: 'Innovation in AI and machine learning' },
    { icon: Globe, title: 'Global Reach', description: 'Serving clients across 25+ countries' }
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: Brain
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We measure our value by your outcomes',
      icon: Target
    },
    {
      title: 'Ethical AI',
      description: 'We develop AI solutions that are fair, transparent, and beneficial to society',
      icon: Shield
    },
    {
      title: 'Continuous Learning',
      description: 'We stay at the forefront of technology through constant learning and adaptation',
      icon: GraduationCap
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Team - Zion Tech Group | AI & IT Solutions Experts</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group's AI and IT solutions. Led by industry veterans with decades of combined experience in AI, technology, and enterprise solutions." />
        <meta name="keywords" content="AI team, technology experts, AI engineers, machine learning specialists, enterprise AI, technology leadership" />
        <link rel="canonical" href="https://ziontechgroup.com/team" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-16 pt-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text cyber-text">
              Our Expert Team
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              World-Class AI and Technology Experts
            </p>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
              Meet the brilliant minds behind Zion Tech Group's innovative AI and IT solutions. 
              Our team combines decades of experience in artificial intelligence, machine learning, 
              and enterprise technology to deliver exceptional results for our clients.
            </p>
          </div>

          {/* Team Achievements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {achievements.map((achievement, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <achievement.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                <p className="text-gray-300 text-sm">{achievement.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Team Members */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Leadership Team
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300">
                <div className="text-center mb-6">
                  <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-white font-bold text-4xl">
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-4">{member.role}</p>
                  <p className="text-gray-300 text-sm leading-relaxed mb-4">{member.bio}</p>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-white mb-2">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-400">Education:</span>
                      <p className="text-white">{member.education}</p>
                    </div>
                    <div>
                      <span className="text-gray-400">Experience:</span>
                      <p className="text-white">{member.experience}</p>
                    </div>
                  </div>

                  <div className="flex space-x-4 pt-4">
                    <a
                      href={`mailto:${member.email}`}
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      <span className="text-sm">Email</span>
                    </a>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      <span className="text-sm">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our Values
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Join Our Team CTA */}
        <section className="container mx-auto px-4 py-16">
          <div className="cyber-card hologram-card p-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Are you passionate about AI and technology? We're always looking for talented individuals 
              to join our mission of transforming businesses through innovative AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/careers"
                className="cyber-button inline-flex items-center justify-center"
              >
                <Briefcase className="w-5 h-5 mr-2" />
                View Open Positions
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="cyber-button inline-flex items-center justify-center"
                style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Your Resume
              </a>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="container mx-auto px-4 py-16">
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-lg p-8 cyber-card">
            <h2 className="text-2xl font-bold text-white text-center mb-8 neon-text">
              Get in Touch with Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
                <p className="text-cyan-400 font-medium">+1 (302) 464-0950</p>
                <p className="text-gray-400 text-sm">Mon-Fri: 9AM-6PM EST</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
                <p className="text-cyan-400 font-medium">kleber@ziontechgroup.com</p>
                <p className="text-gray-400 text-sm">We'll respond within 24 hours</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
                <p className="text-cyan-400 font-medium">Middletown, DE</p>
                <p className="text-gray-400 text-sm">364 E Main St STE 1008</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;