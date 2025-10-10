'use client';
import React, { useState, useEffect } from 'react';
import { Brain, Cpu, Shield, Globe, Users, Award, Target, BarChart, Zap, Star, CheckCircle, ArrowRight, Phone, Mail, MapPin, Clock, TrendingUp, Database, Cloud, Code, Smartphone, Settings, Lock, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Calculator, Calendar, Clock3, Compass, Navigation as NavIcon, PieChart, TrendingDown, Activity, MessageSquare, Eye, Sparkles } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';

const AboutPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Target },
    { number: '300%', label: 'Average ROI', icon: TrendingUp },
    { number: '$50M+', label: 'Client Savings', icon: BarChart },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
    { number: '15+', label: 'Years Experience', icon: Award },
    { number: '24/7', label: 'Support Available', icon: Clock }
import { Users, CheckCircle, Shield, Award, Target, Globe, Brain, Cloud, TrendingUp, Calendar, MessageSquare, Award, Shield, Users } from 'lucide-react';
import { Users, CheckCircle, Shield, Award, Target, Globe, Brain, Cloud, TrendingUp, Calendar, MessageSquare } from 'lucide-react';

export default function AboutPage() {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber-santos.webp',
      bio: 'Visionary leader with 15+ years in AI and enterprise solutions',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      image: '/images/team/sarah-chen.webp',
      bio: 'AI research pioneer with expertise in machine learning and quantum computing',
      expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Engineering',
      image: '/images/team/michael-rodriguez.webp',
      bio: 'Full-stack architect specializing in scalable AI systems',
      expertise: ['System Architecture', 'Cloud Infrastructure', 'DevOps']
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Head of AI Research',
      image: '/images/team/emily-watson.webp',
      bio: 'Leading researcher in natural language processing and computer vision',
      expertise: ['NLP', 'Computer Vision', 'Deep Learning']
    }
  ];

  const values = [
    {
      icon: Brain;
      icon: Brain,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology, staying ahead of industry trends and delivering cutting-edge solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security is at the core of everything we do. We protect your data and systems with bank-level security measures and compliance standards.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We believe in building long-term partnerships with our clients, working closely with them to understand their unique needs and deliver tailored solutions.'
    },
    {
      icon: Globe,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring the highest quality standards and delivering results that exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      expertise: 'AI & Machine Learning',
      experience: '15+ years',
      description: 'Visionary leader with extensive experience in AI research and enterprise solutions.',
      achievements: ['PhD in Computer Science', 'Former Google AI Researcher', '50+ Patents']
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      expertise: 'Cloud Architecture',
      experience: '12+ years',
      description: 'Expert in cloud technologies and scalable system design.',
      achievements: ['AWS Certified Solutions Architect', 'Former Microsoft Azure Lead', 'Cloud Migration Expert']
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI',
      expertise: 'Machine Learning',
      experience: '10+ years',
      description: 'Leading our AI research and development initiatives.',
      achievements: ['PhD in Machine Learning', 'Former Tesla AI Team', 'Published 30+ Papers']
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Security',
      expertise: 'Cybersecurity',
      experience: '8+ years',
      description: 'Ensuring our solutions meet the highest security standards.',
      achievements: ['CISSP Certified', 'Former NSA Security Analyst', 'Security Expert']
    }
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI and technology, constantly exploring new frontiers.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are at the core of everything we build.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'Your success is our success. We measure our achievements by your business outcomes.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'We believe technology should make the world better, more efficient, and more connected.'
    }
  ];

  const achievements = [
    { number: '500+', label: 'Successful Projects', icon: Target },
    { number: '100+', label: 'Enterprise Clients', icon: Users },
    { number: '50+', label: 'AI Models Deployed', icon: Brain },
    { number: '99.9%', label: 'Uptime Guarantee', icon: Shield }
  ];

  const timeline = [
    {
      year: '2009',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI technology for businesses of all sizes.'
    },
    {
      year: '2012',
      title: 'First AI Platform',
      description: 'Launched our first AI analytics platform, helping 50+ companies optimize their operations.'
    },
    {
      year: '2015',
      title: 'Cloud Migration Services',
      description: 'Expanded into cloud migration services, becoming a certified AWS and Azure partner.'
    },
    {
      year: '2018',
      title: 'Quantum Computing Research',
      description: 'Started research into quantum computing applications for enterprise solutions.'
    },
    {
      year: '2020',
      title: 'Global Expansion',
      description: 'Expanded operations globally, serving clients in 25+ countries across 6 continents.'
    },
    {
      year: '2023',
      title: 'AI Revolution',
      description: 'Launched next-generation AI services, achieving 300% average ROI for our clients.'
    },
    {
      year: '2024',
      title: 'Future Ready',
      description: 'Continuing to innovate with cutting-edge AI solutions and preparing for the next wave of technology.'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'SOC 2 Type II', description: 'Security, Availability & Confidentiality' },
    { name: 'AWS Advanced Partner', description: 'Cloud Solutions Provider' },
    { name: 'Microsoft Gold Partner', description: 'Azure Solutions Expert' },
    { name: 'Google Cloud Partner', description: 'AI & Machine Learning' },
    { name: 'GDPR Compliant', description: 'Data Protection & Privacy' }
  ];

  return (
    <>
      <SEOOptimizer
        title="About Us - Zion Tech Group"
        description="Learn about Zion Tech Group, a leading AI and IT solutions company with 15+ years of experience. Discover our mission, values, team, and commitment to innovation."
        keywords={['about us', 'company', 'team', 'mission', 'values', 'AI company', 'IT solutions', 'Zion Tech Group']}
        canonicalUrl="https://ziontechgroup.com/about"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain particle-field">
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className={`text-center mb-16 transition-all duration-1000 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="About Us">
              About Us
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium neon-pulse">
              Pioneering the Future of AI and Technology
            </p>
            <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              For over 15 years, Zion Tech Group has been at the forefront of artificial intelligence and 
              information technology innovation. We help businesses transform their operations, achieve 
              unprecedented growth, and stay ahead in an ever-evolving digital landscape.
            </p>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
              {stats.map((stat, index) => (
                <div key={stat.label} className={`cyber-card p-6 text-center hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 neon-text mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className={`cyber-card p-8 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 neon-text">Our Mission</h2>
                <p className="text-gray-300 leading-relaxed">
                  To democratize artificial intelligence and advanced technology, making it accessible 
                  and beneficial for businesses of all sizes. We believe that every organization, 
                  regardless of size or industry, should have access to cutting-edge AI solutions 
                  that can transform their operations and drive growth.
                </p>
              </div>
              
              <div className={`cyber-card p-8 ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '200ms' }}>
                <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-600 rounded-lg flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-4 neon-text">Our Vision</h2>
                <p className="text-gray-300 leading-relaxed">
                  To be the global leader in AI-powered business transformation, creating a world 
                  where technology seamlessly integrates with human potential to solve complex 
                  challenges and unlock infinite possibilities for growth and innovation.
                </p>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Core Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={value.title} className={`cyber-card p-6 text-center hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Meet Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={member.name} className={`cyber-card p-6 text-center hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-cyan-400 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-3">{member.expertise} • {member.experience}</p>
                  <p className="text-gray-300 text-xs mb-4">{member.description}</p>
                  <div className="space-y-1">
                    {member.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-center text-xs text-gray-400">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-1 flex-shrink-0" />
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Journey
            </h2>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600"></div>
              <div className="space-y-8">
                {timeline.map((item, index) => (
                  <div key={item.year} className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  } ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} 
                  style={{ transitionDelay: `${index * 100}ms` }}>
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                      <div className="cyber-card p-6">
                        <div className="text-2xl font-bold text-cyan-400 mb-2">{item.year}</div>
                        <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900 flex-shrink-0"></div>
                    <div className="w-1/2"></div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Certifications & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={cert.name} className={`cyber-card p-6 text-center hover:scale-105 transition-all duration-300 ${
                  isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`} style={{ transitionDelay: `${index * 100}ms` }}>
                  <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center py-16">
            <div className="cyber-card p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Ready to Work with Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join hundreds of satisfied clients who have transformed their businesses with our 
                AI and IT solutions. Let's build the future together.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center px-8 py-4 text-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 inline-flex items-center"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  (302) 464-0950
                </a>
              </div>
            </div>
          </section>
        </main>
      </div>
      
      <Footer />
    </>
  );
};

export default AboutPage;
      year: '2018',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI for enterprises.',
    },
    {
      year: '2019',
      title: 'First AI Platform',
      description: 'Launched our flagship AI automation platform, serving 50+ clients.'
    },
    {
      year: '2020',
      title: 'Quantum Computing Division',
      description: 'Established quantum computing research and development capabilities.',
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Expanded operations to serve clients across North America, Europe, and Asia.'
    },
    {
      year: '2022',
      title: 'AI Ethics Initiative',
      description: 'Launched comprehensive AI ethics framework and responsible AI practices.',
    },
    {
      year: '2023',
      title: 'Breakthrough Technologies',
      description: 'Introduced cutting-edge solutions in autonomous systems and edge computing.',
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Awarded "AI Innovation Leader" by TechCrunch and "Best AI Solutions Provider" by Gartner.',
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
<<<<<<< HEAD
      {/* Hero Section */}</div>
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></section>
        <div className="container mx-auto px-4 relative z-10"></div>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">About Zion Tech Group</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Leading the future of AI-powered enterprise solutions with cutting-edge technology,
              innovative thinking, and unwavering commitment to client success.</p>
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 lg: py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">)
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">)
              About Zion Tech Group;)
            </h1>)
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">),
              Leading the future of AI-powered enterprise solutions with cutting-edge technology;),
              innovative thinking, and unwavering commitment to client success.
            </p>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">About Zion Tech Group</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Leading the future of AI-powered enterprise solutions with cutting-edge technology,
              innovative thinking, and unwavering commitment to client success.</p>
