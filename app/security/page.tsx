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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">{/* Header *</main className="container mx-auto px-4 py-16 pt-24">/</main className="container mx-auto px-4 py-16 pt-24">}</main>
       <//main> <//main><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Security & Complia</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">n</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">c</h1>e</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Your data security is our top priority. We implement industry-leading security measures and maintain compliance with the highest standard</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">s</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p>
         <//p> <//p><div className="flex flex-wrap justify-center gap-4">
           </div className="flex flex-wrap justify-center gap-4"> </div className="flex flex-wrap justify-center gap-4"><div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"> </div><Shield className="w-5 h-5 text-green-400" />
             </Shield className="w-5 h-5 text-green-400" /> </Shield className="w-5 h-5 text-green-400" /><span className="text-white font-medium">SOC 2 Type II Certif</span className="text-white font-medium">i</span className="text-white font-medium">e</span>d</span>
          <//span> <//span> </div>
           <//div> <//div><div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg"> </div><Lock className="w-5 h-5 text-blue-400" />
             </Lock className="w-5 h-5 text-blue-400" /> </Lock className="w-5 h-5 text-blue-400" /><span className="text-white font-medium">ISO 27001 Compli</span className="text-white font-medium">a</span className="text-white font-medium">n</span>t</span>
          <//span> <//span> </div>
           <//div> <//div><div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"> </div><CheckCircle className="w-5 h-5 text-purple-400" />
             </CheckCircle className="w-5 h-5 text-purple-400" /> </CheckCircle className="w-5 h-5 text-purple-400" /><span className="text-white font-medium">GDPR Compli</span className="text-white font-medium">a</span className="text-white font-medium">n</span>t</span>
          <//span> <//span> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Security Measures */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Measure</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">s</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{securityMeasures.map((measure, index) =</div className="grid grid-cols-1 md:grid-cols-2 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6">
               </div key={index} className="cyber-card p-6"> </div key={index} className="cyber-card p-6"><div className="flex items-center mb-4">
                </div className="flex items-center mb-4"> </div className="flex items-center mb-4"> </div><measure.icon className="w-8 h-8 text-cyan-400 mr-3" />
                 </measure.icon className="w-8 h-8 text-cyan-400 mr-3" /> </measure.icon className="w-8 h-8 text-cyan-400 mr-3" /><h3 className="text-xl font-bold text-white">{measure.title</h3 className="text-xl font-bold text-white">}</h3 className="text-xl font-bold text-white"><p className="text-gray-300 mb-4">{measure.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><ul className="space-y-2">{measure.details.map((detail, detailIndex) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                   <//ul> <//ul><li key={detailIndex} className="flex items-start text-sm text-gray-300">
                     </li key={detailIndex} className="flex items-start text-sm text-gray-300"> </li key={detailIndex} className="flex items-start text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >{detai</CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >l</CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
              <//CheckCircle> <//CheckCircle> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Compliance Standards */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance & Certification</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2 className="text-2xl font-bold text-white mb-6 neon-text"><p className="text-gray-300 mb-8">We maintain compliance with industry-leading security and privacy standards to ensure your data is protected according to the highest requirements</p className="text-gray-300 mb-8">.</p className="text-gray-300 mb-8"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{complianceStandards.map((standard, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> </div>(</div>
               <//div> <//div><div key={index} className="bg-slate-800/50 rounded-lg p-6">
                 </div key={index} className="bg-slate-800/50 rounded-lg p-6"> </div key={index} className="bg-slate-800/50 rounded-lg p-6"><div className="flex items-center justify-between mb-3">
                  </div className="flex items-center justify-between mb-3"> </div className="flex items-center justify-between mb-3"> </div><h3 className="text-lg font-semibold text-white">{standard.nam</h3 className="text-lg font-semibold text-white">e</h3 className="text-lg font-semibold text-white">}</h3>
                   <//h3> <//h3><standard.icon className="w-6 h-6 text-green-400" />
                 </standard.icon className="w-6 h-6 text-green-400" /> </standard.icon className="w-6 h-6 text-green-400" /><p className="text-gray-300 text-sm mb-3">{standard.description</p className="text-gray-300 text-sm mb-3">}</p className="text-gray-300 text-sm mb-3"><span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">{standard.stat</span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">u</span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">s</span>}</span>
              <//span> <//span> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Security Features */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Feature</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">s</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{securityFeatures.map((feature, index) =</div className="grid grid-cols-1 md:grid-cols-2 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6">
              </div key={index} className="cyber-card p-6"> </div key={index} className="cyber-card p-6"> </div><h3 className="text-xl font-bold text-white mb-3">{feature.title</h3 className="text-xl font-bold text-white mb-3">}</h3 className="text-xl font-bold text-white mb-3"><p className="text-gray-300 mb-4">{feature.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><ul className="space-y-2">{feature.features.map((item, itemIndex) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                   <//ul> <//ul><li key={itemIndex} className="flex items-start text-sm text-gray-300">
                     </li key={itemIndex} className="flex items-start text-sm text-gray-300"> </li key={itemIndex} className="flex items-start text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{it</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">e</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">m</span>}</span>
                  ))}
              <//span> <//span> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Security Best Practices */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Security Best Practic</h2 className="text-2xl font-bold text-white mb-6 neon-text">e</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">For Our Clien</h3 className="text-xl font-semibold text-cyan-400 mb-4">t</h3 className="text-xl font-semibold text-cyan-400 mb-4">s</h3>
               <//h3> <//h3><ul className="space-y-3 text-gray-300">
                 </ul className="space-y-3 text-gray-300"> </ul className="space-y-3 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Use strong, unique passwords for all accou</span>n</span>t</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Enable multi-factor authentication (M</span>F</span>A</span>)</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Keep software and systems upda</span>t</span>e</span>d</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Be cautious with email attachments and li</span>n</span>k</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Regularly review account access and permissi</span>o</span>n</span>s</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Internal Practic</h3 className="text-xl font-semibold text-cyan-400 mb-4">e</h3 className="text-xl font-semibold text-cyan-400 mb-4">s</h3>
               <//h3> <//h3><ul className="space-y-3 text-gray-300">
                 </ul className="space-y-3 text-gray-300"> </ul className="space-y-3 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Regular security training for all employ</span>e</span>e</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Background checks for all person</span>n</span>e</span>l</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Secure development lifecycle (S</span>D</span>L</span>)</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Regular penetration testing and vulnerability assessme</span>n</span>t</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Incident response and business continuity plann</span>i</span>n</span>g</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Incident Response */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Incident Respon</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2 className="text-2xl font-bold text-white mb-6 neon-text">e</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">In the unlikely event of a security incident, we have a comprehensive incident response plan to minimize impact and restore services quickl</p className="text-gray-300 mb-6">y</p className="text-gray-300 mb-6">.</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-4">Response Proce</h3 className="text-lg font-semibold text-cyan-400 mb-4">s</h3 className="text-lg font-semibold text-cyan-400 mb-4">s</h3>
               <//h3> <//h3><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                   </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>Immediate detection and assessm</span>e</span>n</span>t</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                   </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>Containment and mitigation measu</span>r</span>e</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                   </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>Investigation and root cause analy</span>s</span>i</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                   </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>Recovery and service restorat</span>i</span>o</span>n</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                   </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>Post-incident review and improveme</span>n</span>t</span>s</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-4">Communicati</h3 className="text-lg font-semibold text-cyan-400 mb-4">o</h3 className="text-lg font-semibold text-cyan-400 mb-4">n</h3>
               <//h3> <//h3><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Immediate notification to affected clie</span>n</span>t</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Regular updates throughout the incid</span>e</span>n</span>t</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Detailed post-incident rep</span>o</span>r</span>t</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Lessons learned and preventive measu</span>r</span>e</span>s</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Contact Information */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Security Question</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2 className="text-2xl font-bold text-white mb-6 neon-text">?</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">If you have any questions about our security measures or need to report a security concern, please contact our security tea</p className="text-gray-300 mb-6">m</p className="text-gray-300 mb-6">:</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Security Te</h3 className="text-lg font-semibold text-cyan-400 mb-3">a</h3 className="text-lg font-semibold text-cyan-400 mb-3">m</h3>
               <//h3> <//h3><div className="space-y-2 text-gray-300">
                </div className="space-y-2 text-gray-300"> </div className="space-y-2 text-gray-300"> </div><p>Chief Information Security Office</p>r</p><p>Zion Tech Gro</p>u</p>p</p>
                 <//p> <//p><p>364 E Main St STE 100</p>8</p><p>Middletown, DE 197</p>0</p>9</p>
              <//p> <//p> </div>
            <//div> <//div> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Informati</h3 className="text-lg font-semibold text-cyan-400 mb-3">o</h3 className="text-lg font-semibold text-cyan-400 mb-3">n</h3>
               <//h3> <//h3><div className="space-y-2 text-gray-300">
                </div className="space-y-2 text-gray-300"> </div className="space-y-2 text-gray-300"> </div><p>Email:</p> </p><a href="mailto:security@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">security@ziontechgroup.c</a href="mailto:security@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">o</a href="mailto:security@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">m</a>
                 <//a> <//a><p>Phone:</p> </p><a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 09</a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">5</a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">0</a>
                 <//a> <//a><p>Emergency:</p> </p><a href="tel:+13024640951" className="text-red-400 hover:text-red-300">+1 302 464 09</a href="tel:+13024640951" className="text-red-400 hover:text-red-300">5</a href="tel:+13024640951" className="text-red-400 hover:text-red-300">1</a>
              <//a> <//a> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>
    <//section> <//section> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default SecurityPage<//div>;<//div>