import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Writing Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Research
                </h3>
                <p className="text-gray - 300 text-sm">
                  Gather relevant information
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Outline
                </h3>
                <p className="text-gray - 300 text-sm">
                  Create content structure
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Write
                </h3>
                <p className="text-gray - 300 text-sm">
                  Generate compelling content
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Edit
                </h3>
                <p className="text-gray - 300 text-sm">
                  Refine and optimize content
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Publish
                </h3>
                <p className="text-gray - 300 text-sm">
                  Deliver final content
                </p>
              </div>
            </div>
          </div>

          {/* Content Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Content Types
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Blog PostsArticles',
                'ReportsMarketing Copy',
                'Social MediaProduct Descriptions',
                'Technical DocumentationCreative Stories'
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
              Writing Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Content Marketing
                </h3>
                <p className="text-gray -300">Blog and article creation</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Business Writing
                </h3>
                <p className="text-gray -300">Reports and documentation</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Creative Writing
                </h3>
                <p className="text-gray -300">
                  Stories and creative content
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - amber - 600 to - orange - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Writing?
            </h2>
            <p className="text-xl text-amber - 100 mb-8 max - w-2xl mx -auto">
              Transform your content creation with AI that never stops writing
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-amber - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Writing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-amber - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
