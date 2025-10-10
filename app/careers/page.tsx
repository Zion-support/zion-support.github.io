'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
<<<<<<< HEAD
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
=======
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

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
  salary: string;
  posted: string;
  featured: boolean;
}
>>>>>>> main

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';
;
const CareersPage: React.FC = () => {const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$120,000 - $180,000',
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
<<<<<<< HEAD
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
=======
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats and vulnerabilities.',
      requirements: [
        '3+ years in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$90,000 - $130,000',
      posted: '2024-01-12',
      featured: true
    },
    {
      id: '3',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and implement scalable cloud solutions for enterprise clients across multiple platforms.',
      requirements: [
        '4+ years cloud architecture experience',
        'Expertise in AWS, Azure, or GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of microservices architecture',
        'Excellent communication and client-facing skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$110,000 - $160,000',
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Streamline our development and deployment processes through automation and infrastructure as code.',
      requirements: [
        '3+ years DevOps experience',
        'Proficiency in CI/CD pipelines',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Knowledge of monitoring and logging tools',
        'Scripting skills (Python, Bash, PowerShell)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$85,000 - $125,000',
      posted: '2024-01-08',
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Extract insights from complex datasets to drive business decisions and improve client outcomes.',
      requirements: [
        '2+ years data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical analysis skills',
        'Experience with data visualization tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$80,000 - $120,000',
      posted: '2024-01-05',
      featured: false
    },
    {
      id: '6',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build beautiful, responsive user interfaces for our web applications and client portals.',
      requirements: [
        '2+ years frontend development experience',
        'Proficiency in React, TypeScript, CSS',
        'Experience with modern build tools',
        'Understanding of UX/UI principles',
        'Experience with responsive design'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$70,000 - $100,000',
      posted: '2024-01-03',
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
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve great things together.'
    },
    {
      icon: <Heart className="w-8 h-8 text-blue-600" />,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to transform businesses and lives.'
    },
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously seek new ways to solve complex problems.'
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Relevant cloud certifications',
        'Experience with microservices architecture',
        'Strong communication skills'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Equity participation',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '3',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful and responsive user interfaces for our AI-powered applications.',
      requirements: [
        '3+ years experience in React/Next.js',
        'Proficiency in TypeScript and modern CSS',
        'Experience with state management libraries',
        'Understanding of web performance optimization',
        'Collaborative team player'
      ],
      benefits: [
        'Competitive salary: $90,000 - $130,000',
        'Equity participation',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '3 days ago',
      featured: false
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage and optimize our cloud infrastructure and deployment pipelines.',
      requirements: [
        '4+ years experience in DevOps practices',
        'Expertise in Docker, Kubernetes, and CI/CD',
        'Experience with cloud platforms',
        'Knowledge of monitoring and logging tools',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '5 days ago',
      featured: false
>>>>>>> main
    }
  ];

  const benefits = [
    'Competitive salary and equity packages',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development and training budget',
    '401k with company matching',
    'Unlimited paid time off',
    'Modern equipment and tools',
    'Team building events and activities',
    'Mentorship and career growth opportunities',
    'Stock options for all employees'
  ];

  const featuredPositions = openPositions.filter(position => position.featured);
  const regularPositions = openPositions.filter(position => !position.featured);
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited PTO',
    'Top-tier equipment',
    'Team building events',
<<<<<<< HEAD
    'Career growth opportunities',
    '401k matching program',
    'Unlimited PTO',
    'Mental health support'
=======
    'Career growth opportunities'
>>>>>>> main
  ];

  const companyValues = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results for our clients.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve great things.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to transform businesses.'
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'We embrace innovation and are always looking for new ways to solve complex problems.'
    }
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative technology professionals. Explore career opportunities at Zion Tech Group and help shape the future of AI and IT solutions." />
        <meta name="keywords" content="careers, jobs, technology careers, AI jobs, software engineering, remote work" />
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, technology careers" />
      </Helmet>

      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
<<<<<<< HEAD
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
=======
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
                <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
                  View Open Positions
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors">
                  Learn About Our Culture
                </button>
              </div>
>>>>>>> main
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and technology. We're looking for passionate individuals who want to make a difference.
            </p>
<<<<<<< HEAD
=======
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                View Open Positions
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                Learn About Our Culture
              </button>
>>>>>>> main

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {culture.map((item, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl font-bold text-white mb-2">{item.stat}</div>
                  <div className="text-gray-400 text-sm">{item.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{item.description}</div>
                </div>
<<<<<<< HEAD
              ))}
=======
              ));
>>>>>>> main
            </div>
          </div>
        </section>

        {/* Company Values */}
<<<<<<< HEAD
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
=======
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
>>>>>>> main
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We offer comprehensive benefits and a supportive work environment to help you thrive.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-white p-4 rounded-lg shadow-sm">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Positions */}
        {featuredPositions.length > 0 && (
          <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Positions</h2>
                <p className="text-xl text-gray-600">Check out our most exciting open roles</p>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                {featuredPositions.map((position) => (
                  <div key={position.id} className="bg-white border-2 border-blue-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                        <p className="text-blue-600 font-medium">{position.department}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                        Featured
                      </span>
                    </div>
                    <div className="flex items-center text-sm text-gray-600 mb-4">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span className="mr-4">{position.location}</span>
                      <Clock className="w-4 h-4 mr-1" />
                      <span className="mr-4">{position.type}</span>
                      <Briefcase className="w-4 h-4 mr-1" />
                      <span>{position.experience}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{position.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-lg font-bold text-green-600">{position.salary}</span>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                  </div>
                ));
              </div>
            </div>
          </section>
        )}

        {/* All Positions */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">All Open Positions</h2>
              <p className="text-xl text-gray-600">Explore all available opportunities</p>
            </div>
<<<<<<< HEAD

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {position.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-semibold">Featured Position</span>
=======
            <div className="space-y-6">
              {regularPositions.map((position) => (
                <div key={position.id} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h3>
                      <p className="text-blue-600 font-medium mb-3">{position.department}</p>
                      <div className="flex items-center text-sm text-gray-600 mb-3">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="mr-4">{position.location}</span>
                        <Clock className="w-4 h-4 mr-1" />
                        <span className="mr-4">{position.type}</span>
                        <Briefcase className="w-4 h-4 mr-1" />
                        <span>{position.experience}</span>
                      </div>
                      <p className="text-gray-600 mb-3">{position.description}</p>
>>>>>>> main
                    </div>
                    <div className="flex flex-col md:items-end md:ml-6">
                      <span className="text-lg font-bold text-green-600 mb-3">{position.salary}</span>
                      <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                    </div>
                <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    {position.featured && (
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    )}
                  </div>

<<<<<<< HEAD
                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
=======
                  <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
>>>>>>> main
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                  </div>

<<<<<<< HEAD
=======
                  <p className="text-gray-300 mb-6">{position.description}</p>

                  {position.requirements && (
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-2 text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="flex items-center justify-between">
                    <span className="text-gray-400 text-sm">Posted {position.posted}</span>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-blue-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-xl mb-8 text-blue-100">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Submit Your Resume
            </button>
>>>>>>> main
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Send Your Resume
                </button>
                <button className="border-2 border-white text-white hover:bg-white hover:text-slate-900 font-semibold py-3 px-8 rounded-lg transition-all duration-300">
                  Learn More About Us
                </button>
              </div>
<<<<<<< HEAD
=======
            </div>
>>>>>>> main
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ));
            </div>
          </div>
        </section>

        {/* Benefits List */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Benefits & Perks</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{benefit}</span>
                </div>
<<<<<<< HEAD
              ))}
=======
              ));
>>>>>>> main
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let's start a conversation.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200"
            >
              Get in Touch
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </div>
    </React.Fragment>)
export default CareersPage;