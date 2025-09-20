import React from 'react',
export default Privacy,
import { motion  } from 'framer-motion',
export default function Page() {
,
    {
      icon: Users,
      title: 'User Control',
      description:
        'You have full control over your personal data and can request changes or deletion.'
    }
  ],

  const dataCategories = [{
      title: 'Personal Information',
      description: 'Name, email address, phone number, and company information',
      examples: ['Contact detailsAccount information', 'Business details']
    },
    {
      title: 'Usage Data',
      description: 'Information about how you use our services and website',
      examples: ['Login timesFeature usage', 'Performance metrics']
    },
    {
      title: 'Technical Data',
      description: 'Device information and technical specifications',
      examples: ['IP addressBrowser type', 'Device information']
    },
    {
      title: 'Communication Data',
      description: 'Records of our interactions and communications',
      examples: ['Support ticketsEmail correspondence', 'Chat logs']
    },
    {
      title: 'Business Information',
      description: 'Business - related data and project information',
      examples: ['Project requirements and specificationsService usage and performance data',
        'Payment and billing informationSupport and communication records'
      ]
    }
  ],

  const dataUses = [{
      purpose: 'Service Delivery',
      description:
        'To provide and maintain our services, process transactions, and deliver support.'
    },
    {
      purpose: 'Communication',
      description:
        'To communicate with you about our services, updates, and support.'
    },
    {
      purpose: 'Security',
      description:
        'To ensure the security and integrity of our systems and services.'
    },
    {
      purpose: 'Analytics',
      description:
        'To analyze usage patterns and improve our services and user experience.'
    }
  ],

  const userRights = [{
      right: 'Access',
      description: 'Request a copy of your personal data that we hold.'
    },
    {
      right: 'Rectification',
      description:
        'Request correction of inaccurate or incomplete personal data.'
    },
    {
      right: 'Erasure',
      description:
        'Request deletion of your personal data under certain circumstances.'
    },
    {
      right: 'Portability',
      description: 'Request transfer of your data to another service provider.'
    },
    {
      right: 'Objection',
      description:
        'Object to processing of your personal data in certain situations.'
    },
    {
      right: 'Restriction',
      description: 'Request limitation of processing of your personal data.'
    }
  ],

  const contactInfo = [{
      icon: Mail,
      label: 'Email',
      value: 'privacy@ziontechgroup.com',
      href: 'mailto:privacy@ziontechgroup.com'
    },
    {
      icon: FileText,
      label: 'Data Protection Officer',
      value: 'dpo@ziontechgroup.com',
      href: 'mailto:dpo@ziontechgroup.com'
    },
    {
      icon: Globe,
      label: 'Address',
      value: '364 E Main St STE 1008, Middletown DE 19709',
      href: 'https://maps.google.com/?q = 364 + E+Main + St + STE + 1008 + Middletown + DE + 19709'
    }
  ],

  return (<>
      <SEO
        title="Privacy Policy - Zion Tech Group"
        description="Learn how Zion Tech Group protects your privacy and handles your personal data in accordance with GDPR and other privacy regulations."
        keywords="privacy policy, data protection, GDPR, data rights, personal information, Zion Tech Group, privacy"
      />
      <div className="min - h-screen bg-gradient - to - br from - blue - 900 via - purple - 900 to - indigo -900">
        {/* Header */}
        <section className="pt - 32 pb - 16 px-4">
          <div className="max - w-7xl mx - auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="flex items - center justify - center space - x-3 mb-6">
                <div className="w-16 h-16 bg-gradient - to - r from - cyan - 500 to - blue - 500 rounded-2xl flex items - center justify -center">
                  <Shield className="w-8 h-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl md:text-6xl font - bold bg-gradient - to - r from - cyan - 400 to - blue - 400 bg-clip - text text-transparent mb-6">
                Privacy Policy
              </h1>
              <p className="text-xl text-gray - 300 max - w-3xl mx - auto mb-8">
                We are committed to protecting your privacy and ensuring the
                security of your personal information.This policy explains how
                we collect, use, and protect your data.</p>
              <div className="text-sm text-gray -400">
                Last updated: {lastUpdated}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Privacy Principles */}
        <section className="py-16 px-4">
          <div className="max - w-7xl mx -auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font - bold text-white mb-12 text-center"
            >
              Our Privacy Principles
            </motion.h2>

            <div className="grid grid - cols - 1 md:grid - cols - 2 gap-8">
              {privacyPrinciples.map ( (principle, index) => (<motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate - 800 / 50 backdrop - blur - sm rounded-xl p - 6 border border-slate -700 / 50"
                >
                  <div className="flex items - center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient - to - r from - blue - 500 to - purple - 500 rounded-lg flex items - center justify -center">
                      <principle.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-lg font - semibold text-white">
                      {principle.title}
                    </h3>
                  </div>
                  <p className="text-gray - 300 text-sm leading -relaxed">
                    {principle.description}
                  </p>
                </motion.div>) ) }
            </div>
          </div>
        </section>

        {/* Data Categories */}
        <section className="py-16 px-4">
          <div className="max - w-7xl mx -auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font - bold text-white mb-12 text-center"
            >
              Data We Collect
            </motion.h2>

            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">
              {dataCategories.map((category, index) => (<motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate - 800 / 30 rounded-lg p - 4 border border-slate -700 / 30"
                >
                  <h3 className="text-white font - semibold mb-2">
                    {category.title}
                  </h3>
                  <p className="text-gray - 300 text-sm mb-3">
                    {category.description}
                  </p>
                  <div className="space - y-1">
                    {category.examples.map((example, idx) => (<div key={idx} className="flex items - center gap-2">
                        <CheckCircle className="w-3 h-3 text-green -400" />
                        <span className="text-gray - 400 text-xs">{example}</span>
                      </div>) ) }
                  </div>
                </motion.div>) ) }
            </div>
          </div>
        </section>

        {/* Data Uses */}
        <section className="py-16 px-4">
          <div className="max - w-7xl mx -auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font - bold text-white mb-12 text-center"
            >
              How We Use Your Data
            </motion.h2>

            <div className="grid grid - cols - 1 md:grid - cols - 2 gap-6">
              {dataUses.map((use, index) => (<motion.div
                  key={use.purpose}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate - 800 / 30 rounded-lg p - 4 border border-slate -700 / 30"
                >
                  <h3 className="text-white font - semibold mb-2">
                    {use.purpose}
                  </h3>
                  <p className="text-gray - 300 text-sm">{use.description}</p>
                </motion.div>) ) }
            </div>
          </div>
        </section>

        {/* User Rights */}
        <section className="py-16 px-4">
          <div className="max - w-7xl mx -auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font - bold text-white mb-12 text-center"
            >
              Your Rights
            </motion.h2>

            <div className="grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols - 3 gap-6">
              {userRights.map((right, index) => (<motion.div
                  key={right.right}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-slate - 800 / 30 rounded-lg p - 4 border border-slate -700 / 30"
                >
                  <h3 className="text-white font - semibold mb-2">
                    {right.right}
                  </h3>
                  <p className="text-gray - 300 text-sm">{right.description}</p>
                </motion.div>) ) }
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max - w-7xl mx -auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-3xl font - bold text-white mb-12 text-center"
            >
              Contact Us
            </motion.h2>

            <p className="text-gray - 300 mb-8 text-center">
              If you have any questions about this Privacy Policy or want to
              exercise your rights, please contact us:
            </p>

            <div className="grid grid - cols - 1 md:grid - cols - 3 gap-6">
              {contactInfo.map((contact, index) => (<a
                  key={contact.label}
                  href={contact.href}
                  className="bg-slate - 800 / 50 rounded-lg p - 4 border border-slate - 700 / 50 hover:border-blue - 500 / 50 transition -colors"
                >
                  <div className="flex items - center gap-3">
                    <contact.icon className="w-6 h-6 text-blue -400" />
                    <div className="text-left">
                      <div className="text-white font -semibold">
                        {contact.label}
                      </div>
                      <div className="text-gray - 300 text-sm">
                        {contact.value}
                      </div>
                    </div>
                  </div>
                </a>) ) }
            </div>
          </div>
        </section>
      </div>
    </>) ,
},

