import React from 'react';''
import MainLayout from '../components/layout/MainLayout';'
class ErrorBoundary extends React.Component {
  // TODO: Implement
}
  constructor(props) {
    super(props);
    this.state = { hasError: false };

  static getDerivedStateFromError(error) {
    return { hasError: true };

  componentDidCatch(error, errorInfo) {'
    console.error('Error caught by boundary:', error, errorInfo);'
  render() {
    if (this.state.hasError) {
      return <div>Something went wrong.</div>;'
      icon: <Database className="w-8 h-8" />,"
</Database>"
      icon: <Settings className="w-8 h-8" />,"
</Settings>"
      icon: <Globe className="w-8 h-8" />,"
</Globe>"
      icon: <Lock className="w-8 h-8" />,"
</Lock>"
      icon: <Eye className='w-6 h-6' />},'
</Eye>'
      icon: <CheckCircle className='w-6 h-6' />},'
</CheckCircle>'
      icon: <AlertTriangle className='w-6 h-6' />},'
</AlertTriangle>'
      icon: <Database className='w-6 h-6' />},'
</Database>'
      icon: <User className='w-6 h-6' />},'
</User>'
      icon: <Settings className='w-6 h-6' />},'
</Settings>'
      icon: <Eye className="w-6 h-6" />"
</Eye>"
      icon: <CheckCircle className="w-6 h-6" />"
</CheckCircle>"
      icon: <AlertTriangle className="w-6 h-6" />"
</AlertTriangle>"
      icon: <Database className="w-6 h-6" />"
</Database>"
      icon: <User className="w-6 h-6" />"
</User>"
      icon: <Settings className="w-6 h-6" />"
</Settings>"
    <MainLayout title="Privacy Policy - Zion Tech Group">"
</MainLayout>"
      <div className="container mx-auto px-4 py-16">"
</div>"
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>""
        <p className="text-lg text-gray-700">"
</p>
        </p>
      </div>
    </MainLayout>
    <MainLayout;"
      title="Privacy Policy - Zion Tech Group"""
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information."""
      keywords="privacy policy, data protection, personal information, GDPR compliance"""
      canonical="https://ziontechgroup && ziontechgroup.com/privacy">;"
</MainLayout>"
      <div className="min-h-screen bg-gray-50">;"
</div>"
        <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">;"
</section>"
          <div className="max-w-7xl mx-auto px-4">;"
</div>
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0 && 0.8 }}"
              className="text-center">;"
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">;"
</h1>
              </h1>;"
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">;"
</p>
              </p>;
            </motion && motion.div>;
          </div>;
        </section>;"
        <section className="py-16 px-4">;"
</section>"
          <div className="max-w-4xl mx-auto">;"
