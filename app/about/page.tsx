'use client';
import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Target, Lightbulb, Rocket, Globe, Heart, TrendingUp, BarChart, Cpu, Server, Database, Wifi, Smartphone, Monitor, Lock, Settings, Wrench, Activity, Eye, Search, Filter, Download, Upload, Share, Timer, Battery, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Heart2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue, Package, DollarSign } from 'lucide-react';

const AboutPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We stay at the forefront of technology, constantly exploring new AI and IT solutions to deliver cutting-edge results.'
    },
    {
      title: 'Security & Trust',
      description: 'Your data security is our top priority. We implement enterprise-grade security measures to protect your business.'
    },
    {
      title: 'Client-Centric',
      description: 'Every solution is tailored to your specific needs, ensuring maximum value and business impact.'
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards of quality in every project, delivering exceptional results consistently.'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/team/kleber.jpg',
      bio: 'Visionary leader with 15+ years in AI and IT solutions, passionate about transforming businesses through technology.'
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/team/sarah.jpg',
      bio: 'Technical expert specializing in AI architecture and cloud infrastructure, leading our development teams.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI',
      image: '/team/michael.jpg',
      bio: 'AI researcher and practitioner with expertise in machine learning, natural language processing, and computer vision.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of Security',
      image: '/team/emily.jpg',
      bio: 'Cybersecurity expert ensuring our solutions meet the highest security standards and compliance requirements.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and expert team." />
        <meta name="keywords" content="about, company, team, AI solutions, IT services, Zion Tech Group" />
        <meta property="og:title" content="About Us - Zion Tech Group" />
        <meta property="og:description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions. Discover our mission, values, and expert team." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/about" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16">
          <div className="absolute inset-0 opacity-20"></div>
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
                innovative AI solutions, cloud infrastructure, and cybersecurity services.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-white mb-8">
                Our Mission
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                To empower businesses with cutting-edge AI and IT solutions that drive innovation, 
                enhance security, and accelerate digital transformation. We believe technology should 
                be accessible, reliable, and transformative.
              </p>
              <div className="grid md:grid-cols-2 gap-8 mt-12">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Vision</h3>
                  <p className="text-gray-300">
                    To be the global leader in AI-powered business solutions, setting the standard 
                    for innovation, security, and customer success in the technology industry.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-8 rounded-2xl border border-slate-700/50">
                  <h3 className="text-2xl font-bold text-white mb-4">Values</h3>
                  <p className="text-gray-300">
                    Integrity, innovation, and excellence guide everything we do. We're committed 
                    to delivering exceptional value while maintaining the highest ethical standards.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Core Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These principles guide our work and define our commitment to excellence
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full mb-6 group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The experts behind our innovative solutions
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 p-6 rounded-2xl border border-slate-700/50 text-center group hover:scale-105 transition-transform duration-300">
                  <div className="w-24 h-24 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Users className="w-12 h-12 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-purple-400 mb-4">{member.role}</p>
                  <p className="text-gray-400 text-sm">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-600/20 to-pink-600/20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI and IT solutions can drive your success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-4 border border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;