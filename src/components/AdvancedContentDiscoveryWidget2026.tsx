import React from 'react';
const AdvancedContentDiscoveryWidget2026: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 rounded-3xl p-8 shadow-2xl">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Sparkles className="w-4 h-4" />
            Advanced Content Discovery
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Discover Revolutionary
            <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
              {' '}Content
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Explore cutting-edge innovationspredictionsand solutions with our intelligent content discovery system.
          </p>
        </div>
        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col lg:flex-row gap-4 mb-6">
            {/* Search Bar */}
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search contentagsor authors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
            </div>
            {/* Sort Dropdown */}
            <div className="relative">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="appearance-none bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl text-white px-6 py-4 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              >
                <option value="trending" className="bg-slate-800">Trending</option>
                <option value="rating" className="bg-slate-800">Highest Rated</option>
                <option value="newest" className="bg-slate-800">Newest</option>
                <option value="popular" className="bg-slate-800">Most Popular</option>
              </select>
              <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
            </div>
            {/* Filter Toggle */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-6 py-4 rounded-2xl hover:bg-white/20 transition-colors duration-300"
            >
              <Filter className="w-5 h-5" />
              Filters
            </button>
          </div>
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                    selectedCategory === category.id
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                      : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {category.name}
                </button>
              );
};
            })}
          </div>
        </div>
        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div>
            {sortedContent.map((itemindex) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div
                  key={item.id}
                  className={`relative group cursor-pointer ${
                    item.featured ? 'lg:col-span-2' : ''
                  }`}
                >
                  <div className="relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/20 rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 group-hover:scale-105">
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="flex items-center gap-1 bg-yellow-400 text-yellow-900 px-3 py-1 rounded-full text-sm font-semibold">
                          <Star className="w-4 h-4" />
                          Featured
                        </div>
                      </div>
                    )}
                    {/* Trending Badge */}
                    {item.trending && (
                      <div className="absolute top-4 right-4 z-10">
                        <div className="flex items-center gap-1 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          <TrendingUp className="w-4 h-4" />
                          Trending
                        </div>
                      </div>
                    )}
                    {/* Thumbnail */}
                    <div className="relative h-48 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-cyan-600/30"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`p-6 rounded-2xl bg-gradient-to-r ${getTypeColor(item.type)} text-white`}>
                          <TypeIcon className="w-12 h-12" />
                        </div>
                      </div>
                    </div>
                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <div className={`p-2 rounded-lg bg-gradient-to-r ${getTypeColor(item.type)}`}>
                            <TypeIcon className="w-4 h-4 text-white" />
                          </div>
                          <span className="text-sm text-gray-400 capitalize">{item.type}</span>
                        </div>
                        <button
                          onClick={() => toggleFavorite(item.id)}
                          className={`p-2 rounded-lg transition-colors duration-300 ${
                            favorites.has(item.id)
                              ? 'text-red-500 bg-red-500/20'
                              : 'text-gray-400 hover:text-red-500 hover:bg-red-500/20'
                          }`}
                        >
                          <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                        </button>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-300 transition-colors duration-300">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                        {item.description}
                      </p>
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.tags.slice(03).map((tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-white/10 text-gray-300 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* Stats */}
                      <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            {item.views.toLocaleString()}
                          </div>
                          <div className="flex items-center gap-1">
                            <Heart className="w-4 h-4" />
                            {item.likes}
                          </div>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4" />
                            {item.rating}
                          </div>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime}
                        </div>
                      </div>
                      {/* Author */}
                      <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-400">
                          By {item.author}
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
                            <Share2 className="w-4 h-4" />
                          </button>
                          <button className="p-2 text-gray-400 hover:text-white transition-colors duration-300">
                            <Download className="w-4 h-4" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
};
            })}
          </div>
        </div>
        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:scale-105 transition-transform duration-300">
            Load More Content
          </button>
        </div>
      </div>
    </div>
  );

export default AdvancedContentDiscoveryWidget2026;