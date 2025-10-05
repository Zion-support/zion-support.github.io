import React from 'react';
import { Link } from 'react-router-dom';

const AITrendsInsightsBanner2026: React.FC = () => {
  return (
    <div className='bg-gradient-to-r from-indigo-900/40 to-cyan-900/40 border-y border-indigo-500/20 py-16'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-12'>
          <div className='inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-indigo-500/20 to-cyan-500/20 border border-indigo-500/30 mb-6'>
            <span className='text-indigo-400 font-bold text-sm tracking-wider uppercase animate-pulse'>
              🔮 2026 AI TRENDS
            </span>
          </div>
          <h2 className='text-5xl font-extrabold mb-6 bg-gradient-to-r from-indigo-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent'>
            AI Trends & Insights 2026
          </h2>
          <p className='text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed'>
            Discover the cutting-edge AI trends and insights that will shape the future of technology in 2026.
          </p>
        </div>

        <div className='grid md:grid-cols-2 gap-8 mb-12'>
          {/* Left Side - Trending Topics */}
          <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
            <h3 className='text-3xl font-bold text-white mb-6'>
              Trending AI Topics:
            </h3>
            <div className='space-y-4'>
              {[
                {
                  icon: '🧠',
                  title: 'Quantum AI Computing',
                  description: 'Revolutionary quantum-classical hybrid systems',
                  growth: '+340%',
                  category: 'Computing'
                },
                {
                  icon: '🤖',
                  title: 'Autonomous AI Agents',
                  description: 'Self-managing AI systems with human-level reasoning',
                  growth: '+280%',
                  category: 'Automation'
                },
                {
                  icon: '🔮',
                  title: 'Predictive AI Analytics',
                  description: 'Advanced forecasting and decision intelligence',
                  growth: '+220%',
                  category: 'Analytics'
                },
                {
                  icon: '🛡️',
                  title: 'AI Security & Ethics',
                  description: 'Next-gen security protocols and ethical frameworks',
                  growth: '+190%',
                  category: 'Security'
                },
                {
                  icon: '🌐',
                  title: 'Edge AI Deployment',
                  description: 'Distributed AI processing at the network edge',
                  growth: '+260%',
                  category: 'Infrastructure'
                }
              ].map((topic, index) => (
                <div key={index} className='flex items-start gap-4 p-4 bg-white/5 rounded-xl border border-white/10 hover:border-indigo-500/50 transition-all duration-300'>
                  <div className='text-3xl'>{topic.icon}</div>
                  <div className='flex-1'>
                    <div className='flex items-center justify-between mb-2'>
                      <h4 className='text-lg font-bold text-white'>
                        {topic.title}
                      </h4>
                      <div className='flex items-center gap-2'>
                        <span className='text-green-400 text-sm font-bold'>
                          {topic.growth}
                        </span>
                        <span className='text-xs text-gray-400 bg-gray-700 px-2 py-1 rounded'>
                          {topic.category}
                        </span>
                      </div>
                    </div>
                    <p className='text-gray-400 text-sm'>
                      {topic.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Right Side - Insights & CTA */}
          <div className='bg-gradient-to-br from-indigo-900/30 to-cyan-900/30 rounded-2xl p-8 border border-indigo-500/30'>
            <div className='text-center mb-8'>
              <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/20 border border-indigo-500/30 mb-4'>
                <span className='text-indigo-400 font-bold text-sm'>
                  📊 INSIGHTS
                </span>
              </div>
              <h3 className='text-3xl font-bold text-white mb-4'>
                Key Insights for 2026
              </h3>
              <p className='text-gray-300 mb-6'>
                Stay ahead with our comprehensive analysis of emerging AI trends and their business impact.
              </p>
            </div>

            <div className='space-y-4 mb-8'>
              <div className='flex items-center gap-3'>
                <span className='text-indigo-400'>📈</span>
                <span className='text-gray-300'>
                  AI market projected to reach $1.8T by 2026
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-indigo-400'>⚡</span>
                <span className='text-gray-300'>
                  Quantum AI will be 1000x faster than classical systems
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-indigo-400'>🔮</span>
                <span className='text-gray-300'>
                  Predictive AI will reduce business risks by 85%
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-indigo-400'>🌐</span>
                <span className='text-gray-300'>
                  Edge AI will process 60% of data locally by 2026
                </span>
              </div>
              <div className='flex items-center gap-3'>
                <span className='text-indigo-400'>🤖</span>
                <span className='text-gray-300'>
                  Autonomous AI agents will handle 40% of business tasks
                </span>
              </div>
            </div>

            <div className='space-y-4'>
              <Link to='/ai-trends-2026'
                className='w-full bg-gradient-to-r from-indigo-500 to-cyan-600 hover:from-indigo-400 hover:to-cyan-500 text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-indigo-500/50 transform hover:-translate-y-1 text-center block'
              >
                Explore Full Report
              </Link>
              <Link to='/schedule-consultation'
                className='w-full border-2 border-indigo-500 text-indigo-400 hover:bg-indigo-500 hover:text-white font-bold py-4 px-6 rounded-xl transition-all duration-300 text-center block'
              >
                Schedule AI Strategy Consultation
              </Link>
            </div>

            <div className='text-center mt-6'>
              <p className='text-sm text-gray-400'>
                📊 50+ industry reports • Updated monthly • Free access
              </p>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className='bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10'>
          <div className='text-center mb-6'>
            <h3 className='text-2xl font-bold text-white mb-2'>
              Trusted by Industry Leaders
            </h3>
            <p className='text-gray-400'>
              Join 2,000+ executives who rely on our AI trend analysis
            </p>
          </div>

          <div className='grid md:grid-cols-3 gap-6'>
            {[
              {
                company: 'Fortune 500 CTO',
                result: 'Saved $50M in R&D',
                testimonial: "Your trend analysis helped us pivot our AI strategy and avoid costly mistakes"
              },
              {
                company: 'AI Startup CEO',
                result: 'Raised $10M Series B',
                testimonial: 'The insights from your reports were crucial in our fundraising presentation'
              },
              {
                company: 'Enterprise AI Director',
                result: '300% ROI increase',
                testimonial: 'Following your recommendations led to a complete transformation of our AI capabilities'
              }
            ].map((testimonial, index) => (
              <div key={index} className='text-center p-6 bg-white/5 rounded-xl border border-white/10'>
                <div className='text-yellow-400 text-2xl mb-2'>★★★★★</div>
                <p className='text-gray-300 mb-4 italic'>
                  "{testimonial.testimonial}"
                </p>
                <div className='text-indigo-400 font-semibold'>
                  {testimonial.company}
                </div>
                <div className='text-indigo-400 text-sm font-bold'>
                  {testimonial.result}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AITrendsInsightsBanner2026;