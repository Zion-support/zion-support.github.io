import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  
  const categories = [
    { id: 'all', name: 'All Solutions' },
    { id: 'ai', name: 'AI Solutions' },
    { id: 'automation', name: 'Automation' },
    { id: 'cloud', name: 'Cloud Services' },
    { id: 'analytics', name: 'Analytics' }
  ];

  const solutions = [
    {
      id: 1,
      title: "Advanced AI Platform 2026",
      description: "Next-generation AI platform with enhanced capabilities",
      category: "ai",
      features: ["Machine Learning", "Natural Language Processing", "Computer Vision"],
      price: "Custom Pricing"
    },
    {
      id: 2,
      title: "Intelligent Automation Suite",
      description: "Comprehensive automation solutions for enterprise workflows",
      category: "automation",
      features: ["Workflow Automation", "RPA", "Process Optimization"],
      price: "Starting at $10,000/month"
    },
    {
      id: 3,
      title: "Cloud Infrastructure Pro",
      description: "Scalable cloud solutions with advanced security",
      category: "cloud",
      features: ["Multi-Cloud Support", "Auto-Scaling", "Security Compliance"],
      price: "Pay-as-you-scale"
    },
    {
      id: 4,
      title: "Predictive Analytics Engine",
      description: "Advanced analytics with predictive capabilities",
      category: "analytics",
      features: ["Real-time Analytics", "Predictive Modeling", "Data Visualization"],
      price: "Contact for pricing"
    }
  ];

  const filteredSolutions = selectedCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === selectedCategory);

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Interactive Content Showcase 2026
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our cutting-edge solutions for the future
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-colors ${
                selectedCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Solutions Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredSolutions.map((solution) => (
            <div key={solution.id} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold mb-2">{solution.title}</h3>
              <p className="text-gray-600 mb-4">{solution.description}</p>
              
              <div className="mb-4">
                <h4 className="font-medium mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  {solution.features.map((feature, index) => (
                    <li key={index}>• {feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="font-semibold text-blue-600">{solution.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;