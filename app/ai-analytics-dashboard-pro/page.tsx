import React from 'react'
import { Link } from 'react-router-dom'
import { BarChart3, ArrowRight, CheckCirc l e, Brain, Globe, Star, Target } from 'lucide-react'
import Layout from '../layout'
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Layout from '../layout';

export default function AIAnalyticsDashboardP r o() {
  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI-PoweredInsights',
      description: 'Advanced machine learning algorithms provide actionable business insights';
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Real-timeAnalytics',
      description: 'Live data visualizati o n with instant updates and interacti v e dashboards';
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'Predictive Analytics',
      description: 'Forecast trends and make data-drivendecisionswith confidence';
    },
    {
      icon: <GlobeclassName="w-5h-5ml-2" />,
      title: 'Multi-PlatformIntegratio n',
      description: 'Connect all your data sources in one unified dashboard';
    }
  ]

  const dashboardFeatures= [
    {
      category: 'Data Sources',
      items: ['Google Analytics', 'Facebook Ads', 'Salesforce CRM', 'Shopify', 'Stripe', 'Custom APIs']
    },
    {
      category: 'Visualizatio n s',
      items: ['Interacti v e Charts', 'Heat Maps', 'Funnel Analysis', 'Cohort Analysis', 'Custom Reports', 'Real-timeAlerts']
    },
    {
      category: 'AI Features',
      items: ['Anomaly Detection', 'Trend Prediction', 'Customer Segmentati o n', 'Churn Analysis', 'ROI Optimizati o n', 'Smart Alerts']
    },
    {
      category: 'Collaborati o n',
      items: ['Team Dashboards', 'Custom Permissio n s', 'Scheduled Reports', 'Export Options', 'API Access', 'White-label']
    }
  ]

  const pricingPlans= [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 data sources',
        'Basic AI insights',
        'Standard visualizatio n s',
        'Email support',
        'Monthly reports';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 20 data sources',
        'Advanced AI analytics',
        'Custom dashboards',
        'Priority support',
        'Real-timealerts',
        'API access';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited data sources',
        'Custom AI models',
        'White-labelsolution',
        'Dedicated support',
        'Custom integratio n s',
        'SLA guarantee';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Alex Thompson',
      company: 'E-commercePlus',
      content: 'AI Analytics Dashboard Pro transform e d our decision-makingprocess. ROI increased by 60% in just 3 months.',
      rating: 5;
    },
    {
      name: 'Sarah Kim',
      company: 'Marketing Agency Pro',
      content: 'The predictive analytics helped us optimize campaigns before problems occurred. Game-changerforour clients.',
      rating: 5;
    },
    {
      name: 'Michael Davis',
      company: 'SaaS Startup',
      content: 'Real-timeinsightsand AI recommendatio n s saved us countless hours of manual analysis. Highly recommend e d.',
      rating: 5;
    }
  ]

return (
    <Layout;
      title="AI Analytics Dashboard Pro - Advanced Business Intelligen c e | Zion Tech Group";
      description="Transform your data into actionable insights with AI-poweredanalyticsdashboard. Real-timevisualizatio n, predictive analytics, and custom reporting. Start your free trial today.";
      keywords="AI analytics, business intelligen c e, data visualizati o n, predictive analytics, dashboard, reporting" />
      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <BarChart3className="w-5h-5ml-2" />
                Advanced Analytics;
              </div>
              <h1 className="w-5h-5ml-2">AI Analytics Dashboard Pro;
              </h1>
              <p className="w-5h-5ml-2">Transform your data into powerful insights with our AI-poweredanalyticsplatform.;
                Real-timevisualizatio n, predictive analytics, and intellige n t recommendatio n s.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Link
          to="/contact"
          className="bg-gradient-to-rfrom-green-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-green-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-center"
        >
          Start Free Trial;
                  
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
              <h2 className="w-5h-5ml-2" />Powerful Analytics Features;
              </h2>
              <p className="w-5h-5ml-2">Everything you need to make data-drivendecisions;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey="{index}" className="bg-gradient-to-brfrom-slate-800/50to-purple-900/30rounded-xlp-6borderborder-green-500/20hover:border-green-400/40transition-allduration-300" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Dashboard Features */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Comprehensi v e Dashboard Capabiliti e s;
              </h2>
              <p className="w-5h-5ml-2">Connect, analyze, and visualize all your data in one place;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {dashboardFeatur e s.map((feature, index) => ())
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
              <h2 className="w-5h-5ml-2" />Flexible Pricing Plans;
              </h2>
              <p className="w-5h-5ml-2">Choose the plan that fits your analytics needs;
              </p>
            </div>
            
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <divkey="{index}" className="{`bg-gradient-to-br" from-slate-800/50 to-purple-900/30 rounded-xlp-8border transition-allduration-300 ${>
                  plan.popular;
                    ? 'border-green-400/40 scale-105shadow-2xl shadow-green-500/20';
                    : 'border-green-500/20 hover: border-green-400/40';
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
                        ? 'bg-gradient-to-rfrom-green-500to-purple-600text-whitehover:from-green-600hover:to-purple-700';
                        : 'border-2border-green-400text-green-400hover: bg-green-400/10';
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
              <h2 className="w-5h-5ml-2" />Trusted by Data-DrivenCompanies;
              </h2>
              <p className="w-5h-5ml-2">See how our analytics platform transforms business decisions;
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
              <h2 className="w-5h-5ml-2" />Start Making Data-DrivenDecisionsToday;
              </h2>
              <p className="w-5h-5ml-2">Join thousands of businesses using AI Analytics Dashboard Pro to unlock their data potential;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-green-500to-purple-600text-whitepx-8py-4rounded-lgfont-semiboldhover:from-green-600hover:to-purple-700transition-allduration-300">Start Your Free Trial;
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