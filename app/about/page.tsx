'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Brain,
  Cpu,
  Zap,
  BarChart3,
  Award,
  Target,
  Lightbulb,
  Heart,
  Clock,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';

export default function AboutPage() {
  const stats = [
    { number: '1,200+', label: 'Projects Completed', icon: <Target className="w-6 h-6" /> },
    { number: '99.8%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> },
    { number: '24/7', label: 'Support Available', icon: <Clock className="w-6 h-6" /> },
    { number: '150+', label: 'Expert Team Members', icon: <Users className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Served', icon: <Globe className="w-6 h-6" /> },
    { number: '300%', label: 'Average ROI', icon: <TrendingUp className="w-6 h-6" /> }
  ];

  const values = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Security & Trust',
      description: 'Enterprise-grade security and compliance are built into every solution we deliver, ensuring your data and operations are protected.'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Client Success',
      description: 'Your success is our success. We work closely with clients to understand their unique needs and deliver solutions that drive real results.'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'Continuous Learning',
      description: 'Our team continuously learns and adapts to new technologies, ensuring we always provide cutting-edge solutions.'
    }
  ];

  const services = [
    {
      title: 'AI Services',
      description: 'Advanced artificial intelligence solutions including content generation, computer vision, and predictive analytics.',
      icon: <Brain className="w-6 h-6" />,
      count: '12+ Services'
    },
    {
      title: 'IT Solutions',
      description: 'Comprehensive IT services including cloud migration, cybersecurity, and infrastructure development.',
      icon: <Shield className="w-6 h-6" />,
      count: '12+ Services'
    },
    {
      title: 'Micro SAAS',
      description: 'Specialized micro SAAS platforms for business productivity, CRM, and automation.',
      icon: <Cpu className="w-6 h-6" />,
      count: '30+ Platforms'
    },
    {
      title: '5G Solutions',
      description: 'Next-generation 5G implementation and IoT solutions for ultra-fast connectivity.',
      icon: <Zap className="w-6 h-6" />,
      count: '6+ Solutions'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'Founder & CEO',
      description: 'AI and technology visionary with 15+ years of experience in enterprise solutions.',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      description: 'Technology leader specializing in cloud architecture and AI implementation.',
      image: '/team/sarah-johnson.jpg'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      description: 'Machine learning expert with PhD in Computer Science and AI research background.',
      image: '/team/michael-chen.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      description: 'Cybersecurity specialist with expertise in enterprise security and compliance.',
      image: '/team/emily-rodriguez.jpg'
    }
  ];

  const achievements = [
    {
      icon: <Award className="w-6 h-6 text-yellow-400" />,
      title: 'Industry Recognition',
      description: 'Awarded "Best AI Solutions Provider" by Tech Industry Awards 2024'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Security Certification',
      description: 'ISO 27001 and SOC 2 Type II certified for enterprise security standards'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Global Reach',
      description: 'Serving clients across 50+ countries with localized support and solutions'
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-purple-400" />,
      title: 'Growth Milestone',
      description: '300% average ROI delivered to clients through our innovative solutions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Provider</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI services, IT solutions, micro SAAS platforms, and 5G implementation. Founded by Dr. Kleber Santos with 1,200+ projects completed." />
        <meta name="keywords" content="about Zion Tech Group, AI company, IT solutions provider, micro SAAS company, 5G implementation, Dr. Kleber Santos" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Zion Tech Group" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#8b5cf6" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="About Us - Zion Tech Group | Leading AI & IT Solutions Provider" />
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI services, IT solutions, micro SAAS platforms, and 5G implementation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
        <meta property="og:image" content="https://ziontechgroup.com/og-about.jpg" />
        <meta property="og:site_name" content="Zion Tech Group" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - Zion Tech Group" />
        <meta name="twitter:description" content="Leading provider of AI services, IT solutions, micro SAAS platforms, and 5G implementation." />
        <meta name="twitter:image" content="https://ziontechgroup.com/twitter-about.jpg" />
        <meta name="twitter:site" content="@ziontechgroup" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            About{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto mb-8">
            We are a leading technology company specializing in AI services, IT solutions, micro SAAS platforms, 
            and 5G implementation. Founded by Dr. Kleber Santos, we've completed over 1,200 projects with a 99.8% client satisfaction rate.
          </p>
        </div>

        {/* Stats Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-full mx-auto mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-300">
                <p>
                  Founded in 2020 by Dr. Kleber Santos, Zion Tech Group began with a simple mission: to democratize 
                  access to cutting-edge AI and IT solutions for businesses of all sizes.
                </p>
                <p>
                  What started as a small team of passionate technologists has grown into a global company serving 
                  clients across 50+ countries. Our journey has been marked by continuous innovation, client success, 
                  and a commitment to pushing the boundaries of what's possible with technology.
                </p>
                <p>
                  Today, we're proud to be at the forefront of AI and IT innovation, helping businesses transform 
                  their operations and achieve unprecedented growth through our comprehensive suite of services.
                </p>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-white mb-6">Our Mission</h3>
              <p className="text-gray-300 mb-6">
                To empower businesses with innovative AI and IT solutions that drive growth, efficiency, and competitive advantage.
              </p>
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300">
                To be the world's leading provider of AI and IT solutions, transforming how businesses operate and succeed in the digital age.
              </p>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and shape our company culture.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  {value.icon}
                  <h3 className="text-xl font-semibold text-white ml-4">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Our Services */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to meet every business need.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-4">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                <div className="text-cyan-400 font-medium text-sm">{service.count}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Leadership Team */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Leadership Team</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Meet the experts behind our innovative solutions and client success.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-1">{member.name}</h3>
                <p className="text-cyan-400 font-medium mb-3">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Achievements */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Our Achievements</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Recognition and milestones that reflect our commitment to excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex-shrink-0">
                    {achievement.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-2">{achievement.title}</h3>
                    <p className="text-gray-300">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact CTA */}
        <section className="text-center">
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 border border-cyan-500/30">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss how our AI and IT solutions can transform your business and drive unprecedented growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <a
                href="tel:+13024640950"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}