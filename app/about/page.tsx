'use client';

import React, { useState, useEffect, memo } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  ArrowRight, 
  Zap, 
  Brain, 
  Cloud, 
  Shield, 
  Star, 
  CheckCircle, 
  Play, 
  Sparkles,
  Phone,
  Mail,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Clock,
  Target,
  BarChart,
  Cpu,
  Globe,
  Lock,
  Database,
  Smartphone,
  Code,
  MessageSquare,
  Eye,
  Settings,
  Wifi,
  Server,
  HardDrive,
  FileText,
  PieChart,
  Activity,
  Lightning,
  Rocket,
  Layers,
  Workflow,
  Bot,
  Headphones,
  Monitor,
  Mobile,
  Laptop,
  Tablet,
  Watch,
  Camera,
  Mic,
  Headset,
  Gamepad2,
  Network,
  Security,
  Data,
  Analytics,
  Growth,
  Team,
  Achievement,
  Rating,
  Time,
  Goal,
  Success,
  Next,
  Start,
  Magic,
  Call,
  Email,
  Location
} from 'lucide-react';

// Team Members Data
const teamMembers = [
  {
    name: 'Kleber Santos',
    position: 'CEO & Founder',
    bio: 'Visionary leader with 15+ years in AI and technology. Former Google AI researcher and MIT graduate.',
    image: '/team/kleber-santos.jpg',
    expertise: ['AI Strategy', 'Quantum Computing', 'Leadership'],
    linkedin: 'https://linkedin.com/in/kleber-santos'
  },
  {
    name: 'Dr. Sarah Chen',
    position: 'Chief Technology Officer',
    bio: 'AI research pioneer with PhD from Stanford. Expert in machine learning and computer vision.',
    image: '/team/sarah-chen.jpg',
    expertise: ['Machine Learning', 'Computer Vision', 'Research'],
    linkedin: 'https://linkedin.com/in/sarah-chen'
  },
  {
    name: 'Marcus Johnson',
    position: 'Head of Engineering',
    bio: 'Full-stack architect with expertise in scalable systems and cloud infrastructure.',
    image: '/team/marcus-johnson.jpg',
    expertise: ['Cloud Architecture', 'DevOps', 'Scalability'],
    linkedin: 'https://linkedin.com/in/marcus-johnson'
  },
  {
    name: 'Dr. Elena Rodriguez',
    position: 'Chief Data Scientist',
    bio: 'Data science expert specializing in predictive analytics and business intelligence.',
    image: '/team/elena-rodriguez.jpg',
    expertise: ['Data Science', 'Analytics', 'AI Models'],
    linkedin: 'https://linkedin.com/in/elena-rodriguez'
  }
];

// Company Values
const companyValues = [
  {
    title: 'Innovation First',
    description: 'We push the boundaries of what\'s possible with AI and technology',
    icon: Rocket,
    color: 'text-cyan-400'
  },
  {
    title: 'Client Success',
    description: 'Your success is our success. We measure our value by your results',
    icon: Target,
    color: 'text-green-400'
  },
  {
    title: 'Ethical AI',
    description: 'We develop AI solutions that are fair, transparent, and beneficial',
    icon: Shield,
    color: 'text-purple-400'
  },
  {
    title: 'Continuous Learning',
    description: 'We stay ahead of the curve with cutting-edge research and development',
    icon: Brain,
    color: 'text-pink-400'
  }
];

