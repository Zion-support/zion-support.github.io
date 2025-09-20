import React from 'react';
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
    return (<section className="py-16">
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
            </article>))}
        </div>
      </div>
    </section>);
}
