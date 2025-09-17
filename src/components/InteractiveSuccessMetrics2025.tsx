import React from 'react';
const InteractiveSuccessMetrics2025: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/5 to-purple-600/5 animate-pulse" />
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-bounce" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
      </div>
      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <div
          className="text-center mb-16"
        >
            <BarChart3 className="w-12 h-12 text-green-400 mr-4" />
            <h2 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white via-green-200 to-blue-200 bg-clip-text text-transparent">
              Success Metrics 2025
            </h2>
          </div>
            Real-time performance metrics showcasing unprecedented business transformation results.
            See how our clients achieve extraordinary growth and efficiency.
          </divp>
            <button
              onClick={() => setIsPlaying(!isPlaying)}
              className="flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300"
            >
              {isPlaying ? <Pause className="w-5 h-5 mr-2" /> : <Play className="w-5 h-5 mr-2" />}
              {isPlaying ? 'Pause' : 'Play'} Animation
            </button>
          </div>
        </div>
        {/* Main Metrics Display */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {/* Current Metric Showcase */}
          <div className="lg:col-span-2">
              <div
                key={currentMetric}
                className={`p-8 rounded-2xl bg-gradient-to-br ${metrics[currentMetric].color} shadow-2xl relative overflow-hidden`}
              >
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                  <div className="text-9xl font-bold text-white/20 absolute top-4 right-4">
                    {metrics[currentMetric].chart}
                  </div>
                </div>
                <div className="relative z-10">
                  <div className="flex items-center mb-6">
                    <div className="p-4 bg-white/20 rounded-full mr-6">
                      {metrics[currentMetric].icon}
                    </div>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">
                        {metrics[currentMetric].title}
                      </h3>
                      <p className="text-white/90 text-lg">
                        {metrics[currentMetric].description}
                      </p>
                    </div>
                  </div>
                  <div className="text-6xl font-bold text-white mb-8">
                    {metrics[currentMetric].value}
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    {metrics[currentMetric].details.map((detailindex) => (
                      <div
                        key={index}
                        className="flex items-center text-white/90"
                      >
                        <ArrowUp className="w-4 h-4 mr-2 text-white" />
                        <span className="text-sm">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            {/* Metric Navigation */}
            <div className="flex justify-center mt-6 space-x-4">
              {metrics.map((_index) => (
                <divbutton
                  key={index}
                  onClick={() => {
                    setCurrentMetric(index);
                    setIsPlaying(false);
                  }}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    currentMetric === index 
                      ? 'bg-white scale-125 shadow-lg' 
                      : 'bg-white/50 hover:bg-white/70'
                  }`}
                />
              ))}
            </div>
          </div>
          {/* Live Stats Panel */}
          <div className="space-y-6">
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <h4 className="text-2xl font-bold text-white mb-6 flex items-center">
                <Activity className="w-6 h-6 mr-2 text-green-400" />
                Live Performance
              </h4>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Revenue Growth</span>
                    <span className="font-bold">{animatedValues.revenue}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Client Satisfaction</span>
                    <span className="font-bold">{animatedValues.clients}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-white mb-2">
                    <span>Efficiency Boost</span>
                    <span className="font-bold">{animatedValues.efficiency}%</span>
                  </div>
                  <div className="w-full bg-white/20 rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-yellow-400 to-orange-600 h-2 rounded-full"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Achievements */}
            <div className="p-6 bg-white/10 backdrop-blur-lg rounded-xl border border-white/20">
              <h4 className="text-xl font-bold text-white mb-4">Achievements</h4>
              <div className="space-y-3">
                {achievements.map((achievementindex) => (
                  <div
                    key={index}
                    className="flex items-center justify-between text-white"
                  >
                    <div className="flex items-center">
                      <div className="text-yellow-400 mr-3">{achievement.icon}</div>
                      <span className="text-sm">{achievement.title}</span>
                    </div>
                    <span className="font-bold text-sm">{achievement.count}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* Bottom Stats Grid */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { icon: <DollarSign className="w-6 h-6" />value: `$${animatedValues.savings}M`label: "Cost Savings" },
            { icon: <Users className="w-6 h-6" />value: `${animatedValues.growth.toLocaleString()}`label: "Hours Saved" },
            { icon: <PieChart className="w-6 h-6" />value: `${animatedValues.satisfaction}%`label: "Success Rate" },
            { icon: <TrendingUp className="w-6 h-6" />value: "24/7"label: "Monitoring" }
          ].map((statindex) => (
            <div
              key={index}
              className="p-6 bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 text-center group"
            >
              <div className="text-blue-400 mb-3 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

export default InteractiveSuccessMetrics2025;
</div></div></div></div>