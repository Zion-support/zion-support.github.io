import React from 'react';

interface TechItemProps {
  icon: string;
  title: string;
  description: string;
}

const TechItem: React.FC<TechItemProps> = ({ icon, title, description }) => (
  <div className="text-center p-6 bg-white rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
    <div className="text-3xl mb-3">{icon}</div>
    <h3 className="font-semibold text-gray-900">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const TechnologyStack: React.FC = () => {
  const technologies = [
    {
      icon: '⚛️',
      title: 'React & Next.js',
      description: 'Modern frontend frameworks'
    },
    {
      icon: '☁️',
      title: 'Cloud Infrastructure',
      description: 'AWS, Azure, GCP'
    },
    {
      icon: '🤖',
      title: 'AI & ML',
      description: 'OpenAI, TensorFlow, PyTorch'
    },
    {
      icon: '🔒',
      title: 'Security First',
      description: 'Enterprise-grade security'
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Cutting-Edge Technology Stack
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We leverage the latest technologies to build robust, scalable solutions
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {technologies.map((tech, index) => (
            <TechItem
              key={index}
              icon={tech.icon}
              title={tech.title}
              description={tech.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologyStack;