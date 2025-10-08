import React from 'react';
import { Helmet } from 'react-helmet-async';
import { CheckCircle, Shield, Zap, Clock, Users, TrendingUp, Globe, AlertTriangle, Lock, Eye } from 'lucide-react';

const AICybersecurityMonitorPage: React.FC = () => {
  const features = [
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Real-time Threat Detection',
      description: 'Advanced AI algorithms continuously monitor your network for suspicious activities and potential threats.',
      benefits: ['99.9% threat detection accuracy', 'Sub-second response time', 'Zero false positives']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Automated Incident Response',
      description: 'Intelligent automation that responds to threats instantly, containing and neutralizing attacks before they spread.',
      benefits: ['Automated threat containment', 'Instant response protocols', 'Self-healing security']
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'Vulnerability Scanning',
      description: 'Comprehensive scanning of your infrastructure to identify and prioritize security vulnerabilities.',
      benefits: ['Continuous vulnerability assessment', 'Risk prioritization', 'Patch management recommendations']
    },
    {
      icon: <Lock className="w-8 h-8" />,
      title: 'Compliance Monitoring',
      description: 'Automated compliance checking for GDPR, HIPAA, SOX, and other regulatory requirements.',
      benefits: ['Real-time compliance status', 'Automated reporting', 'Audit trail maintenance']
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Security Analytics',
      description: 'Advanced analytics and reporting to help you understand your security posture and trends.',
      benefits: ['Comprehensive security dashboards', 'Trend analysis', 'Predictive insights']
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Multi-Platform Support',
      description: 'Protect your entire infrastructure across cloud, on-premises, and hybrid environments.',
      benefits: ['Cloud security monitoring', 'On-premises protection', 'Hybrid environment support']
    }
  ];

  const pricingTiers = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 devices',
        'Basic threat detection',
        'Email support',
        'Standard reporting',
        'Cloud monitoring'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 200 devices',
        'Advanced AI threat detection',
        'Automated incident response',
        'Priority support',
        'Custom reporting',
        'Compliance monitoring'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$799',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited devices',
        'Full AI security suite',
        '24/7 dedicated support',
        'Custom integrations',
        'Advanced analytics',
        'Multi-platform support'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CTO, TechStart Inc.',
      content: 'The AI Cybersecurity Monitor has been a game-changer for our security posture. We\'ve prevented 3 major attacks in the last month alone.',
      rating: 5
    },
    {
      name: 'Michael Chen',
      role: 'Security Director, Global Corp',
      content: 'The automated incident response feature saved us hours of manual work and prevented a potential data breach.',
      rating: 5
    },
    {
      name: 'Emily Rodriguez',
      role: 'IT Manager, FinanceFirst',
      content: 'The compliance monitoring feature has made our audits so much easier. We\'re always ready for regulatory inspections.',
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI-Powered Cybersecurity Monitor - Zion Tech Group</title>
        <meta name="description" content="Advanced AI-powered cybersecurity monitoring with real-time threat detection, automated incident response, and compliance monitoring. Protect your business with cutting-edge security technology." />
        <meta name="keywords" content="AI cybersecurity, threat detection, security monitoring, automated response, compliance, vulnerability scanning" />
      </Helmet>

      <div className="min-h-screen matrix-bg">
        {/* Futuristic Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-red-900/20 via-orange-900/20 to-yellow-900/20"></div>
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 cyber-text neon-text">
                🛡️ AI-Powered Cybersecurity Monitor
              </h1>
              <p className="text-xl md:text-2xl text-red-300 mb-8 font-medium neon-text">
                Advanced AI Security Protection for Your Business
              </p>
              <p className="text-lg text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Protect your business with cutting-edge AI-powered cybersecurity monitoring. 
                Real-time threat detection, automated incident response, and comprehensive compliance monitoring 
                to keep your data and infrastructure secure.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <a
                  href="tel:+13024640950"
                  className="neon-button neon-glow px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  📞 Call Now: (302) 464-0950
                </a>
                <a
                  href="/contact"
                  className="neon-button neon-glow px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  Get Free Security Audit
                </a>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                <div className="text-center">
                  <div className="text-4xl font-bold text-red-400 mb-2 neon-text">99.9%</div>
                  <div className="text-gray-300">Threat Detection Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-orange-400 mb-2 neon-text">24/7</div>
                  <div className="text-gray-300">Continuous Monitoring</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-yellow-400 mb-2 neon-text">&lt;1s</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-green-400 mb-2 neon-text">100%</div>
                  <div className="text-gray-300">Compliance Coverage</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Advanced Security Features
              </h2>
              <p className="text-xl text-gray-300">
                Comprehensive AI-powered security solutions for modern businesses
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="futuristic-card hologram-effect p-8">
                  <div className="text-red-400 mb-4">{feature.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-4 neon-text">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-gradient-to-r from-gray-900/50 to-gray-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                Flexible Pricing Plans
              </h2>
              <p className="text-xl text-gray-300">
                Choose the perfect security solution for your business needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingTiers.map((tier, index) => (
                <div key={index} className={`futuristic-card p-8 relative ${tier.popular ? 'ring-2 ring-red-500' : ''}`}>
                  {tier.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2 neon-text">
                      {tier.name}
                    </h3>
                    <p className="text-gray-300 mb-4">{tier.description}</p>
                    <div className="text-4xl font-bold text-red-400 mb-2 neon-text">
                      {tier.price}
                      <span className="text-lg text-gray-400">{tier.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {tier.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="/contact"
                    className="w-full neon-button text-center block py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
                  >
                    Get Started
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4 neon-text">
                What Our Clients Say
              </h2>
              <p className="text-xl text-gray-300">
                Trusted by businesses worldwide for their security needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="futuristic-card p-8">
                  <div className="flex text-yellow-400 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <span key={i}>★</span>
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">
                    "{testimonial.content}"
                  </p>
                  <div className="border-t border-gray-600 pt-4">
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-red-900/30 to-orange-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold text-white mb-6 neon-text">
              Ready to Secure Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get a free security audit and see how our AI-powered cybersecurity monitor can protect your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="neon-button neon-glow px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                📞 Call Now: (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="neon-button neon-glow px-8 py-4 rounded-lg font-semibold transition-all duration-300 hover:scale-105"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICybersecurityMonitorPage;