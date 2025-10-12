import React from 'react'
import { Link } from 'react-router-dom'
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Bot} from 'lucide-react';

export default function AICustomerSupportChatbotPage() {
  const features = [
    {
      icon: <Bot className="w-5h-5ml-2" />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP understands context, intent, and sentiment with 98% accuracy'
    },
    {
      icon: <MessageSquare className="w-5h-5ml-2" />,
      title: 'Multi-Channel Support',
      description: 'Deploy across website, mobile app, social media, and messaging platforms'
    },
    {
      icon: <BarChart3 className="w-5h-5ml-2" />,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights into customer satisfaction, response times, and resolution rates'
    },
    {
      icon: <Zap className="w-5h-5ml-2" />,
      title: 'Instant Responses',
      description: '24/7 availability with sub-second response times for immediate customer assistance'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: 'Smart Escalation',
      description: 'Intelligently routes complex queries to human agents when needed'
    },
    {
      icon: <Shield className="w-5h-5ml-2" />,
      title: 'Secure & Compliant',
      description: 'Enterprise-grade security with GDPR, HIPAA, and SOC 2 compliance'
    }
  ]

  const pricingPlans = [
    {
      name: 'Starter',
      price: '$49',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI features',
        'Website integration',
        'Email support',
        'Basic analytics',
        'Standard templates'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI features',
        'Multi-channel support',
        'Priority support',
        'Advanced analytics',
        'Custom integrations',
        'A/B testing',
        'Custom branding'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '$399',
      period: '/month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'All AI features',
        'Custom integrations',
        'Dedicated support',
        'White-label option',
        'Advanced security',
        'Custom reporting',
        'SLA guarantee'
      ],
      popular: false
    }
  ]

  const testimonials = [
    {
      name: 'Amanda Foster',
      company: 'E-commerce Store',
      content: 'Reduced our support tickets by 70% and improved customer satisfaction by 40%. The chatbot handles 80% of queries perfectly.',
      rating: 5,
      avatar: 'AF'
    },
    {
      name: 'James Rodriguez',
      company: 'SaaS Company',
      content: 'Our customers love the instant responses. The AI understands complex technical questions better than expected.',
      rating: 5,
      avatar: 'JR'
    },
    {
      name: 'Sarah Kim',
      company: 'Healthcare Provider',
      content: 'The compliance features are excellent. We can provide 24/7 support while maintaining HIPAA compliance.',
      rating: 5,
      avatar: 'SK'
    }
  ]

  const benefits = [
    {
      icon: <Clock className="w-5h-5ml-2" />,
      title: '70% Faster Resolution',
      description: 'Instant responses reduce average resolution time significantly'
    },
    {
      icon: <TrendingUp className="w-5h-5ml-2" />,
      title: '40% Higher Satisfaction',
      description: 'AI-powered personalization improves customer experience'
    },
    {
      icon: <DollarSign className="w-5h-5ml-2" />,
      title: '60% Cost Reduction',
      description: 'Automated responses reduce support team workload'
    },
    {
      icon: <Target className="w-5h-5ml-2" />,
      title: '98% Accuracy',
      description: 'Advanced NLP ensures accurate understanding and responses'
    }
  ]

  const integrations = [
    { name: 'Slack', icon: '💬' },
    { name: 'Microsoft Teams', icon: '👥' },
    { name: 'Zendesk', icon: '🎫' },
    { name: 'Freshdesk', icon: '🆕' },
    { name: 'Intercom', icon: '💬' },
    { name: 'Salesforce', icon: '⚡' },
    { name: 'HubSpot', icon: '🎯' },
    { name: 'Shopify', icon: '🛍️' },
    { name: 'WordPress', icon: '📝' },
    { name: 'Webflow', icon: '🌐' }
  ]

  const useCases = [
    { 
      title: 'FAQ Automation', 
      description: 'Answer common questions instantly with intelligent responses',
      icon: '❓',
      benefit: 'Reduce repetitive queries by 80%'
    },
    { 
      title: 'Order Support', 
      description: 'Help customers track orders, process returns, and handle billing',
      icon: '📦',
      benefit: 'Handle 90% of order-related queries'
    },
    { 
      title: 'Technical Support', 
      description: 'Provide step-by-step troubleshooting and technical guidance',
      icon: '🔧',
      benefit: 'Resolve 75% of technical issues automatically'
    },
    { 
      title: 'Lead Qualification', 
      description: 'Qualify leads and schedule demos with sales team',
      icon: '🎯',
      benefit: 'Increase qualified leads by 50%'
    },
    { 
      title: 'Appointment Booking', 
      description: 'Schedule appointments and manage calendar availability',
      icon: '📅',
      benefit: 'Reduce no-shows by 30%'
    },
    { 
      title: 'Complaint Handling', 
      description: 'De-escalate issues and route to appropriate departments',
      icon: '😤',
      benefit: 'Improve complaint resolution by 60%'
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
      <Helmet>
        <title />AI Customer Support Chatbot - Zion Tech Group | Intelligent Customer Service</title>
        <meta name="description" content="Revolutionary AI-powered customer support chatbot with natural language processing, multi-channel support, and real-time analytics. Reduce support costs by 60%. Starting at $49/month." />
        <meta name="keywords" content="AI chatbot, customer support automation, natural language processing, multi-channel support, customer service AI, support automation" />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-customer-support-chatbot"  />
      </Helmet>

      {/* Hero Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <MessageSquare className="w-5h-5ml-2" />
            <span />AI-Powered Customer Support</span>
          </div>
          
          <h1 className="w-5h-5ml-2" />
            AI Customer Support
            <br />
            <span className="w-5h-5ml-2" />Chatbot
            </span>
          </h1>
          
          <p className="w-5h-5ml-2">Transform your customer support with AI-powered chatbots that provide instant, intelligent responses. 
            Reduce support costs by 60% while improving customer satisfaction by 40%.
          </p>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <Link to="/contact" className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40transformhover:scale-105" />
              <span />Start Free Trial</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
            <Link to="#pricing" className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
              <span />View Pricing</span>
              <ArrowRight className="w-5h-5ml-2" />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">70%</div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Faster Resolution</div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">98%</div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Accuracy Rate</div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">60%</div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Cost Reduction</div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">30 K+</div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Active Users</div>
          </div>
      </section>

      {/* Benefits Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Why Choose Our <span className="w-5h-5ml-2" />AI Chatbot?</span>
            </h2>
            <p className="w-5h-5ml-2">Experience the future of customer support with cutting-edge AI technology that works for your business.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-centergroup" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{benefit.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{benefit.title}
                </h3>
                <p className="w-5h-5ml-2">{benefit.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Use Cases Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Powerful <span className="w-5h-5ml-2" />Use Cases</span>
            </h2>
            <p className="w-5h-5ml-2">Deploy AI chatbots across various customer support scenarios for maximum impact and efficiency.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {useCases.map((useCase, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{useCase.icon}</div>
                  <h3 className="w-5h-5ml-2" />{useCase.title}
                  </h3>
                </div>
                <p className="w-5h-5ml-2">{useCase.description}
                </p>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{useCase.benefit}
                </div>
            ))}
          </div>
      </section>

      {/* Features Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Advanced Features for <span className="w-5h-5ml-2" />Smart Support</span>
            </h2>
            <p className="w-5h-5ml-2">Everything you need to provide exceptional customer support with AI-powered intelligence.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {features.map((feature, index) => (
              <div key={index} className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xlhover:shadow-cyan-500/10" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{feature.icon}
                </div>
                <h3 className="w-5h-5ml-2" />{feature.title}
                </h3>
                <p className="w-5h-5ml-2">{feature.description}
                </p>
              </div>
            ))}
          </div>
      </section>

      {/* Integrations Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Seamless <span className="w-5h-5ml-2" />Integrations</span>
            </h2>
            <p className="w-5h-5ml-2">Connect with your existing tools and platforms for a unified customer support experience.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {integrations.map((integration, index) => (
              <div key={index} className="group text-center" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <span className="w-5h-5ml-2" />{integration.icon}</span>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{integration.name}
                </div>
            ))}
          </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20px-4relative" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Simple, Transparent <span className="w-5h-5ml-2" />Pricing</span>
            </h2>
            <p className="w-5h-5ml-2">Choose the plan that fits your conversation volume and support needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {pricingPlans.map((plan, index) => (
              <div key={index} className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">Most Popular
                    </div>
                )}
                
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <h3 className="w-5h-5ml-2" />{plan.name}</h3>
                  <p className="w-5h-5ml-2">{plan.description}</p>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                    <span className="w-5h-5ml-2" />{plan.price}</span>
                    <span className="w-5h-5ml-2" />{plan.period}</span>
                  </div>
                
                <ul className="w-5h-5ml-2" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-centerspace-x-3" />
                      <CheckCircle className="w-5h-5ml-2" />
                      <span className="w-5h-5ml-2" />{feature}</span>
                    </li>
                  ))}
                </ul>
                
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
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <h2 className="w-5h-5ml-2" />
              Trusted by <span className="w-5h-5ml-2" />30,000+</span> Businesses
            </h2>
            <p className="w-5h-5ml-2">See what our customers are saying about their success with our AI customer support chatbot.
            </p>
          </div>
          
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20transition-all duration-300" />
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.avatar}
                  </div>
                  <div />
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.name}</div>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{testimonial.company}</div>
                </div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5h-5te x t-yellow-400fill-current"  />
                  ))}
                </div>
                <p className="w-5h-5ml-2">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
      </section>

      {/* CTA Section */}
      <section className="w-5h-5ml-2" />
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                <h2 className="w-5h-5ml-2" />
                  Ready to Transform Your <span className="w-5h-5ml-2" />Customer Support?</span>
                </h2>
                
                <p className="w-5h-5ml-2">Join thousands of businesses already reducing support costs by 60% with our AI-powered chatbot. 
                  Start your free trial today and experience the future of customer support.
                </p>
                
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <Link to="/contact" className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xltransformhover:scale-105" />
                    <span />Start Free Trial</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                  <Link to="#pricing" className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-centerspace-x-2backdrop-blur-sm" />
                    <span />View All Plans</span>
                    <ArrowRight className="w-5h-5ml-2" />
                  </Link>
                </div>
                
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
                  <p />✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
}