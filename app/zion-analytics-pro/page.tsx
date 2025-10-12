import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {ArrowRight, ShoppingCart} from 'lucide-react';
'use client';

const Zion Analytics Pro Page: React.FC = () => {

  use Effect(() => {
    set Is Visible(true);
  }, []);

  constfeatures = [
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Monitor your business performance with live data updates and interactive visualizations',
      icon: Bar Chart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'AI- Powered Predictive Insights',
      description: 'Get intelligent forecasts and recommendations based on your data patterns',
      icon: Brain,
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Custom Report Generation',
      description: 'Create personalized reports with drag-and-drop interface and automated scheduling',
      icon: File Text,
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
      icon: Link Icon,
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
  consttestimonials = [
    {
      name: 'Sarah Johnson',
      company: 'Tech Start Inc.',
      role: 'CEO',
      content: 'Zion Analytics Pro has transformed how we understand our business. The AI insights have helped us increase revenue by 40%.',
      rating: 5,
      avatar: 'SJ'
    },
    {
      name: 'Michael Chen',
      company: 'Data Flow Solutions',
      role: 'CTO',
      content: 'The real-time dashboards and predictive analytics have given us a competitive edge. Highly recommended!',
      rating: 5,
      avatar: 'MC'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Growth Corp',
      role: 'Marketing Director',
      content: 'Easy to use, powerful features, and excellent support. Our team productivity has increased significantly.',
      rating: 5,
      avatar: 'ER'
    }
  ];
  return (
    <>
      <Helmet />
        <title   />ZionAnalytics Pro - AI- PoweredBusiness IntelligencePlatform</title>
        <metaconstname = "description" content="Transformyour businesswith Zion Analytics Pro - themost advanced AI-poweredbusiness intelligenceplatform. Real-timeanalytics, predictiveinsights, andcustom reporting." / / />
        <meta name ="keywords" content="businessintelligence, analyticsplatform, AIinsights, datavisualization, businessdashboard, predictiveanalytics" / / />
      </Helmet>

      <div className ="min-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900" />
        {/* HeroSection */}
        <sectionclassName ="relativeoverflow-hiddenpt-20pb-16" />
          <div className ="absoluteinset-0opacity-20" / />
          <div className ="relativemax-w-7 xlmx-autopx-4sm:px-6lg:px-8" />
            <div className ="gridgrid-cols-1 lg:grid-cols-2gap-12items-center" />
              <div />
                <div className ="inline-flexitems-centerpx-4 py-2 bg-gradient-to-rfrom-blue-500 to-purple-500 rounded-fulltext-whitetext-smfont-semiboldmb-6" />
                  <Sparklesclass Name ="h-4w-4mr-2" / />
                  AI- PoweredAnalytics
                </div>
                <h1className ="{`text-4" xlmd: text-6 xlfont-boldtext-whitemb-6 transition-allduration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  ZionAnalytics
                  <spanclassName ="blockbg-gradient-to-rfrom-blue-400 to-purple-400bg-clip-texttext-transparent"  />Pro
                  </span>
                </h1>
                <pclassName ="{`text-xl" text-gray-300 mb-8 transition-allduration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  Themost advancedAI-poweredbusiness intelligenceplatform. Getreal-timeinsights, 
                  predictiveanalytics, andcustom reportsthat driveyour businessforward.
                </p>
                <div className ="{`flex" flex-colsm: flex-rowgap-4 transition-allduration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  <Link to ="/contact" className="inline-flexitems-centerpx-8 py-4 bg-gradient-to-rfrom-blue-600 to-purple-600 text-whitefont-semiboldrounded-lghover:from-blue-700 hover:to-purple-700 transition-all duration-300 transformhover:scale-105shadow-lghover:shadow-xl" />
                    StartFree Trial
                    <Arrow Rightclass Name="ml-2h-5w-5" />
                  </Link>
                  <buttonclassName ="inline-flexitems-centerpx-8 py-4 border-2 border-blue-400 text-blue-400 font-semiboldrounded-lghover:bg-blue-400 hover:text-whitetransition-allduration-300transformhover:scale-105" />
                    <Playclass Name ="mr-2h-5w-5" / />
                    WatchDemo
                  </button>
                </div>
                <div className ="mt-8 flexitems-centerspace-x-6" />
                  <div className ="flexitems-center" />
                    <div className ="flex" />
                      {[...Array(5)].map((_, i) => (
                        <Starkey ="{i}" className="h-5 w-5text-yellow-400fill-current" / />
                      ))}
                    </div>
                    <spanclassName ="ml-2text-gray-300"   />4.9/5 (127, reviews)</span>
                  </div>
                </div>
              </div>
              <div className ="{`transition-all" duration-1000 delay-700 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <div className ="relative" />
                  <div className ="bg-gray-800 rounded-2 xl p-8borderborder-gray-700" />
                    <div className ="space-y-6" />
                      <div className ="flexitems-centerjustify-between" />
                        <h3className ="text-xlfont-semiboldtext-white"   />Revenue Analytics</h3>
                        <div className ="flexitems-centertext-green-400" />
                          <Trending Upclass Name="h-4w-4mr-1" / />
                          +24.5%
                        </div>
                      </div>
                      <div className ="h-32 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flexitems-centerjustify-center" />
                        <Bar Chartclass Name="h-16 w-16text-whiteopacity-50" / />
                      </div>
                      <div className ="gridgrid-cols-3gap-4" />
                        <div className ="text-center" />
                          <div className ="text-2 xlfont-boldtext-white"   />$2.4 M</div>
                          <div className ="text-smtext-gray-400"   />Total Revenue</div>
                        </div>
                        <div className ="text-center" />
                          <div className ="text-2 xlfont-boldtext-white"   />1,247</div>
                          <div className ="text-smtext-gray-400"   />Customers</div>
                        </div>
                        <div className ="text-center" />
                          <div className ="text-2 xlfont-boldtext-white"   />89%</div>
                          <div className ="text-smtext-gray-400"   />Satisfaction</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <sectionclassName ="py-20bg-gray-900/50" />
          <div className ="max-w-7 xl mx-auto px-4sm:px-6lg:px-8" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Powerful Features for Modern Businesses
              </h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                Everything you need to transform your data into actionable insights and drive business growth.
              </p>
            </div>
            <div className ="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8" />
              {features.map((feature, index) => (
                <divkey ="{index}" className="group" />
                  <div className ="bg-gray-800 rounded-xlp-6 h-fullhover:bg-gray-700 transition-allduration-300 transformhover:scale-105borderborder-gray-700" />
                    <div className ="{`inline-flex" items-centerjustify-centerw-12 h-12 bg-gradient-to-r${feature.color} rounded-lgmb-4`} />
                      <feature.iconclassName ="h-6w-6text-white" / />
                    </div>
                    <h3className ="text-xlfont-semiboldtext-whitemb-3"   />{feature.title}</h3>
                    <pclassName ="text-gray-300" />{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <sectionclassName ="py-20" />
          <div className ="max-w-7 xl mx-auto px-4sm:px-6lg:px-8" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Choose Your Plan
              </h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
              </p>
            </div>
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricing Plans.map((plan, index) => (
                <divkey ="{index}"
                  className="{`relative" bg-gray-800 rounded-xlp-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`} />
                  {plan.popular && (
                    <div className ="absolute -top-4 left-1/2transform-translate-x-1/2" />
                      <spanclassName ="bg-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-4 py-1 rounded-fulltext-smfont-semibold"  />MostPopular
                      </span>
                    </div>
                  )}
                  <div className ="text-centermb-8" />
                    <h3className ="text-2 xl font-boldtext-whitemb-2"   />{plan.name}</h3>
                    <pclassName ="text-gray-400mb-4" />{plan.description}</p>
                    <div className ="flexitems-baselinejustify-center" />
                      <spanclassName ="text-5 xlfont-boldtext-white"   />{plan.price}</span>
                      <spanclassName ="text-gray-400ml-1"   />{plan.period}</span>
                    </div>
                  </div>
                  <ulclassName ="space-y-4mb-8" />
                    {plan.features.map((feature, idx) => (
                      <likey ="{idx}" className="flexitems-centertext-gray-300" />
                        <Check Circleclass Name="h-5 w-5 text-green-400mr-3flex-shrink-0" / />
                        <span   />{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to ="/contact"
                    className="{`w-full" inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-whitehover:from-blue-700 hover:to-purple-700'
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`} />
                    Get Started
                    <Arrow Rightclass Name="ml-2h-4w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <sectionclassName ="py-20bg-gray-900/50" />
          <div className ="max-w-7 xl mx-auto px-4sm:px-6lg:px-8" />
            <div className ="text-centermb-16" />
              <h2className ="text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />What Our Customers Say
              </h2>
              <pclassName ="text-xl text-gray-300 max-w-3xlmx-auto" />
                Join thousands of businesses already using Zion Analytics Pro to drive growth.
              </p>
            </div>
            <div className ="grid grid-cols-1md:grid-cols-3gap-8" />
              {testimonials.map((testimonial, index) => (
                <divkey ="{index}" className="bg-gray-800 rounded-xlp-6borderborder-gray-700" />
                  <div className ="flexitems-centermb-4" />
                    <div className ="w-12 h-12 bg-gradient-to-rfrom-blue-500 to-purple-500 rounded-fullflex items-centerjustify-centertext-whitefont-semiboldmr-4"  />{testimonial.avatar}
                    </div>
                    <div />
                      <div className ="font-semiboldtext-white"   />{testimonial.name}</div>
                      <div className ="text-smtext-gray-400"   />{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  <div className ="flexmb-4" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Starkey ="{i}" className="h-4 w-4text-yellow-400fill-current" / />
                    ))}
                  </div>
                  <pclassName ="text-gray-300italic" />"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <sectionclassName ="py-20 bg-gradient-to-brfrom-gray-900to-purple-900" />
          <div className ="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center" />
            <h2className ="text-3 xl md:text-4 xl font-boldtext-whitemb-4"  />Ready to Transform Your Analytics?
            </h2>
            <pclassName ="text-xl text-gray-300 mb-8 max-w-3xlmx-auto" />
              Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.
            </p>
            <div className ="flex flex-col sm:flex-rowgap-4justify-center" />
              <Link to ="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />
                Start Free Trial
                <Arrow Rightclass Name="ml-2h-5w-5" />
              </Link>
              <ahref ="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
              </a>
            </div>
            <div className ="mt-8text-gray-400" />
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Zion Analytics Pro Page;