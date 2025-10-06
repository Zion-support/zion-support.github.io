import React, { useState } from 'react';

const InteractiveContentShowcase2026: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: "AI Innovation",
      content: "Discover the latest breakthroughs in artificial intelligence and machine learning technologies.",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Automated Decision Making"]
    },
    {
      title: "Digital Transformation",
      content: "Transform your business with cutting-edge digital solutions and modern technologies.",
      features: ["Cloud Migration", "API Integration", "Microservices Architecture", "DevOps Automation"]
    },
    {
      title: "Enterprise Solutions",
      content: "Scale your business with enterprise-grade solutions designed for growth and efficiency.",
      features: ["Scalable Infrastructure", "Security Compliance", "Performance Optimization", "24/7 Support"]
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Interactive Content Showcase 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Experience the future of technology with our interactive showcase of innovative solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="border-b border-gray-200">
              <nav className="flex">
                {tabs.map((tab, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    className={`px-6 py-4 text-sm font-medium ${
                      activeTab === index
                        ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                        : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </nav>
            </div>

            <div className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                    {tabs[activeTab]?.title}
                  </h3>
                  <p className="text-gray-600 mb-6">
                    {tabs[activeTab]?.content}
                  </p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-lg transition-colors">
                    Get Started
                  </button>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Features
                  </h4>
                  <ul className="space-y-3">
                    {tabs[activeTab]?.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveContentShowcase2026;
