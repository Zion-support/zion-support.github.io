import { Helmet } from "react-helmet-async";
import { Brain, Shield, Users, Star, Phone, Play, CheckCircle, ArrowRight, Mail } from 'lucide-react';

const $1 = () => {
  const features = [
    {
      title: "AI-Powered Task Management",
      description: "Intelligent task assignment and prioritization based on team capabilities and project requirements",
      icon: <Brain className="w-6 h-6" />,
      benefits: ["Smart task distribution", "Priority optimization", "Deadline management"]
    },
    {
      title: "Predictive Risk Analysis",
      description: "Advanced AI algorithms predict potential project risks and suggest mitigation strategies",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["Risk prediction", "Mitigation strategies", "Early warning system"]
    },
    {
      title: "Team Performance Analytics",
      description: "Comprehensive analytics on team performance, productivity, and collaboration patterns",
      icon: <Users className="w-6 h-6" />,
      benefits: ["Performance tracking", "Productivity insights", "Team optimization"]
    }
  ];

const integrations = [
    { name: "Slack", description: "Real-time team communication", icon: "💬" },
    { name: "Jira", description: "Issue tracking and project management", icon: "🎯" },
    { name: "GitHub", description: "Code repository integration", icon: "💻" },
    { name: "Trello", description: "Visual project boards", icon: "📋" }
  ];

const pricingPlans = [
    {
      name: "Starter",
      price: "$29",
      period: "per month",
      features: ["Up to 5 projects", "Basic AI insights", "Email support"],
      popular: false
    },
    {
      name: "Professional",
      price: "$79",
      period: "per month",
      features: ["Up to 25 projects", "Advanced AI analytics", "Priority support", "Team collaboration"],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$199",
      period: "per month",
      features: ["Unlimited projects", "Custom AI models", "24/7 support", "Advanced integrations"],
      popular: false
    }
  ];

const testimonials = [
    { name: "Sarah Johnson", role: "Project Manager", content: "Revolutionary project management!", rating: 5, company: "Tech Corp" },
    { name: "Mike Chen", role: "Team Lead", content: "AI insights changed our workflow!", rating: 5, company: "Innovation Labs" }
  ];
  return (
    <>
      <Helmet>
        <title>AI Project Manager Pro - Zion Tech Group | Advanced Project Management</title>
        <meta name="description" content="Revolutionary AI-powered project management solutions. Optimize workflows, predict risks, and maximize team productivity with intelligent automation." />
        <meta name="keywords" content="AI project management, project automation, workflow optimization, risk prediction, team productivity" />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        { /* Animated Background */ }
        
        <div className="absolute inset-0">
          
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          
        <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
        <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>
        { /* Grid Pattern */ }
        
        <div className="absolute inset-0 opacity-20">
          
        <div className="h-full w-full"></div>
        </div>
        <main className="relative z-10">
          { /* Hero Section */ }
          <section className="relative py-20 overflow-hidden">
            
        <div className="container mx-auto px-4">
              <div className={ `text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10' }`}>
                
        <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI Project Management Platform
                </div>
                
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    AI Project Manager Pro
                  </span>
                </h1>
                
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Revolutionize your project management with AI-powered automation, predictive analytics, 
                  and intelligent task management. Built for modern teams who demand efficiency and results.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
    href="#demo"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
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
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Powerful AI Features
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to manage projects intelligently with AI-powered automation and insights.
                </p>
              </div>
              
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                { features.map((feature, index) => (
                  <div
    key={index } className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10">
                    
        <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      
        <div className="text-white">{ feature.icon }</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
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
          { /* Integrations Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Seamless Integrations
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with your favorite tools and platforms for a unified project management experience.
                </p>
              </div>
              
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
                { integrations.map((integration, index) => (
                  <div
    key={index } className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-xl p-6 text-center hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105">
                    
        <div className="text-cyan-400 font-bold text-lg mb-2">{ integration.name }</div>
                    
        <div className="text-gray-300 text-sm">{ integration.description }</div>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Pricing Section */ }
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    Simple Pricing
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your team size and project needs. All plans include our core AI features.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                { pricingPlans.map((plan, index) => (
                  <div
    key={index } className={ `relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-cyan-400/40 shadow-cyan-500/10' 
                        : 'border-cyan-500/20 hover: border-cyan-400/40' }`}
                  >
                    { plan.popular && (
                      
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        
        <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    ) }
                    
        <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{ plan.name }</h3>
                      
          <p className="text-gray-300 mb-4">Perfect for {plan.name.toLowerCase()} teams</p>
                      
        <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-cyan-400">{ plan.price }</span>
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
                          ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                          : 'border-2 border-cyan-400 text-cyan-400 hover: bg-cyan-400 hover:text-slate-900' }`}
                    >
                      Get Started
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>
          { /* Testimonials Section */ }
          <section className="py-20 bg-slate-900">
            
        <div className="container mx-auto px-4">
              
        <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                    What Our Users Say
                  </span>
                </h2>
                
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Join thousands of teams that have transformed their project management with AI.
                </p>
              </div>
              
        <div className="grid md:grid-cols-3 gap-8">
                { testimonials.map((testimonial, index) => (
                  <div
    key={index } className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300">
                    
        <div className="flex items-center mb-4">
                      { [...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i } className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
          <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{ testimonial.content }&rdquo;
                    </p>
                    <div>
                      
        <div className="font-semibold text-white">{ testimonial.name }</div>
                      
        <div className="text-cyan-400">{ testimonial.role }</div>
                      
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
                  Ready to Transform Your Project Management?
                </h2>
                
          <p className="text-xl text-gray-300 mb-8">
                  Start your free trial today and experience the power of AI-driven project management. 
                  No credit card required.
                </p>
                
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center">
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center">
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Consultation
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
export default AIProjectManagerProPage;