import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Lock, 
  Eye, 
  AlertTriangle, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Clock, 
  Users, 
  Zap,
  BarChart3,
  Settings,
  Globe,
  Smartphone,
  Database,
  FileText,
  Mail,
  Phone,
  MapPin
} from 'lucide-react';

const ZionAICybersecuritySuitePage: React.FC = () => {
  const features = [
    {
      title: 'AI-Powered Threat Detection',
      description: 'Advanced machine learning algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and sophisticated malware.',
      icon: <Shield className="w-8 h-8" />,
      benefits: ['Real-time monitoring', 'Zero-day protection', '99.9% accuracy', 'Automated response']
    },
    {
      title: 'Automated Security Audits',
      description: 'Comprehensive security assessments that identify vulnerabilities, compliance gaps, and security risks across your entire infrastructure.',
      icon: <Eye className="w-8 h-8" />,
      benefits: ['Continuous monitoring', 'Compliance reporting', 'Risk assessment', 'Remediation guidance']
    },
    {
      title: 'Intelligent Incident Response',
      description: 'AI-driven incident response that automatically contains threats, notifies stakeholders, and initiates recovery procedures.',
      icon: <AlertTriangle className="w-8 h-8" />,
      benefits: ['Auto-containment', 'Instant alerts', 'Recovery automation', 'Forensic analysis']
    },
    {
      title: 'Advanced Encryption Management',
      description: 'End-to-end encryption for all data with automated key management, secure communication channels, and compliance monitoring.',
      icon: <Lock className="w-8 h-8" />,
      benefits: ['End-to-end encryption', 'Key management', 'Secure channels', 'Compliance ready']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199/month',
      description: 'Perfect for small businesses',
      features: [
        'Basic threat detection',
        'Email security',
        'Firewall management',
        '24/7 monitoring',
        'Basic reporting',
        'Up to 25 users'
      ],
      popular: false,
      marketPrice: '$499/month',
      savings: '60%'
    },
    {
      name: 'Professional',
      price: '$399/month',
      description: 'Ideal for growing companies',
      features: [
        'Advanced AI detection',
        'Multi-layer protection',
        'Compliance reporting',
        'Incident response',
        'Advanced analytics',
        'Up to 100 users',
        'Priority support'
      ],
      popular: true,
      marketPrice: '$999/month',
      savings: '60%'
    },
    {
      name: 'Enterprise',
      price: '$799/month',
      description: 'For large organizations',
      features: [
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced forensics',
        'Custom reporting',
        'Unlimited users',
        'White-label options'
      ],
      popular: false,
      marketPrice: '$1999/month',
      savings: '60%'
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CTO',
      content: 'Zion AI Cybersecurity Suite has transformed our security posture. The AI threat detection caught several sophisticated attacks that traditional tools missed.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      company: 'E-commerce Solutions',
      role: 'Security Director',
      content: 'The automated incident response saved us hours of manual work. Our security team can now focus on strategic initiatives instead of routine tasks.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      company: 'Financial Services Corp',
      role: 'CISO',
      content: 'Compliance reporting has never been easier. The suite automatically generates all the reports we need for audits and regulatory requirements.',
      rating: 5
    }
  ];

  const stats = [
    { number: '99.9%', label: 'Threat Detection Accuracy', icon: <Shield className="w-6 h-6" /> },
    { number: '24/7', label: 'Monitoring & Response', icon: <Clock className="w-6 h-6" /> },
    { number: '50,000+', label: 'Threats Blocked Daily', icon: <AlertTriangle className="w-6 h-6" /> },
    { number: '99.9%', label: 'Uptime SLA', icon: <CheckCircle className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Zion AI Cybersecurity Suite - Advanced AI-Powered Security | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI-powered cybersecurity suite with threat detection, automated incident response, and compliance monitoring. Protect your business with cutting-edge security technology." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security automation, compliance monitoring, incident response, data protection, enterprise security" />
        <link rel="canonical" href="https://ziontechgroup.com/zion-ai-cybersecurity-suite" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden cyber-grid-enhanced quantum-dots">
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 border border-red-500/30 mb-8 neon-border">
              <Shield className="w-5 h-5 text-red-400 mr-2 animate-pulse" />
              <span className="text-red-400 text-sm font-medium">#1 AI Cybersecurity Solution 2024</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight holographic-text">
              Zion AI Cybersecurity Suite
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Advanced AI-powered cybersecurity protection that defends your business against sophisticated threats with 
              <span className="text-red-400 font-semibold"> 99.9% accuracy and automated response capabilities.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300 group hover:scale-105"
              >
                Watch Security Demo
                <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group data-stream">
                  <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-red-500/20 to-orange-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 neon-border">
                    {stat.icon}
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 holographic-text">{stat.number}</div>
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
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Comprehensive AI-powered security solutions designed to protect your business from evolving cyber threats
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-16 h-16 rounded-lg bg-gradient-to-r from-red-500 to-orange-500 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                      {feature.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-red-400 transition-colors">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300 mb-4 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {feature.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-3 py-1 bg-red-500/10 text-red-300 text-sm rounded-full">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-red-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Choose Your Security Plan
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Flexible pricing options designed to protect businesses of all sizes
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10 ${
                    plan.popular 
                      ? 'border-red-500/50 ring-2 ring-red-500/20' 
                      : 'border-white/20 hover:border-red-500/40'
                  }`}
                >
                  {plan.popular && (
                    <div className="text-center mb-6">
                      <span className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center justify-center space-x-1">
                        <Star className="w-4 h-4" />
                        <span>Most Popular</span>
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-center justify-center space-x-2 mb-2">
                      <span className="text-4xl font-bold text-red-400">{plan.price}</span>
                      <span className="text-gray-400 line-through">{plan.marketPrice}</span>
                    </div>
                    <span className="bg-green-500/20 text-green-400 px-3 py-1 rounded-full text-sm font-semibold">
                      Save {plan.savings}
                    </span>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-orange-600 text-white hover:from-red-600 hover:to-orange-700'
                        : 'border border-red-500 text-red-400 hover:bg-red-500/10'
                    }`}
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by Security Professionals
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what security experts say about our AI-powered cybersecurity solutions
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
                  <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Secure Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Don't wait for a cyber attack. Protect your business with the most advanced AI-powered security suite available.
            </p>
            
            {/* Contact Information */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-red-400">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Phone className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Phone</h3>
                <p className="text-red-400">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-semibold mb-2">Address</h3>
                <p className="text-red-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-red-500 to-orange-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-orange-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-red-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-red-400 text-red-400 px-8 py-4 rounded-lg font-semibold hover:bg-red-400/10 transition-all duration-300 group hover:scale-105"
              >
                Schedule Security Demo
                <Shield className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAICybersecuritySuitePage;