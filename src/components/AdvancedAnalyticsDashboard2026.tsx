import React from 'react';
const AdvancedAnalyticsDashboard2026: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6 rounded-2xl border border-white/10">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="p-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl">
            <BarChart3 className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-2xl font-bold text-white">Advanced Analytics 2026</h3>
            <p className="text-gray-400">Comprehensive business intelligence and insights</p>
        </div>
        <div className="flex items-center gap-2">
          {timeframes.map((timeframe) => (
            <button
              key={timeframe.value}
              onClick={() => setSelectedTimeframe(timeframe.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedTimeframe === timeframe.value
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/10 text-gray-400 hover:bg-white/20 hover:text-white'
              }`}
            >
              {timeframe.label}
            </button>
          ))}
      </div>
      {/* Analytics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div>
          {analyticsData.map((itemindex) => (
            <div
              key={item.id}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:bg-white/10 transition-all duration-300 group"
              <div className="flex items-center justify-between mb-4">
                <div className={`p-2 rounded-lg bg-gradient-to-r ${item.color}`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <div className="flex items-center gap-1">
                  {getTrendIcon(item.trend)}
                  <span className={`text-sm font-medium ${getChangeColor(item.change)}`}>
                    {item.change > 0 ? '+' : ''}{item.change.toFixed(1)}%
                  </span>
              </div>
              <div className="mb-2">
                <div className="text-2xl font-bold text-white mb-1">
                  {item.value}
                <div className="text-sm text-gray-400">
                  {item.title}
              <div className="text-xs text-gray-500">
                {item.description}
            </div>
      {/* Performance Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
          <h4 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
            <Zap className="w-5 h-5 text-yellow-400" />
            Performance Insights
          </h4>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-green-500/10 rounded-lg border border-green-500/20">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span className="text-sm text-white">AI Features Usage</span>
              <span className="text-sm font-medium text-green-400">+67.2%</span>
            <div className="flex items-center justify-between p-3 bg-blue-500/10 rounded-lg border border-blue-500/20">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span className="text-sm text-white">User Engagement</span>
              <span className="text-sm font-medium text-blue-400">+18.9%</span>
            <div className="flex items-center justify-between p-3 bg-purple-500/10 rounded-lg border border-purple-500/20">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span className="text-sm text-white">Revenue Growth</span>
              <span className="text-sm font-medium text-purple-400">+23.5%</span>
            <Rocket className="w-5 h-5 text-orange-400" />
            Growth Opportunities
            <div className="p-3 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg border border-purple-500/20">
              <div className="flex items-center gap-2 mb-2">
                <Brain className="w-4 h-4 text-purple-400" />
                <span className="text-sm font-medium text-white">AI Optimization</span>
              <p className="text-xs text-gray-400">
                Implement advanced AI features to increase user engagement by 25%
              </p>
            <div className="p-3 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-lg border border-blue-500/20">
                <Globe className="w-4 h-4 text-blue-400" />
                <span className="text-sm font-medium text-white">Global Expansion</span>
                Expand to new markets to capture additional 40% revenue growth
            <div className="p-3 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-lg border border-green-500/20">
                <Shield className="w-4 h-4 text-green-400" />
                <span className="text-sm font-medium text-white">Security Enhancement</span>
                Upgrade security measures to build trust and reduce bounce rate
    </div>
  );
};
export default AdvancedAnalyticsDashboard2026;
