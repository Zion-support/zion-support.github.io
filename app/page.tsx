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
  TrendingUp,
  Award,
  Clock,
  Lock,
  BarChart3,
  Cloud,
  Code,
  Smartphone,
  Database,
  Target,
  FileText,
  Cpu,
  MessageSquare,
  Settings,
  Play,
  ChevronRight
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, computer vision, and natural language processing",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-services",
      stats: "98% Accuracy"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, web development, and 5G implementation",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/it-services",
      stats: "24/7 Support"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment including analytics, security, content management, and automation tools",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/micro-saas",
      stats: "Instant Setup"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for IoT, edge computing, and smart city implementations",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/5g-solutions",
      stats: "10x Faster"
    },
  ];

  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced business intelligence with AI-powered insights",
      price: "$99/month",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      link: "/zion-analytics-pro"
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity monitoring",
      price: "$149/month",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      link: "/zion-security-shield"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and backup",
      price: "$79/month",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      link: "/zion-cloud-vault"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation platform",
      price: "$129/month",
      icon: <FileText className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
      link: "/zion-content-studio"
    }
  ];

  const aiServices = [
    {
      name: "AI Chatbots",
      description: "Intelligent conversational AI for customer service",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Machine Learning",
      description: "Custom ML models for predictive analytics",
      icon: <Brain className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Computer Vision",
      description: "Image and video analysis solutions",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-green-500 to-teal-500"
    },
    {
      name: "Content Generation",
      description: "AI-powered content creation and management",
      icon: <FileText className="w-6 h-6" />,
      color: "from-orange-500 to-red-500"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions with AWS, Azure, Google Cloud",
      icon: <Cloud className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cybersecurity",
      description: "Comprehensive security services and compliance",
      icon: <Shield className="w-6 h-6" />,
      color: "from-red-500 to-pink-500"
    },
    {
      name: "Web Development",
      description: "Modern web applications with React, Next.js",
      icon: <Code className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Mobile Apps",
      description: "Native and cross-platform mobile applications",
      icon: <Smartphone className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "24/7", label: "Support Available" },
    { number: "5+", label: "Years Experience" }
  ];

  const benefits = [
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring",
      icon: <Clock className="w-6 h-6" />
    },
    {
      title: "Scalable Solutions",
      description: "Grow with your business needs",
      icon: <TrendingUp className="w-6 h-6" />
    },
    {
      title: "Enterprise Security",
      description: "Bank-level security and compliance",
      icon: <Lock className="w-6 h-6" />
    },
    {
      title: "Proven Results",
      description: "98% client satisfaction rate",
      icon: <Award className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Transform Your Business</title>
        <meta
          name="description"
          content="Leading provider of AI-powered solutions, IT services, micro SAAS platforms, and 5G implementation. Transform your business with cutting-edge technology and innovative solutions."
        />
        <meta
          name="keywords"
          content="AI solutions, IT services, micro SAAS, 5G implementation, cloud computing, cybersecurity, web development, mobile apps, business automation, digital transformation"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-sm font-medium mb-6">
            <Star className="w-4 h-4 mr-2" />
            Trusted by 500+ businesses worldwide
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Welcome to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              {" "}Zion Tech Group
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Leading provider of AI-powered solutions, IT services, and digital transformation. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Get Started Free
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/demo"
              className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Demo
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 text-center group-hover:text-cyan-400 transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 leading-relaxed">
                  {feature.description}
                </p>
                <div className="text-center mb-6">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-500/20 text-cyan-400">
                    {feature.stats}
                  </span>
                </div>
                <Link
                  to={feature.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                >
                  Learn More
                  <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Products */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Popular Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready-to-use software solutions for immediate deployment. No setup required, start using today.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {microSaasProducts.map((product, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:transform hover:scale-105"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-300 text-sm mb-4">
                  {product.description}
                </p>
                <div className="text-cyan-400 font-bold text-lg mb-4">
                  {product.price}
                </div>
                <Link
                  to={product.link}
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 px-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center text-sm"
                >
                  Get Started
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI & IT Services Preview */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* AI Services */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center mr-4">
                  <Brain className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Services</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Cutting-edge artificial intelligence solutions to transform your business operations.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {aiServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{service.name}</div>
                      <div className="text-gray-400 text-xs">{service.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/ai-services"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore AI Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>

            {/* IT Services */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center mr-4">
                  <Code className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-bold text-white">IT Services</h3>
              </div>
              <p className="text-gray-300 mb-6">
                Comprehensive technology solutions for modern businesses.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {itServices.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className={`w-8 h-8 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center`}>
                      {service.icon}
                    </div>
                    <div>
                      <div className="text-white font-medium text-sm">{service.name}</div>
                      <div className="text-gray-400 text-xs">{service.description}</div>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                to="/it-services"
                className="w-full bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-6 rounded-xl font-semibold hover:from-green-600 hover:to-emerald-700 transition-all duration-300 flex items-center justify-center"
              >
                Explore IT Services
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose Zion Tech Group?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver exceptional value and results for our clients.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-r from-cyan-500 to-purple-600 flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses already using our solutions to drive growth and innovation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link
              to="/pricing"
              className="group border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-xl font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
            >
              View Pricing
              <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;