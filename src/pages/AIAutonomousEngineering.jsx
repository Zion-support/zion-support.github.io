import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Engineering Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze problems</p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Design
                </h3>
                <p className="text-gray - 300 text-sm">Design solutions</p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Build
                </h3>
                <p className="text-gray - 300 text-sm">Build systems</p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Test
                </h3>
                <p className="text-gray - 300 text-sm">Test solutions</p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Deploy
                </h3>
                <p className="text-gray - 300 text-sm">Deploy solutions</p>
              </div>
            </div>
          </div>

          {/* Engineering Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Engineering Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Software Engineering',
                'Hardware Engineering',
                'Systems Engineering',
                'Mechanical Engineering',
                'Electrical Engineering',
                'Chemical Engineering',
                'Civil Engineering',
                'Biomedical Engineering',
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
              Engineering Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Product Development
                </h3>
                <p className="text-gray -300">Product engineering</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Infrastructure
                </h3>
                <p className="text-gray -300">Infrastructure engineering</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Research & Development
                </h3>
                <p className="text-gray -300">R & D engineering</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - red - 600 to - pink - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Engineering?
            </h2>
            <p className="text-xl text-red - 100 mb-8 max - w-2xl mx -auto">
              Transform your engineering process with AI that continuously
              creates technical solutions
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-red - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Engineering
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
