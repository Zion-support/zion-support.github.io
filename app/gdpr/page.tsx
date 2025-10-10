'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, ArrowRight, Phone, Mail, MapPin, Zap, Shield, Brain, Globe } from 'lucide-react';

<<<<<<< HEAD
const PagePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Solutions',
      description: 'Advanced AI technology to transform your business operations and improve efficiency'
    },
    {
      icon: Zap,
      title: 'High Performance',
      description: 'Lightning-fast processing and real-time analytics for optimal results'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with encryption and compliance standards'
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Worldwide deployment and support for international businesses'
=======
const $1: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const rights = [
    {
      title: 'Right of Access'
      icon: Eye,
      description: 'You have the right to obtain confirmation as to whether or not personal data concerning you is being processed.',
      details: [,
        'Request a copy of your personal data',
        'Know the purposes of processing',
        'Understand data retention periods',
        'Identify data sources and recipients'
      ]
    },
    {
      title: 'Right to Rectification'
      icon: FileText,
      description: 'You have the right to have inaccurate personal data corrected and incomplete data completed.',
      details: [,
        'Correct factual errors in your data',
        'Update outdated information',
        'Complete missing data fields',
        'Request verification of corrections'
      ]
    },
    {
      title: 'Right to Erasure'
      icon: AlertTriangle,
      description: 'You have the right to request the deletion of your personal data under certain circumstances.',
      details: [,
        'Data no longer necessary for original purposes',
        'Withdrawal of consent for processing',
        'Unlawful processing of personal data',
        'Objection to processing for legitimate interests'
      ]
    },
    {
      title: 'Right to Restrict Processing'
      icon: Lock,
      description: 'You have the right to limit how we process your personal data in certain situations.',
      details: [,
        'Contest accuracy of personal data',
        'Unlawful processing but prefer restriction to erasure',
        'We no longer need data but you require it for legal claims',
        'Objection to processing pending verification'
      ]
    },
    {
      title: 'Right to Data Portability',
      icon: Database,
      description: 'You have the right to receive your personal data in a structured, commonly used format.',
      details: [,
        'Receive data in machine-readable format',
        'Transfer data to another controller',
        'Direct transmission where technically feasible',
        'Data processed by automated means based on consent'
      ]
    },
    {
      title: 'Right to Object'
      icon: UserCheck,
      description: 'You have the right to object to processing of your personal data for specific purposes.',
      details: [,
        'Object to processing for direct marketing',
        'Object to processing for legitimate interests',
        'Object to processing for research purposes',
        'Object to automated decision-making'
      ]
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
    }
  ];

  const benefits = [
    'Advanced AI technology integration',
    'Real-time processing and analytics',
    'Enterprise-grade security and compliance',
    'Scalable and flexible solutions',
    '24/7 technical support',
    'Easy integration with existing systems',
    'Cost-effective pricing plans',
    'Proven track record of success'
  ];

<<<<<<< HEAD
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Page | Zion Tech Group</title>
        <meta name="description" content="Professional Page services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="page, AI solutions, IT services, Zion Tech Group, page" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Page
              </span>
              <br />
              <span className="text-white">Solutions</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with our advanced page solutions. 
              Powered by cutting-edge AI technology and industry expertise.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-700 transition-all duration-300 flex items-center">
                Get Started
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
                Learn More
              </button>
            </div>
=======
  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
  return (</div>
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />

      <main className="container mx-auto px-4 py-16 pt-24">{/* Header */}</main>
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">GDPR Compliance<p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).<div className="text-sm text-gray-400">Last updated: {lastUpdated}</div>
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Header */}
        <section className="text-center mb-16">)
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">)
            GDPR Compliance;)</h1>
          </h1>)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).,
          </p>,
          <div className="text-sm text-gray-400">,
            Last updated: {lastUpdated}</div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">GDPR Compliance</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).</p><div className="text-sm text-gray-400">Last updated: {lastUpdated}</section>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Our Page?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our page solutions deliver unmatched performance, security, and scalability.
            </p>
          </div>

<<<<<<< HEAD
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300">
                <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg mb-4">
                  <feature.icon className="h-6 w-6 text-white" />
