import { Helmet } from 'react-helmet-async'
import { Brain, BarChart3, Users, TrendingUp, Target, Zap, CheckCirc l e, ArrowRight, Star, Shield, Play, Heart, Calendar, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AICustomerInsightsPa g e: React.FC = () => {
  constfeatures= [
    {
      icon: <BrainclassName="w-5h-5ml-2" />,
      title: 'AI-PoweredAnalytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict future trends with 95% accuracy.',
      price: '$299/month',
      benefits: ['Real-timeinsights', 'Predictive analytics', 'Behavioral analysis', 'Trend forecasti n g']
    },
    {
      icon: <BarChart3className="w-5h-5ml-2" />,
      title: 'Customer Segmentati o n',
      description: 'Automatical l y segment customers based on behavior, preferenc e s, and value with dynamic clustering algorithms.',
      price: '$199/month',
      benefits: ['Dynamic segmentati o n', 'Behavioral clustering', 'Value-basedgrouping', 'Custom criteria']
    },
    {
      icon: <UsersclassName="w-5h-5ml-2" />,
      title: 'Customer Journey Mapping',
      description: 'Visualize complete customer journeys across all touchpoin t s with interacti v e journey maps and conversion funnels.',
      price: '$249/month',
      benefits: ['Journey visualizati o n', 'Touchpoint analysis', 'Conversion tracking', 'Optimizati o n insights']
    },
    {
      icon: <TrendingUpclassName="w-5h-5ml-2" />,
      title: 'Churn Prediction',
      description: 'Predict customer churn with 92% accuracy using advanced ML models and proactive retention strategies.',
      price: '$179/month',
      benefits: ['Churn prediction', 'Risk scoring', 'Retention strategies', 'Early warning alerts']
    },
    {
      icon: <TargetclassName="w-5h-5ml-2" />,
      title: 'Personalizati o n Engine',
      description: 'Create hyper-personalized experienc e s with AI-drivencontentrecommendatio n s and dynamic pricing.',
      price: '$399/month',
      benefits: ['Content personalizati o n', 'Dynamic pricing', 'Recommendati o n engine', 'A/B testing']
    },
    {
      icon: <ZapclassName="w-5h-5ml-2" />,
      title: 'Real-timeInsights',
      description: 'Get instant customer insights with real-timedataprocessing and live dashboard updates.',
      price: '$149/month',
      benefits: ['Live dashboards', 'Real-timealerts', 'Instant notificatio n s', 'Live data streams']
    }
  ]

  constuseCases= [
    {
      title: 'E-commercePersonalizatio n',
      description: 'Increase conversion rates by 35% with personaliz e d product recommendatio n s and dynamic pricing.',
      metrics: ['35% conversion increase', '28% higher AOV', '42% repeat purchases'],
      icon: <ShoppingCa rtclassName="w-5h-5ml-2" />
    },
    {
      title: 'SaaS Customer Success',
      description: 'Reduce churn by 50% with predictive analytics and proactive customer success management.',
      metrics: ['50% churn reduction', '60% faster onboarding', '45% feature adoption'],
      icon: <MonitorclassName="w-5h-5ml-2" />
    },
    {
      title: 'Financial Services',
      description: 'Improve risk assessment and fraud detection with advanced customer behavior analysis.',
      metrics: ['85% fraud detection', '30% risk reduction', '25% faster approvals'],
      icon: <ShieldclassName="w-5h-5ml-2" />
    },
    {
      title: 'Healthcare Analytics',
      description: 'Enhance patient engagement and treatment outcomes with personaliz e d healthcare insights.',
      metrics: ['40% engagement increase', '25% better outcomes', '35% cost reduction'],
      icon: <HeartclassName="w-5h-5ml-2" />
    }
  ]

  constpricing= [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with customer insights',
      features: [
        'Up to 10,000 customers',
        'Basic analytics dashboard',
        'Email support',
        'Standard integratio n s',
        'Monthly reports',
        'Basic segmentati o n';
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses with complex customer data',
      features: [
        'Up to 100,000 customers',
        'Advanced AI analytics',
        'Priority support',
        'Custom integratio n s',
        'Real-timedashboards',
        'Advanced segmentati o n',
        'Churn prediction',
        'API access';
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large enterpris e s with unlimited customers',
      features: [
        'Unlimited customers',
        'Full AI suite',
        '24/7 dedicated support',
        'White-labelsolution',
        'Custom developme n t',
        'Advanced security',
        'SLA guarantee',
        'Dedicated account manager';
      ],
      popular: false;
    }
  ]

  const testimonials= [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Inc.',
      role: 'VP of Marketing',
      content: 'AI Customer Insights transform e d our understandi n g of customer behavior. We increased retention by 40% in just 3 months.',
      rating: 5,
      avatar: 'SC';
    },
    {
      name: 'Michael Rodriguez',
      company: 'DataDriven Solutions',
      role: 'Head of Analytics',
      content: 'The predictive analytics are incredibly accurate. We can now prevent churn before it happens and optimize our customer journey.',
      rating: 5,
      avatar: 'MR';
    },
    {
      name: 'Emily Johnson',
      company: 'GrowthCorp',
      role: 'Customer Success Director',
      content: 'The personalizati o n engine has revolutioniz e d our customer experience. Our NPS score increased by 25 points.',
      rating: 5,
      avatar: 'EJ';
    }
  ]

return (
    <>
      <Helmet></Helmet>
        <title />AI Customer Insights - Advanced Analytics & Personalizati o n | Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with AI-poweredanalytics, churn prediction, and personalizati o n. Increase retention by 40% and boost revenue with intellige n t customer insights." />
        <meta name="keywords" content="AI customer insights, customer analytics, churn prediction, personalizati o n engine, customer segmentati o n, behavioral analysis, customer journey mapping, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <linkrel="canonical" href="https://ziontechgro u p.com/ai-customer-insights"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="absoluteinset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDel a y: '1 s' ,}}  />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <BrainclassName="w-5h-5ml-2" />
            <span />AI-PoweredCustomerIntelligen c e</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Customer;
            <br />
            <span className="w-5h-5ml-2" />Insights;
            </span>
          </h1>
          
          <p className="w-5h-5ml-2" />
            Transform customer data into actionable insights with advanced AI analytics, 
            churn prediction, and hyper-personalization.;
            <br />
            <span className="w-5h-5ml-2" />Increase retention by 40% and boost revenue with intellige n t customer insights.</span>
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <Linkto="/contact" className="groupbg-gradient-to-rfrom-cyan-500to-purple-600text-whitepx-10py-4rounded-xlfont-semiboldhover:from-cyan-600hover:to-purple-700transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lgshadow-cyan-500/25hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Linkto="/demo" className="groupborder-2border-cyan-400text-cyan-400px-10py-4rounded-xlfont-semiboldhover:bg-cyan-400hover:text-gray-900transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
              <span />Watch Demo</span>
              <PlayclassName="w-5h-5ml-2" />
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Powerful <span className="w-5h-5ml-2" />AI Features</span>
            </h2>
            <p className="w-5h-5ml-2">Advanced AI-poweredcustomerinsights that help you understand, predict, and optimize customer behavior;
              for maximum business growth and retention.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {features.map((feature, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{feature.icon}>
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {feature.benefits.map((benefit, benefitInd e x) => ())
                    <divkey="{benefitInd e x}" className="flexitems-centerspace-x-2text-gray-400text-sm" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <span className="w-5h-5ml-2" />{feature.price}
                  </span>
                  <Linkto="/contact" className="group/linkflexitems-centerspace-x-2text-cyan-400hover:text-cyan-300transition-colors" />
                    <span className="w-5h-5ml-2" />Learn More</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                </div>
            ))}
          </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <TargetclassName="w-5h-5ml-2" />
              <span />Real-WorldApplication s</span>
            </div>
            <h2 className="w-5h-5ml-2" />
              Proven <span className="w-5h-5ml-2" />Use Cases</span>
            </h2>
            <p className="w-5h-5ml-2">See how leading companies use AI Customer Insights to drive growth, 
              reduce churn, and create exception a l customer experienc e s.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {useCases.map((useCase, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{useCase.icon}>
                  </div>
                  <h3 className="w-5h-5ml-2" />{useCase.title}
                  </h3>
                </div>
                <p className="w-5h-5ml-2">{useCase.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {useCase.metrics.map((metric, metricInd e x) => ())
                    <divkey="{metricInd e x}" className="flexitems-centerspace-x-2text-cyan-400font-semibold" />
                      <TrendingUpclassName="w-5h-5ml-2" />
                      <span />{metric}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              Simple <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the perfect plan for your business needs. All plans include our core AI features;
              with no hidden fees or setup costs.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {pricing.map((plan, index) => ())
              <divkey="{index}" className="{`relative" group bg-white/10 backdrop-blur-lgrounded-2xl p-8bordertransition-allduration-300hover:scale-105 ${>
                plan.popular;
                  ? 'border-cyan-400/50 bg-gradient-to-brfrom-cyan-500/10 to-purple-500/10';
                  : 'border-white/20 hover: bg-white/20';
              }`} />
                {plan.popular && ()
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">Most Popular>
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  {plan.features.map((feature, featureInd e x) => ())
                    <divkey="{featureInd e x}" className="flexitems-centerspace-x-3" />
                      <CheckCirc leclassName="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link
                  to="/contact"
                  className="{`block" w-fulltext-centerpy-3rounded-xlfont-semiboldtransition-allduration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-rfrom-cyan-500to-purple-600text-whitehover:from-cyan-600hover:to-purple-700shadow-lgshadow-cyan-500/25';
                      : 'border-2border-cyan-400text-cyan-400hover: bg-cyan-400hover:text-gray-900';
                  }`}
                  />Get Started;
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonia l s Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />
              What Our <span className="w-5h-5ml-2" />Customers Say</span>
            </h2>
            <p className="w-5h-5ml-2">Join thousands of businesses that trust AI Customer Insights to drive growth and customer success.;
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            {testimonia l s.map((testimoni a l, index) => ())
              <divkey="{index}" className="groupbg-white/10backdrop-blur-lgrounded-2xlp-8borderborder-white/20hover:bg-white/20transition-allduration-300hover:scale-105" />
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
                    <Starkey="{i}" className="w-5h-5text-yellow-400fill-current"  />
                  ))}
                </div>
                
                <p className="w-5h-5ml-2">"{testimoni a l.content}";
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <h2 className="w-5h-5ml-2" />
                  Ready to Transform Your <span className="w-5h-5ml-2" />Customer Experience?</span>
                </h2>
                
                <p className="w-5h-5ml-2">Start your free trial today and see how AI Customer Insights can help you;
                  understand, predict, and optimize customer behavior for maximum growth.;
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <Linkto="/contact" className="groupbg-whitetext-cyan-600px-10py-4rounded-xlfont-boldtext-lghover:bg-gray-100transition-allduration-300flexitems-centerjustify-centerspace-x-2shadow-lghover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                  <Linkto="/demo" className="groupborder-2border-whitetext-whitepx-10py-4rounded-xlfont-boldtext-lghover:bg-white/10transition-allduration-300flexitems-centerjustify-centerspace-x-2backdrop-blur-sm" />
                    <span />Schedule Demo</span>
                    <CalendarclassName="w-5h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <PhoneclassName="w-5h-5ml-2" />
                    <span className="w-5h-5ml-2" />+1 302 464 0950</span>
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <MailclassName="w-5h-5ml-2" />
                    <span className="w-5h-5ml-2" />kleber@ziontechgro u p.com</span>
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <MapPinclassName="w-5h-5ml-2" />
                    <span className="w-5h-5ml-2" />Middletown DE 19709</span>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default AICustomerInsightsPa g e;