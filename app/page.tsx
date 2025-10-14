];

  return (

    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Helmet></Helmet>

            </h1>"
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">"
              We deliver cutting-edge artificial intelligence and information technology solutions 
              that drive growth, efficiency, and innovation for businesses of all sizes.
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <Link 
"
                to="/contact""
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"

              >
                Get Started
              </Link>
              <Link 
"
                to="/services""
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"

              >
                Learn More
              </Link>
            </div>

      {/* Hero Section */}"
      <section className="relative py-20 px-4">"
        <div className="container mx-auto text-center"></div>"
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Transform Your Business with"
            <span className="block bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Advanced AI & IT Solutions
            </span>
          </h1>"
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of cutting-edge artificial intelligence and information technology solutions. 
            We help businesses innovate, automate, and scale with the power of modern technology.
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <Link "
              to="/services" "
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
            >
              Explore Services"
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <Link "
              to="/contact" "
              className="inline-flex items-center px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300"
            >
              Get Started
            </Link>

          </div>

        </div>
      </section>

              Our Services
            </h2>"
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>")
              {services.map((service, index) => (
                <Link 
                  key={index} 

                  to={ service.href }"
                  className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"

                >"
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4"></div>""
                    <service.icon className="w-6 h-6 text-blue-600" />"
                  </div>
"
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    { service.title }

                  </h3>"
                  <p className="text-gray-600 mb-4">{service.description}</p>""
                  <div className="flex items-center text-blue-600 font-medium"></div>""
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />"
                  </div>
                </Link>)
              ))
            </div>
          </div>
        </section>

        {/* Features Section */}

              Why Choose Us?
            </h2>"
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
              {features.map((feature, index) => ("
                <div key={index} className="flex items-center"></div>""
                  <CheckCircleIcon className="w-6 h-6 text-green-500 mr-3" />""
                  <span className="text-gray-700">{feature}</span>"
                </div>)
              ))
            </div>
          </div>
        </section>

        {/* CTA Section */}

              Let's discuss how our AI and IT solutions can help you achieve your goals.'
            </p>"
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
              <Link 
"
                to="/contact""
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"

              >
                Contact Us
              </Link>
              <Link 
"
                to="/about""
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"

              >
                About Us
              </Link>
            </div>

      { /* Services Section */ }"
      <section className="py-20 bg-slate-900">"
        <div className="container mx-auto px-4"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 gradient-text">

              Our Core Services
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Comprehensive technology solutions designed to accelerate your business growth
            </p>

          </div>

        </section>

        {/* Features Section */}"
        <section className="py-20 px-4 bg-slate-900">"
          <div className="max-w-6xl mx-auto"></div>"
            <div className="text-center mb-16"></div>"
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Us?
              </h2>
            </div>"
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {features.map((feature, index) => ("
                <div key={index} className="flex items-center space-x-4 p-6 bg-slate-800/30 rounded-lg hover:bg-slate-700/30 transition-colors"></div>"
                  <CheckCircleIcon className="w-6 h-6 text-green-400 flex-shrink-0" />"
                  <span className="text-gray-300 font-medium">{feature}</span>
                </div>

          </div>
        </section>

      {/* Features Section */}"
      <section className="py-20 px-4">"
        <div className="container mx-auto"></div>"
          <div className="text-center mb-16"></div>"
            <h2 className="text-4xl font-bold text-white mb-4">Our Core Services</h2>"
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Comprehensive technology solutions designed to drive your business forward
            </p>
          </div>"
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>)
            {features.map((feature, index) => ("
              <div key={index} className="bg-slate-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-slate-800/70 transition-all duration-300 transform hover:scale-105"></div>
                <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />"
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>"
                <p className="text-gray-300">{feature.description}</p>

              </div>)
            ))
          </div>
        </div>
      </section>

      {/* CTA Section */}

            Let's discuss how our technology solutions can drive your business forward'
          </p>"
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <Link"
              to="/contact"""
              className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105""
            >
              Start Your Project
            </Link>
            <Link"
              to="/demo"""
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300""
            >
              Schedule Demo

            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};
;
export default HomePage;
"
}}}
