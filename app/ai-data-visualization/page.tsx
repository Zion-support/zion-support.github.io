'use client';
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, BarChart3, PieChart, TrendingUp, Eye, Database, Zap, Shield, Users } from 'lucide-react';

const AIDataVisualizationPage: React.FC = () => {
  const features = [
    {
      icon: BarChart3,
      title: 'Interactive Dashboards',
      description: 'Create stunning, interactive dashboards that bring your data to life with real-time updates and drill-down capabilities.',
      benefits: ['Real-time updates', 'Interactive charts', 'Custom layouts']
    },
    {
      icon: PieChart,
      title: 'Advanced Chart Types',
      description: 'Access to 50+ chart types including heatmaps, treemaps, sankey diagrams, and more for comprehensive data representation.',
      benefits: ['50+ chart types', 'Custom styling', 'Responsive design']
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      description: 'AI-powered predictive models that forecast trends and patterns to help you make data-driven decisions.',
      benefits: ['Trend forecasting', 'Pattern recognition', 'Predictive insights']
    },
    {
      icon: Eye,
      title: 'Visual Storytelling',
      description: 'Transform complex data into compelling visual narratives that engage and inform your audience.',
      benefits: ['Story-driven insights', 'Engaging presentations', 'Clear communication']
    },
    {
      icon: Database,
      title: 'Multi-Source Integration',
      description: 'Connect to 100+ data sources including databases, APIs, cloud services, and file formats.',
      benefits: ['100+ integrations', 'Real-time sync', 'Data transformation']
    },
    {
      icon: Zap,
      title: 'Automated Insights',
      description: 'AI automatically identifies key insights, anomalies, and trends in your data without manual analysis.',
      benefits: ['Auto-discovery', 'Anomaly detection', 'Smart recommendations']
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$149',
      period: '/month',
      description: 'Perfect for small teams',
      features: [
        'Up to 5 dashboards',
        'Basic chart types',
        '1 data source',
        'Standard templates',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$399',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 25 dashboards',
        'All chart types',
        '10 data sources',
        'Custom templates',
        'Priority support',
        'API access',
        'Team collaboration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$999',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited dashboards',
        'Advanced AI features',
        'Unlimited data sources',
        'White-label options',
        '24/7 dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      icon: Users,
      title: 'Better Decision Making',
      description: 'Make informed decisions with clear, actionable insights from your data'
    },
    {
      icon: Shield,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with compliance to industry standards'
    },
    {
      icon: Zap,
      title: 'Time Saving',
      description: 'Reduce time spent on data analysis by up to 80% with automated insights'
    },
    {
      icon: Star,
      title: 'User Friendly',
      description: 'Intuitive interface that requires no technical expertise to create stunning visualizations'
    }
  ];

  return (
    <>{}</>{}{}
      <SEOOptimizer
        title="AI Data Visualization - Zion Tech Group"
        description="Transform data into actionable insights with AI-powered visualization, interactive dashboards, and predictive analytics. Make better decisions with stunning data visualizations."
        keywords={['AI data visualization', 'interactive dashboards', 'data analytics', 'business intelligence', 'data insights']}
        canonicalUrl="https://ziontechgroup.com/ai-data-visualization"
      /></SEOOptimize>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg"></div>
        <Navigation /></Navigatio>

        <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */}</mai>
          <section className="text-center mb-16"></sectio>
            <h1 className="text-4 xl md:text-6 xl font-bold text-white mb-6 neon-text"></h1></<<<h1>AI</h1></<<h1>Data</h1> Visualization<p className="text-xl text-cyan-400 mb-8 font-medium"></p></<<<p>Transform</p></<<p>data</p> into actionable insights<p className="text-lg text-gray-300 max-w-4 xl mx-auto mb-8">Create stunning, interactive data visualizations with AI-powered insights,</p></<<<p>predictive</p></<<p>analytics</p>, and automated discovery of key trends and patterns.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >📞 Call: (302) 464-0950</a><a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >✉️ Get Quote</a>
              </a>
            </div>
          </section>

          {/* Features Section */}
          <section className="mb-16"></sectio>
            <h2 className="text-3 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>Key</h2></<<h2>Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</div>
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" /></featur>
                  <h3 className="text-xl font-semibold text-white mb-3"></h>{feature.title}<p className="text-gray-300 mb-4"></p>{feature.description}<ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</u>
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400"></l>
                        <CheckCircle className="w-4 h-4 mr-2" >{benefit}</CheckCircl>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16"></sectio>
            <h2 className="text-3 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>Pricing</h2></<<h2>Plans</h2><div className="grid grid-cols-1 md:grid-cols-3 gap-8"></div>{pricingPlans.map((plan, index) => (<div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>{plan.popular && (</div>
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2"></div>
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</spa>
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2 xl font-bold text-white mb-2"></h>{plan.name}<p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4 xl font-bold text-cyan-400"></spa>{plan.price}<span className="text-gray-400 ml-1"></spa>{plan.period}<ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</u>
                      <li key={featureIndex} className="flex items-center text-gray-300"></l>
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" >{feature}</CheckCircl>
                      </CheckCircle>
                    ))}
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? 'bg-cyan-400 text-black hover:bg-cyan-300'
                        : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                    }`}
                  >Get Started</a>
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16"></sectio>
            <h2 className="text-3 xl font-bold text-white mb-12 text-center neon-text"></h2></<<<h2>Why</h2></<<h2>Choose</h2> Our AI Data Visualization?<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</div>
                <div key={index} className="text-center"></div>
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" /></benefi>
                  <h3 className="text-xl font-semibold text-white mb-3"></h>{benefit.title}<p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-12 border border-cyan-500/20"></sectio>
            <h2 className="text-3 xl font-bold text-white mb-6 neon-text"></h2></<<<h2>Ready</h2></<<h2>to</h2> Visualize Your Data?<p className="text-gray-300 mb-8 max-w-2 xl mx-auto">Get started with our AI data visualization platform today. Contact us for a free demo</p></<<<p>and</p></<<p>custom</p> implementation plan.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              >📞 Call: (302) 464-0950</a><a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-3 rounded-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300 w-full sm:w-auto text-center"
              >✉️ Email Us</a>
              </a>
            </div>
          </section>
        </main>

        <Footer /></Foote>
      </div>
    
  );
};

export default AIDataVisualizationPage;
