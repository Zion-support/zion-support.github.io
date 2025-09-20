import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Prediction Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Collect
                </h3>
                <p className="text-gray - 300 text-sm">Collect data</p>
              </div>

              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze patterns</p>
              </div>

              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Predict
                </h3>
                <p className="text-gray - 300 text-sm">
                  Generate predictions
                </p>
              </div>

              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Validate
                </h3>
                <p className="text-gray - 300 text-sm">
                  Validate predictions
                </p>
              </div>

              <div className="text-center">
                <div className="bg-violet - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Learn
                </h3>
                <p className="text-gray - 300 text-sm">
                  Learn from results
                </p>
              </div>
            </div>
          </div>

          {/* Prediction Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Prediction Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Trend Prediction',
                'Outcome Prediction',
                'Risk Prediction',
                'Demand Prediction',
                'Performance Prediction',
                'Failure Prediction',
                'Market Prediction',
                'Behavior Prediction',
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
              Prediction Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Business Intelligence
                </h3>
                <p className="text-gray -300">Market and trend prediction</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Risk Management
                </h3>
                <p className="text-gray -300">Risk and failure prediction</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Performance Optimization
                </h3>
                <p className="text-gray -300">Performance prediction</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - violet - 600 to - purple - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Prediction?
            </h2>
            <p className="text-xl text-violet - 100 mb-8 max - w-2xl mx -auto">
              Transform your decision - making with AI that continuously
              predicts the future
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-violet - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Predicting
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-violet - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
