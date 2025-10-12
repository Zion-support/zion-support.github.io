'use client';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCart } from 'lucide-react';

const ZionAnalyticsProPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  features = [
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
  pricingPlans = [
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
  testimonials = [
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
    <>
      <Helmet>
        <title>5G Data Analytics - Zion Tech Group</title>
        <meta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
        <title>Zion Analytics Pro - AI-Powered Business Intelligence Platform</title>
        <meta name = "description" content="Transform your business with Zion Analytics Pro - the most advanced AI-powered business intelligence platform. Real-time analytics, predictive insights, and custom reporting." / / />
        <meta name="keywords" content="business intelligence, analytics platform, AI insights, data visualization, business dashboard, predictive analytics" />
      </Helmet>
    </>

      <div className="mi n-h-screen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </div>
        {/* Hero Section */}
    <>
        <section className="relativ e overflow-hiddenpt-20pb-16" />
          <div className="absoluteinse t-0opacity-20" />
          <div className="relativ e max-w-7xl mx-auto px-4sm:px-6lg:px-8">
            <div className="gri d grid-cols-1 lg:grid-cols-2gap-12items-center">
              <div />
                <div className="inlin e-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-smfont-semiboldmb-6">
                  <Sparkles className="h-4 w-4mr-2" />
                  AI-Powered Analytics
    <>
                </div>
                <h1 className="{`tex t-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                  Zion Analytics
    <>
                  <span className="bloc k bg-gradient-to-r from-blue-400 to-purple-400bg-clip-texttext-transparent">Pro
                  </span>
                </h1>
                <p className="{`tex t-xl" text-gray-300 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
    </>
                  The most advanced AI-powered business intelligence platform. Get real-time insights, 
                  predictive analytics, and custom reports that drive your business forward.
    <>
                </p>
                <div className="{`fle x" flex-col sm: flex-row gap-4 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  <Link to="/contact" className="inlin e-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" >
          Start Free Trial
                    
          <ArrowRight className="m l-2h-5w-5"  />
        </Link>
                  <button className="inlin e-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                    <Play className="m r-2h-5w-5" />
                    Watch Demo
    <>
                  </button>
                </div>
                <div className="m t-8 flex items-centerspace-x-6">
                  <div className="fle x items-center">
                    <div className="fle x">
                      {[...Array(5)].map((_, i) => (
                        <Star key="{i}" className="h-5 w-5tex t-yellow-400fill-current" />
                      ))}
    <>
                    </div>
                    <span className="m l-2text-gray-300">4.9/5 (127, reviews)</span>
                  </div>
              </div>
              <div className="{`transitio n-all" duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <div className="relativ e">
                  <div className="b g-gray-800 rounded-2 xl p-8borderborder-gray-700">
                    <div className="spac e-y-6">
                      <div className="fle x items-centerjustify-between">
                        <h3 className="tex t-xlfont-semiboldtext-white"   />Revenue Analytics</h3>
                        <div className="fle x items-centertext-green-400">
                          <TrendingUp className="h-4 w-4mr-1" />
                          +24.5%
    <>
                        </div>
                      <div className="h-3 2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-centerjustify-center">
                        <BarChart className="h-1 6 w-16text-whiteopacity-50" />
                      </div>
                      <div className="gridgri d-cols-3gap-4">
                        <div className="tex t-center">
                          <div className="tex t-2 xlfont-bold text-white"   />$2.4 M</div>
                          <div className="tex t-smtext-gray-400"   />Total Revenue</div>
                        <div className="tex t-center">
                          <div className="tex t-2 xlfont-bold text-white"   />1,247</div>
                          <div className="tex t-smtext-gray-400"   />Customers</div>
                        <div className="tex t-center">
                          <div className="tex t-2 xlfont-bold text-white"   />89%</div>
                          <div className="tex t-smtext-gray-400"   />Satisfaction</div>
                      </div>
                  </div>
              </div>
          </div>
        </section>
    </>

        {/* Features Section */}
    <>
        <section className="p y-20bg-gray-900/50" />
          <div className="ma x-w-7xl mx-auto px-4sm:px-6lg:px-8">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Powerful Features for Modern Businesses
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xlmx-auto">
              Everything you need to transform your data into actionable insights and drive business growth.
              </p>
            </div>
            <div className="gri d grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
              {features.map((feature, index) => (
    <>
                <div key="{index}" className="grou p" />
                  <div className="b g-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105borderborder-gray-700">
        </div>
                    <div className="{`inlin e-flex" items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`} />
                      <feature.icon className="h-6 w-6text-white" />
                    </div>
                    <h3 className="tex t-xl font-semiboldtext-white mb-3"   />{feature.title}</h3>
                    <p className="tex t-gray-300">
              {feature.description}</p>
                  </div>
              ))}
    <>
            </div>
        </section>
    </>

        {/* Pricing Section */}
    <>
        <section className="p y-20" />
          <div className="ma x-w-7xl mx-auto px-4sm:px-6lg:px-8">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Choose Your Plan
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xlmx-auto">
              Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
              </p>
            </div>
            <div className="gri d grid-cols-1md:grid-cols-3gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key="{index}"
                  className="{`relativ e" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`} />
                  {plan.popular && (
                    <div className="absolut e -top-4 left-1/2transform-translate-x-1/2">
                      <span className="b g-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold"  />Most Popular
                      </span>
                    </div>
    </>
                  )}
                  <div className="tex t-centermb-8">
                    <h3 className="tex t-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                    <p className="tex t-gray-400mb-4">
              {plan.description}</p>
                    <div className="fle x items-baselinejustify-center">
                      <span className="tex t-5 xlfont-bold text-white"   />{plan.price}</span>
                      <span className="tex t-gray-400ml-1"   />{plan.period}</span>
                    </div>
                  <ul className="spac e-y-4mb-8" />
    </>
                    {plan.features.map((feature, idx) => (
                      <li key="{idx}" className="fle x items-center text-gray-300" />
                        <CheckCircle className="h-5 w-5 tex t-green-400mr-3flex-shrink-0" />
                        <span   />{feature}</span>
                      </li>
    </>
                    ))}
                  </ul>
                  <Link to="/contact"
                    className="{`w-ful l" inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`} >
          Get Started
                    
          <ArrowRight className="m l-2h-4w-4"  />
        </Link>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* Testimonials Section */}
    <>
        <section className="p y-20bg-gray-900/50" />
          <div className="ma x-w-7xl mx-auto px-4sm:px-6lg:px-8">
            <div className="tex t-centermb-16">
              <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />What Our Customers Say
              </h2>
              <p className="tex t-xl text-gray-300 max-w-3xlmx-auto">
              Join thousands of businesses already using Zion Analytics Pro to drive growth.
              </p>
            </div>
            <div className="gri d grid-cols-1md:grid-cols-3gap-8">
              {testimonials.map((testimonial, index) => (
    <>
                <div key="{index}" className="b g-gray-800 rounded-xl p-6borderborder-gray-700" />
                  <div className="fle x items-centermb-4">
                    <div className="w-1 2 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-whitefont-semiboldmr-4"  />{testimonial.avatar}
                    </div>
                    <div />
                      <div className="fon t-semiboldtext-white"   />{testimonial.name}</div>
                      <div className="tex t-smtext-gray-400"   />{testimonial.role}, {testimonial.company}</div>
                  </div>
                  <div className="flexm b-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key="{i}" className="h-4 w-4tex t-yellow-400fill-current" />
                    ))}
    <>
                  </div>
                  <p className="tex t-gray-300italic">
              "{testimonial.content}"</p>
                </div>
    </>
              ))}
    <>
            </div>
        </section>
    </>

        {/* CTA Section */}
    <>
        <section className="p y-20 bg-gradient-to-brfrom-gray-900to-purple-900" />
          <div className="ma x-w-7xl mx-auto px-4 sm:px-6lg:px-8text-center">
            <h2 className="tex t-3 xl md:text-4xl font-bold text-white mb-4"  />Ready to Transform Your Analytics?
            </h2>
            <p className="tex t-xl text-gray-300 mb-8 max-w-3xlmx-auto">
              Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.
    <>
            </p>
            <div className="fle x flex-col sm:flex-rowgap-4justify-center">
              <Link to="/contact" className="inlin e-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" >
          Start Free Trial
                
          <ArrowRight className="m l-2h-5w-5"  />
        </Link>
              <a
                href="tel:+13024640950"
                className="inlin e-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950
    <>
              </a>
            </div>
            <div className="m t-8text-gray-400">
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
      </div>
    </>
  );
};

export default ZionAnalyticsProPage;
    </>