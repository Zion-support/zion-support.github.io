<<<<<<< HEAD
import React from 'react',;
import Head from 'next/head',;
import { motion } from 'framer-motion',;
import { Shield, Lock, Eye, Database, Server, Key, CheckCircle, Mail, Phone, MapPin } from 'lucide-react',;
import EnhancedNavigation from '../components/EnhancedNavigation',;
import EnhancedFooter from '../components/EnhancedFooter',;
;
export default function Security() {;
  const securityMeasures = [;
    {;
      id:'data-protection',;
      title:'Data Protection',;
      icon:Database,;
      features:[;
        'End-to-end encryption for all data in transitAES-256 encryption for data at rest',;
        'Regular automated backups with encryptionSecure data centers with 24/7 monitoring',;
        'Data residency compliance for global clients';
      ];
    },;
    {;
      id:'access-control',;
      title:'Access Control',;
      icon:Key,;
      features:[;
        'Multi-factor authentication (MFA) requiredRole-based access control (RBAC)',;
        'Principle of least privilege implementationRegular access reviews and deprovisioning',;
        'Single sign-on (SSO) integration';
      ];
    },;
    {;
      id:'infrastructure',;
      title:'Infrastructure Security',;
      icon:Server,;
      features:[;
        'Network segmentation and firewallsIntrusion detection and prevention systems',;
        'Regular vulnerability assessmentsAutomated security patching',;
        'DDoS protection and rate limiting';
      ];
    },;
    {;
      id:'monitoring',;
      title:'Security Monitoring',;
      icon:Eye,;
      features:[;
        '24/7 security operations center (SOC)Real-time threat detection and response',;
        'Comprehensive audit loggingSecurity incident response team',;
        'Continuous security monitoring tools';
      ];
    }
  ],;
;
  const certifications = [;
    { name:'SOC 2 Type II', status:'Certified' },;
    { name:'ISO 27001', status:'Certified' },;
    { name:'GDPR', status:'Compliant' },;
    { name:'HIPAA', status:'Compliant' },;
    { name:'PCI DSS', status:'Compliant' }
  ],;
;
  return (;
    <>;
      <Head>;
        <title>Security | Zion Tech Group</title>;
        <meta name="description" content="Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy." />;
        <meta name="viewport" content="width=device-width, initial-scale=1" />;
        <link rel="icon" href="/favicon.ico" />;
      </Head>;
;
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
        <EnhancedNavigation />;
;
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-6">;
          <div className="max-w-4xl mx-auto text-center">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="flex items-center justify-center mb-6";
            >;
              <Shield className="w-16 h-16 text-cyan-400" />;
            </motion.div>;
            ;
            <motion.h1;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.1 }}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6";
            >;
              Security First;
            </motion.h1>;
            ;
            <motion.p;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.2 }}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed";
            >;
              Your security and privacy are our top priorities. Learn about our comprehensive security measures and industry-leading practices.;
            </motion.p>;
          </div>;
        </section>;
;
        {/* Security Overview */}
        <section className="py-20 px-6">;
          <div className="max-w-6xl mx-auto">;
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8 }}
              className="text-center mb-16";
            >;
              <h2 className="text-4xl font-bold text-white mb-6">Enterprise-Grade Security</h2>;
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">;
                We implement multiple layers of security controls to protect your data and ensure business continuity.;
              </p>;
            </motion.div>;
