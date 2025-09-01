import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Risk Management Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Identify
                </h3>
                <p className="text-gray - 300 text-sm">Identify risks</p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Assess
                </h3>
                <p className="text-gray - 300 text-sm">Assess threats</p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Mitigate
                </h3>
                <p className="text-gray - 300 text-sm">Mitigate risks</p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitor
                </h3>
                <p className="text-gray - 300 text-sm">Monitor risks</p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Optimize
                </h3>
                <p className="text-gray - 300 text-sm">
                  Optimize protection
                </p>
              </div>
            </div>
          </div>

          {/* Risk Management Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Risk Management Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Security Risk Management',
                'Financial Risk Management',
                'Operational Risk Management',
                'Strategic Risk Management',
                'Compliance Risk Management',
                'Technology Risk Management',
                'Environmental Risk Management',
                'Reputational Risk Management',
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
              Risk Management Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Financial Services
                </h3>
                <p className="text-gray -300">Financial risk management</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Cybersecurity
                </h3>
                <p className="text-gray -300">Security risk management</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Enterprise
                </h3>
                <p className="text-gray -300">Enterprise risk management</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - red - 600 to - orange - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Risk Management?
            </h2>
            <p className="text-xl text-red - 100 mb-8 max - w-2xl mx -auto">
              Transform your risk management with AI that continuously
              identifies and mitigates threats
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-red - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Managing Risks
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-red - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
