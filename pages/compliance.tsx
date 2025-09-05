    color: 'from-blue-500 to-cyan-500,',
    details: [;
      'Annual third-party audits,',
      'Security controls implementation',',
      'Availability monitoring',',
      'Confidentiality protection'';
    ],
    lastAudit: '2024-01-15,',
    nextAudit: '2025-01-15'';
    icon: Lock,
    requirements: [;
      'Data encryption in transit and at rest,',
      'Access controls and authentication',',
      'Data retention and deletion policies',',
      'Privacy by design principles'';
    ];
  },
  {
    category: 'Security Controls',
    icon: Shield,
    status: 'Valid'
  },
  {}
    name: 'HIPAA Compliance,',
    issuer: 'Independent Auditor,',
    validUntil: '2025-02-01,',
    status: 'Valid'';
  },
  {}
    name: 'GDPR Compliance,',
    issuer: 'EU Data Protection Authority,',
    validUntil: '2025-01-30,',
    status: 'Valid'';
  },
  {}
    name: 'ISO 27001,',
    issuer: 'ISO,',
    validUntil: 'In Progress,',
    status: 'Pending'';
  }
;];

export default function CompliancePage() {

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}

ursor/website-audit-and-update-with-deployment-9cae
        {/* Compliance Metrics */}
                  key={metric.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}

            </div>
          </div>
        </section>

ursor/website-audit-and-update-with-deployment-9cae
        {/* Compliance Frameworks */}
                  key={framework.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Key Requirements:</h4>
                    <ul className="space-y-2">
                      {framework.details.map((detail, detailIndex) => (
                        <li key={detailIndex} className="flex items-center text-gray-600">
                          <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                          {detail}
                        </li>
                      ))}

                    </ul>
                  </div>

ursor/website-audit-and-update-with-deployment-9cae
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-gray-500">Last Audit:</span>
                      <div className="font-medium">{framework.lastAudit}</div>
                    </div>
                    <div>
                      <span className="text-gray-500">Next Audit:</span>
                      <div className="font-medium">{framework.nextAudit}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

ursor/website-audit-and-update-with-deployment-9cae
        {/* Compliance Areas */}
                  key={area.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                        {requirement}
                      </li>
                    ))}

ursor/website-audit-and-update-with-deployment-9cae
        {/* Certifications */}
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Certification</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Issuer</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Valid Until</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {certifications.map((cert, index) => (
                        <motion.tr
                          key={cert.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}

                    </tbody>
                  </table>
                </div>
              </div>
ursor/website-audit-and-update-with-deployment-9cae
        {/* Compliance Commitment */}

                className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200"
              >
                <div className="flex items-center mb-6">
                  <AlertCircle className="w-8 h-8 text-blue-600 mr-4" />
                  <h3 className="text-2xl font-bold text-gray-900">Our Compliance Commitment</h3>
                </div>
                <div className="prose prose-lg max-w-none text-gray-600">
                  <p className="mb-4">
                    At Zion Tech Group, compliance is not just a requirement—it's a fundamental part of our commitment to
                    protecting our clients' data and maintaining the highest standards of security and privacy.
                  </p>
                  <p className="mb-4">
                    We continuously monitor and update our compliance programs to ensure they meet the latest regulatory
                    requirements and industry best practices. Our dedicated compliance team works closely with all departments
                    to maintain our certifications and implement necessary controls.
                  </p>
                  <p>
                    Regular audits, assessments, and training ensure that our compliance programs remain effective and
                    At Zion Tech Group, compliance is not just a requirement—it's a fundamental part of our commitment to 
                    protecting our clients' data and maintaining the highest standards of security and privacy.
                  </p>
                  <p className="mb-4">
                    We continuously monitor and update our compliance programs to ensure they meet the latest regulatory 
                    requirements and industry best practices. Our dedicated compliance team works closely with all departments 
                    to maintain our certifications and implement necessary controls.
                  </p>
                  <p>
                    Regular audits, assessments, and training ensure that our compliance programs remain effective and 
ursor/website-audit-and-update-with-deployment-9cae
                    up-to-date with evolving regulations and standards.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

ursor/website-audit-and-update-with-deployment-9cae
        {/* Contact Section */}
    </SimpleLayout>