=======
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-600/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">About Zion Tech Group</h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">Leading the future of AI-powered enterprise solutions with cutting-edge technology,
              innovative thinking, and unwavering commitment to client success.</p>
>>>>>>> main
            <div className="flex flex-wrap justify-center gap-4">
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg">
            <div className="flex flex-wrap justify-center gap-4"></div>
              <div className="flex items-center space-x-2 bg-cyan-500/20 px-4 py-2 rounded-lg"></div>
                <Award className="w-5 h-5 text-cyan-400" />
                <span className="text-white font-medium">ISO 27001 Certified</span>
              </div>
              <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
                <Shield className="w-5 h-5 text-purple-400" />
                <span className="text-white font-medium">Enterprise Security</span>
              </div>
              <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
                <Globe className="w-5 h-5 text-green-400" />
                <span className="text-white font-medium">Global Reach</span>
              </div>
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
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
            We are a leading provider of AI-powered enterprise solutions, quantum computing, and digital transformation services. 
            Our mission is to help businesses harness the power of artificial intelligence to drive innovation and growth.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6">
                To democratize artificial intelligence and make advanced technology accessible to businesses of all sizes. 
                We believe that every organization should have the tools and expertise to leverage AI for competitive advantage.
              </p>
              <p className="text-lg text-gray-300">
                Through our innovative solutions, expert consulting, and cutting-edge research, we're building a future 
                where AI enhances human potential and drives unprecedented business value.
              </p>
            </div>
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6">
                To be the world's most trusted partner for AI transformation, recognized for our technical excellence, 
                ethical approach, and commitment to client success.
              </p>
              <p className="text-lg text-gray-300">
                We envision a world where AI and human intelligence work in perfect harmony, creating solutions 
                that are not only powerful but also responsible and beneficial to society.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg: grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To democratize artificial intelligence and cutting-edge technology for enterprises worldwide,
                enabling them to achieve unprecedented levels of efficiency, innovation, and growth.</p>
