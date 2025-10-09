'use client';
import React, { useState } from 'react';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Award, Brain, Cloud, Shield, Code, BarChart, Zap, Target, MessageSquare, Eye, Cpu, Lock, FileText, Search, Bot, Calculator, Calendar, Compass, Navigation, PieChart, Activity, Building, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, BookOpen, Video, Gamepad2, ShoppingCart, CreditCard, Truck, Link, HardDrive, FileCheck, DollarSign, TrendingUp } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import EnhancedSEOOptimizer from '../components/EnhancedSEOOptimizer';

const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', icon: Briefcase },
    { id: 'ai', name: 'AI & Machine Learning', icon: Brain },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'data', name: 'Data Science', icon: BarChart },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    { id: 'security', name: 'Cybersecurity', icon: Shield },
    { id: 'business', name: 'Business', icon: Users }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Research Scientist',
      department: 'AI Research',
      category: 'ai',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead cutting-edge AI research projects and develop innovative machine learning algorithms.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '5+ years of experience in AI research',
        'Strong publication record in top-tier conferences',
        'Expertise in deep learning, NLP, or computer vision',
        'Experience with PyTorch, TensorFlow, or similar frameworks'
      ],
      benefits: [
        'Competitive salary ($150k - $250k)',
        'Equity participation',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2 days ago'
    },
    {
      id: 2,
      title: 'Full-Stack Engineer',
      department: 'Engineering',
      category: 'engineering',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs for our AI platform.',
      requirements: [
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Knowledge of database design and optimization',
        'Experience with CI/CD pipelines'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Equity participation',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '1 week ago'
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Science',
      category: 'data',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Analyze complex datasets and build predictive models for our AI solutions.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years of experience in data science',
        'Proficiency in Python, R, and SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary ($110k - $160k)',
        'Equity participation',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '3 days ago'
    },
    {
      id: 4,
      title: 'Cloud Solutions Architect',
      department: 'Cloud & DevOps',
      category: 'cloud',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design and implement cloud infrastructure solutions for our AI platform.',
      requirements: [
        '5+ years of cloud architecture experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with Kubernetes and containerization',
        'Knowledge of infrastructure as code',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary ($140k - $200k)',
        'Equity participation',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '5 days ago'
    },
    {
      id: 5,
      title: 'Cybersecurity Engineer',
      department: 'Security',
      category: 'security',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our systems and data with advanced security measures.',
      requirements: [
        '4+ years of cybersecurity experience',
        'Knowledge of security frameworks and compliance',
        'Experience with penetration testing and vulnerability assessment',
        'Certifications in security (CISSP, CISM, etc.)',
        'Strong understanding of network security'
      ],
      benefits: [
        'Competitive salary ($130k - $190k)',
        'Equity participation',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '1 week ago'
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'Product',
      category: 'business',
      location: 'Remote / Los Angeles, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI solutions.',
      requirements: [
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development',
        'MBA or equivalent experience preferred'
      ],
      benefits: [
        'Competitive salary ($130k - $180k)',
        'Equity participation',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '4 days ago'
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity participation',
      icon: DollarSign
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: Heart
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours',
      icon: Clock
    },
    {
      title: 'Professional Growth',
      description: 'Learning budget and conference attendance',
      icon: GraduationCap
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI and cloud technologies',
      icon: Brain
    },
    {
      title: 'Team Culture',
      description: 'Collaborative and inclusive work environment',
      icon: Users
    }
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage experimentation and creative problem-solving',
      icon: Zap
    },
    {
      title: 'Continuous Learning',
      description: 'We invest in our team\'s growth and development',
      icon: BookOpen
    },
    {
      title: 'Work-Life Balance',
      description: 'We believe in sustainable productivity and personal well-being',
      icon: Home
    },
    {
      title: 'Diversity & Inclusion',
      description: 'We value diverse perspectives and inclusive practices',
      icon: Users
    }
  ];

  const filteredPositions = selectedCategory === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <EnhancedSEOOptimizer
        title="Careers - Zion Tech Group"
        description="Join our team of AI researchers, engineers, and innovators. Explore career opportunities at Zion Tech Group and help shape the future of artificial intelligence."
        keywords={['careers', 'jobs', 'AI careers', 'engineering jobs', 'data science jobs', 'remote work', 'tech careers', 'hiring']}
        canonicalUrl="https://ziontechgroup.com/careers"
      />
      
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Join Our Team
          </h1>
          <p className="text-xl text-cyan-400 mb-8 max-w-4xl mx-auto">
            Help us build the future of AI and technology. Join a team of passionate innovators working on cutting-edge solutions.
          </p>
        </section>

        {/* Job Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Explore Opportunities
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'cyber-button'
                    : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <div className="space-y-6">
            {filteredPositions.map((position) => (
              <div key={position.id} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300 mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4 text-cyan-400" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4 text-cyan-400" />
                        <span>{position.experience}</span>
                      </div>
                      <span className="text-gray-400">Posted {position.posted}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>
                  <a
                    href={`/careers/${position.id}`}
                    className="cyber-button px-6 py-3 text-center lg:w-auto w-full"
                  >
                    Apply Now
                  </a>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <Star className="w-4 h-4 text-yellow-400 mr-2 mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Our Culture
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((item, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <item.icon className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Don't See the Right Role?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="cyber-button px-8 py-4 text-lg font-semibold">
                Send Your Resume
              </a>
              <a href="/team" className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Meet Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;