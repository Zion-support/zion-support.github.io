'use client';

import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MapPin, Clock, CheckCircle, Star, Users, Heart, Award, ArrowRight, Briefcase, GraduationCap, Zap } from 'lucide-react';

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
  featured: boolean;
}

const CareersPage: React.FC = () => {
  const openPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior AI Engineer',
      department: 'AI Solutions',
      location: 'Remote',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Design and implement cutting-edge AI solutions for enterprise clients.',
      requirements: ['Python, TensorFlow, PyTorch', '5+ years AI experience', 'Machine Learning expertise'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Professional development'],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'Cloud Solutions Architect',
      department: 'Cloud Services',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Lead cloud migration projects and design scalable cloud architectures.',
      requirements: ['AWS/Azure/GCP certification', '7+ years cloud experience', 'Architecture design skills'],
      benefits: ['Competitive salary', 'Health insurance', 'Flexible hours', 'Learning budget'],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '3',
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'Remote',
      type: 'Full-time',
      experience: '4+ years',
      description: 'Protect client systems and implement security best practices.',
      requirements: ['CISSP/CISM certification', '4+ years security experience', 'Threat analysis skills'],
      benefits: ['Competitive salary', 'Health insurance', 'Remote work', 'Security training'],
      posted: '2024-01-05',
      featured: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Careers - Zion Tech Group | Join Our Team</title>
        <meta name="description" content="Join Zion Tech Group and be part of a team that's shaping the future of AI and IT solutions. Explore open positions and career opportunities." />
        <meta name="keywords" content="careers, jobs, AI engineer, cloud architect, cybersecurity, remote work, tech careers" />
        <meta property="og:title" content="Careers - Zion Tech Group" />
        <meta property="og:description" content="Join our team and shape the future of technology" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/careers" />
      </Helmet>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a team that's shaping the future of AI and IT solutions. We're looking for passionate individuals who want to make a difference.
          </p>
        </div>

        {/* Open Positions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {openPositions.map((position) => (
            <div
              key={position.id}
              className={`bg-white/10 backdrop-blur-sm rounded-2xl p-8 border ${
                position.featured
                  ? 'border-purple-400 shadow-2xl shadow-purple-500/25'
                  : 'border-white/20'
              }`}
            >
              {position.featured && (
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span className="text-yellow-400 font-semibold">Featured</span>
                </div>
              )}
              
              <h3 className="text-xl font-bold text-white mb-2">{position.title}</h3>
              <p className="text-gray-300 text-sm mb-4">{position.department}</p>
              
              <div className="space-y-2 mb-6">
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <MapPin className="w-4 h-4" />
                  <span>{position.location}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Briefcase className="w-4 h-4" />
                  <span>{position.type}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <GraduationCap className="w-4 h-4" />
                  <span>{position.experience}</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-400">
                  <Clock className="w-4 h-4" />
                  <span>Posted {position.posted}</span>
                </div>
              </div>

              <p className="text-gray-300 text-sm mb-4">{position.description}</p>

              <div className="mb-6">
                <h4 className="text-sm font-semibold text-gray-300 mb-2">Requirements</h4>
                <ul className="space-y-1">
                  {position.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-gray-400">
                      <CheckCircle className="w-3 h-3 text-green-400 mt-1 flex-shrink-0" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-500 to-blue-600 text-white rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center gap-2">
                Apply Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>

        {/* Why Work With Us */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-16">
          <h2 className="text-2xl font-bold text-white text-center mb-8">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Great Team</h3>
              <p className="text-gray-300 text-sm">Work with talented and passionate professionals</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Work-Life Balance</h3>
              <p className="text-gray-300 text-sm">Flexible hours and remote work options</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Growth Opportunities</h3>
              <p className="text-gray-300 text-sm">Continuous learning and career development</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Innovation</h3>
              <p className="text-gray-300 text-sm">Work on cutting-edge technologies and projects</p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't See Your Perfect Role?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you'd like to contribute.
            </p>
            <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center gap-2 mx-auto">
              Send Resume
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
