import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Analytics Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Collect
                </h3>
                <p className="text-gray - 300 text-sm">
                  Gather data from sources
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Process
                </h3>
                <p className="text-gray - 300 text-sm">
                  Clean and prepare data
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">
                  AI - powered data analysis
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Insights
                </h3>
                <p className="text-gray - 300 text-sm">
                  Generate business insights
                </p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Optimize
                </h3>
                <p className="text-gray - 300 text-sm">
                  Improve analysis models
                </p>
              </div>
            </div>
          </div>

          {/* Analytics Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Analytics Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Business IntelligencePredictive Analytics',
                'Descriptive AnalyticsPrescriptive Analytics',
                'Real - time AnalyticsBig Data Analytics',
                'Customer AnalyticsPerformance Analytics'
              ].map (type => (<div
                  key={type}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{type}</span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Analytics Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Business Operations
                </h3>
                <p className="text-gray -300">
                  Operational efficiency analysis
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Customer Insights
                </h3>
                <p className="text-gray -300">Customer behavior analysis</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Financial Analysis
                </h3>
                <p className="text-gray -300">
                  Financial performance insights
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - teal - 600 to - cyan - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Analytics?
            </h2>
            <p className="text-xl text-teal - 100 mb-8 max - w-2xl mx -auto">
              Transform your data into insights with AI that never stops
              analyzing
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-teal - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Analyzing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-teal - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
