import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Testing Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-purple - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Plan
                </h3>
                <p className="text-gray - 300 text-sm">Plan tests</p>
              </div>

              <div className="text-center">
                <div className="bg-purple - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Execute
                </h3>
                <p className="text-gray - 300 text-sm">Execute tests</p>
              </div>

              <div className="text-center">
                <div className="bg-purple - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitor
                </h3>
                <p className="text-gray - 300 text-sm">Monitor tests</p>
              </div>

              <div className="text-center">
                <div className="bg-purple - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze results</p>
              </div>

              <div className="text-center">
                <div className="bg-purple - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Report
                </h3>
                <p className="text-gray - 300 text-sm">Generate reports</p>
              </div>
            </div>
          </div>

          {/* Testing Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Testing Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Unit TestingIntegration Testing',
                'System TestingPerformance Testing',
                'Security TestingUser Acceptance Testing',
                'Regression TestingAutomated Testing'
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
              Testing Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Software Development
                </h3>
                <p className="text-gray -300">Software testing</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Web Applications
                </h3>
                <p className="text-gray -300">Web app testing</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Mobile Applications
                </h3>
                <p className="text-gray -300">Mobile app testing</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - purple - 600 to - pink - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Testing?
            </h2>
            <p className="text-xl text-purple - 100 mb-8 max - w-2xl mx -auto">
              Transform your testing with AI that never stops testing
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-purple - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Testing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-purple - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
