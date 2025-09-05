import React from 'react'
import MainLayout from '../components/layout/MainLayout'
import { motion } from 'framer-motion
import {
  // TODO: Implement
}
  Shield, 
  Settings, 
  CheckCircle, 
  AlertCircle,
  Cookie,
  Eye,
  Lock,
  Globe;'
} from 'lucide-react
const cookieTypes = [
  {'
    title: "Essential Cookies",
    description: "These cookies are necessary for the website to function and cannot be switched off in our systems.",
    required: true,]
    examples: [Authentication", "Security", "Load balancing", "User preferences"],
    icon: Shield;
  },
  {
    title: "Analytics Cookies",
    description: "These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.",
    required: false,
    examples: [Google Analytics", "Page views", "User behavior", "Performance metrics"],
    icon: Eye;
  },
  {
    title: "Functional Cookies",
    description: "These cookies enable the website to provide enhanced functionality and personalization.",
    required: false,
    examples: [Language preferences", "Region settings", "Customization", "User interface"],
    icon: Settings;
  },
  {
    title: "Marketing Cookies",
    description: "These cookies may be set through our site by our advertising partners to build a profile of your interests.",
    required: false,
    examples: [Advertising", "Social media", "Retargeting", "Personalized content"],
    icon: Globe;
  }
];

const cookieDetails = [
  {
    name: "_ga",
    purpose: "Google Analytics - Distinguishes users",
    duration: "2 years",
    type: "Analytics"
  },
  {
    name: "_gid",
    purpose: "Google Analytics - Distinguishes users",
    duration: "24 hours",
    type: "Analytics"
  },
  {
    name: "session_id",
    purpose: "Maintains user session",
    duration: "Session",
    type: "Essential"
  },
  {
    name: "user_preferences",
    purpose: "Stores user interface preferences",
    duration: "1 year",
    type: "Functional"
  },
  {
    name: "marketing_consent",
    purpose: "Tracks marketing consent status",
    duration: "1 year",
    type: "Marketing"
  }]
];

export default function CookiesPage() {
  return (
    <MainLayout;"
      title="Cookie Policy - Zion Tech Group"
      description="Learn about how Zion Tech Group uses cookies and similar technologies to enhance your browsing experience and analyze website usage."
    >
</MainLayout>"
      <div className="min-h-screen bg-gray-50">"
</div>"
        <section className="bg-gradient-to-br from-orange-900 via-red-900 to-pink-900 text-white py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-4xl mx-auto"
            >
</motion>"
              <h1 className="text-4xl md:text-6xl font-bold mb-6">"
</h1>"
                <span className="bg-gradient-to-r from-orange-400 to-pink-400 bg-clip-text text-transparent">"
</span>
                </span>
              </h1>"
              <p className="text-xl md:text-2xl text-gray-300 mb-8">"
</p>
              </p>
            </motion.div>
          </div>
        </section>"
        <section className="py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto">"
</div>
              <motion.div;"
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
</motion>"
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
                </h2>"
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
                </p>
              </motion.div>
"
              <div className="bg-white rounded-xl shadow-lg p-8 mb-12">"
</div>"
                <div className="flex items-start space-x-4">"
</div>"
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">"
</div>"
                    <Cookie className="w-8 h-8 text-white" />"
</Cookie>
                  </div>
                  <div>
</div>"
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">How We Use Cookies</h3>"
                    <p className="text-gray-600 mb-6 leading-relaxed">"
</p>
                    </p>"
                    <ul className="space-y-2">"
</ul>"
                      <li className="flex items-center text-gray-600">"
</li>"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />"
</CheckCircle>
                      </li>"
                      <li className="flex items-center text-gray-600">"
</li>"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />"
</CheckCircle>
                      </li>"
                      <li className="flex items-center text-gray-600">"
</li>"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />"
</CheckCircle>
                      </li>"
                      <li className="flex items-center text-gray-600">"
</li>"
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />"
</CheckCircle>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
</div>
                  <motion.div;
                    key={index}
                    className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
</motion>"
                    <div className="flex items-start space-x-4">"
</div>"
                      <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-pink-600 rounded-lg flex items-center justify-center flex-shrink-0">"
</div>"
                        <IconComponent className="w-6 h-6 text-white" />"
</IconComponent>
                      </div>"
                      <div className="flex-1">"
</div>"
                        <div className="flex items-center mb-3">"
</div>"
                          <h3 className="text-xl font-bold text-gray-900 mr-3">"
</h3>
                          </h3>"
                            <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">"
</span>
                            </span>"
                            <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">"
</span>
                            </span>
                        </div>"
                        <p className="text-gray-600 mb-4 leading-relaxed">"
</p>
                        </p>
                        <div>
</div>"
                          <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>"
                          <ul className="space-y-1">"
</ul>"
                              <li key={idx} className="flex items-center text-sm text-gray-600">"
</li>"
                                <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />"
</CheckCircle>
                              </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>)
                );
              })}
            </div>
          </div>
        </section>"
        <section className="py-20">"
