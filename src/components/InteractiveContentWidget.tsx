import React from 'react';

const InteractiveContentWidget: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveContentWidget</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
=======
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            🎯 Interactive Content Discovery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our revolutionary content through this interactive widget. Click on categories to discover cutting-edge technologies and solutions.
          </p>
        </div>

        {/* Category Selector */}
        <div
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {Object.entries(contentCategories).map(([keycategory]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === key
                  ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white transform scale-105'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              <span className="mr-2">{category.icon}</span>
              {category.title}
            </button>
          ))}
        </div>

        {/* Content Grid */}
          <div
            key={selectedCategory}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6"
          >
            {contentCategories[selectedCategory].items.map((itemindex) => (
              <div
                key={item.title}
                onHoverStart={() => setHoveredItem(item.title)}
                onHoverEnd={() => setHoveredItem(null)}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 cursor-pointer ${
                  item.featured 
                    ? 'border-gradient-to-r from-cyan-400 to-purple-400 border-2' 
                    : 'border-white/20 hover:border-white/40'
                } ${hoveredItem === item.title ? 'transform scale-105 shadow-2xl' : ''}`}
              >
                {item.featured && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-sm font-bold">
                    🔥 FEATURED
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-4">
                  <div className="text-3xl mb-2">{contentCategories[selectedCategory].icon}</div>
                  {item.featured && (
                    <div className="text-yellow-400 text-2xl">⭐</div>
                  )}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-300 mb-6">{item.description}</p>
                
                <a 
                  href={item.link}
                  className={`inline-flex items-center font-semibold transition-colors duration-300 ${
                    item.featured 
                      ? 'text-cyan-400 hover:text-cyan-300' 
                      : 'text-purple-400 hover:text-purple-300'
                  }`}
                >
                  Explore Now →
                </a>
                
                {hoveredItem === item.title && (
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-2xl pointer-events-none"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div
          className="text-center mt-16"
        >
          <a 
            href="/content-library" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-bold rounded-full text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            🚀 Access Full Content Library
          </a>
        </div>
      </div>
    </section>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  );
};

export default InteractiveContentWidget;