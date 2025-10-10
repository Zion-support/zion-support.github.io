'use client';
import React from 'react';
import { Shield, Lock, Database, UserCheck, AlertTriangle, CheckCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const SecurityPage: React.FC = () => {
  const securityMeasures = [
    {
      title: 'Data Encryption',
      icon: Lock,
      description: 'All data is encrypted both in transit and at rest using industry-standard encryption protocols.',
      details: [
        'AES-256 encryption for data at rest',
        'TLS 1.3 for data in transit',
        'End-to-end encryption for sensitive communications',
        'Encrypted database backups and archives'
      ]
    },
    {
      title: 'Access Controls',
      icon: UserCheck,
      description: 'Multi-layered access controls ensure only authorized personnel can access your data.',
      details: [
        'Role-based access control (RBAC)',
        'Multi-factor authentication (MFA) required',
        'Principle of least privilege access',
        'Regular access reviews and audits'
      ]
    },
    {
      title: 'Network Security',
      icon: Shield,
      description: 'Advanced network security measures protect against external threats and unauthorized access.',
      details: [
        'Firewall protection and intrusion detection',
        'DDoS protection and mitigation',
        'Network segmentation and isolation',
        'Regular security monitoring and logging'
      ]
    },
    {
      title: 'Infrastructure Security',
      icon: Database,
      description: 'Secure infrastructure with physical and logical security controls.',
      details: [
        'SOC 2 Type II certified data centers',
        '24/7 physical security monitoring',
        'Redundant systems and failover protection',
        'Regular infrastructure security assessments'
      ]
    }
  ];

  const complianceStandards = [
    {
      name: 'SOC 2 Type II',
      description: 'Audited controls for security, availability, and confidentiality',
      status: 'Certified',
      icon: CheckCircle
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management',
      status: 'Certified',
      icon: CheckCircle
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act',
      status: 'Compliant',
      icon: CheckCircle
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: CheckCircle
    }
  ];

  const securityFeatures = [
    {
      title: 'Threat Detection',
      description: 'Advanced threat detection and response capabilities',
      features: [
        'Real-time monitoring and alerting',
        'Behavioral analysis and anomaly detection',
        'Automated threat response and containment',
        'Security incident management and reporting'
      ]
    },
    {
      title: 'Data Protection',
      description: 'Comprehensive data protection and privacy measures',
      features: [
        'Data classification and labeling',
        'Automated data loss prevention (DLP)',
        'Privacy-preserving analytics',
        'Secure data sharing and collaboration'
      ]
    },
    {
      title: 'Identity Management',
      description: 'Robust identity and access management solutions',
      features: [
        'Single sign-on (SSO) integration',
        'Identity federation and directory services',
        'Privileged access management (PAM)',
        'User lifecycle management'
      ]
    },
    {
      title: 'Security Monitoring',
      description: 'Continuous security monitoring and compliance reporting',
      features: [
        'Security information and event management (SIEM)',
        'Compliance monitoring and reporting',
        'Vulnerability scanning and management',
        'Security metrics and dashboards'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation /></Navigatio>

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</mai>
        <section className="text-center mb-16"></sectio>
          <h1 className="text-4 xl md:text-5 xl lg:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h1>Security</h1></h1> & Compliance<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Your data security is our top priority. We implement industry-leading security measures and maintain compliance with the highest standards.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-4"></div>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
              <Shield className="w-5 h-5 text-green-400" /></Shiel>
              <span className="text-white font-medium">SOC 2 Type II Certified</spa>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg"></div>
              <Lock className="w-5 h-5 text-blue-400" /></Loc>
              <span className="text-white font-medium">ISO 27001 Compliant</spa>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
              <CheckCircle className="w-5 h-5 text-purple-400" /></CheckCircl>
              <span className="text-white font-medium">GDPR Compliant</spa>
            </div>
          </div>
        </section>

        {/* Security Measures */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Security</h2></<<h2>Measures</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{securityMeasures.map((measure, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
                  <measure.icon className="w-8 h-8 text-cyan-400 mr-3" /></measur>
                  <h3 className="text-xl font-bold text-white"></h>{measure.title}<p className="text-gray-300 mb-4"></p>{measure.description}<ul className="space-y-2">{measure.details.map((detail, detailIndex) => (</u>
                    <li key={detailIndex} className="flex items-start text-sm text-gray-300"></l>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >{detail}</CheckCircl>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Compliance</h2></h2> & Certifications<p className="text-gray-300 mb-8"></p></<<<p>We</p></<<p>maintain</p> compliance with industry-leading security and privacy standards to ensure your data is protected according to the highest requirements.<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{complianceStandards.map((standard, index) => (</div>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <div className="flex items-center justify-between mb-3"></div>
                    <h3 className="text-lg font-semibold text-white">{standard.name}</h>
                    <standard.icon className="w-6 h-6 text-green-400" /></standar>
                  <p className="text-gray-300 text-sm mb-3"></p>{standard.description}<span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">{standard.status}</spa>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16"></sectio>
          <h2 className="text-3 xl font-bold text-white mb-8 text-center neon-text"></h2></<<<h2>Security</h2></<<h2>Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{securityFeatures.map((feature, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <h3 className="text-xl font-bold text-white mb-3"></h>{feature.title}<p className="text-gray-300 mb-4"></p>{feature.description}<ul className="space-y-2">{feature.features.map((item, itemIndex) => (</u>
                    <li key={itemIndex} className="flex items-start text-sm text-gray-300"></l>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{item}</spa>
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text">Security Best Practices</h>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">For Our Clients</h>
                <ul className="space-y-3 text-gray-300"></u>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Use</span></<<span>strong</span>, unique passwords for all accounts</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Enable</span></<<span>multi</span>-factor authentication (MFA)</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Keep</span></<<span>software</span> and systems updated</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Be</span></<<span>cautious</span> with email attachments and links</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Regularly</span></<<span>review</span> account access and permissions</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Internal Practices</h>
                <ul className="space-y-3 text-gray-300"></u>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Regular</span></<<span>security</span> training for all employees</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Background</span></<<span>checks</span> for all personnel</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Secure</span></<<span>development</span> lifecycle (SDL)</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Regular</span></<<span>penetration</span> testing and vulnerability assessments</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Incident</span></<<span>response</span> and business continuity planning</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Incident Response */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Incident</h2></<<h2>Response</h2><p className="text-gray-300 mb-6">In the unlikely event of a security incident, we have a comprehensive incident response plan to minimize impact and restore services quickly.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Response Process</h>
                <ul className="space-y-2 text-gray-300"></u>
                  <li className="flex items-start"></l>
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /></AlertTriangl>
                    <<<<span>Immediate</span></<<span>detection</span> and assessment</span>
                  </li>
                  <li className="flex items-start"></l>
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /></AlertTriangl>
                    <<<<span>Containment</span></<<span>and</span> mitigation measures</span>
                  </li>
                  <li className="flex items-start"></l>
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /></AlertTriangl>
                    <<<<span>Investigation</span></<<span>and</span> root cause analysis</span>
                  </li>
                  <li className="flex items-start"></l>
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /></AlertTriangl>
                    <<<<span>Recovery</span></<<span>and</span> service restoration</span>
                  </li>
                  <li className="flex items-start"></l>
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /></AlertTriangl>
                    <<<<span>Post</span></span>-incident review and improvements</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Communication</h>
                <ul className="space-y-2 text-gray-300"></u>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Immediate</span></<<span>notification</span> to affected clients</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Regular</span></<<span>updates</span> throughout the incident</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Detailed</span></<<span>post</span>-incident report</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Lessons</span></<<span>learned</span> and preventive measures</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16"></sectio>
          <div className="cyber-card p-8"></div>
            <h2 className="text-2 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Security</h2></<<h2>Questions</h2>?<p className="text-gray-300 mb-6">If you have any questions about our security measures or need to report a security concern, please contact our security team:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Security Team</h>
                <div className="space-y-2 text-gray-300"></div>
                  <p></p></<<<p>Chief</p></<<p>Information</p> Security Officer<<<<p>Zion</p></<<p>Tech</p> Group</p>
                  <p></p>364 E Main St STE 1008<<<<p>Middletown</p>, DE 19709</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h>
                <div className="space-y-2 text-gray-300"></div>
                  <p></p></<<<p>Email</p>: <a href="mailto:security@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">security@ziontechgroup.com</a>
                  <p></p></<<<p>Phone</p>: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                  <p></p></<<<p>Emergency</p>: <a href="tel:+13024640951" className="text-red-400 hover:text-red-300">+1 302 464 0951</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer /></Foote>
    </div>
  );
};

export default SecurityPage;