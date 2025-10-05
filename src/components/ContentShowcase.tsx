import React from 'react';
import { Link } from 'react-router-dom';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  image?: string;
  category: string;
  readTime: string;
  publishedDate: string;
  author: string;
  slug: string;
}

interface ContentShowcaseProps {
  className?: string;
  title?: string;
  items?: ContentItem[];
  showCategory?: boolean;
  showAuthor?: boolean;
  maxItems?: number;
}

const ContentShowcase: React.FC<ContentShowcaseProps> = ({
  className = '',
  title = 'Latest Content',
  items = [],
  showCategory = true,
  showAuthor = true,
  maxItems = 6
}) => {
  // Default content items if none provided
  const defaultItems: ContentItem[] = [
    {
      id: '1',
      title: 'AI Revolution in Enterprise: 2025 Trends',
      description: 'Discover how artificial intelligence is transforming enterprise operations and what to expect in 2025.',
      category: 'AI & Technology',
      readTime: '5 min read',
      publishedDate: '2025-01-15',
      author: 'Zion Tech Team',
      slug: 'ai-revolution-enterprise-2025-trends'
    },
    {
      id: '2',
      title: 'Machine Learning Best Practices',
      description: 'Learn the essential best practices for implementing machine learning in your organization.',
      category: 'Machine Learning',
      readTime: '8 min read',
      publishedDate: '2025-01-12',
      author: 'Dr. Sarah Chen',
      slug: 'machine-learning-best-practices'
    },
    {
      id: '3',
      title: 'Cloud Computing Security Guide',
      description: 'A comprehensive guide to securing your cloud infrastructure and protecting sensitive data.',
      category: 'Cloud Security',
      readTime: '12 min read',
      publishedDate: '2025-01-10',
      author: 'Mike Rodriguez',
      slug: 'cloud-computing-security-guide'
    },
    {
      id: '4',
      title: 'Data Analytics for Business Growth',
      description: 'How to leverage data analytics to drive business growth and make informed decisions.',
      category: 'Data Analytics',
      readTime: '6 min read',
      publishedDate: '2025-01-08',
      author: 'Lisa Wang',
      slug: 'data-analytics-business-growth'
    },
    {
      id: '5',
      title: 'Cybersecurity in the Digital Age',
      description: 'Essential cybersecurity strategies for protecting your digital assets in today\'s threat landscape.',
      category: 'Cybersecurity',
      readTime: '10 min read',
      publishedDate: '2025-01-05',
      author: 'James Thompson',
      slug: 'cybersecurity-digital-age'
    },
    {
      id: '6',
      title: 'Automation Tools for Efficiency',
      description: 'Top automation tools that can help streamline your business processes and increase efficiency.',
      category: 'Automation',
      readTime: '7 min read',
      publishedDate: '2025-01-03',
      author: 'Alex Johnson',
      slug: 'automation-tools-efficiency'
    }
  ];

  const displayItems = items.length > 0 ? items.slice(0, maxItems) : defaultItems.slice(0, maxItems);

  return (
    <div className={`py-12 px-4 ${className}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and innovations in technology and business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {item.image && (
                <div className="aspect-w-16 aspect-h-9">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
              )}
              
              <div className="p-6">
                {showCategory && (
                  <div className="mb-3">
                    <span className="inline-block bg-blue-100 text-blue-800 text-sm font-semibold px-3 py-1 rounded-full">
                      {item.category}
                    </span>
                  </div>
                )}

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>

                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-4">
                    <span>{item.readTime}</span>
                    <span>•</span>
                    <span>{new Date(item.publishedDate).toLocaleDateString()}</span>
                  </div>
                </div>

                {showAuthor && (
                  <div className="text-sm text-gray-500 mb-4">
                    By {item.author}
                  </div>
                )}

                <Link
                  to={`/blog/${item.slug}`}
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors duration-300"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/blog"
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            View All Content
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;