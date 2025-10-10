'use client';
import React from 'react';
import { Shield, CheckCircle, FileText, Award, Lock, Eye, Database, UserCheck } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const CompliancePage: React.FC = () => {
  const complianceFrameworks = [
    {
      name: 'SOC 2 Type II',
      description: 'Audited controls for security, availability, processing integrity, confidentiality, and privacy',
      status: 'Certified',
      icon: Award,
      details: [
        'Annual third-party audits by independent auditors',
        'Comprehensive control testing and validation',
        'Management attestation and reporting',
        'Continuous monitoring and improvement'
      ]
    },
    {
      name: 'ISO 27001',
      description: 'International standard for information security management systems',
      status: 'Certified',
      icon: Shield,
      details: [
        'Information security management system (ISMS)',
        'Risk assessment and treatment procedures',
        'Security controls and implementation guidelines',
        'Regular audits and continuous improvement'
      ]
    },
    {
      name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data protection',
      status: 'Compliant',
      icon: Lock,
      details: [
        'Data protection by design and by default',
        'Privacy impact assessments (PIAs)',
        'Data subject rights management',
        'Data breach notification procedures'
      ]
    },
    {
      name: 'CCPA',
      description: 'California Consumer Privacy Act compliance for California residents',
      status: 'Compliant',
      icon: Eye,
      details: [
        'Consumer privacy rights management',
        'Data collection and processing transparency',
        'Opt-out mechanisms for data sales',
        'Privacy policy and notice requirements'
      ]
    },
    {
      name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act for healthcare data',
      status: 'Compliant',
      icon: Database,
      details: [
        'Protected health information (PHI) safeguards',
        'Administrative, physical, and technical safeguards',
        'Business associate agreements (BAAs)',
        'Workforce training and access controls'
      ]
    },
    {
      name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard for payment processing',
      status: 'Compliant',
      icon: UserCheck,
      details: [
        'Secure payment card data handling',
        'Network security and monitoring',
        'Regular security testing and vulnerability management',
        'Information security policy and procedures'
      ]
    }
  ];

  const complianceAreas = [
    {
      title: 'Data Protection',
      icon: Shield,
      description: 'Comprehensive data protection measures and privacy controls',
      measures: [
        'Data encryption at rest and in transit',
        'Data classification and handling procedures',
        'Privacy by design principles',
        'Data retention and disposal policies'
      ]
    },
    {
      title: 'Access Controls',
      icon: Lock,
      description: 'Robust access management and authentication systems',
      measures: [
        'Multi-factor authentication (MFA)',
        'Role-based access control (RBAC)',
        'Privileged access management (PAM)',
        'Regular access reviews and audits'
      ]
    },
    {
      title: 'Security Monitoring',
      icon: Eye,
      description: 'Continuous security monitoring and incident response',
      measures: [
        'Security information and event management (SIEM)',
        'Real-time threat detection and response',
        'Vulnerability scanning and management',
        'Security incident response procedures'
      ]
    },
    {
      title: 'Audit & Reporting',
      icon: FileText,
      description: 'Regular audits and compliance reporting',
      measures: [
        'Internal and external security audits',
        'Compliance monitoring and reporting',
        'Risk assessments and management',
        'Continuous improvement processes'
      ]
    }
  ];

  const certifications = [
    {
      name: 'SOC 2 Type II',
      issuer: 'AICPA',
      validUntil: '2025-12-31',
      scope: 'Security, Availability, Confidentiality'
    },
    {
      name: 'ISO 27001:2013',
      issuer: 'ISO',
      validUntil: '2025-06-30',
      scope: 'Information Security Management'
    },
    {
      name: 'GDPR Compliance',
      issuer: 'Internal Assessment',
      validUntil: 'Ongoing',
      scope: 'Data Protection and Privacy'
    },
    {
      name: 'CCPA Compliance',
      issuer: 'Internal Assessment',
      validUntil: 'Ongoing',
      scope: 'California Privacy Rights'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">{/* Header *</main className="container mx-auto px-4 py-16 pt-24">/</main className="container mx-auto px-4 py-16 pt-24">}</main>
       <//main> <//main><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Compliance & Certificati</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">o</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">n</h1>s</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We maintain the highest standards of compliance and security to protect your data and ensure regulatory adherence across all industrie</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">s</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p>
         <//p> <//p><div className="flex flex-wrap justify-center gap-4">
           </div className="flex flex-wrap justify-center gap-4"> </div className="flex flex-wrap justify-center gap-4"><div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"> </div><Award className="w-5 h-5 text-green-400" />
             </Award className="w-5 h-5 text-green-400" /> </Award className="w-5 h-5 text-green-400" /><span className="text-white font-medium">SOC 2 Type</span className="text-white font-medium"> </span className="text-white font-medium">I</span>I</span>
          <//span> <//span> </div>
           <//div> <//div><div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg"> </div><Shield className="w-5 h-5 text-blue-400" />
             </Shield className="w-5 h-5 text-blue-400" /> </Shield className="w-5 h-5 text-blue-400" /><span className="text-white font-medium">ISO 27</span className="text-white font-medium">0</span className="text-white font-medium">0</span>1</span>
          <//span> <//span> </div>
           <//div> <//div><div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg">
            </div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"> </div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"> </div><CheckCircle className="w-5 h-5 text-purple-400" />
             </CheckCircle className="w-5 h-5 text-purple-400" /> </CheckCircle className="w-5 h-5 text-purple-400" /><span className="text-white font-medium">GDPR Compli</span className="text-white font-medium">a</span className="text-white font-medium">n</span>t</span>
          <//span> <//span> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Compliance Frameworks */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Framework</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">s</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{complianceFrameworks.map((framework, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6">
               </div key={index} className="cyber-card p-6"> </div key={index} className="cyber-card p-6"><div className="flex items-center justify-between mb-4">
                </div className="flex items-center justify-between mb-4"> </div className="flex items-center justify-between mb-4"> </div><framework.icon className="w-8 h-8 text-cyan-400" />
                 </framework.icon className="w-8 h-8 text-cyan-400" /> </framework.icon className="w-8 h-8 text-cyan-400" /><span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">{framework.statu</span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">s</span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">}</span><h3 className="text-xl font-bold text-white mb-2">{framework.nam</h3 className="text-xl font-bold text-white mb-2">e</h3 className="text-xl font-bold text-white mb-2">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-4 text-sm">{framework.description</p className="text-gray-300 mb-4 text-sm">}</p className="text-gray-300 mb-4 text-sm"><ul className="space-y-2">{framework.details.map((detail, detailIndex) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                   <//ul> <//ul><li key={detailIndex} className="flex items-start text-sm text-gray-300">
                     </li key={detailIndex} className="flex items-start text-sm text-gray-300"> </li key={detailIndex} className="flex items-start text-sm text-gray-300"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >{detai</CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >l</CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
              <//CheckCircle> <//CheckCircle> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Compliance Areas */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Compliance Area</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">s</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{complianceAreas.map((area, index) =</div className="grid grid-cols-1 md:grid-cols-2 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6">
               </div key={index} className="cyber-card p-6"> </div key={index} className="cyber-card p-6"><div className="flex items-center mb-4">
                </div className="flex items-center mb-4"> </div className="flex items-center mb-4"> </div><area.icon className="w-8 h-8 text-cyan-400 mr-3" />
                 </area.icon className="w-8 h-8 text-cyan-400 mr-3" /> </area.icon className="w-8 h-8 text-cyan-400 mr-3" /><h3 className="text-xl font-bold text-white">{area.title</h3 className="text-xl font-bold text-white">}</h3 className="text-xl font-bold text-white"><p className="text-gray-300 mb-4">{area.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><ul className="space-y-2">{area.measures.map((measure, measureIndex) =></ul className="space-y-2"> </ul className="space-y-2">(</ul>
                   <//ul> <//ul><li key={measureIndex} className="flex items-start text-sm text-gray-300">
                     </li key={measureIndex} className="flex items-start text-sm text-gray-300"> </li key={measureIndex} className="flex items-start text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{measu</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">r</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">e</span>}</span>
                  ))}
              <//span> <//span> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Current Certifications */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Current Certificatio</h2 className="text-2xl font-bold text-white mb-6 neon-text">n</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2>
           <//h2> <//h2><div className="overflow-x-auto">
            </div className="overflow-x-auto"> </div className="overflow-x-auto"> </div><table className="w-full text-left">
               </table className="w-full text-left"> </table className="w-full text-left"><thead>
                 </thead> </thead><tr className="border-b border-gray-700">
                   </tr className="border-b border-gray-700"> </tr className="border-b border-gray-700"><th className="pb-3 text-cyan-400 font-semibold">Certificatio</th className="pb-3 text-cyan-400 font-semibold">n</th className="pb-3 text-cyan-400 font-semibold"><th className="pb-3 text-cyan-400 font-semibold">Issu</th className="pb-3 text-cyan-400 font-semibold">e</th className="pb-3 text-cyan-400 font-semibold">r</th>
                   <//th> <//th><th className="pb-3 text-cyan-400 font-semibold">Valid Unti</th className="pb-3 text-cyan-400 font-semibold">l</th className="pb-3 text-cyan-400 font-semibold"><th className="pb-3 text-cyan-400 font-semibold">Scop</th className="pb-3 text-cyan-400 font-semibold">e</th className="pb-3 text-cyan-400 font-semibold"><th className="pb-3 text-cyan-400 font-semibold">Statu</th className="pb-3 text-cyan-400 font-semibold">s</th className="pb-3 text-cyan-400 font-semibold"><tbody>{certifications.map((cert, index) =></tbody> </tbody>(</tbody>
                   <//tbody> <//tbody><tr key={index} className="border-b border-gray-800">
                     </tr key={index} className="border-b border-gray-800"> </tr key={index} className="border-b border-gray-800"><td className="py-3 text-white font-semibold">{cert.name</td className="py-3 text-white font-semibold">}</td className="py-3 text-white font-semibold"><td className="py-3 text-gray-300">{cert.issue</td className="py-3 text-gray-300">r</td className="py-3 text-gray-300">}</td>
                     <//td> <//td><td className="py-3 text-gray-300">{cert.validUntil</td className="py-3 text-gray-300">}</td className="py-3 text-gray-300"><td className="py-3 text-gray-300">{cert.scop</td className="py-3 text-gray-300">e</td className="py-3 text-gray-300">}</td>
                     <//td> <//td><td className="py-3">
                       </td className="py-3"> </td className="py-3"><span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">
                        </span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400"> </span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400"> </span><CheckCircle className="w-3 h-3 mr-1" >Acti</CheckCircle className="w-3 h-3 mr-1" >v</CheckCircle className="w-3 h-3 mr-1" >e</CheckCircle>
                      <//CheckCircle> <//CheckCircle> </CheckCircle>
                    <//CheckCircle> <//CheckCircle> </td>
                  <//td> <//td> </tr>
                  ))}
              <//tr> <//tr> </tbody>
            <//tbody> <//tbody> </table>
          <//table> <//table> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Compliance Process */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Our Compliance Proce</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Continuous Monitori</h3 className="text-xl font-semibold text-cyan-400 mb-4">n</h3 className="text-xl font-semibold text-cyan-400 mb-4">g</h3>
               <//h3> <//h3><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Real-time compliance monitoring and alert</span>i</span>n</span>g</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Automated compliance checks and report</span>i</span>n</span>g</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Regular risk assessments and gap analy</span>s</span>i</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Ongoing training and awareness progr</span>a</span>m</span>s</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Audit & Assessme</h3 className="text-xl font-semibold text-cyan-400 mb-4">n</h3 className="text-xl font-semibold text-cyan-400 mb-4">t</h3>
               <//h3> <//h3><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Annual third-party security aud</span>i</span>t</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Penetration testing and vulnerability assessme</span>n</span>t</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Compliance gap analysis and remediat</span>i</span>o</span>n</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Management review and attestat</span>i</span>o</span>n</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Industry-Specific Compliance */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Industry-Specific Complian</h2 className="text-2xl font-bold text-white mb-6 neon-text">c</h2 className="text-2xl font-bold text-white mb-6 neon-text">e</h2>
           <//h2> <//h2><p className="text-gray-300 mb-8">We understand that different industries have unique compliance requirements. Our solutions are designed to meet the specific needs of various sector</p className="text-gray-300 mb-8">s</p className="text-gray-300 mb-8">.</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"><div className="bg-slate-800/50 rounded-lg p-6">
              </div className="bg-slate-800/50 rounded-lg p-6"> </div className="bg-slate-800/50 rounded-lg p-6"> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Healthcare (HIPA</h3 className="text-lg font-semibold text-cyan-400 mb-3">A</h3 className="text-lg font-semibold text-cyan-400 mb-3">)</h3>
               <//h3> <//h3><ul className="space-y-2 text-sm text-gray-300">
                 </ul className="space-y-2 text-sm text-gray-300"> </ul className="space-y-2 text-sm text-gray-300"><li>• Protected Health Information (PHI) safeguard</li>s</li><li>• Administrative, physical, and technical safeguar</li>d</li>s</li>
                 <//li> <//li><li>• Business Associate Agreements (BAAs</li>)</li><li>• Workforce training and access contro</li>l</li>s</li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
             <//div> <//div><div className="bg-slate-800/50 rounded-lg p-6">
              </div className="bg-slate-800/50 rounded-lg p-6"> </div className="bg-slate-800/50 rounded-lg p-6"> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Financial Servic</h3 className="text-lg font-semibold text-cyan-400 mb-3">e</h3 className="text-lg font-semibold text-cyan-400 mb-3">s</h3>
               <//h3> <//h3><ul className="space-y-2 text-sm text-gray-300">
                 </ul className="space-y-2 text-sm text-gray-300"> </ul className="space-y-2 text-sm text-gray-300"><li>• PCI DSS compliance for payment processin</li>g</li><li>• SOX compliance for financial reporti</li>n</li>g</li>
                 <//li> <//li><li>• GLBA compliance for financial privac</li>y</li><li>• FFIEC guidelines for cybersecuri</li>t</li>y</li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
             <//div> <//div><div className="bg-slate-800/50 rounded-lg p-6">
              </div className="bg-slate-800/50 rounded-lg p-6"> </div className="bg-slate-800/50 rounded-lg p-6"> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Governme</h3 className="text-lg font-semibold text-cyan-400 mb-3">n</h3 className="text-lg font-semibold text-cyan-400 mb-3">t</h3>
               <//h3> <//h3><ul className="space-y-2 text-sm text-gray-300">
                 </ul className="space-y-2 text-sm text-gray-300"> </ul className="space-y-2 text-sm text-gray-300"><li>• FedRAMP compliance for cloud service</li>s</li><li>• FISMA compliance for federal syste</li>m</li>s</li>
                 <//li> <//li><li>• NIST Cybersecurity Framewor</li>k</li><li>• Security clearance requiremen</li>t</li>s</li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Compliance Documentation */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance Documentati</h2 className="text-2xl font-bold text-white mb-6 neon-text">o</h2 className="text-2xl font-bold text-white mb-6 neon-text">n</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">We maintain comprehensive documentation of our compliance efforts and are happy to provide relevant documentation to our clients and prospect</p className="text-gray-300 mb-6">s</p className="text-gray-300 mb-6">.</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-4">Available Documen</h3 className="text-lg font-semibold text-cyan-400 mb-4">t</h3 className="text-lg font-semibold text-cyan-400 mb-4">s</h3>
               <//h3> <//h3><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-center">
                   </li className="flex items-center"> </li className="flex items-center"><FileText className="w-4 h-4 text-cyan-400 mr-2" />
                   </FileText className="w-4 h-4 text-cyan-400 mr-2" /> </FileText className="w-4 h-4 text-cyan-400 mr-2" /><span>SOC 2 Type II Rep</span>o</span>r</span>t</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-center">
                   </li className="flex items-center"> </li className="flex items-center"><FileText className="w-4 h-4 text-cyan-400 mr-2" />
                   </FileText className="w-4 h-4 text-cyan-400 mr-2" /> </FileText className="w-4 h-4 text-cyan-400 mr-2" /><span>ISO 27001 Certific</span>a</span>t</span>e</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-center">
                   </li className="flex items-center"> </li className="flex items-center"><FileText className="w-4 h-4 text-cyan-400 mr-2" />
                   </FileText className="w-4 h-4 text-cyan-400 mr-2" /> </FileText className="w-4 h-4 text-cyan-400 mr-2" /><span>Privacy Policy and Data Processing Agreem</span>e</span>n</span>t</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-center">
                   </li className="flex items-center"> </li className="flex items-center"><FileText className="w-4 h-4 text-cyan-400 mr-2" />
                   </FileText className="w-4 h-4 text-cyan-400 mr-2" /> </FileText className="w-4 h-4 text-cyan-400 mr-2" /><span>Security and Compliance Overv</span>i</span>e</span>w</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-4">Request Documentati</h3 className="text-lg font-semibold text-cyan-400 mb-4">o</h3 className="text-lg font-semibold text-cyan-400 mb-4">n</h3>
                 <//h3> <//h3><p className="text-gray-300 mb-4">To request compliance documentation or schedule a compliance review, please contact our compliance tea</p className="text-gray-300 mb-4">m</p className="text-gray-300 mb-4">.</p>
               <//p> <//p><a
                  href="mailto:compliance@ziontechgroup.com"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                 </a
                  href="mailto:compliance@ziontechgroup.com"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                > </a
                  href="mailto:compliance@ziontechgroup.com"
                  className="inline-flex items-center px-4 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                ><FileText className="w-4 h-4 mr-2" >Request Documentati</FileText className="w-4 h-4 mr-2" >o</FileText className="w-4 h-4 mr-2" >n</FileText>
              <//FileText> <//FileText> </FileText>
            <//FileText> <//FileText> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Contact Information */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance Question</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2 className="text-2xl font-bold text-white mb-6 neon-text">?</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">If you have any questions about our compliance posture or need specific compliance documentation, please contact our compliance tea</p className="text-gray-300 mb-6">m</p className="text-gray-300 mb-6">:</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Compliance Te</h3 className="text-lg font-semibold text-cyan-400 mb-3">a</h3 className="text-lg font-semibold text-cyan-400 mb-3">m</h3>
               <//h3> <//h3><div className="space-y-2 text-gray-300">
                </div className="space-y-2 text-gray-300"> </div className="space-y-2 text-gray-300"> </div><p>Chief Compliance Office</p>r</p><p>Zion Tech Gro</p>u</p>p</p>
                 <//p> <//p><p>364 E Main St STE 100</p>8</p><p>Middletown, DE 197</p>0</p>9</p>
              <//p> <//p> </div>
            <//div> <//div> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Informati</h3 className="text-lg font-semibold text-cyan-400 mb-3">o</h3 className="text-lg font-semibold text-cyan-400 mb-3">n</h3>
               <//h3> <//h3><div className="space-y-2 text-gray-300">
                </div className="space-y-2 text-gray-300"> </div className="space-y-2 text-gray-300"> </div><p>Email:</p> </p><a href="mailto:compliance@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">compliance@ziontechgroup.c</a href="mailto:compliance@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">o</a href="mailto:compliance@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">m</a>
                 <//a> <//a><p>Phone:</p> </p><a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 095</a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">0</a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300"><p>Response Time: Within 24 hou</p>r</p>s</p>
              <//p> <//p> </div>
            <//div> <//div> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>
    <//section> <//section> </main>

     <//main> <//main><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default CompliancePage<//div>;<//div>