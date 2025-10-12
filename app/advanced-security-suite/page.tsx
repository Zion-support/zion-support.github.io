import React from 'react'
import {Link} from 'react-router-dom'
import Layout from '../layout'
import React from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight} from 'lucide-react';
import Layout from '../layout';

export default function Advanced Security Suite() {
  constfeatures = [
    {
      icon: <Shieldclass Name ="w-6h-6text-cyan-400" / />,
      title: '360° Protection',
      description: 'Comprehensive security coverage across all endpoints, networks, and cloud infrastructure'
    },
    {
      icon: <Brainclass Name ="w-6h-6text-purple-400" / />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticated cyber attacks'
    },
    {
      icon: <Eyeclass Name ="w-6h-6text-yellow-400" / />,
      title: 'Real-time Monitoring',
      description: '24/7 security monitoring with instant threat response and automated remediation'
    },
    {
      icon: <Lockclass Name ="w-6h-6text-green-400" / />,
      title: 'Compliance Ready',
      description: 'Meet GDPR, HIPAA, SOX, and other regulatory requirements with built-in compliance tools'
    }
  ]

  const securityModules = [
    {
      category: 'Endpoint Security',
      items: ['Antivirus & Anti-malware', 'Device Encryption', 'USB Protection', 'Application Control', 'Patch Management', 'Mobile Security']
    },
    {
      category: 'Network Security',
      items: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Segmentation', 'DDoS Protection', 'Traffic Analysis']
    },
    {
      category: 'Cloud Security',
      items: ['Cloud Access Control', 'Data Loss Prevention', 'Cloud Monitoring', 'Identity Management', 'API Security', 'Container Security']
    },
    {
      category: 'Threat Intelligence',
      items: ['Threat Hunting', 'Vulnerability Scanning', 'Penetration Testing', 'Security Analytics', 'Incident Response', 'Forensics']
    }
  ]

  const pricingPlans = [
    {
      name: 'Essential',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 25 endpoints',
        'Basic threat protection',
        'Email security',
        '24/7 monitoring',
        'Standard support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 100 endpoints',
        'Advanced AI protection',
        'Full security suite',
        'Priority support',
        'Compliance tools',
        'Custom policies'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'White-label solution',
        'Dedicated support',
        'Full compliance suite',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  consttestimonials = [
    {
      name: 'Robert Chen',
      company: 'Financial Services Corp',
      content: 'Advanced Security Suite protected us from 3 major cyber attacks this year. The AI detection is incredibly accurate.',
      rating: 5
    },
    {
      name: 'Lisa Martinez',
      company: 'Healthcare Plus',
      content: 'HIPAA compliance was seamless with this suite. Our auditors were impressed with the security measures.',
      rating: 5
    },
    {
      name: 'James Wilson',
      company: 'Tech Manufacturing Inc',
      content: 'The 24/7 monitoring gives us peace of mind. We sleep better knowing our systems are protected.',
      rating: 5
    }
  ]

  return (
    <Layouttitle ="AdvancedSecurity Suite - EnterpriseCybersecurity | ZionTech Group"
      description="Comprehensivecybersecurity solutionwith AIthreat detection, 24/7 monitoring, andcompliance tools. Protectyour businessfrom advancedcyber threats. Getyour freesecurity assessmenttoday."
      keywords="cybersecurity, threatdetection, securitymonitoring, compliance, enterprisesecurity, AIsecurity" />
      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* HeroSection */}
        <sectionclassName ="pt-20 pb-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-center" />
              <div className ="inline-flexitems-centerpx-4 py-2 bg-red-500/20 rounded-fulltext-red-400 text-smfont-mediummb-6" />
                <Shieldclass Name ="w-4h-4mr-2" / />
                EnterpriseCybersecurity
              </div>
              <h1className ="text-4 xlsm:text-5 xlmd:text-6 xlfont-boldtext-whitemb-6"  />AdvancedSecurity Suite
              </h1>
              <pclassName ="text-lgsm:text-xltext-gray-300 max-w-3 xlmx-automb-8" />
                Protectyour businesswith ourcomprehensive cybersecuritysolution. AI-poweredthreat detection, 
                24/7 monitoring, andcompliance toolsto keepyour dataand systemssecure.
              </p>
              <div className ="flexflex-colsm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-rfrom-red-500 to-purple-600 text-white px-8 py-4 rounded-lgfont-semiboldhover:from-red-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
                  GetFree Assessment
                  <Arrow Rightclass Name="w-5h-5ml-2" />
                </Link>
                <Link to ="#demo" className="border-2 border-whitetext-white px-8 py-4 rounded-lgfont-semiboldhover:bg-white/10transition-colors">ViewDemo
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FeaturesSection */}
        <sectionclassName ="py-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xlsm:text-4 xlfont-boldtext-whitemb-4"  />ComprehensiveSecurity Features
              </h2>
              <pclassName ="text-lgtext-gray-300 max-w-2xlmx-auto" />
                Advancedprotection againstthe latestcyber threats
              </p>
            </div>
            
            <div className ="gridgrid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {features.map((feature, index) => (
                <divkey ="{index}" className="bg-gradient-to-brfrom-slate-800/50 to-purple-900/30 rounded-xlp-6 borderborder-red-500/20 hover:border-red-400/40transition-allduration-300" />
                  <div className ="flexitems-centermb-4" />
                    {feature.icon}
                    <h3className ="text-xlfont-semiboldtext-whiteml-3"   />{feature.title}</h3>
                  </div>
                  <pclassName ="text-gray-300" />{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Security Modules */}
        <sectionclassName ="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xl sm:text-4 xl font-boldtext-whitemb-4"  />Complete Security Coverage
              </h2>
              <pclassName ="text-lg text-gray-300 max-w-2xlmx-auto" />
                Protect every aspect of your digital infrastructure
              </p>
            </div>
            
            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8" />
              {security Modules.map((module, index) => (
                <divkey ="{index}" className="bg-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <h3className ="text-xlfont-semiboldtext-whitemb-4"   />{module.category}</h3>
                  <ulclassName ="space-y-2" />
                    {module.items.map((item, itemIndex) => (
                      <likey ="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="w-4 h-4text-red-400mr-2" / />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <sectionclassName ="py-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xl sm:text-4 xl font-boldtext-whitemb-4"  />Flexible Security Plans
              </h2>
              <pclassName ="text-lg text-gray-300 max-w-2xlmx-auto" />
                Choose the security level that fits your organization
              </p>
            </div>
            
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricing Plans.map((plan, index) => (
                <divkey ="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8 bordertransition-allduration-300 ${
                  plan.popular 
                    ? 'border-red-400/40 scale-105 shadow-2 xlshadow-red-500/20' 
                    : 'border-red-500/20 hover: border-red-400/40'
                }`} />
                  {plan.popular && (
                    <div className ="inline-flexitems-centerpx-3 py-1 bg-red-500/20 rounded-fulltext-red-400 text-smfont-mediummb-4" />
                      <Starclass Name ="w-4h-4mr-1" / />
                      MostPopular
                    </div>
                  )}
                  <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                  <pclassName ="text-gray-300mb-6" />{plan.description}</p>
                  <div className ="mb-6" />
                    <spanclassName ="text-4 xlfont-boldtext-white"   />{plan.price}</span>
                    <spanclassName ="text-gray-400"   />{plan.period}</span>
                  </div>
                  <ulclassName ="space-y-3mb-8" />
                    {plan.features.map((feature, featureIndex) => (
                      <likey ="{featureIndex}" className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="w-5 h-5text-red-400mr-3" / />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link to ="/contact"
                    className="{`w-full" block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-red-500 to-purple-600 text-whitehover:from-red-600 hover:to-purple-700'
                        : 'border-2 border-red-400 text-red-400 hover: bg-red-400/10'
                    }`}
                    />Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <sectionclassName ="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-rfrom-slate-800/30to-purple-900/30" />
          <div className ="max-w-7xlmx-auto" />
            <div className ="text-centermb-12" />
              <h2className ="text-3 xl font-boldtext-whitemb-4"  />Trusted by Industry Leaders
              </h2>
              <pclassName ="text-gray-300" />
                See how our security suite protects organizations worldwide
              </p>
            </div>
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {testimonials.map((testimonial, index) => (
                <divkey ="{index}" className="bg-slate-800/50 rounded-xlp-6borderborder-slate-700" />
                  <div className ="flexitems-centermb-4" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey ="{i}" className="w-5 h-5text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <pclassName ="text-gray-300mb-4" />"{testimonial.content}"</p>
                  <div />
                    <div className ="font-semiboldtext-white"   />{testimonial.name}</div>
                    <div className ="text-smtext-gray-400"   />{testimonial.company}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-16 px-4sm:px-6lg:px-8" />
          <div className ="max-w-4 xlmx-autotext-center" />
            <div className ="bg-gradient-to-r from-red-500/20 to-purple-500/20 rounded-2 xl p-8borderborder-red-500/30" />
              <h2className ="text-3 xl font-boldtext-whitemb-4"  />Secure Your Business Today
              </h2>
              <pclassName ="text-lg text-gray-300 mb-8" />
                Don't wait for a cyber attack. Get comprehensive protection with Advanced Security Suite
              </p>
              <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
                <Link to ="/contact" className="bg-gradient-to-r from-red-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-red-600 hover:to-purple-700transition-allduration-300">Get Free Security Assessment
                </Link>
                <Link to ="/about" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-white/10transition-colors">Learn More
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};