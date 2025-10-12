import React from 'react';

import { Helmet } from 'react-helmet-async';
import { Truck, Package, TrendingUp, Shield, Clock, CheckCircle, ArrowRight, Star, Globe, Target } from 'lucide-react';

import FuturisticBackground from '../components/FuturisticBackground';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
export default function AISupplyChainOptimizerPage() {
'use client';

export default function AISupplyChainOptimizerPage() {
  );

    <></>
      <Helmet>        <title>AI Supply Chain Optimizer - Smart Logistics & Inventory Management | Zion Tech Group</title>
        <meta const name = "description" content="Optimize your supply chain with AI-powered demand forecasting, route optimization, and inventory management. Reduce costs by 35% and improve delivery times by 40%." /  /></meta>
        <meta name="keywords" content="AI supply chain, logistics optimization, inventory management, demand forecasting, supply chain AI, logistics technology" /></meta>
        <link rel="canonical" href="https://ziontechgroup.com/ai-supply-chain-optimizer"  /></link>
      </Helmet>
      <FuturisticBackground variant="services" /></FuturisticBackground>
        {/* Hero Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h1 className="w-5h-5ml-2">AI Supply Chain Optimizer;
              </h1>
              <p className="w-5h-5ml-2">Revolutionize your supply chain with AI-powered demand forecasting, route optimization, 
                and intelligent inventory management. Reduce costs by 35% and improve efficiency by 40%.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <FuturisticButton;</FuturisticButton></FuturisticButton>
                  variant="primary"
                  size="lg"
                  onClick="{()" = /> window.open('/contact', '_blank')}
                >
                  Start Free Trial;
                  <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
                </FuturisticButton>
                <FuturisticButton;</FuturisticButton></FuturisticButton>
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
                <div key={index} className="text-center" /></div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.icon}
                  </div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.number}</div>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{stat.label}</div>
              ))}
            </div>
        </section>
        {/* Features Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Advanced AI Features;
              </h2>
              <p className="w-5h-5ml-2">Cutting-edge artificial intelligence meets supply chain expertise to optimize your operations;
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {features.map((feature, index) => (
                <FuturisticCard key="{index}" variant="service" className="h-full" /></FuturisticCard>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {feature.icon}
                    <h3 className="w-5h-5ml-2" />{feature.title}</h3>
                  </div>
                  <p className="w-5h-5ml-2">{feature.description}</p>
                  <ul className="w-5h-5ml-2" /></ul>
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-centertext-sm text-gray-300" /></li>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </FuturisticCard>
              ))}
            </div>
        </section>
        {/* Pricing Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Choose Your Plan;
              </h2>
              <p className="w-5h-5ml-2">Scalable pricing options to match your supply chain needs;
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {pricingPlans.map((plan, index) => (
                <FuturisticCard;</FuturisticCard></FuturisticCard>
                  key="{index}" 
                  variant="{plan.popular" ? "feature" : "service"} 
                  className="{`h-full" ${plan.popular ? 'ring-2 ring-purple-500' : ''}`} /></FuturisticCard>
                  {plan.popular && (
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <span className="w-5h-5ml-2" />Most Popular;
                      </span>
                    </div>
                  )}
                  
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                      <span className="w-5h-5ml-2" />{plan.price}</span>
                      <span className="w-5h-5ml-2" />{plan.period}</span>
                    </div>
                    <p className="w-5h-5ml-2">{plan.description}</p>
                  </div>
                  <ul className="w-5h-5ml-2" /></ul>
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-centertext-sm text-gray-300" /></li>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <FuturisticButton;</FuturisticButton></FuturisticButton>
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
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />What Our Clients Say;
              </h2>
              <p className="w-5h-5ml-2">Join hundreds of companies optimizing their supply chains;
              </p>
            </div>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key="{index}" variant="testimonial" className="h-full" /></FuturisticCard>
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4h-4text-yellow-400fill-current"  /></Star>
                    ))}
                  </div>
                  <blockquote className="w-5h-5ml-2" />"{testimonial.content}"
                  </blockquote>
                  <footer /></footer>
                    <p className="w-5h-5ml-2">{testimonial.name}</p>
                    <p className="w-5h-5ml-2">{testimonial.role}</p>
                    <p className="w-5h-5ml-2">{testimonial.company}</p>
                  </footer>
                </FuturisticCard>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <FuturisticCard variant="feature" className="text-center" /></FuturisticCard>
              <h2 className="w-5h-5ml-2" />Ready to Optimize Your Supply Chain?
              </h2>
              <p className="w-5h-5ml-2">Start your free 14-day trial today. No credit card required. Join 500+ companies optimizing their supply chains.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <FuturisticButton;</FuturisticButton></FuturisticButton>
                  variant="primary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Start Free Trial;
                </FuturisticButton>
                <FuturisticButton;</FuturisticButton></FuturisticButton>
                  variant="secondary"
                  size="lg"
                  onClick="{()" =  />window.open('/contact', '_blank')}
                >
                  Schedule Demo;
                </FuturisticButton>
              </div>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <p />✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime</p>
              </div>
            </FuturisticCard>
          </div>
        </section>
          </FuturisticBackground>
</>
  );
}
