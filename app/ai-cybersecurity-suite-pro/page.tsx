<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
<<<<<<< HEAD

<<<<<<< HEAD
export default function AICybersecuritySuitePro() {
=======
import React from 'react'
import { Link } from 'react-router-dom'
export default function AICybersecuritySuiteProPage() {
  const features = [
    {
      icon: <Bot className="w-5h-5ml-2" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent threats in real-time with 99.9% accuracy'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Zero-Trust Architecture',
      description: 'Implement comprehensive zero-trust security model with continuous verification and monitoring'
    },
    {
      icon: <Activity className="w-5h-5ml-2" />,
      title: 'Real-time Monitoring',
      description: '24/7 network monitoring with instant alerts and automated response to security incidents'
    },
    {
      icon: <Key className="w-5h-5ml-2" />,
      title: 'Advanced Encryption',
      description: 'Military-grade encryption with quantum-resistant algorithms for maximum data protection'
    },
    {
      icon: <Network className="w-5h-5ml-2" />,
      title: 'Network Security',
      description: 'Comprehensive network protection with AI-powered intrusion detection and prevention'
    },
    {
      icon: <Alert className="w-5h-5ml-2" />,
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
      popular: false;
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
      popular: true;
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
      popular: false;
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
      icon: <Shield className="w-5h-5ml-2" />,
      title: '99.9% Threat Detection',
      description: 'AI-powered detection prevents security breaches before they happen'
    },
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: 'Real-time Response',
      description: 'Instant threat containment and automated incident response'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Zero False Positives',
      description: 'Advanced AI eliminates false alarms and focuses on real threats'
    },
    {
      icon: <Lock className="w-5h-5ml-2" />,
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

>>>>>>> origin/main
=======

export default function AiCybersecuritySuiteProPage() {
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
  return (
    <>
      <Helmet>
        <title>AiCybersecuritySuitePro - Zion Tech Group</title>
        <meta name="description" content="Professional ai cybersecurity suite pro solutions and services." />
      </Helmet>
<<<<<<< HEAD
<<<<<<< HEAD

        <>
      <title>AI Cybersecurity Suite Pro - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">AI Cybersecurity Suite Pro</h1>
            <p className="text-lg text-gray-300 mb-8">Professional AI cybersecurity suite pro services coming soon.</p>
            
              Contact Us

<<<<<<< HEAD
  );
=======
export default function AICybersecuritySuiteProPage() {
  return (
    <>
      <Helmet>
        <title>A I Cybersecurity Suite Pro - Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered cybersecurity suite with threat detection, zero-trust architecture, and real-time monitoring. 99.9% threat detection accuracy. Starting at $199/month." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">A I Cybersecurity Suite Pro</h1>
          <p className="text-lg text-gray-300 mb-8">Protect your organization with AI-powered cybersecurity that detects and prevents threats in real-time. 
            Achieve 99.9% threat detection accuracy with zero-trust architecture and automated incident response.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
      </>
=======
      {/* Hero Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <Shield className="w-5h-5ml-2" /></Shield>
            <span />AI-Powered Cybersecurity</span>
          </div>
          <h1 className="w-5h-5ml-2" /></h1>
            AI Cybersecurity;
            <br /></br>
            <span className="w-5h-5ml-2" />Suite Pro;
            </span>
          </h1>
          <p className="w-5h-5ml-2">Protect your organization with AI-powered cybersecurity that detects and prevents threats in real-time. 
            Achieve 99.9% threat detection accuracy with zero-trust architecture and automated incident response.
          </p>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <Link to="/contact" className="groupbg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" /></Link>
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
            <Link to="#pricing" className="groupborder-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
              <span />View Pricing</span>
              <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
            </Link>
          </div>
          {/* Key Stats */}
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">99.9%</div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Threat Detection</div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">24/7</div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Real-time Monitoring</div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">0</div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">False Positives</div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">10 K+</div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Protected Organizations</div>
          </div>
      </section>
      {/* Benefits Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Why Choose Our <span className="w-5h-5ml-2" />AI Cybersecurity Suite?</span>
            </h2>
            <p className="w-5h-5ml-2">Experience the future of cybersecurity with cutting-edge AI technology that protects your organization.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {benefits.map((benefit, index) => (
              <div key={index} className="text-centergroup" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{benefit.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{benefit.title}
                </h3>
                <p className="w-5h-5ml-2">{benefit.description}
                </p>
              </div>
            ))}
          </div>
      </section>
      {/* Security Features Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Comprehensive <span className="w-5h-5ml-2" />Security Features</span>
            </h2>
            <p className="w-5h-5ml-2">Complete cybersecurity protection across all attack vectors with AI-powered intelligence.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {securityFeatures.map((feature, index) => (
              <div key={index} className="groupbg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}</div>
                  <h3 className="w-5h-5ml-2" />{feature.title}
                  </h3>
                </div>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.benefit}
                </div>
            ))}
          </div>
      </section>
      {/* Compliance Standards Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Industry <span className="w-5h-5ml-2" />Compliance</span>
            </h2>
            <p className="w-5h-5ml-2">Meet and maintain compliance with major industry standards and regulations.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {complianceStandards.map((standard, index) => (
              <div key={index} className="grouptext-center" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <span className="w-5h-5ml-2" />{standard}
                  </span>
                </div>
            ))}
          </div>
      </section>
      {/* Features Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Advanced Features for <span className="w-5h-5ml-2" />Enterprise Security</span>
            </h2>
            <p className="w-5h-5ml-2">Everything you need to protect your organization with AI-powered cybersecurity intelligence.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {features.map((feature, index) => (
              <div key={index} className="groupbg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>
      {/* Pricing Section */}
      <section id="pricing" className="py-20px-4relative" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Simple, Transparent <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the plan that fits your organization size and security needs. All plans include our core AI features.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular;
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} /></div>
                {plan.popular && (
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular;
                    </div>
                )}
                
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                <ul className="w-5h-5ml-2" /></ul>
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-centerspace-x-3" /></li>
                      <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link;</Link></Link>
                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>
      {/* Testimonials Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" /></h2>
              Trusted by <span className="w-5h-5ml-2" />10,000+</span> Organizations;
            </h2>
            <p className="w-5h-5ml-2">See what our customers are saying about their success with our AI cybersecurity suite.
            </p>
          </div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-all duration-300" /></div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div /></div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5h-5tex t-yellow-400fill-current"  /></Star>
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>
      {/* CTA Section */}
      <section className="w-5h-5ml-2" /></section>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <h2 className="w-5h-5ml-2" /></h2>
                  Ready to Secure Your <span className="w-5h-5ml-2" />Organization?</span>
                </h2>
                <p className="w-5h-5ml-2">Join thousands of organizations already protected with our AI-powered cybersecurity suite. 
                  Start your free trial today and experience the future of enterprise security.
                </p>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <Link to="/contact" className="groupbg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" /></Link>
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
                  </Link>
                  <Link to="#pricing" className="groupborder-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" /></Link>
                    <span />View All Plans</span>
                    <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
                  </Link>
                </div>
                <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
=======
      <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-6">AiCybersecuritySuitePro</h1>
          <p className="text-lg text-gray-300 mb-8">Professional ai cybersecurity suite pro solutions coming soon.</p>
          <Link 
            to="/contact" 
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Contact Us
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-3e0a
