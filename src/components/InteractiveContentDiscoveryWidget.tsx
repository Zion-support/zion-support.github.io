import React from 'react';

const InteractiveContentDiscoveryWidget: React.FC = () => {
  return (
<<<<<<< HEAD
    <div className="p-6 bg-gradient-to-br from-blue-900 to-purple-900 text-white rounded-lg">
      <h3 className="text-xl font-bold mb-4">InteractiveContentDiscoveryWidget</h3>
      <p className="text-gray-300">Revolutionary technology component</p>
    </div>
=======
    <>
      {/* Floating Action Button */}
      <divbutton
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-8 z-50 bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
      >
        <Search className="w-6 h-6" />
      </divbutton>

      {/* Modal Overlay */}
      <div>
        {isOpen && (
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsOpen(false)}
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="bg-white dark:bg-gray-900 rounded-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden shadow-2xl"
            >
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold flex items-center gap-3">
                    <Sparkles className="w-6 h-6" />
                    Content Discovery
                  </h2>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="text-white/80 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>

                {/* Search Bar */}
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search contentagsor authors..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 rounded-full bg-white/20 backdrop-blur-sm text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
                  />
                </div>
              </div>

              <div className="flex h-[600px]">
                {/* Sidebar */}
                <div className="w-80 bg-gray-50 dark:bg-gray-800 p-6 border-r border-gray-200 dark:border-gray-700">
                  {/* Categories */}
                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Categories</h3>
                    <div className="space-y-2">
                      {categories.map((category) => {
                        const Icon = category.icon;
                        return (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                              selectedCategory === category.id
                                ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                                : 'hover:bg-gray-100 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300'
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              <Icon className="w-4 h-4" />
                              <span className="font-medium">{category.name}</span>
                            </div>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                              {category.count}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Recently Viewed */}
                  {recentlyViewed.length > 0 && (
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white mb-3">Recently Viewed</h3>
                      <div className="space-y-2">
                        {recentlyViewed.map((item) => (
                          <div
                            key={item.id}
                            className="p-3 bg-white dark:bg-gray-700 rounded-lg cursor-pointer hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors"
                            onClick={() => addToRecentlyViewed(item)}
                          >
                            <div className="flex items-center gap-2 mb-1">
                              <span className="text-lg">{getTypeIcon(item.type)}</span>
                              <span className="text-sm font-medium text-gray-900 dark:text-white truncate">
                                {item.title}
                              </span>
                            </div>
                            <div className="text-xs text-gray-500 dark:text-gray-400">
                              {item.readTime} • {item.views.toLocaleString()} views
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Main Content */}
                <div className="flex-1 overflow-y-auto p-6">
                  {/* View Mode Toggle */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setViewMode('grid')}
                        className={`p-2 rounded-lg transition-colors ${
                          viewMode === 'grid'
                            ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        <Grid className="w-5 h-5" />
                      </button>
                      <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-lg transition-colors ${
                          viewMode === 'list'
                            ? 'bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300'
                            : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300'
                        }`}
                      >
                        <List className="w-5 h-5" />
                      </button>
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      {filteredContent.length} results
                    </div>
                  </div>

                  {/* Content Grid/List */}
                  <div className={viewMode === 'grid' ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6' : 'space-y-4'}>
                    {filteredContent.map((item) => (
                      <div
                        key={item.id}
                        className={`bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-all duration-300 cursor-pointer ${
                          viewMode === 'list' ? 'flex' : ''
                        }`}
                        onClick={() => addToRecentlyViewed(item)}
                      >
                        <div className={`${viewMode === 'list' ? 'w-32 h-24' : 'h-48'} bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900 dark:to-blue-900 flex items-center justify-center text-4xl`}>
                          {item.image}
                        </div>
                        
                        <div className={`p-4 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <span className="text-lg">{getTypeIcon(item.type)}</span>
                              <span className="text-xs font-medium text-purple-600 dark:text-purple-400 uppercase tracking-wide">
                                {item.type}
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              {item.isNew && (
                                <span className="bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 text-xs font-bold px-2 py-1 rounded-full">
                                  NEW
                                </span>
                              )}
                              {item.isTrending && (
                                <TrendingUp className="w-4 h-4 text-orange-500" />
                              )}
                            </div>
                          </div>

                          <h3 className="font-bold text-gray-900 dark:text-white mb-2 line-clamp-2">
                            {item.title}
                          </h3>
                          
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                            {item.description}
                          </p>

                          <div className="flex flex-wrap gap-1 mb-3">
                            {item.tags.slice(0, 3).map((tag) => (
                              <span
                                key={tag}
                                className="text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 px-2 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-4">
                              <div className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {item.readTime}
                              </div>
                              <div className="flex items-center gap-1">
                                <Eye className="w-3 h-3" />
                                {item.views.toLocaleString()}
                              </div>
                              <div className="flex items-center gap-1">
                                <Heart className="w-3 h-3" />
                                {item.likes}
                              </div>
                            </div>
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(item.id);
                              }}
                              className={`p-1 rounded transition-colors ${
                                favorites.has(item.id)
                                  ? 'text-red-500 hover:text-red-600'
                                  : 'text-gray-400 hover:text-red-500'
                              }`}
                            >
                              <Heart className={`w-4 h-4 ${favorites.has(item.id) ? 'fill-current' : ''}`} />
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {filteredContent.length === 0 && (
                    <div className="text-center py-12">
                      <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                        No content found
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        Try adjusting your search terms or filters
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
>>>>>>> cursor/fix-netlify-build-and-merge-to-main-8b4d
  );
};

export default InteractiveContentDiscoveryWidget;