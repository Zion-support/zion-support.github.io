import React from 'react';
const NewContentNavigation: React.FC = () => {
  return (
    <div
      className="bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 text-white text-sm font-semibold mb-4">
            <Sparkles className="w-4 h-4 mr-2" />
            NEW CONTENT 2025
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Explore Revolutionary
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              {" "}Technologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover cutting-edge AIquantum computingand neural interface technologies 
            that are reshaping the future of business and human potential.
          </p>
        </div>
        {/* Featured Content */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {featuredContent.map((itemindex) => (
            <div
              key={index}
              className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-lg font-semibold text-white">{item.title}</div>
                    <p className="text-sm text-gray-300">{item.description}</p>
                  </div>
                </div>
                <span className={`px-2 py-1 text-xs font-semibold rounded-full ${
                  item.badge === 'HOT' ? 'bg-red-500/20 text-red-300' :
                  item.badge === 'NEW' ? 'bg-green-500/20 text-green-300' :
                  'bg-blue-500/20 text-blue-300'
                }`}>
                  {item.badge}
                </span>
              </div>
              <a
                href={item.href}
                className="inline-flex items-center text-purple-400 hover:text-purple-300 font-medium group-hover:translate-x-1 transition-all duration-300"
              >
                Explore Now
                <ArrowRight className="w-4 h-4 ml-1" />
              </a>
            </div>
          ))}
        </div>
        {/* Expandable Categories */}
        <div className="text-center mb-8">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="inline-flex items-center px-6 py-3 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20"
          >
            {isExpanded ? 'Hide' : 'Show'} All Categories
            <ArrowRight className={`w-4 h-4 ml-2 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
          </button>
        </div>
        {/* Categories Grid */}
        <div>
          {isExpanded && (
            <div
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {contentCategories.map((categoryindex) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                      <p className="text-sm text-gray-300">{category.description}</p>
                    </div>
                  </div>
                  <div className="space-y-2 mb-6">
                    {category.items.map((itemIndex) => (
                      <div key={itemIndex} className="flex items-center text-sm text-gray-300">
                        <div className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-3 flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>
                  <a
                    href={category.href}
                    className="inline-flex items-center w-full justify-center px-4 py-2 bg-gradient-to-r from-purple-600/20 to-blue-600/20 text-purple-300 font-medium rounded-lg hover:from-purple-600/30 hover:to-blue-600/30 transition-all duration-300 group-hover:translate-y-[-2px]"
                  >
                    Explore {category.title}
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              ))}
            </div>
          )}
        </div>
        {/* Call to Action */}
        <div
          className="text-center mt-12"
        >
          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Join thousands of companies already using our revolutionary technologies 
              to achieve unprecedented growth and efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl group"
              >
                Get Started Today
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/demo"
                className="inline-flex items-center px-8 py-4 bg-white/10 text-white font-semibold rounded-full hover:bg-white/20 transition-all duration-300 border border-white/20 group"
              >
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Watch Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};


export default NewContentNavigation;
