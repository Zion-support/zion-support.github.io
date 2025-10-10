'use client';
import React from 'react';
import { Shield, Lock, Eye, Database, UserCheck, FileText, AlertTriangle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const GDPRPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const rights = [
    {
      title: 'Right of Access',
      icon: Eye,
      description: 'You have the right to obtain confirmation as to whether or not personal data concerning you is being processed.',
      details: [
        'Request a copy of your personal data',
        'Know the purposes of processing',
        'Understand data retention periods',
        'Identify data sources and recipients'
      ]
    },
    {
      title: 'Right to Rectification',
      icon: FileText,
      description: 'You have the right to have inaccurate personal data corrected and incomplete data completed.',
      details: [
        'Correct factual errors in your data',
        'Update outdated information',
        'Complete missing data fields',
        'Request verification of corrections'
      ]
    },
    {
      title: 'Right to Erasure',
      icon: AlertTriangle,
      description: 'You have the right to request the deletion of your personal data under certain circumstances.',
      details: [
        'Data no longer necessary for original purposes',
        'Withdrawal of consent for processing',
        'Unlawful processing of personal data',
        'Objection to processing for legitimate interests'
      ]
    },
    {
      title: 'Right to Restrict Processing',
      icon: Lock,
      description: 'You have the right to limit how we process your personal data in certain situations.',
      details: [
        'Contest accuracy of personal data',
        'Unlawful processing but prefer restriction to erasure',
        'We no longer need data but you require it for legal claims',
        'Objection to processing pending verification'
      ]
    },
    {
      title: 'Right to Data Portability',
      icon: Database,
      description: 'You have the right to receive your personal data in a structured, commonly used format.',
      details: [
        'Receive data in machine-readable format',
        'Transfer data to another controller',
        'Direct transmission where technically feasible',
        'Data processed by automated means based on consent'
      ]
    },
    {
      title: 'Right to Object',
      icon: UserCheck,
      description: 'You have the right to object to processing of your personal data for specific purposes.',
      details: [
        'Object to processing for direct marketing',
        'Object to processing for legitimate interests',
        'Object to processing for research purposes',
        'Object to automated decision-making'
      ]
    }
  ];

  const legalBases = [
    {
      title: 'Consent',
      description: 'You have given clear consent for us to process your personal data for specific purposes.',
      examples: ['Newsletter subscriptions', 'Marketing communications', 'Cookie preferences', 'Optional data collection']
    },
    {
      title: 'Contract Performance',
      description: 'Processing is necessary for the performance of a contract with you.',
      examples: ['Service delivery', 'Account management', 'Billing and payments', 'Customer support']
    },
    {
      title: 'Legal Obligation',
      description: 'Processing is necessary for compliance with a legal obligation.',
      examples: ['Tax reporting', 'Regulatory compliance', 'Audit requirements', 'Legal proceedings']
    },
    {
      title: 'Legitimate Interests',
      description: 'Processing is necessary for our legitimate interests or those of a third party.',
      examples: ['Website analytics', 'Security monitoring', 'Business operations', 'Service improvement']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation />

     </Navigation /> </Navigation /><main className="container mx-auto px-4 py-16 pt-24">{/* Header *</main className="container mx-auto px-4 py-16 pt-24">/</main className="container mx-auto px-4 py-16 pt-24">}</main>
       <//main> <//main><section className="text-center mb-16">
         </section className="text-center mb-16"> </section className="text-center mb-16"><h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">GDPR Complian</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">c</h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">e</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR)</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"><div className="text-sm text-gray-400">Last updated: {lastUpdat</div className="text-sm text-gray-400">e</div className="text-sm text-gray-400">d</div>}</div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Introduction */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Our GDPR Commitmen</h2 className="text-2xl font-bold text-white mb-6 neon-text">t</h2 className="text-2xl font-bold text-white mb-6 neon-text"><p className="text-gray-300 mb-4 leading-relaxed">Zion Tech Group is fully committed to compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We have implemented comprehensive measures to ensure the protection of your personal data and respect for your privacy right</p className="text-gray-300 mb-4 leading-relaxed">s</p className="text-gray-300 mb-4 leading-relaxed">.</p>
               <//p> <//p><p className="text-gray-300 leading-relaxed">This page outlines our GDPR compliance measures, your rights under GDPR, and how you can exercise those right</p className="text-gray-300 leading-relaxed">s</p className="text-gray-300 leading-relaxed">.</p>
        <//p> <//p> </div>
      <//div> <//div> </section>

        {/* Your Rights */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Your Rights Under GDP</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">R</h2 className="text-3xl font-bold text-white mb-8 text-center neon-text"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{rights.map((right, index) =</div className="grid grid-cols-1 md:grid-cols-2 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6">
               </div key={index} className="cyber-card p-6"> </div key={index} className="cyber-card p-6"><div className="flex items-center mb-4">
                </div className="flex items-center mb-4"> </div className="flex items-center mb-4"> </div><right.icon className="w-8 h-8 text-cyan-400 mr-3" />
                 </right.icon className="w-8 h-8 text-cyan-400 mr-3" /> </right.icon className="w-8 h-8 text-cyan-400 mr-3" /><h3 className="text-xl font-bold text-white">{right.title</h3 className="text-xl font-bold text-white">}</h3 className="text-xl font-bold text-white"><p className="text-gray-300 mb-4">{right.descriptio</p className="text-gray-300 mb-4">n</p className="text-gray-300 mb-4">}</p>
               <//p> <//p><div>
                </div> </div> </div><h4 className="text-sm font-semibold text-cyan-400 mb-2">What this means</h4 className="text-sm font-semibold text-cyan-400 mb-2">:</h4 className="text-sm font-semibold text-cyan-400 mb-2"><ul className="space-y-1">{right.details.map((detail, detailIndex) =></ul className="space-y-1"> </ul className="space-y-1">(</ul>
                     <//ul> <//ul><li key={detailIndex} className="flex items-start text-sm text-gray-300">
                       </li key={detailIndex} className="flex items-start text-sm text-gray-300"> </li key={detailIndex} className="flex items-start text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{deta</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">i</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">l</span>}</span>
                    ))}
                <//span> <//span> </ul>
              <//ul> <//ul> </div>
            <//div> <//div> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Legal Bases */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Legal Bases for Processin</h2 className="text-2xl font-bold text-white mb-6 neon-text">g</h2 className="text-2xl font-bold text-white mb-6 neon-text"><p className="text-gray-300 mb-6">We process your personal data based on one or more of the following legal bases under GDPR</p className="text-gray-300 mb-6">:</p className="text-gray-300 mb-6"><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{legalBases.map((basis, index) =</div className="grid grid-cols-1 md:grid-cols-2 gap-6">></div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div>(</div>
               <//div> <//div><div key={index} className="bg-slate-800/50 rounded-lg p-6">
                </div key={index} className="bg-slate-800/50 rounded-lg p-6"> </div key={index} className="bg-slate-800/50 rounded-lg p-6"> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">{basis.title</h3 className="text-lg font-semibold text-cyan-400 mb-3">}</h3 className="text-lg font-semibold text-cyan-400 mb-3"><p className="text-gray-300 mb-4 text-sm">{basis.descriptio</p className="text-gray-300 mb-4 text-sm">n</p className="text-gray-300 mb-4 text-sm">}</p>
                 <//p> <//p><div>
                  </div> </div> </div><h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples</h4 className="text-sm font-semibold text-cyan-400 mb-2">:</h4 className="text-sm font-semibold text-cyan-400 mb-2"><ul className="space-y-1">{basis.examples.map((example, exampleIndex) =></ul className="space-y-1"> </ul className="space-y-1">(</ul>
                       <//ul> <//ul><li key={exampleIndex} className="flex items-start text-sm text-gray-300">
                         </li key={exampleIndex} className="flex items-start text-sm text-gray-300"> </li key={exampleIndex} className="flex items-start text-sm text-gray-300"><span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{examp</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">l</span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">e</span>}</span>
                      ))}
                  <//span> <//span> </ul>
                <//ul> <//ul> </div>
              <//div> <//div> </div>
              ))}
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Data Protection Measures */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Protection Measur</h2 className="text-2xl font-bold text-white mb-6 neon-text">e</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2>
           <//h2> <//h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Technical Safeguar</h3 className="text-xl font-semibold text-cyan-400 mb-4">d</h3 className="text-xl font-semibold text-cyan-400 mb-4">s</h3>
               <//h3> <//h3><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>End-to-end encryption for all data transmiss</span>i</span>o</span>n</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Secure data centers with physical and digital secur</span>i</span>t</span>y</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Regular security audits and penetration test</span>i</span>n</span>g</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Automated backup and disaster recovery syst</span>e</span>m</span>s</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-xl font-semibold text-cyan-400 mb-4">Organizational Safeguar</h3 className="text-xl font-semibold text-cyan-400 mb-4">d</h3 className="text-xl font-semibold text-cyan-400 mb-4">s</h3>
               <//h3> <//h3><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Data Protection Officer (DPO) appoin</span>t</span>e</span>d</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Staff training on data protection princip</span>l</span>e</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Data processing impact assessme</span>n</span>t</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Regular compliance monitoring and revi</span>e</span>w</span>s</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* How to Exercise Your Rights */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">How to Exercise Your Righ</h2 className="text-2xl font-bold text-white mb-6 neon-text">t</h2 className="text-2xl font-bold text-white mb-6 neon-text">s</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within 30 day</p className="text-gray-300 mb-6">s</p className="text-gray-300 mb-6">.</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 gap-8">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-8"> </div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-4">Making a Reque</h3 className="text-lg font-semibold text-cyan-400 mb-4">s</h3 className="text-lg font-semibold text-cyan-400 mb-4">t</h3>
               <//h3> <//h3><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Email us at privacy@ziontechgroup.</span>c</span>o</span>m</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Include your full name and email addr</span>e</span>s</span>s</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Specify which right you want to exerc</span>i</span>s</span>e</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Provide any additional information we may n</span>e</span>e</span>d</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-4">Identity Verificati</h3 className="text-lg font-semibold text-cyan-400 mb-4">o</h3 className="text-lg font-semibold text-cyan-400 mb-4">n</h3>
                 <//h3> <//h3><p className="text-gray-300 mb-4">To protect your privacy, we may need to verify your identity before processing your reques</p className="text-gray-300 mb-4">t</p className="text-gray-300 mb-4">.</p>
               <//p> <//p><ul className="space-y-2 text-gray-300">
                 </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Government-issued photo</span> </span>I</span>D</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Proof of address (utility bill, bank stateme</span>n</span>t</span>)</span>
                <//span> <//span> </li>
                 <//li> <//li><li className="flex items-start">
                   </li className="flex items-start"> </li className="flex items-start"><CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                   </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /> </CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /><span>Account verification questi</span>o</span>n</span>s</span>
                <//span> <//span> </li>
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
          <//div> <//div> </div>
        <//div> <//div> </div>
      <//div> <//div> </section>

        {/* Data Breach Notification */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Breach Notificati</h2 className="text-2xl font-bold text-white mb-6 neon-text">o</h2 className="text-2xl font-bold text-white mb-6 neon-text">n</h2>
           <//h2> <//h2><p className="text-gray-300 mb-4">In the unlikely event of a data breach that poses a risk to your rights and freedoms, we wil</p className="text-gray-300 mb-4">l</p className="text-gray-300 mb-4">:</p>
           <//p> <//p><ul className="space-y-2 text-gray-300">
             </ul className="space-y-2 text-gray-300"> </ul className="space-y-2 text-gray-300"><li className="flex items-start">
               </li className="flex items-start"> </li className="flex items-start"><AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
               </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>Notify the relevant supervisory authority within 72 ho</span>u</span>r</span>s</span>
            <//span> <//span> </li>
             <//li> <//li><li className="flex items-start">
               </li className="flex items-start"> </li className="flex items-start"><AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
               </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>Inform affected individuals without undue de</span>l</span>a</span>y</span>
            <//span> <//span> </li>
             <//li> <//li><li className="flex items-start">
               </li className="flex items-start"> </li className="flex items-start"><AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
               </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>Provide clear information about the breach and its consequen</span>c</span>e</span>s</span>
            <//span> <//span> </li>
             <//li> <//li><li className="flex items-start">
               </li className="flex items-start"> </li className="flex items-start"><AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
               </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /> </AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /><span>Recommend measures to mitigate potential adverse effe</span>c</span>t</span>s</span>
            <//span> <//span> </li>
          <//li> <//li> </ul>
        <//ul> <//ul> </div>
      <//div> <//div> </section>

        {/* Contact Information */}
       <//section> <//section><section className="mb-16">
         </section className="mb-16"> </section className="mb-16"><div className="cyber-card p-8">
          </div className="cyber-card p-8"> </div className="cyber-card p-8"> </div><h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Our Data Protection Offic</h2 className="text-2xl font-bold text-white mb-6 neon-text">e</h2 className="text-2xl font-bold text-white mb-6 neon-text">r</h2>
           <//h2> <//h2><p className="text-gray-300 mb-6">For any questions about our GDPR compliance or to exercise your rights, please contact our Data Protection Office</p className="text-gray-300 mb-6">r</p className="text-gray-300 mb-6">:</p>
           <//p> <//p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">
             </div className="grid grid-cols-1 md:grid-cols-2 gap-6"> </div className="grid grid-cols-1 md:grid-cols-2 gap-6"><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Gro</h3 className="text-lg font-semibold text-cyan-400 mb-3">u</h3 className="text-lg font-semibold text-cyan-400 mb-3">p</h3>
               <//h3> <//h3><div className="space-y-2 text-gray-300">
                </div className="space-y-2 text-gray-300"> </div className="space-y-2 text-gray-300"> </div><p>Data Protection Office</p>r</p><p>364 E Main St STE 10</p>0</p>8</p>
                 <//p> <//p><p>Middletown, DE 1970</p>9</p><p>United Stat</p>e</p>s</p>
              <//p> <//p> </div>
            <//div> <//div> </div>
             <//div> <//div><div>
              </div> </div> </div><h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Informati</h3 className="text-lg font-semibold text-cyan-400 mb-3">o</h3 className="text-lg font-semibold text-cyan-400 mb-3">n</h3>
               <//h3> <//h3><div className="space-y-2 text-gray-300">
                </div className="space-y-2 text-gray-300"> </div className="space-y-2 text-gray-300"> </div><p>Email:</p> </p><a href="mailto:dpo@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">dpo@ziontechgroup.c</a href="mailto:dpo@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">o</a href="mailto:dpo@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">m</a>
                 <//a> <//a><p>Phone:</p> </p><a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 095</a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">0</a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300"><p>Response Time: Within 30 da</p>y</p>s</p>
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

export default GDPRPage<//div>;<//div>