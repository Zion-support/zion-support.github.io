import React from 'react',;''
import Head from 'next/head',;''
import { motion } from 'framer-motion',;'
import { ;
  FileText, CheckCircle, AlertTriangle, Shield, Users, ;
  Globe, Lock, Database, Info, AlertCircle;'
} from 'lucide-react',;''
import EnhancedNavigation from '../components/EnhancedNavigation',;''
import EnhancedFooter from '../components/EnhancedFooter',;'
;
export default function TermsPage() {;'
  const lastUpdated = 'January 15, 2025',;'
;
  const sections = [;
    {;'
      title:'Acceptance of Terms',;''
      icon:<CheckCircle className="w-6 h-6" />,;"
</CheckCircle>"
      icon:<Info className="w-6 h-6" />,;"
</Info>"
      icon:<Users className="w-6 h-6" />,;"
</Users>"
      icon:<Shield className="w-6 h-6" />,;"
</Shield>"
      icon:<Lock className="w-6 h-6" />,;"
</Lock>"
      icon:<AlertTriangle className="w-6 h-6" />,;"
</AlertTriangle>"
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">;"
</div>
      <Head>;
</Head>"
        <meta property="og:description" content="Comprehensive terms of service detailing the rules and conditions for using our technology solutions." />;"
</meta>"
        <meta name="twitter:card" content="summary_large_image" />;"
</meta>"
        <link rel="canonical" href="https://ziontechgroup.com/terms" />;"
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
              <FileText className="w-10 h-10 text-white" />;"
</FileText>
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
            <h2 className="text-3xl font-bold text-white mb-6">Agreement to Terms</h2>;""
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
</div>"
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">;"
</div>
              <motion.div;
                key={section.title}
                initial={{ opacity:0, y:20 }}
                whileInView={{ opacity:1, y:0 }}
                transition={{ duration:0.6, delay:index * 0.1 }}
                viewport={{ once:true }}"
                className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300";"
              >;
</motion>"
                <div className="flex items-center space-x-3 mb-4">;"
</div>"
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">;"
</div>
                  </div>;"
                  <h3 className="text-xl font-bold text-white">{section.title}</h3>;"
                </div>;"
                <ul className="space-y-2">;"
</ul>"
                    <li key={itemIndex} className="flex items-start space-x-3">;"
</li>"
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />;"
</CheckCircle>"
                      <span className="text-gray-300 text-sm">{item}</span>;"
                    </li>;
                </ul>;
              </motion.div>;
            ))}
          </div>;
        </div>;
      </section>;"
      <section className="py-20 px-6 bg-gradient-to-r from-gray-900/50 to-gray-800/50">;"
</section>"
        <div className="max-w-4xl mx-auto">;"
</div>
          <motion.div;
            initial={{ opacity:0, y:20 }}
            whileInView={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            viewport={{ once:true }}"
            className="space-y-8";"
          >;
</motion>"
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">;"
</div>"
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">;"
</h3>"
                <AlertCircle className="w-6 h-6 text-yellow-400 mr-3" />;"
</AlertCircle>
              </h3>;"
              <p className="text-gray-300 leading-relaxed mb-4">;"
</p>
              </p>;"
              <ul className="space-y-2 text-gray-300 text-sm">;"
</ul>
              </ul>;
            </div>;"
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">;"
</div>"
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">;"
</h3>"
                <Shield className="w-6 h-6 text-green-400 mr-3" />;"
</Shield>
              </h3>;"
              <p className="text-gray-300 leading-relaxed mb-4">;"
</p>
              </p>;"
              <ul className="space-y-2 text-gray-300 text-sm">;"
</ul>
              </ul>;
            </div>;"
            <div className="bg-gray-800/30 backdrop-blur-xl rounded-xl p-6 border border-gray-700/50">;"
</div>"
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">;"
</h3>"
                <Globe className="w-6 h-6 text-cyan-400 mr-3" />;"
</Globe>
              </h3>;"
              <p className="text-gray-300 leading-relaxed mb-4">;"
</p>
              </p>;"
              <ul className="space-y-2 text-gray-300 text-sm">;"
</ul>
              </ul>;
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
            <h2 className="text-3xl font-bold text-white mb-6">Governing Law and Disputes</h2>;""
            <div className="space-y-6 text-gray-300">;"
</div>
              <p>;
</p>
              </p>;
              <p>;
</p>
              </p>;
              <p>;
</p>
              </p>;
            </div>;
          </motion.div>;
        </div>;
      </section>;"
      <section className="py-20 px-6">;"
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
            <h2 className="text-4xl font-bold text-white mb-6">Questions About These Terms?</h2>;""
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
                    <p><strong>Email:</strong> legal@ziontechgroup.com</p>;
                    <p><strong>Phone:</strong> +1 302 464 0950</p>;
                    <p><strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>;
                  </div>;
                </div>;
                <div>;
</div>"
                  <h3 className="text-xl font-bold text-white mb-4">Legal Department</h3>;""
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
    </div>;]"