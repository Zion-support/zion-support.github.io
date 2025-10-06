import React from 'react';

const ContentShowcase: React.FC = () => {
  const contentItems = [
    {
      title: 'AI Implementation Guide',
      description: 'A comprehensive guide to implementing AI solutions in your organization.',
      category: 'Guide',
      readTime: '15 min read',
      image: '/images/ai-guide.jpg',
    },
    {
      title: 'Digital Transformation Case Study',
      description: 'How we helped a Fortune 500 company transform their operations.',
      category: 'Case Study',
      readTime: '8 min read',
      image: '/images/case-study.jpg',
    },
    {
      title: 'Future of AI Technology',
      description: 'Exploring the latest trends and predictions in artificial intelligence.',
      category: 'Article',
      readTime: '12 min read',
      image: '/images/future-ai.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our latest insights, guides, and case studies to help you succeed with AI and technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                <span className="text-white text-4xl">📄</span>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">{item.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-medium inline-flex items-center"
                >
                  Read More
                  <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a
            href="/content"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-colors"
          >
            View All Content
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContentShowcase;