import React from 'react';
import Link from 'next/link';

const NeuralNetworksContentShowcase2025 = () => {
  const neuralContent = [
    {
      title: "Deep Learning Fundamentals",
      description: "Master the core concepts of deep learning with hands-on tutorials and projects",
      image: "📚",
      link: "/neural-networks/deep-learning",
      category: "Tutorials",
      level: "Beginner"
    },
    {
      title: "Advanced Architectures",
      description: "Explore cutting-edge neural network architectures like GPTBERTand Vision Transformers",
      image: "🏗️",
      link: "/neural-networks/architectures",
      category: "Advanced",
      level: "Expert"
    },
    {
      title: "Neural Network Optimization",
      description: "Learn techniques to optimize neural networks for better performance and efficiency",
      image: "⚡",
      link: "/neural-networks/optimization",
      category: "Optimization",
      level: "Intermediate"
    },
    {
      title: "Real-World Applications",
      description: "See how neural networks are applied in healthcarefinanceand autonomous systems",
      image: "🌍",
      link: "/neural-networks/applications",
      category: "Applications",
      level: "All Levels"
    },
    {
      title: "Neural Network Visualization",
      description: "Tools and techniques for visualizing and understanding neural network behavior",
      image: "📊",
      link: "/neural-networks/visualization",
      category: "Tools",
      level: "Intermediate"
    },
    {
      title: "Custom Network Design",
      description: "Build custom neural networks from scratch for specific use cases",
      image: "🛠️",
      link: "/neural-networks/custom-design",
      category: "Development",
      level: "Advanced"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Neural Networks Content Showcase 2025
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive learning resources and practical implementations for mastering 
            neural networks and deep learning technologies.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {neuralContent.map((contentindex) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-orange-100">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{content.image}</div>
                  <div className="bg-orange-100 text-orange-800 text-xs font-bold px-2 py-1 rounded-full">
                    {content.level}
                  </div>
                </div>
                <div className="inline-block bg-orange-100 text-orange-800 text-sm font-medium px-3 py-1 rounded-full mb-3">
                  {content.category}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {content.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {content.description}
                </p>
                <Link
                  href={content.link}
                  className="text-orange-600 font-semibold hover:text-orange-800 transition-colors"
                >
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 rounded-xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Start Your Neural Network Journey</h3>
            <p className="text-lg opacity-90 mb-6">
              Join thousands of developers and researchers learning neural networks with our comprehensive curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/neural-networks/learning-path"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Learning Path
              </Link>
              <Link
                href="/neural-networks/community"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >
                Join Community
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NeuralNetworksContentShowcase2025;