
import React from 'react';

>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Layout from '../components/Layout';
const securityFeatures = [
  {
    title: 'Data Encryption'
    description: 'All data is encrypted in transit and at rest using industry-standard encryption protocols'
    icon: Lock
    details: ['AES-256 encryption', 'TLS 1.3 for data in transit', 'End-to-end encryption', 'Key management']
  }
  {
    title: 'Access Controls'
    description: 'Multi-factor authentication and role-based access controls ensure only authorized users can access your data'
    icon: Users
    details: ['Multi-factor authentication', 'Role-based permissions', 'Single sign-on (SSO)', 'Session management']
  }
  {
    title: 'Security Monitoring'
    description: '24/7 security monitoring and threat detection to protect against cyber attacks'
    icon: Eye
    details: ['Real-time monitoring', 'Threat detection', 'Incident response', 'Security alerts']
  }
  {
    title: 'Compliance'
    description: 'We maintain compliance with industry standards and regulations to protect your data'
    icon: Shield
    details: ['SOC 2 Type II', 'ISO 27001', 'GDPR compliance', 'HIPAA compliance']
  }
  {
    title: 'Data Backup'
    description: 'Regular automated backups ensure your data is always protected and recoverable'
    icon: Database
    details: ['Automated backups', 'Multiple backup locations', 'Point-in-time recovery', 'Data retention policies']
  }
  {
    title: 'Incident Response'
    description: 'Comprehensive incident response procedures to quickly address any security issues'
    icon: AlertTriangle
    details: ['24/7 incident response', 'Security team on standby', 'Rapid containment', 'Post-incident analysis']
  }
];

