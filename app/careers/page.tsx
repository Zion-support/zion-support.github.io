import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Clock, Users, Briefcase, GraduationCap, Heart, Zap } from 'lucide-react';
'use client';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI & Machine Learning',
      location: 'Remote / San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience with Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong understanding of ML algorithms and deep learning'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud architectures for enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience with cloud platforms',
        'AWS/Azure/GCP certifications preferred',
        'Experience with Infrastructure as Code'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-12',
      featured: false
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Austin, TX',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' digital assets with advanced security solutions.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years experience in cybersecurity',
        'CISSP, CISM, or similar certifications',
        'Experience with security tools and frameworks'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: 4,
      title: 'Full-Stack Developer',
      department: 'Web Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern web applications using React, Node.js, and cloud technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years experience with React, Node.js',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud platforms and DevOps practices'
      ],
      benefits: [
        'Competitive salary and equity',
        'Health, dental, and vision insurance',
        'Flexible work arrangements',
        'Professional development budget'
      ],
      posted: '2024-01-08',
      featured: false
    }
  ];

  const benefits = [
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Health & Wellness',
      description: 'Comprehensive health, dental, and vision insurance for you and your family.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Flexible Work',
      description: 'Remote work options and flexible hours to support work-life balance.'
    },
    {
      icon: <GraduationCap className="w-6 h-6" />,
      title: 'Learning & Growth',
      description: 'Annual learning budget and opportunities for professional development.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Great Team',
      description: 'Work with talented, passionate people who love what they do.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of experts and help shape the future of AI and IT solutions. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, full-stack developer, remote work" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Join Our
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              {' '}Team
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Help us build the future of AI and IT solutions. Join a team of passionate innovators 
            who are transforming industries with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              View Open Positions
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn About Us
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Why Work With Us?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We offer more than just a job - we provide an environment where you can grow, 
              learn, and make a real impact.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 text-center">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Openings */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Open Positions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our current job openings and find the perfect role for your skills and interests.
            </p>
          </div>
          
          <div className="space-y-6">
            {jobOpenings.map((job) => (
              <div key={job.id} className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 ${job.featured ? 'ring-2 ring-cyan-400/50' : ''}`}>
                {job.featured && (
                  <div className="inline-block bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4">
                    Featured
                  </div>
                )}
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-4 mb-4">
                      <div className="flex items-center text-gray-300">
                        <Briefcase className="w-4 h-4 mr-2" />
                        {job.department}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin className="w-4 h-4 mr-2" />
                        {job.location}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="w-4 h-4 mr-2" />
                        {job.type}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Users className="w-4 h-4 mr-2" />
                        {job.experience}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">{job.description}</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm">
                        {job.department}
                      </span>
                      <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm">
                        {job.type}
                      </span>
                    </div>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6">
                    <Link
                      to={`/careers/${job.id}`}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Don't See Your Dream Job?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            We're always looking for talented individuals. Send us your resume and let us know 
            how you'd like to contribute to our mission.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link 
              to="/about" 
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CareersPage;