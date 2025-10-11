'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart, Zap, Briefcase, GraduationCap, Award } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

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
      department: 'AI Solutions',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
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
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'IT Services',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for our enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with Kubernetes and Docker',
        'Strong leadership and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: '4',
      title: 'Frontend Developer',
      department: 'Development',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and responsive user interfaces for our web applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in frontend development',
        'Expertise in React, TypeScript, and CSS',
        'Experience with modern build tools',
        'Strong design sense and attention to detail'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-01',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Growth',
      description: 'Professional development budget and opportunities for continuous learning.'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Competitive compensation, equity options, and recognition programs.'
    }
  ];

  const values = [
    'Innovation and continuous learning',
    'Collaboration and teamwork',
    'Integrity and transparency',
    'Customer success focus',
    'Diversity and inclusion',
    'Work-life balance'
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of passionate technologists. Explore career opportunities at Zion Tech Group and be part of the future of AI and IT solutions." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, cloud architect, cybersecurity, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. We're looking for passionate professionals to join our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                <ArrowRight className="w-5 h-5 mr-2" />
                View Open Positions
              </button>
              <button className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300 flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Learn About Us
              </button>
            </div>
          </div>
        </section>

        {/* Why Join Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Join Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300">
                We offer more than just a job - we offer a career with purpose and growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 text-center border border-white/10">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
                <p className="text-gray-300">
                  These core values guide everything we do and shape our company culture.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300">
                Find your next career opportunity with us.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white/5 backdrop-blur-sm rounded-2xl p-8 border ${
                    position.featured ? 'border-cyan-400 ring-2 ring-cyan-400/20' : 'border-white/10'
                  }`}
                >
                  {position.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">Featured Position</span>
                    </div>
                  )}
                  
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{position.title}</h3>
                    <p className="text-cyan-400 font-semibold mb-4">{position.department}</p>
                    <p className="text-gray-300 mb-4">{position.description}</p>
                  </div>

                  <div className="flex items-center space-x-4 text-sm text-gray-300 mb-6">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Requirements</h4>
                    <ul className="space-y-2">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">
                Employee Benefits
              </h2>
              <p className="text-xl text-gray-300">
                We offer competitive benefits and a great work environment.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {openPositions[0].benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl p-12 backdrop-blur-lg border border-white/10">
              <h2 className="text-4xl font-bold text-white mb-4">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto">
                <span>Send Your Resume</span>
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default CareersPage;