className="space-y-8"
          >
            <div className="inline-flex items-center space-x-2 bg-purple-900/30 border border-purple-500/30 rounded-full px-6 py-3 text-purple-300 text-sm">
              <Sparkles className="w-4 h-4" />
              <span>2028 Future Technology</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                Futuristic
              </span>
              <br />
              <span className="text-white">Services</span>
            </h1>

            <p className="text-xl md:text-2xl text-purple-200 max-w-4xl mx-auto leading-relaxed">
              Experience the future of technology with our cutting-edge 2028 services. 
              From AI consciousness to quantum internet, we're building tomorrow's solutions today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link,
href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Get Started</span>
                <ArrowRight className="w-5 h-5" />
              </a>

                className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Pricing</span>
                <DollarSign className="w-5 h-5" />
              </a>
            </div>

                      className="inline-flex items-center space-x-2 text-purple-400 hover:text-purple-300 transition-colors group"
                    >
                      <span>Explore More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}

                        <span className="font-medium">Market Size:</span> {service.marketSize}
                      </div>;
                      <div className="text-sm text-purple-300">;
                        <span className="font-medium">Growth Rate:</span> {service.growthRate}

                        className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                      </a>
                      <div className="text-right">
                        <div className="text-sm text-purple-300">Setup Time</div>
                        <div className="text-white font-medium">{service.setupTime}</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            className="space-y-8"
          >
            <h2 className="text-4xl md: text-5xl font-bold text-white mb-6">
              Ready to <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Join hundreds of forward-thinking companies already leveraging our futuristic services,
to gain competitive advantages and drive innovation.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
              <Link,
href="/contact"
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-xl hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-purple-500/25 flex items-center space-x-2"
              >
                <span>Start Your Journey</span>
                <ArrowRight className="w-5 h-5" />
              </a>

                className="px-8 py-4 border border-purple-500/30 text-purple-300 rounded-xl hover:bg-purple-900/30 transition-all duration-300 flex items-center space-x-2"
              >
                <span>View Case Studies</span>
                <TrendingUp className="w-5 h-5" />
              </a>
            </div>

            <div className="flex items-center justify-center space-x-8 text-purple-300">
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>30-Day Free Trial</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-green-400" />
                <span>Money-Back Guarantee</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <UltraFuturisticFooter2028 />
    </>