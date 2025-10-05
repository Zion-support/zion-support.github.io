import React from 'react';
// import Footer from '../components/Footer';

const Blog: React.FC = () => {
  const posts = [
    {
      title: 'The Future of AI in Business',
      excerpt: 'Exploring how artificial intelligence is transforming modern business operations.',
      date: '2024-01-15',
      readTime: '5 min read'
    },
    {
      title: 'Cloud Computing Best Practices',
      excerpt: 'Essential strategies for successful cloud migration and management.',
      date: '2024-01-10',
      readTime: '7 min read'
    },
    {
      title: 'Cybersecurity Trends 2024',
      excerpt: 'Latest developments in cybersecurity and how to protect your organization.',
      date: '2024-01-05',
      readTime: '6 min read'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      
      <main className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Blog
            </h1>
            <p className="text-xl text-gray-300">
              Insights and updates from the world of technology and innovation.
            </p>
          </div>
          
          <div className="space-y-8">
            {posts.map((post, index) => (
              <article key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition duration-300">
                <h2 className="text-2xl font-semibold text-white mb-3">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-400">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>

      {/* <Footer /> */}
    </div>
  );
};

export default Blog;