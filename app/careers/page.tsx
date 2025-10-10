'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with Kubernetes and Docker',
        'Strong knowledge of DevOps practices',
        'Previous experience with enterprise migrations'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Comprehensive health benefits',
        '401k with company matching',
        'Flexible work arrangements'
      ],
      posted: '1 week ago',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Health and dental insurance',
        'Professional certification support',
        'Remote work options'
      ],
      posted: '3 days ago',
      featured: false
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain web applications using modern technologies and best practices.',
      requirements: [
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, and TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary: $80,000 - $120,000',
        'Flexible remote work',
        'Learning and development opportunities',
        'Health insurance and wellness programs'
      ],
      posted: '1 week ago',
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Star className="w-8 h-8 text-blue-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results for our clients.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve great things together.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to transform businesses and lives.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously push the boundaries of what\'s possible with technology.'
    }
  ];
  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities',
    '401k matching program',
    'Unlimited PTO',
    'Mental health support'
  ];
  const values = [
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology',
      color: 'text-yellow-400'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results',
      color: 'text-blue-400'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      color: 'text-green-400'
    },
    {
      icon: Heart,
      title: 'Integrity',
      description: 'We build trust through transparency and honesty',
      color: 'text-red-400'
    }
  ];
  const culture = [
    {
      stat: '98%',
      label: 'Employee Satisfaction',
      description: 'Our team loves working here'
    },
    {
      stat: '50+',
      label: 'Team Members',
      description: 'Growing team of experts'
    },
    {
      stat: '15+',
      label: 'Countries',
      description: 'Global remote team'
    },
    {
      stat: '4.9/5',
      label: 'Glassdoor Rating',
      description: 'Highly rated workplace'
    }
    'Competitive salary and equity participation',
    'Comprehensive health, dental, and vision insurance',
    '401k with company matching',
    'Flexible remote work options',
    'Professional development and training budget',
    'Generous paid time off and holidays',
    'Modern office spaces with latest technology',
    'Team building events and company retreats',
    'Mentorship and career growth opportunities',
    'Wellness programs and gym memberships'
  ];
  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cloud computing, and cybersecurity." />
        <meta name="keywords" content="tech careers, AI jobs, cloud computing jobs, cybersecurity careers, remote work" />
      </Helmet>
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team;
  </
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Work on cutting-edge AI and IT solutions that transform businesses worldwide.
          </p>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center space-x-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{position.department}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Be part of the future of technology. Join our team of innovators, creators, and problem-solvers who are building the next generation of AI and IT solutions.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {culture.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.description}</div>
                </div>
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
                  </div>
                ))}
              </div>
            )}
          </div>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {position.requirements?.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Perfect Role?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Submit Resume
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-blue-900 px-8 py-3 rounded-lg font-medium transition-colors duration-200">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default CareersPage;
  </Link>
  </button>
  </button>
  </div>
  </div>
  </div>
  </section>
  </h1>
  </div>