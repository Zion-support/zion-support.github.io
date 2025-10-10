'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight } from 'lucide-react';

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const departments = [
    { id: 'all', name: 'All Departments' },
    { id: 'engineering', name: 'Engineering' },
    { id: 'ai', name: 'AI Research' },
    { id: 'design', name: 'Design' },
    { id: 'business', name: 'Business' }
  ];

  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'ai',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'PhD in Computer Science or related field',
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Strong research background'
      ]
    },
    {
      id: 2,
      title: 'Full Stack Developer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable web applications using modern technologies.',
      requirements: [
        '3+ years experience with React/Next.js',
        'Proficiency in Node.js and TypeScript',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ]
    },
    {
      id: 3,
      title: 'UX/UI Designer',
      department: 'design',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Create intuitive and beautiful user experiences for our AI products.',
      requirements: [
        '4+ years experience in UX/UI design',
        'Proficiency in Figma and Adobe Creative Suite',
        'Portfolio demonstrating AI/tech products',
        'Strong communication skills'
      ]
    },
    {
      id: 4,
      title: 'Product Manager',
      department: 'business',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Drive product strategy and roadmap for our AI solutions.',
      requirements: [
        '5+ years product management experience',
        'Experience with AI/ML products',
        'Strong analytical skills',
        'MBA preferred'
      ]
    },
    {
      id: 5,
      title: 'DevOps Engineer',
      department: 'engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Manage cloud infrastructure and deployment pipelines.',
      requirements: [
        '4+ years DevOps experience',
        'Expertise in AWS/Azure/GCP',
        'Experience with Kubernetes and Docker',
        'Strong automation skills'
      ]
    },
    {
      id: 6,
      title: 'Data Scientist',
      department: 'ai',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Analyze data and build predictive models for business insights.',
      requirements: [
        '3+ years data science experience',
        'Proficiency in Python, R, SQL',
        'Experience with statistical modeling',
        'Strong business acumen'
      ]
    }
  ];

  const filteredJobs = selectedDepartment === 'all' 
    ? jobOpenings 
    : jobOpenings.filter(job => job.department === selectedDepartment);

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and help us build the future." />
        <meta name="keywords" content="careers, jobs, AI engineer, developer, designer, product manager, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Help us build the future of AI and technology. Join a team of passionate innovators and problem solvers.
            </p>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Why Work With Us?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Great Team</h3>
                <p className="text-gray-300">
                  Work with talented, passionate people who are experts in their fields.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Flexible Work</h3>
                <p className="text-gray-300">
                  Remote work options and flexible hours to support work-life balance.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Growth Opportunities</h3>
                <p className="text-gray-300">
                  Continuous learning and career development opportunities.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Department Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {departments.map((department) => (
                <button
                  key={department.id}
                  onClick={() => setSelectedDepartment(department.id)}
                  className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedDepartment === department.id
                      ? 'bg-cyan-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {department.name}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">
              Open Positions
            </h2>
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{job.title}</h3>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span>{job.experience}</span>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      {job.requirements.map((req, index) => (
                        <li key={index}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-slate-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for talented people. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300">
              Send Resume
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;