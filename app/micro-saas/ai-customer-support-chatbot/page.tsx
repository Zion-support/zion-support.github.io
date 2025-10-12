import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MessageSquare, Bot} from 'lucide-react';

export default function AICustomerSupportChatbotPage() {
  const features = [
    {
      icon: <Bot className="w-6 h-6 text-cyan-400" / />,
      title: 'Natural Language Processing',
      description: 'Advanced NLP understands context, intent, and sentiment with 98% accuracy'
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-emerald-400" / />,
      title: 'Multi-Channel Support',
      description: 'Deploy across website, mobile app, social media, and messaging platforms'
    },
    {
      icon: <BarChart3 className="w-6 h-6 text-purple-400" / />,
      title: 'Real-time Analytics',
      description: 'Comprehensive insights into customer satisfaction, response times, and resolution rates'
    },
    {
      icon: <Zap className="w-6 h-6 text-orange-400" / />,
      title: 'Instant Responses',
      description: '24/7 availability with sub-second response times for immediate customer assistance'
    },
    {
      icon: <Target className="w-6 h-6 text-pink-400" / />,
      title: 'Smart Escalation',
      description: 'Intelligently routes complex queries to human agents when needed'
    },
    {
      icon: <Shield className="w-6 h-6 text-red-400" / />,
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
      icon: <Clock className="w-8 h-8 text-cyan-400" / />,
      title: '70% Faster Resolution',
      description: 'Instant responses reduce average resolution time significantly'
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-emerald-400" / />,
      title: '40% Higher Satisfaction',
      description: 'AI-powered personalization improves customer experience'
    },
    {
      icon: <DollarSign className="w-8 h-8 text-purple-400" / />,
      title: '60% Cost Reduction',
      description: 'Automated responses reduce support team workload'
    },
    {
      icon: <Target className="w-8 h-8 text-orange-400" / />,
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20" />
      <Helmet />
        <title  >AI Customer Support Chatbot - Zion Tech Group | Intelligent Customer Service</title>
        <meta name="description" content="Revolutionary AI-powered customer support chatbot with natural language processing, multi-channel support, and real-time analytics. Reduce support costs by 60%. Starting at $49/month." / / />
        <meta name="keywords" content="AI chatbot, customer support automation, natural language processing, multi-channel support, customer service AI, support automation" / / />
        <meta name="robots" content="index, follow" / / />
        <link rel="canonical" href="https://ziontechgroup.com/micro-saas/ai-customer-support-chatbot" / />
      </Helmet>

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(6,182,212,0.1)_0%,transparent_50%)]" / />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1)_0%,transparent_50%)]" / />
        
        <div className="relative max-w-7 xl mx-auto text-center" />
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 px-6 py-3 rounded-full text-sm font-medium mb-8 border border-cyan-400/30" />
            <MessageSquare className="w-4 h-4" / />
            <span  >AI-Powered Customer Support</span>
          </div>
          
          <h1 className="text-4 xl sm:text-6 xl md:text-7 xl font-bold text-white mb-8 leading-tight" />
            AI Customer Support
            <br / />
            <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent"  />Chatbot
            </span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2 xl text-gray-300 mb-12 max-w-4 xl mx-auto leading-relaxed">
            Transform your customer support with AI-powered chatbots that provide instant, intelligent responses. 
            Reduce support costs by 60% while improving customer satisfaction by 40%.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16" />
            <Link 
              to="/contact" 
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-10 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 transform hover:scale-105"
             />
              <span  >Start Free Trial</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
            </Link>
            <Link 
              to="#pricing" 
              className="group border-2 border-cyan-400 text-cyan-400 px-10 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-gray-900 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
             />
              <span  >View Pricing</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
            </Link>
          </div>

          {/* Key Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4 xl mx-auto" />
            <div className="text-center" />
              <div className="text-3 xl font-bold text-cyan-400 mb-2"  >70%</div>
              <div className="text-gray-300 text-sm"  >Faster Resolution</div>
            </div>
            <div className="text-center" />
              <div className="text-3 xl font-bold text-purple-400 mb-2"  >98%</div>
              <div className="text-gray-300 text-sm"  >Accuracy Rate</div>
            </div>
            <div className="text-center" />
              <div className="text-3 xl font-bold text-pink-400 mb-2"  >60%</div>
              <div className="text-gray-300 text-sm"  >Cost Reduction</div>
            </div>
            <div className="text-center" />
              <div className="text-3 xl font-bold text-emerald-400 mb-2"  >30 K+</div>
              <div className="text-gray-300 text-sm"  >Active Users</div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 relative" />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-cyan-500/5 to-pink-500/5" / />
        <div className="relative max-w-7 xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Why Choose Our <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >AI Chatbot?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto">
              Experience the future of customer support with cutting-edge AI technology that works for your business.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8" />
            {benefits.map((benefit, index) => (
              <div key="{index}" className="text-center group" />
                <div className="flex items-center justify-center w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 mx-auto group-hover:scale-110 transition-transform duration-300"  />{benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"  />{benefit.title}
                </h3>
                <p className="text-gray-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 relative" />
        <div className="relative max-w-7 xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Powerful <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Use Cases</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto">
              Deploy AI chatbots across various customer support scenarios for maximum impact and efficiency.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
            {useCases.map((useCase, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10" />
                <div className="text-center mb-6" />
                  <div className="text-4 xl mb-4"  >{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors"  />{useCase.title}
                  </h3>
                </div>
                <p className="text-gray-300 text-center mb-4">
                  {useCase.description}
                </p>
                <div className="text-cyan-400 text-sm font-semibold text-center"  />{useCase.benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-slate-800/50 to-purple-900/50 relative" />
        <div className="relative max-w-7 xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Advanced Features for <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Smart Support</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto">
              Everything you need to provide exceptional customer support with AI-powered intelligence.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" />
            {features.map((feature, index) => (
              <div key="{index}" className="group bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2 xl hover:shadow-cyan-500/10" />
                <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2 xl mb-6 group-hover:scale-110 transition-transform duration-300"  />{feature.icon}
                </div>
                <h3 className="text-2 xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors"  />{feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Integrations Section */}
      <section className="py-20 px-4 relative" />
        <div className="relative max-w-7 xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Seamless <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Integrations</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto">
              Connect with your existing tools and platforms for a unified customer support experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8" />
            {integrations.map((integration, index) => (
              <div key="{index}" className="group text-center" />
                <div className="w-20 h-20 bg-white/10 backdrop-blur-lg rounded-2 xl flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300 group-hover:scale-110" />
                  <span className="text-3 xl"  >{integration.icon}</span>
                </div>
                <div className="text-gray-300 group-hover:text-white transition-colors"  />{integration.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 relative" />
        <div className="relative max-w-7 xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Simple, Transparent <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >Pricing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto">
              Choose the plan that fits your conversation volume and support needs. All plans include our core AI features.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" />
            {pricingPlans.map((plan, index) => (
              <div key="{index}" className="{`relative" bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2 xl ${
                plan.popular 
                  ? 'border-cyan-400/50 shadow-cyan-500/20 bg-gradient-to-br from-cyan-500/10 to-purple-500/10' 
                  : 'border-white/20 hover: border-cyan-400/30'
              }`} />
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2" />
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold"  />Most Popular
                    </div>
                  </div>
                )}
                
                <div className="text-center mb-8" />
                  <h3 className="text-2 xl font-bold text-white mb-2"  >{plan.name}</h3>
                  <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center" />
                    <span className="text-5 xl font-bold text-cyan-400"  >{plan.price}</span>
                    <span className="text-gray-300 ml-2"  >{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8" />
                  {plan.features.map((feature, featureIndex) => (
                    <li key="{featureIndex}" className="flex items-center space-x-3" />
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" / />
                      <span className="text-gray-300"  >{feature}</span>
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
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 relative" />
        <div className="relative max-w-7 xl mx-auto" />
          <div className="text-center mb-16" />
            <h2 className="text-4 xl md:text-5 xl font-bold text-white mb-6" />
              Trusted by <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"  >30,000+</span> Businesses
            </h2>
            <p className="text-xl text-gray-300 max-w-4 xl mx-auto">
              See what our customers are saying about their success with our AI customer support chatbot.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8" />
            {testimonials.map((testimonial, index) => (
              <div key="{index}" className="bg-white/10 backdrop-blur-lg rounded-2 xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300" />
                <div className="flex items-center mb-4" />
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4"  />{testimonial.avatar}
                  </div>
                  <div />
                    <div className="font-semibold text-white"  >{testimonial.name}</div>
                    <div className="text-gray-400 text-sm"  >{testimonial.company}</div>
                  </div>
                </div>
                <div className="flex mb-4" />
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key="{i}" className="w-5 h-5 text-yellow-400 fill-current" / />
                  ))}
                </div>
                <p className="text-gray-300 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 relative" />
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10" / />
        <div className="relative max-w-7 xl mx-auto" />
          <div className="text-center" />
            <div className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 rounded-3 xl p-8 sm:p-12 lg:p-16 relative overflow-hidden" />
              <div className="relative z-10" />
                <h2 className="text-4 xl sm:text-5 xl md:text-6 xl font-bold text-white mb-6 leading-tight" />
                  Ready to Transform Your <span className="bg-gradient-to-r from-cyan-300 to-pink-300 bg-clip-text text-transparent"  >Customer Support?</span>
                </h2>
                
                <p className="text-xl sm:text-2 xl text-white/90 mb-8 sm:mb-12 max-w-4 xl mx-auto leading-relaxed">
                  Join thousands of businesses already reducing support costs by 60% with our AI-powered chatbot. 
                  Start your free trial today and experience the future of customer support.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8" />
                  <Link 
                    to="/contact" 
                    className="group bg-white text-cyan-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                   />
                    <span  >Start Free Trial</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
                  </Link>
                  <Link 
                    to="#pricing" 
                    className="group border-2 border-white text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-white/10 transition-all duration-300 flex items-center justify-center space-x-2 backdrop-blur-sm"
                   />
                    <span  >View All Plans</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" / />
                  </Link>
                </div>
                
                <div className="text-white/80 text-sm" />
                  <p>✓ 14-day free trial • ✓ No credit card required • ✓ Cancel anytime</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}