'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, MapPin, Clock, Users, Heart, Zap, Globe, Award } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      posted: '1 week ago',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      posted: '3 days ago',
      description: 'Build responsive and interactive user interfaces using React and modern web technologies.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Manage CI/CD pipelines and ensure reliable deployment of applications.'
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Annual learning budget, conference attendance, and skill development programs'
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Flexible Work',
      description: 'Remote work options, flexible hours, and work-life balance initiatives'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Career Growth',
      description: 'Clear promotion paths, mentorship programs, and leadership opportunities'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and technology. Explore our open positions and benefits." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, frontend developer, DevOps, remote work, tech jobs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of a team that's building the future of AI and technology. 
              We're looking for passionate individuals who want to make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                View Open Positions
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Join Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just building software – we're creating the future of technology.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                  <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find your next opportunity with us
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 group">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm font-medium">
                      {position.type}
                    </span>
                  </div>
                  
                  <p className="text-gray-300 mb-4">
                    {position.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-6">
                    <div className="flex items-center">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.experience}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {position.posted}
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Our Culture
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We believe in creating an environment where everyone can thrive and grow.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Innovation First</h3>
                  <p className="text-gray-300">
                    We encourage creative thinking and experimentation to drive breakthrough solutions.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Collaborative Spirit</h3>
                  <p className="text-gray-300">
                    We work together as one team, supporting each other to achieve common goals.
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">Excellence</h3>
                  <p className="text-gray-300">
                    We strive for the highest quality in everything we do, from code to customer service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let's start a conversation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                Send Your Resume
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;