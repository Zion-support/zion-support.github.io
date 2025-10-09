'use client';
import React, { useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { MapPin, Clock, Users, Briefcase, GraduationCap, Heart, Zap, Brain, Code, Shield, BarChart, Target, Globe, ArrowRight, CheckCircle, Star } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments', icon: Briefcase },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'ai-research', name: 'AI Research', icon: Brain },
    { id: 'data-science', name: 'Data Science', icon: BarChart },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'product', name: 'Product', icon: Target },
    { id: 'operations', name: 'Operations', icon: Zap }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai-research',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong research background'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Health insurance', 'Flexible work'],
      posted: '2 days ago',
      featured: true
    },
    {
      id: 2,
      title: 'Full-Stack Developer',
      department: 'engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps',
        'Strong problem-solving skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', '401k matching', 'Learning budget'],
      posted: '1 week ago',
      featured: false
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'data-science',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex data sets and build predictive models for business insights.',
      requirements: [
        'MS in Data Science, Statistics, or related field',
        '4+ years data science experience',
        'Expertise in Python, R, SQL',
        'Experience with ML frameworks',
        'Strong statistical background'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible work', 'Conference budget'],
      posted: '1 week ago',
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Specialist',
      department: 'security',
      location: 'Washington, DC',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Protect our systems and client data with advanced security measures.',
      requirements: [
        '6+ years cybersecurity experience',
        'Certifications (CISSP, CISM, etc.)',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards',
        'Strong analytical skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Security training', 'Certification support'],
      posted: '2 weeks ago',
      featured: false
    },
    {
      id: 5,
      title: 'Product Manager',
      department: 'product',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for our AI-powered solutions.',
      requirements: [
        '5+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Technical background preferred',
        'MBA or equivalent experience'
      ],
      benefits: ['Competitive salary', 'Equity options', 'Health insurance', 'Flexible work'],
      posted: '3 days ago',
      featured: true
    },
    {
      id: 6,
      title: 'DevOps Engineer',
      department: 'operations',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage our cloud infrastructure and deployment pipelines.',
      requirements: [
        '4+ years DevOps experience',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with CI/CD pipelines',
        'Knowledge of monitoring and logging',
        'Strong automation skills'
      ],
      benefits: ['Competitive salary', 'Health insurance', 'Learning budget', 'Remote work'],
      posted: '1 week ago',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: Zap,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Annual learning budget and conference attendance for professional growth'
    },
    {
      icon: Star,
      title: 'Equity & Rewards',
      description: 'Competitive equity packages and performance-based bonuses'
    },
    {
      icon: Globe,
      title: 'Global Team',
      description: 'Work with talented professionals from around the world'
    },
    {
      icon: Brain,
      title: 'Cutting-Edge Projects',
      description: 'Work on innovative AI and technology projects that make a real impact'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <>
      <SEOOptimizer
        title="Careers - Join Our Team | Zion Tech Group"
        description="Join Zion Tech Group and help shape the future of AI and technology. Explore career opportunities in engineering, research, and more."
        keywords={['careers', 'jobs', 'hiring', 'AI jobs', 'tech careers', 'Zion Tech Group careers']}
        canonicalUrl="https://ziontechgroup.com/careers"
      />
      <Navigation />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI and technology. Join a team of passionate innovators 
              working on cutting-edge solutions that transform businesses worldwide.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#openings" className="cyber-button inline-flex items-center justify-center">
                <Briefcase className="w-5 h-5 mr-2" />
                View Open Positions
              </a>
              <a href="/contact" className="cyber-button-secondary inline-flex items-center justify-center">
                <Users className="w-5 h-5 mr-2" />
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Why Join Us */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Join <span className="text-purple-400">Zion Tech Group</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Be part of a team that's shaping the future of technology
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                    <benefit.icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section id="openings" className="py-16 px-4 bg-slate-800/30">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Open <span className="text-green-400">Positions</span>
              </h2>
              <p className="text-gray-300 text-lg">
                Find your next opportunity with us
              </p>
            </div>

            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {departments.map((dept) => (
                <button
                  key={dept.id}
                  onClick={() => setSelectedDepartment(dept.id)}
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 ${
                    selectedDepartment === dept.id
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
                  }`}
                >
                  <dept.icon className="w-4 h-4" />
                  {dept.name}
                </button>
              ))}
            </div>

            {/* Job Listings */}
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className={`cyber-card p-6 hover:scale-105 transition-all duration-300 ${job.featured ? 'ring-2 ring-cyan-400' : ''}`}>
                  {job.featured && (
                    <div className="flex items-center mb-4">
                      <Star className="w-5 h-5 text-yellow-400 mr-2" />
                      <span className="text-yellow-400 font-semibold">Featured Position</span>
                    </div>
                  )}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Briefcase className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          Posted {job.posted}
                        </div>
                      </div>
                    </div>
                    <a
                      href={`/careers/${job.id}`}
                      className="cyber-button px-6 py-3 text-center mt-4 md:mt-0 inline-flex items-center justify-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-cyan-400 mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                            {req}
                          </li>
                        ))}
                        {job.requirements.length > 3 && (
                          <li className="text-sm text-gray-400">
                            +{job.requirements.length - 3} more requirements
                          </li>
                        )}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-purple-400 mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <Briefcase className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-2">No positions found</h3>
                <p className="text-gray-300">Try selecting a different department or check back later.</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto text-center">
            <div className="cyber-card max-w-4xl mx-auto p-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Role?
              </h2>
              <p className="text-gray-300 text-lg mb-8">
                We're always looking for talented individuals. Send us your resume and let us know 
                how you can contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/contact" className="cyber-button inline-flex items-center justify-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Resume
                </a>
                <a href="/team" className="cyber-button-secondary inline-flex items-center justify-center">
                  <Users className="w-5 h-5 mr-2" />
                  Meet the Team
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default CareersPage;