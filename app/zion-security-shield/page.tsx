import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Sparkles,
  Monitor,
  Database,
  Globe,
  Smartphone,
  Award,
  Target,
  Brain,
  Cpu,
  Users,
  Clock,
  TrendingUp,
  Zap,
  FileText
} from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticBackground from '../components/FuturisticBackground';
import ResponsiveContainer from '../components/ResponsiveContainer';

const ZionSecurityShieldPage = () => {
  const features = [
    {
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and advanced persistent threats.',
      icon: <Brain className="w-6 h-6" />,
      benefits: ['Real-time threat detection', 'Zero-day attack prevention', 'Behavioral analysis', 'Anomaly detection']
    },
    {
      title: 'Real-time Security Monitoring',
      description: '24/7 monitoring of your entire infrastructure with instant alerts and automated response to security incidents.',
      icon: <Monitor className="w-6 h-6" />,
      benefits: ['24/7 monitoring', 'Instant alerts', 'Automated response', 'Comprehensive coverage']
    },
    {
      title: 'Automated Incident Response',
      description: 'Intelligent automation that responds to security incidents within seconds, containing threats and minimizing damage.',
      icon: <Zap className="w-6 h-6" />,
      benefits: ['Instant response', 'Automated containment', 'Damage minimization', 'Recovery assistance']
    },
    {
      title: 'Vulnerability Scanning',
      description: 'Comprehensive vulnerability assessment that identifies and prioritizes security weaknesses across your entire infrastructure.',
      icon: <Target className="w-6 h-6" />,
      benefits: ['Continuous scanning', 'Risk prioritization', 'Remediation guidance', 'Compliance reporting']
    },
    {
      title: 'Compliance Reporting',
      description: 'Automated compliance reporting for GDPR, HIPAA, SOX, and other regulatory requirements with detailed audit trails.',
      icon: <FileText className="w-6 h-6" />,
      benefits: ['Multi-standard compliance', 'Automated reporting', 'Audit trails', 'Regulatory updates']
    },
    {
      title: 'Multi-layer Protection',
      description: 'Comprehensive security stack including firewall, antivirus, intrusion detection, and data encryption for complete protection.',
      icon: <Shield className="w-6 h-6" />,
      benefits: ['Firewall protection', 'Antivirus scanning', 'Intrusion detection', 'Data encryption']
    }
  ];

  const securityLayers = [
    {
      name: 'Network Security',
      description: 'Advanced firewall and intrusion detection systems',
      icon: <Globe className="w-8 h-8" />,
      coverage: '100%'
    },
    {
      name: 'Endpoint Protection',
      description: 'Comprehensive protection for all devices and endpoints',
      icon: <Smartphone className="w-8 h-8" />,
      coverage: '100%'
    },
    {
      name: 'Data Security',
      description: 'Encryption and data loss prevention measures',
      icon: <Database className="w-8 h-8" />,
      coverage: '100%'
    },
    {
      name: 'Application Security',
      description: 'Secure coding practices and vulnerability testing',
      icon: <Cpu className="w-8 h-8" />,
      coverage: '100%'
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$499',
      period: '/month',
      description: 'Basic security protection for small businesses',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall protection',
        '24/7 monitoring',
        'Email support',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$999',
      period: '/month',
      description: 'Advanced security for growing businesses',
      features: [
        'AI-powered threat detection',
        'Advanced monitoring',
        'Automated response',
        'Vulnerability scanning',
        'Priority support',
        'Compliance reporting',
        'API access',
        'Custom integrations'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1999',
      period: '/month',
      description: 'Complete security solution for large organizations',
      features: [
        'Full AI security suite',
        'Dedicated security team',
        'Custom security policies',
        'Advanced threat hunting',
        '24/7 dedicated support',
        'Full compliance suite',
        'White-label reporting',
        'On-premise deployment'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'Financial Services Corp',
      role: 'CISO',
      content: 'Zion Security Shield has been our first line of defense against cyber threats. The AI detection prevented 3 major attacks in the last quarter alone.',
      rating: 5,
      avatar: 'DM'
    },
    {
      name: 'Lisa Thompson',
      company: 'Healthcare Solutions',
      role: 'IT Director',
      content: 'The automated incident response saved us from a potential data breach. The system contained the threat within minutes and alerted our team.',
      rating: 5,
      avatar: 'LT'
    },
    {
      name: 'Robert Kim',
      company: 'E-commerce Platform',
      role: 'Security Manager',
      content: 'The compliance reporting feature has made our audits so much easier. We can now demonstrate our security posture with detailed reports.',
      rating: 5,
      avatar: 'RK'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Rate', icon: <Shield className="w-6 h-6" /> },
    { number: '< 30s', label: 'Response Time', icon: <Zap className="w-6 h-6" /> },
    { number: '1000+', label: 'Threats Blocked Daily', icon: <AlertTriangle className="w-6 h-6" /> },
    { number: '24/7', label: 'Security Operations Center', icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <FuturisticBackground />
      <EnhancedSEO
        title="Zion Security Shield - AI-Powered Cybersecurity Platform | Zion Tech Group"
        description="Protect your business with Zion Security Shield. Advanced AI-powered threat detection, automated response, and comprehensive security monitoring for modern enterprises."
        keywords="cybersecurity, threat detection, security monitoring, AI security, incident response, vulnerability scanning, compliance, data protection"
        canonical="https://ziontechgroup.com/zion-security-shield"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-6">
            <Shield className="w-4 h-4 text-red-400 mr-2" />
            <span className="text-red-400 text-sm font-medium">AI-Powered Cybersecurity</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400">
              Zion Security Shield
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed text-center">
            Protect your business with our AI-powered cybersecurity platform. Advanced threat detection, 
            automated response, and comprehensive security monitoring for modern enterprises.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Watch Demo
              <Monitor className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Security Layers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Multi-Layer Security Protection
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Comprehensive security coverage across all aspects of your infrastructure
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityLayers.map((layer, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  {layer.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                  {layer.name}
                </h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {layer.description}
                </p>
                <div className="text-2xl font-bold text-red-400">{layer.coverage}</div>
                <div className="text-xs text-gray-400">Coverage</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Everything you need to protect your business from cyber threats
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="space-y-2">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security plan that fits your business needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
                  plan.popular 
                    ? 'border-red-500/50 shadow-red-500/20' 
                    : 'border-white/20 hover:border-red-500/30'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-300 ml-1">{plan.period}</span>
                  </div>
                  <p className="text-gray-300 text-sm mt-2">{plan.description}</p>
                </div>
                
                <div className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700 shadow-lg hover:shadow-red-500/25'
                      : 'border border-red-400 text-red-400 hover:bg-red-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Security Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how Zion Security Shield is protecting businesses worldwide
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center text-white font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
                
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 italic leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Don't wait for a cyber attack. Protect your business with Zion Security Shield 
            and sleep peacefully knowing your data is secure.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
            >
              Get Security Assessment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              Schedule Demo
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ZionSecurityShieldPage;