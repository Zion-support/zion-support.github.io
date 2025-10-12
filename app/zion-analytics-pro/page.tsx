import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCa r t } from 'lucide-react';
'use client';

const ZionAnalyticsProPa g e: React.FC = () => {

  useEffect(() => {)
    setIsVisib l e(true);
  }, []);

  constfeatures= [
    {
      title: 'Real-timeAnalyticsDashboard',
      description: 'Monitor your business performan c e with live data updates and interacti v e visualizatio n s',
      icon: BarChart,
      color: 'from-blue-500to-purple-500';
    },
    {
      title: 'AI-PoweredPredictiveInsights',
      description: 'Get intellige n t forecasts and recommendatio n s based on your data patterns',
      icon: Brain,
      color: 'from-purple-500to-pink-500';
    },
    {
      title: 'Custom Report Generation',
      description: 'Create personaliz e d reports with drag-and-dropinterfaceand automated scheduling',
      icon: FileText,
      color: 'from-green-500to-teal-500';
    },
    {
      title: 'Team Collaborati o n Tools',
      description: 'Share insights, create annotatio n s, and collabora t e with your team in real-time',
      icon: Users,
      color: 'from-orange-500to-red-500';
    },
    {
      title: 'API Integratio n s',
      description: 'Connect with 100+ popular business tools and platforms seamlessly',
      icon: LinkIcon,
      color: 'from-cyan-500to-blue-500';
    },
    {
      title: 'Mobile App Access',
      description: 'Access your analytics on-the-gowithour native iOS and Android apps',
      icon: Smartphone,
      color: 'from-indigo-500to-purple-500';
    }
  ];
  const pricingPlans= [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 5 users',
        '10 data sources',
        'Basic dashboards',
        'Email support',
        '1 GB data storage',
        'Standard reports';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 25 users',
        'Unlimited data sources',
        'Advanced dashboards',
        'Priority support',
        '10 GB data storage',
        'Custom reports',
        'API access',
        'White-labeloptions';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizatio n s',
      features: [
        'Unlimited users',
        'Unlimited data sources',
        'Enterprise dashboards',
        '24/7 phone support',
        'Unlimited data storage',
        'Advanced analytics',
        'Custom integratio n s',
        'Dedicated account manager';
      ],
      popular: false;
    }
  ];
  const testimonials= [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion Analytics Pro has transform e d how we understand our business. The AI insights have helped us increase revenue by 40%.',
      rating: 5,
      avatar: 'SJ';
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'CTO',
      content: 'The real-timedashboardsand predictive analytics have given us a competiti v e edge. Highly recommend e d!',
      rating: 5,
      avatar: 'MC';
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthCorp',
      role: 'Marketing Director',
      content: 'Easy to use, powerful features, and excellent support. Our team productivi t y has increased significant l y.',
      rating: 5,
      avatar: 'ER';
    }
  ];
