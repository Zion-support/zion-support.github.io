import React from 'react';
import Head from 'next/head';

const Tutorials: React.FC = () => {
  const categories = [
    { id: 'all', name: 'All Tutorials', icon: '📚' },
    { id: 'getting-started', name: 'Getting Started', icon: '🚀' },
    { id: 'integration', name: 'Integration', icon: '🔗' },
    { id: 'advanced', name: 'Advanced', icon: '⚡' }
  ];

  const tutorials = [
    {
      id: 1,
      title: 'Getting Started with AI Integration',
      description: 'Learn the basics of integrating AI services into your applications',
      category: 'getting-started',
      duration: '15 min',
      difficulty: 'Beginner'
    },
    {
      id: 2,
      title: 'Advanced API Integration',
      description: 'Master advanced API integration techniques and best practices',
      category: 'integration',
      duration: '30 min',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Machine Learning Fundamentals',
      description: 'Deep dive into machine learning concepts and applications',
      category: 'advanced',
      duration: '45 min',
      difficulty: 'Advanced'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Tutorials - Zion App</title>
        <meta name="description" content="Learn from our comprehensive tutorials and guides" />
        <meta name="keywords" content="tutorials, guides, learning, development" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Tutorials
            </h1>
            <p className="text-xl text-gray-600">
              Learn from our comprehensive tutorials and guides
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                className="flex items-center gap-2 px-4 py-2 bg-white rounded-lg shadow hover:shadow-md transition-shadow"
              >
                <span>{category.icon}</span>
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tutorials.map((tutorial) => (
              <div key={tutorial.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {tutorial.difficulty}
                  </span>
                  <span className="text-xs text-gray-500">{tutorial.duration}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{tutorial.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{tutorial.description}</p>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Start Tutorial
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tutorials;