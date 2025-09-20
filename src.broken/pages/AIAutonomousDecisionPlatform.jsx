import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Decision Workflow
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Data Input
                </h3>
                <p className="text-gray - 300 text-sm">
                  Collect data from multiple sources
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analysis
                </h3>
                <p className="text-gray - 300 text-sm">
                  Process and analyze data
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Agent Coordination
                </h3>
                <p className="text-gray - 300 text-sm">
                  Coordinate AI agents
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Decision
                </h3>
                <p className="text-gray - 300 text-sm">
                  Generate optimal decision
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Execution
                </h3>
                <p className="text-gray - 300 text-sm">
                  Execute and monitor
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Platform Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Enterprise Operations
                </h3>
                <p className="text-gray -300">
                  Orchestrate decisions across business units
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Financial Services
                </h3>
                <p className="text-gray -300">
                  Risk assessment and investment decisions
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Healthcare
                </h3>
                <p className="text-gray -300">
                  Clinical decision support and diagnostics
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - blue - 600 to - indigo - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Build Your Decision Platform
            </h2>
            <p className="text-xl text-blue - 100 mb-8 max - w-2xl mx -auto">
              Start orchestrating intelligent decisions across your organization
              with our AI platform
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-blue - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-blue - 600 transition -colors">
                View Documentation
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