;
            <div className="grid md:grid-cols-2 gap-8 mb-16">;
              {securityMeasures.map((measure, index) => (;
                <motion.div;
                  key={measure.id}
                  initial={{ opacity:0, y:20 }}
                  animate={{ opacity:1, y:0 }}
                  transition={{ duration:0.8, delay:index * 0.1 }}
                  className="bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300";
                >;
                  <div className="flex items-center mb-6">;
                    <measure.icon className="w-8 h-8 text-cyan-400 mr-4" />;
                    <h3 className="text-2xl font-bold text-white">{measure.title}</h3>;
                  </div>;
                  ;
                  <ul className="space-y-3">;
                    {measure.features.map((feature, featureIndex) => (;
                      <li key={featureIndex} className="flex items-start">;
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0" />;
                        <span className="text-gray-300 leading-relaxed">{feature}</span>;
                      </li>;
=======
import React from 'react',
import Head from 'next/head',
import { motion } from 'framer-motion',
import { Shield, Lock, Eye, Database, Server, Key, CheckCircle, Mail, Phone, MapPin } from 'lucide-react',
import EnhancedNavigation from '../components/EnhancedNavigation',
import EnhancedFooter from '../components/EnhancedFooter',
export default function Security() {
  const securityMeasures = [
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: Database,
      features: [
        'End-to-end encryption for all data in transitAES-256 encryption for data at restRegular automated backups with encryptionSecure data centers with 24/7 monitoringData residency compliance for global clients'
      ]
    },
    {
      id: 'access-control',
      title: 'Access Control',
      icon: Key,
      features: [
        'Multi-factor authentication (MFA) requiredRole-based access control (RBAC)Principle of least privilege implementationRegular access reviews and deprovisioningSingle sign-on (SSO) integration'
      ]
    },
    {
      id: 'infrastructure',
      title: 'Infrastructure Security',
      icon: Server,
      features: [
        'Network segmentation and firewallsIntrusion detection and prevention systemsRegular vulnerability assessmentsAutomated security patchingDDoS protection and rate limiting'
      ]
    },
    {
      id: 'monitoring',
      title: 'Security Monitoring',
      icon: Eye,
      features: [
        '24/7 security operations center (SOC)Real-time threat detection and responseComprehensive audit loggingSecurity incident response teamContinuous security monitoring tools'
      ]
    }
  ],

  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },
    { name: 'PCI DSS', status: 'Compliant' }
  ],
  return (_<>
      <Head>
        <title>Security | Zion Tech Group</title>
        <meta name=&quot;description&quot; content=&quot;Learn about Zion Tech Group's comprehensive security measures, certifications, and commitment to protecting your data and privacy.&quot; />
        <meta name=&quot;viewport&quot; content=&quot;width=device-width, initial-scale=1&quot; />
        <link rel=&quot;icon&quot; href=&quot;/favicon.ico&quot; />      </Head>

      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        <EnhancedNavigation />

        {/* Hero Section */}
        <section className=&quot;pt-32 pb-20 px-6&quot;>
          <div className=&quot;max-w-4xl mx-auto text-center&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;flex items-center justify-center mb-6&quot;            >
              <Shield className=&quot;w-16 h-16 text-cyan-400&quot; />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className=&quot;text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6&quot;            >
              Security First
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className=&quot;text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed&quot;            >
              Your security and privacy are our top priorities. Learn about our comprehensive security measures and industry-leading practices.
            </motion.p>
          </div>
        </section>

        {/* Security Overview */}
        <section className=&quot;py-20 px-6&quot;>
          <div className=&quot;max-w-6xl mx-auto&quot;>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className=&quot;text-center mb-16&quot;            >
              <h2 className=&quot;text-4xl font-bold text-white mb-6&quot;>Enterprise-Grade Security</h2>
              <p className=&quot;text-xl text-gray-300 max-w-3xl mx-auto&quot;>
                We implement multiple layers of security controls to protect your data and ensure business continuity.
              </p>
            </motion.div>

            <div className=&quot;grid md:grid-cols-2 gap-8 mb-16&quot;>
              {securityMeasures.map((measure, index) => (
                <motion.div
                  key={measure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10 hover:border-cyan-500/30 transition-colors duration-300&quot;
                >
                  <div className=&quot;flex items-center mb-6&quot;>
                    <measure.icon className=&quot;w-8 h-8 text-cyan-400 mr-4&quot; />
                    <h3 className=&quot;text-2xl font-bold text-white&quot;>{measure.title}</h3>
                  </div>
                  
                  <ul className=&quot;space-y-3&quot;>
                    {measure.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className=&quot;flex items-start&quot;>
                        <CheckCircle className=&quot;w-5 h-5 text-green-400 mr-3 mt-0.5 flex-shrink-0&quot; />
                        <span className=&quot;text-gray-300 leading-relaxed&quot;>{feature}</span>                      </li>
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
                    ))}
                  </ul>;
                </motion.div>;
              ))}
<<<<<<< HEAD
            </div>;
;
            {/* Certifications */}
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.5 }}
              className="bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16";
            >;
              <h3 className="text-3xl font-bold text-white mb-6 text-center">Security Certifications & Compliance</h3>;
              ;
              <div className="grid md:grid-cols-5 gap-6">;
                {certifications.map((cert, index) => (;
                  <motion.div;
                    key={cert.name}
                    initial={{ opacity:0, scale:0.9 }}
                    animate={{ opacity:1, scale:1 }}
                    transition={{ duration:0.5, delay:index * 0.1 }}
                    className="text-center p-4 bg-slate-800/50 rounded-xl border border-white/10";
                  >;
                    <CheckCircle className="w-8 h-8 text-green-400 mx-auto mb-3" />;
                    <h4 className="text-white font-semibold mb-1">{cert.name}</h4>;
                    <p className="text-cyan-400 text-sm">{cert.status}</p>;
                  </motion.div>;
                ))}
              </div>;
            </motion.div>;
;
            {/* Security Incident Response */}
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.6 }}
              className="mb-16";
            >;
              <h3 className="text-3xl font-bold text-white mb-6">Incident Response</h3>;
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">;
                <div className="grid md:grid-cols-2 gap-8">;
                  <div>;
                    <h4 className="text-white font-semibold mb-4 flex items-center">;
                      <Eye className="w-5 h-5 text-cyan-400 mr-2" />;
                      Detection & Response;
                    </h4>;
                    <ul className="space-y-2 text-gray-300">;
                      <li>• 24/7 security monitoring</li>;
                      <li>• Automated threat detection</li>;
                      <li>• Rapid incident response team</li>;
                      <li>• Regular security drills</li>;
                    </ul>;
                  </div>;
                  ;
                  <div>;
                    <h4 className="text-white font-semibold mb-4 flex items-center">;
                      <Lock className="w-5 h-5 text-cyan-400 mr-2" />;
                      Business Continuity;
                    </h4>;
                    <ul className="space-y-2 text-gray-300">;
                      <li>• Disaster recovery plans</li>;
                      <li>• Regular backup testing</li>;
                      <li>• Redundant infrastructure</li>;
                      <li>• Recovery time objectives (RTO)</li>;
                    </ul>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