</div>
            <motion&& motion.div;
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }"
import React from 'react',''
import Layout from '../components/layout/Layout',''
import SEOOptimizer from '../components/SEOOptimizer',''
import AnalyticsTracker from '../components/AnalyticsTracker',''
import ErrorBoundary from '../components/ErrorBoundary',''
import { motion } from 'framer-motion','
  Shield, Lock, Eye, Database, Globe,
  User, Settings, AlertTriangle, CheckCircle, Mail;'
} from 'lucide-react','
const PrivacyPage: React.FC = () => {
</motion>'
      icon: <Database className="w-8 h-8" />,"
</Database>"
      icon: <Settings className="w-8 h-8" />,"
</Settings>"
      icon: <Globe className="w-8 h-8" />,"
</Globe>"
      icon: <Lock className="w-8 h-8" />,"
</Lock>"
      icon: <Eye className="w-6 h-6" />"
</Eye>"
      icon: <CheckCircle className="w-6 h-6" />"
</CheckCircle>"
      icon: <AlertTriangle className="w-6 h-6" />"
</AlertTriangle>"
      icon: <Database className="w-6 h-6" />"
</Database>"
      icon: <User className="w-6 h-6" />"
</User>"
      icon: <Settings className="w-6 h-6" />"
</Settings>
    <ErrorBoundary>
</ErrorBoundary>
      <SEOOptimizer />
</SEOOptimizer>
      <AnalyticsTracker />
</AnalyticsTracker>
      <Layout>
</Layout>"
        <main className="relative z-10 pt-8">"
</main>"
          <section className="py-20 px-4">"
</section>"
            <div className="max-w-6xl mx-auto text-center">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                animate={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
              >
</motion>"
                <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">"
</h1>
                </h1>"
                <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">"
</p>
                </p>"
                <div className="flex items-center justify-center gap-4 text-gray-400">"
</div>"
                  <Shield className="w-6 h-6" />"
</Shield>
                  <span>Last updated: {lastUpdated}</span>
                </div>
              </motion.div>
            </div>
          </section>"
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">"
</section>"
            <div className="max-w-6xl mx-auto">"
</div>"
              <div className="grid lg:grid-cols-2 gap-12 items-center">"
</div>
                <motion.div;
                  initial={{ opacity: 0, x: -20 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                  whileInView={{ opacity: 1, x: 0 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                  transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                >
</motion>"
                  <h2 className="text-4xl font-bold mb-6 text-white">"
</h2>
                  </h2>"
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">"
</p>
                  </p>"
                  <p className="text-lg text-gray-300 mb-6 leading-relaxed">"
</p>
                  </p>"
                  <div className="flex items-center gap-4 text-cyan-400">"
</div>"
                    <Lock className="w-6 h-6" />"
</Lock>"
                    <span className="font-medium">Your data is safe with us</span>"
                  </div>
                </motion.div>
                <motion.div;
                  initial={{ opacity: 0, x: 20 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                  whileInView={{ opacity: 1, x: 0 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                  transition={{ duration: 0.6, delay: 0.2 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });""
                  className="relative""
                >
</motion>"
                  <div className="bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-2xl p-8 border border-cyan-500/30">"
</div>"
                    <div className="text-center space-y-6">"
</div>"
                      <div className="w-24 h-24 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mx-auto">"
</div>"
                        <Shield className="w-12 h-12 text-white" />"
</Shield>
                      </div>"
                      <h3 className="text-2xl font-bold text-white">Data Protection</h3>""
                      <p className="text-gray-300">Enterprise-grade security for your information</p>""
                      <div className="grid grid-cols-2 gap-4 text-sm">"
</div>"
                        <div className="text-center">"
</div>"
                          <div className="text-2xl font-bold text-cyan-400">256-bit</div>""
                          <div className="text-gray-400">Encryption</div>"
                        </div>"
                        <div className="text-center">"
</div>"
                          <div className="text-2xl font-bold text-purple-400">99.9%</div>""
                          <div className="text-gray-400">Uptime</div>"
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>"
          <section className="py-20 px-4">"
</section>"
            <div className="max-w-6xl mx-auto">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });""
                className="text-center mb-16""
              >
</motion>"
                <h2 className="text-4xl font-bold mb-4 text-white">Our Privacy Principles</h2>""
                <p className="text-xl text-gray-300">The foundation of how we handle your data</p>"
              </motion.div>"
              <div className="grid md:grid-cols-2 gap-8">"
</div>
                  <motion.div;
                    key={section.title  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                    initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                    whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                    transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });""
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50""
                  >
</motion>
                    <div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
</div>"
                      <div className="text-white">"
</div>
                      </div>
                    </div>"
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>""
                    <ul className="space-y-3">"
</ul>"
                        <li key={itemIndex} className="flex items-start gap-3">"
</li>"
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>""
                          <span className="text-gray-300">{item}</span>"
                        </li>
                    </ul>;
                  </motion.div>;
                ))  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
              </div>;
            </div>;
          </section>;"
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">"
</section>"
            <div className="max-w-6xl mx-auto">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });""
                className="text-center mb-16""
              >
</motion>"
                <h2 className="text-4xl font-bold mb-4 text-white">Your Privacy Rights</h2>""
                <p className="text-xl text-gray-300">You have control over your personal information</p>"
              </motion.div>"
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">"
</div>
                  <motion.div;
                    key={right.title  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                    initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                    whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                    transition={{ duration: 0.6, delay: index * 0.1 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });""
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50 text-center""
                  >
</motion>"
                    <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">"
</div>"
                      <div className="text-white">"
</div>
                      </div>
                    </div>"
                    <h3 className="text-xl font-bold text-white mb-2">{right.title}</h3>""
                    <p className="text-gray-300 text-sm">{right.description}</p>"
                  </motion.div>
                ))  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
              </div>;
            </div>;
          </section>;"
          <section className="py-20 px-4">"
</section>"
            <div className="max-w-4xl mx-auto">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });""
                className="space-y-12""
              >
