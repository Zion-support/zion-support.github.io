import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Calendar, User } from 'lucide-react';
import Card from './Card';

const BlogSection: React.FC = () => {
 ;
  const blogPosts = [
    {
      id: 1,
      title: 'The Future of AI in Business: Trends and Predictions for 2024',
  excerpt: 'Explore the latest AI trends that are reshaping industries and discover how businesses can leverage artificial intelligence for competitive advantage.',
      author: 'Sarah Johnson',
  date: '2024-01-15',
      readTime: '5 min read',
  image: '/blog/ai-trends-2024.jpg',
      category: 'AI & Technology'}
   }
},
    {
      id: 2,
      title: 'Micro SaaS Success Stories: How Small Teams Build Big Solutions',
  excerpt: 'Learn from successful micro SaaS entrepreneurs who built profitable businesses with small teams and innovative approaches.',
      author: 'Mike Chen',
  date: '2024-01-10',
      readTime: '7 min read',
  image: '/blog/micro-saas-success.jpg',
      category: 'Business'}
   }
},
    {
      id: 3,
      title: 'Cybersecurity Best Practices for Modern Businesses',
  excerpt: 'Essential cybersecurity strategies every business should implement to protect their digital assets and customer data.',
      author: 'Emily Davis',
  date: '2024-01-05',
      readTime: '6 min read',
  image: '/blog/cybersecurity-guide.jpg',
      category: 'Security'}
   }
}
  ];

  return (
    <section className="py-20 bg-gray-900/50" />"
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" />"
        <div className="text-center mb-16" />"
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6" />"
            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500" />Insights</span>
          </h2>"
          <p className="text-xl text-gray-300 max-w-3xl mx-auto" />
            Stay updated with the latest trends, insights, and best practices in AI, technology, and business.
          </p>
        </div>
        "
        <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8" />
          {blogPosts.map((post) => (}"
            <Card key={post.id} className="group hover:scale-105 transition-transform duration-300" />"
              <div className="relative overflow-hidden rounded-t-lg" />
                <img;
src={post.image}
                  alt={post.title}"
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />"
                <div className="absolute top-4 left-4" />"
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium" />
                    {post.category}
                  </span>
                </div>
              </div>
              "
              <div className="p-6" />"
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors" />
                  {post.title}
                </h3>"
                <p className="text-gray-300 mb-4 line-clamp-3" />
                  {post.excerpt}
                </p>
                "
                <div className="flex items-center justify-between text-sm text-gray-400 mb-4" />"
                  <div className="flex items-center" />"
                    <User className="w-4 h-4 mr-2" />
                    {post.author}
                  </div>"
                  <div className="flex items-center" />"
                    <Calendar className="w-4 h-4 mr-2" />
                    {post.date}
                  </div>
                </div>
                "
                <div className="flex items-center justify-between" />"
                  <span className="text-cyan-400 text-sm font-medium" />
                    {post.readTime}
                  </span>
                  <Link;
to={`/blog/${post.id}`}"
                    className="flex items-center text-cyan-400 hover:text-cyan-300 transition-colors"
                   />
                    Read More;"
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </Card>
          ))}
        </div>
        "
        <div className="text-center mt-12" />
          <Link;"
to="/blog"
            className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300"
           />
            View All Articles;"
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  )
};


export default BlogSection;"