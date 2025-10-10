'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead AI solution development and machine learning model implementation',
      requirements: [
        '5+ years experience in AI/ML',
        'Python, TensorFlow, PyTorch',
        'Strong problem-solving skills',
        'PhD in Computer Science preferred'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Design and implement cloud infrastructure solutions for enterprise clients',
      requirements: [
        '7+ years cloud experience',
        'AWS, Azure, GCP certifications',
        'Kubernetes and Docker expertise',
        'Strong communication skills'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation',
      requirements: [
        '4+ years DevOps experience',
        'Jenkins, GitLab CI, GitHub Actions',
        'Infrastructure as Code',
        'Monitoring and logging tools'
      ]
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Drive AI product strategy and work with engineering teams',
      requirements: [
        '3+ years product management',
        'AI/ML product experience',
        'Strong analytical skills',
        'MBA preferred'
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: Clock,
      title: 'Flexible Schedule',
      description: 'Remote work options and flexible hours'
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Learning budget and conference attendance'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented and passionate professionals'
    },
    {
      icon: Zap,
      title: 'Cutting-edge Technology',
      description: 'Work with the latest AI and cloud technologies'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center">
            Careers at Zion Tech Group
          </h1>
          <p className="text-xl text-gray-300 text-center mb-12 max-w-3xl mx-auto">
            Join our team of innovators and help shape the future of AI and technology
          </p>
          
          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Why Work With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card text-center">
                  <div className="p-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                    <p className="text-gray-300">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">
              Open Positions
            </h2>
            <div className="space-y-8">
              {openPositions.map((position, index) => (
                <div key={index} className="cyber-card">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                        <div className="flex flex-wrap items-center space-x-4 text-gray-300">
                          <span className="flex items-center space-x-1">
                            <Briefcase className="w-4 h-4" />
                            <span>{position.department}</span>
                          </span>
                          <span className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </span>
                          <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                            {position.type}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{position.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {position.requirements.map((requirement, reqIndex) => (
                          <li key={reqIndex} className="flex items-center space-x-3">
                            <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                            <span className="text-gray-300">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <a
                      href="/contact"
                      className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium"
                    >
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Company Culture */}
          <div className="cyber-card p-8 mb-16">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Our Culture
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Innovation First</h3>
                <p className="text-gray-300 mb-6">
                  We encourage experimentation and creative thinking. Our team is always exploring 
                  new technologies and approaches to solve complex problems.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Collaborative Environment</h3>
                <p className="text-gray-300 mb-6">
                  We believe in the power of teamwork. Our open culture promotes knowledge sharing 
                  and mutual support across all departments.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Work-Life Balance</h3>
                <p className="text-gray-300 mb-6">
                  We understand that great work comes from well-rested, happy employees. 
                  We offer flexible schedules and remote work options.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">Continuous Learning</h3>
                <p className="text-gray-300 mb-6">
                  Technology evolves rapidly, and so do we. We invest in our team's growth 
                  through training, conferences, and educational opportunities.
                </p>
              </div>
            </div>
          </div>
          
          {/* CTA Section */}
          <div className="text-center">
            <div className="cyber-card p-12">
              <h2 className="text-3xl font-bold text-white mb-6">
                Don't See the Right Position?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know 
                how you can contribute to our team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button px-8 py-4 text-lg font-semibold inline-flex items-center space-x-2"
                >
                  <span>Send Your Resume</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2"
                >
                  <span>(302) 464-0950</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;