import React from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Clock, Users, Award, Zap } from 'lucide-react';

const CareersPage: React.FC = () => {
  const openPositions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years experience in AI/ML',
        'Expertise in Python, TensorFlow, PyTorch',
        'Experience with cloud platforms',
        'Strong problem-solving skills'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Flexible work hours',
        'Professional development'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Middletown, DE',
      type: 'Full-time',
      description: 'Manage cloud infrastructure and deployment pipelines for our AI services.',
      requirements: [
        '3+ years DevOps experience',
        'AWS/Azure/GCP expertise',
        'Docker and Kubernetes knowledge',
        'CI/CD pipeline experience'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Flexible work hours',
        'Professional development'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of the future of AI and technology. Join Zion Tech Group and help us build the next generation of intelligent solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {openPositions.map((position, index) => (
            <div key={index} className="cyber-card hologram-card p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">{position.title}</h3>
                <span className="px-3 py-1 bg-cyan-500 text-white text-sm rounded-full">{position.type}</span>
              </div>
              
              <div className="flex items-center text-gray-300 mb-4">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="mr-4">{position.location}</span>
                <Users className="w-4 h-4 mr-2" />
                <span>{position.department}</span>
              </div>
              
              <p className="text-gray-300 mb-4">{position.description}</p>
              
              <div className="mb-4">
                <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                <ul className="text-sm text-gray-300 space-y-1">
                  {position.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-400">
                  <Clock className="w-4 h-4 inline mr-1" />
                  Posted 2 days ago
                </div>
                <button className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all duration-200">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-6">Why Work With Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Award className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Innovation</h3>
              <p className="text-gray-300">Work on cutting-edge AI and technology projects</p>
            </div>
            <div className="text-center">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Team</h3>
              <p className="text-gray-300">Collaborate with talented and passionate professionals</p>
            </div>
            <div className="text-center">
              <Zap className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Growth</h3>
              <p className="text-gray-300">Continuous learning and career development opportunities</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
