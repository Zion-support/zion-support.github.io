import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCircle, Building2, Bug } from 'lucide-react';
import { ArrowRight, AlertCircle, Building2, Bug} from 'lucide-react';
'use client';


export default function AiCybersecurityMonitorProPage() {

  const features = [
    {
      icon: <Brain className="w-5h-5 ml-2" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time',
      benefits: ['Behavioral analysis', 'Anomaly detection', 'Threat prediction', 'Zero-day protection']
    },
    {
      icon: <Shield className="w-5h-5 ml-2" />,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring with instant threat response and automated remediation',
      benefits: ['Real-time alerts', 'Automated response', 'Incident management', 'Threat hunting']
    },
    {
      icon: <Eye className="w-5h-5 ml-2" />,
      title: 'Network Visibility',
      description: 'Complete visibility into your network infrastructure with advanced traffic analysis',
      benefits: ['Network mapping', 'Traffic analysis', 'Device discovery', 'Vulnerability scanning']
    },
    {
      icon: <Lock className="w-5h-5 ml-2" />,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory standards',
      benefits: ['Regulatory compliance', 'Audit trails', 'Policy enforcement', 'Risk assessment']
    },
    {
      icon: <Zap className="w-5h-5 ml-2" />,
      title: 'Automated Response',
      description: 'Intelligent incident response with automated threat containment and remediation',
      benefits: ['Auto-quarantine', 'Threat isolation', 'System restoration', 'Forensic analysis']
    },
    {
      icon: <Globe className="w-5h-5 ml-2" />,
      title: 'Global Threat Intelligence',
      description: 'Access to global threat intelligence feeds and security research databases',
      benefits: ['Threat intelligence', 'IOC feeds', 'Malware analysis', 'Attack patterns']
    }
  ];
  const securityCapabilities = [
    {
      category: 'Threat Detection',
      icon: <AlertTriangle className="w-5h-5 ml-2" />,
      items: [
        'Malware detection',
        'Phishing prevention',
        'Ransomware protection',
        'Advanced persistent threats',
        'Insider threat detection'
      ]
    },
    {
      category: 'Network Security',
      icon: <Network className="w-5h-5 ml-2" />,
      items: [
        'Firewall management',
        'Intrusion detection',
        'Network segmentation',
        'VPN monitoring',
        'Wireless security'
      ]
    },
    {
      category: 'Endpoint Protection',
      icon: <Monitor className="w-5h-5 ml-2" />,
      items: [
        'Device monitoring',
        'Application control',
        'USB protection',
        'Mobile device security',
        'Patch management'
      ]
    },
    {
      category: 'Data Protection',
      icon: <Database className="w-5h-5 ml-2" />,
      items: [
        'Data encryption',
        'Access controls',
        'Data loss prevention',
        'Backup monitoring',
        'Privacy compliance'
      ]
    },
    {
      category: 'Incident Response',
      icon: <AlertCircle className="w-5h-5 ml-2" />,
      items: [
        'Automated response',
        'Incident tracking',
        'Forensic analysis',
        'Recovery procedures',
        'Communication tools'
      ]
    },
    {
      category: 'Security Analytics',
      icon: <BarChart3 className="w-5h-5 ml-2" />,
      items: [
        'Security dashboards',
        'Risk assessment',
        'Compliance reporting',
        'Trend analysis',
        'Performance metrics'
      ]
    }
  ];
  const pricingPlans = [
    {
      name: 'Essential',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 50 devices',
        'Basic threat detection',
        'Email support',
        'Standard reports',
        'Basic compliance',
        '1 TB log storage'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses and security teams',
      features: [
        'Up to 500 devices',
        'Advanced AI detection',
        'Priority support',
        'Custom dashboards',
        'Full compliance suite',
        '10 TB log storage',
        'Automated response',
        'Threat intelligence'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizations with complex security needs',
      features: [
        'Unlimited devices',
        'Custom AI models',
        'Dedicated support',
        'White-label options',
        'Unlimited storage',
        'API access',
        'On-premise deployment',
        'Custom integrations'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];
  const testimonials = [
    {
      name: 'Michael Torres',
      company: 'SecureTech Solutions',
      role: 'CISO',
      content: 'AI Cybersecurity Monitor Pro has revolutionized our security posture. The AI detection capabilities have prevented multiple sophisticated attacks that traditional tools missed.',
      rating: 5,
      avatar: 'MT',
      results: '99.7% threat detection rate'
    },
    {
      name: 'Sarah Chen',
      company: 'Global Finance Corp',
      role: 'Security Director',
      content: 'The automated response capabilities have reduced our incident response time by 80%. Our security team can now focus on strategic initiatives instead of manual monitoring.',
      rating: 5,
      avatar: 'SC',
      results: '80% faster incident response'
    },
    {
      name: 'David Rodriguez',
      company: 'Healthcare Systems',
      role: 'IT Security Manager',
      content: 'The compliance management features have made our HIPAA audits seamless. We maintain continuous compliance with automated monitoring and reporting.',
      rating: 5,
      avatar: 'DR',
      results: '100% compliance score'
    }
  ];
  const stats = [
    { number: '1 M+', label: 'Threats Blocked', icon: <Shield className="w-5h-5 ml-2" /> },
    { number: '500+', label: 'Enterprise Clients', icon: <Building2 className="w-5h-5 ml-2" /> },
    { number: '99.9%', label: 'Uptime Guarantee', icon: <Activity className="w-5h-5 ml-2" /> },
    { number: '24/7', label: 'Security Monitoring', icon: <Eye className="w-5h-5 ml-2" /> }
  ];
  const threatTypes = [
    { name: 'Malware', icon: <Bug className="w-5h-5 ml-2" />, category: 'Malicious Software' },
    { name: 'Phishing', icon: <Target className="w-5h-5 ml-2" />, category: 'Social Engineering' },
    { name: 'Ransomware', icon: <Lock className="w-5h-5 ml-2" />, category: 'Data Encryption' },
    { name: 'DDoS', icon: <Network className="w-5h-5 ml-2" />, category: 'Network Attacks' },
    { name: 'Insider Threats', icon: <Users className="w-5h-5 ml-2" />, category: 'Internal Risks' },
    { name: 'Zero-Day', icon: <AlertCircle className="w-5h-5 ml-2" />, category: 'Unknown Vulnerabilities' },
    { name: 'APTs', icon: <Search className="w-5h-5 ml-2" />, category: 'Advanced Persistent Threats' },
    { name: 'IoT Attacks', icon: <Smartphone className="w-5h-5 ml-2" />, category: 'Device Vulnerabilities' }
  ];
  return (
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xlmx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Hero Section */}
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <h1 className="w-5h-5 ml-2" />
            AI Cybersecurity Monitor{' '}
            <span className="w-5h-5 ml-2" />Pro
            </span>
          </h1>
          <p className="w-5h-5 ml-2" />
            Protect your business with AI-powered threat detection, 24/7 monitoring, 
            and automated response. Enterprise-grade security powered by artificial intelligence.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-center justify-center"
        >
          Start Free Trial
              
          <ArrowRight className="w-5h-5 ml-2" />
        </Link>
            <Link to="/ai-services" className="bo rder-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flexitems-center justify-center">View All AI Services
            </Link>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">✓ 14-day free trial • ✓ No setup fees • ✓ 24/7 security monitoring
          </div>

        {/* Stats Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {stats.map((stat, index) => (
                <div key="{index}" className="te xt-center" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <stat.icon className="h-8w-8te xt-white"  />
                  </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}</div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}</div>
              ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />Advanced Security Features</h2>
            <p className="w-5h-5 ml-2" />
              Our AI Cybersecurity Monitor Pro leverages cutting-edge artificial intelligence 
              to provide comprehensive protection against evolving cyber threats.
            </p>
          </div>
          
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key="{index}" className="bg-s late-800/50 rounded-2 xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-allduration-300group" />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                  </div>
                  <h3 className="w-5h-5 ml-2" />{feature.title}</h3>
                  <p className="w-5h-5 ml-2" />{feature.description}</p>
                  <ul className="w-5h-5 ml-2" />
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key="{benefitIndex}" className="fl ex items-centertext-sm text-gray-300" />
                        <CheckCircle className="w-5h-5 ml-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </section>

        {/* Security Capabilities Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />Comprehensive Security Coverage</h2>
            <p className="w-5h-5 ml-2" />
              Protect every aspect of your digital infrastructure with our comprehensive security capabilities.
            </p>
          </div>
          
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {securityCapabilities.map((capability, index) => (
              <div key="{index}" className="bg-s late-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30transition-allduration-300" />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {capability.icon}
                  <h3 className="w-5h-5 ml-2" />{capability.category}</h3>
                </div>
                <ul className="w-5h-5 ml-2" />
                  {capability.items.map((item, itemIndex) => (
                    <li key="{itemIndex}" className="fl ex items-centertext-sm text-gray-300" />
                      <CheckCircle className="w-5h-5 ml-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Threat Types Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />Threat Protection</h2>
            <p className="w-5h-5 ml-2" />
              Advanced AI detection and prevention for all types of cyber threats and attacks.
            </p>
          </div>
          
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {threatTypes.map((threat, index) => (
              <div key="{index}" className="bg-s late-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300text-centergroup" />
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{threat.icon}
                </div>
                <h3 className="w-5h-5 ml-2" />{threat.name}</h3>
                <p className="w-5h-5 ml-2" />{threat.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />Choose Your Security Plan</h2>
            <p className="w-5h-5 ml-2" />
              Flexible pricing plans designed to protect businesses of all sizes.
            </p>
          </div>
          
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`bg-s late-800/50" rounded-2 xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover: border-cyan-500/30'
              }`} />
                {plan.popular && (
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5h-5 ml-2" />Most Popular
                    </span>
                  </div>
                )}
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5h-5 ml-2" />{plan.name}</h3>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5h-5 ml-2" />{plan.price}</span>
                    <span className="w-5h-5 ml-2" />{plan.period}</span>
                  </div>
                  <p className="w-5h-5 ml-2" />{plan.description}</p>
                </div>
                
                <ul className="w-5h-5 ml-2" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key="{featureIndex}" className="fl exitems-center text-gray-300" />
                      <CheckCircle className="w-5h-5 ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to="/contact"
                  className="{`w-fu ll" py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white'
                  }`} />
                  {plan.cta}
                  <ArrowRight className="w-5h-5 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5 ml-2" />What Our Customers Say</h2>
              <p className="w-5h-5 ml-2" />
                Join hundreds of security professionals who trust AI Cybersecurity Monitor Pro.
              </p>
            </div>
            
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {testimonials.map((testimonial, index) => (
                <div key="{index}" className="bg-s late-800/50 rounded-xl p-6borderborder-slate-700" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                    </div>
                    <div />
                      <h4 className="w-5h-5 ml-2" />{testimonial.name}</h4>
                      <p className="w-5h-5 ml-2" />{testimonial.role}</p>
                      <p className="w-5h-5 ml-2" />{testimonial.company}</p>
                    </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="w-4h-4t e xt-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5h-5 ml-2" />"{testimonial.content}"</p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Result: {testimonial.results}
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5 ml-2" />Ready to Secure Your Business?
            </h2>
            <p className="w-5h-5 ml-2" />
              Start your free trial today and experience enterprise-grade security powered by AI. 
              Join hundreds of organizations already protected by our advanced threat detection.
            </p>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flexitems-center justify-center" />
                Start Free Trial
                <Sparkles className="w-5h-5 ml-2" />
              </Link>
              <Link to="/about" className="bo rder-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flexitems-center justify-center" />
                Learn More
                <Shield className="w-5h-5 ml-2" />
              </Link>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <p />✓ 14-day free trial • ✓ No setup fees • ✓ 24/7 monitoring • ✓ Cancel anytime</p>
            </div>
        </section>
      </div>
  );
}