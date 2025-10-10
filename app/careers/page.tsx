'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, ArrowRight, Brain, Cloud, Shield, Code, BarChart, Zap, Target, Globe, Database, Smartphone, Lock, TrendingUp, Settings } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead AI solution development and machine learning model implementation',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      icon: Brain
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement cloud solutions for enterprise clients',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with DevOps and CI/CD',
        'Strong leadership and client management skills'
      ],
      benefits: [
        'Competitive salary ($130k - $200k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      icon: Cloud
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect client systems and data from cyber threats',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Experience with security tools and frameworks',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary ($100k - $150k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      icon: Shield
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'Software Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop web applications and microservices',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, Python, or Java',
        'Experience with databases and APIs',
        'Strong problem-solving and collaboration skills'
      ],
      benefits: [
        'Competitive salary ($80k - $120k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      icon: Code
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from data and build predictive models',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '4+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary ($110k - $160k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      icon: BarChart
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Automate deployment and infrastructure management',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in DevOps',
        'Experience with Docker, Kubernetes, CI/CD',
        'Proficiency in scripting languages',
        'Strong automation and problem-solving skills'
      ],
      benefits: [
        'Competitive salary ($90k - $140k)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      icon: Settings
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Annual learning budget and opportunities for conferences and certifications'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and company retreats'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and unlimited PTO'
    },
    {
      icon: Star,
      title: 'Recognition',
      description: 'Performance bonuses and recognition programs for outstanding work'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Work on projects that make a real difference in the world'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.',
      icon: Brain
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do, from code to client relationships.',
      icon: Star
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication across all levels.',
      icon: Users
    },
    {
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.',
      icon: Shield
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, software developer, data scientist, remote work" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Join Our Team">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future with us. Work on cutting-edge AI and IT solutions while growing your career in a supportive, innovative environment.
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore exciting career opportunities in AI, cloud computing, cybersecurity, and more.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div key={position.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300 group">
                  <div className="flex items-start mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <position.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400 mb-2">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-cyan-400">
                        <span>{position.type}</span>
                        <span>•</span>
                        <span>{position.experience}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                      {position.requirements.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.slice(0, 3).map((benefit, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full cyber-button">
                    <ArrowRight className="w-5 h-5 mr-2" />
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive environment where you can grow and thrive.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {values.map((value, index) => (
                <div key={index} className="cyber-card hologram-card p-8">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                      <value.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                      <p className="text-gray-300">{value.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 cyber-button"
                >
                  <ArrowRight className="w-5 h-5" />
                  Send Your Resume
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  Learn About Our Culture
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;