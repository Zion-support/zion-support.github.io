import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="grid md:grid - cols - 2 lg:grid - cols - 3 gap-8 mb-16">
            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-orange - 400 text-4xl mb-4">🧠</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Threat Intelligence
              </h3>
              <p className="text-gray -300">AI trained on threat datasets</p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-red - 400 text-4xl mb-4">🤖</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Autonomous Operation
              </h3>
              <p className="text-gray -300">
                AI that monitors threats independently
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-pink - 400 text-4xl mb-4">📈</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Continuous Threat Intelligence
              </h3>
              <p className="text-gray -300">
                24 / 7 threat intelligence operations
              </p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-rose - 400 text-4xl mb-4">🔍</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Deep Analysis
              </h3>
              <p className="text-gray -300">Comprehensive threat insights</p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-fuchsia - 400 text-4xl mb-4">🛡️</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Proactive Threat Intelligence
              </h3>
              <p className="text-gray -300">Prevent threat issues</p>
            </div>

            <div className="bg-white / 10 backdrop - blur - lg rounded-xl p - 6 border border-white / 20">
              <div className="text-purple - 400 text-4xl mb-4">⚡</div>
              <h3 className="text-xl font - semibold text-white mb-3">
                Adaptive Threat Intelligence
              </h3>
              <p className="text-gray -300">Learns new threats</p>
            </div>
          </div>

          {/* Threat Intelligence Process */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Threat Intelligence Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-orange - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitor
                </h3>
                <p className="text-gray - 300 text-sm">Monitor threats</p>
              </div>

              <div className="text-center">
                <div className="bg-orange - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze threats</p>
              </div>

              <div className="text-center">
                <div className="bg-orange - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Assess
                </h3>
                <p className="text-gray - 300 text-sm">Assess risks</p>
              </div>

              <div className="text-center">
                <div className="bg-orange - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Report
                </h3>
                <p className="text-gray - 300 text-sm">Generate report</p>
              </div>

              <div className="text-center">
                <div className="bg-orange - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Act
                </h3>
                <p className="text-gray - 300 text-sm">Take action</p>
              </div>
            </div>
          </div>

          {/* Threat Intelligence Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Threat Intelligence Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Cyber Threat Intelligence',
                'Security Threat Intelligence',
                'Network Threat Intelligence',
                'Malware Threat Intelligence',
                'APT Threat Intelligence',
                'Vulnerability Intelligence',
                'Social Engineering Intelligence',
                'Insider Threat Intelligence',
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
              Threat Intelligence Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Cybersecurity
                </h3>
                <p className="text-gray -300">
                  Security threat intelligence
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Government
                </h3>
                <p className="text-gray -300">
                  Government threat intelligence
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Enterprise
                </h3>
                <p className="text-gray -300">
                  Enterprise threat intelligence
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - orange - 600 to - red - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Threat Intelligence?
            </h2>
            <p className="text-xl text-orange - 100 mb-8 max - w-2xl mx -auto">
              Transform your threat monitoring with AI that continuously
              analyzes and provides intelligence insights
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-orange - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Monitoring
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-orange - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
