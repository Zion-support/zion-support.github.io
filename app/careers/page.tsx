'use client';
import React from 'react';
import { Briefcase, MapPin, Clock, Users, Award, Zap, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure)',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and integrate AI solutions into user-facing products.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services',
        'Strong communication skills'
      ],
      benefits: [
        'Competitive salary ($80k - $120k)',
        'Health insurance',
        'Remote work flexibility',
        'Learning opportunities',
        'Team collaboration'
      ]
    },
    {
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: 'PhD required',
      description: 'Conduct groundbreaking research in AI, machine learning, and quantum computing.',
      requirements: [
        'PhD in AI, ML, or related field',
        'Strong publication record',
        'Experience with research methodologies',
        'Knowledge of quantum computing',
        'Innovation mindset'
      ],
      benefits: [
        'Competitive salary ($100k - $150k)',
        'Research budget',
        'Conference attendance',
        'Publication support',
        'Academic collaboration opportunities'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure and deployment pipelines for AI applications.',
      requirements: [
        '4+ years DevOps experience',
        'Expertise in AWS, Azure, or GCP',
        'Docker and Kubernetes knowledge',
        'CI/CD pipeline experience',
        'Monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary ($90k - $130k)',
        'Health insurance',
        'Flexible schedule',
        'Latest tools and technologies',
        'Growth opportunities'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries and equity participation',
      icon: Award
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage',
      icon: Users
    },
    {
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules',
      icon: Clock
    },
    {
      title: 'Learning & Growth',
      description: 'Professional development and conference attendance',
      icon: Zap
    },
    {
      title: 'Innovation',
      description: 'Work on cutting-edge AI and technology projects',
      icon: Briefcase
    },
    {
      title: 'Team Culture',
      description: 'Collaborative and inclusive work environment',
      icon: Users
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of AI and technology. Join our team of innovators and help us 
            build the next generation of intelligent solutions.
          </p>
        </section>

        {/* Open Positions */}
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Open Positions
          </h2>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="cyber-card p-8 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                  <div className="mb-4 lg:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {position.type}
                      </span>
                      <span className="flex items-center">
                        <Award className="w-4 h-4 mr-2" />
                        {position.experience}
                      </span>
                    </div>
                  </div>
                  <a
                    href="/contact"
                    className="cyber-button px-6 py-3 text-sm font-semibold hover:scale-105 transition-all duration-300"
                  >
                    Apply Now
                  </a>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-start text-gray-300">
                          <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
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
        <section className="mb-20">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
            Why Work With Us
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3 neon-text">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-20">
          <div className="cyber-card p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
              Our Culture
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">Innovation</div>
                <p className="text-gray-300">We encourage creative thinking and bold ideas</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">Collaboration</div>
                <p className="text-gray-300">We work together to achieve extraordinary results</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">Growth</div>
                <p className="text-gray-300">We invest in our team's professional development</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that matches your skills? We're always interested in hearing from 
              talented individuals. Send us your resume and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Send Your Resume
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Call +1 302 464 0950
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
