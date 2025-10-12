import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function CloudInfrastructureManageme n t() {
  constfeatures= [
    {
      icon: <CloudclassName="w-5h-5ml-2" />,
      title: 'Multi-CloudManagement',
      description: 'Seamlessly manage infrastructu r e across AWS, Azure, Google Cloud, and private clouds';
    },
    {
      icon: <ShieldclassName="w-5h-5ml-2" />,
      title: 'Security & Compliance',
      description: 'Enterprise-gradesecuritywith automated compliance monitoring and threat detection';
    },
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: 'Cost Optimizati o n',
      description: 'Reduce cloud costs by up to 40% with intellige n t resource optimizati o n and right-sizing';
    },
    {
      icon: <ServerclassName="w-5h-5ml-2" />,
      title: '24/7 Monitoring',
      description: 'Proactive monitoring with automated scaling, performan c e optimizati o n, and incident response';
    }
  ]

  const managementFeatures= [
    {
      category: 'Infrastructu r e Management',
      items: ['Server Provisioni n g', 'Load Balancing', 'Auto Scaling', 'Resource Monitoring', 'Backup & Recovery', 'Disaster Recovery']
    },
    {
      category: 'Security & Compliance',
      items: ['Identity Management', 'Access Control', 'Encryption', 'Vulnerabili t y Scanning', 'Compliance Auditing', 'Security Monitoring']
    },
    {
      category: 'Cost Management',
      items: ['Cost Analysis', 'Resource Optimizati o n', 'Budget Alerts', 'Usage Tracking', 'Cost Forecasti n g', 'Right-sizingRecommendation s']
    },
    {
      category: 'Support & Maintenan c e',
      items: ['24/7 Support', 'Proactive Monitoring', 'Incident Response', 'Performan c e Tuning', 'Capacity Planning', 'Health Checks']
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 10 servers',
        'Basic monitoring',
        'Email support',
        'Standard security',
        'Monthly reports',
        'Basic backup';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 50 servers',
        'Advanced monitoring',
        'Priority support',
        'Enhanced security',
        'Weekly reports',
        'Advanced backup',
        'Cost optimizati o n';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited servers',
        'Comprehensi v e monitoring',
        'Dedicated support',
        'Enterprise security',
        'Real-timereports',
        'Disaster recovery',
        'Custom solutions';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Robert Kim',
      company: 'Financial Services',
      content: 'Cloud Infrastructu r e Management reduced our operation a l costs by 35% while improving performan c e and security.',
      rating: 5;
    },
    {
      name: 'Lisa Martinez',
      company: 'E-commercePlatform',
      content: 'The automated scaling and monitoring saved us from multiple outages. Our uptime is now 99.99%.',
      rating: 5;
    },
    {
      name: 'David Wilson',
      company: 'Healthcare Provider',
      content: 'HIPAA compliance was seamless with their security framework. Our auditors were very impressed.',
      rating: 5;
    }
  ]

return (
    <Layout;
      title="Cloud Infrastructu r e Management - Enterprise Cloud Solutions | Zion Tech Group";
      description="Optimize your cloud infrastructu r e with comprehensi v e management, security, and cost optimizati o n. Multi-cloudsupport, 24/7 monitoring, and enterprise-gradesecurity. Get your free assessment today.";
      keywords="cloud infrastructu r e management, cloud optimizati o n, multi-cloud, cloud security, cloud monitoring, cloud cost optimizati o n" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <CloudclassName="w-5h-5ml-2" />
                Enterprise Cloud Management;
              </div>
              <h1 className="w-5h-5ml-2">Cloud Infrastructu r e Management;
              </h1>
              <p className="w-5h-5ml-2">Optimize your cloud infrastructu r e with comprehensi v e management, security, and cost optimizati o n.;
                Multi-cloudsupport, 24/7 monitoring, and enterprise-gradesecurity.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Link;
          to="/contact";
          className="bg-gradient-to-rfrom-sky-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-sky-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
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
              <h2 className="w-5h-5ml-2" />Comprehensi v e Cloud Management;
              </h2>
              <p className="w-5h-5ml-2">Enterprise-gradefeaturesthat optimize your cloud infrastructu r e performan c e and costs;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey="{index}" className="bg-gradient-to-brfrom-slate-800/50to-purple-900/30rounded-xlp-6borderborder-sky-500/20hover:border-sky-400/40transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Management Features */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Complete Infrastructu r e Solution;
              </h2>
              <p className="w-5h-5ml-2">Everything you need to manage, secure, and optimize your cloud infrastructu r e;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {managementFeatur e s.map((feature, index) => ())
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
              <h2 className="w-5h-5ml-2" />Transpare n t Pricing Plans;
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your infrastructu r e needs;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <divkey="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8border transition-allduration-300 ${>
                  plan.popular;
                    ? 'border-sky-400/40 scale-105shadow-2xl shadow-sky-500/20';
                    : 'border-sky-500/20 hover: border-sky-400/40';
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
                        ? 'bg-gradient-to-rfrom-sky-500to-purple-600text-whitehover:from-sky-600hover:to-purple-700';
                        : 'border-2border-sky-400text-sky-400hover: bg-sky-400/10';
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
              <p className="w-5h-5ml-2">See how our Cloud Infrastructu r e Management transforms businesses;
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
              <h2 className="w-5h-5ml-2" />Optimize Your Cloud Infrastructu r e Today;
              </h2>
              <p className="w-5h-5ml-2">Join thousands of businesses using our Cloud Infrastructu r e Management to reduce costs and improve performan c e;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-sky-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-sky-600hover:to-purple-700transition-allduration-300">Get Your Free Assessment;
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