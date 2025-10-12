import React from 'react'
import { ArrowRight, Bot, RotateCcw, RotateCw, Receipt } from 'lucide-react'
import { Link } from 'react-router-dom'

const AILeadScoringPage: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-cyan-400" />,
      title: 'AI Lead Scoring',
      description: 'Advanced machine learning algorithms automatically score leads based on behavior, demographics, and engagement patterns.',
      benefits: ['Behavioral analysis', 'Demographic scoring', 'Engagement tracking', 'Predictive modeling']
    },
    {
      icon: <Target className="w-8 h-8 text-emerald-400" />,
      title: 'Intent Detection',
      description: 'AI identifies buying intent signals and purchase readiness to prioritize high-value prospects.',
      benefits: ['Intent signals', 'Purchase readiness', 'Priority scoring', 'Conversion prediction']
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-purple-400" />,
      title: 'Conversion Analytics',
      description: 'Comprehensive analytics with AI insights to optimize lead qualification and improve conversion rates.',
      benefits: ['Conversion tracking', 'ROI analysis', 'Funnel optimization', 'Performance metrics']
    },
    {
      icon: <Zap className="w-8 h-8 text-red-400" />,
      title: 'Automated Workflows',
      description: 'AI-powered lead nurturing workflows that automatically engage prospects based on their score and behavior.',
      benefits: ['Auto-nurturing', 'Behavioral triggers', 'Personalized content', 'Multi-channel engagement']
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-orange-400" />,
      title: 'Sales Intelligence',
      description: 'AI provides sales teams with actionable insights and recommendations for each lead.',
      benefits: ['Sales insights', 'Action recommendations', 'Lead context', 'Next best actions']
    },
    {
      icon: <Shield className="w-8 h-8 text-pink-400" />,
      title: 'CRM Integration',
      description: 'Seamlessly integrate with popular CRMs and marketing automation platforms for unified lead management.',
      benefits: ['CRM sync', 'Data consistency', 'Workflow automation', 'Real-time updates']
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses and startups',
      features: [
        'Up to 1,000 leads/month',
        'Basic AI scoring',
        'Email integration',
        'Standard reports',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$199',
      period: '/month',
      description: 'Ideal for growing businesses and sales teams',
      features: [
        'Up to 10,000 leads/month',
        'Advanced AI features',
        'CRM integration',
        'Custom workflows',
        'Priority support',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations with high volume needs',
      features: [
        'Unlimited leads',
        'Full AI suite',
        'Custom integrations',
        'Dedicated support',
        'Advanced analytics',
        'White-label options'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Mitchell',
      company: 'Sales Director',
      content: 'AI Lead Scoring increased our conversion rate by 180%. We now focus on the right prospects at the right time.',
      rating: 5,
      avatar: 'SM'
    },
    {
      name: 'James Wilson',
      company: 'Marketing Manager',
      content: 'The intent detection feature helped us identify hot leads 3x faster. Our sales team loves the insights.',
      rating: 5,
      avatar: 'JW'
    },
    {
      name: 'Lisa Chen',
      company: 'VP of Sales',
      content: 'ROI increased by 250% in just 3 months. The AI recommendations are incredibly accurate.',
      rating: 5,
      avatar: 'LC'
    }
  ]

  const stats = [
    { number: '180%', label: 'Conversion Increase', icon: <TrendingUp className="w-6 h-6 text-cyan-400" /> },
    { number: '250%', label: 'ROI Improvement', icon: <DollarSign className="w-6 h-6 text-emerald-400" /> },
    { number: '3x', label: 'Faster Lead Identification', icon: <Target className="w-6 h-6 text-purple-400" /> },
    { number: '95%', label: 'Scoring Accuracy', icon: <Award className="w-6 h-6 text-orange-400" /> }
  ]

  return (
    <>
      <Helmet>
        <title>AI Lead Scoring - Smart Sales Intelligence | Zion Tech Group</title>
        <meta name="description" content="Revolutionary AI-powered lead scoring with intent detection, conversion analytics, and automated workflows. Increase conversion rates by 180% and ROI by 250%." />
        <meta name="keywords" content="AI lead scoring, sales intelligence, lead qualification, conversion optimization, sales automation, CRM integration" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-lead-scoring" />
      </Helmet>

      </Brain>
      </Target>
      </TrendingUp>
      </Zap>
      </BarChart3>
      </Shield>
      </TrendingUp>
      </DollarSign>
      </Target>
      </Award>
      </meta>
      </meta>
      </meta>
      </link>
      </Target>
      </br>
      </ArrowRight>
      </ArrowRight>
      </CheckCircle>
      </CheckCircle>
      </Star>
      </div>
      </br>
      </div>
      </ArrowRight>
      </ArrowRight>
      {/* Hero Section */}
      <section>
        <div>
        <div>
        
        <div>
          <div>
            <Target className="w-4 h-4" />
            <span>AI-Powered Sales Intelligence</span>
          </div>
          
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold text-white mb-8 leading-tight">
            AI Lead
            <br></br>
            <span>
              Scoring Pro
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Transform your sales process with AI-powered lead scoring, 
            intent detection, and conversion analytics that increase conversion rates by 180%.
          </p>
          
          <div>
            <Link;
to="/contact" 
              className="group bg-gradient-to-r from-teal-500 to-cyan-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-teal-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-teal-500/25 hover:shadow-teal-500/40 transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link;
to="#demo" 
              className="group border-2 border-teal-400 text-teal-400 px-10 py-4 rounded-xl font-semibold hover:bg-teal-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>Watch Demo</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section>
        <div>
          <div>
            {stats.map((stat, index) => (
              <div>
                <div>
                  {stat.icon}
                </div>
                <div>
                  {stat.number}
                </div>
                <div>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Advanced <span>Features</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Our AI-powered lead scoring platform uses machine learning to identify, 
              score, and prioritize leads that are most likely to convert.
            </p>
          </div>
          
          <div>
            {features.map((feature, index) => (
              <div>
                <div>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-teal-400 transition-colors">
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
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section>
        <div>
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Flexible <span>Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Choose the perfect plan for your lead scoring needs. All plans include our core AI features;
with scalable options for businesses of all sizes.
            </p>
          </div>
          
          <div>
            {pricingPlans.map((plan, index) => (
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
                  <p className="text-gray-300 mb-4">{plan.description}</p>
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
                      ? 'bg-gradient-to-r from-teal-500 to-cyan-600 text-white hover:from-teal-600 hover:to-cyan-700 shadow-lg shadow-teal-500/25'
                      : 'border-2 border-teal-400 text-teal-400 hover:bg-teal-400 hover:text-gray-900'
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted by <span>Sales Teams</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              See how AI Lead Scoring is transforming sales processes for businesses worldwide.
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
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div>
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6">
            Ready to Transform Your
            <br></br>
            <span>
              Sales Process?
            </span>
          </h2>
          <p className="text-xl sm:text-2xl text-white/90 mb-8 max-w-4xl mx-auto">
            Join thousands of sales teams already increasing conversion rates and ROI with AI Lead Scoring. 
            Start your free trial today - no credit card required.
          </p>
          <div>
            <Link;
to="/contact" 
              className="group bg-white text-teal-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              <span>Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link;
to="/pricing" 
              className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
            >
              <span>View All Plans</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export default AILeadScoringPage