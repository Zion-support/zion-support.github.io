'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Award, Target, Lightbulb, Shield, Globe, Zap, Brain, Cpu, 
  Rocket, CheckCircle, Star, Clock, TrendingUp, MessageCircle, Mail, Phone, MapPin, 
  Calendar, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, 
  Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, 
  Heart, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, 
  Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, 
  RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, 
  Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, 
  Surprised, Confused, Wink, Kiss, Tongue, Wink2, Kiss2, Tongue2, Wink3, Kiss3, 
  Tongue3, Wink4, Kiss4, Tongue4, Wink5, Kiss5, Tongue5, Wink6, Kiss6, Tongue6, 
  Wink7, Kiss7, Tongue7, Wink8, Kiss8, Tongue8, Wink9, Kiss9, Tongue9, Wink10, 
  Kiss10, Tongue10, FileText, Package, DollarSign, Database, Cloud, Code, 
  Smartphone, Server, Lock, Eye, Workflow, Settings, BarChart, FileText as FileTextIcon
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every solution is tailored to your specific needs, ensuring maximum value and business impact.'
    },
    {
      icon: Zap,
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, delivering exceptional results consistently.'
    },
    {
      icon: Users,
      title: 'Client Success',
      description: 'We measure our success by your success. Our dedicated team ensures every project exceeds expectations.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and 24/7 support across all time zones.'
    },
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to solve complex business challenges.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/images/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in technology and business transformation.',
      expertise: ['AI Strategy', 'Business Development', 'Technology Leadership']
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/images/team/sarah.jpg',
      bio: 'Technical architect specializing in AI and cloud infrastructure solutions.',
      expertise: ['AI Engineering', 'Cloud Architecture', 'System Design']
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI Research',
      image: '/images/team/michael.jpg',
      bio: 'AI researcher and machine learning expert with a passion for cutting-edge technology.',
      expertise: ['Machine Learning', 'Deep Learning', 'Computer Vision']
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Cybersecurity',
      image: '/images/team/emily.jpg',
      bio: 'Cybersecurity expert dedicated to protecting businesses from evolving digital threats.',
      expertise: ['Cybersecurity', 'Risk Assessment', 'Security Architecture']
    }
  ];

  const achievements = [
    {
      year: '2024',
      title: 'AI Innovation Award',
      description: 'Recognized for breakthrough AI solutions in business automation'
    },
    {
      year: '2023',
      title: 'Cloud Excellence Award',
      description: 'Awarded for outstanding cloud infrastructure implementations'
    },
    {
      year: '2022',
      title: 'Cybersecurity Leader',
      description: 'Named top cybersecurity provider by industry analysts'
    },
    {
      year: '2021',
      title: 'Rapid Growth Award',
      description: 'Fastest growing AI and IT solutions company'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group | Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI solutions, cloud infrastructure, and cybersecurity services. Discover our mission, values, and expert team." />
        <meta name="keywords" content="about us, company, team, AI solutions, cloud computing, cybersecurity, technology leadership" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Leading provider of AI and IT solutions with a mission to transform businesses through technology." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20 pb-16">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                About
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                We are a leading technology company dedicated to transforming businesses through 
                cutting-edge AI solutions, cloud infrastructure, and cybersecurity services.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mb-4">
                    <stat.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                  efficiency, and growth. We believe technology should be accessible, powerful, and 
                  transformative for every organization.
                </p>
                <p className="text-lg text-gray-400">
                  Our mission is to bridge the gap between complex technology and practical business 
                  solutions, making advanced AI and IT capabilities accessible to companies of all sizes.
                </p>
              </div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Our Vision
                </h2>
                <p className="text-xl text-gray-300 mb-6">
                  To be the world's leading provider of AI and IT solutions, recognized for our 
                  innovation, reliability, and commitment to client success. We envision a future 
                  where every business can leverage technology to its full potential.
                </p>
                <p className="text-lg text-gray-400">
                  We're building a future where artificial intelligence and advanced technology 
                  work seamlessly together to solve the world's most complex business challenges.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Core Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These values guide everything we do and shape how we work with our clients and each other.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg mb-4">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-gray-300">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                cloud computing, cybersecurity, and business transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
                    <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-12 w-12 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                    <p className="text-purple-400 text-center mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm mb-4 text-center">{member.bio}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {member.expertise.map((skill, skillIndex) => (
                        <span key={skillIndex} className="px-2 py-1 bg-purple-900/50 text-purple-300 text-xs rounded-full">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-20 bg-gradient-to-br from-gray-900 to-purple-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Recognition from industry leaders and our commitment to excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 h-full hover:bg-gray-700/50 transition-all duration-300 transform hover:scale-105 border border-gray-700/50">
                    <div className="text-3xl font-bold text-purple-400 mb-2">{achievement.year}</div>
                    <h3 className="text-lg font-semibold text-white mb-3">{achievement.title}</h3>
                    <p className="text-gray-300 text-sm">{achievement.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our team can help transform your business with cutting-edge 
                AI and IT solutions tailored to your specific needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get Started Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  View Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;