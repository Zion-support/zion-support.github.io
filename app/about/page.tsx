'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Brain, Users, Award, Target, TrendingUp, Shield, Globe, Clock, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star, Zap, Cpu, Database, Cloud, Settings, BarChart, MessageSquare, Eye, Sparkles } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const stats = [
    {
      icon: Users,
      title: 'Clients Served',
      value: '500+',
      description: 'Enterprise clients worldwide'
    },
    {
      icon: TrendingUp,
      title: 'Average ROI',
      value: '300%',
      description: 'Measurable business impact'
    },
    {
      icon: Shield,
      title: 'Uptime Guarantee',
      value: '99.9%',
      description: 'Reliable service delivery'
    },
    {
      icon: Globe,
      title: 'Countries',
      value: '25+',
      description: 'Global presence'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: '20+ years in AI and enterprise technology',
      expertise: ['AI Strategy', 'Enterprise Architecture', 'Digital Transformation']
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief AI Officer',
      description: 'PhD in Machine Learning, former Google AI researcher',
      expertise: ['Machine Learning', 'Deep Learning', 'AI Ethics']
    },
    {
      name: 'Michael Rodriguez',
      role: 'CTO',
      description: '15+ years in cloud architecture and DevOps',
      expertise: ['Cloud Computing', 'DevOps', 'System Architecture']
    },
    {
      name: 'Emily Johnson',
      role: 'Head of Data Science',
      description: 'Expert in predictive analytics and business intelligence',
      expertise: ['Data Science', 'Analytics', 'Business Intelligence']
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with cutting-edge technology and creative solutions.'
    },
    {
      icon: Shield,
      title: 'Security',
      description: 'Enterprise-grade security and compliance are at the core of everything we build.'
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'We work closely with our clients as strategic partners, not just service providers.'
    },
    {
      icon: TrendingUp,
      title: 'Results',
      description: 'We measure success by the tangible business value we deliver to our clients.'
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was founded with a vision to democratize AI and make it accessible to businesses of all sizes.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Secured our first Fortune 500 client, delivering a 200% ROI through AI automation.'
    },
    {
      year: '2022',
      title: 'AI Platform Launch',
      description: 'Launched our proprietary AI platform, enabling rapid deployment of AI solutions.'
    },
    {
      year: '2023',
      title: 'Global Expansion',
      description: 'Expanded operations to 25+ countries, serving clients across multiple industries.'
    },
    {
      year: '2024',
      title: 'Quantum Computing',
      description: 'Pioneered quantum computing solutions for enterprise applications.'
    }
  ];

  const certifications = [
    { name: 'ISO 27001', description: 'Information Security Management' },
    { name: 'SOC 2 Type II', description: 'Security, Availability & Confidentiality' },
    { name: 'GDPR Compliant', description: 'Data Protection & Privacy' },
    { name: 'AWS Advanced Partner', description: 'Cloud Solutions Expertise' },
    { name: 'Microsoft Gold Partner', description: 'Enterprise Solutions' },
    { name: 'Google Cloud Partner', description: 'AI & ML Solutions' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Founded in 2020, we've helped 500+ clients achieve 300% ROI through innovative technology." />
        <meta name="keywords" content="about zion tech group, AI company, IT solutions company, enterprise technology, digital transformation" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Navigation */}
        <nav className="bg-black/20 backdrop-blur-md border-b border-cyan-500/20 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                  <Brain className="w-6 h-6 text-white" />
                </div>
                <span className="text-2xl font-bold text-white">Zion Tech Group</span>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                <a href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">Home</a>
                <a href="/services-overview" className="text-white hover:text-cyan-400 transition-colors">Services</a>
                <a href="/about" className="text-white hover:text-cyan-400 transition-colors">About</a>
                <a href="#contact" className="text-white hover:text-cyan-400 transition-colors">Contact</a>
                <a href="tel:+13024640950" className="bg-cyan-500 text-black px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 transition-colors">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </nav>

        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Hero Section */}
          <section className="text-center mb-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
                Leading the Future of AI and IT Solutions
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                Founded in 2020, Zion Tech Group has become a trusted partner for enterprises worldwide, delivering innovative AI and IT solutions that drive measurable business results.
              </p>
            </div>
          </section>

          {/* Stats Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <h3 className="text-lg font-bold text-white mb-2">{stat.title}</h3>
                  <p className="text-gray-300 text-sm">{stat.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Mission & Vision */}
          <section className="mb-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To democratize artificial intelligence and make cutting-edge technology accessible to businesses of all sizes, enabling them to achieve unprecedented growth and efficiency through innovative AI and IT solutions.
                </p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the world's leading provider of AI-powered enterprise solutions, transforming how businesses operate and compete in the digital age through quantum computing, autonomous systems, and next-generation technology.
                </p>
              </div>
            </div>
          </section>

          {/* Team Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Leadership Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-cyan-400 mb-3">{member.role}</p>
                  <p className="text-gray-300 text-sm mb-4">{member.description}</p>
                  <div className="space-y-1">
                    {member.expertise.map((skill, skillIndex) => (
                      <div key={skillIndex} className="text-xs text-cyan-400">
                        • {skill}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center mb-4 mx-auto">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Timeline Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Our Journey
            </h2>
            <div className="space-y-8">
              {timeline.map((event, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{event.year}</span>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{event.title}</h3>
                    <p className="text-gray-300">{event.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Certifications Section */}
          <section className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
              Certifications & Compliance
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{cert.name}</h3>
                  <p className="text-gray-300 text-sm">{cert.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Join 500+ companies that trust Zion Tech Group for their AI and IT transformation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
              >
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
              >
                Email Us
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="bg-black/40 backdrop-blur-md border-t border-cyan-500/20 py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                    <Brain className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-xl font-bold text-white">Zion Tech Group</span>
                </div>
                <p className="text-gray-300 text-sm">
                  Leading provider of AI-powered enterprise solutions and digital transformation services.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
                <ul className="space-y-2">
                  <li><a href="/services-overview" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">AI Solutions</a></li>
                  <li><a href="/services-overview" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">IT Services</a></li>
                  <li><a href="/services-overview" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Micro SAAS</a></li>
                  <li><a href="/services-overview" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Consulting</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Company</h3>
                <ul className="space-y-2">
                  <li><a href="/" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Home</a></li>
                  <li><a href="/about" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">About</a></li>
                  <li><a href="#contact" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Contact</a></li>
                  <li><a href="/careers" className="text-gray-300 hover:text-cyan-400 transition-colors text-sm">Careers</a></li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>+1 302 464 0950</p>
                  <p>kleber@ziontechgroup.com</p>
                  <p>364 E Main St STE 1008<br />Middletown, DE 19709</p>
                </div>
              </div>
            </div>
            
            <div className="border-t border-gray-700 mt-8 pt-8 text-center">
              <p className="text-gray-400 text-sm">
                © 2024 Zion Tech Group. All rights reserved. | 
                <a href="/privacy" className="hover:text-cyan-400 transition-colors ml-2">Privacy Policy</a> | 
                <a href="/terms" className="hover:text-cyan-400 transition-colors ml-2">Terms of Service</a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default AboutPage;