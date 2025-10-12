import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
'use client';
import { ArrowRight, CheckCircle, Star, Users, Brain, BarChart, FileText, Link as LinkIcon, TrendingUp, Sparkles, Smartphone, Monitor, Play } from 'lucide-react';

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
      <Helmet />
        <title>Zion Analytics Pro - AI-Powered Business Intelligence Platform</title>
        <meta name="description" content="Transform your business with Zion Analytics Pro - the most advanced AI-powered business intelligence platform. Real-time analytics, predictive insights, and custom reporting."  />
        <meta name="keywords" content="business intelligence, analytics platform, AI insights, data visualization, business dashboard, predictive analytics"  />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative overflow-hidden pt-20 pb-16" />
          <div className="absolute inset-0 opacity-20" /></div>
          <div className="relative max-w-7xl mx-auto px-4sm:px-6lg:px-8">
        <div className="grid grid-cols-1lg:grid-cols-2gap-12items-center">
              <div />
                <div className="inline-flex items-center px-4py-2bg-gradient-to-rfrom-blue-500 to-purple-500 rounded-full text-whitetext-sm font-semibold mb-6" />
                  <Sparkles className="h-4w-4mr-2" />
                  AI-Powered Analytics
                </div>
                <h1 className="{`text-4" xl md: text-6xlfont-bold text-whitemb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  Zion Analytics
                  <span className="block bg-gradient-to-rfrom-blue-400 to-purple-400 bg-clip-text text-transparent"  />Pro
                  </span>
                </h1>
                <p className="{`text-xl" text-gray-300 mb-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                  The most advanced AI-powered business intelligence platform. Get real-time insights, 
                  predictive analytics, and custom reports that drive your business forward.
                </p>
                <div className="{`flex" flex-col sm: flex-row gap-4transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                  <Link
          to="/contact"
                    className="inline-flex items-center px-8py-4bg-gradient-to-rfrom-blue-600 to-purple-600 text-whitefont-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                   
        >
          Start Free Trial
                    
          <ArrowRight className="ml-2 h-5w-5" />
                  </Link>
                  <button className="inline-flex items-center px-8py-4border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-whitetransition-all duration-300 transform hover:scale-105" />
                    <Play className="mr-2 h-5w-5" />
                    Watch Demo
                  </button>
                </div>
                <div className="mt-8 flex items-center space-x-6">
        <div className="flex items-center">
                    <div className="flex" />
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5w-5text-yellow-400fill-current" />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-300"  >4.9/5 (127, reviews)</span>
                  </div>
                </div>
              </div>
              <div className="{`transition-all" duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <div className="relative">
        <div className="bg-gray-800 rounded-2 xl p-8 border border-gray-700">
                    <div className="space-y-6">
        <div className="flex items-center justify-between">
                        <h3 className="text-xlfont-semibold text-white"  >Revenue Analytics</h3>
                        <div className="flex items-center text-green-400" />
                          <TrendingUp className="h-4w-4mr-1" />
                          +24.5%
                        </div>
                      </div>
                      <div className="h-32bg-gradient-to-rfrom-blue-500 to-purple-500 rounded-lg flex items-center justify-center" />
                        <BarChart className="h-16w-16text-whiteopacity-50" />
                      </div>
                      <div className="grid grid-cols-3gap-4">
        <div className="text-center">
                          <div className="text-2xlfont-bold text-white"  >$2.4 M</div>
                          <div className="text-smtext-gray-400"  >Total Revenue</div>
                        </div>
                        <div className="text-center" />
                          <div className="text-2xlfont-bold text-white"  >1,247</div>
                          <div className="text-smtext-gray-400"  >Customers</div>
                        </div>
                        <div className="text-center" />
                          <div className="text-2xlfont-bold text-white"  >89%</div>
                          <div className="text-smtext-gray-400"  >Satisfaction</div>
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
        <section className="py-20bg-gray-900/50" />
          <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8">
        <div className="text-centermb-16">
              <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Powerful Features for Modern Businesses
              </h2>
              <p className="text-xltext-gray-300 max-w-3xl mx-auto">
                Everything you need to transform your data into actionable insights and drive business growth.
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-2lg:grid-cols-3gap-8" />
              {features.map((feature, index) => (
                <div key={index} className="group" />
                  <div className="bg-gray-800 rounded-xl p-6 h-full hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-700" />
                    <div className="{`inline-flex" items-center justify-center w-12h-12bg-gradient-to-r ${feature.color} rounded-lg mb-4`} />
                      <feature.icon className="h-6w-6text-white" />
                    </div>
                    <h3 className="text-xlfont-semibold text-whitemb-3"  >{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20" />
          <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8">
        <div className="text-centermb-16">
              <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Choose Your Plan
              </h2>
              <p className="text-xltext-gray-300 max-w-3xl mx-auto">
                Flexible pricing options to fit businesses of all sizes. Start with a free trial, no credit card required.
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8" />
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className="{`relative" bg-gray-800 rounded-xl p-8 ${
                    plan.popular ? 'ring-2 ring-blue-500 scale-105' : ''
                  }`}
                 />
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" />
                      <span className="bg-gradient-to-rfrom-blue-600 to-purple-600 text-whitepx-4py-1rounded-full text-smfont-semibold"  />Most Popular
                      </span>
                    </div>
                  )}
                  <div className="text-centermb-8" />
                    <h3 className="text-2xlfont-bold text-whitemb-2"  >{plan.name}</h3>
                    <p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center" />
                      <span className="text-5xlfont-bold text-white"  >{plan.price}</span>
                      <span className="text-gray-400 ml-1"  >{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8" />
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300" />
                        <CheckCircle className="h-5w-5text-green-400 mr-3 flex-shrink-0" />
                        <span  >{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
          to="/contact"
                    className="{`w-full" inline-flex items-center justify-center px-6py-3font-semibold rounded-lg transition-all duration-300 ${
                      plan.popular
                        ? 'bg-gradient-to-rfrom-blue-600 to-purple-600 text-whitehover:from-blue-700 hover:to-purple-700'
                        : 'border border-gray-600 text-gray-300 hover: bg-gray-700 hover:text-white'
                    }`}
                   
        >
          Get Started
                    
          <ArrowRight className="ml-2 h-4w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20bg-gray-900/50" />
          <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8">
        <div className="text-centermb-16">
              <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />What Our Customers Say
              </h2>
              <p className="text-xltext-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using Zion Analytics Pro to drive growth.
              </p>
            </div>
            <div className="grid grid-cols-1md:grid-cols-3gap-8" />
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-800 rounded-xl p-6 border border-gray-700" />
                  <div className="flex items-center mb-4" />
                    <div className="w-12h-12bg-gradient-to-rfrom-blue-500 to-purple-500 rounded-full flex items-center justify-center text-whitefont-semibold mr-4"  />{testimonial.avatar}
                    </div>
                    <div />
                      <div className="font-semibold text-white"  >{testimonial.name}</div>
                      <div className="text-smtext-gray-400"  >{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                  <div className="flex mb-4" />
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4w-4text-yellow-400fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 italic">"{testimonial.content}"</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20bg-gradient-to-brfrom-gray-900 to-purple-900" />
          <div className="max-w-7xl mx-auto px-4sm:px-6lg:px-8text-center" />
            <h2 className="text-3xlmd:text-4xlfont-bold text-whitemb-4"  />Ready to Transform Your Analytics?
            </h2>
            <p className="text-xltext-gray-300 mb-8 max-w-3xl mx-auto">
              Start your free trial today and see how Zion Analytics Pro can revolutionize your business intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4justify-center" />
              <Link
          to="/contact"
                className="inline-flex items-center px-8py-4bg-gradient-to-rfrom-blue-600 to-purple-600 text-whitefont-semibold rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
               
        >
          Start Free Trial
                
          <ArrowRight className="ml-2 h-5w-5" />
              </Link>
              <a
                href="tel:+13024640950"
                className="inline-flex items-center px-8py-4border-2 border-blue-400 text-blue-400 font-semibold rounded-lg hover:bg-blue-400 hover:text-whitetransition-all duration-300 transform hover:scale-105"
              >
                Call +1 302 464 0950
              </a>
            </div>
            <div className="mt-8 text-gray-400" />
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ZionAnalyticsProPage;