const securityStats = [
  { number: '99.9%', label: 'Uptime Guarantee' }
  { number: '24/7', label: 'Security Monitoring' }
  { number: '0', label: 'Security Breaches' }
  { number: '100%', label: 'Data Encryption' }
];
export default function SecurityPage() {

=======
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures and how we protect your data and systems."
      keywords="security, data protection, encryption, compliance, cybersecurity"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}


        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">

            <motion.div
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="flex items-center justify-center mb-6"
            >
              <Shield className="w-16 h-16 text-cyan-400" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.1 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-white to-cyan-100 bg-clip-text text-transparent mb-6"
            >
              Security First
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              animate={{ opacity: 1, y: 0 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              transition={{ duration: 0.8, delay: 0.2 }  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
              className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
            >
              Your security and privacy are our top priorities. Learn about our comprehensive security measures and industry-leading practices.
            </motion.p>
          </div>
        </section>

=======
        {/* Security Overview */  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">


>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Security & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Protection</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Your security is our top priority. Learn about our comprehensive security measures and how we protect your data.
              </p>
            </motion.div>
          </div>
        </section>
        {/* Security Stats */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {securityStats.map((stat, index) => (
                <motion.div

                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>

                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Security Features */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}

import Link from 'next / link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Layout from '../components / Layout';
;
const security_features = [;
  {
    title: 'Data Encryption',
    description: 'All data is encrypted in transit and at rest using industry - standard encryption protocols',
    icon: Lock,
    details: ['AES - 256 encryption', 'TLS 1.3 for data in transit', 'End - to - end encryption', 'Key management'];
  },
  {
    title: 'Access Controls',
    description: 'Multi - factor authentication and role - based access controls ensure only authorized users can access your data',
    icon: Users,
    details: ['Multi - factor authentication', 'Role - based permissions', 'Single sign - on (SSO)', 'Session management'];
  },
  {
    title: 'Security Monitoring',
    description: '24 / 7 security monitoring and threat detection to protect against cyber attacks',
    icon: Eye,
    details: ['Real - time monitoring', 'Threat detection', 'Incident response', 'Security alerts'];
  },
  {
    title: 'Compliance',
    description: 'We maintain compliance with industry standards and regulations to protect your data',
    icon: Shield,
    details: ['SOC 2 Type II', 'ISO 27001', 'GDPR compliance', 'HIPAA compliance'];
  },
  {
    title: 'Data Backup',
    description: 'Regular automated backups ensure your data is always protected and recoverable',
    icon: Database,
    details: ['Automated backups', 'Multiple backup locations', 'Point - in - time recovery', 'Data retention policies'];
  },
  {
    title: 'Incident Response',
    description: 'Comprehensive incident response procedures to quickly address any security issues',
    icon: AlertTriangle,
    details: ['24 / 7 incident response', 'Security team on standby', 'Rapid containment', 'Post - incident analysis'];
  }
];
;
const security_stats = [;
  { number: '99.9%', label: 'Uptime Guarantee' },
  { number: '24 / 7', label: 'Security Monitoring' },
  { number: '0', label: 'Security Breaches' },
  { number: '100%', label: 'Data Encryption' }
];
;
export default /**
 * SecurityPage - Function description
 */
function SecurityPage() {
  return (
    <Layout;
      title="Security - Zion Tech Group";
      description="Learn about our comprehensive security measures and how we protect your data and systems.";
      keywords="security, data protection, encryption, compliance, cybersecurity";
    >;
      <div className="min - h-screen bg - gray - 50">;
        {/* Hero Section */}
        <section className="relative bg - gradient - to - br from - blue - 900 via - purple - 900 to - indigo - 900 text - white py - 20 overflow - hidden">;
          <div className="absolute inset - 0">;
            <div className="absolute top - 20 left - 10 w - 72 h - 72 bg - blue - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse"></div>;
            <div className="absolute top - 40 right - 10 w - 72 h - 72 bg - purple - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 2000"></div>;
            <div className="absolute -bottom - 8 left - 20 w - 72 h - 72 bg - indigo - 500 rounded - full mix - blend - multiply filter blur - xl opacity - 20 animate - pulse animation - delay - 4000"></div>;
          </div>;
          <div className="container mx - auto px - 4 relative z - 10">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center";
            >;
              <h1 className="text - 4xl md:text - 6xl font - bold mb - 6">;
                Security & <span className="text - transparent bg - clip - text bg - gradient - to - r from - blue - 400 to - purple - 400">Protection</span>;
              </h1>;
              <p className="text - xl md:text - 2xl text - gray - 300 mb - 8 max - w-3xl mx - auto">;
                Your security is our top priority. Learn about our comprehensive security measures and how we protect your data.;
              </p>;
            </motion.div>;
          </div>;
        </section>;
        {/* Security Stats */}
        <section className="py - 16 bg - white">;
          <div className="container mx - auto px - 4">;
            <div className="grid grid - cols - 2 md:grid - cols - 4 gap - 8">;
              {security_stats.map ((stat, index) => (
                <motion.div;
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mr-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4 leading-relaxed">

                    {feature.description}
                  </p>;
                  <div className="space - y-2">;
                    <h4 className="font - semibold text - gray - 900 text - sm">Key Features:</h4>;
                    <ul className="space - y-1">;
                      {feature.details.map ((detail, idx) => (
                        <li key={idx} className="flex items - center text - sm text - gray - 600">;
                          <CheckCircle className="w - 3 h - 3 text - green - 500 mr - 2 flex - shrink - 0" />;
                          {detail}

        {/* Compliance Section */}
        <section className="py - 16 bg - white">;
          <div className="container mx - auto px - 4">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
              className="text - center mb - 12";
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold text - gray - 900 mb - 4">;
                Compliance & Certifications;
              </h2>;
              <p className="text - xl text - gray - 600 max - w-3xl mx - auto">;
                We maintain compliance with industry standards and regulations to ensure your data is protected.;
              </p>;
            </motion.div>;
            <div className="grid md:grid - cols - 2 lg:grid - cols - 4 gap - 8">;
              <div className="text - center">;
                <div className="w - 16 h - 16 bg - green - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                  <Shield className="w - 8 h - 8 text - green - 600" />;
                </div>;
                <h3 className="text - lg font - bold text - gray - 900 mb - 2">SOC 2 Type II</h3>;
                <p className="text - gray - 600 text - sm">Service Organization Control 2 Type II compliance</p>;
              </div>;
              <div className="text - center">;
                <div className="w - 16 h - 16 bg - blue - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                  <Lock className="w - 8 h - 8 text - blue - 600" />;
                </div>;
                <h3 className="text - lg font - bold text - gray - 900 mb - 2">ISO 27001</h3>;
                <p className="text - gray - 600 text - sm">Information Security Management System</p>;
              </div>;
              <div className="text - center">;
                <div className="w - 16 h - 16 bg - purple - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                  <Eye className="w - 8 h - 8 text - purple - 600" />;
                </div>;
                <h3 className="text - lg font - bold text - gray - 900 mb - 2">GDPR</h3>;
                <p className="text - gray - 600 text - sm">General Data Protection Regulation compliance</p>;
              </div>;
              <div className="text - center">;
                <div className="w - 16 h - 16 bg - orange - 100 rounded - full flex items - center justify - center mx - auto mb - 4">;
                  <Database className="w - 8 h - 8 text - orange - 600" />;
                </div>;
                <h3 className="text - lg font - bold text - gray - 900 mb - 2">HIPAA</h3>;
                <p className="text - gray - 600 text - sm">Health Insurance Portability and Accountability Act</p>;

              </div>;
            </div>;
          </div>;
        </section>;
                </Link>

                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        {/* Compliance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We maintain compliance with industry standards and regulations to ensure your data is protected.
              </p>
            </motion.div>

                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">SOC 2 Type II</h3>
                <p className="text-gray-600 text-sm">Service Organization Control 2 Type II compliance</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-blue-600" />
                </div>

                </Link>

import EnhancedNavigation from '../components/EnhancedNavigation';
import EnhancedFooter from '../components/EnhancedFooter';
export default function Security() {
  const securityMeasures = [
    {
      id: 'data-protection',
      title: 'Data Protection',
      icon: Database,
      features: [

      id: 'access-control',
      title: 'Access Control',
      icon: Key,
      features: [

      id: 'infrastructure',
      title: 'Infrastructure Security',
      icon: Server,
      features: [

      id: 'monitoring',
      title: 'Security Monitoring',
      icon: Eye,
      features: [

  const certifications = [
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' },
    { name: 'GDPR', status: 'Compliant' },
    { name: 'HIPAA', status: 'Compliant' },

            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}

            >
              Security First
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}

                <motion.div
                  key={measure.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}

                  <motion.div
                    key={cert.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}

                      <li>• Automated threat detection</li>
                      <li>• Rapid incident response team</li>
                      <li>• Regular security drills</li>
                    </ul>
                  </div>

                      <li>• Regular backup testing</li>
                      <li>• Redundant infrastructure</li>
                      <li>• Recovery time objectives (RTO)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}

                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">Emergency Hotline</p>
                    <p className="text-gray-300">+1 (555) 123-HELP</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <Key className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">PGP Key</p>
                    <p className="text-gray-300">Available on request</p>

                  </div>
                </div>

                >
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
              </div>
            </motion.div>
          </div>
        </section>

      </div>
    </Layout>

  );

}
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold">;
                  View Compliance Details;
                </Link>;
              </div>;
            </motion && motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>;



  );

  )
=======
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ error: "Internal server error" });
  }


>>>>>>> cursor/fix-website-loading-errors-and-merge-6662
}
  );
=======
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-382a
  );
}  )
>>>>>>> d1459052ce02e16bd297172bbc6ba920af218e39
}

  );
}

=======
  )
}
        {/* CTA Section */}
        <section className="py - 20 bg - gradient - to - r from - blue - 600 to - purple - 600 text - white">;
          <div className="container mx - auto px - 4 text - center">;
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 30 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8 }}
            >;
              <h2 className="text - 3xl md:text - 4xl font - bold mb - 6">;
                Questions About Our Security?;
              </h2>;
              <p className="text - xl mb - 8 max - w-2xl mx - auto">;
                Our security team is available to answer any questions about our security measures and compliance.;
              </p>;
              <div className="flex flex - col sm:flex - row gap - 4 justify - center">;
                <Link;
                  href="/contact";
                  className="px - 8 py - 4 bg - white text - blue - 600 rounded - lg hover:bg - gray - 100 transition - all duration - 300 font - semibold inline - flex items - center justify - center";
                >;
                  Contact Security Team;
                </Link>;
                <Link;
                  href="/compliance";
                  className="px - 8 py - 4 border - 2 border - white text - white rounded - lg hover:bg - white hover:text - blue - 600 transition - all duration - 300 font - semibold";
                >;
                  View Compliance Details;
</Link>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      </div>;
    </Layout>);
}  );
}
);
}
>>>>>>> origin/cursor/automate-test-improve-and-merge-code-20a4
>>>>>>> 2fd4a6abb4445cd2c95fbe3f38b233c555a73159
