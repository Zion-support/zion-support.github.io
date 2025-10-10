'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

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
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      featured: true
    },
    {
      id: '2',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain scalable cloud infrastructure and CI/CD pipelines.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of DevOps experience',
        'Experience with Docker, Kubernetes, Terraform',
        'Knowledge of cloud platforms and monitoring tools',
        'Strong automation and scripting skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      featured: false
    },
    {
      id: '3',
      title: 'Product Manager',
      department: 'Product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '4+ years of product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development methodologies'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      featured: false
    }
  ];

  const companyBenefits = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities and professional growth'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Innovation',
      description: 'Work on cutting-edge AI and technology projects'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaborative Culture',
      description: 'Work with talented and passionate team members'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology innovators" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Join Our Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Be part of the future of technology. Join our team of innovators, creators, and problem-solvers who are building the next generation of AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Company Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer more than just a job - we offer a career in the future of technology.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyBenefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current openings and find the perfect role for you.
              </p>
            </div>
            
            <div className="space-y-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-gray-800/50 rounded-2xl p-8 hover:scale-105 transition-all duration-300 ${
                    position.featured ? 'border-2 border-cyan-400' : 'border border-gray-700'
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-2xl font-bold text-white">{position.title}</h3>
                        {position.featured && (
                          <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-4 text-gray-300">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          {position.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {position.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {position.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4" />
                          {position.experience}
                        </div>
                      </div>
                    </div>
                    <Link
                      to={`/careers/${position.id}`}
                      className="mt-4 md:mt-0 inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-purple-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{position.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-white font-semibold mb-3">Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.map((req, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                      <ul className="space-y-1">
                        {position.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
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
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Dream Job?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-400 to-purple-400 text-white rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-500 transition-all duration-300"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;