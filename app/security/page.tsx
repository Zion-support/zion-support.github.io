  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        {/* Header */}
        <section className="text-center mb-16"></section>
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text"></h1>
            Security & Compliance;
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
            Your data security is our top priority. We implement industry-leading security measures and maintain compliance with the highest standards.
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">Security & Compliance</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Your data security is our top priority. We implement industry-leading security measures and maintain compliance with the highest standards.</p>
          </p>
          <div className="flex flex-wrap justify-center gap-4"></section>
            <div className="flex items-center space-x-2 bg-green-500/20 px-4 py-2 rounded-lg"></div>
              <Shield className="w-5 h-5 text-green-400" />
              <span className="text-white font-medium">SOC 2 Type II Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-blue-500/20 px-4 py-2 rounded-lg"></div>
              <Lock className="w-5 h-5 text-blue-400" />
              <span className="text-white font-medium">ISO 27001 Compliant</span>
            </div>
            <div className="flex items-center space-x-2 bg-purple-500/20 px-4 py-2 rounded-lg"></div>
              <CheckCircle className="w-5 h-5 text-purple-400" />
              <span className="text-white font-medium">GDPR Compliant</span>
            </div>
          </div>,
        </section>,
,
        {/* Security Measures */})
        <section className="mb-16">)
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Measures</h2>)
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">),
            {securityMeasures.map((measure, index) => (
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Measures</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{securityMeasures.map((measure, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
                  <measure.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{measure.title}</h3><p className="text-gray-300 mb-4">{measure.description}</p><ul className="space-y-2">{measure.details.map((detail, detailIndex) => (</ul>
                    <li key={detailIndex} className="flex items-start text-sm text-gray-300"></li>
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" >{detail}</CheckCircle>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="mb-16"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance & Certifications</h2>
            <p className="text-gray-300 mb-8"></p>
              We maintain compliance with industry-leading security and privacy standards to ensure your data is protected according to the highest requirements.
            </p>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-6">,
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <div className="flex items-center justify-between mb-3"></div>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Compliance & Certifications</h2><p className="text-gray-300 mb-8">We maintain compliance with industry-leading security and privacy standards to ensure your data is protected according to the highest requirements.</p><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{complianceStandards.map((standard, index) => (</div>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <div className="flex items-center justify-between mb-3"></div>
                    <h3 className="text-lg font-semibold text-white">{standard.name}</h3>
                    <standard.icon className="w-6 h-6 text-green-400" />
                  <p className="text-gray-300 text-sm mb-3">{standard.description}</p><span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-400">{standard.status}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Features</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {securityFeatures.map((feature, index) => (
              <div key={index} className="cyber-card p-6"></div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}<p className="text-gray-300 mb-4">{feature.description}<ul className="space-y-2">{feature.features.map((item, itemIndex) => (</ul>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Security Features</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{securityFeatures.map((feature, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.features.map((item, itemIndex) => (</ul>
                    <li key={itemIndex} className="flex items-start text-sm text-gray-300"></li>
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{item}</span>
                    </span>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Security Best Practices */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Security Best Practices</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">For Our Clients</h3>
                <ul className="space-y-3 text-gray-300"></ul>
                  <li className="flex items-start"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Use strong, unique passwords for all accounts</span>
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
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Our Internal Practices</h3>
                <ul className="space-y-3 text-gray-300"></ul>
                  <li className="flex items-start"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Regular security training for all employees</span>
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
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Incident Response</h2><p className="text-gray-300 mb-6">In the unlikely event of a security incident, we have a comprehensive incident response plan to minimize impact and restore services quickly.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Response Process</h3>
                <ul className="space-y-2 text-gray-300"></ul>
                  <li className="flex items-start"></li>
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Immediate detection and assessment</span>
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
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Communication</h3>
                <ul className="space-y-2 text-gray-300"></ul>
                  <li className="flex items-start"></li>
                    <CheckCircle className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Immediate notification to affected clients</span>
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
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Security Questions?</h2><p className="text-gray-300 mb-6">If you have any questions about our security measures or need to report a security concern, please contact our security team:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Security Team</h3>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Security Questions?</h2>
            <p className="text-gray-300 mb-6"></p>
              If you have any questions about our security measures or need to report a security concern, please contact our security team: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Security Team</h3>,
                <div className="space-y-2 text-gray-300">,
                  <p>Chief Information Security Officer</p>,
                  <p>Zion Tech Group</p>,
                  <p>364 E Main St STE 1008</p>,
                  <p>Middletown, DE 19709</p>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Chief Information Security Officer</p><p>Zion Tech Group</p>
                  <p>364 E Main St STE 1008</p><p>Middletown, DE 19709</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Email:</p> <a href="mailto:security@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">security@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950</a>
                  <p>Emergency:</p> <a href="tel:+13024640951" className="text-red-400 hover:text-red-300">+1 302 464 0951</a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>,
,
      <Footer />,
    </div>,
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SecurityPage: React.FC = () => {
  return (
    <>
      <Helmet></Helmet>
        <title>Security Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive cybersecurity solutions to protect your business from threats." />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        <div className="container mx-auto px-4 py-16 pt-24"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6"></h1>
              Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
              Comprehensive cybersecurity solutions to protect your business from evolving threats and ensure compliance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Security Audits</h3>
              <p className="text-gray-300 mb-4"></p>
                Comprehensive security assessments to identify vulnerabilities and strengthen your defenses.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• Vulnerability Assessment</li>
                <li>• Penetration Testing</li>
                <li>• Security Architecture Review</li>
                <li>• Compliance Audits</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Threat Detection</h3>
              <p className="text-gray-300 mb-4"></p>
                Advanced monitoring and detection systems to identify and respond to security threats.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• 24/7 Security Monitoring</li>
                <li>• Threat Intelligence</li>
                <li>• Incident Response</li>
                <li>• Security Analytics</li>
              </ul>
            </div>
            
            <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20"></div>
              <h3 className="text-2xl font-bold text-white mb-4">Compliance Management</h3>
              <p className="text-gray-300 mb-4"></p>
                Ensure your business meets industry standards and regulatory requirements.
              </p>
              <ul className="space-y-2 text-gray-300"></ul>
                <li>• GDPR Compliance</li>
                <li>• HIPAA Compliance</li>
                <li>• SOC 2 Certification</li>
                <li>• ISO 27001</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SecurityPage;