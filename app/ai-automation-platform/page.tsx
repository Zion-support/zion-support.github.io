import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Zap, 
  Brain, 
  Clock, 
  CheckCircle, 
  ArrowRight,
  Globe,
  BarChart3,
  Award,
  Star,
  Activity,
  Settings,
  TrendingUp,
  DollarSign,
  Target,
  Shield,
  Smartphone,
  Monitor,
  FileText,
  Calendar,
  MessageSquare,
  UserCheck,
  Workflow,
  Bot,
  Database,
  Network
} from 'lucide-react';
import FuturisticCard from '../components/FuturisticCard';
import FuturisticButton from '../components/FuturisticButton';
import ResponsiveContainer from '../components/ResponsiveContainer';

const AiAutomationPlatform = () => {
  const features = [
    {
      title: "No-Code Workflow Builder",
      description: "Create complex automation workflows with our intuitive drag-and-drop interface - no coding required",
      icon: <Workflow className="w-6 h-6" />,
      stats: "No coding needed"
    },
    {
      title: "AI-Powered Process Discovery",
      description: "AI analyzes your business processes and suggests optimal automation opportunities",
      icon: <Brain className="w-6 h-6" />,
      stats: "90% efficiency gain"
    },
    {
      title: "Multi-System Integration",
      description: "Connect and automate across 200+ business applications and systems seamlessly",
      icon: <Network className="w-6 h-6" />,
      stats: "200+ integrations"
    },
    {
      title: "Intelligent Decision Making",
      description: "AI-powered decision trees that adapt and learn from your business patterns",
      icon: <Bot className="w-6 h-6" />,
      stats: "Smart decisions"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "/month",
      description: "Perfect for small businesses starting their automation journey",
      features: [
        "Up to 10 workflows",
        "Basic AI suggestions",
        "50 integrations",
        "Email support",
        "Basic analytics",
        "1 user",
        "30-day data retention",
        "Standard templates"
      ],
      popular: false,
      cta: "Start Free Trial"
    },
    {
      name: "Professional",
      price: "$599",
      period: "/month",
      description: "Advanced automation for growing businesses with complex processes",
      features: [
        "Up to 100 workflows",
        "Advanced AI optimization",
        "200+ integrations",
        "Priority support",
        "Advanced analytics",
        "10 users",
        "90-day data retention",
        "Custom templates",
        "API access",
        "Advanced scheduling"
      ],
      popular: true,
      cta: "Start Free Trial"
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "Complete automation platform for large organizations with enterprise needs",
      features: [
        "Unlimited workflows",
        "AI-powered optimization",
        "All integrations",
        "24/7 phone support",
        "Real-time analytics",
        "Unlimited users",
        "Unlimited data retention",
        "White-label solution",
        "Dedicated account manager",
        "Custom AI models",
        "On-premise deployment"
      ],
      popular: false,
      cta: "Contact Sales"
    }
  ];

  const capabilities = [
    {
      title: "Process Automation",
      description: "Automate repetitive tasks and complex business processes with intelligent workflows",
      icon: <Workflow className="w-8 h-8" />,
      benefits: ["Reduce manual work by 80%", "Eliminate human errors", "Faster processing", "24/7 operation"]
    },
    {
      title: "Data Integration",
      description: "Seamlessly connect and synchronize data across all your business systems",
      icon: <Database className="w-8 h-8" />,
      benefits: ["Real-time data sync", "Eliminate data silos", "Improved accuracy", "Single source of truth"]
    },
    {
      title: "AI Decision Engine",
      description: "Intelligent decision-making system that learns and adapts to your business rules",
      icon: <Brain className="w-8 h-8" />,
      benefits: ["Smart routing", "Predictive decisions", "Risk assessment", "Continuous learning"]
    },
    {
      title: "Customer Service Automation",
      description: "Automate customer interactions with AI-powered chatbots and response systems",
      icon: <MessageSquare className="w-8 h-8" />,
      benefits: ["Instant responses", "24/7 availability", "Consistent service", "Reduced costs"]
    },
    {
      title: "Financial Automation",
      description: "Automate financial processes including invoicing, payments, and reporting",
      icon: <DollarSign className="w-8 h-8" />,
      benefits: ["Faster payments", "Reduced errors", "Compliance automation", "Real-time reporting"]
    },
    {
      title: "Marketing Automation",
      description: "Automate marketing campaigns, lead nurturing, and customer engagement",
      icon: <Target className="w-8 h-8" />,
      benefits: ["Personalized campaigns", "Lead scoring", "Automated follow-ups", "ROI optimization"]
    }
  ];

  const useCases = [
    {
      title: "E-commerce Automation",
      description: "Automate order processing, inventory management, and customer communications",
      icon: <Globe className="w-6 h-6" />,
      results: "50% faster order processing"
    },
    {
      title: "HR Process Automation",
      description: "Streamline recruitment, onboarding, and employee management workflows",
      icon: <UserCheck className="w-6 h-6" />,
      results: "60% reduction in HR workload"
    },
    {
      title: "Financial Process Automation",
      description: "Automate invoicing, expense management, and financial reporting",
      icon: <DollarSign className="w-6 h-6" />,
      results: "70% faster financial close"
    },
    {
      title: "Customer Support Automation",
      description: "Automate ticket routing, response generation, and escalation processes",
      icon: <MessageSquare className="w-6 h-6" />,
      results: "80% faster response times"
    }
  ];

  const testimonials = [
    {
      name: "Robert Kim",
      company: "E-commerce Solutions",
      role: "Operations Director",
      content: "Zion AI Automation Platform has transformed our operations. We've automated 80% of our manual processes and reduced errors by 95%.",
      rating: 5,
      avatar: "RK"
    },
    {
      name: "Sarah Williams",
      company: "Financial Services Inc",
      role: "Process Manager",
      content: "The AI-powered process discovery identified automation opportunities we never considered. Our efficiency has improved dramatically.",
      rating: 5,
      avatar: "SW"
    },
    {
      name: "Michael Chen",
      company: "TechStart Corp",
      role: "CTO",
      content: "This platform has revolutionized how we handle customer service. The AI chatbots handle 90% of inquiries without human intervention.",
      rating: 5,
      avatar: "MC"
    }
  ];

  const stats = [
    { number: "5,000+", label: "Workflows Automated", icon: <Workflow className="w-6 h-6" /> },
    { number: "80%", label: "Process Efficiency Gain", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "200+", label: "System Integrations", icon: <Network className="w-6 h-6" /> },
    { number: "95%", label: "Error Reduction", icon: <Shield className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-green-900 to-slate-900">
      <Helmet>
        <title>AI Automation Platform - Intelligent Business Process Automation | Zion Tech Group</title>
        <meta name="description" content="Transform your business with Zion AI Automation Platform. No-code workflow automation, AI-powered process optimization, and seamless system integration. Automate everything." />
        <meta name="keywords" content="business automation, workflow automation, process automation, AI automation, no-code automation, business process management, RPA" />
        <link rel="canonical" href="https://ziontechgroup.com/ai-automation-platform" />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-green-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-green-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <ResponsiveContainer className="text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 border border-green-500/30 mb-6">
            <Zap className="w-4 h-4 text-green-400 mr-2" />
            <span className="text-green-400 text-sm font-medium">AI-Powered Business Automation</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-cyan-400 to-blue-400">
              AI Automation Platform
            </span>
          </h1>
          
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Transform your business with intelligent automation. Create powerful workflows, integrate systems, 
            and automate complex processes with our no-code AI-powered platform.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <FuturisticButton
              href="#pricing"
              variant="primary"
              size="lg"
              icon={<Zap className="w-5 h-5" />}
            >
              Start Free Trial
            </FuturisticButton>
            <FuturisticButton
              href="#demo"
              variant="outline"
              size="lg"
              icon={<Monitor className="w-5 h-5" />}
            >
              View Demo
            </FuturisticButton>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-12 h-12 md:w-16 md:h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-cyan-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-xs md:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Powerful Automation Features
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our AI-powered platform provides everything you need to automate and optimize your business processes
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400">
                    {feature.stats}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Capabilities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Comprehensive Automation Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Automate every aspect of your business with our comprehensive suite of automation tools
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((capability, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-cyan-500 rounded-xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {capability.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-green-400 transition-colors">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-center mb-6 leading-relaxed">
                  {capability.description}
                </p>
                <div className="space-y-2">
                  {capability.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {benefit}
                    </div>
                  ))}
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Real-World Use Cases
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how businesses across industries are using our platform to achieve remarkable results
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {useCases.map((useCase, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {useCase.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-3 text-center group-hover:text-green-400 transition-colors">
                  {useCase.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed text-sm">
                  {useCase.description}
                </p>
                <div className="text-center">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400">
                    {useCase.results}
                  </span>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800/50 to-green-800/50">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Flexible Automation Plans
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Choose the plan that matches your automation needs and business size
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan, index) => (
              <FuturisticCard
                key={index}
                className={`relative group hover:scale-105 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-green-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <FuturisticButton
                  href={plan.cta === "Contact Sales" ? "/contact" : "#signup"}
                  variant={plan.popular ? "primary" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </FuturisticButton>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <ResponsiveContainer>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Trusted by Business Leaders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              See how organizations are using our platform to transform their operations
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FuturisticCard
                key={index}
                className="group hover:scale-105 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-gradient-to-r from-green-500 to-cyan-500 rounded-full flex items-center justify-center text-white font-semibold mr-3">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{testimonial.name}</div>
                    <div className="text-sm text-gray-400">{testimonial.role}, {testimonial.company}</div>
                  </div>
                </div>
              </FuturisticCard>
            ))}
          </div>
        </ResponsiveContainer>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-900/30 to-cyan-900/30">
        <ResponsiveContainer>
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Automate Your Business Today
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join thousands of businesses using AI automation to transform their operations. 
              Start your free trial and see the power of intelligent automation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <FuturisticButton
                href="#signup"
                variant="primary"
                size="lg"
                icon={<Zap className="w-5 h-5" />}
              >
                Start Free Trial
              </FuturisticButton>
              <FuturisticButton
                href="/contact"
                variant="outline"
                size="lg"
                icon={<ArrowRight className="w-5 h-5" />}
              >
                Contact Sales
              </FuturisticButton>
            </div>
            
            <div className="mt-8 text-sm text-gray-400">
              <p>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
          </div>
        </ResponsiveContainer>
      </section>
    </div>
  );
};

export default AiAutomationPlatform;