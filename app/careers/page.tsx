'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful, responsive user interfaces for our AI-powered applications using React and modern web technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of React/TypeScript experience',
        'Experience with modern CSS frameworks',
        'Knowledge of web performance optimization',
        'Experience with testing frameworks'
      ],
      benefits: [
        'Competitive salary',
        'Health and dental insurance',
        'Stock options',
        'Learning and development opportunities',
        'Team building events'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '3',
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for our AI solutions, working closely with engineering and design teams.',
      requirements: [
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary and bonus',
        'Comprehensive benefits package',
        'Remote work flexibility',
        'Professional development opportunities',
        'Generous PTO policy'
      ],
      posted: '2024-01-08',
      featured: false
    }
  ];

  const companyBenefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget and access to conferences, courses, and certifications'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Regular recognition programs and opportunities for career advancement'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and technology. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-gray-300 max-w-3xl mx-auto">
              We're building the future of AI technology while fostering a culture of innovation, collaboration, and growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyBenefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <div className="bg-gradient-to-r from-cyan-500 to-blue-600 p-3 rounded-lg w-fit mx-auto mb-4">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-gray-300">
              Explore our current openings and find the perfect role for you.
            </p>
          </div>
          
          <div className="space-y-6">
            {openPositions.map((position) => (
              <div key={position.id} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border ${
                position.featured ? 'border-cyan-500 ring-2 ring-cyan-500/50' : 'border-white/20'
              } hover:bg-white/20 transition-all duration-300`}>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-2">
                      <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                      {position.featured && (
                        <span className="bg-cyan-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                          <Star className="w-4 h-4 mr-1" />
                          Featured
                        </span>
                      )}
                    </div>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                      <div className="flex items-center space-x-2">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <button className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span>{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {position.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-cyan-100 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300">
              Send Your Resume
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;