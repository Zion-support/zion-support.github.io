'use client',
import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import SEOOptimizer from '../components/SEOOptimizer';
import { CheckCircle, Star, TrendingUp, Users, Target, BarChart3, Zap, Shield, Clock } from 'lucide-react',

const AISalesAutomationPage: React.FC = () => {
const features = [
    {
      icon: Target,
      title: 'Lead Scoring & Qualification',
      description: 'AI-powered lead scoring that automatically identifies high-value prospects and prioritizes them for your sales team.',
      benefits: ['Automated scoring', 'Higher conversion rates', 'Time savings']
    },
    {
      icon: Users,
      title: 'Automated Outreach',
      description: 'Intelligent email sequences and follow-ups that nurture leads through the sales funnel automatically.',
      benefits: ['Personalized messages', 'Optimal timing', 'Multi-channel approach']
    },
    {
      icon: BarChart3,
      title: 'Sales Analytics',
      description: 'Comprehensive analytics and reporting that provide insights into sales performance and opportunities.',
      benefits: ['Real-time insights', 'Performance tracking', 'ROI analysis']
    },
    {
      icon: Zap,
      title: 'CRM Integration',
      description: 'Seamless integration with popular CRM systems to streamline your sales workflow.',
      benefits: ['Unified data', 'Automated updates', 'Workflow optimization']
    },
    {
      icon: Shield,
      title: 'Predictive Analytics',
      description: 'AI models that predict customer behavior, churn risk, and optimal sales strategies.',
      benefits: ['Predictive insights', 'Risk assessment', 'Strategy optimization']
    },
    {
      icon: Clock,
      title: 'Automated Scheduling',
      description: 'Smart scheduling that finds optimal meeting times and sends automated reminders.',
      benefits: ['Time optimization', 'Reduced no-shows', 'Calendar sync']
    }
  ],

const pricingPlans = [
    {
      name: 'Starter',
      price: '$299',
      period: '/month',
      description: 'Perfect for small sales teams',
      features: [
        'Up to 1,000 leads/month',
        'Basic lead scoring',
        'Email automation',
        'Standard analytics',
        'Email support'
      ],
      popular: false,
    },
    {
      name: 'Professional',
      price: '$799',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI features',
        'Multi-channel automation',
        'Advanced analytics',
        'Priority support',
        'CRM integration',
        'Team collaboration'
      ],
      popular: true,
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'For large sales organizations',
      features: [
        'Unlimited leads',
        'Custom AI models',
        'Full automation suite',
        'Real-time analytics',
        '24/7 dedicated support',
        'Custom integrations',
        'SLA guarantee'
      ],
      popular: false,
    }
  ],

const benefits = [
    {
      icon: TrendingUp,
      title: 'Increase Sales by 300%',
      description: 'Boost your sales performance with AI-powered automation and optimization',
    },
    {
      icon: Clock,
      title: 'Save 20+ Hours/Week',
      description: 'Automate repetitive tasks and focus on high-value activities',
    },
    {
      icon: Target,
      title: 'Higher Conversion Rates',
      description: 'Convert more leads with intelligent targeting and personalization',
    },
    {
      icon: Star,
      title: 'Better Customer Experience',
      description: 'Deliver personalized, timely interactions that delight customers'
    }
  ],

  return(<>
      <SEOOptimizer,
        title="AI Sales Automation - Zion Tech Group"
        description="Boost sales by 300% with intelligent lead scoring, automated outreach, and CRM integration. Transform your sales process with AI-powered automation."
        keywords={['AI sales automation', 'lead scoring', 'sales automation', 'CRM integration', 'sales optimization']}
            </p>
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              </a>
            </div>,
          </section>,
,
          {/* Features Section */}
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Key Features</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">{features.map((feature, index) => (</section>
                <div key={index} className="cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300"></div>
                  <feature.icon className="w-12 h-12 text-cyan-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3><p className="text-gray-300 mb-4">{feature.description}</p><ul className="space-y-2">{feature.benefits.map((benefit, benefitIndex) => (</ul>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                      <li key={benefitIndex} className="flex items-center text-sm text-cyan-400">
                        <CheckCircle className="w-4 h-4 mr-2" >{benefit}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Pricing Section */}
          <section className="mb-16">
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">Most Popular</span>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Pricing Plans,
            </h2>
            <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`cyber-card hologram-card p-8 relative ${plan.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                        Most Popular,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                      </span>
                    </div>
                  )}
                  <div className="text-center mb-6"></div>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3><p className="text-gray-400 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center"></div>
                      <span className="text-4xl font-bold text-cyan-400">{plan.price}</span><span className="text-gray-400 ml-1">{plan.period}</span><ul className="space-y-3 mb-8">{plan.features.map((feature, featureIndex) => (</ul>
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" >{feature}</CheckCircle>
                      </CheckCircle>
                    ))}
                  </a>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits Section */}
          <section className="mb-16">
                <div key={index} className="text-center">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Why Choose Our AI Sales Automation?</h2><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">{benefits.map((benefit, index) => (</section>
                <div key={index} className="text-center"></div>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                  <benefit.icon className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3><p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA Section */}
          <section className="text-center bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-12 border border-cyan-500/20">
              and custom implementation plan.</p>
            <h2 className="text-3xl font-bold text-white mb-6 neon-text">
              Ready to Automate Your Sales?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Get started with our AI sales automation platform today. Contact us for a free consultation,
              and custom implementation plan.
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </p>
                href="tel:+13024640950"
                className="cyber-button w-full sm:w-auto text-center"
              </a>
            </div>
          </section>
        </main>

        <Footer />
      </div>,
    </>,
  ),
},

export default AISalesAutomationPage,