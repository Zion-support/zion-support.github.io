import { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  BarChart3,
  Brain,
  CheckCircle,
  Mail,
  MessageSquare,
  Package,
  Percent,
  Phone,
  Play,
  Search,
  Settings,
  Shield,
  Smartphone,
  Star,
  Users
} from 'lucide-react';

const AiEcommercePlatformPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "AI Product Recommendations",
      description: "Advanced machine learning algorithms that personalize product suggestions based on user behavior and preferences.",
      benefits: ["Personalized suggestions", "Behavioral analysis", "Cross-selling", "Upselling optimization"]
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Intelligent Search",
      description: "AI-powered search with natural language processing, visual search, and voice search capabilities.",
      benefits: ["Natural language search", "Visual search", "Voice search", "Auto-complete suggestions"]
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Analytics Dashboard",
      description: "Comprehensive analytics and insights to track sales, customer behavior, and business performance.",
      benefits: ["Real-time analytics", "Customer insights", "Sales forecasting", "Performance metrics"]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Secure Payments",
      description: "Enterprise-grade security with PCI DSS compliance, fraud detection, and multiple payment options.",
      benefits: ["PCI DSS compliance", "Fraud detection", "Multiple gateways", "Secure checkout"]
    },
    {
      icon: <Smartphone className="w-6 h-6" />,
      title: "Mobile Optimization",
      description: "Fully responsive design with mobile-first approach and progressive web app capabilities.",
      benefits: ["Mobile-first design", "PWA support", "Fast loading", "Touch optimization"]
    },
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Easy Management",
      description: "Intuitive admin panel with inventory management, order processing, and customer relationship tools.",
      benefits: ["Inventory management", "Order processing", "Customer management", "Content management"]
    }
  ];

  const aiFeatures = [
    {
      title: "Dynamic Pricing",
      description: "AI-powered pricing optimization based on demand, competition, and market conditions",
      icon: <Percent className="w-8 h-8" />,
      benefit: "Increase revenue by 15-25%"
    },
    {
      title: "Inventory Prediction",
      description: "Predictive analytics to optimize stock levels and reduce overstock/understock issues",
      icon: <Package className="w-8 h-8" />,
      benefit: "Reduce inventory costs by 30%"
    },
    {
      title: "Customer Segmentation",
      description: "AI-driven customer segmentation for targeted marketing and personalized experiences",
      icon: <Users className="w-8 h-8" />,
      benefit: "Improve conversion by 40%"
    },
    {
      title: "Chatbot Support",
      description: "24/7 AI-powered customer support with natural language understanding",
      icon: <MessageSquare className="w-8 h-8" />,
      benefit: "Reduce support costs by 60%"
    }
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$199",
      period: "month",
      description: "Perfect for small online stores and startups",
      features: [
        "Up to 1,000 products",
        "Basic AI recommendations",
        "Standard analytics",
        "Email support",
        "Mobile responsive",
        "SSL certificate",
        "Basic integrations"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$499",
      period: "month",
      description: "Ideal for growing e-commerce businesses",
      features: [
        "Up to 10,000 products",
        "Advanced AI features",
        "Advanced analytics",
        "Priority support",
        "PWA capabilities",
        "Custom integrations",
        "Multi-language support",
        "Advanced SEO tools"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$999",
      period: "month",
      description: "Complete solution for large e-commerce operations",
      features: [
        "Unlimited products",
        "Full AI capabilities",
        "Custom analytics",
        "24/7 dedicated support",
        "Custom development",
        "White-label options",
        "Advanced security",
        "On-premise deployment"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Lisa Chen",
      company: "Fashion Forward",
      role: "CEO",
      content: "The AI recommendations have increased our average order value by 35%. Our customers love the personalized experience.",
      rating: 5
    },
    {
      name: "Mark Thompson",
      company: "TechGadgets Pro",
      role: "Founder",
      content: "The platform is incredibly easy to use. We launched our store in just 2 weeks and saw immediate results.",
      rating: 5
    },
    {
      name: "Sarah Johnson",
      company: "Home & Garden Co",
      role: "Marketing Director",
      content: "The analytics dashboard gives us insights we never had before. We've optimized our inventory and increased profits by 50%.",
      rating: 5
    }
  ];

  const integrations = [
    { name: "Shopify", logo: "🛍️" },
    { name: "WooCommerce", logo: "🛒" },
    { name: "Magento", logo: "🛒" },
    { name: "BigCommerce", logo: "🛒" },
    { name: "Salesforce", logo: "☁️" },
    { name: "HubSpot", logo: "🎯" },
    { name: "Mailchimp", logo: "📧" },
    { name: "Stripe", logo: "💳" },
    { name: "PayPal", logo: "💰" },
    { name: "Amazon", logo: "📦" },
    { name: "eBay", logo: "🏪" },
    { name: "Facebook", logo: "📘" }
  ];

  return (
    <>
      <Helmet>
        <title>AI E-commerce Platform - Intelligent Online Store Solutions | Zion Tech Group</title>
        <meta name="description" content="Build intelligent e-commerce stores with our AI-powered platform. Advanced recommendations, analytics, and automation for modern online businesses." />
        <meta name="keywords" content="AI e-commerce, online store, e-commerce platform, AI recommendations, e-commerce analytics, online shopping" />
        <meta property="og:title" content="AI E-commerce Platform - Zion Tech Group" />
        <meta property="og:description" content="Intelligent e-commerce platform with AI-powered recommendations and analytics" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/ai-ecommerce-platform" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(34, 197, 94, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(34, 197, 94, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-green-500/10 border border-green-500/20 rounded-full text-green-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  #1 AI E-commerce Platform
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                    AI E-commerce Platform
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Build intelligent online stores with AI-powered recommendations, analytics, and automation. 
                  Increase sales and customer satisfaction with cutting-edge e-commerce technology.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Start Free Trial
                  </a>
                  <a
                    href="#demo"
                    className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900 relative">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Powerful E-commerce Features
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Everything you need to build, manage, and grow a successful online store.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 neon-card"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {feature.description}
                    </p>
                    <div className="space-y-2">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI Features Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    AI-Powered Intelligence
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Leverage artificial intelligence to optimize your e-commerce operations and maximize revenue.
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {aiFeatures.map((feature, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-blue-600 rounded-xl flex items-center justify-center mb-6">
                      <div className="text-white">{feature.icon}</div>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                    <p className="text-gray-300 mb-6">{feature.description}</p>
                    <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                      <div className="text-green-400 font-semibold text-sm">{feature.benefit}</div>
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
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Seamless Integrations
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Connect with your favorite tools and services to create a complete e-commerce ecosystem.
                </p>
              </div>
              
              <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
                {integrations.map((integration, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-xl p-6 text-center hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="text-4xl mb-3">{integration.logo}</div>
                    <div className="text-white font-semibold text-sm">{integration.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Pricing Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Flexible Pricing Plans
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Choose the plan that fits your e-commerce needs and budget.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {pricingPlans.map((plan, index) => (
                  <div 
                    key={index} 
                    className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border rounded-2xl p-8 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-green-400/40 shadow-green-500/10' 
                        : 'border-green-500/20 hover:border-green-400/40'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                          Most Popular
                        </div>
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                      <p className="text-gray-300 mb-4">{plan.description}</p>
                      <div className="flex items-baseline justify-center">
                        <span className="text-5xl font-bold text-green-400">{plan.price}</span>
                        <span className="text-gray-400 ml-2">/{plan.period}</span>
                      </div>
                    </div>
                    <div className="space-y-4 mb-8">
                      {plan.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-300">
                          <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                    <a
                      href="tel:+13024640950"
                      className={`w-full inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-green-500 to-blue-600 text-white hover:from-green-600 hover:to-blue-700'
                          : 'border-2 border-green-400 text-green-400 hover:bg-green-400 hover:text-slate-900'
                      }`}
                    >
                      Get Started
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials Section */}
          <section className="py-20 bg-gradient-to-b from-slate-800 to-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                    Success Stories
                  </span>
                </h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  See how businesses are growing with our AI-powered e-commerce platform.
                </p>
              </div>
              
              <div className="grid md:grid-cols-3 gap-8">
                {testimonials.map((testimonial, index) => (
                  <div 
                    key={index} 
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-green-500/20 rounded-2xl p-8 hover:border-green-400/40 transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      &ldquo;{testimonial.content}&rdquo;
                    </p>
                    <div>
                      <div className="font-semibold text-white">{testimonial.name}</div>
                      <div className="text-green-400">{testimonial.role}</div>
                      <div className="text-gray-400 text-sm">{testimonial.company}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Launch Your AI-Powered Store?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Start building your intelligent e-commerce platform today and watch your business grow with AI.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-green-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-green-400 text-green-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Demo
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

export default AiEcommercePlatformPage;