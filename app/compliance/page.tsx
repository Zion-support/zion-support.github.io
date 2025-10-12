'use client';

import React from 'react';
import { CheckCircle, ArrowRight, Shield, FileText, Lock, Award, Users, Globe } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const CompliancePage: React.FC = () => {}
  const complianceStandards = [
    {}
    name: 'SOC 2 Type II',
      description: 'Security, availability, and confidentiality controls for service organizations',
      status: 'Certified',
      icon: Shield
},
    {}
    name: 'ISO 27001',
      description: 'Information security management system certification',
      status: 'Certified',
      icon: Lock
},
    {}
    name: 'GDPR',
      description: 'General Data Protection Regulation compliance for EU data',
      status: 'Compliant',
      icon: FileText
},
    {}
    name: 'HIPAA',
      description: 'Health Insurance Portability and Accountability Act compliance',
      status: 'Compliant',
      icon: Users
},
    {}
    name: 'PCI DSS',
      description: 'Payment Card Industry Data Security Standard',
      status: 'Compliant',
      icon: Award
},
    {}
    name: 'CCPA',
      description: 'California Consumer Privacy Act compliance',
      status: 'Compliant',
      icon: Globe
}
  ];

  const features = [
    {}
    title: 'Comprehensive Auditing',
      description: 'Regular internal and external audits to ensure ongoing compliance with all standards.'
},
    {}
    title: 'Data Protection',
      description: 'Advanced encryption and security measures to protect sensitive data and privacy.'
},
    {}
    title: 'Documentation',
      description: 'Complete documentation of policies, procedures, and compliance measures.'
    },
    {}
    title: 'Training Programs',
      description: 'Regular training for all staff on compliance requirements and best practices.'
}
  ];

  const benefits = [
    'Reduced risk of data breaches and security incidents',
    'Enhanced customer trust and confidence',
    'Competitive advantage in regulated industries',
    'Reduced legal and regulatory risks',
    'Improved operational efficiency',
    'Better data governance and management',
    'Streamlined audit processes',
    'Continuous compliance monitoring'
  ];

  return ()
    <>
      <Helmet></Helmet>
        <title>Compliance - Security & Regulatory Compliance | Zion Tech Group</title>
        <meta name="description" content="Learn about our comprehensive compliance program. SOC 2, ISO 27001, GDPR, HIPAA, and other regulatory standards." /></meta>
        <meta name="keywords" content="compliance, security standards, SOC 2, ISO 27001, GDPR, HIPAA, PCI DSS, data protection" /></meta>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center"></div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6"></h1>
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent"></span>
                  Compliance &
                </span>
                <br /></br>
                <span className="text-white">Security Standards</span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto"></p>
                We maintain the highest standards of security and compliance to protect your data and ensure regulatory adherence.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
                <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center"></button>
                  View Certifications
                  <ArrowRight className="ml-2 h-5 w-5" /></ArrowRight>
                </button>
                <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"></button>
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Our Compliance Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                We maintain compliance with the most stringent security and regulatory standards.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>
              {complianceStandards.map((standard, index) => ()
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20"></div>
                  <div className="flex items-center mb-4"></div>
                    <standard.icon className="h-8 w-8 text-purple-400 mr-3" /></standard>
                    <div></div>
                      <h3 className="text-xl font-semibold text-white">{standard.name}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${}
                        standard.status === 'Certified' 
                          ? 'bg-green-500 text-white' 
                          : 'bg-blue-500 text-white'
                      }`}></span>
                        {standard.status}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300">{standard.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Our Compliance Program
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Comprehensive approach to maintaining the highest standards of security and compliance.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8"></div>
              {features.map((feature, index) => ()
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20"></div>
                  <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-7xl mx-auto"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4"></h2>
                Benefits of Our Compliance Program
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>
                Experience the advantages of working with a fully compliant technology partner.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
              {benefits.map((benefit, index) => ()
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20 text-center"></div>
                  <CheckCircle className="h-8 w-8 text-green-400 mx-auto mb-4" /></CheckCircle>
                  <p className="text-gray-300">{benefit}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8"></section>
          <div className="max-w-4xl mx-auto text-center"></div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6"></h2>
              Questions About Our Compliance?
            </h2>
            <p className="text-xl text-purple-100 mb-8"></p>
              Contact our compliance team to learn more about our security standards and certifications.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center"></button>
                <Shield className="mr-2 h-5 w-5" /></Shield>
                View Certifications
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center justify-center"></button>
                <FileText className="mr-2 h-5 w-5" /></FileText>
                Download Report
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CompliancePage;