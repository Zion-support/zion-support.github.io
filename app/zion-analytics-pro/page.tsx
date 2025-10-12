'use client';
import { useState, useEffect  } from "react";
import { Link  } from "react-router-dom";
import { ArrowRight, ShoppingCart  } from "lucide-react";
const ZionAnalyticsProPage: React.FC = () => {
  return (
  return (

  useEffect(() => {
    setIsVisible(true);
  
  );

  );
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
    {title: 'Mobile App Access',
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
        'White-label options'
      ],
      popular: true;
    },
    {name: 'Enterprise',
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
      popular: false;
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
    {name: 'Emily Rodriguez',
      company: 'GrowthCorp',
      role: 'Marketing Director',
      content: 'Easy to use, powerful features, and excellent support. Our team productivity has increased significantly.',
      rating: 5,
      avatar: 'ER'
    }
  ];
  return (
    <>>
      <Helmet></Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." /></meta>
      </Helmet>
        <title>Zion Analytics Pro - AI-Powered Business Intelligence Platform</title>
        <meta const name = "description" content="Transform your business with Zion Analytics Pro - the most advanced AI-powered business intelligence platform. Real-time analytics, predictive insights, and custom reporting." / / /></meta>
        <meta name="keywords" content="business intelligence, analytics platform, AI insights, data visualization, business dashboard, predictive analytics" / / /></meta>
      </Helmet></>

      <>div className="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" ></div>
        {/* Hero Section */}
    <>section className="relative overflow-hiddenpt-20pb-16" />

                    <div className="{`inline-flex" items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`} /></div>
                      <feature.icon className="h-6w-6text-white" /></feature>
                    </div>
                    <h3 className="text-xl font-semiboldtext-white mb-3" />{feature.title}</h3>
                    <p className="text-gray-300" ></p>
              {feature.description}</p>
                  </div>
              ))}
    <>/div>
        </section></>

        {/* Pricing Section */}
    <>section className="py-20" />
          <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8" ></div><div className="text-centermb-16" ></div></>
              <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4" />Choose Your Plan;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" ></p>
              Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
              </p>
            </div>
            <>div className="grid grid-cols-1md:grid-cols-3gap-8" ></div>
              {pricingPlans.map((plan, index) => (
                <div;
                  key="{index}" className="{`relative" bg-gray-800 rounded-xl p-8 ${></div>
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''></div>
                  }`} />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2transform-translate-x-1/2" ></div>
                      <span className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold" />Most Popular;
                      </span>
                    </div></>
                  )}
                  <div className="text-centermb-8" ></div>
                    <h3 className="text-2 xl font-bold text-white mb-2" />{plan.name}</h3>
                    <p className="text-gray-400mb-4" ></p>
              {plan.description}</p>
                    <div className="flex items-baselinejustify-center" ></div>
                      <span className="text-5 xlfont-bold text-white" />{plan.price}</span>
                      <span className="text-gray-400ml-1" />{plan.period}</span>
                    </div>
                  <ul className="space-y-4mb-8" /></>
                    {plan.features.map((feature, idx) => (
                      <li key="{idx}" className="flex items-center text-gray-300" /></li>
                        <CheckCircle className="h-5 w-5 text-green-400mr-3flex-shrink-0" /></CheckCircle>
                        <span   />{feature}</span>
                      </li></>
                    ))}
                  </ul>
                  <Link to="/contact" className="{`w-full" inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'></Link>
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'></Link>
                    }`} >
          Get Started;
          <ArrowRight className="ml-2h-4w-4" /></ArrowRight>
        </Link>
                </div></>
              ))}
    <>/div>
        </section></>

        {/* Testimonials Section */}
    <>section className="py-20bg-gray-900/50" />
          <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8" ></div><div className="text-centermb-16" ></div></>
              <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4" />What Our Customers Say;
              </h2>
              <p className="text-xl text-gray-300 max-w-3xlmx-auto" ></p>
              Join thousands of businesses already using Zion Analytics Pro to drive growth.
              </p>
            </div>
            <>div className="grid grid-cols-1md:grid-cols-3gap-8" ></div>
              {testimonials.map((testimonial, index) => (
    <>div key="{index}" className="bg-gray-800 rounded-xl p-6borderborder-gray-700" />
                  <div className="flex items-centermb-4" ></div><div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-whitefont-semiboldmr-4" />{testimonial.avatar}
                    </div></>
                    <>div /></div><div className="font-semiboldtext-white" />{testimonial.name}</div></>
                      <>div className="text-smtext-gray-400" />{testimonial.role}, {testimonial.company}</div>
                  </div><div className="flexmb-4" ></div></>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="h-4 w-4text-yellow-400fill-current" /></Star>
                    ))}
    <>/div>
                  <p className="text-gray-300italic" ></p>
              "{testimonial.content}"</p>
                </div></>
              ))}
    <>/div>
        </section></>

        {/* CTA Section */}
    <>section className="py-20 bg-gradient-to-brfrom-gray-900to-purple-900" />
          <>div className="max-w-7xl mx-auto px-4 sm:px-6lg:px-8text-center" ></div>
            <h2 className="text-3 xl md:text-4xl font-bold text-white mb-4" />Ready to Transform Your Analytics?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" ></p>
              Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.
    <>/p>
            <div className="flex flex-col sm:flex-rowgap-4justify-center" ></div>
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" ></Link>
          Start Free Trial;
          <ArrowRight className="ml-2h-5w-5" /></ArrowRight>
        </Link>
              <a;></a>
                href="tel:+13024640950" ></a>
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950;
    <>/a>
            </div><div className="mt-8text-gray-400" ></div></>
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </div></>
  );
};

export default ZionAnalyticsProPage;
    </>