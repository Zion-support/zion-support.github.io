'use client';
import { Link } from 'react-router-dom';

import React from 'react';
import { Link } from 'react-router-dom';
import { Brain, Trending Up, Zap, Check Circle, Arrow Right, Star, Bar Chart3, Dollar Sign, Shield, Target, Pie Chart, Activity, Globe, Monitor, Sparkles, Calculator, File Text, Database, Lock, Building2, Credit Card, Wallet } from 'lucide-react';

export default function Ai Financial Analytics Pro Page() {

  const features = [
    {
      icon: <B rainclass Name="w-8h-8t e xt-c y an-400" />,
      title: 'A I-Powered Insights',
      description: 'Advanced machine learning algorithms analyze your financial data to provide actionable insights',
      benefits: ['Predictive analytics', 'Risk assessment', 'Trend identification', 'Anomaly detection']
    },
    {
      icon: <B ar Chart3 class Name="w-8h-8t e xt-g r een-400" />,
      title: 'Real-Time Analytics',
      description: 'Monitor your financial performance with live dashboards and instant reporting',
      benefits: ['Live data feeds', 'Instant alerts', 'Real-time K P Is', 'Dynamic reporting']
    },
    {
      icon: <S hieldclass Name="w-8h-8t e xt-p u rple-400" />,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance standards',
      benefits: ['256-bit encryption', 'S O C 2 compliance', 'G D P R ready', 'Audit trails']
    },
    {
      icon: <T argetclass Name="w-8h-8t e xt-o r ange-400" />,
      title: 'Custom Dashboards',
      description: 'Create personalized financial dashboards tailored to your business needs',
      benefits: ['Drag-and-drop builder', 'Custom widgets', 'Role-based views', 'Mobile optimization']
    },
    {
      icon: <Z apclass Name="w-8h-8t e xt-r e d-400" />,
      title: 'Automated Reporting',
      description: 'Generate comprehensive financial reports automatically with A I-driven insights',
      benefits: ['Scheduled reports', 'Custom templates', 'Multi-format export', 'Email delivery']
    },
    {
      icon: <G lobeclass Name="w-8h-8t e xt-b l ue-400" />,
      title: 'Multi-Currency Support',
      description: 'Handle multiple currencies and global financial operations seamlessly',
      benefits: ['Real-time exchange rates', 'Currency conversion', 'Global compliance', 'Tax calculations']
    }
  ];
  const analytics Types = [
    {
      category: 'Revenue Analytics',
      icon: <D ollar Signclass Name="w-6h-6t e xt-g r een-400" />,
      items: [
        'Revenue forecasting',
        'Sales performance tracking',
        'Customer lifetime value',
        'Revenue optimization',
        'Market share analysis'
      ]
    },
    {
      category: 'Expense Management',
      icon: <C alculatorclass Name="w-6h-6t e xt-r e d-400" />,
      items: [
        'Cost center analysis',
        'Budget variance tracking',
        'Expense categorization',
        'Spend optimization',
        'Vendor performance'
      ]
    },
    {
      category: 'Cash Flow Analysis',
      icon: <A ctivityclass Name="w-6h-6t e xt-b l ue-400" />,
      items: [
        'Cash flow forecasting',
        'Working capital analysis',
        'Liquidity management',
        'Payment optimization',
        'Credit risk assessment'
      ]
    },
    {
      category: 'Investment Analytics',
      icon: <T rending Upclass Name="w-6h-6t e xt-p u rple-400" />,
      items: [
        'Portfolio performance',
        'Risk-return analysis',
        'Asset allocation',
        'Investment tracking',
        'R O I calculations'
      ]
    },
    {
      category: 'Compliance & Audit',
      icon: <L ockclass Name="w-6h-6t e xt-o r ange-400" />,
      items: [
        'Regulatory compliance',
        'Audit trail management',
        'Financial controls',
        'Risk monitoring',
        'Documentation'
      ]
    },
    {
      category: 'Predictive Modeling',
      icon: <B rainclass Name="w-6h-6t e xt-c y an-400" />,
      items: [
        'Financial forecasting',
        'Scenario planning',
        'Risk modeling',
        'Market predictions',
        'Trend analysis'
      ]
    }
  ];
  const pricing Plans = [
    {
      name: 'Starter',
      price: '$199',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 5 data sources',
        'Basic analytics dashboard',
        'Monthly reports',
        'Email support',
        'Standard integrations',
        '1G B data storage'
      ],
      popular: false,
      cta: 'Start Free Trial'
    },
    {
      name: 'Professional',
      price: '$499',
      period: '/month',
      description: 'Ideal for growing businesses and finance teams',
      features: [
        'Unlimited data sources',
        'Advanced analytics suite',
        'Real-time dashboards',
        'Priority support',
        'Custom integrations',
        '10G B data storage',
        'A I-powered insights',
        'Custom reporting'
      ],
      popular: true,
      cta: 'Get Started'
    },
    {
      name: 'Enterprise',
      price: '$1,299',
      period: '/month',
      description: 'For large organizations with complex financial needs',
      features: [
        'Everything in Professional',
        'Custom A I models',
        'White-label options',
        'Dedicated support',
        'Unlimited storage',
        'A P I access',
        'On-premise deployment',
        'Custom compliance'
      ],
      popular: false,
      cta: 'Contact Sales'
    }
  ];
  const testimonials = [
    {
      name: 'Jennifer Walsh',
      company: 'Fin Tech Solutions',
      role: 'C F O',
      content: 'A I Financial Analytics Pro has transformed our financial reporting. The A I insights help us make data-driven decisions and identify opportunities we would have missed.',
      rating: 5,
      avatar: 'J W',
      results: '35% faster financial reporting'
    },
    {
      name: 'Robert Kim',
      company: 'Global Investments',
      role: 'Financial Director',
      content: 'The predictive analytics are incredibly accurate. We can now forecast revenue with 95% accuracy, helping us plan better and reduce financial risks.',
      rating: 5,
      avatar: 'R K',
      results: '95% forecast accuracy'
    },
    {
      name: 'Lisa Thompson',
      company: 'Enterprise Corp',
      role: 'V P Finance',
      content: 'The automated reporting saves us 20+ hours per week. Our team can now focus on strategic analysis instead of manual data processing.',
      rating: 5,
      avatar: 'L T',
      results: '20+ hours saved weekly'
    }
  ];
  const stats = [

    { number: '500+', label: 'Financial Institutions', icon: <B uilding2 class Name="w-6h-6" / /> },
    { number: '1 M+', label: 'Transactions Analyzed', icon: <D atabaseclass Name="w-6h-6" / /> },
    { number: '99.9%', label: 'Data Accuracy', icon: <S hieldclass Name="w-6h-6" / /> },
    { number: '50%', label: 'Faster Reporting', icon: <Z apclass Name="w-6h-6" / /> }
  ];
  const integrations = [

    { name: 'Quick Books', icon: <C alculatorclass Name="w-6h-6" / />, category: 'Accounting' },
    { name: 'Xero', icon: <F ile Textclass Name="w-6h-6" / />, category: 'Accounting' },
    { name: 'S A P', icon: <D atabaseclass Name="w-6h-6" / />, category: 'E R P' },
    { name: 'Oracle', icon: <B uilding2 class Name="w-6h-6" / />, category: 'E R P' },
    { name: 'Salesforce', icon: <T rending Upclass Name="w-6h-6" / />, category: 'C R M' },
    { name: 'Hub Spot', icon: <T argetclass Name="w-6h-6" / />, category: 'C R M' },
    { name: 'Stripe', icon: <C redit Cardclass Name="w-6h-6" / />, category: 'Payments' },
    { name: 'Pay Pal', icon: <W alletclass Name="w-6h-6" / />, category: 'Payments' }
  ];
  return (

    <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900 via-purple-900to-slate-900 pt-20">
        </d iv>
      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Financial Analytics Pro - Zion Tech Group | Advanced Financial Intelligence Platform</t itle>
        <m eta name="description" content="Transform your financial analysis with A I Financial Analytics Pro. Advanced machine learning, real-time insights, and predictive analytics for smarter financial decisions. Start your free trial today." / / />
        <m eta name="keywords" content="A I financial analytics, financial intelligence, predictive analytics, financial reporting, business intelligence, Zion Tech Group" / / />
        <m eta name="robots" content="index, follow" / / />
        <m eta name="author" content="Zion Tech Group" / / />
        <m eta name="viewport" content="width="device-width," initial-scale=1.0" / / />
        <m eta name="theme-color" content="#8 b5 cf6" / / />
        {/* Open Graph Meta Tags */}

        <m etaproperty="og:title" content="A I Financial Analytics Pro - Advanced Financial Intelligence Platform" / / />
        <m etaproperty="og: description" content="Transform your financial analysis with A I-powered insights, real-time analytics, and predictive modeling. Make smarter financial decisions with advanced intelligence." / / />
        <m etaproperty="og:type" content="website" / / />
        <m etaproperty="og:url" content="https://ziontechgroup.com/ai-financial-analytics-pro" / / />
        <m etaproperty="og:image" content="https://ziontechgroup.com/og-ai-financial-analytics.jpg" / / />
        <m etaproperty="og:site_name" content="Zion Tech Group" / / />
        {/* Twitter Card Meta Tags */}

        <m eta name="twitter:card" content="summary_large_image" / / />
        <m eta name="twitter:title" content="A I Financial Analytics Pro - Advanced Financial Intelligence Platform" / / />
        <m eta name="twitter: description" content="Transform your financial analysis with A I-powered insights, real-time analytics, and predictive modeling." / / />
        <m eta name="twitter:image" content="https://ziontechgroup.com/twitter-ai-financial-analytics.jpg" / / />
        <m eta name="twitter:site" content="@ziontechgroup" / / />
        {/* Structured Data */}
        <s cripttype="application/ld+json"  />{J S O N.stringify({
            "@context": "https: //schema.org",
            "@type": "Software Application",
            "name": "A I Financial Analytics Pro",
            "description": "Advanced A I-powered financial analytics platform with machine learning insights, real-time reporting, and predictive modeling for smarter financial decisions.",
            "url": "https: //ziontechgroup.com/ai-financial-analytics-pro",
            "application Category": "Business Application",
            "operating System": "Web, i O S, Android",
            "offers": {
              "@type": "Offer",
              "price": "199",
              "price Currency": "U S D",
              "price Specification": {
                "@type": "Price Specification",
                "price": "199",
                "price Currency": "U S D",
                "unit Text": "M O N T H"
              }
            },
            "provider": {
              "@type": "Organization",
              "name": "Zion Tech Group",
              "url": "https: //ziontechgroup.com"
            }
          })}

        </s cript>
      </H elmet>

      <d iv class Name="m a x-w-7 xl mx-a u to px-4 sm:px-6lg:px-8py-16">
        </d iv>
        {/* Hero Section */}

        <d iv class Name="t e x t-centermb-16">
        </d iv>
          <h1 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-boldtext-white mb-6" />
            A I Financial Analytics{' '}

            <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-500bg-clip-texttext-transparent">Pro
            </s pan>
          </h1>
          <p c lass Name="t e x t-lg sm:text-xl text-gray-300 max-w-4 xlmx-automb-8">
              Transform your financial analysis with A I-powered insights, real-time analytics, 
            and predictive modeling. Make smarter financial decisions with advanced intelligence.

          </p>
          <d iv class Name="f l ex f l ex-col sm:flex-row gap-4justify-centermb-8">
        </d iv>
            <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flexitems-centerjustify-center" />
              Start Free Trial

              <A rrow Rightclass Name="w-5h-5m l-2" />
            </L ink>
            <L ink to="/ai-services" class Name="b o r d er-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors flexitems-centerjustify-center">View All A I Services
            </L ink>
          </d iv>
          <d iv class Name="t e xt-s m text-gray-400">✓ 14-day free trial • ✓ No credit card required • ✓ Bank-grade security
          </d iv>

        {/* Stats Section */}

        <s ection class Name="p y-16 p x-4 sm:px-6 lg:px-8 bg-w h ite/5 backdrop-blur-sm rounded-2xlmb-16" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="g r id g r id-cols-2md:grid-cols-4gap-8">
        </d iv>
              {stats.map((stat, index) => (

                <d ivkey="{index}" class Name="t e x t-center" />
                  <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-600 rounded-fullmx-automb-4">
        </d iv>
                    <s tat.icon class Name="h-8w-8t e xt-w h ite" / />
                  </d iv>
                  <d iv class Name="t e xt-3 xl md: t e xt-4 xl font-boldtext-whitemb-2">{stat.number}</d iv>
                  <d iv class Name="t e xt-g r ay-300">{stat.label}</d iv>
              ))}

            </d iv>
        </s ection>

        {/* Features Section */}

        <s ection class Name="m b-16" />
          <d iv class Name="t e x t-centermb-12">
        </d iv>
            <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Advanced A I Features</h2>
            <p c lass Name="t e x t-lg text-gray-300 max-w-3xlmx-auto" />
              Our A I Financial Analytics Pro leverages cutting-edge machine learning 
              to provide unprecedented insights into your financial data.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-2 xl p-8 border border-slate-700 hover:border-cyan-500/30 transition-allduration-300group" />
                <d iv class Name="m b-6">
        </d iv>
                  <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl mx-auto mb-4group-hover:scale-110transition-transform">{feature.icon}
                  </d iv>
                  <h3 c lass Name="t e xt-xl f o nt-semibold text-whitemb-3text-center">{feature.title}</h3>
                  <p c lass Name="t e xt-g r ay-300mb-4text-center">{feature.description}</p>
                  <u lclass Name="s p a c e-y-2" />
                    {feature.benefits.map((benefit, benefit Index) => (

                      <l ikey="{benefit Index}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4 t e xt-g r een-400mr-2flex-shrink-0" />
                        {benefit}
                      </l i>
                    ))}

                  </u l>
                </d iv>
            ))}

          </d iv>
        </s ection>

        {/* Analytics Types Section */}

        <s ection class Name="m b-16" />
          <d iv class Name="t e x t-centermb-12">
        </d iv>
            <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Comprehensive Analytics</h2>
            <p c lass Name="t e x t-lg text-gray-300 max-w-3xlmx-auto" />
              Cover every aspect of your financial operations with our comprehensive analytics suite.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-6">
        </d iv>
            {analytics Types.map((type, index) => (

              <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30transition-allduration-300" />
                <d iv class Name="f l e x items-centermb-4">
        </d iv>
                  {type.icon}

                  <h3 c lass Name="t e x t-lg font-semiboldtext-whiteml-3">{type.category}</h3>
                </d iv>
                <u lclass Name="s p a c e-y-2" />
                  {type.items.map((item, item Index) => (

                    <l ikey="{item Index}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                      <C heck Circleclass Name="w-4 h-4 t e xt-g r een-400mr-2flex-shrink-0" />
                      {item}
                    </l i>
                  ))}

                </u l>
              </d iv>
            ))}

          </d iv>
        </s ection>

        {/* Integrations Section */}

        <s ection class Name="m b-16" />
          <d iv class Name="t e x t-centermb-12">
        </d iv>
            <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Seamless Integrations</h2>
            <p c lass Name="t e x t-lg text-gray-300 max-w-3xlmx-auto" />
              Connect with your existing financial systems and tools for a unified analytics experience.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-2md:grid-cols-4gap-6">
        </d iv>
            {integrations.map((integration, index) => (

              <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/30 transition-all duration-300text-centergroup" />
                <d iv class Name="f l ex i t ems-center justify-center w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg mx-auto mb-3group-hover:scale-110transition-transform">{integration.icon}
                </d iv>
                <h3 c lass Name="t e xt-w h itefont-semiboldmb-1">{integration.name}</h3>
                <p c lass Name="t e xt-g r ay-400text-sm">{integration.category}</p>
              </d iv>
            ))}

          </d iv>
        </s ection>

        {/* Pricing Section */}

        <s ection class Name="m b-16" />
          <d iv class Name="t e x t-centermb-12">
        </d iv>
            <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Choose Your Plan</h2>
            <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
              Flexible pricing plans designed to meet your financial analytics needs at any scale.

            </p>
          </d iv>
          
          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing Plans.map((plan, index) => (
              <d ivkey="{index}" class Name="{`b g-s l a te-800/50" rounded-2 xl p-8 border transition-all duration-300 relative ${
                plan.popular ? 'border-cyan-500/50 ring-2 ring-cyan-500/20' : 'border-slate-700 hover: border-cyan-500/30'
              }`} />
                {plan.popular && (

                  <d iv class Name="a b s o lute -top-3 left-1/2transform-translate-x-1/2">
        </d iv>
                    <s pan class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-fulltext-smfont-semibold">Most Popular
                    </s pan>
                  </d iv>
                )}

                <d iv class Name="t e x t-centermb-6">
        </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <d iv class Name="f l ex i t ems-baselinejustify-centermb-2">
        </d iv>
                    <s pan class Name="t e xt-4 x l font-boldtext-cyan-400">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-400ml-1">{plan.period}</s pan>
                  </d iv>
                  <p c lass Name="t e xt-g r ay-300">{plan.description}</p>
                </d iv>
                
                <u lclass Name="s p a c e-y-3mb-8" />
                  {plan.features.map((feature, feature Index) => (

                    <l ikey="{feature Index}" class Name="f l e x items-centertext-gray-300" />
                      <C heck Circleclass Name="w-5 h-5 t e xt-g r een-400mr-3flex-shrink-0" / />
                      {feature}
                    </l i>
                  ))}
                </u l>
                
                <L ink to="/contact"
                  class Name="{`w-f u ll" py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-500 text-cyan-400 hover: bg-cyan-500 hover:text-white'
                  }`} />
                  {plan.cta}

                  <A rrow Rightclass Name="w-4h-4m l-2" />
                </L ink>
              </d iv>
            ))}

          </d iv>
        </s ection>

        {/* Testimonials */}

        <s ection class Name="p y-16 p x-4 sm:px-6 lg:px-8 bg-w h ite/5 backdrop-blur-sm rounded-2xlmb-16" />
          <d iv class Name="m ax-w-7x l mx-auto">
        </d iv>
            <d iv class Name="t e x t-centermb-12">
        </d iv>
              <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">What Our Customers Say</h2>
              <p c lass Name="t e x t-lg text-gray-300 max-w-2xlmx-auto" />
                Join hundreds of finance professionals who trust A I Financial Analytics Pro.

              </p>
            </d iv>
            
            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              {testimonials.map((testimonial, index) => (

                <d ivkey="{index}" class Name="b g-s l a te-800/50 rounded-xl p-6borderborder-slate-700" />
                  <d iv class Name="f l e x items-centermb-4">
        </d iv>
                    <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-whitefont-boldmr-4">{testimonial.avatar}
                    </d iv>
                    <d iv />
                      <h4 c lass Name="t e xt-w h itefont-semibold">{testimonial.name}</h4>
                      <p c lass Name="t e xt-g r ay-400text-sm">{testimonial.role}</p>
                      <p c lass Name="t e xt-c y an-400text-smfont-semibold">{testimonial.company}</p>
                    </d iv>
                  <d iv class Name="f l e x items-centermb-3">
        </d iv>
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <S tarkey="{i}" class Name="w-4 h-4t e xt-y e llow-400fill-current" />
                    ))}

                  </d iv>
                  <p c lass Name="t e xt-g r ay-300italicmb-3">"{testimonial.content}"</p>
                  <d iv class Name="t e xt-c y an-400font-semiboldtext-sm">Result: {testimonial.results}
                  </d iv>
              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="t e x t-center" />
          <d iv class Name="b g-g r a dient-to-r from-cyan-500/20 to-purple-500/20 rounded-2 xl p-12borderborder-cyan-500/30">
        </d iv>
            <h2 c lass Name="t e xt-3 xl f o nt-boldtext-whitemb-4">Ready to Transform Your Financial Analysis?
            </h2>
            <p c lass Name="t e x t-lg text-gray-300 mb-8 max-w-3xlmx-auto">
              Start your free trial today and experience the power of A I-driven financial analytics. 
              Join hundreds of finance professionals making smarter decisions with data.

            </p>
            <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 inline-flexitems-centerjustify-center" />
                Start Free Trial

                <S parklesclass Name="w-5h-5m l-2" / />
              </L ink>
              <L ink to="/about" class Name="b o r d er-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors inline-flexitems-centerjustify-center" />
                Learn More

                <P ie Chartclass Name="w-5h-5m l-2" / />
              </L ink>
            </d iv>
            <d iv class Name="m t-8t e x t-white/80text-sm">
        </d iv>
              <p>✓ 14-day free trial • ✓ Bank-grade security • ✓ 24/7 support • ✓ Cancel anytime</p>
            </d iv>
        </s ection>
      </d iv>
  );
}
