

const IoTEdgePage: React.FC = () => {
      return (
    <div>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-cyan-600 to-blue-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">IoT & Edge Computing Services</h1>
              <p className="text-xl md:text-2xl mb-8 text-cyan-100 max-w-3xl mx-auto">Connect, monitor, and optimize your operations with intelligent IoT and edge computing solutions</p>
              <div>
                <button className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors">Explore IoT Solutions</button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors">Schedule Demo</button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IoT & Edge Services?
              </h2>
              <p className="text-xl text-gray-600">Expert IoT engineers delivering scalable, secure, and intelligent connected solutions</p>
            </div>
            <div>
              <div>
                <div>
                  <Wifi className="w-8 h-8 text-cyan-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">IoT Experts</h3>
                <p className="text-gray-600">Certified engineers with deep expertise in IoT and edge computing</p>
              </div>
              <div>
                <div>
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Processing</h3>
                <p className="text-gray-600">Ultra-low latency edge computing for critical applications</p>
              </div>
              <div>
                <div>
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with end-to-end encryption and monitoring</p>
              </div>
              <div>
                <div>
                  <Target className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Results</h3>
                <p className="text-gray-600">Successfully deployed 500+ IoT projects across industries</p>
              </div>
            </div>
          </div>
        </section>

        {/* Services by Category */}
        {categories.map(category => (
          <section key={category} className="py-16 bg-gray-50">
            <div>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{category} Solutions</h2>
                <p className="text-xl text-gray-600">Specialized {category.toLowerCase()} services for connected and intelligent systems</p>
              </div>
              <div>{iotServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div>
                        <div>
                          <span className="text-2xl font-bold text-cyan-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div>Save up to 40% vs market rates</div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                        <ul className="space-y-1">
                          {service.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                        <div>
                          {service.technologies.map((tech, techIndex) => (
                            <span key={techIndex} className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                        <ul className="space-y-1">
                          {service.benefits.map((benefit, benefitIndex) => (
                            <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                              <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <button className="w-full bg-cyan-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-cyan-700 transition-colors">Get IoT Consultation</button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* IoT Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our IoT & Edge Capabilities</h2>
              <p className="text-xl text-gray-600">Comprehensive IoT solutions covering device management, edge computing, and intelligent analytics</p>
            </div>
            <div>
              <div>
                <Wifi className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Device Management</h3>
                <p className="text-gray-600">Comprehensive platform for managing IoT devices at scale</p>
              </div>
              <div>
                <Zap className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Edge Computing</h3>
                <p className="text-gray-600">Real-time processing at the edge with ultra-low latency</p>
              </div>
              <div>
                <Brain className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">AI Analytics</h3>
                <p className="text-gray-600">Machine learning and AI for intelligent IoT insights</p>
              </div>
              <div>
                <BarChart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Real-Time Analytics</h3>
                <p className="text-gray-600">Streaming analytics and real-time data processing</p>
              </div>
              <div>
                <Settings className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Industrial IoT</h3>
                <p className="text-gray-600">Smart manufacturing and industrial automation solutions</p>
              </div>
              <div>
                <Globe className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Cities</h3>
                <p className="text-gray-600">Comprehensive smart city infrastructure and services</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-cyan-600 to-blue-600 text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Connect Your World?
            </h2>
            <p className="text-xl mb-8 text-cyan-100">Contact our IoT experts for a free consultation and custom connected solution strategy</p>
            <div>
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-50 transition-colors inline-flex items-center"
              >📞 +1 302 464 0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors"
              >✉️ kleber@ziontechgroup.com</a>
            </div>
            <div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>);
}
export default IoTEdgePage