'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements?: string[];
  benefits?: string[];
  posted: string;
  featured: boolean;
},
  requirements: string[];
  benefits: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design and implement cutting-edge AI solutions for enterprise clients.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years AI experience', 'Machine Learning expertise']
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of deep learning algorithms',
        'Previous experience in production AI systems'
      ],
      benefits: [
        'Competitive salary: $120,000 - $180,000',
        'Equity participation',
        'Flexible remote work',
        'Professional development budget'
      ],
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications']
    },
    {
      title: 'Data Scientist',
      department: 'Data Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex datasets to drive business decisions.',
      requirements: ['Python, R, SQL', '3+ years data science experience', 'Statistical analysis skills']
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong knowledge of infrastructure as code',
        'Previous experience with microservices architecture'
      ],
      benefits: [
        'Competitive salary: $140,000 - $200,000',
        'Comprehensive health benefits',
        '401k with company matching',
        'Flexible work arrangements'
      ],
      posted: '1 week ago',
      featured: true
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and infrastructure from cyber threats.',
      requirements: [
        '4+ years experience in cybersecurity',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)',
        'Strong analytical and problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Health, dental, and vision insurance',
        'Professional development opportunities',
        'Remote work options'
      ],
      posted: '3 days ago',
      featured: false
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Streamline our development and deployment processes with modern DevOps practices.',
      requirements: [
        '3+ years experience in DevOps',
        'Experience with CI/CD pipelines',
        'Knowledge of containerization and orchestration',
        'Scripting skills (Python, Bash, PowerShell)',
        'Experience with monitoring and logging tools'
      ],
      benefits: [
        'Competitive salary: $90,000 - $130,000',
        'Flexible PTO policy',
        'Learning and development budget',
        'Stock options'
      ],
      posted: '5 days ago',
      featured: false
    }
  ];

  const companyValues = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, delivering exceptional results for our clients.'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and collaboration to achieve great things together.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-500" />,
      title: 'Passion',
      description: 'We are passionate about technology and its potential to transform businesses and lives.'
    },
    {
      icon: <Award className="w-8 h-8 text-green-500" />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously seek new ways to solve complex problems.'
    }
  ];

  const benefits = [
    {
      icon: <Zap className="w-6 h-6 text-blue-500" />,
      title: 'Competitive Compensation',
      description: 'Above-market salaries and performance bonuses'
    },
    {
      icon: <Heart className="w-6 h-6 text-red-500" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision coverage'
    },
    {
      icon: <GraduationCap className="w-6 h-6 text-green-500" />,
      title: 'Learning & Development',
      description: 'Professional development budget and training opportunities'
    },
    {
      icon: <Clock className="w-6 h-6 text-purple-500" />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible schedules'
    },
    {
      icon: <Award className="w-6 h-6 text-yellow-500" />,
      title: 'Career Growth',
      description: 'Clear career paths and advancement opportunities'
    },
    {
      icon: <Users className="w-6 h-6 text-indigo-500" />,
      title: 'Great Culture',
      description: 'Inclusive, diverse, and supportive work environment'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cloud computing, cybersecurity, and more." />
        <meta name="keywords" content="tech careers, AI jobs, cloud computing jobs, cybersecurity careers, software engineering jobs" />
      </Helmet>

      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="relative max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our Team
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Work on cutting-edge AI and IT solutions that transform businesses worldwide.
          </p>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-4">
                  <div className="flex items-center space-x-1">
                    <Briefcase className="w-4 h-4" />
                    <span>{position.department}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <MapPin className="w-4 h-4" />
                    <span>{position.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{position.type}</span>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <div className="mb-4">
                  <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {position.requirements?.map((req, reqIndex) => (
                      <li key={reqIndex} className="flex items-center space-x-2">
                        <span className="w-1 h-1 bg-purple-400 rounded-full"></span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                  Apply Now
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Join Our Team
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              Be part of a team that's shaping the future of technology and transforming businesses worldwide
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-blue-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200 flex items-center justify-center gap-2">
                View Open Positions
                <ArrowRight size={20} />
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors duration-200">
                Learn About Our Culture
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Benefits & Perks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
          <div className="mt-8">
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
            >
              Get in Touch
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;