import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { 
  DollarSign, 
  Shield, 
  Brain, 
  Cloud, 
  Zap, 
  CheckCircle, 
  ArrowRight,
  Users,
  Clock,
  Award,
  Star,
  Phone,
  Mail,
  Calendar,
  FileText,
  BarChart3,
  Lock,
  Activity,
  CreditCard,
  TrendingUp,
  PieChart
} from 'lucide-react';

const financeSolutions = [
  {
    title: 'AI-Powered Risk Assessment',
    description: 'Advanced machine learning models for credit scoring, fraud detection, and risk management',
    icon: Brain,
    features: [
      'Real-time fraud detection',
      'Credit risk scoring',
      'Anomaly detection',
      'Predictive analytics'
    ],
    benefits: [
      '99.5% fraud detection accuracy',
      '40% reduction in false positives',
      'Real-time risk assessment',
      'Improved decision making'
    ]
  },
  {
    title: 'Digital Banking Platform',
    description: 'Comprehensive digital banking solutions with mobile-first design and advanced security',
    icon: CreditCard,
    features: [
      'Mobile banking apps',
      'Online account management',
      'Digital payments',
      'Multi-factor authentication'
    ],
    benefits: [
      'Enhanced customer experience',
      'Reduced operational costs',
      'Increased digital adoption',
      'Improved security'
    ]
  },
  {
    title: 'Regulatory Compliance',
    description: 'Automated compliance monitoring and reporting for financial regulations',
    icon: Shield,
    features: [
      'KYC/AML automation',
      'Regulatory reporting',
      'Audit trail management',
      'Compliance monitoring'
    ],
    benefits: [
      'Reduced compliance costs',
      'Automated reporting',
      'Regulatory adherence',
      'Risk mitigation'
    ]
  },
  {
    title: 'Trading Analytics',
    description: 'AI-driven trading insights and market analysis for investment decisions',
    icon: TrendingUp,
    features: [
      'Market sentiment analysis',
      'Algorithmic trading',
      'Portfolio optimization',
      'Risk management'
    ],
    benefits: [
      'Improved trading performance',
      'Reduced market risk',
      'Automated strategies',
      'Better returns'
    ]
  },
  {
    title: 'Blockchain Solutions',
    description: 'Secure blockchain infrastructure for digital assets and smart contracts',
    icon: Lock,
    features: [
      'Smart contracts',
      'Digital asset management',
      'Cross-border payments',
      'Tokenization'
    ],
    benefits: [
      'Enhanced security',
      'Reduced transaction costs',
      'Faster settlements',
      'Transparency'
    ]
  },
  {
    title: 'Financial Data Analytics',
    description: 'Advanced analytics platform for financial data processing and insights',
    icon: BarChart3,
    features: [
      'Real-time data processing',
      'Predictive modeling',
      'Customer analytics',
      'Performance metrics'
    ],
    benefits: [
      'Data-driven decisions',
      'Improved customer insights',
      'Operational efficiency',
      'Competitive advantage'
    ]
  }
];

const complianceStandards = [
  {
    name: 'PCI DSS',
    description: 'Payment Card Industry Data Security Standard',
    icon: CreditCard,
    requirements: [
      'Secure payment processing',
      'Data encryption',
      'Access controls',
      'Regular security testing'
    ]
  },
  {
    name: 'SOX',
    description: 'Sarbanes-Oxley Act Compliance',
    icon: FileText,
    requirements: [
      'Financial reporting accuracy',
      'Internal controls',
      'Audit trail maintenance',
      'Management certification'
    ]
  },
  {
    name: 'Basel III',
    description: 'International Banking Regulations',
    icon: Shield,
    requirements: [
      'Capital adequacy ratios',
      'Liquidity requirements',
      'Risk management frameworks',
      'Stress testing'
    ]
  },
  {
    name: 'GDPR',
    description: 'General Data Protection Regulation',
    icon: Lock,
    requirements: [
      'Data privacy protection',
      'Consent management',
      'Right to be forgotten',
      'Data breach notification'
    ]
  }
];

