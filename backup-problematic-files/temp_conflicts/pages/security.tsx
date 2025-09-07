
import React from 'react',;''
import Head from 'next/head',;''
import { motion } from 'framer-motion',;''
import { Shield, Lock, Eye, Database, Server, Key, CheckCircle, Mail, Phone, MapPin } from 'lucide-react',;''
import EnhancedNavigation from '../components/EnhancedNavigation',;''
import EnhancedFooter from '../components/EnhancedFooter',;'

;
export default function Security() {;
  const securityMeasures = [;
    {;'
      id:'data-protection',;''
      title:'Data Protection',;'
      icon:Database,;

      features:[;'
        'End-to-end encryption for all data in transitAES-256 encryption for data at rest',;''
        'Regular automated backups with encryptionSecure data centers with 24/7 monitoring',;''
        'Data residency compliance for global clients';']
      ];
    },;
    {;'
      id:'access-control',;''
      title:'Access Control',;'
      icon:Key,;
      features:[;'
        'Multi-factor authentication (MFA) requiredRole-based access control (RBAC)',;''
        'Principle of least privilege implementationRegular access reviews and deprovisioning',;''
        'Single sign-on (SSO) integration';']
      ];
    },;
    {;'
      id:'infrastructure',;''
      title:'Infrastructure Security',;'
      icon:Server,;
      features:[;'
        'Network segmentation and firewallsIntrusion detection and prevention systems',;''
        'Regular vulnerability assessmentsAutomated security patching',;''
        'DDoS protection and rate limiting';']
      ];
    },;
    {;'
      id:'monitoring',;''
      title:'Security Monitoring',;'
      icon:Eye,;
      features:[;'
        '24/7 security operations center (SOC)Real-time threat detection and response',;''
        'Comprehensive audit loggingSecurity incident response team',;''
        'Continuous security monitoring tools';']
      ];
    }
  ],;
;
  const certifications = [;'
    { name:'SOC 2 Type II', status:'Certified' },;''
    { name:'ISO 27001', status:'Certified' },;''
    { name:'GDPR', status:'Compliant' },;''
    { name:'HIPAA', status:'Compliant' },;''
    { name:'PCI DSS', status:'Compliant' }']
  ],;
;
  return (;
    <>;
      <Head>;
</Head>
        <title>Security | Zion Tech Group</title>;'
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy." />;"
</meta>"
        <meta name="viewport" content="width=device-width, initial-scale=1" />;"
</meta>"
        <link rel="icon" href="/favicon.ico" />;"
</link>
      </Head>;"
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;"
</div>
        <EnhancedNavigation />;
</EnhancedNavigation>"
        <section className="pt-32 pb-20 px-6">;"
</section>"
          <div className="max-w-4xl mx-auto text-center">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}"
              className="flex items-center justify-center mb-6";"
            >;
</motion>"
              <Shield className="w-16 h-16 text-cyan-400" />;"
</Shield>
            </motion.div>;
            ;
            <motion.h1;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.1 }}"
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6";"
            >;
</motion>
            </motion.h1>;
            ;
            <motion.p;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.2 }}"
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed";"
            >;
</motion>
            </motion.p>;
          </div>;
        </section>;"
        <section className="py-20 px-6">;"
</section>"
          <div className="max-w-6xl mx-auto">;"
</div>
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}"
              className="text-center mb-16";"
            >;
</motion>"
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Security</h2>;""
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;"
</p>
              </p>;
            </motion.div>;
;"
            <div className="grid md:grid-cols-2 gap-8 mb-16">;"
</div>
                <motion.div;
                  key={measure.id}
                  initial={{ opacity:0, y:20 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}"
                  className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300";"
                >;
</motion>"
                  <div className="flex items-center mb-6">;"
</div>"
                    <measure.icon className="w-8 h-8 text-cyan-400 mr-4" />;"
</measure>"
                    <h3 className="text-2xl font-bold text-white">{measure.title}</h3>;"
                  </div>;"
                  <ul className="space-y-3">;"
</ul>"
                      <li key={featureIndex} className="flex items-start">;"
</li>"
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />;"
</CheckCircle>"
                        <span className="text-gray-300 leading-relaxed">{feature}</span>;"

                      </li>;
                  </ul>;
                </motion.div>;)
              ))}

            </div>;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.5 }}"
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16";"
            >;
</motion>"
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Security Certifications & Compliance</h3>;""
              <div className="grid md:grid-cols-5 gap-6">;"
