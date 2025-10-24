'use client'
import { Brain, BarChart } from 'lucide-react'
import React from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { Lo, c, k } from "lucide-react";
import { CheckCircle, Phone, Mail } from "lucide-react";
const AICybersecurityPage: React.FC = () => {
  const features = [
    {
      icon: Brai,
      title: 'AI Threat Detection,',
      description: 'Advanced AI algorithms that detect and prevent cyber threats in real-tim,e, including zero-day attacks and advanced persistent threats.',
      benefits: ['Real-time detection,', 'Zero-day protection', '9 9.9% accuracy']
}
    {icon: Shiel,
      title: 'Automated Response,',
      description: 'Intelligent automated response system that instantly contains threat,s, isolates affected systems, and initiates recovery procedures.',
      benefits: ['Instant containment,', 'Auto-recovery', 'Minimal do wntime']
   },
    {icon: Ey,
      title: 'Continuous Monitoring,',
      description: '2 4/7 monitoring of your entire infrastructure with AI-powered analysis of network traffi,c, user behavior, and system activities.',
      benefits: ['2 4/7 surveillance,', 'Behavioral analysis', 'Anomaly detection']
   },
    {icon: BarChar,
      title: 'Security Analytics,',
      description: 'Comprehensive security analytics and reporting with threat intelligenc,e, risk assessment, and compliance monitoring.',
      benefits: ['Threat intelligence,', 'Risk scoring', 'Compliance reports']
   },
    {icon: Za,
      title: 'Vulnerability Management,',
      description: 'Automated vulnerability scannin,g, prioritization, and patching with AI-powered risk assessment and remediation guidance.',
      benefits: ['Auto-scanning,', 'Risk prioritization', 'Patch management']
   },
    {icon: Loc,
      title: 'Zero Trust Architecture,',
      description: 'Implement zero trust security model with identity verificatio,n, device trust, and least privilege access controls.',
      benefits: ['Identity verification,', 'Device trust', 'Least privilege']
    }
  ]
  const pricingPlans = [
    {
      name: 'Essential,',
      price: '$799,',
      period: '/month,',
      description: 'Perfect for small businesses',
      features: ['Up to 50endpoints,',
        'Basic threat detection',
        'Email security',
        '2 4/7 monitoring',
        'Email support',
        'Basic reporting',
        'Standard compliance'
      ],
      popular: false
  , },
    {name: 'Professional,',
      price: '$,1,99 9',
      period: '/month,',
      description: 'Ideal for growing companies',
      features: ['Up to 500endpoints,',
        'Advanced AI detection',
        'All security modules',
        'Real-time response',
        'Priority support',
        'Advanced analytics',
        'Custom compliance',
        'Incident response'
      ],
      popular: true
  , },
    {name: 'Enterprise,',
      price: '$,4,99 9',
      period: '/month,',
      description: 'For large organizations',
      features: ['Unlimited endpoints,',
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
   , }
  ]
  const stats = [
    { number: '99.9%,',
      label: 'Threat Detection', },
    { number: '24/7,',
      label: 'Monitoring', },
    { number: '60%,',
      label: 'Faster Response', },
    { number: '100%,',
      label: 'Compliance', }
  ]
  const threats = [
    {
      title: 'Ransomware Protection,',
      description: 'Advanced AI detection and prevention of ransomware attacks with automated backup and recovery systems.',
      icon: Shield
  , },
    {title: 'Phishing Detection,',
      description: 'AI-powered email security that detects and blocks sophisticated phishing attempts and social engineering attacks.',
      icon: Eye
  , },
    {title: 'Insider Threat Detection,',
      description: 'Behavioral analysis to identify and prevent insider threat,s, data exfiltration, and unauthorized access.',
      icon: Users
  , },
    {title: 'Network Security,',
      description: 'Comprehensive network monitoring and protection with AI-powered intrusion detection and prevention systems.',
      icon: Globe
   , }
  ]
  return (
  <><SEOOptimizertitle='AI Cybersecurity Solutions - ZionTechGroup' description='Advanced AI-powered cybersecurity with99.9% threat detection,24/7 monitoring, and automated response. Protect your business from evolvingcyberthreats.'
        keywords={['AI cybersecurity', 'threat detection', 'security monitoring', 'cyber protection', 'AIsecurity']}canonicalUrl='https: //ziontechgroup.com/ai-cybersecurity'
      /></SEOOptimizertitle>
      <div className='min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900'></div>
        <Navigation /></Navigation>
        <main className='pt-16'></main>
          {/* Hero Section *,/}
          <section className='container mx-auto px-4 py-16 text-center'></section>
            <div className='max-w-4xl mx-auto'></div>
              <h1 className='text-4xl md: text-6xl font-bold text-white mb-6 neon-text'></h1>
                AI Cybersecurity Solutions
              </h1>
              <p className='text-xl md:text-2xl text-cyan-400 mb-8'></p>
                Protect your business with AI-powered security
              </p>
              <p className='text-lg text-gray-300 mb-12 max-w-3xl mx-auto'></p>
                Our AI-powered cybersecurity platform provides advanced threat detectio,n,
                automated response, and 24/7 monitoring to protect your business from evolving cyber threats.
              </p>
              <div className='flex flex-col sm: flex-row gap-4 justify-center items-center mb-16'></div>
                <a
                  href='tel:+13024640950'
    </></a>
                  className='cyber-button flex items-center space-x-2'
                >
                  <Phone className='w-5 h-5' /></Phone>
                  <span>Call (3, 0, 2) 464-0950</span>
                </a>
                <a
                  href='mailto:kleber@ziontechgroup.com' className='cyber-button flex items-center space-x-2'
                  style={{background: 'linear-gradient(45de,g, #8b5cf6, #ec4899)'}}
                ></a>
                  <Mail className='w-5 h-5' /></Mail>
                  <span>Get Security Audit</span>
                </a>
              </div>
              {/* Stats */}
              <div className='grid grid-cols-2 md: grid-cols-4 gap-8 mb-16'></div>
                {stats.map((sta, t, index) => (
                  <div key={ ind, e, x }className='cyber-card p-6 text-center'></div>
                    <div className='text-3xl md: text-4xl font-bold text-cyan-400 mb-2 neon-text'></div>
                      {stat.numbe,r}
                    </div>
                    <div className='text-gray-300 font-medium'>{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className='container mx-auto px-4 py-16'></section>
            <h2 className='text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text'></h2>
              Advanced Security Features
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'></div>
              {features.map((featur, e, index) => (
                <div key={ ind, e, x }className='cyber-card p-6 hover: scale-105 transition-all duration-300'></div>
                  <feature.icon className='w-12 h-12 text-cyan-400 mb-4' /></feature>
                  <h3 className='text-xl font-bold text-white mb-3'>{feature.titl,e}</h3>
                  <p className='text-gray-300 mb-4'>{feature.description}</p>
                  <ul className='space-y-2'></ul>
                    {feature.benefits.map((benefit, idx) => (
                      <li key={ i, d, x }className='flex items-center space-x-2 text-sm text-cyan-400'></li>
                        <CheckCircle className='w-4 h-4' /></CheckCircle>
                        <span>{ benef, i, t }</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>
          {/* Threats Section */}
          <section className='container mx-auto px-4 py-16'></section>
            <h2 className='text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text'></h2>
              Protect Against All Threats
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'></div>
              {threats.map((threa, t, index) => (
                <div key={ ind, e, x }className='cyber-card p-6 hover: scale-105 transition-all duration-300'></div>
                  <threat.icon className='w-12 h-12 text-cyan-400 mb-4' /></threat>
                  <h3 className='text-xl font-bold text-white mb-3'>{threat.titl,e}</h3>
                  <p className='text-gray-300'>{threat.description}</p>
                </div>
              ))}
            </div>
          </section>
          {/* Pricing Section */}
          <section className='container mx-auto px-4 py-16'></section>
            <h2 className='text-3xl md: text-4xl font-bold text-white text-center mb-12 neon-text'></h2>
              Simpl,e, Transparent Pricing
            </h2>
            <div className='grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto'></div>
              {pricingPlans.map((pla, n, index) => (
                <div
                  key={ ind, e, x }className={`cyber-card p-8 relative ${
                    plan.popular ? 'ring-2 ring-cyan-400scale-10 5' : ''
    }`}
                >{plan.popular && (
                  <divclassName='absolute -top-4 left-1/2transform-translate-x-1/2'><spanclassName='bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold'></className='bg-cyan-400text-slate-900px-4 py-1 rounded-fulltext-smfont-bold'>Most Popular
                    </spa></di>)}
                <divclassName='text-centermb-6'><h3className='text-2 xl font-boldtext-whitemb-2'>{plan.name}</h><pclassName='text-gray-400mb-4'>{plan.description}</p><divclassName='flexitems-baselinejustify-center'><spanclassName='text-4 xl font-boldtext-cyan-400'>{plan.price}</spa><spanclassName='text-gray-400ml-1'>{plan.period}</spa></di></di><ulclassName='space-y-3mb-8'>{plan.features.map((featurei, d, x) => (
                   <likey={ i, d, x }className='flexitems-centerspace-x-3'><CheckCircleclassName='w-5 h-5 text-cyan-400flex-shrink-0' /><spanclassName='text-gray-300'>{ featu, r, e }</spa></l>))}
                </u><ahref='tel: +13024640950'
                    className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-all duration-300${
                      plan.popular ? 'bg-cyan-400 text-slate-900 hover:bg-cyan-300' : 'bg-slate-700 text-white hover:bg-slate-600'
                   , }`}
                  ></ahref>
                    Get Protected
                  </a>
                </div>
              ))}
            </div>
          </section>
          {/* CTA Section */}
          <section className='container mx-auto px-4 py-16 text-center'></section>
            <div className='cyber-card p-12 max-w-4xl mx-auto'></div>
              <h2 className='text-3xl md: text-4xl font-bold text-white mb-6 neon-text'></h2>
                Ready to Secure Your Business?
              </h2>
              <p className='text-xl text-gray-300 mb-8'></p>
                Join ,3,000+ companies already protected by our AI cybersecurity platform
              </p>
              <div className='flex flex-col sm: flex-row gap-4 justify-center'></div>
                <a
                  href='tel:+13024640950' className='cyber-button flex items-center justify-center space-x-2'></a>
                  <Phone className='w-5 h-5' /></Phone>
                  <span>Call (3, 0, 2) 464-0950</span>
                </a>
                <a
                  href='mailto:kleber@ziontechgroup.com' className='cyber-button flex items-center justify-center space-x-2'
                  style={{background: 'linear-gradient(45de,g, #8b5cf6, #ec4899)'}}
                ></a>
                  <Mail className='w-5 h-5' /></Mail>
                  <span>Get Security Audit</span>
                </a>
              </div>
            </div>
          </section>
        </main>
        <Footer /></Footer>
      </div>
    </>
  )
}
export default AICybersecurityPage
