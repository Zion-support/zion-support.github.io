import React from 'react';
import { MapPin, Clock, Users, Zap, Brain, Code, Cloud } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Services',
      location: 'Remote',
      type: 'Full-time',
      icon: Brain,
      description: 'Lead development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Cloud Infrastructure Architect',
      department: 'IT Services',
      location: 'Delaware, USA',
      type: 'Full-time',
      icon: Cloud,
      description: 'Design and implement scalable cloud infrastructure solutions.'
    },
    {
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      icon: Code,
      description: 'Build innovative web applications and microservices.'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Unlimited PTO',
    'Latest technology and tools',
    'Mentorship programs',
    'Career growth opportunities'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Join Our Team
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Build the future of AI and technology with us. We're looking for passionate innovators to join our mission.
          </p>
        </div>

        {/* Company Culture */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
              <p className="text-gray-300">Work on cutting-edge projects that shape the future of technology.</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Collaborative Environment</h3>
              <p className="text-gray-300">Join a team of brilliant minds working together towards common goals.</p>
            </div>
            <div className="text-center">
              <Brain className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
              <p className="text-gray-300">Grow your skills with access to the latest technologies and training.</p>
            </div>
          </div>
        </div>

        {/* Open Positions */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <position.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                    <div className="flex flex-wrap gap-4 mb-3">
                      <span className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                      <span className="text-cyan-400 font-medium">{position.department}</span>
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Benefits */}
        <div className="cyber-card hologram-card p-8 mb-16">
          <h2 className="text-2xl font-bold text-white mb-8 text-center">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Don't See Your Role?</h2>
          <p className="text-gray-300 mb-6">We're always looking for talented individuals. Send us your resume!</p>
          <a 
            href="mailto:careers@ziontechgroup.com"
            className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all"
          >
            Send Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
