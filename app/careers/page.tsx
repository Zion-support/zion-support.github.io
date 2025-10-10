'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Star, Users, MapPin, Clock } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead AI model development and implementation for enterprise clients',
      requirements: [
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and deployment pipelines',
      requirements: [
        '3+ years DevOps experience',
        'AWS/Azure/GCP expertise',
        'Docker and Kubernetes knowledge',
        'CI/CD pipeline experience'
      ]
    },
    {
      title: 'AI Solutions Architect',
      department: 'Solutions',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement AI solutions for enterprise clients',
      requirements: [
        '7+ years in AI/ML solutions',
        'Strong communication skills',
        'Experience with enterprise clients',
        'Technical leadership experience'
      ]
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work',
    'Professional development budget',
    'Unlimited PTO',
    'Latest technology equipment',
    'Team building events',
    'Career growth opportunities'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, DevOps, technology careers, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Help us build the future of AI and technology. Join a team of passionate innovators working on cutting-edge solutions.
            </p>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore exciting career opportunities and help shape the future of technology
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex items-center gap-4 text-sm text-gray-400">
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {position.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors font-medium">
                    Apply Now
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive work environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300 font-medium">{benefit}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
              </p>
              <button className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105">
                Send Resume
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;