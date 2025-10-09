'use client';
import React, { useState } from 'react';
import { MapPin, Clock, Users, Brain, Code, Shield, BarChart, Mail, Phone } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const jobCategories = [
    { id: 'all', name: 'All Positions', icon: Users },
    { id: 'ai', name: 'AI & ML', icon: Brain },
    { id: 'engineering', name: 'Engineering', icon: Code },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'data', name: 'Data Science', icon: BarChart }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & ML',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
      category: 'ai',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, GCP, Azure)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary ($120k - $180k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      category: 'engineering',
      description: 'Build scalable web applications and APIs using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps'
      ],
      benefits: [
        'Competitive salary ($90k - $130k)',
        'Health, dental, vision insurance',
        '401(k) with company matching',
        'Flexible PTO',
        'Home office stipend'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      category: 'security',
      description: 'Protect our systems and data with advanced security measures and monitoring.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years cybersecurity experience',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC2, ISO27001)'
      ],
      benefits: [
        'Competitive salary ($100k - $150k)',
        'Health, dental, vision insurance',
        'Professional certification reimbursement',
        'Flexible work arrangements',
        'Security conference attendance'
      ]
    },
    {
      id: 4,
      title: 'Data Scientist',
      department: 'Data Science',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      category: 'data',
      description: 'Extract insights from complex data and build predictive models.',
      requirements: [
        'Master\'s degree in Data Science or related field',
        '3+ years data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with ML frameworks',
        'Strong statistical and analytical skills'
      ],
      benefits: [
        'Competitive salary ($95k - $140k)',
        'Health, dental, vision insurance',
        'Research and development time',
        'Conference attendance budget',
        'Flexible work arrangements'
      ]
    },
    {
      id: 5,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '4+ years',
      category: 'ai',
      description: 'Lead product strategy and development for AI-powered solutions.',
      requirements: [
        'Bachelor\'s degree in Business or Technical field',
        '4+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile methodologies'
      ],
      benefits: [
        'Competitive salary ($110k - $160k)',
        'Equity participation',
        'Health, dental, vision insurance',
        'Professional development budget',
        'Flexible work arrangements'
      ]
    }
  ];

  const benefits = [
    {
      icon: Brain,
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest AI and machine learning technologies'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Join a team of passionate innovators and problem-solvers'
    },
    {
      icon: MapPin,
      title: 'Flexible Location',
      description: 'Work remotely or from our Delaware office'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Flexible hours and unlimited PTO policy'
    }
  ];

  const filteredJobs = selectedCategory === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            Join Our Team
          </h1>
          <p className="text-xl text-cyan-400 mb-8 font-medium">
            Build the Future of AI
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-8">
            Join our team of AI experts, engineers, and innovators who are building 
            the next generation of intelligent business solutions.
          </p>
        </section>

        {/* Benefits Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Why Work With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Job Categories */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">
            Open Positions
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {jobCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all ${
                  selectedCategory === category.id
                    ? 'bg-cyan-400 text-slate-900'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>

          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="cyber-card p-6 hover:scale-105 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-300">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {job.type}
                      </span>
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <a
                      href={`mailto:careers@ziontechgroup.com?subject=Application for ${job.title}`}
                      className="cyber-button px-6 py-3 text-sm font-semibold"
                    >
                      Apply Now
                    </a>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{job.description}</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Requirements:</h4>
                    <ul className="space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <div className="w-2 h-2 bg-cyan-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Benefits:</h4>
                    <ul className="space-y-1">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-sm text-gray-300">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center">
          <div className="cyber-card p-8 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4 neon-text">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-gray-300 mb-6 text-lg">
              We're always looking for talented individuals who share our passion for AI and innovation. 
              Send us your resume and let us know how you'd like to contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:careers@ziontechgroup.com"
                className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              >
                Send Your Resume
              </a>
              <a
                href="tel:+13024640950"
                className="flex items-center justify-center gap-2 border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CareersPage;