import React from 'react';

const ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with cutting-edge AI technology",
      icon: "🤖",
      category: "Technology"
    },
    {
      title: "Digital Transformation",
      description: "Modernize your operations with our comprehensive digital solutions",
      icon: "💻",
      category: "Consulting"
    },
    {
      title: "Enterprise Automation",
      description: "Streamline processes and increase efficiency with intelligent automation",
      icon: "⚡",
      category: "Automation"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics tools",
      icon: "📊",
      category: "Analytics"
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
        Our Content Showcase
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contentItems.map((item, index) => (
          <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
            <div className="text-4xl mb-4 text-center">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {item.title}
            </h3>
            <p className="text-gray-600 mb-3">
              {item.description}
            </p>
            <span className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentShowcase;