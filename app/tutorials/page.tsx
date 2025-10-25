'use client';

import React from 'react';
import SEOHead from '../components/SEOHead';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

export default function TutorialsPage() {
  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Solutions',
      description: 'Learn the basics of implementing AI solutions in your business.',
      duration: '15 min',
      difficulty: 'Beginner',
      category: 'AI Solutions'
    },
    {
      id: 2,
      title: 'Cloud Migration Best Practices',
      description: 'Step-by-step guide to migrating your infrastructure to the cloud.',
      duration: '30 min',
      difficulty: 'Intermediate',
      category: 'Cloud Services'
    },
    {
      id: 3,
      title: 'API Integration Tutorial',
      description: 'How to integrate our APIs into your applications.',
      duration: '20 min',
      difficulty: 'Intermediate',
      category: 'Development'
    },
    {
      id: 4,
      title: 'Security Configuration',
      description: 'Configure security settings for your enterprise solutions.',
      duration: '25 min',
      difficulty: 'Advanced',
      category: 'Security'
    }
  ];

  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Learn how to use Zion Tech Group services with our comprehensive tutorials and guides."
        keywords="tutorials, guides, learning, documentation, how-to, training"
        canonicalUrl="https://ziontechgroup.com/tutorials"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        <Navigation />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Tutorials & Guides
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn how to use Zion Tech Group services with our comprehensive tutorials and guides.
            </p>
          </div>

          {/* Tutorials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-colors">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-purple-400 font-medium">{tutorial.category}</span>
                  <span className="text-sm text-gray-400">{tutorial.duration}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{tutorial.title}</h3>
                <p className="text-gray-300 mb-4">{tutorial.description}</p>
                <div className="flex items-center justify-between">
                  <span className={`text-sm px-2 py-1 rounded ${
                    tutorial.difficulty === 'Beginner' ? 'bg-green-600' :
                    tutorial.difficulty === 'Intermediate' ? 'bg-yellow-600' :
                    'bg-red-600'
                  }`}>
                    {tutorial.difficulty}
                  </span>
                  <button className="text-purple-400 hover:text-purple-300 font-medium">
                    Start Tutorial →
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <h2 className="text-2xl font-bold mb-4">Need More Help?</h2>
            <p className="text-gray-300 mb-6">
              Can't find what you're looking for? Our support team is here to help.
            </p>
            <button className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3 rounded-lg font-semibold">
              Contact Support
            </button>
          </div>
        </div>
        
        <Footer />
      </div>
    </>
  );
}