</section>"
          <div className="container mx-auto px-4">"
</div>
            <motion.div;"
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
              </h2>"
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
              </p>
            </motion.div>
"
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">"
</div>"
              <div className="overflow-x-auto">"
</div>"
                <table className="w-full">"
</table>"
                  <thead className="bg-gray-50">"
</thead>
                    <tr>
</tr>"
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Cookie Name</th>"
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Purpose</th>"
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Duration</th>"
                      <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Type</th>"
                    </tr>
                  </thead>"
                  <tbody className="divide-y divide-gray-200">"
</tbody>"
                      <tr key={index} className="hover:bg-gray-50">"
</tr>"
                        <td className="px-6 py-4 text-sm font-mono text-gray-900">{cookie.name}</td>"
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.purpose}</td>"
                        <td className="px-6 py-4 text-sm text-gray-600">{cookie.duration}</td>"
                        <td className="px-6 py-4">"
</td>
                          <span className={`px-2 py-1 text-xs rounded-full ${
                            cookie.type === 'Essential' ? 'bg-red-100 text-red-800' :''
                            cookie.type === 'Analytics' ? 'bg-blue-100 text-blue-800' :''
                            cookie.type === 'Functional' ? 'bg-green-100 text-green-800' :''
                            'bg-purple-100 text-purple-800''
                          }`}>
</span>
                          </span>
                        </td>
                      </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>'
        <section className="py-20 bg-white">"
</section>"
          <div className="container mx-auto px-4">"
</div>"
            <div className="max-w-4xl mx-auto">"
</div>
              <motion.div;"
                className="text-center mb-16"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
</motion>"
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">"
</h2>
                </h2>"
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">"
</p>
                </p>
              </motion.div>
"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">"
</div>"
                <div className="bg-gray-50 p-8 rounded-xl">"
</div>"
                  <div className="flex items-center mb-4">"
</div>"
                    <Settings className="w-8 h-8 text-orange-600 mr-3" />"
</Settings>"
                    <h3 className="text-xl font-bold text-gray-900">Browser Settings</h3>"
                  </div>"
                  <p className="text-gray-600 mb-4">"
</p>
                  </p>"
                  <ul className="space-y-2 text-sm text-gray-600">"
</ul>
                    <li>• Block all cookies</li>
                    <li>• Block third-party cookies</li>
                    <li>• Delete existing cookies</li>
                    <li>• Get notifications before cookies are set</li>
                  </ul>
                </div>
"
                <div className="bg-gray-50 p-8 rounded-xl">"
</div>"
                  <div className="flex items-center mb-4">"
</div>"
                    <Lock className="w-8 h-8 text-orange-600 mr-3" />"
</Lock>"
                    <h3 className="text-xl font-bold text-gray-900">Cookie Consent</h3>"
                  </div>"
                  <p className="text-gray-600 mb-4">"
</p>
                  </p>"
                  <ul className="space-y-2 text-sm text-gray-600">"
</ul>
                    <li>• Essential cookies (always required)</li>
                    <li>• Analytics cookies (optional)</li>
                    <li>• Functional cookies (optional)</li>
                    <li>• Marketing cookies (optional)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>"
        <section className="py-20 bg-gradient-to-r from-orange-600 to-pink-600 text-white">"
</section>"
          <div className="container mx-auto px-4 text-center">"
</div>
            <motion.div;
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
</motion>"
              <h2 className="text-3xl md:text-4xl font-bold mb-6">"
</h2>
              </h2>"
              <p className="text-xl text-orange-100 mb-8 max-w-3xl mx-auto">"
</p>
              </p>"
              <div className="flex flex-col sm:flex-row gap-4 justify-center">"
</div>"
                <a href="mailto:kleber@ziontechgroup.com" className="px-8 py-4 bg-white text-orange-600 rounded-lg hover:bg-gray-100 transition-colors font-semibold">"
</a>
                </a>"
                <a href="/privacy" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-orange-600 transition-all duration-300 font-semibold">"
</a>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </MainLayout>"