import React, { useState } from 'react';

const InteractiveTechShowcase: React.FC = () => {
  const [activeTech, setActiveTech] = useState(0);

  const technologies = [
    {
      name: "AI & Machine Learning",
      description: "Revolutionary AI solutions for modern businesses",
      features: ["Neural Networks", "Deep Learning", "Natural Language Processing", "Computer Vision"],
      color: "from-blue-500 to-purple-600"
    },
    {
      name: "Cloud Computing",
      description: "Scalable cloud infrastructure and services",
      features: ["AWS Integration", "Azure Solutions", "Google Cloud", "Hybrid Cloud"],
      color: "from-green-500 to-blue-600"
    },
    {
      name: "Data Analytics",
      description: "Advanced analytics and business intelligence",
      features: ["Real-time Analytics", "Predictive Modeling", "Data Visualization", "Machine Learning"],
      color: "from-purple-500 to-pink-600"
    }
  ];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">Interactive Tech Showcase</h2>
        <p className="text-center text-lg mb-12">Explore our cutting-edge technology solutions</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${tech.color} p-6 rounded-lg cursor-pointer transform transition-all duration-300 hover:scale-105 ${
                activeTech === index ? 'ring-2 ring-white' : ''
              }`}
              onClick={() => setActiveTech(index)}
            >
              <h3 className="text-xl font-semibold mb-4">{tech.name}</h3>
              <p className="text-gray-200 mb-4">{tech.description}</p>
              <ul className="space-y-2">
                {tech.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="text-sm text-gray-200">
                    • {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteractiveTechShowcase;
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>
  </div>