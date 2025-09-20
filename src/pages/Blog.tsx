import React, { useState, useEffect } from 'react';
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

export default function Blog() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [filteredPosts, setFilteredPosts] = useState(BLOG_POSTS);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        setLoading(true);
        // Simulate API call with retry
        const data = await fetchWithRetry(() => Promise.resolve(BLOG_POSTS), 3, 1000);
        setFilteredPosts(data);
        logInfo('Blog posts loaded successfully.');
      } catch (err) {
        logErrorToProduction('Failed to load blog posts', err);
        setError('Failed to load blog posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  useEffect(() => {
    let tempPosts = BLOG_POSTS;

    if (searchTerm) {
      tempPosts = tempPosts.filter(post =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategories.length > 0) {
      tempPosts = tempPosts.filter(post =>
        post.tags.some(tag => selectedCategories.includes(tag))
      );
    }

    setFilteredPosts(tempPosts);
  }, [searchTerm, selectedCategories]);

  const handleCategoryChange = (category: string, checked: boolean) => {
    setSelectedCategories(prev =>
      checked ? [...prev, category] : prev.filter(c => c !== category)
    );
  };

  if (loading) {
    return (
      <>
        <Header />
        <main className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
          <p>Loading blog posts...</p>
        </main>
      </>
    );
  }

  if (error) {
    return (
      <>
        <Header />
        <main className='min-h-screen bg-gray-900 text-white flex items-center justify-center'>
          <p className='text-red-500'>{error}</p>
        </main>
      </>
    );
  }

  return (
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
  );
}