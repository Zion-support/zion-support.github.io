<<<<<<< HEAD
<<<<<<< HEAD
=======
'use client';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
=======
<<<<<<< HEAD
<<<<<<< HEAD
import React from 'react;

import { Helmet } from 'react-helmet-async;

import {
=======
=======
'use client';

>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {}
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
  Users,
  Target,
  Award,
  Globe,
  Zap,
  Shield,
  Lightbulb,
  Heart,
  ArrowRight,
  Play,
<<<<<<< HEAD
  Download,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
>>>>>>> origin/cursor/ad-creation-and-management-f267
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight, Brain, Shield, Users } from 'lucide-react';

=======
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5

export default function AboutPage() {
  const teamMembers = [
    {
      name: "Sarah Chen",
      role: "CEO & Co-Founder",
      expertise: "AI Strategy & Business Development",
      image: "/images/team/sarah-chen.jpg",
      bio: "15+ years in AI and machine learning, former Google AI researcher."
    },
    {
      name: "Michael Rodriguez",
      role: "CTO & Co-Founder",
      expertise: "Full-Stack Development & Cloud Architecture",
      image: "/images/team/michael-rodriguez.jpg",
      bio: "Expert in scalable systems and modern web technologies."
    },
    {
      name: "Dr. Emily Watson",
      role: "Head of AI Research",
      expertise: "Machine Learning & Neural Networks",
      image: "/images/team/emily-watson.jpg",
      bio: "PhD in Computer Science, specializing in deep learning applications."
    }
  ];

=======

<<<<<<< HEAD
export default function AboutPage() {
  // Team members data (for future use)
  // const teamMembers = [
  //   {
  //     name: "Sarah Chen",
  //     role: "CEO & Co-Founder",
  //     expertise: "AI Strategy & Business Development",
  //     image: "/images/team/sarah-chen.jpg",
  //     bio: "15+ years in AI and machine learning, former Google AI researcher."
  //   },
  //   {
  //     name: "Michael Rodriguez",
  //     role: "CTO & Co-Founder",
  //     expertise: "Cloud Architecture & Security",
  //     image: "/images/team/michael-rodriguez.jpg",
  //     bio: "Expert in cloud infrastructure and cybersecurity with 12+ years experience."
  //   },
  //   {
  //     name: "Emily Johnson",
  //     role: "Head of AI Research",
  //     expertise: "Machine Learning & Data Science",
  //     image: "/images/team/emily-johnson.jpg",
  //     bio: "PhD in Computer Science, specializing in deep learning and NLP."
  //   },
  //   {
  //     name: "David Kim",
  //     role: "Head of Engineering",
  //     expertise: "5G Technology & IoT",
  //     image: "/images/team/david-kim.jpg",
  //     bio: "Telecommunications expert with extensive experience in 5G implementation."
  //   }
  // ];

  // Company values (for future use)
  // const values = [
  //   {
  //     icon: <Brain className="w-8 h-8" />,
  //     title: "Innovation First",
  //     description: "We constantly push the boundaries of what's possible with cutting-edge technology and creative solutions."
  //   },
  //   {
  //     icon: <Shield className="w-8 h-8" />,
  //     title: "Security & Trust",
  //     description: "We prioritize the security and privacy of our clients' data with enterprise-grade protection measures."
  //   },
  //   {
  //     icon: <Users className="w-8 h-8" />,
  //     title: "Client Success",
  //     description: "Our success is measured by our clients' success. We're committed to delivering exceptional results."
  //   },
  //   {
  //     icon: <Award className="w-8 h-8" />,
  //     title: "Excellence",
  //     description: "We maintain the highest standards of quality in everything we do, from code to customer service."
  //   }
  // ];

  // Company stats (for future use)
  // const stats = [
  //   { number: "500+", label: "Projects Completed" },
  //   { number: "150+", label: "Happy Clients" },
  //   { number: "99.9%", label: "Uptime Guarantee" },
  //   { number: "24/7", label: "Support Available" }
  // ];
>>>>>>> origin/clean-main-20251013-145848
=======
const AboutPage: React.FC = () => {}
=======
  MessageCircle
} from 'lucide-react';
<<<<<<< HEAD

const AboutPage: React.FC = () => {
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
=======
    <>
<<<<<<< HEAD
  </>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
      <Helmet>
<<<<<<< HEAD
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and expertise in AI and IT solutions" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
<<<<<<< HEAD
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            About Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We are a cutting-edge technology company specializing in AI solutions, 
            cloud infrastructure, and innovative IT services that transform businesses.
=======
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-8">About Us</h1>
          <p className="text-xl text-gray-300 mb-8">
            Leading the future of AI and IT solutions with innovation and excellence
>>>>>>> origin/clean-main-20251013-145848
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 mb-6">
              To democratize advanced AI and cloud technologies, making them accessible 
              to businesses of all sizes while maintaining the highest standards of 
              security, performance, and innovation.
            </p>
            <div className="space-y-4">
              <div className="flex items-center text-gray-300">
                <Brain className="w-6 h-6 text-blue-400 mr-3" />
                <span>Advanced AI Solutions</span>
=======
        <title>About Us - Zion Tech Group | Advanced AI and IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group's mission to revolutionize business through advanced AI and IT solutions. Discover our team, values, and commitment to innovation." />
        <meta name="keywords" content="about us, AI company, IT solutions, technology team, innovation, mission, values" />
        <link rel="canonical" href="https://ziontechgroup.com/about" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                About Zion Tech Group
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
              </p>
=======
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-600/10"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
=======
      <SEOHead
        title="About Zion Tech Group - Leading AI and IT Solutions Provider"
        description="Learn about Zion Tech Group's mission to transform businesses through cutting-edge AI and IT solutions. Discover our expertise, team, and commitment to innovation."
        keywords="about zion tech group, AI company, IT solutions provider, enterprise technology, digital transformation, team expertise"
        canonical="https://ziontechgroup.com/about"
      />
      <Navigation />
      <div className='min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-12'>
            <h1 className='text-4xl font-bold text-gray-900 mb-4'>
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
              About Zion Tech Group
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We are pioneers in AI and IT solutions, dedicated to transforming businesses through innovative technology and cutting-edge artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Get in Touch</span>
              </a>
              <a
                href="/services"
                className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Our Services</span>
                <ArrowRight className="w-5 h-5" />
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
            </div>
          </div>
        </section>

        {/* Mission Section */}
<<<<<<< HEAD
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
                  </p>
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
                </div>
=======
        <section className="py-20 bg-slate-800/50">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                To democratize advanced AI and IT solutions, making cutting-edge technology accessible to businesses of all sizes while fostering innovation and sustainable growth.
=======
import { Helmet } from 'react-helmet-async';

const AboutPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>About - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Learn about Zion Tech Group, a leading provider of AI and IT solutions for modern businesses." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              About <span className="text-cyan-400">Zion Tech Group</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We are passionate about transforming businesses through cutting-edge AI and IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Our Mission</h2>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To empower businesses with innovative AI and IT solutions that drive growth, 
                efficiency, and competitive advantage in the digital age.
              </p>
              <p className="text-gray-300 leading-relaxed">
                We believe technology should be accessible, powerful, and transformative. 
                Our team of experts works tirelessly to deliver solutions that not only meet 
                today's needs but anticipate tomorrow's challenges.
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Target className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Innovation</h3>
                <p className="text-gray-300">Pioneering the future of AI and IT solutions</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Users className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Collaboration</h3>
                <p className="text-gray-300">Working together to achieve extraordinary results</p>
              </div>
              <div className="text-center p-6 bg-slate-700/50 rounded-lg">
                <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">Excellence</h3>
                <p className="text-gray-300">Delivering exceptional quality in everything we do</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
<<<<<<< HEAD
                  <
                <
              <
            <
          <
<
=======
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
<<<<<<< HEAD
                These principles guide everything we do and shape our approach to innovation and client success.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800 rounded-lg p-6">
                <Shield className="w-12 h-12 text-blue-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">
                  We maintain the highest ethical standards in all our interactions and solutions.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Zap className="w-12 h-12 text-yellow-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">
                  We continuously push the boundaries of what's possible with technology.
                </p>
              </div>
              <div className="bg-slate-800 rounded-lg p-6">
                <Users className="w-12 h-12 text-green-400 mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">Collaboration</h3>
                <p className="text-gray-300">
                  We work closely with our clients as partners in their success journey.
                </p>
=======
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Shield className="w-10 h-10 text-cyan-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Integrity</h3>
                <p className="text-gray-300">We maintain the highest ethical standards in all our interactions and business practices.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Lightbulb className="w-10 h-10 text-yellow-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">We continuously push boundaries and explore new possibilities in technology.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Heart className="w-10 h-10 text-red-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Passion</h3>
                <p className="text-gray-300">We are passionate about technology and its potential to transform the world.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Users className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Teamwork</h3>
                <p className="text-gray-300">We believe in the power of collaboration and diverse perspectives.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Zap className="w-10 h-10 text-purple-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                <p className="text-gray-300">We strive for excellence in every project and deliver outstanding results.</p>
              </div>
              
              <div className="bg-slate-800/50 p-6 rounded-lg">
                <Globe className="w-10 h-10 text-blue-400 mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">Global Impact</h3>
                <p className="text-gray-300">We aim to make a positive impact on businesses and communities worldwide.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
              </div>
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Team Section */}
        <section className="py-20 bg-slate-800">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Meet Our Team</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our diverse team of experts brings together decades of experience in AI, 
                software development, and business transformation.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">AI Research Team</h3>
                <p className="text-gray-400">Leading AI researchers and engineers</p>
>>>>>>> origin/cursor/ad-creation-and-management-f267
              </div>
              <div className="flex items-center text-gray-300">
                <Shield className="w-6 h-6 text-green-400 mr-3" />
                <span>Enterprise-Grade Security</span>
              </div>
<<<<<<< HEAD
              <div className="flex items-center text-gray-300">
                <Users className="w-6 h-6 text-purple-400 mr-3" />
                <span>Expert Team Support</span>
=======
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-r from-orange-600 to-red-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <BarChart className="w-16 h-16 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Business Team</h3>
                <p className="text-gray-400">Strategy and client success specialists</p>
=======
        {/* Stats Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">By the Numbers</h2>
              <p className="text-xl text-gray-300">Our impact in numbers</p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">200+</div>
                <div className="text-gray-300">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400 mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">25+</div>
                <div className="text-gray-300">Countries Served</div>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
              </div>
            </div>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-semibold text-white mb-4">Why Choose Us?</h3>
            <ul className="space-y-3 text-gray-300">
              <li>• 10+ years of industry experience</li>
              <li>• 500+ successful projects delivered</li>
              <li>• 24/7 technical support</li>
              <li>• Cutting-edge technology stack</li>
              <li>• Proven track record of success</li>
            </ul>
          </div>
        </div>

<<<<<<< HEAD
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </span>
=======
        {/* Contact Section */}
        <section className="py-20">
<<<<<<< HEAD
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Get In Touch</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Ready to transform your business with AI? Let's start a conversation about your goals and how we can help.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <div className="bg-slate-800 rounded-lg p-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  <div className="text-center">
                    <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                    <p className="text-gray-300">+1 (555) 123-4567</p>
                  </div>
                  <div className="text-center">
                    <Mail className="w-8 h-8 text-green-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                    <p className="text-gray-300">info@ziontechgroup.com</p>
                  </div>
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                    <p className="text-gray-300">San Francisco, CA</p>
                  </div>
>>>>>>> origin/cursor/ad-creation-and-management-f267
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                <p className="text-sm text-gray-300">{member.bio}</p>
              </div>
<<<<<<< HEAD
            ))}
=======
=======
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Start Your Project</span>
              </a>
              <a
                href="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </a>
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
            </div>
>>>>>>> origin/cursor/ad-creation-and-management-f267
          </div>
        </div>

<<<<<<< HEAD
=======
);
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 mb-8">
            Let's discuss how we can help transform your business with our AI and IT solutions.
          </p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
          >
            Get Started Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
<<<<<<< HEAD
    </div>
=======
      <Footer />
    </>
<<<<<<< HEAD
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0ac5
  );
<<<<<<< HEAD
<<<<<<< HEAD
}
=======
};

export default AboutPage;
<<<<<<< HEAD
>>>>>>> cursor/fix-errors-and-merge-to-main-d054
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-92c8
>>>>>>> origin/cursor/ad-creation-and-management-f267
=======
};
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-01d9
=======
  );
};

export default AboutPage;
>>>>>>> origin/cursor/analyze-improve-and-deploy-application-0b69
