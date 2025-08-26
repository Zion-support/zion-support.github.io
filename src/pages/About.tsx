import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Target, 
  Award, 
  TrendingUp, 
  Globe, 
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Award,
  Globe,
  Heart,
  Zap,
  Shield,
  ArrowRight,
  Brain,
  Star,
  TrendingUp,
  CheckCircle
} from 'lucide-react';

const About = () => {
  const stats = [
  Rocket, 
  Shield, 
  Brain, 
  Globe, 
  Award, 
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Star,
  Zap,
  Heart,
  Lightbulb,
  Clock
} from 'lucide-react';
=======
import React from 'react';
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { 
  Users, 
  Lightbulb, 
  Award, 
  Globe, 
  Zap,
  CheckCircle,
  TrendingUp,
  Shield,
  Heart
} from "lucide-react";

export default function About() {
  const companyStats = [
    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
    { number: '50+', label: 'Enterprise Clients', icon: Users },
    { number: '99.9%', label: 'Uptime SLA', icon: Shield },
    { number: '24/7', label: 'Support Available', icon: Clock }
=======
    { label: 'Projects Completed', value: '500+', icon: Target },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Countries Served', value: '25+', icon: Globe },
=======
=======
=======
import React from 'react';
=======
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Code, 
  Users, 
  Globe, 
  Award, 
  TrendingUp, 
  Zap, 
  Circle,
  Lightbulb,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  DollarSign
} from 'lucide-react';
import { AnimatedBackground, NeonGlow } from '@/components/ui/AnimatedBackground';

export default function About() {
  const stats = [
    { label: 'Years of Experience', value: '10+', icon: Award },
    { label: 'Projects Completed', value: '500+', icon: CheckCircle },
    { label: 'Happy Clients', value: '200+', icon: Star },
    { label: 'Team Members', value: '50+', icon: Users }
  ];

  const values = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with cutting-edge AI and emerging technologies.'
    },
    {
      icon: Shield,
      title: "Trust & Security",
      description: "Building secure, reliable solutions that our clients can depend on"
    },
    {
      icon: Users,
      title: "Client Success",
      description: "Your success is our success - we're committed to delivering measurable results"
    },
    {
      icon: Rocket,
      title: 'Future-Ready',
      description: 'We build solutions that not only solve today\'s problems but prepare you for tomorrow\'s challenges.'
    }
  ];

  const milestones = [
    {
      year: "2020",
      title: "Company Founded",
      description: "Zion Tech Group established with a vision to revolutionize technology"
    },
    {
      year: "2021",
      title: "First AI Solutions",
      description: "Launched our first AI autonomous systems for enterprise clients"
    },
    {
      year: "2022",
      title: "Quantum Breakthrough",
      description: "Introduced quantum computing infrastructure solutions"
    },
    {
      year: '2021',
      title: 'Global Expansion',
      description: 'Opened offices in multiple countries and served clients across 25+ nations.'
    },
    {
      year: '2023',
      title: 'AI Consciousness Platform',
      description: 'Pioneered the development of AI consciousness evolution and simulation platforms.'
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Leading the charge in autonomous business operations and next-generation AI systems.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent mb-6">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              We are a forward-thinking technology company dedicated to transforming businesses through 
              cutting-edge AI, quantum computing, and autonomous systems solutions.
            </p>
          </div>
        </div>
      </section>

    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-blue-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,255,0.1),transparent_50%)]"></div>
        <div className="relative z-10 max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Zion Tech Group
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
            We are pioneers in AI technology, quantum computing, and digital transformation, 
            empowering businesses to thrive in the digital age through innovative solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mb-12">
            {companyStats.map((stat, index) => (
              <div key={index} className="text-center">
      {/* Values Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
=======
      {/* Timeline */}
=======
      {/* Services Overview */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward in the digital age.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group p-6 rounded-2xl border border-zion-cyan/20 hover:border-zion-cyan/40 hover:bg-zion-blue-light/10 transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-zion-slate-light mb-4">{service.description}</p>
                  <Link
                    to={service.link}
                    className="inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300"
                  >
                    Learn More
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </motion.div>
              );
            })}