<<<<<<< HEAD
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
                Our Mission;
              </h2>,
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">,
                To democratize artificial intelligence and cutting-edge technology for enterprises worldwide),
                enabling them to achieve unprecedented levels of efficiency, innovation, and growth.
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To democratize artificial intelligence and cutting-edge technology for enterprises worldwide,
                enabling them to achieve unprecedented levels of efficiency, innovation, and growth.</p>
=======
>>>>>>> main
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
        <div className="container mx-auto px-4"></section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"></div>
            <div></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To democratize artificial intelligence and cutting-edge technology for enterprises worldwide,
                enabling them to achieve unprecedented levels of efficiency, innovation, and growth.</p>
              <div className="space-y-4"></div>
                <div className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Transform businesses through AI-powered solutions</p>
                </div>
                <div className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Accelerate digital transformation initiatives</p>
                </div>
                <div className="flex items-start space-x-3"></div>
                  <CheckCircle className="w-6 h-6 text-cyan-400 mt-1 flex-shrink-0" />
                  <p className="text-gray-300">Drive sustainable innovation and growth</p>
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Users, Award, Target, Globe, Brain, Cloud, Shield, Zap, CheckCircle, ArrowRight, Star, TrendingUp, Building, Clock, Phone, Mail, MapPin } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to delivering cutting-edge AI and IT solutions for enterprise clients worldwide." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions company, enterprise technology, team, mission, values" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          {/* Hero Section */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
                Pioneering the future of AI and IT solutions with cutting-edge technology, 
                innovative thinking, and unwavering commitment to client success.
              </p>
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="container mx-auto px-4 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              <div className="cyber-card hologram-card p-8">
                <div className="flex items-center mb-6">
                  <Target className="w-12 h-12 text-cyan-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To democratize advanced AI and IT technologies, making them accessible and beneficial 
                  for businesses of all sizes while maintaining the highest standards of security, 
                  reliability, and innovation.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Transform businesses through AI innovation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Deliver enterprise-grade security and reliability
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Foster sustainable technological growth
                  </li>
                </ul>
              </div>

              <div className="cyber-card hologram-card p-8">
                <div className="flex items-center mb-6">
                  <Globe className="w-12 h-12 text-purple-400 mr-4" />
                  <h2 className="text-3xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  To be the global leader in AI and IT solutions, recognized for our innovative 
                  approach, exceptional client outcomes, and commitment to advancing technology 
                  for the betterment of society.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Global leadership in AI innovation
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Exceptional client success rates
                  </li>
                  <li className="flex items-center text-gray-300">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                    Technology for social good
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To be the world's leading provider of AI and quantum computing solutions,
                creating a future where technology seamlessly integrates with human potential
                to solve the world's most complex challenges.</p>
<<<<<<< HEAD
              <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">
                Our Vision;
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To be the world's leading provider of AI and quantum computing solutions)
                creating a future where technology seamlessly integrates with human potential;
                to solve the world's most complex challenges.
              </p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To be the world's leading provider of AI and quantum computing solutions,
                creating a future where technology seamlessly integrates with human potential
                to solve the world's most complex challenges.</p>
=======
>>>>>>> main
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg">
            <div></div>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Our Vision</h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">To be the world's leading provider of AI and quantum computing solutions,
                creating a future where technology seamlessly integrates with human potential
                to solve the world's most complex challenges.</p>
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 p-6 rounded-lg"></div>
                <h3 className="text-xl font-bold text-white mb-3">Core Values</h3>
                <div className="space-y-3"></div>
                  <div className="flex items-center space-x-3"></div>
                    <Brain className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">Innovation & Excellence</span>
                  </div>
                  <div className="flex items-center space-x-3"></div>
                    <Shield className="w-5 h-5 text-purple-400" />
                    <span className="text-gray-300">Integrity & Trust</span>
                  </div>
                  <div className="flex items-center space-x-3"></div>
                    <Users className="w-5 h-5 text-green-400" />
                    <span className="text-gray-300">Collaboration & Respect</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>,
      </section>,
,
      {/* Values */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do and shape our culture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
<<<<<<< HEAD
                <h3 className="text-xl font-bold text-white mb-3">{value.title}<p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Values;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our culture;
            </p>,
          </div>,
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">,
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover: scale-110 transition-transform duration-300">,
                  <value.icon className="w-8 h-8 text-white" />,
                </div>,
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do and shape our culture</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{values.map((value, index) => (</div>
              <div key={index} className="text-center group"></div>
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"></div>
                  <value.icon className="w-8 h-8 text-white" />
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3><p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">The principles that guide everything we do and shape our culture</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
            <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our culture of excellence and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <value.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that reflect our commitment to excellence and client success.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <achievement.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <div className="text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-300">{achievement.label}</div>
=======
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
>>>>>>> main
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">World-class experts in AI, quantum computing, and enterprise technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<<<<<<< HEAD
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}<h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}<p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">{member.expertise.map((skill, skillIndex) => (<span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">{skill}</span>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Meet Our Team;
            </h2>,
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">,
              World-class experts in AI, quantum computing, and enterprise technology;
            <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, technology, and business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover: bg-slate-700/50 transition-all duration-300">,
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">,
                  <span className="text-2xl font-bold text-white">,
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Meet Our Team</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">World-class experts in AI, quantum computing, and enterprise technology</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-slate-800/50 rounded-lg p-6 text-center group hover:bg-slate-700/50 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
              <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">
                <div className="flex flex-wrap gap-2 justify-center">
                  {member.expertise.map((skill, idx) => (
                    <span key={idx} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-xs">
                      {skill}
                    </span>
=======
                  <span className="text-2xl font-bold text-white">{member.name.split(' ').map(n => n[0]).join('')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex flex-wrap justify-center gap-2">
                  {member.expertise.map((skill, skillIndex) => (
>>>>>>> main
                    <span key={skillIndex} className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Numbers that speak to our impact and success</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10 text-white" />
<<<<<<< HEAD
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{achievement.number}<div className="text-gray-300 font-medium">{achievement.label}</div>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Achievements;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our impact and success;
            </p>,
          </div>,
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">,
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-3xl lg: text-4xl font-bold text-white mb-2">,
                  {achievement.number}
                </div>
                <div className="text-gray-300 font-medium">
                  {achievement.label}
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Achievements</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Numbers that speak to our impact and success</p><div className="grid grid-cols-2 lg:grid-cols-4 gap-8">{achievements.map((achievement, index) => (</div>
              <div key={index} className="text-center"></div>
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>
                  <achievement.icon className="w-10 h-10 text-white" />
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{achievement.number}</div><div className="text-gray-300 font-medium">{achievement.label}</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Numbers that speak to our impact and success</p>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <achievement.icon className="w-10 h-10 text-white" />
                </div>
=======
>>>>>>> main
                <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{achievement.number}</div>
                <div className="text-gray-300 font-medium">{achievement.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
<<<<<<< HEAD
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Journey<p className="text-lg text-gray-300 max-w-3xl mx-auto">Key milestones in our company's growth and innovation</p>
        <div className="container mx-auto px-4"></section>
          <div className="text-center mb-16"></div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Journey</h2><p className="text-lg text-gray-300 max-w-3xl mx-auto">Key milestones in our company's growth and innovation</p>
            </p>
          </div>
          <div className="max-w-4xl mx-auto"></div>
            <div className="relative"></div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600">{timeline.map((item, index) => (</div>
                </div><div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
            <h2 className="text-3xl lg: text-4xl font-bold text-white mb-4">
              Our Journey;
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Key milestones in our company's growth and innovation;
            </p>
          </div>
          <div className="max-w-4xl mx-auto">,
            <div className="relative">,
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>,
=======
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Key milestones in our company's growth and innovation</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
>>>>>>> main
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
<<<<<<< HEAD
                      <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}<h3 className="text-xl font-bold text-white mb-2">{item.title}<p className="text-gray-300">{item.description}</p>
                </div><div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}></div>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}></div>
                    <div className="bg-slate-800/50 p-6 rounded-lg"></div>
                      <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}</div><h3 className="text-xl font-bold text-white mb-2">{item.title}</h3><p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div><div className="w-1/2">))}</div>
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">Our Journey</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">Key milestones in our company's growth and innovation</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-500 to-purple-600"></div>
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-slate-800/50 p-6 rounded-lg">
                      <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
=======
                      <div className="text-cyan-400 font-bold text-lg mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </div>
                  </div>
>>>>>>> main
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
<<<<<<< HEAD
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?<p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join hundreds of enterprises that have already transformed their operations with our AI solutions.</p>
          <h2 className="text-3xl lg: text-4xl font-bold text-white mb-6">
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join hundreds of companies that trust Zion Tech Group for their AI transformation journey.
          </p>
=======
>>>>>>> main
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join hundreds of enterprises that have already transformed their operations with our AI solutions.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a;
        <div className="container mx-auto px-4 text-center"></section>
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2><p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">Join hundreds of enterprises that have already transformed their operations with our AI solutions.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <a
              href="/contact"
              className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center"
            >
<<<<<<< HEAD
              <MessageSquare className="w-5 h-5 mr-2" >Get Started Today</MessageSquare>
            </MessageSquare>
=======
>>>>>>> main
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today
            </a>
            <a
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
<<<<<<< HEAD
              <Calendar className="w-5 h-5 mr-2" >Free Consultation</Calendar>
            </Calendar>
              <MessageSquare className="w-5 h-5 mr-2" />
              Get Started Today;
            </a>
            <a;
              href="/consultation"
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation;
            </a>
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
            <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              Start Your Journey
            </button>
            <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
              Learn More
            </button>
=======
              <Calendar className="w-5 h-5 mr-2" />
              Free Consultation
            </a>
>>>>>>> main
          </div>
        </div>
      </section>
    </div>
  );
}
          </section>

          {/* Company Stats */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Impact</h2>
              <p className="text-xl text-gray-300">Numbers that speak to our success</p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-white font-semibold mb-2">Successful Projects</div>
                <div className="text-gray-400 text-sm">Delivered on time and budget</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-purple-400 mb-2">100+</div>
                <div className="text-white font-semibold mb-2">Happy Clients</div>
                <div className="text-gray-400 text-sm">Across various industries</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-green-400 mb-2">300%</div>
                <div className="text-white font-semibold mb-2">Average ROI</div>
                <div className="text-gray-400 text-sm">For our AI implementations</div>
              </div>
              <div className="text-center cyber-card p-6">
                <div className="text-4xl font-bold text-yellow-400 mb-2">99.9%</div>
                <div className="text-white font-semibold mb-2">Uptime Guarantee</div>
                <div className="text-gray-400 text-sm">Enterprise-grade reliability</div>
              </div>
            </div>
          </section>

          {/* Core Values */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300">The principles that guide everything we do</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <Brain className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">Continuously pushing the boundaries of what's possible with AI and technology.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Shield className="w-16 h-16 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Security</h3>
                <p className="text-gray-300">Enterprise-grade security and compliance in every solution we deliver.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Users className="w-16 h-16 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">Working closely with clients to understand and exceed their expectations.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">Delivering exceptional quality in every project and interaction.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Zap className="w-16 h-16 text-orange-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Agility</h3>
                <p className="text-gray-300">Adapting quickly to changing technology landscapes and client needs.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <Globe className="w-16 h-16 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">Making a positive difference in the world through technology.</p>
              </div>
            </div>
          </section>

          {/* Leadership Team */}
          <section className="container mx-auto px-4 py-16">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">Leadership Team</h2>
              <p className="text-xl text-gray-300">Meet the experts driving our innovation</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">JD</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">John Doe</h3>
                <p className="text-cyan-400 mb-3">CEO & Founder</p>
                <p className="text-gray-300 text-sm">20+ years in AI and enterprise technology leadership.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">JS</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Jane Smith</h3>
                <p className="text-cyan-400 mb-3">CTO</p>
                <p className="text-gray-300 text-sm">Expert in machine learning and quantum computing.</p>
              </div>
              <div className="cyber-card p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-white font-bold text-2xl">MJ</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Mike Johnson</h3>
                <p className="text-cyan-400 mb-3">VP of Engineering</p>
                <p className="text-gray-300 text-sm">Specialist in scalable AI infrastructure and DevOps.</p>
              </div>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="container mx-auto px-4 py-16">
            <div className="cyber-card text-center p-12">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss how Zion Tech Group can help transform your business with 
                cutting-edge AI and IT solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="tel:+13024640950"
                  className="cyber-button inline-flex items-center justify-center"
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
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
