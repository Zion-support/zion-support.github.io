<<<<<<< HEAD
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
=======
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Layers } from 'lucide-react';

export default function TutorialsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Tutorials | Zion Tech Group</title>
        <meta name="description" content="Professional tutorials solutions for modern businesses." />
      </Helmet>
      
      <div className="container mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 mb-6">
            Tutorials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional tutorials solutions for modern businesses.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Advanced Solutions</h3>
            <p className="text-gray-300">Cutting-edge technology solutions tailored to your business needs.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Expert Support</h3>
            <p className="text-gray-300">Dedicated support team to help you succeed with our solutions.</p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700">
            <Layers className="w-12 h-12 text-yellow-400 mb-4" />
            <h3 className="text-xl font-semibold text-white mb-3">Scalable Growth</h3>
            <p className="text-gray-300">Solutions that grow with your business and adapt to your needs.</p>
          </div>
        </div>

        <div className="text-center">
          <p className="text-lg text-gray-300 mb-8">
            Ready to get started with tutorials?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 group"
            >
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400/10 transition-all duration-300"
            >
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
>>>>>>> e8c0fc9337d69fc2277cc41f3d1f9a45a721f442
