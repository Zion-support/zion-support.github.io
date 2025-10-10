'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star, Briefcase, GraduationCap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong background in machine learning and deep learning'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Stock options',
        'Health, dental, vision insurance',
        'Flexible work arrangements'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Drive product strategy and roadmap for AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business or Technology',
        '3+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Performance bonuses',
        'Professional development budget',
        'Remote work flexibility'
      ],
      posted: '2024-01-12',
      featured: true
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Build and maintain scalable cloud infrastructure for AI applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '4+ years DevOps experience',
        'Expertise in Docker, Kubernetes, CI/CD',
        'Cloud platform experience (AWS, Azure)'
      ],
      benefits: [
        'Competitive salary: $90,000 - $140,000',
        'Health insurance',
        '401(k) matching',
        'Learning and development opportunities'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: 4,
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: 'PhD + 2 years',
      description: 'Conduct cutting-edge research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '2+ years research experience',
        'Published papers in top-tier conferences',
        'Experience with large-scale AI models'
      ],
      benefits: [
        'Competitive salary: $130,000 - $200,000',
        'Research budget',
        'Conference attendance',
        'Academic collaboration opportunities'
      ],
      posted: '2024-01-08',
      featured: false
    },
    {
      id: 5,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful and responsive user interfaces for AI applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years React/TypeScript experience',
        'Experience with modern frontend frameworks',
        'Strong UI/UX design skills'
      ],
      benefits: [
        'Competitive salary: $80,000 - $120,000',
        'Health insurance',
        'Flexible schedule',
        'Remote work options'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: 6,
      title: 'AI Sales Engineer',
      department: 'Sales',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Help clients understand and implement AI solutions for their business needs.',
      requirements: [
        'Bachelor\'s degree in Engineering or Business',
        '2+ years technical sales experience',
        'Understanding of AI/ML technologies',
        'Excellent communication skills'
      ],
      benefits: [
        'Competitive salary: $70,000 - $110,000',
        'Commission structure',
        'Health insurance',
        'Travel opportunities'
      ],
      posted: '2024-01-03',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with performance bonuses and stock options'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented professionals in a supportive, innovative environment'
    },
    {
      icon: GraduationCap,
      title: 'Learning & Development',
      description: 'Continuous learning opportunities with conferences, courses, and certifications'
    },
    {
      icon: Briefcase,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules to support work-life balance'
    }
  ];

  const stats = [
    { label: 'Open Positions', value: '15+', icon: Briefcase },
    { label: 'Team Members', value: '50+', icon: Users },
    { label: 'Remote Workers', value: '80%', icon: MapPin },
    { label: 'Employee Satisfaction', value: '95%', icon: Star }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our AI Innovation Team</title>
        <meta name="description" content="Join Zion Tech Group and help shape the future of AI. Explore career opportunities in engineering, product, research, and more." />
        <meta name="keywords" content="AI careers, tech jobs, engineering positions, remote work, Zion Tech Group careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI and technology. Join a team of innovators, creators, and problem-solvers.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                View Open Positions
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Jobs */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Featured Positions</h2>
            <div className="space-y-8">
              {jobOpenings.filter(job => job.featured).map((job) => (
                <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-400 mb-4">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105">
                      Apply Now
                    </button>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">{job.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-3">Benefits:</h4>
                      <ul className="space-y-2">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start text-gray-300 text-sm">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
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

        {/* All Jobs Grid */}
        <section className="py-16 px-4 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">All Open Positions</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {jobOpenings.filter(job => !job.featured).map((job) => (
                <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex items-start justify-between mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {job.title}
                    </h3>
                    <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded-full text-xs font-medium">
                      {job.department}
                    </span>
                  </div>
                  <div className="space-y-2 mb-4 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{job.type}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{job.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">Posted: {new Date(job.posted).toLocaleDateString()}</span>
                    <button className="flex items-center space-x-1 text-cyan-400 hover:text-cyan-300 font-medium text-sm group-hover:translate-x-1 transition-all duration-300">
                      <span>Apply</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
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
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Send Resume
              </button>
              <button className="border border-white/20 text-white font-semibold py-4 px-8 rounded-lg hover:bg-white/10 transition-all duration-300">
                Learn More About Us
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;