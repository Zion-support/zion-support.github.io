import React from 'react'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

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
      <Helmet>
        <title>AI Customer Insights - Advanced Analytics & Personalization | Zion Tech Group</title>
        <meta name="description" content="Transform customer data into actionable insights with AI-powered analytics, churn prediction, and personalization. Increase retention by 40% and boost revenue with intelligent customer insights." />
        <meta name="keywords" content="AI customer insights, customer analytics, churn prediction, personalization engine, customer segmentation, behavioral analysis, customer journey mapping, Zion Tech Group" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-customer-insights" />
      </Helmet>

      </Brain>
      </BarChart3>
      </Users>
      </TrendingUp>
      </Target>
      </Zap>
      </ShoppingCart>
      </Monitor>
      </Shield>
      </Heart>
      </meta>
      </meta>
      </meta>
      </link>
      </Brain>
      </br>
      </br>
      </ArrowRight>
      </Play>
      </CheckCircle>
      </ArrowRight>
      </Target>
      </TrendingUp>
      </CheckCircle>
      </Star>
      </div>
      </div>
      </div>
      </ArrowRight>
      </Calendar>
      </div>
      </div>
      </Phone>
      </div>
      </Mail>
      </div>
      </MapPin>
      {/* Hero Section */}
      <section>
        <div>
        <div>
        
        <div>
          <div>
            <Brain className="w-4 h-4" />
            <span>AI-Powered Customer Intelligence</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8 leading-tight">
            AI Customer
            <br></br>
            <span>
              Insights
            </span>
          </h1>
          
          <p className="text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform customer data into actionable insights with advanced AI analytics, 
            churn prediction, and hyper-personalization. 
            <br></br>
            <span>Increase retention by 40% and boost revenue with intelligent customer insights.</span>
          </p>
          
          <div>
            <Link;
to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link;
to="/demo" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Watch Demo</span>
              <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful <span>AI Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Advanced AI-powered customer insights that help you understand, predict, and optimize customer behavior;
for maximum business growth and retention.
            </p>
          </div>
          
          <div>
            {features.map((feature, index) => (
              <div>
                <div>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {feature.description}
                </p>
                <div>
                  {feature.benefits.map((benefit, benefitIndex) => (
                    <div>
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <span>
                    {feature.price}
                  </span>
                  <Link;
to="/contact"
                    className="group/link flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section>
        <div>
        <div>
          <div>
            <div>
              <Target className="w-4 h-4" />
              <span>Real-World Applications</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Proven <span>Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              See how leading companies use AI Customer Insights to drive growth, 
              reduce churn, and create exceptional customer experiences.
            </p>
          </div>
          
          <div>
            {useCases.map((useCase, index) => (
              <div>
                <div>
                  <div>
                    {useCase.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                    {useCase.title}
                  </h3>
                </div>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div>
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div>
                      <TrendingUp className="w-4 h-4" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <div>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Simple <span>Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your business needs. All plans include our core AI features;
with no hidden fees or setup costs.
            </p>
          </div>
          
          <div>
            {pricing.map((plan, index) => (
              <div>
                {plan.popular && (
                  <div>
                    <div>
                      Most Popular
                    </div>
                  </div>
                )}
                
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div>
                    <span>{plan.price}</span>
                    <span>{plan.period}</span>
                  </div>
                </div>
                
                <div>
                  {plan.features.map((feature, featureIndex) => (
                    <div>
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                
                <Link;
to="/contact"
                  className={`block w-full text-center py-3 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700 shadow-lg shadow-cyan-500/25'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section>
        <div>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span>Customers Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Join thousands of businesses that trust AI Customer Insights to drive growth and customer success.
            </p>
          </div>
          
          <div>
            {testimonials.map((testimonial, index) => (
              <div>
                <div>
                  <div>
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                
                <div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                
                <p className="text-gray-300 leading-relaxed italic">
                  "{testimonial.content}"
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
        <div>
          <div>
            <div>
              <div>
                <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                  Ready to Transform Your <span>Customer Experience?</span>
                </h2>
                
                <p className="text-xl sm:text-2xl text-white/90 mb-8 sm:mb-12 max-w-4xl mx-auto leading-relaxed">
                  Start your free trial today and see how AI Customer Insights can help you;
understand, predict, and optimize customer behavior for maximum growth.
                </p>
                
                <div>
                  <Link;
to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                  >
                    <span>Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link;
to="/demo" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                  >
                    <span>Schedule Demo</span>
                    <Calendar className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
                
                <div>
                  <div>
                    <Phone className="w-5 h-5 text-cyan-300" />
                    <span>+1 302 464 0950</span>
                  </div>
                  <div>
                    <Mail className="w-5 h-5 text-purple-300" />
                    <span>kleber@ziontechgroup.com</span>
                  </div>
                  <div>
                    <MapPin className="w-5 h-5 text-pink-300" />
                    <span>Middletown DE 19709</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AICustomerInsightsPage;