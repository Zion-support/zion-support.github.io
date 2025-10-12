import { Helmet } from 'react-helmet-async'
import { Brain, BarChart3, Users, TrendingUp, Target, Zap, CheckCircle, ArrowRight, Star, Shield, Play, Heart, Calendar, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const AICustomerInsightsPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-5 h-5ml-2" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns and predict future trends with 95% accuracy.',
      price: '$299/month',
      benefits: ['Real-time insights', 'Predictive analytics', 'Behavioral analysis', 'Trend forecasting']
    },
    {
      icon: <BarChart3 className="w-5 h-5ml-2" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, preferences, and value with dynamic clustering algorithms.',
      price: '$199/month',
      benefits: ['Dynamic segmentation', 'Behavioral clustering', 'Value-based grouping', 'Custom criteria']
    },
    {
      icon: <Users className="w-5 h-5ml-2" />,
      title: 'Customer Journey Mapping',
      description: 'Visualize complete customer journeys across all touchpoints with interactive journey maps and conversion funnels.',
      price: '$249/month',
      benefits: ['Journey visualization', 'Touchpoint analysis', 'Conversion tracking', 'Optimization insights']
    },
    {
      icon: <TrendingUp className="w-5 h-5ml-2" />,
      title: 'Churn Prediction',
      description: 'Predict customer churn with 92% accuracy using advanced ML models and proactive retention strategies.',
      price: '$179/month',
      benefits: ['Churn prediction', 'Risk scoring', 'Retention strategies', 'Early warning alerts']
    },
    {
      icon: <Target className="w-5 h-5ml-2" />,
      title: 'Personalization Engine',
      description: 'Create hyper-personalized experiences with AI-driven content recommendations and dynamic pricing.',
      price: '$399/month',
      benefits: ['Content personalization', 'Dynamic pricing', 'Recommendation engine', 'A/B testing']
    },
    {
      icon: <Zap className="w-5 h-5ml-2" />,
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
      icon: <ShoppingCart className="w-5 h-5ml-2" />
    },
    {
      title: 'SaaS Customer Success',
      description: 'Reduce churn by 50% with predictive analytics and proactive customer success management.',
      metrics: ['50% churn reduction', '60% faster onboarding', '45% feature adoption'],
      icon: <Monitor className="w-5 h-5ml-2" />
    },
    {
      title: 'Financial Services',
      description: 'Improve risk assessment and fraud detection with advanced customer behavior analysis.',
      metrics: ['85% fraud detection', '30% risk reduction', '25% faster approvals'],
      icon: <Shield className="w-5 h-5ml-2" />
    },
    {
      title: 'Healthcare Analytics',
      description: 'Enhance patient engagement and treatment outcomes with personalized healthcare insights.',
      metrics: ['40% engagement increase', '25% better outcomes', '35% cost reduction'],
      icon: <Heart className="w-5 h-5ml-2" />
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
      <Helmet>
        <title />AI Customer Insights - Advanced Analytics & Personalization | Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with AI-powered analytics, churn prediction, and personalization. Increase retention by 40% and boost revenue with intelligent customer insights." />
        <meta name="keywords" content="AI customer insights, customer analytics, churn prediction, personalization engine, customer segmentation, behavioral analysis, customer journey mapping, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-insights"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="absolute inset-0bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.3)_0%,transparent_50%)]animate-pulse" style="{{" animationDelay: '1 s' }}  />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Brain className="w-5 h-5ml-2" />
            <span />AI-Powered Customer Intelligence</span>
          </div>
          
          <h1 className="w-5 h-5ml-2" />
            AI Customer
            <br />
            <span className="w-5 h-5ml-2" />Insights
            </span>
          </h1>
          
          <p className="w-5 h-5ml-2" />
            Transform customer data into actionable insights with advanced AI analytics, 
            churn prediction, and hyper-personalization. 
            <br />
            <span className="w-5 h-5ml-2" />Increase retention by 40% and boost revenue with intelligent customer insights.</span>
          </p>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5 h-5ml-2" />
            </Link>
            <Link to="/demo" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />Watch Demo</span>
              <Play className="w-5 h-5ml-2" />
            </Link>
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Powerful <span className="w-5 h-5ml-2" />AI Features</span>
            </h2>
            <p className="w-5 h-5ml-2">Advanced AI-powered customer insights that help you understand, predict, and optimize customer behavior 
              for maximum business growth and retention.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5 h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5 h-5ml-2">{feature.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div key="{benefitIndex}" className="flex items-center space-x-2text-gray-400text-sm" />
                      <CheckCircle className="w-5 h-5ml-2" />
                      <span />{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <span className="w-5 h-5ml-2" />{feature.price}
                  </span>
                  <Link to="/contact" className="group/link flex items-center space-x-2 text-cyan-400hover:text-cyan-300 transition-colors" />
                    <span className="w-5 h-5ml-2" />Learn More</span>
                    <ArrowRight className="w-5 h-5ml-2" />
                  </Link>
                </div>
            ))}
          </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <Target className="w-5 h-5ml-2" />
              <span />Real-World Applications</span>
            </div>
            <h2 className="w-5 h-5ml-2" />
              Proven <span className="w-5 h-5ml-2" />Use Cases</span>
            </h2>
            <p className="w-5 h-5ml-2">See how leading companies use AI Customer Insights to drive growth, 
              reduce churn, and create exceptional customer experiences.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {useCases.map((useCase, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{useCase.icon}
                  </div>
                  <h3 className="w-5 h-5ml-2" />{useCase.title}
                  </h3>
                </div>
                <p className="w-5 h-5ml-2">{useCase.description}
                </p>
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key="{metricIndex}" className="flex items-center space-x-2text-cyan-400font-semibold" />
                      <TrendingUp className="w-5 h-5ml-2" />
                      <span />{metric}</span>
                    </div>
                  ))}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              Simple <span className="w-5 h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5 h-5ml-2">Choose the perfect plan for your business needs. All plans include our core AI features 
              with no hidden fees or setup costs.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricing.map((plan, index) => (
              <div key="{index}" className="{`relative" group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 ${
                plan.popular 
                  ? 'border-cyan-400/50 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: bg-white/20'
              }`} />
                {plan.popular && (
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5 h-5ml-2" />{plan.name}</h3>
                  <p className="w-5 h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5 h-5ml-2" />{plan.price}</span>
                    <span className="w-5 h-5ml-2" />{plan.period}</span>
                  </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {plan.features.map((feature, featureIndex) => (
                    <div key="{featureIndex}" className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5 h-5ml-2" />
                      <span className="w-5 h-5ml-2" />{feature}</span>
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
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5 h-5ml-2" />
              What Our <span className="w-5 h-5ml-2" />Customers Say</span>
            </h2>
            <p className="w-5 h-5ml-2">Join thousands of businesses that trust AI Customer Insights to drive growth and customer success.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-allduration-300hover:scale-105" />
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div />
                    <h4 className="w-5 h-5ml-2" />{testimonial.name}</h4>
                    <p className="w-5 h-5ml-2">{testimonial.role}</p>
                    <p className="w-5 h-5ml-2">{testimonial.company}</p>
                  </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5te xt-yellow-400fill-current"  />
                  ))}
                </div>
                
                <p className="w-5 h-5ml-2">"{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5 h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                <h2 className="w-5 h-5ml-2" />
                  Ready to Transform Your <span className="w-5 h-5ml-2" />Customer Experience?</span>
                </h2>
                
                <p className="w-5 h-5ml-2">Start your free trial today and see how AI Customer Insights can help you 
                  understand, predict, and optimize customer behavior for maximum growth.
                </p>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5 h-5ml-2" />
                  </Link>
                  <Link to="/demo" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span />Schedule Demo</span>
                    <Calendar className="w-5 h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <Phone className="w-5 h-5ml-2" />
                    <span className="w-5 h-5ml-2" />+1 302 464 0950</span>
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <Mail className="w-5 h-5ml-2" />
                    <span className="w-5 h-5ml-2" />kleber@ziontechgroup.com</span>
                  </div>
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900 via-purple-900 to-slate-900 pt-20">
                    <MapPin className="w-5 h-5ml-2" />
                    <span className="w-5 h-5ml-2" />Middletown DE 19709</span>
                  </div>
              </div>
          </div>
      </section>
    </>
  );
};

export default AICustomerInsightsPage;