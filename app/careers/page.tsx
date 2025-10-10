'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Star, 
  Users, 
  Heart, 
  Award, 
  MapPin, 
  Clock, 
  Briefcase, 
  CheckCircle, 
  ArrowRight, 
  GraduationCap, 
  Zap,
  Brain,
  Shield,
  Code,
  BarChart,
  Cloud,
  Phone,
  Mail
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai-research', name: 'AI Research' },
    { id: 'product', name: 'Product' },
    { id: 'sales', name: 'Sales' },
    { id: 'marketing', name: 'Marketing' }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget, conference attendance, and skill-building programs'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance initiatives'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance bonuses, equity options, and career advancement opportunities'
    }
  ];

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years of experience in AI/ML',
        'Strong Python and TensorFlow skills',
        'Experience with cloud platforms',
        'PhD in Computer Science preferred'
      ],
      salary: '$120,000 - $180,000'
    },
    {
      id: 2,
      title: 'AI Research Scientist',
      department: 'ai-research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Conduct groundbreaking research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in AI/ML or related field',
        'Published research papers',
        'Experience with deep learning',
        'Strong mathematical background'
      ],
      salary: '$150,000 - $220,000'
    },
    {
      id: 3,
      title: 'Product Manager - AI',
      department: 'product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Drive product strategy and roadmap for AI-powered solutions.',
      requirements: [
        '3+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical skills',
        'MBA or technical background preferred'
      ],
      salary: '$100,000 - $150,000'
    },
    {
      id: 4,
      title: 'Sales Engineer',
      department: 'sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Technical sales role focused on AI and IT solutions.',
      requirements: [
        'Technical background in AI/IT',
        '2+ years of sales experience',
        'Excellent communication skills',
        'Understanding of enterprise needs'
      ],
      salary: '$80,000 - $120,000 + Commission'
    },
    {
      id: 5,
      title: 'Marketing Manager',
      department: 'marketing',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead marketing initiatives for AI and technology solutions.',
      requirements: [
        '3+ years of marketing experience',
        'Experience with B2B marketing',
        'Knowledge of AI/tech industry',
        'Strong digital marketing skills'
      ],
      salary: '$70,000 - $110,000'
    }
  ];

  const filteredPositions = selectedDepartment === 'all' 
    ? openPositions 
    : openPositions.filter(position => position.department === selectedDepartment);

  const culture = [
    {
      icon: Brain,
      title: 'Innovation First',
      description: 'We encourage creative thinking and experimentation with cutting-edge technologies.'
    },
    {
      icon: Users,
      title: 'Collaborative Environment',
      description: 'Work with talented individuals who share your passion for technology and growth.'
    },
    {
      icon: Shield,
      title: 'Inclusive Culture',
      description: 'We value diversity and create an environment where everyone can thrive.'
    },
    {
      icon: Zap,
      title: 'Fast-Paced Growth',
      description: 'Be part of a rapidly growing company with endless opportunities for advancement.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and technology. Explore career opportunities in engineering, research, product, and more." />
        <meta name="keywords" content="careers, jobs, AI engineer, software engineer, product manager, sales, marketing, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="cyber-scan-line mb-8">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch">
              Join Our Team
            </h1>
            <p className="text-2xl text-cyan-400 mb-8 font-medium cyber-glow neon-text">
              Shape the Future of AI & Technology
            </p>
          </div>
          <p className="text-xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Be part of a team that's revolutionizing how businesses use AI and technology. 
            Work on cutting-edge projects with talented individuals who share your passion for innovation.
          </p>
        </div>
      </section>

      {/* Culture & Benefits */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we provide an environment where you can grow, 
              innovate, and make a real impact.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {culture.map((item, index) => (
              <div key={index} className="quantum-card p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <item.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="holographic-stream p-8 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-teal-600 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find your next opportunity and help us build the future of AI and technology.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept.id}
                onClick={() => setSelectedDepartment(dept.id)}
                className={`px-6 py-3 rounded-lg border transition-all duration-300 ${
                  selectedDepartment === dept.id
                    ? 'border-cyan-400 bg-cyan-400/10 text-cyan-400'
                    : 'border-cyan-400/30 text-cyan-400 hover:bg-cyan-400/10'
                }`}
              >
                {dept.name}
              </button>
            ))}
          </div>

          {/* Positions Grid */}
          <div className="space-y-8">
            {filteredPositions.map((position) => (
              <div key={position.id} className="quantum-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                        {position.salary}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <Link
                      to="/contact"
                      className="cyber-button inline-flex items-center space-x-2"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">{position.description}</p>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-4">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, index) => (
                      <li key={index} className="flex items-start text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {filteredPositions.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-300 text-lg">No positions found for the selected department.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="quantum-tunnel p-12 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know 
              how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="cyber-button w-full sm:w-auto text-center"
              >
                <span>Send Your Resume</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="holographic-stream p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Get in Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Phone</p>
                    <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      +1 (302) 464-0950
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <a href="mailto:careers@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300 font-semibold text-lg">
                      careers@ziontechgroup.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Address</p>
                    <p className="text-white font-semibold">
                      364 E Main St STE 1008<br />
                      Middletown, DE 19709
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="holographic-stream p-8">
              <h3 className="text-2xl font-bold text-white mb-6 neon-text">Quick Application</h3>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your full name"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="position" className="block text-sm font-medium text-gray-300 mb-2">
                    Position of Interest
                  </label>
                  <input
                    type="text"
                    id="position"
                    name="position"
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Enter position title"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Cover Letter
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-colors"
                    placeholder="Tell us about yourself and why you want to join our team"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full cyber-button text-center py-4"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;