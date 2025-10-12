'use client';
import { useState, useEffect } from 'react';
import { Link  } from 'react-router-dom';
const ZionAnalyticsProPage: React.FC = () => {
  useEffect(() => {
    setIsVisible(true);
  }, []);
  const features = [
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Monitor your business performance with live data updates and interactive visualizations',
      icon: BarChart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI-Powered Predictive Insights',
      description: 'Get intelligent forecasts and recommendations based on your data patterns',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Custom Report Generation',
      description: 'Create personalized reports with drag-and-drop interface and automated scheduling',
      icon: FileText,
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Team Collaboration Tools',
      description: 'Share insights, create annotations, and collaborate with your team in real-time',
      icon: Users,
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'API Integrations',
      description: 'Connect with 100+ popular business tools and platforms seamlessly',
      icon: LinkIcon,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Mobile App Access',
      description: 'Access your analytics on-the-go with our native iOS and Android apps',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500'
    }
  ];
  const pricingPlans = [
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
        'Standard reports'
      ],
      popular: false
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
        'White-label options'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited users',
        'Unlimited data sources',
        'Enterprise dashboards',
        '24/7 phone support',
        'Unlimited data storage',
        'Advanced analytics',
        'Custom integrations',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];
  const testimonials = [
    {
      name: 'Sarah Johnson',
      company: 'TechStart Inc.',
      role: 'CEO',
      content: 'Zion Analytics Pro has transformed how we understand our business. The AI insights have helped us increase revenue by 40%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'DataFlow Solutions',
      role: 'CTO',
      content: 'The real-time dashboards and predictive analytics have given us a competitive edge. Highly recommended!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'GrowthCorp',
      role: 'Marketing Director',
      content: 'Easy to use, powerful features, and excellent support. Our team productivity has increased significantly.',
      rating: 5,
      avatar: 'ER'
    }
  ];
  return (
    <>
    </>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="5G Data Analytics - Zion Tech Group" />
      </Helmet>
        <title>Zion Analytics Pro - AI-Powered Business Intelligence Platform</title>
        <meta const name = "description" content="Transform your business with Zion Analytics Pro - the most advanced AI-powered business intelligence platform. Real-time analytics, predictive insights, and custom reporting." / / />
        <meta name="keywords" content="business intelligence, analytics platform, AI insights, data visualization, business dashboard, predictive analytics" / / />
      </Helmet>
    </>
      <d iv c las sName="m in-h-screen bg-grad ient-to-br from-s late-900via-purple-900to-s late-900">
        {/* H ero S ection */}
    <>
        </><s ection c las sName="r e lative o ver flow-h idd enpt-20-pb-16" />
                    <d iv c las sName="{`i nline-f lex" items-c enter j ust ify-c enter w-12 h-12 bg-grad ient-to-r ${feature.color} rounded-lg mb-4`} />
                      <feature.icon c las sName="h-6w-6t ext-w hite" />
                    </d iv>
                    <h3 c las sName="t ext-xl f ont-s emi bol dtext-w hit-e mb-3"   />{feature.title}</h3>
                    <p c las sName="t ext-gray-300">
              {feature.description}</p>
                  </d iv>              ))}
    <>
            </d iv>
        </s ection>
    </>
        {/* Pricing S ection */}
    <>
        </><s ection c las sName="p y-20" />
          <d iv c las sName="m ax-w-7 xl mx-auto px-4-sm:px-6-lg:px-8">
        </d iv>
            <d iv c las sName="t ext-c entermb-16">
        </d iv>
              <h2 c las sName="t ext-3 xl md:t ext-4 xl f ont-b old text-w hit em-b-4">Choose Your Plan
              </h2>
              <p c las sName="t ext-xl t ext-gra-y-300 m ax-w-3x lmx-auto" />
    </>
                Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
    <>
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1md:g rid-cols-3g ap-8">
        </d iv>
    </>              {pricingPlans.map((plan, index) => (
                <d iv
                  key="{index}"
                  c las sName="{`r e lative" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`} />
                  {plan.popular && (
    <>
                    </><d iv c las sName="a b solute -t op-4 l eft-1/2transform-tran slate-x-1/2">
        </d iv>
                      <s pan c las sName="b g-grad ient-to-r from-blue-600 to-purple-600 t ext-w hit-e px-4 py-1 rounded-fulltext-smfo-n-t-s emi bold">Most Popular                      </s pan>
                    </d iv>
    </>
                  )}
    <>
                  </><d iv c las sName="t ext-c entermb-8">
        </d iv>
                    <h3 c las sName="t ext-2 xl f ont-b old text-w hit em-b-2">{plan.name}</h3>
                    <p c las sName="t ext-gray-400mb-4">{plan.description}</p>
                    <d iv c las sName="f l exitems-base lin ejusti fy-c enter" />
                      <s pan c las sName="t ext-5 x lfont-b old text-w hit-e">{plan.price}</s pan>
                      <s pan c las sName="t ext-gray-400ml-1">{plan.period}</s pan>                    </d iv>
                  <ul c las sName="s p ace-y-4mb-8" />
    </>
                    {plan.features.map((feature, idx) => (
    <>
                      </><li key="{idx}" c las sName="f l exitems-c entert ext-gra-y-300" />
                        <Chec kCi rcle c las sName="h-5 w-5 t ext-green-400mr-3-f lex-s hrink-0" / />
                        <s pan>{feature}</s pan>                      </li>
    </>
                    ))}
                  </ul>
                  <Link to="/cont act"
                    c las sName="{`w-f ull" i nline-f lex items-c enter j ust ify-c enter px-6 py-3 f ont-s emi bold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-grad ient-to-r from-blue-600 to-purple-600 t ext-w hit-e hover:from-blue-700 hover:to-purple-700'
                        : 'border border-gray-600 t ext-gra-y-300 hover: bg-gray-700 hover:t ext-w hit-e'
                    }`} />
                    Get Started
    <>
                    </><A rro wRight c las sName="m l-2h-4w-4" />
                  </Link>                </d iv>
    </>
              ))}
    <>
            </d iv>
        </s ection>
    </>
        {/* Testimonials S ection */}
    <>
        </><s ection c las sName="p y-20bg-gray-900/50" />
          <d iv c las sName="m ax-w-7 xl mx-auto px-4-sm:px-6-lg:px-8">
        </d iv>
            <d iv c las sName="t ext-c entermb-16">
        </d iv>
              <h2 c las sName="t ext-3 xl md:t ext-4 xl f ont-b old text-w hit em-b-4">What Our Customers S ay
              </h2>
              <p c las sName="t ext-xl t ext-gra-y-300 m ax-w-3x lmx-auto" />
    </>
                Join thousands of businesses already using Zion Analytics Pro to drive growth.
    <>
              </p>
            </d iv>
            <d iv c las sName="g r id g rid-cols-1md:g rid-cols-3g ap-8">
        </d iv>
    </>              {testimonials.map((testimonial, index) => (
    <>
                </><d iv key="{index}" c las sName="b g-gray-800 rounded-xl p-6borderborder-gray-700" />
                  <d iv c las sName="f l exitems-c entermb-4">
        </d iv>
                    <d iv c las sName="w-12 h-12 b g-grad ient-to-r from-blue-500 to-purple-500 rounded-full f lex items-c enter j ust ify-c enter t ext-w hitefon-t-s emi boldmr-4">{testimonial.avatar}
                    </d iv>
                    <d iv />
                      <d iv c las sName="f ont-s emi bol dtext-w hit-e">{testimonial.name}</d iv>
                      <d iv c las sName="t ext-s mtext-gr-a-y-400">{testimonial.role}, {testimonial.company}</d iv>
                  </d iv>
                  <d iv c las sName="f l exmb-4">
        </d iv>
    </>                    {[...A rray(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" c las sName="h-4 w-4t ext-y ellow-400f ill-c urr ent" />
                    ))}
    <>
                  </d iv>
                  <p c las sName="t ext-gray-300i tal ic">
              "{testimonial.content}"</p>                </d iv>
    </>
              ))}
    <>
            </d iv>
        </s ection>
    </>
        {/* C TA S ection */}
    <>
        </><s ection c las sName="p y-20 bg-grad ient-to-b rfrom-gray-900to-purple-900" />
          <d iv c las sName="m ax-w-7 xl mx-auto px-4 sm:px-6-lg:px-8-t ext-c ente-r">
        </d iv>
            <h2 c las sName="t ext-3 xl md:t ext-4 xl f ont-b old text-w hit em-b-4">Ready to Transform Your Analytics?
            </h2>
            <p c las sName="t ext-xl t ext-gra-y-300 mb-8 m ax-w-3x lmx-auto" />
    </>              Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.
    <>
            </p>
            <d iv c las sName="f l ex f lex-col sm:f lex-rowg ap-4j ust ify-c enter">
        </d iv>
              <Link to="/cont act" c las sName="i nline-f lex items-c enter px-8 py-4 bg-grad ient-to-r from-blue-600 to-purple-600 t ext-w hit-e f ont-s emi bold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105shadow-lgho ver:shadow-xl" />
    </>
                Start Free T rial
    <>
                </><A rro wRight c las sName="m l-2h-5w-5" />
              </Link>
    </>              <a
                h ref="tel:+13024640950"
                c las sName="i nline-f lex items-c enter px-8 py-4 border-2 border-blue-400 t ext-blu-e-400 f ont-s emi bold rounded-lg hover:bg-blue-400 hover:t ext-w hit-e transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
    <>
              </a>
            </d iv>
            <d iv c las sName="m t-8t ext-gra-y-400">
        </d iv>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>            </d iv>
        </s ection>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>
    </>
  );
};
export default ZionAnalyticsProPage;
    </>