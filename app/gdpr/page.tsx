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
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">GDPR Compliance</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).<div className="text-sm text-gray-400">Last updated: {lastUpdated}</div>
          </div>
        </section>

        {/* Introduction */}<section className="mb-16">
          </section><div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Our GDPR Commitment</h2><p className="text-gray-300 mb-4 leading-relaxed">Zion Tech Group is fully committed to compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We have implemented comprehensive measures to ensure the protection of your personal data and respect for your privacy rights.</p><p className="text-gray-300 leading-relaxed">This page outlines our GDPR compliance measures, your rights under GDPR, and how you can exercise those rights.</p>
            </p>
          </div>
        </section>

        {/* Your Rights */}<section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Your Rights Under GDPR<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{rights.map((right, index) => (</div>
              <div key={index} className="cyber-card p-6">
                </div><div className="flex items-center mb-4">
                  <right.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{right.title}</h3><p className="text-gray-300 mb-4">{right.description}</p>
                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">What this means:<ul className="space-y-1">{right.details.map((detail, detailIndex) => (</ul>
                      <li key={detailIndex} className="flex items-start text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{detail}</span>
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Bases */}<section className="mb-16">
          </section><div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Legal Bases for Processing</h2><p className="text-gray-300 mb-6">We process your personal data based on one or more of the following legal bases under GDPR:<div className="grid grid-cols-1 md:grid-cols-2 gap-6">{legalBases.map((basis, index) => (</div>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">{basis.title}</h3><p className="text-gray-300 mb-4 text-sm">{basis.description}</p>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:<ul className="space-y-1">{basis.examples.map((example, exampleIndex) => (</ul>
                        <li key={exampleIndex} className="flex items-start text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{example}</span>
                        </span>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection Measures */}<section className="mb-16">
          </section><div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Protection Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              </div><div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Technical Safeguards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>End-to-end encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Secure data centers with physical and digital security</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Regular security audits and penetration testing</span>
                  </li>
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Automated backup and disaster recovery systems</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Organizational Safeguards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data Protection Officer (DPO) appointed</span>
                  </li>
                  <li className="flex items-start">
                    <UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Staff training on data protection principles</span>
                  </li>
                  <li className="flex items-start">
                    <UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data processing impact assessments</span>
                  </li>
                  <li className="flex items-start">
                    <UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular compliance monitoring and reviews</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* How to Exercise Your Rights */}<section className="mb-16">
          </section><div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">How to Exercise Your Rights</h2><p className="text-gray-300 mb-6">To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within 30 days.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              </div><div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Making a Request</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Email us at privacy@ziontechgroup.com</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Include your full name and email address</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Specify which right you want to exercise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Provide any additional information we may need</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Identity Verification</h3><p className="text-gray-300 mb-4">To protect your privacy, we may need to verify your identity before processing your request.</p>
                </p>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Government-issued photo ID</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Proof of address (utility bill, bank statement)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0"  / />
                    <span>Account verification questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Breach Notification */}<section className="mb-16">
          </section><div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Breach Notification</h2><p className="text-gray-300 mb-4">In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:</p>
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Notify the relevant supervisory authority within 72 hours</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Inform affected individuals without undue delay</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Provide clear information about the breach and its consequences</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Recommend measures to mitigate potential adverse effects</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Information */}<section className="mb-16">
          </section><div className="cyber-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Our Data Protection Officer</h2><p className="text-gray-300 mb-6">For any questions about our GDPR compliance or to exercise your rights, please contact our Data Protection Officer:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              </div><div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
                <div className="space-y-2 text-gray-300">
                  </div><p>Data Protection Officer</p><p>364 E Main St STE 1008</p>
                  <p>Middletown, DE 19709</p><p>United States</p>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300">
                  </div><p>Email: <a href="mailto:dpo@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">dpo@ziontechgroup.com</a>
                  <p>Phone: <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a><p>Response Time: Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default GDPRPage;