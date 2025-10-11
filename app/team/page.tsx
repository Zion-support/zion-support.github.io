'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe, Users, Code, Database } from 'lucide-react';

const TeamPage: React.FC = () => {
  const teamMembers = [
    {
      name: 'Kleber Santos',
      role: 'CEO & Founder',
      description: 'Technology visionary with 15+ years of experience in AI and software development.',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      name: 'AI Development Team',
      role: 'AI Engineers',
      description: 'Expert machine learning engineers specializing in AI solutions and automation.',
      icon: <Code className="w-8 h-8 text-cyan-400" />
    },
    {
      name: 'IT Solutions Team',
      role: 'IT Specialists',
      description: 'Experienced IT professionals providing comprehensive technology solutions.',
      icon: <Database className="w-8 h-8 text-cyan-400" />
    },
    {
      name: 'Support Team',
      role: 'Customer Success',
      description: 'Dedicated support team ensuring exceptional customer experience.',
      icon: <Users className="w-8 h-8 text-cyan-400" />
    }
  ];

  const values = [
    'Innovation and cutting-edge technology',
    'Customer-centric approach',
    'Continuous learning and improvement',
    'Collaborative and inclusive culture'
  ];

  return (
    <>
      <Helmet>
        <title>Our Team | Zion Tech Group</title>
        <meta name="description" content="Meet the expert team behind Zion Tech Group. Experienced professionals in AI, IT solutions, and customer success dedicated to your success." />
        <meta name="keywords" content="team, experts, AI engineers, IT specialists, customer success, Zion Tech Group team" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our Expert
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Meet the talented professionals behind Zion Tech Group. 
              Our diverse team of experts is dedicated to delivering exceptional AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Meet Our Team
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Experienced professionals committed to delivering innovative solutions and exceptional service.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-lg rounded-lg p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 text-center">
                  <div className="mb-4 flex justify-center">
                    {member.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {member.name}
                  </h3>
                  <p className="text-cyan-400 font-medium mb-3">
                    {member.role}
                  </p>
                  <p className="text-gray-300 text-sm">
                    {member.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                The principles that guide our team and drive our commitment to excellence.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300 text-lg">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact our team to discuss your project requirements and discover how we can help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default TeamPage;