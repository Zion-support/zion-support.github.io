import React, { useState, useEffect } from 'react';

// Mock data for blog posts
const blogPosts = [
  {
    id: 1,
    title: 'The Future of AI: 2025 Predictions and Beyond',
    excerpt: 'Exploring the revolutionary AI technologies that will reshape industries in 2025 and beyond.',
    date: '2025-01-15',
    readTime: '5 min read',
    category: 'AI',
    href: '/blog/ai-2025-predictions',
    image: '🤖'
  },
  {
    id: 2,
    title: 'Quantum Computing Breakthrough: What It Means for Business',
    excerpt: 'Understanding the latest quantum computing advances and their practical business applications.',
    date: '2025-01-12',
    readTime: '7 min read',
    category: 'Quantum Computing',
    href: '/blog/quantum-computing-breakthrough',
    image: '⚛️'
  },
  {
    id: 3,
    title: 'Automation Revolution: Transforming Enterprise Operations',
    excerpt: 'How intelligent automation is revolutionizing business processes and driving efficiency.',
    date: '2025-01-10',
    readTime: '6 min read',
    category: 'Automation',
    href: '/blog/automation-revolution',
    image: '⚙️'
  },
  {
    id: 4,
    title: 'AI Ethics: Building Responsible Technology',
    excerpt: 'The importance of ethical AI development and implementation in modern enterprises.',
    date: '2025-01-08',
    readTime: '8 min read',
    category: 'Ethics',
    href: '/blog/ai-ethics',
    image: '⚖️'
  },
  {
    id: 5,
    title: 'Digital Transformation: A Complete Guide',
    excerpt: 'A comprehensive guide to successful digital transformation strategies and implementation.',
    date: '2025-01-05',
    readTime: '10 min read',
    category: 'Digital Transformation',
    href: '/blog/digital-transformation-guide',
    image: '🚀'
  },
  {
    id: 6,
    title: 'Machine Learning in Production: Best Practices',
    excerpt: 'Essential practices for deploying and maintaining machine learning models in production environments.',
    date: '2025-01-03',
    readTime: '9 min read',
    category: 'Machine Learning',
    href: '/blog/ml-production-best-practices',
    image: '🧠'
  }
];

const logInfo = (message: string) => console.log(message);
const logErrorToProduction = (message: string, error: any) => console.error(message, error);

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    let filtered = blogPosts;
    
    if (searchTerm) {
      filtered = filtered.filter(post => 
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(filtered);
  }, [searchTerm, selectedCategory]);

  const categories = ['All', 'AI', 'Quantum Computing', 'Automation', 'Ethics', 'Digital Transformation', 'Machine Learning']

  return (
    <main className='min-h-screen bg-gray-900 text-white'>
      <div className='container mx-auto px-4 py-8'>
        <h1 className='text-4xl font-bold mb-8'>Blog</h1>
        <div className='mb-8'>
          <input
            type='text'
            placeholder='Search blog posts...'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='w-full max-w-md px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400'
          />
        </div>
        <div className='mb-8'>
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className='px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white'
          >
            {categories.map(category => (
              <option key={category} value={category}>{category}</option>
            ))}
          </select>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
          {filteredPosts.map(post => (
            <div key={post.id} className='bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors'>
              <div className='text-4xl mb-4'>{post.image}</div>
              <h2 className='text-xl font-bold mb-2'>{post.title}</h2>
              <p className='text-gray-300 mb-4'>{post.excerpt}</p>
              <div className='flex justify-between items-center text-sm text-gray-400'>
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <div className='mt-4'>
                <span className='inline-block bg-blue-600 text-white px-3 py-1 rounded-full text-sm'>
                  {post.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}