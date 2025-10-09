import React from 'react';

const DynamicContentShowcase: React.FC = () => {
  const technologies = [
    { name: "Machine Learning", progress: 95 },
    { name: "Quantum Computing", progress: 88 },
    { name: "Cloud Infrastructure", progress: 92 },
    { name: "AI Automation", progress: 90 },
    { name: "Data Analytics", progress: 87 },
    { name: "Cybersecurity", progress: 94 }
  ];

  return (
    <section className="py-16 bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Our Technology Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {technologies.map((tech, index) => (
            <div key={index} className="cyber-card p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-semibold text-white">{tech.name}</h3>
                <span className="text-cyan-400 font-bold">{tech.progress}%</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-cyan-500 to-blue-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${tech.progress}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DynamicContentShowcase;
