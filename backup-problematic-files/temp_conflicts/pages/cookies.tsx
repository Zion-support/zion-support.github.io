
import React from 'react',;''
import Head from 'next/head',;''
import { motion } from 'framer-motion',;'
import { ;
  Cookie, Settings, Shield, Eye, Database, ;
  CheckCircle, AlertTriangle, Info, Globe;'
} from 'lucide-react',;''
import EnhancedNavigation from '../components/EnhancedNavigation',;''
import EnhancedFooter from '../components/EnhancedFooter',;'

;
export default function CookiesPage() {;'
  const lastUpdated = 'January 15, 2025',;'
;
  const cookieTypes = [;

    {;'
      name:'Essential Cookies',;''
      description:'These cookies are necessary for the website to function properly and cannot be disabled.',;'
      examples:[;'
        'Authentication and security cookiesSession management cookies',;''
        'Load balancing cookiesUser preference cookies';']
      ],;'
      icon:<Shield className="w-6 h-6" />,;"
</Shield>"
      icon:<Database className="w-6 h-6" />,;"
</Database>"
      icon:<Globe className="w-6 h-6" />,;"
</Globe>"
      icon:<Settings className="w-6 h-6" />,;"
</Settings>"
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;"
</div>
      <Head>;
</Head>"
        <meta property="og:description" content="Comprehensive cookie policy explaining how we use cookies to enhance your experience on our website." />;"
</meta>"
        <meta name="twitter:card" content="summary_large_image" />;"
</meta>"
        <link rel="canonical" href="https://ziontechgroup.com/cookies" />;"
</link>

      </Head>;
      <EnhancedNavigation />;

</EnhancedNavigation>"
      <section className="relative pt-32 pb-20 px-6">;"
</section>"
        <div className="max-w-6xl mx-auto text-center">;"
</div>

          <motion.div;
            initial={{ opacity:0, y:30 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}

          >;
</motion>"
            <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-6">;"
</div>"
              <Cookie className="w-10 h-10 text-white" />;"
</Cookie>
            </div>;"
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent mb-6">;"
</h1>
            </h1>;"
            <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed">;"
</p>
            </p>;"
            <div className="mt-8 text-gray-300">;"
</div>
              <p>Last updated:{lastUpdated}</p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;"
      <section className="py-20 px-6">;"
</section>"
        <div className="max-w-4xl mx-auto">;"
</div>

          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}

            viewport={{ once:true }}"
            className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50";"
          >;
</motion>"
            <h2 className="text-3xl font-bold text-white mb-6">What Are Cookies?</h2>;""
            <p className="text-gray-300 leading-relaxed mb-6">;"
</p>
            </p>;"
            <p className="text-gray-300 leading-relaxed">;"
</p>
            </p>;
          </motion.div>;
        </div>;
      </section>;"
      <section className="py-20 px-6">;"
</section>"
        <div className="max-w-6xl mx-auto">;"
</div>

          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}

            viewport={{ once:true }}"
            className="text-center mb-16";"
          >;
</motion>"
            <h2 className="text-4xl font-bold text-white mb-4">Types of Cookies We Use</h2>;""
            <p className="text-xl text-gray-300">Understanding the different categories of cookies on our website</p>;"
          </motion.div>;
;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
</div>
              <motion.div;

                key={type.name}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:index * 0.1 }}

                viewport={{ once:true }}"
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300";"
              >;
</motion>"
                <div className="flex items-center space-x-3 mb-4">;"
</div>
                  <div className={`w-12 h-12 bg-gradient-to-r ${type.color} rounded-lg flex items-center justify-center`}>;
</div>
                  </div>;"
                  <h3 className="text-xl font-bold text-white">{type.name}</h3>;"
                </div>;"
                <p className="text-gray-300 leading-relaxed mb-4">{type.description}</p>;""
                <div className="space-y-2">;"
</div>"
                  <h4 className="text-white font-semibold mb-2">Examples:</h4>;""
                    <div key={exampleIndex} className="flex items-center space-x-3">;"
</div>"
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />;"
</CheckCircle>"
                      <span className="text-gray-300 text-sm">{example}</span>;"

                    </div>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;

      </section>;"
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">;"
</section>"
        <div className="max-w-6xl mx-auto">;"
