'use client';

import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, Users, ArrowRight, CheckCircle, Star } from 'lucide-react';

interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  type: string;
  experience: string;
  description: string;
  requirements: string[];
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState('all');

  const jobs: Job[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years ML experience', 'PhD in Computer Science or related field'],
      featured: true,
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', '7+ years cloud experience', 'Architecture certifications', 'Kubernetes expertise'],
      featured: false,
    },
    {
      id: '3',
      title: 'Data Scientist',
      department: 'Analytics',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Analyze complex datasets and develop predictive models to drive business insights.',
      requirements: ['Python, R, SQL', '4+ years data science experience', 'Statistics and ML knowledge'],
      featured: false,
    },
    {
      id: '4',
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build and maintain CI/CD pipelines and infrastructure automation tools.',
      requirements: ['Docker, Kubernetes, Jenkins', '3+ years DevOps experience', 'Linux administration'],
      featured: false,
    },
    {
      id: '5',
      title: 'Quantum Computing Researcher',
      department: 'Research',
      location: 'Boston, MA',
      type: 'Full-time',
      experience: 'PhD required',
      description: 'Research and develop quantum algorithms and quantum computing applications.',
      requirements: ['PhD in Physics/CS', 'Quantum computing knowledge', 'Research publications'],
      featured: true,
    }
  ];

  const departments = ['all', ...Array.from(new Set(jobs.map(job => job.department)))];

  const filteredJobs = jobs.filter(job => 
    selectedDepartment === 'all' || job.department === selectedDepartment
  );

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    '401(k) with company matching',
    'Unlimited PTO',
    'Remote work options',
    'Professional development budget',
    'Top-tier equipment and tools',
    'Team building events',
    'Career growth opportunities',
    'Mental health support'
  ];

  const values = [
    {
      title: 'Innovation First',
      description: 'We encourage bold ideas and cutting-edge solutions that push the boundaries of technology.',
      icon: Star
    },
    {
      title: 'Collaborative Culture',
      description: 'Work with brilliant minds in an environment that fosters creativity and teamwork.',
      icon: Users
    },
    {
      title: 'Growth Mindset',
      description: 'Continuous learning and development opportunities to advance your career.',
      icon: ArrowRight
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers | Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and work on cutting-edge AI, quantum computing, and cloud solutions. Explore open positions and be part of the future of technology." />
        <meta name="keywords" content="tech careers, AI jobs, quantum computing jobs, cloud engineering, software development, remote work" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-cyan-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Be part of the future of technology. Work on cutting-edge AI, quantum computing, 
              and cloud solutions that are transforming industries worldwide.
            </p>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Values</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-12">Benefits & Perks</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Open Positions</h2>
            
            {/* Department Filter */}
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setSelectedDepartment(department)}
                  className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedDepartment === department
                      ? 'bg-cyan-400 text-slate-900'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>

            {/* Jobs Grid */}
            <div className="space-y-6">
              {filteredJobs.map((job) => (
                <div key={job.id} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-cyan-400/50 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        {job.featured && (
                          <span className="bg-cyan-400 text-slate-900 px-2 py-1 rounded-full text-xs font-medium">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {job.type}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          {job.experience}
                        </span>
                        <span className="text-cyan-400">{job.department}</span>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {job.requirements.slice(0, 3).map((requirement, index) => (
                          <span key={index} className="bg-white/10 text-cyan-400 px-3 py-1 rounded-full text-xs">
                            {requirement}
                          </span>
                        ))}
                        {job.requirements.length > 3 && (
                          <span className="bg-white/10 text-gray-400 px-3 py-1 rounded-full text-xs">
                            +{job.requirements.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 md:ml-6">
                      <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-6 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center gap-2">
                        Apply Now
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
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
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-cyan-400/10 to-purple-400/10 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl font-bold text-white mb-4">Don't See Your Role?</h2>
              <p className="text-gray-300 mb-6">
                We're always looking for talented individuals. Send us your resume and let's discuss how you can contribute to our mission.
              </p>
              <button className="bg-gradient-to-r from-cyan-400 to-purple-400 text-slate-900 font-semibold py-3 px-8 rounded-lg hover:from-cyan-300 hover:to-purple-300 transition-all duration-200 flex items-center gap-2 mx-auto">
                Send Resume
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
