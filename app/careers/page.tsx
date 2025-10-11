'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Zap, Shield, Brain, Globe, Settings, BarChart } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Build cutting-edge AI solutions and machine learning models.',
      requirements: ['Python, TensorFlow', '3+ years experience', 'PhD in AI/ML preferred'],
      icon: <Brain className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Cloud Architect',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: ['AWS, Azure, GCP', '5+ years experience', 'Certifications preferred'],
      icon: <Globe className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      description: 'Automate deployment and improve system reliability.',
      requirements: ['Docker, Kubernetes', '4+ years experience', 'CI/CD expertise'],
      icon: <Settings className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Data Scientist',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Extract insights from data and build predictive models.',
      requirements: ['Python, R, SQL', '3+ years experience', 'Statistics background'],
      icon: <BarChart className="w-8 h-8 text-orange-400" />
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited vacation policy',
    'Top-tier equipment and tools'
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team at Zion Tech Group. Explore career opportunities in AI, cloud computing, and technology innovation." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, DevOps, data scientist, Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Build the future of AI and technology with us. 
              Join a team of passionate innovators and make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="border border-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-all duration-300">
                Learn About Us
              </button>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore exciting career opportunities in AI and technology
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div className="mb-4">
                      {position.icon}
                    </div>
                    <div className="text-right">
                      <span className="inline-block bg-blue-500/20 text-blue-400 px-3 py-1 rounded-full text-sm">
                        {position.type}
                      </span>
                      <p className="text-gray-400 text-sm mt-1">{position.location}</p>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-3">
                    {position.title}
                  </h3>
                  <p className="text-gray-300 mb-6">
                    {position.description}
                  </p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Join Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a great work environment
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700">
                  <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Make an Impact?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join our team and help shape the future of AI and technology
            </p>
            <button className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
              View All Positions
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;