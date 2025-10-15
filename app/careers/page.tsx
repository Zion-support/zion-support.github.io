import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Briefcase, MapPin, Clock, Users, CheckCircle, Heart, DollarSign, Home, GraduationCap, Zap, Shield } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: ['Python, TensorFlow, PyTorch', 'Cloud platforms (AWS, Azure)', '5+ years experience'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'Hybrid',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for enterprise clients.',
      requirements: ['AWS, Azure, GCP', 'Kubernetes, Docker', '7+ years experience'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Stock options']
    },
    {
      id: 3,
      title: 'Frontend Developer',
      department: 'Development',
      location: 'Remote',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build modern, responsive web applications using React and TypeScript.',
      requirements: ['React, TypeScript', 'CSS, Tailwind', '3+ years experience'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Learning budget']
    }
  ];

  const benefits = [
    { icon: DollarSign, title: 'Competitive Salary', description: 'Above-market compensation packages' },
    { icon: Heart, title: 'Health & Wellness', description: 'Comprehensive health insurance and wellness programs' },
    { icon: Home, title: 'Remote Work', description: 'Flexible remote work options' },
    { icon: GraduationCap, title: 'Learning Budget', description: '$2,000 annual learning and development budget' },
    { icon: Zap, title: 'Cutting-edge Tech', description: 'Work with the latest technologies and tools' },
    { icon: Shield, title: 'Job Security', description: 'Stable, growing company with strong financials' }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta 
          name="description" 
          content="Join our team of innovative professionals. Explore career opportunities in AI, cloud computing, and software development."
        />
        <meta 
          name="keywords" 
          content="careers, jobs, employment, AI engineer, cloud architect, software developer, remote work"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
        {/* Hero Section */}
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Be part of a team that's shaping the future of technology. We're looking for passionate 
              individuals who want to make a difference in AI, cloud computing, and software development.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-blue-500/20 px-4 py-2 rounded-full">
                <Users className="w-4 h-4" />
                <span>50+ Team Members</span>
              </div>
              <div className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full">
                <MapPin className="w-4 h-4" />
                <span>Remote First</span>
              </div>
              <div className="flex items-center gap-2 bg-purple-500/20 px-4 py-2 rounded-full">
                <Clock className="w-4 h-4" />
                <span>Flexible Hours</span>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-blue-500/20">
                  <benefit.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2 text-blue-400">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Job Openings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="space-y-6">
              {jobOpenings.map((job) => (
                <div key={job.id} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-4 h-4" />
                          <span>{job.department}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{job.location}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          <span>{job.type}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="w-4 h-4" />
                          <span>{job.experience}</span>
                        </div>
                      </div>
                    </div>
                    <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center gap-2">
                      Apply Now
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.map((req, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-gray-400">
                            <CheckCircle className="w-4 h-4 text-green-400" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-2xl p-12 border border-blue-500/30">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Don't See Your Dream Job?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know 
              how you can contribute to our team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Send Resume
              </button>
              <Link 
                to="/contact" 
                className="border border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;