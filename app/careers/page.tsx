'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Award, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead AI solution development and machine learning model implementation.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years AI/ML experience', 'Cloud platforms (AWS, Azure, GCP)'],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work']
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP certifications', '7+ years cloud experience', 'Terraform, Kubernetes'],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work']
    },
    {
      id: 3,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive AI product strategy and roadmap for micro SaaS solutions.',
      requirements: ['Product management experience', 'AI/ML knowledge', 'Agile methodologies'],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work']
    },
    {
      id: 4,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Implement and maintain security solutions for client infrastructure.',
      requirements: ['CISSP, CISM certifications', '3+ years security experience', 'SIEM, SOC knowledge'],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work']
    },
    {
      id: 5,
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Technical sales support for AI and IT solutions.',
      requirements: ['Technical background', 'Sales experience', 'Presentation skills'],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work']
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Automate deployment and infrastructure management processes.',
      requirements: ['Docker, Kubernetes', 'CI/CD pipelines', 'Infrastructure as Code'],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Flexible work']
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    '401k with company matching',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited PTO',
    'Home office stipend',
    'Learning and development opportunities'
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with AI and technology',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Collaboration',
      description: 'We work together to achieve extraordinary results',
      icon: <Users className="w-8 h-8" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      icon: <Award className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group - Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and IT solutions. Explore career opportunities and be part of our innovative team." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, product manager, cybersecurity, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 holographic-text">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us shape the future of AI and IT solutions. Join a team of innovators, problem-solvers, and technology enthusiasts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/careers/apply"
                className="cyber-button inline-flex items-center justify-center"
              >
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="cyber-card hologram-card p-8 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Open Positions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {jobOpenings.map((job) => (
                <div key={job.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <p className="text-cyan-400 font-medium">{job.department}</p>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                      {job.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  
                  <div className="flex items-center space-x-4 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link
                    to={`/careers/${job.id}`}
                    className="text-cyan-400 hover:text-cyan-300 font-medium flex items-center group"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6 neon-text">Why Work With Us?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  We offer competitive benefits and a supportive work environment that encourages growth and innovation.
                </p>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="cyber-card hologram-card p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Ready to Apply?</h3>
                <p className="text-gray-300 mb-6">
                  Don't see a position that matches your skills? We're always looking for talented individuals to join our team.
                </p>
                <div className="space-y-4">
                  <Link
                    to="/careers/apply"
                    className="cyber-button w-full text-center inline-flex items-center justify-center"
                  >
                    Apply Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 w-full text-center block"
                  >
                    Send Resume
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="cyber-card hologram-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Make an Impact?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join us in building the future of AI and IT solutions. Your next career opportunity awaits.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/careers/apply"
                  className="cyber-button inline-flex items-center justify-center"
                >
                  Start Your Application
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/about"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
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