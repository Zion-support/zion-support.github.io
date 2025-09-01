import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Forensics Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Identify
                </h3>
                <p className="text-gray - 300 text-sm">Identify incident</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Collect
                </h3>
                <p className="text-gray - 300 text-sm">Collect evidence</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze evidence</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Investigate
                </h3>
                <p className="text-gray - 300 text-sm">
                  Investigate incident
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Report
                </h3>
                <p className="text-gray - 300 text-sm">Generate report</p>
              </div>
            </div>
          </div>

          {/* Forensics Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Forensics Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Digital Forensics',
                'Computer Forensics',
                'Network Forensics',
                'Mobile Forensics',
                'Memory Forensics',
                'File Forensics',
                'Database Forensics',
                'Cloud Forensics',
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
              Forensics Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Cybersecurity
                </h3>
                <p className="text-gray -300">Security forensics</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Law Enforcement
                </h3>
                <p className="text-gray -300">Criminal forensics</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Corporate Investigations
                </h3>
                <p className="text-gray -300">Corporate forensics</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - indigo - 600 to - blue - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Forensics?
            </h2>
            <p className="text-xl text-indigo - 100 mb-8 max - w-2xl mx -auto">
              Transform your investigations with AI that continuously analyzes
              and investigates incidents
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-indigo - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Investigating
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-indigo - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
