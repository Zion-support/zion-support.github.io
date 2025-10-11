import React from 'react';
import { CheckCircle, ArrowRight, Mail, BarChart3, Users, Zap, DollarSign, Star, Clock, Target, Send } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const AIEmailMarketingAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Target className="w-6 h-6 text-blue-500" />,
      title: 'Smart Segmentation',
      description: 'AI automatically segments your audience based on behavior, preferences, and engagement patterns'
    },
    {
      icon: <Send className="w-6 h-6 text-green-500" />,
      title: 'Automated Campaigns',
      description: 'Set up complex email sequences that trigger based on user actions and engagement levels'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-500" />,
      title: 'Advanced Analytics',
      description: 'Track open rates, click-through rates, conversions, and revenue attribution in real-time'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-500" />,
      title: 'AI Content Generation',
      description: 'Generate personalized email content, subject lines, and send-time optimization'
    }
  ];

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$29',
      period: '/month',
      description: 'Perfect for small businesses getting started',
      features: [
        '1,000 contacts',
        '10,000 emails/month',
        'Basic automation',
        'Email templates',
        'Basic analytics',
        'Email support'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$79',
      period: '/month',
      description: 'Ideal for growing businesses and marketers',
      features: [
        '10,000 contacts',
        '50,000 emails/month',
        'Advanced automation',
        'AI content generation',
        'Advanced analytics',
        'A/B testing',
        'Priority support',
        'Custom templates'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$199',
      period: '/month',
      description: 'For large teams and agencies',
      features: [
        'Unlimited contacts',
        'Unlimited emails',
        'White-label solution',
        'Advanced AI features',
        'Custom integrations',
        'Dedicated account manager',
        '24/7 phone support',
        'API access'
      ],
      popular: false
    }
  ];

  const automationWorkflows = [
    {
      title: 'Welcome Series',
      description: 'Automatically welcome new subscribers with a 5-email sequence',
      icon: <Users className="w-8 h-8 text-blue-500" />
    },
    {
      title: 'Abandoned Cart Recovery',
      description: 'Re-engage customers who left items in their cart with targeted emails',
      icon: <Target className="w-8 h-8 text-green-500" />
    },
    {
      title: 'Re-engagement Campaign',
      description: 'Win back inactive subscribers with personalized re-engagement sequences',
      icon: <Zap className="w-8 h-8 text-purple-500" />
    },
    {
      title: 'Post-Purchase Follow-up',
      description: 'Nurture customers after purchase with thank you and upsell emails',
      icon: <Mail className="w-8 h-8 text-orange-500" />
    }
  ];

  const testimonials = [
    {
      name: 'Jennifer Martinez',
      company: 'E-commerce Store Owner',
      content: 'Our email open rates increased from 12% to 34% with AI-optimized send times. Revenue is up 45%.',
      rating: 5,
      avatar: 'JM'
    },
    {
      name: 'David Thompson',
      company: 'Marketing Director',
      content: 'The automation workflows save us 20 hours per week. The AI content generation is incredibly accurate.',
      rating: 5,
      avatar: 'DT'
    },
    {
      name: 'Lisa Chen',
      company: 'SaaS Startup',
      content: 'Customer lifetime value increased by 60% with our automated nurture sequences. Game-changing tool.',
      rating: 5,
      avatar: 'LC'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI Email Marketing Automation - Zion Tech Group</title>
        <meta name="description" content="AI-powered email marketing automation with smart segmentation, automated campaigns, and advanced analytics. Increase your ROI by 300%." />
        <meta name="keywords" content="email marketing automation, AI email, email campaigns, marketing automation, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            AI Email Marketing
            <span className="bg-gradient-to-r from-green-400 to-emerald-400 bg-clip-text text-transparent"> Automation</span>
            <br />
            That Converts
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Stop sending generic emails. Our AI creates personalized, high-converting email campaigns 
            that automatically segment your audience and optimize for maximum engagement.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
            </Link>
            <Link
              to="#pricing"
              className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Powerful AI Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to create, send, and optimize email campaigns that drive results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Automation Workflows Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Pre-Built Automation Workflows
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Get started quickly with our proven automation templates
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {automationWorkflows.map((workflow, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 group"
              >
                <div className="mb-6">
                  {workflow.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{workflow.title}</h3>
                <p className="text-gray-300">{workflow.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Simple, Transparent Pricing
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that fits your needs. All plans include a 14-day free trial.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white/10 backdrop-blur-lg rounded-xl p-8 border transition-all duration-300 group ${
                  plan.popular 
                    ? 'border-green-500 bg-white/20 scale-105' 
                    : 'border-white/20 hover:bg-white/20'
                }`}
              >
                {plan.popular && (
                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-semibold text-center mb-6">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 rounded-lg font-semibold text-center block transition-all duration-300 group-hover:scale-105 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-green-500 to-emerald-600 text-white hover:from-green-600 hover:to-emerald-700'
                      : 'bg-white text-gray-900 hover:bg-gray-100'
                  }`}
                >
                  Start Free Trial
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by 5,000+ Marketers
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See what our customers say about their results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <p className="font-semibold text-white">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex items-center mb-4">
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
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to 3x Your Email ROI?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Join thousands of marketers who have increased their email revenue by 300% with our AI automation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-white text-green-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
              >
                Start Your Free Trial
              </Link>
              <Link
                to="#pricing"
                className="border border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300"
              >
                View All Plans
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AIEmailMarketingAutomationPage;