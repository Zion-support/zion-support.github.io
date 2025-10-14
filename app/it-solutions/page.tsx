'use client'

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, and consulting services." />""
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, IT consulting, network solutions" />
      </Helmet>"
      ""
      <div className="min-h-screen bg-white">"
        {/* Hero Section */}""
        <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">""
          <div className="max-w-6xl mx-auto text-center">""
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              IT Solutions"
            </h1>""
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Comprehensive IT solutions designed to modernize your infrastructure, 
              enhance security, and drive business growth."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link ">"
                to="/contact" ""
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Get Started
              </Link>"
              <Link ">"
                to="/demo" ""
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                View Demo
              </Link>
            </div>
          </div>
        </section>
"
        {/* Solutions Grid */}""
        <section className="py-20 px-4">""
          <div className="max-w-6xl mx-auto">""
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Our IT Solutions"
            </h2>""
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">"
              {solutions.map((solution, index) => ("}"
                <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">"
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>""
                    <solution.icon className="w-6 h-6 text-white" />"
                  </div>""
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{solution.title}</h3>""
                  <p className="text-gray-600 mb-4">{solution.description}</p>""
                  <div className="mb-4">""
                    <p className="text-blue-600 font-semibold">{solution.price}</p>
                  </div>
                  <Link>"
                    to={solution.href}""
                    className="text-blue-600 hover:text-blue-700 font-medium flex items-center""
                  >""
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
"
        {/* Features Section */}""
        <section className="py-20 px-4 bg-gray-50">""
          <div className="max-w-6xl mx-auto">""
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Why Choose Our IT Solutions?"
            </h2>""
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">"
              {features.map((feature, index) => ("}"
                <div key={index} className="text-center">""
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">""
                    <feature.icon className="w-8 h-8 text-white" />"
                  </div>""
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>""
                  <p className="text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
"
        {/* CTA Section */}""
        <section className="py-20 px-4">""
          <div className="max-w-4xl mx-auto text-center">""
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Transform Your IT Infrastructure?"
            </h2>""
            <p className="text-lg text-gray-600 mb-8">
              Let's discuss how our IT solutions can help you achieve your business goals."
            </p>""
            <div className="flex flex-col sm:flex-row gap-4 justify-center">"
              <Link ">"
                to="/contact" ""
                className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Contact Us
              </Link>"
              <Link ">"
                to="/demo" ""
                className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}"`
export default ITSolutionsPage"`"`