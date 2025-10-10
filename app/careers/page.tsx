'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Zap, Globe, BookOpen } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'AWS, Azure, GCP certifications',
        '7+ years cloud architecture experience',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of DevOps practices',
        'Excellent communication and leadership skills'
      ],
      featured: false
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Analyze complex data sets to drive business insights and develop predictive models.',
      requirements: [
        'PhD or Master\'s in Data Science, Statistics, or related field',
        '3+ years experience in data analysis and modeling',
        'Proficiency in Python, R, SQL',
        'Experience with big data technologies (Spark, Hadoop)',
        'Strong statistical and analytical skills'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation systems.',
      requirements: [
        '4+ years DevOps experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with Terraform, Ansible, or similar',
        'Knowledge of monitoring and logging tools',
        'Strong scripting skills (Bash, Python)'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'Frontend Developer',
      department: 'Product Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and responsive user interfaces for our AI-powered applications.',
      requirements: [
        '3+ years frontend development experience',
        'Expertise in React, TypeScript, Next.js',
        'Experience with modern CSS frameworks',
        'Understanding of UX/UI principles',
        'Portfolio demonstrating strong design skills'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and roadmap for our AI and IT solutions portfolio.',
      requirements: [
        '5+ years product management experience',
        'Experience in B2B SaaS or enterprise software',
        'Strong analytical and strategic thinking',
        'Excellent communication and leadership skills',
        'Technical background preferred'
      ],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'Above-market salary and equity participation'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: Globe,
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours'
    },
    {
      icon: BookOpen,
      title: 'Learning & Development',
      description: '$5,000 annual budget for courses and conferences'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Tools',
      description: 'Latest hardware and software for optimal productivity'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building and company retreats'
    }
  ];

  const values = [
    {
      icon: Star,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We create solutions that make a real difference'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, DevOps, remote work, tech jobs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide. 
              Be part of a team that's shaping the future of technology.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span>Remote-First Culture</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-purple-400" />
                <span>Competitive Benefits</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-pink-400" />
                <span>Cutting-Edge Technology</span>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white/5 backdrop-blur-sm border rounded-2xl p-6 hover:border-cyan-400/50 transition-all duration-300 group ${
                    position.featured ? 'border-cyan-400/50 ring-2 ring-cyan-400/20' : 'border-white/20'
                  }`}
                >
                  {position.featured && (
                    <div className="absolute -top-3 -right-3">
                      <div className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </div>
                    </div>
                  )}
                  
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-4 text-sm line-clamp-3">{position.description}</p>

                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-300 text-xs flex items-start">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="line-clamp-2">{req}</span>
                        </li>
                      ))}
                      {position.requirements.length > 3 && (
                        <li className="text-gray-400 text-xs">
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>

                  <Link
                    to={`/careers/${position.id}`}
                    className="w-full inline-flex items-center justify-center bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 text-sm"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:border-cyan-400/50 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm border border-cyan-400/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Role?</h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals who share our passion for innovation. 
                Send us your resume and let's start a conversation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300"
                >
                  Send Your Resume
                  <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                </Link>
                <Link
                  to="/about"
                  className="bg-white/10 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/20 transition-all duration-300 border border-white/20"
                >
                  Learn About Us
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