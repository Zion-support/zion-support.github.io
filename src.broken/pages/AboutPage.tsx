<<<<<<< HEAD

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            About Page
          </h1>
          <p className="text-xl text-gray-600 mb-12">
            Welcome to our aboutpage page
          </p>
        </div>
        
        <div className="text-center">
          <Link 
            to="/contact" 
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300"
          >
            Get Started
          </Link>
=======
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Users,
  Target,
  Award,
  Rocket,
  Heart,
  Star,
  Globe,
  Building,
  TrendingUp,
  Zap,
  Brain,
  Shield,
  Cloud,
  Workflow,
  Cpu,
  Database,
  Network,
  Smartphone,
  Lock,
  Code,
  Server,
  Cpu,
  Wifi,
  Bot,
  Eye,
  Sparkles,
  Atom,
  Leaf,
  Gamepad2,
  Coins,
  Satellite,
  Activity,
  BarChart3,
  Users2,
  Settings,
  Palette,
  CheckCircle,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageSquare,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
} from 'lucide-react';

export function AboutPage() {
  const companyStats = [
    { label: 'Years of Experience', value: '5+', icon: Award },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Projects Completed', value: '200+', icon: Rocket },
    { label: 'Countries Served', value: '25+', icon: Globe },
  ];

  const coreValues = [
    {
      title: 'Innovation First',
              description: "We push the boundaries of what's possible, constantly exploring new technologies and approaches.",
      icon: Sparkles,
      color: 'from-purple-500 to-pink-500',
    },
    {
      title: 'Client Success',
      description: 'Your success is our success. We\'re committed to delivering solutions that drive real business value.',
      icon: Target,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code quality to customer service.',
      icon: Star,
      color: 'from-yellow-500 to-orange-500',
    },
    {
      title: 'Integrity',
      description: 'We build trust through honest communication, transparent processes, and ethical business practices.',
      icon: Shield,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
      image: '/images/team/kleber-santos.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Dr. Sarah Chen',
      role: 'CTO & AI Lead',
      bio: 'PhD in Computer Science specializing in artificial intelligence and machine learning.',
      image: '/images/team/sarah-chen.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Marcus Rodriguez',
      role: 'Head of Cybersecurity',
      bio: 'Former government cybersecurity expert with deep knowledge of threat intelligence.',
      image: '/images/team/marcus-rodriguez.jpg',
      linkedin: '#',
      twitter: '#',
    },
    {
      name: 'Dr. James Kim',
      role: 'Quantum Computing Lead',
      bio: 'Leading researcher in quantum algorithms and quantum machine learning.',
      image: '/images/team/james-kim.jpg',
      linkedin: '#',
      twitter: '#',
    },
  ];

  const milestones = [
    {
      year: '2020',
      title: 'Company Founded',
      description: 'Zion Tech Group was established with a vision to revolutionize technology solutions.',
    },
    {
      year: '2021',
      title: 'First AI Platform Launch',
      description: 'Successfully launched our flagship AI-powered business intelligence platform.',
    },
    {
      year: '2022',
      title: 'International Expansion',
      description: 'Expanded operations to serve clients across 25+ countries worldwide.',
    },
    {
      year: '2023',
      title: 'Quantum Computing Breakthrough',
      description: 'Achieved significant milestones in quantum computing research and development.',
    },
    {
      year: '2024',
      title: 'Industry Recognition',
      description: 'Named one of the top 10 most innovative tech companies by TechCrunch.',
    },
    {
      year: '2025',
      title: 'Future Vision',
      description: 'Continuing to push boundaries in AI, quantum computing, and emerging technologies.',
    },
  ];

  const technologies = [
    { name: 'Artificial Intelligence', icon: Brain, description: 'Machine learning, deep learning, and AI automation' },
    { name: 'Quantum Computing', icon: Atom, description: 'Quantum algorithms and quantum machine learning' },
    { name: 'Cybersecurity', icon: Shield, description: 'Advanced threat detection and security solutions' },
    { name: 'Cloud Infrastructure', icon: Cloud, description: 'Scalable cloud solutions and DevOps automation' },
    { name: 'Data Analytics', icon: BarChart3, description: 'Big data processing and business intelligence' },
    { name: 'IoT & Edge Computing', icon: Cpu, description: 'Connected devices and edge processing solutions' },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Building className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              About
            </span>
            <br />
            Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            We are a forward-thinking technology company dedicated to transforming businesses 
            through innovative AI, quantum computing, and cutting-edge technology solutions.
          </p>
        </div>
      </div>

      {/* Company Stats */}
      <div className="py-16 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {companyStats.map((stat) => (
              <div
                key={stat.label}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                To democratize access to cutting-edge technology solutions, enabling businesses 
                of all sizes to harness the power of AI, quantum computing, and emerging 
                technologies to drive innovation and growth.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                We believe that technology should be accessible, understandable, and transformative. 
                Our team of experts works tirelessly to create solutions that not only solve 
                today's challenges but anticipate tomorrow's opportunities.
              </p>
            </div>
            <div className="bg-gray-800 rounded-xl p-8 border border-gray-700">
              <h3 className="text-2xl font-bold mb-6">Our Vision</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                To be the global leader in democratizing advanced technology solutions, 
                creating a world where every business can leverage the power of AI and 
                quantum computing to achieve unprecedented success.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Universal access to AI technology</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Quantum computing for everyone</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-cyan-400" />
                  <span className="text-gray-300">Sustainable technology solutions</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The principles that guide everything we do and every decision we make
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreValues.map((value) => (
              <div
                key={value.title}
                className="bg-gray-900 rounded-xl p-8 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-xl flex items-center justify-center mb-6`}>
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-gray-300 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Story</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              From humble beginnings to industry leadership - the journey of Zion Tech Group
            </p>
          </div>
          <div className="relative">
            {/* Timeline */}
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={milestone.year} className="flex items-start space-x-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">{milestone.year}</span>
                    </div>
                  </div>
                  <div className="flex-1 bg-gray-800 rounded-xl p-6 border border-gray-700">
                    <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                    <p className="text-gray-300">{milestone.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Technology Expertise */}
      <div className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Technology Expertise</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Cutting-edge technologies that power our innovative solutions
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {technologies.map((tech) => (
              <div
                key={tech.name}
                className="bg-gray-900 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <tech.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{tech.name}</h3>
                <p className="text-gray-300 text-sm">{tech.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Leadership Team</h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Meet the visionary leaders driving innovation and growth at Zion Tech Group
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 text-center"
              >
                <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-1">{member.name}</h3>
                <p className="text-cyan-400 text-sm mb-3">{member.role}</p>
                <p className="text-gray-300 text-sm mb-4">{member.bio}</p>
                <div className="flex justify-center space-x-3">
                  <a
                    href={member.linkedin}
                    className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-blue-600 hover:text-white transition-all duration-200"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                  <a
                    href={member.twitter}
                    className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 hover:bg-sky-500 hover:text-white transition-all duration-200"
                  >
                    <Twitter className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Work With Us?</h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how our innovative technology solutions can transform your business 
            and drive unprecedented growth and success.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-cyan-600 hover:bg-gray-100 font-semibold rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              <MessageSquare className="w-5 h-5 mr-2" />
              Get in Touch
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold rounded-lg transition-all duration-200"
            >
              <Rocket className="w-5 h-5 mr-2" />
              Explore Services
            </Link>
          </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-0cd1
        </div>
      </div>
    </div>
  );
}
