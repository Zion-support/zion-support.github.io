'use client';
import React from 'react';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary ($120K - $180K)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-15',
      slug: 'senior-ai-engineer'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with DevOps and CI/CD pipelines',
        'Strong leadership and client-facing skills'
      ],
      benefits: [
        'Competitive salary ($130K - $200K)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-12',
      slug: 'cloud-solutions-architect'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary ($100K - $150K)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-10',
      slug: 'cybersecurity-specialist'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex data sets to drive business decisions and AI model development.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years experience in data science',
        'Expertise in Python, R, SQL',
        'Experience with machine learning frameworks',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary ($90K - $140K)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-08',
      slug: 'data-scientist'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful, responsive user interfaces for our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in frontend development',
        'Expertise in React, TypeScript, CSS',
        'Experience with modern build tools',
        'Strong UI/UX design skills'
      ],
      benefits: [
        'Competitive salary ($80K - $120K)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-05',
      slug: 'frontend-developer'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Streamline our development and deployment processes with automation and infrastructure as code.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in DevOps',
        'Expertise in Docker, Kubernetes, Terraform',
        'Experience with CI/CD pipelines',
        'Strong scripting and automation skills'
      ],
      benefits: [
        'Competitive salary ($95K - $145K)',
        'Health, dental, and vision insurance',
        '401(k) with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-03',
      slug: 'devops-engineer'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and equity options'
    },
    {
      icon: Users,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance'
    },
    {
      icon: Briefcase,
      title: 'Professional Growth',
      description: 'Learning budget, conference attendance, and mentorship programs'
    },
    {
      icon: CheckCircle,
      title: 'Comprehensive Benefits',
      description: 'Health insurance, 401(k) matching, and unlimited PTO'
    }
  ];

  const culture = [
    'Innovation-driven environment',
    'Collaborative team culture',
    'Continuous learning opportunities',
    'Cutting-edge technology projects',
    'Work-life balance focus',
    'Diverse and inclusive workplace'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. 
              Work on cutting-edge projects with industry experts and grow your career with us.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we provide a platform for growth, innovation, and impact
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore current opportunities and find your next career move
            </p>
          </div>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="cyber-card p-8 group hover:scale-105 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
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
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>
                  <div className="lg:ml-8 lg:text-right">
                    <div className="text-sm text-gray-400 mb-2">Posted: {new Date(position.posted).toLocaleDateString()}</div>
                    <a
                      href={`/careers/${position.slug}`}
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                    >
                      <span>View Details</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <div className="space-y-2">
                      {position.requirements.slice(0, 3).map((requirement, reqIndex) => (
                        <div key={reqIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{requirement}</span>
                        </div>
                      ))}
                      {position.requirements.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{position.requirements.length - 3} more requirements
                        </div>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <div className="space-y-2">
                      {position.benefits.slice(0, 3).map((benefit, benIndex) => (
                        <div key={benIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-sm text-gray-300">{benefit}</span>
                        </div>
                      ))}
                      {position.benefits.length > 3 && (
                        <div className="text-sm text-cyan-400">
                          +{position.benefits.length - 3} more benefits
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Culture</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We believe in creating an environment where everyone can thrive and contribute to our mission
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {culture.map((item, index) => (
              <div key={index} className="cyber-card p-6 text-center group hover:scale-105 transition-transform">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <CheckCircle className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="/contact"
              className="bg-white text-cyan-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2 group"
            >
              <span>Send Your Resume</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="mailto:careers@ziontechgroup.com"
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
            >
              careers@ziontechgroup.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;