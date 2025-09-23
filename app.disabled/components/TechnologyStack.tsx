"use client";

import React from 'react';

const TechnologyStack = () => {
  const technologies = [
    { name: "React", level: "Expert" },
    { name: "Next.js", level: "Expert" },
    { name: "TypeScript", level: "Advanced" },
    { name: "Node.js", level: "Expert" },
    { name: "Python", level: "Advanced" },
    { name: "AWS", level: "Expert" },
    { name: "Docker", level: "Advanced" },
    { name: "Kubernetes", level: "Intermediate" }
  ];

  return (
<<<<<<< HEAD
    <div className="p-6 rounded-lg bg-white/10 text-white">
      <h3 className="text-xl font-semibold mb-4">Technology Stack</h3>
      <div className="grid grid-cols-2 gap-3">
        {technologies.map((tech, index) => (
          <div key={index} className="flex justify-between items-center">
            <span className="text-sm">{tech.name}</span>
            <span className={`text-xs px-2 py-1 rounded ${
              tech.level === 'Expert' ? 'bg-green-500/20 text-green-400' :
              tech.level === 'Advanced' ? 'bg-blue-500/20 text-blue-400' :
              'bg-yellow-500/20 text-yellow-400'
            }`}>
              {tech.level}
            </span>
          </div>
        ))}
=======
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-gray-90o0 mb-8 text-center">Our Technology Stack</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-gray-70o0">
          <div className="p-4 rounded-lg border">Next.js</div>
          <div className="p-4 rounded-lg border">React</div>
          <div className="p-4 rounded-lg border">TypeScript</div>
          <div className="p-4 rounded-lg border">Tailwind CSS</div>
        </div>
>>>>>>> cursor/check-fix-push-and-merge-to-main-f8bc
      </div>
    </div>
  );
};

export default TechnologyStack;