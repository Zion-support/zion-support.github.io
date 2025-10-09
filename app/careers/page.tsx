import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Zap, Brain, Code, Shield, ArrowRight, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Expert in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ],
      icon: Brain
    },
    {
      title: 'Full-Stack Developer',
      department: 'IT Services',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Build scalable web applications and microservices for enterprise clients.',
      requirements: [
        '3+ years full-stack development',
        'React, Node.js, TypeScript',
        'Database design experience',
        'API development skills'
      ],
      icon: Code
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Protect our clients\' data and infrastructure with advanced security measures.',
      requirements: [
        '4+ years cybersecurity experience',
        'Security certifications (CISSP, CISM)',
        'Penetration testing skills',
        'Compliance knowledge'
      ],
      icon: Shield
    },
    {
      title: 'Quantum Computing Researcher',
      department: 'Research & Development',
      location: 'Remote / Delaware',
      type: 'Full-time',
      description: 'Pioneer the future of quantum computing applications and algorithms.',
      requirements: [
        'PhD in Physics or Computer Science',
        'Quantum computing experience',
        'Research publication record',
        'Algorithm development skills'
      ],
      icon: Zap
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Cutting-edge technology access',
    'Collaborative team environment',
    'Unlimited PTO policy',
    '401(k) with company matching'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-cyan-500/20">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center space-x-2 text-2xl font-bold text-cyan-400">
              <span className="text-3xl">⚡</span>
              <span>Zion Tech Group</span>
            </Link>
            <div className="hidden lg:flex items-center space-x-8">
              <Link to="/" className="text-white hover:text-cyan-400 transition-colors">Home</Link>
              <Link to="/about" className="text-white hover:text-cyan-400 transition-colors">About</Link>
              <Link to="/services" className="text-white hover:text-cyan-400 transition-colors">Services</Link>
              <Link to="/careers" className="text-cyan-400 font-semibold">Careers</Link>
              <Link to="/contact" className="text-white hover:text-cyan-400 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-cyan-400">Innovation</span> Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of the future of technology. Work with cutting-edge AI, quantum computing, 
            and autonomous systems that are transforming industries worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
            >
              Apply Now
            </Link>
            <Link
              to="#open-positions"
              className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-200"
            >
              View Openings
            </Link>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Why Choose Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Cutting-Edge AI</h3>
              <p className="text-gray-300">Work with the latest AI technologies and machine learning frameworks.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
              <p className="text-gray-300">Collaborate with industry leaders and top-tier professionals.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Innovation Focus</h3>
              <p className="text-gray-300">Drive breakthrough innovations in quantum computing and autonomous systems.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">Remote First</h3>
              <p className="text-gray-300">Work from anywhere with flexible schedules and remote-first culture.</p>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Employee Benefits
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">
            Open Positions
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <position.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                      <p className="text-cyan-400">{position.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-300 text-sm mb-1">
                      <MapPin className="w-4 h-4 mr-1" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-300 text-sm">
                      <Clock className="w-4 h-4 mr-1" />
                      {position.type}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-white font-semibold mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-gray-300 text-sm flex items-center">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2"></span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  to="/contact"
                  className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200"
                >
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't See Your Perfect Role?
          </h2>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let us know 
            how you can contribute to our mission of advancing technology.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-200 inline-flex items-center"
          >
            Send Your Resume
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </main>
    </div>
  );
};

export default CareersPage;