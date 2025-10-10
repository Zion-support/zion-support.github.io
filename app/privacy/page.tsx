'use client';
import React from 'react';
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react';
export default function PrivacyPage() {;}
const lastUpdated = 'January 1, 2024';
  ;
const dataTypes = [
    {}
      category: 'Personal Information',
      icon: User,
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation']]
    },
    {}
      category: 'Usage Data',
      icon: Database,
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent', 'Features used', 'Device information']]
    },
    {}
      category: 'Technical Data',
      icon: Server,
      description: 'IP address, browser type, operating system, cookies',
examples: ['IP addresses', 'Browser fingerprints', 'Device identifiers', 'Cookies and tracking pixels']]
    }
  ];
;
const purposes = [
    {}
      title: 'Service Provision',
      icon: Globe,
      description: 'To provide and maintain our services']
    },
    {}
      title: 'Communication',
      icon: Mail,
      description: 'To communicate with you about our services']
    },
    {}
      title: 'Improvement',
      icon: ArrowRight,
      description: 'To improve and develop new features']
    },
    {}
      title: 'Security',
      icon: Shield,
description: 'To protect against fraud and abuse']
    }
  ];
;
const rights = [
    {}
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye]
    },
    {}
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: CheckCircle]
    },
    {}
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Lock]
    },
    {}
      title: 'Portability',
      description: 'Receive your data in a structured format',
icon: Database]
    }
  ];

  return (
    <div>
      <div>
        <div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6"></h1>
            Privacy Policy</h1>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto"></p>
            Your privacy is important to us. Learn how we collect, use, and protect your information.
          </p>
          <div>
            <Calendar className="h-4 w-4 mr-2" />
            Last updated: {lastUpdated}
          </div>
        </div>
      </div>

      <div>
        <div>
          <div className="max-w-4xl mx-auto space-y-12"></div>
            {/* Introduction */}</div>
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Introduction</h2>
              <p className="text-gray-700 leading-relaxed mb-4"></p>
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
              <p className="text-gray-700 leading-relaxed"></p>
                By using our services, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            {/* Information We Collect */}
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Information We Collect</h2>
              <div className="grid md:grid-cols-3 gap-6"></div>
                {dataTypes.map((type, index) => (</div>}
                  <div>
                    <div>
                      <type.icon className="h-6 w-6 text-blue-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900"></h>{type.category}</h3>
                    </div>
                    <p className="text-gray-700 mb-3">{type.description}</p>
                    <ul className="text-sm text-gray-600 space-y-1"></ul>
                      {type.examples.map((example, idx) => (}
                        <li key={idx}></l>• {example}</li>
                      ));
                    </ul>
                  </div>
                ));
              </div>
            </section>

            {/* How We Use Information */}
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>How We Use Your Information</h2>
              <div className="grid md:grid-cols-2 gap-6"></div>
                {purposes.map((purpose, index) => (</div>}
                  <div>
                    <div>
                      <purpose.icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2"></h>{purpose.title}</h3>
                      <p className="text-gray-700">{purpose.description}</p>
                    </div>
                  </div>
                ));
              </div>
            </section>

            {/* Data Security */}
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Data Security</h2>
              <div>
                <div>
                  <Shield className="h-6 w-6 text-blue-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2"></h>Security Measures</h3>
                    <p className="text-gray-700 mb-4"></p>
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                    <ul className="text-gray-700 space-y-2"></ul>
                      <li></l>• Encryption of data in transit and at rest</li>
                      <li></l>• Regular security audits and assessments</li>
                      <li></l>• Access controls and authentication systems</li>
                      <li></l>• Employee training on data protection</li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* Your Rights */}
            <section></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Your Rights</h2>
              <div className="grid md:grid-cols-2 gap-6"></div>
                {rights.map((right, index) => (</div>}
                  <div>
                    <div>
                      <right.icon className="h-6 w-6 text-green-600 mr-3" />
                      <h3 className="text-lg font-semibold text-gray-900"></h>{right.title}</h3>
                    </div>
                    <p className="text-gray-700">{right.description}</p>
                  </div>
                ));
              </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 rounded-lg p-8"></section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6"></h>Contact Us</h2>
              <p className="text-gray-700 mb-6"></p>
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div>
                <div>
                  <Mail className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>privacy@ziontechgroup.com</span>
                </div>
                <div>
                  <Phone className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>(302) 464-0950</span>
                </div>
                <div>
                  <Globe className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>ziontechgroup.com</span>
                </div>
                <div>
                  <User className="h-5 w-5 text-blue-600 mr-3" />
                  <span className="text-gray-700"></spa>Zion Tech Group Privacy Team</span>
                </div>
              </div>
            </section>

            {/* Updates */}
            <section></section>
              <div>
                <div>
                  <AlertTriangle className="h-6 w-6 text-yellow-600 mr-3 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2"></h>Policy Updates</h3>
                    <p className="text-gray-700"></p>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
                    </p>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
)]
    }
