import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Cloud Security Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitor
                </h3>
                <p className="text-gray - 300 text-sm">Monitor cloud</p>
              </div>

              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Detect
                </h3>
                <p className="text-gray - 300 text-sm">Detect threats</p>
              </div>

              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze threats</p>
              </div>

              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Protect
                </h3>
                <p className="text-gray - 300 text-sm">Protect cloud</p>
              </div>

              <div className="text-center">
                <div className="bg-sky - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
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

          {/* Cloud Security Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Cloud Security Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['AWS Security',
                'Azure Security',
                'Google Cloud Security',
                'Multi - Cloud Security',
                'Cloud Access Security',
                'Cloud Data Security',
                'Cloud Network Security',
                'Cloud Application Security',
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
              Cloud Security Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Public Cloud
                </h3>
                <p className="text-gray -300">Public cloud security</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Private Cloud
                </h3>
                <p className="text-gray -300">Private cloud security</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Hybrid Cloud
                </h3>
                <p className="text-gray -300">Hybrid cloud security</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - sky - 600 to - blue - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Cloud Security?
            </h2>
            <p className="text-xl text-sky - 100 mb-8 max - w-2xl mx -auto">
              Transform your cloud security with AI that continuously secures
              and protects infrastructure
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-sky - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Securing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-sky - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
