'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Full Stack Developer',
      location: 'Middletown, DE',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Build scalable web applications and APIs using modern technologies.'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote',
      type: 'Full-time',
      department: 'Engineering',
      description: 'Manage cloud infrastructure and deployment pipelines for our AI solutions.'
    },
    {
      title: 'AI Product Manager',
      location: 'Middletown, DE',
      type: 'Full-time',
      department: 'Product',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Unlimited PTO',
    'Modern equipment and tools'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help us build the future of AI and IT solutions. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, Zion Tech Group, AI engineer, developer, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Help us build the future of AI and IT solutions. We're looking for passionate individuals to join our growing team.
              </p>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                    <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center space-x-4 mb-4 text-gray-300">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      <span>{position.department}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                    <span className="mr-2">Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                We're always looking for talented individuals. Send us your resume and let's talk about opportunities.
              </p>
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Send Resume
              </button>
            </div>
          </div>
        </section>
      </div>
      
      <Footer />
    </>
  );
};

export default CareersPage;