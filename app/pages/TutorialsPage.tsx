import React from 'react';
import SEOHead from '../components/SEOHead';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Integration',
      description: 'Learn how to integrate AI solutions into your existing business processes.',
      duration: '45 min',
      level: 'Beginner',
      category: 'AI Solutions'
    },
    {
      title: 'Cloud Migration Best Practices',
      description: 'A comprehensive guide to migrating your infrastructure to the cloud safely.',
      duration: '60 min',
      level: 'Intermediate',
      category: 'Cloud Services'
    },
    {
      title: 'Cybersecurity Fundamentals',
      description: 'Essential security practices every business should implement.',
      duration: '30 min',
      level: 'Beginner',
      category: 'Cybersecurity'
    },
    {
      title: 'Building Micro SaaS Applications',
      description: 'Step-by-step guide to creating scalable micro SaaS solutions.',
      duration: '90 min',
      level: 'Advanced',
      category: 'Development'
    },
    {
      title: '5G Network Implementation',
      description: 'Complete guide to implementing 5G networks in your organization.',
      duration: '75 min',
      level: 'Intermediate',
      category: '5G Solutions'
    },
    {
      title: 'IT Infrastructure Management',
      description: 'Best practices for managing and maintaining IT infrastructure.',
      duration: '50 min',
      level: 'Intermediate',
      category: 'IT Services'
    }
  ];

  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Learn from our comprehensive tutorials on AI solutions, cloud services, cybersecurity, and more. Expert guidance for all skill levels."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Tutorials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from our comprehensive tutorials and guides on AI solutions, cloud services, cybersecurity, and more.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-slate-800 p-6 rounded-lg hover:bg-slate-700 transition-colors">
                <div className="mb-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {tutorial.category}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-3">{tutorial.title}</h3>
                <p className="text-gray-300 mb-4">{tutorial.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span className="flex items-center">
                    <span className="w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                    {tutorial.level}
                  </span>
                  <span>{tutorial.duration}</span>
                </div>
                <a 
                  href="/contact" 
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Start Learning →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Want More Tutorials?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Subscribe to our newsletter to get notified about new tutorials and guides.
            </p>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Subscribe to Updates
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;