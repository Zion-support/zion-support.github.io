import { ArrowRight, TestTube, Target, CheckCircle, Globe, Bug, Zap, BarChart3, Clock } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
export default function AIAutomatedTesting() {
  const features = [
    {
      title: "Intelligent Test Execution",
      description: "Smart test execution with parallel processing, intelligent retry logic, and automatic test prioritization",
      icon: <Zap className="w-6 h-6" />,
      included: true
    },
    {
      title: "Cross-Platform Testing",
      description: "Test across multiple browsers, devices, and operating systems with automated cross-platform validation",
      icon: <Globe className="w-6 h-6" />,
      included: true
    },
    {
      title: "Visual Testing",
      description: "AI-powered visual regression testing that detects UI changes and layout issues automatically",
      icon: <Target className="w-6 h-6" />,
      included: true
    },
    {
      title: "Performance Testing",
      description: "Automated performance testing with load testing, stress testing, and performance monitoring",
      icon: <BarChart3 className="w-6 h-6" />,
      included: true
    },
    {
      title: "Bug Detection & Reporting",
      description: "Intelligent bug detection with detailed reports, screenshots, and automatic issue tracking",
      icon: <Bug className="w-6 h-6" />,
      included: true
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: 49,
      period: "month",
      description: "Perfect for small projects",
      features: [
        "Up to 100 test cases",
        "Basic test generation",
        "Email support",
        "1 user account",
        "Standard browsers",
        "Basic reporting"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: 99,
      period: "month",
      description: "Ideal for growing teams",
      features: [
        "Up to 500 test cases",
        "Advanced test generation",
        "Priority support",
        "5 user accounts",
        "All browsers & devices",
        "Advanced reporting",
        "API integration",
        "Custom test scenarios"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: 199,
      period: "month",
      description: "For large organizations",
      features: [
        "Unlimited test cases",
        "AI-powered test generation",
        "24/7 dedicated support",
        "Unlimited users",
        "All platforms",
        "Custom reporting",
        "Full API access",
        "Custom integrations",
        "Dedicated account manager"
      ],
      popular: false
    }
  ];

  const testingStats = [
    { number: "80%", label: "Faster Test Execution", icon: <Zap className="w-6 h-6" /> },
    { number: "95%", label: "Bug Detection Rate", icon: <Bug className="w-6 h-6" /> },
    { number: "50+", label: "Browser & Device Support", icon: <Globe className="w-6 h-6" /> },
    { number: "24/7", label: "Automated Testing", icon: <Clock className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "QA Manager",
      company: "TechCorp",
      content: "AI Automated Testing has revolutionized our testing process. We've reduced our testing time by 80% while catching 95% more bugs.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      company: "StartupXYZ",
      content: "The AI-powered test generation is incredible. It creates comprehensive test cases that we never would have thought of.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    },
    {
      name: "Emily Watson",
      role: "CTO",
      company: "InnovateLabs",
      content: "Our team productivity has increased dramatically. The automated testing runs 24/7 and catches issues before they reach production.",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
    }
  ];
  return (
    <>
      <Helmet>
        <title>AI Automated Testing - AI-Powered Test Automation Platform | Zion Tech Group</title>
        <meta
          name="description"
          content="Automate your testing with AI Automated Testing - the ultimate AI-powered test automation platform. Smart test generation, cross-platform testing, and bug detection. Starting at $49/month."
        />
        <meta
          name="keywords"
          content="automated testing, AI test generation, test automation, cross-platform testing, visual testing, performance testing, bug detection, AI automated testing"
        />
      </Helmet>
      
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-orange-900 to-slate-900 relative overflow-hidden">
        
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 animate-pulse"></div>
        
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(249,115,22,0.3),transparent_50%)]"></div>
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          
        <div className="max-w-7xl mx-auto text-center">
            
        <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 mb-6">
              <TestTube className="w-4 h-4 text-orange-400 mr-2" />
              <span className="text-orange-400 text-sm font-medium">#1 AI Testing Platform 2024</span>
            </div>
            
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 animate-pulse">
                AI Automated Testing
              </span>
              
        <div className="absolute -inset-1 bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              The ultimate AI-powered test automation platform that generates, executes, and manages tests intelligently. 
              Increase test coverage by 80% while reducing testing time and improving quality.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              {testingStats.map((stat, index) => (
                <div key={index} className="text-center">
                  
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-orange-500/20 to-red-500/20 flex items-center justify-center">
                  </div>
                  
        <div className="text-3xl font-bold text-orange-400 mb-2">{stat.number}</div>
                  
        <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Advanced Testing Features
                </span>
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to automate your testing process
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden"
                >
                  
        <div className="absolute inset-0 bg-gradient-to-r from-orange-500/5 to-red-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
        <div className="relative z-10">
                    
        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-orange-300 transition-colors">
                    </h3>
                    
          <p className="text-gray-300 leading-relaxed">
                    </p>
                    
        <div className="flex items-center mt-4">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
                      <span className="text-green-400 text-sm font-medium">Included in all plans</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-orange-800/50">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
                  Automated Testing Pricing
                </span>
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your testing needs
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-8 border transition-all duration-300 hover:scale-105 hover:shadow-2xl relative overflow-hidden ${
                    plan.popular 
                      ? 'border-orange-500/50 bg-gradient-to-br from-orange-500/10 to-red-500/10' 
                      : 'border-white/20 hover:border-orange-500/30'
                  }`}
                >
                  
        <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    
          <p className="text-gray-300 mb-4">{plan.description}</p>
                    
        <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-orange-400">${plan.price}</span>
                      <span className="text-gray-300 ml-2">/{plan.period}</span>
                    </div>
                  </div>
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 text-center block ${
                      plan.popular
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white hover:from-orange-600 hover:to-red-700 shadow-lg hover:shadow-orange-500/25'
                        : 'border border-orange-400 text-orange-400 hover:bg-orange-400 hover:text-slate-900'
                    }`}
                  >
                    Get Started
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          
        <div className="max-w-7xl mx-auto">
            
        <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Trusted by QA Teams
              </h2>
              
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                See what our users say about AI Automated Testing
              </p>
            </div>
            
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/10 relative overflow-hidden"
                >
                  
        <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <TestTube key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  
          <p className="text-gray-300 mb-4 italic leading-relaxed">"{testimonial.content}"</p>
                  
        <div className="flex items-center">
                    
        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white font-semibold mr-3">
                    </div>
                    <div>
                      
        <div className="font-semibold text-white">{testimonial.name}</div>
                      
        <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-orange-900/30 to-red-900/30">
          
        <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Start Automating Your Tests
            </h2>
            
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Join thousands of QA teams who use AI Automated Testing to improve their testing process. 
              Start your free trial today - no credit card required.
            </p>
            
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-orange-500 to-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-orange-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-orange-500/25 hover:scale-105"
              >
                Start Free Trial
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-orange-400 text-orange-400 px-8 py-4 rounded-lg font-semibold hover:bg-orange-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Watch Demo
              </Link>
            </div>
            
        <div className="mt-8 text-sm text-gray-400">
              <p>✓ 14-day free trial • ✓ No setup fees • ✓ Cancel anytime • ✓ 24/7 support</p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}