import React from 'react';
import SEOHead from '../components/SEOHead';

const TutorialsPage: React.FC = () => {
  const tutorials = [
    {
      title: 'Getting Started with AI Development',
      description: 'Learn the fundamentals of AI development and how to build your first AI application.',
      duration: '2 hours',
      level: 'Beginner',
      category: 'AI Development'
    },
    {
      title: 'Cloud Infrastructure Setup',
      description: 'Complete guide to setting up scalable cloud infrastructure for your applications.',
      duration: '3 hours',
      level: 'Intermediate',
      category: 'Cloud Computing'
    },
    {
      title: 'Cybersecurity Best Practices',
      description: 'Essential cybersecurity practices to protect your applications and data.',
      duration: '1.5 hours',
      level: 'Beginner',
      category: 'Security'
    },
    {
      title: 'Micro SaaS Architecture',
      description: 'Design and implement scalable micro SaaS applications from scratch.',
      duration: '4 hours',
      level: 'Advanced',
      category: 'SaaS Development'
    },
    {
      title: '5G Integration Guide',
      description: 'Integrate 5G technology into your applications for enhanced performance.',
      duration: '2.5 hours',
      level: 'Intermediate',
      category: '5G Technology'
    },
    {
      title: 'API Development Fundamentals',
      description: 'Build robust and secure APIs for your applications.',
      duration: '2 hours',
      level: 'Beginner',
      category: 'API Development'
    }
  ];

  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
        description="Comprehensive tutorials on AI development, cloud computing, cybersecurity, and modern technology solutions."
      />
      <div className="min-h-screen bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto py-20 px-4">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
              Tutorials
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Learn from our comprehensive tutorials covering AI development, cloud computing, cybersecurity, and modern technology solutions.
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
                <h2 className="text-xl font-semibold mb-3">{tutorial.title}</h2>
                <p className="text-gray-300 mb-4">{tutorial.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                  <span>{tutorial.duration}</span>
                  <span className={`px-2 py-1 rounded ${
                    tutorial.level === 'Beginner' ? 'bg-green-600' : 
                    tutorial.level === 'Intermediate' ? 'bg-yellow-600' : 'bg-red-600'
                  } text-white`}>
                    {tutorial.level}
                  </span>
                </div>
                <a 
                  href="/contact" 
                  className="text-blue-400 hover:text-blue-300 font-semibold"
                >
                  Start Tutorial →
                </a>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <h2 className="text-3xl font-bold mb-6">Ready to Learn?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get access to our complete tutorial library and start building amazing applications today.
            </p>
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300"
            >
              Get Access to All Tutorials
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;