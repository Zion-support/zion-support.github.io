import React from 'react';
import { Link } from 'react-router-dom';
import { Bot, Zap, BarChart3, Target, TrendingUp, ArrowRight, Star, CheckCircle, Clock, DollarSign, Globe, Smartphone, Monitor, Brain, Sparkles, Cpu, Settings, Shield } from 'lucide-react';
import EnhancedSEO from '../components/EnhancedSEO';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import FuturisticText from '../components/FuturisticText';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AIAutonomousSystemsPage = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "AI Autonomous Systems Platform",
    "description": "Advanced autonomous systems powered by AI for robotics, automation, and intelligent decision-making in complex environments.",
    "url": "https://ziontechgroup.com/ai-autonomous-systems",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web-based",
    "offers": {
      "@type": "Offer",
      "price": "299",
      "priceCurrency": "USD",
      "priceValidUntil": "2024-12-31"
    },
    "provider": {
      "@type": "Organization",
      "name": "Zion Tech Group",
      "url": "https://ziontechgroup.com"
    }
  };

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Autonomous Decision Making",
      description: "AI systems that make complex decisions in real-time without human intervention"
    },
    {
      icon: <Bot className="w-6 h-6" />,
      title: "Robotic Process Automation",
      description: "Intelligent robots that learn and adapt to perform complex tasks autonomously"
    },
    {
      icon: <Cpu className="w-6 h-6" />,
      title: "Edge Computing AI",
      description: "On-device AI processing for ultra-low latency autonomous operations"
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Predictive Maintenance",
      description: "AI-powered systems that predict and prevent equipment failures before they occur"
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Safety Systems",
      description: "Advanced safety protocols and fail-safe mechanisms for autonomous operations"
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Self-Optimization",
      description: "Systems that continuously optimize their own performance and efficiency"
    }
  ];

  const pricingPlans = [
    {
      name: "Basic",
      price: "$299",
      period: "/month",
      description: "Perfect for small automation projects",
      features: [
        "Basic autonomous systems",
        "Simple decision making",
        "Standard safety protocols",
        "Basic monitoring",
        "Email support",
        "Up to 5 devices"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Advanced autonomous systems",
        "Complex decision making",
        "Advanced safety systems",
        "Real-time monitoring",
        "Priority support",
        "Up to 25 devices",
        "API access",
        "Custom integrations"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Full autonomous suite",
        "Custom AI models",
        "White-label solutions",
        "Dedicated support",
        "Unlimited devices",
        "Custom development",
        "Advanced analytics",
        "24/7 monitoring"
      ],
      popular: false
    }
  ];

  const benefits = [
    {
      title: "Increased Efficiency",
      description: "Autonomous systems operate 24/7 with 99.9% uptime and zero human error",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Cost Reduction",
      description: "Reduce operational costs by up to 70% with fully automated processes",
      icon: <DollarSign className="w-8 h-8" />
    },
    {
      title: "Enhanced Safety",
      description: "AI-powered safety systems prevent accidents and ensure compliance",
      icon: <Shield className="w-8 h-8" />
    },
    {
      title: "Scalability",
      description: "Easily scale autonomous operations across multiple locations and systems",
      icon: <TrendingUp className="w-8 h-8" />
    }
  ];

  const testimonials = [
    {
      name: "Dr. James Wilson",
      company: "Manufacturing Corp",
      content: "Our production efficiency increased by 150% with autonomous systems. Incredible results!",
      rating: 5
    },
    {
      name: "Lisa Chen",
      company: "Warehouse Operations",
      content: "The autonomous robots reduced our operational costs by 65% while improving accuracy.",
      rating: 5
    },
    {
      name: "Michael Torres",
      company: "Smart City Initiative",
      content: "AI autonomous systems transformed our city infrastructure. Zero accidents in 6 months!",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      <EnhancedSEO
        title="AI Autonomous Systems Platform | Zion Tech Group"
        description="Advanced autonomous systems powered by AI for robotics, automation, and intelligent decision-making. Increase efficiency by 150% and reduce costs by 70%."
        keywords="AI autonomous systems, robotics automation, autonomous decision making, edge computing AI, predictive maintenance, self-optimization"
        canonical="https://ziontechgroup.com/ai-autonomous-systems"
        structuredData={structuredData}
      />
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticText className="text-4xl md:text-6xl font-bold mb-6">
                AI Autonomous Systems
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
                  The Future of Automation
                </span>
              </FuturisticText>
              
              <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
                Revolutionize your operations with AI-powered autonomous systems that make 
                intelligent decisions, operate 24/7, and increase efficiency by 150% while 
                reducing costs by up to 70%.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                <FuturisticButton
                  as={Link}
                  to="/contact"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                >
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </FuturisticButton>
                <FuturisticButton
                  as={Link}
                  to="/demo"
                  variant="outline"
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                >
                  Watch Demo
                  <Sparkles className="w-5 h-5 ml-2" />
                </FuturisticButton>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">150%</div>
                  <div className="text-gray-300">Efficiency Increase</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">70%</div>
                  <div className="text-gray-300">Cost Reduction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <div className="text-gray-300">Operation</div>
                </div>
              </div>
            </div>
          </ResponsiveContainer>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our AI Autonomous Systems?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Transform your operations with cutting-edge autonomous technology
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Features Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Powerful AI Features
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Everything you need to build intelligent autonomous systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FuturisticCard key={index} className="text-center group hover:scale-105 transition-all duration-300">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Simple, Transparent Pricing
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose the plan that fits your autonomous systems needs. All plans include our core AI features.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {pricingPlans.map((plan, index) => (
                <FuturisticCard 
                  key={index} 
                  className={`relative ${plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''}`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium">
                        Most Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <p className="text-gray-300 mb-4">{plan.description}</p>
                    <div className="flex items-baseline justify-center">
                      <span className="text-4xl font-bold text-purple-400">{plan.price}</span>
                      <span className="text-gray-300 ml-1">{plan.period}</span>
                    </div>
                  </div>
                  
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <FuturisticButton
                    as={Link}
                    to="/contact"
                    className={`w-full ${
                      plan.popular 
                        ? 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700' 
                        : 'border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900'
                    }`}
                    variant={plan.popular ? 'default' : 'outline'}
                  >
                    Get Started
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                What Our Customers Say
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Join leading companies using our AI autonomous systems
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <FuturisticCard key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-purple-400 text-sm">{testimonial.company}</p>
                  </div>
                </FuturisticCard>
              ))}
            </div>
          </ResponsiveContainer>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <ResponsiveContainer>
            <div className="text-center">
              <FuturisticCard className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border-purple-500/30">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Automate Your Future?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start your free trial today and experience the power of autonomous systems
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <FuturisticButton
                    as={Link}
                    to="/contact"
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                  >
                    Start Free Trial
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                  <FuturisticButton
                    as={Link}
                    to="/demo"
                    variant="outline"
                    className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-slate-900"
                  >
                    Schedule Demo
                    <Clock className="w-5 h-5 ml-2" />
                  </FuturisticButton>
                </div>
              </FuturisticCard>
            </div>
          </ResponsiveContainer>
        </section>
      </div>
    </div>
  );
};

export default AIAutonomousSystemsPage;