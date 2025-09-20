import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Assistant Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-pink - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Listen
                </h3>
                <p className="text-gray - 300 text-sm">
                  Understand your request
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pink - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Process
                </h3>
                <p className="text-gray - 300 text-sm">
                  AI analysis and planning
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pink - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Execute
                </h3>
                <p className="text-gray - 300 text-sm">
                  Perform requested tasks
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pink - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Report
                </h3>
                <p className="text-gray - 300 text-sm">
                  Provide results and updates
                </p>
              </div>

              <div className="text-center">
                <div className="bg-pink - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Learn
                </h3>
                <p className="text-gray - 300 text-sm">
                  Improve for next time
                </p>
              </div>
            </div>
          </div>

          {/* Assistant Tasks */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Assistant Capabilities
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['Email ManagementCalendar Scheduling',
                'Task OrganizationInformation Search',
                'Document CreationData Analysis',
                'CommunicationReminders'
              ].map (task => (<div
                  key={task}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">{task}</span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Assistant Applications
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Personal Use
                </h3>
                <p className="text-gray -300">
                  Daily life organization and assistance
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Business Support
                </h3>
                <p className="text-gray -300">
                  Professional productivity enhancement
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Customer Service
                </h3>
                <p className="text-gray -300">
                  24 / 7 customer support automation
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - pink - 600 to - rose - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for AI - Powered Assistance?
            </h2>
            <p className="text-xl text-pink - 100 mb-8 max - w-2xl mx -auto">
              Experience the future of personal assistance with AI that never
              stops helping
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-pink - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-pink - 600 transition -colors">
                View Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
