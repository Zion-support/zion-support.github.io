import React from 'react';

const ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: 'AI Transformation Guide',
      description: 'Complete guide to implementing AI in your enterprise',
      category: 'Guide',
      readTime: '10 min read'
    },
    {
      title: 'ROI Case Studies',
      description: 'Real-world examples of AI implementation success',
      category: 'Case Study',
      readTime: '5 min read'
    },
    {
      title: 'Technical Deep Dive',
      description: 'Advanced AI architecture and implementation strategies',
      category: 'Technical',
      readTime: '15 min read'
    }
  ];

  return (
    <div className="py-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
        Featured Content
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {contentItems.map((item, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <span className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full">
                {item.category}
              </span>
              <span className="text-gray-500 text-sm">{item.readTime}</span>
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
            <p className="text-gray-600 mb-4">{item.description}</p>
            <button className="text-blue-600 hover:text-blue-800 font-medium">
              Read More →
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContentShowcase;