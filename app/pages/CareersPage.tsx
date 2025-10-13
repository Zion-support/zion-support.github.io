import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, Heart, Zap, Target } from 'lucide-react';

const CareersPage: React.FC = () => {
  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, mental health support, and wellness programs.'
    },
    {
      icon: Zap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities, conferences, and professional development budget.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in an inclusive and innovative environment.'
    },
    {
      icon: Target,
      title: 'Career Growth',
      description: 'Clear career paths, mentorship programs, and opportunities for advancement.'
    }
  ];

  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead AI model development and implementation for enterprise clients.'
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions.'
    },
    {
      title: 'Frontend Developer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build modern, responsive web applications using React and TypeScript.'
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Manage CI/CD pipelines and infrastructure automation.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative professionals working on cutting-edge AI and IT solutions. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, frontend developer, DevOps" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of technology and making a real impact
          </p>
        </div>

        {/* Benefits Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {positions.map((position, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                  <div className="mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-400 mb-2">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </div>
                    </div>
                    <p className="text-gray-300">{position.description}</p>
                  </div>
                  <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">Don't See Your Role?</h2>
            <p className="text-gray-300 mb-6">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
            </p>
            <button className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-600 transition-all duration-300">
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;