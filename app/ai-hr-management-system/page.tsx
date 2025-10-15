import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Users, FileText, TrendingUp, Clock, CheckCircle, ArrowRight, Star, DollarSign, Zap, Shield } from 'lucide-react';

const AiHrManagementSystemPage: React.FC = () => {
  const features = [
    {
      icon: <Users className="w-6 h-6" />,
      title: "AI Recruitment",
      description: "Intelligent candidate screening and matching using advanced AI algorithms"
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Comprehensive employee performance tracking and predictive analytics"
    },
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Career Development",
      description: "AI-powered career path recommendations and skill development planning"
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Workforce Planning",
      description: "Predictive workforce planning and resource optimization"
    }
  ];

  const capabilities = [
    "AI-Powered Recruitment",
    "Employee Onboarding",
    "Performance Management",
    "Talent Analytics",
    "Skills Assessment",
    "Career Development",
    "Workforce Planning",
    "Employee Engagement",
    "Payroll Management",
    "Benefits Administration",
    "Compliance Tracking",
    "HR Analytics"
  ];

  const pricingPlans = [
    {
      name: "Small Business",
      price: "$149",
      period: "/month",
      description: "Perfect for small teams",
      features: [
        "Up to 50 employees",
        "Basic AI recruitment",
        "Performance tracking",
        "Email support",
        "Standard reports",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$399",
      period: "/month", 
      description: "Ideal for growing companies",
      features: [
        "Up to 250 employees",
        "Advanced AI features",
        "Comprehensive analytics",
        "Priority support",
        "Custom workflows",
        "API integration",
        "Advanced reporting",
        "Mobile app"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited employees",
        "Full AI suite",
        "Custom AI models",
        "24/7 dedicated support",
        "White-label options",
        "SLA guarantee",
        "Custom development",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Reduce hiring time by 50%",
    "Improve employee retention",
    "Enhance performance management",
    "Streamline HR processes",
    "Data-driven HR decisions",
    "Automated compliance tracking",
    "Better talent acquisition",
    "Increased employee satisfaction"
  ];

  return (
    <>
      <Helmet>
        <title>AI HR Management System - Zion Tech Group | Intelligent HR Solutions</title>
        <meta name="description" content="AI-powered HR management system with recruitment, performance analytics, and workforce planning. Transform your human resources with intelligent automation." />
        <meta name="keywords" content="ai hr, hr management, recruitment, performance management, workforce planning, hr analytics, talent management" />
        <meta property="og:title" content="AI HR Management System - Zion Tech Group" />
        <meta property="og:description" content="Intelligent HR management and automation" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">HR Management System</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Revolutionize your human resources with AI-powered management. Streamline recruitment, 
                optimize performance, and enhance employee experience with intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Demo
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">AI HR Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Advanced AI technology for intelligent human resource management
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 group text-center">
                  <div className="text-cyan-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">HR Management Capabilities</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Comprehensive HR solutions powered by artificial intelligence
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {capabilities.map((capability, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {capability}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">HR Management Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your human resources with AI-powered management solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="bg-white/10 rounded-lg p-4 text-center hover:bg-cyan-500/20 transition-all duration-300 group">
                  <div className="text-white font-semibold group-hover:text-cyan-400 transition-colors">
                    {benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">HR Management Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect HR management plan for your organization
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pricingPlans.map((plan, index) => (
                <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20 hover:border-cyan-500/40 transition-all duration-300 relative ${plan.popular ? 'ring-2 ring-cyan-500 scale-105' : ''}`}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 text-sm mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-gray-400 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    plan.popular 
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700' 
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white'
                  }`}>
                    Get Started
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">50%</div>
                <div className="text-gray-300 text-lg">Faster Hiring</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">35%</div>
                <div className="text-gray-300 text-lg">Better Retention</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">60%</div>
                <div className="text-gray-300 text-lg">Process Efficiency</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">95%</div>
                <div className="text-gray-300 text-lg">Employee Satisfaction</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Transform Your HR Management?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Revolutionize your human resources with AI-powered management. Start your free trial today and experience the future of HR.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Free Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact HR Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiHrManagementSystemPage;