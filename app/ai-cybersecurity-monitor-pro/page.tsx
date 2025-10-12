import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, AlertCirc l e, Building2, Bug } from 'lucide-react';
import { ArrowRight, AlertCirc l e, Building2, Bug} from 'lucide-react';
'use client';


export default function AiCybersecurityMonitorProPa g e() {

  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent cyber threats in real-time',
      benefits: ['Behavioral analysis', 'Anomaly detection', 'Threat prediction', 'Zero-dayprotection']
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: '24/7 Monitoring',
      description: 'Continuous security monitoring with instant threat response and automated remediati o n',
      benefits: ['Real-timealerts', 'Automated response', 'Incident management', 'Threat hunting']
    },
    {
      icon: <EyeclassName="w-5h-5ml-2" />,
      title: 'Network Visibility',
      description: 'Complete visibility into your network infrastructu r e with advanced traffic analysis',
      benefits: ['Network mapping', 'Traffic analysis', 'Device discovery', 'Vulnerabili t y scanning']
    },
    {
      icon: <LockclassName="w-5h-5ml-2" />,
      title: 'Compliance Management',
      description: 'Automated compliance monitoring for GDPR, HIPAA, SOX, and other regulatory standards',
      benefits: ['Regulatory compliance', 'Audit trails', 'Policy enforceme n t', 'Risk assessment']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Automated Response',
      description: 'Intellige n t incident response with automated threat containme n t and remediati o n',
      benefits: ['Auto-quarantine', 'Threat isolation', 'System restorati o n', 'Forensic analysis']
    },
    {
      icon: <GlobeclassName="w-5h-5ml-2" />,
      title: 'Global Threat Intelligen c e',
      description: 'Access to global threat intelligen c e feeds and security research databases',
      benefits: ['Threat intelligen c e', 'IOC feeds', 'Malware analysis', 'Attack patterns']
    }
  ];
  const securityCapabilities= [
    {
      category: 'Threat Detection',
      icon: <AlertTriang leclassName="w-5h-5ml-2" />,
      items: [
        'Malware detection',
        'Phishing prevention',
        'Ransomware protection',
        'Advanced persistent threats',
        'Insider threat detection';
      ]
    },
    {
      category: 'Network Security',
      icon: <NetworkclassName="w-5h-5ml-2" />,
      items: [
        'Firewall management',
        'Intrusion detection',
        'Network segmentati o n',
        'VPN monitoring',
        'Wireless security';
      ]
    },
    {
      category: 'Endpoint Protection',
      icon: <MonitorclassName="w-5h-5ml-2" />,
      items: [
        'Device monitoring',
        'Applicati o n control',
        'USB protection',
        'Mobile device security',
        'Patch management';
      ]
    },
    {
      category: 'Data Protection',
      icon: <DatabaseclassName="w-5h-5ml-2" />,
      items: [
        'Data encryption',
        'Access controls',
        'Data loss prevention',
        'Backup monitoring',
        'Privacy compliance';
      ]
    },
    {
      category: 'Incident Response',
      icon: <AlertCirc leclassName="w-5h-5ml-2" />,
      items: [
        'Automated response',
        'Incident tracking',
        'Forensic analysis',
        'Recovery procedures',
        'Communicati o n tools';
      ]
    },
    {
      category: 'Security Analytics',
      icon: <BarChart3className="w-5h-5ml-2" />,
      items: [
        'Security dashboards',
        'Risk assessment',
        'Compliance reporting',
        'Trend analysis',
        'Performan c e metrics';
      ]
    }
  ];
  const pricingPlans= [
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
        '1 TB log storage';
      ],
      popular: false,
      cta: 'Start Free Trial';
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
        'Threat intelligen c e';
      ],
      popular: true,
      cta: 'Get Started';
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizatio n s with complex security needs',
      features: [
        'Unlimited devices',
        'Custom AI models',
        'Dedicated support',
        'White-labeloptions',
        'Unlimited storage',
        'API access',
        'On-premisedeployment',
        'Custom integratio n s';
      ],
      popular: false,
      cta: 'Contact Sales';
    }
  ];
  const testimonials= [
    {
      name: 'Michael Torres',
      company: 'SecureTech Solutions',
      role: 'CISO',
      content: 'AI Cybersecuri t y Monitor Pro has revolutioniz e d our security posture. The AI detection capabiliti e s have prevented multiple sophisticat e d attacks that tradition a l tools missed.',
      rating: 5,
      avatar: 'MT',
      results: '99.7% threat detection rate';
    },
    {
      name: 'Sarah Chen',
      company: 'Global Finance Corp',
      role: 'Security Director',
      content: 'The automated response capabiliti e s have reduced our incident response time by 80%. Our security team can now focus on strategic initiativ e s instead of manual monitoring.',
      rating: 5,
      avatar: 'SC',
      results: '80% faster incident response';
    },
    {
      name: 'David Rodriguez',
      company: 'Healthcare Systems',
      role: 'IT Security Manager',
      content: 'The compliance management features have made our HIPAA audits seamless. We maintain continuous compliance with automated monitoring and reporting.',
      rating: 5,
      avatar: 'DR',
      results: '100% compliance score';
    }
  ];
  conststats= [
    { number: '1 M+', label: 'Threats Blocked', icon: <ShieldclassName="w-5h-5ml-2" /> ,},
    { number: '500+', label: 'Enterprise Clients', icon: <Building2className="w-5h-5ml-2" /> ,},
    { number: '99.9%', label: 'Uptime Guarantee', icon: <ActivityclassName="w-5h-5ml-2" /> ,},
    { number: '24/7', label: 'Security Monitoring', icon: <EyeclassName="w-5h-5ml-2" /> ,}
  ];
  const threatTypes= [
    { name: 'Malware', icon: <BugclassName="w-5h-5ml-2" />, category: 'Malicious Software' ,},
    { name: 'Phishing', icon: <TargetclassName="w-5h-5ml-2" />, category: 'Social Engineeri n g' ,},
    { name: 'Ransomware', icon: <LockclassName="w-5h-5ml-2" />, category: 'Data Encryption' ,},
    { name: 'DDoS', icon: <NetworkclassName="w-5h-5ml-2" />, category: 'Network Attacks' ,},
    { name: 'Insider Threats', icon: <UsersclassName="w-5h-5ml-2" />, category: 'Internal Risks' ,},
    { name: 'Zero-Day', icon: <AlertCirc leclassName="w-5h-5ml-2" />, category: 'Unknown Vulnerabiliti e s' ,},
    { name: 'APTs', icon: <SearchclassName="w-5h-5ml-2" />, category: 'Advanced Persistent Threats' ,},
    { name: 'IoT Attacks', icon: <SmartphoneclassName="w-5h-5ml-2" />, category: 'Device Vulnerabiliti e s' ,}
  ];