</motion>
                <div>
</div>"
                  <h2 className="text-3xl font-bold text-white mb-6">Detailed Privacy Information</h2>""
                  <div className="space-y-8">"
</div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-4">Information Collection</h3>""
                      <p className="text-gray-300 mb-4 leading-relaxed">"
</p>
                      </p>"
                      <p className="text-gray-300 leading-relaxed">"
</p>
                      </p>
                    </div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-4">Data Usage and Purpose</h3>""
                      <p className="text-gray-300 mb-4 leading-relaxed">"
</p>
                      </p>"
                      <p className="text-gray-300 leading-relaxed">"
</p>
                      </p>
                    </div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-4">Data Sharing and Disclosure</h3>""
                      <p className="text-gray-300 mb-4 leading-relaxed">"
</p>
                      </p>"
                      <p className="text-gray-300 leading-relaxed">"
</p>
                      </p>
                    </div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-4">Data Security Measures</h3>""
                      <p className="text-gray-300 mb-4 leading-relaxed">"
</p>
                      </p>"
                      <p className="text-gray-300 leading-relaxed">"
</p>
                      </p>
                    </div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-4">Data Retention</h3>""
                      <p className="text-gray-300 mb-4 leading-relaxed">"
</p>
                      </p>"
                      <p className="text-gray-300 leading-relaxed">"
</p>
                      </p>
                    </div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-4">International Data Transfers</h3>""
                      <p className="text-gray-300 mb-4 leading-relaxed">"
</p>
                      </p>"
                      <p className="text-gray-300 leading-relaxed">"
</p>
                      </p>
                    </div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-4">Cookies and Tracking Technologies</h3>""
                      <p className="text-gray-300 mb-4 leading-relaxed">"
</p>
                      </p>"
                      <p className="text-gray-300 leading-relaxed">"
</p>
                      </p>
                    </div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-4">Children's Privacy</h3>''
                      <p className="text-gray-300 mb-4 leading-relaxed">"
</p>
                      </p>"
                      <p className="text-gray-300 leading-relaxed">"
</p>
                      </p>
                    </div>
                    <div>
</div>"
                      <h3 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h3>""
                      <p className="text-gray-300 mb-4 leading-relaxed">"
</p>
                      </p>"
                      <p className="text-gray-300 leading-relaxed">"
</p>
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </section>"
          <section className="py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50">"
</section>"
            <div className="max-w-4xl mx-auto text-center">"
