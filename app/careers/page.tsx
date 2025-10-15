import React, { Suspense } from 'react'
import { Helmet } from 'react-helmet-async'



const Careers Page: React.FC = () => {
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const CareersPage: React.FC = () => {
  const services = [
    {
      title: 'Expert Careers Solutions',
      description: 'Professional careers services tailored to your needs.'
    },
    {
      title: 'Custom Implementation',
      description: 'Tailored careers implementations for your specific requirements.'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock support for all your careers needs.'
    }
  ];

  return (
    <>
      <div>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name ="description" content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, and autonomous systems. Explore open positions and career opportunities." />
        <meta name ="keywords" content="tech careers, AI jobs, quantum computing jobs, software engineering, remote work, tech company" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-white mb-8">Careers</h1>
            <p className="text-xl text-gray-300 mb-8">
              Professional Careers solutions and services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white font-semibold py-4 px-8 rounded-xl transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-white/30 text-white hover:bg-white/10 font-semibold py-4 px-8 rounded-xl transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">15+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-pink-400 mb-2">100%</div>
                <div className="text-gray-300">Remote Friendly</div>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position) => (
                <div key={position.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}>
                  {position.featured && (
                    <div className="flex items-center gap-2 mb-4">
                      <Star className="w-5 h-5 text-yellow-400 fill-current" />
                      <span className="text-yellow-400 text-sm font-semibold">Featured Position</span>
                    </div>
                  )}

                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>Posted {position.posted}</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded-lg hover:from-purple-600 hover:to-cyan-600 transition-all duration-300 font-medium">
                      Apply Now
                    </button>
                    <button className="px-6 py-2 border border-white/30 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Join Zion Tech Group?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Our Culture</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We foster an environment of innovation, collaboration, and continuous learning. 
                  Our team is diverse, inclusive, and passionate about pushing the boundaries of technology.
                </p>
                </div>
        </div>
              <div className="bg-green-50 border border-green-200rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-green-900mb-2">
                  Custom Implementation
                <p className="text-green-700">
                  Tailored implementations for your specific requirements.
              </p><div className="bg-purple-50 border border-purple-200rounded-lgp-6">
                <h3 className="text-lg font-semiboldtext-purple-900mb-2">
                  24/7 Support
                <p className="text-purple-700">Round-the-clock support for all your needs.
              </p>
              </div>
          </div>
      </div>
    </div> 
          
        </div>
      </div>
</>
  );
};

export default CareersPage;
<<<<<<< HEAD
=======

>>>>>>> e147079fabc5ed4c39aa0de061f6683aa394ec59
