

const Terms: React.FC = () => {
  const lastUpdated = "2025-01-15";

  const sections = [
    {
      id: "acceptance-of-terms", title: "Acceptance of Terms",
      icon: CheckCircle, content: [
        "By accessing and using Zion Tech Group services, you accept and agree to be bound by these Terms of Service", "If you do not agree to these terms, you may not access or use our services", "These terms apply to all visitors, users, and others who access or use our services",
        "We reserve the right to modify these terms at any time without prior notice"
      ]
    }, {
      id: "service-description",
      title: "Service Description", icon: BookOpen,
      content: [
        "Zion Tech Group provides AI-powered solutions, consulting services, and technology products", "Our services include but are not limited to AI development, cloud migration, and cybersecurity solutions",
        "We reserve the right to modify, suspend, or discontinue any part of our services at any time", "Service availability may vary based on geographic location and technical requirements"
      ]
    }, {
      id: "user-responsibilities",
      title: "User Responsibilities", icon: Users,
      content: [
        "Provide accurate and complete information when using our services", "Maintain the confidentiality of your account credentials",
        "Use our services in compliance with applicable laws and regulations", "Not engage in any activities that may harm or disrupt our services"
      ]
    }, {
      id: "payment-terms",
      title: "Payment Terms", icon: DollarSign,
      content: [
        "Payment terms are specified in individual service agreements", "All fees are non-refundable unless otherwise specified",
        "We reserve the right to change pricing with 30 days notice", "Late payments may result in service suspension or termination"
      ]
    }, {
      id: "intellectual-property",
      title: "Intellectual Property", icon: Shield,
      content: [
        "All content, trademarks, and intellectual property belong to Zion Tech Group", "Users retain ownership of their data and content",
        "We grant limited license to use our services as specified in these terms", "Unauthorized use of our intellectual property is strictly prohibited"
      ]
    }, {
      id: "limitation-of-liability",
      title: "Limitation of Liability", icon: AlertTriangle,
      content: [

      ]
    }

      id: 'limitation-of-liability',
      title: 'Limitation of Liability', icon: AlertTriangle,
      content: [
:pages.disabled_auto/terms.tsx;
        'Our services are provided;
  'as is' without warranties of any kind,We are not liable for any indirect, incidental, or consequential damages,Our total liability is limited to the amount paid for the specific service,Some jurisdictions may not allow limitation of liability, so these limitations may not applyOur services are provided 'as is' without warranties of any kind,We are not liable for any indirect, incidental, or consequential damages,Our total liability is limited to the amount paid for the specific service,Some jurisdictions may not allow limitation of liability, so these limitations may not apply']}

    email: 'legal@ziontechgroup.com', phone: '+1 (555) 123-4567', address: '123 Technology Drive, San Francisco, CA 94105'}

  return('
    <div className='min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900'>
      <SEO'
        title='Terms of Service - Zion Tech Group';
:pages.disabled_auto/terms.tsx;
        description='Read our Terms of Service to understand the terms and conditions for using Zion Tech Group;
  's AI services and solutions.';
        description='Read our Terms of Service to understand the terms and conditions for using Zion Tech Group's AI services and solutions.''/>{/* Hero Section */}
      <section className='relative py-20 px-4 sm: px-6 l,
    g:px-8>
        <div className='max-w-7xl mx-auto text-center'>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Badge variant="secondary" className="mb-4">
              <Scale className="w-4 h-4 mr-2" />
              Legal Terms
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Terms of Service

              <Calendar className='w-4 h-4 mr-2' />
              Last update,
    d: {new Date(lastUpdated).toLocaleDateString()}

            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}

                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
            {/* Terms Sections */}, {sections.map((section, index) => (
              <motion.div
                key={section.id}, {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}

                  indemnity, and limitations of liability.
                </p>
              </div>
            </Card>

            {/* Governing Law */}

                  the remaining provisions of these Terms will remain in effect.
                </p>
              </div>
            </Card>

            {/* Contact Information */}

                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  )}


