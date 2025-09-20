import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Compliance Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitor
                </h3>
                <p className="text-gray - 300 text-sm">
                  Monitor regulations
                </p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Assess
                </h3>
                <p className="text-gray - 300 text-sm">Assess compliance</p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Ensure
                </h3>
                <p className="text-gray - 300 text-sm">Ensure adherence</p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Report
                </h3>
                <p className="text-gray - 300 text-sm">Report status</p>
              </div>

              <div className="text-center">
                <div className="bg-green - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Maintain
                </h3>
                <p className="text-gray - 300 text-sm">
                  Maintain compliance
                </p>
              </div>
            </div>
          </div>

          {/* Compliance Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Compliance Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Regulatory ComplianceData Compliance',
                'Security ComplianceFinancial Compliance',
                'Industry ComplianceQuality Compliance',
                'Environmental ComplianceEthics Compliance'
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
              Compliance Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Financial Services
                </h3>
                <p className="text-gray -300">Financial compliance</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Healthcare
                </h3>
                <p className="text-gray -300">Healthcare compliance</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Data Protection
                </h3>
                <p className="text-gray -300">Data compliance</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - green - 600 to - emerald - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Compliance?
            </h2>
            <p className="text-xl text-green - 100 mb-8 max - w-2xl mx -auto">
              Transform your compliance with AI that continuously monitors and
              ensures adherence
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-green - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Complying
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-green - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
