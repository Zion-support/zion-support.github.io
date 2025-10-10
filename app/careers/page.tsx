'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Zap, Phone, Mail, Globe, Brain, Cloud, Shield, Code, BarChart, Target, TrendingUp, Lightbulb, Rocket } from 'lucide-react';

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
  salary: string;
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'PhD in Computer Science or related field',
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
        '401k with company matching'
      ],
      salary: '$120,000 - $180,000',
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '7+ years cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of security best practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$130,000 - $190,000',
      posted: '2024-01-12',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced cybersecurity solutions and threat detection.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years cybersecurity experience',
        'CISSP, CISM, or similar certifications',
        'Experience with SIEM tools and threat hunting',
        'Knowledge of compliance frameworks (SOC2, GDPR)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$100,000 - $150,000',
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '4',
      title: 'Full Stack Developer',
      department: 'Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern web applications and APIs using cutting-edge technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$80,000 - $120,000',
      posted: '2024-01-08',
      featured: false
    },
    {
      id: '5',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex datasets and build predictive models for business intelligence.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '4+ years data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with ML frameworks (scikit-learn, pandas)',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$90,000 - $140,000',
      posted: '2024-01-05',
      featured: false
    },
    {
      id: '6',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Automate deployment pipelines and manage infrastructure for scalable applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years DevOps experience',
        'Experience with CI/CD tools (Jenkins, GitLab)',
        'Knowledge of infrastructure as code (Terraform)',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      salary: '$85,000 - $130,000',
      posted: '2024-01-03',
      featured: false
    }
  ];

  const departments = [
    { id: 'all', name: 'All Departments', count: jobPositions.length },
    { id: 'AI Research', name: 'AI Research', count: jobPositions.filter(job => job.department === 'AI Research').length },
    { id: 'Infrastructure', name: 'Infrastructure', count: jobPositions.filter(job => job.department === 'Infrastructure').length },
    { id: 'Security', name: 'Security', count: jobPositions.filter(job => job.department === 'Security').length },
    { id: 'Development', name: 'Development', count: jobPositions.filter(job => job.department === 'Development').length },
    { id: 'Analytics', name: 'Analytics', count: jobPositions.filter(job => job.department === 'Analytics').length }
  ];

  const companyValues = [
    {
      icon: Brain,
      title: 'Innovation',
      description: 'We encourage creative thinking and cutting-edge solutions'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together to achieve common goals'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'We love what we do and it shows in our work'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible work arrangements',
    'Professional development budget',
    '401k with company matching',
    'Unlimited PTO',
    'Home office stipend',
    'Learning and development opportunities',
    'Team building events',
    'Mentorship programs'
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobPositions.filter(job => 
        job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : jobPositions.filter(job => 
        job.department === selectedDepartment && (
          job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
          job.description.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg matrix-rain">
      <Helmet>
        <title>Careers | Zion Tech Group - Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and technology. Explore career opportunities and apply today." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, full stack developer, data scientist, tech careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 holographic-text cyber-text glitch" data-text="Join Our Team">
            Join Our <span className="text-cyan-400 neon-text">Team</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Be part of a team that's <span className="text-cyan-400 font-bold">shaping the future of AI and technology</span>. 
            Work on cutting-edge projects and make a real impact.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="#open-positions"
              className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/contact"
              className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
            >
              <span>Contact Us</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Our Values
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              The principles that guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="cyber-card group hover:scale-105 transition-all duration-300 text-center">
                <div className="p-8">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer competitive benefits and a supportive work environment that helps you grow and succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle className="w-6 h-6 text-cyan-400 flex-shrink-0" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="cyber-card hologram-card p-6 border border-cyan-500/20">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search job positions..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-4 pr-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-300 focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors"
                  />
                </div>
              </div>
              <div className="md:w-64">
                <div className="relative">
                  <select
                    value={selectedDepartment}
                    onChange={(e) => setSelectedDepartment(e.target.value)}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-cyan-500/30 rounded-lg text-white focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-colors appearance-none">
                    {departments.map((department) => (
                      <option key={department.id} value={department.id} className="bg-slate-800">
                        {department.name} ({department.count})
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 justify-center">
              {departments.slice(1).map((department) => (
                <button
                  key={department.id}
                  onClick={() => setSelectedDepartment(department.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    selectedDepartment === department.id
                      ? 'bg-cyan-500 text-white cyber-glow'
                      : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50'
                  }`}
                >
                  {department.name} ({department.count})
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Job Positions */}
      <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white neon-text">
              {selectedDepartment === 'all' ? 'Open Positions' : `${selectedDepartment} Positions`}
            </h2>
            <span className="text-cyan-400 font-semibold">
              {filteredJobs.length} position{filteredJobs.length !== 1 ? 's' : ''} found
            </span>
          </div>
          
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className={`cyber-card group hover:scale-105 transition-all duration-300 relative ${
                job.featured ? 'border-cyan-500/50 shadow-2xl shadow-cyan-500/20' : 'border-slate-700/50'
              }`}>
                {job.featured && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="w-4 h-4 mr-1 fill-current" />
                    Featured
                  </div>
                )}
                
                <div className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.department}
                        </div>
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Award className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="text-cyan-400 font-semibold text-lg">{job.salary}</div>
                        <div className="text-gray-400 text-sm">Posted {new Date(job.posted).toLocaleDateString()}</div>
                      </div>
                    </div>
                    <div className="mt-6 lg:mt-0 lg:ml-6">
                      <a
                        href={`/careers/${job.id}`}
                        className="cyber-button inline-flex items-center space-x-2 group"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Key Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.slice(0, 3).map((requirement, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0 mt-0.5" />
                            {requirement}
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-gray-400 text-sm">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {job.benefits.slice(0, 3).map((benefit, index) => (
                          <li key={index} className="flex items-start text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            {benefit}
                          </li>
                        ))}
                        {job.benefits.length > 3 && (
                          <li className="text-gray-400 text-sm">
                            +{job.benefits.length - 3} more benefits
                          </li>
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">💼</div>
              <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
              <p className="text-gray-300 mb-6">Try adjusting your search terms or department filter</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedDepartment('all');
                }}
                className="cyber-button"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="cyber-card hologram-card p-12 border border-cyan-500/30">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="cyber-button text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Mail className="w-5 h-5" />
                <span>Send Resume</span>
              </a>
              <a
                href="tel:+13024640950"
                className="cyber-button-secondary text-lg px-8 py-4 inline-flex items-center space-x-2 group"
              >
                <Phone className="w-5 h-5" />
                <span>(302) 464-0950</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;