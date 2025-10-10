'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, MapPin, Clock, Briefcase } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / New York',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      id: 2,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our clients\' data and systems from cyber threats and vulnerabilities.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '3+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    },
    {
      id: 3,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for our clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years experience in cloud architecture',
        'Certifications: AWS Solutions Architect, Azure Solutions Architect',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ]
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'Market-leading salaries and equity packages'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Work with talented and passionate professionals'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options'
    },
    {
      icon: Briefcase,
      title: 'Growth Opportunities',
      description: 'Continuous learning and career development'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of AI and technology experts" />
        <meta name="keywords" content="careers, jobs, AI engineer, cybersecurity, cloud architect" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team of AI and technology experts" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Be part of the future of technology. Join our team of innovators, creators, and problem-solvers who are building the next generation of AI and IT solutions.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              <div className="text-center">
                <Users className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">50+</div>
                <div className="text-gray-400">Team Members</div>
              </div>
              <div className="text-center">
                <Star className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">98%</div>
                <div className="text-gray-400">Employee Satisfaction</div>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-gray-400">Countries</div>
              </div>
              <div className="text-center">
                <Clock className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">24/7</div>
                <div className="text-gray-400">Flexible Hours</div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-gray-300">We offer more than just a job - we offer a career</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-gray-300">Find your next career opportunity</p>
            </div>

            <div className="space-y-8">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                          <p className="text-cyan-400 font-medium mb-2">{job.department}</p>
                          <p className="text-gray-300">{job.description}</p>
                        </div>
                        <div className="text-right">
                          <div className="text-sm text-gray-400 mb-1">{job.type}</div>
                          <div className="text-sm text-gray-400">{job.experience}</div>
                        </div>
                      </div>

                      <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, index) => (
                              <li key={index} className="flex items-start text-gray-300">
                                <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                          <ul className="space-y-2">
                            {job.benefits.map((benefit, index) => (
                              <li key={index} className="flex items-start text-gray-300">
                                <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0 mt-0.5" />
                                <span className="text-sm">{benefit}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center">
                      <button className="w-full bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 mb-4">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                      <button className="w-full border border-cyan-400 text-cyan-400 px-6 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-400/20">
              <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Role?</h2>
              <p className="text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                  Send Resume
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="border border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  Contact HR
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;