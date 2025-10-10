'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, MapPin, Clock, CheckCircle, ArrowRight, Mail, Phone, Briefcase, GraduationCap, Heart } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Strong Python and TensorFlow skills',
        'Experience with cloud platforms',
        'PhD in Computer Science preferred'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401k matching',
        'Flexible work schedule'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Build scalable web applications and APIs for our AI solutions.',
      requirements: [
        '3+ years full-stack experience',
        'React, Node.js, and Python',
        'Database design skills',
        'API development experience'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401k matching',
        'Professional development'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Extract insights from data and build predictive models for our clients.',
      requirements: [
        '3+ years data science experience',
        'Python, R, and SQL skills',
        'Statistical modeling knowledge',
        'Machine learning expertise'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401k matching',
        'Learning opportunities'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and deployment pipelines for our AI systems.',
      requirements: [
        '3+ years DevOps experience',
        'AWS/Azure/GCP knowledge',
        'Docker and Kubernetes',
        'CI/CD pipeline experience'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401k matching',
        'Certification support'
      ]
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Define product strategy and roadmap for our AI solutions.',
      requirements: [
        '5+ years product management',
        'AI/ML product experience',
        'Strong communication skills',
        'Technical background preferred'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        '401k matching',
        'Stock options'
      ]
    },
    {
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      description: 'Help clients understand and implement our AI solutions.',
      requirements: [
        '3+ years technical sales',
        'AI/ML knowledge',
        'Presentation skills',
        'Client relationship management'
      ],
      benefits: [
        'Competitive salary + commission',
        'Health insurance',
        '401k matching',
        'Travel opportunities'
      ]
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance, dental, vision, and mental health support'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Professional development budget, conference attendance, and certification support'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible work hours, remote work options, and unlimited PTO'
    },
    {
      icon: Users,
      title: 'Team Culture',
      description: 'Collaborative environment, team events, and regular company retreats'
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Clear promotion paths, mentorship programs, and leadership opportunities'
    },
    {
      icon: CheckCircle,
      title: 'Financial Benefits',
      description: 'Competitive salaries, 401k matching, stock options, and performance bonuses'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI and IT solutions. Explore open positions and discover why we're a great place to work." />
        <meta name="keywords" content="careers, jobs, AI engineer, data scientist, developer, Zion Tech Group, employment" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and help build the future of AI and IT solutions" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        <main className="container mx-auto px-4 py-16 pt-24">
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Help us build the future of AI and IT solutions. Join a team of passionate innovators 
              who are transforming businesses through cutting-edge technology.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Open Positions</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </span>
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">Requirements</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-2">Benefits</h4>
                    <ul className="space-y-1">
                      {position.benefits.map((benefit, benIndex) => (
                        <li key={benIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex items-center justify-between">
                    <a
                      href={`mailto:careers@ziontechgroup.com?subject=Application for ${position.title}`}
                      className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                    <span className="text-gray-400 text-sm">Posted 2 days ago</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-slate-800/50 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-4">
                Don't See the Right Position?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let us know how you'd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center"
                >
                  Send Resume
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  );
};

export default CareersPage;
