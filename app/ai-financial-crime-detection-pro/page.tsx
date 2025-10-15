import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  AlertTriangle, 
  BarChart3, 
  Users, 
  ArrowRight,
  CheckCircle,
  Star,
  Clock,
  Globe,
  Smartphone,
  Monitor,
  Target,
  Award,
  TrendingUp,
  MessageSquare,
  Send,
  Filter,
  Search,
  Settings,
  Bell,
  FileText,
  Calendar,
  DollarSign,
  Lock,
  Eye,
  Zap,
  Database,
  Activity,
  CreditCard,
  Banknote,
  TrendingDown,
  AlertCircle
} from 'lucide-react';

const AIFinancialCrimeDetectionProPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms analyze transaction patterns, user behavior, and network data to identify suspicious activities in real-time.',
      benefits: ['Real-time Analysis', 'Pattern Recognition', 'Behavioral Analytics', 'Anomaly Detection']
    },
    {
      icon: Shield,
      title: 'Multi-Layer Security',
      description: 'Comprehensive security framework with fraud detection, money laundering prevention, and compliance monitoring across all financial channels.',
      benefits: ['Fraud Prevention', 'AML Compliance', 'KYC Verification', 'Risk Assessment']
    },
    {
      icon: BarChart3,
      title: 'Advanced Analytics Dashboard',
      description: 'Real-time monitoring dashboard with customizable alerts, detailed reporting, and predictive analytics for proactive risk management.',
      benefits: ['Real-time Monitoring', 'Custom Alerts', 'Predictive Analytics', 'Compliance Reports']
    },
    {
      icon: Zap,
      title: 'Automated Response System',
      description: 'Intelligent automation that can freeze suspicious transactions, trigger investigations, and notify relevant authorities automatically.',
      benefits: ['Auto-Freeze Transactions', 'Investigation Triggers', 'Authority Notifications', 'Workflow Automation']
    }
  ];

  const detectionCapabilities = [
    {
      category: 'Fraud Detection',
      icon: CreditCard,
      description: 'Detect credit card fraud, identity theft, and account takeover attempts',
      accuracy: '99.7%',
      examples: ['Card Cloning', 'Phishing Attacks', 'Account Takeover', 'Synthetic Identity']
    },
    {
      category: 'Money Laundering',
      icon: Banknote,
      description: 'Identify suspicious transaction patterns and money laundering schemes',
      accuracy: '98.9%',
      examples: ['Structuring', 'Smurfing', 'Trade-Based Laundering', 'Cryptocurrency Mixing']
    },
    {
      category: 'Terrorist Financing',
      icon: AlertTriangle,
      description: 'Detect and prevent terrorist financing activities and sanctions violations',
      accuracy: '99.1%',
      examples: ['Sanctions Screening', 'Hawala Networks', 'Charity Fronts', 'Cryptocurrency Tracking']
    },
    {
      category: 'Insider Trading',
      icon: Users,
      description: 'Monitor employee activities and detect insider trading violations',
      accuracy: '97.8%',
      examples: ['Trading Patterns', 'Information Leaks', 'Conflicts of Interest', 'Market Manipulation']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$499',
      period: '/month',
      description: 'For small financial institutions',
      features: [
        'Up to 10,000 transactions/month',
        'Basic AI detection',
        'Standard reporting',
        'Email alerts',
        'Basic dashboard',
        'Standard support'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$1,299',
      period: '/month',
      description: 'For mid-size financial services',
      features: [
        'Up to 100,000 transactions/month',
        'Advanced AI detection',
        'Custom reporting',
        'Real-time alerts',
        'Advanced dashboard',
        'API access',
        'Priority support',
        'Custom rules engine'
      ],
      popular: true,
      cta: 'Start Free Trial'
    },
    {
      name: 'Enterprise',
      price: '$2,999',
      period: '/month',
      description: 'For large financial institutions',
      features: [
        'Unlimited transactions',
        'Full AI suite',
        'White-label options',
        'Custom integrations',
        '24/7 dedicated support',
        'Advanced security',
        'Custom development',
        'SLA guarantee',
        'On-premise deployment'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];

  const complianceStandards = [
    { name: 'PCI DSS', description: 'Payment Card Industry Data Security Standard', status: 'Compliant' },
    { name: 'SOX', description: 'Sarbanes-Oxley Act Compliance', status: 'Compliant' },
    { name: 'GDPR', description: 'General Data Protection Regulation', status: 'Compliant' },
    { name: 'CCPA', description: 'California Consumer Privacy Act', status: 'Compliant' },
    { name: 'FATCA', description: 'Foreign Account Tax Compliance Act', status: 'Compliant' },
    { name: 'Basel III', description: 'Basel III Capital Requirements', status: 'Compliant' }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'First National Bank',
      role: 'Chief Risk Officer',
      content: 'Zion AI Financial Crime Detection has reduced our false positives by 85% while catching 40% more actual fraud cases. The ROI was immediate and substantial.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Jennifer Liu',
      company: 'Global Credit Union',
      role: 'Compliance Director',
      content: 'The automated compliance reporting has saved us hundreds of hours monthly. The system is incredibly accurate and easy to use.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'Robert Thompson',
      company: 'Investment Securities Inc.',
      role: 'Security Manager',
      content: 'We\'ve prevented over $2M in fraudulent transactions in the first quarter alone. The AI detection is incredibly sophisticated.',
      rating: 5,
      avatar: 'RT'
    }
  ];

  const securityFeatures = [
    { name: 'End-to-End Encryption', icon: Lock, description: 'All data encrypted in transit and at rest' },
    { name: 'Zero-Trust Architecture', icon: Shield, description: 'Never trust, always verify security model' },
    { name: 'Multi-Factor Authentication', icon: Key, description: 'Advanced MFA for all system access' },
    { name: 'Audit Logging', icon: FileText, description: 'Comprehensive audit trails for all activities' },
    { name: 'Data Residency', icon: Globe, description: 'Data stored in compliant regional centers' },
    { name: 'Penetration Testing', icon: Target, description: 'Regular security assessments and testing' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Crime Detection Pro - Advanced Fraud Prevention | Zion Tech Group</title>
        <meta name="description" content="Protect your financial institution with AI-powered fraud detection, money laundering prevention, and compliance monitoring. Advanced security for modern finance." />
        <meta name="keywords" content="AI fraud detection, financial crime prevention, money laundering detection, compliance monitoring, financial security, fraud prevention software" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-crime-detection-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
                <Shield className="w-4 h-4 text-red-400 mr-2" />
                <span className="text-red-400 text-sm font-medium">Enterprise Security Solution</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                AI Financial Crime <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400">Detection Pro</span>
              </h1>
              
              <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Advanced AI-powered financial crime detection and prevention system. Protect your institution from fraud, 
                money laundering, and compliance violations with cutting-edge machine learning and real-time monitoring.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Watch Demo</span>
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-400 mb-2">99.7%</div>
                  <div className="text-gray-300 text-sm">Detection Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-400 mb-2">85%</div>
                  <div className="text-gray-300 text-sm">Reduced False Positives</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-400 mb-2">40%</div>
                  <div className="text-gray-300 text-sm">More Fraud Caught</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-yellow-400 mb-2">24/7</div>
                  <div className="text-gray-300 text-sm">Real-time Monitoring</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Detection Capabilities */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Advanced Detection Capabilities
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive AI-powered detection across all types of financial crimes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {detectionCapabilities.map((capability, index) => {
                const IconComponent = capability.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300 group">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white group-hover:text-red-400 transition-colors">
                          {capability.category}
                        </h3>
                        <div className="text-green-400 font-semibold">Accuracy: {capability.accuracy}</div>
                      </div>
                    </div>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {capability.description}
                    </p>
                    
                    <div className="space-y-2">
                      <h4 className="text-sm font-semibold text-red-400 mb-2">Detection Examples:</h4>
                      {capability.examples.map((example, exampleIndex) => (
                        <div key={exampleIndex} className="flex items-center space-x-2">
                          <AlertCircle className="w-4 h-4 text-red-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{example}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise-Grade Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Built for financial institutions that demand the highest security and compliance standards
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => {
                const IconComponent = feature.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-red-400/50 transition-all duration-300 group">
                    <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                      {feature.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Regulatory Compliance
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet all major financial regulations and compliance requirements
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {complianceStandards.map((standard, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-green-400/50 transition-all duration-300 text-center group">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {standard.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-2">{standard.description}</p>
                  <span className="text-green-400 text-xs font-semibold">{standard.status}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Features */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise Security
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Bank-level security with advanced encryption and compliance features
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {securityFeatures.map((security, index) => {
                const IconComponent = security.icon;
                return (
                  <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-blue-400/50 transition-all duration-300 group">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                      {security.name}
                    </h3>
                    <p className="text-gray-300 text-sm">{security.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Enterprise Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing plans designed for financial institutions of all sizes
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 ${
                    plan.popular
                      ? 'border-red-500/50 ring-2 ring-red-500/20 relative'
                      : 'border-white/20 hover:border-red-400/50'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                        : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                    }`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Trusted by Financial Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about Zion AI Financial Crime Detection Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-red-400/50 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic leading-relaxed">
                    "{testimonial.content}"
                  </p>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-red-500 to-orange-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-2xl p-12 border border-red-500/20">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Protect Your Financial Institution Today
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Join leading financial institutions who trust Zion AI Financial Crime Detection Pro 
                to protect their assets and maintain regulatory compliance.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-red-500/25 hover:scale-105"
                >
                  <span>Start Free Trial</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Monitor className="w-5 h-5" />
                  <span>Schedule Demo</span>
                </Link>
              </div>
              
              <div className="mt-8 text-sm text-gray-400">
                <p>✓ 30-day free trial • ✓ No setup fees • ✓ 24/7 support • ✓ SOC 2 compliant</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFinancialCrimeDetectionProPage;