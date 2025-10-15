import { Zap, Shield, BarChart3, CheckCircle, Mail, Phone, Star, ArrowRight, Bot, Brain, Headphones, ShoppingCart, Cpu, Activity, Play, Helmet } from 'lucide-react';
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";

const AiCustomerSupportProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    setIsVisible(true);
  }, []);

const features = [
    {"
      icon: <Bot className="w-6 h-6" />,"
      title: "AI-Powered Chatbots","
      description: "Intelligent chatbots that understand context, provide instant responses, and escalate complex issues to human agents.","
      benefits: ["24/7 availability", "Instant responses", "Context awareness", "Multi-language support"]
    },
    {"
      icon: <Brain className="w-6 h-6" />,"
      title: "Natural Language Processing","
      description: "Advanced NLP capabilities that understand customer intent, sentiment, and provide personalized responses.","
      benefits: ["Intent recognition", "Sentiment analysis", "Personalization", "Emotion detection"]
    },
    {"
      icon: <Headphones className="w-6 h-6" />,"
      title: "Omnichannel Support","
      description: "Unified customer support across all channels including chat, email, phone, and social media.","
      benefits: ["Multi-channel integration", "Unified inbox", "Consistent experience", "Cross-channel history"]
    },
    {"
      icon: <BarChart3 className="w-6 h-6" />,"
      title: "Analytics & Insights","
      description: "Comprehensive analytics dashboard with customer satisfaction metrics, response times, and performance insights.","
      benefits: ["Real-time metrics", "Customer satisfaction", "Performance tracking", "Trend analysis"]
    },
    {"
      icon: <Shield className="w-6 h-6" />,"
      title: "Enterprise Security","
      description: "Bank-level security with encryption, access controls, and compliance with GDPR and other regulations.","
      benefits: ["End-to-end encryption", "Role-based access", "GDPR compliance", "Audit logs"]
    },
    {"
      icon: <Zap className="w-6 h-6" />,"
      title: "Automated Workflows","
      description: "Smart automation that routes tickets, assigns agents, and triggers follow-up actions based on predefined rules.","
      benefits: ["Smart routing", "Auto-assignment", "Escalation rules", "Workflow automation"]
    }
  ];
