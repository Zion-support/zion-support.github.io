'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight } from 'lucide-react';

interface JobOpening {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const jobOpenings: JobOpening[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Comprehensive health insurance',
        '401k with company matching',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      featured: true
    },
    {
      id: '2',
      title: 'Quantum Computing Specialist',
      department: 'Research & Development',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Research and develop quantum computing algorithms and applications for business optimization.',
      requirements: [
        'PhD in Physics, Computer Science, or related field',
        '3+ years quantum computing experience',
        'Knowledge of quantum algorithms and circuits',
        'Experience with Qiskit, Cirq, or similar frameworks',
        'Strong mathematical background'
      ],
      benefits: [
        'Competitive salary ($100k - $150k)',
        'Research budget and conference attendance',
        'Health and dental insurance',
        'Stock options',
        'Collaboration with leading researchers'
      ],
      featured: true
    },
    {
      id: '3',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable infrastructure for AI and IT services with focus on automation and reliability.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years DevOps experience',
        'Experience with Kubernetes, Docker, CI/CD',
        'Knowledge of cloud platforms and monitoring tools',
        'Scripting skills (Python, Bash, PowerShell)'
      ],
      benefits: [
        'Competitive salary ($90k - $130k)',
        'Health insurance and 401k',
        'Remote work flexibility',
        'Learning and development opportunities',
        'Modern tech stack and tools'
      ],
      featured: false
    },
    {
      id: '4',
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and development for AI-powered solutions and micro SAAS platforms.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Agile/Scrum methodology experience'
      ],
      benefits: [
        'Competitive salary ($110k - $160k)',
        'Health and dental insurance',
        '401k with company matching',
        'Product management training',
        'Opportunity to shape AI products'
      ],
      featured: false
    },
    {
      id: '5',
      title: 'Cybersecurity Analyst',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Protect our systems and client data through advanced security monitoring and threat analysis.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '2+ years cybersecurity experience',
        'Knowledge of security frameworks and tools',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary ($80k - $120k)',
        'Health insurance and 401k',
        'Security training and certifications',
        'Flexible work arrangements',
        'Cutting-edge security tools'
      ],
      featured: false
    },
    {
      id: '6',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Create beautiful and responsive user interfaces for our AI and IT service platforms.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '2+ years frontend development experience',
        'Proficiency in React, TypeScript, CSS',
        'Experience with modern build tools',
        'Strong UI/UX design sense'
      ],
      benefits: [
        'Competitive salary ($70k - $110k)',
        'Health insurance and 401k',
        'Remote work flexibility',
        'Design and development tools',
        'Collaborative team environment'
      ],
      featured: false
    }
  ];

  const featuredJobs = jobOpenings.filter(job => job.featured);
  const regularJobs = jobOpenings.filter(job => !job.featured);

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: Star,
      title: 'Professional Growth',
      description: 'Learning budget, conference attendance, and mentorship programs'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with brilliant minds in a supportive and inclusive environment'
    },
    {
      icon: Award,
      title: 'Recognition & Rewards',
      description: 'Competitive compensation, bonuses, and recognition for outstanding work'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts building the future" />
        <meta name="keywords" content="AI careers, tech jobs, engineering positions, remote work" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team of AI and technology experts building the future" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of AI and technology. Join our team of innovators building solutions that transform businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#open-positions"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Company Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {companyBenefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 text-center">
                  <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section id="open-positions" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Positions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {featuredJobs.map(job => (
                <div key={job.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                      </div>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {job.experience}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{job.description}</p>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-400">
                      {job.benefits.length} benefits included
                    </div>
                    <Link
                      to={`/careers/${job.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* All Jobs */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">All Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularJobs.map(job => (
                <div key={job.id} className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex items-center gap-3 text-sm text-gray-400 mb-2">
                        <span className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                      </div>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded text-xs font-medium">
                      {job.experience}
                    </span>
                  </div>

                  <p className="text-gray-300 text-sm mb-4">{job.description}</p>

                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      {job.type} • {job.benefits.length} benefits
                    </div>
                    <Link
                      to={`/careers/${job.id}`}
                      className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-white mb-4">Don't See the Right Role?</h2>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-600 transition-all duration-300"
              >
                Send Your Resume
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;