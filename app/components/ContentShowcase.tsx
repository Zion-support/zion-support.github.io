import React from 'react';

const ContentShowcase: React.FC = () => {
  return (
    <div className="py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-purple-dark relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-zion-cyan rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-zion-purple rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
        <div className="absolute top-40 left-1/2 w-60 h-60 bg-zion-blue-light rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{ animationDelay: "4s" }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-6 py-3 rounded-full bg-zion-cyan/20 text-zion-cyan text-sm font-medium mb-8 animate-fade-in border border-zion-cyan/30 shadow-lg">
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            Latest Content & Innovations
          </div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-fade-in-up">
            Discover Our
            <span className="block bg-gradient-to-r from-zion-cyan via-zion-blue-light to-zion-purple bg-clip-text text-transparent">
              Latest Innovations
            </span>
          </h2>
          
          <p className="text-xl text-zion-blue-light/80 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Explore cutting-edge AI solutions, success stories, and industry insights that are shaping the future of technology.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Placeholder Content Items */}
          {[1, 2, 3].map((item) => (
            <div key={item} className="group bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:border-zion-cyan/50 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-cyan/20 animate-fade-in-up" style={{ animationDelay: `${item * 0.1}s` }}>
              <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-blue-light rounded-xl mb-6 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm0 4a1 1 0 011-1h12a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1V8zm2 2a1 1 0 000 2h6a1 1 0 100-2H5z" clipRule="evenodd" />
                </svg>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-zion-cyan transition-colors duration-300">
                Innovation #{item}
              </h3>
              
              <p className="text-zion-blue-light/80 mb-6 leading-relaxed">
                Discover how our cutting-edge solutions are transforming industries and driving unprecedented growth.
              </p>
              
              <div className="flex items-center text-zion-cyan font-medium group-hover:text-white transition-colors duration-300">
                <span>Learn More</span>
                <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-blue-light text-white font-semibold rounded-full hover:from-zion-blue-light hover:to-zion-purple transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-zion-cyan/30">
            <span>Explore All Content</span>
            <svg className="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContentShowcase;