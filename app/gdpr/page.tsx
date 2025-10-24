<<<<<<< HEAD
<<<<<<< HEAD
import { Helmet } from 'react-helmet-async';
<<<<<<< HEAD
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GDataAnalyticsZionTechGroupPage() {
  return (
<<<<<<< HEAD
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
      <Helmet>
        <title>Page - Zion Tech Group</title>
        <meta name="description" content="Professional services coming soon." />
      </Helmet>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-6">
          Coming Soon
        </h1>
        <p className="text-lg text-gray-300 mb-8">
          Professional services coming soon.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
        >
          Contact Us
          <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </div>
=======
    <div>
      <Head>
        <title>Gdpr - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">
            Gdpr
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            gdpr services Transform your business with our expert solutions. services coming soon.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors duration-200"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
      <Footer />
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0210
    </div>
  );
}
=======
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings } from 'lucide-react';

<<<<<<< HEAD
const GDPRCompliancePage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']
    },
    {
      icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']
    },
    {
      icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']
    },
    {
      icon: Zap,
      title: 'Fast Processing',
      description: 'Process large datasets in seconds with our optimized AI analytics engine.',
      benefits: ['High-speed processing', 'Scalable infrastructure', 'Real-time analysis', 'Batch processing']
    },
    {
      icon: Shield,
      title: 'Secure Analytics',
      description: 'Enterprise-grade security for your sensitive data and analytics.',
      benefits: ['Data encryption', 'Access controls', 'Audit trails', 'Compliance ready']
=======
const GDPRPage: React.FC = () => {
  const lastUpdated = 'January 1, 2024';

  const rights = [
    {
      title: 'Right of Access'
      icon: Eye;
      description: 'You have the right to obtain confirmation as to whether or not personal data concerning you is being processed.',
      details: [
        'Request a copy of your personal data',
        'Know the purposes of processing',
        'Understand data retention periods',
        'Identify data sources and recipients'
      ]
    },
    {
      title: 'Right to Rectification'
      icon: FileText;
      description: 'You have the right to have inaccurate personal data corrected and incomplete data completed.',
      details: [
        'Correct factual errors in your data',
        'Update outdated information',
        'Complete missing data fields',
        'Request verification of corrections'
      ]
    },
    {
      title: 'Right to Erasure'
      icon: AlertTriangle;
      description: 'You have the right to request the deletion of your personal data under certain circumstances.',
      details: [
        'Data no longer necessary for original purposes',
        'Withdrawal of consent for processing',
        'Unlawful processing of personal data',
        'Objection to processing for legitimate interests'
      ]
    },
    {
      title: 'Right to Restrict Processing'
      icon: Lock;
      description: 'You have the right to limit how we process your personal data in certain situations.',
      details: [
        'Contest accuracy of personal data',
        'Unlawful processing but prefer restriction to erasure',
        'We no longer need data but you require it for legal claims',
        'Objection to processing pending verification'
      ]
    },
    {
      title: 'Right to Data Portability',
      icon: Database;
      description: 'You have the right to receive your personal data in a structured, commonly used format.',
      details: [
        'Receive data in machine-readable format',
        'Transfer data to another controller',
        'Direct transmission where technically feasible',
        'Data processed by automated means based on consent'
      ]
    },
    {
      title: 'Right to Object'
      icon: UserCheck;
      description: 'You have the right to object to processing of your personal data for specific purposes.',
      details: [
        'Object to processing for direct marketing',
        'Object to processing for legitimate interests',
        'Object to processing for research purposes',
        'Object to automated decision-making'
      ]
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
    }
  ];

  const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',
    'Improve decision-making with AI insights',
    'Scale operations without proportional staff increases',
    'Gain competitive advantage with advanced technology'
  ];

  return (
<<<<<<< HEAD
    <>
      <Helmet>
        <title>GDPR Compliance - Zion Tech Group</title>
        <meta name="description" content="Ensure GDPR compliance for your business." />
        <meta name="keywords" content="GDPR, compliance, privacy, data protection" />
      </Helmet>

      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(147,51,234,0.3)_0%,transparent_50%)] animate-pulse" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              GDPR Compliance
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Ensure GDPR compliance for your business.
=======
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation />
      <main className="container mx-auto px-4 py-16 pt-24"></main>
        {/* Header */}
        <section className="text-center mb-16">)
          <h1 className="text-4xl md: text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">)
            GDPR Compliance;)
          </h1>)
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">)
            We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).,
          </p>,
          <div className="text-sm text-gray-400">,
            Last updated: {lastUpdated}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 neon-text">GDPR Compliance</h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">We are committed to protecting your privacy and ensuring compliance with the General Data Protection Regulation (GDPR).</p><div className="text-sm text-gray-400">Last updated: {lastUpdated}</section>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Our GDPR Commitment</h2><p className="text-gray-300 mb-4 leading-relaxed">Zion Tech Group is fully committed to compliance with the General Data Protection Regulation (GDPR) and other applicable data protection laws. We have implemented comprehensive measures to ensure the protection of your personal data and respect for your privacy rights.</p><p className="text-gray-300 leading-relaxed">This page outlines our GDPR compliance measures, your rights under GDPR, and how you can exercise those rights.</p>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </p>
