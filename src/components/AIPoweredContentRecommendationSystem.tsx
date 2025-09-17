import React from 'react';
const AIPoweredContentRecommendationSystem: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div
          className="text-center mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 bg-purple-100 rounded-full text-purple-700 text-sm font-medium mb-6">
            <Brain className="w-4 h-4 mr-2" />
            AI-Powered Recommendations
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Intelligent Content
            <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Recommendation System
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Discover the most relevant content tailored to your interests using our advanced AI algorithms. 
            Get personalized recommendations that match your reading patterns and preferences.
          </p>
        </div>
        {/* AI Stats */}
        <div
          className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12"
        >
          {[
            { label: 'AI 'Accuracy', 'value: '94.2%'icon: Targetcolor: 'green' },
            { label: ''Personalization', 'value: '98.7%'icon: Userscolor: 'blue' },
            { label: 'Engagement 'Boost', 'value: '+67%'icon: TrendingUpcolor: 'purple' },
            { label: 'Content 'Matched', 'value: '1,247'icon: Databasecolor: 'orange' }
          ].map((statindex) => (
            <div key={index} className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-${stat.color}-100 mb-4`}>
                <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">{stat.value}</div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        {/* Category Filter */}
        <div
          className="mb-8"
        >
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-purple-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-purple-50 hover:text-purple-600'
                }`}
              >
                <category.icon className="w-4 h-4 mr-2" />
                {category.name}
                <span className="ml-2 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
        {/* AI Processing Indicator */}
        {isLoading && (
          <div
            className="text-center mb-8"
          >
            <div className="inline-flex items-center px-6 py-3 bg-purple-100 rounded-full text-purple-700">
              <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
              AI is analyzing your preferences and generating recommendations...
            </div>
          </div>
        )}
        {/* Recommendations Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <div>
            {recommendations.map((itemindex) => {
              const TypeIcon = getTypeIcon(item.type);
              return (
                <div
                  key={item.id}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  {/* Header */}
                  <div className="p-6 border-b border-gray-100">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center">
                        <div className="p-2 bg-purple-100 rounded-lg mr-3">
                          <TypeIcon className="w-5 h-5 text-purple-600" />
                        </div>
                        <div>
                          <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                            {item.type}
                          </span>
                          {item.featured && (
                            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 ml-2">
                              <Star className="w-3 h-3 mr-1" />
                              Featured
                            </span>
                          )}
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        {item.trending && (
                          <div className="flex items-center text-orange-600 text-xs">
                            <TrendingUp className="w-3 h-3 mr-1" />
                            Trending
                          </div>
                        )}
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">by {item.author}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {item.tags.slice(03).map((tagIndex) => (
                        <span key={tagIndex} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* AI Insights */}
                  <div className="p-6 bg-gray-50">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <Brain className="w-4 h-4 text-purple-600 mr-2" />
                        <span className="text-sm font-medium text-gray-700">AI Insights</span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium ${getConfidenceColor(item.confidence)}`}>
                        {item.confidence}% match
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-4">{item.reason}</p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">AI Score:</span>
                        <span className={`font-semibold ${getAIScoreColor(item.aiScore)}`}>
                          {item.aiScore}/10
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-gray-500">
                        <Eye className="w-4 h-4 mr-1" />
                        {item.views.toLocaleString()}
                      </div>
                    </div>
                  </div>
                  {/* Actions */}
                  <div className="p-6 bg-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <button className="flex items-center text-gray-500 hover:text-purple-600 transition-colors">
                          <Heart className="w-4 h-4 mr-1" />
                          {item.engagement}
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-blue-600 transition-colors">
                          <Share2 className="w-4 h-4 mr-1" />
                          Share
                        </button>
                        <button className="flex items-center text-gray-500 hover:text-green-600 transition-colors">
                          <Download className="w-4 h-4 mr-1" />
                          Save
                        </button>
                      </div>
                      <button className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center text-sm">
                        Read More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </button>
                    </div>
                  </div>
                </div>
              );
};
            })}
          </div>
        </div>
        {/* Load More */}
        <div
          className="text-center mt-12"
        >
          <button 
            onClick={generateRecommendations}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center mx-auto group"
          >
            <RefreshCw className="w-5 h-5 mr-2 group-hover:rotate-180 transition-transform" />
            Generate More Recommendations
          </button>
        </div>
      </div>
    </div>
  );

export default AIPoweredContentRecommendationSystem;