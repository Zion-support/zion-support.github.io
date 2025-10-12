'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, CheckCircle, Star, Users, 
  MapPin, Clock, DollarSign, Calendar,
  Brain, Cloud, Shield, Code, Smartphone,
  BarChart3, Award, Lightbulb, Zap,
  Heart, Globe, Target, TrendingUp
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / New York, NY',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$120,000 - $160,000',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '7+ years',
      salary: '$140,000 - $180,000',
      description: 'Design and implement scalable cloud solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years of cloud architecture experience',
        'AWS, Azure, or GCP certifications preferred',
        'Experience with Kubernetes and Docker',
        'Strong leadership and client-facing skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-12',
      featured: false
    },
    {
      id: 3,
      title: 'Frontend Developer',
      department: 'Web Development',
      location: 'Remote / Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      salary: '$80,000 - $110,000',
      description: 'Build modern, responsive web applications using React and Next.js.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of frontend development experience',
        'Proficiency in React, Next.js, TypeScript',
        'Experience with Tailwind CSS',
        'Strong UI/UX design skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: 4,
      title: 'DevOps Engineer',
      department: 'DevOps & Infrastructure',
      location: 'Remote / Seattle, WA',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$100,000 - $130,000',
      description: 'Automate deployment pipelines and manage infrastructure for scalable applications.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '4+ years of DevOps experience',
        'Experience with CI/CD tools (Jenkins, GitLab CI)',
        'Proficiency in Infrastructure as Code (Terraform)',
        'Strong scripting skills (Bash, Python)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-08',
      featured: false
    },
    {
      id: 5,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Chicago, IL',
      type: 'Full-time',
      experience: '5+ years',
      salary: '$110,000 - $150,000',
      description: 'Protect our clients\' digital assets and ensure compliance with security standards.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '5+ years of cybersecurity experience',
        'CISSP, CISM, or similar certifications',
        'Experience with SIEM tools and incident response',
        'Knowledge of compliance frameworks (SOC 2, ISO 27001)'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget',
        'Unlimited PTO'
      ],
      posted: '2024-01-05',
      featured: false
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'Data & Analytics',
      location: 'Remote / Boston, MA',
      type: 'Full-time',
      experience: '4+ years',
      salary: '$95,000 - $125,000',
      description: 'Extract insights from data and build predictive models for business intelligence.',
      requirements: [
        'Master\'s degree in Data Science or related field',
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
        'Unlimited PTO'
      ],
      posted: '2024-01-03',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <DollarSign className="w-8 h-8 text-green-400" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries with equity options and performance bonuses'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-400" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family'
    },
    {
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance'
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-400" />,
      title: 'Learning & Growth',
      description: 'Professional development budget and access to cutting-edge technologies'
    },
    {
      icon: <Calendar className="w-8 h-8 text-purple-400" />,
      title: 'Time Off',
      description: 'Unlimited PTO policy and company holidays to recharge and explore'
    },
    {
      icon: <Users className="w-8 h-8 text-cyan-400" />,
      title: 'Great Team',
      description: 'Work with talented, passionate professionals in a collaborative environment'
    }
  ];

  const companyValues = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'Innovation',
      description: 'We embrace new technologies and creative solutions to solve complex problems'
    },
    {
      icon: <Shield className="w-8 h-8 text-green-400" />,
      title: 'Integrity',
      description: 'We maintain the highest ethical standards in all our interactions and decisions'
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to achieve excellence'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" />,
      title: 'Excellence',
      description: 'We strive for the highest quality in everything we do and continuously improve'
    }
  ];

  const stats = [
    { number: '50+', label: 'Team Members', icon: Users },
    { number: '15+', label: 'Countries', icon: Globe },
    { number: '99%', label: 'Employee Satisfaction', icon: Star },
    { number: '4.8/5', label: 'Glassdoor Rating', icon: Award },
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented professionals working on cutting-edge AI and IT solutions. Explore open positions and discover why Zion Tech Group is a great place to work." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, frontend developer, DevOps, cybersecurity, data scientist" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                Join Our
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent block">
                  Amazing Team
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Be part of a team that's shaping the future of technology. Work on cutting-edge projects 
                with talented professionals in a collaborative, innovative environment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="#open-positions"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                >
                  View Open Positions
                </Link>
                <Link
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work at <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Zion Tech Group</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just building software – we're building the future. Join us and be part of something extraordinary.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Values</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                These core values guide everything we do and shape our company culture.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {companyValues.map((value, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                        {value.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section id="open-positions" className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Positions</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Find your perfect role and join our team of talented professionals.
              </p>
            </div>

            <div className="max-w-6xl mx-auto space-y-6">
              {openPositions.map((position) => (
                <div
                  key={position.id}
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 mb-3">
                        <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                          {position.title}
                        </h3>
                        {position.featured && (
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 mb-4 text-sm text-gray-300">
                        <div className="flex items-center space-x-1">
                          <MapPin className="w-4 h-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="w-4 h-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Users className="w-4 h-4" />
                          <span>{position.experience}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <DollarSign className="w-4 h-4" />
                          <span>{position.salary}</span>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm font-medium">
                          {position.department}
                        </span>
                        <span className="px-3 py-1 bg-slate-700/50 text-gray-300 rounded-full text-sm">
                          Posted {new Date(position.posted).toLocaleDateString()}
                        </span>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0 lg:ml-6">
                      <Link
                        to={`/careers/${position.id}`}
                        className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 group-hover:translate-x-1"
                      >
                        <span>Apply Now</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-12 text-center relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5"></div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-white mb-6">
                  Don't See Your Perfect Role?
                </h2>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                  We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link
                    to="/contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
                  >
                    Send Your Resume
                  </Link>
                  <Link
                    to="/about"
                    className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300 transform hover:scale-105"
                  >
                    Learn More About Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;