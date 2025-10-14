import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Users, Zap, Shield, Globe, Mail, MapPin, Clock, CheckCircle, Star, Award } from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const CareersPage = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / San Francisco',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: ['Competitive salary', 'Stock options', 'Health insurance', 'Flexible work hours', 'Professional development budget']
    },
    {
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies and frameworks.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps practices'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Remote work options', 'Learning opportunities']
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our systems and data with advanced security measures and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Security training budget', 'Flexible schedule', 'Career growth opportunities']
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Competitive Compensation',
      description: 'Industry-leading salaries and comprehensive benefits package'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Remote Work',
      description: 'Flexible remote work options and modern office spaces'
    },
    {
      icon: <Users className="w-6 h-6 text-purple-400" />,
      title: 'Team Culture',
      description: 'Collaborative environment with talented and passionate colleagues'
    }
  ];

  const values = [
    {
      icon: <Star className="w-6 h-6 text-yellow-400" />,
      title: 'Innovation',
      description: 'We encourage creative thinking and cutting-edge solutions'
    },
    {
      icon: <Award className="w-6 h-6 text-green-400" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    },
    {
      icon: <Users className="w-6 h-6 text-blue-400" />,
      title: 'Collaboration',
      description: 'We work together to achieve common goals'
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: 'Impact',
      description: 'We make a positive difference in the world through technology'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals and help shape the future of technology. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, employment, technology careers, AI jobs, software development" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></div>
          <ResponsiveContainer>
            <div className="relative z-10 text-center">
              <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent mb-6">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Be part of a team that's building the future of technology. We're looking for passionate individuals who want to make a difference.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton className="bg-purple-600 hover:bg-purple-700">
                  View Open Positions
                </FuturisticButton>
                <FuturisticButton variant="outline">
                  Learn About Us
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-20 bg-white/5">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and a supportive work environment.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="mb-4 flex justify-center">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Job Openings Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>
            <div className="space-y-8">
              {jobOpenings.map((job, index) => (
                <FuturisticCard key={index} className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.department}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </div>
                        <div className="flex items-center gap-1">
                          <Award className="w-4 h-4" />
                          {job.experience}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                    </div>
                    <FuturisticButton className="lg:ml-8">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </FuturisticButton>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, benefitIndex) => (
                          <li key={benefitIndex} className="flex items-start text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <ResponsiveContainer>
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-4">Don't See Your Role?</h2>
              <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <FuturisticButton className="bg-white text-purple-600 hover:bg-gray-100">
                  Send Resume
                  <Mail className="w-4 h-4 ml-2" />
                </FuturisticButton>
                <FuturisticButton variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
                  Contact HR
                </FuturisticButton>
              </div>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </>
  );
};

export default CareersPage;