=======
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Kleber</h3>
              <p className="text-zion-cyan mb-2">Founder & CEO</p>
              <p className="text-zion-slate-light text-sm">
                Visionary leader driving innovation and strategic growth across all business units.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">T</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Tech Team</h3>
              <p className="text-zion-cyan mb-2">Engineering Excellence</p>
              <p className="text-zion-slate-light text-sm">
                World-class developers and engineers building the future of technology.
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">AI Division</h3>
              <p className="text-zion-cyan mb-2">AI & ML Specialists</p>
              <p className="text-zion-slate-light text-sm">
                Experts in artificial intelligence and machine learning solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              The principles that guide everything we do and every solution we create.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow">
                <div className="flex justify-center mb-4">
                  <value.icon className="w-12 h-12 text-zion-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-zion-blue-dark mb-3">
                  {value.title}
                </h3>
                <p className="text-zion-slate">
                  {value.description}
                </p>
=======
                <div className="bg-cyan-500/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-10 w-10 text-cyan-400" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
                Our Mission & Vision
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Mission</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To democratize AI technology by providing accessible, scalable, and innovative solutions 
                    that empower businesses to achieve their full potential in the digital age.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-cyan-400 mb-3">Vision</h3>
                  <p className="text-gray-300 leading-relaxed">
                    To be the global leader in AI innovation, creating a future where every business, 
                    regardless of size, can harness the power of artificial intelligence to drive growth and success.
                  </p>
                </div>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Star className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Quantum Computing</h3>
                <p className="text-gray-400 text-sm">Next-generation processing power</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Cybersecurity</h3>
                <p className="text-gray-400 text-sm">Advanced protection solutions</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Industry Solutions</h3>
                <p className="text-gray-400 text-sm">Tailored for your business</p>
              </div>
            </div>
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                Our Mission
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge AI technology and empower organizations 
                of all sizes to achieve digital transformation through innovative, secure, 
                and scalable solutions.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                We believe that every business deserves access to the same powerful AI tools 
                that Fortune 500 companies use, leveling the playing field and driving 
                innovation across industries.
              </p>
              <Link
                to="/mission"
                className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
              >
                <span>Learn More</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These principles guide everything we do and shape our culture of innovation and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-r ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{value.title}</h3>
                <p className="text-gray-400 leading-relaxed">{value.description}</p>
              </div>
            ))}
=======
      {/* Core Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Zap className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Innovation First</h3>
              <p className="text-zion-slate-light">
                We constantly push the boundaries of what's possible, embracing emerging technologies 
                and creative solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Shield className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Trust & Security</h3>
              <p className="text-zion-slate-light">
                We prioritize data security, privacy, and ethical AI practices in everything we build.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <Users className="w-12 h-12 text-zion-cyan mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Customer Success</h3>
              <p className="text-zion-slate-light">
                Your success is our success. We're committed to delivering measurable results and 
                exceptional support.
              </p>
=======
    <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden">
      <SEO 
        title="About Zion Tech Group - Technology Innovation Leaders"
        description="Learn about Zion Tech Group's mission to transform businesses through innovative technology solutions, AI expertise, and digital transformation leadership."
        canonical="/about"
      />
      
      <FuturisticAnimatedBackground intensity="medium" />

      {/* Header Section */}
      <section className="relative z-10 pt-32 pb-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
