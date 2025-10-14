import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Right, Circle } from 'lucide-react';

interface JobPosition {
  id: number;
  title: string;
  department: string;
  location: string;
  type: string;
  description: string;
  requirements: string[];
  benefits: string[];
}

const CareersPage: React.FC = () => {
  const jobPositions: JobPosition[] = [
    {
      id: 1,
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.',
      requirements: [
        '5+ years of experience in AI/ML',
        'Strong Python and TensorFlow skills',
        'Experience with cloud platforms',
        'PhD in Computer Science preferred'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Flexible work hours',
        'Professional development budget'
      ]
    },
    {
      id: 2,
      title: 'Quantum Computing Researcher',
      department: 'Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Research and develop quantum algorithms and quantum computing applications.',
      requirements: [
        'PhD in Physics or Computer Science',
        'Experience with quantum programming',
        'Strong mathematical background',
        'Published research papers'
      ],
      benefits: [
        'Research budget',
        'Conference attendance',
        'Collaboration opportunities',
        'Competitive benefits'
      ]
    },
    {
      id: 3,
      title: 'Cybersecurity Specialist',
      department: 'Security',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Protect our systems and data from cyber threats and vulnerabilities.',
      requirements: [
        '3+ years in cybersecurity',
        'Certified Ethical Hacker (CEH)',
        'Experience with penetration testing',
        'Knowledge of security frameworks'
      ],
      benefits: [
        'Security certifications',
        'Training opportunities',
        'Bonus structure',
        'Work-life balance'
      ]
    }
  ];

  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of innovators and help shape the future of technology." />
        <meta name="keywords" content="careers, jobs, AI engineer, quantum computing, cybersecurity, tech jobs" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Team</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Help us build the future of technology. We&apos;re looking for passionate individuals to join our innovative team.
            </p>
          </div>

          {/* Why Work With Us */}
          <div className="max-w-6xl mx-auto mb-16">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Circle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Innovation</h3>
                <p className="text-gray-300">Work on cutting-edge technologies that shape the future.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Circle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Growth</h3>
                <p className="text-gray-300">Continuous learning and professional development opportunities.</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Circle className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Impact</h3>
                <p className="text-gray-300">Make a real difference in the world through technology.</p>
              </div>
            </div>
          </div>

          {/* Job Openings */}
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Open Positions</h2>
            <div className="space-y-6">
              {jobPositions.map((job) => (
                <div
                  key={job.id}
                  className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                  onClick={() => setSelectedJob(job)}
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white mb-2">{job.title}</h3>
                      <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                        <span>{job.department}</span>
                        <span>•</span>
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <Right className="w-5 h-5 text-gray-400" />
                  </div>
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {job.requirements.slice(0, 3).map((req, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full">
                        {req}
                      </span>
                    ))}
                    {job.requirements.length > 3 && (
                      <span className="px-3 py-1 bg-gray-500/20 text-gray-300 text-xs rounded-full">
                        +{job.requirements.length - 3} more
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Job Details Modal */}
          {selectedJob && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
              <div className="bg-slate-800 rounded-xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{selectedJob.title}</h3>
                    <div className="flex flex-wrap gap-2 text-sm text-gray-300">
                      <span>{selectedJob.department}</span>
                      <span>•</span>
                      <span>{selectedJob.location}</span>
                      <span>•</span>
                      <span>{selectedJob.type}</span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedJob(null)}
                    className="text-gray-400 hover:text-white text-2xl"
                  >
                    ×
                  </button>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Description</h4>
                    <p className="text-gray-300">{selectedJob.description}</p>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Requirements</h4>
                    <ul className="space-y-2">
                      {selectedJob.requirements.map((req, index) => (
                        <li key={index} className="flex items-start">
                          <Circle className="w-4 h-4 text-blue-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-3">Benefits</h4>
                    <ul className="space-y-2">
                      {selectedJob.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <Circle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-300">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex gap-4 pt-4">
                    <button className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-purple-700 transition-all duration-300">
                      Apply Now
                    </button>
                    <button
                      onClick={() => setSelectedJob(null)}
                      className="px-6 py-3 border border-gray-400 text-gray-300 rounded-lg font-semibold hover:bg-gray-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CareersPage;