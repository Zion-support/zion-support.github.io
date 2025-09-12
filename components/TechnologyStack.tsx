import React from 'react';

export default function TechnologyStack() {
  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker', 'Kubernetes',
    'PostgreSQL', 'MongoDB', 'Redis', 'GraphQL', 'REST APIs', 'Microservices', 'AI/ML', 'TensorFlow'
  ];

  return (
    <div className="bg-white bg-opacity-10 backdrop-blur-sm p-6 rounded-xl border border-white border-opacity-20">
      <h3 className="text-lg font-semibold mb-4 text-white">Technology Stack</h3>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-white bg-opacity-20 rounded-full text-sm text-white"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}