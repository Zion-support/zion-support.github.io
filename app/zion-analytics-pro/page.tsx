'use client';
import { use State, use Effect } from 'react';
import { Link } from 'react-router-dom';
import { Arrow Right, Check Circle, Star, Users, Brain, Bar Chart, File Text, Link as Link Icon, Trending Up, Sparkles, Smartphone, Monitor, Play } from 'lucide-react';

const Zion Analytics Pro Page: React.F C = () => {

  use Effect(() => {
    set Is Visible(true);
  }, []);

  const features = [
    {
      title: 'Real-time Analytics Dashboard',
      description: 'Monitor your business performance with live data updates and interactive visualizations',
      icon: Bar Chart,
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'A I-Powered Predictive Insights',
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
      title: 'A P I Integrations',
      description: 'Connect with 100+ popular business tools and platforms seamlessly',
      icon: Link Icon,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'Mobile App Access',
      description: 'Access your analytics on-the-go with our native i O S and Android apps',
      icon: Smartphone,
      color: 'from-indigo-500 to-purple-500'
    }
  ];
  const pricing Plans = [
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
        '1G B data storage',
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
        '10G B data storage',
        'Custom reports',
        'A P I access',
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
      company: 'Tech Start Inc.',
      role: 'C E O',
      content: 'Zion Analytics Pro has transformed how we understand our business. The A I insights have helped us increase revenue by 40%.',
      rating: 5,
      avatar: 'S J'
    },
    {
      name: 'Michael Chen',
      company: 'Data Flow Solutions',
      role: 'C T O',
      content: 'The real-time dashboards and predictive analytics have given us a competitive edge. Highly recommended!',
      rating: 5,
      avatar: 'M C'
    },
    {
      name: 'Emily Rodriguez',
      company: 'Growth Corp',
      role: 'Marketing Director',
      content: 'Easy to use, powerful features, and excellent support. Our team productivity has increased significantly.',
      rating: 5,
      avatar: 'E R'
    }
  ];
  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>Zion Analytics Pro - A I-Powered Business Intelligence Platform</t itle>
        <m etaconstname = "description" content="Transform your business with Zion Analytics Pro - the most advanced A I-powered business intelligence platform. Real-time analytics, predictive insights, and custom reporting." / / />
        <m eta name="keywords" content="business intelligence, analytics platform, A I insights, data visualization, business dashboard, predictive analytics" / / />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-purple-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="r e l a tive overflow-hiddenpt-20pb-16" />
          <d iv class Name="a b s o luteinset-0opacity-20" / />
          <d iv class Name="r e l a tive max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="g r id g r id-cols-1 lg:grid-cols-2gap-12items-center">
        </d iv>
              <d iv />
                <d iv class Name="i n l i ne-flex items-center px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full text-white text-smfont-semiboldmb-6">
        </d iv>
                  <S parklesclass Name="h-4w-4m r-2" / />

                  A I-Powered Analytics

                </d iv>
                <h1 c lass Name="{`t e xt-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                  Zion Analytics

                  <s pan class Name="b l o c k bg-gradient-to-r from-blue-400 to-purple-400bg-clip-texttext-transparent">Pro
                  </s pan>
                </h1>
                <p c lass Name="{`t e xt-xl" text-gray-300 mb-8 transition-all duration-1000 delay-300 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                  The most advanced A I-powered business intelligence platform. Get real-time insights, 
                  predictive analytics, and custom reports that drive your business forward.

                </p>
                <d iv class Name="{`f l ex" flex-col sm: flex-row gap-4 transition-all duration-1000 delay-500 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  <L ink to="/contact" class Name="i n l i ne-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                    Start Free Trial

                    <A rrow Rightclass Name="m l-2h-5w-5" />
                  </L ink>
                  <b utton class Name="i n l i ne-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                    <P layclass Name="m r-2h-5w-5" / />

                    Watch Demo

                  </b utton>
                </d iv>
                <d iv class Name="m t-8 f l e xitems-centerspace-x-6">
        </d iv>
                  <d iv class Name="f l e x items-center" />
                    <d iv class Name="f l ex" />

                      {[...Array(5)].map((_, i) => (
                        <S tarkey="{i}" class Name="h-5 w-5t e xt-y e llow-400fill-current" />
                      ))}

                    </d iv>
                    <s pan class Name="m l-2t e x t-gray-300">4.9/5 (127, reviews)</s pan>
                  </d iv>
              </d iv>
              <d iv class Name="{`t r a n sition-all" duration-1000 delay-700 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <d iv class Name="r e l a tive" />
                  <d iv class Name="b g-g r a y-800 rounded-2 xl p-8borderborder-gray-700">
        </d iv>
                    <d iv class Name="s p a c e-y-6">
        </d iv>
                      <d iv class Name="f l e x items-centerjustify-between" />
                        <h3 c lass Name="t e xt-x l font-semiboldtext-white">Revenue Analytics</h3>
                        <d iv class Name="f l e x items-centertext-green-400">
        </d iv>
                          <T rending Upclass Name="h-4w-4m r-1" / />

                          +24.5%

                        </d iv>
                      <d iv class Name="h-32 b g-g r a dient-to-r from-blue-500 to-purple-500 rounded-lg flexitems-centerjustify-center">
        </d iv>
                        <B ar Chartclass Name="h-16 w-16t e xt-w h iteopacity-50" / />
                      </d iv>
                      <d iv class Name="g r i d grid-cols-3gap-4">
        </d iv>
                        <d iv class Name="t e x t-center" />
                          <d iv class Name="t e xt-2 x l font-boldtext-white">$2.4 M</d iv>
                          <d iv class Name="t e xt-s m text-gray-400">Total Revenue</d iv>
                        <d iv class Name="t e x t-center" />
                          <d iv class Name="t e xt-2 x l font-boldtext-white">1,247</d iv>
                          <d iv class Name="t e xt-s m text-gray-400">Customers</d iv>
                        <d iv class Name="t e x t-center" />
                          <d iv class Name="t e xt-2 x l font-boldtext-white">89%</d iv>
                          <d iv class Name="t e xt-s m text-gray-400">Satisfaction</d iv>
                      </d iv>
                  </d iv>
              </d iv>
          </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="p y-20b g-g r ay-900/50" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-whitemb-4">Powerful Features for Modern Businesses
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Everything you need to transform your data into actionable insights and drive business growth.

              </p>
            </d iv>
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>

              {features.map((feature, index) => (

                <d ivkey="{index}" class Name="g r o u p" />
                  <d iv class Name="b g-g r a y-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105borderborder-gray-700">
        </d iv>
                    <d iv class Name="{`i n l i ne-flex" items-center justify-center w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg mb-4`} />
                      <f eature.icon class Name="h-6w-6t e xt-w h ite" />
                    </d iv>
                    <h3 c lass Name="t e xt-xl f o nt-semiboldtext-whitemb-3">{feature.title}</h3>
                    <p c lass Name="t e xt-g r ay-300">{feature.description}</p>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-whitemb-4">Choose Your Plan
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.

              </p>
            </d iv>
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>

              {pricing Plans.map((plan, index) => (
                <d iv
                  key="{index}"
                  class Name="{`r e l a tive" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`} />
                  {plan.popular && (

                    <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                      <s pan class Name="b g-g r a dient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                      </s pan>
                    </d iv>

                  )}

                  <d iv class Name="t e x t-centermb-8">
        </d iv>
                    <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                    <p c lass Name="t e xt-g r ay-400mb-4">{plan.description}</p>
                    <d iv class Name="f l e x items-baselinejustify-center" />
                      <s pan class Name="t e xt-5 x l font-boldtext-white">{plan.price}</s pan>
                      <s pan class Name="t e xt-g r ay-400ml-1">{plan.period}</s pan>
                    </d iv>
                  <u lclass Name="s p a c e-y-4mb-8" />

                    {plan.features.map((feature, idx) => (

                      <l ikey="{idx}" class Name="f l e x items-centertext-gray-300" />
                        <C heck Circleclass Name="h-5 w-5 t e xt-g r een-400mr-3flex-shrink-0" / />
                        <s pan>{feature}</s pan>
                      </l i>

                    ))}
                  </u l>
                  <L ink to="/contact"
                    class Name="{`w-f u ll" inline-flex items-center justify-center px-6 py-3 font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700'
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`} />
                    Get Started

                    <A rrow Rightclass Name="m l-2h-4w-4" />
                  </L ink>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Testimonials Section */}

        <s ection class Name="p y-20b g-g r ay-900/50" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-whitemb-4">What Our Customers Say
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                Join thousands of businesses already using Zion Analytics Pro to drive growth.

              </p>
            </d iv>
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>

              {testimonials.map((testimonial, index) => (

                <d ivkey="{index}" class Name="b g-g r a y-800 rounded-xl p-6borderborder-gray-700" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>
                    <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-whitefont-semiboldmr-4">{testimonial.avatar}
                    </d iv>
                    <d iv />
                      <d iv class Name="f o nt-s e miboldtext-white">{testimonial.name}</d iv>
                      <d iv class Name="t e xt-s m text-gray-400">{testimonial.role}, {testimonial.company}</d iv>
                  </d iv>
                  <d iv class Name="f l e x mb-4">
        </d iv>

                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tarkey="{i}" class Name="h-4 w-4t e xt-y e llow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t e xt-g r ay-300italic">"{testimonial.content}"</p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20 b g-g r adient-to-brfrom-gray-900to-purple-900" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4 sm:px-6lg:px-8text-center">
        </d iv>
            <h2 c lass Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-whitemb-4">Ready to Transform Your Analytics?
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-3xlmx-auto" />

              Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.

            </p>
            <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <L ink to="/contact" class Name="i n l i ne-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                Start Free Trial

                <A rrow Rightclass Name="m l-2h-5w-5" />
              </L ink>

              <a
                h r ef="tel:+13024640950"
                class Name="i n l i ne-flex items-center px-8 py-4 border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950

              </a>
            </d iv>
            <d iv class Name="m t-8t e x t-gray-400">
        </d iv>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St S T E 1008, Middletown D E 19709</p>
            </d iv>
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

  );
};

export default Zion Analytics Pro Page;
