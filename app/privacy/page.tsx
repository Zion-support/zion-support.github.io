'use client'
import React from 'react'
import { Shield, Lock, Eye, Database, User, Mail, Phone, Calendar, CheckCircle, ArrowRight, Globe, Server, Key, FileText, AlertTriangle } from 'lucide-react'
export default function PrivacyPage() {
  const lastUpdated = 'January 1, 2024'

  const dataTypes = [
    {
      category: 'Personal Information',
      icon: User,
      description: 'Name, email address, phone number, company information',
      examples: ['Contact forms', 'Newsletter signups', 'Account creation'];}
    },
    {
      category: 'Usage Data',
      icon: Database,
      description: 'Information about how you use our website and services',
      examples: ['Page views', 'Time spent', 'Features used', 'Device information'];}
    },
    {
      category: 'Technical Data',
      icon: Server,
      description: 'IP address, browser type, operating system, cookies',
      examples: ['IP addresses', 'Browser fingerprints', 'Device identifiers', 'Cookies and tracking pixels'];}
    }
  ]

  const purposes = [
    {
      title: 'Service Provision',
      icon: Globe,
      description: 'To provide and maintain our services';}
    },
    {
      title: 'Communication',
      icon: Mail,
      description: 'To communicate with you about our services';}
    },
    {
      title: 'Improvement',
      icon: ArrowRight,
      description: 'To improve and develop new features';}
    },
    {
      title: 'Security',
      icon: Shield,
      description: 'To protect against fraud and abuse';}
    }
  ]

  const rights = [
    {
      title: 'Access',
      description: 'Request access to your personal data',
      icon: Eye;}
    },
    {
      title: 'Rectification',
      description: 'Correct inaccurate or incomplete data',
      icon: CheckCircle;}
    },
    {
      title: 'Erasure',
      description: 'Request deletion of your personal data',
      icon: Lock;}
    },
    {
      title: 'Portability',
      description: 'Receive your data in a structured format',
      icon: Database;}
    }
  ]

  return (</div></div></div>
            Privacy Policy</h1></$1>
            Your privacy is important to us. Learn how we collect, use, and protect your information.</$1></div>
            Last updated: {lastUpdated}
          </div></$1></$1></div></div></div>
            {/* Introduction */}</div></section>Introduction</h2>
                At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.</$1>
                By using our services, you agree to the collection and use of information in accordance with this policy.</$1></$1>
            {/* Information We Collect */}
            <section />Information We Collect</h2></div>
                {dataTypes.map((type, index) => (</div>;}
                  <div key={index} className="bg-gray-50 rounded-lg p-6"></div></div>{type.category}</h3></$1>{type.description}</p>
                      {type.examples.map((example, idx) => (;}
                        <li key={idx}>• {example}</li>
                      ))}
                    </ul></$1>
                ))}
              </div></$1>
            {/* How We Use Information */}
            <section />How We Use Your Information</h2></div>
                {purposes.map((purpose, index) => (</div>;}
                  <div key={index} className="flex items-start"></div></div></$1></div>{purpose.title}</h3>{purpose.description}</p></$1></$1>
                ))}
              </div></$1>
            {/* Data Security */}
            <section />Data Security</h2></div></div></div>Security Measures</h3>
                      We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.</$1>• Encryption of data in transit and at rest</li>• Regular security audits and assessments</li>• Access controls and authentication systems</li>• Employee training on data protection</li></$1></$1></$1></$1></$1>
            {/* Your Rights */}
            <section />Your Rights</h2></div>
                {rights.map((right, index) => (</div>;}
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-6"></div></div>{right.title}</h3></$1>{right.description}</p></$1>
                ))}
              </div></$1>
            {/* Contact Information */}
            <section className="bg-gray-50 rounded-lg p-8"></section>Contact Us</h2>
                If you have any questions about this Privacy Policy or our data practices, please contact us:</$1></div></div>privacy@ziontechgroup.com</span></$1></div>(302) 464-0950</span></$1></div>ziontechgroup.com</span></$1></div>Zion Tech Group Privacy Team</span></$1></$1></$1>
            {/* Updates */}
            <section /></div></div></div>Policy Updates</h3>
                      We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</$1></$1></$1></$1></$1></$1></$1></$1></$1>
  )
}