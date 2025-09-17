import React from "react";
import { Link } from "react-router-dom";
import { NEW_BLOG_POSTS_2029 } from "@/data/newBlogPosts2029";
const LatestInsightsPromo: React.FC = () => {
  const posts = NEW_BLOG_POSTS_2029.slice(0, 3);
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 via-fuchsia-400 to-purple-400 bg-clip-text text-transparent">
            Latest Insights
          </h2>
          <Link
            to="/blog"
            className="text-cyan-400 hover:text-fuchsia-300 transition-colors"
          >
            View all →
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.slug}`}
              className="group bg-white/5 border border-white/10 rounded-lg overflow-hidden hover:border-fuchsia-400/40 transition-colors"
            >
              <div className="h-44 bg-black/30 overflow-hidden">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between text-xs text-white/60 mb-2">
                  <span className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-cyan-300">
                    {post.category}
                  </span>
                  <span>
                    {post.publishDate} • {post.readTime}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-white/70 text-sm line-clamp-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );

};

export default LatestInsightsPromo;
