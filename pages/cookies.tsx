import _React from 'react';,
import Head from 'next/head';';
import { motion } from 'framer-motion';,
import { Cookie, Settings, Shield, Eye, Database, Mail, Phone } from 'lucide-react';,

export default function CookiesPage() {}
  return (;,
    <div className="min-h-screen bg-gray-50">";
      <Head>;
        <title>Cookie Policy - Zion Tech Group</title>;
        <meta name="description" content="Learn about how Zion Tech Group uses cookies and similar technologies." />";
      </Head>;

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-purple-900 text-white py-20">",
        <div className="container mx-auto px-4">";,
          <div className="max-w-4xl mx-auto text-center">";
            <Cookie className="w-16 h-16 mx-auto mb-6" />";
            <h1 className="text-5xl font-bold mb-6">");
              Cookie Policy;
            </h1>;
            <p className="text-xl text-blue-100">";
              Learn about how we use cookies and similar technologies to enhance your experience.;
            </p>;
            <p className="text-sm text-blue-200 mt-4">";
              Last updated: January 15, 2024,
            </p>;,
          </div>;
        </div>;
      </section>;

export default function CookiesPage() {
  const [cookiePreferences, setCookiePreferences] = useState({
    essential: true,
    analytics: false,
    functional: false,
    marketing: false
  });
  const [showPreferences, setShowPreferences] = useState(false);

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Types of Cookies We Use;
                </h2>;
                
                <div className="space-y-6 mb-8">";
                  <div className="flex items-start gap-4">";
                    <Settings className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />";
                    <div>;
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">";
                        Essential Cookies;
                      </h3>;
                      <p className="text-gray-600 mb-2">";
                        These cookies are necessary for the website to function properly. They enable basic;
                        functionality like page navigation and access to secure areas.;
                      </p>;
                      <p className="text-sm text-gray-500">";
                        <strong>Examples:</strong> Session cookies, authentication cookies, security cookies,
                      </p>;,
                    </div>;
                  </div>;

                  <div className="flex items-start gap-4">";
                    <Eye className="w-6 h-6 text-blue-600 mt-1 flex-shrink-0" />";
                    <div>;
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">";
                        Analytics Cookies;
                      </h3>;
                      <p className="text-gray-600 mb-2">";
                        These cookies help us understand how visitors interact with our website by collecting;
                        and reporting information anonymously.;
                      </p>;
                      <p className="text-sm text-gray-500">";
                        <strong>Examples:</strong> Google Analytics, page view tracking, user behavior analysis,
                      </p>;,
                    </div>;
                  </div>;

  const acceptAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: true,
      functional: true,
      marketing: true
    });
    savePreferences();
  };

  const rejectAll = () => {
    setCookiePreferences({
      essential: true,
      analytics: false,
      functional: false,
      marketing: false
    });
    savePreferences();
  };

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  How We Use Cookies;
                </h2>;
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">";
                  <div className="bg-blue-50 rounded-lg p-6">";
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                      Website Functionality;
                    </h3>;
                    <p className="text-gray-600">";
                      To ensure our website works properly and provide you with a seamless experience.;
                    </p>;
                  </div>;
                  
                  <div className="bg-blue-50 rounded-lg p-6">";
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                      Performance Analysis;
                    </h3>;
                    <p className="text-gray-600">";
                      To understand how our website is used and identify areas for improvement.;
                    </p>;
                  </div>;
                  
                  <div className="bg-blue-50 rounded-lg p-6">";
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                      Personalization;
                    </h3>;
                    <p className="text-gray-600">";
                      To remember your preferences and provide customized content and features.;
                    </p>;
                  </div>;
                  
                  <div className="bg-blue-50 rounded-lg p-6">";
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                      Security;
                    </h3>;
                    <p className="text-gray-600">";
                      To protect against fraud and ensure the security of our website and users.;
                    </p>;
                  </div>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Third-Party Cookies;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    We may use third-party services that set their own cookies. These include:;
                  </p>;
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">";
                    <li><strong>Google Analytics:</strong> For website analytics and performance monitoring</li>;
                    <li><strong>Social Media Platforms:</strong> For social sharing and integration features</li>;
                    <li><strong>Advertising Networks:</strong> For displaying relevant advertisements</li>;
                    <li><strong>Customer Support:</strong> For providing chat and support functionality</li>;
                  </ul>;
                  
                  <p className="text-gray-600">";
                    These third parties have their own privacy policies and cookie practices. We recommend;
                    reviewing their policies for more information.;
                  </p>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Managing Your Cookie Preferences;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    You have several options for managing cookies:;
                  </p>;
                  
                  <div className="space-y-4">";
                    <div className="bg-gray-50 rounded-lg p-4">";
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                        Browser Settings;
                      </h3>;
                      <p className="text-gray-600">";
                        Most browsers allow you to control cookies through their settings. You can block or;
                        delete cookies, or set preferences for specific websites.,
                      </p>;,
                    </div>;
                    
                    <div className="bg-gray-50 rounded-lg p-4">";
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                        Cookie Consent Banner;
                      </h3>;
                      <p className="text-gray-600">";
                        When you first visit our website, you'll see a cookie consent banner where you can ',
                        choose which types of cookies to accept.;,
                      </p>;
                    </div>;
                    
                    <div className="bg-gray-50 rounded-lg p-4">";
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">";
                        Opt-Out Tools;
                      </h3>;
                      <p className="text-gray-600">";
                        You can use industry opt-out tools to manage advertising cookies and tracking.;
                      </p>;
                    </div>;
                  </div>;
                </div>;

                <h2 className="text-3xl font-bold text-gray-900 mb-6">";
                  Impact of Disabling Cookies;
                </h2>;
                
                <div className="space-y-4 mb-8">";
                  <p className="text-gray-600">";
                    Please note that disabling certain cookies may impact your experience on our website:;
                  </p>;
                  
                  <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">";
                    <li>Some features may not work properly</li>;
                    <li>You may need to re-enter information more frequently</li>;
                    <li>Personalized content may not be available</li>;
                    <li>We may not be able to remember your preferences</li>;
                  </ul>;
                </div>;

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {cookieTypes.map((type, index) => {
                const IconComponent = type.icon;
                return (
                  <motion.div
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <IconComponent className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center mb-3">
                          <h3 className="text-xl font-bold text-gray-900 mr-3">
                            {type.title}
                          </h3>
                          {type.required ? (
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                              Required
                            </span>
                          ) : (
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                              Optional
                            </span>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {type.description}
                        </p>
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                          <ul className="space-y-1">
                            {type.examples.map((example, idx) => (
                              <li key={idx} className="flex items-center text-sm text-gray-600">
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                                {example}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Cookie Details
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Here's a detailed breakdown of the specific cookies we use and their purposes.
              </p>
            </motion.div>

            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Name</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {cookieDetails.map((cookie, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-mono text-gray-900">{cookie.name}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.duration}</td>
                        <td className="px-6 py-4">
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            cookie.type === 'Essential' ? "bg-red-100 text-red-800" :
                            cookie.type === 'Analytics' ? "bg-blue-100 text-blue-800" :
                            cookie.type === 'Functional' ? "bg-green-100 text-green-800" :
                            'bg-purple-100 text-purple-800'
                          }}>
                            {cookie.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                  Managing Your Cookie Preferences
                </h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  You have control over how cookies are used on our website. Here are your options for managing cookie preferences.
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Settings className="w-8 h-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Browser Settings</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    Most web browsers allow you to control cookies through their settings preferences. You can:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies</li>
                    <li>• Delete existing cookies</li>
                    <li>• Get notifications before cookies are set</li>
                  </ul>
                </div>

                <div className="bg-gray-50 p-8 rounded-xl">
                  <div className="flex items-center mb-4">
                    <Lock className="w-8 h-8 text-orange-600 mr-3" />
                    <h3 className="text-xl font-bold text-gray-900">Cookie Consent</h3>
                  </div>
                  <p className="text-gray-600 mb-4">
                    When you first visit our website, you can choose which types of cookies to accept:
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>• Essential cookies (always required)</li>
                    <li>• Analytics cookies (optional)</li>
                    <li>• Functional cookies (optional)</li>
                    <li>• Marketing cookies (optional)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Questions About Our Cookie Policy?
              </h2>
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">
                If you have any questions about how we use cookies or would like to update your preferences, please don't hesitate to contact us.
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center">
                <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
                  Contact Us
                </a>
                <a href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold">
                  Privacy Policy
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
}