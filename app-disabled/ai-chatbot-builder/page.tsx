'use client';
import React from 'react';
import {Helmet}}from 'react-helmet-async';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings}}from 'lucide-react';
const AiChatbotBuilderPage: React.FC = () => {,
    const features = [
    {
      icon: Brain,
      title: 'AI-Powered Intelligence',
      description: 'Advanced AI algorithms that provide intelligent insights and recommendations.',
      benefits: ['Smart recommendations', 'Predictive analytics', 'Automated insights', 'Real-time analysis']},
    {icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Comprehensive analytics dashboard with real-time data visualization.',
      benefits: ['Real-time dashboards', 'Custom reports', 'Data visualization', 'Performance metrics']},
    {icon: Target,
      title: 'Precision Targeting',
      description: 'Target specific goals and objectives with precision and accuracy.',
      benefits: ['Goal tracking', 'Performance optimization', 'Strategic planning', 'Success metrics']},
    {icon: TrendingUp,
      title: 'Growth Optimization',
      description: 'Optimize your business growth with data-driven strategies.',
      benefits: ['Growth strategies', 'Market analysis', 'Competitive insights', 'ROI optimization']}}
  ]
const benefits = [
    'Increase efficiency by up to 50%',
    'Reduce costs by 30% with automation',;
    'Improve decision-making with AI insights',;
    'Scale operations without proportional staff increases',;
    'Gain competitive advantage with advanced technology';
  ]
