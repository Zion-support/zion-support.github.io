'use client';

import { Search, Calendar, User, Clock, ArrowRight, Tag } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const blogPosts: BlogPost[] = [
    {
      id: '1',
      title: 'The Future of AI in Enterprise Solutions',
      excerpt: 'Exploring how AI is transforming enterprise solutions and what to expect in the coming years.',
      content: 'AI is revolutionizing enterprise solutions...',
      author: 'Zion Tech Group',
      date: '2024-01-15',
      readTime: '5 min read',
      category: 'AI',
      image: '/images/blog/ai-enterprise.jpg'
    },
    {
      id: '2',
      title: 'Cloud Migration Best Practices',
      excerpt: 'Learn the essential steps for a successful cloud migration strategy.',
      content: 'Cloud migration requires careful planning...',
      author: 'Zion Tech Group',
      date: '2024-01-10',
      readTime: '7 min read',
      category: 'Cloud',
      image: '/images/blog/cloud-migration.jpg'
    }
  ];

  return (
    <>
      <Helmet>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-12">
              Stay updated with the latest insights, trends, and innovations in AI and IT solutions.
            </p>
          </div>
        </section>

        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Latest Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <article key={post.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg overflow-hidden hover:border-cyan-500/50 transition-all duration-300">
                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-sm rounded-full">{post.category}</span>
                      <span className="text-gray-400 text-sm">{post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{post.title}</h3>
                    <p className="text-gray-300 mb-4">{post.excerpt}</p>
                    <div className="flex items-center justify-between">
                      <div className="text-sm text-gray-400">
                        <div>{post.author}</div>
                        <div>{post.date}</div>
                      </div>
                      <button className="text-cyan-400 hover:text-cyan-300 font-medium">
                        Read More →
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {blogPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-400 text-lg">No articles found matching your search criteria.</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

