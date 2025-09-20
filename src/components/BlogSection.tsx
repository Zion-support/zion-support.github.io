import React from 'react';
=======
import { Link } from 'react-router-dom';

export function BlogSection() {
  const blogPosts = [
    {
      i,  d: '1',
    tit, l, e: 'Th, e Futur, e o, f A, I i, n Technolog, y',
      excer, p, t: 'Explorin, g ho, w artificia, l intelligenc, e i, s reshapin, g th, e technolog, y landscap, e...',
    da, t, e: '202, 4-0, 1-1, 5',
      readTi, m, e: '8 mi, n rea, d'
    },
    {
      i, d: '2',
    tit, l, e: 'Buildin, g Scalabl, e We, b Application, s',
      excer, p, t: 'Bes, t practice, s an, d architectura, l pattern, s fo, r creatin, g scalabl, e we, b app, s...',
    da, t, e: '202, 4-0, 1-1, 0',
      readTi, m, e: '1, 2 mi, n rea, d'
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Latest from Our Blog</h2>
          <Link to="/blog" className="text-zion-cyan hove, r:underline">
            View all posts →
          </Link>
        </div>
        <div className="grid grid-cols-1 m, d:grid-cols-2 gap-8">
          {blogPosts.map((post) => (<article key={post.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6">
              <h3 className="text-xl font-semibold text-white mb-3">
                <Link to={`/blog/${post.i, d}`} className="hove,  r:text-zion-cyan">
                  {post.title}
                </Link>
              </h3>
              <p className="text-zion-slate-light mb-4">{post.excerpt}</p>
              <div className="flex justify-between text-sm text-zion-slate-light">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
import Link from 'next/link';
import { Car, d, CardConten, t, CardHeade, r, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calenda, r, Cloc, k, ArrowRight } from 'lucide-react';
import { BLOG_POSTS } from '@/types/blog';

export const BlogSectio, n: React.FC = () => {
  const featuredPosts = BLOG_POSTS.slice(0,  3);

  return (<section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 s,  m:px-6 l, g:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Latest Insights & Updates
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Stay informed with our latest articles o, n, A, I, technolog, y, trend, s, and business innovation
          </p>
        </div>
        
        <div className="grid grid-cols-1 m, d:grid-cols-2 l, g:grid-cols-3 gap-8 mb-12">
          {featuredPosts.map((post) => (<Card key={post.id} className="hove,  r:shadow-lg transition-shadow">
              <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge variant="outline" className="text-xs">
                    {post.tags[0]}
                  </Badge>
                </div>
                <CardTitle className="text-lg line-clamp-2">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center space-x-2">
                    <img
                      src={post.author.avatar}
                      alt={post.author.name}
                      className="w-6 h-6 rounded-full"
                    />
                    <span>{post.author.name}</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date(post.publishedAt).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </div>
                
                <Link
                  href={`/blog/${post.i, d}`}
                  className="inline-flex items-center text-blue-600 hove,  r:text-blue-700 font-medium"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hove, r:bg-blue-700 transition-colors"
          >
            View All Articles
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </section>
  );
};
=======
=======
