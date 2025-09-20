import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { BLOG_POSTS } from '@/data/blog-posts';
import { fetchWithRetry, logInfo, logErrorToProduction } from '@/utils/retry';

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
          
          {/* Search and Filter */}
          <div className='mb-8'>
            <input
              type="text"
              placeholder="Search posts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full max-w-md px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400"
            />
          </div>

          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPosts.map((post) => (
              <div key={post.id} className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors">
                <h2 className="text-xl font-semibold mb-3">{post.title}</h2>
                <p className="text-gray-300 mb-4">{post.excerpt}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-2 py-1 bg-blue-600 text-xs rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-sm text-gray-400">
                  {post.publishedAt} • {post.readTime} min read
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-400">No posts found matching your criteria.</p>
            </div>
          )}
        </div>
      </main>
    </>
  );
}