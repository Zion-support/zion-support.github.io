'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, ArrowRight, CheckCircle } from 'lucide-react';

interface Job {
  id: number;
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
  const jobs: Job[] = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models for enterprise clients.',
      requirements: [
        'Master\'s degree in Computer Science or related field',
        '5+ years experience in AI/ML development',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms (AWS, Azure, GCP)',
        'Strong problem-solving and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      posted: '2024-01-15'
    },
    {
      id: 2,
      title: 'Cloud Solutions Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Design and implement scalable cloud infrastructure solutions for our enterprise clients.',
      requirements: [
        'Bachelor\'s degree in Computer Science or related field',
        '7+ years experience in cloud architecture',
        'Certifications in AWS, Azure, or GCP',
        'Experience with DevOps and CI/CD',
        'Strong leadership and mentoring skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Remote work flexibility',
        'Professional development budget',
        '401k with company matching'
      ],
      posted: '2024-01-10'
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Protect our clients\' digital assets and ensure compliance with security standards.',
      requirements: [
        'Bachelor\'s degree in Cybersecurity or related field',
        '3+ years experience in cybersecurity',
        'Certifications in CISSP, CISM, or similar',
        'Experience with security tools and frameworks',
        'Strong analytical and communication skills'
      ],
      benefits: [
        'Competitive salary and equity',
        'Comprehensive health insurance',
        'Flexible work arrangements',
        'Professional development budget',
        '401k with company matching'
      ],
      posted: '2024-01-05'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join our team of experts and help shape the future of AI and IT solutions. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, tech jobs" />
      </Helmet>
      
      <div className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Be part of a team that's shaping the future of AI and IT solutions. 
              Join us in building innovative technology that transforms businesses.
            </p>
          </div>

          <div className="space-y-8">
            {jobs.map((job) => (
              <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 hover:bg-white/20 transition-all duration-300">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">{job.title}</h2>
                    <div className="flex flex-wrap items-center space-x-4 text-sm text-gray-300">
                      <span className="bg-cyan-500/20 text-cyan-400 px-2 py-1 rounded">
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
                      <span>{job.experience}</span>
                    </div>
                  </div>
                  <button className="mt-4 lg:mt-0 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                    Apply Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>

                <p className="text-gray-300 mb-6">{job.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-white font-semibold mb-3">Requirements:</h3>
                    <ul className="space-y-2">
                      {job.requirements.map((req, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-semibold mb-3">Benefits:</h3>
                    <ul className="space-y-2">
                      {job.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <span className="text-sm text-gray-400">Posted: {job.posted}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don't See the Right Role?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals to join our team. 
              Send us your resume and let us know how you can contribute.
            </p>
            <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105">
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;