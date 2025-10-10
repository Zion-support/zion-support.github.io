'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, GraduationCap, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  posted: string;
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        '5+ years experience in AI/ML development',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills',
        'PhD or Master\'s degree in Computer Science preferred'
      ],
      posted: '2 days ago',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, and GCP',
        'Experience with microservices and containerization',
        'Strong understanding of security best practices',
        'Relevant certifications preferred'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets and ensure compliance with security standards.',
      requirements: [
        '4+ years experience in cybersecurity',
        'Knowledge of security frameworks (NIST, ISO 27001)',
        'Experience with penetration testing and vulnerability assessment',
        'Strong analytical and problem-solving skills',
        'Relevant certifications (CISSP, CISM, CEH) preferred'
      ],
      posted: '3 days ago',
      featured: true
    },
    {
      id: '4',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Extract insights from complex data sets to drive business decisions and improve client outcomes.',
      requirements: [
        '3+ years experience in data science',
        'Proficiency in Python, R, SQL',
        'Experience with machine learning algorithms',
        'Strong statistical and analytical skills',
        'Master\'s degree in Data Science or related field'
      ],
      posted: '5 days ago',
      featured: false
    }
  ];

  const values = [
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and open communication to achieve great results.'
    },
    {
      icon: <Heart className="w-8 h-8 text-red-600" />,
      title: 'Passion',
      description: 'We\'re passionate about technology and its potential to solve real-world problems.'
    },
    {
      icon: <Award className="w-8 h-8 text-purple-600" />,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do and continuously improve our processes.'
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-600" />,
      title: 'Innovation',
      description: 'We embrace innovation and continuously push the boundaries of what\'s possible with technology.'
    }
  ];

  const benefits = [
    'Competitive salary and equity participation',
    'Comprehensive health, dental, and vision insurance',
    '401k with company matching',
    'Flexible work arrangements and remote work options',
    'Professional development and training opportunities',
    'Unlimited vacation and paid time off',
    'Team building events and company retreats',
    'Mentorship and career growth opportunities',
    'Wellness programs and gym memberships'
  ];

  const stats = [
    { icon: <Users className="w-8 h-8 text-blue-600" />, value: '50+', label: 'Team Members' },
    { icon: <Award className="w-8 h-8 text-green-600" />, value: '98%', label: 'Employee Satisfaction' },
    { icon: <GraduationCap className="w-8 h-8 text-purple-600" />, value: '100%', label: 'Learning & Development' },
    { icon: <Star className="w-8 h-8 text-yellow-600" />, value: '4.8/5', label: 'Glassdoor Rating' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of technology. Explore career opportunities in AI, cloud computing, and cybersecurity." />
        <meta name="keywords" content="tech careers, AI jobs, cloud computing jobs, cybersecurity careers, remote work" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Join Our
            <span className="block bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of technology. We're looking for passionate individuals who want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
            >
              <span>Learn About Us</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Our Values</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              These core values guide everything we do and shape our company culture.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-4">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Benefits & Perks</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer comprehensive benefits and perks to support our team members' well-being and career growth.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                <span className="text-gray-300">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-white mb-6">Open Positions</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your career.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {openPositions.map((position) => (
              <div key={position.id} className="bg-slate-800/50 rounded-2xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{position.title}</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  {position.featured && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full text-sm font-medium">
                      Featured
                    </span>
                  )}
                </div>
                
                <p className="text-gray-300 mb-4">{position.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Requirements:</h4>
                  <ul className="text-sm text-gray-300 space-y-1">
                    {position.requirements.slice(0, 3).map((req, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mr-2 mt-2 flex-shrink-0"></div>
                        {req}
                      </li>
                    ))}
                    {position.requirements.length > 3 && (
                      <li className="text-cyan-400 text-sm">+{position.requirements.length - 3} more requirements</li>
                    )}
                  </ul>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">Posted {position.posted}</span>
                  <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-2 px-6 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300">
                    Apply Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <span>Contact Us</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
              <button className="border border-cyan-500 text-cyan-400 font-semibold py-3 px-8 rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2">
                <span>Send Resume</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;