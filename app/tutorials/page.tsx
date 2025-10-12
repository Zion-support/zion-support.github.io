import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Code, Brain, Cloud, Shield } from 'lucide-react';

const TutorialsPage: React.FC = () => {
  const tutorialCategories = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI & Machine Learning',
      description: 'Learn the fundamentals of artificial intelligence and machine learning',
      tutorials: [
        'Introduction to AI',
        'Machine Learning Basics',
        'Deep Learning with TensorFlow',
        'Natural Language Processing',
        'Computer Vision'
      ],
      color: 'from-cyan-500 to-blue-500'
    },
    {
      icon: <Code className="w-8 h-8 text-green-400" />,
      title: 'Web Development',
      description: 'Master modern web development technologies',
      tutorials: [
        'React Fundamentals',
        'Next.js Advanced',
        'TypeScript Guide',
        'API Development',
        'Database Design'
      ],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: <Cloud className="w-8 h-8 text-purple-400" />,
      title: 'Cloud Computing',
      description: 'Learn cloud platforms and deployment strategies',
      tutorials: [
        'AWS Basics',
        'Azure Fundamentals',
        'Docker & Kubernetes',
        'Serverless Architecture',
        'DevOps Practices'
      ],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: <Shield className="w-8 h-8 text-red-400" />,
      title: 'Cybersecurity',
      description: 'Protect your applications and data',
      tutorials: [
        'Security Fundamentals',
        'Penetration Testing',
        'Secure Coding',
        'Network Security',
        'Incident Response'
      ],
      color: 'from-red-500 to-orange-500'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Tutorials - Zion Tech Group</title>
        <meta name="description" content="Learn AI and IT solutions with our comprehensive tutorials and guides." />
        <meta name="keywords" content="tutorials, AI tutorials, IT tutorials, learning, guides, education" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">Tutorials & Learning Center</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Master AI and IT technologies with our comprehensive tutorials, guides, and hands-on learning resources.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorialCategories.map((category, index) => (
              <div
                key={index}
                className={`bg-gradient-to-br ${category.color}/10 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group`}
              >
                <div className="mb-6">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {category.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {category.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {category.tutorials.map((tutorial, tutorialIndex) => (
                    <li key={tutorialIndex} className="text-gray-400 flex items-center">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                      {tutorial}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold group-hover:translate-x-2 transition-all duration-300"
                >
                  Start Learning
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 backdrop-blur-sm rounded-2xl p-12 border border-cyan-500/20">
              <h2 className="text-4xl font-bold text-white mb-6">
                Ready to Start Learning?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of developers and IT professionals learning with our comprehensive tutorials.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
                >
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-500/10 transition-all duration-300"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TutorialsPage;