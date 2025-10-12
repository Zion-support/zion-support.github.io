import { Helmet } from 'react-helmet-async'
import { Brain, BarChart3, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Shield, Play, Heart, Calendar, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import React  from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AICustomerInsightsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict future trends with 95% accuracy.',
      price: '$299/month',
      benefits: ['Real-time insights', 'Predictive analytics', 'Behavioral analysis', 'Trend forecasting']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-emerald-400" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value with dynamic clustering algorithms.',
      price: '$199/month',
      benefits: ['Dynamic segmentation', 'Behavioral clustering', 'Value-based grouping', 'Custom criteria']
    },
    {
      icon: <Users className="w-8 h-8 text-purple-400" />,
      title: 'Customer Journey Mapping',
      description: 'Visualize complete customer journeys across all touchpoints with interactive journey maps and conversion funnels.',
      price: '$249/month',
      benefits: ['Journey visualization', 'Touchpoint analysis', 'Conversion tracking', 'Optimization insights']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-orange-400" />,
      title: 'Churn Prediction',
      description: 'Predict customer churn with 92% accuracy using advanced ML models and proactive retention strategies.',
      price: '$179/month',
      benefits: ['Churn prediction', 'Risk scoring', 'Retention strategies', 'Early warning alerts']
    },
    {
      icon: <Target className="w-8 h-8 text-pink-400" />,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences with AI-driven content recommendations and dynamic pricing.',
      price: '$399/month',
      benefits: ['Content personalization', 'Dynamic pricing', 'Recommendation engine', 'A/B testing']
    },
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: 'Real-time Insights',
      description: 'Get instant customer insights with real-time data processing and live dashboard updates.',
      price: '$149/month',
      benefits: ['Live dashboards', 'Real-time alerts', 'Instant notifications', 'Live data streams']
    }
  ]

  const useCases = [
    {
      title: 'E-commerce Personalization',
      description: 'Increase conversion rates by 35% with personalized product recommendations and dynamic pricing.',
      metrics: ['35% conversion increase', '28% higher AOV', '42% repeat purchases'],
      icon: <ShoppingCart className="w-6 h-6 text-cyan-400" />
    },
    {
      title: 'SaaS Customer Success',
      description: 'Reduce churn by 50% with predictive analytics and proactive customer success management.',
      metrics: ['50% churn reduction', '60% faster onboarding', '45% feature adoption'],
      icon: <Monitor className="w-6 h-6 text-emerald-400" />
    },
    {
      title: 'Financial Services',
      description: 'Improve risk assessment and fraud detection with advanced customer behavior analysis.',
      metrics: ['85% fraud detection', '30% risk reduction', '25% faster approvals'],
      icon: <Shield className="w-6 h-6 text-purple-400" />
    },
    {
      title: 'Healthcare Analytics',
      description: 'Enhance patient engagement and treatment outcomes with personalized healthcare insights.',
      metrics: ['40% engagement increase', '25% better outcomes', '35% cost reduction'],
      icon: <Heart className="w-6 h-6 text-pink-400" />
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
        'Advanced AI analytics',
        'Priority support',
        'Custom integrations',
        'Real-time dashboards',
        'Advanced segmentation',
        'Churn prediction',
        'API access'
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
        'Full AI suite',
        '24/7 dedicated support',
        'White-label solution',
        'Custom development',
        'Advanced security',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Chen',
      company: 'TechFlow Inc.',
      role: 'VP of Marketing',
      content: 'AI Customer Insights transformed our understanding of customer behavior. We increased retention by 40% in just 3 months.',
      rating: 5,
      avatar: 'SC'
    },
    {
      name: 'Michael Rodriguez',
      company: 'DataDriven Solutions',
      role: 'Head of Analytics',
      content: 'The predictive analytics are incredibly accurate. We can now prevent churn before it happens and optimize our customer journey.',
      rating: 5,
      avatar: 'MR'
    },
    {
      name: 'Emily Johnson',
      company: 'GrowthCorp',
      role: 'Customer Success Director',
      content: 'The personalization engine has revolutionized our customer experience. Our NPS score increased by 25 points.',
      rating: 5,
      avatar: 'EJ'
    }
  ]

  return (
    <>
      <Helmet />
        <title   />AI Customer Insights - Advanced Analytics & Personalization | Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with AI-powered analytics, churn prediction, and personalization. Increase retention by 40% and boost revenue with intelligent customer insights." / / />
        <meta name="keywords" content="AI customer insights, customer analytics, churn prediction, personalization engine, customer segmentation, behavioral analysis, customer journey mapping, Zion Tech Group" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-insights" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.3)_0%,transparent_50%)]animate-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }} / />
        <div className="relative max-w-7 xlmx-autotext-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 borderborder-cyan-400/30">
            <Brain className="w-4 h-4" />
            <span   />AI-Powered Customer Intelligence</span>
          </div>
          
          <h1 className="text-6 xl md:text-8 xl font-bold text-white mb-8 leading-tight" />
            AI Customer
            <br / />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-texttext-transparentanimate-pulse"  />Insights
            </span>
          </h1>
          
          <p className="text-2 xl text-gray-300 mb-12 max-w-4 xlmx-autoleading-relaxed">
              Transform customer data into actionable insights with advanced AI analytics, 
            churn prediction, and hyper-personalization. 
            <br / />
            <span className="text-cyan-400 font-semibold"   />Increase retention by 40% and boost revenue with intelligent customer insights.</span>
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-centermb-16">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2 backdrop-blur-sm" >
           
          <span    />
        </Link>Watch Demo</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 relative" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />AI Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">Advanced AI-powered customer insights that help you understand, predict, and optimize customer behavior 
              for maximum business growth and retention.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xlhover:shadow-cyan-500/10" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110 transition-transformduration-300"  />{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"  />{feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <div className="space-y-2 mb-6">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key="{benefitIndex}" className="flex items-center space-x-2 text-gray-400 text-sm" />
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span   />{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="flex items-centerjustify-between">
                  <span className="text-cyan-400 font-semiboldtext-lg"  />{feature.price}
                  </span>
                  <Link to="/contact" className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors" >
           
          <span className="text-smfont-medium"    />
        </Link>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
            ))}
          </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative" />
        <div className="absoluteinset-0 bg-[radial-gradient(circle_at_30%_70%,rgba(6,182,212,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-6 borderborder-cyan-400/30">
              <Target className="w-4 h-4" />
              <span   />Real-World Applications</span>
            </div>
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Proven <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">See how leading companies use AI Customer Insights to drive growth, 
              reduce churn, and create exceptional customer experiences.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {useCases.map((useCase, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105" />
                <div className="flex items-centerspace-x-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl group-hover:scale-110 transition-transformduration-300"  />{useCase.icon}
                  </div>
                  <h3 className="text-2 xl font-bold text-whitegroup-hover:text-cyan-400 transition-colors"  />{useCase.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">{useCase.description}</p>
                <div className="space-y-2">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key="{metricIndex}" className="flex items-center space-x-2 text-cyan-400 font-semibold" />
                      <TrendingUp className="w-4 h-4" />
                      <span   />{metric}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 relative" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Simple <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-texttext-transparent"   />Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">Choose the perfect plan for your business needs. All plans include our core AI features 
              with no hidden fees or setup costs.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricing.map((plan, index) => (
              <div key="{index}" className="{`relative" group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: bg-white/20'
              }`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform-translate-x-1/2">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-fulltext-smfont-semibold"  />Most Popular
                    </div>
                )}
                
                <div className="text-centermb-8">
                  <h3 className="text-2 xl font-bold text-white mb-2"   />{plan.name}</h3>
                  <p className="text-gray-300 text-smmb-4">{plan.description}</p>
                  <div className="flex items-baselinejustify-center">
                    <span className="text-5 xlfont-bold text-white"   />{plan.price}</span>
                    <span className="text-gray-400 ml-2"   />{plan.period}</span>
                  </div>
                
                <div className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <div key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300"   />{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link 
                  to="/contact"
                  className="{`block" w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-gray-900'
                  }`}
                  />Get Started
                </Link>
              </div>
            ))}
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-900/50 to-pink-900/50 relative" />
        <div className="absoluteinset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(236,72,153,0.1)_0%,transparent_50%)]" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-centermb-16">
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-texttext-transparent"   />Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xlmx-auto">Join thousands of businesses that trust AI Customer Insights to drive growth and customer success.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300 hover:scale-105" />
                <div className="flex items-centerspace-x-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-centertext-whitefont-bold"  />{testimonial.avatar}
                  </div>
                  <div>
            <h4 className="text-lgfont-semiboldtext-white"   />{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                
                <div className="flex items-centerspace-x-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxeditalic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" />
        <div className="relative max-w-7 xlmx-auto">
          <div className="text-center">
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16 relativeoverflow-hidden">
              <div className="relativez-10">
                <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6 leading-tight" />
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-texttext-transparent"   />Customer Experience?</span>
                </h2>
                
                <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xlmx-autoleading-relaxed">Start your free trial today and see how AI Customer Insights can help you 
                  understand, predict, and optimize customer behavior for maximum growth.</p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-centermb-8">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" >
           
          <span    />
        </Link>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link to="/demo" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2 backdrop-blur-sm" >
           
          <span    />
        </Link>Schedule Demo</span>
                    <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-white/80">
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span className="text-sm"   />+1 302 464 0950</span>
                  </div>
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span className="text-sm"   />kleber@ziontechgroup.com</span>
                  </div>
                  <div className="flex items-centerjustify-centerspace-x-3">
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span className="text-sm"   />Middletown DE 19709</span>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default AICustomerInsightsPage;