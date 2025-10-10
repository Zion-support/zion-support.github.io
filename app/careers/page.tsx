'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, CheckCircle, Star, Users, MapPin, Clock, Briefcase } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead AI model development and implementation projects',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in machine learning',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)'
      ]
    },
    {
      id: '2',
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Manage cloud infrastructure and deployment pipelines',
      requirements: [
        'Bachelor\'s degree in Computer Science',
        '3+ years DevOps experience',
        'Experience with Kubernetes, Docker',
        'Knowledge of CI/CD pipelines'
      ]
    },
    {
      id: '3',
      title: 'Frontend Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '2+ years',
      description: 'Build modern, responsive web applications',
      requirements: [
        '2+ years React/Next.js experience',
        'Proficiency in TypeScript',
        'Experience with Tailwind CSS',
        'Knowledge of modern web standards'
      ]
    }
  ];

  const benefits = [
    {
      icon: <Star className="w-8 h-8 text-yellow-500" />,
      title: 'Competitive Salary',
      description: 'Above-market compensation packages'
    },
    {
      icon: <Users className="w-8 h-8 text-blue-500" />,
      title: 'Remote Work',
      description: 'Flexible remote work options'
    },
    {
      icon: <Briefcase className="w-8 h-8 text-green-500" />,
      title: 'Career Growth',
      description: 'Professional development opportunities'
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-500" />,
      title: 'Health Benefits',
      description: 'Comprehensive health insurance'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of AI and IT experts. Explore career opportunities at Zion Tech Group and be part of the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, DevOps, frontend developer, remote work" />
      </Helmet>

      <Navigation />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Join Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Team</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Be part of the future of technology. Join our team of AI and IT experts building innovative solutions.
            </p>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Work With Us?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We offer competitive benefits and a collaborative environment where innovation thrives.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-400">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Openings */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Open Positions
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Explore our current job openings and find the perfect role for you.
              </p>
            </div>
            <div className="space-y-8">
              {jobOpenings.map((job) => (
                <div key={job.id} className="glass-card quantum-field group">
                  <div className="p-8">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Briefcase className="w-4 h-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {job.type}
                          </span>
                          <span>{job.experience}</span>
                        </div>
                      </div>
                      <button className="mt-4 md:mt-0 bg-cyan-600 text-white px-6 py-3 rounded-lg hover:bg-cyan-700 transition-colors font-semibold">
                        Apply Now
                      </button>
                    </div>
                    
                    <p className="text-gray-300 mb-6">{job.description}</p>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-4">Requirements:</h4>
                      <ul className="space-y-2">
                        {job.requirements.map((requirement, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-cyan-400 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-300">{requirement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="holographic-card p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Don't See Your Role?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                We're always looking for talented individuals. Send us your resume and let's discuss opportunities.
              </p>
              <button className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
                Send Resume
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CareersPage;