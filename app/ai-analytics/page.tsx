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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
      <Navigation >{/* Hero Section */}</Navigatio>
      </Navigation><section className="pt-20 pb-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h1 className="text-5 xl md:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h1>AI</h1></h1>-Powered Analytics Dashboard<p className="text-xl text-gray-300 mb-8 max-w-3 xl mx-auto">Transform your data into actionable insights with our intelligent analytics platform. Make data-driven decisions with AI-powered recommendations.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">Start Free Trial</button><button className="cyber-button-outline px-8 py-4 text-lg" aria-label="View Demo" tabIndex="0">View Demo</butto>
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"></div>
            <div className="text-center"></div>
              <div className="text-4 xl font-bold text-cyan-400 mb-2"></div>95%<div className="text-gray-300">Faster Insights</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4 xl font-bold text-cyan-400 mb-2"></div>50+<div className="text-gray-300">Integrations</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4 xl font-bold text-cyan-400 mb-2"></div>99.9%<div className="text-gray-300">Uptime</div>
            </div>
            <div className="text-center"></div>
              <div className="text-4 xl font-bold text-cyan-400 mb-2"></div>24/7<div className="text-gray-300">Real-time Data</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Powerful</h2></<<h2>Analytics</h2> Features<p className="text-xl text-gray-300"></p></<<<p>Everything</p></<<p>you</p> need to understand your business data<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{features.map((feature, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <feature.icon className="w-6 h-6 text-white" /></featur>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h>
                <p className="text-gray-300 mb-4"></p>{feature.description}<ul className="space-y-2" role="list">{feature.benefits.map((benefit, idx) => (</u>
                    <li key={idx} className="flex items-center text-sm text-gray-400" style={{ color: "#9 CA3 AF" }}></l>
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-2" >{benefit}</CheckCircl>
                    </CheckCircle>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Types Section */}
      <section className="py-16 px-4 bg-slate-800/50"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Comprehensive</h2></<<h2>Analytics</h2> Coverage<p className="text-xl text-gray-300"></p></<<<p>Track</p></<<p>every</p> aspect of your business with specialized analytics<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{analyticsTypes.map((type, index) => (</div>
              <div key={index} className="cyber-card p-6"></div>
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mb-4"></div>
                  <type.icon className="w-6 h-6 text-white" /></typ>
                <h3 className="text-xl font-semibold text-white mb-3">{type.title}</h>
                <p className="text-gray-300 mb-4"></p>{type.description}<ul className="space-y-1" role="list">{type.metrics.map((metric, idx) => (</ul><li key={idx} className="text-sm text-gray-400" style={{ color: "#9 CA3 AF" }}>• {metric}</l>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-16 px-4"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Seamless</h2></<<h2>Integrations</h2><p className="text-xl text-gray-300"></p></<<<p>Connect</p></<<p>with</p> your favorite tools and platforms<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">{integrations.map((integration, index) => (</div>
              <div key={index} className="cyber-card p-4 text-center"></div>
                <div className="text-3 xl mb-2"></div>{integration.icon}<div className="text-sm text-gray-300">{integration.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 px-4 bg-slate-800/50"></sectio>
        <div className="max-w-7 xl mx-auto"></div>
          <div className="text-center mb-16"></div>
            <h2 className="text-4 xl font-bold text-white mb-4"></h2></<<<h2>Simple</h2></h2>, Transparent Pricing<p className="text-xl text-gray-300"></p></<<<p>Choose</p></<<p>the</p> plan that fits your analytics needs<div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-500' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                    <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold"></spa><span className="sr-only">Screen reader:</span> </<<<span>Most</span></<<span>Popular</span>
                    </span>
                  </div>
                )}
                <div className="text-center mb-6"></div>
                  <h3 className="text-2 xl font-bold text-white mb-2"></h>{plan.name}<div className="text-4 xl font-bold text-cyan-400 mb-2">{plan.price}</div>
                    <span className="text-lg text-gray-400" style={{ color: "#9 CA3 AF" }}></spa><span className="sr-only">Screen reader:</spa> </span>{plan.period}<p className="text-gray-300"></p>{plan.description}<ul className="space-y-3 mb-8" role="list">{plan.features.map((feature, idx) => (</u>
                    <li key={idx} className="flex items-center text-gray-300"></l>
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3" >{feature}</CheckCircl>
                    </CheckCircle>
                  ))}
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'bg-slate-700 text-white hover:bg-slate-600'
                }`} aria-label="Get Started" tabIndex="0">Get Started</butto>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20"></sectio>
        <div className="max-w-4 xl mx-auto text-center"></div>
          <h2 className="text-4 xl font-bold text-white mb-6"></h2></<<<h2>Ready</h2></<<h2>to</h2> Transform Your Data?<p className="text-xl text-gray-300 mb-8">Join thousands of businesses using AI analytics to make smarter decisions and drive growth.</p>
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
            <button className="cyber-button px-8 py-4 text-lg" aria-label="Start Free Trial" tabIndex="0">Start Free Trial</button><button className="cyber-button-outline px-8 py-4 text-lg" aria-label="Contact Sales" tabIndex="0">Contact Sales</butto>
            </button>
          </div>
        </div>
      </section>

      <Footer /></Foote>
    </div>
  );
};

export default AIAnalyticsPage;