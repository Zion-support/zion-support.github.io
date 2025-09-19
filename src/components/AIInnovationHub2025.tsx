import React from 'react';
const AIInnovationHub2025: React.FC = () => {,
  return (,
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">,
      {/* Header */,}
      <div,
        className="relative overflow-hidden",
      >,
        <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 via-blue-600/20 to-purple-600/20" />,
        <div className="relative z-10 container mx-auto px-4 py-16">,
          <div className="text-center">,
            <h1 className="text-6xl md: text-8xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-6">,
              AI Innovation Hub,
            </h1>,
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">,
              2025 Edition,
            </h2>,
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">,
              Discoverexploreand implement cutting-edge AI technologies that are shaping the future,
            </p>,
          </div>,
        </div>,
      </div>,
      <div className="container mx-auto px-4 py-8">,
        {/* Search and Filters */,}
        <div,
          className="mb-8",
        >,
          <div className="flex flex-col lg: flex-row gap-4 items-center justify-between mb-6">,
            {/* Search */,}
            <div className="relative flex-1 max-w-md">,
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />,
              <input,
                type="text",
                placeholder="Search innovations...",
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-400 focus: outline-none focus:ring-2 focus:ring-purple-500",
              />,
            </div>,
            {/* View Mode Toggle */,}
            <div className="flex items-center gap-2">,
              <button,
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors duration-300 ${,
                  viewMode === 'grid' ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400 hover: bg-white/20',}`}
              >,
                <Grid className="w-5 h-5" />,
              </button>,
                onClick={() => setViewMode('list')}
                  viewMode === 'list' ? 'bg-purple-600 text-white' : 'bg-white/10 text-gray-400 hover: bg-white/20',
                <List className="w-5 h-5" />,
          {/* Category Tabs */,}
          <div className="flex flex-wrap gap-4 justify-center">,
            {Object.entries(categories).map(([keycategory]) => (,
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center ${,
                  activeCategory === key,
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg`,
                    : 'bg-white/10 text-gray-300 hover: bg-white/20',
                <category.icon className="w-5 h-5 mr-2" />,
                {category.title,}
            ))}
        {/* Content Grid */}
          className={`grid gap-6 ${,
            viewMode === 'grid',
              ? 'grid-cols-1 md: grid-cols-2 lg:grid-cols-3',
              : 'grid-cols-1',}`}
          {filteredInnovations.map((itemindex) => (,
            <div,
              key={item.id}
              onHoverStart={() => setHoveredItem(item.id)}
              onHoverEnd={() => setHoveredItem(null)}
              className={`group cursor-pointer ${,
                viewMode === 'list' ? 'flex items-center' : '',
              }`}
            >,
              <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br ${item.color} ,
                ${hoveredItem === item.id ? 'scale-105 shadow-2xl' : 'shadow-lg'} ,
                transition-all duration-300 ${viewMode === 'list' ? 'flex-1' : 'h-full'}`}>,
                {/* Status Badge */}
                <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold bg-gradient-to-r ${getStatusColor(item.status)} text-white`}>,
                  {item.status}
                </div>,
                <div className={`p-6 ${viewMode === 'list' ? 'flex items-center gap-6' : ''}`}>,
                  {/* Icon */}
                  <div className={`${viewMode === 'list' ? 'flex-shrink-0' : 'mb-4'}`}>,
                    <div className={`w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center`}>,
                      <item.icon className="w-8 h-8 text-white" />,
                    </div>,
                  </div>,
                  {/* Content */}
                  <div className={`${viewMode === 'list' ? 'flex-1' : ''}`}>,
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>,
                    <p className="text-gray-200 mb-4 text-sm">{item.description}</p>,
                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">,
                      {item.features.slice(02).map((featureidx) => (,
                        <span key={idx} className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">,
                          {feature}
                        </span>,
                      ))}
                      {item.features.length > 2 && (,
                        <span className="px-2 py-1 bg-white/20 rounded-full text-xs text-white">,
                          +{item.features.length - 2} more,
                      )}
                    {/* Meta Info */}
                    <div className="flex items-center justify-between text-sm text-gray-300 mb-4">,
                      <span className={getDifficultyColor(item.difficulty)}>{item.difficulty}</span>,
                      <span>{item.downloads} downloads</span>,
                    {/* Rating and Price */}
                    <div className="flex items-center justify-between">,
                      <div className="flex items-center">,
                        <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />,
                        <span className="text-white font-semibold">{item.rating}</span>,
                      </div>,
                      <div className="text-right">,
                        <div className="text-white font-semibold">{item.price}</div>,
                        <div className="text-xs text-gray-300">{item.lastUpdated}</div>,
                {/* Hover Overlay */}
                {hoveredItem === item.id && (,
                  <div,
                    className="absolute inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center",
                  >,
                    <div className="flex gap-4">,
                      <button className="px-6 py-3 bg-white text-purple-600 rounded-full font-semibold hover: bg-gray-100 transition-colors duration-300 flex items-center">,
                        <Play className="w-4 h-4 mr-2" />,
                        Demo,
                      </button>,
                      <button className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-colors duration-300 flex items-center">,
                        <Download className="w-4 h-4 mr-2" />,
                        Download,
                ),}
              </div>,
          ))}
        {/* Load More */}
          className="text-center mt-12",
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover: from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center mx-auto">,
            <RefreshCw className="w-5 h-5 mr-2" />,
            Load More Innovations,
          </button>,
    </div>,
  ),};
export default AIInnovationHub2025;
}}