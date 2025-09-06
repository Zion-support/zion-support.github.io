import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';
import Layout from '../components/Layout';
const securityStats = [
  { number: '99.9%', label: 'Uptime Guarantee' }
  { number: '24/7', label: 'Security Monitoring' }
  { number: '0', label: 'Security Breaches' }
  { number: '100%', label: 'Data Encryption' }
];
export default function SecurityPage() {
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures and how we protect your data and systems."
      keywords="security, data protection, encryption, compliance, cybersecurity"
    >
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
  return (
    <Layout
      title="Security - Zion Tech Group"
      description="Learn about our comprehensive security measures and how we protect your data and systems."
      keywords="security, data protection, encryption, compliance, cybersecurity">;
      <div className="min-h-screen bg-gray-50">;
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>
          <div className="container mx-auto px-4 relative z-10">
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
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {securityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                    {feature.description}
                  </p>
                  <div className="space-y-2">
                    <h4 className="font-semibold text-gray-900 text-sm">Key Features:</h4>
                    <ul className="space-y-1">
                      {feature.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                          {detail}
        {/* Compliance Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
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
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
            >
              <h3 className='text-3xl font-bold text-white mb-6'>
                Incident Response
              </h3>
              <div className='bg-slate-800/50 rounded-2xl p-8 border border-white/10'>
                <div className='grid md:grid-cols-2 gap-8'>
                  <div>
                    <h4 className='text-white font-semibold mb-4 flex items-center'>
                      <Eye className='w-5 h-5 text-cyan-400 mr-2' />
                      Detection & Response
                    </h4>
                    <ul className='space-y-2 text-gray-300'>                      <li>• 24/7 security monitoring</li>
                      <li>• Automated threat detection</li>
                      <li>• Rapid incident response team</li>
                      <li>• Regular security drills</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className='text-white font-semibold mb-4 flex items-center'>
                      <Lock className='w-5 h-5 text-cyan-400 mr-2' />
                      Business Continuity
                    </h4>
                    <ul className='space-y-2 text-gray-300'>                      <li>• Disaster recovery plans</li>
                      <li>• Regular backup testing</li>
                      <li>• Redundant infrastructure</li>
                      <li>• Recovery time objectives (RTO)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Vulnerability Management */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className='mb-16'
            >
              <h3 className='text-3xl font-bold text-white mb-6'>
                Vulnerability Management
              </h3>
              <div className='bg-slate-800/50 rounded-2xl p-8 border border-white/10'>
                <p className='text-gray-300 leading-relaxed mb-6'>
                  We maintain a proactive approach to identifying and addressing
                  security vulnerabilities:
                </p>

                <div className='grid md:grid-cols-3 gap-6'>
                  <div className='text-center'>
                    <div className='w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Eye className='w-8 h-8 text-cyan-400' />
                    </div>
                    <h4 className='text-white font-semibold mb-2'>
                      Regular Scanning
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Continuous automated vulnerability scanning
                    </p>
                  </div>

                  <div className='text-center'>
                    <div className='w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <Shield className='w-8 h-8 text-cyan-400' />
                    </div>
                    <h4 className='text-white font-semibold mb-2'>
                      Penetration Testing
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Annual third-party security assessments
                    </p>
                  </div>

                  <div className='text-center'>
                    <div className='w-16 h-16 bg-cyan-900/30 rounded-full flex items-center justify-center mx-auto mb-4'>
                      <CheckCircle className='w-8 h-8 text-cyan-400' />
                    </div>
                    <h4 className='text-white font-semibold mb-2'>
                      Rapid Remediation
                    </h4>
                    <p className='text-gray-300 text-sm'>
                      Quick patching and vulnerability resolution
                    </p>                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Security Team */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className='bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8 border border-red-500/20'
            >
              <h3 className='text-3xl font-bold text-white mb-6 flex items-center'>
                <Shield className='w-8 h-8 text-red-400 mr-4' />
                Report Security Issues
              </h3>

              <p className='text-gray-300 mb-6 leading-relaxed'>
                If you discover a security vulnerability, please report it to
                our security team immediately:
              </p>

              <div className='grid md:grid-cols-3 gap-6'>
                <div className='flex items-center'>
                  <Mail className='w-5 h-5 text-red-400 mr-3' />
                  <div>
                    <p className='text-white font-semibold'>Security Email</p>
                    <p className='text-gray-300'>security@ziontechgroup.com</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <Phone className='w-5 h-5 text-red-400 mr-3' />
                  <div>
                    <p className='text-white font-semibold'>
                      Emergency Hotline
                    </p>
                    <p className='text-gray-300'>+1 (555) 123-HELP</p>
                  </div>
                </div>

                <div className='flex items-center'>
                  <Key className='w-5 h-5 text-red-400 mr-3' />
                  <div>
                    <p className='text-white font-semibold'>PGP Key</p>
                    <p className='text-gray-300'>Available on request</p>                  </div>
                </div>
                
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className='text-white font-semibold'>
                      Emergency Hotline
                    </p>
                    <p className='text-gray-300'>+1 (555) 123-HELP</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <Key className="w-5 h-5 text-red-400 mr-3" />
                  <div>
                    <p className="text-white font-semibold">PGP Key</p>
                    <p className="text-gray-300">Available on request</p>
                  </div>
                </div>
origin/cursor/integrate-build-improve-and-re-verify-c7b5
ursor/integrate-build-improve-and-re-verify-8f7d
</Link>
</Link>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
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
}
  );
  );
}  )
}
}
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
