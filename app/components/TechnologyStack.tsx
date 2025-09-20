import React from 'react'

const TechnologyStack: React.FC = () => {
  const technologies = [
    {
      category: "AI & Machine Learning",
      items: [
        "TensorFlow & PyTorch",
        "Neural Networks",
        "Deep Learning",
        "Natural Language Processing",
        "Computer Vision",
        "Reinforcement Learning"
      ]
    },
    {
      category: "Quantum Computing",
      items: [
        "Quantum Algorithms",
        "Quantum Machine Learning",
        "Quantum Optimization",
        "Quantum Neural Networks",
        "Quantum Annealing",
        "Quantum Error Correction"
      ]
    },
    {
      category: "Cloud & Infrastructure",
      items: [
        "AWS & Azure",
        "Kubernetes",
        "Docker Containers",
        "Microservices",
        "Serverless Computing",
        "Edge Computing"
      ]
    },
    {
      category: "Data & Analytics",
      items: [
        "Big Data Processing",
        "Real-time Analytics",
        "Predictive Modeling",
        "Data Visualization",
        "Business Intelligence",
        "Data Lake Architecture"
      ]
    },
    {
      category: "Automation & Integration",
      items: [
        "Robotic Process Automation",
        "API Integration",
        "Workflow Automation",
        "CI/CD Pipelines",
        "DevOps Practices",
        "Infrastructure as Code"
      ]
    },
    {
      category: "Security & Compliance",
      items: [
        "Zero Trust Architecture",
        "End-to-End Encryption",
        "GDPR Compliance",
        "SOC 2 Type II",
        "Penetration Testing",
        "Security Monitoring"
      ]
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {technologies.map((tech, index) => (
        <div key={index} className="bg-gray-700 rounded-lg p-6 hover:bg-gray-600 transition-colors">
          <h3 className="text-xl font-bold mb-4 text-blue-400">{tech.category}</h3>
          <ul className="space-y-2">
            {tech.items.map((item, itemIndex) => (
              <li key={itemIndex} className="text-gray-300 flex items-center">
                <div className="w-2 h-2 bg-blue-400 rounded-full mr-3"></div>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechnologyStack;