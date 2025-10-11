<<<<<<< HEAD
<<<<<<< HEAD
'use client';

import React from 'react';
<<<<<<< HEAD

const CareersPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-cyan-400">Careers</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Join our team and help shape the future of AI and IT solutions.
          </p>
        </div>
      </div>
    </div>
  );
};
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart } from 'lucide-react';
=======
<<<<<<< HEAD
>>>>>>> origin/main

const CareersPage: React.FC = () => {
  const openPositions = [
=======
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
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart, Zap } from 'lucide-react'

const CareersPage: React.FC = () => {
  const jobOpenings = [
<<<<<<< HEAD
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
>>>>>>> origin/main
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Lead development of cutting-edge AI solutions and machine learning models.'
=======
<<<<<<< HEAD
>>>>>>> origin/main
    },
    {
=======
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
=======
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
<<<<<<< HEAD
      id: '2',
>>>>>>> origin/main
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
=======
      title: 'Cloud Solutions Architect',
      department: 'IT Services',
      location: 'Remote / Delaware',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
      type: 'Full-time',
      experience: '7+ years',
<<<<<<< HEAD
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets and build predictive models.'
=======
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
<<<<<<< HEAD
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
    },
    {
=======
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and Google Cloud',
        'Experience with DevOps and CI/CD pipelines',
        'Strong leadership and client-facing skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
<<<<<<< HEAD
        '401(k) with company matching',
        'Flexible PTO policy'
      ],
      posted: '1 week ago',
      featured: true
>>>>>>> origin/main
=======
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
<<<<<<< HEAD
<<<<<<< HEAD
      description: 'Automate deployment pipelines and manage infrastructure at scale.'
=======
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
=======
      description: 'Protect our clients\' digital assets with advanced cybersecurity solutions.',
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
<<<<<<< HEAD
        'Health and dental insurance'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '6',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create engaging and responsive user interfaces for our web applications.',
      requirements: [
        '3+ years experience in frontend development',
        'Proficiency in React, TypeScript, HTML/CSS',
        'Experience with modern build tools',
        'Knowledge of responsive design principles',
        'Experience with testing frameworks'
      ],
      benefits: [
        'Competitive salary: $85,000 - $125,000',
        'Health insurance',
        'Flexible PTO',
        'Professional development opportunities'
      ],
      posted: '4 days ago',
      featured: false
>>>>>>> origin/main
>>>>>>> origin/main
    }
  ];

  const benefits = [
<<<<<<< HEAD
=======
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-500" />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.'
    },
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-500" />,
      title: 'Learning & Growth',
      description: 'Professional development budget and opportunities for continuous learning.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-500" />,
      title: 'Recognition',
      description: 'Performance bonuses and recognition programs for outstanding contributions.'
    },
    {
      icon: <Users className="w-8 h-8 text-green-500" />,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events and activities.'
    },
    {
      icon: <Star className="w-8 h-8 text-orange-500" />,
      title: 'Career Growth',
      description: 'Clear career progression paths and mentorship opportunities.'
    }
  ];

  const featuredPositions = openPositions.filter(position => position.featured);
  const regularPositions = openPositions.filter(position => !position.featured);

  return (
    <div className="min-h-screen bg-gray-50">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore our open positions and benefits." />
        <meta name="keywords" content="tech careers, AI jobs, cloud computing jobs, cybersecurity careers, software engineering" />
      </Helmet>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#open-positions"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                View Open Positions
              </Link>
              <Link
                to="#benefits"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Learn About Benefits
              </Link>
            </div>
=======
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions for our clients.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science']
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: ['AWS/Azure certification', '3+ years cloud experience', 'Strong communication skills']
    },
    {
      title: 'Frontend Developer',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Build beautiful and responsive user interfaces for our applications.',
      requirements: ['React, TypeScript', '2+ years frontend experience', 'UI/UX design skills']
=======
        'Unlimited PTO'
      ]
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
    }
  ]

  const benefits = [
<<<<<<< HEAD
>>>>>>> origin/main
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Flexible work arrangements',
    'Professional development budget',
<<<<<<< HEAD
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities'
  ];

  return (
    <>
  </>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, data scientist, DevOps, remote work, tech jobs" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
=======
    'Unlimited PTO',
    '401(k) matching',
    'Gym membership',
    'Team building events'
=======
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.'
    },
    {
      icon: Star,
      title: 'Growth Opportunities',
      description: 'Professional development budget and opportunities for career advancement.'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented, passionate professionals in a collaborative environment.'
    }
  ]

  const values = [
    'Innovation and continuous learning',
    'Collaboration and teamwork',
    'Client success and satisfaction',
    'Integrity and transparency',
    'Diversity and inclusion'
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
>>>>>>> origin/main
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
<<<<<<< HEAD
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide.
=======
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
<<<<<<< HEAD
              Be part of a team that's shaping the future of AI and IT solutions. We're looking for passionate individuals who want to make a difference.
>>>>>>> origin/main
=======
              Be part of a team that's shaping the future of AI and IT solutions. 
              We're looking for passionate professionals to join our mission.
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Open Positions
              </button>
              <button className="cyber-button-secondary">
                <Users className="w-5 h-5 mr-2" />
                Learn About Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Join Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300">
              We offer more than just a job - we offer a career with purpose and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="cyber-card">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-gray-300">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
          {/* Why Work With Us */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-4xl font-bold text-white mb-6">Why Work With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                    <p className="text-gray-300">
                      Work with the latest AI, quantum computing, and cloud technologies 
                      that are shaping the future.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">World-Class Team</h3>
                    <p className="text-gray-300">
                      Collaborate with industry experts and thought leaders in AI, 
                      quantum computing, and enterprise technology.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Meaningful Impact</h3>
                    <p className="text-gray-300">
                      Help transform businesses and create solutions that make a 
                      real difference in people's lives.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Our Benefits</h3>
              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
=======
      {/* Job Openings Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300">
              Explore our current job openings and find your next career opportunity.
            </p>
          </div>
          
          <div className="space-y-8">
            {jobOpenings.map((job, index) => (
<<<<<<< HEAD
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="mr-4">{job.location}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{job.type}</span>
                </div>
                <p className="text-gray-300 mb-6">{job.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-300">• {req}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
          </div>
        </div>
      </section>

<<<<<<< HEAD
        <section className="py-20 px-4">
        </section>
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
>>>>>>> origin/main
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-300 mb-4">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                  </div>

<<<<<<< HEAD
                  <p className="text-gray-300 mb-4">{position.description}</p>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
=======
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-300 text-sm flex items-center">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
=======
<<<<<<< HEAD
      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Zion Tech Group, we believe in empowering our team members to reach their full potential while building innovative solutions that make a real impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
>>>>>>> origin/main
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

<<<<<<< HEAD
          {/* CTA Section */}
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 text-center backdrop-blur-lg border border-white/10">
            <h2 className="text-4xl font-bold text-white mb-4">
              Don't See Your Role?
=======
      {/* Featured Positions */}
      {featuredPositions.length > 0 && (
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Featured Positions
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPositions.map((position) => (
                  <div key={position.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {position.title}
                        </h3>
                        <p className="text-gray-600 mb-2">{position.department}</p>
                        <div className="flex items-center text-sm text-gray-500 mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          <span className="mr-4">{position.location}</span>
                          <Clock className="w-4 h-4 mr-1" />
                          <span>{position.type}</span>
                        </div>
                      </div>
                      <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">Posted {position.posted}</span>
                      <Link
                        to={`/careers/${position.id}`}
                        className="text-blue-600 hover:text-blue-800 font-medium flex items-center"
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                ))}
=======
      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Work With Us?
>>>>>>> origin/main
            </h2>
            <p className="text-xl text-gray-300">
              We offer competitive benefits and a great work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                <span>{benefit}</span>
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
              </div>
            </div>
          </div>
<<<<<<< HEAD
        </section>
      )}

      {/* All Open Positions */}
      <section id="open-positions" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              All Open Positions
            </h2>
            <div className="space-y-6">
              {regularPositions.map((position) => (
                <div key={position.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
                        <span className="mr-4">{position.department}</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="mr-4">{position.location}</span>
                        <Briefcase className="w-4 h-4 mr-1" />
                        <span className="mr-4">{position.type}</span>
                        <span>{position.experience}</span>
=======
              <div key={index} className="cyber-card">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <h3 className="text-2xl font-bold text-white mr-4">{job.title}</h3>
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        {job.department}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-6 mb-4 text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{job.experience}</span>
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{job.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-center text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
>>>>>>> origin/main
                  </div>
<<<<<<< HEAD

                </div>
              ))}
            </div>
<<<<<<< HEAD

            </div>
          </div>
        </section>
      ))

  );
};

