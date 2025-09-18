import { NEW_BLOG_POSTS_2029 } from '@/data/newBlogPosts2029';

const LatestContentPromotion2029: React.FC = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-900 via-purple-900 to-pink-900 rounded-2xl p-8 mb-8 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm"></div>
      <div className="relative z-10">
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full text-sm font-bold mb-4 animate-pulse">
            🚀 NEW CONTENT • 2029 PREVIEW
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Fresh: Evidence, Trusted RAG, Agent SLOs</h2>
          <p className="text-lg md:text-xl opacity-90 max-w-4xl mx-auto">
            Explore our latest blueprints and guides designed for real-world deployment at scale.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {NEW_BLOG_POSTS_2029.map((post) => (
            <div key={post.id} className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:scale-105 transition-all duration-300">
              <div className="text-sm text-cyan-200 mb-2">{post.category} • {post.readTime}</div>
              <h3 className="text-xl font-bold mb-2">{post.title}</h3>
              <p className="text-white/80 mb-4 text-sm">{post.excerpt}</p>
              <div className="flex items-center justify-between text-xs text-white/60">
                <span>By {post.author}</span>
                <span>{post.publishDate}</span>
              </div>
              <div className="mt-4">
                <a href={`/blog/${post.slug}`} className="block w-full bg-white text-indigo-700 py-2 rounded-lg hover:bg-white/90 transition-colors font-semibold text-center text-sm">
                  Read Article →
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <a href="/blog" className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
            Browse All Articles
          </a>
        </div>
      </div>
    </div>
  );
};

export default LatestContentPromotion2029;

