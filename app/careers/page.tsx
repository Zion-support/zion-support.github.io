'use client'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react'

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
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Infrastructure Specialist',
      department: 'Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for our growing client base.',
      requirements: [
        '3+ years experience with cloud platforms',
        'Expertise in AWS, Azure, or GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Knowledge of infrastructure as code',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-12',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Protect our clients\' digital assets by implementing and monitoring security measures.',
      requirements: [
        '2+ years experience in cybersecurity',
        'Knowledge of security frameworks (NIST, ISO 27001)',
        'Experience with security tools and technologies',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Strong analytical and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-10',
      featured: true
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Streamline our development and deployment processes with modern DevOps practices.',
      requirements: [
        '4+ years experience in DevOps',
        'Expertise in CI/CD pipelines',
        'Experience with automation tools',
        'Knowledge of monitoring and logging',
        'Strong scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Flexible work arrangements',
        'Health, dental, and vision insurance',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-08',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual budget for courses, conferences, and professional development opportunities.'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.'
    },
    {
      icon: Award,
      title: 'Career Growth',
      description: 'Clear career paths and opportunities for advancement within the company.'
    }
  ];

  const culture = [
    'Innovation-driven environment',
    'Collaborative team culture',
    'Diverse and inclusive workplace',
    'Cutting-edge technology projects',
    'Mentorship opportunities',
    'Regular team events and activities'
  ];

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
              Build the future of AI and IT solutions with a team of passionate innovators and problem-solvers.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Our Culture</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {culture.map((item, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <h3 className="text-2xl font-bold text-white mr-4">{position.title}</h3>
                      {position.featured && (
                        <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-2" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>
                  <div className="lg:ml-6">
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and let's start a conversation.
          </p>
          <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 flex items-center mx-auto">
            <Heart className="w-5 h-5 mr-2" />
            Send Your Resume
          </button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

export default CareersPage