</div>
                  <motion.div;
                    key={cert.name}
                    initial={{ opacity:0, scale:0.9 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{ duration:0.5, delay:index * 0.1 }}"
                    className="text-center p-4 bg-slate-800/50 rounded-xl border border-white/10";"
                  >;
</motion>"
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />;"
</CheckCircle>"
                    <h4 className="text-white font-semibold mb-1">{cert.name}</h4>;""
                    <p className="text-cyan-400 text-sm">{cert.status}</p>;"

                  </motion.div>;
                ))}
              </div>;
            </motion.div>;{/* Security Incident Response */}
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}

              transition={{ duration:0.8, delay:0.6 }}"
              className="mb-16";"
            >;
</motion>"
              <h3 className="text-3xl font-bold text-white mb-6">Incident Response</h3>;""
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">;"
</div>"
                <div className="grid md:grid-cols-2 gap-8">;"
</div>
                  <div>;
</div>"
                    <h4 className="text-white font-semibold mb-4 flex items-center">;"
</h4>"
                      <Eye className="w-5 h-5 text-cyan-400 mr-2" />;"
</Eye>
                    </h4>;"
                    <ul className="space-y-2 text-gray-300">;"
</ul>
                    </ul>;
                  </div>;
                  <div>;
</div>"
                    <h4 className="text-white font-semibold mb-4 flex items-center">;"
</h4>"
                      <Lock className="w-5 h-5 text-cyan-400 mr-2" />;"
</Lock>
                    </h4>;"
                    <ul className="space-y-2 text-gray-300">;"
</ul>

                    </ul>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;{/* Vulnerability Management */}
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}

              transition={{ duration:0.8, delay:0.7 }}"
              className="mb-16";"
            >;
</motion>"
              <h3 className="text-3xl font-bold text-white mb-6">Vulnerability Management</h3>;""
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">;"
</div>"
                <p className="text-gray-300 leading-relaxed mb-6">;"
</p>
                </p>;"
                <div className="grid md:grid-cols-3 gap-6">;"
</div>"
                  <div className="text-center">;"
</div>"
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">;"
</div>"
                      <Eye className="w-8 h-8 text-cyan-400" />;"
</Eye>
                    </div>;"
                    <h4 className="text-white font-semibold mb-2">Regular Scanning</h4>;""
                    <p className="text-gray-300 text-sm">Continuous automated vulnerability scanning</p>;"
                  </div>;"
                  <div className="text-center">;"
</div>"
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">;"
</div>"
                      <Shield className="w-8 h-8 text-cyan-400" />;"
</Shield>
                    </div>;"
                    <h4 className="text-white font-semibold mb-2">Penetration Testing</h4>;""
                    <p className="text-gray-300 text-sm">Annual third-party security assessments</p>;"
                  </div>;"
                  <div className="text-center">;"
</div>"
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">;"
</div>"
                      <CheckCircle className="w-8 h-8 text-cyan-400" />;"
</CheckCircle>
                    </div>;"
                    <h4 className="text-white font-semibold mb-2">Rapid Remediation</h4>;""
                    <p className="text-gray-300 text-sm">Quick patching and vulnerability resolution</p>;"

                  </div>;
                </div>;
              </div>;
            </motion.div>;{/* Contact Security Team */}
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}

              transition={{ duration:0.8, delay:0.8 }}"
              className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20";"
            >;
</motion>"
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">;"
</h3>"
                <Shield className="w-8 h-8 text-red-400 mr-4" />;"
</Shield>
              </h3>;"
              <p className="text-gray-300 mb-6 leading-relaxed">;"
</p>
                If you discover a security vulnerability, please report it to our security team immediately:</p>;"
              <div className="grid md:grid-cols-3 gap-6">;"
</div>"
                <div className="flex items-center">;"
</div>"
                  <Mail className="w-5 h-5 text-red-400 mr-3" />;"
</Mail>
                  <div>;
</div>"
                    <p className="text-white font-semibold">Security Email</p>;""
                    <p className="text-gray-300">security@ziontechgroup.com</p>;"
                  </div>;
                </div>;"
                <div className="flex items-center">;"
</div>"
                  <Phone className="w-5 h-5 text-red-400 mr-3" />;"
</Phone>
                  <div>;
</div>"
                    <p className="text-white font-semibold">Emergency Hotline</p>;""
                    <p className="text-gray-300">+1 (555) 123-HELP</p>;"
                  </div>;
                </div>;"
                <div className="flex items-center">;"
</div>"
                  <Key className="w-5 h-5 text-red-400 mr-3" />;"
</Key>
                  <div>;
</div>"
                    <p className="text-white font-semibold">PGP Key</p>;""
                    <p className="text-gray-300">Available on request</p>;"

                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;

        </section>;
        <EnhancedFooter />;
</EnhancedFooter>
      </div>;
    </>;
  );
}"

