const benefits = [
  'Protection against cyber threats and attacks',
  'Compliance with industry regulations',
  'Reduced risk of data breaches',
  'Enhanced customer trust and confidence',
  'Lower insurance costs and liability',
  'Peace of mind with 24/7 monitoring'
];
        <section className="bg-gradient-to-r from-red-600 to-orange-700 text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Cybersecurity Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                Protect your business with comprehensive cybersecurity solutions.
                Advanced threat protection, compliance, and 24/7 monitoring.              </p>
            </motion.div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cybersecurity Solutions
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive security services designed to protect your business
                from evolving cyber threats and ensure regulatory compliance.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="w-6 h-6 text-red-600" />                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </div>
                    ))}
                  </div>
                  <div className="text-lg font-semibold text-blue-600 mb-4">{service.pricing}</div>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Get Quote
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-r from-red-600 to-orange-700 p-8 rounded-xl text-white">
                <h3 className="text-2xl font-bold mb-6">Ready to Secure Your Business?</h3>
                <p className="text-lg mb-6">
                  Let our cybersecurity experts help you implement comprehensive
                  security solutions that protect your business and data.
                </p>
                <button className="bg-white text-red-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center">
                  Schedule Security Audit
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>
            </div>
          </div>
        </section>