</div>
              <motion.div;
                initial={{ opacity: 0, y: 20 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                whileInView={{ opacity: 1, y: 0 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
                transition={{ duration: 0.6 }  } catch (error) {"
    console.error("Error:", error);""
    return res.status(500).json({ error: "Internal server error" });"
              >
</motion>"
                <h2 className="text-4xl font-bold mb-6 text-white">"
</h2>
                </h2>"
                <p className="mb-6">"
</p>
                </p>
"
                <h2 className="text-2xl font-bold mb-6">Information We Collect</h2>""
                <p className="mb-6">"
</p>
                </p>
                "
                <h3 className="text-xl font-semibold mb-4">Personal Information</h3>""
                <h3 className="text-xl font-semibold mb-4">"
</h3>
                </h3>"
                <ul className="list-disc pl-6 mb-6">"
</ul>
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Payment information</li>
                </ul>
"
                <h3 className="text-xl font-semibold mb-4">"
</h3>
                </h3>"
                <h3 className="text-xl font-semibold mb-4">Usage Information</h3>""
                <h3 className="text-xl font-semibold mb-4">"
</h3>
                </h3>"
                <ul className="list-disc pl-6 mb-6">"
</ul>
                  <li>How you use our services</li>
                  <li>Device information</li>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                </ul>
"
                <h2 className="text-2xl font-bold mb-6 mt-12">"
</h2>
                </h2>"
                <p className="mb-6">"
</p>
                </p>
"
                <h2 className="text-2xl font-bold mb-6 mt-12">How We Use Your Information</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <ul className="list-disc pl-6 mb-6">"
</ul>
                  <li>Provide and maintain our services</li>
                  <li>Process transactions</li>
                  <li>Send you technical notices and support messages</li>
                  <li>Respond to your comments and questions</li>
                  <li>Improve our services and develop new features</li>
                  <li>Monitor and analyze usage and trends</li>
                </ul>
"
                <h2 className="text-2xl font-bold mb-6 mt-12">"
</h2>
                </h2>"
                <p className="mb-6">"
</p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Information Sharing</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>""
                <p className="mb-6">"
</p>
                </p>
                </p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>""
                <p className="mb-6">"
</p>
                </p>
"
                <h2 className="text-2xl font-bold mb-6 mt-12">Information Sharing</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Data Security</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Your Rights</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <h2 className="text-2xl font-bold mb-6 mt-12">Contact Us</h2>""
                <p className="mb-6">"
</p>
                </p>"
                <div className="bg-gray-50 rounded-lg p-6">"
</div>"
                  <div className="flex items-center mb-4">"
</div>"
                    <Mail className="w-5 h-5 text-blue-600 mr-3" />"
</Mail>
                    <span>kleber@ziontechgroup.com</span>
                  </div>"
                  <div className="flex items-center mb-4">"
</div>"
                    <Phone className="w-5 h-5 text-blue-600 mr-3" />"
</Phone>
                    <span>+1 302 464 0950</span>
                  </div>"
                  <div className="flex items-start">"
</div>"
                    <Users className="w-5 h-5 text-blue-600 mr-3 mt-1" />"
</Users>
                    <div>
</div>
                      <p>Zion Tech Group</p>
                      <p>364 E Main St STE 1008</p>
                      <p>Middletown, DE 19709</p>
                    </div>
                  </div>
                </div>
"
<p className="text-sm text-gray-600 mt-8">"
</p>"
                <p className="text-sm text-gray-600 mt-8">"
</p>
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </div>"
      icon: <Database className='w-8 h-8' />,'
</Database>'
      icon: <Settings className='w-8 h-8' />,'
</Settings>'
      icon: <Globe className='w-8 h-8' />,'
</Globe>'
      icon: <Lock className='w-8 h-8' />,'
</Lock>'
      icon: <Eye className='w-6 h-6' />},'
</Eye>'
      icon: <CheckCircle className='w-6 h-6' />},'
</CheckCircle>'
      icon: <AlertTriangle className='w-6 h-6' />},'
</AlertTriangle>'
      icon: <Database className='w-6 h-6' />},'
</Database>'
      icon: <User className='w-6 h-6' />},'
</User>'
      icon: <Settings className='w-6 h-6' />},  ];'
</Settings>
    <ErrorBoundary>
</ErrorBoundary>
      <SEOOptimizer />
</SEOOptimizer>
      <AnalyticsTracker />
</AnalyticsTracker>
      <Layout>
</Layout>'
        <main className='relative z-10 pt-8'>'
</main>'
          <section className='py-20 px-4'>'
</section>'
            <div className='max-w-6xl mx-auto text-center'>              <motion.div;'
</div>'
                <h1 className='text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent'>'
</h1>
                </h1>'
                <p className='text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto'>'
</p>
                </p>'
                <div className='flex items-center justify-center gap-4 text-gray-400'>'
</div>'
                  <Shield className='w-6 h-6' />                  <span>Last updated: {lastUpdated}</span>'
</Shield>
                </div>
              </motion.div>
            </div>
          </section>
    </MainLayout>'
              <div className="prose prose-lg max-w-none">;"
</div>"
                <h2 className="text-2xl font-bold mb-6">;"
</h2>
                </h2>;"
                <p className="mb-6">;"
</p>
    <MainLayout;"
      title="Privacy Policy - Zion Tech Group";""
      description="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information.";""
      keywords="privacy policy, data protection, personal information, GDPR compliance";""
      canonical="https://ziontechgroup.com / privacy";"
    >;
</MainLayout>"
      <div className="min - h-screen bg - gray - 50">;"
</div>"
        <section className="bg - gradient - to - r from - blue - 600 to - purple - 600 text - white py - 20">;"
</section>"
          <div className="max - w-7xl mx - auto px - 4">;"
</div>
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}"
              className="text - center";"
            >;
</motion>"
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;"
</h1>
              </h1>;"
              <p className="text - xl text - blue - 100 mb - 8 max - w-3xl mx - auto">;"
</p>
              </p>;
            </motion.div>;
          </div>;
        </section>;"
        <section className="py - 16 px - 4">;"
</section>"
          <div className="max - w-4xl mx - auto">;"
</div>
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}"
              className="bg - white rounded - 2xl shadow - lg p - 8 md:p - 12";"
            >;
