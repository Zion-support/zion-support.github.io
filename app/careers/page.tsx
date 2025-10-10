'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead AI solution development and implementation for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with DevOps and CI/CD',
        'Strong leadership and mentoring skills'
      ]
    },
    {
      id: 3,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive product strategy and roadmap for AI solutions.',
      requirements: [
        'Bachelor\'s degree in Business or related field',
        '4+ years experience in product management',
        'Experience with AI/ML products',
        'Strong analytical and strategic thinking',
        'Excellent communication and presentation skills'
      ]
    },
    {
      id: 4,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Implement and maintain security measures for client systems.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '3+ years experience in cybersecurity',
        'Relevant certifications (CISSP, CISM, etc.)',
        'Experience with security tools and frameworks',
        'Strong attention to detail and problem-solving skills'
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
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: Users,
      title: 'Team Environment',
      description: 'Collaborative and inclusive work culture'
    },
    {
      icon: Award,
      title: 'Career Growth',
      description: 'Professional development and advancement opportunities'
    },
    {
      icon: Zap,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI and technology tools'
    },
    {
      icon: MapPin,
      title: 'Flexible Location',
      description: 'Remote work options and flexible schedules'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts. Explore career opportunities at Zion Tech Group and help us shape the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, product manager, cybersecurity, Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and technology. 
            Work on cutting-edge projects and make a real impact.
          </p>
        </section>

        {/* Open Positions */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Open Positions</h2>
          <div className="space-y-8">
            {openPositions.map((position) => (
              <div
                key={position.id}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105 group"
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-400 mb-4">
                      <div className="flex items-center space-x-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{position.department}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="w-4 h-4" />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Award className="w-4 h-4" />
                        <span>{position.experience}</span>
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">
                      {position.description}
                    </p>
                  </div>
                  <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center space-x-2 group-hover:scale-105">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Key Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-start space-x-2 text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mt-1 flex-shrink-0" />
                        <span>{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Culture Section */}
        <section className="mb-16">
          <div className="bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 text-center">
              Our Culture
            </h2>
            <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto text-center">
              We believe in fostering a culture of innovation, collaboration, and continuous learning. 
              Our team is diverse, inclusive, and passionate about making a difference through technology.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-cyan-100">Team Members</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">15+</div>
                <div className="text-cyan-100">Countries</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-white mb-2">95%</div>
                <div className="text-cyan-100">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Don't See the Right Role?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2">
              <span>Send Resume</span>
              <ArrowRight className="w-5 h-5" />
            </button>
            <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              Learn More About Us
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default CareersPage;