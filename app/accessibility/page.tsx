

  return (
    <>
      
    </><Helmet>

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        
          </div><section className="relative py-20 px-4 overflow-hidden">

          
        </section><div className="relative max-w-7xl mx-auto text-center">
          <h$1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Accessibility{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Solutions
              </span>
            </h1>
          
          </div><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">

            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Accessibility Audit
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Learn More
              </button>
        </div>
      </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Comprehensive Accessibility Features
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our accessibility solutions cover all aspects of digital
                inclusion, ensuring your applications work seamlessly for users
                with diverse needs and abilities.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
          <h$1 className="text-xl font-bold text-white mb-4">
                    {feature.title}
                  </h3>
          
          </div><p className="text-gray-300 leading-relaxed mb-4">
                    {feature.description}
                  </p>
                  {feature.benefits && (
                    <ul className="space-y-2">

                          <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* Standards Section */}
        <section className="py-20 px-4 bg-white/5">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="text-center mb-16">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Compliance Standards
              </h2>
          
          </div><p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We ensure full compliance with international accessibility
                standards and regulations.
              </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        
          </div><div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
          <h$1 className="text-lg font-bold text-white mb-2">
                    {standard.name}
                  </h3>
          
          </div><p className="text-sm text-gray-300 mb-3">
                    {standard.description}
                  </p>
                  <span className="inline-block bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-medium">
                    {standard.status}
                  </span>
                </div>
              ))}
        </div>
      </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          
        </section><div className="max-w-4xl mx-auto text-center">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Make Your App Accessible?
            </h2>
          
          </div><p className="text-xl text-gray-300 mb-8">
              Let us help you create inclusive digital experiences that work for
              everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Accessibility Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Contact Us
              </button>
        </div>
      </div>
        </section>
      </div>
    </>
  );
};

export default AccessibilityPage;
