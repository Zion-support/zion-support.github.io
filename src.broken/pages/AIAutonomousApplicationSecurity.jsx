import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap-8 mb-16">
            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-green - 400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Application Security Intelligence
              </h3>
              <p className="text-gray -300">
                AI trained on application security datasets
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-emerald - 400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Autonomous Operation
              </h3>
              <p className="text-gray -300">
                AI that secures applications independently
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-teal - 400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Continuous Application Security
              </h3>
              <p className="text-gray -300">
                24 / 7 application security operations
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-cyan - 400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Deep Analysis
              </h3>
              <p className="text-gray -300">
                Comprehensive application security insights
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-blue - 400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Proactive Application Security
              </h3>
              <p className="text-gray -300">
                Prevent application security issues
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-indigo - 400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Adaptive Application Security
              </h3>
              <p className="text-gray -300">Learns new vulnerabilities</p>
            </div>
          </div>

          {/* Application Security Process */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Application Security Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Scan
                </h3>
                <p className="text-gray - 300 text-sm">Scan applications</p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Detect
                </h3>
                <p className="text-gray - 300 text-sm">
                  Detect vulnerabilities
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze threats</p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Protect
                </h3>
                <p className="text-gray - 300 text-sm">
                  Protect applications
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitor
                </h3>
                <p className="text-gray - 300 text-sm">Monitor security</p>
              </div>
            </div>
          </div>

          {/* Application Security Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Application Security Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Web Application SecurityMobile Application Security',
                'API SecurityDesktop Application Security',
                'Cloud Application SecurityIoT Application Security',
                'Microservice SecurityServerless Security'
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
              Application Security Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Web Applications
                </h3>
                <p className="text-gray -300">Web application security</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Mobile Apps
                </h3>
                <p className="text-gray -300">Mobile application security</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Enterprise Software
                </h3>
                <p className="text-gray -300">
                  Enterprise application security
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - green - 600 to - emerald - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Application Security?
            </h2>
            <p className="text-xl text-green - 100 mb-8 max - w-2xl mx -auto">
              Transform your application security with AI that continuously
              secures and protects software
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-green - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Securing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-green - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
