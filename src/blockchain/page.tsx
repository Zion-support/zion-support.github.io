

const BlockchainPage: React.FC = () => {
      return (
    <div>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-orange-600 to-red-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div>
            <div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">Blockchain & Web3 Services</h1>
              <p className="text-xl md:text-2xl mb-8 text-orange-100 max-w-3xl mx-auto">Build the future of decentralized applications with cutting-edge blockchain technology</p>
              <div>
                <button className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors">Explore Web3 Solutions</button>
                <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors">Schedule Consultation</button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Benefits */}
        <section className="py-16 bg-white">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our Blockchain Services?
              </h2>
              <p className="text-xl text-gray-600">Expert blockchain developers delivering secure, scalable, and innovative Web3 solutions</p>
            </div>
            <div>
              <div>
                <div>
                  <Link className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Blockchain Experts</h3>
                <p className="text-gray-600">Certified developers with deep expertise in multiple blockchain platforms</p>
              </div>
              <div>
                <div>
                  <Shield className="w-8 h-8 text-red-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security First</h3>
                <p className="text-gray-600">Comprehensive security audits and best practices for all projects</p>
              </div>
              <div>
                <div>
                  <Zap className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Rapid Development</h3>
                <p className="text-gray-600">Fast delivery with proven development methodologies and tools</p>
              </div>
              <div>
                <div>
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Proven Success</h3>
                <p className="text-gray-600">Successfully launched 100+ blockchain projects across industries</p>
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
                <p className="text-xl text-gray-600">Specialized {category.toLowerCase()} services for modern blockchain applications</p>
              </div>
              <div>{blockchainServices
                  .filter(service => service.category === category)
                  .map((service, index) => (
                    <div>
                      <div className="text-4xl mb-4">{service.icon}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                      <p className="text-gray-600 mb-4">{service.description}</p>
                      
                      <div>
                        <div>
                          <span className="text-2xl font-bold text-orange-600">{service.price}</span>
                          <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                        </div>
                        <div>Save up to 50% vs market rates</div>
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
                            <span key={techIndex} className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">
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
                      <button className="w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors">Get Blockchain Consultation</button>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        ))}

        {/* Blockchain Capabilities Showcase */}
        <section className="py-16 bg-white">
          <div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Blockchain Capabilities</h2>
              <p className="text-xl text-gray-600">Comprehensive blockchain solutions covering all aspects of Web3 development</p>
            </div>
            <div>
              <div>
                <Link className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Smart Contracts</h3>
                <p className="text-gray-600">Secure, audited smart contracts for all blockchain platforms</p>
              </div>
              <div>
                <Coins className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">DeFi Protocols</h3>
                <p className="text-gray-600">Decentralized finance solutions including DEXs and lending platforms</p>
              </div>
              <div>
                <Brain className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">NFT Solutions</h3>
                <p className="text-gray-600">Complete NFT marketplace and collection development</p>
              </div>
              <div>
                <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Security Auditing</h3>
                <p className="text-gray-600">Comprehensive security audits and vulnerability assessments</p>
              </div>
              <div>
                <BarChart className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Analytics & Monitoring</h3>
                <p className="text-gray-600">Real-time blockchain analytics and compliance monitoring</p>
              </div>
              <div>
                <Cpu className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Web3 Applications</h3>
                <p className="text-gray-600">Complete Web3 applications with frontend and backend integration</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-orange-600 to-red-600 text-white">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build the Future of Web3?
            </h2>
            <p className="text-xl mb-8 text-orange-100">Contact our blockchain experts for a free consultation and custom Web3 strategy</p>
            <div>
              <a
                href="tel:+13024640950"
                className="bg-white text-orange-600 px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors inline-flex items-center"
              >📞 +1 302 464 0950</a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-orange-600 transition-colors"
              >✉️ kleber@ziontechgroup.com</a>
            </div>
            <div>
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>);
}
export default BlockchainPage