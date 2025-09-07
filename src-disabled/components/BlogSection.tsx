import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Clock } from 'lucide-react';
interface BlogPost {
  id: number;,
  title: string;,
  excerpt: string;,
  author: string;,
  date: string;,
  readTime: string;,
  category: string;,
  image: string;,
  slug: string;
}
const BlogSection: React.FC = () => {,
  const blogPosts: BlogPost[] = [,
    {
      id: 1,

  ];
  return (

          initial={ opacity: 0, y: 30 }
          whileInView={ opacity: 1, y: 0 }
          transition={ duration: 0.8 }
          viewport={ once: true }
        >

          </p>
        </motion.div>
        {/* Category Filter */}
        <motion.div

          initial={ opacity: 0, y: 20 }
          whileInView={ opacity: 1, y: 0 }
          transition={ duration: 0.6 }
          viewport={ once: true }
        >
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${`
                index === 0
                  ? 'bg-gradient-to-r from-cyan-400 to-blue-500 text-black''
                  : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white''
              }`}`
            >
              {category}
            </button>
          ))}
        </motion.div>
        {/* Blog Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">"
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.id}
              className="bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 border border-gray-700/50 hover:border-cyan-400/50 group"",
              initial={ opacity: 0, y: 30 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.6, delay: index * 0.1 }
              viewport={ once: true }
            >
              <div className="aspect-video bg-gradient-to-br from-cyan-400/20 to-blue-500/20 relative overflow-hidden">"
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-blue-500/10"></div>"
                <div className="absolute top-4 left-4">"
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-3 py-1 rounded-full text-xs font-semibold">"
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">"
                  <div className="w-16 h-16 bg-white/10 rounded-full flex items-center justify-center">"
                    <ArrowRight className="w-8 h-8 text-white" />"
                  </div>
                </div>
              </div>

                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">"
                  {post.title}
                </h3>
                <p className="text-gray-300 mb-4 line-clamp-3">"
                  {post.excerpt}
                </p>
                <Link to={`/blog/${post.slug}`}`
                  className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"" />,
                  Read More
                  <ArrowRight className="ml-2 w-4 h-4" />"
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
        {/* View All Posts CTA */}
        <motion.div

          initial={ opacity: 0, y: 20 }
          whileInView={ opacity: 1, y: 0 }
          transition={ duration: 0.6, delay: 0.2 }
          viewport={ once: true }
        >
          <Link to="/blog""
            className="inline-flex items-center bg-gradient-to-r from-cyan-400 to-blue-500 text-black px-8 py-3 rounded-lg font-semibold hover:from-cyan-500 hover:to-blue-600 transition-all duration-300 group"" />,
            View All Posts
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />"
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default BlogSection;