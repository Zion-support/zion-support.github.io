import React from 'react';

const Blog: React.FC = () => {
  const blogPosts = [
    {
      title: "The Future of Artificial Intelligence in 2025",
      excerpt: "Exploring the latest breakthroughs in AI technology and how they're reshaping industries worldwide.",
      date: "January 15, 2025",
      category: "AI Innovation",
      readTime: "5 min read"
    },
    {
      title: "Quantum Computing: The Next Frontier",
      excerpt: "Understanding quantum computing principles and their potential applications in solving complex problems.",
      date: "January 10, 2025",
      category: "Quantum Computing",
      readTime: "7 min read"
    },
    {
      title: "Neural Interfaces: Bridging Mind and Machine",
      excerpt: "How brain-computer interfaces are revolutionizing human-computer interaction and accessibility.",
      date: "January 5, 2025",
      category: "Neural Technology",
      readTime: "6 min read"
    },
    {
      title: "The Evolution of Autonomous Systems",
      excerpt: "Examining the rapid advancement of autonomous technologies and their impact on various sectors.",
      date: "December 28, 2024",
      category: "Automation",
      readTime: "4 min read"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 py-20">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Our Blog
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Stay updated with the latest insights, trends, and breakthroughs in technology and innovation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className="bg-gray-800/50 hover:bg-gray-800/70 p-8 rounded-lg border border-gray-700 hover:border-gray-600 transition-all duration-300 transform hover:scale-105"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm font-semibold px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <span className="text-gray-400 text-sm">{post.readTime}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4 text-white hover:text-blue-300 transition-colors cursor-pointer">
                {post.title}
              </h2>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                {post.excerpt}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">{post.date}</span>
                <button className="text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gray-800/50 p-8 rounded-lg border border-gray-700 max-w-2xl mx-auto">
            <h2 className="text-3xl font-bold mb-4 text-blue-400">Stay Connected</h2>
            <p className="text-gray-300 text-lg mb-6">
              Subscribe to our newsletter for the latest updates on technology trends and innovations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-gray-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;