'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import {
  Users,
  Target,
  Globe,
  Shield,
  CheckCircle,
  Star,
  User,
  Building,
  Heart,
  MessageCircle,
  Settings,
  Cloud,
  Cpu,
  Database,
  Lock,
  TrendingUp,
  Play,
  Download,
  ExternalLink,
  ChevronRight,
  Phone,
  Mail,
  MapPin
} from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const AboutPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Chief Executive Officer',
      expertise: 'AI Strategy & Leadership',
      image: '/images/team/sarah-johnson.jpg',
      bio: '20+ years in AI and technology leadership, former VP at Google AI.'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      expertise: 'Quantum Computing & AI',
      image: '/images/team/michael-chen.jpg',
      bio: 'Leading expert in quantum algorithms and machine learning systems.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Head of AI Research',
      expertise: 'Machine Learning & NLP',
      image: '/images/team/emily-rodriguez.jpg',
      bio: 'Pioneer in natural language processing and conversational AI.'
    },
    {
      name: 'David Kim',
      role: 'Head of Engineering',
      expertise: 'Cloud Architecture & DevOps',
      image: '/images/team/david-kim.jpg',
      bio: 'Expert in scalable cloud solutions and infrastructure automation.'
    }
  ];

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and technology.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives.'
    },
    {
      icon: Shield,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our work.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We create solutions that make a positive difference in the world.'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '300%', label: 'Average ROI' },
    { number: '$50M+', label: 'Client Savings' },
    { number: '99.9%', label: 'Uptime Guarantee' },
    { number: '15+', label: 'Years Experience' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Helmet>
        <title>About Us - Zion Tech Group</title>
        <meta name="description" content="Learn about Zion Tech Group's mission, team, and commitment to AI innovation and excellence." />
        <meta name="keywords" content="about us, team, AI experts, technology leadership, company values" />
      </Helmet>
      
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              About Zion Tech Group
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-8">
              Pioneering the future of AI and technology solutions
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              We are a team of passionate innovators, engineers, and visionaries dedicated to transforming businesses through cutting-edge AI technology and intelligent solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-blue-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm lg:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 leading-relaxed">
              To democratize AI technology and make it accessible to businesses of all sizes, 
              empowering them to achieve unprecedented growth and efficiency through intelligent automation and data-driven insights.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 bg-gray-800 rounded-lg">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">Meet Our Team</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our diverse team of experts brings together decades of experience in AI, 
              machine learning, cloud computing, and enterprise solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-gray-900 rounded-lg p-6 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-sm text-gray-400 mb-3">{member.expertise}</p>
                <p className="text-gray-300 text-sm">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-900 to-purple-900 rounded-2xl p-12">
            <h2 className="text-3xl lg:text-4xl font-bold mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join hundreds of companies that have already revolutionized their operations with our AI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/consultation"
                className="inline-flex items-center px-8 py-4 border border-white text-white hover:bg-white hover:text-gray-900 font-semibold rounded-lg transition-colors"
              >
                Schedule Consultation
                <Phone className="ml-2 w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;