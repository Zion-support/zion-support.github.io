import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Development Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Requirements
                </h3>
                <p className="text-gray - 300 text-sm">
                  Analyze project requirements
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Design
                </h3>
                <p className="text-gray - 300 text-sm">
                  Create software architecture
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Development
                </h3>
                <p className="text-gray - 300 text-sm">
                  Write and generate code
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Testing
                </h3>
                <p className="text-gray - 300 text-sm">
                  Debug and test code
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Deployment
                </h3>
                <p className="text-gray - 300 text-sm">
                  Deploy and maintain software
                </p>
              </div>
            </div>
          </div>

          {/* Programming Languages */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Programming Languages
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Python',
                'JavaScript',
                'Java',
                'C++',
                'C#',
                'Go',
                'Rust',
                'TypeScript',
              ].map (language => (<div
                  key={language}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{language}</span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Development Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Web Development
                </h3>
                <p className="text-gray -300">
                  Frontend and backend applications
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Mobile Apps
                </h3>
                <p className="text-gray -300">iOS and Android development</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Enterprise Software
                </h3>
                <p className="text-gray -300">
                  Business applications and systems
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - emerald - 600 to - green - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Development?
            </h2>
            <p className="text-xl text-emerald - 100 mb-8 max - w-2xl mx -auto">
              Accelerate your software development with AI that never stops
              coding
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-emerald - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Coding
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-emerald - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
