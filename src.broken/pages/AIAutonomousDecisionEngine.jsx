import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Decision - Making Process
            </h2>
            <div className="grid md:grid - cols - 4 gap-8">
              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Data Input
                </h3>
                <p className="text-gray -300">
                  Collect and validate relevant information
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Analysis
                </h3>
                <p className="text-gray -300">
                  Process data and identify patterns
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Reasoning
                </h3>
                <p className="text-gray -300">
                  Apply logic and generate options
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Decision
                </h3>
                <p className="text-gray -300">
                  Select optimal action and execute
                </p>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Decision Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Financial Trading
                </h3>
                <p className="text-gray -300">
                  Automated trading decisions based on market analysis
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Supply Chain
                </h3>
                <p className="text-gray -300">
                  Inventory and logistics optimization decisions
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Customer Service
                </h3>
                <p className="text-gray -300">
                  Automated routing and issue resolution
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - emerald - 600 to - teal - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for Intelligent Decisions?
            </h2>
            <p className="text-xl text-emerald - 100 mb-8 max - w-2xl mx -auto">
              Transform your operations with AI that makes better decisions
              faster than humans
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
