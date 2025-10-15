import React from 'react';
import SEOHead from '../components/SEOHead';

const TutorialsPage: React.FC = () => {
<<<<<<< HEAD
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

=======
>>>>>>> d0a5f751e69f1b9c9ad5909af4c7a33e113c5c0d
  return (
    <>
      <SEOHead
        title="Tutorials - Zion Tech Group"
<<<<<<< HEAD
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
=======
        description="Learn how to use our AI and IT solutions with comprehensive tutorials and guides."
        keywords="tutorials, guides, learning, AI tutorials, IT tutorials, how-to"
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
>>>>>>> d0a5f751e69f1b9c9ad5909af4c7a33e113c5c0d
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<<<<<<< HEAD
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
=======
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-purple-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">AI Solutions Tutorials</h3>
              <p className="text-gray-400 mb-4">
                Learn how to implement and use our AI-powered solutions effectively.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Getting Started with AI Chatbot Builder</li>
                <li>• AI Document Processing Best Practices</li>
                <li>• Voice Assistant Integration Guide</li>
                <li>• Fraud Detection Setup Tutorial</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">IT Solutions Guides</h3>
              <p className="text-gray-400 mb-4">
                Comprehensive guides for our IT infrastructure and development services.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Cloud Infrastructure Setup</li>
                <li>• Web Development Best Practices</li>
                <li>• Database Management Tutorials</li>
                <li>• Security Implementation Guide</li>
              </ul>
            </div>
            
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700 hover:border-green-500 transition-all duration-300">
              <h3 className="text-xl font-semibold mb-4 text-white">Micro SaaS Tutorials</h3>
              <p className="text-gray-400 mb-4">
                Step-by-step guides for using our micro SaaS applications.
              </p>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Task Manager Pro Setup</li>
                <li>• Analytics Dashboard Configuration</li>
                <li>• Customer Support Hub Tutorial</li>
                <li>• Inventory Manager Guide</li>
              </ul>
>>>>>>> d0a5f751e69f1b9c9ad5909af4c7a33e113c5c0d
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;