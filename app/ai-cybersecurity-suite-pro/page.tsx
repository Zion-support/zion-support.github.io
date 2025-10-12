import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Bot, Key } from 'lucide-react'
export default function AICybersecuritySuiteProPage() {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent threats in real-time with 99.9% accuracy'
    },
    {
      icon: <Shield className="w-6 h-6 text-emerald-400" />,
      title: 'Zero-Trust Architecture',
      description: 'Implement comprehensive zero-trust security model with continuous verification and monitoring'
    },
    {
      icon: <Activity className="w-6 h-6 text-purple-400" />,
      title: 'Real-time Monitoring',
      description: '24/7 network monitoring with instant alerts and automated response to security incidents'
    },
    {
      icon: <Key className="w-6 h-6 text-orange-400" />,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption with quantum-resistant algorithms for maximum data protection'
    },
    {
      icon: <Network className="w-6 h-6 text-pink-400" />,
      title: 'Network Security',
      description: 'Comprehensive network protection with AI-powered intrusion detection and prevention'
    },
    {
      icon: <Alert className="w-6 h-6 text-red-400" />,
      title: 'Incident Response',
      description: 'Automated incident response with AI-driven forensics and rapid threat containment'
    }
  ]

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50 devices',
        'Basic AI threat detection',
        'Email security',
        'Email support',
        'Basic reporting',
        'Standard encryption'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 500 devices',
        'Advanced AI features',
        'Network security',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'Incident response',
        'Compliance tools'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited devices',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'David Kim',
      company: 'Financial Services CISO',
      content: 'Prevented 3 major cyber attacks in the first month. The AI threat detection is incredibly sophisticated and accurate.',
      rating: 5,
      avatar: 'DK'
    },
    {
      name: 'Lisa Martinez',
      company: 'Healthcare IT Director',
      content: 'Achieved HIPAA compliance in record time. The automated compliance monitoring is a game-changer.',
      rating: 5,
      avatar: 'LM'
    },
    {
      name: 'James Wilson',
      company: 'Manufacturing CTO',
      content: 'Our security posture improved by 400%. The real-time monitoring and incident response are exceptional.',
      rating: 5,
      avatar: 'JW'
    }
  ]

  const benefits = [
    {
      icon: <Shield className="w-8 h-8 text-cyan-400" />,
      title: '99.9% Threat Detection',
      description: 'AI-powered detection prevents security breaches before they happen'
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-400" />,
      title: 'Real-time Response',
      description: 'Instant threat containment and automated incident response'
    },
    {
      icon: <Target className="w-8 h-8 text-purple-400" />,
      title: 'Zero False Positives',
      description: 'Advanced AI eliminates false alarms and focuses on real threats'
    },
    {
      icon: <Lock className="w-8 h-8 text-orange-400" />,
      title: 'Enterprise Security',
      description: 'Military-grade encryption and compliance with industry standards'
    }
  ]

  const securityFeatures = [
    { 
      title: 'Threat Intelligence', 
      description: 'Global threat intelligence feeds with AI-powered analysis',
      icon: '🧠',
      benefit: 'Prevent 99.9% of known threats'
    },
    { 
      title: 'Vulnerability Scanning', 
      description: 'Automated vulnerability assessment and patch management',
      icon: '🔍',
      benefit: 'Identify risks before attackers'
    },
    { 
      title: 'Email Security', 
      description: 'Advanced email protection against phishing and malware',
      icon: '📧',
      benefit: 'Block 99.8% of malicious emails'
    },
    { 
      title: 'Endpoint Protection', 
      description: 'Comprehensive endpoint security with behavioral analysis',
      icon: '💻',
      benefit: 'Protect all devices 24/7'
    },
    { 
      title: 'Network Monitoring', 
      description: 'Real-time network traffic analysis and anomaly detection',
      icon: '🌐',
      benefit: 'Detect intrusions instantly'
    },
    { 
      title: 'Compliance Management', 
      description: 'Automated compliance monitoring and reporting',
      icon: '📋',
      benefit: 'Maintain compliance effortlessly'
    }
  ]

  const complianceStandards = [
    'SOC 2 Type II', 'ISO 27001', 'HIPAA', 'GDPR', 'PCI DSS', 'NIST', 'CIS Controls', 'COBIT'
  ]

  return (
    <div>
      <Helmet>
        <title>AI Cybersecurity Suite Pro - Zion Tech Group | Advanced Security Solutions</title>
        <meta name="description" content="Revolutionary AI-powered cybersecurity suite with threat detection, zero-trust architecture, and real-time monitoring. 99.9% threat detection accuracy. Starting at $199/month." />
        <meta name="keywords" content="AI cybersecurity, threat detection, zero-trust security, network monitoring, incident response, security automation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-cybersecurity-suite-pro" />
      </Helmet>

      </Bot>
      </Shield>
      </Activity>
      </Key>
      </Network>
      </Alert>
      </Shield>
      </Clock>
      </Target>
      </Lock>
      </meta>
      </meta>
      </meta>
      </link>
      </Shield>
      </br>
      </ArrowRight>
      </ArrowRight>
      </CheckCircle>
      </Star>
      </div>
      </div>
      </div>
      </ArrowRight>
      </ArrowRight>
      </div>
      {/* Hero Section */}
      <section>
        <div>
        <div>
        
        <div>
          <div>
            <Shield className="w-4 h-4" />
            <span>AI-Powered Cybersecurity</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Cybersecurity
            <br></br>
            <span>
              Suite Pro
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Protect your organization with AI-powered cybersecurity that detects and prevents threats in real-time. 
            Achieve 99.9% threat detection accuracy with zero-trust architecture and automated incident response.
          </p>
          
          <div>
            <Link;
to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link;
to="#pricing" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Key Stats */}
          <div>
            <div>
              <div>99.9%</div>
              <div>Threat Detection</div>
            </div>
            <div>
              <div>24/7</div>
              <div>Real-time Monitoring</div>
            </div>
            <div>
              <div>0</div>
              <div>False Positives</div>
            </div>
            <div>
              <div>10K+</div>
              <div>Protected Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section>
        <div>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our <span>AI Cybersecurity Suite?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Experience the future of cybersecurity with cutting-edge AI technology that protects your organization.
            </p>
          </div>
          
          <div>
            {benefits.map((benefit, index) => (
              <div>
                <div>
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Features Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Comprehensive <span>Security Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Complete cybersecurity protection across all attack vectors with AI-powered intelligence.
            </p>
          </div>
          
          <div>
            {securityFeatures.map((feature, index) => (
              <div>
                <div>
                  <div>{feature.icon}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-4">
                  {feature.description}
                </p>
                <div>
                  {feature.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Standards Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Industry <span>Compliance</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Meet and maintain compliance with major industry standards and regulations.
            </p>
          </div>
          
          <div>
            {complianceStandards.map((standard, index) => (
              <div>
                <div>
                  <span>
                    {standard}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced Features for <span>Enterprise Security</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Everything you need to protect your organization with AI-powered cybersecurity intelligence.
            </p>
          </div>
          
          <div>
            {features.map((feature, index) => (
              <div>
                <div>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
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

      {/* Pricing Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple, Transparent <span>Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the plan that fits your organization size and security needs. All plans include our core AI features.
            </p>
          </div>
          
          <div>
            {pricingPlans.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>
                    <div>
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div>
                    <span>{plan.price}</span>
                    <span>{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link;
to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
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
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span>10,000+</span> Organizations
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              See what our customers are saying about their success with our AI cybersecurity suite.
            </p>
          </div>
          
          <div>
            {testimonials.map((testimonial, index) => (
              <div>
                <div>
                  <div>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div>{testimonial.name}</div>
                    <div>{testimonial.company}</div>
                  </div>
                </div>
                <div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
        <div>
          <div>
            <div>
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Secure Your <span>Organization?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Join thousands of organizations already protected with our AI-powered cybersecurity suite. 
                  Start your free trial today and experience the future of enterprise security.
                </p>
                
                <div>
                  <Link;
to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link;
to="#pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>View All Plans</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div>
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}