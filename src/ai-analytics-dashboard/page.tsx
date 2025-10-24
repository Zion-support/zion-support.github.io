'use client'
import { Brain, TrendingUp } from 'lucide-react'
import React, { useState, useEffect } from 'react'

import { BarChart3 } from 'lucide-react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import SEOOptimizer from '../components/SEOOptimizer'
import { CheckCircle, Star, Phone } from 'lucide-react'

const AIAnalyticsDashboardPage: React.FC  = () => {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])
'use client'
import { Brain, TrendingUp } from 'lucide-react';
import React, {useStateuseEffect} from 'react';

import {BarChart3, CheckCircle, Phone, Star} from 'lucide-react';
import Navigation from '../$1/Navigation';
import Footer from '../$1/Footer';
import SEOOptimizer from '../$1/SEOOptimizer';

const AIAnalyticsDashboardPage: React.FC = () => {const [isLoadedsetIsLoaded] = useState(false);

  useEffect(() => {
  
    setIsLoaded(true);
 }, []);

  constfeatures= [
    {icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and predictions from your data using advanced machine learning',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend forecasting', 'Smart recommendations']
   },
    {icon: BarChart3,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards',
      benefits: ['Live data updates', 'Custom visualizations', 'Mobile responsive', 'Export capabilities']
   },
    {icon: TrendingUp,
      title: 'Advanced Analytics',
      description: 'Deep dive into your data with advanced statistical analysis and reporting tools',
      benefits: ['Cohort analysis', 'Funnel analysis', 'A/B testing', 'Cohort retention']
   },
    {icon: Users,
      title: 'User Behavior Tracking',
      description: 'Understand user behavior with detailed tracking and segmentation capabilities',
      benefits: ['User journeys', 'Behavioral cohorts', 'Engagement metrics', 'Conversion tracking']
    }
  ]

  const integrations = [
    { name: 'Google Analytics', icon: '📊', description: 'Seamless integration with GA4' },
    { name: 'Facebook Ads', icon: '📘', description: 'Track ad performance and ROI' },
    { name: 'Google Ads', icon: '🔍', description: 'Monitor campaign effectiveness' },
    { name: 'Salesforce', icon: '💼', description: 'CRM data integration' },
    { name: 'Shopify', icon: '🛒', description: 'E-commerce analytics' },
    { name: 'Mailchimp', icon: '📧', description: 'Email marketing metrics' },
    { name: 'Stripe', icon: '💳', description: 'Payment and revenue tracking' },
    { name: 'Zapier', icon: '⚡', description: 'Connect 1000+ apps' }
  ]
   }
  ];

  constintegrations= [
    {name: 'Google Analytics', icon: '📊', description: 'Seamless integration with GA4'},
    {name: 'Facebook Ads', icon: '📘', description: 'Track ad performance and ROI'},
    {name: 'Google Ads', icon: '🔍', description: 'Monitor campaign effectiveness'},
    {name: 'Salesforce', icon: '💼', description: 'CRM data integration'},
    {name: 'Shopify', icon: '🛒', description: 'E-commerce analytics'},
    {name: 'Mailchimp', icon: '📧', description: 'Email marketing metrics'},
    {name: 'Stripe', icon: '💳', description: 'Payment and revenue tracking'},
    {name: 'Zapier', icon: '⚡', description: 'Connect1000+ apps'}
  ];

  constpricingPlans= [
    {name: 'Starter',
      price: '$14 9/month',
      description: 'Perfect for small businesses and startups',
      features: [
        '5 data sources',
        'Basic dashboards',
        'Standard reports',
        'Email support',
        '1 user account'
      ],
      popular: false;
   },
    {name: 'Professional',
      price: '$29 9/month',
      description: 'Ideal for growing businesses and agencies',
      features: [
        '20data sources',
        'Advanced dashboards',
        'AI insights',
        'Custom reports',
        'Priority support',
        '5 user accounts'
      ],
      popular: true;
   },
    {name: 'Enterprise',
      price: '$59 9/month',
      description: 'For large organizations with complex needs',
      features: [
        'Unlimited data sources',
        'Custom dashboards',
        'Full AI suite',
        'White-label options',
        'API access',
        'Dedicated support',
        'Unlimited users'
      ],
      popular: false;
    }
  ]
   }
  ];

  consttestimonials= [
    {name: 'Robert Johnson',
      role: 'CEO, DataCorp',
      content: 'AI Analytics Dashboard helped us identify a 3 0% increase in conversion opportunities. Game changer!',
      rating:5},
    {name: 'Maria Garcia',
      role: 'Marketing Director, RetailCo',
      content: 'The AI insights are incredibly accurate. We made data-driven decisions that increased revenue by45%.',
      rating:5},
    {name: 'James Wilson',
      role: 'CTO, TechStartup',
      content: 'Finally, a dashboard that actually provides actionable insights. Our team productivity increased by 60%.',
      rating: 5;
    }
  ]
