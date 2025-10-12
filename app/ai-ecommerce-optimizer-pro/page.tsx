import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Zap, Shield, BarChart3, Users} from 'lucide-react';
'use client';

const AiEcommerceOptimizerProPage: React.FC = () => {
  const features = [
    {
      icon: Zap,
      title: 'AI-Powered Optimization',
      description: 'Advanced machine learning algorithms to optimize your e-commerce performance.'
    },
    {
      icon: BarChart3,
      title: 'Analytics Dashboard',
      description: 'Comprehensive analytics and insights to track your business growth.'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security with full compliance and data protection.'
    },
    {
      icon: Users,
      title: 'Customer Insights',
      description: 'Deep customer behavior analysis to improve conversion rates.'
    }
  ];
import { ArrowRight, CheckCircle, Zap, Shield, Brain } from 'lucide-react';

const Page: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Ideal for growing e-commerce businesses',
      features: [
        'Up to 10,000 products',
        'Basic AI optimization',
        'Analytics dashboard',
        'Email support'
      ]
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Perfect for established online stores',
      features: [
        'Up to 50,000 products',
        'Advanced AI optimization',
        'Real-time analytics',
        'Priority support',
        'Custom integrations'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For large-scale e-commerce operations',
      features: [
        'Unlimited products',
        'Full AI suite',
        'Dedicated support',
        'Custom development',
        'SLA guarantee'
      ]
    }
  ];
  return (
    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title>Service - Zion Tech Group</title>
        <meta name="description" content="Professional services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="max-w-7xlmx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        {/* Hero Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h1 className="w-5h-5 ml-2" />
              <span className="w-5h-5 ml-2" />
                AI E-commerce Optimizer Pro
              </span>
            </h1>
            <p className="w-5h-5 ml-2" />
              Professional AI e-commerce optimization services by Zion Tech Group. Expert solutions tailored to your business needs.
            </p>
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <Link
          to="/contact"
          className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-centerjustify-centergroup"
        >
          Get Started
                
          <ArrowRight className="w-5h-5 ml-2" />
        </Link>
              <Link to="/contact" className="bo rder border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                Learn More
                />View All Services
              </Link>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5 ml-2" />
                Why Choose Our AI E-commerce Optimizer?
              </h2>
              <p className="w-5h-5 ml-2" />
                Our advanced AI technology helps you maximize your e-commerce potential
              </p>
            </div>
            
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {[
                {
                  icon: <Brain className="w-5h-5 ml-2" />,
                  title: "AI-Powered Optimization",
                  description: "Advanced machine learning algorithms optimize your product listings, pricing, and recommendations."
                },
                {
                  icon: <Zap className="w-5h-5 ml-2" />,
                  title: "Real-time Analytics",
                  description: "Get instant insights into customer behavior and sales performance with our comprehensive dashboard."
                },
                {
                  icon: <Shield className="w-5h-5 ml-2" />,
                  title: "Secure & Reliable",
                  description: "Enterprise-grade security ensures your data is protected while maintaining 99.9% uptime."
                }
              ].map((feature, index) => (
                <div key={index} className="bg-s late-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 text-center hover:border-cyan-500/50transition-allduration-300" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    {feature.icon}
                  </div>
                  <h3 className="w-5h-5 ml-2" />{feature.title}</h3>
                  <p className="w-5h-5 ml-2" />{feature.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Pricing Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5 ml-2" />
                Choose Your Plan
              </h2>
              <p className="w-5h-5 ml-2" />
                Flexible pricing options to fit your business needs
              </p>
            </div>
            
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              {pricingPlans.map((plan, index) => (
                <div key={index} className="bg-s late-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-8 hover:border-cyan-500/50transition-allduration-300" />
                  <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <h3 className="w-5h-5 ml-2" />{plan.name}</h3>
                    <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                      {plan.price}
                      <span className="w-5h-5 ml-2" />{plan.period}</span>
                    </div>
                    <p className="w-5h-5 ml-2" />{plan.description}</p>
                  </div>
                  
                  <ul className="w-5h-5 ml-2" />
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="fl exitems-center text-gray-300" />
                        <CheckCircle className="w-5h-5 ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <Link to="/contact" className="w-fu ll bg-gradient-to-r from-cyan-500 to-purple-500 text-white py-3 rounded-lg font-semibold text-center block hover:from-cyan-600 hover:to-purple-600transition-allduration-300" />
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
        </div>
      </section>

        {/* CTA Section */}
        <section className="w-5h-5 ml-2" />
          <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <h2 className="w-5h-5 ml-2" />
                Ready to Get Started?
              </h2>
              <p className="w-5h-5 ml-2" />
                Contact us to learn more about our solutions and how we can help your business.
              </p>
              <div className="min-h-screenbg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <Link to="/contact" className="bg-gradient-to-rfrom-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-cyan-500/25" />
                  Contact Us
                </Link>
                <Link to="/services" className="bo rder border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105" />
                  View Services
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Page;
