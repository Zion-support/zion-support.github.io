import React from 'react';

const ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: "AI-Powered Analytics",
      description: "Transform your data into actionable insights with our advanced AI analytics platform.",
      image: "/api/placeholder/400/300",
      category: "Analytics"
    },
    {
      title: "Process Automation",
      description: "Streamline your workflows with intelligent automation solutions.",
      image: "/api/placeholder/400/300",
      category: "Automation"
    },
    {
      title: "Cloud Migration",
      description: "Seamlessly migrate your infrastructure to the cloud with our expert guidance.",
      image: "/api/placeholder/400/300",
      category: "Cloud"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Content Showcase
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our featured solutions and success stories
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-lg font-semibold">{item.category}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
                <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
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

export default ContentShowcase;