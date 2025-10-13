import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  CheckCircle,
  Star,
  Users,
  Award,
  TrendingUp,
  Rocket,
  Heart,
  Home,
  Settings,
  Database,
  Code,
  Smartphone,
  Cloud,
  Lock,
  Target,
  Activity,
  BarChart3
} from "lucide-react";

const EnhancedHomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with 99.9% accuracy",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      stats: "500+ AI Models",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses with enterprise-grade security",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      stats: "1000+ Projects",
      link: "/it-services"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment with instant scalability",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      stats: "50+ Solutions",
      link: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for ultra-fast networks",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      stats: "25+ Countries",
      link: "/5g-solutions"
    },
  ];

  const pricingPlans = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small businesses",
      features: [
        "Up to 5 AI services",
        "Basic IT support",
        "Email support",
        "Standard analytics",
        "Mobile app access"
      ],
      popular: false,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Professional",
      price: "$999",
      period: "/month",
      description: "Most popular choice",
      features: [
        "Unlimited AI services",
        "Advanced IT solutions",
        "Priority support",
        "Advanced analytics",
        "Custom integrations",
        "API access"
      ],
      popular: true,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Enterprise",
      price: "$2,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Custom AI development",
        "Dedicated support team",
        "White-label solutions",
        "24/7 monitoring",
        "Custom integrations",
        "SLA guarantees"
      ],
      popular: false,
      color: "from-orange-500 to-red-500"
    }
  ];

  const stats = [
    { label: "Happy Clients", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Projects Completed", value: "50,000+", icon: <Award className="w-6 h-6" /> },
    { label: "Success Rate", value: "99.9%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "Countries Served", value: "120+", icon: <Globe className="w-6 h-6" /> }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "CEO, TechCorp",
      content: "Zion Tech Group transformed our business with their AI solutions. Our efficiency increased by 300% in just 6 months.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO, InnovateLabs",
      content: "The best IT services we've ever used. Their 5G implementation gave us a competitive edge in the market.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Founder, StartupXYZ",
      content: "Their micro SAAS solutions helped us scale from 0 to 1M users in just 12 months. Incredible results!",
      rating: 5
    }
  ];

  const services = [
    {
      category: "AI Services",
      icon: <Brain className="w-6 h-6" />,
      items: [
        "AI Analytics Dashboard",
        "AI Content Generation", 
        "AI Customer Support",
        "AI Cybersecurity",
        "AI Business Intelligence",
        "AI Healthcare Solutions"
      ]
    },
    {
      category: "Micro SAAS",
      icon: <Zap className="w-6 h-6" />,
      items: [
        "Zion Analytics Pro",
        "Zion Security Shield",
        "Zion Cloud Vault",
        "Zion AI Crypto Trader",
        "Zion AI Health Monitor",
        "Zion AI Smart Home"
      ]
    },
    {
      category: "IT Services",
      icon: <Settings className="w-6 h-6" />,
      items: [
        "Cloud Infrastructure",
        "Cybersecurity Solutions",
        "Web Development",
        "Mobile Development",
        "5G Solutions",
        "Blockchain Development"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 quantum-field-advanced">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Provider</title>
        <meta
          name="description"
          content="Leading provider of AI-powered solutions, IT services, and digital transformation. Transform your business with cutting-edge technology and innovative solutions."
        />
        <meta
          name="keywords"
          content="AI solutions, IT services, digital transformation, business automation, technology consulting, micro SAAS, 5G solutions"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 cyber-particles">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white text-sm font-medium mb-8">
            <Rocket className="w-4 h-4 mr-2" />
            Leading Technology Innovation
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Welcome to
            </span>
            <br />
            <span className="neon-text-purple">
              Zion Tech Group
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Leading provider of AI-powered solutions, IT services, and digital transformation. 
            Transform your business with cutting-edge technology and innovative solutions that drive growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="btn-quantum inline-flex items-center space-x-2"
            >
              <Rocket className="w-5 h-5" />
              <span>Get Started</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/demo"
              className="btn-plasma inline-flex items-center space-x-2"
            >
              <Target className="w-5 h-5" />
              <span>Watch Demo</span>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth 
              and digital transformation with cutting-edge innovation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="card-quantum group cursor-pointer"
                onClick={() => window.location.href = feature.link}
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 mb-4">{feature.description}</p>
                <div className="text-purple-400 font-semibold text-sm">
                  {feature.stats}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Complete Service Portfolio
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our comprehensive range of AI services, micro SAAS solutions, and IT services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="card-quantum">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="text-purple-400">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-white">{service.category}</h3>
                </div>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center space-x-3">
                      <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  to={service.category === "AI Services" ? "/ai-services" : 
                      service.category === "Micro SAAS" ? "/micro-saas" : "/it-services"}
                  className="inline-flex items-center text-purple-400 hover:text-purple-300 mt-4 font-medium"
                >
                  View All Services
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing plans designed to scale with your business needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div
                key={index}
                className={`relative card-quantum ${
                  plan.popular ? 'border-purple-500 shadow-2xl shadow-purple-500/20' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-gray-400 mb-4">{plan.description}</p>
                  <div className="flex items-baseline justify-center">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                      : 'border-2 border-purple-500 text-purple-300 hover:bg-purple-500 hover:text-white'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-800 to-slate-900">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="card-quantum">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-white">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-900 to-pink-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses that have transformed their operations with Zion Tech Group. 
            Get started today and see the difference our technology can make.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-white text-purple-900 font-semibold rounded-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-purple-900 transition-all duration-300"
            >
              Schedule Demo
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EnhancedHomePage;