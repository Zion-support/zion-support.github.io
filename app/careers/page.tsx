'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MapPin, Clock, ArrowRight, CheckCircle, Heart, Zap, Shield, Globe, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / New York',
      type: 'Full-time',
      department: 'AI & Machine Learning',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['5+ years AI/ML experience', 'Python, TensorFlow, PyTorch', 'PhD in Computer Science or related field']
    },
    {
      title: 'Blockchain Developer',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      department: 'Blockchain',
      description: 'Build and maintain blockchain applications and smart contracts.',
      requirements: ['3+ years blockchain experience', 'Solidity, Web3.js', 'DeFi protocol knowledge']
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote / Austin',
      type: 'Full-time',
      department: 'Cloud Services',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: ['7+ years cloud experience', 'AWS, Azure, GCP', 'Kubernetes, Docker']
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Unlimited PTO',
    '401(k) with company matching',
    'Top-tier equipment and tools',
    'Team building events'
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and build the future of technology. Explore career opportunities in AI, blockchain, and cloud computing." />
        <meta name="keywords" content="careers, jobs, AI engineer, blockchain developer, cloud architect, Zion Tech Group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of technology with us. We're looking for passionate individuals who want to make a difference in AI, blockchain, and cloud computing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                View Open Positions
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Heart className="mr-2 h-5 w-5" />
                Why Join Us
              </button>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex items-center space-x-4 text-gray-300">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <span className="text-purple-400">{job.department}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-purple-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center">
                      Apply Now
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div>
                    <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-purple-400" />
                  </div>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-blue-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">We encourage creative thinking and cutting-edge solutions</p>
              </div>
              <div className="text-center">
                <div className="bg-green-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-green-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Trust</h3>
                <p className="text-gray-300">We build trust through transparency and collaboration</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-purple-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Impact</h3>
                <p className="text-gray-300">We focus on making a positive impact on the world</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-purple-800/20">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Don't see a position that fits? We're always looking for talented individuals. Send us your resume!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Target className="mr-2 h-5 w-5" />
                Apply Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Users className="mr-2 h-5 w-5" />
                Contact Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;