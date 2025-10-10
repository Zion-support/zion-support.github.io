
              <p className="text-lg text-gray-300 mb-12 max-w-3xl mx-auto">
                Our AI-powered workflow automation platform helps businesses eliminate manual tasks, 
                reduce errors by 75%, and save 90% of processing time with intelligent automation.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <a
                  href="tel:+13024640950"
                  className="cyber-button flex items-center space-x-2"
                >
                  <Phone className="w-5 h-5" />
                  <span>Call (302) 464-0950</span>
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="cyber-button flex items-center space-x-2"
                  style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
                >
                  <Mail className="w-5 h-5" />
                  <span>Start Free Trial</span>
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
                {stats.map((stat, index) => (
                  <div key={index} className="hologram-card-enhanced p-6 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2 neon-text">
                      {stat.number}
                    </div>
                    <div className="text-gray-300 font-medium">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-16">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
                Powerful Automation Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div key={index} className="hologram-card-enhanced p-6 hover:scale-105 transition-all duration-300">
                    <div className="text-4xl mb-4 text-yellow-400">
                      <feature.icon className="w-10 h-10" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                    <p className="text-gray-300 mb-4">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
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
        {/* Benefits Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2>
                Why Choose Our Solution?;
              </h2>
              <p>
                Proven results that drive business growth and efficiency;
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {
    benefits.map((benefit, index) => (
  }
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform"></div>
                    <CheckCircle>
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>
                Ready to Get Started?;
              </h2>
              <p>
                Contact our experts to discuss your requirements and get started today.;
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>
                <button>
                  Contact Us;