=======
      name: 'Kleber',
      role: 'Founder & CEO',
      description: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      expertise: ['AI/ML', 'Quantum Computing', 'Strategic Planning'],
      avatar: '👨‍💼'
    },
    {
      name: 'AI Research Team',
      role: 'AI & ML Specialists',
      description: 'Expert researchers developing cutting-edge artificial intelligence solutions.',
      expertise: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
      avatar: '🤖'
    },
    {
      name: 'Security Experts',
      role: 'Cybersecurity Team',
      description: 'Certified security professionals protecting digital assets and infrastructure.',
      expertise: ['Penetration Testing', 'Threat Intelligence', 'Compliance', 'Incident Response'],
      avatar: '🛡️'
    },
    {
      name: 'Cloud Architects',
      role: 'DevOps & Cloud',
      description: 'Infrastructure specialists building scalable, resilient cloud solutions.',
      expertise: ['AWS/Azure/GCP', 'Kubernetes', 'Terraform', 'CI/CD'],
      avatar: '☁️'
    }
  ];

  return (
    <div className="min-h-screen bg-zion-blue-dark text-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-gradient-to-br from-zion-blue-dark via-zion-blue-light to-zion-purple overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-cyan/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-zion-cyan to-zion-purple bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto leading-relaxed">
              We are pioneers in the future of technology, building revolutionary solutions that transform 
              businesses and drive human progress through innovation, excellence, and unwavering commitment to success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To democratize access to cutting-edge technology solutions, empowering businesses of all sizes 
                to achieve digital transformation and competitive advantage through innovative AI, quantum computing, 
                and autonomous systems.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Democratize advanced technology</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Drive digital transformation</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Enable competitive advantage</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-6">
                <Lightbulb className="w-8 h-8 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Our Vision</h2>
              <p className="text-zion-slate-light text-lg leading-relaxed mb-6">
                To be the world's leading technology partner, pioneering the future of AI consciousness, 
                quantum supremacy, and autonomous systems that create a more intelligent, secure, and 
                sustainable world for future generations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Global technology leadership</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>AI consciousness advancement</span>
                </li>
                <li className="flex items-center gap-3 text-zion-slate-light">
                  <CheckCircle className="w-5 h-5 text-zion-cyan" />
                  <span>Sustainable future technology</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Our Journey
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              From startup to global technology leader - our story of innovation and growth.
            </p>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-cyan-500 to-purple-600 h-full"></div>
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'}`}>
                    <div className="bg-gray-800 p-6 rounded-lg border border-gray-700">
                      <div className="text-2xl font-bold text-cyan-400 mb-2">
                        {item.year}
                      </div>
                      <h3 className="text-xl font-semibold mb-2 text-white">
                        {item.title}
                      </h3>
                      <p className="text-gray-400">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-400 rounded-full border-4 border-gray-900"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-400 mb-8">
            Join hundreds of companies already leveraging our AI and autonomous technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg text-white font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center space-x-2 px-8 py-4 border border-cyan-500 text-cyan-400 rounded-lg font-medium hover:bg-cyan-500 hover:text-white transition-all duration-200"
            >
              <span>Explore Services</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
=======
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Zion Tech Group is a leading technology company specializing in innovative solutions 
            for businesses and organizations. We are committed to delivering cutting-edge 
            technology services that drive growth and efficiency.
          </p>
        </div>
        
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-blue-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
            <p className="text-gray-600">Pushing the boundaries of what's possible in technology</p>
          </div>
          
          <div className="text-center">
            <div className="bg-green-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Quality</h3>
            <p className="text-gray-600">Delivering excellence in every project we undertake</p>
          </div>
          
          <div className="text-center">
            <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership</h3>
            <p className="text-gray-600">Building lasting relationships with our clients</p>
          </div>
=======
      {/* Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Leadership Team
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionaries driving our company forward
=======
      {/* Why Choose Us */}
      <section className="py-20 px-6 bg-zion-blue-dark">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Why Choose Zion Tech Group?</h2>
            <p className="text-xl text-zion-slate-light max-w-4xl mx-auto leading-relaxed">
              We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <h2 className="text-4xl font-bold mb-6">
              Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              From humble beginnings to industry leadership - our story of growth and innovation.
            </p>
          </motion.div>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-zion-cyan to-zion-purple"></div>
            
            {timeline.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'
                }`}
              >
                <div className={`absolute top-0 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark ${
                  index % 2 === 0 ? 'right-0 transform translate-x-2' : 'left-0 transform -translate-x-2'
                }`}></div>
                
                <div className={`max-w-md ${
                  index % 2 === 0 ? 'ml-auto' : 'mr-auto'
                }`}>
                  <div className="bg-zion-blue-dark/50 border border-zion-cyan/20 rounded-2xl p-6 hover:border-zion-cyan/40 transition-all duration-300">
                    <div className="text-2xl font-bold text-zion-cyan mb-2">{item.year}</div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-zion-slate-light">{item.description}</p>
                  </div>
                </div>
=======
      {/* Values Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
            Our Core Values
          </h2>
          <p className="text-xl text-zion-slate-light max-w-3xl mx-auto">
            The principles that guide everything we do and shape our company culture.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((value, index) => {
            const IconComponent = value.icon;
            return (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-zion-purple/20 rounded-lg ${value.color}`}>
                    <IconComponent className="w-8 h-8" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                    <p className="text-zion-slate-light leading-relaxed">{value.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-zion-blue-dark mb-4">
              Our Leadership Team
            </h2>
            <p className="text-xl text-zion-slate max-w-3xl mx-auto">
              Experienced professionals passionate about technology and committed to your success.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-3xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-semibold text-zion-blue-dark mb-2">
                Kleber
              </h3>
              <p className="text-zion-slate mb-2">CEO & Founder</p>
              <p className="text-sm text-zion-slate-light">
                Technology visionary with over 10 years of experience in software development and business transformation.
              </p>
            </div>
            {/* Add more team members as needed */}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* Team Section */}
      <section className="py-20 bg-zion-blue-light/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-6">
              Meet Our{' '}
              <span className="bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">
                Team
              </span>
            </h2>
            <p className="text-lg text-zion-slate-light max-w-2xl mx-auto">
              Passionate experts dedicated to delivering exceptional technology solutions.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: 'Kleber Santos',
                role: 'CEO & Founder',
                description: 'Visionary leader with 15+ years in technology and business transformation.',
                image: '/api/placeholder/300/300'
              },
              {
                name: 'Sarah Chen',
                role: 'CTO',
                description: 'Technology expert specializing in AI, cloud architecture, and emerging technologies.',
                image: '/api/placeholder/300/300'
              },
              {
                name: 'Marcus Rodriguez',
                role: 'Head of AI Research',
                description: 'Leading our AI initiatives and developing cutting-edge machine learning solutions.',
                image: '/api/placeholder/300/300'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-6 rounded-2xl bg-zion-blue-dark/50 border border-zion-cyan/20 hover:border-zion-cyan/40 transition-all duration-300"
              >
                <div className="w-24 h-24 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <div className="text-zion-cyan mb-3">{member.role}</div>
                <p className="text-zion-slate-light">{member.description}</p>
              </motion.div>
            ))}
