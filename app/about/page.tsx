import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Brain } from "lucide-react"; origin/cursor/analyze-improve-and-deploy-application-0ff3
export default function AboutPage() {
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Users, Award, Zap, Shield, Brain, Cloud, Code, Target, Lightbulb, Heart, Globe, Clock, DollarSign, BarChart, Settings, MessageSquare, FileText, Phone, MapPin, Sparkles, Cpu, Lock, TrendingUp, Calendar, CheckSquare, MessageCircle, Box, Monitor, Link as LinkIcon, Server, Package, Mic, Workflow, Eye, ShoppingCart } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We constantly push the boundaries of what\'s possible with AI and technology, always staying ahead of the curve.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team is driven by a genuine passion for technology and a commitment to delivering exceptional results.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest standards of honesty, transparency, and ethical business practices in everything we do.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for excellence in every project, ensuring our solutions exceed expectations and deliver real value.',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const team = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      image: '/team/kleber.jpg',
      description: 'Visionary leader with 15+ years in AI and enterprise solutions.',
      social: {
        linkedin: 'https://linkedin.com/in/kleber-santos',
        twitter: 'https://twitter.com/kleber_santos'
      }
    },
    {
      name: 'Sarah Johnson',
      role: 'CTO',
      image: '/team/sarah.jpg',
      description: 'Technical architect specializing in cloud infrastructure and AI systems.',
      social: {
        linkedin: 'https://linkedin.com/in/sarah-johnson',
        github: 'https://github.com/sarah-johnson'
      }
    },
    {
      name: 'Michael Chen',
      role: 'Head of AI',
      image: '/team/michael.jpg',
      description: 'AI research lead with expertise in machine learning and neural networks.',
      social: {
        linkedin: 'https://linkedin.com/in/michael-chen',
        twitter: 'https://twitter.com/michael_chen'
      }
    }
  ];

  const timeline = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to democratize AI and make advanced technology accessible to all businesses.'
    },
    {
      year: '2021',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise AI solution, helping a Fortune 500 company optimize their operations.'
    },
    {
      year: '2022',
      title: 'Team Expansion',
      description: 'Grew our team to 25+ experts and expanded our service offerings to include comprehensive IT solutions.'
    },
    {
      year: '2023',
      title: 'AI Innovation Lab',
      description: 'Launched our AI Innovation Lab to research and develop cutting-edge solutions for emerging technologies.'
    },
    {
      year: '2024',
      title: 'Global Expansion',
      description: 'Expanded operations internationally and launched our micro SAAS product suite for small and medium businesses.'
    }
  ]; origin/cursor/analyze-improve-and-deploy-application-0e37

 origin/cursor/analyze-improve-and-deploy-application-0f1c
 cursor/fix-errors-and-merge-to-main-f512
  return (
    <>
      <Helmet>
<title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses." /> cursor/fix-errors-and-merge-to-main-f512
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
                <p className="text-lg text-gray-300 mb-6">
                  To democratize advanced AI and technology solutions, making them accessible 
                  to businesses of all sizes while delivering unprecedented value and innovation.
                </p>
                <p className="text-lg text-gray-300 mb-8">
                  We believe that every organization deserves access to cutting-edge technology 
                  that can transform their operations, enhance their capabilities, and drive 
                  sustainable growth.
                </p>
                <div className="flex items-center space-x-4">
                  <CheckCircle className="text-green-400 w-6 h-6" />
                  <span className="text-white font-semibold">Innovation First</span>
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg p-8">
                  <Brain className="w-16 h-16 text-white mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-4">AI-Powered Solutions</h3>
                  <p className="text-gray-200">
                    Our advanced AI technologies are designed to solve complex business challenges 
                    and unlock new opportunities for growth and efficiency.
 origin/cursor/analyze-improve-and-deploy-application-0e37
                  </p>
                </div>
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
 origin/cursor/analyze-improve-and-deploy-application-1247
              </div>
            </div>
          </div>
        </section>

<meta name="description" content="About Us services by Zion Tech Group. Advanced AI and IT solutions for your business." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About Us
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Coming soon - Advanced About Us solutions by Zion Tech Group
            </p>
          </div>
        </div>
 origin/cursor/analyze-improve-and-deploy-application-1232

export default AboutPage origin/cursor/analyze-improve-and-deploy-application-0f1c
 origin/cursor/analyze-improve-and-deploy-application-1247
 cursor/fix-errors-and-merge-to-main-f512
