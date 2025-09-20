import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Design Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Research
                </h3>
                <p className="text-gray - 300 text-sm">
                  Research requirements
                </p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Ideate
                </h3>
                <p className="text-gray - 300 text-sm">Generate concepts</p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Design
                </h3>
                <p className="text-gray - 300 text-sm">Create designs</p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Refine
                </h3>
                <p className="text-gray - 300 text-sm">Refine designs</p>
              </div>

              <div className="text-center">
                <div className="bg-emerald - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Deliver
                </h3>
                <p className="text-gray - 300 text-sm">Deliver designs</p>
              </div>
            </div>
          </div>

          {/* Design Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Design Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Graphic DesignWeb Design',
                'UI / UX DesignProduct Design',
                'Logo DesignBrand Design',
                'Print DesignDigital Design'
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
              Design Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Marketing & Branding
                </h3>
                <p className="text-gray -300">Brand and marketing design</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Web Development
                </h3>
                <p className="text-gray -300">Website and app design</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Product Development
                </h3>
                <p className="text-gray -300">
                  Product and packaging design
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - emerald - 600 to - green - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Design?
            </h2>
            <p className="text-xl text-emerald - 100 mb-8 max - w-2xl mx -auto">
              Transform your design process with AI that continuously creates
              visual solutions
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-emerald - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Designing
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-emerald - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
