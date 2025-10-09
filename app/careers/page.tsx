import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Clock, Users, Award, ArrowRight, Brain, Code, Cloud, Shield } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      experience: '5+ years',
      icon: Brain,
      description: 'Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science, AI, or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong background in machine learning and deep learning',
        'Experience with MLOps and model deployment'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'IT Solutions',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      experience: '3+ years',
      icon: Code,
      description: 'Build scalable web applications and microservices using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with React, Node.js, TypeScript',
        'Experience with cloud platforms and containerization',
        'Knowledge of database design and optimization',
        'Experience with CI/CD pipelines'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      experience: '7+ years',
      icon: Cloud,
      description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience with cloud platforms (AWS, Azure, GCP)',
        'Certifications in cloud architecture (AWS Solutions Architect, etc.)',
        'Experience with infrastructure as code (Terraform, CloudFormation)',
        'Strong understanding of security and compliance'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      experience: '4+ years',
      icon: Shield,
      description: 'Protect our clients\' data and systems with advanced security measures.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications (CISSP, CISM, CEH, etc.)',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses',
      icon: Award
    },
    {
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours',
      icon: Clock
    },
    {
      title: 'Growth Opportunities',
      description: 'Continuous learning and career advancement',
      icon: Users
    },
    {
      title: 'Great Location',
      description: 'Based in Delaware with remote options',
      icon: MapPin
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of AI and IT solutions with a team of passionate innovators. 
            We're looking for talented individuals who want to make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="cyber-button inline-flex items-center"
            >
              Apply Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
            <Link
              to="/about"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Learn About Us
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
            <div className="text-gray-300">Team Members</div>
          </div>
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-purple-400 mb-2">500+</div>
            <div className="text-gray-300">Projects Completed</div>
          </div>
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300">Client Satisfaction</div>
          </div>
          <div className="text-center cyber-card p-6">
            <div className="text-3xl font-bold text-orange-400 mb-2">24/7</div>
            <div className="text-gray-300">Support Available</div>
          </div>
        </div>

        {/* Benefits */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Why Work With Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center">
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Open Positions
          </h2>
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="cyber-card p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <position.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                      <p className="text-gray-300">{position.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-cyan-400 font-semibold">{position.location}</div>
                    <div className="text-gray-300 text-sm">{position.type} • {position.experience}</div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-start space-x-2">
                        <span className="text-cyan-400 mt-1">•</span>
                        <span className="text-gray-300">{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="cyber-button inline-flex items-center justify-center"
                  >
                    Apply for this position
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <button className="px-6 py-3 border border-cyan-400 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-200">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center cyber-card p-12">
          <h2 className="text-3xl font-bold text-white mb-6 neon-text">
            Don't See Your Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for exceptional talent. Send us your resume and let us know how you can contribute to our mission.
          </p>
          <Link
            to="/contact"
            className="cyber-button inline-flex items-center"
          >
            Send Your Resume
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </section>
      </section>
    </div>
  );
};

export default CareersPage;