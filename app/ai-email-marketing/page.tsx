import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Target, DollarSign, Users, BarChart3, Mail, Zap, Send, Eye, MousePointer, TrendingUp, Palette, Smartphone, Star, CheckCircle, ArrowRight } from 'lucide-react';

const AiEmailMarketingPage: React.FC = () => {
  const features = [
    "AI-powered email content generation",
    "Advanced audience segmentation and targeting",
    "Automated A/B testing and optimization",
    "Predictive send time optimization",
    "Dynamic content personalization",
    "Advanced analytics and reporting",
    "Email template library with AI suggestions",
    "Spam score optimization",
    "Multi-channel campaign coordination",
    "ROI tracking and attribution modeling"
  ];

const integrations = [
    { name: "Shopify", icon: <Target className="w-6 h-6" />, color: "text-green-600" },
    { name: "WooCommerce", icon: <DollarSign className="w-6 h-6" />, color: "text-purple-600" },
    { name: "Salesforce", icon: <Users className="w-6 h-6" />, color: "text-blue-600" },
    { name: "HubSpot", icon: <BarChart3 className="w-6 h-6" />, color: "text-orange-600" },
    { name: "Mailchimp", icon: <Mail className="w-6 h-6" />, color: "text-yellow-600" },
    { name: "Zapier", icon: <Zap className="w-6 h-6" />, color: "text-red-600" }
  ];

const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "month",
      description: "Perfect for small businesses and startups",
      features: [
        "5,000 emails/month",
        "Basic AI features",
        "Email templates",
        "Basic analytics",
        "Email support",
        "1 user account"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$99",
      period: "month",
      description: "Ideal for growing businesses",
      features: [
        "25,000 emails/month",
        "Advanced AI features",
        "Custom templates",
        "Advanced analytics",
        "Priority support",
        "5 user accounts",
        "A/B testing",
        "Automation workflows"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$299",
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited emails",
        "Full AI suite",
        "White-label options",
        "Custom analytics",
        "24/7 phone support",
        "Unlimited users",
        "Advanced automation",
        "API access",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

const stats = [
    { number: "2M+", label: "Emails Sent Daily", icon: <Send className="w-6 h-6" /> },
    { number: "35%", label: "Higher Open Rates", icon: <Eye className="w-6 h-6" /> },
    { number: "50%", label: "More Clicks", icon: <MousePointer className="w-6 h-6" /> },
    { number: "300%", label: "ROI Improvement", icon: <TrendingUp className="w-6 h-6" /> }
  ];

const benefits = [
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "300% ROI Improvement",
      description: "AI-powered optimization increases email marketing ROI significantly"
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Advanced Targeting",
      description: "Precise audience segmentation and behavioral targeting"
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Beautiful Templates",
      description: "AI-generated email designs that convert better"
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobile Optimized",
      description: "Perfect rendering across all devices and email clients"
    }
  ];
  return (
    <>
      <Helmet>
        <title>AI Email Marketing - Zion Tech Group | Intelligent Email Marketing Platform</title>
        <meta name="description" content="Revolutionary AI-powered email marketing platform. Increase open rates by 35%, clicks by 50%, and ROI by 300%. Start your free trial today!" />
        <meta name="keywords" content="AI email marketing, email automation, email campaigns, email analytics, email personalization, email marketing platform" />
        <meta property="og:title" content="AI Email Marketing - Zion Tech Group" />
        <meta property="og:description" content="Transform your email marketing with AI-powered automation and optimization." />
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
                #1 AI Email Marketing Platform
              </div>
              
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 leading-tight">
                <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  AI Email
                </span>
                <br />
                <span className="text-white">Marketing</span>
              </h1>
              
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                Revolutionize your email marketing with AI-powered automation. 
                Increase open rates by 35%, clicks by 50%, and ROI by 300% 
                with intelligent content generation and optimization.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                  <Zap className="w-5 h-5 mr-2" />
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                  <BarChart3 className="w-5 h-5 mr-2" />
                  View Demo
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
                  Why Choose AI Email Marketing?
                </span>
              </h2>
              
          <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                Transform your email marketing with AI-powered automation and optimization
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
                Everything you need to create, send, and optimize high-converting email campaigns
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
        {/* Integrations Section */}
        <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
          
        <div className="container mx-auto px-4">
            
        <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Seamless Integrations</h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Connect with your favorite tools and platforms
              </p>
            </div>
            
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="text-center group">
                  
        <div className="w-20 h-20 bg-gradient-to-r from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-cyan-500/20 group-hover:border-cyan-400/40">
                    <div className={integration.color}>{integration.icon}</div>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{integration.name}</h3>
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
                Choose the plan that fits your email volume and business needs
              </p>
            </div>
            
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                  plan.popular 
                    ? 'border-cyan-400/50 shadow-2xl shadow-cyan-500/10' 
                    : 'border-cyan-500/20 hover:border-cyan-400/40'
                } transition-all duration-300 hover:transform hover:scale-105`}>
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
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
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
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your Email Marketing?</h2>
              
          <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our AI-powered email marketing platform.
              </p>
              
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  Start Free Trial
                </button>
                
          <a href="tel:+13024640950" className="text-purple-400 hover:text-purple-300">
                  <Target className="w-5 h-5 mr-2" />
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
export default AiEmailMarketingPage;