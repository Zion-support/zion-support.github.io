import React from 'react';
import SEOHead from '../components/SEOHead';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Solutions',
      description: 'Learn the basics of implementing AI in your business',
      duration: '15 min',
      level: 'Beginner',
      category: 'AI Basics'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Step-by-step guide to setting up cloud infrastructure',
      duration: '30 min',
      level: 'Intermediate',
      category: 'Cloud Computing'
    },
    {
      title: 'Data Analytics Best Practices',
      description: 'How to effectively analyze and visualize your data',
      duration: '25 min',
      level: 'Intermediate',
      category: 'Data Science'
    },
    {
      title: 'API Development Fundamentals',
      description: 'Build robust APIs for your applications',
      duration: '45 min',
      level: 'Advanced',
      category: 'Development'
    },
    {
      title: 'Cybersecurity Essentials',
      description: 'Protect your business from cyber threats',
      duration: '20 min',
      level: 'Beginner',
      category: 'Security'
    },
    {
      title: 'Digital Transformation Strategy',
      description: 'Plan and execute your digital transformation',
      duration: '60 min',
      level: 'Advanced',
      category: 'Strategy'
    }
  ];

  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Learn AI and IT solutions with our comprehensive tutorials and guides. From beginner to advanced levels."
        keywords="AI tutorials, IT tutorials, cloud computing, data analytics, API development, cybersecurity"
        canonicalUrl="https://ziontechgroup.com/tutorials"
      />
      
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">Tutorials & Learning Center</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Master AI and IT solutions with our comprehensive tutorials, guides, and hands-on learning materials.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tutorial.category}
                  </span>
                  <span className="text-sm text-gray-500">{tutorial.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{tutorial.title}</h3>
                <p className="text-gray-600 mb-4">{tutorial.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    tutorial.level === 'Beginner' ? 'bg-green-100 text-green-800' :
                    tutorial.level === 'Intermediate' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {tutorial.level}
                  </span>
                  <button className="text-blue-600 hover:text-blue-800 font-medium">
                    Start Tutorial →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Learn More?</h2>
            <p className="text-lg text-gray-600 mb-8">
              Contact our team for personalized training and consultation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
              >
                Get Consultation
              </a>
              <a 
                href="/contact" 
                className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Request Custom Training
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;