;
            {/* Vulnerability Management */}
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.7 }}
              className="mb-16";
            >;
              <h3 className="text-3xl font-bold text-white mb-6">Vulnerability Management</h3>;
              <div className="bg-slate-800/50 rounded-2xl p-8 border border-white/10">;
                <p className="text-gray-300 leading-relaxed mb-6">;
                  We maintain a proactive approach to identifying and addressing security vulnerabilities:;
                </p>;
                ;
                <div className="grid md:grid-cols-3 gap-6">;
                  <div className="text-center">;
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">;
                      <Eye className="w-8 h-8 text-cyan-400" />;
                    </div>;
                    <h4 className="text-white font-semibold mb-2">Regular Scanning</h4>;
                    <p className="text-gray-300 text-sm">Continuous automated vulnerability scanning</p>;
                  </div>;
                  ;
                  <div className="text-center">;
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">;
                      <Shield className="w-8 h-8 text-cyan-400" />;
                    </div>;
                    <h4 className="text-white font-semibold mb-2">Penetration Testing</h4>;
                    <p className="text-gray-300 text-sm">Annual third-party security assessments</p>;
                  </div>;
                  ;
                  <div className="text-center">;
                    <div className="w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4">;
                      <CheckCircle className="w-8 h-8 text-cyan-400" />;
                    </div>;
                    <h4 className="text-white font-semibold mb-2">Rapid Remediation</h4>;
                    <p className="text-gray-300 text-sm">Quick patching and vulnerability resolution</p>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
;
            {/* Contact Security Team */}
            <motion.div;
              initial={{ opacity:0, y:20 }}
              animate={{ opacity:1, y:0 }}
              transition={{ duration:0.8, delay:0.8 }}
              className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20";
            >;
              <h3 className="text-3xl font-bold text-white mb-6 flex items-center">;
                <Shield className="w-8 h-8 text-red-400 mr-4" />;
                Report Security Issues;
              </h3>;
              ;
              <p className="text-gray-300 mb-6 leading-relaxed">;
                If you discover a security vulnerability, please report it to our security team immediately:</p>;
              ;
              <div className="grid md:grid-cols-3 gap-6">;
                <div className="flex items-center">;
                  <Mail className="w-5 h-5 text-red-400 mr-3" />;
                  <div>;
                    <p className="text-white font-semibold">Security Email</p>;
                    <p className="text-gray-300">security@ziontechgroup.com</p>;
                  </div>;
                </div>;
                ;
                <div className="flex items-center">;
                  <Phone className="w-5 h-5 text-red-400 mr-3" />;
                  <div>;
                    <p className="text-white font-semibold">Emergency Hotline</p>;
                    <p className="text-gray-300">+1 (555) 123-HELP</p>;
                  </div>;
                </div>;
                ;
                <div className="flex items-center">;
                  <Key className="w-5 h-5 text-red-400 mr-3" />;
                  <div>;
                    <p className="text-white font-semibold">PGP Key</p>;
                    <p className="text-gray-300">Available on request</p>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
;
        <EnhancedFooter />;
      </div>;
    </>;
  );
