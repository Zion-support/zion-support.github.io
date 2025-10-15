import React from 'react';
import SEOHead from '../components/SEOHead';
import { MapPin, Clock, Users, ArrowRight, CheckCircle } from 'lucide-react';

const CareersPage: React.FC = () => {
  const jobOpenings = [
    {
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years of experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ]
    },
    {
      title: 'Full-Stack Developer',
      department: 'Micro-SaaS Development',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build scalable micro-SaaS applications using modern web technologies.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '3+ years of full-stack development experience',
        'Proficiency in React, Node.js, TypeScript',
        'Experience with databases (PostgreSQL, MongoDB)',
        'Knowledge of cloud deployment and DevOps practices'
      ]
    },
    {
      title: 'Cybersecurity Specialist',
      department: 'IT Services',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect our clients\' systems and data with advanced security solutions.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '4+ years of cybersecurity experience',
        'Certifications: CISSP, CISM, or equivalent',
        'Experience with security tools and frameworks',
        'Knowledge of compliance standards (SOC 2, ISO 27001)'
      ]
    },
    {
      title: 'Cloud Solutions Architect',
      department: 'Cloud Infrastructure',
      location: 'Remote / Middletown, DE',
      type: 'Full-time',
      experience: '6+ years',
      description: 'Design and implement scalable cloud infrastructure solutions.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '6+ years of cloud architecture experience',
        'AWS/Azure/GCP certifications preferred',
        'Experience with containerization and orchestration',
        'Strong understanding of networking and security'
      ]
    }
  ];

  const benefits = [
    {
      title: 'Competitive Compensation',
      description: 'We offer competitive salaries and performance-based bonuses.',
      icon: '💰'
    },
    {
      title: 'Remote Work',
      description: 'Flexible remote work options to support work-life balance.',
      icon: '🏠'
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs.',
      icon: '🏥'
    },
    {
      title: 'Professional Development',
      description: 'Learning opportunities, conferences, and certification support.',
      icon: '📚'
    },
    {
      title: 'Team Environment',
      description: 'Collaborative and inclusive work environment.',
      icon: '👥'
    },
    {
      title: 'Cutting-Edge Technology',
      description: 'Work with the latest technologies and tools.',
      icon: '⚡'
    }
  ];

  const values = [
    'Innovation and continuous learning',
    'Collaboration and teamwork',
    'Client success and satisfaction',
    'Integrity and transparency',
    'Diversity and inclusion',
    'Work-life balance'
  ];

  return (
    <>
      <SEOHead
        title="Careers - Zion Tech Group"
        description="Join our team of experts in AI, technology, and digital transformation. Explore career opportunities at Zion Tech Group."
      />
      <div className="min-h-screen bg-slate-900 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of technology. We're looking for passionate individuals who want to make a difference.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="bg-slate-800 p-8 rounded-lg mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Why Work With Us?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl mb-4">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Our Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-center bg-slate-800 p-4 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                  <span className="text-gray-300">{value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Job Openings */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">Current Openings</h2>
            <div className="space-y-6">
              {jobOpenings.map((job, index) => (
                <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors duration-300">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-3">
                        <span className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </span>
                        <span className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{job.description}</p>
                    </div>
                    <a 
                      href="/contact" 
                      className="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-bold py-2 px-6 rounded-lg transition-all duration-300 inline-flex items-center mt-4 lg:mt-0"
                    >
                      Apply Now
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {job.requirements.map((requirement, reqIndex) => (
                        <li key={reqIndex} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          {requirement}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Don't See Your Role? */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-cyan-600 p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-4">Don't See Your Role?</h2>
            <p className="text-xl mb-8 opacity-90">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute to our team.
            </p>
            <a 
              href="/contact" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-bold py-3 px-8 rounded-lg transition-all duration-300 inline-flex items-center"
            >
              Send Your Resume
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;
