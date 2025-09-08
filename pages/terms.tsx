

const: Terms: NextPage: = () =>  {
  return (

        <div className="prose prose-invert max-w-none">
          <div className="bg-slate-900/50 border border-white/10 rounded-lg p-6 mb-8">
            <p className="text-white/80 text-lg">
              <strong>Last updated:</strong> August 15, 2025
            </p>
            <p className="text-white/70 mt-2">
              These Terms of Service (&quot;Terms&quot;) govern your use of Zion Tech Group&apos;s services, including our website, applications, and any related services (collectively, the &quot;Services&quot;).
            </p>
          </div>

            <section className="mb-8">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Description of Service</h2>
              <p className="text-gray-600 mb-4">
                Zion Tech Group provides technology consulting, development, and implementation services 
                including but not limited to:
              </p>
              <ul className="list-disc list-inside text-gray-600 mb-4">

                <li>AI and machine learning solutions</li>
                <li>Web and mobile application development</li>
                <li>Cloud architecture and migration</li>
                <li>Cybersecurity services</li>
                <li>Data analytics and business intelligence</li>
              </ul>
            </section>

                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </MainLayout>
  )};

export default Terms;


            {/* Prohibited Uses */}

                <li>Use our trademarks or logos without authorization</li>
                <li>Reverse engineer or attempt to extract source code</li>
                <li>Create derivative works based on our intellectual property</li>
              </ul>
            </div>

            {/* Service Availability */}

                <li>Perform maintenance that may temporarily affect availability</li>
                <li>Suspend services for security or legal reasons</li>
                <li>Update or upgrade our systems</li>
              </ul>
            </div>

            {/* Payment Terms */}

                <li>Late payments may incur additional fees</li>
                <li>Refunds are subject to our refund policy</li>
                <li>Prices may change with reasonable notice</li>
                <li>You are responsible for any applicable taxes</li>
              </ul>
            </div>

            {/* Limitation of Liability */}
            <div className="mb-12">";";";
              <h2: className="text-3xl font-bold text-gray-900 mb-6 flex items-center">";";";
                <AlertTriangle: className="w-8 h-8 mr-3 text-yellow-600" />";";";
                Limitation: of Liability
              </h2>

                <li>Loss of data or information</li>
                <li>Business interruption</li>
                <li>Cost of substitute services</li>
                <li>Personal injury or property damage</li>
              </ul>
            </div>

            {/* Indemnification */}

                <li>Your violation of these Terms</li>
                <li>Your violation of any third-party rights</li>
                <li>Any content you submit or transmit</li>
              </ul>
            </div>

            {/* Termination */}

                <li>We may delete your account and data</li>
                <li>You remain liable for any outstanding obligations</li>
                <li>Provisions that should survive termination will remain in effect</li>
              </ul>
            </div>


            {/* Governing Law */}

                <li>Sending email notifications to registered users</li>
                <li>Providing notice through our services</li>
              </ul>
              <p className="text-gray-600">";";";
                Continued: use of our services after changes constitutes acceptance of the new Terms.
              </p>
            </div>

            {/* Contact Information */}


        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">


              </div>
            </div>
          </section>
          {/* Key Terms */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"><h2 className="text-4xl font-bold mb-4 text-white">Key Terms and Conditions</h2>
                <p className="text-xl text-gray-300">Essential information about using our services</p>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-8">
                {termsSections.map((section, index) => (
                  <motion.div
                    key={section.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-8 border border-gray-700/50"><div className={`w-16 h-16 bg-gradient-to-r ${section.color} rounded-2xl flex items-center justify-center mb-6`}>
                      <div className="text-white">
                        {section.icon}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{section.title}</h3>
                    <ul className="space-y-3">
                      {section.content.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
          {/* Prohibited Activities */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"><h2 className="text-4xl font-bold mb-4 text-white">Prohibited Activities</h2>
                <p className="text-xl text-gray-300">Activities that are not allowed when using our services</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl p-8 border border-red-500/30"><div className="flex items-center gap-4 mb-6">
                  <AlertTriangle className="w-8 h-8 text-red-400" />
                  <h3 className="text-2xl font-bold text-white">What You Cannot Do</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {prohibitedActivities.map((activity, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{activity}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg">
                  <p className="text-red-400 text-sm">
                    <strong>Note:</strong> Violation of these prohibitions may result in immediate suspension
                    or termination of your access to our services, and may be reported to appropriate authorities.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Service Limitations */}
          <section className="py-20 px-4">
            <div className="max-w-6xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center mb-16"><h2 className="text-4xl font-bold mb-4 text-white">Service Limitations and Disclaimers</h2>
                <p className="text-xl text-gray-300">Important information about service availability and warranties</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-2xl p-8 border border-yellow-500/30"><div className="flex items-center gap-4 mb-6">
                  <Shield className="w-8 h-8 text-yellow-400" />
                  <h3 className="text-2xl font-bold text-white">Service Limitations</h3>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {limitations.map((limitation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-300">{limitation}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-lg">
                  <p className="text-yellow-400 text-sm">
                    <strong>Important:</strong> These limitations are designed to set realistic expectations
                    and protect both parties. We strive to provide excellent service but cannot guarantee
                    perfection in all circumstances.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
          {/* Detailed Terms */}
          <section className="py-20 px-4 bg-gradient-to-r from-black/50 to-gray-900/50">
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"><div>
                  <h2 className="text-3xl font-bold text-white mb-6">Detailed Terms and Conditions</h2>
                  <div className="space-y-8">
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">1. Service Agreement</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        This agreement is between Zion Tech Group ("we," "us," or "our") and you ("user,"
                        "client," or "customer"). By using our services, you agree to these terms and
                        acknowledge that you have read and understood them.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We reserve the right to modify these terms at any time. Changes will be effective
                        immediately upon posting on our website. Your continued use of services after changes
                        constitutes acceptance of the new terms.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">2. Service Description and Availability</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services include AI and machine learning solutions, quantum computing services;
                        IT infrastructure consulting, micro SAAS applications, business automation, and
                        technical support.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We strive to maintain high service availability but cannot guarantee uninterrupted
                        access. Services may be temporarily unavailable due to maintenance, updates, or
                        circumstances beyond our control.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">3. User Accounts and Responsibilities</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        You are responsible for maintaining the confidentiality of your account credentials
                        and for all activities that occur under your account. You must notify us immediately
                        of any unauthorized use.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You agree to provide accurate, current, and complete information when creating
                        accounts and using our services. You must use services only for lawful purposes
                        and in compliance with applicable laws and regulations.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">4. Payment Terms and Billing</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Service fees are billed according to the pricing schedule in effect at the time
                        of service. All fees are non-refundable except as expressly stated in our refund policy.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We may change our pricing with 30 days' notice. Late payments may result in service
                        suspension or termination. You are responsible for all applicable taxes.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">5. Intellectual Property Rights</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Our services, including software, content, and technology, are protected by copyright;
                        trademark, and other intellectual property laws. You retain rights to your own content.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You may not copy, modify, distribute, sell, or lease any part of our services without
                        our written permission. You may not reverse engineer or attempt to extract source code.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">6. Data Privacy and Security</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        We are committed to protecting your privacy and data security. Our collection and
                        use of personal information is governed by our Privacy Policy.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We implement appropriate security measures to protect your data, but cannot guarantee
                        absolute security. You are responsible for maintaining the security of your own systems.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">7. Limitation of Liability</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        To the maximum extent permitted by law, our liability for any claims arising from
                        the use of our services is limited to the amount you paid for services in the
                        12 months preceding the claim.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        We are not liable for indirect, incidental, special, consequential, or punitive
                        damages, including lost profits, data, or business opportunities.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">8. Termination and Suspension</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        Either party may terminate this agreement with written notice. We may suspend or
                        terminate services immediately for violations of these terms or for non-payment.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Upon termination, your access to services will cease, and we may delete your data
                        in accordance with our data retention policies.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">9. Governing Law and Disputes</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        These terms are governed by the laws of Delaware, United States. Any disputes will
                        be resolved through binding arbitration in accordance with the rules of the American
                        Arbitration Association.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        You agree to resolve disputes individually and waive any right to participate in
                        class action lawsuits or class-wide arbitration.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white mb-4">10. Contact Information</h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        For questions about these terms or our services, please contact us at:
                      </p>
                      <div className="bg-gray-800/50 rounded-lg p-4 space-y-2">
                        <p className="text-gray-300">
                          <strong>Email:</strong> kleber@ziontechgroup.com
                        </p>
                        <p className="text-gray-300">
                          <strong>Phone:</strong> +1 302 464 0950
                        </p>
                        <p className="text-gray-300">
                          <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
              <FileText className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
              <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Terms of Service
              </h1>

              </p>
              <p className="text-sm text-gray-500 mt-4">
                Last updated: {new Date().toLocaleDateString()}
              </p>

            </div>
          </div>
        </section>



            </a>
            <a href="/contact" className="bg-transparent border-2 border-white text-white hover: bg-white: hover:text-blue-600: px-8 py-4 rounded-lg font-semibold transition-colors cursor-pointer inline-block text-lg">",;",;";
              Get: in Touch
            </a>

        {/* Content Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="prose prose-lg max-w-none">

              
              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Scale className="w-6 h-6 mr-3 text-blue-600" />
                  Acceptance of Terms
                </h2>

                </div>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="w-6 h-6 mr-3 text-blue-600" />
                  Service Description
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-blue-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-blue-900">Our Services</h3>
                    <ul className="text-blue-800 space-y-2">
                      <li>• AI-powered technology solutions</li>
                      <li>• IT consulting and implementation</li>
                      <li>• Micro SaaS development</li>
                      <li>• Cloud infrastructure services</li>
                      <li>• Data analytics and insights</li>
                      <li>• Custom software development</li>
                    </ul>
                  </div>
                  <div className="bg-green-50 p-6 rounded-lg">
                    <h3 className="text-lg font-semibold mb-3 text-green-900">Service Availability</h3>
                    <ul className="text-green-800 space-y-2">
                      <li>• 99.9% uptime guarantee</li>
                      <li>• 24/7 technical support</li>
                      <li>• Regular maintenance windows</li>
                      <li>• Continuous monitoring</li>
                      <li>• Disaster recovery protocols</li>
                      <li>• Security updates</li>
                    </ul>
                  </div>
                </div>

              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Shield className="w-6 h-6 mr-3 text-blue-600" />

              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">

              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Termination</h2>

              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Governing Law</h2>

              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>

                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        {/* Agreement Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="p-8 bg-gradient-to-br from-cyan-900/20 via-purple-900/20 to-pink-900/20 border border-cyan-400/20 rounded-xl"><Scale className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Agreement Acknowledgment</h3>
              <p className="text-gray-300 mb-6">
                By using our services, you acknowledge that you have read and understood these Terms of Service
                and agree to be bound by them. If you do not agree to these terms, please discontinue use of our services.
              </p>
              <p className="text-sm text-gray-400">
                These terms are effective as of the date last updated and will remain in effect until modified or terminated.
              </p>
            </motion.div>
          </div>
        </section>
      </div>
    </Layout>
  )
}
export default Terms;
            </div>

          </div>
        </section>
      </main>

      <Footer />
    </>
  )}