>>>>>>> 33a3472fdd6542a46cedfafebd3b6b0a7cc5e02d

const Page = () => {
  return (
  <><SEOOptimizertitle="AI Analytics Dashboard - Intelligent Business Intelligence | ZionTechGroup"
        description="Transform your data into actionable insights with AI-powered analytics dashboard. Get predictive insights, real-time monitoring, andintelligentrecommendations."
        keywords={['AI analytics', 'business intelligence', 'data visualization', 'predictive analytics', 'dashboard', 'datainsights']}
        canonicalUrl="https://ziontechgroup.com/ai-analytics-dashboard"
      />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
        <Navigation />
        {/* Hero Section */}
        <section className="relative py-20 px-4"></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <div className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 px-4 py-2 rounded-full text-sm font-medium mb-6"></div>
                <BarChart3 className="w-4 h-4" />
                AI-Powered Business Intelligence</div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 cyber-text-3d neon-pulse">
                AI Analytics Dashboard</h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your data into actionable insights with AI-powered analytics. Get predictive insights,
                real-time monitoring, and intelligent recommendations that drive business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
                <a
                  href="#pricing"
                  className="cyber-button px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start Free Trial</a>
                <a;
                  href="#demo"
                  className="border-2 border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
                >
                  Watch Demo</a>
              </div>
            </div>
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16"></div>
              <div className="quantum-card p-6 text-center energy-pulse"></div>
                <div className="text-3xl font-bold text-blue-400 mb-2">45%</div>
                <div className="text-gray-300">Revenue Increase</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse"></div>
                <div className="text-3xl font-bold text-purple-400 mb-2">60%</div>
                <div className="text-gray-300">Productivity Boost</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse"></div>
                <div className="text-3xl font-bold text-cyan-400 mb-2">30%</div>
                <div className="text-gray-300">Conversion Lift</div>
              </div>
              <div className="quantum-card p-6 text-center energy-pulse"></div>
                <div className="text-3xl font-bold text-green-400 mb-2">85%</div>
                <div className="text-gray-300">Accuracy Rate</div>
              </div>
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20 px-4" id="features"></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Powerful AI Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Leverage cutting-edge AI technology to unlock insights from your data</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {features.map((feature, index) => (
                <div key={index} className="cyber-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6"></div>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-blue-400">
                        <CheckCircle className="w-4 h-4 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Integrations Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Seamless Integrations</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect all your data sources in one powerful dashboard</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>
              {integrations.map((integration, index) => (
                <div key={index} className="cyber-card p-6 text-center hover:scale-105 transition-all duration-300"></div>
                  <div className="text-6xl mb-4">{integration.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-2">{integration.name}</h3>
                  <p className="text-gray-300 text-sm">{integration.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20 px-4" id="pricing"></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                Simple, Transparent Pricing</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your analytics needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-400 scale-105' : ''}`}></div>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <div className="bg-blue-400 text-slate-900 px-4 py-2 rounded-full text-sm font-semibold"></div>
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-8"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="text-4xl font-bold text-blue-400 mb-2">{plan.price}</div>
                    <div className="text-gray-400">per month</div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <a;
                    href={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Analytics Dashboard ${plan.name} Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 ${
                      plan.popular;
                        ? 'bg-blue-400 text-slate-900 hover:bg-blue-300'
                        : 'bg-slate-700 text-white hover:bg-slate-600'
                    }`}
                  >
                    Get Started</a>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-20 px-4 bg-slate-800/50"></section>
          <div className="container mx-auto max-w-7xl"></div>
            <div className="text-center mb-16"></div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 neon-text">
                What Our Customers Say</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join thousands of businesses already using AI Analytics Dashboard</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="cyber-card p-6"></div>
                  <div className="flex items-center mb-4"></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div></div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-blue-400 text-sm">{testimonial.role}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-r from-blue-600 to-purple-600"></section>
          <div className="container mx-auto max-w-4xl text-center"></div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Transform Your Data?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start your free trial today and experience the power of AI-driven analytics
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>
              <a
                href="mailto:kleber@ziontechgroup.com?subject=AI Analytics Dashboard Free Trial Request"
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
              >
                Start Free Trial</a>
              <a;
                href="tel:+13024640950"
                className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all"
              >
                <Phone className="w-5 h-5" />
                +1 302 464 0950</a>
            </div>
            <div className="mt-8 text-blue-100"></div>
              <p>Contact: kleber@ziontechgroup.com | Address: 364 E Main St STE 1008, Middletown, DE 19709</p>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  )
}

export default AIAnalyticsDashboardPage;
      /><divclassName="min-h-screen bg-gradient-to-br from-slate-900via-purple-90 0to-slate-900cyber-gridneural-network-bg"><Navigation />{/* HeroSection */}
      <sectionclassName="relative py-20px-4"><divclassName="container mx-automax-w-7xl"><divclassName="text-centermb-16"><divclassName="inline-flex items-center gap-2 bg-blue-50 0/10text-blue-400px-4 py-2 rounded-full text-smfont-mediummb-6"><BarChart3className="w-4h-4" />AI-Powered Business Intelligence</di><spanclassName="text-5 xlmd:text-7 xl font-bold text-white mb-6 cyber-text-3dneon-pulse"></spa></className="text-5 xlmd:text-7 xl font-bold text-white mb-6 cyber-text-3dneon-pulse">AI Analytics Dashboard</h><spanclassName="text-xlmd:text-2 xl text-gray-300mb-8 max-w-4 xlmx-autoleading-relaxed"></spa></className="text-xlmd:text-2 xl text-gray-300mb-8 max-w-4 xlmx-autoleading-relaxed">Transform your data into actionable insights with AI-powered analytics. Get predictive insights, 
                real-time monitoring, and intelligent recommendations that drive business growth.
            </p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="#pricing"
                 className="cyber-button px-8 py-4 text-lg font-semiboldhover:scale-105transition-allduration-300"
                >Start Free Trial</a><ahref="#demo"
                 className="border-2 border-blue-400text-blue-400px-8 py-4 rounded-lg font-semiboldhover:bg-blue-400 hover:text-slate-900transition-allduration-300"
                >Watch Demo</a></di></di>{/* KeyStats */}
          <divclassName="grid grid-cols-1 md:grid-cols-4 gap-6mb-16"><divclassName="quantum-card p-6text-centerenergy-pulse"><divclassName="text-3 xl font-bold text-blue-400mb-2">45%</di><divclassName="text-gray-300">RevenueIncrease</di></di><divclassName="quantum-card p-6text-centerenergy-pulse"><divclassName="text-3 xl font-bold text-purple-400mb-2">60%</di><divclassName="text-gray-300">ProductivityBoost</di></di><divclassName="quantum-card p-6text-centerenergy-pulse"><divclassName="text-3 xl font-bold text-cyan-400mb-2">30%</di><divclassName="text-gray-300">ConversionLift</di></di><divclassName="quantum-card p-6text-centerenergy-pulse"><divclassName="text-3 xl font-bold text-green-400mb-2">85%</di><divclassName="text-gray-300">AccuracyRate</di></di></di></di></sectio>{/* FeaturesSection */}
      <sectionclassName="py-20px-4" id="features"><divclassName="container mx-automax-w-7xl"><divclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-5 xl font-bold text-whitemb-6neon-text"></spa></className="text-4 xlmd:text-5 xl font-bold text-whitemb-6neon-text">Powerful AI Features</h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></spa></className="text-xl text-gray-300max-w-3xlmx-auto">Leverage cutting-edge AI technology to unlock insights from your data</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{features.map((featureindex) => (
             <divkey={index}className="cyber-card p-6 hover:scale-105transition-allduration-300"><divclassName="w-1 6 h-16bg-gradient-to-br from-blue-500to-purple-600rounded-xl flex items-centerjustify-centermb-6"><feature.iconclassName="w-8h-8text-white" /></di><h3className="text-xl font-boldtext-whitemb-4">{feature.title}</h><pclassName="text-gray-300mb-4">{feature.description}</p><ulclassName="space-y-2">{feature.benefits.map((benefitbenefitIndex) => (
                   <likey={benefitIndex}className="flex items-center text-smtext-blue-400"><CheckCircleclassName="w-4 h-4mr-2flex-shrink-0" />{benefit}
                    </l>))}
                </u></di>))}
          </di></di></sectio>{/* IntegrationsSection */}
      <sectionclassName="py-20px-4 bg-slate-800/50"><divclassName="container mx-automax-w-7xl"><divclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-5 xl font-bold text-whitemb-6neon-text"></spa></className="text-4 xlmd:text-5 xl font-bold text-whitemb-6neon-text">Seamless Integrations</h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></spa></className="text-xl text-gray-300max-w-3xlmx-auto">Connect all your data sources in one powerful dashboard</p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8">{integrations.map((integrationindex) => (
             <divkey={index}className="cyber-card p-6 text-centerhover:scale-105transition-allduration-300"><divclassName="text-6xlmb-4">{integration.icon}</di><h3className="text-xl font-boldtext-whitemb-2">{integration.name}</h><pclassName="text-gray-300text-sm">{integration.description}</p></di>))}
          </di></di></sectio>{/* PricingSection */}
      <sectionclassName="py-20px-4" id="pricing"><divclassName="container mx-automax-w-7xl"><divclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-5 xl font-bold text-whitemb-6neon-text"></spa></className="text-4 xlmd:text-5 xl font-bold text-whitemb-6neon-text">Simple, Transparent Pricing</h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></spa></className="text-xl text-gray-300max-w-3xlmx-auto">Choose the plan that fits your analytics needs</p></di><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{pricingPlans.map((planindex) => (
             <divkey={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-blue-400scale-10 5':''}`}>{plan.popular && (
                  <divclassName="absolute -top-4 left-1/2transform-translate-x-1/2"><divclassName="bg-blue-400text-slate-900px-4 py-2 rounded-fulltext-smfont-semibold">Most Popular</di></di>)}
                <divclassName="text-centermb-8"><h3className="text-2 xl font-boldtext-whitemb-2">{plan.name}</h><pclassName="text-gray-300mb-4">{plan.description}</p><divclassName="text-4 xl font-bold text-blue-400mb-2">{plan.price}</di><divclassName="text-gray-400">permonth</di></di><ulclassName="space-y-4mb-8">{plan.features.map((featurefeatureIndex) => (
                   <likey={featureIndex}className="flex items-centertext-gray-300"><CheckCircleclassName="w-5 h-5text-green-400mr-3flex-shrink-0" />{feature}
                    </l>))}
                </u><ahref={`mailto:kleber@ziontechgroup.com?subject=Interest in AI Analytics Dashboard${plan.name}Plan`}
                    className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300${
                      plan.popular;
                        ? 'bg-blue-400text-slate-900 hover:bg-blue-30 0'
                         : 'bg-slate-700text-whitehover:bg-slate-60 0'
                  }`}
                  >Get Started</a></di>))}
          </di></di></sectio>{/* TestimonialsSection */}
      <sectionclassName="py-20px-4 bg-slate-800/50"><divclassName="container mx-automax-w-7xl"><divclassName="text-centermb-16"><spanclassName="text-4 xlmd:text-5 xl font-bold text-whitemb-6neon-text"></spa></className="text-4 xlmd:text-5 xl font-bold text-whitemb-6neon-text">What Our Customers Say</h><spanclassName="text-xl text-gray-300max-w-3xlmx-auto"></className="text-xl text-gray-300max-w-3xlmx-auto">Join thousands of businesses already using AI Analytics Dashboard</spa></p></di><divclassName="grid grid-cols-1md:grid-cols-3gap-8">{testimonials.map((testimonialindex) => (
             <divkey={index}className="cyber-cardp-6"><divclassName="flexitems-centermb-4">{[...Array(testimonial.rating)].map((_i) => (
                   <Starkey={i}className="w-5 h-5 text-yellow-400fill-current" />))}
                </di><pclassName="text-gray-300mb-6italic">"{testimonial.content}"</p><di v><divclassName="font-semiboldtext-white">{testimonial.name}</di><divclassName="text-blue-400text-sm">{testimonial.role}</di></di></di>))}
          </di></di></sectio>{/* CTASection */}
      <sectionclassName="py-20px-4 bg-gradient-to-rfrom-blue-600to-purple-600"><divclassName="container mx-auto max-w-4xltext-center"><spanclassName="text-4 xlmd:text-5 xl font-boldtext-whitemb-6"></className="text-4 xlmd:text-5 xl font-boldtext-whitemb-6">Ready to Transform Your Data?
          </spa></h><spanclassName="text-xl text-blue-100mb-8"></className="text-xl text-blue-100mb-8">Start your free trial today and experience the power of AI-driven analytics</p><divclassName="flex flex-colsm:flex-row gap-4justify-centeritems-center"><ahref="mailto:kleber@ziontechgroup.com?subject=AI Analytics Dashboard Free TrialRequest"
               className="bg-white text-blue-600px-8 py-4 rounded-lg font-semiboldhover:bg-gray-100transition-colors"
              >Start Free Trial</a><ahref="tel:+13024640950"
               className="flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-all"
              ><PhoneclassName="w-5h-5" />+1 3024640950</a></di><divclassName="mt-8text-blue-100"><p>Contact: kleber@ziontechgroup.com | Address: 364E Main St STE1008, Middletown, DE19709</p></di></di></sectio><Footer /></di></>);
};

exportdefaultAIAnalyticsDashboardPage</spa>
