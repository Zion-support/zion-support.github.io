return (

      {/* Hero Section */}

              Our Services
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">"
              Comprehensive AI and IT Solutions for Modern Businesses
            </p>"
            <p className="text-lg text-gray-400 mb-12 max-w-3xl mx-auto">"
              From artificial intelligence and machine learning to cybersecurity and cloud infrastructure, 
              we provide end-to-end technology solutions that drive innovation and growth.
            </p>
          </div>
        </div>
      </section>

      {/* Services Categories */}

              Service Categories
            </h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">"
              Explore our comprehensive range of technology services designed to meet your business needs
            </p>
          </div>
)
          {serviceCategories.map((category, categoryIndex) => {;
const Icon = category.icon
            return (
"
              <div key={categoryIndex} className="mb-20"></div>"
                <div className="flex items-center mb-12"></div>
                  <div className={`w-16 h-16 ${category.bgColor} rounded-lg flex items-center justify-center mr-6`}></div>
                    <Icon className={`w-8 h-8 ${category.color}`} />

                  </div>"
                  <h3 className="text-3xl font-bold text-white">{category.title}</h3>"
                </div>
"
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>)
                  { category.services.map((service, serviceIndex) => ( }"
                    <div key={serviceIndex} className="group bg-gradient-to-br from-slate-800 to-slate-700 p-8 rounded-xl border border-slate-600 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"></div>"
                      <div className="flex justify-between items-start mb-4"></div>"
                        <h4 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                          { service.name }
                        </h4>"
                        <span className="text-purple-400 font-semibold text-lg">
                          { service.price }
                        </span>
                      </div>
                      "
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        { service.description }
                      </p>
"
                      <ul className="space-y-2 mb-6">)
                        { service.features.map((feature, featureIndex) => ( }"
                          <li key={featureIndex} className="flex items-center text-gray-300">"
                            <CheckIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />"
                            <span className="text-sm">{feature}</span>

                          </li>)
                        ))
                      </ul>

                      <Link 
"
                        to="/contact""
                        className="inline-flex items-center text-purple-400 hover:text-purple-300 font-semibold group-hover:gap-3 transition-all"

                      >"
                        Learn More <ArrowRightIcon className="w-4 h-4 ml-2" />"
                      </Link>
                    </div>
                  ))
                </div>
              </div>
            )}
        </div>
      </section>

      {/* CTA Section */}

              >
                Get Free Consultation"
                <ArrowRightIcon className="w-5 h-5" />"
              </Link>
              <Link 
"
                to="/demo""
                className="border-2 border-purple-400 text-purple-300 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"

              >
                Schedule Demo"
                <ArrowRightIcon className="w-5 h-5" />"
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>

  );
}
export default FiveGSolutionsPage;
"