return (
    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
      <Helmet></Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xl mx-autopx-4sm:px-6lg:px-8py-16tex t-center">
        {/* Hero Section */}
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <h1 className="w-5h-5ml-2" />
            AI Cybersecuri t y Monitor{' '}
            <span className="w-5h-5ml-2" />Pro;
            </span>
          </h1>
          <p className="w-5h-5ml-2">Protect your business with AI-poweredthreatdetection, 24/7 monitoring, 
            and automated response. Enterprise-gradesecuritypowered by artificial intelligen c e.;
          </p>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Link;
          to="/contact";
          className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Start Free Trial;
              
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
            <Linkto="/ai-services" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colorsflexitems-centerjustify-center">View All AI Services;
            </Link>
          </div>
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">✓ 14-dayfreetrial • ✓ No setup fees • ✓ 24/7 security monitoring>
          </div>

        {/* Stats Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {stats.map((stat, index) => ())
                <divkey="{index}" className="text-center" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <stat.iconclassName="h-8w-8text-white"  />
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.number}</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.label}</div>
              ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Advanced Security Features</h2>
            <p className="w-5h-5ml-2">Our AI Cybersecuri t y Monitor Pro leverages cutting-edgeartificialintelligen c e;
              to provide comprehensi v e protection against evolving cyber threats.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="bg-slate-800/50rounded-2xlp-8borderborder-slate-700hover:border-cyan-500/30transition-allduration-300group" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                  </div>
                  <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                  <ulclassName="w-5h-5ml-2" />
                    {feature.benefits.map((benefit, benefitInd e x) => ())
                      <likey="{benefitInd e x}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
            ))}
          </div>
        </section>

        {/* Security Capabiliti e s Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Comprehensi v e Security Coverage</h2>
            <p className="w-5h-5ml-2">Protect every aspect of your digital infrastructu r e with our comprehensi v e security capabiliti e s.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {securityCapabiliti e s.map((capability, index) => ())
              <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700hover:border-cyan-500/30transition-allduration-300" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {capability.icon}
                  <h3 className="w-5h-5ml-2" />{capability.category}</h3>
                </div>
                <ulclassName="w-5h-5ml-2" />
                  {capability.items.map((item, itemIndex) => ())
                    <likey="{itemIndex}" className="flexitems-centertext-smtext-gray-300" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Threat Types Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Threat Protection</h2>
            <p className="w-5h-5ml-2">Advanced AI detection and prevention for all types of cyber threats and attacks.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {threatTyp e s.map((threat, index) => ())
              <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700hover:border-cyan-500/30transition-allduration-300text-centergroup" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{threat.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{threat.name}</h3>
                <p className="w-5h-5ml-2">{threat.category}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Choose Your Security Plan</h2>
            <p className="w-5h-5ml-2">Flexible pricing plans designed to protect businesses of all sizes.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricingPla n s.map((plan, index) => ())
              <divkey="{index}" className="{`bg-slate-800/50" rounded-2xlp-8border transition-allduration-300relative ${>
                plan.popular ? 'border-cyan-500/50 ring-2ring-cyan-500/20' : 'border-slate-700hover: border-cyan-500/30';
              }`} />
                {plan.popular && ()
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />Most Popular;
                    </span>
                  </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                </div>
                
                <ulclassName="w-5h-5ml-2" />
                  {plan.features.map((feature, featureInd e x) => ())
                    <likey="{featureInd e x}" className="flexitems-centertext-gray-300" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Link;
                  to="/contact";
                  className="{`w-full" py-3rounded-lgfont-semiboldtransition-allduration-300flex items-centerjustify-center ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700';
                      : 'border-2border-cyan-500text-cyan-400hover: bg-cyan-500hover:text-white';
                  }`} />
                  {plan.cta}
                  <ArrowRight className="w-5h-5ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonia l s */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />What Our Customers Say</h2>
              <p className="w-5h-5ml-2">Join hundreds of security professiona l s who trust AI Cybersecuri t y Monitor Pro.;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {testimonia l s.map((testimoni a l, index) => ())
                <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                    </div>
                    <div />
                      <h4 className="w-5h-5ml-2" />{testimoni a l.name}</h4>
                      <p className="w-5h-5ml-2">{testimoni a l.role}</p>
                      <p className="w-5h-5ml-2">{testimoni a l.company}</p>
                    </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {[...Array(testimoni a l.rating)].map((_, i) => ())
                      <Starkey="{i}" className="w-4h-4text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Result: {testimoni a l.results,}>
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Ready to Secure Your Business?;
            </h2>
            <p className="w-5h-5ml-2">Start your free trial today and experience enterprise-gradesecuritypowered by AI.;
              Join hundreds of organizatio n s already protected by our advanced threat detection.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300inline-flexitems-centerjustify-center" />
                Start Free Trial;
                <SparklesclassName="w-5h-5ml-2" />
              </Link>
              <Linkto="/about" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colorsinline-flexitems-centerjustify-center" />
                Learn More;
                <ShieldclassName="w-5h-5ml-2" />
              </Link>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <p />✓ 14-dayfreetrial • ✓ No setup fees • ✓ 24/7 monitoring • ✓ Cancel anytime</p>
            </div>
        </section>
      </div>
  );
}