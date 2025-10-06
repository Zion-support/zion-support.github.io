import React from 'react';

const ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI-Powered Solutions",
      description: "Transform your business with our cutting-edge AI technologies.",
      icon: "🤖",
      category: "Technology"
    },
    {
      title: "Enterprise Consulting",
      description: "Expert guidance for large-scale digital transformation projects.",
      icon: "🏢",
      category: "Consulting"
    },
    {
      title: "Cloud Migration",
      description: "Seamless transition to cloud-based infrastructure and services.",
      icon: "☁️",
      category: "Infrastructure"
    },
    {
      title: "Data Analytics",
      description: "Unlock insights from your data with advanced analytics tools.",
      icon: "📊",
      category: "Analytics"
    }
  ];

  return (
    <div className="bg-gray-50 rounded-2xl p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Our Services
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {contentItems.map((item, index) => (
          <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
            <div className="text-4xl mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
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