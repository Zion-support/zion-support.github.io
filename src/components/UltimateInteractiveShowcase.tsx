
  return (
    <div className="bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 rounded-3xl p-12 text-white mb-16">
      <div className="text-center mb-12">
        <h2 className="text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
          🌟 Ultimate Interactive Technology Showcase
        </h2>
        <p className="text-xl text-gray-300 max-w-4xl mx-auto">
          Explore our revolutionary technology solutions with immersive interactive experiences
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700/50">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-8 py-4 rounded-xl font-semibold transition-all duration-300 ${
                activeCategory === key
                  ? 'bg-gradient-to-r from-cyan-600 to-purple-600 text-white shadow-lg'
                  : 'text-gray-300 hover:text-white hover:bg-gray-700/50'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default UltimateInteractiveShowcase;
