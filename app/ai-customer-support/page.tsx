import React from 'react';
import { Helmet } from 'react-helmet-async';
import { MessageSquare, Mail, Phone, Globe, MessageCircle, Star, Bot, Clock, TrendingUp, Shield, Users, Zap, Headphones, CheckCircle, ArrowRight } from 'lucide-react';

const AiCustomerSupportPage: React.FC = () => {
  const features = [
    "AI-powered chatbot with natural language processing",
    "24/7 automated customer support",
    "Multi-language support (50+ languages)",
    "Intelligent ticket routing and prioritization",
    "Sentiment analysis and emotion detection",
    "Knowledge base integration and auto-updates",
    "Live chat handoff to human agents",
    "Voice support with speech recognition",
    "Omnichannel support across all platforms",
    "Advanced analytics and performance insights"
  ];

const channels = [
    { name: "Live Chat", icon: <MessageSquare className="w-6 h-6" />, color: "text-blue-600" },
    { name: "Email", icon: <Mail className="w-6 h-6" />, color: "text-red-600" },
    { name: "Phone", icon: <Phone className="w-6 h-6" />, color: "text-green-600" },
    { name: "Social Media", icon: <Globe className="w-6 h-6" />, color: "text-purple-600" },
    { name: "Mobile App", icon: <MessageCircle className="w-6 h-6" />, color: "text-cyan-600" },
    { name: "WhatsApp", icon: <MessageSquare className="w-6 h-6" />, color: "text-green-500" }
  ];

const pricingPlans = [
    {
      name: "Starter",
      price: "$39",
      period: "month",
      description: "Perfect for small businesses",
      features: [
        "1,000 conversations/month",
        "Basic AI chatbot",
        "Email support",
        "5 team members",
        "Basic analytics",]
        "Standard integrations"]
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$149",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "10,000 conversations/month",
        "Advanced AI chatbot",
        "Priority support",
        "25 team members",
        "Advanced analytics",
        "Custom integrations",
        "Voice support",]
        "Multi-language support"]
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$399",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited conversations",
        "Full AI suite",
        "24/7 phone support",
        "Unlimited team members",
        "Custom analytics",
        "White-label options",
        "API access",
        "Dedicated account manager",]
        "Custom AI training"]
      ],
      popular: false
    }
  ];

const stats = [
    { number: "95%", label: "Customer Satisfaction", icon: <Star className="w-6 h-6" /> },
    { number: "80%", label: "Issues Resolved Automatically", icon: <Bot className="w-6 h-6" /> },
    { number: "24/7", label: "Always Available", icon: <Clock className="w-6 h-6" /> },
    { number: "50+", label: "Languages Supported", icon: <Globe className="w-6 h-6" /> }
  ];

const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "80% Faster Response Times",
      description: "AI-powered automation reduces response times and improves customer satisfaction"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "24/7 Availability",
      description: "Never miss a customer inquiry with round-the-clock AI support"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Scalable Support",
      description: "Handle unlimited customer inquiries without additional staff"
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Omnichannel Experience",
      description: "Provide consistent support across all customer touchpoints"
    }
  ];
  return (
    <>
      <Helmet>
        <title>AI Customer Support - Zion Tech Group | Intelligent Customer Service Platform</title>
        <meta name="description" content="Revolutionary AI-powered customer support platform. Automate responses, provide 24/7 support, and boost customer satisfaction by 95%. Start your free trial today!" />
        <meta name="keywords" content="AI customer support, chatbot, customer service automation, live chat, omnichannel support, customer satisfaction" />
        <meta property="og:title" content="AI Customer Support - Zion Tech Group" />
        <meta property="og:description" content="Transform your customer support with AI-powered automation and intelligence." />
        <meta property="og:type" content="website" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          
        <div className="absolute inset-0">
            
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>
          
        <div className="container mx-auto px-4 relative z-10">
            
        <div className="text-center max-w-6xl mx-auto">
              
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                <Star className="w-4 h-4 mr-2" />
                #1 AI Customer Support Platform
              </div>
              
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Customer
                </span>
                <br />
                <span className="text-white">Support</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Revolutionize your customer support with AI-powered automation. 
                Provide 24/7 intelligent support, resolve 80% of issues automatically, 
                and boost customer satisfaction to 95%.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <Headphones className="w-5 h-5 mr-2" />
                  Watch Demo
                </button>
              </div>
              {/* Stats */}
              
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      
        <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    
        <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    
        <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        {/* Benefits Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Why Choose AI Customer Support?
                </span>
              </h2>
              
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your customer support with AI-powered automation and intelligent insights
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center group">
                  
        <div className="w-20 h-20 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    
        <div className="text-white">{benefit.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                  
          <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Features Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Powerful Features</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to provide exceptional customer support with AI assistance
              </p>
            </div>
            
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-6 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                  
        <div className="flex items-start space-x-4">
                    
        <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center flex-shrink-0 mt-1">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white mb-2">{feature}</h3>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Channels Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Omnichannel Support</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Provide consistent support across all customer touchpoints
              </p>
            </div>
            
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {channels.map((channel, index) => (
                <div key={index} className="text-center group">
                  
        <div className="w-20 h-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20 group-hover:border-cyan-400/40">
                    <div className={channel.color}>{channel.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{channel.name}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Pricing Section */}
        <section className="py-20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Simple, Transparent Pricing</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your support volume and team size
              </p>
            </div>
            
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-cyan-500/20 hover: border-cyan-400/40'
                } transition-all duration-300 hover: transform hover:scale-105`}>
                  {plan.popular && (
                    
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                        Most Popular
                      </div>
                    </div>
                  )}
                  
        <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    
        <div className="flex items-baseline justify-center mb-2">
                      <span className="text-5xl font-bold text-cyan-400">{plan.price}</span>
                      <span className="text-gray-400 ml-2">/{plan.period}</span>
                    </div>
                    
          <p className="text-gray-300">{plan.description}</p>
                  </div>
                  
        <div className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-slate-900'
                  }`}>
                    {plan.popular ? 'Get Started' : 'Choose Plan'}
                    <ArrowRight className="w-4 h-4 ml-2 inline" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Support?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI-powered customer support platform.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                
          <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                  <Headphones className="w-5 h-5 mr-2" />
                  Call +1 302 464 0950
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};
export default AiCustomerSupportPage;