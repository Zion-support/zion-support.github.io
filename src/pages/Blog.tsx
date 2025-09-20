import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { SEO } from '@/components/SEO';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Search, Calendar, Tag, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/data/blog-posts';
import { fetchWithRetry } from '@/utils/fetchWithRetry';
import { logInfo, logErrorToProduction } from '@/utils/productionLogger';

// Categories for filtering
const categories = [
  'AI',
  'Machine Learning',
  'Cloud Computing',
  'DevOps',
  'Cybersecurity',
  'Data Analytics',
  'IT Consulting',
  'Managed Services',
  'Web Development',
  'Mobile Development',
  'Blockchain',
  'IoT',
  'Quantum Computing',
  'Robotics',
  'Automation',
  'Enterprise Solutions',
  'Startups',
  'Innovation',
  'Future Tech',
  'Business Transformation',
];

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
      <SEO
        title='Zion Tech Blog | Insights on AI, Cloud, and IT Innovations'
        description='Stay updated with the latest trends and insights in AI, Machine Learning, Cloud, DevOps, and IT services from Zion Tech Group.'
        keywords={['AI blog', 'tech blog', 'cloud computing', 'devops', 'cybersecurity', 'IT innovations']}
      />
      <Header />
      <main className='min-h-screen bg-gray-900 text-white'>
        <div className='container mx-auto px-4 py-12'>
          <div className='text-center mb-12'>
            <h1 className='text-5xl font-bold text-white mb-4'>Zion Tech Blog</h1>
            <p className='text-xl text-gray-300'>
              Insights, analysis, and the latest trends in AI, Cloud, and IT Innovations.
            </p>
          </div>

          <div className='flex flex-col lg:flex-row gap-8'>
            {/* Sidebar for filters */}
            <aside className='lg:w-1/4 bg-gray-800 p-6 rounded-lg shadow-lg'>
              <h2 className='text-2xl font-bold mb-6 text-white'>Filter Posts</h2>

              {/* Search */}
              <div className='mb-6'>
                <Label htmlFor='search' className='text-gray-300 mb-2 block'>Search</Label>
                <div className='relative'>
                  <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400' />
                  <Input
                    id='search'
                    type='text'
                    placeholder='Search articles...'
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className='pl-10 bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                  />
                </div>
              </div>

              {/* Categories */}
              <div className='mb-6'>
                <h3 className='text-lg font-semibold mb-3 text-gray-300'>Categories</h3>
                <div className='space-y-2 max-h-60 overflow-y-auto pr-2'>
                  {categories.map(category => (
                    <div key={category} className='flex items-center space-x-2'>
                      <Checkbox
                        id={category}
                        checked={selectedCategories.includes(category)}
                        onCheckedChange={(checked) => handleCategoryChange(category, checked === true)}
                        className='border-gray-500 data-[state=checked]:bg-blue-600 data-[state=checked]:text-white'
                      />
                      <Label htmlFor={category} className='text-gray-300 cursor-pointer'>
                        {category}
                      </Label>
                    </div>
                  ))}
                </div>
                {selectedCategories.length > 0 && (
                  <Button
                    variant='ghost'
                    onClick={() => setSelectedCategories([])}
                    className='mt-4 text-blue-400 hover:text-blue-300'
                  >
                    Clear all filters
                  </Button>
                )}
              </div>
            </aside>

            {/* Blog Post List */}
            <section className='lg:w-3/4'>
              {filteredPosts.length === 0 ? (
                <div className='text-center py-10 bg-gray-800 rounded-lg shadow-lg'>
                  <h2 className='text-3xl font-bold text-white mb-4'>No posts found</h2>
                  <p className='text-gray-400'>Try adjusting your filters or search term.</p>
                  <Button onClick={() => { setSearchTerm(''); setSelectedCategories([]); }} className='mt-6 bg-blue-600 hover:bg-blue-700 text-white'>
                    Reset Filters
                  </Button>
                </div>
              ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                  {filteredPosts.map(post => (
                    <Card key={post.id} className='bg-gray-800 text-white border border-gray-700 flex flex-col'>
                      <Link href={`/blog/${post.slug}`}>
                        {post.image && (
                          <img
                            src={post.image}
                            alt={post.title}
                            className='w-full h-48 object-cover rounded-t-lg'
                          />
                        )}
                        <CardContent className='p-6 flex-grow'>
                          <h3 className='text-2xl font-bold text-white mb-2 hover:text-blue-400 transition-colors'>
                            {post.title}
                          </h3>
                          <p className='text-gray-400 text-sm mb-4 flex items-center'>
                            <Calendar className='h-4 w-4 mr-2' /> {post.date}
                            <span className='mx-2'>|</span>
                            <Clock className='h-4 w-4 mr-2' /> {post.readTime} min read
                          </p>
                          <p className='text-gray-300 mb-4'>{post.excerpt}</p>
                          <div className='flex flex-wrap gap-2 mb-4'>
                            {post.tags.map(tag => (
                              <span key={tag} className='flex items-center bg-blue-900/50 text-blue-300 text-xs px-3 py-1 rounded-full'>
                                <Tag className='h-3 w-3 mr-1' /> {tag}
                              </span>
                            ))}
                          </div>
                          <Button variant='link' className='p-0 h-auto text-blue-400 hover:text-blue-300'>
                            Read More <ArrowRight className='ml-2 h-4 w-4' />
                          </Button>
                        </CardContent>
                      </Link>
                    </Card>
                  ))}
                </div>
              )}
            </section>
          </div>
        </div>
      </main>
    </>
  );
}