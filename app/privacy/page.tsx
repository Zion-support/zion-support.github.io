      <Navigation />
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Privacy Policy</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Your privacy is important to us. This policy explains how we collect, use, and protect your information.</p><div className="text-sm text-gray-400">Last updated: {lastUpdated}</section>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Introduction</h2><p className="text-gray-300 mb-4 leading-relaxed">Zion Tech Group ("we," "our," or "us") is committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</p><p className="text-gray-300 leading-relaxed">By using our website or services, you consent to the data practices described in this policy. If you do not agree with the terms of this Privacy Policy, please do not use our website or services.</p>
            </p>
          </div>
        </section>

        {/* Main Content */}
        <section className="space-y-12">{sections.map((section, index) => (</section>
            <div key={index} className="cyber-card p-8"></section>
              <div className="flex items-center mb-6"></div>
                <section.icon className="w-8 h-8 text-cyan-400 mr-4" />
                <h2 className="text-2xl font-bold text-white neon-text">{section.title}</h2><div className="space-y-6">{section.content.map((subsection, subIndex) => (</section>
                  <div key={subIndex}></div>
                    <h3 className="text-xl font-semibold text-cyan-400 mb-3">{subsection.subtitle}</h3><ul className="space-y-2">{subsection.items.map((item, itemIndex) => (</ul>
                        <li key={itemIndex} className="flex items-start text-gray-300">
                          <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">{item}</span>
                        </span>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Contact Information */}
        <section className="mb-16">
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>364 E Main St STE 1008</p><p>Middletown, DE 19709</p><p>United States</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Email:</p> <a href="mailto:privacy@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">privacy@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                </div>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Updates */}
        <section className="mb-16">
            </p>
            <ul className="space-y-2 text-gray-300"></u>
              <li className="flex items-start"></l>
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">Posting the updated policy on our website</spa>
              </span>
              <li className="flex items-start"></l>
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">Sending email notifications to registered users</spa>
              </span>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-cyan-400 rounded-full mt-2 mr-3 flex-shrink-0">Updating the "Last Updated" date at the top of this policy</span><p className="text-gray-300 mt-4">Your continued use of our website or services after any changes to this Privacy Policy constitutes acceptance of the updated policy.</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
            </p>
          </div>
        </section>
      </main>

      <Footer />,
    </div>,
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Shield, Lock, Eye, Database, Users, Mail, Phone, Globe, CheckCircle, AlertTriangle } from 'lucide-react',

const PrivacyPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Zion Tech Group's privacy policy outlining how we collect, use, and protect your personal information." />
        <meta name="keywords" content="privacy policy, data protection, GDPR, personal information, data security" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        <main className="pt-24">
          <section className="container mx-auto px-4 py-16">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-8 space-y-6 text-gray-300 border border-white/20">
                <p className="text-sm text-gray-400">Last updated: January 1, 2024</p>
                
                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Shield className="w-6 h-6 text-cyan-400 mr-3" />
                    1. Information We Collect
                  </h2>
                  <p>We collect information you provide directly to us, such as when you create an account, contact us, or use our services.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Personal information (name, email, phone number)</li>
                    <li>Business information (company name, job title, industry)</li>
                    <li>Communication records (emails, phone calls, support tickets)</li>
                    <li>Usage data (website visits, service interactions)</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Eye className="w-6 h-6 text-cyan-400 mr-3" />
                    2. How We Use Your Information
                  </h2>
                  <p>We use the information we collect to provide, maintain, and improve our services.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Provide and deliver our services</li>
                    <li>Process transactions and send related information</li>
                    <li>Send technical notices and support messages</li>
                    <li>Respond to your comments and questions</li>
                    <li>Improve our services and develop new features</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Database className="w-6 h-6 text-cyan-400 mr-3" />
                    3. Information Sharing
                  </h2>
                  <p>We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>With your explicit consent</li>
                    <li>To comply with legal obligations</li>
                    <li>To protect our rights and prevent fraud</li>
                    <li>With trusted service providers who assist us in operating our business</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Lock className="w-6 h-6 text-cyan-400 mr-3" />
                    4. Data Security
                  </h2>
                  <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Encryption of data in transit and at rest</li>
                    <li>Regular security audits and assessments</li>
                    <li>Access controls and authentication</li>
                    <li>Employee training on data protection</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Users className="w-6 h-6 text-cyan-400 mr-3" />
                    5. Your Rights
                  </h2>
                  <p>You have certain rights regarding your personal information, including:</p>
                  <ul className="list-disc list-inside mt-4 space-y-2">
                    <li>Access to your personal information</li>
                    <li>Correction of inaccurate information</li>
                    <li>Deletion of your personal information</li>
                    <li>Objection to processing of your information</li>
                    <li>Data portability</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Globe className="w-6 h-6 text-cyan-400 mr-3" />
                    6. International Transfers
                  </h2>
                  <p>Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place for such transfers.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <AlertTriangle className="w-6 h-6 text-cyan-400 mr-3" />
                    7. Changes to This Policy
                  </h2>
                  <p>We may update this privacy policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.</p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
                    <Mail className="w-6 h-6 text-cyan-400 mr-3" />
                    8. Contact Us
                  </h2>
                  <p>If you have any questions about this privacy policy, please contact us:</p>
                  <div className="mt-4 space-y-2">
                    <p className="flex items-center">
                      <Mail className="w-5 h-5 text-cyan-400 mr-3" />
                      Email: privacy@ziontechgroup.com
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-5 h-5 text-cyan-400 mr-3" />
                      Phone: (302) 464-0950
                    </p>
                    <p className="flex items-center">
                      <Globe className="w-5 h-5 text-cyan-400 mr-3" />
                      Website: ziontechgroup.com
                    </p>
                  </div>
                </div>

                <div className="bg-cyan-400/10 border border-cyan-400/20 rounded-lg p-6 mt-8">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3 flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2" />
                    Your Privacy Matters
                  </h3>
                  <p className="text-gray-300">
                    We are committed to protecting your privacy and ensuring the security of your personal information. 
                    If you have any concerns or questions about how we handle your data, please don't hesitate to contact us.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
  ),
},

export default PrivacyPage,