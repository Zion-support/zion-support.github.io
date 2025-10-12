import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Clock, CheckCirc l e, ArrowRight, Star, Globe, Target } from 'lucide-react';
import { Truck, ArrowRight} from 'lucide-react';
import FuturisticBackgrou n d from '../components/FuturisticBackgrou n d';
import FuturisticCa r d from '../components/FuturisticCa r d';
import FuturisticButt o n from '../components/FuturisticButt o n';
'use client';


export default function AISupplyChainOptimizerPa g e() {
  constfeatures= [
    {
      title: 'Predictive Demand Forecasti n g',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimizati o n']
    },
    {
      title: 'Smart Route Optimizati o n',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <TruckclassName="w-5h-5ml-2" />,
      benefits: ['Route optimizati o n', 'Fuel cost reduction', 'Delivery time improveme n t', 'Real-timetracking']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Intellige n t inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <PackageclassName="w-5h-5ml-2" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimizati o n']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensi v e risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <ShieldclassName="w-5h-5ml-2" />,
      benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
    }
  ];
  const pricingPlans= [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasti n g',
        'Route optimizati o n',
        'Email support',
        'Standard integratio n s';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Advanced features for growing companies',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasti n g',
        'Multi-modaloptimizatio n',
        'Priority support',
        'Custom integratio n s',
        'Real-timeanalytics';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete solution for large organizatio n s',
      features: [
        'Unlimited warehouses',
        'Custom AI models',
        'White-labeloptions',
        'Dedicated account manager',
        'API access',
        'Advanced security';
      ],
      popular: false;
    }
  ];
  const testimonials= [
    {
      name: 'Robert Chen',
      role: 'Supply Chain Director',
      company: 'Global Logistics Inc.',
      content: 'AI Supply Chain Optimizer reduced our logistics costs by 35% and improved delivery times by 40%. The predictive analytics are game-changing.',
      rating: 5;
    },
    {
      name: 'Maria Rodriguez',
      role: 'Operations Manager',
      company: 'RetailMax Corp',
      content: 'The automated inventory management saved us from stockouts and overstocki n g. Our inventory turnover improved by 50%.',
      rating: 5;
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'Manufacturi n g Solutions',
      content: 'This AI tool transform e d our entire supply chain. We can now predict disruptio n s before they happen and optimize according l y.',
      rating: 5;
    }
  ];
  conststats= [
    { number: '35%', label: 'Cost Reduction', icon: <TrendingUpclassName="w-5h-5ml-2" /> ,},
    { number: '92%', label: 'Forecast Accuracy', icon: <TargetclassName="w-5h-5ml-2" /> ,},
    { number: '500+', label: 'Companies Using', icon: <GlobeclassName="w-5h-5ml-2" /> ,},
    { number: '40%', label: 'Delivery Improveme n t', icon: <ClockclassName="w-5h-5ml-2" /> ,}
  ];
return (
    <>
      <Helmet></Helmet>
        <title />AI Supply Chain Optimizer - Smart Logistics & Inventory Management | Zion Tech Group</title>
        <metaconstname= "description" content="Optimize your supply chain with AI-powereddemandforecasti n g, route optimizati o n, and inventory management. Reduce costs by 35% and improve delivery times by 40%." /  />
        <meta name="keywords" content="AI supply chain, logistics optimizati o n, inventory management, demand forecasti n g, supply chain AI, logistics technology" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-supply-chain-optimizer"  />
      </Helmet>

      <FuturisticBackgrou ndvariant="services" />
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h1 className="w-5h-5ml-2">AI Supply Chain Optimizer;
              </h1>
              <p className="w-5h-5ml-2">Revolutioni z e your supply chain with AI-powereddemandforecasti n g, route optimizati o n, 
                and intellige n t inventory management. Reduce costs by 35% and improve efficiency by 40%.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <FuturisticButt o n;
                  variant="primary"
                  size="lg";
                  onClick="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial;
                  <ArrowRight className="w-5h-5ml-2" />
                </FuturisticButt o n>
                <FuturisticButt o n;
                  variant="ghost"
                  size="lg";
                  onClick="{()" =  />window.open('#demo', '_blank')}
                >
                  Watch Demo;
                </FuturisticButt o n>
              </div>

            {/* Stats */}
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {stats.map((stat, index) => ())
                <divkey="{index}" className="text-center" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.icon}>
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.number}</div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{stat.label}</div>
              ))}
            </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Advanced AI Features;
              </h2>
              <p className="w-5h-5ml-2">Cutting-edgeartificialintelligen c e meets supply chain expertise to optimize your operations;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <FuturisticCa rdkey="{index}" variant="service" className="h-full" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                  <ulclassName="w-5h-5ml-2" />
                    {feature.benefits.map((benefit, benefitInd e x) => ())
                      <likey="{benefitInd e x}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </FuturisticCa r d>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Choose Your Plan;
              </h2>
              <p className="w-5h-5ml-2">Scalable pricing options to match your supply chain needs;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <FuturisticCa r d;
                  key="{index}";
                  variant="{plan.popular" ? "feature" : "service"} 
                  className="{`h-full" ${plan.popular ? 'ring-2ring-purple-500' : ''}`} />
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
                      <likey="{featureInd e x}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <FuturisticButt o n;
                    variant="{plan.popular" ? "primary" : "ghost"}
                    className="w-full"
                    onClick="{()" =  />window.open('/contact', '_blank')}
                  >
                    Get Started;
                  </FuturisticButt o n>
                </FuturisticCa r d>
              ))}
            </div>
        </section>

        {/* Testimonia l s Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />What Our Clients Say;
              </h2>
              <p className="w-5h-5ml-2">Join hundreds of companies optimizing their supply chains;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {testimonia l s.map((testimoni a l, index) => ())
                <FuturisticCa rdkey="{index}" variant="testimoni a l" className="h-full" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {[...Array(testimoni a l.rating)].map((_, i) => ())
                      <Starkey="{i}" className="w-4h-4text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <blockquoteclassName="w-5h-5ml-2" />"{testimoni a l.content}";
                  </blockquote>
                  <footer />
                    <p className="w-5h-5ml-2">{testimoni a l.name}</p>
                    <p className="w-5h-5ml-2">{testimoni a l.role}</p>
                    <p className="w-5h-5ml-2">{testimoni a l.company}</p>
                  </footer>
                </FuturisticCa r d>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <FuturisticCa rdvariant="feature" className="text-center" />
              <h2 className="w-5h-5ml-2" />Ready to Optimize Your Supply Chain?;
              </h2>
              <p className="w-5h-5ml-2">Start your free 14-daytrialtoday. No credit card required. Join 500+ companies optimizing their supply chains.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <FuturisticButt o n;
                  variant="primary"
                  size="lg";
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Start Free Trial;
                </FuturisticButt o n>
                <FuturisticButt o n;
                  variant="secondary"
                  size="lg";
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo;
                </FuturisticButt o n>
              </div>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <p />✓ 14-dayfreetrial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCa r d>
          </div>
        </section>
      </FuturisticBackgrou n d>
    </>
  );
}