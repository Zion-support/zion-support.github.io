'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
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
      id: 2,
      title: 'Full Stack Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications and APIs using modern technologies and best practices.',
      requirements: [
        '3+ years experience in full-stack development',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud services and DevOps',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary: $90,000 - $130,000',
        'Health insurance',
        '401(k) matching',
        'Flexible work hours'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: 3,
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Design and maintain cloud infrastructure, CI/CD pipelines, and monitoring systems.',
      requirements: [
        '4+ years experience in DevOps/SRE',
        'Expertise in AWS, Docker, Kubernetes',
        'Experience with Infrastructure as Code',
        'Knowledge of monitoring and logging tools',
        'Strong automation skills'
      ],
      benefits: [
        'Competitive salary: $110,000 - $160,000',
        'Stock options',
        'Unlimited PTO',
        'Learning and development budget'
      ],
      posted: '3 days ago',
      featured: true
    },
    {
      id: 4,
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Create intuitive and engaging user experiences for our AI and IT solutions.',
      requirements: [
        '3+ years experience in UX/UI design',
        'Proficiency in Figma, Sketch, Adobe Creative Suite',
        'Experience with user research and testing',
        'Knowledge of design systems and accessibility',
        'Portfolio demonstrating strong design skills'
      ],
      benefits: [
        'Competitive salary: $80,000 - $120,000',
        'Health insurance',
        'Design tools and software',
        'Conference attendance budget'
      ],
      posted: '5 days ago',
      featured: false
    },
    {
      id: 5,
      title: 'Data Scientist',
      department: 'AI Solutions',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex data sets and develop predictive models to drive business insights.',
      requirements: [
        '4+ years experience in data science',
        'Expertise in Python, R, SQL',
        'Experience with machine learning libraries',
        'Knowledge of statistical analysis',
        'Strong communication skills'
      ],
      benefits: [
        'Competitive salary: $100,000 - $150,000',
        'Equity participation',
        'Health insurance',
        'Professional development opportunities'
      ],
      posted: '1 week ago',
      featured: false
    },
    {
      id: 6,
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Chicago, IL',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Work with sales team to provide technical expertise and solutions to potential clients.',
      requirements: [
        '3+ years experience in technical sales',
        'Technical background in AI/IT solutions',
        'Strong presentation and communication skills',
        'Experience with CRM systems',
        'Ability to travel as needed'
      ],
      benefits: [
        'Competitive salary: $85,000 - $125,000',
        'Commission structure',
        'Health insurance',
        'Travel and entertainment budget'
      ],
      posted: '4 days ago',
      featured: false
    }
  ];

  const departments = ['all', 'AI Solutions', 'Engineering', 'Design', 'Sales', 'Marketing'];

  const filteredJobs = jobOpenings.filter(job => 
    selectedDepartment === 'all' || job.department === selectedDepartment
  );

  const featuredJobs = filteredJobs.filter(job => job.featured);
  const regularJobs = filteredJobs.filter(job => !job.featured);

  const companyValues = [
    {
      icon: Heart,
      title: 'Work-Life Balance',
      description: 'We believe in flexible work arrangements and support our team\'s well-being.'
    },
    {
      icon: Award,
      title: 'Professional Growth',
      description: 'Continuous learning opportunities and career development programs.'
    },
    {
      icon: Users,
      title: 'Collaborative Culture',
      description: 'Work with talented individuals in a supportive and inclusive environment.'
    },
    {
      icon: Zap,
      title: 'Innovation',
      description: 'Be part of cutting-edge projects that shape the future of technology.'
    }
  ];

  const benefits = [
    'Competitive salaries and equity participation',
    'Comprehensive health, dental, and vision insurance',
    'Flexible work arrangements and remote options',
    'Professional development and learning budget',
    '401(k) matching and retirement planning',
    'Unlimited paid time off',
    'Modern equipment and tools',
    'Team building and social events',
    'Mentorship and career guidance',
    'Stock options for eligible positions'
  ];

  return (
    <React.Fragment>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of our innovative team. Explore career opportunities in AI, engineering, design, and more." />
        <meta name="keywords" content="careers, jobs, employment, AI engineer, software developer, remote work, tech jobs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                Team
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of the future of technology. Join our innovative team and help shape the next generation of AI and IT solutions.
            </p>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We're building a culture of innovation, collaboration, and growth
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {companyValues.map((value, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">
                  <div className="text-cyan-400 mb-4">
                    <value.icon className="w-12 h-12 mx-auto" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Benefits & Perks
              </h2>
              <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                We offer comprehensive benefits to support our team's success and well-being
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-0">
                Open Positions
              </h2>
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept} className="bg-slate-800">
                    {dept === 'all' ? 'All Departments' : dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Featured Jobs */}
            {featuredJobs.length > 0 && (
              <div className="mb-12">
                <h3 className="text-2xl font-bold text-white mb-6">Featured Positions</h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  {featuredJobs.map((job) => (
                    <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/20 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h4 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                            {job.title}
                          </h4>
                          <div className="flex items-center space-x-4 text-sm text-gray-400">
                            <span className="flex items-center">
                              <Briefcase className="w-4 h-4 mr-1" />
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
                          </div>
                        </div>
                        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          Featured
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      <div className="mb-4">
                        <h5 className="text-sm font-semibold text-cyan-400 mb-2">Key Requirements:</h5>
                        <ul className="space-y-1">
                          {job.requirements.slice(0, 3).map((req, index) => (
                            <li key={index} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-400">Posted {job.posted}</span>
                        <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors">
                          Apply Now
                          <ArrowRight className="w-4 h-4 ml-1" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Regular Jobs */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {regularJobs.map((job) => (
                <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 hover:bg-white/20 transition-all duration-300 group">
                  <h4 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                    {job.title}
                  </h4>
                  <div className="flex items-center space-x-3 text-sm text-gray-400 mb-3">
                    <span className="flex items-center">
                      <Briefcase className="w-3 h-3 mr-1" />
                      {job.department}
                    </span>
                    <span className="flex items-center">
                      <MapPin className="w-3 h-3 mr-1" />
                      {job.location}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm">{job.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-gray-400">{job.posted}</span>
                    <button className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors text-sm">
                      Apply
                      <ArrowRight className="w-3 h-3 ml-1" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredJobs.length === 0 && (
              <div className="text-center py-12">
                <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Briefcase className="w-8 h-8 text-gray-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No positions found</h3>
                <p className="text-gray-400">Try selecting a different department or check back later</p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Don't See Your Dream Job?
              </h2>
              <p className="text-xl text-purple-100 mb-8">
                We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                  Submit Resume
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                  Learn About Our Culture
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default CareersPage;