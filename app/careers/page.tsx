'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Heart, Briefcase, GraduationCap, Zap, Shield, Globe, Code, Brain, Cloud, Database, Smartphone, MessageSquare, BarChart3, Target, Settings, Eye, Mic, Package, Monitor, Wifi, Lock, Award, Calendar, Phone, Mail, ExternalLink } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $180,000',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for our clients.',
      requirements: [
        'Master\'s degree in Computer Science, AI, or related field',
        '5+ years of experience in machine learning and AI development',
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
      ],
      posted: '2024-01-15',
      icon: Brain,
      color: 'from-blue-500 to-cyan-600',
      urgent: true
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Cloud & Infrastructure',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$140,000 - $200,000',
      description: 'Design and implement scalable cloud solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'Expertise in AWS, Azure, and Google Cloud',
        'Certifications in cloud platforms preferred',
        'Experience with DevOps and CI/CD pipelines'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-12',
      icon: Cloud,
      color: 'from-green-500 to-emerald-600',
      urgent: false
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $150,000',
      description: 'Protect our clients\' systems and data from cyber threats.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, GDPR)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-10',
      icon: Shield,
      color: 'from-red-500 to-pink-600',
      urgent: true
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      department: 'Software Development',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$90,000 - $130,000',
      description: 'Build modern web applications using React, Node.js, and cloud technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-08',
      icon: Code,
      color: 'from-purple-500 to-pink-600',
      urgent: false
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$110,000 - $160,000',
      description: 'Extract insights from data to drive business decisions and AI model development.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '4+ years of data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning libraries',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-05',
      icon: BarChart3,
      color: 'from-orange-500 to-red-600',
      urgent: false
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'Cloud & Infrastructure',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$105,000 - $155,000',
      description: 'Automate and optimize our development and deployment processes.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '5+ years of DevOps experience',
        'Expertise in Docker, Kubernetes, CI/CD',
        'Experience with cloud platforms and infrastructure',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401(k) with company matching'
      ],
      posted: '2024-01-03',
      icon: Settings,
      color: 'from-cyan-500 to-blue-600',
      urgent: false
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: openPositions.length },
    { id: 'AI & Machine Learning', name: 'AI & Machine Learning', count: openPositions.filter(pos => pos.department === 'AI & Machine Learning').length },
    { id: 'Cloud & Infrastructure', name: 'Cloud & Infrastructure', count: openPositions.filter(pos => pos.department === 'Cloud & Infrastructure').length },
    { id: 'Security', name: 'Security', count: openPositions.filter(pos => pos.department === 'Security').length },
    { id: 'Software Development', name: 'Software Development', count: openPositions.filter(pos => pos.department === 'Software Development').length },
    { id: 'Data & Analytics', name: 'Data & Analytics', count: openPositions.filter(pos => pos.department === 'Data & Analytics').length }
  ];

  const locations = [
    { id: 'all', name: 'All Locations', count: openPositions.length },
    { id: 'Remote', name: 'Remote', count: openPositions.filter(pos => pos.location === 'Remote').length },
    { id: 'New York, NY', name: 'New York, NY', count: openPositions.filter(pos => pos.location === 'New York, NY').length },
    { id: 'San Francisco, CA', name: 'San Francisco, CA', count: openPositions.filter(pos => pos.location === 'San Francisco, CA').length },
    { id: 'Austin, TX', name: 'Austin, TX', count: openPositions.filter(pos => pos.location === 'Austin, TX').length }
  ];

  const filteredPositions = openPositions.filter(position => {
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation;
    return matchesDepartment && matchesLocation;
  });

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We encourage creative thinking and embrace new technologies to solve complex problems.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work together to achieve common goals.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We\'re passionate about technology and its potential to transform businesses and lives.'
    },
    {
      icon: Globe,
      title: 'Impact',
      description: 'We focus on creating meaningful impact for our clients and the communities we serve.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and IT solutions. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, software developer, data scientist, DevOps engineer" />
      </Helmet>
      
      <Navigation />
      
      <main className="pt-16">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-white mb-6">
                Join Our <span className="text-cyan-400">Team</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Be part of a team that's shaping the future of AI and IT solutions. 
                Work on cutting-edge projects and make a real impact.
              </p>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Our Values</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {companyValues.map((value, index) => (
                  <div key={index} className="text-center">
                    <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-cyan-400" />
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
                    <p className="text-gray-300 text-sm">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row gap-4">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {departments.map(dept => (
                    <option key={dept.id} value={dept.id}>
                      {dept.name} ({dept.count})
                    </option>
                  ))}
                </select>
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 bg-slate-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
                >
                  {locations.map(loc => (
                    <option key={loc.id} value={loc.id}>
                      {loc.name} ({loc.count})
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8">Open Positions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {filteredPositions.map((position) => (
                  <div key={position.id} className="bg-slate-800/50 rounded-lg p-6 hover:bg-slate-800/70 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className={`w-12 h-12 bg-gradient-to-r ${position.color} rounded-lg flex items-center justify-center mr-4`}>
                          <position.icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                          <p className="text-cyan-400">{position.department}</p>
                        </div>
                      </div>
                      {position.urgent && (
                        <span className="px-2 py-1 bg-red-500/20 text-red-400 text-xs rounded-full">
                          Urgent
                        </span>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-300">
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2 text-cyan-400" />
                        {position.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-cyan-400" />
                        {position.type}
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2 text-cyan-400" />
                        {position.experience}
                      </div>
                      <div className="flex items-center">
                        <Award className="w-4 h-4 mr-2 text-cyan-400" />
                        {position.salary}
                      </div>
                    </div>

                    <p className="text-gray-300 mb-4">{position.description}</p>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                      <ul className="space-y-1">
                        {position.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-center text-gray-300">
                            <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                            <span className="text-sm">{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-700">
                      <span className="text-xs text-gray-400">
                        Posted: {new Date(position.posted).toLocaleDateString()}
                      </span>
                      <button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {filteredPositions.length === 0 && (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-gray-700/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Briefcase className="w-8 h-8 text-gray-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                  <p className="text-gray-400">Try adjusting your filter criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Why Work With Us?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Zap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Cutting-Edge Technology</h3>
                  <p className="text-gray-300 text-sm">Work with the latest AI and cloud technologies</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Great Team</h3>
                  <p className="text-gray-300 text-sm">Collaborate with talented and passionate professionals</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Heart className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Work-Life Balance</h3>
                  <p className="text-gray-300 text-sm">Flexible schedules and remote work options</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <GraduationCap className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Learning & Growth</h3>
                  <p className="text-gray-300 text-sm">Continuous learning opportunities and career development</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Award className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Competitive Benefits</h3>
                  <p className="text-gray-300 text-sm">Comprehensive health, dental, and retirement benefits</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2">Global Impact</h3>
                  <p className="text-gray-300 text-sm">Make a difference for clients worldwide</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                Don't See the Right Position?
              </h2>
              <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals to join our team. 
                Send us your resume and let us know how you'd like to contribute.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="mailto:careers@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Send Your Resume
                </a>
                <a 
                  href="tel:+13024640950"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900 px-8 py-3 rounded-lg font-semibold transition-all duration-300"
                >
                  Call: (302) 464-0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default CareersPage;