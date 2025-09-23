import React from 'react';

const TechnologyStack: React.FC = () => {
  const technologies = [
    { name: 'Next.js', category: 'Framework', description: 'React framework for production' },
    { name: 'React', category: 'Library', description: 'JavaScript library for building user interfaces' },
    { name: 'TypeScript', category: 'Language', description: 'Typed superset of JavaScript' },
    { name: 'Tailwind CSS', category: 'Styling', description: 'Utility-first CSS framework' },
    { name: 'Node.js', category: 'Runtime', description: 'JavaScript runtime for server-side development' },
    { name: 'AI/ML', category: 'Technology', description: 'Artificial Intelligence and Machine Learning' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Our Technology Stack</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((techindex) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{tech.name}</h3>
              <p className="text-sm text-gray-600 mb-2">{tech.category}</p>
              <p className="text-gray-700">{tech.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;