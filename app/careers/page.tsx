'use client';

import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Users, MapPin, Clock, CheckCircle, ArrowRight, Award, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead AI solution development and implementation using cutting-edge technologies.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ]
    },
    {
      title: 'DevOps Engineer',
      location: 'Delaware, USA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain CI/CD pipelines and infrastructure for scalable applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years DevOps experience',
        'Expertise in Docker, Kubernetes, Terraform',
        'Experience with monitoring and logging tools'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement cloud-based solutions for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science',
        '7+ years cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with microservices architecture'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      location: 'Delaware, USA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect and secure our clients digital assets with advanced security measures.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years cybersecurity experience',
        'CISSP, CISM, or similar certifications',
        'Experience with security frameworks and compliance'
      ]
    },
    {
      title: 'AI Research Scientist',
      location: 'Remote',
      type: 'Full-time',
      experience: 'PhD + 2+ years',
      description: 'Conduct cutting-edge research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in AI/ML or related field',
        '2+ years research experience',
        'Published papers in top-tier conferences',
        'Experience with large language models'
      ]
    },
    {
      title: 'Full Stack Developer',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop end-to-end web applications using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years full-stack development experience',
        'Expertise in React, Node.js, TypeScript',
        'Experience with databases and APIs'
      ]
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Competitive Salary',
      description: 'Above-market compensation packages'
    },
    {
      icon: Users,
      title: 'Health Insurance',
      description: 'Comprehensive medical, dental, and vision coverage'
    },
    {
      icon: MapPin,
      title: 'Remote Work',
      description: 'Flexible remote work options'
    },
    {
      icon: Zap,
      title: 'Professional Development',
      description: 'Learning budget and conference attendance'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible scheduling'
    },
    {
      icon: CheckCircle,
      title: 'Stock Options',
      description: 'Equity participation in company growth'
    }
  ];

  const companyValues = [
    'Innovation and cutting-edge technology',
    'Collaborative and inclusive culture',
    'Continuous learning and growth',
    'Work-life balance and flexibility',
    'Impact-driven projects',
    'Diverse and talented team'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg particle-system">
      <Navigation />
      
      <main className="relative z-10 pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text cyber-text-enhanced floating">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
              Build the Future of Technology
            </p>
            <p className="text-base sm:text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
              Be part of the future of technology. Join Zion Tech Group and help us build 
              innovative AI and IT solutions that transform businesses worldwide.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#positions"
                className="cyber-button px-8 py-4"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="/contact"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {positions.map((position, index) => (
                <div key={index} className="cyber-card-enhanced p-6 data-stream">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white neon-text">{position.title}</h3>
                    <span className="bg-cyan-400 text-slate-900 px-3 py-1 rounded-full text-sm font-semibold">
                      {position.type}
                    </span>
                  </div>
                  
                  <div className="flex items-center text-gray-300 mb-2">
                    <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                    {position.location}
                  </div>
                  <div className="flex items-center text-gray-300 mb-4">
                    <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                    {position.experience}
                  </div>
                  
                  <p className="text-gray-300 mb-4 leading-relaxed">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, reqIndex) => (
                        <li key={reqIndex} className="text-sm text-gray-400 flex items-center">
                          <span className="text-cyan-400 mr-2">•</span>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href={`/contact?position=${encodeURIComponent(position.title)}`}
                    className="w-full cyber-button text-center block"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 cyber-glow">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center neon-text">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {companyValues.map((value, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-slate-800/50 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-slate-800/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
              Ready to Join Our Team?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Don't see a position that matches your skills? We're always looking for talented individuals 
              who share our passion for innovation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="cyber-button px-8 py-4"
              >
                Send Us Your Resume
                <ArrowRight className="w-4 h-4 ml-2" />
              </a>
              <a
                href="tel:+13024640950"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Call: (302) 464-0950
              </a>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;