import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target } from 'lucide-react';
import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
export default function AISupplyChainOptimizerPage() {
'use client';
export default function AISupplyChainOptimizerPage() {
  const features = [
    {
      title: 'Predictive Demand Forecasting',
      description: 'AI algorithms analyze historical data, market trends, and external factors to predict demand with 92% accuracy.',
      icon: <TrendingUp className="w-5h-5ml-2" />,
      benefits: ['Demand prediction', 'Seasonal analysis', 'Market trend insights', 'Inventory optimization']
    },
    {
      title: 'Smart Route Optimization',
      description: 'Advanced logistics algorithms optimize delivery routes, reduce fuel costs, and improve delivery times.',
      icon: <Truck className="w-5h-5ml-2" />,
      benefits: ['Route optimization', 'Fuel cost reduction', 'Delivery time improvement', 'Real-time tracking']
    },
    {
      title: 'Automated Inventory Management',
      description: 'Intelligent inventory control with automated reordering, stock level monitoring, and waste reduction.',
      icon: <Package className="w-5h-5ml-2" />,
      benefits: ['Auto reordering', 'Stock monitoring', 'Waste reduction', 'Cost optimization']
    },
    {
      title: 'Risk Management & Compliance',
      description: 'Comprehensive risk assessment and compliance monitoring to ensure supply chain resilience.',
      icon: <Shield className="w-5h-5ml-2" />,
      benefits: ['Risk assessment', 'Compliance monitoring', 'Disruption alerts', 'Mitigation strategies']
    }
  ];
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small to medium businesses',
      features: [
        'Up to 5 warehouses',
        'Basic demand forecasting',
        'Route optimization',
        'Email support',
        'Standard integrations'
      ],
      popular: false;
    },
    {
      name: 'Professional',
      price: '$599',
      period: '/month',
      description: 'Advanced features for growing companies',
      features: [
        'Up to 25 warehouses',
        'Advanced AI forecasting',
        'Multi-modal optimization',
        'Priority support',
        'Custom integrations',
        'Real-time analytics'
      ],
      popular: true;
    },
    {
      name: 'Enterprise',
      price: '$1,999',
      period: '/month',
      description: 'Complete solution for large organizations',
      features: [
        'Unlimited warehouses',
        'Custom AI models',
        'White-label options',
        'Dedicated account manager',
        'API access',
        'Advanced security'
      ],
      popular: false;
    }
  ];
  const testimonials = [
    {
      name: 'Robert Chen',
      role: 'Supply Chain Director',
      company: 'Global Logistics Inc.',
      content: 'AI Supply Chain Optimizer reduced our logistics costs by 35% and improved delivery times by 40%. The predictive analytics are game-changing.',
      rating: 5;
    },
    {
      name: 'Maria Rodriguez',
      role: 'Operations Manager',
      company: 'RetailMax Corp',
      content: 'The automated inventory management saved us from stockouts and overstocking. Our inventory turnover improved by 50%.',
      rating: 5;
    },
    {
      name: 'James Wilson',
      role: 'CEO',
      company: 'Manufacturing Solutions',
      content: 'This AI tool transformed our entire supply chain. We can now predict disruptions before they happen and optimize accordingly.',
      rating: 5;
    }
  ];
  const stats = [
    { number: '35%', label: 'Cost Reduction', icon: <TrendingUp className="w-5h-5ml-2" /&gt; },</TrendingUp></TrendingUp>
    { number: '92%', label: 'Forecast Accuracy', icon: <Target className="w-5h-5ml-2" /&gt; },</Target></Target>
    { number: '500+', label: 'Companies Using', icon: <Globe className="w-5h-5ml-2" /&gt; },</Globe></Globe>
    { number: '40%', label: 'Delivery Improvement', icon: <Clock className="w-5h-5ml-2" /&gt; }</Clock></Clock>
  ];
  return (
        <>
      <title>5G Data Analytics - Zion Tech Group</title>
                <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
      </>
  );
    <><div></>
      <Helmet>        <title></div>AI Supply Chain Optimizer - Smart Logistics & Inventory Management | Zion Tech Group<div></title>
        <meta const name = "description" content="Optimize your supply chain with AI-powered demand forecasting, route optimization, and inventory management. Reduce costs by 35% and improve delivery times by 40%." /></meta></div></div>
        <div><meta name="keywords" content="AI supply chain, logistics optimization, inventory management, demand forecasting, supply chain AI, logistics technology"></meta></div>
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer"></div><div></link></div>
      </Helmet>
      <FuturisticBackground variant="services"></div></FuturisticBackground></div>
        {/* Hero Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <h1 className="w-5h-5ml-2">AI Supply Chain Optimizer;
              </h1>
              <p className="w-5h-5ml-2">Revolutionize your supply chain with AI-powered demand forecasting, route optimization,
                and intelligent inventory management. Reduce costs by 35% and improve efficiency by 40%.
              <div></p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                <FuturisticButton;</FuturisticButton></FuturisticButton>
                  variant="primary"
                  size="lg"
                  onClick="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial;
                  <div><ArrowRight className="w-5h-5ml-2"></ArrowRight></div>
                </FuturisticButton></div>
                <FuturisticButton;</FuturisticButton></FuturisticButton></div>
                  variant="ghost"
                  size="lg"
                  onClick="{()" =  />window.open('#demo', '_blank')}
                >
                  Watch Demo;
                </FuturisticButton>
              </div>
            {/* Stats */}
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {stats.map((stat, index) => (
                <div><div key={index} className="text-center"></div></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>{stat.icon}
                  </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}</div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}</div>
              ))}
            </div>
        </section>
        {/* Features Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <h2 className="w-5h-5ml-2" />Advanced AI Features;
              </h2>
              <p className="w-5h-5ml-2">Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations;
              <div></p>
            </div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              {features.map((feature, index) => (
                <div><FuturisticCard key="{index}" variant="service" className="h-full"></FuturisticCard></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}<div></h3>
                  </div></div>
                  <p className="w-5h-5ml-2"></div>{feature.description}<div></p>
                  <ul className="w-5h-5ml-2"></ul></div></div>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div><li key={benefitIndex} className="flex items-centertext-sm text-gray-300"></li></div>
                        <CheckCircle className="w-5h-5ml-2"></div></CheckCircle></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
        </section>
        {/* Pricing Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <h2 className="w-5h-5ml-2" />Choose Your Plan;
              </h2>
              <p className="w-5h-5ml-2">Scalable pricing options to match your supply chain needs;
              <div></p>
            </div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              {pricingPlans.map((plan, index) => (
                <FuturisticCard;</FuturisticCard></FuturisticCard>
                  key="{index}"
                  variant="{plan.popular" ? "feature" : "service"}
                  className="{`h-full" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} /></FuturisticCard>
                  {plan.popular && (
                    <div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
                      <span className="w-5h-5ml-2" /></div>Most Popular;
                      </span>
                    </div>
                  )}
                  <div><div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div>
                    <h3 className="w-5h-5ml-2" /></div>{plan.name}<div></h3>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                      <span className="w-5h-5ml-2" />{plan.price}</span>
                      <span className="w-5h-5ml-2" />{plan.period}<div></span>
                    </div></div>
                    <p className="w-5h-5ml-2"></div>{plan.description}<div></p>
                  </div></div>
                  <ul className="w-5h-5ml-2"></div></ul></div>
                    {plan.features.map((feature, featureIndex) => (
                      <div><li key={featureIndex} className="flex items-centertext-sm text-gray-300"></li></div>
                        <CheckCircle className="w-5h-5ml-2"></div></CheckCircle></div>
                        {feature}
                      </li>
                    ))}
                  <div></ul>
                  <FuturisticButton;</FuturisticButton></FuturisticButton></div></div>
                    variant="{plan.popular" ? "primary" : "ghost"}
                    className="w-full"
                    onClick="{()" =  />window.open('/contact', '_blank')}
                  >
                    Get Started;
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
        </section>
        {/* Testimonials Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              <h2 className="w-5h-5ml-2" />What Our Clients Say;
              </h2>
              <p className="w-5h-5ml-2">Join hundreds of companies optimizing their supply chains;
              <div></p>
            </div></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
              {testimonials.map((testimonial, index) => (
                <div><FuturisticCard key="{index}" variant="testimonial" className="h-full"></FuturisticCard></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4h-4text-yellow-400fill-current"></Star>
                    ))}
                  </div>
                  <blockquote className="w-5h-5ml-2" />"{testimonial.content}"
                  <div></blockquote>
                  <footer></footer></div></div>
                    <p className="w-5h-5ml-2">{testimonial.name}</p>
                    <p className="w-5h-5ml-2">{testimonial.role}</p>
                    <p className="w-5h-5ml-2">{testimonial.company}<div></p>
                  </footer></div>
                </FuturisticCard></div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <div><section className="w-5h-5ml-2"></section></div>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div><div></div></div>
            <FuturisticCard variant="feature" className="text-center"></FuturisticCard></div></div>
              <h2 className="w-5h-5ml-2" />Ready to Optimize Your Supply Chain?
              </h2>
              <p className="w-5h-5ml-2">Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.
              <div></p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                <FuturisticButton;</FuturisticButton></FuturisticButton>
                  variant="primary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Start Free Trial;
                <div></FuturisticButton>
                <FuturisticButton;</FuturisticButton></FuturisticButton></div></div>
                  variant="secondary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo;
                <div></FuturisticButton>
              </div></div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div></div></div>
                <p />✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime<div></p>
              </div></div>
            </FuturisticCard></div>
          <div></div></div>
        </section>
          </FuturisticBackground></div></div>
</>
  );
}