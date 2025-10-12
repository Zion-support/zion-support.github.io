'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Target, Database, Globe, Smartphone, Settings, BarChart, Heart, MessageCircle, Phone, Mail, MapPin, Clock, TrendingUp, Cpu, Server, Monitor, Lock, Wifi, Package, Calendar, Link as LinkIcon, ShoppingCart, DollarSign, Workflow, Eye, Search, Filter, Download, Upload, Share, Timer, Battery, Wifi2, Signal, Bluetooth, Camera, Mic, Headphones, Speaker, Volume2, VolumeX, Play, Pause, SkipForward, SkipBack, Repeat, Shuffle, Heart2, ThumbsUp, ThumbsDown, Bookmark, Flag, AlertTriangle, Info, HelpCircle, Plus, Minus, Edit, Trash2, Save, Copy, Paste, Cut, Undo, Redo, RefreshCw, RotateCcw, RotateCw, Move, Maximize, Minimize, Square, Circle, Triangle, Hexagon, Octagon, Pentagon, Star2, Smile, Frown, Meh, Laugh, Angry, Surprised, Confused, Wink, Kiss, Tongue } from 'lucide-react';

const AboutPage: React.FC = () => {
  const values = [
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Client-Centric',
      description: 'We put our clients at the center of everything we do, ensuring their success is our primary focus.'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Results-Driven',
      description: 'We measure our success by the tangible results and ROI we deliver to our clients.'
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.'
    }
  ];

  const team = [
    {
      name: 'Dr. Kleber Santos',
      role: 'CEO & Founder',
      description: 'Visionary leader with 15+ years in AI and technology innovation.',
      image: '/team/kleber-santos.jpg'
    },
    {
      name: 'Emily Rodriguez',
      role: 'CTO',
      description: 'Cybersecurity Expert with certifications in ethical hacking and compliance.',
      image: '/team/emily-rodriguez.jpg'
    },
    {
      name: 'Sarah Johnson',
      role: 'Head of AI Research',
      description: 'AI researcher with expertise in machine learning and neural networks.',
      image: '/team/sarah-johnson.jpg'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: <CheckCircle className="w-6 h-6 text-green-400" /> },
    { number: '50+', label: 'Happy Clients', icon: <Users className="w-6 h-6 text-blue-400" /> },
    { number: '99%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6 text-yellow-400" /> },
    { number: '24/7', label: 'Support Available', icon: <Award className="w-6 h-6 text-purple-400" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group - a leading provider of AI services, IT solutions, and micro SAAS platforms. Our mission is to transform businesses through cutting-edge technology." />
        <meta name="keywords" content="about us, AI services, IT solutions, micro SAAS, technology company, team, mission, values" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Zion Tech Group</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We are a leading technology company specializing in AI services, IT solutions, 
            and innovative micro SAAS platforms that transform businesses worldwide.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Mission</span>
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                To empower businesses with cutting-edge AI and technology solutions that drive 
                innovation, efficiency, and growth in the digital age.
              </p>
              <p className="text-lg text-gray-400 mb-8">
                We believe that every business deserves access to world-class technology solutions. 
                Our mission is to democratize AI and advanced technology, making it accessible 
                and beneficial for companies of all sizes.
              </p>
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 flex items-center w-fit"
              >
                Work With Us
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700">
              <h3 className="text-2xl font-bold text-white mb-6">Our Vision</h3>
              <p className="text-gray-300 mb-6">
                To be the global leader in AI-powered business solutions, creating a world where 
                technology seamlessly integrates with human creativity to solve complex challenges.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Innovation-driven approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Client-first philosophy</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span className="text-gray-300">Sustainable technology solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400">Core Values</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 group">
                <div className="flex items-center mb-6">
                  {value.icon}
                  <h3 className="text-2xl font-bold text-white ml-4">{value.title}</h3>
                </div>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Meet Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">Expert Team</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The brilliant minds behind our innovative solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300 group text-center">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-6">
                  {member.name.split(' ').map(n => n[0]).join('')}
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-purple-400 mb-4">{member.role}</p>
                <p className="text-gray-300">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Impact</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Numbers that speak to our commitment to excellence
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Work With <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400">Our Team?</span>
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our expertise and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-emerald-500 to-blue-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="group border-2 border-emerald-400 text-emerald-400 px-10 py-4 rounded-xl font-semibold hover:bg-emerald-400 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              View Our Pricing
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
