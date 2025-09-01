import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Monitoring Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Collect
                </h3>
                <p className="text-gray - 300 text-sm">Collect data</p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze data</p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Detect
                </h3>
                <p className="text-gray - 300 text-sm">Detect issues</p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Alert
                </h3>
                <p className="text-gray - 300 text-sm">Alert users</p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Respond
                </h3>
                <p className="text-gray - 300 text-sm">Respond to issues</p>
              </div>
            </div>
          </div>

          {/* Monitoring Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Monitoring Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['System Monitoring',
                'Performance Monitoring',
                'Network Monitoring',
                'Application Monitoring',
                'Infrastructure Monitoring',
                'Security Monitoring',
                'Availability Monitoring',
                'Log Monitoring',
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
              Monitoring Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Enterprise Systems
                </h3>
                <p className="text-gray -300">Enterprise monitoring</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Cloud Infrastructure
                </h3>
                <p className="text-gray -300">Cloud monitoring</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Web Applications
                </h3>
                <p className="text-gray -300">Web app monitoring</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - teal - 600 to - cyan - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Monitoring?
            </h2>
            <p className="text-xl text-teal - 100 mb-8 max - w-2xl mx -auto">
              Transform your monitoring with AI that never stops watching
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-teal - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Monitoring
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-teal - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
