import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Brain, 
  AlertTriangle, 
  BarChart3, 
  ArrowRight,
  CheckCircle,
  Star,
  Award,
  Clock,
  Globe,
  Users,
  Sparkles,
  Target,
  TrendingUp,
  Lock,
  Eye,
  FileText,
  Zap,
  Activity,
  Database,
  Search,
  Bell,
  Settings,
  Play,
  Pause,
  RefreshCw,
  DollarSign,
  CreditCard,
  Banknote,
  TrendingDown
} from 'lucide-react';

const AIFinancialCrimeDetectionProPage: React.FC = () => {
  const features = [
    {
      title: 'Real-Time Transaction Monitoring',
      description: 'Advanced AI algorithms monitor all transactions in real-time to detect suspicious patterns and potential fraud.',
      icon: <Activity className="w-6 h-6" />,
      color: 'from-red-500 to-pink-500'
    },
    {
      title: 'Machine Learning Fraud Detection',
      description: 'Self-learning AI models that continuously improve fraud detection accuracy using behavioral patterns and historical data.',
      icon: <Brain className="w-6 h-6" />,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'AML Compliance Automation',
      description: 'Automated Anti-Money Laundering compliance with real-time screening against global watchlists and sanctions.',
      icon: <Shield className="w-6 h-6" />,
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Risk Scoring & Assessment',
      description: 'Comprehensive risk scoring for customers, transactions, and accounts with detailed risk profiles and recommendations.',
      icon: <Target className="w-6 h-6" />,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Advanced Analytics Dashboard',
      description: 'Comprehensive analytics and reporting dashboard with real-time insights, trends, and compliance metrics.',
      icon: <BarChart3 className="w-6 h-6" />,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Regulatory Reporting',
      description: 'Automated generation of regulatory reports for SAR, CTR, and other compliance requirements across jurisdictions.',
      icon: <FileText className="w-6 h-6" />,
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic',
      price: '$299',
      period: '/month',
      description: 'Perfect for small financial institutions',
      features: [
        'Up to 10,000 transactions/month',
        'Basic fraud detection',
        'Standard risk scoring',
        'Email support',
        'Basic reporting',
        '1 user account'
      ],
      popular: false,
      color: 'from-gray-500 to-gray-600'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing financial services',
      features: [
        'Up to 100,000 transactions/month',
        'Advanced AI fraud detection',
        'Real-time monitoring',
        'Priority support',
        'Advanced analytics',
        'Up to 10 user accounts',
        'API access',
        'Custom rules engine'
      ],
      popular: true,
      color: 'from-cyan-500 to-purple-600'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large financial institutions',
      features: [
        'Unlimited transactions',
        'Enterprise AI features',
        'Custom ML models',
        '24/7 dedicated support',
        'Advanced compliance tools',
        'Unlimited user accounts',
        'White-label options',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false,
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'Regional Bank',
      role: 'Chief Risk Officer',
      content: 'Zion AI Financial Crime Detection has reduced our false positives by 85% while catching 99.7% of actual fraud cases. Incredible technology!',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Jennifer Liu',
      company: 'FinTech Startup',
      role: 'Compliance Director',
      content: 'The automated compliance reporting saves us 40+ hours per week. The AI accuracy is outstanding and the interface is intuitive.',
      rating: 5,
      avatar: 'JL'
    },
    {
      name: 'Robert Thompson',
      company: 'Credit Union',
      role: 'Security Manager',
      content: 'Implementation was seamless and the results were immediate. Our fraud detection capabilities have been transformed.',
      rating: 5,
      avatar: 'RT'
    }
  ];

  const stats = [
    { number: '99.7%', label: 'Fraud Detection Accuracy', icon: <Target className="w-6 h-6" /> },
    { number: '85%', label: 'Reduction in False Positives', icon: <TrendingDown className="w-6 h-6" /> },
    { number: '50+', label: 'Countries Supported', icon: <Globe className="w-6 h-6" /> },
    { number: '24/7', label: 'Real-Time Monitoring', icon: <Clock className="w-6 h-6" /> }
  ];

  const complianceFeatures = [
    { name: 'FATCA Compliance', status: 'Supported' },
    { name: 'CRS Reporting', status: 'Supported' },
    { name: 'GDPR Compliance', status: 'Supported' },
    { name: 'PCI DSS', status: 'Certified' },
    { name: 'SOC 2 Type II', status: 'Certified' },
    { name: 'ISO 27001', status: 'Certified' }
  ];

  return (
    <>
      <Helmet>
        <title>AI Financial Crime Detection Pro - Advanced Fraud Prevention | Zion Tech Group</title>
        <meta name="description" content="Protect your financial institution with AI-powered fraud detection, AML compliance, and risk assessment. Advanced machine learning algorithms for real-time financial crime prevention." />
        <meta name="keywords" content="AI fraud detection, financial crime prevention, AML compliance, risk assessment, fraud analytics, financial security, anti-money laundering" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-financial-crime-detection-pro" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 mb-6">
              <Shield className="w-4 h-4 text-red-400 mr-2" />
              <span className="text-red-400 text-sm font-medium">Enterprise-Grade Security</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-pink-400 to-purple-400">
                AI Financial Crime Detection Pro
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Protect your financial institution with advanced AI-powered fraud detection, AML compliance automation, and real-time risk assessment. 
              Stay ahead of sophisticated financial crimes with cutting-edge machine learning technology.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center space-x-2 group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                <span>Request Demo</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <span>View Security Report</span>
                <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                Advanced AI Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Leverage cutting-edge artificial intelligence and machine learning to detect, prevent, and investigate financial crimes 
                with unprecedented accuracy and speed.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-red-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Regulatory Compliance & Certifications
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Meet global regulatory requirements with our comprehensive compliance framework and industry certifications.
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
              {complianceFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center border border-white/20 hover:border-red-500/40 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">{feature.name}</h3>
                  <p className="text-green-400 text-sm font-medium">{feature.status}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Enterprise Security Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security level that matches your institution's needs and regulatory requirements.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                    plan.popular 
                      ? 'border-red-500/50 ring-2 ring-red-500/20 shadow-2xl shadow-red-500/10' 
                      : 'border-white/20 hover:border-red-500/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-1">
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
                  
                  <ul className="space-y-4 mb-8">
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
                        ? 'bg-gradient-to-r from-red-500 to-pink-600 text-white hover:from-red-600 hover:to-pink-700 shadow-lg hover:shadow-red-500/25'
                        : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                    }`}
                  >
                    <span>Contact Sales</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Financial Leaders
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security professionals say about our AI Financial Crime Detection platform
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-600 rounded-full flex items-center justify-center text-white font-semibold mr-4">
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
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-pink-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Financial Future Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a security breach. Protect your institution with the most advanced AI-powered financial crime detection system available. 
              Schedule a confidential demo with our security experts.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-pink-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-pink-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                <span>Schedule Security Demo</span>
                <Shield className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                <span>Download Security Report</span>
                <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AIFinancialCrimeDetectionProPage;