<<<<<<< HEAD
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
          </div>
        </section>
=======
          </div></div>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0361

<<<<<<< HEAD
        {/* Features Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  {feature.benefits && (
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit}
                        </li>
=======
        {/* Your Rights */}
        <section className="mb-16"></section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center neon-text">Your Rights Under GDPR</h2>
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,
            {rights.map((right, index) => (
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
                      <li key={detailIndex} className="flex items-start text-sm text-gray-300"></li>
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{detail}</span>
                      </span>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Legal Bases */}
        <section className="mb-16"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Legal Bases for Processing</h2>
            <p className="text-gray-300 mb-6"></p>
              We process your personal data based on one or more of the following legal bases under GDPR: </p>,
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">,
              {legalBases.map((basis, index) => (
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
                        <li key={exampleIndex} className="flex items-start text-sm text-gray-300"></li>
                          <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 mr-2 flex-shrink-0">{example}</span>
                        </span>
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* Benefits Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Proven results that drive business growth and efficiency
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <CheckCircle className="w-8 h-8 text-white" />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit}</p>
                </div>
              ))}
=======
        {/* Data Protection Measures */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Protection Measures</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Technical Safeguards</h3>
                <ul className="space-y-2 text-gray-300"></ul>
                  <li className="flex items-start"></li>
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
                <ul className="space-y-2 text-gray-300"></ul>
                  <li className="flex items-start"></li>
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
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">How to Exercise Your Rights</h2><p className="text-gray-300 mb-6">To exercise any of your GDPR rights, please contact us using the information below. We will respond to your request within 30 days.</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-4">Making a Request</h3>
                <ul className="space-y-2 text-gray-300"></ul>
                  <li className="flex items-start"></li>
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
                </ul>,
              </div>,
              <div>,
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
            </div>
          </div>
        </section>

<<<<<<< HEAD
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Contact our experts to discuss your requirements and get started today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-amber-500 to-blue-600 hover:from-amber-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                <button className="border border-amber-400 text-amber-400 hover:bg-amber-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                  Learn More
                </button>
=======
        {/* Data Breach Notification */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Breach Notification</h2><p className="text-gray-300 mb-4">In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will:</p>
            </p>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Data Breach Notification</h2>
            <p className="text-gray-300 mb-4"></p>
              In the unlikely event of a data breach that poses a risk to your rights and freedoms, we will: </p>
            <ul className="space-y-2 text-gray-300"></ul>
              <li className="flex items-start"></li>
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
              <li className="flex items-start"></li>
                <AlertTriangle className="w-5 h-5 text-yellow-400 mr-2 mt-0.5 flex-shrink-0" />
                <span>Recommend measures to mitigate potential adverse effects</span>
              </li>,
            </ul>,
          </div>,
        </section>,
,
        {/* Contact Information */}
        <section className="mb-16"></section>
          <div className="cyber-card p-8"></section>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Our Data Protection Officer</h2><p className="text-gray-300 mb-6">For any questions about our GDPR compliance or to exercise your rights, please contact our Data Protection Officer:</p>
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div></div>
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>
            <h2 className="text-2xl font-bold text-white mb-6 neon-text">Contact Our Data Protection Officer</h2>
            <p className="text-gray-300 mb-6"></p>
              For any questions about our GDPR compliance or to exercise your rights, please contact our Data Protection Officer: </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6"></div>
              <div>,
                <h3 className="text-lg font-semibold text-cyan-400 mb-3">Zion Tech Group</h3>,
                <div className="space-y-2 text-gray-300">,
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
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
              </div>
            </div>
          </div>
        </section>
<<<<<<< HEAD
      </div>
      <Footer />
    </>
  );
=======
      </main>,
,
      <Footer />,
    </div>);
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-03fc
};

export default GDPRCompliancePage;
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-02f6
=======
import React from 'react';

import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';

export default function GdprPage() {
  return (
    <>
      <title>5G Data Analytics - Zion Tech Group</title>
        <title>Gdpr - Zion Tech Group</title>
        <h1 className="text-4 xl font-boldtext-whitemb-6">Gdpr</h1>
        <p className="text-lgtext-gray-300mb-8">Professional gdpr services coming soon.</p>
          Contact Us

  );

>>>>>>> origin/cursor/fix-errors-and-merge-to-main-048f
=======
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export default function GdprPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Gdpr - Zion Tech Group</title>
        <meta name="description" content="Professional gdpr services by Zion Tech Group" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">Gdpr</h1>
          <p className="text-lg text-gray-300 mb-8">Professional gdpr services coming soon.</p>
          
          <Link
            to="/contact"
            className="inline-flex items-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>
      </div>
    </div>
  );
}
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0659
