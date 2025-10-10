'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Users, Target, CheckCircle, Phone, Clock, Zap, Shield, Eye, Building, BookOpen, Mail, MapPin, Award, Star, TrendingUp, Globe, Cpu, Database, Cloud, Code, Smartphone, Settings, BarChart3, FileText, Search, Bot, Palette, Camera, Music, Video, Gamepad2, ShoppingCart, CreditCard, Factory, Car, Plane, Ship, Train, Home, Heart, Stethoscope, GraduationCap, Briefcase, Wrench, Hammer, Paintbrush, Scissors, Calculator, Calendar, Clock3, Compass, PieChart, TrendingDown, Activity, ArrowRight, DollarSign } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build scalable web applications and integrate AI solutions into user-facing products.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases and APIs',
        'Knowledge of cloud deployment'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for AI-powered solutions.',
      requirements: [
        '3+ years product management experience',
        'Understanding of AI/ML technologies',
        'Strong analytical and communication skills',
        'Experience with agile development'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Analyze complex data sets and develop predictive models for business insights.',
      requirements: [
        '4+ years data science experience',
        'Expertise in Python, R, SQL',
        'Experience with machine learning algorithms',
        'Strong statistical analysis skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Competitive salary, equity, and performance bonuses',
      icon: DollarSign,
      color: 'text-green-400'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: Heart,
      color: 'text-red-400'
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules',
      icon: Globe,
      color: 'text-blue-400'
    },
    {
      title: 'Professional Growth',
      description: 'Learning budget and career development opportunities',
      icon: BookOpen,
      color: 'text-purple-400'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI and technology tools',
      icon: Brain,
      color: 'text-cyan-400'
    },
    {
      title: 'Team Culture',
      description: 'Collaborative and innovative work environment',
      icon: Users,
      color: 'text-yellow-400'
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
      icon: Clock
    },
    {
      title: 'Diversity & Inclusion',
      description: 'We value diverse perspectives and inclusive practices',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Join Our Team
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Build the Future of AI with Us
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Join a team of passionate innovators who are shaping the future of artificial intelligence 
            and transforming businesses worldwide.
          </p>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 border border-cyan-400/20 hover:border-cyan-400/60 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                  <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                    {position.type}
                  </span>
                </div>
                <div className="flex items-center text-gray-300 mb-4">
                  <Building className="w-4 h-4 mr-2" />
                  <span className="mr-4">{position.department}</span>
                  <MapPin className="w-4 h-4 mr-2" />
                  <span>{position.location}</span>
                </div>
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-purple-400 mb-3">Benefits:</h4>
                  <ul className="space-y-1">
                    {position.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="text-gray-300 text-sm">
                        ✓ {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <a
                  href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center inline-block"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                <benefit.icon className={`w-16 h-16 ${benefit.color} mx-auto mb-4`} />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture */}
        <section className="mb-16">
          <h2 className="text-4xl font-bold text-white mb-12 text-center">Our Culture</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {culture.map((item, index) => (
              <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
                <item.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-3">{item.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="text-center">
          <div className="bg-slate-800/50 backdrop-blur-lg rounded-2xl p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Don't See Your Role?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              We're always looking for talented individuals who share our passion for AI and technology. 
              Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Send Your Resume
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call Us
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
