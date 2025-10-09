'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { Brain, Code, Shield, BarChart, Users, Award, Linkedin, Mail, Phone, MapPin, GraduationCap, Briefcase, Zap, Target, Globe } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      department: 'Leadership',
      bio: 'Visionary leader with 15+ years in AI and technology. PhD in Computer Science from MIT, former Google AI researcher.',
      image: '/team/kleber-santos.jpg',
      skills: ['AI Strategy', 'Leadership', 'Research', 'Innovation'],
      experience: '15+ years',
      education: 'PhD Computer Science, MIT',
      linkedin: 'https://linkedin.com/in/klebersantos',
      email: 'kleber@ziontechgroup.com',
      icon: Brain
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      department: 'Technology',
      bio: 'Technology visionary with expertise in machine learning, cloud architecture, and scalable systems design.',
      image: '/team/sarah-chen.jpg',
      skills: ['Machine Learning', 'Cloud Architecture', 'System Design', 'DevOps'],
      experience: '12+ years',
      education: 'MS Computer Science, Stanford',
      linkedin: 'https://linkedin.com/in/sarahchen',
      email: 'sarah@ziontechgroup.com',
      icon: Code
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Security',
      department: 'Security',
      bio: 'Cybersecurity expert with extensive experience in enterprise security, compliance, and threat intelligence.',
      image: '/team/michael-rodriguez.jpg',
      skills: ['Cybersecurity', 'Compliance', 'Threat Intelligence', 'Risk Management'],
      experience: '10+ years',
      education: 'MS Information Security, Carnegie Mellon',
      linkedin: 'https://linkedin.com/in/michaelrodriguez',
      email: 'michael@ziontechgroup.com',
      icon: Shield
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of Data Science',
      department: 'Data Science',
      bio: 'Data science leader specializing in AI algorithms, predictive modeling, and business intelligence solutions.',
      image: '/team/emily-watson.jpg',
      skills: ['Data Science', 'AI Algorithms', 'Predictive Modeling', 'Statistics'],
      experience: '8+ years',
      education: 'PhD Statistics, Harvard',
      linkedin: 'https://linkedin.com/in/emilywatson',
      email: 'emily@ziontechgroup.com',
      icon: BarChart
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      department: 'Engineering',
      bio: 'Full-stack engineering leader with expertise in modern web technologies, microservices, and API development.',
      image: '/team/david-kim.jpg',
      skills: ['Full-Stack Development', 'Microservices', 'API Development', 'Team Leadership'],
      experience: '11+ years',
      education: 'BS Computer Science, UC Berkeley',
      linkedin: 'https://linkedin.com/in/davidkim',
      email: 'david@ziontechgroup.com',
      icon: Code
    },
    {
      name: 'Lisa Thompson',
      role: 'Head of Product',
      department: 'Product',
      bio: 'Product strategy expert focused on user experience, market research, and product innovation in AI space.',
      image: '/team/lisa-thompson.jpg',
      skills: ['Product Strategy', 'UX Design', 'Market Research', 'Innovation'],
      experience: '9+ years',
      education: 'MBA, Wharton',
      linkedin: 'https://linkedin.com/in/lisathompson',
      email: 'lisa@ziontechgroup.com',
      icon: Target
    }
  ];

  const departments = [
    {
      name: 'AI Research',
      description: 'Pioneering the future of artificial intelligence',
      memberCount: 15,
      icon: Brain,
      color: 'text-purple-400'
    },
    {
      name: 'Engineering',
      description: 'Building scalable and robust solutions',
      memberCount: 25,
      icon: Code,
      color: 'text-blue-400'
    },
    {
      name: 'Data Science',
      description: 'Transforming data into actionable insights',
      memberCount: 12,
      icon: BarChart,
      color: 'text-green-400'
    },
    {
      name: 'Security',
      description: 'Protecting our clients and their data',
      memberCount: 8,
      icon: Shield,
      color: 'text-red-400'
    },
    {
      name: 'Product',
      description: 'Creating exceptional user experiences',
      memberCount: 10,
      icon: Target,
      color: 'text-orange-400'
    },
    {
      name: 'Operations',
      description: 'Ensuring smooth business operations',
      memberCount: 6,
      icon: Zap,
      color: 'text-cyan-400'
    }
  ];

  const stats = [
    { number: '76', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Years Average Experience', icon: Award },
    { number: '25+', label: 'Countries Represented', icon: Globe },
    { number: '95%', label: 'Employee Satisfaction', icon: GraduationCap }
  ];

  return (
    <>
      <SEOOptimizer
        title="Our Team - Zion Tech Group"
        description="Meet the talented team behind Zion Tech Group. Expert AI researchers, engineers, and innovators working to transform businesses with cutting-edge technology."
        keywords={['team', 'leadership', 'AI experts', 'engineers', 'data scientists', 'Zion Tech Group team']}
        canonicalUrl="https://ziontechgroup.com/team"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Meet the brilliant minds behind Zion Tech Group. Our diverse team of AI researchers, 
              engineers, and innovators is dedicated to transforming businesses with cutting-edge technology.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Leadership <span className="text-purple-400">Team</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Visionary leaders driving innovation and growth
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="text-center mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <member.icon className="w-12 h-12 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                    <p className="text-cyan-400 font-semibold mb-2">{member.role}</p>
                    <p className="text-gray-400 text-sm">{member.department}</p>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">{member.bio}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Skills:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.skills.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-slate-700 text-gray-300 text-xs rounded">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2 text-sm text-gray-400 mb-4">
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 mr-2" />
                      {member.experience} experience
                    </div>
                    <div className="flex items-center">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      {member.education}
                    </div>
                  </div>
                  
                  <div className="flex space-x-3">
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-cyan-400 hover:text-white transition-colors"
                    >
                      <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                      href={`mailto:${member.email}`}
                      className="text-cyan-400 hover:text-white transition-colors"
                    >
                      <Mail className="w-5 h-5" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Departments */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="text-green-400">Departments</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Specialized teams working together to deliver excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departments.map((dept, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-slate-700 rounded-lg flex items-center justify-center mr-4">
                      <dept.icon className={`w-6 h-6 ${dept.color}`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{dept.name}</h3>
                      <p className="text-gray-400 text-sm">{dept.memberCount} members</p>
                    </div>
                  </div>
                  <p className="text-gray-300">{dept.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="cyber-card p-8 max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                At Zion Tech Group, we foster a culture of innovation, collaboration, and continuous learning. 
                We believe that great technology comes from great people working together towards a common vision.
              </p>
              <div className="grid md:grid-cols-3 gap-6 text-left">
                <div>
                  <h3 className="text-xl font-bold text-cyan-400 mb-3">Innovation</h3>
                  <p className="text-gray-300">
                    We encourage creative thinking and experimentation to push the boundaries of what's possible.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-3">Collaboration</h3>
                  <p className="text-gray-300">
                    We work together as one team, sharing knowledge and supporting each other's growth.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-green-400 mb-3">Excellence</h3>
                  <p className="text-gray-300">
                    We strive for excellence in everything we do, from code quality to client service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="cyber-card max-w-4xl mx-auto p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Join Our Team
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                Ready to be part of the future? We're always looking for talented individuals to join our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/careers" className="cyber-button inline-flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  View Open Positions
                </a>
                <a href="/contact" className="cyber-button-secondary inline-flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default TeamPage;