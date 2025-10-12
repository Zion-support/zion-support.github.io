'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Users, Award, Target, Lightbulb, Shield, Globe, Zap, Brain, Cpu, 
  Server, Database, Wifi, Smartphone, Monitor, Lock, Settings, Wrench, Activity, 
  Eye, Search, Filter, Download, Upload, Share, Timer, Battery, Signal, Bluetooth, 
  Camera, Mic, Headphones, Speaker, Volume2, Play, Pause, SkipForward, SkipBack, 
  Repeat, Shuffle, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, 
  HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, 
  RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, 
  Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, 
  Angry, Surprised, Confused, Wink, Kiss, Tongue, Package, DollarSign, CheckCircle, 
  Star, Cloud, Code, Rocket, Heart, TrendingUp, BarChart, Clock, MessageCircle, 
  Mail, Phone, MapPin, Calendar, FileText
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
      icon: Target,
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new solutions and methodologies to deliver cutting-edge results.'
    },
    {
      icon: Shield,
      title: 'Security & Trust',
      description: 'Your data and systems are protected with enterprise-grade security measures and industry best practices.'
    },
    {
      icon: Users,
      title: 'Client-Centric',
      description: 'Every project is tailored to your specific needs, ensuring solutions that truly drive your business forward.'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Serving clients worldwide with localized expertise and 24/7 support across different time zones.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and technology innovation.'
    },
    {
      name: 'AI Development Team',
      role: 'Machine Learning Engineers',
      image: '/team/ai-team.jpg',
      bio: 'Expert team specializing in cutting-edge AI solutions and automation.'
    },
    {
      name: 'Cloud Infrastructure Team',
      role: 'DevOps & Cloud Architects',
      image: '/team/cloud-team.jpg',
      bio: 'Specialists in scalable cloud solutions and infrastructure optimization.'
    },
    {
      name: 'Cybersecurity Team',
      role: 'Security Experts',
      image: '/team/security-team.jpg',
      bio: 'Dedicated professionals ensuring your digital assets remain secure.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Zion Tech Group - Leading AI & IT Solutions Company</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to transform businesses through cutting-edge AI solutions, cloud infrastructure, and cybersecurity services. Meet our expert team." />
        <meta name="keywords" content="about Zion Tech Group, AI company, IT solutions, technology team, company mission" />
        <meta property="og:title" content="About Zion Tech Group - Leading AI & IT Solutions" />
        <meta property="og:description" content="Discover how Zion Tech Group is revolutionizing business through innovative AI and IT solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
            <div className="text-center">
              <h1 className={`text-4xl md:text-6xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                About
                <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Zion Tech Group
                </span>
              </h1>
              <p className={`text-xl text-gray-300 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                We are a leading technology company dedicated to transforming businesses through 
                innovative AI solutions, robust cloud infrastructure, and comprehensive cybersecurity services.
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

        {/* Mission Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                To empower businesses with cutting-edge technology solutions that drive growth, 
                enhance security, and create sustainable competitive advantages in the digital age.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
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
        <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                cloud computing, cybersecurity, and software development.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="group">
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105">
                    <div className="w-20 h-20 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                      <Users className="h-10 w-10 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 text-center">{member.name}</h3>
                    <p className="text-purple-400 text-center mb-3">{member.role}</p>
                    <p className="text-gray-300 text-sm text-center">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to Work With Us?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Let's discuss how our expertise can help transform your business and 
                achieve your technology goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Get In Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 transform hover:scale-105"
                >
                  Call +1 302 464 0950
                </a>
              </div>
              <div className="mt-8 text-gray-400">
                <p>Email: kleber@ziontechgroup.com</p>
                <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;