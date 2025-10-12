import React from 'react'
import { Link } from 'react-router-dom'
import { Shield, ArrowRight, CheckCirc l e, Brain, Lock, Star, Eye } from 'lucide-react'
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AdvancedSecuritySui t e() {
  constfeatures= [
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: '360° Protection',
      description: 'Comprehensi v e security coverage across all endpoints, networks, and cloud infrastructu r e';
    },
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI Threat Detection',
      description: 'Advanced machine learning algorithms detect and prevent sophisticat e d cyber attacks';
    },
    {
      icon: <EyeclassName="w-5h-5ml-2" />,
      title: 'Real-timeMonitoring',
      description: '24/7 security monitoring with instant threat response and automated remediati o n';
    },
    {
      icon: <LockclassName="w-5h-5ml-2" />,
      title: 'Compliance Ready',
      description: 'Meet GDPR, HIPAA, SOX, and other regulatory requiremen t s with built-incompliancetools';
    }
  ]

  const securityModules= [
    {
      category: 'Endpoint Security',
      items: ['Antivirus & Anti-malware', 'Device Encryption', 'USB Protection', 'Applicati o n Control', 'Patch Management', 'Mobile Security']
    },
    {
      category: 'Network Security',
      items: ['Firewall Management', 'Intrusion Detection', 'VPN Solutions', 'Network Segmentati o n', 'DDoS Protection', 'Traffic Analysis']
    },
    {
      category: 'Cloud Security',
      items: ['Cloud Access Control', 'Data Loss Prevention', 'Cloud Monitoring', 'Identity Management', 'API Security', 'Container Security']
    },
    {
      category: 'Threat Intelligen c e',
      items: ['Threat Hunting', 'Vulnerabili t y Scanning', 'Penetrati o n Testing', 'Security Analytics', 'Incident Response', 'Forensics']
    }
  ]

  const pricingPlans= [
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
        'Standard support';
      ],
      popular: false;
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
        'Custom policies';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited endpoints',
        'Custom AI models',
        'White-labelsolution',
        'Dedicated support',
        'Full compliance suite',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Robert Chen',
      company: 'Financial Services Corp',
      content: 'Advanced Security Suite protected us from 3 major cyber attacks this year. The AI detection is incredibly accurate.',
      rating: 5;
    },
    {
      name: 'Lisa Martinez',
      company: 'Healthcare Plus',
      content: 'HIPAA compliance was seamless with this suite. Our auditors were impressed with the security measures.',
      rating: 5;
    },
    {
      name: 'James Wilson',
      company: 'Tech Manufacturi n g Inc',
      content: 'The 24/7 monitoring gives us peace of mind. We sleep better knowing our systems are protected.',
      rating: 5;
    }
  ]

return (
    <Layout;
      title="Advanced Security Suite - Enterprise Cybersecuri t y | Zion Tech Group";
      description="Comprehensi v e cybersecuri t y solution with AI threat detection, 24/7 monitoring, and compliance tools. Protect your business from advanced cyber threats. Get your free security assessment today.";
      keywords="cybersecuri t y, threat detection, security monitoring, compliance, enterprise security, AI security" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <ShieldclassName="w-5h-5ml-2" />
                Enterprise Cybersecuri t y;
              </div>
              <h1 className="w-5h-5ml-2">Advanced Security Suite;
              </h1>
              <p className="w-5h-5ml-2">Protect your business with our comprehensi v e cybersecuri t y solution. AI-poweredthreatdetection, 
                24/7 monitoring, and compliance tools to keep your data and systems secure.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Link;
          to="/contact";
          className="bg-gradient-to-rfrom-red-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-red-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Get Free Assessment;
                  
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                <Linkto="#demo" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colors">View Demo;
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Comprehensi v e Security Features;
              </h2>
              <p className="w-5h-5ml-2">Advanced protection against the latest cyber threats;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey="{index}" className="bg-gradient-to-brfrom-slate-800/50to-purple-900/30rounded-xlp-6borderborder-red-500/20hover:border-red-400/40transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Security Modules */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Complete Security Coverage;
              </h2>
              <p className="w-5h-5ml-2">Protect every aspect of your digital infrastructu r e;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {securityModul e s.map((module, index) => ())
                <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700" />
                  <h3 className="w-5h-5ml-2" />{module.category}</h3>
                  <ulclassName="w-5h-5ml-2" />
                    {module.items.map((item, itemIndex) => ())
                      <likey="{itemIndex}" className="flexitems-centertext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Flexible Security Plans;
              </h2>
              <p className="w-5h-5ml-2">Choose the security level that fits your organizati o n;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <divkey="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8border transition-allduration-300 ${>
                  plan.popular;
                    ? 'border-red-400/40 scale-105shadow-2xl shadow-red-500/20';
                    : 'border-red-500/20 hover: border-red-400/40';
                }`} />
                  {plan.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <StarclassName="w-5h-5ml-2" />
                      Most Popular;
                    </div>
                  )}
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
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
                    className="{`w-full" block text-centerpy-3px-6rounded-lgfont-semiboldtransition-allduration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-rfrom-red-500to-purple-600text-whitehover:from-red-600hover:to-purple-700';
                        : 'border-2border-red-400text-red-400hover: bg-red-400/10';
                    }`}
                    />Get Started;
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Testimonia l s */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Trusted by Industry Leaders;
              </h2>
              <p className="w-5h-5ml-2">See how our security suite protects organizatio n s worldwide;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {testimonia l s.map((testimoni a l, index) => ())
                <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {[...Array(testimoni a l.rating)].map((_, i) => ())
                      <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
                  <div />
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.name}</div>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.company}</div>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Secure Your Business Today;
              </h2>
              <p className="w-5h-5ml-2">Don't wait for a cyber attack. Get comprehensi v e protection with Advanced Security Suite;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-red-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-red-600hover:to-purple-700transition-allduration-300">Get Free Security Assessment;
                </Link>
                <Linkto="/about" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colors">Learn More;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </Layout>
  )
};