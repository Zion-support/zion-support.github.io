'use client';
import React, { lazy } from 'react';
import { CheckCircle, TrendingUp } from 'lucide-react';

const Navigation = lazy(() => import('../components/Navigation'))
const Footer = lazy(() => import('../components/Footer'))
const AIAnalyticsPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Insights',
      description: 'Get intelligent insights and recommendations powered by advanced machine learning algorithms.',
      benefits: ['Predictive analytics', 'Anomaly detection', 'Trend analysis', 'Smart recommendations']
    },
    {
      icon: BarChart,
      title: 'Real-Time Dashboards',
      description: 'Monitor your business metrics in real-time with customizable, interactive dashboards.',
      benefits: ['Live data updates', 'Custom widgets', 'Interactive charts', 'Mobile responsive']
    },
    {
      icon: Target,
      title: 'Automated Reporting',
      description: 'Generate comprehensive reports automatically with AI-optimized content and visualizations.',
      benefits: ['Scheduled reports', 'Custom templates', 'PDF export', 'Email delivery']
    },
    {
      icon: TrendingUp,
      title: 'Performance Tracking',
      description: 'Track KPIs and performance metrics with advanced analytics and benchmarking.',
      benefits: ['KPI monitoring', 'Goal tracking', 'Benchmarking', 'Performance alerts']
    }
  ]
  const analyticsTypes = [
    {
      title: 'Sales Analytics',
      description: 'Track sales performance, pipeline health, and revenue trends.',
      icon: TrendingUp,
      metrics: ['Revenue tracking', 'Sales forecasting', 'Pipeline analysis', 'Conversion rates']
    },
    {
      title: 'Marketing Analytics',
      description: 'Measure marketing campaign effectiveness and ROI.',
      icon: Target,
      metrics: ['Campaign performance', 'Lead generation', 'Customer acquisition', 'ROI analysis']
    },
    {
      title: 'Customer Analytics',
      description: 'Understand customer behavior and preferences.',
      icon: Users,
      metrics: ['Customer segmentation', 'Behavior analysis', 'Retention rates', 'Lifetime value']
    },
    {
      title: 'Financial Analytics',
      description: 'Monitor financial health and profitability.',
      icon: BarChart,
      metrics: ['Revenue analysis', 'Cost tracking', 'Profit margins', 'Cash flow']
    }
  ]
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started with analytics',
      features: [
        'Up to 5 dashboards',
        'Basic AI insights',
        'Standard reports',
        'Email support',
        '1,000 data points/month',
        'Basic integrations'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses with advanced analytics needs',
      features: [
        'Up to 25 dashboards',
        'Advanced AI insights',
        'Custom reports',
        'Priority support',
        '10,000 data points/month',
        'Advanced integrations',
        'API access',
        'Custom metrics'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'Comprehensive solution for large organizations',
      features: [
        'Unlimited dashboards',
        'Full AI suite',
        'White-label reports',
        '24/7 dedicated support',
        'Unlimited data points',
        'Custom integrations',
        'Advanced security',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]
  const integrations = [
    { name: 'Google Analytics', icon: '📊' },
    { name: 'Salesforce', icon: '☁️' },
    { name: 'HubSpot', icon: '🎯' },
    { name: 'Shopify', icon: '🛒' },
    { name: 'Stripe', icon: '💳' },
    { name: 'Mailchimp', icon: '📧' },
    { name: 'Facebook Ads', icon: '📱' },
    { name: 'Google Ads', icon: '🔍' }
  ]
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
    </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"> </div><Navigation >{/* Hero Section *</Navigation >/</Navigation >}</Navigation>
    <//Navigation> <//Navigation> </Navigation><section className="pt-20 pb-16 px-4">
       </section className="pt-20 pb-16 px-4"> </section className="pt-20 pb-16 px-4"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">AI-Powered Analytics Dashbo</h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">a</h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">r</h1>d</h1>
           <//h1> <//h1><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">Transform your data into actionable insights with our intelligent analytics platform. Make data-driven decisions with AI-powered recommendation</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">s</p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">.</p>
           <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
            </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">Start Free Tria</button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">l</button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0"><button className="cyber-button-outline px-8 py-4 text-lg" aria-label="View Demo" tabIndex="0">View De</button className="cyber-button-outline px-8 py-4 text-lg" aria-label="View Demo" tabIndex="0">m</button className="cyber-button-outline px-8 py-4 text-lg" aria-label="View Demo" tabIndex="0">o</button>
            <//button> <//button> </button>
          <//button> <//button> </div>
        <//div> <//div> </div>

          {/* Stats */}
         <//div> <//div><div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
           </div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"> </div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-4xl font-bold text-cyan-400 mb-2">9</div className="text-4xl font-bold text-cyan-400 mb-2">5</div>%</div>
               <//div> <//div><div className="text-gray-300">Faster Insig</div className="text-gray-300">h</div className="text-gray-300">t</div>s</div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-4xl font-bold text-cyan-400 mb-2">5</div className="text-4xl font-bold text-cyan-400 mb-2">0</div>+</div>
               <//div> <//div><div className="text-gray-300">Integrati</div className="text-gray-300">o</div className="text-gray-300">n</div>s</div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-4xl font-bold text-cyan-400 mb-2">99</div className="text-4xl font-bold text-cyan-400 mb-2">.</div className="text-4xl font-bold text-cyan-400 mb-2">9</div>%</div>
               <//div> <//div><div className="text-gray-300">Upt</div className="text-gray-300">i</div className="text-gray-300">m</div>e</div>
           <//div> <//div><div className="text-center">
             </div className="text-center"> </div className="text-center"><div className="text-4xl font-bold text-cyan-400 mb-2">2</div className="text-4xl font-bold text-cyan-400 mb-2">4</div className="text-4xl font-bold text-cyan-400 mb-2">/</div>7</div>
               <//div> <//div><div className="text-gray-300">Real-time D</div className="text-gray-300">a</div className="text-gray-300">t</div>a</div>
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Features Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Powerful Analytics Feature</h2 className="text-4xl font-bold text-white mb-4">s</h2 className="text-4xl font-bold text-white mb-4"><p className="text-xl text-gray-300">Everything you need to understand your business dat</p className="text-xl text-gray-300">a</p className="text-xl text-gray-300"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6">
               </div key={index} className="cyber-card p-6"> </div key={index} className="cyber-card p-6"><div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4">
                </div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"> </div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"> </div><feature.icon className="w-6 h-6 text-white" />
               </feature.icon className="w-6 h-6 text-white" /> </feature.icon className="w-6 h-6 text-white" /><h3 className="text-xl font-semibold text-white mb-3">{feature.titl</h3 className="text-xl font-semibold text-white mb-3">e</h3 className="text-xl font-semibold text-white mb-3">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-4">{feature.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><ul className="space-y-2" role="list">{feature.benefits.map((benefit, idx) =></ul className="space-y-2" role="list"> </ul className="space-y-2" role="list">(</ul>
                   <//ul> <//ul><li key={idx} className="flex items-center text-sm text-gray-400" style={{ color: "#9CA3AF" }}>
                     </li key={idx} className="flex items-center text-sm text-gray-400" style={{ color: "#9CA3AF" }}> </li key={idx} className="flex items-center text-sm text-gray-400" style={{ color: "#9CA3AF" }}><CheckCircle className="w-4 h-4 text-cyan-400 mr-2" >{benefi</CheckCircle className="w-4 h-4 text-cyan-400 mr-2" >t</CheckCircle className="w-4 h-4 text-cyan-400 mr-2" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
              <//CheckCircle> <//CheckCircle> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Analytics Types Section */}
     <//section> <//section><section className="py-16 px-4 bg-slate-800/50">
       </section className="py-16 px-4 bg-slate-800/50"> </section className="py-16 px-4 bg-slate-800/50"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Comprehensive Analytics Coverag</h2 className="text-4xl font-bold text-white mb-4">e</h2 className="text-4xl font-bold text-white mb-4"><p className="text-xl text-gray-300">Track every aspect of your business with specialized analytic</p className="text-xl text-gray-300">s</p className="text-xl text-gray-300"><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{analyticsTypes.map((type, index) =</div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">></div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-6">
               </div key={index} className="cyber-card p-6"> </div key={index} className="cyber-card p-6"><div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4">
                </div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4"> </div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4"> </div><type.icon className="w-6 h-6 text-white" />
               </type.icon className="w-6 h-6 text-white" /> </type.icon className="w-6 h-6 text-white" /><h3 className="text-xl font-semibold text-white mb-3">{type.titl</h3 className="text-xl font-semibold text-white mb-3">e</h3 className="text-xl font-semibold text-white mb-3">}</h3>
               <//h3> <//h3><p className="text-gray-300 mb-4">{type.description</p className="text-gray-300 mb-4">}</p className="text-gray-300 mb-4"><ul className="space-y-1" role="list">{type.metrics.map((metric, idx) => </ul className="space-y-1" role="list">(</ul className="space-y-1" role="list"><li key={idx} className="text-sm text-gray-400" style={{ color: "#9CA3AF" }}>• {metri</li key={idx} className="text-sm text-gray-400" style={{ color: "#9CA3AF" }}>c</li key={idx} className="text-sm text-gray-400" style={{ color: "#9CA3AF" }}>}</li>
                  ))}
              <//li> <//li> </ul>
            <//ul> <//ul> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Integrations Section */}
     <//section> <//section><section className="py-16 px-4">
       </section className="py-16 px-4"> </section className="py-16 px-4"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Seamless Integration</h2 className="text-4xl font-bold text-white mb-4">s</h2 className="text-4xl font-bold text-white mb-4"><p className="text-xl text-gray-300">Connect with your favorite tools and platform</p className="text-xl text-gray-300">s</p className="text-xl text-gray-300"><div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">{integrations.map((integration, index) =</div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">></div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"> </div>(</div>
             <//div> <//div><div key={index} className="cyber-card p-4 text-center">
               </div key={index} className="cyber-card p-4 text-center"> </div key={index} className="cyber-card p-4 text-center"><div className="text-3xl mb-2">{integration.ic</div className="text-3xl mb-2">o</div className="text-3xl mb-2">n</div>}</div>
               <//div> <//div><div className="text-sm text-gray-300">{integration.na</div className="text-sm text-gray-300">m</div className="text-sm text-gray-300">e</div>}</div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* Pricing Section */}
     <//section> <//section><section className="py-16 px-4 bg-slate-800/50">
       </section className="py-16 px-4 bg-slate-800/50"> </section className="py-16 px-4 bg-slate-800/50"><div className="max-w-7xl mx-auto">
         </div className="max-w-7xl mx-auto"> </div className="max-w-7xl mx-auto"><div className="text-center mb-16">
          </div className="text-center mb-16"> </div className="text-center mb-16"> </div><h2 className="text-4xl font-bold text-white mb-4">Simple, Transparent Pricin</h2 className="text-4xl font-bold text-white mb-4">g</h2 className="text-4xl font-bold text-white mb-4"><p className="text-xl text-gray-300">Choose the plan that fits your analytics need</p className="text-xl text-gray-300">s</p className="text-xl text-gray-300"><div className="grid grid-cols-1 md:grid-cols-3 gap-8">{pricingPlans.map((plan, index) => </div className="grid grid-cols-1 md:grid-cols-3 gap-8">(</div className="grid grid-cols-1 md:grid-cols-3 gap-8"><div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular &</div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>&</div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}> </div>(</div>
                 <//div> <//div><div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div className="absolute -top-4 left-1/2 transform -translate-x-1/2"> </div><span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"><span className="sr-only">Screen reade</span className="sr-only">r</span className="sr-only">:</span>
                      Most Popular
                  <//span> <//span> </span>
                <//span> <//span> </div>
                )}
               <//div> <//div><div className="text-center mb-6">
                </div className="text-center mb-6"> </div className="text-center mb-6"> </div><h3 className="text-2xl font-bold text-white mb-2">{plan.name</h3 className="text-2xl font-bold text-white mb-2">}</h3 className="text-2xl font-bold text-white mb-2"><div className="text-4xl font-bold text-cyan-400 mb-2">{plan.pri</div className="text-4xl font-bold text-cyan-400 mb-2">c</div className="text-4xl font-bold text-cyan-400 mb-2">e</div>}</div>
                   <//div> <//div><span className="text-lg text-gray-400" style={{ color: "#9CA3AF" }}><span className="sr-only">Screen reade</span className="sr-only">r</span className="sr-only">:</span>{plan.period<//span>}<//span><p className="text-gray-300">{plan.description</p className="text-gray-300">}</p className="text-gray-300"><ul className="space-y-3 mb-8" role="list">{plan.features.map((feature, idx) =></ul className="space-y-3 mb-8" role="list"> </ul className="space-y-3 mb-8" role="list">(</ul>
                   <//ul> <//ul><li key={idx} className="flex items-center text-gray-300">
                     </li key={idx} className="flex items-center text-gray-300"> </li key={idx} className="flex items-center text-gray-300"><CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >{featur</CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >e</CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >}</CheckCircle>
                  <//CheckCircle> <//CheckCircle> </CheckCircle>
                  ))}
               <//CheckCircle> <//CheckCircle><button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`} aria-label="Get Started" tabIndex="0">Get Start</button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`} aria-label="Get Started" tabIndex="0">e</button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`} aria-label="Get Started" tabIndex="0">d</button>
              <//button> <//button> </button>
            <//button> <//button> </div>
            ))}
        <//div> <//div> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

      {/* CTA Section */}
     <//section> <//section><section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
       </section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20"> </section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20"><div className="max-w-4xl mx-auto text-center">
        </div className="max-w-4xl mx-auto text-center"> </div className="max-w-4xl mx-auto text-center"> </div><h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Dat</h2 className="text-4xl font-bold text-white mb-6">a</h2 className="text-4xl font-bold text-white mb-6">?</h2>
           <//h2> <//h2><p className="text-xl text-gray-300 mb-8">Join thousands of businesses using AI analytics to make smarter decisions and drive growt</p className="text-xl text-gray-300 mb-8">h</p className="text-xl text-gray-300 mb-8">.</p>
         <//p> <//p><div className="flex flex-col sm:flex-row gap-4 justify-center">
          </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div className="flex flex-col sm:flex-row gap-4 justify-center"> </div><button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">Start Free Tria</button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">l</button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0"><button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0">Contact Sal</button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0">e</button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0">s</button>
          <//button> <//button> </button>
        <//button> <//button> </div>
      <//div> <//div> </div>
    <//div> <//div> </section>

     <//section> <//section><Footer />
  </Footer /> </Footer /> </div>
  );
};

export default AIAnalyticsPage<//div>;<//div>