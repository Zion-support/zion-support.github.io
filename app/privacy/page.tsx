'use client';
import React from 'react';

const PrivacyPage: React.FC = () => {
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']
    },
    {
      category: 'Usage Data',
      icon: Database,
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent', 'Features used', 'Device information']
    },
    {
      category: 'Technical Data',
      icon: Server,
      description: 'IP address, browser type, operating system, cookies',
      examples: ['IP addresses', 'Browser fingerprints', 'Device identifiers', 'Cookies and tracking pixels']
    }
  ];
  const purposes = [
    {
      title: 'Service Provision',
      icon: Globe,
      description: 'To provide and maintain our services',
    },
    {
      title: 'Communication',
      icon: Mail,
      description: 'To communicate with you about our services',
    },
    {
      title: 'Improvement',
      icon: ArrowRight,
      description: 'To improve and develop new features',
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'To protect against fraud and abuse',
    }
  ];
  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: CheckCircle
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Lock
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database
    }
  ];

  const contactInfo = {
    email: 'privacy@ziontechgroup.com',
    phone: '+1 (302) 464-0950',
    address: '364 E Main St STE 1008, Middletown, DE 19709',
  }
;
  return (
    <div className="min-h-screen bg-white"></div>
      <div className="bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20"></div>
        <div className="container mx-auto px-4 text-center"></div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Privacy Policy</h1>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div className="flex items-center justify-center text-sm text-blue-200"></div>
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>

      <div className="py-20"></div>
        <div className="container mx-auto px-4"></div>
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Introduction */}</div>
            <section>
        </section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed">
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section>
        </section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Information We Collect</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {dataTypes.map((type, index) => (</div>
                  <div key={index} className="bg-gray-50 rounded-lg p-6"></div>
                    <div className="flex items-center mb-4"></div>
                      <type.icon className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{type.category}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{type.description}</p>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {type.examples.map((example, idx) => (
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </li>
            </section>

            {/* How We Use Information */}
            <section>
        </section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {purposes.map((purpose, index) => (</div>
                  <div key={index} className="flex items-start"></div>
                    <div className="flex-shrink-0 mr-4"></div>
                      <purpose.icon className="h-6 w-6 text-blue-600" />
                    </li>
                    <div></div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{purpose.title}</h3>
                      <p className="text-gray-700">{purpose.description}</p>
                    </li>
                ))}
              </li>
            </section>

            {/* Data Security */}
            <section>
        </section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Data Security</h2>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6"></div>
                <div className="flex items-start"></div>
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div></div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Security Measures</h3>
                    <p className="text-gray-700 mb-4">
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul className="text-gray-700 space-y-2">
                      <li>• Encryption of data in transit and at rest</li>
                      <li>• Regular security audits and assessments</li>
                      <li>• Access controls and authentication systems</li>
                      <li>• Employee training on data protection</li>
                    </ul>
                  </li>
              </li>
            </section>

            {/* Your Rights */}
            <section>
        </section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {rights.map((right, index) => (</div>
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6"></div>
                    <div className="flex items-center mb-3"></div>
                      <right.icon className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900">{right.title}</h3>
                    </li>
                    <p className="text-gray-700">{right.description}</p>
                  </li>
                ))}
              </li>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-lg p-8">
        </section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Contact Us</h2>
              <p className="text-gray-700 mb-6">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="grid md:grid-cols-2 gap-6"></div>
                <div className="flex items-center"></div>
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">privacy@ziontechgroup.com</span>
                </li>
                <div className="flex items-center"></div>
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">(302) 464-0950</span>
                </li>
                <div className="flex items-center"></div>
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">ziontechgroup.com</span>
                </li>
                <div className="flex items-center"></div>
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700">Zion Tech Group Privacy Team</span>
                </li>
            </section>

            {/* Updates */}
            <section$1>
        <div$2></div>
                <div className="flex items-start"></div>
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                  <div></div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Policy Updates</h3>
                    <p className="text-gray-700">
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>
                  </li>
              </li>
            </section>
          </li>
      </li>
  );
}

export default PrivacyPage
