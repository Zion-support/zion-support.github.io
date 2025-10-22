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
      title: 'Data Analytics Fundamentals',
      description: 'Introduction to data analytics and visualization',
      duration: '45 min',
      level: 'Beginner',
      category: 'Data Science'
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity measures for your organization',
      duration: '25 min',
      level: 'Intermediate',
      category: 'Security'
    },
    {
      title: 'Micro SaaS Development',
      description: 'Building and deploying micro SaaS applications',
      duration: '60 min',
      level: 'Advanced',
      category: 'Development'
    },
    {
      title: '5G Technology Implementation',
      description: 'Understanding and implementing 5G solutions',
      duration: '40 min',
      level: 'Intermediate',
      category: 'Networking'
    }
  ];

const categories = ['All', 'AI Basics', 'Cloud Computing', 'Data Science', 'Security', 'Development', 'Networking'];
  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
description="Learn from our comprehensive tutorials covering AI, cloud computing, data analytics, cybersecurity, and more."
        keywords="tutorials, learning, AI tutorials, cloud computing, data analytics, cybersecurity, technology education"
        canonicalUrl="https://ziontechgroup.com/tutorials"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Tutorials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
Learn from our comprehensive tutorials covering AI, cloud computing, data analytics, cybersecurity, and more.
            </p>
          </div>
          
          <div className="mb-8">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-4 py-2 rounded-lg bg-slate-800 text-gray-300 hover:bg-blue-600 hover:text-white transition-colors"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial, index) => (
              <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-blue-600 text-white text-sm rounded-full">
                    {tutorial.category}
                  </span>
                  <span className="text-sm text-gray-400">{tutorial.duration}</span>
                </div>
                
<h3 className="text-xl font-semibold mb-3 text-white">
                  {tutorial.title}
                </h3>
                
                <p className="text-gray-300 mb-4">
                  {tutorial.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    Level: {tutorial.level}
                  </span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors">
                    Start Tutorial →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
<div className="text-center mt-12">
            <a
              href="/contact?service=tutorials"
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            >
              Request Custom Tutorial
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;
