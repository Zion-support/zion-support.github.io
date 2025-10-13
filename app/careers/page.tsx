import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, 
  Users, 
  Zap, 
  Shield, 
  Globe, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle, 
  Star, 
  Award,
  Brain,
  Code,
  BarChart3,
  Cloud,
  Database
} from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      icon: <Brain className="w-6 h-6" />,
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of ML algorithms and deep learning'
      ]
    },
    {
      title: 'Full Stack Developer',
      department: 'IT Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      icon: <Code className="w-6 h-6" />,
      description: 'Build scalable web applications and microservices using modern technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud deployment and DevOps practices'
      ]
    },
    {
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      icon: <BarChart3 className="w-6 h-6" />,
      description: 'Analyze complex data sets and develop predictive models for business insights.',
      requirements: [
        'Master\'s degree in Data Science, Statistics, or related field',
        '4+ years experience with Python, R, SQL',
        'Experience with data visualization tools',
        'Strong statistical and analytical skills'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '6+ years',
      icon: <Cloud className="w-6 h-6" />,
      description: 'Design and implement cloud infrastructure solutions for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '6+ years experience with AWS, Azure, or GCP',
        'Certifications in cloud platforms preferred',
        'Experience with containerization and orchestration'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      icon: <Shield className="w-6 h-6" />,
      description: 'Protect our clients\' systems and data from cyber threats and vulnerabilities.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'Certifications (CISSP, CISM, CEH) preferred',
        'Experience with security tools and frameworks'
      ]
    },
    {
      title: 'Database Administrator',
      department: 'IT Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      icon: <Database className="w-6 h-6" />,
      description: 'Manage and optimize database systems for performance and reliability.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with database management',
        'Experience with SQL Server, PostgreSQL, MySQL',
        'Knowledge of database security and backup strategies'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Salary',
      description: 'Above-market compensation packages',
      icon: <Award className="w-8 h-8" />
    },
    {
      title: 'Remote Work',
      description: 'Flexible remote work options',
      icon: <Globe className="w-8 h-8" />
    },
    {
      title: 'Health Insurance',
      description: 'Comprehensive health coverage',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Learning & Development',
      description: 'Continuous learning opportunities',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible schedules and PTO',
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: 'Career Growth',
      description: 'Clear advancement opportunities',
      icon: <Star className="w-8 h-8" />
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovative professionals at Zion Tech Group. Explore career opportunities in AI, IT services, and cutting-edge technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, data scientist, cloud architect, cybersecurity" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Join Our
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  {' '}Innovation Team
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Be part of the future of technology. Work with cutting-edge AI, cloud solutions, 
                and innovative IT services that transform businesses worldwide.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                >
                  <span>Apply Now</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/about"
                  className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
                >
                  Learn About Us
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We're not just a company - we're a community of innovators, creators, and problem-solvers 
                working together to shape the future of technology.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-400/40 transition-all duration-300 group"
                >
                  <div className="text-cyan-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Current Openings
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job opportunities and find the perfect role for your career growth.
              </p>
            </div>

            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/40 transition-all duration-300 group"
                >
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-start space-x-4">
                      <div className="text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {job.icon}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-2">
                          <span className="flex items-center">
                            <Users className="w-4 h-4 mr-1" />
                            {job.department}
                          </span>
                          <span className="flex items-center">
                            <MapPin className="w-4 h-4 mr-1" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Clock className="w-4 h-4 mr-1" />
                            {job.type}
                          </span>
                          <span className="flex items-center">
                            <Star className="w-4 h-4 mr-1" />
                            {job.experience}
                          </span>
                        </div>
                        <p className="text-gray-300 mb-4">
                          {job.description}
                        </p>
                      </div>
                    </div>
                    <div className="mt-4 lg:mt-0">
                      <Link
                        to="/contact"
                        className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
                      >
                        <span>Apply</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>

                  <div className="border-t border-gray-700/50 pt-4">
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start space-x-2 text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                          <span>{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and let us know 
              how you can contribute to our mission.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 px-8 py-4 rounded-lg text-white font-semibold transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-cyan-500/25"
              >
                <Mail className="w-5 h-5" />
                <span>Send Resume</span>
              </Link>
              <Link
                to="/about"
                className="border border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-8 py-4 rounded-lg font-semibold transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;