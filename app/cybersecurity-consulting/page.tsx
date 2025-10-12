import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function CybersecurityConsulti n g() {
  constfeatures= [
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Security Assessment',
      description: 'Comprehensi v e security audits to identify vulnerabiliti e s and assess your current security posture';
    },
    {
      icon: <LockclassName="w-5h-5ml-2" />,
      title: 'Compliance Management',
      description: 'Ensure compliance with GDPR, HIPAA, SOX, PCI-DSS, and other regulatory requiremen t s';
    },
    {
      icon: <EyeclassName="w-5h-5ml-2" />,
      title: 'Threat Intelligen c e',
      description: 'Advanced threat detection and response with 24/7 monitoring and incident management';
    },
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'Security Training',
      description: 'Comprehensi v e security awareness training for your team to prevent human error attacks';
    }
  ]

  const consultingFeatures= [
    {
      category: 'Security Assessment',
      items: ['Vulnerabili t y Scanning', 'Penetrati o n Testing', 'Risk Assessment', 'Security Audits', 'Compliance Reviews', 'Gap Analysis']
    },
    {
      category: 'Implementati o n',
      items: ['Security Architectu r e', 'Policy Developme n t', 'Tool Implementati o n', 'Process Design', 'Training Programs', 'Change Management']
    },
    {
      category: 'Monitoring & Response',
      items: ['24/7 SOC Services', 'Incident Response', 'Threat Hunting', 'Forensic Analysis', 'Security Monitoring', 'Alert Management']
    },
    {
      category: 'Compliance',
      items: ['GDPR Compliance', 'HIPAA Compliance', 'SOX Compliance', 'PCI-DSSCompliance', 'ISO 27001', 'NIST Framework']
    }
  ]

  const pricingPlans= [
    {
      name: 'Assessment',
      price: '$2,999',
      period: '/project',
      description: 'Comprehensi v e security assessment',
      features: [
        'Security audit',
        'Vulnerabili t y assessment',
        'Risk analysis',
        'Compliance review',
        'Detailed report',
        'Recommendatio n s';
      ],
      popular: false;
    },
    {
      name: 'Implementati o n',
      price: '$9,999',
      period: '/project',
      description: 'Complete security implementati o n',
      features: [
        'Security assessment',
        'Tool implementati o n',
        'Policy developme n t',
        'Team training',
        '3 months support',
        'Compliance guidance';
      ],
      popular: true;
    },
    {
      name: 'Ongoing',
      price: '$4,999',
      period: '/month',
      description: 'Continuous security management',
      features: [
        '24/7 monitoring',
        'Incident response',
        'Regular assessmen t s',
        'Compliance management',
        'Security updates',
        'Dedicated support';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Jennifer Lee',
      company: 'Healthcare Provider',
      content: 'Cybersecuri t y Consulting helped us achieve HIPAA compliance and significant l y improve our security posture.',
      rating: 5;
    },
    {
      name: 'Michael Rodriguez',
      company: 'Financial Services',
      content: 'Their threat intelligen c e and incident response capabiliti e s prevented a major security breach. Highly recommend e d.',
      rating: 5;
    },
    {
      name: 'Sarah Johnson',
      company: 'E-commercePlatform',
      content: 'The security training program transform e d our team's awareness. We've seen a 90% reduction in security incidents.',
      rating: 5;
    }
  ]

return (
    <Layout;
      title="Cybersecuri t y Consulting - Expert Security Solutions | Zion Tech Group";
      description="Protect your business with expert cybersecuri t y consulting. Security assessmen t s, compliance management, threat intelligen c e, and 24/7 monitoring. Get your free security audit today.";
      keywords="cybersecuri t y consulting, security assessment, compliance management, threat intelligen c e, security training, penetrati o n testing" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <ShieldclassName="w-5h-5ml-2" />
                Expert Cybersecuri t y Consulting;
              </div>
              <h1 className="w-5h-5ml-2">Cybersecuri t y Consulting;
              </h1>
              <p className="w-5h-5ml-2">Protect your business with expert cybersecuri t y consulting. Security assessmen t s, compliance management, 
                threat intelligen c e, and 24/7 monitoring to keep your data secure.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Link
          to="/contact"
          className="bg-gradient-to-rfrom-red-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-red-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Get Free Security Audit;
                  
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                <Linkto="#demo" className="border-2border-whitetext-whitepx-8py-4rounded-lgfont-semiboldhover:bg-white/10transition-colors">View Case Studies;
                </Link>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Comprehensi v e Security Solutions;
              </h2>
              <p className="w-5h-5ml-2">Expert cybersecuri t y services that protect your business from evolving threats;
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

        {/* Consulting Features */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Complete Security Consulting;
              </h2>
              <p className="w-5h-5ml-2">End-to-endcybersecurit y services to protect your organizati o n;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {consultingFeatur e s.map((feature, index) => ())
                <divkey="{index}" className="bg-slate-800/50rounded-xlp-6borderborder-slate-700" />
                  <h3 className="w-5h-5ml-2" />{feature.category}</h3>
                  <ulclassName="w-5h-5ml-2" />
                    {feature.items.map((item, itemIndex) => ())
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
              <h2 className="w-5h-5ml-2" />Flexible Consulting Packages;
              </h2>
              <p className="w-5h-5ml-2">Choose the security consulting package that fits your needs;
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
                  <Link
                    to="/contact"
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
              <p className="w-5h-5ml-2">See how our Cybersecuri t y Consulting protects organizatio n s worldwide;
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
              <p className="w-5h-5ml-2">Don't wait for a security breach. Get expert cybersecuri t y consulting to protect your organizati o n;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-red-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-red-600hover:to-purple-700transition-allduration-300">Get Your Free Security Audit;
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