=======
        {/* Your Rights */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Your Rights Under GDPR<div className="grid grid-cols-1 md:grid-cols-2 gap-8">{rights.map((right, index) => (</div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Your Rights Under GDPR</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {rights.map((right, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
                  <right.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{right.title}</h3><p className="text-gray-300 mb-4">{right.description}</p>
                <div></div>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Your Rights Under GDPR</h2><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{rights.map((right, index) => (</section>
              <div key={index} className="cyber-card p-6"></div>
                <div className="flex items-center mb-4"></div>
                  <right.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <h3 className="text-xl font-bold text-white">{right.title}</h3><p className="text-gray-300 mb-4">{right.description}</p>
                <div></div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">What this means:<ul className="space-y-1">{right.details.map((detail, detailIndex) => (</ul>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">What this means: </h4>,
                  <ul className="space-y-1">,
                    {right.details.map((detail, detailIndex) => (
                      <li key={detailIndex} className="flex items-start text-sm text-gray-300">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{detail}</span>
                      </span>
                    ))}
                  </ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

<<<<<<< HEAD
      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Key Benefits
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our page solutions for your business.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-400 mt-1 flex-shrink-0" />
                <p className="text-gray-300 text-lg">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl p-8 md:p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Contact our experts to discuss your page needs and get a customized solution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center justify-center">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <button className="border border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition-all duration-300 flex items-center justify-center">
                <Mail className="mr-2 h-5 w-5" />
                Email Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
=======
        {/* Legal Bases */}
        <section className="mb-16">
          <div className="cyber-card p-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Legal Bases for Processing<p className="text-gray-300 mb-6">We process your personal data based on one or more of the following legal bases under GDPR:<div className="grid grid-cols-1 md:grid-cols-2 gap-6">{legalBases.map((basis, index) => (</div>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Legal Bases for Processing</h2>
            <p className="text-gray-300 mb-6">
              We process your personal data based on one or more of the following legal bases under GDPR: </p>,
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">,
              {legalBases.map((basis, index) => (</div>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">{basis.title}</h3><p className="text-gray-300 mb-4 text-sm">{basis.description}</p>
                  <div></div>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Legal Bases for Processing</h2><p className="text-gray-300 mb-6">We process your personal data based on one or more of the following legal bases under GDPR:</p><div className="grid grid-cols-1 md:grid-cols-2 gap-6">{legalBases.map((basis, index) => (</div>
                <div key={index} className="bg-slate-800/50 rounded-lg p-6"></div>
                  <h3 className="text-lg font-semibold text-cyan-400 mb-3">{basis.title}</h3><p className="text-gray-300 mb-4 text-sm">{basis.description}</p>
                  <div></div>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples:<ul className="space-y-1">{basis.examples.map((example, exampleIndex) => (</ul>
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Examples: </h4>,
                    <ul className="space-y-1">,
                      {basis.examples.map((example, exampleIndex) => (
                        <li key={exampleIndex} className="flex items-start text-sm text-gray-300">
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{example}</span>
                        </span>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Protection Measures */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Protection Measures</h2>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8"></div>
              <div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Technical Safeguards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>End-to-end encryption for all data transmission</span>
                  </li>
                  <li className="flex items-start"></l>
                    <Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></Shiel>
                    <<<<span>Secure</span></<<span>data</span> centers with physical and digital security</span>
                  </li>
                  <li className="flex items-start"></l>
                    <Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></Shiel>
                    <<<<span>Regular</span></<<span>security</span> audits and penetration testing</span>
                  </li>
                  <li className="flex items-start"></l>
                    <Shield className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></Shiel>
                    <<<<span>Automated</span></<<span>backup</span> and disaster recovery systems</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Organizational Safeguards</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Data Protection Officer (DPO) appointed</span>
                  </li>
                  <li className="flex items-start"></l>
                    <UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></UserChec>
                    <<<<span>Staff</span></<<span>training</span> on data protection principles</span>
                  </li>
                  <li className="flex items-start"></l>
                    <UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></UserChec>
                    <<<<span>Data</span></<<span>processing</span> impact assessments</span>
                  </li>
                  <li className="flex items-start"></l>
                    <UserCheck className="w-5 h-5 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></UserChec>
                    <<<<span>Regular</span></<<span>compliance</span> monitoring and reviews</span>
                  </li>
                </ul>
              </div>,
            </div>,
          </div>,
        </section>,
,
        {/* How to Exercise Your Rights */}
        <section className="mb-16">
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">How to Exercise Your Rights</h2><p className="text-gray-300 mb-6">To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within 30 days.</p>
            </p>
            <div className="grid grid-cols-1 md: grid-cols-2 gap-8"></div>
              <div></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Making a Request</h3>
                <ul className="space-y-2 text-gray-300">
                  <li className="flex items-start">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" />
                    <span>Email us at privacy@ziontechgroup.com</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Include</span></<<span>your</span> full name and email address</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Specify</span></<<span>which</span> right you want to exercise</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Provide</span></<<span>any</span> additional information we may need</span>
                  </li>
                </ul>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Identity Verification<p className="text-gray-300 mb-4">To protect your privacy, we may need to verify your identity before processing your request.</p>
                </ul>,
              </div>,
              <div>,</div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Identity Verification</h3>,
                <p className="text-gray-300 mb-4">,
                  To protect your privacy, we may need to verify your identity before processing your request.
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Identity Verification</h3><p className="text-gray-300 mb-4">To protect your privacy, we may need to verify your identity before processing your request.</p>
                </p>
                <ul className="space-y-2 text-gray-300"></u>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Government</span></span>-issued photo ID</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Proof</span></<<span>of</span> address (utility bill, bank statement)</span>
                  </li>
                  <li className="flex items-start"></l>
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2 mt-0.5 flex-shrink-0" /></CheckCircl>
                    <<<<span>Account</span></<<span>verification</span></<span>questions</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Data Breach Notification */}
        <section className="mb-16">
          <div className="cyber-card p-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Breach Notification<p className="text-gray-300 mb-4">In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Breach Notification</h2><p className="text-gray-300 mb-4">In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:</p>
            </p>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Breach Notification</h2>
            <p className="text-gray-300 mb-4">
              In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will: </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Notify the relevant supervisory authority within 72 hours</span>
              </li>
              <li className="flex items-start"></l>
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /></AlertTriangl>
                <<<<span>Inform</span></<<span>affected</span> individuals without undue delay</span>
              </li>
              <li className="flex items-start"></l>
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" /></AlertTriangl>
                <<<<span>Provide</span></<<span>clear</span> information about the breach and its consequences</span>
              </li>
              <li className="flex items-start">
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Recommend measures to mitigate potential adverse effects</span>
              </li>,
            </ul>,
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16">
          <div className="cyber-card p-8"></div>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Our Data Protection Officer<p className="text-gray-300 mb-6">For any questions about our GDPR compliance or to exercise your rights, please contact our Data Protection Officer:</p>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Our Data Protection Officer</h2><p className="text-gray-300 mb-6">For any questions about our GDPR compliance or to exercise your rights, please contact our Data Protection Officer:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Data Protection Officer<p>364 E Main St STE 1008</p>
                  <p>Middletown, DE 19709<p>United States</p>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Our Data Protection Officer</h2>
            <p className="text-gray-300 mb-6">
              For any questions about our GDPR compliance or to exercise your rights, please contact our Data Protection Officer: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div>,</div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>,
                <div className="space-y-2 text-gray-300">,</div>
                  <p>Data Protection Officer</p>,
                  <p>364 E Main St STE 1008</p>,
                  <p>Middletown, DE 19709</p>
                  <p>United States</p>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Data Protection Officer</p><p>364 E Main St STE 1008</p>
                  <p>Middletown, DE 19709</p><p>United States</p>
                </div>
              </div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Contact Information</h3>
                <div className="space-y-2 text-gray-300"></div>
                  <p>Email:</p> <a href="mailto:dpo@ziontechgroup.com" className="text-cyan-400 hover:text-cyan-300">dpo@ziontechgroup.com</a>
                  <p>Phone:</p> <a href="tel:+13024640950" className="text-cyan-400 hover:text-cyan-300">+1 302 464 0950<p>Response Time: Within 30 days</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>,
,
      <Footer />,
    </div>);
>>>>>>> cursor/fix-errors-and-merge-to-main-e3dc
};

export default PagePage;