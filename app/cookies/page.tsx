      <Navigation />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Cookie Policy</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">This policy explains how we use cookies and similar technologies on our website to enhance your experience.</p><div className="text-sm text-gray-400">Last updated: {lastUpdated}</section>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">What Are Cookies?</h2><p className="text-gray-300 mb-4 leading-relaxed">Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently and to provide information to website owners.</p><p className="text-gray-300 leading-relaxed">We use cookies and similar technologies to improve your browsing experience, personalize content and ads, provide social media features, and analyze our traffic. We also share information about your use of our site with our social media, advertising, and analytics partners.</p>
            </p>
          </div>
        </section>

              <div key={index} className="cyber-card p-6">
                <div className="flex items-center mb-4">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Types of Cookies We Use</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{cookieTypes.map((cookieType, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <cookieType.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{cookieType.title}</h3>
                  {cookieType.necessary && (
                    </span>
                  )}
                <p className="text-gray-300 mb-4">{cookieType.description}</p>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:<ul className="space-y-1">{cookieType.examples.map((example, exampleIndex) => (</ul>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples: </h4>,
                  <ul className="space-y-1">,
                    {cookieType.examples.map((example, exampleIndex) => (
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      <li key={exampleIndex} className="flex items-start text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{example}</span>
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Cookie Details Table */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Specific Cookies We Use</h2>
            <div className="overflow-x-auto"></div>
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="pb-3 text-cyan-400 font-semibold">Cookie Name<th className="pb-3 text-cyan-400 font-semibold">Purpose</th>
                    <th className="pb-3 text-cyan-400 font-semibold">Duration<th className="pb-3 text-cyan-400 font-semibold">Type<tbody>{cookieDetails.map((cookie, index) => (</tbody>
                    <tr key={index} className="border-b border-gray-800">
                      <td className="py-3 text-white font-mono">{cookie.name}<td className="py-3 text-gray-300">{cookie.purpose}<td className="py-3 text-gray-300">{cookie.duration}</td>
                      <td className="py-3">
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          cookie.type === 'Essential' ? 'bg-green-500/20 text-green-400' :
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Cookie Management */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Managing Your Cookie Preferences</h2>
                </p>
                <ul className="space-y-2 text-gray-300"></u>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Chrome</span></span>: Settings → Privacy and Security → Cookies and other site data</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Firefox</span></span>: Options → Privacy & Security → Cookies and Site Data</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Safari</span></span>: Preferences → Privacy → Manage Website Data</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Edge</span></span>: Settings → Cookies and site permissions</span>
                  </li>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Cookie Consent</h3><p className="text-gray-300 mb-4">When you first visit our website, you'll see a cookie consent banner where you can choose which types of cookies to accept.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                </p>
                <div className="space-y-3"></div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"></div>
                    <span className="text-white">Essential Cookies</span><span className="text-green-400 text-sm">Always Active</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"></div>
                    <span className="text-white">Analytics Cookies</span><button className="text-cyan-400 hover:text-cyan-300 text-sm">Manage</button>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  </div>
                  <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg"></div>
                    <span className="text-white">Marketing Cookies</span><button className="text-cyan-400 hover:text-cyan-300 text-sm">Manage</button>
                  </div>
                </div>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Third-Party Cookies */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Third-Party Cookies</h2><p className="text-gray-300 mb-6">Some cookies on our site are set by third-party services that appear on our pages. We have no control over these cookies.</p>
            </p>
                </a>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Social Media</h3><p className="text-gray-300 text-sm mb-2">Social media platforms may set cookies when you share content or visit our social media pages.</p><a href="https://www.facebook.com/privacy/explanation" className="text-cyan-400 hover:text-cyan-300 text-sm">Facebook Privacy Policy →</a>
                </a>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16">
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>364 E Main St STE 1008</p><p>Middletown, DE 19709</p><p>United States</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Email:</p> <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">privacy@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>,
,
      <Footer />,
    </div>,
  ),
},

export default CookiesPage,
import React from "react";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CookiesPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Cookie Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's cookie policy explaining how we use cookies and similar technologies on our website." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <Header />
        
        <main className="pt-24">
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Cookie Policy</h1>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6 text-gray-300 border border-white/20">
                <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">1. What Are Cookies</h2>
                  <p>Cookies are small text files that are placed on your computer or mobile device when you visit our website. They help us provide you with a better experience by remembering your preferences and enabling certain functionality.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Cookies</h2>
                  <p>We use cookies to:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Remember your preferences and settings</li>
                    <li>Analyze website traffic and usage patterns</li>
                    <li>Improve our website functionality and user experience</li>
                    <li>Provide personalized content and recommendations</li>
                    <li>Ensure website security and prevent fraud</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">3. Types of Cookies We Use</h2>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Essential Cookies</h3>
                      <p>These cookies are necessary for the website to function properly and cannot be disabled.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Analytics Cookies</h3>
                      <p>These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Functional Cookies</h3>
                      <p>These cookies enable enhanced functionality and personalization, such as remembering your language preference.</p>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-cyan-400 mb-2">Marketing Cookies</h3>
                      <p>These cookies are used to track visitors across websites to display relevant and engaging advertisements.</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">4. Managing Cookies</h2>
                  <p>You can control and manage cookies in various ways:</p>
                  <ul className="list-disc list-inside ml-4 space-y-2">
                    <li>Through your browser settings to block or delete cookies</li>
                    <li>By using our cookie consent banner when you first visit our website</li>
                    <li>By contacting us to update your preferences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">5. Third-Party Cookies</h2>
                  <p>Some cookies on our website are set by third-party services such as Google Analytics, social media platforms, and advertising networks. We do not control these cookies and recommend reviewing their respective privacy policies.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4">6. Contact Us</h2>
                  <p>If you have any questions about our use of cookies, please contact us at privacy@ziontechgroup.com</p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  ),
},

export default CookiesPage,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
