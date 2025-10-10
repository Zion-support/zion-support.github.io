'use client';
import React from 'react';
import { Star, Users, Heart, Award, MapPin, Clock, CheckCircle, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';
import SEOHead from '../components/EnhancedSEOHead';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong background in machine learning and deep learning',
        'Experience with MLOps and model deployment'
      ],
      salary: '$120,000 - $180,000',
      benefits: ['Stock options', 'Health insurance', 'Remote work', 'Learning budget']
    },
    {
      id: 2,
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'AWS, Azure, GCP certifications preferred',
        '7+ years cloud architecture experience',
        'Experience with Kubernetes and Docker',
        'Strong knowledge of DevOps practices',
        'Experience with infrastructure as code'
      ],
      salary: '$140,000 - $200,000',
      benefits: ['Stock options', 'Health insurance', 'Flexible hours', 'Conference budget']
    },
    {
      id: 3,
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Extract insights from complex datasets and build predictive models for business intelligence.',
      requirements: [
        'PhD or Master\'s in Data Science, Statistics, or related field',
        '4+ years experience with Python, R, SQL',
        'Experience with big data technologies (Spark, Hadoop)',
        'Strong statistical and mathematical background',
        'Experience with data visualization tools'
      ],
      salary: '$110,000 - $160,000',
      benefits: ['Stock options', 'Health insurance', 'Remote work', 'Research budget']
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation for our development teams.',
      requirements: [
        '3+ years DevOps experience',
        'Experience with Jenkins, GitLab CI, or similar',
        'Knowledge of containerization (Docker, Kubernetes)',
        'Experience with monitoring and logging tools',
        'Scripting skills (Bash, Python, or similar)'
      ],
      salary: '$100,000 - $150,000',
      benefits: ['Stock options', 'Health insurance', 'Remote work', 'Equipment budget']
    },
    {
      id: 5,
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful, responsive user interfaces for our AI and IT solutions.',
      requirements: [
        '3+ years React/TypeScript experience',
        'Experience with modern CSS frameworks',
        'Knowledge of responsive design principles',
        'Experience with testing frameworks',
        'Portfolio of previous work'
      ],
      salary: '$90,000 - $140,000',
      benefits: ['Stock options', 'Health insurance', 'Remote work', 'Design tools budget']
    },
    {
      id: 6,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and development for our AI-powered solutions.',
      requirements: [
        '5+ years product management experience',
        'Experience with AI/ML products preferred',
        'Strong analytical and communication skills',
        'Experience with agile development',
        'MBA or technical background preferred'
      ],
      salary: '$130,000 - $180,000',
      benefits: ['Stock options', 'Health insurance', 'Remote work', 'Conference budget']
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: '🏠',
      title: 'Flexible Work',
      description: 'Remote-first culture with flexible hours and unlimited PTO'
    },
    {
      icon: '📚',
      title: 'Learning & Development',
      description: '$3,000 annual learning budget for courses, conferences, and certifications'
    },
    {
      icon: '💻',
      title: 'Top Equipment',
      description: 'Latest MacBook Pro, monitor, and all the tools you need to succeed'
    },
    {
      icon: '🎯',
      title: 'Career Growth',
      description: 'Clear promotion paths and opportunities to work on cutting-edge projects'
    }
  ];

  const values = [
    {
      icon: Star,
      title: 'Innovation',
      description: 'We push the boundaries of what\'s possible with technology and constantly explore new frontiers.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and work together to achieve extraordinary results.'
    },
    {
      icon: Heart,
      title: 'Impact',
      description: 'We create solutions that make a real difference in people\'s lives and businesses.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do and never settle for good enough.'
    }
  ];

  return (
    <>
      <SEOHead
        title="Careers - Zion Tech Group | Join Our Team"
        description="Join Zion Tech Group and work on cutting-edge AI and IT solutions. Explore open positions, benefits, and our company culture."
        keywords={['careers', 'jobs', 'AI engineer', 'cloud architect', 'data scientist', 'DevOps', 'remote work', 'tech jobs']}
        canonicalUrl="https://ziontechgroup.com/careers"
      />

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide. Be part of a team that's shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#positions"
                className="cyber-button text-center"
              >
                View Open Positions
                <ArrowRight className="w-4 h-4 ml-2 inline" />
              </a>
              <a
                href="/contact"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
              >
                Contact Us
              </a>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Our Values
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <value.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="positions" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Open Positions
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Join our team of experts and work on projects that make a real impact.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="cyber-card hologram-card p-8 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2 hover:text-cyan-400 transition-colors">
                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-2">{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">
                      {position.type}
                    </span>
                  </div>

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{position.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.salary}</span>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-300 text-sm">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-3 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-3">Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {position.benefits.map((benefit, benefitIndex) => (
                        <span
                          key={benefitIndex}
                          className="px-2 py-1 bg-gray-800 text-cyan-400 text-xs rounded-full"
                        >
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>

                  <button className="w-full cyber-button text-center">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 neon-text">
                Why Work With Us?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We offer comprehensive benefits and a supportive work environment that helps you thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Culture Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-8 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
                Our Culture
              </h2>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto">
                At Zion Tech Group, we believe that great work happens when people feel valued, supported, and inspired. 
                We foster a culture of innovation, collaboration, and continuous learning where everyone can grow and make an impact.
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
                  <p className="text-gray-300">Team Members</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">95%</div>
                  <p className="text-gray-300">Employee Satisfaction</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">15+</div>
                  <p className="text-gray-300">Countries</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="cyber-button text-center"
                >
                  Join Our Team
                  <ArrowRight className="w-4 h-4 ml-2 inline" />
                </a>
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300"
                >
                  Email Us
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