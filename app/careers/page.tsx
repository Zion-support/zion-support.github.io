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
'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Users, MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react'

const CareersPage: React.FC = () => {
  const jobOpenings = [
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
    {
      id: '1',
      title: 'Senior AI Engineer',
<<<<<<< HEAD
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
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, or GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of microservices architecture',
        'Certifications in cloud platforms preferred'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible PTO policy'
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
        'Knowledge of security frameworks (NIST, ISO 27001)',
        'Experience with penetration testing',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Professional development opportunities',
        'Remote work options',
        'Health and wellness benefits'
      ],
      posted: '3 days ago',
      featured: false
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Streamline development processes and improve deployment efficiency.',
      requirements: [
        '3+ years experience in DevOps practices',
        'Experience with CI/CD pipelines',
        'Knowledge of infrastructure as code',
        'Experience with monitoring and logging tools',
        'Strong scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive salary: $90,000 - $130,000',
        'Stock options',
        'Flexible work arrangements',
        'Learning and development budget'
      ],
      posted: '5 days ago',
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex data sets to drive business decisions.',
      requirements: [
        '4+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical knowledge',
        'Experience with data visualization tools'
      ],
      benefits: [
        'Competitive salary: $110,000 - $160,000',
        'Remote work flexibility',
        'Professional development budget',
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
    }
  ];

  const benefits = [
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
    }
  ]

  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited PTO',
    '401(k) matching',
    'Gym membership',
    'Team building events'
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
      </section>

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
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {jobOpenings.map((job, index) => (
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
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

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
                      </div>
                      <p className="text-gray-600 mb-4">{position.description}</p>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className="text-sm text-gray-500">Posted {position.posted}</span>
                      <Link
                        to={`/careers/${position.id}`}
                        className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center"
                      >
                        Apply Now
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
>>>>>>> origin/main

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
            </div>
          </div>
=======
>>>>>>> cursor/website-audit-and-update-with-deployment-acbe
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
            Send Resume
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage