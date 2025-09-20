import { Helmet } from 'react - helmet -async',

export default function Page() {
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Autonomous Robotics Process
            </h2>
            <div className="grid md:grid - cols - 5 gap-6">
              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  1
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Perception
                </h3>
                <p className="text-gray - 300 text-sm">
                  Sense environment and objects
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  2
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Planning
                </h3>
                <p className="text-gray - 300 text-sm">
                  AI decision making and path planning
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  3
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Execution
                </h3>
                <p className="text-gray - 300 text-sm">
                  Perform planned actions
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  4
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Learning
                </h3>
                <p className="text-gray - 300 text-sm">
                  Improve from experience
                </p>
              </div>

              <div className="text-center">
                <div className="bg-red - 600 w-16 h-16 rounded-full flex items - center justify - center text-2xl font - bold text-white mx - auto mb-4">
                  5
                </div>
                <h3 className="text-lg font - semibold text-white mb-2">
                  Optimization
                </h3>
                <p className="text-gray - 300 text-sm">
                  Continuous improvement
                </p>
              </div>
            </div>
          </div>

          {/* Robotics Applications */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Robotics Applications
            </h2>
            <div className="grid md: grid - cols - 4 gap-6">
              {['ManufacturingHealthcare',
                'AgricultureLogistics',
                'ConstructionService Robots',
                'ResearchEntertainment'
              ].map (application => (<div
                  key={application}
                  className="bg-white / 5 rounded-lg p - 4 text-center border border-white / 10"
                >
                  <span className="text-white font -medium">
                    {application}
                  </span>
                </div>) ) }
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-16">
            <h2 className="text-4xl font - bold text-white text-center mb-12">
              Industry Solutions
            </h2>
            <div className="grid md:grid - cols - 3 gap-8">
              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Industrial Automation
                </h3>
                <p className="text-gray -300">
                  Manufacturing and assembly automation
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Medical Robotics
                </h3>
                <p className="text-gray -300">
                  Surgical assistance and patient care
                </p>
              </div>

              <div className="bg-white / 5 rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">
                  Autonomous Vehicles
                </h3>
                <p className="text-gray -300">
                  Self - driving cars and drones
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient - to - r from - red - 600 to - orange - 600 rounded-2xl p -12">
            <h2 className="text-3xl font - bold text-white mb-6">
              Ready for Autonomous Robotics?
            </h2>
            <p className="text-xl text-red - 100 mb-8 max - w-2xl mx -auto">
              Transform your operations with intelligent robots that work 24 / 7
            </p>
            <div className="flex flex - col sm: flex - row gap-4 justify -center">
              <button className="bg-white text-red - 600 px-8 py-3 rounded-lg font - semibold hover:bg-gray - 100 transition -colors">
                Get Started
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-lg font - semibold hover:bg-white hover:text-red - 600 transition -colors">
                Schedule Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </>) 
},
