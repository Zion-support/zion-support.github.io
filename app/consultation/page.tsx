<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react;

import { Helmet } from 'react-helmet-async;

import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MapPin, Star } from 'lucide-react;

import { ArrowRight, CheckCircle, Phone, Mail, MapPin } from 'lucide-react;

interface ConsultationType {}
  id: number;
=======
'use client';
<<<<<<< HEAD

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Calendar, Clock, Users, CheckCircle, ArrowRight, Phone, Mail, MessageCircle, Star, Award, Zap } from 'lucide-react';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac

  name: string;
<<<<<<< HEAD

  description: string;

=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
  duration: string;

  price: string;
<<<<<<< HEAD

  features: string[];

  popular?: boolean;

=======
  description: string;
  features: string[];
  popular?: boolean;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
}

const ConsultationPage: React.FC = () => {}
  const [selectedType, setSelectedType] = useState<number | null>(null);

<<<<<<< HEAD
=======
import { ArrowRight, CheckCircle, Star, Brain, Zap, Globe, TrendingUp, Target, Monitor, MessageSquare, Phone } from "lucide-react";
import EnhancedSEO from '../components/EnhancedSEO';

const ConsultationPage = () => {
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
  const [formData, setFormData] = useState({
    name: ',
    email: ',
    phone: ',
    company: ',
    message: ',
    consultationType: 
    {
      id: '1,
      name: 'Discovery Call,
      description: 'Initial consultation to understand your business needs and challenges,
      duration: '30 minutes,
      price: 'Free,
      features: [
        'Business needs assessment,
        'Technology evaluation,
        'Initial recommendations,
        'Next steps planning
      name: 'Strategic Planning,
      description: 'Comprehensive analysis and strategic roadmap for your AI transformation,
      duration: '2 hours,
      price: '$500,
      features: [
        'Deep dive into current systems,
        'AI readiness assessment,
        'Strategic roadmap creation,
        'Implementation timeline,
        'ROI projections,
        'Follow-up support
      name: 'Technical Deep Dive,
      description: 'Detailed technical analysis and architecture recommendations,
      duration: '4 hours,
      price: '$1,200,
      features: [},
    {
      id: '3,
      name: 'Technical Deep Dive,
      description: 'In-depth technical analysis and solution architecture design,
      duration: '4-8 hours,
      price: '$1,200,
      features: [
        'Technical architecture review,
        'Security assessment,
        'Performance optimization,
        'Integration planning,
        'Scalability analysis,
        'Detailed technical documentation
      name: 'Executive Briefing,
      description: 'High-level overview for C-level executives and decision makers,
      duration: '1 hour,
      price: '$300,
      features: [
        'Executive summary,
        'Business impact analysis,
        'Investment recommendations,
        'Risk assessment,
        'Competitive advantages
    company: '',
    service: '',
<<<<<<< HEAD
    message: '',
    preferredTime: '',
    budget: ''
  });

  const services = [
    {
      icon: Brain,
      title: 'AI Strategy & Implementation',
      description: 'Develop and implement AI solutions tailored to your business needs',
      duration: '2-4 hours'
    },
    {
      icon: Cloud,
      title: 'Cloud Migration & Architecture',
      description: 'Plan and execute cloud migration strategies for optimal performance',
      duration: '2-3 hours'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Assessment',
      description: 'Comprehensive security evaluation and risk mitigation strategies',
      duration: '3-4 hours'
    },
    {
      icon: Zap,
      title: 'Digital Transformation',
      description: 'Complete digital transformation roadmap and implementation plan',
      duration: '4-6 hours'
    }
  ];

  const experts = [    {;
      name: 'Dr. Sarah Chen,
      role: 'AI & Machine Learning Consultant,
      experience: '15+ years,
      expertise: ['AI Strategy', 'Machine Learning', 'Data Science],
      image: '/images/experts/sarah-chen.jpg});)
},
    {
      name: 'Michael Rodriguez,
      role: 'Cloud Architecture Specialist,
      experience: '12+ years,
      expertise: ['Cloud Migration', 'AWS', 'Azure', 'DevOps],
      image: '/images/experts/michael-rodriguez.jpg
    },
    {      name: 'Alex Thompson,
      role: 'Cybersecurity Consultant,
      experience: '10+ years,
      expertise: ['Security Audits', 'Compliance', 'Risk Management],
      image: '/images/experts/alex-thompson.jpg});)
  const handleBooking = (typeId: string) => {;
    industry: '',
    companySize: '',
    currentChallenges: '',
    goals: '',
    timeline: '',
    budget: '',
    timeline: '',
=======
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
    message: ''
  });

    }

  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {    const { name, value } = e.target;;

    setFormData(prev => ({
  const handleSubmit = (e: React.FormEvent) => {;;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    // Handle form submission
    console.log('Form submitted:', formData);
=======
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
      });
    }, 3000);
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
  };
=======
import React from 'react'
import { Helmet } from 'react-helmet-async'
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c

  return (

    <>
      <Helmet>
<<<<<<< HEAD
        <title>Consultation - Zion Tech Group | Expert AI & IT Consulting</title>
        <meta name="description" content="Get expert consultation on AI implementation, digital transformation, and IT strategy. Free discovery calls and comprehensive planning sessions available. />
        <meta name="keywords" content="AI consultation, IT consulting, digital transformation, technology strategy, business consulting />
        <meta property="og:title" content="Consultation - Zion Tech Group />
        <meta property="og:description" content="Expert consultation for your AI and IT needs />
        <meta property="og:type" content="website />
        <meta property="og:url" content="https://ziontechgroup.com/consultation />
      </Helmet>
  return (<div>
        <title>Consultation - Zion Tech Group | Expert IT Consulting<
        <meta name="description" content="Get expert consultation on AI, cloud computing, cybersecurity, and IT strategy. Book a consultation with our experienced team. 
        <meta name="keywords" content="IT consultation, AI consulting, cloud consulting, cybersecurity consulting, technology strategy 
      <

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900>
        {/* Hero Section */}

        <section className="pt-24 pb-16 px-4">          <div className="max-w-7xl mx-auto text-center>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6>
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                Page
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8>
              Get personalized guidance from our experts to transform your business with AI and cutting-edge technology
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center>
              <a
                href="tel:+13024640950
                className="inline-flex items-center px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors
              >
                <Phone className="w-5 h-5 mr-2 />
                Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors
              >
                <Mail className="w-5 h-5 mr-2 />
                Email Us
        {/* Consultation Types */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-4>Choose Your Consultation Type</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Select the consultation that best fits your needs and budget              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <a
                  href="tel:+13024640950
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 px-8 py-4 rounded-lg font-semibold hover:from-cyan-300 hover:to-purple-300 transition-all duration-300
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8>
=======
  const consultationTypes: ConsultationType[] = [
    {
<<<<<<< HEAD
      id: 'strategy',
      name: 'AI Strategy Consultation',
      duration: '2-4 hours',
      price: '$2,500',
      description: 'Comprehensive AI strategy assessment and roadmap development for your organization.',
      features: [
        'Current state analysis',
        'AI readiness assessment',
        'Strategic roadmap development',
        'Technology recommendations',
        'Implementation timeline',
        'ROI projections'
      ],
      popular: true
    },
    {
      id: 'technical',
      name: 'Technical Architecture Review',
      duration: '4-6 hours',
      price: '$3,500',
      description: 'Deep dive into your technical infrastructure and AI implementation architecture.',
      features: [
        'Infrastructure audit',
        'Security assessment',
        'Scalability analysis',
        'Performance optimization',
        'Integration planning',
        'Best practices review'
      ]
    },
    {
      id: 'quantum',
      name: 'Quantum Computing Assessment',
      duration: '3-5 hours',
      price: '$4,000',
      description: 'Evaluate quantum computing opportunities and prepare for quantum advantage.',
      features: [
        'Quantum readiness evaluation',
        'Use case identification',
        'Quantum algorithm design',
        'Hardware requirements',
        'Implementation strategy',
        'Timeline and milestones'
      ]
    },
    {
      id: 'autonomous',
      name: 'Autonomous Systems Planning',
      duration: '2-3 hours',
      price: '$2,000',
      description: 'Plan and design autonomous systems for your specific industry needs.',
      features: [
        'Use case analysis',
        'System architecture design',
        'Safety and compliance review',
        'Implementation roadmap',
        'Testing strategy',
        'Deployment planning'
      ]
    }
  ];

  const stats = [
    { icon: <Users className="w-6 h-6" />, value: '500+', label: 'Consultations Completed' },
    { icon: <Star className="w-6 h-6" />, value: '98%', label: 'Client Satisfaction' },
    { icon: <Award className="w-6 h-6" />, value: '50+', label: 'Industry Awards' },
    { icon: <Zap className="w-6 h-6" />, value: '24/7', label: 'Expert Support' }
  ];

  const experts = [
    {
      name: 'Dr. Sarah Chen',
      title: 'Chief AI Officer',
      expertise: 'Machine Learning, Deep Learning, AI Strategy',
      experience: '15+ years',
      image: '/images/experts/sarah-chen.jpg'
    },
    {
      name: 'Prof. Michael Rodriguez',
      title: 'Quantum Computing Director',
      expertise: 'Quantum Algorithms, Quantum Hardware, Quantum Software',
      experience: '12+ years',
      image: '/images/experts/michael-rodriguez.jpg'
    },
    {
      name: 'Dr. Emily Watson',
      title: 'Autonomous Systems Lead',
      expertise: 'Robotics, Computer Vision, Autonomous Navigation',
      experience: '10+ years',
      image: '/images/experts/emily-watson.jpg'
=======
      title: "AI Strategy Consultation",
      description: "Strategic planning for AI implementation",
      icon: <Brain className="w-8 h-8" />
    },
    {
      title: "Cloud Migration",
      description: "Seamless cloud infrastructure migration",
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: "Cybersecurity Audit",
      description: "Comprehensive security assessment",
      icon: <Target className="w-8 h-8" />
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
    }
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group | Expert AI & Technology Consulting</title>
        <meta name="description" content="Get expert consultation on AI, quantum computing, and autonomous systems. Our experienced team provides strategic guidance and technical expertise." />
        <meta name="keywords" content="AI consultation, technology consulting, quantum computing advice, autonomous systems planning, tech strategy" />
        <link rel="canonical" href="https://ziontechgroup.com/consultation" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Expert Consultation
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Get personalized guidance from our world-class experts in AI, quantum computing, and autonomous systems. 
              Transform your technology strategy with our proven methodologies.
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEO
        title="Free Consultation - Zion Tech Group | Expert Technology Consulting"
        description="Get a free consultation with our technology experts. We'll help you plan your AI, cloud, and digital transformation strategy."
        keywords="free consultation, technology consulting, AI strategy, cloud migration, cybersecurity audit"
        canonical="https://ziontechgroup.com/consultation"
      />
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Technology Consultation
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get expert advice on your technology strategy. Our consultants will help you plan your digital transformation.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                Schedule Consultation
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                View Our Experts
              </button>
            </div>
          </div>

<<<<<<< HEAD
        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Types */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Consultation Types
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
              {consultationTypes.map((type) => (

                <div
                  key={type.id}
<<<<<<< HEAD

                  className={bg-white/10 backdrop-blur-lg rounded-2xl border p-8 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer ${
                    selectedType === type.id ? 'border-cyan-400' : 'border-white/20
                  } ${type.popular ? 'ring-2 ring-cyan-400/50' : ''}}

                  {type.popular && (

                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2>
                      <span className="bg-cyan-400 text-slate-900 px-4 py-1 rounded-full text-sm font-semibold>
                    <ul className="space-y-3 mb-8>
                      {type.features.map((feature, index) => (

                        <li key={index} className="flex items-center text-gray-300>
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0 />
                          <span className="text-sm>{feature}</span>
        {/* Why Choose Us */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <div className="text-center mb-16>
              <h2 className="text-3xl font-bold text-white mb-4>Why Choose Our Consultation?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto>
                Our experts bring decades of experience in AI, quantum computing, and enterprise technology
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Users className="w-8 h-8 text-cyan-400 />
=======
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    type.popular ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group cursor-pointer`}
                  onClick={() => setSelectedType(type.id)}
                >
                  {type.popular && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-semibold">Most Popular</span>
                    </div>
                  )}

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {type.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{type.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{type.duration}</span>
                    </div>
                    <div className="text-2xl font-bold text-cyan-400">{type.price}</div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {type.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2 text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300">
                    Select This Type
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Experts */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Meet Our Experts
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {experts.map((expert, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300 group">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <div className="text-2xl font-bold text-white">{expert.name.charAt(0)}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {expert.name}
                    </h3>
                    <p className="text-cyan-400 font-medium mb-2">{expert.title}</p>
                    <p className="text-gray-300 text-sm mb-4">{expert.expertise}</p>
                    <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                      <Award className="w-4 h-4" />
                      <span>{expert.experience}</span>
                    </div>
                  </div>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Expert Team</h3>
                <p className="text-gray-300>Our consultants have 15+ years of experience in AI, quantum computing, and enterprise technology.</p>
=======
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-white mb-8">
                What We Offer
              </h2>
              <div className="space-y-6">
                {consultationTypes.map((type, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center text-white">
                      {type.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {type.title}
                      </h3>
                      <p className="text-gray-300">
                        {type.description}
                      </p>
                    </div>
                  </div>
                ))}
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
              <h2 className="text-2xl font-bold text-white mb-6">
                Schedule Your Consultation
              </h2>
              
<<<<<<< HEAD
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <CheckCircle className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Proven Results</h3>
                <p className="text-gray-300">Weve helped 500+ companies achieve 300% average ROI through strategic AI implementation.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Star className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>98% Satisfaction</h3>
                <p className="text-gray-300>Our clients consistently rate our consultation services as excellent and highly valuable.</p>
                  <label htmlFor="consultationType" className="block text-sm font-medium text-gray-300 mb-2>
                    Preferred Consultation Type
                  </label>
                  <select
                    id="consultationType
                    name="consultationType
                    value={formData.consultationType}

<<<<<<< HEAD
                    onChange={handleInputChange}

                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors
                  >
                    <option value="" className="bg-slate-800>Select consultation type</option>
                    {consultationTypes.map((type) => (

                      <option key={type.id} value={type.name} className="bg-slate-800>
        {/* Contact Info */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <h2 className="text-3xl font-bold text-white mb-8>Get in Touch</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Phone className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Call Us</h3>
                <p className="text-gray-300 mb-4>Speak directly with our experts</p>
                <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold>
                  (302) 464-0950
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Mail className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Email Us</h3>
                <p className="text-gray-300 mb-4>Send us your questions</p>
                <a href="mailto:kleber@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold>
                  kleber@ziontechgroup.com
                </a>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20>
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <MapPin className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Visit Us</h3>
                <p className="text-gray-300 mb-4>Our headquarters</p>
                <p className="text-cyan-400 font-semibold>
                  364 E Main St STE 1008<br />
                  Middletown, DE 19709
                </p>
              </div>              </div>
            ));

          </div>
        </div>
      </section>

      {/* Expert Team */}

      <section className="py-16 px-4 bg-white/5>
        <div className="max-w-7xl mx-auto>
          <h2 className="text-3xl font-bold text-white mb-12 text-center>Meet Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8>
            {experts.map((expert, index) => (

              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300>
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <span className="text-2xl font-bold text-white">{expert.name.split(' ').map(n => n[0]).join(')}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2>{expert.name}</h3>
                <p className="text-purple-400 mb-2>{expert.role}</p>
                <p className="text-gray-400 text-sm mb-4>{expert.experience}</p>
                <div className="flex flex-wrap justify-center gap-2>
                  {expert.expertise.map((skill, skillIndex) => (

                    <span key={skillIndex} className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-xs>
export default ConsultationPage;      <section className="py-16 px-4>
        <div className="max-w-4xl mx-auto text-center>
          <h2 className="text-3xl font-bold text-white mb-6>Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8>
            Book a consultation with our experts and take the first step towards transforming your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center>
            <button className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 flex items-center justify-center>
              <Calendar className="mr-2 h-5 w-5 />              Schedule Now
            </button>
            <button></button>
              <Mail className="mr-2 h-5 w-5 />
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
                <
              <
            <
          <
        <
      <
    <)
=======
        {/* Process Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Our Consultation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Initial Assessment</h3>
                <p className="text-gray-300 text-sm">We analyze your current state and identify key challenges and opportunities.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Strategy Development</h3>
                <p className="text-gray-300 text-sm">We create a comprehensive strategy tailored to your specific needs and goals.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Implementation Plan</h3>
                <p className="text-gray-300 text-sm">We provide detailed implementation roadmap with timelines and milestones.</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Ongoing Support</h3>
                <p className="text-gray-300 text-sm">We provide continuous support and guidance throughout your journey.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your Technology Strategy?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Schedule a consultation with our experts and take the first step towards technological transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                  Schedule Now
                </button>
                <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0fac
  );

};
=======
        <title>Free Consultation - Zion Tech Group</title>
        <meta name="description" content="Free Consultation services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Free Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced Free Consultation solutions by Zion Tech Group
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ConsultationPage
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0f1c
=======
              {isSubmitted ? (
                <div className="text-center">
                  <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Thank You!
                  </h3>
                  <p className="text-gray-300">
                    We'll contact you within 24 hours to schedule your consultation.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-300 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="ai-strategy">AI Strategy</option>
                      <option value="cloud-migration">Cloud Migration</option>
                      <option value="cybersecurity">Cybersecurity</option>
                      <option value="digital-transformation">Digital Transformation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-bold py-3 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ConsultationPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Consultation - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group - Consultation page" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        <div className="pt-24 pb-16">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 cyber-text neon-pulse">
              Consultation
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              This page is under construction. Please check back soon.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-1009
  );
};

export default ConsultationPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ff3