return(<>)
      <Helmet />
        <title>Ai Chatbot Builder - Zion Tech Group</title>
        <meta />
        <meta />
      </Helmet>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
        {/* Hero Section */} <section$1>
        <div$2></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' ,}} /></div>
          <div className="relative max-w-7xl mx-auto text-center"></div>
            <h1>Ai Chatbot Builder;</h1>
            </h1>
            <p>Advanced AI-powered ai chatbot builder solution for modern businesses.;</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
              <button>Get Started;</button>
              </button>
              <button>View Demo,</button>
              </button>
            </div>
        </div>
      </section>
        {/* Features Section */} <section$1>
        <div$2></div>
            <div className="text-center mb-16"></div>
              <h2>Key Features;</h2>
              </h2>
              <p>Advanced AI technology that drives results;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-4 gap-8"></div>,
              {features.map((feature, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <feature>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description</p>}</p>
                  {feature.benefits && (;
                    <ul>
                      {feature.benefits.map((benefit, idx) => (} <li>
                          <CheckCircle />

import React, {useState, useEffect}from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import {MessageCircle, Bot, Zap, Shield, CheckCircle, Star, ArrowRight, Brain, Globe, Users, Settings, BarChart}}from 'lucide-react';

const AIChatbotBuilder: React.FC = () => {,
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);}, []);

  const features = [
    {icon: Bot,
      title: 'No-Code Builder',
      description: 'Create intelligent chatbots without any programming knowledge',
      benefits: ['Drag & drop interface', 'Visual flow builder', 'Pre-built templates']},
    {icon: Brain,
      title: 'AI-Powered Responses',
      description: 'Natural language processing for human-like conversations',
      benefits: ['Context awareness', 'Sentiment analysis', 'Multi-language support']},
    {icon: Globe,
      title: '50+ Languages',
      description: 'Deploy chatbots in multiple languages for global reach',
      benefits: ['Auto-translation', 'Cultural adaptation', 'Local dialects']},
    {icon: BarChart,
      title: 'Analytics Dashboard',
      description: 'Track performance with detailed analytics and insights',
      benefits: ['Conversation metrics', 'User satisfaction', 'Conversion tracking']},
    {icon: Settings,
      title: 'Easy Integration',
      description: 'Connect with your existing tools and platforms',
      benefits: ['CRM integration', 'Live chat handoff', 'API access']},
    {icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-level security with data protection and compliance',
      benefits: ['GDPR compliant', 'SOC 2 certified', 'End-to-end encryption']}];

  const useCases = [
    {title: 'Customer Support',
      description: '24/7 automated customer service with instant responses',
      icon: MessageCircle,
      benefits: ['Reduce support tickets by 70%', 'Instant response time', '24/7 availability']},
    {title: 'Lead Generation',
      description: 'Qualify and capture leads automatically',
      icon: Users,
      benefits: ['Qualify leads instantly', 'Capture contact information', 'Schedule appointments']},
    {title: 'Sales Assistant',
      description: 'Guide customers through the sales process',
      icon: BarChart,
      benefits: ['Product recommendations', 'Price inquiries', 'Order processing']},
    {title: 'Internal Support',
      description: 'Help employees with HR and IT questions',
      icon: Settings,
      benefits: ['HR policy questions', 'IT troubleshooting', 'Employee onboarding']}];

  const pricingPlans = [
    {name: 'Starter',
      price: '$79',
      period: '/month',
      description: 'Perfect for small businesses',
      features: [,
        '1 chatbot',
        '1,000 conversations/month',
        'Basic AI responses',
        'Email support',
        'Standard templates'
      ],
      popular: false;,},
    {name: 'Professional',
      price: '$149',
      period: '/month',
      description: 'Ideal for growing companies',
      features: [,
        '5 chatbots',
        '10,000 conversations/month',
        'Advanced AI features',
        'Priority support',
        'Custom integrations',
        'Analytics dashboard'
      ],
      popular: true;,},
    {name: 'Enterprise',
      price: '$299',
      period: '/month',
      description: 'For large organizations',
      features: [,
        'Unlimited chatbots',
        'Unlimited conversations',
        'Custom AI training',
        '24/7 phone support',
        'White-label options',
        'Dedicated account manager'
      ],
      popular: false;,}];

  const testimonials = [
    {name: 'David Kim',
      role: 'Customer Success Manager, TechFlow',
      content: 'Our chatbot handles 80% of customer inquiries automatically. Customer satisfaction increased by 40%.',
      rating: 5;,},
    {name: 'Lisa Martinez',
      role: 'Marketing Director, GrowthHub',
      content: 'The lead generation chatbot has increased our qualified leads by 250%. Setup was incredibly easy.',
      rating: 5;,},
    {name: 'James Wilson',
      role: 'CEO, StartupXYZ',
      content: 'We saved $50,000 annually in support costs. The AI responses are so natural, customers love it.',
      rating: 5;,}];

  return(<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid-enhanced neural-network-bg matrix-bg quantum-particles">)</div>
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">{/* Hero Section */</main>} <section className={`text-center mb-16 transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-flex items-center space-x-2 bg-green-500/10 border border-green-500/20 rounded-full px-4 py-2 mb-6">
            <Bot className="w-4 h-4 text-green-400" />
            <span className="text-green-400 text-sm font-medium">AI Chatbot Platform</span>
          </div>
          
          <h1 className="text-4xl md: text-6xl font-bold text-white mb-6 neon-text">,</h1>
            AI Chatbot Builder;
          </h1>
          
          <p className="text-xl md: text-2xl text-green-400 mb-8 font-medium">,</p>
            Create Intelligent Chatbots in Minutes;
          </p>
          
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">Build powerful AI chatbots for customer support, lead generation, and sales automation.</p>
            No coding required. Deploy in 50+ languages with enterprise-grade security.
          </p>

          <div className="flex flex-col sm: flex-row gap-4 justify-center items-center mb-16">,</div>
            <a;
              href="tel: +13024640950",
              className="cyber-button w-full sm: w-auto text-center",
            >
              📞 Call Now: (302) 464-0950;,
            </a>
            <a;
              href="/contact"
              className="cyber-button w-full sm: w-auto text-center",
              style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
            >
              Start Building Free;
            </a>
          </div>

          {/* Key Stats */} <div className="grid grid-cols-1 sm: grid-cols-3 gap-8 max-w-4xl mx-auto">,</div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">70%</div>
              <div className="text-gray-300">Reduction in Support Tickets</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">50+</div>
              <div className="text-gray-300">Languages Supported</div>
            </div>
            <div className="hologram-card-enhanced p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">5 min</div>
              <div className="text-gray-300">Setup Time</div>
import { CheckCircle, ArrowRight, Star, Clock, Zap, Shield, Brain, BarChart, Target, TrendingUp, Globe, Database, Users, Settings, MessageCircle } from 'lucide-react';

const AiChatbotBuilderPage: React.FC = () => {
  const features = [
    {
      icon: Brain,
      title: 'No-Code Builder',
      description: 'Create sophisticated chatbots without any coding knowledge.',
      benefits: ['Drag-and-drop interface', 'Visual workflow builder', 'Pre-built templates', 'Easy customization'];
    },
    {
      icon: MessageCircle,
      title: 'Multi-Channel Support',
      description: 'Deploy your chatbot across multiple platforms and channels.',
      benefits: ['Website integration', 'Social media bots', 'Mobile apps', 'API integration']
    },
    {
      icon: BarChart,
      title: 'Advanced Analytics',
      description: 'Track performance and optimize your chatbot with detailed analytics.',
      benefits: ['Conversation analytics', 'User engagement metrics', 'Performance insights', 'A/B testing']
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Built with enterprise-grade security and compliance features.',
      benefits: ['Data encryption', 'GDPR compliance', 'SOC 2 certified', 'Secure hosting']
    },
  ];];];
  const useCases = [
    {
      title: 'Customer Support',
      description: 'Provide 24/7 customer support with intelligent responses.',
      benefits: ['Instant responses', 'Reduced support costs', 'Improved satisfaction', 'Scalable support'];
    },
    {
      title: 'Lead Generation',
      description: 'Capture and qualify leads automatically.',
      benefits: ['Qualified leads', 'Higher conversion rates', 'Automated follow-up', 'Lead scoring']
    },
    {
      title: 'E-commerce Assistant',
      description: 'Help customers find products and complete purchases.',
      benefits: ['Product recommendations', 'Order assistance', 'Inventory queries', 'Checkout support']
    },
    {
      title: 'Internal Support',
      description: 'Streamline internal processes and employee support.',
      benefits: ['HR assistance', 'IT support', 'Process automation', 'Knowledge base']
    },
  ];

  return (
    <>
  </>
      <Helmet>
        <title>AI Chatbot Builder - Zion Tech Group</title>
        <meta name="description" content="Build intelligent chatbots without coding. Create, deploy, and manage AI-powered chatbots for customer support, lead generation, and more." />
        <meta name="keywords" content="AI chatbot builder, no-code chatbot, conversational AI, chatbot platform" />
      </Helmet>
      <Navigation />
      
      <main className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section$1>
        <div$2>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(59,130,246,0.3)_0%,transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Ai Chatbot Builder
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Advanced AI-powered ai chatbot builder solution for modern businesses.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-blue-600 hover:from-purple-600 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Get Started
              </button>
              <button className="border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white font-bold py-4 px-8 rounded-lg transition-all duration-300">
                View Demo
              </button>
            </div>
        </div>
      </section>

        {/* Features Section */}
        <section$1>
        <div$2>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Key Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology that drives results
              </p>
            </div>
        {/* Features Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Powerful Features;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8">,</div>
            {features.map((feature, index) => (
              <div key={index}className="hologram-card-enhanced p-6 hover: scale-105 transition-all duration-300">,</div>
                <div className="text-4xl mb-4 text-green-400">
                  <feature.icon className="w-10 h-10" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-gray-300 mb-4 leading-relaxed">{feature.description</p>}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx}className="flex items-center text-sm text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                      {benefit} </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Use Cases Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Use Cases;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-2 gap-8">,</div>
            {useCases.map((useCase, index) => (
              <div key={index}className="hologram-card-enhanced p-8 hover: scale-105 transition-all duration-300">,</div>
                <div className="flex items-start space-x-4">
                  <div className="text-4xl text-green-400">
                    <useCase.icon className="w-10 h-10" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-3">{useCase.title}</h3>
                    <p className="text-gray-300 mb-4 leading-relaxed">{useCase.description</p>}</p>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, idx) => (
                        <li key={idx}className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                          {benefit} </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

            </div>
        </div>
      </section>

        {/* Benefits Section */}
        <section$1>
        <div$2>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Why Choose Our Solution?
              </h2>
              <p>Proven results that drive business growth and efficiency;</p>
              </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-3 gap-8"></div>,
              {benefits.map((benefit, index) => (} <div key={index}className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover: bg-white/10 transition-all duration-300 group"></div>,
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform"></div>,
                    <CheckCircle />
                  </div>
                  <p className="text-lg text-white font-medium">{benefit</p>}</p>
      </main>
    </>
  );
}
      </main>
    </>
  );
}
      </main>
    </>
  );
}
        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful Features
              </h2>
              <p className="text-xl text-gray-300">
                Everything you need to build and deploy intelligent chatbots
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <feature.icon className="w-12 h-12 text-blue-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {feature.description}
                  </p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          ))
        </section>

        {/* CTA Section */}
        <section$1>
        <div$2>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300">
                Discover how chatbots can transform your business
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {useCase.title}
                  </h3>
                  <p className="text-gray-300 mb-4">
                    {useCase.description}
                  </p>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
        </div>
      </section>
        {/* CTA Section */} <section$1>
        <div$2></div>
            <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-12"></div>
              <h2>Ready to Get Started?;</h2>
              </h2>
              <p>Contact our experts to discuss your requirements and get started today.;</p>
              </p>
              <div className="flex flex-col sm: flex-row gap-4 justify-center"></div>,
                <button>Contact Us;</button>
                </button>
                <button>Learn More;</button>
                </button>
              </div>
            </div>
          ))
        </section>
      </div>
      <Footer>
    </>
  ),
}
export default AiChatbotBuilderPage;

                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Pricing Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Simple Pricing;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8 max-w-6xl mx-auto">,</div>
            {pricingPlans.map((plan, index) => (
              <div key={index}className={`hologram-card-enhanced p-8 relative ${
                plan.popular ? 'ring-2 ring-green-400 scale-105' : ''}`}>{plan.popular && (</div>
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-green-400 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-medium">Most Popular;</div>
                    </div>
                  </div>
                )} <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description</p>}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-green-400">{plan.price</span>}</span>
                    <span className="text-gray-400 ml-1">{plan.period</span>}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx}className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature} </li>
                  ))}
                </ul>
                
                <a;
                  href="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular;
                      ? 'bg-gradient-to-r from-green-400 to-cyan-500 text-white hover: from-green-500 hover:to-cyan-600',
                      : 'bg-gray-800 text-white hover: bg-gray-700 border border-gray-600',}`}
                >
                  Get Started;
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */} <section className="mb-16">
          <h2 className="text-3xl md: text-4xl font-bold text-white mb-4 text-center neon-text mb-12">,</h2>
            Customer Success Stories;
          </h2>
          
          <div className="grid grid-cols-1 md: grid-cols-3 gap-8">,</div>
            {testimonials.map((testimonial, index) => (
              <div key={index}className="hologram-card-enhanced p-6">
                <div className="flex items-center mb-4">{[...Array(testimonial.rating)].map((_, i) => (</div>
                    <Star key={i}className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4 italic">"{testimonial.content</p>}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name</div>}</div>
                  <div className="text-sm text-gray-400">{testimonial.role</div>}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */} <section className="text-center">
          <div className="hologram-card-enhanced p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl md: text-4xl font-bold text-white mb-6">,</h2>
              Ready to Build Your AI Chatbot?
            </h2>
            <p className="text-xl text-gray-300 mb-8">Join thousands of businesses using our platform to automate customer interactions and boost efficiency.</p>
            </p>
            <div className="flex flex-col sm: flex-row gap-4 justify-center">,</div>
              <a;
                href="tel: +13024640950",
                className="cyber-button w-full sm: w-auto text-center",
              >
                📞 Call (302) 464-0950;
              </a>
              <a;
                href="mailto: kleber@ziontechgroup.com",
                className="cyber-button w-full sm: w-auto text-center",
                style={{background: 'linear-gradient(45deg, #10b981, #059669)'}}
              >
                Email Us;
              </a>
            </div>
        </div>
      </section>
      </main>
      
      <Footer />

  );
};
                          {benefit}
                        </li>
                      ))}
                    </ul>
