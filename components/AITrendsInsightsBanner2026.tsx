export default function AITrendsInsightsBanner2026() {
  return (
    <section className="py-20 bg-gradient-to-br from-cyan-900/30 via-blue-900/30 to-purple-900/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
            <span className="text-cyan-400 font-bold text-xl tracking-wider uppercase">
              📊 AI Trends & Insights 2026
            </span>
          </div>
          <h2 className="text-6xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
            The Future of AI is Now
          </h2>
          <p className="text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Stay ahead of the curve with our latest insights, trends, and predictions for the AI revolution in 2026.
          </p>
        </div>

        {/* Trending Topics */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Top AI Trends */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-cyan-500/30">
            <h3 className="text-3xl font-bold text-white mb-8">🔥 Top AI Trends for 2026</h3>
            <div className="space-y-6">
              {[
                { 
                  trend: 'Meta-Cognitive AI',
                  description: 'AI systems that can think about their own thinking processes',
                  impact: 'High',
                  timeline: 'Q1 2026',
                  color: 'from-purple-500 to-indigo-500'
                },
                { 
                  trend: 'Quantum-Neural Networks',
                  description: 'Revolutionary processing architecture combining quantum principles',
                  impact: 'Very High',
                  timeline: 'Q2 2026',
                  color: 'from-blue-500 to-cyan-500'
                },
                { 
                  trend: 'Autonomous Operations',
                  description: 'Self-managing systems achieving 98% automation rates',
                  impact: 'High',
                  timeline: 'Q3 2026',
                  color: 'from-green-500 to-emerald-500'
                },
                { 
                  trend: 'Edge AI Processing',
                  description: 'Ultra-low latency AI processing at the edge',
                  impact: 'Medium',
                  timeline: 'Q4 2026',
                  color: 'from-orange-500 to-red-500'
                }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-white mb-2">{item.trend}</h4>
                      <p className="text-gray-300 text-sm mb-3">{item.description}</p>
                    </div>
                    <div className="text-right">
                      <div className={`text-xs px-3 py-1 rounded-full mb-2 ${
                        item.impact === 'Very High' ? 'bg-red-500/20 text-red-300' :
                        item.impact === 'High' ? 'bg-orange-500/20 text-orange-300' :
                        'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {item.impact} Impact
                      </div>
                      <div className="text-cyan-400 text-sm font-semibold">{item.timeline}</div>
                    </div>
                  </div>
                  <div className={`h-2 bg-gradient-to-r ${item.color} rounded-full`}></div>
                </div>
              ))}
            </div>
          </div>

          {/* Market Insights */}
          <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-blue-500/30">
            <h3 className="text-3xl font-bold text-white mb-8">📈 Market Insights & Predictions</h3>
            <div className="space-y-6">
              {[
                { 
                  metric: 'AI Market Size',
                  value: '$2.8T',
                  growth: '+45%',
                  description: 'Global AI market value by end of 2026',
                  color: 'text-blue-400'
                },
                { 
                  metric: 'Enterprise Adoption',
                  value: '78%',
                  growth: '+23%',
                  description: 'Fortune 500 companies with AI strategies',
                  color: 'text-green-400'
                },
                { 
                  metric: 'Automation Rate',
                  value: '65%',
                  growth: '+18%',
                  description: 'Average business process automation',
                  color: 'text-purple-400'
                },
                { 
                  metric: 'AI Investment',
                  value: '$180B',
                  growth: '+32%',
                  description: 'Annual enterprise AI investment',
                  color: 'text-cyan-400'
                }
              ].map((insight, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-lg font-bold text-white">{insight.metric}</h4>
                    <div className="text-right">
                      <div className={`text-2xl font-bold ${insight.color}`}>{insight.value}</div>
                      <div className="text-green-400 text-sm font-semibold">{insight.growth}</div>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm">{insight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Industry Impact */}
        <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-3xl p-8 mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-white mb-4">Industry Impact Analysis</h3>
            <p className="text-xl text-gray-300">How AI is transforming different sectors in 2026</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                industry: 'Manufacturing',
                impact: '95%',
                savings: '$2.5B',
                innovation: 'Autonomous Production',
                icon: '🏭'
              },
              {
                industry: 'Healthcare',
                impact: '88%',
                savings: '$1.8B',
                innovation: 'AI Diagnosis',
                icon: '🏥'
              },
              {
                industry: 'Finance',
                impact: '92%',
                savings: '$3.2B',
                innovation: 'Fraud Prevention',
                icon: '🏦'
              },
              {
                industry: 'Retail',
                impact: '85%',
                savings: '$1.2B',
                innovation: 'Personalized AI',
                icon: '🛍️'
              }
            ].map((sector, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
                <div className="text-4xl mb-4">{sector.icon}</div>
                <h4 className="text-xl font-bold text-white mb-3">{sector.industry}</h4>
                <div className="space-y-2 mb-4">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">{sector.impact}</div>
                    <div className="text-gray-400 text-sm">Process Improvement</div>
                  </div>
                  <div>
                    <div className="text-lg font-bold text-green-400">{sector.savings}</div>
                    <div className="text-gray-400 text-sm">Annual Savings</div>
                  </div>
                </div>
                <p className="text-gray-300 text-sm">{sector.innovation}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Expert Predictions */}
        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {[
            {
              expert: 'Dr. Sarah Chen',
              title: 'Chief AI Scientist',
              prediction: 'Meta-Cognitive AI will revolutionize decision-making processes, achieving 95% accuracy in complex scenarios.',
              expertise: 'Cognitive Computing',
              avatar: '👩‍🔬'
            },
            {
              expert: 'Prof. Michael Rodriguez',
              title: 'Quantum Computing Researcher',
              prediction: 'Quantum-Neural Networks will break the 1000x speed barrier, enabling real-time complex problem solving.',
              expertise: 'Quantum Computing',
              avatar: '👨‍💻'
            },
            {
              expert: 'Lisa Thompson',
              title: 'Enterprise AI Strategist',
              prediction: 'Autonomous operations will achieve 98% automation rates while maintaining enterprise security standards.',
              expertise: 'Enterprise AI',
              avatar: '👩‍💼'
            }
          ].map((expert, index) => (
            <div key={index} className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:border-cyan-500/50 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-6xl mb-4">{expert.avatar}</div>
                <h4 className="text-xl font-bold text-white mb-2">{expert.expert}</h4>
                <p className="text-cyan-400 font-semibold mb-1">{expert.title}</p>
                <p className="text-gray-400 text-sm">{expert.expertise}</p>
              </div>
              <blockquote className="text-gray-300 text-lg leading-relaxed italic">
                "{expert.prediction}"
              </blockquote>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-4xl font-bold text-white mb-4">Stay Ahead of the AI Revolution</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Get exclusive access to our latest research, insights, and predictions about the future of AI.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/ai-trends-report" 
              className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold py-4 px-8 rounded-xl transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
            >
              Download 2026 AI Trends Report
            </a>
            <a 
              href="/newsletter" 
              className="border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Subscribe to AI Insights
            </a>
            <a 
              href="/webinar" 
              className="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-4 px-8 rounded-xl transition-all duration-300"
            >
              Join Expert Webinar
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}