=======
            </div>

            {_/* Certifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className=&quot;bg-gradient-to-r from-cyan-900/20 to-blue-900/20 rounded-2xl p-8 border border-cyan-500/20 mb-16&quot;            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6 text-center&quot;>Security Certifications & Compliance</h3>
              
              <div className=&quot;grid md:grid-cols-5 gap-6&quot;>
                {certifications.map((cert, index) => (
                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className=&quot;text-center p-4 bg-slate-800/50 rounded-xl border border-white/10&quot;
                  >
                    <CheckCircle className=&quot;w-8 h-8 text-green-400 mx-auto mb-3&quot; />
                    <h4 className=&quot;text-white font-semibold mb-1&quot;>{cert.name}</h4>
                    <p className=&quot;text-cyan-400 text-sm&quot;>{cert.status}</p>                  </motion.div>
                ))}
              </div>
            </motion.div>

            {_/* Security Incident Response */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className=&quot;mb-16&quot;            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6&quot;>Incident Response</h3>
              <div className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10&quot;>
                <div className=&quot;grid md:grid-cols-2 gap-8&quot;>
                  <div>
                    <h4 className=&quot;text-white font-semibold mb-4 flex items-center&quot;>
                      <Eye className=&quot;w-5 h-5 text-cyan-400 mr-2&quot; />
                      Detection & Response
                    </h4>
                    <ul className=&quot;space-y-2 text-gray-300&quot;>
                      <li>• 24/7 security monitoring</li>
                      <li>• Automated threat detection</li>
                      <li>• Rapid incident response team</li>
                      <li>• Regular security drills</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className=&quot;text-white font-semibold mb-4 flex items-center&quot;>
                      <Lock className=&quot;w-5 h-5 text-cyan-400 mr-2&quot; />
                      Business Continuity
                    </h4>
                    <ul className=&quot;space-y-2 text-gray-300&quot;>
                      <li>• Disaster recovery plans</li>
                      <li>• Regular backup testing</li>
                      <li>• Redundant infrastructure</li>
                      <li>• Recovery time objectives (RTO)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {_/* Vulnerability Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className=&quot;mb-16&quot;            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6&quot;>Vulnerability Management</h3>
              <div className=&quot;bg-slate-800/50 rounded-2xl p-8 border border-white/10&quot;>
                <p className=&quot;text-gray-300 leading-relaxed mb-6&quot;>
                  We maintain a proactive approach to identifying and addressing security vulnerabilities:
                </p>
                
                <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <Eye className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Regular Scanning</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Continuous automated vulnerability scanning</p>
                  </div>
                  
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <Shield className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Penetration Testing</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Annual third-party security assessments</p>
                  </div>
                  
                  <div className=&quot;text-center&quot;>
                    <div className=&quot;w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4&quot;>
                      <CheckCircle className=&quot;w-8 h-8 text-cyan-400&quot; />
                    </div>
                    <h4 className=&quot;text-white font-semibold mb-2&quot;>Rapid Remediation</h4>
                    <p className=&quot;text-gray-300 text-sm&quot;>Quick patching and vulnerability resolution</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {_/* Contact Security Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className=&quot;bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20&quot;            >
              <h3 className=&quot;text-3xl font-bold text-white mb-6 flex items-center&quot;>
                <Shield className=&quot;w-8 h-8 text-red-400 mr-4&quot; />
                Report Security Issues
              </h3>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                If you discover a security vulnerability, please report it to our security team immediately: </p>              
              <div className=&quot;grid md:grid-cols-3 gap-6&quot;>
                <div className=&quot;flex items-center&quot;>
                  <Mail className=&quot;w-5 h-5 text-red-400 mr-3&quot; />
                  <div>
                    <p className=&quot;text-white font-semibold&quot;>Security Email</p>
                    <p className=&quot;text-gray-300&quot;>security@ziontechgroup.com</p>
                  </div>
                </div>
                
                <div className=&quot;flex items-center&quot;>
                  <Phone className=&quot;w-5 h-5 text-red-400 mr-3&quot; />
                  <div>
                    <p className=&quot;text-white font-semibold&quot;>Emergency Hotline</p>
                    <p className=&quot;text-gray-300&quot;>+1 (555) 123-HELP</p>
                  </div>
                </div>
                
                <div className=&quot;flex items-center&quot;>
                  <Key className=&quot;w-5 h-5 text-red-400 mr-3&quot; />
                  <div>
                    <p className=&quot;text-white font-semibold&quot;>PGP Key</p>
                    <p className=&quot;text-gray-300&quot;>Available on request</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <EnhancedFooter />
      </div>
    </>
  )
>>>>>>> 44ad963ad5fd406e68f84735bc739a2e0258901d
}