import React from 'react';
=======
import React from 'react';';

const BlogPromotionBanner: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900">";
      <div className="container mx-auto px-6">";
        <div className="text-center">";
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-indigo-500/20 to-purple-500/20 border border-indigo-500/30 mb-6">";
            <span className="text-indigo-400 font-bold text-xl tracking-wider uppercase">";
              🚀 Latest AI Insights
            </span>
          </div>
          <h2 className="text-4xl md: text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">"
=======
          <h2 className="text-4xl md: text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">";
            Stay Ahead with AI Innovation
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">";
            Discover cutting-edge AI breakthroughs, industry insights, and practical guides 
            to transform your business with artificial intelligence.
          </p>
          <div className="flex flex-wrap justify-center gap-4">";
            <a title="Internal link"
              href="/blog"
              className="bg-gradient-to-r from-indigo-500 to-purple-600 hover: from-indigo-400 hover:to-purple-500 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50"
            >
              Explore All Articles →
            </a>
            <a title="Internal link"
              href="/contact"
              className="border-2 border-indigo-500 text-indigo-400 hover: bg-indigo-500 hover:text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
            >
              Get AI Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogPromotionBanner;