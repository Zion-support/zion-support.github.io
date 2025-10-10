import React from 'react';
import { Helmet } from 'react-helmet-async';

const CareersPage: React.FC = () => {
  const positions = [
    {
      title: 'Senior AI Engineer',
      department: 'Engineering',
      location: 'San Francisco, CA',
      type: 'Full-time',
      description: 'Lead the development of cutting-edge AI solutions and machine learning models.'
    },
    {
      title: 'Cloud Architect',
      department: 'Engineering',
      location: 'Remote',
      type: 'Full-time',
      description: 'Design and implement scalable cloud infrastructure solutions for our clients.'
    },
    {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'New York, NY',
      type: 'Full-time',
      description: 'Build modern, responsive web applications using React and TypeScript.'
    },
    {
      title: 'DevOps Engineer',
      department: 'Engineering',
      location: 'Austin, TX',
      type: 'Full-time',
      description: 'Manage deployment pipelines and infrastructure automation for our development teams.'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Careers - Zion Tech Group</title>
        <meta name="description" content="Join our team of talented engineers and developers. Explore career opportunities at Zion Tech Group." />
      </Helmet>
      
      <div className="min-h-screen bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Join Our Team</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're looking for talented individuals to help us build the future of technology.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {positions.map((position, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h2 className="text-xl font-bold text-gray-900 mb-2">{position.title}</h2>
                <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                  <span>{position.department}</span>
                  <span>•</span>
                  <span>{position.location}</span>
                  <span>•</span>
                  <span>{position.type}</span>
                </div>
                <p className="text-gray-600 mb-4">{position.description}</p>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Don't see a position that fits?</h2>
            <p className="text-gray-600 mb-6">
              We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.
            </p>
            <button className="bg-gray-200 text-gray-900 px-6 py-3 rounded-lg hover:bg-gray-300 transition-colors">
              Send Resume
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareersPage;