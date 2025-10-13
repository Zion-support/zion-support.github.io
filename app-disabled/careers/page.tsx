'use client;

import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {}
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedLocation, setSelectedLocation] = useState('all');

  const positions: JobPosition[] = [
    {}
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      posted: '2 days ago',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: []
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: []
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      featured: true
    },
    {}
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
      description: 'Lead development of cutting-edge AI solutions and machine learning models.'
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.'
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Austin',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets and build predictive models.'
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
    },
    {
        '401(k) with company matching',
        'Flexible PTO policy'
      ],
      posted: '1 week ago',
      description: 'Research and develop quantum algorithms and applications for real-world business problems.',
      requirements: []
        'PhD in Physics, Computer Science, or related field',
        '3+ years quantum computing research experience',
        'Knowledge of quantum algorithms and programming',
        'Experience with quantum simulators and hardware',
        'Strong publication record'
      ],
      benefits: []
        'Research autonomy and resources',
        'Conference and publication support',
        'Collaboration with top researchers',
        'Competitive salary and benefits',
        'State-of-the-art facilities'
      ],
      featured: true
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      posted: '3 days ago',
      description: 'Build and maintain scalable infrastructure for our AI and cloud services.',
      requirements: []
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years DevOps experience',
        'Expertise in Kubernetes, Docker, CI/CD',
        'Experience with cloud platforms',
        'Knowledge of monitoring and logging tools'
      ],
      benefits: []
        'Competitive salary',
        'Health and dental insurance',
        'Flexible PTO',
        'Learning and development opportunities',
        'Team building events'
      description: 'Automate deployment pipelines and manage infrastructure at scale.'
        'Health and dental insurance'
      ],
      featured: false
    },
    {}
      id: 4,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      posted: '5 days ago',
      description: 'Drive product strategy and roadmap for our AI-powered solutions.',
      requirements: []
        'Bachelor\'s degree in Business, Engineering, or related field',
        '4+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and communication skills',
        'Experience with agile development'
      ],
      benefits: []
        'Competitive salary and equity',
        'Comprehensive benefits package',
        'Remote work flexibility',
        'Professional development opportunities',
        'Stock options'
      ],
      featured: false
    },
    {}
      id: 5,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      posted: '1 week ago',
      description: 'Protect our systems and data with advanced cybersecurity measures and AI-powered threat detection.',
      requirements: []
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years cybersecurity experience',
        'Certifications (CISSP, CISM, etc.)',
        'Experience with security tools and frameworks',
        'Knowledge of AI security best practices'
      ],
      benefits: []
        'Competitive salary',
        'Health and wellness benefits',
        'Professional certification support',
        'Flexible work schedule',
        'Security conference attendance'
      ],
      featured: false
    },
    {}
      id: 6,
      title: 'Data Scientist',
      department: 'Data',
      location: 'Seattle, WA',
      type: 'Full-time',
      experience: '3+ years',
      posted: '2 weeks ago',
      description: 'Extract insights from complex data sets to drive business decisions and improve AI models.',
      requirements: []
        'Master\'s degree in Data Science, Statistics, or related field',
        '3+ years data science experience',
        'Expertise in Python, R, SQL',
        'Experience with machine learning',
        'Strong statistical analysis skills'
      ],
      benefits: []
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Data science conference attendance',
        'Access to cutting-edge tools',
        'Collaborative team environment'
      ],
      featured: false
    }

  ];

  const departments = [;
    { id: 'all', name: 'All Departments },
    { id: 'Engineering', name: 'Engineering },
    { id: 'Research', name: 'Research },
    { id: 'Product', name: 'Product },
    { id: 'Security', name: 'Security },
    { id: 'Data', name: 'Data }

  ];

  const locations = [;
    { id: 'all', name: 'All Locations },
    { id: 'Remote', name: 'Remote },
    { id: 'San Francisco, CA', name: 'San Francisco, CA },
    { id: 'New York, NY', name: 'New York, NY },
    { id: 'Austin, TX', name: 'Austin, TX },
    { id: 'Seattle, WA', name: 'Seattle, WA }

  ];

  const filteredPositions = positions.filter(position => {}
    const matchesDepartment = selectedDepartment === 'all' || position.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'all' || position.location === selectedLocation;
    return matchesDepartment && matchesLocation;

  });

  const featuredPositions = filteredPositions.filter(position => position.featured);
  const regularPositions = filteredPositions.filter(position => !position.featured);
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years ML experience', 'PhD in AI/ML preferred']
    },
    {
      id: '2,
      title: 'Cloud Architect,
      department: 'Cloud Services,
      location: 'New York, NY,
      type: 'Full-time,
      experience: '7+ years,
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.,
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications]});)
    {}
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
        'Competitive salary: $85,000 - $125,000',
        'Health insurance',
        'Flexible PTO',
        'Professional development opportunities'
      ],
      posted: '4 days ago',
      featured: false
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets and build predictive models for business optimization.',
      requirements: ['Python, R, SQL', '3+ years data science', 'Statistics background']
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Automate deployment pipelines and maintain high-availability systems.',
      requirements: ['Docker, Kubernetes, CI/CD', '4+ years DevOps', 'Linux administration']
    },
    {
      title: 'Frontend Developer',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build responsive and interactive user interfaces for our AI-powered applications.',
      requirements: ['React, TypeScript, CSS', '3+ years frontend', 'UI/UX experience']
    },
    {
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead product strategy and roadmap for AI-powered solutions.',
      requirements: ['Product management', '5+ years experience', 'AI/ML knowledge']
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Health, dental, and vision insurance',
    'Flexible work arrangements',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities',
    '401(k) with company matching',
    'Unlimited PTO',
    'Learning and development programs'
  ];

  const benefits = [;;

    'Competitive salary and equity,
    'Comprehensive health insurance,
    'Flexible work arrangements,
    'Professional development budget,
    'Top-tier equipment and tools,
    'Team building events,
    'Career growth opportunities,
    '401k matching program,
    'Unlimited PTO,
    Mental health support
  ];

  const values = [
    {}
      icon: Lightbulb,
      title: 'Innovation,
      description: 'We push the boundaries of what\'s possible with technology,
      color: 'text-yellow-400});)
},
    {}
      icon: Users,
      title: 'Collaboration,
      description: 'We work together to achieve extraordinary results,
      color: 'text-blue-400});)
},
    {}
      icon: Target,
      title: 'Excellence,
      description: 'We strive for the highest quality in everything we do,
      color: 'text-green-400});)
},
    {}
      icon: Heart,
      title: 'Integrity,
      description: 'We build trust through transparency and honesty,
      color: 'text-red-400});)
}

  ];

  const culture = [
    {}
      stat: '98%',
      label: 'Employee Satisfaction',
      description: 'Our team loves working here'});;)
},
    {}
      stat: '50+',
      label: 'Team Members',
      description: 'Growing team of experts'});;)
},
    {}
      stat: '15+',
      label: 'Countries',
      description: 'Global remote team'});;)
},
    {}
      stat: '4.9/5',
      label: 'Glassdoor Rating',
      description: 'Highly rated workplace'});;)
}

  ];

  return (

    <>
      <Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
        </section>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
                {departments.map((dept) => (}
                  <option key={dept.id} value={dept.id} className="bg-slate-800">
                    {dept.name}

                  </option>
                ))}

              </select>
              
              <select
                value={selectedLocation}

                onChange={(e) => setSelectedLocation(e.target.value)}

                className="px-6 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:border-cyan-400 transition-colors
              >
                {locations.map((loc) => (}
                  <option key={loc.id} value={loc.id} className="bg-slate-800">
                    {loc.name}

                  </option>
                ))}

              </select>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Work on cutting-edge AI and IT solutions that transform businesses worldwide. 
              Be part of a team that's shaping the future of technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="cyber-button">
                View Open Positions
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </button>
              <a
                href="mailto:careers@ziontechgroup.com"
                className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300"
              >
                Send Resume
              </a>
            </div>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-2">{job.title}</h3>
                <div className="flex items-center text-gray-300 mb-4">
                  <MapPin className="w-4 h-4 mr-2" />
                  <span className="mr-4">{job.location}</span>
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{job.type}</span>
                </div>
                <p className="text-gray-300 mb-6">{job.description}</p>
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Requirements:</h4>
                  <ul className="space-y-1">
                    {job.requirements.map((req, reqIndex) => (
                      <li key={reqIndex} className="text-sm text-gray-300">• {req}</li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

        {/* Company Values */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Our Values
            </h2>
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
        <section className="py-16 px-4 bg-gray-900/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Open Positions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((position, index) => (
                <div
                  key={index}
                  className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {position.title}
                      </h3>
                      <p className="text-cyan-400 font-medium">{position.department}</p>
                    </div>
                    <span className="bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                      {position.type}
                    </span>
                  </div>

        {featuredPositions.length > 0 && (}
          <section className="py-16 px-4">
            <div className="max-w-7xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Featured Positions</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredPositions.map((position) => (}
                  <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-8 hover:border-cyan-400/50 transition-all duration-300 group">
                    <div className="flex items-start justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors>
                          {position.title}

                        </h3>
                        <p className="text-cyan-400 font-medium>{position.department}</p>
                      </div>
                      <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 rounded-full text-sm font-medium>
                        Featured
                      </span>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed>
                      {position.description}

                    </p>
                    
                    <div className="flex flex-wrap gap-4 mb-6 text-sm text-gray-400>
                      <div className="flex items-center gap-1>
                        <MapPin className="w-4 h-4 />
                        <span>{position.location}</span>
                      </div>
                      <div className="flex items-center gap-1>
                        <Briefcase className="w-4 h-4 />
                        <span>{position.type}</span>
                      </div>
                      <div className="flex items-center gap-1>
                        <GraduationCap className="w-4 h-4 />
                        <span>{position.experience}</span>
                      </div>
                      <div className="flex items-center gap-1>
                        <Users className="w-4 h-4 />
                        <span>Posted {position.posted}</span>
                      </div>
                    </div>
                    
                    <button className="w-full flex items-center justify-center gap-2 bg-cyan-400 text-slate-900 font-semibold py-3 rounded-lg hover:bg-cyan-300 transition-colors>
                      <span>Apply Now</span>
                      <ArrowRight className="w-4 h-4 />
                    </button>
                  </div>
                ))}              </p>
            </div>

            <div></div>
              {values.map((value, index) => (}
                <div></div>
                  <div></div>
                    <value.icon className="w-8 h-8 />
                  </div>
                  <h></h>{value.title}</h3>
                  <p className="text-gray-300>{value.description}</p>
                </div>
                <h3 className="text-xl font-bold text-white mb-3>Expert Solutions</h3>
                <p className="text-gray-300>Professional Page services with proven results</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>24/7 Support</h3>
                <p className="text-gray-300>Round-the-clock assistance for your business needs</p>
              </div>
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 text-center>
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center>
                  <CheckCircle className="w-8 h-8 text-white />
                </div>
                <h3 className="text-xl font-bold text-white mb-3>Custom Solutions</h3>
                <p className="text-gray-300>Tailored Page solutions for your specific requirements</p>
              </div>
            </div>
          </section>
        )}
                  <p className="text-gray-300 mb-4">{position.description}</p>
                  <p className="text-gray-300 mb-4 text-sm">{position.description}</p>

                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
      {/* Why Work With Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                At Zion Tech Group, we believe in empowering our team members to reach their full potential while building innovative solutions that make a real impact.
              </p>
            </div>

                  <div className="mb-6">
                    <h4 className="text-white font-semibold mb-2 text-sm">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.map((req, reqIndex) => (
                        <li key={reqIndex} className="text-gray-300 text-xs flex items-center">
                          <CheckCircle className="w-3 h-3 text-cyan-400 mr-2 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full py-2 px-4 bg-gray-800/50 border border-gray-600 rounded-lg text-gray-300 hover:bg-gray-700/50 transition-colors text-sm">
                    Apply Now
                    <ArrowRight className="w-4 h-4 inline ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
                <div key={position.id} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow">
                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {position.title}
                      </h3>
                      <div className="flex flex-wrap items-center text-sm text-gray-500 mb-3">
                        <span className="mr-4">{position.department}</span>
                        <MapPin className="w-4 h-4 mr-1" />
                        <span className="mr-4">{position.location}</span>
                        <Briefcase className="w-4 h-4 mr-1" />
                        <span className="mr-4">{position.type}</span>
                        <span>{position.experience}</span>

                <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-300 group>
                  <div className="mb-4>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors>
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">All Open Positions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularPositions.map((position) => (}
                <div key={position.id} className="bg-white/10 backdrop-blur-lg rounded-2xl border border-white/20 p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {position.title}

                    </h3>
                    <p className="text-cyan-400 font-medium text-sm>{position.department}</p>
                  </div>
                  
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed>
                    {position.description}

                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-4 text-xs text-gray-400>
                    <div className="flex items-center gap-1>
                      <MapPin className="w-3 h-3 />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-1>
                      <Briefcase className="w-3 h-3 />
                      <span>{position.type}</span>
                    </div>
                    <div className="flex items-center gap-1>
                      <Users className="w-3 h-3 />
                      <span>Posted {position.posted}</span>
                    </div>
                  </div>
                  
                  <button className="w-full flex items-center justify-center gap-2 bg-white/10 text-white font-medium py-2 rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors text-sm>
                    <span>View Details</span>
                    <ArrowRight className="w-3 h-3 />
                  </button>
                </div>
              ))}
            </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Why Work With Us
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="cyber-card hologram-card p-8 text-center">
                <Briefcase className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Career Growth</h3>
                <p className="text-gray-300">
                  Advance your career with mentorship programs, learning opportunities, and clear growth paths.
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Cutting-Edge Tech</h3>
                <p className="text-gray-300">
                  Work with the latest AI, cloud, and emerging technologies that shape the future.
                </p>
              </div>
              
              <div className="cyber-card hologram-card p-8 text-center">
                <GraduationCap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-4">Learning & Development</h3>
                <p className="text-gray-300">
                  Continuous learning with conferences, courses, and hands-on training opportunities.
                </p>
              </div>
            </div>
            
            <div className="mt-12 cyber-card hologram-card p-8">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">Employee Benefits</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="cyber-card hologram-card p-12 text-center">
              <h2 className="text-3xl font-bold text-white mb-6 neon-text">
                Ready to Join Our Team?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Don't see a position that fits? We're always looking for talented individuals who share our passion for innovation. 
                Send us your resume and let's start a conversation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="cyber-button text-center"
                >
                  Send Your Resume
                  <ArrowRight className="w-4 h-4 inline ml-2" />
                </a>
                <a
                  href="tel:+13024640950"
                  className="border-2 border-cyan-500 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-500 hover:text-white transition-all duration-300 text-center"
                >
                  Call (302) 464-0950
                </a>
              </div>
            </div>

            {regularPositions.length === 0 && (}
              <div className="text-center py-16">
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No positions found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your filters or check back later for new opportunities</p>
                <button
                  onClick={() => {}
                    setSelectedDepartment('all');
                    setSelectedLocation('all');
                  }}

                  className="px-8 py-3 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors
                >
                  Clear Filters
                </button>
              </div>
            )}

          </div>
        </section>

        {/* Benefits Section */}

        <section className="py-16 px-4>
          <div className="max-w-7xl mx-auto>
            <h2 className="text-3xl font-bold text-white mb-12 text-center>Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8>
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Star className="w-8 h-8 text-cyan-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Cutting-Edge Technology</h3>
                <p className="text-gray-300>Work with the latest AI, quantum computing, and emerging technologies that shape the future.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <Users className="w-8 h-8 text-purple-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Collaborative Culture</h3>
                <p className="text-gray-300>Join a diverse team of experts who value collaboration, innovation, and continuous learning.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 text-center>
                <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-6>
                  <CheckCircle className="w-8 h-8 text-green-400 />
                </div>
                <h3 className="text-xl font-bold text-white mb-4>Comprehensive Benefits</h3>
                <p className="text-gray-300>Enjoy competitive compensation, health benefits, flexible work arrangements, and professional development opportunities.</p>
              </div>            </div>
          </div>
        </section>

        {/* CTA Section */}

        <section className="py-16 px-4>
          <div className="max-w-4xl mx-auto text-center>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20>
              <h2 className="text-3xl font-bold text-white mb-6>
                Dont See Your Dream Job?
              </h2>
              <p className="text-xl text-gray-300 mb-8>
                We're always looking for talented individuals. Send us your resume and let us know how youd like to contribute to our mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center>
                <button className="px-8 py-4 bg-cyan-400 text-slate-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors>
                  Submit Your Resume
                </button>
                <button className="px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-slate-900 transition-colors>
                  Learn About Our Culture
                </button>                <div
                  key={position.id}
                  className={`bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${}
                    position.featured ? 'border-purple-400 shadow-2xl shadow-purple-500/25' : 'border-white/20'
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                <div></div>
                  {position.featured && (}
                    <div></div>
                      <Star className="w-5 h-5 text-yellow-400 fill-current />
                      <spa></spa>Featured Position</span>
                    </div>
                  );

                  <div className="flex items-start justify-between mb-4>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors>
                        {position.title}

                      </h3>
                      <p className="text-cyan-400 font-medium>{position.department}</p>
                    </div>
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-sm rounded-full>
                    <span></span>                      {position.type}

                    <
                  <

                  <p className="text-gray-300 mb-6">{position.description}</p>

                  <div className="flex items-center gap-4 mb-6 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" 
                      <span>{position.location}<
                    <
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <spa></spa>{position.experience}</span>
                    </div>
                    <div></div>
                      <Users className="w-4 h-4" />
                      <spa></spa>Posted {position.posted}</span>
                    </div>
                  </div>

                          {req}
                        <)
                      ))}
                      {position.requirements.length > 3 && (}
                        <li className="text-sm text-gray-400">
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )}

                    </ul>
                  </div>

                  <div className="flex items-center justify-between>
                    <div className="text-sm text-gray-400>
                      {position.benefits.length} benefits included
                    </div>
                    <button className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105>
                      Apply Now
                      <ArrowRight className="w-4 h-4 />
                    </button>
                  </div>
                </div>
              ))}

export default CareersPage;
      {/* Culture & Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Our Culture & Values
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We foster an environment where innovation thrives and every team member can make a meaningful impact.
              </p>
            </div>
                </div>
              ))}

        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Careers services from Zion Tech Group" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Careers</h1>
          <p className="text-gray-300">Coming soon...</p>
        </div>
      </div>
    </>
  );
};

              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600">We believe in the power of teamwork and open communication.</p>
              </div>

              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600">We encourage creative thinking and embrace new technologies.</p>
              </div>

              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Integrity</h3>
                <p className="text-gray-600">We operate with honesty, transparency, and ethical practices.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Ready to Join Our Team?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Don't see a position that matches your skills? We're always looking for talented individuals. Send us your resume!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
              >
                Send Your Resume
              </a>
              <a
                href="/about"
                className="border border-white/20 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300"
              >
                Learn About Us
              </a>
export default CareersPage;
export default CareersPage;