""
const pricingPlans = [ { name: "Starter", price: "$99", period: "month", description: "Perfect for small businesses starting with AI customer support", features: [ "Up to 1,000 conversations/month", "Basic AI chatbot", "Email & chat support", "Basic analytics", "Email support", "5 agents max" ], popular: false }, { name: "Professional", price: "$299", period: "month", description: "Ideal for growing companies with advanced support needs", features: [ "Up to 10,000 conversations/month", "Advanced AI chatbot", "Omnichannel support", "Advanced analytics", "Priority support", "25 agents max", "Custom integrations", "API access" ], popular: true }, { name: "Enterprise", price: "$599", period: "month", description: "Complete solution for large organizations with complex requirements", features: [ "Unlimited conversations", "Custom AI training", "All channels supported", "Full analytics suite", "24/7 dedicated support", "Unlimited agents", "Custom development", "On-premise deployment" ], popular: false } ];
""
const testimonials = [ { name: "Jennifer Martinez", company: "E-commerce Plus", role: "Customer Success Manager", content: "AI Customer Support Pro has reduced our response time by 80% and increased customer satisfaction by 45%. The AI chatbot handles 70% of inquiries automatically.", rating: 5 }, { name: "David Thompson", company: "TechStart Inc.", role: "VP of Operations", content: "The omnichannel support and analytics have given us unprecedented visibility into customer interactions. Our team productivity has increased significantly.", rating: 5 }, { name: "Sarah Johnson", company: "Global Services Ltd", role: "Head of Support", content: "The AI-powered automation and smart routing have streamlined our support operations. We can now handle 3x more tickets with the same team size.", rating: 5 } ];
""
const useCases = [ { title: "E-commerce Support", description: "Handle order inquiries, product questions, and returns with AI-powered assistance", icon: <ShoppingCart className="w-8 h-8" />, benefits: ["Order tracking", "Product recommendations", "Return processing", "Inventory queries"] }, { title: "SaaS Support", description: "Provide technical support and onboarding assistance for software products", icon: <Cpu className="w-8 h-8" />, benefits: ["Technical troubleshooting", "Feature explanations", "Onboarding guidance", "Bug reporting"] }, { title: "Financial Services", description: "Secure customer support for banking, insurance, and financial products", icon: <Shield className="w-8 h-8" />, benefits: ["Account inquiries", "Transaction support", "Compliance assistance", "Security alerts"] }, { title: "Healthcare Support", description: "HIPAA-compliant patient support and appointment scheduling", icon: <Activity className="w-8 h-8" />, benefits: ["Appointment scheduling", "Insurance verification", "Prescription inquiries", "Emergency routing"] } ];
  return (
    <>
      <Helmet> <title>AI Customer Support Pro - Intelligent Support Platform | Zion Tech Group</title> <meta name="description" content="Transform your customer support with AI-powered chatbots, omnichannel support, and intelligent automation. Reduce response times and increase satisfaction." /> <meta name="keywords" content="AI customer support, chatbot, omnichannel support, customer service automation, NLP, customer satisfaction" /> <meta property="og:title" content="AI Customer Support Pro - Zion Tech Group" /> <meta property="og:description" content="Intelligent customer support platform with AI-powered chatbots and omnichannel capabilities" /> <meta property="og:type" content="website" /> <meta property="og:url" content="https://ziontechgroup.com/ai-customer-support-pro" /> </Helmet>
      <div className="min-h-screen" bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden> { /* Animated Background */ } 
        <div className="absolute" inset-0> 
        <div className="absolute" top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse></div> 
        <div className="absolute" top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000></div> 
        <div className="absolute" bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000></div> </div>
        { /* Grid Pattern */ }
        
        <div className="absolute" inset-0 opacity-20>
          
        <div className="h-full" w-full></div>
        </div>
        <main className="relative" z-10>
          { /* Hero Section */ }
          <section className="relative" py-20 overflow-hidden>
            
        <div className="container" mx-auto px-4>
              <div className="{" `text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                
        <div className="inline-flex" items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8>
                  <Star className="w-4" h-4 mr-2 />
                  #1 AI Support Platform
                </div>
                
          <h1 className="text-5xl" md:text-7xl font-bold text-white mb-6 leading-tight>
                  <span className="bg-gradient-to-r" from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent>
                    AI Customer Support Pro
                  </span>
                </h1>
                
          <p className="text-xl" md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto>
                  Revolutionize your customer support with AI-powered chatbots, omnichannel capabilities, 
                  and intelligent automation. Reduce response times by 80% and increase satisfaction by 45%.
                </p>
                
        <div className="flex" flex-col sm:flex-row gap-4 justify-center mb-12>
                  <a"
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5" h-5 mr-2 />
                    Start Free Trial
                  </a>
                  <a"
                    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5" h-5 mr-2 />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>
          { /* Features Section */ }
          <section className="py-20" bg-gradient-to-b from-slate-800 to-slate-900 relative>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                    Intelligent Support Features
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Everything you need to provide exceptional customer support with AI-powered automation.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-2 lg:grid-cols-3 gap-8>
                { features.map((feature, index) => (
                  <div 
                    key={index } "
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card">
                    
        <div className="w-16" h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300>
                      
        <div className="text-white">{ feature.icon }</div>
                    </div>
                    <h3 className="text-2xl" font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300>
                      { feature.title }
                    </h3>
                    
          <p className="text-gray-300" mb-6 leading-relaxed>
                      { feature.description }
                    </p>
                    
        <div className="space-y-2">
                      { feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex" items-center text-sm text-gray-300>
                          <CheckCircle className="w-4" h-4 text-green-400 mr-2 flex-shrink-0 />
                          { benefit }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Use Cases Section */ }
          <section className="py-20" bg-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                    Perfect for Every Industry
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Our AI customer support solution adapts to your specific industry needs and requirements.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-2 lg:grid-cols-4 gap-8>
                { useCases.map((useCase, index) => (
                  <div 
                    key={index } "
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    
        <div className="w-16" h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6>
                      
        <div className="text-white">{ useCase.icon }</div>
                    </div>
                    <h3 className="text-xl" font-bold text-white mb-4>{ useCase.title }</h3>
                    
          <p className="text-gray-300" mb-6>{ useCase.description }</p>
                    
        <div className="space-y-2">
                      { useCase.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex } className="flex" items-center text-sm text-gray-300>
                          <CheckCircle className="w-4" h-4 text-green-400 mr-2 flex-shrink-0 />
                          { benefit }
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Pricing Section */ }
          <section className="py-20" bg-gradient-to-b from-slate-800 to-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                    Simple Pricing
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  Choose the plan that fits your support needs. All plans include our core AI features.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-3 gap-8 max-w-6xl mx-auto>
                { pricingPlans.map((plan, index) => (
                  <div 
                    key={index } 
                    className="{" `relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover:border-cyan-400/40' }`}
                  >
                    { plan.popular && (
                      
        <div className="absolute" -top-4 left-1/2 transform -translate-x-1/2>
                        
        <div className="bg-gradient-to-r" from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold>
                          Most Popular
                        </div>
                      </div>
                    ) }
                    
        <div className="text-center" mb-8>
                      <h3 className="text-2xl" font-bold text-white mb-2>{ plan.name }</h3>
                      
          <p className="text-gray-300" mb-4>{ plan.description }</p>
                      
        <div className="flex" items-baseline justify-center>
                        <span className="text-5xl" font-bold text-cyan-400>{ plan.price }</span>
                        <span className="text-gray-400" ml-2>/{ plan.period }</span>
                      </div>
                    </div>
                    
        <div className="space-y-4" mb-8>
                      { plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex } className="flex" items-center text-gray-300>
                          <CheckCircle className="w-5" h-5 text-green-400 mr-3 flex-shrink-0 />
                          { feature }
                        </div>
                      ))}
                    </div>
                    <a"
                      href="tel:+13024640950"
                      className="{" `w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900' }`}
                    >
                      Get Started
                      <ArrowRight className="w-4" h-4 ml-2 />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Testimonials Section */ }
          <section className="py-20" bg-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" mb-16>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  <span className="bg-gradient-to-r" from-cyan-400 to-purple-400 bg-clip-text text-transparent>
                    Customer Success Stories
                  </span>
                </h2>
                
          <p className="text-xl" text-gray-300 max-w-3xl mx-auto>
                  See how companies are transforming their customer support with AI Customer Support Pro.
                </p>
              </div>
              
        <div className="grid" md:grid-cols-3 gap-8>
                { testimonials.map((testimonial, index) => (
                  <div 
                    key={index } "
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                    
        <div className="flex" items-center mb-4>
                      { [...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i } className="w-5" h-5 text-yellow-400 fill-current />
                      ))}
                    </div>
                    
          <p className="text-gray-300" mb-6 leading-relaxed>
                      &ldquo;{ testimonial.content }&rdquo;
                    </p>
                    <div>
                      
        <div className="font-semibold" text-white>{ testimonial.name }</div>
                      
        <div className="text-cyan-400">{ testimonial.role }</div>
                      
        <div className="text-gray-400" text-sm>{ testimonial.company }</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* CTA Section */ }
          <section className="py-20" bg-gradient-to-b from-slate-800 to-slate-900>
            
        <div className="container" mx-auto px-4>
              
        <div className="text-center" max-w-4xl mx-auto>
                <h2 className="text-4xl" md:text-5xl font-bold text-white mb-6>
                  Ready to Transform Your Support?
                </h2>
                
          <p className="text-xl" text-gray-300 mb-8>
                  Join thousands of companies that have revolutionized their customer support with AI-powered automation and intelligent chatbots.
                </p>
                
        <div className="flex" flex-col sm:flex-row gap-4 justify-center>
                  <a"
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5" h-5 mr-2 />
                    Call +1 302 464 0950
                  </a>
                  <a"
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5" h-5 mr-2 />
                    Get Free Trial
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
export default AiCustomerSupportProPage;"