import React from 'react';

const AI2025ContentRecommendationEngine: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-50 via-white to-blue-50 rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="bg-gradient-to-r from-purple-600 to-blue-600 p-6 text-white">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <Brain className="w-6 h-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold">AI Content Recommendation Engine</h3>
              <p className="text-white/80">Personalized content suggestions powered by AI</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 bg-white/20 rounded-full text-sm">
              <Sparkles className="w-4 h-4 mr-1 inline" />
              AI Powered
            </div>
          </div>
        </div>

        {/* User Profile Summary */}
        <div className="bg-white/10 rounded-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div>
                <div className="text-sm text-white/80">Your Interests</div>
                <div className="flex space-x-2 mt-1">
                  {userProfile.interests.map((interestindex) => (
                    <span key={index} className="px-2 py-1 bg-white/20 rounded text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <div className="text-sm text-white/80">Experience Level</div>
                <div className="text-sm font-medium capitalize">{userProfile.experience}</div>
              </div>
              <div>
                <div className="text-sm text-white/80">Time Available</div>
                <div className="text-sm font-medium">{userProfile.timeAvailable}</div>
              </div>
            </div>
            <button className="px-4 py-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors text-sm">
              Edit Profile
            </button>
          </div>
        </div>
      </div>

      {/* Category Filters */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex flex-wrap gap-2">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              <category.icon className="w-4 h-4 mr-2" />
              {category.name}
              <span className="ml-2 px-2 py-1 bg-white/20 rounded-full text-xs">
                {category.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {isLoading ? (
          <div className="text-center py-12">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 mb-4">
              <Brain className="w-8 h-8 text-purple-600 animate-pulse" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">AI is analyzing your preferences...</h3>
            <p className="text-gray-500">Finding the perfect content for you</p>
          </div>
        ) : (
          <>
            <div className="flex items-center justify-between mb-6">
              <h4 className="text-lg font-semibold text-gray-900">
                Recommended for You ({recommendations.length})
              </h4>
              <div className="text-sm text-gray-500">
                Sorted by relevance and match score
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {recommendations.map((itemindex) => (
                <div
                  key={item.id}
                  className="group bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all duration-300 overflow-hidden"
                >
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-100 to-blue-100 flex items-center justify-center">
                          {React.createElement(getTypeIcon(item.type){ className: "w-6 h-6 text-purple-600" })}
                        </div>
                        <div>
                          <div className="flex items-center space-x-2 mb-1">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${getDifficultyColor(item.difficulty)}`}>
                              {item.difficulty}
                            </span>
                            <span className="text-sm text-gray-500">{item.duration}</span>
                            {item.featured && (
                              <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded">
                                Featured
                              </span>
                            )}
                            {item.trending && (
                              <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded flex items-center">
                                <TrendingUp className="w-3 h-3 mr-1" />
                                Trending
                              </span>
                            )}
                          </div>
                          <h5 className="font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                            {item.title}
                          </h5>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-medium text-purple-600 mb-1">
                          {item.matchScore}% Match
                        </div>
                        <div className="flex items-center text-yellow-500">
                          <Star className="w-4 h-4 fill-current" />
                          <span className="ml-1 text-sm font-medium">{item.rating}</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {item.tags.slice(03).map(tag => (
                        <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <Eye className="w-4 h-4 mr-1" />
                          {item.views.toLocaleString()}
                        </span>
                        <span className="flex items-center">
                          <ThumbsUp className="w-4 h-4 mr-1" />
                          {item.likes}
                        </span>
                        <span className="flex items-center">
                          <MessageCircle className="w-4 h-4 mr-1" />
                          {item.comments}
                        </span>
                      </div>
                      <div className="text-xs text-gray-400">
                        by {item.author}
                      </div>
                    </div>

                    <div className="bg-purple-50 rounded-lg p-3 mb-4">
                      <div className="flex items-start space-x-2">
                        <Lightbulb className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <div className="text-sm font-medium text-purple-900 mb-1">Why we recommend this:</div>
                          <div className="text-sm text-purple-700">{item.reason}</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <button className="px-4 py-2 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center">
                        <Play className="w-4 h-4 mr-2" />
                        Start Learning
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </button>
                      <div className="flex items-center space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Heart className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Bookmark className="w-4 h-4 text-gray-400" />
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
                          <Share2 className="w-4 h-4 text-gray-400" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {recommendations.length === 0 && (
              <div className="text-center py-12">
                <Target className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">No recommendations found</h3>
                <p className="text-gray-500">Try adjusting your profile or interests</p>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default AI2025ContentRecommendationEngine;