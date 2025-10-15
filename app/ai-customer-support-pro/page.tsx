import React from 'react';
import SEOHead from '../components/SEOHead';
import { 
  ChatBubbleLeftRightIcon, 
  CheckCircleIcon, 
  HeartIcon, 
  ClockIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  CogIcon,
  ArrowRightIcon,
  StarIcon,
  UserGroupIcon,
  GlobeAltIcon,
  LightBulbIcon
} from '@heroicons/react/24/outline';

const AICustomerSupportProPage: React.FC = () => {
  const features = [
    {
      icon: ChatBubbleLeftRightIcon,
      title: 'Intelligent Chatbots',
      description: 'Advanced AI chatbots that understand context and provide human-like responses',
      benefits: ['24/7 availability', 'Instant responses', 'Multilingual support']
    },
    {
      icon: HeartIcon,
      title: 'Sentiment Analysis',
      description: 'Real-time analysis of customer emotions and satisfaction levels',
      benefits: ['Proactive support', 'Improved satisfaction', 'Emotion detection']
    },
    {
      icon: ClockIcon,
      title: 'Automated Ticket Routing',
      description: 'Smart routing of support tickets to the right agents based on expertise',
      benefits: ['Faster resolution', 'Better resource allocation', 'Reduced wait times']
    },
    {
      icon: ChartBarIcon,
      title: 'Analytics Dashboard',
      description: 'Comprehensive insights into support performance and customer satisfaction',
      benefits: ['Data-driven decisions', 'Performance tracking', 'Trend analysis']
    },
    {
      icon: ShieldCheckIcon,
      title: 'Knowledge Base AI',
      description: 'AI-powered knowledge base that learns and improves from every interaction',
      benefits: ['Self-learning system', 'Accurate responses', 'Continuous improvement']
    },
    {
      icon: CogIcon,
      title: 'Workflow Automation',
      description: 'Automate repetitive tasks and streamline support processes',
      benefits: ['Efficiency gains', 'Consistent processes', 'Error reduction']
    }
  ];

  const pricingPlans = [
    {
      name: 'Startup',
      price: 99,
      originalPrice: 199,
      period: 'month',
      description: 'Perfect for small businesses getting started',
      features: [
        'Up to 1,000 conversations/month',
        'Basic AI chatbot',
        'Email support',
        'Standard templates',
        'Basic analytics',
        '1 knowledge base'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: 199,
      originalPrice: 399,
      period: 'month',
      description: 'Ideal for growing businesses',
      features: [
        'Up to 10,000 conversations/month',
        'Advanced AI chatbot',
        'Priority support',
        'Custom templates',
        'Advanced analytics',
        'Multiple knowledge bases',
        'Sentiment analysis',
        'API access'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 499,
      originalPrice: 999,
      period: 'month',
      description: 'For large organizations',
      features: [
        'Unlimited conversations',
        'Full AI suite',
        '24/7 dedicated support',
        'White-label solution',
        'Custom integrations',
        'Advanced API access',
        'Custom analytics',
        'SLA guarantee',
        'Dedicated account manager'
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: 'Robert Kim',
      role: 'Customer Success Manager',
      company: 'TechFlow Solutions',
      content: 'AI Customer Support Pro has reduced our response time by 80% and improved customer satisfaction by 45%. The AI understands our customers better than we expected.',
      rating: 5
    },
    {
      name: 'Maria Santos',
      role: 'VP of Operations',
      company: 'Global Retail Co',
      content: 'The sentiment analysis feature helps us identify frustrated customers before they escalate. We can now provide proactive support and prevent churn.',
      rating: 5
    },
    {
      name: 'James Wilson',
      role: 'Head of Support',
      company: 'CloudTech Inc',
      content: 'The automated ticket routing has been a game-changer. Tickets are now assigned to the right specialists instantly, reducing resolution time by 60%.',
      rating: 5
    }
  ];

  const useCases = [
    {
      title: 'E-commerce',
      description: 'Handle product inquiries, order tracking, and returns with AI-powered support',
      icon: '🛒',
      benefits: ['Order assistance', 'Product recommendations', 'Return processing']
    },
    {
      title: 'SaaS Companies',
      description: 'Provide technical support and onboarding assistance for software products',
      icon: '💻',
      benefits: ['Technical troubleshooting', 'Feature guidance', 'Account setup']
    },
    {
      title: 'Financial Services',
      description: 'Deliver secure and compliant customer support for financial products',
      icon: '🏦',
      benefits: ['Account assistance', 'Transaction support', 'Compliance monitoring']
    },
    {
      title: 'Healthcare',
      description: 'Provide patient support and appointment scheduling with HIPAA compliance',
      icon: '🏥',
      benefits: ['Appointment scheduling', 'Patient inquiries', 'HIPAA compliance']
    }
  ];

  const integrations = [
    { name: 'Slack', logo: '💬', description: 'Team notifications' },
    { name: 'Zendesk', logo: '🎫', description: 'Ticket management' },
    { name: 'Intercom', logo: '📞', description: 'Customer communication' },
    { name: 'Salesforce', logo: '☁️', description: 'CRM integration' },
    { name: 'HubSpot', logo: '🎯', description: 'Marketing automation' },
    { name: 'Freshdesk', logo: '🆕', description: 'Support platform' },
    { name: 'Microsoft Teams', logo: '👥', description: 'Team collaboration' },
    { name: 'WhatsApp', logo: '📱', description: 'Messaging platform' }
  ];

  const metrics = [
    { number: '80%', label: 'Faster Response Time', color: 'text-green-400' },
    { number: '45%', label: 'Higher Satisfaction', color: 'text-blue-400' },
    { number: '60%', label: 'Reduced Resolution Time', color: 'text-purple-400' },
    { number: '24/7', label: 'Always Available', color: 'text-cyan-400' }
  ];

  return (
    <>
      <SEOHead
        title="AI Customer Support Pro - Intelligent Support Solutions | Zion Tech Group"
        description="Revolutionary AI-powered customer support with intelligent chatbots, sentiment analysis, and automated ticket routing. Boost satisfaction by 45%!"
        keywords="AI customer support, chatbot, sentiment analysis, ticket routing, customer service automation, support analytics, helpdesk AI"
        canonicalUrl="https://ziontechgroup.com/ai-customer-support-pro"
      />
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-slate-900 to-green-900/30"></div>
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="inline-flex items-center bg-blue-500/10 border border-blue-500/20 rounded-full px-4 py-2 mb-8">
                <ChatBubbleLeftRightIcon className="w-5 h-5 text-blue-400 mr-2" />
                <span className="text-blue-300 text-sm font-medium">AI-Powered Support</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-6">
                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-green-400 bg-clip-text text-transparent">
                  AI Customer Support Pro
                </span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
                Transform your customer support with AI-powered chatbots, sentiment analysis, 
                and intelligent automation that delivers exceptional customer experiences.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                  Start Free Trial
                </button>
                <button className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300">
                  Watch Demo
                </button>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {metrics.map((metric, index) => (
                  <div key={index} className="text-center">
                    <div className={`text-3xl font-bold ${metric.color} mb-2`}>{metric.number}</div>
                    <div className="text-gray-300 text-sm">{metric.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Powerful <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">AI Features</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Harness the power of artificial intelligence to revolutionize your customer support operations
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-blue-300 transition-colors">
                    {feature.title}
                  </h3>
                  
                  <p className="text-gray-400 mb-6 group-hover:text-gray-300 transition-colors">
                    {feature.description}
                  </p>
                  
                  <div className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
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
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Simple <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Pricing</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect plan for your support team. All plans include our core AI features with no hidden fees.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-slate-800/50 p-8 rounded-xl border transition-all duration-300 hover:scale-105 hover:shadow-xl ${
                  plan.popular 
                    ? 'border-blue-500 shadow-blue-500/20' 
                    : 'border-slate-700 hover:border-blue-500'
                }`}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-blue-500 to-green-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-400 mb-6">{plan.description}</p>
                    
                    <div className="flex items-center justify-center mb-4">
                      <span className="text-5xl font-bold text-white">${plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    
                    <div className="flex items-center justify-center">
                      <span className="text-lg text-gray-400 line-through mr-2">${plan.originalPrice}</span>
                      <span className="text-sm text-green-400 font-semibold">
                        {Math.round((1 - plan.price / plan.originalPrice) * 100)}% OFF
                      </span>
                    </div>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircleIcon className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <button className={`w-full py-4 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700 text-white'
                      : 'bg-slate-700 hover:bg-slate-600 text-white'
                  }`}>
                    {plan.name === 'Enterprise' ? 'Contact Sales' : 'Start Free Trial'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Integrations Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Seamless <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Integrations</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your existing tools and platforms for a unified support experience
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
              {integrations.map((integration, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{integration.logo}</div>
                  <h3 className="text-sm font-semibold text-white mb-2 group-hover:text-blue-300 transition-colors">
                    {integration.name}
                  </h3>
                  <p className="text-xs text-gray-400 group-hover:text-gray-300 transition-colors">
                    {integration.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Perfect for <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Every Industry</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our AI support solution adapts to your industry and specific customer needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="group bg-slate-800/50 p-6 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{useCase.icon}</div>
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-400 mb-4 group-hover:text-gray-300 transition-colors">
                    {useCase.description}
                  </p>
                  <div className="space-y-2">
                    {useCase.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                        <CheckCircleIcon className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-slate-800/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                Trusted by <span className="bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">Support Teams</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our customers say about AI Customer Support Pro
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover:border-blue-500 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <StarIcon key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-gray-400 text-sm">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-blue-900/40 via-slate-900 to-green-900/40">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-green-400 bg-clip-text text-transparent">
              Ready to Transform Your Customer Support?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of support teams already using AI Customer Support Pro to deliver exceptional customer experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-600 to-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-700 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-blue-500/25">
                Start Free Trial
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300">
                Schedule Demo
              </button>
            </div>
            <div className="mt-8 text-sm text-gray-400">
              <p>📞 <strong>Phone:</strong> +1 302 464 0950 | ✉️ <strong>Email:</strong> kleber@ziontechgroup.com</p>
              <p>📍 <strong>Address:</strong> 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AICustomerSupportProPage;