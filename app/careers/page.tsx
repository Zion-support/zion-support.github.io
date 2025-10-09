import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Briefcase, Users, MapPin, Clock, Star, CheckCircle, ArrowRight, Brain, Code, Cloud, Shield } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Services',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      icon: Brain,
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'IT Services',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      icon: Code,
      description: 'Build scalable web applications and microservices for enterprise clients.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of DevOps and CI/CD practices'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'IT Infrastructure',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      icon: Cloud,
      description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with Kubernetes and Docker',
        'Strong understanding of security best practices'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Cybersecurity',
      location: 'Remote / Delaware, USA',
      type: 'Full-time',
      icon: Shield,
      description: 'Protect our clients data and infrastructure from cyber threats.',
      requirements: [
        '4+ years cybersecurity experience',
        'CISSP, CISM, or similar certifications',
        'Experience with SIEM tools and incident response',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: '🏖️',
      title: 'Flexible PTO',
      description: 'Unlimited vacation days and flexible work arrangements'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance'
    },
    {
      icon: '🏠',
      title: 'Remote Work',
      description: 'Work from anywhere with home office stipend'
    },
    {
      icon: '🚀',
      title: 'Career Growth',
      description: 'Clear promotion paths and mentorship programs'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Build the future of AI and IT solutions with a team of passionate innovators. 
            We're looking for talented individuals who want to make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="cyber-button inline-flex items-center"
            >
              View Open Positions
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Contact Us
            </a>
          </div>
        </section>

        {/* Company Culture */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Work at Zion Tech Group?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center">
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Open Positions
          </h2>
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div key={index} className="cyber-card hologram-card p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                      <position.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{position.title}</h3>
                      <p className="text-gray-400">{position.department}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-gray-300 mb-1">
                      <MapPin className="w-4 h-4 mr-2" />
                      {position.location}
                    </div>
                    <div className="flex items-center text-gray-300">
                      <Clock className="w-4 h-4 mr-2" />
                      {position.type}
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="mb-4">
                  <h4 className="text-lg font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {position.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex gap-4">
                  <a
                    href="/contact"
                    className="cyber-button inline-flex items-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                  <a
                    href="/contact"
                    className="text-cyan-400 hover:text-cyan-300 font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Company Stats */}
        <section className="mb-16">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
              Our Team by the Numbers
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50+</div>
                <div className="text-gray-300">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">15+</div>
                <div className="text-gray-300">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300">Employee Satisfaction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">4.8/5</div>
                <div className="text-gray-300">Glassdoor Rating</div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center">
          <div className="cyber-card hologram-card p-8">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Don't See Your Dream Role?
            </h2>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              We're always looking for exceptional talent. Send us your resume and tell us 
              how you'd like to contribute to our mission.
            </p>
            <a
              href="/contact"
              className="cyber-button inline-flex items-center"
            >
              Send Your Resume
              <ArrowRight className="w-4 h-4 ml-2" />
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;
