import { ArrowRight, Zap, Shield, Database, Code, Smartphone, Globe, DollarSign, CheckCircle, Star, Users, BarChart3, Clock, Lock } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function MicroSAAS() {
  const microSAAS = [
    {
      title: "AI-Powered URL Shortener",
      description: "Intelligent URL shortening with analytics, custom domains, and QR code generation",
      features: ["Custom domains", "Analytics dashboard", "QR code generation", "Bulk operations", "API access"],
      pricing: "Free tier + $9/month Pro",
      icon: <Zap className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      path: "/url-shortener",
      popular: true,
      category: "Productivity"
    },
    {
      title: "Password Strength Analyzer",
      description: "Advanced password security assessment with breach detection and recommendations",
      features: ["Real-time analysis", "Breach monitoring", "Security recommendations", "Team management"],
      pricing: "Starting at $5/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      path: "/password-analyzer",
      category: "Security"
    },
    {
      title: "QR Code Generator Pro",
      description: "Professional QR code generation with custom branding and advanced analytics",
      features: ["Custom branding", "Bulk generation", "Analytics tracking", "Dynamic QR codes"],
      pricing: "Starting at $7/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      path: "/qr-generator",
      category: "Marketing"
    },
    {
      title: "API Rate Limiter",
      description: "Intelligent API rate limiting and monitoring for developers and businesses",
      features: ["Smart throttling", "Real-time monitoring", "Custom rules", "Analytics dashboard"],
      pricing: "Starting at $15/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      path: "/api-rate-limiter",
      category: "Developer Tools"
    },
    {
      title: "Performance Monitor",
      description: "Real-time website and application performance monitoring with alerts",
      features: ["Uptime monitoring", "Performance metrics", "Alert system", "Historical data"],
      pricing: "Starting at $12/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      path: "/performance-monitor",
      category: "Monitoring"
    },
    {
      title: "AI Content Moderation",
      description: "Automated content moderation using AI to detect and filter inappropriate content",
      features: ["AI detection", "Custom rules", "Real-time filtering", "Moderation dashboard"],
      pricing: "Starting at $25/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      path: "/content-moderation",
      category: "AI Services"
    },
    {
      title: "Time Tracking Assistant",
      description: "Smart time tracking with AI-powered productivity insights and reporting",
      features: ["Automatic tracking", "Productivity insights", "Team collaboration", "Detailed reports"],
      pricing: "Starting at $8/month",
      icon: <Clock className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      path: "/time-tracking",
      category: "Productivity"
    },
    {
      title: "Email Validator Pro",
      description: "Advanced email validation service with deliverability scoring and bulk verification",
      features: ["Bulk validation", "Deliverability scoring", "API integration", "Real-time verification"],
      pricing: "Starting at $10/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      path: "/email-validator",
      category: "Marketing"
    },
    {
      title: "Screenshot API",
      description: "High-quality website screenshot generation with custom options and bulk processing",
      features: ["High-res screenshots", "Custom dimensions", "Bulk processing", "API access"],
      pricing: "Starting at $20/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      path: "/screenshot-api",
      category: "Developer Tools"
    },
    {
      title: "User Authentication Service",
      description: "Complete authentication solution with social login, 2FA, and user management",
      features: ["Social login", "2FA support", "User management", "Security features"],
      pricing: "Starting at $18/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      path: "/auth-service",
      category: "Security"
    },
    {
      title: "File Converter API",
      description: "Universal file conversion service supporting 100+ formats with cloud processing",
      features: ["100+ formats", "Cloud processing", "Batch conversion", "API integration"],
      pricing: "Starting at $15/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      path: "/file-converter",
      category: "Developer Tools"
    },
    {
      title: "Team Collaboration Hub",
      description: "All-in-one team collaboration platform with project management and communication",
      features: ["Project management", "Team chat", "File sharing", "Task tracking"],
      pricing: "Starting at $12/month",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      path: "/team-collaboration",
      category: "Productivity"
    }
  ];

  const categories = ["All", "Productivity", "Security", "Marketing", "Developer Tools", "Monitoring", "AI Services"];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SAAS services. Ready-to-use software solutions for productivity, security, marketing, and development. Start with free tiers and scale as you grow."
        />
        <meta
          name="keywords"
          content="micro SAAS, software as a service, productivity tools, developer tools, API services, business software, cloud solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}SAAS Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Ready-to-use software solutions that solve specific business problems. 
              Start with free tiers and scale as your business grows.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Browse Services
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Trial
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Filter */}
        <section className="py-8 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className="px-6 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300"
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our growing collection of specialized software solutions designed to solve specific business challenges.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSAAS.map((service, index) => (
                <div
                  key={index}
                  className={`group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 relative ${
                    service.popular ? 'ring-2 ring-cyan-400' : ''
                  }`}
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                      {service.category}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 3 && (
                        <li className="text-sm text-gray-400">
                          +{service.features.length - 3} more features
                        </li>
                      )}
                    </ul>
                  </div>
                  
                  <div className="text-center mb-4">
                    <span className="text-lg font-bold text-white">{service.pricing}</span>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <Link
                      to={service.path}
                      className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center text-sm"
                    >
                      Try Now
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center text-sm"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Flexible Pricing for Every Business
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Start with free tiers and upgrade as you grow. No long-term contracts required.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Free Tier</h3>
                <div className="text-3xl font-bold text-white mb-4">$0<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Basic features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Limited usage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Community support
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Get Started Free
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-cyan-400 ring-2 ring-cyan-400 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4">Pro Tier</h3>
                <div className="text-3xl font-bold text-white mb-4">$29<span className="text-lg text-gray-400">/month</span></div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    All features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Higher limits
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    API access
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300"
                >
                  Start Pro Trial
                </Link>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-white mb-4">Enterprise</h3>
                <div className="text-3xl font-bold text-white mb-4">Custom</div>
                <ul className="space-y-2 text-gray-300 mb-6">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Unlimited usage
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Custom features
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    Dedicated support
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                    On-premise option
                  </li>
                </ul>
                <Link
                  to="/contact"
                  className="w-full border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                >
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of businesses already using our micro SAAS solutions to streamline their operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Start Your Free Trial
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}