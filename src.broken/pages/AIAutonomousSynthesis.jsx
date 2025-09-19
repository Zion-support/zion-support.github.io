import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Synthesis Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Collect
                </h3>
                <p className="text-gray - 300 text-sm">
                  Collect information
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze data</p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Synthesize
                </h3>
                <p className="text-gray - 300 text-sm">
                  Combine information
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Create
                </h3>
                <p className="text-gray - 300 text-sm">Create content</p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Deliver
                </h3>
                <p className="text-gray - 300 text-sm">Deliver insights</p>
              </div>
            </div>
          </div>

          {/* Synthesis Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Synthesis Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Content Synthesis',
                'Data Synthesis',
                'Knowledge Synthesis',
                'Research Synthesis',
                'Report Synthesis',
                'Analysis Synthesis',
                'Insight Synthesis',
                'Summary Synthesis',
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
              Synthesis Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Content Creation
                </h3>
                <p className="text-gray -300">
                  Content and document synthesis
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Research & Analysis
                </h3>
                <p className="text-gray -300">Research and data synthesis</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Knowledge Management
                </h3>
                <p className="text-gray -300">
                  Knowledge and insight synthesis
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - amber - 600 to - yellow-600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Synthesis?
            </h2>
            <p className="text-xl text-amber - 100 mb-8 max - w-2xl mx -auto">
              Transform your content creation with AI that continuously
              synthesizes information
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-amber - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Synthesizing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-amber - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
