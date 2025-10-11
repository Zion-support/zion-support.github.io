import React from 'react';

interface ContentItem {
  id: number;
  title: string;
  description: string;
  category: string;
  readTime: string;
  image: string;
}

const ContentShowcase: React.FC = () => {
  const contentItems: ContentItem[] = [
    {
      id: 1,
      title: 'AI-Powered Enterprise Solutions',
      description:
        'Discover how our AI solutions are transforming enterprise operations and driving unprecedented growth.',
      category: 'AI Solutions',
      readTime: '5 min read',
      image: '/api/placeholder/400/250',
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs',
      description:
        'Explore the latest advances in quantum computing and their applications in modern business.',
      category: 'Technology',
      readTime: '7 min read',
      image: '/api/placeholder/400/250',
    },
    {
      id: 3,
      title: 'Autonomous Systems Revolution',
      description:
        'Learn about self-managing systems that are revolutionizing how businesses operate.',
      category: 'Automation',
      readTime: '6 min read',
      image: '/api/placeholder/400/250',
    },
  ];

  return (
    <div className="py-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Featured Content
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Explore our latest insights, case studies, and technical deep-dives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map(item => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <div className="aspect-w-16 aspect-h-9">
                <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">{item.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium"
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
