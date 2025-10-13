import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Lock, 
  AlertTriangle, 
  Zap, 
  Sparkles,
  BarChart3,
  Users,
  Globe,
  Smartphone,
  Mail,
  Phone,
  MapPin,
  Database,
  Settings,
  Cpu,
  Network,
  HardDrive,
  Monitor,
  Activity,
  TrendingUp,
  Clock,
  DollarSign,
  Eye,
  Search,
  FileText
} from 'lucide-react';

const CybersecurityAuditPage = () => {
  const features = [
    {
      title: 'Security Audits',
      description: 'Comprehensive security assessments to identify vulnerabilities and risks',
      icon: <Search className="w-6 h-6" />,
      details: ['Vulnerability scanning', 'Penetration testing', 'Risk assessment', 'Security gap analysis']
    },
    {
      title: 'Compliance Assessment',
      description: 'Ensure your organization meets industry standards and regulatory requirements',
      icon: <FileText className="w-6 h-6" />,
      details: ['GDPR compliance', 'HIPAA compliance', 'SOX compliance', 'PCI DSS compliance']
    },
    {
      title: 'Vulnerability Testing',
      description: 'Identify and assess security weaknesses in your systems and applications',
      icon: <AlertTriangle className="w-6 h-6" />,
      details: ['Automated scanning', 'Manual testing', 'Code review', 'Configuration analysis']
    },
    {
      title: 'Penetration Testing',
      description: 'Simulate real-world attacks to test your security defenses',
      icon: <Shield className="w-6 h-6" />,
      details: ['Network penetration', 'Web application testing', 'Social engineering', 'Physical security']
    },
    {
      title: 'Risk Assessment',
      description: 'Evaluate potential security risks and their impact on your business',
      icon: <BarChart3 className="w-6 h-6" />,
      details: ['Risk identification', 'Impact analysis', 'Likelihood assessment', 'Risk mitigation']
    },
    {
      title: 'Remediation Planning',
      description: 'Develop actionable plans to address identified security issues',
      icon: <Settings className="w-6 h-6" />,
      details: ['Priority ranking', 'Implementation timeline', 'Resource allocation', 'Progress tracking']
    }
  ];

  const pricingPlans = [
    {
      name: 'Basic Audit',
      price: '$349',
      period: '/month',
      description: 'Essential security assessment for small businesses',
      features: [
        'Vulnerability scan',
        'Basic compliance check',
        'Security report',
        'Email support',
        '30-day follow-up',
        'Basic recommendations'
      ],
      popular: false,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Professional Audit',
      price: '$699',
      period: '/month',
      description: 'Comprehensive security assessment for growing businesses',
      features: [
        'Full vulnerability assessment',
        'Penetration testing',
        'Compliance audit',
        'Priority support',
        'Detailed remediation plan',
        'Quarterly follow-up',
        'Security training',
        'API access'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Enterprise Audit',
      price: '$1,299',
      period: '/month',
      description: 'Complete security program for large organizations',
      features: [
        'Comprehensive security audit',
        'Advanced penetration testing',
        'Full compliance assessment',
        '24/7 phone support',
        'Custom remediation plan',
        'Monthly follow-up',
        'Security training program',
        'Dedicated security consultant',
        'On-site assessment',
        'Executive reporting'
      ],
      popular: false,
      color: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Vulnerability Detection', icon: <Eye className="w-6 h-6" /> },
    { number: '50+', label: 'Compliance Standards', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Security Monitoring', icon: <Clock className="w-6 h-6" /> },
    { number: '100%', label: 'Client Satisfaction', icon: <Star className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: 'Sarah Williams',
      company: 'Healthcare Solutions',
      role: 'CISO',
      content: 'Zion Tech Group\'s cybersecurity audit helped us achieve HIPAA compliance and significantly improved our security posture.',
      rating: 5,
      avatar: 'SW'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Financial Services',
      role: 'IT Director',
      content: 'Their penetration testing revealed critical vulnerabilities we never knew existed. The remediation plan was comprehensive and actionable.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Jennifer Lee',
      company: 'E-commerce Platform',
      role: 'Security Manager',
      content: 'The compliance assessment was thorough and helped us prepare for our PCI DSS audit. We passed with flying colors.',
      rating: 5,
      avatar: 'JL'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Cybersecurity Audit & Compliance - Zion Tech Group | Security Assessment Services</title>
        <meta
          name="description"
          content="Comprehensive cybersecurity audits with compliance assessment, vulnerability testing, and security recommendations. Protect your business with expert security services. Starting at $349/month."
        />
        <meta
          name="keywords"
          content="cybersecurity audit, security assessment, penetration testing, vulnerability testing, compliance audit, HIPAA, GDPR, PCI DSS, security consulting, risk assessment"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
                  <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
                  <span className="text-cyan-400 text-sm font-medium">Security Assessment Services</span>
                </div>
                
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
                    Cybersecurity Audit
                  </span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                  Comprehensive cybersecurity audits with compliance assessment, vulnerability testing, and security recommendations. 
                  Protect your business with expert security services and ensure regulatory compliance.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/contact"
                    className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                  >
                    Get Security Assessment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/demo"
                    className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
                  >
                    View Sample Report
                    <FileText className="w-5 h-5 ml-2 group-hover:scale-110 transition-transform" />
                  </Link>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-2 gap-6">
                  {stats.map((stat, index) => (
                    <div key={index} className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-2">
                        {stat.icon}
                      </div>
                      <div className="text-2xl font-bold text-white">{stat.number}</div>
                      <div className="text-gray-300 text-sm">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                  <div className="aspect-video bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                    <Shield className="w-16 h-16 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Security Assessment Dashboard</h3>
                  <p className="text-gray-300 text-sm">Comprehensive security monitoring and compliance tracking</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Comprehensive Security Services
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to assess, protect, and secure your digital infrastructure.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.details.map((detail, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Security Audit Packages
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the security assessment package that best fits your organization's needs.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative ${
                    plan.popular ? 'ring-2 ring-cyan-500' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center mb-2">
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg hover:shadow-cyan-500/25'
                        : 'border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Client Security Success
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See how organizations are using our security services to protect their digital assets.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
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

        {/* Contact Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Secure Your Business?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Start your security assessment today. Our experts will help you identify and address security vulnerabilities.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Security Assessment
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/demo"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default CybersecurityAuditPage;