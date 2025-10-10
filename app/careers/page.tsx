'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'AI & Machine Learning',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Cloud Infrastructure',
      description: 'Design and implement scalable cloud solutions for enterprise clients.'
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Security',
      description: 'Protect our clients\' digital assets with advanced security solutions.'
    },
    {
      title: 'Full Stack Developer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Software Development',
      description: 'Build modern web applications and microservices using latest technologies.'
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
    'Team building events'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | AI & IT Solutions</title>
        <meta name="description" content="Join our team of experts working on cutting-edge AI and IT solutions. Explore career opportunities at Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <div>
              <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Users className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Innovative Projects</h3>
                    <p className="text-gray-300">Work on cutting-edge AI and IT solutions that make a real impact.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <Clock className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Flexible Work</h3>
                    <p className="text-gray-300">Remote-first culture with flexible hours and work arrangements.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-4 mt-1">
                    <MapPin className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">Growth Opportunities</h3>
                    <p className="text-gray-300">Continuous learning and career development opportunities.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6">Benefits & Perks</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center text-gray-300">
                    <ArrowRight className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full">
                          {job.department}
                        </span>
                      </div>
                      <p className="text-gray-300">{job.description}</p>
                    </div>
                    <button className="mt-4 md:mt-0 md:ml-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                      Apply Now
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Don't See a Perfect Match?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                Send Resume
              </a>
              <a
                href="/contact"
                className="px-8 py-4 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;