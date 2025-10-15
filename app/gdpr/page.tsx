import React from 'react';
import { Helmet } from 'react-helmet-async';
import { AlertTriangle, ArrowRight, CheckCircle, Download, Mail, Shield } from 'lucide-react';


const GDPRPage: React.FC = () => {
  const rights = [
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Right to Access',
      description: 'You have the right to request copies of your personal data and information about how we process it.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Right to Rectification',
      description: 'You can request correction of inaccurate or incomplete personal data.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Right to Erasure',
      description: 'You can request deletion of your personal data under certain circumstances.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Right to Restrict Processing',
      description: 'You can request limitation of processing of your personal data.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Right to Data Portability',
      description: 'You can request transfer of your data to another service provider.'
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: 'Right to Object',
      description: 'You can object to processing of your personal data for certain purposes.'
    }
  ];

const dataCategories = [
    {
      category: 'Identity Data',
      examples: ['Name', 'Email address', 'Phone number', 'Company name'],
      purpose: 'Account creation, communication, service delivery',
      legalBasis: 'Contract performance, legitimate interests'
    },
    {
      category: 'Technical Data',
      examples: ['IP address', 'Browser type', 'Device information', 'Cookies'],
      purpose: 'Website functionality, security, analytics',
      legalBasis: 'Legitimate interests, consent'
    },
    {
      category: 'Usage Data',
      examples: ['Page views', 'Click patterns', 'Session duration', 'Feature usage'],
      purpose: 'Service improvement, analytics, personalization',
      legalBasis: 'Legitimate interests, consent'
    },
    {
      category: 'Marketing Data',
      examples: ['Communication preferences', 'Marketing responses', 'Event attendance'],
      purpose: 'Marketing communications, event management',
      legalBasis: 'Consent, legitimate interests'
    }
  ];

const securityMeasures = [
    'Encryption of data in transit and at rest',
    'Access controls and authentication',
    'Regular security audits and assessments',
    'Employee training on data protection',
    'Incident response procedures',
    'Data backup and recovery systems',
    'Privacy by design principles',
    'Regular software updates and patches'
  ];
  return (
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group | Data Protection & Privacy Rights</title>
        <meta name="description" content="Learn about Zion Tech Group's GDPR compliance, your data protection rights, and how we handle personal data in accordance with EU regulations." />
        <meta name="keywords" content="GDPR, data protection, privacy rights, EU regulations, personal data, compliance" />
        <meta property="og:title" content="GDPR Compliance - Zion Tech Group" />
        <meta property="og:description" content="Our commitment to GDPR compliance and data protection" />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                GDPR <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Compliance</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                We are committed to protecting your personal data and ensuring full compliance with the General Data Protection Regulation (GDPR).
              </p>
              
        <div className="text-sm text-gray-400">
                Last updated: {new Date().toLocaleDateString()}
              </div>
            </div>
          </div>
        </section>
        {/* Overview */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6">Our GDPR Commitment</h2>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                
          <p className="text-gray-300 leading-relaxed mb-6">
                  The General Data Protection Regulation (GDPR) is a comprehensive data protection law that gives EU citizens greater control over their personal data. At Zion Tech Group, we are fully committed to GDPR compliance and protecting your privacy rights.
                </p>
                
          <p className="text-gray-300 leading-relaxed">
                  We have implemented robust data protection measures, clear privacy policies, and procedures to ensure that your personal data is processed lawfully, fairly, and transparently.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Your Rights */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Your Data Protection Rights</h2>
              
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rights.map((right, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300">
                    
        <div className="flex items-center mb-6">
                      
        <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mr-4">
                        
        <div className="text-white">{right.icon}</div>
                      </div>
                      <h3 className="text-xl font-bold text-white">{right.title}</h3>
                    </div>
                    
          <p className="text-gray-300">{right.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Data Categories */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-12 text-center">Types of Personal Data We Process</h2>
              
        <div className="space-y-8">
                {dataCategories.map((category, index) => (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                    <h3 className="text-2xl font-bold text-white mb-6">{category.category}</h3>
                    
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Examples</h4>
                        <ul className="space-y-2">
                          {category.examples.map((example, exampleIndex) => (
                            <li key={exampleIndex} className="flex items-start">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-1 flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{example}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Purpose</h4>
                        
          <p className="text-gray-300 text-sm">{category.purpose}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-cyan-400 mb-3">Legal Basis</h4>
                        
          <p className="text-gray-300 text-sm">{category.legalBasis}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Security Measures */}
        <section className="py-20 bg-white/5 backdrop-blur-sm">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Security Measures</h2>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                
          <p className="text-gray-300 leading-relaxed mb-8">
                  We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, alteration, disclosure, or destruction.
                </p>
                
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {securityMeasures.map((measure, index) => (
                    <div key={index} className="flex items-start">
                      <Shield className="w-5 h-5 text-green-400 mr-3 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">{measure}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Data Retention */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 text-center">Data Retention</h2>
              
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                
          <p className="text-gray-300 leading-relaxed mb-6">
                  We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including any legal, accounting, or reporting requirements.
                </p>
                
        <div className="space-y-4">
                  
        <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Account Data</h4>
                      
          <p className="text-gray-300 text-sm">Retained for the duration of your account plus 3 years for legal and accounting purposes.</p>
                    </div>
                  </div>
                  
        <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Marketing Data</h4>
                      
          <p className="text-gray-300 text-sm">Retained until you withdraw consent or for 2 years of inactivity.</p>
                    </div>
                  </div>
                  
        <div className="flex items-start">
                    <AlertTriangle className="w-5 h-5 text-yellow-400 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Technical Data</h4>
                      
          <p className="text-gray-300 text-sm">Retained for 12 months for security and analytics purposes.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Contact DPO */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-bold text-white mb-6">Exercise Your Rights</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                To exercise any of your data protection rights or if you have questions about our GDPR compliance, please contact our Data Protection Officer.
              </p>
              
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                  <Mail className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Email</h3>
                  
          <p className="text-cyan-400">dpo@ziontechgroup.com</p>
                </div>
                
        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-cyan-500/20">
                  <Download className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-white mb-3">Data Request Form</h3>
                  
          <p className="text-gray-300 text-sm">Download our data request form to exercise your rights</p>
                </div>
              </div>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:dpo@ziontechgroup.com"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Contact DPO
                </a>
                <a
                  href="/contact"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                >
                  <ArrowRight className="w-5 h-5 mr-2" />
                  General Contact
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default GDPRPage;