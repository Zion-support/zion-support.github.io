'use client';
import React from 'react';
import { Briefcase, Users, MapPin, Clock, DollarSign, Heart, Brain, Code, Shield, BarChart, Zap, CheckCircle, ArrowRight, Star, Globe, Award, GraduationCap, Coffee, Laptop } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Development',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Lead AI model development and implementation for enterprise clients',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience with ML/AI frameworks',
        'Experience with TensorFlow, PyTorch, or similar',
        'Strong Python programming skills',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Remote work', 'Learning budget']
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $130,000',
      description: 'Build and maintain web applications using React, Node.js, and cloud technologies',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms',
        'Strong problem-solving skills'
      ],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Remote work', 'Learning budget']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $150,000',
      description: 'Manage cloud infrastructure and CI/CD pipelines for scalable applications',
      requirements: [
        '4+ years DevOps experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with Docker, Kubernetes',
        'Knowledge of CI/CD tools (Jenkins, GitLab CI)',
        'Infrastructure as Code (Terraform, CloudFormation)'
      ],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Remote work', 'Learning budget']
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$110,000 - $160,000',
      description: 'Lead product strategy and development for AI-powered solutions',
      requirements: [
        '5+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Technical background preferred',
        'Experience with agile methodologies'
      ],
      benefits: ['Health insurance', '401k matching', 'Flexible PTO', 'Remote work', 'Learning budget']
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage for you and your family',
      color: 'text-red-400'
    },
    {
      icon: DollarSign,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries with performance bonuses and equity options',
      color: 'text-green-400'
    },
    {
      icon: Clock,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO',
      color: 'text-blue-400'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and skill development programs',
      color: 'text-purple-400'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on cutting-edge AI solutions that impact businesses worldwide',
      color: 'text-cyan-400'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Collaborate with talented, passionate professionals in a supportive environment',
      color: 'text-orange-400'
    }
  ];

  const culture = [
    {
      title: 'Innovation First',
      description: 'We encourage experimentation and reward bold ideas that push the boundaries of AI',
      icon: Brain
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options to support your personal and professional life',
      icon: Coffee
    },
    {
      title: 'Continuous Learning',
      description: 'Regular training, conferences, and opportunities to stay ahead of the latest technologies',
      icon: GraduationCap
    },
    {
      title: 'Collaborative Environment',
      description: 'Open communication and knowledge sharing across all teams and departments',
      icon: Users
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '15+', label: 'Countries Represented' },
    { number: '95%', label: 'Employee Satisfaction' },
    { number: '4.8/5', label: 'Glassdoor Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
            Join Our Team
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Build the future of AI with us
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Join a team of passionate innovators who are shaping the future of artificial intelligence. 
            We're looking for talented individuals who want to make a real impact in the world of AI and technology.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a
              href="#positions"
              className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              View Open Positions
            </a>
            <a
              href="#culture"
              className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Our Culture
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Open Positions
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{position.title}</h3>
                    <p className="text-cyan-400 font-semibold">{position.department}</p>
                  </div>
                  <div className="text-right">
                    <div className="text-green-400 font-bold">{position.salary}</div>
                    <div className="text-sm text-gray-400">{position.type}</div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-4 mb-4 text-sm">
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    {position.experience}
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {position.benefits.map((benefit, benefitIndex) => (
                      <span key={benefitIndex} className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <a
                  href="/contact"
                  className="block w-full text-center bg-cyan-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-cyan-600 transition-colors"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Work With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className={`w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section id="culture" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Our Culture
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {culture.map((item, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mr-6 flex-shrink-0">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-3 neon-text">{item.title}</h3>
                    <p className="text-gray-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Application Process */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Application Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Apply Online</h3>
              <p className="text-gray-300">Submit your application with resume and cover letter</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Initial Review</h3>
              <p className="text-gray-300">Our team reviews your application and qualifications</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Interview</h3>
              <p className="text-gray-300">Technical and cultural fit interviews with our team</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Decision</h3>
              <p className="text-gray-300">We make our decision and extend an offer</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              Don't see a position that matches your skills? We're always looking for talented individuals. 
              Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Apply Now
              </a>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Send Resume
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