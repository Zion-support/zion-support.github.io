import { Helmet } from 'react - helmet -async';

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              AI Marketing Process
            </h2>
            <div className="grid md:grid - cols - 4 gap-8">
              <div className="text-center">
                <div className="bg-orange - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Data Collection
                </h3>
                <p className="text-gray -300">Customer data analysis</p>
              </div>

              <div className="text-center">
                <div className="bg-orange - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  AI Strategy
                </h3>
                <p className="text-gray -300">
                  Intelligent campaign planning
                </p>
              </div>

              <div className="text-center">
                <div className="bg-orange - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Execution
                </h3>
                <p className="text-gray -300">Automated campaign launch</p>
              </div>

              <div className="text-center">
                <div className="bg-orange - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Optimization
                </h3>
                <p className="text-gray -300">Continuous improvement</p>
              </div>
            </div>
          </div>

          {/* Marketing Channels */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Marketing Channels
            </h2>
            <div className="grid md:grid - cols - 4 gap-6">
              {['Email Marketing',
                'Social Media',
                'Content Marketing',
                'PPC Advertising',
                'SEO / SEM',
                'Influencer Marketing',
                'Video Marketing',
                'Mobile Marketing',
              ].map (channel => (<div
                  key={channel}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{channel}</span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Marketing Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  E - commerce
                </h3>
                <p className="text-gray -300">Product promotion and sales</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  B2B Marketing
                </h3>
                <p className="text-gray -300">
                  Lead generation and nurturing
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Brand Awareness
                </h3>
                <p className="text-gray -300">
                  Multi - channel brand building
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - orange - 600 to - red - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI Marketing?
            </h2>
            <p className="text-xl text-orange - 100 mb-8 max - w-2xl mx -auto">
              Transform your marketing campaigns with AI that never sleeps and
              always optimizes for maximum ROI
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-white text-orange - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-orange - 600 transition -colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) ;
};
