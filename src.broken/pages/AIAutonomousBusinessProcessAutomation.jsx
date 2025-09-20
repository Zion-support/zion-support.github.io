import { Link  } from 'react-router-dom',

export default function Page() {
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max - w-7xl mx -auto">
          <h2 className="text-4xl font - bold text-center mb-16 bg-gradient - to - r from - cyan - 400 to - blue - 400 bg-clip - text text-transparent">
            Advanced Technology Features
          </h2>

          <div className="grid grid - cols - 1 md:grid - cols - 2 gap-12">
            <div>
              <h3 className="text-3xl font - bold mb-8 text-cyan -400">
                AI & Machine Learning
              </h3>
              <div className="space - y-4">
                <div className="flex items - center space - x-3">
                  <div className="w-3 h-3 bg-cyan - 400 rounded-full"></div>
                  <span className="text-gray -300">
                    Process Mining & Discovery
                  </span>
                </div>
                <div className="flex items - center space - x-3">
                  <div className="w-3 h-3 bg-cyan - 400 rounded-full"></div>
                  <span className="text-gray -300">
                    Predictive Process Analytics
                  </span>
                </div>
                <div className="flex items - center space - x-3">
                  <div className="w-3 h-3 bg-cyan - 400 rounded-full"></div>
                  <span className="text-gray -300">
                    Intelligent Decision Making
                  </span>
                </div>
                <div className="flex items - center space - x-3">
                  <div className="w-3 h-3 bg-cyan - 400 rounded-full"></div>
                  <span className="text-gray -300">Continuous Learning</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-3xl font - bold mb-8 text-cyan -400">
                Automation Capabilities
              </h3>
              <div className="space - y-4">
                <div className="flex items - center space - x-3">
                  <div className="w-3 h-3 bg-cyan - 400 rounded-full"></div>
                  <span className="text-gray -300">RPA Integration</span>
                </div>
                <div className="flex items - center space - x-3">
                  <div className="w-3 h-3 bg-cyan - 400 rounded-full"></div>
                  <span className="text-gray -300">Workflow Automation</span>
                </div>
                <div className="flex items - center space - x-3">
                  <div className="w-3 h-3 bg-cyan - 400 rounded-full"></div>
                  <span className="text-gray -300">API Integration</span>
                </div>
                <div className="flex items - center space - x-3">
                  <div className="w-3 h-3 bg-cyan - 400 rounded-full"></div>
                  <span className="text-gray -300">
                    Real - time Monitoring
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray -800 / 20">
        <div className="max - w-7xl mx -auto">
          <h2 className="text-4xl font - bold text-center mb-16 bg-gradient - to - r from - cyan - 400 to - blue - 400 bg-clip - text text-transparent">
            Process Automation Pricing
          </h2>

          <div className="grid grid - cols - 1 md:grid - cols - 3 gap-8">
            <div className="bg-gray - 800 / 50 p - 8 rounded-2xl border border-gray - 600 hover:border-cyan - 400 / 50 transition - all duration -300">
              <h3 className="text-2xl font - bold mb-4 text-white">
                Basic Automation
              </h3>
              <div className="text-4xl font - bold mb-6 text-cyan -400">
                $1,999{' '}
                <span className="text-lg text-gray -400">/month</span>
              </div>
              <ul className="space - y-3 mb-8 text-gray -300">
                <li>✓ 5 Process Automations</li>
                <li>✓ Basic AI Features</li>
                <li>✓ Standard Analytics</li>
                <li>✓ Email Support</li>
                <li>✓ 3 User Licenses</li>
              </ul>
              <button className="w-full py-3 bg-gradient - to - r from - cyan - 500 to - blue - 500 text-white font - bold rounded-lg hover:from - cyan - 400 hover:to - blue - 400 transition - all duration -300">
                Get Started
              </button>
            </div>

            <div className="bg-gradient - to - br from - cyan - 500 / 20 to - blue - 500 / 20 p - 8 rounded-2xl border border-cyan -400 / 50 relative">
              <div className="absolute - top - 4 left - 1/2 transform - translate - x-1 / 2 bg-gradient - to - r from - cyan - 500 to - blue - 500 text-white px-6 py-2 rounded-full text-sm font -bold">
                Most Popular
              </div>
              <h3 className="text-2xl font - bold mb-4 text-white">
                Professional Automation
              </h3>
              <div className="text-4xl font - bold mb-6 text-cyan -400">
                $3,999{' '}
                <span className="text-lg text-gray -400">/month</span>
              </div>
              <ul className="space - y-3 mb-8 text-gray -300">
                <li>✓ 20 Process Automations</li>
                <li>✓ Advanced AI Features</li>
                <li>✓ Predictive Analytics</li>
                <li>✓ Priority Support</li>
                <li>✓ 10 User Licenses</li>
              </ul>
              <button className="w-full py-3 bg-gradient - to - r from - cyan - 500 to - blue - 500 text-white font - bold rounded-lg hover:from - cyan - 400 hover:to - blue - 400 transition - all duration -300">
                Get Started
              </button>
            </div>

            <div className="bg-gray - 800 / 50 p - 8 rounded-2xl border border-gray - 600 hover:border-cyan - 400 / 50 transition - all duration -300">
              <h3 className="text-2xl font - bold mb-4 text-white">
                Enterprise Automation
              </h3>
              <div className="text-4xl font - bold mb-6 text-cyan -400">
                $7,999{' '}
                <span className="text-lg text-gray -400">/month</span>
              </div>
              <ul className="space - y-3 mb-8 text-gray -300">
                <li>✓ Unlimited Automations</li>
                <li>✓ Custom AI Training</li>
                <li>✓ Advanced Integrations</li>
                <li>✓ Dedicated Support</li>
                <li>✓ Unlimited Users</li>
              </ul>
              <button className="w-full py-3 bg-gradient - to - r from - cyan - 500 to - blue - 500 text-white font - bold rounded-lg hover:from - cyan - 400 hover:to - blue - 400 transition - all duration -300">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm: px-6 lg:px-8">
        <div className="max - w-4xl mx - auto text-center">
          <h2 className="text-4xl font - bold mb-6 bg-gradient - to - r from - cyan - 400 to - blue - 400 bg-clip - text text-transparent">
            Ready to Automate Your Processes?
          </h2>
          <p className="text-xl text-gray - 300 mb-8">
            Transform your business with AI - powered process automation.Start
            your free trial today and see the difference automation can make.</p>
          <div className="flex flex - col sm:flex - row gap-4 justify -center">
            <button className="px-8 py-4 bg-gradient - to - r from - cyan - 500 to - blue - 500 text-white font - bold rounded-lg hover:from - cyan - 400 hover:to - blue - 400 transition - all duration - 300 transform hover:scale -105">
              Start Free Trial
            </button>
            <Link
              to="/contact"
              className="px-8 py-4 border border-cyan - 400 text-cyan - 400 font - bold rounded-lg hover:bg-cyan - 400 / 20 transition - all duration -300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>) 
},
