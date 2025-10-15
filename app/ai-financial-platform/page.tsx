import { useState, useEffect } from "react";
import { Helmet } from 'react-helmet-async';
import { Brain, CreditCard, BarChart3, Shield, Calculator, TrendingUp, Eye, Receipt, DollarSign, Phone, Play, CheckCircle, Star, Mail } from 'lucide-react';

const AiFinancialPlatformPage: React.FC = () => { const [isVisible, setIsVisible] = useState(false); useEffect(() => { setIsVisible(true); }, []);

const features = [ { icon: <Brain className="w-6 h-6" />, title: "AI Financial Analysis", description: "Advanced machine learning algorithms that analyze market trends, predict investment opportunities, and provide personalized financial advice.", benefits: ["Market prediction", "Risk assessment", "Portfolio optimization", "Investment recommendations"] }, { icon: <CreditCard className="w-6 h-6" />, title: "Smart Payment Processing", description: "Intelligent payment gateway with fraud detection, automated reconciliation, and multi-currency support.", benefits: ["Fraud detection", "Auto-reconciliation", "Multi-currency", "Real-time processing"] }, { icon: <BarChart3 className="w-6 h-6" />, title: "Real-time Analytics", description: "Comprehensive financial dashboards with real-time data visualization, KPI tracking, and automated reporting.", benefits: ["Real-time data", "Custom dashboards", "KPI tracking", "Automated reports"] }, { icon: <Shield className="w-6 h-6" />, title: "Bank-level Security", description: "Enterprise-grade security with encryption, compliance management, and advanced fraud prevention.", benefits: ["End-to-end encryption", "PCI DSS compliance", "Fraud prevention", "Audit trails"] }, { icon: <Calculator className="w-6 h-6" />, title: "Automated Accounting", description: "AI-powered bookkeeping with automated categorization, tax preparation, and financial statement generation.", benefits: ["Auto-categorization", "Tax preparation", "Financial statements", "Compliance reporting"] }, { icon: <TrendingUp className="w-6 h-6" />, title: "Investment Management", description: "Intelligent portfolio management with automated rebalancing, risk assessment, and performance optimization.", benefits: ["Portfolio rebalancing", "Risk management", "Performance tracking", "Tax optimization"] } ];


export default function Page() {
const aiCapabilities = [ { title: "Credit Risk Assessment", description: "AI-powered credit scoring and risk analysis for lending decisions", icon: <Shield className="w-8 h-8" />, accuracy: "98.5%" }, { title: "Fraud Detection", description: "Real-time fraud detection using machine learning and behavioral analysis", icon: <Eye className="w-8 h-8" />, accuracy: "99.7%" }, { title: "Market Prediction", description: "Predictive analytics for market trends and investment opportunities", icon: <TrendingUp className="w-8 h-8" />, accuracy: "87.3%" }, { title: "Tax Optimization", description: "AI-driven tax planning and optimization strategies", icon: <Receipt className="w-8 h-8" />, accuracy: "94.2%" } ];

const pricingPlans = [ { name: "Startup", price: "$299", period: "month", description: "Perfect for small businesses and startups", features: [ "Basic financial analytics", "Payment processing", "Basic accounting", "Email support", "Up to 1,000 transactions", "Standard security", "Basic reporting" ], popular: false }, { name: "Professional", price: "$699", period: "month", description: "Ideal for growing businesses and financial institutions", features: [ "Advanced AI analytics", "Full payment suite", "Advanced accounting", "Priority support", "Up to 10,000 transactions", "Advanced security", "Custom integrations", "Multi-currency support" ], popular: true }, { name: "Enterprise", price: "$1,499", period: "month", description: "Complete solution for large financial organizations", features: [ "Full AI capabilities", "Custom payment solutions", "Enterprise accounting", "24/7 dedicated support", "Unlimited transactions", "Bank-level security", "Custom development", "On-premise deployment" ], popular: false } ];

const testimonials = [ { name: "Jennifer Martinez", company: "FinTech Solutions", role: "CFO", content: "The AI financial platform has revolutionized our operations. We've reduced processing time by 60% and improved accuracy by 95%.", rating: 5 }, { name: "David Chen", company: "Investment Group", role: "Portfolio Manager", content: "The investment management features have helped us optimize our portfolios and increase returns by 25% while reducing risk.", rating: 5 }, { name: "Sarah Johnson", company: "Regional Bank", role: "Risk Manager", content: "The fraud detection system has prevented millions in potential losses. The accuracy and speed are exceptional.", rating: 5 } ];

const integrations = [ { name: "QuickBooks", logo: "📊" }, { name: "Xero", logo: "📈" }, { name: "Stripe", logo: "💳" }, { name: "PayPal", logo: "💰" }, { name: "Square", logo: "⬜" }, { name: "Wise", logo: "🌍" }, { name: "Revolut", logo: "🔄" }, { name: "Plaid", logo: "🔗" }, { name: "Yodlee", logo: "📱" }, { name: "Bloomberg", logo: "📰" }, { name: "Reuters", logo: "📡" }, { name: "TradingView", logo: "📊" } ];
  return (
    <> <Helmet> <title>AI Financial Platform - Intelligent Financial Solutions | Zion Tech Group</title> <meta name="description" content="Transform financial operations with our AI-powered platform. Advanced analytics, payment processing, and investment management for modern businesses." /> <meta name="keywords" content="AI financial platform, fintech, payment processing, financial analytics, investment management, fraud detection" /> <meta property="og:title" content="AI Financial Platform - Zion Tech Group" /> <meta property="og:description" content="Intelligent financial platform with AI-powered analytics and payment processing" /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://ziontechgroup.com/ai-financial-platform" /> </Helmet> 
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden"> { /* Animated Background */ } 
        <div className="absolute inset-0"> 
        <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div> 
        <div className="absolute top-40 right-10 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div> 
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-orange-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div> </div>
        { /* Grid Pattern */ }
        
        <div className="absolute inset-0 opacity-20">
          
        <div className="h-full w-full"></div>
        </div>
        <main className="relative z-10">
          { /* Hero Section */ }
          <section className="relative py-20 overflow-hidden">
            
        <div className="container mx-auto px-4">
              <div className={ `text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                
        <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
                  <DollarSign className="w-4 h-4 mr-2" />
                  #1 AI Financial Platform
                </div>
                
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-green-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
                    AI Financial Platform
                  </span>
                </h1>
                
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize financial operations with our AI-powered platform. 
                  Advanced analytics, payment processing, and investment management for modern businesses.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-green-500 to-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Get Financial Assessment
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          { /* Features Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                    Advanced Financial Features
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive financial solutions powered by artificial intelligence and modern technology.
                </p>
              </div>
              
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                { features.map((feature, index) => (
                  <div 
                    key={index } 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 neon-card">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      
        <div className="text-white">{ feature.icon }</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                      { feature.title }
                    </h3>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">
                      { feature.description }
                    </p>
                    
        <div className="space-y-2">
                      { feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          { benefit }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* AI Capabilities Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                    AI-Powered Intelligence
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Leverage cutting-edge AI technology to optimize financial operations and maximize returns.
                </p>
              </div>
              
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                { aiCapabilities.map((capability, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-yellow-600 rounded-xl flex items-center justify-center mb-6">
                      
        <div className="text-white">{ capability.icon }</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{ capability.title }</h3>
                    
          <p className="text-gray-300 mb-6">{ capability.description }</p>
                    
        <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      
        <div className="text-green-400 font-semibold text-sm">Accuracy: { capability.accuracy }</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Integrations Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                    Financial Integrations
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with your favorite financial tools and services for a complete ecosystem.
                </p>
              </div>
              
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                { integrations.map((integration, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    
        <div className="text-4xl mb-3">{ integration.logo }</div>
                    
        <div className="text-white font-semibold text-sm">{ integration.name }</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Pricing Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                    Financial Pricing Plans
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your financial needs and business requirements.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                { pricingPlans.map((plan, index) => (
                  <div 
                    key={index } 
                    className={ `relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-green-400/40 shadow-green-500/10' 
                        : 'border-green-500/20 hover:border-green-400/40' }`}
                  >
                    { plan.popular && (
                      
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        
        <div className="bg-gradient-to-r from-green-500 to-yellow-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    ) }
                    
        <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{ plan.name }</h3>
                      
          <p className="text-gray-300 mb-4">{ plan.description }</p>
                      
        <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-green-400">{ plan.price }</span>
                        <span className="text-gray-400 ml-2">/{ plan.period }</span>
                      </div>
                    </div>
                    
        <div className="space-y-4 mb-8">
                      { plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex } className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          { feature }
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={ `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-green-500 to-yellow-600 text-white hover:from-green-600 hover:to-yellow-700'
                          : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900' }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Testimonials Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-yellow-400 bg-clip-text text-transparent">
                    Financial Success Stories
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how financial institutions are transforming operations with our AI platform.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8">
                { testimonials.map((testimonial, index) => (
                  <div 
                    key={index } 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300">
                    
        <div className="flex items-center mb-4">
                      { [...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i } className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">
                      "{ testimonial.content }"
                    </p>
                    <div>
                      
        <div className="font-semibold text-white">{ testimonial.name }</div>
                      
        <div className="text-green-400">{ testimonial.role }</div>
                      
        <div className="text-gray-400 text-sm">{ testimonial.company }</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* CTA Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Transform Your Financial Operations
                </h2>
                
          <p className="text-xl text-gray-300 mb-8">
                  Join the financial revolution and optimize your operations with our AI-powered platform.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-green-500 to-yellow-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-yellow-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Financial Assessment
                  </a>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};
export default AiFinancialPlatformPage;