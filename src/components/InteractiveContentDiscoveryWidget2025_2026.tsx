import React from 'react';

const InteractiveContentDiscoveryWidget2025_2026: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveContentDiscoveryWidget2025_2026</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
=======
    <div className="w-full max-w-7xl mx-auto p-6">
      {/* Header */}
      <div
        className="mb-8"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Discover Revolutionary Content
        </h2>
        <p className="text-gray-300 text-lg">
          Explore cutting-edge AI researchbreakthrough technologiesand future innovations
        </p>
      </div>

      {/* Search and Filters */}
      <div
        className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 mb-8 border border-white/20"
      >
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search contentagsor authors..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            />
          </div>

          {/* Category Filter */}
          <div className="relative">
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="appearance-none bg-slate-700/50 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            >
              {categories.map(category => (
                <option key={category.id} value={category.id} className="bg-slate-800">
                  {category.name} ({category.count})
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>

          {/* Sort */}
          <div className="relative">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="appearance-none bg-slate-700/50 border border-white/20 rounded-xl px-4 py-3 pr-10 text-white focus:outline-none focus:border-purple-400 focus:ring-2 focus:ring-purple-400/20"
            >
              <option value="trending" className="bg-slate-800">Trending</option>
              <option value="newest" className="bg-slate-800">Newest</option>
              <option value="popular" className="bg-slate-800">Most Popular</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
          </div>

          {/* View Mode */}
          <div className="flex bg-slate-700/50 rounded-xl p-1">
            <button
              onClick={() => setViewMode('grid')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <Grid className="w-5 h-5" />
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`p-2 rounded-lg transition-colors ${
                viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-400 hover:text-white'
              }`}
            >
              <List className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Content Grid */}
      <div
        className={`grid gap-6 ${
          viewMode === 'grid' 
            ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3' 
            : 'grid-cols-1'
        }`}
      >
        <div>
          {sortedContent.map((itemindex) => {
            const TypeIcon = getTypeIcon(item.type);
            const CategoryIcon = getCategoryIcon(item.category);
            
            return (
              <div
                key={item.id}
                className={`bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-white/20 hover:border-purple-400/50 transition-all duration-300 group cursor-pointer ${
                  viewMode === 'list' ? 'flex' : ''
                }`}
                onClick={() => setSelectedContent(item)}
              >
                {viewMode === 'grid' ? (
                  <>
                    {/* Image */}
                    <div className="relative h-48 rounded-t-2xl overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      
                      {/* Badges */}
                      <div className="absolute top-4 left-4 flex gap-2">
                        {item.featured && (
                          <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <Star className="w-3 h-3" />
                            Featured
                          </span>
                        )}
                        {item.trending && (
                          <span className="bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                            <TrendingUp className="w-3 h-3" />
                            Trending
                          </span>
                        )}
                      </div>

                      {/* Type Icon */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                          <TypeIcon className="w-5 h-5 text-white" />
                        </div>
                      </div>

                      {/* Category */}
                      <div className="absolute bottom-4 left-4">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 flex items-center gap-2">
                          <CategoryIcon className="w-4 h-4 text-white" />
                          <span className="text-white text-sm font-medium">
                            {categories.find(cat => cat.id === item.category)?.name}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Meta */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views.toLocaleString()}
                          </span>
                        </div>
                        <span>{item.author}</span>
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1 text-gray-400">
                            <Heart className="w-4 h-4" />
                            {item.likes}
                          </span>
                          <span className="flex items-center gap-1 text-gray-400">
                            <MessageCircle className="w-4 h-4" />
                            {item.comments}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </>
                ) : (
                  /* List View */
                  <>
                    <div className="w-48 h-32 rounded-l-2xl overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          {item.title}
                        </h3>
                        <div className="flex gap-2">
                          {item.featured && (
                            <span className="bg-yellow-500 text-black px-2 py-1 rounded-full text-xs font-semibold">
                              Featured
                            </span>
                          )}
                          <div className="bg-black/50 backdrop-blur-sm rounded-full p-2">
                            <TypeIcon className="w-4 h-4 text-white" />
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-300 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-6 text-sm text-gray-400">
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {item.readTime}
                          </span>
                          <span className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views.toLocaleString()}
                          </span>
                          <span className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {item.likes}
                          </span>
                          <span className="flex items-center gap-1">
                            <MessageCircle className="w-4 h-4" />
                            {item.comments}
                          </span>
                        </div>
                        <ArrowRight className="w-5 h-5 text-purple-400 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Content Detail Modal */}
      <div>
        {selectedContent && (
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedContent(null)}
          >
            <div
              className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img
                  src={selectedContent.image}
                  alt={selectedContent.title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <button
                  onClick={() => setSelectedContent(null)}
                  className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm rounded-full p-2 text-white hover:bg-black/70 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-8">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {selectedContent.title}
                </h2>
                <p className="text-gray-300 text-lg mb-6">
                  {selectedContent.description}
                </p>
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{selectedContent.readTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{selectedContent.views.toLocaleString()} views</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-gray-400" />
                    <span className="text-gray-400">{selectedContent.likes} likes</span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedContent.tags.map((tagindex) => (
                    <span
                      key={index}
                      className="bg-purple-600/20 text-purple-300 px-3 py-1 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-purple-700 transition-colors flex items-center gap-2">
                    <Play className="w-5 h-5" />
                    {selectedContent.type === 'video' ? 'Watch Now' : 'Read More'}
                  </button>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Bookmark className="w-5 h-5" />
                    Save
                  </button>
                  <button className="border border-white/20 text-white px-6 py-3 rounded-xl font-semibold hover:bg-white/10 transition-colors flex items-center gap-2">
                    <Share2 className="w-5 h-5" />
                    Share
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
    </div>
  );
};

export default InteractiveContentDiscoveryWidget2025_2026;