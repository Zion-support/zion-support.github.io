import React from 'react';
import { CheckCircle, MapPin, Clock, Users, Star } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

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
  const features = [
    {
      icon: Star,
      title: 'Innovation First',
      description: 'Work on cutting-edge technologies and be part of the future of tech.'
    },
    {
      icon: Users,
      title: 'Great Team',
      description: 'Collaborate with talented professionals in a supportive environment.'
    },
    {
      icon: CheckCircle,
      title: 'Proven Results',
      description: 'Track record of successful projects and satisfied clients.'
    }
  ];

  const benefits = [
    'Competitive salary and equity',
    'Comprehensive health insurance',
    'Flexible remote work options',
    'Professional development budget',
    'Unlimited vacation policy',
    'Latest technology and tools',
    'Team building events',
    'Mentorship programs',
    'Career growth opportunities',
    'Work-life balance support'
  ];

  const jobPositions: JobPosition[] = [
    {
      id: '1',
      title: 'Senior Cloud Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      experience: '7+ years',
      description: 'Lead cloud architecture initiatives and design scalable solutions for enterprise clients.',
      requirements: [
        '7+ years experience in cloud architecture',
        'Expertise in AWS, Azure, or GCP',
        'Experience with containerization (Docker, Kubernetes)',
        'Strong understanding of microservices architecture',
        'Previous experience in enterprise cloud migrations'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Remote work',
        'Professional development'
      ],
      posted: '2024-01-15',
      featured: true
    },
    {
      id: '2',
      title: 'AI/ML Engineer',
      department: 'AI Research',
      location: 'San Francisco, CA',
      type: 'Full-time',
      experience: '5+ years',
      description: 'Develop and implement machine learning models for various business applications.',
      requirements: [
        '5+ years experience in ML/AI',
        'Proficiency in Python, TensorFlow, PyTorch',
        'Experience with data pipelines',
        'Strong mathematical background',
        'Previous experience in production ML systems'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Stock options',
        'Learning budget'
      ],
      posted: '2024-01-10',
      featured: false
    },
    {
      id: '3',
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      experience: '3+ years',
      description: 'Build beautiful and responsive user interfaces for our web applications.',
      requirements: [
        '3+ years experience in frontend development',
        'Proficiency in React, TypeScript',
        'Experience with modern CSS frameworks',
        'Understanding of web performance',
        'Previous experience in responsive design'
      ],
      benefits: [
        'Competitive salary',
        'Health insurance',
        'Flexible hours',
        'Remote work options'
      ],
      posted: '2024-01-05',
      featured: true
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team and help shape the future of technology. Explore career opportunities at Zion Tech Group." />
        <meta name="keywords" content="careers, jobs, technology, AI, cloud, engineering, remote work" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
        {/* Hero Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Join Our Team
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Help us build the future of technology. We're looking for passionate individuals 
              who want to make a difference in the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
                View Open Positions
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 rounded-lg font-semibold transition-colors">
                Learn About Us
              </button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
                <feature.icon className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Benefits Section */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Why Work With Us
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                  {benefit}
                </div>
              ))}
            </div>
          </div>

          {/* Job Positions */}
          <div className="mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-8">
              Open Positions
            </h2>
            <div className="space-y-6">
              {jobPositions.map((job) => (
                <div key={job.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-white/30 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{job.title}</h3>
                        {job.featured && (
                          <span className="text-xs font-semibold text-yellow-400 bg-yellow-400/20 px-2 py-1 rounded-full">
                            Featured
                          </span>
                        )}
                      </div>
                      <div className="flex flex-wrap items-center gap-4 text-sm text-gray-400">
                        <div className="flex items-center">
                          <MapPin className="w-4 h-4 mr-1" />
                          {job.location}
                        </div>
                        <div className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {job.type}
                        </div>
                        <div className="flex items-center">
                          <Users className="w-4 h-4 mr-1" />
                          {job.experience}
                        </div>
                      </div>
                    </div>
                    <button className="mt-4 md:mt-0 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-semibold transition-colors">
                      Apply Now
                    </button>
                  </div>
                  
                  <p className="text-gray-300 mb-4">{job.description}</p>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold text-white mb-2">Requirements:</h4>
                      <ul className="space-y-1">
                        {job.requirements.slice(0, 3).map((req, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {req}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white mb-2">Benefits:</h4>
                      <ul className="space-y-1">
                        {job.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-center text-sm text-gray-300">
                            <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
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
          <div className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don't See Your Dream Job?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              We're always looking for talented individuals. Send us your resume and let us know how you can contribute.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">
              Send Your Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;