import { Helmet } from 'react-helmet-async'
import { Brain, Bar Chart3, Users, Trending Up, Target, Zap, Check Circle, Arrow Right, Star, Shield, Play, Heart, Calendar, Mail, Phone, Map Pin } from 'lucide-react';
import { Link } from 'react-router-dom'
import React from 'react';
import { Arrow Right } from 'lucide-react';
import { Link } from 'react-router-dom';

const A I Customer Insights Page: React.F C = () => {
  const features = [
    {
      icon: <B rainclass Name="w-8h-8t e xt-c y an-400" />,
      title: 'A I-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict future trends with 95% accuracy.',
      price: '$299/month',
      benefits: ['Real-time insights', 'Predictive analytics', 'Behavioral analysis', 'Trend forecasting']
    },
    {
      icon: <B ar Chart3 class Name="w-8h-8t e xt-e m erald-400" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value with dynamic clustering algorithms.',
      price: '$199/month',
      benefits: ['Dynamic segmentation', 'Behavioral clustering', 'Value-based grouping', 'Custom criteria']
    },
    {
      icon: <U sersclass Name="w-8h-8t e xt-p u rple-400" />,
      title: 'Customer Journey Mapping',
      description: 'Visualize complete customer journeys across all touchpoints with interactive journey maps and conversion funnels.',
      price: '$249/month',
      benefits: ['Journey visualization', 'Touchpoint analysis', 'Conversion tracking', 'Optimization insights']
    },
    {
      icon: <T rending Upclass Name="w-8h-8t e xt-o r ange-400" />,
      title: 'Churn Prediction',
      description: 'Predict customer churn with 92% accuracy using advanced M L models and proactive retention strategies.',
      price: '$179/month',
      benefits: ['Churn prediction', 'Risk scoring', 'Retention strategies', 'Early warning alerts']
    },
    {
      icon: <T argetclass Name="w-8h-8t e xt-p i nk-400" />,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences with A I-driven content recommendations and dynamic pricing.',
      price: '$399/month',
      benefits: ['Content personalization', 'Dynamic pricing', 'Recommendation engine', 'A/B testing']
    },
    {
      icon: <Z apclass Name="w-8h-8t e xt-y e llow-400" />,
      title: 'Real-time Insights',
      description: 'Get instant customer insights with real-time data processing and live dashboard updates.',
      price: '$149/month',
      benefits: ['Live dashboards', 'Real-time alerts', 'Instant notifications', 'Live data streams']
    }
  ]

  const use Cases = [
    {
      title: 'E-commerce Personalization',
      description: 'Increase conversion rates by 35% with personalized product recommendations and dynamic pricing.',
      metrics: ['35% conversion increase', '28% higher A O V', '42% repeat purchases'],
      icon: <S hopping Cartclass Name="w-6h-6t e xt-c y an-400" />
    },
    {
      title: 'Saa S Customer Success',
      description: 'Reduce churn by 50% with predictive analytics and proactive customer success management.',
      metrics: ['50% churn reduction', '60% faster onboarding', '45% feature adoption'],
      icon: <M onitorclass Name="w-6h-6t e xt-e m erald-400" />
    },
    {
      title: 'Financial Services',
      description: 'Improve risk assessment and fraud detection with advanced customer behavior analysis.',
      metrics: ['85% fraud detection', '30% risk reduction', '25% faster approvals'],
      icon: <S hieldclass Name="w-6h-6t e xt-p u rple-400" />
    },
    {
      title: 'Healthcare Analytics',
      description: 'Enhance patient engagement and treatment outcomes with personalized healthcare insights.',
      metrics: ['40% engagement increase', '25% better outcomes', '35% cost reduction'],
      icon: <H eartclass Name="w-6h-6t e xt-p i nk-400" />
    }
  ]

  const pricing = [
    {
      name: 'Starter',
      price: '$99',
      period: '/month',
      description: 'Perfect for small businesses getting started with customer insights',
      features: [
        'Up to 10,000 customers',
        'Basic analytics dashboard',
        'Email support',
        'Standard integrations',
        'Monthly reports',
        'Basic segmentation'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$299',
      period: '/month',
      description: 'Advanced features for growing businesses with complex customer data',
      features: [
        'Up to 100,000 customers',
        'Advanced A I analytics',
        'Priority support',
        'Custom integrations',
        'Real-time dashboards',
        'Advanced segmentation',
        'Churn prediction',
        'A P I access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$599',
      period: '/month',
      description: 'Complete solution for large enterprises with unlimited customers',
      features: [
        'Unlimited customers',
        'Full A I suite',
        '24/7 dedicated support',
        'White-label solution',
        'Custom development',
        'Advanced security',
        'S L A guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'Tech Flow Inc.',
      role: 'V P of Marketing',
      content: 'A I Customer Insights transformed our understanding of customer behavior. We increased retention by 40% in just 3 months.',
      rating: 5,
      avatar: 'S C'
    },
    {
      name: 'Michael Rodriguez',
      company: 'Data Driven Solutions',
      role: 'Head of Analytics',
      content: 'The predictive analytics are incredibly accurate. We can now prevent churn before it happens and optimize our customer journey.',
      rating: 5,
      avatar: 'M R'
    },
    {
      name: 'Emily Johnson',
      company: 'Growth Corp',
      role: 'Customer Success Director',
      content: 'The personalization engine has revolutionized our customer experience. Our N P S score increased by 25 points.',
      rating: 5,
      avatar: 'E J'
    }
  ]

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>A I Customer Insights - Advanced Analytics & Personalization | Zion Tech Group</t itle>
        <m eta name="description" content="Transform customer data into actionable insights with A I-powered analytics, churn prediction, and personalization. Increase retention by 40% and boost revenue with intelligent customer insights." / / />
        <m eta name="keywords" content="A I customer insights, customer analytics, churn prediction, personalization engine, customer segmentation, behavioral analysis, customer journey mapping, Zion Tech Group" / / />
        <m eta name="robots" content="index, follow" / / />
        <l inkrel="canonical" href="https://ziontechgroup.com/ai-customer-insights" />
      </H elmet>

      {/* Hero Section */}

      <s ection class Name="r e l a tive py-20px-4overflow-hidden" />
        <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" />
        <d iv class Name="a b s o lute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animation Delay: '1 s' }} / />
        <d iv class Name="r e l a tive max-w-7 xlmx-autotext-center">
        </d iv>
          <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8borderborder-cyan-400/30">
        </d iv>
            <B rainclass Name="w-4h-4" / />
            <s pan>A I-Powered Customer Intelligence</s pan>
          </d iv>

          <h1 c lass Name="t e xt-6 xl md:t e xt-8 xl font-bold text-white mb-8leading-tight" />
            A I Customer

            <b r / />
            <s pan class Name="b g-g r a dient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse">Insights
            </s pan>
          </h1>

          <p c lass Name="t e xt-2 xl t e xt-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform customer data into actionable insights with advanced A I analytics, 
            churn prediction, and hyper-personalization. 

            <b r / />
            <s pan class Name="t e xt-c y an-400font-semibold">Increase retention by 40% and boost revenue with intelligent customer insights.</s pan>
          </p>

          <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-16">
        </d iv>
            <L ink to="/contact" class Name="g r o u p bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <s pan>Start Free Trial</s pan>
              <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
            </L ink>
            <L ink to="/demo" class Name="g r o u p border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <s pan>Watch Demo</s pan>
              <P layclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" / />
            </L ink>
          </d iv>
      </s ection>

      {/* Features Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-br from-purple-500/5via-cyan-500/5to-pink-500/5" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Powerful <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">A I Features</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Advanced A I-powered customer insights that help you understand, predict, and optimize customer behavior 
              for maximum business growth and retention.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
            {features.map((feature, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <d iv class Name="f l ex i t ems-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110transition-transformduration-300">{feature.icon}
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{feature.title}
                </h3>
                <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed" />

                  {feature.description}

                </p>
                <d iv class Name="s p a c e-y-2mb-6">
        </d iv>

                  {feature.benefits.map((benefit, benefit Index) => (

                    <d ivkey="{benefit Index}" class Name="f l ex i t ems-center space-x-2text-gray-400text-sm" />
                      <C heck Circleclass Name="w-4h-4t e xt-g r een-400" / />
                      <s pan>{benefit}</s pan>
                    </d iv>

                  ))}

                </d iv>
                <d iv class Name="f l e x items-centerjustify-between" />
                  <s pan class Name="t e xt-c y an-400font-semiboldtext-lg">{feature.price}
                  </s pan>
                  <L ink to="/contact" class Name="g r o u p/link flex items-center space-x-2 text-cyan-400hover:text-cyan-300transition-colors" />
                    <s pan class Name="t e xt-s m font-medium">Learn More</s pan>
                    <A rrow Rightclass Name="w-4 h-4g r o u p-hover/link:translate-x-1transition-transform" />
                  </L ink>
                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Use Cases Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-br from-slate-800/50to-purple-900/50relative" />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <d iv class Name="i n l i ne-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6borderborder-cyan-400/30">
        </d iv>
              <T argetclass Name="w-4h-4" / />
              <s pan>Real-World Applications</s pan>
            </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Proven <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Use Cases</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              See how leading companies use A I Customer Insights to drive growth, 
              reduce churn, and create exceptional customer experiences.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-2gap-8">
        </d iv>
            {use Cases.map((use Case, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv class Name="f l ex i t ems-centerspace-x-4mb-6">
        </d iv>
                  <d iv class Name="p-3 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-xl group-hover:scale-110transition-transformduration-300">{use Case.icon}
                  </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-bold text-whitegroup-hover:text-cyan-400transition-colors">{use Case.title}
                  </h3>
                </d iv>
                <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed" />

                  {use Case.description}

                </p>
                <d iv class Name="s p a c e-y-2">
        </d iv>

                  {use Case.metrics.map((metric, metric Index) => (

                    <d ivkey="{metric Index}" class Name="f l ex i t ems-center space-x-2text-cyan-400font-semibold" />
                      <T rending Upclass Name="w-4h-4" / />
                      <s pan>{metric}</s pan>
                    </d iv>

                  ))}

                </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Pricing Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/5via-purple-500/5to-pink-500/5" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              Simple <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Pricing</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Choose the perfect plan for your business needs. All plans include our core A I features 
              with no hidden fees or setup costs.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {pricing.map((plan, index) => (
              <d ivkey="{index}" class Name="{`r e l a tive" group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: bg-white/20'
              }`} />
                {plan.popular && (

                  <d iv class Name="a b s o lute -top-4 left-1/2transform-translate-x-1/2">
        </d iv>
                    <d iv class Name="b g-g r a dient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold">Most Popular
                    </d iv>

                )}

                <d iv class Name="t e x t-centermb-8">
        </d iv>
                  <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-2">{plan.name}</h3>
                  <p c lass Name="t e xt-g r ay-300text-smmb-4">{plan.description}</p>
                  <d iv class Name="f l e x items-baselinejustify-center" />
                    <s pan class Name="t e xt-5 x l font-boldtext-white">{plan.price}</s pan>
                    <s pan class Name="t e xt-g r ay-400ml-2">{plan.period}</s pan>
                  </d iv>

                <d iv class Name="s p a c e-y-4mb-8">
        </d iv>
                  {plan.features.map((feature, feature Index) => (

                    <d ivkey="{feature Index}" class Name="f l e x items-centerspace-x-3" />
                      <C heck Circleclass Name="w-5 h-5t e xt-g r een-400flex-shrink-0" / />
                      <s pan class Name="t e xt-g r ay-300">{feature}</s pan>
                    </d iv>

                  ))}
                </d iv>
                
                <L ink 
                  to="/contact"
                  class Name="{`b l o c k" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started

                </L ink>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* Testimonials Section */}

      <s ection class Name="p y-20 p x-4 bg-g r adient-to-br from-purple-900/50to-pink-900/50relative" />
        <d iv class Name="a b s o luteinset-0bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-centermb-16">
        </d iv>
            <h2 c lass Name="t e xt-4 xl md:t e xt-5 xl font-boldtext-white mb-6" />
              What Our <s pan class Name="b g-g r a dient-to-r from-purple-400 to-pink-400bg-clip-texttext-transparent">Customers Say</s pan>
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 max-w-4xlmx-auto" />

              Join thousands of businesses that trust A I Customer Insights to drive growth and customer success.

            </p>
          </d iv>

          <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
            {testimonials.map((testimonial, index) => (

              <d ivkey="{index}" class Name="g r o u p bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <d iv class Name="f l ex i t ems-centerspace-x-4mb-6">
        </d iv>
                  <d iv class Name="w-12 h-12 b g-g r a dient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold">{testimonial.avatar}
                  </d iv>
                  <d iv />
                    <h4 c lass Name="t e x t-lgfont-semiboldtext-white">{testimonial.name}</h4>
                    <p c lass Name="t e xt-g r ay-400text-sm">{testimonial.role}</p>
                    <p c lass Name="t e xt-g r ay-500text-sm">{testimonial.company}</p>
                  </d iv>

                <d iv class Name="f l ex i t ems-centerspace-x-1mb-4">
        </d iv>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <S tarkey="{i}" class Name="w-5 h-5t e xt-y e llow-400fill-current" />
                  ))}
                </d iv>
                
                <p c lass Name="t e xt-g r ay-300leading-relaxeditalic" />
                  "{testimonial.content}"

                </p>
              </d iv>

            ))}

          </d iv>
      </s ection>

      {/* C T A Section */}

      <s ection class Name="p y-20p x-4r e lative" />
        <d iv class Name="a b s o lute inset-0 bg-gradient-to-r from-cyan-500/10via-purple-500/10to-pink-500/10" / />
        <d iv class Name="r e l a tive max-w-7xlmx-auto">
        </d iv>
          <d iv class Name="t e x t-center" />
            <d iv class Name="b g-g r a dient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16relativeoverflow-hidden">
        </d iv>
              <d iv class Name="r e l a tivez-10">
        </d iv>
                <h2 c lass Name="t e xt-4 xl sm:t e xt-5 xl md:text-6 xl font-bold text-white mb-6leading-tight" />
                  Ready to Transform Your <s pan class Name="b g-g r a dient-to-r from-cyan-300 to-pink-300bg-clip-texttext-transparent">Customer Experience?</s pan>
                </h2>

                <p c lass Name="t e xt-xl sm:t e xt-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">
                  Start your free trial today and see how A I Customer Insights can help you 
                  understand, predict, and optimize customer behavior for maximum growth.
                </p>

                <d iv class Name="f l ex f l ex-col sm:flex-row gap-6justify-centermb-8">
        </d iv>
                  <L ink to="/contact" class Name="g r o u p bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <s pan>Start Free Trial</s pan>
                    <A rrow Rightclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" />
                  </L ink>
                  <L ink to="/demo" class Name="g r o u p border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <s pan>Schedule Demo</s pan>
                    <C alendarclass Name="w-5 h-5g r o u p-hover:translate-x-1transition-transform" / />
                  </L ink>
                </d iv>

                <d iv class Name="g r id g r id-cols-1 md:grid-cols-3gap-6text-white/80">
        </d iv>
                  <d iv class Name="f l ex i t ems-centerjustify-centerspace-x-3">
        </d iv>
                    <P honeclass Name="w-5h-5t e xt-c y an-300" / />
                    <s pan class Name="t e xt-sm">+1 302 464 0950</s pan>
                  </d iv>
                  <d iv class Name="f l ex i t ems-centerjustify-centerspace-x-3">
        </d iv>
                    <M ailclass Name="w-5h-5t e xt-p u rple-300" / />
                    <s pan class Name="t e xt-sm">kleber@ziontechgroup.com</s pan>
                  </d iv>
                  <d iv class Name="f l ex i t ems-centerjustify-centerspace-x-3">
        </d iv>
                    <M ap Pinclass Name="w-5h-5t e xt-p i nk-300" / />
                    <s pan class Name="t e xt-sm">Middletown D E 19709</s pan>
                  </d iv>
              </d iv>
          </d iv>
      </s ection>

  );
};

export default A I Customer Insights Page;
