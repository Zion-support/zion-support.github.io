'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const ARVRSolutionsPage: React.FC = () => {
  const solutions = [
    {
      title: 'Virtual Training',
      description: 'Immersive training experiences for employees across all industries.',
      icon: '🎓'
    },
    {
      title: 'Virtual Showrooms',
      description: 'Create interactive product showcases and virtual showrooms.',
      icon: '🏪'
    },
    {
      title: 'Augmented Reality Apps',
      description: 'Mobile AR applications for enhanced customer experiences.',
      icon: '📱'
    },
    {
      title: 'Virtual Events',
      description: 'Host engaging virtual events and conferences.',
      icon: '🎪'
    }
  ];

  const industries = [
    'Healthcare & Medical Training',
    'Real Estate & Architecture',
    'Retail & E-commerce',
    'Education & Training',
    'Manufacturing & Design',
    'Entertainment & Gaming'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            AR/VR Solutions
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Immersive augmented and virtual reality solutions that transform how you interact with customers and train your team.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {solutions.map((solution, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg p-8">
              <div className="text-4xl mb-4">{solution.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{solution.title}</h3>
              <p className="text-gray-600">{solution.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg shadow-lg p-8 max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Industries We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {industries.map((industry, index) => (
              <div key={index} className="flex items-center">
                <span className="text-green-500 mr-3 text-xl">✓</span>
                <span className="text-gray-700">{industry}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Ready to Go Immersive?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Let's create an AR/VR experience that engages your audience and drives results.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all"
            >
              Start Your Project
            </a>
            <a
              href="tel:+13024640950"
              className="inline-block border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-indigo-600 transition-all"
            >
              Call: (302) 464-0950
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ARVRSolutionsPage;