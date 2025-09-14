'use client';

import React from 'react';

const TechnologyStack: React.FC = () => {
  const technologies = [
    { name: 'Next.js', description: 'React framework for production' },
    { name: 'TypeScript', description: 'Typed JavaScript at scale' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'AI/ML', description: 'Artificial Intelligence and Machine Learning' },
    { name: 'Cloud Infrastructure', description: 'Scalable cloud solutions' },
    { name: 'Microservices', description: 'Modular architecture approach' }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Our Technology Stack
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-gray-600">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;