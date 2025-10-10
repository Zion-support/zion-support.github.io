'use client';
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead the development of AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      location: 'Delaware, USA',
      type: 'Full-time',
      department: 'Infrastructure',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        '7+ years cloud experience',
        'AWS/Azure/GCP certifications',
        'Experience with DevOps practices',
        'Strong communication skills'
      ]
    },
    {
      id: 3,
      title: 'Frontend Developer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build modern, responsive web applications using React and TypeScript.',
      requirements: [
        '3+ years React experience',
        'Proficiency in TypeScript',
        'Experience with modern CSS frameworks',
        'Portfolio of previous work'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Flexible work arrangements',
    'Professional development budget',
    '401(k) with company matching',
    'Unlimited PTO',
    'Home office stipend',
    'Learning and development opportunities'
  ];

  return (
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and IT solutions. 
            We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Why Work With Us */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Users,
                title: 'Collaborative Culture',
                description: 'Work with talented individuals in a supportive environment.'
              },
              {
                icon: ArrowRight,
                title: 'Growth Opportunities',
                description: 'Advance your career with continuous learning and development.'
              },
              {
                icon: CheckCircle,
                title: 'Impact',
                description: 'Make a real difference in how businesses operate and grow.'
              },
              {
                icon: Clock,
                title: 'Work-Life Balance',
                description: 'Flexible schedules and remote work options available.'
              }
            ].map((benefit, index) => (
              <div key={index} className="text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-slate-700/50 p-8 rounded-lg mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-8">
            Benefits & Perks
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center text-gray-300">
                <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                {benefit}
              </div>
            ))}
          </div>
        </div>

        {/* Job Openings */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h2>
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className="bg-slate-700/50 p-6 rounded-lg hover:bg-slate-700/70 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        {job.department}
                      </div>
                    </div>
                  </div>
                  <Link
                    to="/contact"
                    className="mt-4 md:mt-0 bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-semibold transition-colors inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
                <p className="text-gray-300 mb-4">{job.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {job.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Don't See a Role That Fits?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 inline-flex items-center"
          >
            Send Us Your Resume
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;