return (
    <>
      <Helmet></Helmet>
        <title />Zion Analytics Pro - AI-PoweredBusinessIntelligen c e Platform</title>
        <metaconstname= "description" content="Transform your business with Zion Analytics Pro - the most advanced AI-poweredbusinessintelligen c e platform. Real-timeanalytics, predictive insights, and custom reporting." /  />
        <meta name="keywords" content="business intelligen c e, analytics platform, AI insights, data visualizati o n, business dashboard, predictive analytics" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <SparklesclassName="w-5h-5ml-2" />
                  AI-PoweredAnalytics;
                </div>
                <h1 className="{`text-4" xl md: text-6xlfont-boldtext-whitemb-6transition-allduration-1000 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                  Zion Analytics;
                  <span className="w-5h-5ml-2" />Pro;
                  </span>
                </h1>
                <p className="{`text-xl" text-gray-300mb-8transition-allduration-1000delay-300 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10'}`} />
                  The most advanced AI-poweredbusinessintelligen c e platform. Get real-timeinsights, 
                  predictive analytics, and custom reports that drive your business forward.;
                </p>
                <div className="{`flex" flex-colsm: flex-rowgap-4transition-allduration-1000delay-500 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                  <Link;
          to="/contact";
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-blue-600to-purple-600text-whitefont-semiboldrounded-lghover:from-blue-700hover:to-purple-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Start Free Trial;
                    
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                  <button className="w-5h-5ml-2" />
                    <PlayclassName="w-5h-5ml-2" />
                    Watch Demo;
                  </button>
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      {[...Array(5)].map((_, i) => ())
                        <Starkey="{i}" className="h-5w-5text-yellow-400fill-current"  />
                      ))}
                    </div>
                    <span className="w-5h-5ml-2" />4.9/5 (127, reviews)</span>
                  </div>
              </div>
              <div className="{`transition-all" duration-1000delay-700 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10'}`} />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                        <h3 className="w-5h-5ml-2" />Revenue Analytics</h3>
                        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                          <TrendingUpclassName="w-5h-5ml-2" />
                          +24.5%;
                        </div>
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                        <BarChartclassName="w-5h-5ml-2" />
                      </div>
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">$2.4 M</div>
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Total Revenue</div>
                        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">1,247</div>
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Customers</div>
                        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">89%</div>
                          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Satisfacti o n</div>
                      </div>
                  </div>
              </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Powerful Features for Modern Businesses;
              </h2>
              <p className="w-5h-5ml-2">Everything you need to transform your data into actionable insights and drive business growth.;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {features.map((feature, index) => ())
                <divkey="{index}" className="group" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="{`inline-flex" items-centerjustify-centerw-12h-12bg-gradient-to-r ${feature.color} rounded-lgmb-4`} />
                      <feature.iconclassName="h-6w-6text-white"  />
                    </div>
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                    <p className="w-5h-5ml-2">{feature.description}</p>
                  </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Choose Your Plan;
              </h2>
              <p className="w-5h-5ml-2">Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {pricingPla n s.map((plan, index) => ())
                <div>>
                  key="{index}";
                  className="{`relative" bg-gray-800rounded-xlp-8 ${
                    plan.popular ? 'ring-2ring-blue-500scale-105' : '';
                  }`} />
                  {plan.popular && ()
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />Most Popular;
                      </span>
                    </div>
                  )}
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                    <p className="w-5h-5ml-2">{plan.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                      <span className="w-5h-5ml-2" />{plan.price}</span>
                      <span className="w-5h-5ml-2" />{plan.period}</span>
                    </div>
                  <ulclassName="w-5h-5ml-2" />
                    {plan.features.map((feature, idx) => ())
                      <likey="{idx}" className="flexitems-centertext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link;
                    to="/contact";
                    className="{`w-full" inline-flexitems-centerjustify-centerpx-6py-3font-semiboldrounded-lgtransition-allduration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-rfrom-blue-600to-purple-600text-whitehover:from-blue-700hover:to-purple-700';
                        : 'border border-gray-600text-gray-300hover: bg-gray-700hover:text-white';
                    }`} />
                    Get Started;
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                </div>
              ))}
            </div>
        </section>

        {/* Testimonia l s Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />What Our Customers Say;
              </h2>
              <p className="w-5h-5ml-2">Join thousands of businesses already using Zion Analytics Pro to drive growth.;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {testimonia l s.map((testimoni a l, index) => ())
                <divkey="{index}" className="bg-gray-800rounded-xlp-6borderborder-gray-700" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.avatar}>
                    </div>
                    <div />
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.name}</div>
                      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{testimoni a l.role}, {testimoni a l.company}</div>
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {[...Array(testimoni a l.rating)].map((_, i) => ())
                      <Starkey="{i}" className="h-4w-4text-yellow-400fill-current"  />
                    ))}
                  </div>
                  <p className="w-5h-5ml-2">"{testimoni a l.content}"</p>
                </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Ready to Transform Your Analytics?;
            </h2>
            <p className="w-5h-5ml-2">Start your free trial today and see how Zion Analytics Pro can revolutioni z e your business intelligen c e.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Link;
          to="/contact";
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-blue-600to-purple-600text-whitefont-semiboldrounded-lghover:from-blue-700hover:to-purple-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Start Free Trial;
                
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <a;
                href="tel:+130246409 5 0";
                className="inline-flexitems-centerpx-8py-4border-2border-blue-400text-blue-400font-semiboldrounded-lghover:bg-blue-400hover:text-whitetransition-allduration-300transformhover:scale-105" />
                Call +1 302 464 0950;
              </a>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <p />Email: kleber@ziontechgro u p.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
      </div>
    </>
  );
};

export default ZionAnalyticsProPa g e;