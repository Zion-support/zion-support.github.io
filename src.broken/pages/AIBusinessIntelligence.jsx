import { Helmet } from 'react - helmet -async';

export default function Page() {
 className="flex items - center space - x-3">
                      <CheckCircle className="h-5 w-5 text-green - 400 flex - shrink -0"/>
                      <span className="text-gray -300">{capability}</span>
                    </div>) ) }
                </div>
              </div>

              <div>
                <h3 className="text-2xl font - bold text-white mb-6">Business Intelligence</h3>
                <div className="space - y-4">
                  {['Interactive Dashboards',
            'Custom Report Builder',
            'Real - time Data Streaming',
            'Multi - source Data Integration',
            'Automated Insights Generation',
            'Collaborative Analytics',
            'Mobile BI Access',
            'Advanced Visualization'
        ].map((capability, index) => (<div key={index} className="flex items - center space - x-3">
                      <CheckCircle className="h-5 w-5 text-green - 400 flex - shrink -0"/>
                      <span className="text-gray -300">{capability}</span>
                    </div>) ) }
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max - w-7xl mx -auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font - bold text-white mb-4">
                Industry Applications
              </h2>
              <p className="text-xl text-gray - 300 max - w-2xl mx -auto">
                Transform operations across every industry with AI - powered business intelligence
              </p>
            </div>

            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-8">
              <div className="bg-white / 5 backdrop - blur - lg rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">Finance</h3>
                <p className="text-gray -300">
                  Risk assessment, fraud detection, and investment portfolio optimization
                </p>
              </div>

              <div className="bg-white / 5 backdrop - blur - lg rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">Healthcare</h3>
                <p className="text-gray -300">
                  Patient outcome prediction, resource optimization, and clinical decision support
                </p>
              </div>

              <div className="bg-white / 5 backdrop - blur - lg rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">Retail</h3>
                <p className="text-gray -300">
                  Customer segmentation, inventory optimization, and demand forecasting
                </p>
              </div>

              <div className="bg-white / 5 backdrop - blur - lg rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">Manufacturing</h3>
                <p className="text-gray -300">
                  Predictive maintenance, quality control, and supply chain optimization
                </p>
              </div>

              <div className="bg-white / 5 backdrop - blur - lg rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">Marketing</h3>
                <p className="text-gray -300">
                  Campaign performance analysis, customer lifetime value, and ROI optimization
                </p>
              </div>

              <div className="bg-white / 5 backdrop - blur - lg rounded-xl p - 6 border border-white / 10">
                <h3 className="text-xl font - semibold text-white mb-3">Operations</h3>
                <p className="text-gray -300">
                  Process optimization, resource allocation, and performance monitoring
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max - w-4xl mx - auto text-center">
            <h2 className="text-3xl md:text-4xl font - bold text-white mb-6">
              Ready to Transform Your Business Intelligence?
            </h2>
            <p className="text-xl text-gray - 300 mb-8">
              Join leading organizations using AI to make smarter business decisions
            </p>
            <div className="flex flex - col sm:flex - row gap-4 justify -center">
              <button className="bg-gradient - to - r from - indigo - 600 to - purple - 600 text-white px-8 py-4 rounded-lg font - semibold hover:from - indigo - 700 hover:to - purple - 700 transition - all duration - 300 text-lg">
                Get Started Today
              </button>
              <button className="border border-white / 20 text-white px-8 py-4 rounded-lg font - semibold hover:bg-white / 10 transition - all duration - 300 text-lg">
                Schedule Demo
              </button>
            </div>
          </div>
        </section>
      </div>
    </>) };
}