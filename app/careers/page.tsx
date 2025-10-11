'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps practices'
      ]
    },
    {
      id: 3,
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement AI solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of experience in AI/ML architecture',
        'Experience with enterprise AI platforms',
        'Strong client-facing and presentation skills',
        'Knowledge of AI ethics and compliance'
      ]
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure and deployment pipelines for AI applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Proficiency in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging tools'
      ]
    },
    {
      id: 5,
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote',
      type: 'Full-time',
      experience: 'PhD + 2 years',
      description: 'Conduct research in advanced AI technologies and publish findings.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '2+ years of post-PhD research experience',
        'Strong publication record in AI/ML conferences',
        'Experience with deep learning frameworks',
        'Excellent written and verbal communication skills'
      ]
    },
    {
      id: 6,
      title: 'Technical Writer',
      department: 'Marketing',
      location: 'Remote',
      type: 'Part-time',
      experience: '2+ years',
      description: 'Create technical documentation and content for AI products and services.',
      requirements: [
        'Bachelor\'s degree in Technical Writing or related field',
        '2+ years of technical writing experience',
        'Understanding of AI/ML concepts',
        'Proficiency in documentation tools',
        'Strong attention to detail and organization'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited PTO',
    'Remote work options',
    '401(k) with company matching',
    'Stock options',
    'Learning and development opportunities',
    'Team building events'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      {/* Hero Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of AI and IT. Join our team of innovators and help shape the next generation of technology.
            </p>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-lg text-gray-300">
              We offer more than just a job - we offer a career in cutting-edge technology
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Innovative Culture</h3>
              <p className="text-gray-300">
                Work with the latest AI technologies and contribute to groundbreaking projects.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Flexible Work</h3>
              <p className="text-gray-300">
                Remote work options and flexible hours to support your work-life balance.
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-4">Growth Opportunities</h3>
              <p className="text-gray-300">
                Continuous learning and career development opportunities in AI and IT.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-lg text-gray-300">
              Explore our current job openings and find your perfect role
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div
                key={job.id}
                className="bg-slate-800/50 backdrop-blur-sm rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </span>
                      <span>{job.experience}</span>
                      <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-xs">
                        {job.department}
                      </span>
                    </div>
                  </div>
                  <Link
                    to={`/careers/${job.id}`}
                    className="mt-4 lg:mt-0 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div>
                  <h4 className="text-sm font-medium text-cyan-400 mb-2">Key Requirements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {job.requirements.slice(0, 4).map((requirement, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">
              Benefits & Perks
            </h2>
            <p className="text-lg text-gray-300">
              We offer comprehensive benefits to support our team members
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="flex items-center space-x-3 bg-slate-800/50 backdrop-blur-sm rounded-lg p-4 border border-cyan-500/20"
              >
                <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See Your Role?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center"
            >
              Send Your Resume
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 inline-flex items-center justify-center"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;
