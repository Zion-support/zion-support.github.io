import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Automation Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">Analyze processes</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Design
                </h3>
                <p className="text-gray - 300 text-sm">Design automation</p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Implement
                </h3>
                <p className="text-gray - 300 text-sm">
                  Implement automation
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Monitor
                </h3>
                <p className="text-gray - 300 text-sm">
                  Monitor performance
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Optimize
                </h3>
                <p className="text-gray - 300 text-sm">
                  Optimize automation
                </p>
              </div>
            </div>
          </div>

          {/* Automation Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Automation Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Process AutomationWorkflow Automation',
                'Task AutomationData Automation',
                'Testing AutomationDeployment Automation',
                'Monitoring AutomationMaintenance Automation'
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
              Automation Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Manufacturing
                </h3>
                <p className="text-gray -300">Manufacturing automation</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Business Operations
                </h3>
                <p className="text-gray -300">Business process automation</p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  IT Operations
                </h3>
                <p className="text-gray -300">IT process automation</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - indigo - 600 to - purple - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Automation?
            </h2>
            <p className="text-xl text-indigo - 100 mb-8 max - w-2xl mx -auto">
              Transform your operations with AI that continuously automates and
              optimizes
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-indigo - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Start Automating
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-indigo - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