</div>

          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}

            viewport={{ once:true }}"
            className="text-center mb-16";"
          >;
</motion>"
            <h2 className="text-4xl font-bold text-white mb-4">Third-Party Cookies</h2>;""
            <p className="text-xl text-gray-300">Cookies from trusted third-party services we use</p>;"
          </motion.div>;
;"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">;"
</div>
              <motion.div;

                key={cookie.name}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:index * 0.1 }}

                viewport={{ once:true }}"
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50";"
              >;
</motion>"
                <h3 className="text-xl font-bold text-white mb-3">{cookie.name}</h3>;""
                <p className="text-gray-300 mb-3">{cookie.purpose}</p>;""
                <div className="flex items-center justify-between text-sm">;"
</div>"
                  <span className="text-gray-400">Duration:{cookie.duration}</span>;"
                  <a;
                    href={cookie.privacy}"
                    target="_blank";""
                    rel="noopener noreferrer";""
                    className="text-cyan-400 hover:text-cyan-300 transition-colors";"
                  >;
</a>

                  </a>;
                </div>;
              </motion.div>;
            ))}
          </div>;
        </div>;

      </section>;"
      <section className="py-20 px-6">;"
</section>"
        <div className="max-w-4xl mx-auto">;"
</div>

          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}

            viewport={{ once:true }}"
            className="text-center mb-16";"
          >;
</motion>"
            <h2 className="text-4xl font-bold text-white mb-4">Managing Your Cookie Preferences</h2>;""
            <p className="text-xl text-gray-300">How you can control and manage cookies on our website</p>;"
          </motion.div>;
;"
          <div className="space-y-8">;"
</div>"
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">;"
</div>"
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">;"
</h3>"
                <Settings className="w-6 h-6 text-cyan-400 mr-3" />;"
</Settings>
              </h3>;"
              <p className="text-gray-300 leading-relaxed mb-4">;"
</p>
              </p>;"
              <ul className="space-y-2 text-gray-300">;"
</ul>
              </ul>;
            </div>;"
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">;"
</div>"
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">;"
</h3>"
                <Eye className="w-6 h-6 text-green-400 mr-3" />;"
</Eye>
              </h3>;"
              <p className="text-gray-300 leading-relaxed mb-4">;"
</p>
              </p>;"
              <ul className="space-y-2 text-gray-300">;"
</ul>
              </ul>;
            </div>;"
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">;"
</div>"
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">;"
</h3>"
                <AlertTriangle className="w-6 h-6 text-yellow-400 mr-3" />;"
</AlertTriangle>
              </h3>;"
              <div className="space-y-4 text-gray-300">;"
</div>
                <p>;
</p>
                  <strong>Essential Cookies:</strong> These cookies are necessary for the website to function properly. ;
                </p>;
                <p>;
</p>
                  <strong>Performance Impact:</strong> Disabling certain cookies may affect website performance and ;
                </p>;
                <p>;
</p>
                  <strong>Third-Party Services:</strong> Some third-party services may continue to set cookies ;

                </p>;
              </div>;
            </div>;
          </div>;
        </div>;

      </section>;"
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">;"
</section>"
        <div className="max-w-4xl mx-auto text-center">;"
</div>

          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}

          >;
</motion>"
            <h2 className="text-4xl font-bold text-white mb-6">Questions About Cookies?</h2>;""
            <p className="text-xl text-gray-300 mb-8">;"
</p>
            </p>;"
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-2xl p-8 border border-gray-700/50">;"
</div>"
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">;"
</div>
                <div>;
</div>"
                  <h3 className="text-xl font-bold text-white mb-4">Contact Information</h3>;""
                  <div className="space-y-3 text-gray-300">;"
</div>
                    <p><strong>Email:</strong> privacy@ziontechgroup.com</p>;
                    <p><strong>Phone:</strong> +1 302 464 0950</p>;
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>;
                  </div>;
                </div>;
                <div>;
</div>"
                  <h3 className="text-xl font-bold text-white mb-4">Cookie Management</h3>;""
                  <div className="space-y-2 text-gray-300 text-sm">;"
</div>

                  </div>;
                </div>;
              </div>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
      <EnhancedFooter />;

</EnhancedFooter>
    </div>;"

