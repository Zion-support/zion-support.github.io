'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Users, 
  MapPin, 
  Clock, 
  ArrowRight, 
  CheckCircle, 
  Brain,
  Code,
  Shield,
  Cloud,
  Smartphone,
  BarChart3,
  Zap,
  Mail,
  Phone,
  Globe
} from 'lucide-react';

export default function CareersPage() {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      icon: Brain,
      salary: '$120,000 - $180,000'
    },
    {
      title: 'Full Stack Developer',
      department: 'Software Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies and best practices.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps practices'
      ],
      icon: Code,
      salary: '$80,000 - $120,000'
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our systems and clients with advanced security measures and monitoring.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ],
      icon: Shield,
      salary: '$90,000 - $140,000'
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement scalable cloud solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '6+ years experience in cloud architecture',
        'AWS, Azure, or GCP certifications',
        'Experience with Kubernetes and containerization',
        'Strong understanding of microservices architecture'
      ],
      icon: Cloud,
      salary: '$130,000 - $200,000'
    },
    {
      title: 'Mobile App Developer',
      department: 'Mobile Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create innovative mobile applications for iOS and Android platforms.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience in mobile development',
        'Proficiency in React Native, Swift, or Kotlin',
        'Experience with mobile UI/UX design',
        'Knowledge of app store deployment processes'
      ],
      icon: Smartphone,
      salary: '$75,000 - $110,000'
    },
    {
      title: 'Data Analyst',
      department: 'Data & Analytics',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Analyze data to provide insights and drive business decisions.',
      requirements: [
        'Bachelor\'s degree in Data Science, Statistics, or related field',
        '2+ years experience in data analysis',
        'Proficiency in Python, R, SQL',
        'Experience with data visualization tools',
        'Knowledge of machine learning concepts'
      ],
      icon: BarChart3,
      salary: '$60,000 - $90,000'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
      title: 'Competitive Salary',
      description: 'Above-market compensation with performance bonuses'
    },
    {
      icon: <Globe className="w-6 h-6 text-blue-400" />,
      title: 'Remote Work',
      description: 'Flexible remote work options with home office stipend'
    },
    {
      icon: <Brain className="w-6 h-6 text-purple-400" />,
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance'
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance'
    },
    {
      icon: <Clock className="w-6 h-6 text-orange-400" />,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible scheduling'
    },
    {
      icon: <Users className="w-6 h-6 text-cyan-400" />,
      title: 'Team Culture',
      description: 'Collaborative environment with regular team events'
    }
  ];

  const values = [
    {
      title: 'Innovation',
      description: 'We encourage creative thinking and cutting-edge solutions',
      icon: <Brain className="w-8 h-8 text-cyan-400" />
    },
    {
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and shared success',
      icon: <Users className="w-8 h-8 text-blue-400" />
    },
    {
      title: 'Growth',
      description: 'We invest in our people\'s professional development',
      icon: <Zap className="w-8 h-8 text-purple-400" />
    },
    {
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do',
      icon: <Shield className="w-8 h-8 text-green-400" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses with cutting-edge AI and IT solutions. Explore our open positions and benefits." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, cybersecurity, cloud architect, Zion Tech Group" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and help transform businesses with cutting-edge technology solutions." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Careers - Zion Tech Group" />
        <meta name="twitter:description" content="Join our team and help transform businesses with cutting-edge technology solutions." />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Be part of a team that's transforming businesses with cutting-edge AI and IT solutions. 
            Work on exciting projects and grow your career with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="#positions" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/contact" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl mb-16">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Our Values</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The principles that guide our work and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full mx-auto mb-4">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We offer competitive benefits and a supportive work environment.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white">{benefit.title}</h3>
                </div>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-white mb-4">Open Positions</h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>
          
          <div className="space-y-8">
            {openPositions.map((position, index) => (
              <div key={index} className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center">
                    <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mr-4">
                      <position.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {position.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {position.type}
                        </span>
                        <span>{position.experience}</span>
                        <span className="text-cyan-400 font-semibold">{position.salary}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-block bg-cyan-500/20 text-cyan-400 text-xs font-medium px-2 py-1 rounded-full">
                      {position.department}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                  <ul className="space-y-2">
                    {position.requirements.map((requirement, reqIndex) => (
                      <li key={reqIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {requirement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                  >
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                  <Link
                    to="/contact"
                    className="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors text-center"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm rounded-2xl">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Ideal Role?</h2>
            <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Send Your Resume
              </Link>
              <Link
                to="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Contact HR
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}