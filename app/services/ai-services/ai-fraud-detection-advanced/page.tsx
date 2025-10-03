import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  AlertTriangle, 
  BarChart3, 
  CheckCircle, 
  ArrowRight, 
  DollarSign,
  Clock,
  Star,
  Target,
  Phone,
  Mail,
  MapPin,
  Lock,
  Database,
  Globe,
  Users,
  Award,
  Rocket,
  TrendingUp,
  Activity,
  Key,
  FileText,
  Eye,
  Mic,
  Network,
  Server,
  HardDrive,
  Wifi,
  Building,
  Heart,
  ShoppingCart,
  CreditCard,
  Cpu,
  Monitor,
  PieChart,
  Layers,
  GitBranch,
  Container,
  Zap,
  Brain,
  Smartphone,
  Camera,
  Fingerprint
} from 'lucide-react';

export default function AIFraudDetectionAdvancedPage() {
  const title = 'Advanced AI Fraud Detection Platform — Zion Tech Group';
  const description: 'Next-generation AI fraud detection platform with real-time monitoring, behavioral analysis, and machine learning. Protect your business from sophisticated fraud schemes with 99.9% accuracy.';

  const fraudServices = [
    {
      name: 'Real-Time Transaction Monitoring',
      description: 'Advanced AI system that monitors transactions in real-time and detects fraudulent patterns instantly',
      icon: Activity,
      features: [
        'Real-time transaction analysis and scoring',
        'Machine learning fraud detection algorithms',
        'Behavioral pattern recognition and analysis',
        'Multi-channel fraud monitoring (online, mobile, in-store)',
        'Instant fraud alerts and notifications',
        'Risk scoring with confidence levels',
        'Integration with payment processors',
        'Customizable fraud rules and thresholds'
      ],
      pricing: '$5,000 - $35,000/month',
      delivery: '4-8 weeks',
      category: 'Transaction Monitoring',
      benefits: 'Detect fraud in milliseconds, reduce false positives by 85%',
      marketPrice: '$10,000 - $70,000/month',
      useCases: ['E-commerce', 'Banking', 'FinTech', 'Insurance'],
      technologies: ['Real-time ML', 'Stream Processing', 'Payment APIs', 'Risk Scoring']
    },
    {
      name: 'Behavioral Analytics Engine',
      description: 'AI-powered behavioral analysis that identifies unusual user patterns and suspicious activities',
      icon: Brain,
      features: [
        'User behavior profiling and baselining',
        'Anomaly detection and pattern recognition',
        'Device fingerprinting and recognition',
        'Location-based risk assessment',
        'Biometric authentication integration',
        'Social network analysis',
        'Temporal pattern analysis',
        'Cross-platform behavior tracking'
      ],
      pricing: '$8,000 - $50,000/month',
      delivery: '6-12 weeks',
      category: 'Behavioral Analytics',
      benefits: 'Identify sophisticated fraud schemes, improve detection accuracy by 95%',
      marketPrice: '$15,000 - $100,000/month',
      useCases: ['Online Banking', 'Credit Cards', 'Digital Wallets', 'Cryptocurrency'],
      technologies: ['Behavioral ML', 'Graph Analytics', 'Biometric APIs', 'Device Intelligence']
    },
    {
      name: 'Advanced Threat Intelligence',
      description: 'Comprehensive threat intelligence platform with global fraud data and predictive analytics',
      icon: Shield,
      features: [
        'Global fraud database and intelligence feeds',
        'Threat actor profiling and tracking',
        'Predictive fraud modeling and forecasting',
        'Dark web monitoring and analysis',
        'Social engineering detection',
        'Phishing and malware protection',
        'Fraud ring identification',
        'Real-time threat updates and alerts'
      ],
      pricing: '$12,000 - $75,000/month',
      delivery: '8-16 weeks',
      category: 'Threat Intelligence',
      benefits: 'Stay ahead of emerging threats, reduce fraud losses by 90%',
      marketPrice: '$25,000 - $150,000/month',
      useCases: ['Financial Services', 'Government', 'Healthcare', 'E-commerce'],
      technologies: ['Threat Intelligence APIs', 'Dark Web Monitoring', 'Predictive Analytics', 'Graph Databases']
    },
    {
      name: 'Multi-Factor Authentication Suite',
      description: 'Advanced authentication system with biometric, behavioral, and contextual verification',
      icon: Fingerprint,
      features: [
        'Biometric authentication (face, voice, fingerprint)',
        'Behavioral biometrics and typing patterns',
        'Contextual authentication and risk assessment',
        'Adaptive authentication based on risk levels',
        'Multi-channel authentication support',
        'Fraud-resistant authentication methods',
        'Integration with existing identity systems',
        'Compliance with regulatory requirements'
      ],
      pricing: '$3,000 - $25,000/month',
      delivery: '3-6 weeks',
      category: 'Authentication',
      benefits: 'Prevent account takeovers, reduce authentication friction by 60%',
      marketPrice: '$6,000 - $50,000/month',
      useCases: ['Online Banking', 'Mobile Apps', 'Enterprise Security', 'Government'],
      technologies: ['Biometric APIs', 'Behavioral Analytics', 'Identity Management', 'Risk Assessment']
    },
    {
      name: 'Document Verification AI',
      description: 'AI-powered document verification and identity verification system',
      icon: FileText,
      features: [
        'OCR and document analysis with 99.9% accuracy',
        'Identity document verification and validation',
        'Liveness detection and anti-spoofing',
        'Document tampering detection',
        'Cross-reference with government databases',
        'Real-time verification and approval',
        'Compliance with KYC/AML regulations',
        'Multi-language document support'
      ],
      pricing: '$2,500 - $20,000/month',
      delivery: '2-4 weeks',
      category: 'Document Verification',
      benefits: 'Automate identity verification, reduce manual review by 95%',
      marketPrice: '$5,000 - $40,000/month',
      useCases: ['Onboarding', 'KYC Compliance', 'Identity Verification', 'Document Processing'],
      technologies: ['OCR', 'Computer Vision', 'Liveness Detection', 'Government APIs']
    },
    {
      name: 'Fraud Investigation Platform',
      description: 'Comprehensive fraud investigation and case management system',
      icon: Eye,
      features: [
        'Automated fraud case creation and routing',
        'Investigation workflow management',
        'Evidence collection and documentation',
        'Fraud pattern analysis and reporting',
        'Integration with law enforcement databases',
        'Compliance reporting and audit trails',
        'Machine learning case prioritization',
        'Collaborative investigation tools'
      ],
      pricing: '$4,000 - $30,000/month',
      delivery: '4-8 weeks',
      category: 'Investigation',
      benefits: 'Streamline fraud investigations, reduce case resolution time by 70%',
      marketPrice: '$8,000 - $60,000/month',
      useCases: ['Fraud Investigation', 'Compliance', 'Law Enforcement', 'Insurance'],
      technologies: ['Case Management', 'Workflow Automation', 'Document Management', 'Reporting Tools']
    }
  ];

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com',
    address: '364 E Main St STE 1008 Middletown DE 19709',
    website: 'https://ziontechgroup.com'
  };

  const stats = [
    { label: 'Fraud Detection Accuracy', value: '99.9%', icon: Target },
    { label: 'False Positive Reduction', value: '85%', icon: TrendingUp },
    { label: 'Fraud Loss Prevention', value: '90%', icon: Shield },
    { label: 'Response Time', value: '<50ms', icon: Zap }
  ];

  const industries = [
    { name: 'Financial Services', icon: CreditCard, description: 'Banking, credit cards, loans, investment fraud' },
    { name: 'E-commerce', icon: ShoppingCart, description: 'Payment fraud, account takeover, chargebacks' },
    { name: 'Insurance', icon: Shield, description: 'Claims fraud, identity theft, premium fraud' },
    { name: 'Healthcare', icon: Heart, description: 'Medical fraud, prescription fraud, billing fraud' },
    { name: 'Government', icon: Building, description: 'Benefits fraud, tax fraud, identity verification' },
    { name: 'Cryptocurrency', icon: Cpu, description: 'Exchange fraud, wallet security, transaction monitoring' }
  ];

  const benefits = [
    {
      title: 'Advanced AI Detection',
      description: 'Cutting-edge machine learning algorithms for superior fraud detection',
      icon: Brain,
      details: ['99.9% accuracy', 'Real-time analysis', 'Machine learning', 'Adaptive algorithms']
    },
    {
      title: 'Comprehensive Protection',
      description: 'Multi-layered fraud protection across all channels and touchpoints',
      icon: Shield,
      details: ['Multi-channel monitoring', 'Behavioral analysis', 'Threat intelligence', 'Document verification']
    },
    {
      title: 'Regulatory Compliance',
      description: 'Built-in compliance with industry regulations and standards',
      icon: CheckCircle,
      details: ['PCI DSS compliance', 'GDPR compliance', 'AML/KYC support', 'Audit trails']
    },
    {
      title: 'Cost Effective',
      description: 'Significant cost savings through fraud prevention and automation',
      icon: DollarSign,
      details: ['90% fraud reduction', '85% fewer false positives', 'Automated processes', 'ROI within 6 months']
    }
  ];

  const fraudTypes = [
    {
      type: 'Payment Fraud',
      description: 'Credit card fraud, chargebacks, unauthorized transactions',
      icon: CreditCard,
      protection: 'Real-time transaction monitoring, behavioral analysis'
    },
    {
      type: 'Identity Theft',
      description: 'Account takeover, synthetic identity fraud, impersonation',
      icon: Users,
      protection: 'Identity verification, biometric authentication, document analysis'
    },
    {
      type: 'Synthetic Fraud',
      description: 'Fake identities, fabricated information, organized crime',
      icon: Eye,
      protection: 'Cross-reference validation, behavioral biometrics, network analysis'
    },
    {
      type: 'Account Takeover',
      description: 'Compromised credentials, credential stuffing, social engineering',
      icon: Lock,
      protection: 'Multi-factor authentication, device fingerprinting, risk scoring'
    },
    {
      type: 'Money Laundering',
      description: 'Structuring, layering, integration schemes',
      icon: Database,
      protection: 'Transaction monitoring, pattern analysis, regulatory reporting'
    },
    {
      type: 'Insurance Fraud',
      description: 'False claims, staged accidents, premium fraud',
      icon: Heart,
      protection: 'Claims analysis, document verification, investigation tools'
    }
  ];

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href={`${contactInfo.website}/services/ai-services/ai-fraud-detection-advanced`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-red-50 to-slate-50">
        {/* Header Section */}
        <section className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
          <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-8 w-8 mr-3" />
              <span className="text-lg font-semibold">Advanced AI Fraud Detection</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Protect Your Business from Fraud
            </h1>
            <p className="text-xl md:text-2xl text-red-100 mb-8 max-w-4xl mx-auto">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-lg">
              <a 
                href={`tel:${contactInfo.phone}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Phone className="h-5 w-5 mr-2" />
                {contactInfo.phone}
              </a>
              <a 
                href={`mailto:${contactInfo.email}`} 
                className="flex items-center bg-white/20 hover:bg-white/30 px-6 py-3 rounded-lg transition-colors"
              >
                <Mail className="h-5 w-5 mr-2" />
                {contactInfo.email}
              </a>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <stat.icon className="h-12 w-12 text-red-600" />
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fraud Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fraud Detection Solutions</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive AI-powered fraud detection platform with advanced analytics and real-time protection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {fraudServices.map((service, index) => (
                <div key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow p-8 border border-gray-100">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-500 rounded-xl flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">{service.name}</h3>
                      <span className="text-sm text-red-600 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  
                  <div className="space-y-3 mb-6">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-red-600 font-medium">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                  
                  <div className="bg-red-50 rounded-lg p-4 mb-6">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-lg font-bold text-red-600">{service.pricing}</span>
                      <span className="text-sm text-gray-500">{service.delivery}</span>
                    </div>
                    <div className="text-sm text-gray-600 mb-2">
                      <strong>Market Price:</strong> {service.marketPrice}
                    </div>
                    <div className="text-sm text-green-700 font-medium">
                      <strong>Benefits:</strong> {service.benefits}
                    </div>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.useCases.map((useCase, idx) => (
                        <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link 
                    href="/contact"
                    className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Get Security Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Fraud Types Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Fraud Types We Protect Against</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our AI fraud detection platform protects against all major types of fraud with advanced detection capabilities.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {fraudTypes.map((fraud, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <fraud.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{fraud.type}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{fraud.description}</p>
                  <div className="text-sm text-green-700 font-medium">
                    <strong>Protection:</strong> {fraud.protection}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Industries We Protect</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our fraud detection solutions are trusted by leading companies across various industries.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <industry.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900">{industry.name}</h3>
                  </div>
                  <p className="text-gray-600">{industry.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Our Fraud Detection?</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Advanced AI fraud detection platform with proven results and comprehensive protection.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white rounded-xl p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                      <benefit.icon className="w-8 h-8 text-red-600" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{benefit.title}</h3>
                      <p className="text-gray-600">{benefit.description}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-3">
                    {benefit.details.map((detail, idx) => (
                      <div key={idx} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-700">{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Ready to Protect Your Business?</h2>
            <p className="text-xl text-red-100 mb-8 max-w-3xl mx-auto">
              Contact us today for a free fraud detection consultation and see how you can protect your business from sophisticated fraud schemes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="flex flex-col items-center">
                <Phone className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Call Us</h3>
                <a href={`tel:${contactInfo.phone}`} className="text-red-100 hover:text-white">
                  {contactInfo.phone}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <Mail className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Email Us</h3>
                <a href={`mailto:${contactInfo.email}`} className="text-red-100 hover:text-white">
                  {contactInfo.email}
                </a>
              </div>
              <div className="flex flex-col items-center">
                <MapPin className="h-8 w-8 mb-4" />
                <h3 className="text-lg font-semibold mb-2">Visit Us</h3>
                <span className="text-red-100 text-center">{contactInfo.address}</span>
              </div>
            </div>
            
            <div className="bg-white/10 rounded-lg p-6 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold mb-4">Free Fraud Detection Consultation Includes:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Fraud risk assessment</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Custom solution design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>ROI projections and savings</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  <span>Implementation roadmap</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}