</motion>"
              <div className="prose prose - lg max - w-none">;"
</div>"
                <h2 className="text - 2xl font - bold mb - 6">;"
</h2>
                </h2>;"
                <p className="mb - 6">;"
</p>
                </p>;"
                <h3 className="text - xl font - semibold mb - 4">;"
</h3>
                </h3>;"
                <ul className="list - disc pl - 6 mb - 6">;"
</ul>
                  <li > Name and contact information</li>;
                  <li > Email address</li>;
                  <li > Phone number</li>;
                  <li > Company information</li>;
                  <li > Payment information</li>;
                </ul>;"
                <h3 className="text - xl font - semibold mb - 4">;"
</h3>
                </h3>;"
                <ul className="list - disc pl - 6 mb - 6">;"
</ul>
                  <li > How you use our services</li>;
                  <li > Device information</li>;
                  <li > IP address</li>;
                  <li > Browser type and version</li>;
                  <li > Operating system</li>;
                </ul>;"
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">;"
</h2>
                </h2>;"
                <p className="mb - 6">;"
</p>
                </p>;"
                <ul className="list - disc pl - 6 mb - 6">;"
</ul>
                  <li > Provide and maintain our services</li>;
                  <li > Process transactions</li>;
                  <li > Send you technical notices and support messages</li>;
                  <li > Respond to your comments and questions</li>;
                  <li > Improve our services and develop new features</li>;
                  <li > Monitor and analyze usage and trends</li>;
                </ul>;"
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">;"
</h2>
                </h2>;"
                <p className="mb - 6">;"
</p>
                </p>;"
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Data Security</h2>;""
                <p className="mb - 6">;"
</p>
                </p>;"
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Your Rights</h2>;""
                <p className="mb - 6">;"
</p>
                </p>;
    </MainLayout>;"
                <div className="flex flex-col sm: flex-row gap-4 justify-center">"
</div>
                  <a;"
                    href="mailto:kleber@ziontechgroup.com"""
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2""
                  >
</a>"
                    <Mail className="w-5 h-5" />"
</Mail>
                  </Link>
                  <a;"
                    href="/contact"""
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2""
                  >
</a>"
                    <User className="w-5 h-5" />"
</User>
                  </Link>
                  <a;
                    href=&quot;/contact&quot;
                    className=&quot;border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2&quot;
                  >
</a>
                    <User className=&quot;w-5 h-5&quot; />
</User>
                  </Link>

                </div>
              </motion.div>
            </div>
          </section>
        </main>
      </Layout>
    </ErrorBoundary>"
                <h2 className="text - 2xl font - bold mb - 6 mt - 12">Contact Us</h2>;""
                <p className="mb - 6">;"
</p>
                </p>;"
                <div className="bg - gray - 50 rounded - lg p - 6">;"
</div>"
                  <div className="flex items - center mb - 4">;"
</div>"
                    <Mail className="w - 5 h - 5 text - blue - 600 mr - 3" />;"
</Mail>
                    <span > kleber@ziontechgroup.com</span>;
                  </div>;"
                  <div className="flex items - center mb - 4">;"
</div>"
                    <Phone className="w - 5 h - 5 text - blue - 600 mr - 3" />;"
</Phone>
                    <span>+1 302 464 0950</span>;
                  </div>;"
                  <div className="flex items - start">;"
</div>"
                    <Users className="w - 5 h - 5 text - blue - 600 mr - 3 mt - 1" />;"
</Users>
                    <div>;
</div>
                      <p > Zion Tech Group</p>;
                      <p > 364 E Main St STE 1008</p>;
                      <p > Middletown, DE 19709</p>;
                    </div>;
                  </div>;
                </div>;"
<p className="text - sm text - gray - 600 mt - 8">;"
</p>
                </p>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </MainLayout>);"
                <div className="flex flex-col sm: flex-row gap-4 justify-center">;"
</div>
                  <a;"
                    href="mailto:kleber@ziontechgroup.com";""
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2";"
                  >;
</a>"
                    <Mail className="w-5 h-5" />;"
</Mail>
                  </a>;
                  <a;"
                    href="/contact";""
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-black transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2";"
                  >;
</a>"
                    <User className="w-5 h-5" />;"
</User>
                  </a>;
                </div>;
              </motion.div>;
            </div>;
          </section>;
        </main>;
      </Layout>;
    </ErrorBoundary>;"