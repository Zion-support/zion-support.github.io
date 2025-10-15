import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  Users, 
  TrendingUp, 
  BarChart3, 
  Heart, 
  Zap, 
  CheckCircle,
  Star,
  ArrowRight,
  Brain,
  Database,
  Target,
  Activity,
  MessageSquare,
  Eye,
  Clock,
  Globe,
  PieChart
} from 'lucide-react';

const AICustomerInsights: React.FC = () => {
  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning algorithms analyze customer behavior patterns to predict trends and preferences.'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Customer Segmentation',
      description: 'Automatically segment customers based on behavior, demographics, and preferences for targeted marketing.'
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: 'Sentiment Analysis',
      description: 'Analyze customer feedback, reviews, and social media to understand sentiment and satisfaction levels.'
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: 'Predictive Analytics',
      description: 'Predict customer lifetime value, churn risk, and purchase likelihood using advanced AI models.'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'Real-time Insights',
      description: 'Get instant insights and alerts about customer behavior changes and emerging trends.'
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: 'Personalization Engine',
      description: 'Create personalized experiences and recommendations based on individual customer profiles.'
    }
  ];

  const insights = [
    {
      title: 'Customer Satisfaction',
      value: '94%',
      description: 'Average satisfaction score',
      icon: <Heart className="w-8 h-8" />,
      trend: '+12%'
    },
    {
      title: 'Churn Reduction',
      value: '35%',
      description: 'Reduction in customer churn',
      icon: <TrendingUp className="w-8 h-8" />,
      trend: '+8%'
    },
    {
      title: 'Revenue Growth',
      value: '42%',
      description: 'Increase in customer lifetime value',
      icon: <BarChart3 className="w-8 h-8" />,
      trend: '+15%'
    },
    {
      title: 'Response Time',
      value: '< 5min',
      description: 'Average insight generation',
      icon: <Zap className="w-8 h-8" />,
      trend: '+25%'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$129',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 customers',
        'Basic AI insights',
        'Email alerts',
        'Standard support',
        '1 user account',
        '30-day data retention',
        'Basic reporting'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$249',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [
        'Up to 10,000 customers',
        'Advanced AI insights',
        'Real-time alerts',
        'Priority support',
        'Up to 5 user accounts',
        '1-year data retention',
        'Advanced reporting',
        'API access',
        'Custom dashboards'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$499',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited customers',
        'Premium AI insights',
        '24/7 monitoring',
        'Dedicated support',
        'Unlimited user accounts',
        'Unlimited data retention',
        'Custom reporting',
        'White-label options',
        'SLA guarantee'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Lee',
      company: 'RetailMax',
      role: 'Customer Success Manager',
      content: 'AI Customer Insights has transformed how we understand our customers. The predictive analytics helped us reduce churn by 40%.',
      rating: 5
    },
    {
      name: 'Robert Davis',
      company: 'TechStart Inc.',
      role: 'Marketing Director',
      content: 'The customer segmentation is incredibly accurate. We can now target the right customers with the right message at the right time.',
      rating: 5
    },
    {
      name: 'Maria Garcia',
      company: 'E-commerce Plus',
      role: 'Head of Analytics',
      content: 'The real-time insights are game-changing. We can now respond to customer behavior changes instantly.',
      rating: 5
    }
  ];

  return (
    <>
      <SEOHead
        title="AI Customer Insights - Advanced Customer Analytics Platform | Zion Tech Group"
        description="Understand your customers better with AI-powered insights. Customer segmentation, sentiment analysis, and predictive analytics. Starting at $129/month."
        keywords="customer insights, customer analytics, AI analytics, customer segmentation, sentiment analysis, predictive analytics, customer behavior"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 animated-bg cyber-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-green-900/20 via-emerald-900/20 to-teal-900/20"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-green-600/20 text-green-300 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Users className="w-4 h-4" />
                #1 Customer Analytics Platform
              </div>
              <h1 className="text-5xl lg:text-6xl font-bold mb-6 futuristic-text">
                AI Customer Insights
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Understand your customers like never before with AI-powered analytics. Get deep insights into 
                customer behavior, preferences, and sentiment to drive growth and retention.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <a
                  href="#pricing"
                  className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <a
                  href="#demo"
                  className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
                >
                  View Demo
                  <Activity className="w-5 h-5" />
                </a>
              </div>
              <div className="flex items-center gap-6 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Free 14-day trial
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  No credit card required
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-400" />
                  Cancel anytime
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="glass-morphism p-8 rounded-2xl">
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Heart className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">94%</span>
                    </div>
                    <p className="text-white text-sm">Satisfaction</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <TrendingUp className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">35%</span>
                    </div>
                    <p className="text-white text-sm">Churn Reduction</p>
                  </div>
                  <div className="bg-gradient-to-r from-purple-600 to-pink-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <BarChart3 className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">42%</span>
                    </div>
                    <p className="text-white text-sm">Revenue Growth</p>
                  </div>
                  <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <Zap className="w-6 h-6 text-white" />
                      <span className="text-white text-sm">< 5min</span>
                    </div>
                    <p className="text-white text-sm">Response Time</p>
                  </div>
                </div>
                <div className="h-32 bg-gradient-to-r from-slate-800 to-slate-700 rounded-lg flex items-center justify-center">
                  <Users className="w-12 h-12 text-green-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Insights Metrics */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              Proven Results for Our Customers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See the measurable impact of AI-powered customer insights
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {insights.map((insight, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow group text-center">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform flex justify-center">
                  {insight.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{insight.value}</div>
                <h3 className="text-lg font-semibold mb-2 text-white">{insight.title}</h3>
                <p className="text-gray-300 text-sm mb-2">{insight.description}</p>
                <div className="text-green-400 text-sm font-semibold">{insight.trend} vs last month</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-slate-900/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 futuristic-text">
              Advanced Customer Intelligence
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Unlock the power of AI to understand and engage your customers better
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow group">
                <div className="text-green-400 mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 futuristic-text">
              Choose Your Insights Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Scale your customer intelligence with flexible pricing options
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`glass-morphism p-8 rounded-xl hover-glow relative ${
                plan.popular ? 'ring-2 ring-green-500' : ''
              }`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-600 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold">
                      Most Popular
                    </div>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2 text-white">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-bold transition-all duration-300 flex items-center justify-center gap-2 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white hover-glow'
                      : 'glass-morphism text-white hover:bg-slate-700/50'
                  }`}
                >
                  Get Started
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900/30">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6 neon-text">
              Trusted by Customer Success Teams
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what customer success professionals say about AI Customer Insights
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-morphism p-8 rounded-xl hover-glow">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <p className="font-bold text-white">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-900/50 to-emerald-900/50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl font-bold mb-6 futuristic-text">
            Understand Your Customers Better
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Start using AI-powered customer insights to drive growth and retention
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="group bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="tel:+13024640950"
              className="group glass-morphism text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 hover-glow flex items-center justify-center gap-2"
            >
              Call: +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default AICustomerInsights;
