'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, ArrowRight, Phone, Mail } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead AI solution development and machine learning model implementation',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with DevOps and CI/CD',
        'Strong leadership and mentoring skills'
      ],
      featured: true
    },
    {
      id: 3,
      title: 'AI Product Manager',
      department: 'Product',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Drive AI product strategy and roadmap development',
      requirements: [
        'Bachelor\'s degree in Business or Technical field',
        '4+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical and strategic thinking',
        'Excellent communication and presentation skills'
      ],
      featured: false
    },
    {
      id: 4,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Implement and maintain security measures for AI and IT systems',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '3+ years cybersecurity experience',
        'Relevant certifications (CISSP, CISM, etc.)',
        'Experience with AI security challenges',
        'Strong attention to detail and problem-solving skills'
      ],
      featured: false
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Automate deployment and infrastructure management processes',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years DevOps experience',
        'Proficiency in Docker, Kubernetes, Terraform',
        'Experience with monitoring and logging tools',
        'Strong scripting and automation skills'
      ],
      featured: false
    },
    {
      id: 6,
      title: 'AI Research Scientist',
      department: 'Research',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: 'PhD + 2 years',
      description: 'Conduct cutting-edge research in artificial intelligence and machine learning',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '2+ years post-PhD research experience',
        'Strong publication record in top-tier venues',
        'Experience with deep learning and neural networks',
        'Excellent written and verbal communication skills'
      ],
      featured: false
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Competitive Compensation',
      description: 'Above-market salaries and performance bonuses'
    },
    {
      icon: Heart,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage'
    },
    {
      icon: Users,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: Award,
      title: 'Professional Development',
      description: 'Learning budget and conference attendance'
    },
    {
      icon: Briefcase,
      title: 'Career Growth',
      description: 'Clear advancement paths and mentorship programs'
    },
    {
      icon: Clock,
      title: 'Work-Life Balance',
      description: 'Generous PTO and sabbatical opportunities'
    }
  ];

  const stats = [
    {
      icon: Users,
      value: '50+',
      label: 'Team Members',
      description: 'Growing team of experts'
    },
    {
      icon: Star,
      value: '4.8/5',
      label: 'Employee Rating',
      description: 'Highly rated workplace'
    },
    {
      icon: Award,
      value: '15+',
      label: 'Countries',
      description: 'Global remote team'
    },
    {
      icon: Heart,
      value: '95%',
      label: 'Retention Rate',
      description: 'Happy and engaged team'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team of AI & IT Experts</title>
        <meta name="description" content="Join Zion Tech Group and work with cutting-edge AI and IT technologies. Explore open positions, benefits, and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, remote work, tech jobs, Zion Tech Group" />
        <link rel="canonical" href="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Work with cutting-edge AI and IT technologies while building solutions that transform businesses worldwide.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-cyan-400 text-sm font-medium">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore exciting career opportunities in AI, cloud computing, and IT solutions
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className={`bg-white/5 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 group ${
                    position.featured 
                      ? 'border-cyan-400/50 scale-105' 
                      : 'border-white/10 hover:border-cyan-400/30'
                  }`}
                >
                  {position.featured && (
                    <div className="absolute -top-3 right-6">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white text-xs font-semibold py-1 px-3 rounded-full">
                        Featured
                      </span>
                    </div>
                  )}
                  
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <Briefcase className="w-4 h-4" />
                      <span>{position.department}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                      <Clock className="w-4 h-4" />
                      <span>{position.type} • {position.experience}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{position.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-2">Key Requirements:</h4>
                    <ul className="space-y-1">
                      {position.requirements.slice(0, 3).map((req, index) => (
                        <li key={index} className="text-gray-300 text-sm">
                          • {req}
                        </li>
                      ))}
                      {position.requirements.length > 3 && (
                        <li className="text-gray-400 text-sm">
                          +{position.requirements.length - 3} more requirements
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <button className="w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 text-sm">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a supportive work environment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-400/30 transition-all duration-300 group">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-12 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-6">
                Don't See the Right Position?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:careers@ziontechgroup.com"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Mail className="w-5 h-5" />
                  Send Resume
                </a>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us
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