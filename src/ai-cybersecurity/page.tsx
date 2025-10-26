import { Phone, Mail } from 'lucide-react';
'use client'
import { Brain, BarChart } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { Lock } from 'lucide-react'
import { CheckCircle, Phone, Mail } from 'lucide-react'

const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI Threat Detection',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-time, including zero-day attacks and advanced persistent threats.',
      benefits: ['Real-time detection', 'Zero-day protection', '9 9.9% accuracy']
   },
    {icon: Shield,
      title: 'Automated Response',
      description: 'Intelligent automated response system that instantly contains threats, isolates affected systems, and initiates recovery procedures.',
      benefits: ['Instant containment', 'Auto-recovery', 'Minimal do wntime']
   },
    {icon: Eye,
      title: 'Continuous Monitoring',
      description: '2 4/7 monitoring of your entire infrastructure with AI-powered analysis of network traffic, user behavior, and system activities.',
      benefits: ['2 4/7 surveillance', 'Behavioral analysis', 'Anomaly detection']
   },
    {icon: BarChart,
      title: 'Security Analytics',
      description: 'Comprehensive security analytics and reporting with threat intelligence, risk assessment, and compliance monitoring.',
      benefits: ['Threat intelligence', 'Risk scoring', 'Compliance reports']
   },
    {icon: Zap,
      title: 'Vulnerability Management',
      description: 'Automated vulnerability scanning, prioritization, and patching with AI-powered risk assessment and remediation guidance.',
      benefits: ['Auto-scanning', 'Risk prioritization', 'Patch management']
   },
    {icon: Lock,
      title: 'Zero Trust Architecture',
      description: 'Implement zero trust security model with identity verification, device trust, and least privilege access controls.',
      benefits: ['Identity verification', 'Device trust', 'Least privilege']
    }
  ]
  const pricingPlans = [
    {
      name: 'Essential',
      price: '$799',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 50endpoints',
        'Basic threat detection',
        'Email security',
        '2 4/7 monitoring',
        'Email support',
        'Basic reporting',
        'Standard compliance'
      ],
      popular: false
   },
    {name: 'Professional',
      price: '$1,99 9',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 500endpoints',
        'Advanced AI detection',
        'All security modules',
        'Real-time response',
        'Priority support',
        'Advanced analytics',
        'Custom compliance',
        'Incident response'
      ],
      popular: true
   },
    {name: 'Enterprise',
      price: '$4,99 9',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'Full security suite',
        'Dedicated SOC team',
        'Dedicated support',
        'Custom development',
        'Advanced compliance',
        'Penetration testing',
        'SLA guarantee'
      ],
      popular: false
    }
  ]
  const stats = [
    { number: '99.9%', label: 'Threat Detection' },
    { number: '24/7', label: 'Monitoring' },
    { number: '60%', label: 'Faster Response' },
    { number: '100%', label: 'Compliance' }
  ]
  const threats = [
    {
      title: 'Ransomware Protection',
      description: 'Advanced AI detection and prevention of ransomware attacks with automated backup and recovery systems.',
      icon: Shield
   },
    {title: 'Phishing Detection',
      description: 'AI-powered email security that detects and blocks sophisticated phishing attempts and social engineering attacks.',
      icon: Eye
   },
    {title: 'Insider Threat Detection',
      description: 'Behavioral analysis to identify and prevent insider threats, data exfiltration, and unauthorized access.',
      icon: Users
   },
    {title: 'Network Security',
      description: 'Comprehensive network monitoring and protection with AI-powered intrusion detection and prevention systems.',
      icon: Globe
    }
  ]
  return (
  <SEOOptimizertitle=&quot;AI Cybersecurity Solutions - ZionTechGroup&quot;
        description=&quot;Advanced AI-powered cybersecurity with99.9% threat detection,24/7 monitoring, and automated response. Protect your business from evolvingcyberthreats.&quot;
        keywords={['AI cybersecurity', 'threat detection', 'security monitoring', 'cyber protection', 'AIsecurity']}
        canonicalUrl=&quot;https://ziontechgroup.com/ai-cybersecurity&quot;
      />
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900&quot;></div>
        <Navigation />
        <main className=&quot;pt-16&quot;>
          {/* Hero Section */}
          <section className=&quot;container mx-auto px-4 py-16 text-center&quot;></section>
            <div className=&quot;max-w-4xl mx-auto&quot;></div>
              <h1 className=&quot;text-4xl md:text-6xl font-bold text-white mb-6 neon-text&quot;>
                AI Cybersecurity Solutions
              </h1>
              <p className=&quot;text-xl md:text-2xl text-cyan-400 mb-8&quot;>
                Protect your business with AI-powered security
              </p>
              <p className=&quot;text-lg text-gray-300 mb-12 max-w-3xl mx-auto&quot;>
                Our AI-powered cybersecurity platform provides advanced threat detection,
                automated response, and 24/7 monitoring to protect your business from evolving cyber threats.
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center items-center mb-16&quot;></div>
                <a,
href=&quot;tel:+13024640950&quot;
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span>Call (302) 464-0950</span>
                </a>
                <a,
href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;cyber-button flex items-center space-x-2&quot;
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className=&quot;w-5 h-5&quot; />
                  <span>Get Security Audit</span>
                </a>
              </div>
              {/* Stats */}
              <div className=&quot;grid grid-cols-2 md:grid-cols-4 gap-8 mb-16&quot;></div>
                {stats.map((stat, index) => (
                  <div key={index} className=&quot;cyber-card p-6 text-center&quot;></div>
                    <div className=&quot;text-3xl md:text-4xl font-bold text-cyan-400 mb-2 neon-text&quot;></div>
                      {stat.number}
                    </div>
                    <div className=&quot;text-gray-300 font-medium&quot;>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              Advanced Security Features
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8&quot;></div>
              {features.map((feature, index) => (
                <div key={index} className=&quot;cyber-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                  <feature.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{feature.title}</h3>
                  <p className=&quot;text-gray-300 mb-4&quot;>{feature.description}</p>
                  <ul className=&quot;space-y-2&quot;>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={idx} className=&quot;flex items-center space-x-2 text-sm text-cyan-400&quot;>
                        <CheckCircle className=&quot;w-4 h-4&quot; />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Threats Section */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              Protect Against All Threats
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;></div>
              {threats.map((threat, index) => (
                <div key={index} className=&quot;cyber-card p-6 hover:scale-105 transition-all duration-300&quot;></div>
                  <threat.icon className=&quot;w-12 h-12 text-cyan-400 mb-4&quot; />
                  <h3 className=&quot;text-xl font-bold text-white mb-3&quot;>{threat.title}</h3>
                  <p className=&quot;text-gray-300&quot;>{threat.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className=&quot;container mx-auto px-4 py-16&quot;></section>
            <h2 className=&quot;text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text&quot;>
              Simple, Transparent Pricing
            </h2>
            <div className=&quot;grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto&quot;></div>
              {pricingPlans.map((plan, index) => (
                <div,
key={index}
                  className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400scale-10 5'  : ''
                }`}
                ></div>{plan.popular && (
                  <divclassName=&quot;absolute -top-4 left-1/2transform-translate-x-1/2&quot;></div><spanclassName=&quot;bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold&quot;></className=&quot;bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold&quot;>Most Popular
                    </spa></di>)}
                <divclassName=&quot;text-centermb-6&quot;></div><h3className=&quot;text-2 xl font-boldtext-whitemb-2&quot;>{plan.name}</h><pclassName=&quot;text-gray-400mb-4&quot;>{plan.description}</p><divclassName=&quot;flexitems-baselinejustify-center&quot;></div><spanclassName=&quot;text-4 xl font-boldtext-cyan-400&quot;>{plan.price}</spa><spanclassName=&quot;text-gray-400ml-1&quot;>{plan.period}</spa></di></di><ulclassName=&quot;space-y-3mb-8&quot;>{plan.features.map((featureidx) => (
                   <likey={idx}className=&quot;flexitems-centerspace-x-3&quot;><CheckCircleclassName=&quot;w-5 h-5 text-cyan-400flex-shrink-0&quot; /><spanclassName=&quot;text-gray-300&quot;>{feature}</spa></l>))}
                </u><ahref=&quot;tel:+13024640950&quot;
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300${
                      plan.popular
                        ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Protected
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className=&quot;container mx-auto px-4 py-16 text-center&quot;></section>
            <div className=&quot;cyber-card p-12 max-w-4xl mx-auto&quot;></div>
              <h2 className=&quot;text-3xl md:text-4xl font-bold text-white mb-6 neon-text&quot;>
                Ready to Secure Your Business?
              </h2>
              <p className=&quot;text-xl text-gray-300 mb-8&quot;>
                Join 3,000+ companies already protected by our AI cybersecurity platform
              </p>
              <div className=&quot;flex flex-col sm:flex-row gap-4 justify-center&quot;></div>
                <a,
href=&quot;tel:+13024640950&quot;
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                >
                  <Phone className=&quot;w-5 h-5&quot; />
                  <span>Call (302) 464-0950</span>
                </a>
                <a,
href=&quot;mailto:kleber@ziontechgroup.com&quot;
                  className=&quot;cyber-button flex items-center justify-center space-x-2&quot;
                  style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
                >
                  <Mail className=&quot;w-5 h-5&quot; />
                  <span>Get Security Audit</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  )
}
export default AICybersecurityPage
