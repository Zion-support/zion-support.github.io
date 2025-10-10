'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import {
  Code,
  Shield,
  Zap,
  CheckCircle,
  ArrowRight,
  Star,
  Clock,
  Users,
  Database,
  Cloud,
  Settings,
  Lock,
  Eye,
  Phone,
  Mail,
  MapPin,
  Award,
  TrendingUp,
  BarChart3,
  Activity,
  Target,
  Brain,
  Globe,
  Smartphone,
  FileText,
  Search,
  Bot,
  Palette,
  Camera,
  Music,
  Video,
  Gamepad2,
  ShoppingCart,
  CreditCard,
  Building,
  Factory,
  Car,
  Plane,
  Ship,
  Train,
  Home,
  Heart,
  Stethoscope,
  GraduationCap,
  Briefcase,
  Wrench,
  Hammer,
  Paintbrush,
  Scissors,
  BookOpen,
  Calculator,
  Calendar,
  Clock3,
  Compass,
  Navigation,
  TrendingDown,
  PieChart
} from 'lucide-react';

const AIAPIManagerPage: React.FC = () => {
  const features = [
    {
      title: "AI-Powered API Management",
      description: "Intelligent API management with automated optimization, monitoring, and security.",
      icon: Code,
      benefits: ["Automated optimization", "Real-time monitoring", "Intelligent routing", "Auto-scaling"]
    },
    {
      title: "Advanced Security",
      description: "Enterprise-grade security with AI-powered threat detection and prevention.",
      icon: Shield,
      benefits: ["Threat detection", "Access control", "Data encryption", "Compliance"]
    },
    {
      title: "Real-time Analytics",
      description: "Comprehensive analytics and monitoring for all your API endpoints.",
      icon: BarChart3,
      benefits: ["Performance metrics", "Usage analytics", "Error tracking", "Custom dashboards"]
    },
    {
      title: "Automated Documentation",
      description: "AI-generated API documentation that stays up-to-date automatically.",
      icon: FileText,
      benefits: ["Auto-generated docs", "Interactive testing", "Version control", "Developer portal"]
    },
    {
      title: "Smart Load Balancing",
      description: "Intelligent load balancing with predictive scaling and traffic management.",
      icon: Activity,
      benefits: ["Predictive scaling", "Traffic management", "Health checks", "Failover"]
    },
    {
      title: "Developer Experience",
      description: "Comprehensive developer tools and resources for seamless integration.",
      icon: Users,
      benefits: ["SDK generation", "Testing tools", "Code examples", "Support"]
    }
  ];

  const benefits = [
    'Reduce API management overhead by 70%',
    'Improve API performance by 3x',
    'Enhance security with AI-powered monitoring',
    'Automate documentation and testing',
    'Scale APIs automatically based on demand',
    'Provide exceptional developer experience'
  ];

  const pricing = [
    {
      name: "Starter",
      price: "$299",
      period: "/month",
      description: "Perfect for small teams and startups",
      features: [
        "Up to 10 APIs",
        "Basic monitoring",
        "Standard security",
        "Email support",
        "Basic analytics",
        "Documentation"
      ],
      popular: false
    },
    {
      name: "Professional",
      price: "$799",
      period: "/month",
      description: "Ideal for growing businesses",
      features: [
        "Up to 50 APIs",
        "Advanced monitoring",
        "Enhanced security",
        "Priority support",
        "Advanced analytics",
        "Custom documentation",
        "Load balancing",
        "Rate limiting"
      ],
      popular: true
    },
    {
      name: "Enterprise",
      price: "$1,999",
      period: "/month",
      description: "For large organizations",
      features: [
        "Unlimited APIs",
        "Full monitoring suite",
        "Enterprise security",
        "24/7 dedicated support",
        "Custom analytics",
        "White-label solution",
        "Advanced load balancing",
        "SLA guarantee"
      ],
      popular: false
    }
  ];

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CTO",
      company: "TechFlow Solutions",
      content: "The AI API management platform has transformed our development workflow. The automated documentation alone saves us 20 hours per week.",
      rating: 5,
      avatar: "AT"
    },
    {
      name: "Maria Garcia",
      role: "Lead Developer",
      company: "DataSync Inc",
      content: "The intelligent load balancing and monitoring features have improved our API performance by 300%. Our users love the faster response times.",
      rating: 5,
      avatar: "MG"
    },
    {
      name: "David Kim",
      role: "DevOps Engineer",
      company: "CloudScale Corp",
      content: "The security features are outstanding. The AI-powered threat detection has prevented several potential attacks before they could impact our services.",
      rating: 5,
      avatar: "DK"
    }
  ];

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: CheckCircle },
    { number: "3x", label: "Performance Boost", icon: TrendingUp },
    { number: "70%", label: "Reduced Overhead", icon: Target },
    { number: "24/7", label: "AI Monitoring", icon: Brain }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>AI API Manager | Zion Tech Group</title>
        <meta name="description" content="Professional AI API management services by Zion Tech Group. Advanced AI and IT solutions for your business." />
        <meta name="keywords" content="AI API manager, API solutions, IT services, Zion Tech Group" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-20 overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-400/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400/5 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-cyan-400/10 text-cyan-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Code className="w-4 h-4" />
              <span>AI-Powered API Management</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent neon-text-advanced">
              AI API Manager
            </h1>

            <p className="text-2xl md:text-3xl text-gray-300 mb-4 font-light">
              Intelligent API Management for Modern Applications
            </p>

            <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto leading-relaxed">
              Streamline your API infrastructure with our AI-powered management platform.
              Get intelligent monitoring, automated optimization, and enterprise-grade security.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="group relative inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
              >
                <span className="relative z-10">Get Started</span>
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/demo"
                className="group relative inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                <Eye className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                View Demo
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="relative mb-4">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full blur opacity-30 group-hover:opacity-50 transition-opacity"></div>
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2 neon-text">{stat.number}</div>
                <div className="text-gray-400 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Powerful API Management Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Everything you need to manage, monitor, and optimize your APIs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 hover:bg-white/10 transition-all duration-300 group">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300 mb-6 leading-relaxed">{feature.description}</p>
                <ul className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <li key={idx} className="flex items-center text-gray-400">
                      <CheckCircle className="w-4 h-4 text-cyan-400 mr-3 flex-shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="py-20 bg-gradient-to-r from-slate-800/50 to-purple-800/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide cutting-edge AI-powered API management solutions
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-cyan-500/20 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Code className="w-8 h-8 text-cyan-400" />
              </div>
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Advanced AI</h3>
              <p className="text-gray-300">Cutting-edge artificial intelligence solutions for API management</p>
            </div>

            <div className="bg-purple-500/20 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-purple-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold text-purple-400 mb-4">Expert Team</h3>
              <p className="text-gray-300">Experienced professionals with proven track record in API management</p>
            </div>

            <div className="bg-pink-500/20 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-pink-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-pink-400" />
              </div>
              <h3 className="text-xl font-semibold text-pink-400 mb-4">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock technical support and monitoring</p>
            </div>
          </div>
        </div>
      </div>

      {/* Pricing Section */}
      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Choose Your Plan
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Flexible pricing options to fit your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <div key={index} className={`relative bg-white/5 backdrop-blur-sm rounded-2xl p-8 ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center mb-4">
                    <span className="text-5xl font-bold text-white">{plan.price}</span>
                    <span className="text-gray-400 ml-2">{plan.period}</span>
                  </div>
                  <p className="text-gray-300">{plan.description}</p>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-cyan-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full block text-center py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                      : 'border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-slate-900'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-gradient-to-r from-cyan-500/10 to-purple-600/10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Join thousands of businesses already using our AI API management platform
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                    <p className="text-gray-500 text-sm">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Optimize Your APIs?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Start your free trial today and experience the power of AI-driven API management.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/demo"
              className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              <Eye className="w-5 h-5 mr-2" />
              View Demo
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAPIManagerPage;