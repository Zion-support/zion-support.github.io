'use client';
import React, { useState } from 'react';
import {
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Users,
  TrendingUp,
  BarChart,
  Shield,
  Brain,
  Cloud,
  Code,
  Target,
  Award,
  Phone,
  Mail,
  MapPin,
  Eye,
  ExternalLink,
  Filter,
  Search,
  Calendar,
  PieChart,
  TrendingDown,
  Activity,
  Globe2,
  Map,
  Navigation as NavigationIcon,
  Compass,
  Clock3,
  Smartphone,
  Sparkles
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const TeamPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Users },
    { id: 'leadership', name: 'Leadership', icon: Award },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'ai', name: 'AI Research', icon: Brain },
    { id: 'cloud', name: 'Cloud Solutions', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'design', name: 'Design', icon: Target },
    { id: 'marketing', name: 'Marketing', icon: TrendingUp }
  ];

  const teamMembers = [
    {
      id: 1,
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      department: 'leadership',
      bio: 'Visionary leader with 15+ years in AI and technology innovation. Passionate about transforming businesses through cutting-edge solutions.',
      image: '/images/team/kleber-santos.webp',
      linkedin: 'https://linkedin.com/in/kleber-santos',
      twitter: 'https://twitter.com/kleber_santos',
      email: 'kleber@ziontechgroup.com',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership'],
      education: 'PhD in Computer Science, MIT',
      experience: '15+ years'
    },
    {
      id: 2,
      name: 'Dr. Sarah Chen',
      role: 'Head of AI Research',
      department: 'ai',
      bio: 'Leading AI researcher with expertise in machine learning, deep learning, and neural networks. Published 50+ papers in top-tier journals.',
      image: '/images/team/sarah-chen.webp',
      linkedin: 'https://linkedin.com/in/sarah-chen-ai',
      twitter: 'https://twitter.com/sarah_chen_ai',
      email: 'sarah@ziontechgroup.com',
      expertise: ['Machine Learning', 'Deep Learning', 'Neural Networks', 'Computer Vision'],
      education: 'PhD in AI, Stanford University',
      experience: '12+ years'
    },
    {
      id: 3,
      name: 'Michael Rodriguez',
      role: 'Chief Technology Officer',
      department: 'engineering',
      bio: 'Technology architect with extensive experience in cloud computing, microservices, and scalable system design.',
      image: '/images/team/michael-rodriguez.webp',
      linkedin: 'https://linkedin.com/in/michael-rodriguez-cto',
      twitter: 'https://twitter.com/mike_rodriguez',
      email: 'michael@ziontechgroup.com',
      expertise: ['Cloud Architecture', 'Microservices', 'System Design', 'DevOps'],
      education: 'MS in Computer Science, UC Berkeley',
      experience: '14+ years'
    },
    {
      id: 4,
      name: 'Jennifer Kim',
      role: 'Head of Cybersecurity',
      department: 'security',
      bio: 'Cybersecurity expert with deep knowledge in threat detection, incident response, and security architecture.',
      image: '/images/team/jennifer-kim.webp',
      linkedin: 'https://linkedin.com/in/jennifer-kim-security',
      twitter: 'https://twitter.com/jen_kim_sec',
      email: 'jennifer@ziontechgroup.com',
      expertise: ['Threat Detection', 'Incident Response', 'Security Architecture', 'Compliance'],
      education: 'MS in Cybersecurity, Carnegie Mellon',
      experience: '10+ years'
    },
    {
      id: 5,
      name: 'David Park',
      role: 'Lead AI Engineer',
      department: 'ai',
      bio: 'Full-stack AI engineer specializing in production ML systems, MLOps, and AI infrastructure.',
      image: '/images/team/david-park.webp',
      linkedin: 'https://linkedin.com/in/david-park-ai',
      twitter: 'https://twitter.com/david_park_ai',
      email: 'david@ziontechgroup.com',
      expertise: ['MLOps', 'Production ML', 'AI Infrastructure', 'Python'],
      education: 'MS in Machine Learning, Georgia Tech',
      experience: '8+ years'
    },
    {
      id: 6,
      name: 'Lisa Thompson',
      role: 'Head of Cloud Solutions',
      department: 'cloud',
      bio: 'Cloud solutions architect with expertise in AWS, Azure, and GCP. Specializes in migration and optimization strategies.',
      image: '/images/team/lisa-thompson.webp',
      linkedin: 'https://linkedin.com/in/lisa-thompson-cloud',
      twitter: 'https://twitter.com/lisa_cloud',
      email: 'lisa@ziontechgroup.com',
      expertise: ['AWS', 'Azure', 'GCP', 'Cloud Migration', 'Cost Optimization'],
      education: 'BS in Computer Science, University of Washington',
      experience: '11+ years'
    },
    {
      id: 7,
      name: 'Alex Chen',
      role: 'Lead UX Designer',
      department: 'design',
      bio: 'User experience designer focused on creating intuitive and accessible interfaces for AI-powered applications.',
      image: '/images/team/alex-chen.webp',
      linkedin: 'https://linkedin.com/in/alex-chen-ux',
      twitter: 'https://twitter.com/alex_chen_ux',
      email: 'alex@ziontechgroup.com',
      expertise: ['UX Design', 'UI Design', 'User Research', 'Accessibility'],
      education: 'MFA in Design, Art Center College of Design',
      experience: '9+ years'
    },
    {
      id: 8,
      name: 'Robert Kim',
      role: 'Head of Marketing',
      department: 'marketing',
      bio: 'Marketing strategist with expertise in B2B technology marketing, content strategy, and brand development.',
      image: '/images/team/robert-kim.webp',
      linkedin: 'https://linkedin.com/in/robert-kim-marketing',
      twitter: 'https://twitter.com/robert_kim_mkt',
      email: 'robert@ziontechgroup.com',
      expertise: ['B2B Marketing', 'Content Strategy', 'Brand Development', 'Digital Marketing'],
      education: 'MBA in Marketing, Wharton School',
      experience: '13+ years'
    }
  ];

  const filteredTeamMembers = teamMembers.filter(member => 
    selectedDepartment === 'all' || member.department === selectedDepartment
  );

  const stats = [
    { icon: Users, value: '50+', label: 'Team Members' },
    { icon: Award, value: '15+', label: 'Years Experience' },
    { icon: TrendingUp, value: '100+', label: 'Projects Completed' },
    { icon: Shield, value: '99%', label: 'Client Satisfaction' }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to solve complex problems.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our business practices.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from code to customer service.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="Our Team - Zion Tech Group"
        description="Meet our talented team of AI experts, engineers, and innovators who are transforming businesses through cutting-edge technology solutions."
        keywords={["team","AI experts","engineers","leadership","technology professionals","Zion Tech Group"]}
        canonicalUrl="https://ziontechgroup.com/team"
      />

      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <div className="max-w-4xl mx-auto">
            <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Meet our talented team of AI experts, engineers, and innovators who are transforming businesses through cutting-edge technology solutions.
            </p>
          </div>
        </section>

        {/* Department Filters */}
        <section className="mb-12">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <h3 className="text-lg font-semibold text-white mb-4 text-center">Filter by Department</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {departments.map((department) => (
                  <button
                    key={department.id}
                    onClick={() => setSelectedDepartment(department.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                      selectedDepartment === department.id
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                        : 'bg-white/10 text-gray-300 hover:bg-white/20'
                    }`}
                  >
                    <department.icon className="w-4 h-4" />
                    {department.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Grid */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredTeamMembers.map((member) => (
                <div key={member.id} className="bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:scale-105 transition-all duration-300">
                  <div className="p-8">
                    <div className="text-center mb-6">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                      />
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                      <div className="text-sm text-gray-400 mb-4">
                        {member.experience} • {member.education}
                      </div>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-6">{member.bio}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-white mb-3">Expertise:</h4>
                      <div className="flex flex-wrap gap-2">
                        {member.expertise.map((skill, index) => (
                          <span key={index} className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex justify-center gap-4">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={member.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="text-gray-400 hover:text-cyan-400 transition-colors"
                      >
                        <Mail className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Values */}
        <section className="mb-16">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                The principles that guide our team and shape our culture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Join Our Team
            </h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for innovation and excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="/careers"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2"
              >
                <Users className="w-5 h-5" />
                View Open Positions
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center gap-2"
              >
                <Mail className="w-5 h-5" />
                Contact HR
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;