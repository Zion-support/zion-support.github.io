import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Translation Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Detect
                </h3>
                <p className="text-gray - 300 text-sm">Detect language</p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze content</p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Translate
                </h3>
                <p className="text-gray - 300 text-sm">
                  Generate translation
                </p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Validate
                </h3>
                <p className="text-gray - 300 text-sm">Validate accuracy</p>
              </div>

              <div className="text-center">
                <div className="bg-blue - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Deliver
                </h3>
                <p className="text-gray - 300 text-sm">
                  Deliver translation
                </p>
              </div>
            </div>
          </div>

          {/* Translation Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Translation Solutions
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Text Translation',
                'Document Translation',
                'Website Translation',
                'App Translation',
                'Video Translation',
                'Audio Translation',
                'Real - time Translation',
                'Batch Translation',
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
              Translation Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Global Business
                </h3>
                <p className="text-gray -300">
                  Business communication translation
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Content Localization
                </h3>
                <p className="text-gray -300">
                  Content and media translation
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Customer Support
                </h3>
                <p className="text-gray -300">Multi - language support</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - blue - 600 to - cyan - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Translation?
            </h2>
            <p className="text-xl text-blue - 100 mb-8 max - w-2xl mx -auto">
              Transform your global communication with AI that continuously
              translates content
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-blue - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Translating
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-blue - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
