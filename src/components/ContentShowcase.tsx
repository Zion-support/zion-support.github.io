import React from 'react';

interface ContentItem {
  id: number;
  title: string;
  description: string;
  link: string;
  category: string;
  date: string;
  readTime: string;
  featured?: boolean;
}

const ContentShowcase: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      id: 1,
      title: 'AI-Powered Business Solutions',
      description: 'Discover how artificial intelligence is transforming modern business operations and driving unprecedented growth.',
      link: '/blog/ai-business-solutions',
      category: 'AI & Technology',
      date: '2025-01-30',
      readTime: '8 min',
      featured: true
    },
    {
      id: 2,
      title: 'Enterprise Automation Strategies',
      description: 'Learn about advanced automation techniques that can streamline your business processes and increase efficiency.',
      link: '/blog/enterprise-automation',
      category: 'Business Strategy',
      date: '2025-01-29',
      readTime: '12 min'
    },
    {
      id: 3,
      title: 'Cloud Infrastructure Best Practices',
      description: 'Explore the latest trends in cloud computing and how to build scalable, secure infrastructure.',
      link: '/blog/cloud-infrastructure',
      category: 'Cloud Computing',
      date: '2025-01-28',
      readTime: '10 min'
    }
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Latest Content & Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest trends, technologies, and best practices
            in AI, automation, and enterprise solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item) => (
            <div
              key={item.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300 ${
                item.featured ? 'ring-2 ring-blue-500' : ''
              }`}
            >
              <div className="p-6">
                {item.featured && (
                  <div className="inline-block bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mb-4">
                    Featured
                  </div>
                )}
                
                <div className="mb-2">
                  <span className="text-sm text-blue-600 font-medium">
                    {item.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{item.date}</span>
                  <span>{item.readTime} read</span>
                </div>
                
                <a
                  href={item.link}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;