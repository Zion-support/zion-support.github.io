'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Zap } from 'lucide-react';

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
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years cloud architecture experience',
        'Expertise in AWS, Azure, and GCP',
        'Kubernetes and Docker proficiency',
        'Infrastructure as Code (Terraform, CloudFormation)',
        'Strong security and compliance knowledge'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Comprehensive health benefits',
        '401k with company matching',
        'Annual conference attendance'
      ],
      posted: '1 week ago',
      featured: true
    },
    {
      id: '3',
      title: 'Blockchain Developer',
      department: 'Blockchain Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Develop smart contracts and blockchain applications using cutting-edge technologies.',
      requirements: [
        '3+ years blockchain development experience',
        'Solidity and Web3.js expertise',
        'Experience with Ethereum, Polygon, or other blockchains',
        'Smart contract security best practices',
        'DeFi protocol development experience'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Crypto bonus opportunities',
        'Remote-first culture',
        'Learning and development stipend'
      ],
      posted: '3 days ago',
      featured: false
    },
    {
      id: '4',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced cybersecurity solutions and threat detection.',
      requirements: [
        '4+ years cybersecurity experience',
        'CISSP, CISM, or similar certifications',
        'Experience with SIEM tools and threat hunting',
        'Penetration testing and vulnerability assessment',
        'Incident response and forensics experience'
      ],
      benefits: [
        'Competitive salary: $110,000 - $160,000',
        'Security certification reimbursement',
        'Flexible work arrangements',
        'Advanced security tools access'
      ],
      posted: '5 days ago',
      featured: false
    },
    {
      id: '5',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Streamline development workflows and maintain robust CI/CD pipelines for our development teams.',
      requirements: [
        '4+ years DevOps experience',
        'Kubernetes and Docker expertise',
        'CI/CD pipeline development (GitLab, Jenkins)',
        'Infrastructure monitoring and logging',
        'Scripting skills (Bash, Python, PowerShell)'
      ],
      benefits: [
        'Competitive salary: $105,000 - $155,000',
        'Stock options',
        'Health and dental coverage',
        'Professional development opportunities'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '6',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create beautiful and responsive user interfaces for our web applications and client projects.',
      requirements: [
        '3+ years frontend development experience',
        'React, TypeScript, and Next.js expertise',
        'CSS frameworks (Tailwind, Styled Components)',
        'State management (Redux, Zustand)',
        'Testing frameworks (Jest, Cypress)'
      ],
      benefits: [
        'Competitive salary: $90,000 - $130,000',
        'Remote work flexibility',
        'Latest development tools',
        'Creative project opportunities'
      ],
      posted: '4 days ago',
      featured: false
    }
  ];

  const companyStats = [
    { icon: Users, label: 'Team Members', value: '150+' },
    { icon: Award, label: 'Awards Won', value: '25+' },
    { icon: Heart, label: 'Client Satisfaction', value: '98%' },
    { icon: Star, label: 'Employee Rating', value: '4.9/5' }
  ];

  const benefits = [
    'Competitive salaries and equity participation',
    'Comprehensive health, dental, and vision insurance',
    'Flexible remote work options',
    'Professional development and learning budget',
    '401k with company matching',
    'Unlimited PTO and paid holidays',
    'Latest technology and equipment',
    'Team building events and company retreats'
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative professionals working on cutting-edge AI, cloud, and blockchain solutions. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, blockchain developer, cybersecurity, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of a dynamic team building the future of technology. We're looking for passionate individuals who want to make a real impact.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {companyStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-2">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="#positions"
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
              >
                View Open Positions
              </Link>
              <Link
                to="/contact"
                className="px-8 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                We offer more than just a job - we provide an environment where you can grow, innovate, and make a real difference.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 hover:bg-white/10 transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                    <h3 className="text-white font-semibold">Great Benefits</h3>
                  </div>
                  <p className="text-gray-300 text-sm">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
              <p className="text-gray-300 max-w-2xl mx-auto">
                Find the perfect role that matches your skills and career aspirations.
              </p>
            </div>

            <div className="space-y-6">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white/5 backdrop-blur-sm border rounded-xl p-6 hover:bg-white/10 transition-all duration-300 ${
                    position.featured ? 'border-cyan-400/50 ring-1 ring-cyan-400/20' : 'border-white/10'
                  }`}
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{position.title}</h3>
                        {position.featured && (
                          <span className="px-2 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {position.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </div>
                        <div className="text-cyan-400">
                          {position.experience}
                        </div>
                      </div>
                      <p className="text-gray-300 text-sm mb-4">{position.description}</p>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2 lg:ml-6">
                      <Link
                        to={`/careers/${position.id}`}
                        className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-sm font-medium rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 text-center"
                      >
                        Apply Now
                      </Link>
                      <span className="px-4 py-2 text-gray-400 text-sm text-center">
                        {position.posted}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {position.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
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
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300"
            >
              Send Your Resume
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;