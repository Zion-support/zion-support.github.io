'use client';
import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Star, Users, Heart, Award, MapPin, Clock, Briefcase, CheckCircle, ArrowRight, Zap } from 'lucide-react';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  posted: string;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    'all',
    'Engineering',
    'AI Research',
    'Sales',
    'Marketing',
    'Operations',
    'Support'
  ];

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '5+ years',
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
        '401(k) with company matching'
      ],
      posted: '2024-01-15'
    },
    {
      id: '2',
      title: 'AI Research Scientist',
      department: 'AI Research',
      location: 'Remote / Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Conduct cutting-edge research in artificial intelligence and machine learning.',
      requirements: [
        'PhD in Computer Science, AI, or related field',
        '3+ years of research experience',
        'Published papers in top-tier conferences',
        'Experience with deep learning frameworks',
        'Strong mathematical background'
      ],
      benefits: [
        'Research budget and resources',
        'Conference attendance support',
        'Collaboration with top researchers',
        'Flexible work schedule',
        'Comprehensive benefits package'
      ],
      posted: '2024-01-10'
    },
    {
      id: '3',
      title: 'Sales Engineer',
      department: 'Sales',
      location: 'Delaware',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Help clients understand and implement our AI and IT solutions.',
      requirements: [
        'Bachelor\'s degree in Engineering or related field',
        '3+ years of technical sales experience',
        'Understanding of AI and cloud technologies',
        'Excellent presentation and communication skills',
        'Ability to travel as needed'
      ],
      benefits: [
        'Base salary plus commission',
        'Company car and travel allowance',
        'Health and dental insurance',
        'Performance bonuses',
        'Career advancement opportunities'
      ],
      posted: '2024-01-08'
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobPositions 
    : jobPositions.filter(job => job.department === selectedDepartment);

  const companyValues = [
    {
      icon: Star,
      title: 'Excellence',
      description: 'We strive for excellence in everything we do, from our products to our workplace culture.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and diverse perspectives to drive innovation.'
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our team is passionate about technology and its potential to transform businesses.'
    },
    {
      icon: Award,
      title: 'Growth',
      description: 'We invest in our people\'s growth and development through learning opportunities.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers | Zion Tech Group - Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's transforming businesses with AI and IT solutions. Explore career opportunities and apply today." />
        <meta name="keywords" content="careers, jobs, AI engineer, software developer, tech jobs, Zion Tech Group careers" />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-cyan-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and IT solutions. 
            We're looking for passionate individuals who want to make a difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#open-positions"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>View Open Positions</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="/contact"
              className="border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Contact HR
            </a>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We're not just building technology; we're building a culture of innovation and excellence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-8 h-8 text-slate-900" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section id="open-positions" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for you.
            </p>
          </div>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? 'bg-cyan-500 text-white'
                    : 'bg-slate-700 text-gray-300 hover:bg-slate-600'
                }`}
              >
                {dept === 'all' ? 'All Departments' : dept}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-6">
            {filteredJobs.map((job) => (
              <div key={job.id} className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center">
                        <Zap className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0">
                    <span className="text-sm text-gray-400">Posted: {new Date(job.posted).toLocaleDateString()}</span>
                  </div>
                </div>

                <p className="text-gray-300 mb-6">{job.description}</p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-1 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href={`/careers/apply/${job.id}`}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    Apply Now
                  </a>
                  <a
                    href={`/careers/${job.id}`}
                    className="flex-1 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 text-center"
                  >
                    View Details
                  </a>
                </div>
              </div>
            ))}
          </div>

          {filteredJobs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No positions found in this department.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-3xl p-12 border border-slate-700">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Dream Job?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <a
              href="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Send Your Resume</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;