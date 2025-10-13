 origin/cursor/analyze-improve-and-deploy-application-1232
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import PerformanceOptimizer from './components/EnhancedPerformanceOptimizer';
import SEOOptimizer from './components/SEOOptimizer';
import AccessibilityEnhancer from './components/AccessibilityEnhancer';

 cursor/fix-errors-and-merge-to-main-6ce7
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
            </section>

            {/* Services Section */}
            <section className="py-20 bg-slate-800/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Our Core Services
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    Comprehensive technology solutions designed to accelerate your digital transformation
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {services.map((service, index) => (
                    <div
                      key={service.title}
                      className="cyber-card group hover:scale-105 transition-all duration-300"
                      style={{ animationDelay: `${index * 100}ms` }} origin/cursor/analyze-improve-and-deploy-application-1247
                    >
                      <div className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">,</div>
                          <service.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{service.description</p>}</p>
                        <div className="space-y-2 mb-6">{service.features.map((feature, featureIndex) => (</div>
                            <div key={featureIndex}className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                              <span className="text-sm text-gray-300">{feature</span>}</span>
                            </div>
                          ))}
                        </div>
<a
                          href={service.href}
                          className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-transform"
                        >
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>

              </div>
            </section>

            {/* Features Section */}
            <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> origin/cursor/analyze-improve-and-deploy-application-1247
                <div className="text-center mb-16">
                  <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
                    Why Choose Zion Tech Group?
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">We combine cutting-edge technology with deep industry expertise to deliver exceptional results;</p>
                    <div;
                      key={feature.title}className="cyber-card group hover: scale-105 transition-all duration-300",
                      style={{ animationDelay: `${index * 100,}ms` }}
                    >
                      <div className="p-8">
                        <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-6 group-hover: scale-110 transition-transform">,</div>
                          <feature.icon className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                        <p className="text-gray-300 mb-6 leading-relaxed">{feature.description</p>}</p>
                        <div className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</div>
                            <div key={benefitIndex}className="flex items-center space-x-2">
                              <CheckCircle className="w-4 h-4 text-purple-400 flex-shrink-0" />
<span className="text-sm text-gray-300">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-20 bg-slate-900/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"> origin/cursor/analyze-improve-and-deploy-application-1247
                <div className="text-center mb-16">
                  <h2 className="text-3xl md: text-4xl font-bold text-white mb-4">,</h2>
                    What Our Clients Say;
                  </h2>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">Don't just take our word for it. Here's what industry leaders say about our solutions.</p>
                  </p>
                </div>
                <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
                  <div className="cyber-card">
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => (</div>
                          <Star key={i}className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">"Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%."</p>
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white font-bold mr-3">JS;</div>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => (</div>
                          <Star key={i}className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">"Outstanding service and cutting-edge technology. They delivered our project ahead of schedule."</p>
                    </p>
                    <div className="flex items-center">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold mr-3">MJ;</div>
                    <div className="flex items-center mb-4">
                      <div className="flex text-yellow-400">{[...Array(5)].map((_, i) => (</div>
                          <Star key={i}className="w-5 h-5 fill-current" />
                        ))}
                      </div>
                    </div>
                    <p className="text-gray-300 mb-4">"The best IT partner we've ever worked with. Their expertise in AI and cloud solutions is unmatched."</p>
                    </p>
                    <div className="flex items-center">
<div className="w-10 h-10 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-3">
                        DW
                      </div>
                      <div>
                        <div className="text-white font-semibold">David Wilson</div>
                        <div className="text-sm text-gray-400">VP Engineering, DataFlow</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"> origin/cursor/analyze-improve-and-deploy-application-1247
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">Let's discuss how our AI and IT solutions can drive your digital transformation and accelerate growth.</p>
                </p>
                <div className="flex flex-col sm: flex-row gap-4 justify-center items-center">,</div>
                  <a;
                    <span>Start Your Project</span>
                    <ArrowRight className="w-5 h-5 group-hover: translate-x-1 transition-transform" />,
                  </a>
                  <a;
                    href="tel: +13024640950",
                    onClick={handlePhoneClick}className="border-2 border-white text-white hover: bg-white hover:text-cyan-600 px-8 py-4 rounded-lg font-semibold text-lg transition-colors inline-flex items-center space-x-2",
            {/* Footer */} <Footer />
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page Backup?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page backup solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

</React.Fragment>
  )
}

HomePage.displayName = 'HomePage'
export default HomePage origin/cursor/analyze-improve-and-deploy-application-1247
