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
      title: "AI-Powered Enterprise Solutions",
      description: "Discover how our AI solutions are transforming enterprise operations and driving unprecedented growth.",
      category: "AI Solutions",
      readTime: "5 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Quantum Computing Breakthroughs",
      description: "Explore the latest advances in quantum computing and their applications in modern business.",
      category: "Technology",
      readTime: "7 min read",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Automation Best Practices",
      description: "Learn the essential strategies for implementing successful automation in your organization.",
      category: "Automation",
      readTime: "4 min read",
      image: "/api/placeholder/400/250"
    }
  ];

  return (
    <div className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Featured Content
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our latest insights, case studies, and technical deep-dives
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {contentItems.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="aspect-w-16 aspect-h-9">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-blue-600">
                    {item.category}
                  </span>
                  <span className="text-sm text-gray-500">
                    {item.readTime}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {item.description}
                </p>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  Read More →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/blog"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
          >
            View All Content
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;