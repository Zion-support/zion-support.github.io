import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              AI Finance Process
            </h2>
            <div className="grid md:grid - cols - 4 gap-8">
              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Data Ingestion
                </h3>
                <p className="text-gray -300">Market data collection</p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  AI Analysis
                </h3>
                <p className="text-gray -300">
                  Intelligent pattern recognition
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Strategy Execution
                </h3>
                <p className="text-gray -300">Automated trade execution</p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Performance Monitoring
                </h3>
                <p className="text-gray -300">Continuous optimization</p>
              </div>
            </div>
          </div>

          {/* Financial Services */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Financial Services
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Algorithmic TradingCredit Scoring',
                'Insurance AnalyticsWealth Management',
                'Market ResearchTax Optimization',
                'Financial PlanningRisk Assessment'
              ].map (service => (<div
                  key={service}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{service}</span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Finance Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Investment Banks
                </h3>
                <p className="text-gray -300">
                  Automated trading and analysis
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Hedge Funds
                </h3>
                <p className="text-gray -300">
                  Advanced portfolio management
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Personal Finance
                </h3>
                <p className="text-gray -300">
                  Individual wealth optimization
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - emerald - 600 to - teal - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI Finance?
            </h2>
            <p className="text-xl text-emerald - 100 mb-8 max - w-2xl mx -auto">
              Transform your financial operations with AI that never sleeps and
              always optimizes for maximum returns
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-emerald - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-emerald - 600 transition -colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
