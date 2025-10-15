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
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tutorials & Learning Center
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master our AI and IT solutions with step-by-step tutorials, guides, and best practices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/20">
                <div className="flex items-center justify-between mb-4">
                  <span className="bg-purple-500/20 text-purple-300 text-xs font-medium px-2.5 py-0.5 rounded">
                    {tutorial.category}
                  </span>
                  <span className="text-sm text-gray-400">{tutorial.duration}</span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{tutorial.title}</h3>
                <p className="text-gray-400 mb-4">{tutorial.description}</p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium px-2 py-1 rounded ${
                    tutorial.level === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                    tutorial.level === 'Intermediate' ? 'bg-yellow-500/20 text-yellow-300' :
                    'bg-red-500/20 text-red-300'
                  }`}>
                    {tutorial.level}
                  </span>
                  <button className="text-purple-400 hover:text-purple-300 font-medium">
                    Start Tutorial →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Learn More?</h2>
            <p className="text-lg text-gray-300 mb-8">
              Contact our team for personalized training and consultation services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Consultation
              </a>
              <a 
                href="/contact" 
                className="border-2 border-purple-400 text-purple-300 px-8 py-3 rounded-lg font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300"
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