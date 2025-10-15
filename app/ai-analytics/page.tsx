
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">""
            {stats.map((stat, index) => ()
              <div key={index} className="text-center">""
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">""
                  {stat.number}
                </div>
                <div className="text-gray-300">""
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-7xl mx-auto">""
          <div className="text-center mb-16">""
            <h2 className="text-4xl font-bold text-white mb-4">""
              AI-Powered Analytics Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">""
              Our AI analytics platform provides intelligent insights that help you make better business decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">""
            {features.map((feature, index) => ()
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">""
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-6">""
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">{feature.title}</h3>""
                <p className="text-gray-300 mb-6">{feature.description}</p>""
                <ul className="space-y-2">""
                  {feature.benefits.map((benefit, idx) => ()
                    <li key={idx} className="flex items-center text-sm text-gray-300">""
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />""
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">""
        <div className="max-w-7xl mx-auto">""
          <div className="text-center mb-16">""
            <h2 className="text-4xl font-bold text-white mb-4">""
              Analytics Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">""
              Comprehensive analytics solutions tailored to your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">""
            {analyticsTypes.map((type, index) => ()
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-all duration-300">""
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-4">""
                  {type.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{type.title}</h3>""
                <p className="text-gray-300 text-sm">{type.description}</p>""
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">""
        <div className="max-w-4xl mx-auto text-center">""
          <h2 className="text-4xl font-bold text-white mb-6">""
            Ready to Unlock Your Data's Potential?''
          </h2>
          <p className="text-xl text-gray-300 mb-8">""
            Let our AI analytics experts help you transform your data into actionable insights that drive business growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">""
            <Link 
              to="/contact" ""
              className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"""
            >
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />""
            </Link>
            <Link 
              to="/demo" ""
              className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"""
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>


