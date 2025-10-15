import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Lock, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Database,
  Target,
  Activity,
  Users,
  Clock,
  Globe,
  FileText
} from 'lucide-react';

const AICybersecurityMonitorPro: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time before they can cause damage.'
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your entire network infrastructure with instant alerts for any suspicious activity.'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Zero-Trust Security',
      description: 'Implement zero-trust architecture with continuous verification and least-privilege access controls.'
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: 'Vulnerability Assessment',
      description: 'Automated scanning and assessment of vulnerabilities across your entire IT infrastructure.'
    },
    {
      icon: <Lock className="w-6 h-6" />,
      title: 'Encryption Management',
      description: 'End-to-end encryption with automated key management and compliance monitoring.'
    },
    {
      icon: <Activity className="w-6 h-6" />,
      title: 'Incident Response',
      description: 'Automated incident response with AI-powered threat hunting and forensic analysis capabilities.'
    }
  ];

  const securityMetrics = [
    {
      title: 'Threats Blocked',
      value: '2.4M+',
      description: 'Malicious attacks prevented',
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: 'Response Time',
      value: '< 30s',
      description: 'Average threat response',
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: 'Uptime',
      value: '99.99%',
      description: 'System availability',
      icon: <Clock className="w-8 h-8" />
    },
    {
      title: 'Compliance',
      value: '100%',
      description: 'SOC 2 & ISO 27001',
      icon: <CheckCircle className="w-8 h-8" />
    }
  ];

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$149',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 devices',
        'Basic threat detection',
        'Email alerts',
        'Standard support',
        '1 admin account',
        '30-day log retention',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200 devices',
        'Advanced AI detection',
        'Real-time alerts',
        'Priority support',
        'Up to 5 admin accounts',
        '1-year log retention',
        'Advanced reporting',
        'API access',
        'Custom rules'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited devices',
        'Premium AI detection',
        '24/7 monitoring',
        'Dedicated support',
        'Unlimited admin accounts',
        'Unlimited log retention',
        'Custom reporting',
        'White-label options',
        'SLA guarantee',
        'On-site support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'David Martinez',
      company: 'SecureTech Corp',
      role: 'CISO',
      content: 'CyberGuard Pro has been a game-changer for our security posture. The AI detection is incredibly accurate and has prevented several sophisticated attacks.',
      rating: 5
    },
    {
      name: 'Lisa Thompson',
      company: 'FinanceFirst',
      role: 'IT Director',
      content: 'The 24/7 monitoring gives us peace of mind. We know our systems are protected around the clock with instant threat response.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'HealthData Systems',
      role: 'Security Manager',
      content: 'The compliance features are outstanding. We easily passed our SOC 2 audit with the automated reporting and monitoring.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="CyberGuard Pro - AI-Powered Cybersecurity Monitoring | Zion Tech Group"
        description="Advanced AI-powered cybersecurity monitoring and threat detection. 24/7 protection, real-time alerts, and automated incident response. Starting at $149/month."
        keywords="cybersecurity, AI security, threat detection, network monitoring, incident response, SOC 2 compliance, zero-trust security"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 animated-bg cyber-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-600/20 text-red-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Enterprise-Grade Security
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 futuristic-text">
                CyberGuard Pro
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Protect your business with AI-powered cybersecurity monitoring. Advanced threat detection, 
                24/7 monitoring, and automated incident response to keep your data secure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#pricing"
                  className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#demo"
                  className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
                >
                  View Demo
                  <Activity className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Free 30-day trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  SOC 2 compliant
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  24/7 support
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-morphism p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-red-600 to-pink-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Shield className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">2.4M+</span>
                    </div>
                    <p className="text-white text-sm">Threats Blocked</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-600 to-yellow-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Zap className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">< 30s</span>
                    </div>
                    <p className="text-white text-sm">Response Time</p>
                  </div>
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Clock className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">99.99%</span>
                    </div>
                    <p className="text-white text-sm">Uptime</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <CheckCircle className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">100%</span>
                    </div>
                    <p className="text-white text-sm">Compliance</p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg flex items-center justify-center">
                  <Shield className="w-12 h-12 text-red-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              Trusted by Security Teams Worldwide
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our AI-powered security platform delivers measurable results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {securityMetrics.map((metric, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow group text-center">
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform flex justify-center">
                  {metric.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{metric.value}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{metric.title}</h3>
                <p className="text-gray-300 text-sm">{metric.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 futuristic-text">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive cybersecurity protection powered by artificial intelligence
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow group">
                <div className="text-red-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 futuristic-text">
              Flexible Security Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the security level that matches your organization's needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`glass-morphism p-8 rounded-xl hover-glow relative ${
                plan.popular ? 'ring-2 ring-red-500' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white hover-glow'
                      : 'glass-morphism text-white hover:bg-slate-700/50'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              Trusted by Security Professionals
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what security experts say about CyberGuard Pro
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-red-900/50 to-orange-900/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 futuristic-text">
            Secure Your Business Today
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Don't wait for a breach. Start protecting your business with AI-powered cybersecurity
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AICybersecurityMonitorPro;
