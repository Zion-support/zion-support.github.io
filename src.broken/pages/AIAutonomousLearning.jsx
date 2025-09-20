import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Learning Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-lime - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Observe
                </h3>
                <p className="text-gray - 300 text-sm">Observe data</p>
              </div>

              <div className="text-center">
                <div className="bg-lime - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Learn
                </h3>
                <p className="text-gray - 300 text-sm">Learn patterns</p>
              </div>

              <div className="text-center">
                <div className="bg-lime - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Adapt
                </h3>
                <p className="text-gray - 300 text-sm">Adapt behavior</p>
              </div>

              <div className="text-center">
                <div className="bg-lime - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Improve
                </h3>
                <p className="text-gray - 300 text-sm">
                  Improve performance
                </p>
              </div>

              <div className="text-center">
                <div className="bg-lime - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Evolve
                </h3>
                <p className="text-gray - 300 text-sm">
                  Evolve capabilities
                </p>
              </div>
            </div>
          </div>

          {/* Learning Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Learning Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Supervised LearningUnsupervised Learning',
                'Reinforcement LearningTransfer Learning',
                'Online LearningBatch Learning',
                'Incremental LearningMeta Learning'
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
              Learning Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Machine Learning
                </h3>
                <p className="text-gray -300">ML model training</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Data Analysis
                </h3>
                <p className="text-gray -300">Pattern recognition</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Predictive Modeling
                </h3>
                <p className="text-gray -300">Future predictions</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - lime - 600 to - green - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Learning?
            </h2>
            <p className="text-xl text-lime - 100 mb-8 max - w-2xl mx -auto">
              Transform your AI capabilities with systems that continuously
              learn and improve
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-lime - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Learning
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-lime - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
