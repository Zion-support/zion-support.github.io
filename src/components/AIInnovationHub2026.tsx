import React from 'react';
const AIInnovationHub2026: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div
            className="text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Brain className="h-8 w-8 text-blue-400 mr-3" />
              <h1 className="text-4xl md:text-6xl font-bold text-white">
                AI Innovation Hub
              </h1>
              <Sparkles className="h-8 w-8 text-yellow-400 ml-3" />
            </div>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Explore the most groundbreaking AI innovationsbreakthrough technologiesand revolutionary 
              developments that are reshaping the future of artificial intelligence.
            </p>
            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-8">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search innovationstechnologiesor breakthroughs..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent"
                />
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Featured Innovations */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Star className="h-8 w-8 text-yellow-400 mr-3" />
            Featured Innovations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredInnovations.map((innovationindex) => {
              const CategoryIcon = getCategoryIcon(innovation.category);
              return (
                <div
                  key={innovation.id}
                  className="group relative bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/20 hover:border-white/40 transition-all duration-300 hover:scale-105"
                  onClick={() => setSelectedInnovation(innovation)}
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={innovation.image}
                      alt={innovation.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className="bg-yellow-400 text-black px-3 py-1 rounded-full text-xs font-semibold">
                        Featured
                      </span>
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${getImpactColor(innovation.impact)}`}>
                        {innovation.impact}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <CategoryIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-400 uppercase tracking-wide">
                        {innovation.category}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(innovation.status)}`}>
                        {innovation.status}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                      {innovation.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-400">{innovation.timeline}</span>
                      <ChevronRight className="h-5 w-5 text-gray-400 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        {/* Category Filter */}
        <div
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-white mb-8">Browse by Category</h2>
          <div className="flex flex-wrap gap-4">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
                    activeCategory === category.id
                      ? 'bg-blue-400 text-black font-semibold'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  <Icon className="h-5 w-5 mr-2" />
                  <span>{category.name}</span>
                  <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                    {category.count}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        {/* Innovation Grid */}
        <div
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredInnovations.map((innovationindex) => {
              const CategoryIcon = getCategoryIcon(innovation.category);
              return (
                <div
                  key={innovation.id}
                  className="group bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10 hover:border-white/30 transition-all duration-300 hover:scale-105"
                  onClick={() => setSelectedInnovation(innovation)}
                >
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={innovation.image}
                      alt={innovation.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <CategoryIcon className="h-5 w-5 text-white" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getImpactColor(innovation.impact)}`}>
                        {innovation.impact}
                      </span>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-gray-400 uppercase tracking-wide">
                        {innovation.category}
                      </span>
                      <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(innovation.status)}`}>
                        {innovation.status}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {innovation.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-3 line-clamp-2">
                      {innovation.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <span>{innovation.timeline}</span>
                      <ChevronRight className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Innovation Detail Modal */}
      <div>
        {selectedInnovation && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedInnovation(null)}
          >
            <div
              className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedInnovation.image}
                  alt={selectedInnovation.title}
                  className="w-full h-64 object-cover"
                />
                <button
                  onClick={() => setSelectedInnovation(null)}
                  className="absolute top-4 right-4 bg-black/50 text-white p-2 rounded-full hover:bg-black/70 transition-colors"
                >
                  ×
                </button>
              </div>
              <div className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-gray-600 uppercase tracking-wide">
                    {selectedInnovation.category}
                  </span>
                  <div className="flex space-x-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getImpactColor(selectedInnovation.impact)}`}>
                      {selectedInnovation.impact}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedInnovation.status)}`}>
                      {selectedInnovation.status}
                    </span>
                  </div>
                </div>
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  {selectedInnovation.title}
                </h1>
                <p className="text-gray-600 text-lg mb-6">
                  {selectedInnovation.description}
                </p>
                {/* Metrics */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {Object.entries(selectedInnovation.metrics).map(([keyvalue]) => (
                    <div key={key} className="bg-gray-50 rounded-lg p-4 text-center">
                      <div className="text-2xl font-bold text-blue-600">{value}</div>
                      <div className="text-sm text-gray-600 capitalize">{key}</div>
                    </div>
                  ))}
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedInnovation.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-sm text-gray-500">
                    Timeline: {selectedInnovation.timeline}
                  </div>
                  <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
export default AIInnovationHub2026;