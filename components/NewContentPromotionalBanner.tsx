import * as React from 'react';

const NewContentPromotionalBanner: React.FC = () => {
  return (
    <section className="py-12 bg-gradient-to-r from-orange-900/30 via-red-900/30 to-pink-900/30 backdrop-blur-sm border-b border-orange-500/20">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6 animate-pulse">
            <span className="text-orange-400 font-bold text-lg tracking-wider uppercase">
              🔥 NEW CONTENT JUST PUBLISHED! 🔥
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
            Don't Miss Out on Our Latest AI Innovation Content
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
            Fresh insights, breakthrough technologies, and proven strategies from our latest research and enterprise implementations. 
            Stay ahead of the curve with cutting-edge AI knowledge.
          </p>
          
          <div className="grid md:grid-cols-4 gap-4 mb-8">
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/20 backdrop-blur-sm rounded-xl p-4 border border-orange-500/30">
              <div className="text-2xl font-extrabold text-orange-400 mb-1">15+</div>
              <div className="text-xs text-orange-300">New Articles</div>
            </div>
            <div className="bg-gradient-to-r from-red-500/20 to-red-600/20 backdrop-blur-sm rounded-xl p-4 border border-red-500/30">
              <div className="text-2xl font-extrabold text-red-400 mb-1">8</div>
              <div className="text-xs text-red-300">Case Studies</div>
            </div>
            <div className="bg-gradient-to-r from-pink-500/20 to-pink-600/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/30">
              <div className="text-2xl font-extrabold text-pink-400 mb-1">5</div>
              <div className="text-xs text-pink-300">Interactive Tools</div>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/30">
              <div className="text-2xl font-extrabold text-purple-400 mb-1">3</div>
              <div className="text-xs text-purple-300">Webinars</div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/blog"
              className="bg-gradient-to-r from-orange-500 to-red-600 hover:from-orange-400 hover:to-red-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-orange-500/50 transform hover:-translate-y-1"
            >
              🚀 Explore New Content Now
            </a>
            <a 
              href="/newsletter"
              className="bg-gradient-to-r from-red-500 to-pink-600 hover:from-red-400 hover:to-pink-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-red-500/50 transform hover:-translate-y-1"
            >
              📧 Get Notified First
            </a>
            <a 
              href="/demo"
              className="border-2 border-orange-500 text-orange-400 hover:bg-orange-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              🎯 Try Interactive Demo
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewContentPromotionalBanner;