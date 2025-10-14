import React from 'react''
import { Helmet } from 'react-helmet-async'
const PrivacyPage: React.FC = () => {'
  const lastUpdated = 'January 1, 2024'
  const sections = [
    {'
      title: 'Information We Collect'
      content: ['
        'Personal Information: Name, email address, phone number, company information, and billing details.''
        'Usage Data: Information about how you use our services, including IP addresses, browser type, and device information.''
        'Cookies and Tracking: We use cookies and similar technologies to enhance your experience and analyze usage patterns.''
        'Communication Data: Records of your communications with us, including support requests and feedback.'
      ]
    }
    {'
      title: 'How We Use Your Information'
      content: ['
        'Service Delivery: To provide, maintain, and improve our AI and IT solutions.''
        'Communication: To send you updates, notifications, and respond to your inquiries.''
        'Billing and Payments: To process payments and manage your account.''
        'Analytics: To analyze usage patterns and improve our services.''
        'Legal Compliance: To comply with applicable laws and regulations.'
      ]
    }
    {'
      title: 'Information Sharing'
      content: ['
        'We do not sell, trade, or rent your personal information to third parties.''
        'We may share information with trusted service providers who assist us in operating our business.''
        'We may disclose information when required by law or to protect our rights and safety.''
        'In case of a business merger or acquisition, your information may be transferred to the new entity.'
      ]
    }
    {'
      title: 'Data Security'
      content: ['
        'We implement industry-standard security measures to protect your information.''
        'All data is encrypted in transit and at rest using AES-256 encryption.''
        'We regularly conduct security audits and penetration testing.''
        'Access to personal information is restricted to authorized personnel only.''
        'We maintain SOC 2 Type II compliance and ISO 27001 certification.'
      ]
    }
    {'
      title: 'Your Rights'
      content: ['
        'Access: You can request access to your personal information we hold.''
        'Correction: You can request correction of inaccurate or incomplete information.''
        'Deletion: You can request deletion of your personal information.''
        'Portability: You can request a copy of your data in a portable format.''
        'Opt-out: You can opt-out of marketing communications at any time.'
      ]
    }
    {'
      title: 'Cookies and Tracking'
      content: ['
        'We use essential cookies to provide basic functionality of our services.''
        'Analytics cookies help us understand how visitors interact with our website.''
        'Marketing cookies are used to deliver relevant advertisements.''
        'You can control cookie preferences through your browser settings.''
        'Disabling certain cookies may affect the functionality of our services.'
      ]
    }
    {'
      title: 'Data Retention'
      content: ['
        'We retain personal information only as long as necessary to fulfill the purposes outlined in this policy.''
        'Account information is retained for the duration of your account plus 7 years for legal compliance.''
        'Usage data is typically retained for 2 years for analytics purposes.''
        'Marketing data is retained until you opt-out or for 3 years of inactivity.''
        'Legal requirements may necessitate longer retention periods.'
      ]
    }
    {'
      title: 'International Transfers'
      content: ['
        'Your information may be transferred to and processed in countries other than your own.''
        'We ensure appropriate safeguards are in place for international transfers.''
        'We comply with applicable data protection laws, including GDPR and CCPA.''
        'We use standard contractual clauses approved by relevant authorities.''
        'We conduct regular assessments of our international data processing activities.'
      ]
    }
  ]
  const contactInfo = {'
    email: 'privacy@ziontechgroup.com''
    phone: '+1-302-464-0950''
    address: '364 E Main St STE 1008, Middletown, DE 19709''
    dpo: 'Data Protection Officer'
  }
  return (
    <>
      <Helmet>
        <title>Privacy Policy - Zion Tech Group</title>
        <meta name="description" content="Privacy Policy for Zion Tech Group. Learn how we collect, use, and protect your personal information." />"
        <meta name="keywords" content="privacy policy, data protection, personal information, GDPR compliance" />
      </Helmet>
"
      <div className="min-h-screen bg-slate-900 text-white py-20">"
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">"
          <h1 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
            Privacy Policy
          </h1>
          "
          <div className="prose prose-lg prose-invert max-w-none">"
            <p className="text-gray-300 mb-8">
              Last updated: {new Date().toLocaleDateString()}
            </p>
"
            <section className="mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">1. Information We Collect</h2>"
              <p className="text-gray-300 mb-4">
                We collect information you provide directly to us, such as when you create an account
                contact us, or use our services. This may include:
              </p>"
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Name and contact information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company information</li>
                <li>Payment information</li>
                <li>Communication preferences</li>
              </ul>
            </section>
"
            <section className="mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">2. How We Use Your Information</h2>"
              <p className="text-gray-300 mb-4">
                We use the information we collect to:
              </p>"
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send technical notices and support messages</li>
                <li>Respond to your comments and questions</li>
                <li>Develop new products and services</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>
"
            <section className="mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">3. Information Sharing</h2>"
              <p className="text-gray-300 mb-4">
                We do not sell, trade, or otherwise transfer your personal information to third parties 
                without your consent, except as described in this policy. We may share your information:
              </p>"
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>With service providers who assist us in operating our business</li>
                <li>When required by law or to protect our rights</li>
                <li>In connection with a business transfer or acquisition</li>
                <li>With your explicit consent</li>
              </ul>
            </section>
"
            <section className="mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">4. Data Security</h2>"
              <p className="text-gray-300 mb-4">
                We implement appropriate security measures to protect your personal information against 
                unauthorized access, alteration, disclosure, or destruction. However, no method of 
                transmission over the internet is 100% secure.
              </p>
            </section>
"
            <section className="mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">5. Your Rights</h2>"
              <p className="text-gray-300 mb-4">
                You have the right to:
              </p>"
              <ul className="list-disc list-inside text-gray-300 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Delete your personal information</li>
                <li>Object to processing of your information</li>
                <li>Data portability</li>
                <li>Withdraw consent</li>
              </ul>
            </section>
"
            <section className="mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">6. Cookies and Tracking</h2>"
              <p className="text-gray-300 mb-4">
                We use cookies and similar tracking technologies to enhance your experience on our website. 
                You can control cookie settings through your browser preferences.
              </p>
            </section>
"
            <section className="mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">7. Changes to This Policy</h2>"
              <p className="text-gray-300 mb-4">
                We may update this privacy policy from time to time. We will notify you of any changes "
                by posting the new policy on this page and updating the "Last updated" date.
              </p>
            </section>
"
            <section className="mb-8">"
              <h2 className="text-2xl font-bold text-white mb-4">8. Contact Us</h2>"
              <p className="text-gray-300 mb-4">
                If you have any questions about this privacy policy, please contact us at:
              </p>"
              <div className="bg-slate-800 p-6 rounded-lg">"
                <p className="text-gray-300 mb-2">
                  <strong>Email:</strong> kleber@ziontechgroup.com
                </p>"
                <p className="text-gray-300 mb-2">
                  <strong>Phone:</strong> +1-302-464-0950
                </p>"
                <p className="text-gray-300">
                  <strong>Address:</strong> 364 E Main St STE 1008, Middletown, DE 19709
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  )
}
export default PrivacyPage'"