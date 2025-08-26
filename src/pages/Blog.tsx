
import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of AI in Business",
      excerpt: "Discover how artificial intelligence is transforming business operations and creating new opportunities for growth and innovation.",
      date: "2024-01-15",
      category: "AI & Technology"
    },
    {
      title: "Cybersecurity Best Practices for 2024",
      excerpt: "Learn about the latest cybersecurity threats and best practices to protect your business in an increasingly digital world.",
      date: "2024-01-10",
      category: "Cybersecurity"
    },
    {
      title: "Cloud Migration Strategies",
      excerpt: "Explore effective strategies for migrating your business to the cloud and maximizing the benefits of cloud computing.",
      date: "2024-01-05",
      category: "Cloud Computing"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Our
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                {" "}Blog
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Insights, updates, and thought leadership on technology trends and business innovation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 text-sm rounded-full">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">{post.date}</span>
                  <button className="text-blue-400 hover:text-blue-300 transition-colors duration-300">
                    Read More →
                  </button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-gray-400 mb-4">More blog posts coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
