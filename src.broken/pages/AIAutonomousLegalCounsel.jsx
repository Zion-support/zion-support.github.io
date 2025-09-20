import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Legal Consultation Process
            </h2>
            <div className="grid md:grid - cols - 4 gap-8">
              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Legal Question
                </h3>
                <p className="text-gray -300">
                  Describe your legal situation
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  AI Analysis
                </h3>
                <p className="text-gray -300">
                  AI processes legal information
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Legal Guidance
                </h3>
                <p className="text-gray -300">
                  Receive legal advice and options
                </p>
              </div>

              <div className="text-center">
                <div className="bg-amber - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-xl font - semibold text-white mb-3">
                  Next Steps
                </h3>
                <p className="text-gray -300">
                  Action plan and recommendations
                </p>
              </div>
            </div>
          </div>

          {/* Legal Areas */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Legal Practice Areas
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Business LawContract Law',
                'Employment LawReal Estate',
                'Family LawCriminal Law',
                'Intellectual PropertyTax Law'
              ].map (area => (<div
                  key={area}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{area}</span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Legal Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Business Legal
                </h3>
                <p className="text-gray -300">
                  Contract review and business formation
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Personal Legal
                </h3>
                <p className="text-gray -300">
                  Family law and personal matters
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Compliance
                </h3>
                <p className="text-gray -300">
                  Regulatory compliance and risk management
                </p>
              </div>
            </div>
          </div>

          {/* Disclaimer */}
          <div className="mb-16 text-center">
            <div className="bg-yellow-600 / 20 border border-yellow-600 / 40 rounded-xl p - 6 max - w-4xl mx -auto">
              <p className="text-yellow-200 text-lg">
                ⚠️ <strong > Important:</strong > This AI system provides legal
                information and guidance but is not a replacement for
                professional legal counsel.Always consult with qualified
                attorneys for serious legal matters.</p>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - amber - 600 to - orange - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI Legal Support?
            </h2>
            <p className="text-xl text-amber - 100 mb-8 max - w-2xl mx -auto">
              Get instant legal consultation and guidance whenever you need it
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-amber - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Consultation
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-amber - 600 transition -colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
