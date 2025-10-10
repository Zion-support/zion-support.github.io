'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, MapPin, Clock, Users, Zap, Brain, Code, Shield } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'AI Development',
      description: 'Lead development of cutting-edge AI solutions and machine learning models',
      requirements: [
        '5+ years experience in AI/ML',
        'Python, TensorFlow, PyTorch',
        'PhD in Computer Science preferred',
        'Experience with cloud platforms'
      ],
      icon: <Brain className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Full Stack Developer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Software Development',
      description: 'Build scalable web applications and microservices architecture',
      requirements: [
        '3+ years full-stack experience',
        'React, Node.js, TypeScript',
        'Database design experience',
        'Cloud deployment knowledge'
      ],
      icon: <Code className="w-8 h-8 text-green-400" />
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Security',
      description: 'Protect our systems and client data with advanced security measures',
      requirements: [
        '4+ years cybersecurity experience',
        'CISSP or similar certification',
        'Penetration testing skills',
        'Compliance knowledge (SOC 2, HIPAA)'
      ],
      icon: <Shield className="w-8 h-8 text-red-400" />
    },
    {
      title: 'DevOps Engineer',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      department: 'Infrastructure',
      description: 'Automate deployment and manage cloud infrastructure at scale',
      requirements: [
        '3+ years DevOps experience',
        'AWS, Azure, or GCP expertise',
        'Kubernetes, Docker knowledge',
        'CI/CD pipeline experience'
      ],
      icon: <Zap className="w-8 h-8 text-purple-400" />
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses',
      icon: '💰'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance',
      icon: '🏥'
    },
    {
      title: 'Remote Work',
      description: 'Flexible remote work options and modern office spaces',
      icon: '🏠'
    },
    {
      title: 'Learning & Development',
      description: 'Professional development budget and conference attendance',
      icon: '📚'
    },
    {
      title: 'Stock Options',
      description: 'Equity participation in our growing company',
      icon: '📈'
    },
    {
      title: 'Unlimited PTO',
      description: 'Take time off when you need it to recharge',
      icon: '🏖️'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help build the future of AI and IT solutions. Open positions for AI engineers, developers, cybersecurity specialists, and more." />
        <meta name="keywords" content="tech jobs, AI engineer jobs, software developer jobs, cybersecurity jobs, remote jobs, tech careers" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and help build the future of AI and IT solutions" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Help us build the future of AI and IT solutions. We're looking for passionate, 
            innovative individuals who want to make a difference in the technology world.
          </p>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Open Positions</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:border-blue-400/50 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="flex-shrink-0">
                    {position.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-3">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="w-4 h-4" />
                        {position.department}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-sm">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="w-full bg-gradient-to-r from-blue-500 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center gap-2">
                  Apply Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Culture Section */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-white mb-8">Our Culture</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300">
                We encourage experimentation and creative thinking. Every team member has the freedom to propose new ideas and solutions.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Collaborative Environment</h3>
              <p className="text-gray-300">
                We believe in the power of teamwork. Cross-functional collaboration is at the heart of everything we do.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300">
                Technology evolves rapidly, and so do we. We invest in our team's growth through training and development opportunities.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Join Us?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              Don't see a position that fits? We're always looking for talented individuals. 
              Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2">
                View All Positions
                <ArrowRight className="w-4 h-4" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Send Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;