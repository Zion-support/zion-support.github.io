import React from 'react';

export default function BlogPage() {
  const blogPosts = [
    {
      title: 'AI 2026: The Future of Autonomous Business Intelligence',
      excerpt:
        'Discover how next-generation AI will revolutionize business intelligence and decision-making processes.',
      date: '2025-01-15',
      category: 'AI Innovation',
    },
    {
      title: 'Quantum-Enhanced Analytics: 1000x Speed Improvement',
      excerpt:
        'Explore the breakthrough in quantum computing that delivers unprecedented analytics performance.',
      date: '2025-01-10',
      category: 'Quantum Computing',
    },
    {
      title: 'Enterprise AI Transformation: A Complete Guide',
      excerpt:
        'Learn the step-by-step process for successfully implementing AI in your enterprise.',
      date: '2025-01-05',
      category: 'Digital Transformation',
    },
    {
      title: 'Micro SaaS: The Future of Business Applications',
      excerpt:
        'Understand how micro SaaS solutions are reshaping the software industry.',
      date: '2025-01-01',
      category: 'SaaS',
    },
  ];

  return (
    <div className='min-h-screen bg-gray-50 py-16'>
      <div className='container mx-auto px-4'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl font-bold text-gray-900 mb-6'>
            Latest AI and Technology Insights
          </h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Stay ahead with our expert analysis of the latest trends in AI,
            technology, and business transformation.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8'>
          {blogPosts.map((post, index) => (
            <article
              key={index}
              className='bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300'
            >
              <div className='p-6'>
                <div className='flex items-center justify-between mb-4'>
                  <span className='bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold'>
                    {post.category}
                  </span>
                  <time className='text-gray-500 text-sm'>{post.date}</time>
                </div>
                <h2 className='text-xl font-semibold text-gray-900 mb-3'>
                  {post.title}
                </h2>
                <p className='text-gray-600 mb-4'>{post.excerpt}</p>
                <button className='text-blue-600 hover:text-blue-800 font-semibold'>
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        <div className='text-center mt-16'>
          <button className='bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300'>
            View All Articles
          </button>
        </div>
      </div>
    </div>
  );
}
