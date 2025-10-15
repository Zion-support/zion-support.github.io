import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Activity, ArrowRight, BarChart3, Bot, Brain, CheckCircle, Cpu, Headphones, Mail, Phone, Play, Shield, ShoppingCart, Star, Zap } from 'lucide-react';

const AiCustomerSupportProPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "AI-Powered Chatbots",
      description: "Intelligent chatbots that understand context, provide instant responses, and escalate complex issues to human agents.",
      benefits: ["24/7 availability", "Instant responses", "Context awareness", "Multi-language support"]
    },
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Natural Language Processing",
      description: "Advanced NLP capabilities that understand customer intent, sentiment, and provide personalized responses.",
      benefits: ["Intent recognition", "Sentiment analysis", "Personalization", "Emotion detection"]
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "Omnichannel Support",
      description: "Unified customer support across all channels including chat, email, phone, and social media.",
      benefits: ["Multi-channel integration", "Unified inbox", "Consistent experience", "Cross-channel history"]
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$99",
      period: "month",
      description: "Perfect for small businesses starting with AI customer support",
      features: ["Up to 1,000 conversations/month", "Basic AI chatbot", "Email & chat support", "Basic analytics"],
      popular: false
    },
    {
      name: "Professional",
      price: "$299",
      period: "month",
      description: "Ideal for growing companies with advanced support needs",
      features: ["Up to 10,000 conversations/month", "Advanced AI chatbot", "Omnichannel support", "Advanced analytics"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$599",
      period: "month",
      description: "Complete solution for large organizations with complex requirements",
      features: ["Unlimited conversations", "Custom AI training", "All channels supported", "Full analytics suite"],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Jennifer Martinez",
      company: "E-commerce Plus",
      role: "Customer Success Manager",
      content: "AI Customer Support Pro has reduced our response time by 80% and increased customer satisfaction by 45%.",
      rating: 5
    }
  ];

  return (
    <>
      <Helmet>
        <title>AI Customer Support Pro - Intelligent Support Platform | Zion Tech Group</title>
        <meta name="description" content="Transform your customer support with AI-powered chatbots, omnichannel support, and intelligent automation." />
        <meta name="keywords" content="AI customer support, chatbot, omnichannel support, customer service automation" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  AI Customer Support Pro
                </div>
                
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
                  Intelligent Customer
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Support Platform</span>
                </h1>
                
                <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Transform your customer support with AI-powered chatbots, omnichannel support, and intelligent automation. 
                  Reduce response times and increase customer satisfaction.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="#contact"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Play className="w-5 h-5 mr-2" />
                    Get Free Trial
                  </a>
                  <a
                    href="#contact"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Sales
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to provide exceptional customer support with AI-powered automation and insights.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                    <ul className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">Pricing Plans</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the perfect plan for your business needs
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index}
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-2xl shadow-cyan-500/10' 
                        : 'border-cyan-500/20'
                    }`}>
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </span>
                      </div>
                    )}
                    
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <div className="text-4xl font-bold text-white mb-2">
                        {plan.price}
                        {plan.period && <span className="text-lg text-gray-400">/{plan.period}</span>}
                      </div>
                      <p className="text-gray-300">{plan.description}</p>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="#contact"
                      className={`w-full py-3 px-6 rounded-lg font-semibold text-center transition-all duration-300 flex items-center justify-center ${
                        plan.popular
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                      }`}>
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-4">What Our Customers Say</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of satisfied customers who have transformed their support operations
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8">
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center">
                      <div>
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-cyan-400 text-sm">{testimonial.role}</p>
                        <p className="text-gray-400 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section id="contact" className="py-20 bg-gradient-to-r from-slate-800/30 to-slate-900/30">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-8">Ready to Transform Your Customer Support?</h2>
                <p className="text-xl text-gray-300 mb-12">
                  Get started with AI Customer Support Pro today and see the difference intelligent automation can make.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:contact@ziontechgroup.com"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Sales
                  </a>
                  <a
                    href="tel:+1234567890"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call Us
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

export default AiCustomerSupportProPage;