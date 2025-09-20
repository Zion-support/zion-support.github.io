import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Workflow Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Analyze
                </h3>
                <p className="text-gray - 300 text-sm">
                  Understand workflow requirements
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Design
                </h3>
                <p className="text-gray - 300 text-sm">
                  Create optimal workflow paths
                </p>
              </div>

              <div className="text-center">
                <div className="bg-indigo - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Execute
                </h3>
                <p className="text-gray - 300 text-sm">
                  Run workflows automatically
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
                  Track performance and progress
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
                  Improve workflow efficiency
                </p>
              </div>
            </div>
          </div>

          {/* Workflow Types */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Workflow Solutions
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Business ProcessesCustomer Service',
                'HR WorkflowsFinance Processes',
                'Sales OperationsMarketing Campaigns',
                'Project ManagementQuality Assurance'
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
              Industry Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Manufacturing
                </h3>
                <p className="text-gray -300">
                  Production workflow automation
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Healthcare
                </h3>
                <p className="text-gray -300">
                  Patient care workflow optimization
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Financial Services
                </h3>
                <p className="text-gray -300">
                  Compliance and approval workflows
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - indigo - 600 to - purple - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for Autonomous Workflows?
            </h2>
            <p className="text-xl text-indigo - 100 mb-8 max - w-2xl mx -auto">
              Transform your business processes with AI that works 24 / 7 to
              maximize efficiency
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-indigo - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-indigo - 600 transition -colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
