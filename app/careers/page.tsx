'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const positions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / New York',
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
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients across multiple cloud platforms.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with DevOps and CI/CD',
        'Strong leadership and client-facing skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Washington DC',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced cybersecurity solutions and threat detection systems.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Experience with SIEM and security tools',
        'Knowledge of compliance frameworks'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'Software Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build innovative web applications and microservices using modern technologies and best practices.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (SQL and NoSQL)',
        'Knowledge of cloud platforms and DevOps'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex datasets and build predictive models to drive business decisions.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '4+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning frameworks',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Automate deployment pipelines and manage infrastructure to ensure reliable and scalable systems.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years experience in DevOps',
        'Experience with Docker, Kubernetes, Terraform',
        'Knowledge of CI/CD pipelines',
        'Strong scripting and automation skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ]
    }
  ];

  const perks = [
    {
      icon: <Zap className="w-8 h-8 text-cyan-400" />,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI, cloud, and cybersecurity technologies'
    },
    {
      icon: <Users className="w-8 h-8 text-green-400" />,
      title: 'Collaborative Culture',
      description: 'Join a team of passionate professionals who love what they do'
    },
    {
      icon: <Star className="w-8 h-8 text-purple-400" />,
      title: 'Career Growth',
      description: 'Unlimited opportunities for learning and advancement'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-yellow-400" />,
      title: 'Work-Life Balance',
      description: 'Flexible schedules and remote work options'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of the future of AI and IT. Explore career opportunities in AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, software developer, data scientist" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <section className="pt-24 pb-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
                Join Our Team
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of the future of AI and IT. Join a team of passionate professionals building cutting-edge solutions.
              </p>
            </div>

            {/* Company Perks */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Why Work With Us?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {perks.map((perk, index) => (
                  <div key={index} className="cyber-card p-6 text-center">
                    <div className="mb-4">{perk.icon}</div>
                    <h3 className="text-xl font-bold text-white mb-3">{perk.title}</h3>
                    <p className="text-gray-300">{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Open Positions */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
                Open Positions
              </h2>
              <div className="space-y-8">
                {positions.map((position) => (
                  <div key={position.id} className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-6">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                          {position.title}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center space-x-1">
                            <MapPin className="w-4 h-4" />
                            <span>{position.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span>{position.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span>{position.experience}</span>
                          </div>
                        </div>
                        <p className="text-gray-300 mb-4">{position.description}</p>
                      </div>
                      <div className="lg:ml-8">
                        <a 
                          href={`/careers/${position.id}`}
                          className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium transition-colors group"
                        >
                          View Details
                          <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                        <ul className="space-y-2">
                          {position.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start space-x-2">
                              <CheckCircle className="w-4 h-4 text-green-400 mt-0.5 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Section */}
            <div className="cyber-card hologram-card p-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Don't See Your Perfect Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="tel:+13024640950" className="cyber-button">
                  📞 Call: (302) 464-0950
                </a>
                <a href="mailto:kleber@ziontechgroup.com" className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300">
                  📧 Send Resume
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;