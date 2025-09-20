import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Innovation Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-cyan - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Research
                </h3>
                <p className="text-gray - 300 text-sm">Research problems</p>
              </div>

              <div className="text-center">
                <div className="bg-cyan - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Ideate
                </h3>
                <p className="text-gray - 300 text-sm">Generate ideas</p>
              </div>

              <div className="text-center">
                <div className="bg-cyan - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Prototype
                </h3>
                <p className="text-gray - 300 text-sm">Create prototypes</p>
              </div>

              <div className="text-center">
                <div className="bg-cyan - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Test
                </h3>
                <p className="text-gray - 300 text-sm">Test solutions</p>
              </div>

              <div className="text-center">
                <div className="bg-cyan - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Implement
                </h3>
                <p className="text-gray - 300 text-sm">
                  Implement solutions
                </p>
              </div>
            </div>
          </div>

          {/* Innovation Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Innovation Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Product Innovation',
                'Process Innovation',
                'Technology Innovation',
                'Business Innovation',
                'Service Innovation',
                'Model Innovation',
                'Platform Innovation',
                'Ecosystem Innovation',
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
              Innovation Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Research & Development
                </h3>
                <p className="text-gray -300">R & D innovation</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Product Development
                </h3>
                <p className="text-gray -300">Product innovation</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Business Transformation
                </h3>
                <p className="text-gray -300">Business model innovation</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - cyan - 600 to - blue - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Innovation?
            </h2>
            <p className="text-xl text-cyan - 100 mb-8 max - w-2xl mx -auto">
              Transform your innovation process with AI that continuously
              generates breakthroughs
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-cyan - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Innovating
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-cyan - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