=======
      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Leadership Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-cyan rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">K</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Kleber</h3>
              <p className="text-zion-cyan mb-2">Founder & CEO</p>
              <p className="text-zion-slate-light text-sm">
                Visionary leader with 15+ years in tech innovation and business transformation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">AI Team</h3>
              <p className="text-zion-cyan mb-2">AI Research & Development</p>
              <p className="text-zion-slate-light text-sm">
                Experts in machine learning, neural networks, and AI ethics.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="w-24 h-24 bg-zion-purple-light rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">D</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Dev Team</h3>
              <p className="text-zion-cyan mb-2">Software Development</p>
              <p className="text-zion-slate-light text-sm">
                Full-stack developers specializing in scalable microservices and cloud solutions.
              </p>
            </div>
=======
      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              By The Numbers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our impact in numbers - delivering results that speak for themselves
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="flex items-start space-x-4 group">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

            <h2 className="text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg text-zion-slate-light mb-8 max-w-2xl mx-auto">
              Let's discuss how our innovative technology solutions can drive your business forward 
              and create lasting competitive advantages.
=======
      {/* Call to Action */}
      <div className="bg-gradient-to-r from-gray-800 to-gray-900 border-t border-gray-700">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Discover how our innovative solutions can transform your business and help you 
              achieve extraordinary results in the digital age.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-medium rounded-lg transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center justify-center px-8 py-4 border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-medium rounded-lg transition-all duration-200"
              >
                Request a Quote
              </Link>
            </div>
      <section className="py-20 bg-gradient-to-r from-zion-blue-dark to-zion-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">
            Let's discuss how our technology solutions can help you achieve your goals 
            and stay ahead of the competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-3 bg-zion-cyan text-white font-semibold rounded-lg hover:bg-zion-cyan-light transition-colors"
            >
              Get Started
            </Link>
            <Link 
              to="/request-quote" 
              className="inline-flex items-center px-8 py-3 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-zion-blue-dark transition-colors"
            >
              Request Quote
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