// Company Stats
const companyStats = [
  { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
  { number: '100+', label: 'Happy Clients', icon: Users },
  { number: '300%', label: 'Average ROI', icon: TrendingUp },
  { number: '99.9%', label: 'Uptime Guarantee', icon: Shield },
  { number: '24/7', label: 'Expert Support', icon: Headphones },
  { number: '50+', label: 'Countries Served', icon: Globe }
];

// Timeline Data
const timelineData = [
  {
    year: '2018',
    title: 'Company Founded',
    description: 'Zion Tech Group was founded with a vision to democratize AI technology for businesses of all sizes.',
    icon: Rocket
  },
  {
    year: '2019',
    title: 'First AI Platform',
    description: 'Launched our first AI-powered business intelligence platform, serving 50+ clients.',
    icon: Brain
  },
  {
    year: '2020',
    title: 'Cloud Expansion',
    description: 'Expanded to cloud infrastructure services, helping businesses migrate to the cloud.',
    icon: Cloud
  },
  {
    year: '2021',
    title: 'Quantum Computing',
    description: 'Pioneered quantum computing solutions for enterprise applications.',
    icon: Cpu
  },
  {
    year: '2022',
    title: 'Global Reach',
    description: 'Expanded operations to 25+ countries with 200+ team members worldwide.',
    icon: Globe
  },
  {
    year: '2023',
    title: 'AI Revolution',
    description: 'Launched next-generation AI services with 99.9% accuracy and real-time processing.',
    icon: Sparkles
  },
  {
    year: '2024',
    title: 'Future Technologies',
    description: 'Leading innovation in autonomous systems, edge computing, and sustainable technology.',
    icon: Zap
  }
];

// Team Member Card Component
const TeamMemberCard = memo(({ member }: { member: any }) => (
  <div className="cyber-card p-6 group hover:scale-105 transition-all duration-300">
    <div className="text-center mb-6">
      <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
        <span className="text-2xl font-bold text-white">
          {member.name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
        {member.name}
      </h3>
      <p className="text-cyan-400 font-medium">{member.position}</p>
    </div>
    
    <p className="text-gray-300 mb-4 text-sm leading-relaxed">
      {member.bio}
    </p>
    
    <div className="mb-4">
      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Expertise:</h4>
      <div className="flex flex-wrap gap-2">
        {member.expertise.map((skill: string, index: number) => (
          <span key={index} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded">
            {skill}
          </span>
        ))}
      </div>
    </div>
    
    <a
      href={member.linkedin}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg text-center font-medium hover:from-cyan-600 hover:to-blue-700 transition-all group"
    >
      <span className="flex items-center justify-center">
        Connect on LinkedIn
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </span>
    </a>
  </div>
));

// Timeline Component
const TimelineComponent = memo(() => (
  <div className="relative">
    <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-cyan-400 to-purple-600"></div>
    
    {timelineData.map((item, index) => (
      <div key={index} className={`relative flex items-center mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
        <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
          <div className="cyber-card p-6">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <div>
                <div className="text-2xl font-bold text-cyan-400">{item.year}</div>
                <h3 className="text-lg font-bold text-white">{item.title}</h3>
              </div>
            </div>
            <p className="text-gray-300 text-sm">{item.description}</p>
          </div>
        </div>
        
        <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-slate-900"></div>
        
        <div className="w-1/2"></div>
      </div>
    ))}
  </div>
));

// Main About Page Component
export default function AboutPage() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Zion Tech Group',
    description: 'Leading provider of AI-powered enterprise solutions, quantum computing, autonomous systems, and digital transformation services',
    url: 'https://ziontechgroup.com',
    logo: 'https://ziontechgroup.com/logo.png',
    foundingDate: '2018',
    numberOfEmployees: '200+',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '364 E Main St STE 1008',
      addressLocality: 'Middletown',
      addressRegion: 'DE',
      postalCode: '19709',
      addressCountry: 'US',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+1-302-464-0950',
      contactType: 'customer service',
      email: 'kleber@ziontechgroup.com',
    },
    sameAs: [
      'https://linkedin.com/company/zion-tech-group',
      'https://twitter.com/ziontechgroup'
    ]
  };

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | AI & Technology Innovation Leaders</title>
        <meta
          name="description"
          content="Learn about Zion Tech Group, a leading AI and technology company founded in 2018. Meet our expert team and discover our mission to democratize AI technology."
        />
        <meta
          name="keywords"
          content="about zion tech group, AI company, technology leaders, team, mission, vision, company history"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 cyber-grid neural-network-bg overflow-hidden">
          <div className="container mx-auto px-4 text-center relative z-10">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 cyber-text">
              <span className="holographic-text neon-pulse">About Zion Tech Group</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto">
              Pioneering the future of AI and technology since 2018. We're on a mission to democratize 
              artificial intelligence and make cutting-edge technology accessible to businesses worldwide.
            </p>
          </div>
        </section>

        {/* Company Stats */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                  <div className="text-sm text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div className="cyber-card p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Mission</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To democratize artificial intelligence and cutting-edge technology, making it accessible 
                  to businesses of all sizes. We believe that every organization should have the power to 
                  leverage AI for growth, innovation, and competitive advantage.
                </p>
              </div>
              
              <div className="cyber-card p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-lg flex items-center justify-center">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Our Vision</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  To be the world's leading provider of AI-powered solutions, driving the next wave of 
                  digital transformation. We envision a future where AI seamlessly integrates into every 
                  aspect of business, creating unprecedented opportunities for growth and innovation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
                <span className="holographic-text">Our Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide everything we do and shape our company culture
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <value.icon className={`w-8 h-8 ${value.color}`} />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Team */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
                <span className="holographic-text">Meet Our Team</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                World-class experts in AI, technology, and business innovation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <TeamMemberCard key={index} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* Company Timeline */}
        <section className="py-20 bg-gradient-to-br from-slate-800 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
                <span className="holographic-text">Our Journey</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From startup to global leader in AI and technology innovation
              </p>
            </div>

            <TimelineComponent />
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 cyber-text">
              <span className="holographic-text">Ready to Work With Us?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join hundreds of companies that trust Zion Tech Group for their AI and technology needs.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a
                href="tel:+13024640950"
                className="cyber-button px-8 py-4 text-lg font-bold group"
              >
                <span className="flex items-center">
                  <Phone className="w-6 h-6 mr-3 group-hover:animate-pulse" />
                  Call (302) 464-0950
                </span>
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="px-8 py-4 text-lg font-bold text-white border-2 border-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 group"
              >
                <span className="flex items-center">
                  <Mail className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                  Email kleber@ziontechgroup.com
                </span>
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}