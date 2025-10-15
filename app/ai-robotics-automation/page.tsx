import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Bot, Cpu, Eye, Hand, CheckCircle, ArrowRight, Star, Clock, Users, Zap } from 'lucide-react';

const AiRoboticsAutomationPage: React.FC = () => {
  const features = [
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Intelligent Robot Control",
      description: "AI-powered robot control systems with advanced decision-making capabilities"
    },
    {
      icon: <Eye className="w-6 h-6" />,
      title: "Computer Vision Integration",
      description: "Advanced computer vision for object recognition, navigation, and manipulation"
    },
    {
      icon: <Hand className="w-6 h-6" />,
      title: "Precision Manipulation",
      description: "High-precision robotic manipulation with force feedback and tactile sensing"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Autonomous Operation",
      description: "Fully autonomous robotic systems that learn and adapt to their environment"
    }
  ];

  const applications = [
    "Manufacturing Automation",
    "Warehouse Management",
    "Healthcare Robotics",
    "Agricultural Automation",
    "Service Robotics",
    "Logistics & Delivery",
    "Quality Inspection",
    "Assembly Line Automation",
    "Medical Surgery",
    "Food Processing",
    "Construction Robotics",
    "Research & Development"
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$1,999",
      period: "/month",
      description: "Perfect for small manufacturing",
      features: [
        "Basic robot control system",
        "Simple automation tasks",
        "Standard computer vision",
        "Email support",
        "Up to 5 robots",
        "Basic analytics"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$4,999",
      period: "/month", 
      description: "Ideal for growing businesses",
      features: [
        "Advanced robot control",
        "Complex automation workflows",
        "Advanced computer vision",
        "Priority support",
        "Up to 25 robots",
        "Advanced analytics",
        "Custom integrations",
        "API access"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$12,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full robotic automation suite",
        "Custom automation solutions",
        "AI-powered decision making",
        "24/7 dedicated support",
        "Unlimited robots",
        "Complete analytics suite",
        "White-label solutions",
        "SLA guarantee",
        "On-site deployment"
      ],
      popular: false
    }
  ];

  const benefits = [
    "Increased productivity and efficiency",
    "Reduced operational costs",
    "Improved quality and consistency",
    "Enhanced safety in hazardous environments",
    "24/7 continuous operation",
    "Scalable automation solutions",
    "Custom robotic applications",
    "Advanced AI integration"
  ];

  return (
    <>
      <Helmet>
        <title>AI Robotics Automation - Zion Tech Group | Intelligent Robotic Solutions</title>
        <meta name="description" content="Advanced AI-powered robotics automation solutions for manufacturing, healthcare, logistics, and more. Transform your operations with intelligent robotic systems." />
        <meta name="keywords" content="ai robotics, robotic automation, manufacturing robots, service robots, computer vision, autonomous systems" />
        <meta property="og:title" content="AI Robotics Automation - Zion Tech Group" />
        <meta property="og:description" content="Intelligent robotic automation solutions" />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Robotics Automation</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                Transform your operations with intelligent robotic automation systems powered by advanced AI. 
                Increase productivity, reduce costs, and enhance quality across all industries.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300">
                  Start Automation Journey
                </button>
                <button className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Advanced Robotic Features</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cutting-edge AI technology for intelligent robotic automation
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

        {/* Applications Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-6">Industry Applications</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform industries with intelligent robotic automation solutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {applications.map((application, index) => (
                <div key={index} className="bg-slate-800/50 rounded-lg p-4 text-center hover:bg-slate-700/50 transition-all duration-300 group">
                  <div className="text-cyan-400 font-semibold group-hover:text-cyan-300 transition-colors">
                    {application}
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
              <h2 className="text-4xl font-bold text-white mb-6">Robotic Automation Benefits</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Unlock new levels of efficiency and productivity with AI-powered robotics
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
              <h2 className="text-4xl font-bold text-white mb-6">Robotic Automation Plans</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the perfect automation plan for your robotic needs
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
                <div className="text-4xl font-bold text-cyan-400 mb-2">75%</div>
                <div className="text-gray-300 text-lg">Cost Reduction</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">300%</div>
                <div className="text-gray-300 text-lg">Productivity Increase</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300 text-lg">Accuracy Rate</div>
              </div>
              <div>
                <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>
                <div className="text-gray-300 text-lg">Continuous Operation</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-white/5">
          <div className="container mx-auto px-4">
            <div className="bg-gradient-to-r from-cyan-600 to-purple-600 rounded-2xl p-12 text-center">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Automate Your Future?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Transform your operations with intelligent robotic automation. Start your automation journey today and unlock new levels of efficiency.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300">
                  Start Automation Trial
                </button>
                <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300">
                  Contact Robotics Experts
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AiRoboticsAutomationPage;