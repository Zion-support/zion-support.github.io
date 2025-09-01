import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap-8 mb-16">
            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-blue - 400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Network Security Intelligence
              </h3>
              <p className="text-gray -300">
                AI trained on network security datasets
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-cyan - 400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Autonomous Operation
              </h3>
              <p className="text-gray -300">
                AI that protects networks independently
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-teal - 400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Continuous Network Security
              </h3>
              <p className="text-gray -300">
                24 / 7 network security operations
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-green - 400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Deep Analysis
              </h3>
              <p className="text-gray -300">
                Comprehensive network security insights
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-emerald - 400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Proactive Network Security
              </h3>
              <p className="text-gray -300">
                Prevent network security issues
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-lime - 400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Adaptive Network Security
              </h3>
              <p className="text-gray -300">Learns new threats</p>
            </div>
          </div>

          {/* Network Security Process */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Network Security Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitor
                </h3>
                <p className="text-gray - 300 text-sm">Monitor networks</p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Detect
                </h3>
                <p className="text-gray - 300 text-sm">Detect threats</p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze threats</p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Protect
                </h3>
                <p className="text-gray - 300 text-sm">Protect networks</p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
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

          {/* Network Security Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Network Security Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Firewall Security',
                'Intrusion Detection',
                'Network Monitoring',
                'Traffic Analysis',
                'Access Control',
                'VPN Security',
                'Wireless Security',
                'Endpoint Security',
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
              Network Security Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Enterprise Networks
                </h3>
                <p className="text-gray -300">Enterprise network security</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Data Centers
                </h3>
                <p className="text-gray -300">
                  Data center network security
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Cloud Networks
                </h3>
                <p className="text-gray -300">Cloud network security</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - blue - 600 to - cyan - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Network Security?
            </h2>
            <p className="text-xl text-blue - 100 mb-8 max - w-2xl mx -auto">
              Transform your network security with AI that continuously monitors
              and protects infrastructure
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-blue - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Securing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-blue - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
