
      selectedCategory === "all" || service.category === selectedCategory,
  );

  return (
    <>
      
    </><Helmet>
        <title>
          AI Services - Zion Tech Group | Artificial Intelligence Solutions
        </title>

      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        
          </div><section className="relative py-20 px-4 overflow-hidden">

          
        </section><div className="relative max-w-7xl mx-auto text-center">
          <h$1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              AI{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Services
              </span>
            </h1>
          
          </div><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive AI services including analytics, automation,
              chatbots, machine learning, and security solutions. Transform your
              business with cutting-edge AI technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300">
                Get Started
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                View Portfolio
              </button>
        </div>
      </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="flex flex-wrap justify-center gap-4">

                  {category.name}
                </button>
              ))}
        </div>
      </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 px-4">
          
        </section><div className="max-w-7xl mx-auto">
        
          </div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          </div><div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-8 h-8 text-white" />
          <h$1 className="text-xl font-bold text-white mb-4">
                    {service.title}
                  </h3>
          
          </div><p className="text-gray-300 mb-6">{service.description}</p>

                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <CheckCircle className="w-4 h-4 text-purple-400 mr-2 flex-shrink-0 mt-1" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between">
                    <span className="text-purple-400 font-semibold">
                      {service.price}
                    </span>
                    <button className="flex items-center text-purple-400 hover:text-purple-300 transition-colors">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </button>
        </div>
      </div>
              ))}
        </div>
      </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-white/5">
          
        </section><div className="max-w-4xl mx-auto text-center">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business with AI?
            </h2>
          
          </div><p className="text-xl text-gray-300 mb-8">
              Let's discuss how our AI services can help you achieve your
              business goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 flex items-center justify-center">
                Start Your AI Journey
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300">
                Schedule Consultation
              </button>
        </div>
      </div>
        </section>
      </div>
    </>
  );
};

export default AiServicesPage;
