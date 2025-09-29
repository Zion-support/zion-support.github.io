import React from 'react';

interface ContentItem {
  id: string;
  title: string;
  description: string;
  category: string;
  publishedAt: string;
  readTime?: string;
  featured?: boolean;
  type: 'blog' | 'insight' | 'case-study';
}

interface ContentSpotlightProps {
  content: ContentItem[];
  title?: string;
  subtitle?: string;
  maxItems?: number;
}

const ContentSpotlight: React.FC<ContentSpotlightProps> = ({
  content,
  title = "Latest Insights & Resources",
  subtitle = "Stay ahead with our latest thought leadership and practical guides",
  maxItems = 6
}) => {
  const featuredContent = content
    .filter(item => item.featured)
    .slice(0, maxItems);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'blog':
        return '📝';
      case 'insight':
        return '💡';
      case 'case-study':
        return '📊';
      default:
        return '📄';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'blog':
        return 'bg-blue-100 text-blue-800';
      case 'insight':
        return 'bg-purple-100 text-purple-800';
      case 'case-study':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">{title}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredContent.map((item) => (
            <article
              key={item.id}
              className="bg-white border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 overflow-hidden"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl">{getTypeIcon(item.type)}</span>
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(item.type)}`}>
                    {item.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                  {item.title}
                </h3>
                
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {item.description}
                </p>

                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <span>{new Date(item.publishedAt).toLocaleDateString()}</span>
                  {item.readTime && <span>{item.readTime}</span>}
                </div>

                <button className="text-blue-600 font-semibold hover:text-blue-700 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
              View All Articles
            </button>
            <button className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Subscribe to Updates
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSpotlight;