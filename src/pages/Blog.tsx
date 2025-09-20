import React, { useState, useEffect } from 'react';
<<<<<<< HEAD
import Header from '@/components/Header';

// Mock data for blog posts
const BLOG_POSTS = [
  {
    id: 1,
    title: 'Welcome to Our Blog',
    excerpt: 'This is our first blog post.',
    content: 'Full content here...',
    author: 'Admin',
    date: '2024-01-01',
    tags: ['general'],
    image: '/placeholder.jpg'
  }
];

// Mock functions
const fetchWithRetry = async (fn: () => Promise<any>, retries: number, delay: number) => {
  for (let i = 0; i < retries; i++) {
    try {
      return await fn();
    } catch (error) {
      if (i === retries - 1) throw error;
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
};

const logInfo = (message: string) => console.log(message);
const logErrorToProduction = (message: string, error: any) => console.error(message, error);
=======
>>>>>>> 9c334060803f415d6d017f9e5353d20ebc0b1d26

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (loading) {
    return (
      <div className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
        <p>Loading blog posts...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
        <p className='text-red-500'>{error}</p>
      </div>
    );
  }

  return (
<<<<<<< HEAD
    <>
      <Header />
      <main className='min-h-screen bg-gray-900 text-white'>
        <div className='container mx-auto px-4 py-8'>
          <h1 className='text-4xl font-bold mb-8'>Blog</h1>
          <div className='mb-8'>
            <input
              type='text'
              placeholder='Search posts...'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='w-full max-w-md px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white'
            />
          </div>
          <div className='grid gap-6'>
            {filteredPosts.map((post) => (
              <article key={post.id} className='bg-gray-800 p-6 rounded-lg'>
                <h2 className='text-2xl font-bold mb-2'>{post.title}</h2>
                <p className='text-gray-300 mb-4'>{post.excerpt}</p>
                <div className='flex items-center text-sm text-gray-400'>
                  <span>By {post.author}</span>
                  <span className='mx-2'>•</span>
                  <span>{post.date}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
    </>
=======
    <div className='min-h-screen bg-gray-900 text-white'>
      <h1>Blog</h1>
      <p>Blog posts will be available here.</p>
    </div>
>>>>>>> 9c334060803f415d6d017f9e5353d20ebc0b1d26
  );
}