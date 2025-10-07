import React from 'react';

const AITrendsInsightsBanner2026: React.FC = () => {
  const trendingTopics = [
    {
      id: 1,
      title: 'Generative AI Enterprise Adoption',
      category: 'Enterprise AI',
      trend: '+450%',
      growth: 'Rapid Growth',
      description: 'Enterprise adoption of generative AI has increased by 450% in Q1 2026, with 78% of Fortune 500 companies implementing AI-powered content generation.',

      icon: '🚀',

      gradient: 'from-purple-500 to-pink-500',
      badge: 'TRENDING',
      insights: ['78% Fortune 500 adoption', '450% growth rate', '$12B market size']
    },
    {
      id: 2,
      title: 'Quantum Computing Breakthroughs',
      category: 'Quantum Tech',
      trend: '+300%',
      growth: 'Exponential',
      description: 'Quantum computing achieves practical applications in AI optimization, with 300% improvement in processing complex machine learning algorithms.',

      icon: '🚀',

      gradient: 'from-cyan-500 to-blue-500',
      badge: 'BREAKTHROUGH',
      insights: ['1000x speed boost', '300% efficiency gain', 'Commercial viability']
    },
    {
      id: 3,
      title: 'Autonomous Business Operations',
      category: 'Automation',
      trend: '+280%',
      growth: 'Accelerating',
      description: 'Business process automation reaches new heights with 95% autonomous operations across multiple industries, reducing operational costs by 60%.',

      icon: '🚀',

      gradient: 'from-green-500 to-emerald-500',
      badge: 'AUTOMATION',
      insights: ['95% automation rate', '60% cost reduction', '24/7 operations']
    },
    {
      id: 4,
      title: 'AI-Powered Predictive Analytics',
      category: 'Business Intelligence',
      trend: '+350%',
      growth: 'High Growth',
      description: 'Advanced predictive analytics using AI achieves 99.9% accuracy in forecasting business trends, customer behavior, and market dynamics.',

      icon: '🚀',

      gradient: 'from-orange-500 to-red-500',
      badge: 'PREDICTIVE',
      insights: ['99.9% accuracy', '350% adoption growth', '$8B market value']
    },
    {
      id: 5,
      title: 'Edge AI Computing Revolution',
      category: 'Edge Computing',
      trend: '+420%',
      growth: 'Rapid Expansion',
      description: 'Edge AI computing transforms real-time decision making with 420% increase in deployment, enabling instant AI processing at the network edge.',

      icon: '🚀',

      gradient: 'from-indigo-500 to-purple-500',
      badge: 'EDGE AI',
      insights: ['420% deployment growth', 'Real-time processing', 'IoT integration']
    },
    {
      id: 6,
      title: 'AI Ethics and Governance',
      category: 'AI Governance',
      trend: '+380%',
      growth: 'Critical Growth',
      description: 'AI ethics and governance frameworks become essential with 380% increase in regulatory compliance requirements and ethical AI implementation.',

      icon: '🚀',

      gradient: 'from-teal-500 to-cyan-500',
      badge: 'GOVERNANCE',
      insights: ['380% compliance growth', 'Ethical frameworks', 'Regulatory alignment']
    }
  ];

  const marketInsights = [
    { value: '$2.5T', label: 'Global AI Market Size', icon: '📈' },
    { value: '85%', label: 'Enterprise AI Adoption', icon: '🏢' },
    { value: '500M+', label: 'AI-Powered Devices', icon: '📱' },
    { value: '2.3M', label: 'AI Job Openings', icon: '💼' }
  ];

  return (
    <div className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-cyan-900 relative overflow-hidden">
      {/* Animated background effects */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/30 mb-8 animate-fade-in">

            <span className="text-purple-400 font-bold text-sm tracking-wider uppercase">
              📊 AI TRENDS & INSIGHTS • Q1 2026
            </span>

          </div>

          <h2 className="text-5xl md:text-6xl font-extrabold mb-6 bg-gradient-to-r from-purple-400 via-cyan-400 to-pink-400 bg-clip-text text-transparent animate-fade-in">
            AI Trends & Insights 2026
          </h2>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-8">
            Stay ahead of the curve with the latest AI trends, market insights, and breakthrough technologies. 
            Discover what's shaping the future of artificial intelligence and how it impacts your business.
          </p>

          {/* Market Insights */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {marketInsights.map((insight, index) => (
              <div key={index} className="text-center">
                <div className="text-purple-400 mb-2 flex justify-center">
                  {insight.icon}
                </div>
                <div className="text-3xl font-extrabold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent mb-1">
                  {insight.value}
                </div>
                <div className="text-gray-400 text-sm font-medium">
                  {insight.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Topics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {trendingTopics.map((topic, index) => (

            <div

              key={topic.id}
              className="group relative bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 hover:border-purple-500/50 transition-all duration-500 overflow-hidden hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/20"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Card glow effect */}
              <div className={`absolute inset-0 bg-gradient-to-br ${topic.gradient} opacity-0 group-hover:opacity-10 transition-all duration-500`}></div>
              
              <div className="relative p-8">
                {/* Icon & Badge */}
                <div className="flex items-start justify-between mb-6">
                  <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                    {topic.icon}
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className={`px-3 py-1.5 rounded-full bg-gradient-to-r ${topic.gradient} text-white text-xs font-bold border border-white/30`}>
                      {topic.badge}
                    </div>
                    <div className="text-right">
                      <div className="text-green-400 font-bold text-lg">{topic.trend}</div>
                      <div className="text-gray-400 text-xs">{topic.growth}</div>
                    </div>
                  </div>
                </div>

                {/* Category */}
                <div className="mb-4">
                  <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-400 text-xs font-semibold border border-purple-500/30">
                    {topic.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors duration-300 leading-tight">
                  {topic.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-6 leading-relaxed text-sm">
                  {topic.description}
                </p>

                {/* Key Insights */}
                <div className="mb-6">
                  <div className="text-gray-400 text-xs mb-3 font-semibold">Key Insights:</div>
                  <div className="space-y-1">
                    {topic.insights.map((insight, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-gray-300 text-xs">
                        <div className="w-1.5 h-1.5 rounded-full bg-purple-400"></div>
                        {insight}
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <a
                  href={`/insights/${topic.id}`}
                  className={`group/btn flex items-center justify-center gap-2 w-full bg-gradient-to-r ${topic.gradient} hover:opacity-90 text-white font-bold py-3 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 transform hover:-translate-y-1`}
                >
                  <span>Explore Trend</span>

                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Newsletter & Updates Section */}
        <div className="bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl p-8 md:p-12 border border-purple-500/20 mb-16">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 mb-6">

              <span className="text-yellow-400 font-bold text-sm tracking-wider uppercase">
                REAL-TIME UPDATES
              </span>
            </div>
            
            <h3 className="text-4xl font-extrabold text-white mb-4">
              Get Weekly AI Trends & Insights
            </h3>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Stay informed with our weekly AI trends newsletter. Get exclusive insights, market analysis, 
              and early access to breakthrough technologies.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-4 rounded-xl bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:border-purple-500 focus:bg-white/20 transition-all duration-300"
              />

              <button className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2">

              </button>
            </div>
            <p className="text-xs text-gray-500 mt-4">
              Join 250K+ professionals. No spam, unsubscribe anytime.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-purple-500 via-cyan-500 to-pink-500">
            <div className="bg-slate-900 rounded-xl px-12 py-10">
              <h3 className="text-3xl font-bold text-white mb-4">
                Lead the AI Revolution
              </h3>
              <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
                Don't just follow trends – create them. Get exclusive access to our AI insights, 
                early technology previews, and strategic guidance for your organization.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/insights"
                  className="bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-purple-400 hover:to-cyan-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-purple-500/50 flex items-center justify-center gap-2"
                >

                  <span>Explore All Insights</span>
                </a>
                <a
                  href="/contact"
                  className="border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>Get Expert Consultation</span>

                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrendsInsightsBanner2026;