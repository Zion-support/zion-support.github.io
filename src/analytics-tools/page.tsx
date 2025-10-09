
const AnalyticsToolsPage: React.FC = () => {
      return (
    <div>
      <Helmet>
        <title>Analytics Tools - Zion Tech Group</title>
        <meta name="description" content="AI-powered analytics tools for business intelligence, web analytics, marketing analytics, and more. Starting at $179/month." />
        <meta name="keywords" content="analytics tools, business intelligence, web analytics, marketing analytics, sales analytics, ai analytics" />
      </Helmet>
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">AI Analytics Tools</h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Transform your data into actionable insights with AI-powered analytics tools for business intelligence, marketing, and performance tracking.
          </p>
          {/* Stats */}
          <div>
            <div>
              <div className="text-3xl font-bold text-cyan-400 mb-2">6</div>
              <div className="text-gray-300">Analytics Tools</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-400 mb-2">$179</div>
              <div className="text-gray-300">Starting Price</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-400 mb-2">95%</div>
              <div className="text-gray-300">Accuracy</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-400 mb-2">Real-time</div>
              <div className="text-gray-300">Monitoring</div>
            </div>
          </div>
          {/* Contact Info */}
          <div>
            <div>
              <div>
                <Phone className="w-5 h-5" />
                <span className="text-white font-medium">+1 302 464 0950</span>
              </div>
              <div>
                <Mail className="w-5 h-5" />
                <span className="text-white font-medium">kleber@ziontechgroup.com</span>
              </div>
              <div>
                <MapPin className="w-5 h-5" />
                <span className="text-white font-medium">Middletown, DE</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Analytics Tools Grid */}
      <section className="py-16 px-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">Our Analytics Tools</h2>
          <div>
            {analyticsTools.map((tool, index) => (
              <div>
                <div>
                  <div className="text-5xl mb-4">{tool.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{tool.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{tool.description}</p>
                  <div>
                    {tool.category}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-3">Features:</h4>
                  <ul className="space-y-2">
                    {tool.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{tool.price}</div>
                  <a
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tool.title}`}
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-cyan-600 hover:to-blue-700 transition-all inline-block"
                  >Get Started</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our Analytics Tools?
          </h2>
          <div>
            {benefits.map((benefit, index) => (
              <div>
                <benefit.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                <p className="text-gray-300 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Unlock Your Data?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Get started with our AI analytics tools today and transform your data into actionable insights.
          </p>
          <div>
            <a
              href="tel:+13024640950"
              className="bg-white text-purple-600 px-8 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
            >Call (302) 464-0950</a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-purple-600 transition-colors"
            >Email Us</a>
          </div>
        </div>
      </section>
    </div>);
}
export default AnalyticsToolsPage