import React from 'react';
import Head from 'next/head';

const Guides: React.FC = () => {
  const guides = [
    {
      id: 1,
      title: 'Getting Started with AI Integration',
      description: 'Learn the fundamentals of integrating AI services into your applications',
      difficulty: 'Beginner',
      readTime: '15 min read',
      tags: ['AI', 'Integration', 'Tutorial']
    },
    {
      id: 2,
      title: 'Advanced Machine Learning Patterns',
      description: 'Master complex ML architectures and deployment strategies',
      difficulty: 'Advanced',
      readTime: '45 min read',
      tags: ['ML', 'Architecture', 'Deployment']
    },
    {
      id: 3,
      title: 'API Best Practices',
      description: 'Essential guidelines for building robust and scalable APIs',
      difficulty: 'Intermediate',
      readTime: '25 min read',
      tags: ['API', 'Best Practices', 'Scalability']
    }
  ];

  const categories = ['All', 'Beginner', 'Intermediate', 'Advanced'];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      <Head>
        <title>Guides - Zion App</title>
        <meta name="description" content="Comprehensive guides and tutorials for developers" />
        <meta name="keywords" content="guides, tutorials, learning, development" />
      </Head>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Developer Guides
            </h1>
            <p className="text-xl text-gray-600">
              Learn from our comprehensive guides and tutorials
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
                    {guide.difficulty}
                  </span>
                  <span className="text-xs text-gray-500">{guide.readTime}</span>
                </div>
                
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{guide.title}</h3>
                <p className="text-gray-600 text-sm mb-4">{guide.description}</p>
                
                <div className="flex flex-wrap gap-1 mb-4">
                  {guide.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Read Guide
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Guides;