export default CareersPage;
=======
=======
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2 mb-6">
                      {job.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    
                    <button className="cyber-button w-full">
                      <ArrowRight className="w-5 h-5 mr-2" />
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
          </div>
        </div>
      </section>
>>>>>>> origin/main

<<<<<<< HEAD
      {/* Culture & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Culture & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We foster an environment where innovation thrives and every team member can make a meaningful impact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600">We strive for excellence in everything we do, from code quality to customer service.</p>
              </div>

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of teamwork and open communication.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">We encourage creative thinking and embrace new technologies.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">We operate with honesty, transparency, and ethical practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't see a position that matches your skills? We're always looking for talented individuals. Send us your resume!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
<<<<<<< HEAD
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Send Your Resume
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn About Us
              </a>
=======
              <Link
                to="/contact"
                className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </Link>
              <Link
                to="#open-positions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Browse All Positions
              </Link>
>>>>>>> origin/main
            </div>
          </div>
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
        </div>
      </section>

<<<<<<< HEAD
export default CareersPage;
=======
=======
>>>>>>> cursor/enhance-app-with-new-services-and-futuristic-design-a9d9
      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="cyber-button-secondary">
            <ArrowRight className="w-5 h-5 mr-2" />
            Send Your Resume
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage
>>>>>>> origin/main
>>>>>>> origin/main
