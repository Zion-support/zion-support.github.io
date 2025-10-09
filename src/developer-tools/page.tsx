
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const DeveloperToolsPage: React.FC = () => {
    return (
    <>
      <Helmet>
        <title>Developer Tools - Zion Tech Group</title>
        <meta name="description" content="AI-powered developer tools and productivity suites. Code generation, API testing, database management, and DevOps automation tools." />
        <meta name="keywords" content="developer tools, AI code generation, API testing, database management, DevOps automation, code review" />
      </Helmet>
      <div>
        <Navigation />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-4">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">Developer Tools</h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">AI-powered development tools that accelerate your coding workflow and improve productivity</p>
            
            {/* Stats */}
            <div>
              <div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300">Productivity Boost</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400 mb-2">50+</div>
                <div className="text-gray-300">Tools Available</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400 mb-2">10K+</div>
                <div className="text-gray-300">Active Developers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime</div>
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

        {/* Tools Grid */}
        <section className="py-16 px-4">
          <div>
            <h2 className="text-3xl font-bold text-white text-center mb-12">Our Developer Tools</h2>
            <div>
              {devTools.map((tool, index) => (
                <div>
                  <div>
                    <div>
                      <tool.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{tool.title}</h3>
                    <p className="text-gray-600 text-sm">{tool.description}</p>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-600 mb-4">{tool.price}</div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {tool.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Benefits:</h4>
                    <ul className="space-y-1">
                      {tool.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="text-sm text-gray-600 flex items-center">
                          <TrendingUp className="w-3 h-3 text-blue-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <a
                      href={`mailto:kleber@ziontechgroup.com?subject=Interest in ${tool.title}`}
                      className="w-full bg-gradient-to-r from-purple-600 to-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all inline-block"
                    >Get Started Now</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-purple-600 to-blue-600">
          <div>
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Supercharge Your Development?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join thousands of developers who have accelerated their productivity with our AI-powered tools.
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

        <Footer />
      </div>
    </>);
}
export default DeveloperToolsPage