const caseStudies = [
  {
    title: 'AI-Powered Fraud Detection System',
    client: 'Regional Bank',
    challenge: 'High volume of fraudulent transactions and manual review processes',
    solution: 'Implemented AI-powered fraud detection with real-time monitoring',
    results: [
      '99.5% fraud detection accuracy',
      '60% reduction in false positives',
      'Real-time transaction monitoring',
      '$2M annual savings in fraud prevention'
    ],
    technologies: ['AI/ML', 'Real-time Processing', 'Cloud Computing']
  },
  {
    title: 'Digital Banking Platform',
    client: 'Credit Union',
    challenge: 'Outdated banking systems and low digital adoption',
    solution: 'Modern digital banking platform with mobile-first design',
    results: [
      '300% increase in mobile banking usage',
      '50% reduction in branch visits',
      'Improved customer satisfaction',
      '40% reduction in operational costs'
    ],
    technologies: ['Mobile Development', 'Cloud Infrastructure', 'API Integration']
  },
  {
    title: 'Regulatory Compliance Automation',
    client: 'Investment Firm',
    challenge: 'Manual compliance processes and regulatory reporting',
    solution: 'Automated compliance monitoring and reporting system',
    results: [
      '90% reduction in compliance processing time',
      '100% regulatory adherence',
      'Automated report generation',
      'Significant cost savings'
    ],
    technologies: ['Automation', 'Data Analytics', 'Compliance Tools']
  }
];

const stats = [
  { number: '200+', label: 'Financial Institutions Served' },
  { number: '50M+', label: 'Transactions Processed Daily' },
  { number: '99.9%', label: 'System Uptime' },
  { number: '100%', label: 'Regulatory Compliance' }
];

export default function FinancePage() {
  return (
    <>
      <Head>
        <title>Finance Solutions - Zion Tech Group | Fintech & Banking Technology</title>
        <meta name="description" content="Transform financial services with our AI-powered fintech solutions, digital banking platforms, fraud detection, and regulatory compliance technology." />
        <meta name="keywords" content="fintech solutions, banking technology, financial AI, fraud detection, regulatory compliance, digital banking" />
        <meta property="og:title" content="Finance Solutions - Zion Tech Group" />
        <meta property="og:description" content="AI-powered fintech solutions for modern financial institutions." />
        <meta property="og:url" content="https://ziontechgroup.com/industries/finance" />
        <meta property="og:type" content="website" />
      </Head>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
        {/* Hero Section */}
        <section className="relative bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 text-white py-20 overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
            <div className="absolute top-40 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
          </div>

          <div className="container mx-auto px-4 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Financial Technology Solutions
                <span className="block text-blue-400">Revolutionizing Banking & Finance</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Empower financial institutions with cutting-edge AI, blockchain technology, digital banking platforms, and regulatory compliance solutions that drive innovation and growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all duration-300 font-semibold">
                  Get Fintech Consultation
                </Link>
                <Link href="/case-studies" className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300 font-semibold">
                  View Success Stories
                </Link>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-4xl md:text-5xl font-bold text-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Finance Solutions */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Financial Technology Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive fintech solutions designed for modern financial institutions
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {financeSolutions.map((solution, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <solution.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-center">{solution.title}</h3>
                  <p className="text-gray-600 text-center mb-6">{solution.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Benefits:</h4>
                    <ul className="space-y-2">
                      {solution.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Standards */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Regulatory Compliance</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                We ensure all our financial solutions meet the highest regulatory and security standards
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {complianceStandards.map((standard, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-gray-200"
                >
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <standard.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2 text-center">{standard.name}</h3>
                  <p className="text-gray-600 text-center mb-4 text-sm">{standard.description}</p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-3">Requirements:</h4>
                    <ul className="space-y-2">
                      {standard.requirements.map((requirement, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{requirement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Success Stories</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Real results from financial institutions we've helped transform
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-all duration-300"
                >
                  <h3 className="text-xl font-semibold mb-4">{study.title}</h3>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Client:</h4>
                    <p className="text-gray-600">{study.client}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Challenge:</h4>
                    <p className="text-gray-600 text-sm">{study.challenge}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Solution:</h4>
                    <p className="text-gray-600 text-sm">{study.solution}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Results:</h4>
                    <ul className="space-y-1">
                      {study.results.map((result, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {study.technologies.map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-blue-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Finance?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our fintech solutions can drive innovation and growth in your financial institution.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-blue-600 rounded-lg hover:bg-gray-100 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <DollarSign className="w-5 h-5 mr-2" />
                  Get Fintech Consultation
                </Link>
                <Link
                  href="/case-studies"
                  className="px-8 py-4 border-2 border-white text-white rounded-lg hover:bg-white hover:text-blue-600 transition-all duration-300 font-semibold flex items-center justify-center"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  View Case Studies
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}