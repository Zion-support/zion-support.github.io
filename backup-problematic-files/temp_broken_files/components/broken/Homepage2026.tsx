import React from 'react',
import Layout from './layout/Layout',
import Link from 'next/link',
import { motion } from 'framer-motion',
import { 
  ArrowRight, Star,
  Brain, Atom, Shield, Zap, TrendingUp, Globe, MapPin,
  Users, Building, Rocket, CheckCircle, Phone, Mail
 from 'lucide-react',
const Homepage2026: React.FC = () => {_return (
    <Layout>
      {/* Main Content */}
      <main className=&quot;relative z-10&quot;>
        {/* Hero Section */}
        <section className=&quot;min-h-screen flex items-center justify-center px-4 relative overflow-hidden&quot;>
          {/* Background Elements */}
          <div className=&quot;absolute inset-0 pointer-events-none&quot;>
            <div className=&quot;absolute top-20 left-20 w-32 h-32 border border-cyan-400/20 rounded-lg animate-pulse&quot;></div>
            <div className=&quot;absolute top-40 right-32 w-24 h-24 border border-purple-400/20 rounded-full animate-pulse delay-1000&quot;></div>
            <div className=&quot;absolute bottom-32 left-32 w-40 h-40 border border-pink-400/20 transform rotate-45 animate-pulse delay-2000&quot;></div>          </div>

          <div className=&quot;text-center max-w-4xl mx-auto relative z-10&quot;>
            <motion.div
              initial={ opacity: 0, y: 20 }
              animate={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              className=&quot;space-y-6&quot;            >
              {_/* Company Badge */}
              <motion.div
                initial={ opacity: 0, scale: 0.8 }
                animate={ opacity: 1, scale: 1 }
                transition={ duration: 0.6, delay: 0.2 }
                className=&quot;inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-400/30 rounded-full text-cyan-400 text-sm font-medium&quot;              >
                <Star className=&quot;w-4 h-4&quot; />
                <span>Innovation Leader 2026</span>
              </motion.div>

              <h1 className=&quot;text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent&quot;>
                Zion Tech Group
              </h1>
              <p className=&quot;text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed&quot;>
                Pioneering the future of technology with innovative micro SAAS services, cutting-edge IT infrastructure, and advanced AI solutions
              </p>

              {/* Enhanced CTA Section */}
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center mb-8&quot;>
                <Link href=&quot;/comprehensive-2025-services-showcase&quot;>
                  <button className=&quot;group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-cyan-500/25&quot;>
                    <span className=&quot;flex items-center gap-2&quot;>                      Explore Services
                      <ArrowRight className=&quot;w-5 h-5 group-hover:translate-x-1 transition-transform&quot; />
                    </span>
                  </button>
                </a>
                <Link href=&quot;/services&quot;>
                  <button className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;>
                    All Services
                  </button>
                </a>
                <a href=&quot;mailto:kleber@ziontechgroup.com&quot;>
                  <button className=&quot;px-8 py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-black transition-all duration-300 transform hover:scale-105&quot;>
                    Get Started
                  </button>
                </a>
              </div>

              {_/* Trust Indicators */}
              <motion.div
                initial={ opacity: 0, y: 20 }
                animate={ opacity: 1, y: 0 }
                transition={ duration: 0.8, delay: 0.4 }
                className=&quot;flex items-center justify-center space-x-6 text-sm text-gray-400&quot;              >
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Shield className=&quot;w-4 h-4 text-green-400&quot; />
                  <span>Enterprise Security</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <Globe className=&quot;w-4 h-4 text-blue-400&quot; />
                  <span>Global Reach</span>
                </div>
                <div className=&quot;flex items-center space-x-2&quot;>
                  <TrendingUp className=&quot;w-4 h-4 text-purple-400&quot; />
                  <span>Proven Results</span>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Company Stats */}
        <section className=&quot;py-20 px-4 bg-black/30 relative&quot;>
          <div className=&quot;absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5&quot;></div>
          <div className=&quot;max-w-6xl mx-auto relative z-10&quot;>
            <motion.div
              initial={ opacity: 0, y: 20 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl font-bold text-white mb-4&quot;>Why Choose Zion Tech Group?</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                We deliver innovative solutions that drive real business transformation
              </p>
            </motion.div>

            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-4 gap-8&quot;>
              <motion.div
                initial={ opacity: 0, y: 20 }
                whileInView={ opacity: 1, y: 0 }
                transition={ duration: 0.6, delay: 0.1 }
                className=&quot;text-center&quot;              >
                <div className=&quot;text-4xl mb-4&quot;></div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Micro SAAS Solutions</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Starting at $69/month for specialized business solutions
                </p>
              </motion.div>

              <motion.div
                initial={ opacity: 0, y: 20 }
                whileInView={ opacity: 1, y: 0 }
                transition={ duration: 0.6, delay: 0.2 }
                className=&quot;text-center&quot;              >
                <div className=&quot;text-4xl mb-4&quot;></div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>IT Infrastructure</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Starting at $499/month for robust infrastructure solutions
                </p>
              </motion.div>

              <motion.div
                initial={ opacity: 0, y: 20 }
                whileInView={ opacity: 1, y: 0 }
                transition={ duration: 0.6, delay: 0.3 }
                className=&quot;text-center&quot;              >
                <div className=&quot;text-4xl mb-4&quot;></div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>AI Automation</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Starting at $199/month for intelligent automation
                </p>
              </motion.div>

              <motion.div
                initial={ opacity: 0, y: 20 }
                whileInView={ opacity: 1, y: 0 }
                transition={ duration: 0.6, delay: 0.4 }
                className=&quot;text-center&quot;              >
                <div className=&quot;text-4xl mb-4&quot;></div>
                <h3 className=&quot;text-xl font-semibold text-white mb-2&quot;>Cutting-Edge AI</h3>
                <p className=&quot;text-gray-300 text-sm&quot;>
                  Starting at $179/month for next-generation AI
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Service Categories */}
        <section className=&quot;py-20 px-4&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={ opacity: 0, y: 20 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Our Service Portfolio</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                Comprehensive solutions covering every aspect of modern business technology needs
              </p>
            </motion.div>

            <div className=&quot;grid md:grid-cols-2 lg:grid-cols-2 gap-8&quot;>
              {/* AI Automation Services */}
              <motion.div
                initial={ opacity: 0, x: -20 }
                whileInView={ opacity: 1, x: 0 }
                transition={ duration: 0.6, delay: 0.1 }
                className=&quot;bg-gradient-to-br from-blue-600/20 to-indigo-600/20 border border-blue-500/30 rounded-lg p-8 hover:border-blue-400/50 transition-all duration-300&quot;              >
                <div className=&quot;text-5xl mb-6&quot;></div>
                <h3 className=&quot;text-2xl font-semibold text-white mb-4&quot;>AI Automation Services</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>
                  Intelligent automation solutions that streamline operations and boost productivity. 
                  From content creation to customer service, our AI solutions save time and improve efficiency.
                </p>
                <div className=&quot;space-y-3 mb-6&quot;>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>AI Content Automation Suite - $299/month</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>AI Customer Service Automation - $199/month</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>AI Sales Automation Platform - $399/month</span>
                  </div>
                </div>
                <Link href=&quot;/comprehensive-2025-services-showcase&quot;>
                  <button className=&quot;w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors&quot;>
                    Learn More
                  </button>
                </a>
              </motion.div>

              {_/* IT Infrastructure Services */}
              <motion.div
                initial={ opacity: 0, x: 20 }
                whileInView={ opacity: 1, x: 0 }
                transition={ duration: 0.6, delay: 0.2 }
                className=&quot;bg-gradient-to-br from-green-600/20 to-emerald-600/20 border border-green-500/30 rounded-lg p-8 hover:border-green-400/50 transition-all duration-300&quot;              >
                <div className=&quot;text-5xl mb-6&quot;></div>
                <h3 className=&quot;text-2xl font-semibold text-white mb-4&quot;>IT Infrastructure Services</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>
                  Robust infrastructure solutions for modern digital businesses. 
                  Edge computing, zero trust security, and hybrid cloud management for enterprise-grade window.window.window.performance.
                </p>
                <div className=&quot;space-y-3 mb-6&quot;>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>Edge Computing Orchestration - $599/month</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>Zero Trust Security Platform - $799/month</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>Hybrid Cloud Management - $499/month</span>
                  </div>
                </div>
                <Link href=&quot;/comprehensive-2025-services-showcase&quot;>
                  <button className=&quot;w-full px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors&quot;>
                    Learn More
                  </button>
                </a>
              </motion.div>

              {_/* Micro SAAS Solutions */}
              <motion.div
                initial={ opacity: 0, x: -20 }
                whileInView={ opacity: 1, x: 0 }
                transition={ duration: 0.6, delay: 0.3 }
                className=&quot;bg-gradient-to-br from-purple-600/20 to-pink-600/20 border border-purple-500/30 rounded-lg p-8 hover:border-purple-400/50 transition-all duration-300&quot;              >
                <div className=&quot;text-5xl mb-6&quot;></div>
                <h3 className=&quot;text-2xl font-semibold text-white mb-4&quot;>Micro SAAS Solutions</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>
                  Specialized software solutions for specific business needs. 
                  Affordable, focused solutions that solve real problems and drive growth.
                </p>
                <div className=&quot;space-y-3 mb-6&quot;>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>AI Email Automation - $99/month</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>Smart Inventory Management - $149/month</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>Smart Appointment Scheduler - $69/month</span>
                  </div>
                </div>
                <Link href=&quot;/comprehensive-2025-services-showcase&quot;>
                  <button className=&quot;w-full px-6 py-3 bg-purple-600 text-white font-semibold rounded-lg hover:bg-purple-700 transition-colors&quot;>
                    Learn More
                  </button>
                </a>
              </motion.div>

              {_/* Cutting-Edge AI Services */}
              <motion.div
                initial={ opacity: 0, x: 20 }
                whileInView={ opacity: 1, x: 0 }
                transition={ duration: 0.6, delay: 0.4 }
                className=&quot;bg-gradient-to-br from-orange-600/20 to-red-600/20 border border-orange-500/30 rounded-lg p-8 hover:border-orange-400/50 transition-all duration-300&quot;              >
                <div className=&quot;text-5xl mb-6&quot;></div>
                <h3 className=&quot;text-2xl font-semibold text-white mb-4&quot;>Cutting-Edge AI Services</h3>
                <p className=&quot;text-gray-300 mb-6&quot;>
                  Next-generation AI solutions for competitive advantage. 
                  Video generation, code assistance, and data analysis powered by advanced AI.
                </p>
                <div className=&quot;space-y-3 mb-6&quot;>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>AI Video Generation - $199/month</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>AI Code Generation - $299/month</span>
                  </div>
                  <div className=&quot;flex items-center space-x-2 text-sm text-gray-300&quot;>
                    <CheckCircle className=&quot;w-4 h-4 text-green-400&quot; />
                    <span>AI Data Analysis - $399/month</span>
                  </div>
                </div>
                <Link href=&quot;/comprehensive-2025-services-showcase&quot;>
                  <button className=&quot;w-full px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg hover:bg-orange-700 transition-colors&quot;>
                    Learn More
                  </button>
                </a>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className=&quot;py-20 px-4 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={ opacity: 0, y: 20 }
              whileInView={ opacity: 1, y: 0 }
              transition={ duration: 0.8 }
              className=&quot;space-y-6&quot;            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>
                Ready to Transform Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Get in touch with our team to discuss how our innovative services can drive your success
              </p>

              {/* Contact Information */}
              <div className="bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-8">
                <h3 className="text-2xl font-semibold text-cyan-400 mb-6">Contact Information</h3>
                <div className="grid md: grid-cols-2 gap-6 text-left">
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-400" />
              <div className=&quot;bg-black/30 backdrop-blur-sm border border-gray-700 rounded-lg p-8 mb-8&quot;>
                <h3 className=&quot;text-2xl font-semibold text-cyan-400 mb-6&quot;>Contact Information</h3>
                <div className=&quot;grid md:grid-cols-2 gap-6 text-left&quot;>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <Globe className=&quot;w-5 h-5 text-blue-400&quot; />
                    <div>
                      <div className=&quot;text-sm text-gray-400&quot;>Website</div>
                      <a href=&quot;https://ziontechgroup.com&quot; className=&quot;text-cyan-400 hover:underline font-medium&quot;>
                        ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <Phone className=&quot;w-5 h-5 text-green-400&quot; />
                    <div>
                      <div className=&quot;text-sm text-gray-400&quot;>Phone</div>
                      <a href=&quot;tel:+13024640950&quot; className=&quot;text-cyan-400 hover:underline font-medium&quot;>
                        +1 302 464 0950
                      </a>
                    </div>
                  </div>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <Mail className=&quot;w-5 h-5 text-yellow-400&quot; />
                    <div>
                      <div className=&quot;text-sm text-gray-400&quot;>Email</div>
                      <a href=&quot;mailto:kleber@ziontechgroup.com&quot; className=&quot;text-cyan-400 hover:underline font-medium&quot;>
                        kleber@ziontechgroup.com
                      </a>
                    </div>
                  </div>
                  <div className=&quot;flex items-center space-x-3&quot;>
                    <MapPin className=&quot;w-5 h-5 text-purple-400&quot; />
                    <div>
                      <div className=&quot;text-sm text-gray-400&quot;>Address</div>
                      <div className=&quot;text-white font-medium&quot;>
                        364 E Main St STE 1008<br />
                        Middletown DE 19709
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;>
                <a
                  href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105&quot;
                >
                  <span>Get Started Today</span>
                  <ArrowRight className=&quot;w-5 h-5&quot; />
                </a>
                <a
                  href=&quot;tel:+13024640950&quot;
                  className=&quot;px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-black transition-all duration-300&quot;
                >
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </Layout>
  )
,

export default Homepage2026,