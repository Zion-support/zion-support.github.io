import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Integration Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Discover
                </h3>
                <p className="text-gray - 300 text-sm">Discover systems</p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Connect
                </h3>
                <p className="text-gray - 300 text-sm">Connect systems</p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Unify
                </h3>
                <p className="text-gray - 300 text-sm">Unify data</p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Test
                </h3>
                <p className="text-gray - 300 text-sm">Test integration</p>
              </div>

              <div className="text-center">
                <div className="bg-teal - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Deploy
                </h3>
                <p className="text-gray - 300 text-sm">
                  Deploy integration
                </p>
              </div>
            </div>
          </div>

          {/* Integration Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Integration Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['API IntegrationDatabase Integration',
                'Cloud IntegrationSystem Integration',
                'Data IntegrationWorkflow Integration',
                'Platform IntegrationService Integration'
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
              Integration Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Enterprise Systems
                </h3>
                <p className="text-gray -300">Enterprise integration</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Cloud Platforms
                </h3>
                <p className="text-gray -300">Cloud integration</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Data Centers
                </h3>
                <p className="text-gray -300">Data integration</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - teal - 600 to - cyan - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Integration?
            </h2>
            <p className="text-xl text-teal - 100 mb-8 max - w-2xl mx -auto">
              Transform your system connectivity with AI that continuously
              creates seamless integrations
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-teal - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Integrating
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-teal - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
