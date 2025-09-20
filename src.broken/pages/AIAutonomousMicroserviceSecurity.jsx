import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap-8 mb-16">
            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-fuchsia - 400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Microservice Security Intelligence
              </h3>
              <p className="text-gray -300">
                AI trained on microservice security datasets
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-purple - 400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Autonomous Operation
              </h3>
              <p className="text-gray -300">
                AI that secures microservices independently
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-violet - 400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Continuous Microservice Security
              </h3>
              <p className="text-gray -300">
                24 / 7 microservice security operations
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-indigo - 400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Deep Analysis
              </h3>
              <p className="text-gray -300">
                Comprehensive microservice security insights
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-blue - 400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Proactive Microservice Security
              </h3>
              <p className="text-gray -300">
                Prevent microservice security issues
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-cyan - 400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Adaptive Microservice Security
              </h3>
              <p className="text-gray -300">Learns new threats</p>
            </div>
          </div>

          {/* Microservice Security Process */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Microservice Security Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-fuchsia - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitor
                </h3>
                <p className="text-gray - 300 text-sm">
                  Monitor microservices
                </p>
              </div>

              <div className="text-center">
                <div className="bg-fuchsia - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Detect
                </h3>
                <p className="text-gray - 300 text-sm">Detect threats</p>
              </div>

              <div className="text-center">
                <div className="bg-fuchsia - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze threats</p>
              </div>

              <div className="text-center">
                <div className="bg-fuchsia - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Protect
                </h3>
                <p className="text-gray - 300 text-sm">
                  Protect microservices
                </p>
              </div>

              <div className="text-center">
                <div className="bg-fuchsia - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Respond
                </h3>
                <p className="text-gray - 300 text-sm">
                  Respond to threats
                </p>
              </div>
            </div>
          </div>

          {/* Microservice Security Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Microservice Security Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Service SecurityAPI Security',
                'Communication SecurityAuthentication Security',
                'Authorization SecurityData Security',
                'Network SecurityOrchestration Security'
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
              Microservice Security Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Cloud Native
                </h3>
                <p className="text-gray -300">
                  Cloud native microservice security
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Enterprise
                </h3>
                <p className="text-gray -300">
                  Enterprise microservice security
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  E - commerce
                </h3>
                <p className="text-gray -300">
                  E - commerce microservice security
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - fuchsia - 600 to - purple - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Microservice Security?
            </h2>
            <p className="text-xl text-fuchsia - 100 mb-8 max - w-2xl mx -auto">
              Transform your microservice security with AI that continuously
              secures and protects microservice infrastructure
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-fuchsia - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Securing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-fuchsia - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
