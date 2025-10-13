import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star,
  CheckCircle,
  Play,
  Download,
  Users,
  TrendingUp,
  Award,
  Sparkles,
  BarChart3,
  Lock,
  Cloud,
  Smartphone,
  Database,
  Cpu,
  Network,
  Rocket
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-services"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions for modern businesses",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/it-services"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/micro-saas"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/5g-solutions"
    },
  ];

  const microSaasProducts = [
    {
      name: "Zion Analytics Pro",
      description: "Advanced AI-powered business intelligence platform",
      price: "From $29/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/zion-analytics-pro",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "Zion Security Shield",
      description: "Comprehensive cybersecurity protection suite",
      price: "From $49/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/zion-security-shield",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Zion Cloud Vault",
      description: "Secure cloud storage and data management",
      price: "From $19/month",
      icon: <Cloud className="w-6 h-6" />,
      link: "/zion-cloud-vault",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Zion Content Studio",
      description: "AI-powered content creation and management",
      price: "From $39/month",
      icon: <Sparkles className="w-6 h-6" />,
      link: "/zion-content-studio",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const aiServices = [
    {
      name: "AI Analytics Dashboard Pro",
      description: "Real-time business intelligence with AI insights",
      price: "From $99/month",
      icon: <BarChart3 className="w-6 h-6" />,
      link: "/ai-analytics-dashboard-pro",
      color: "from-cyan-500 to-blue-500"
    },
    {
      name: "AI Content Generation Pro",
      description: "Automated content creation for all platforms",
      price: "From $79/month",
      icon: <Sparkles className="w-6 h-6" />,
      link: "/ai-content-generation-pro",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "AI Cybersecurity Suite Pro",
      description: "Advanced AI-powered security monitoring",
      price: "From $149/month",
      icon: <Shield className="w-6 h-6" />,
      link: "/ai-cybersecurity-suite-pro",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "AI Business Intelligence Pro",
      description: "Predictive analytics and business insights",
      price: "From $199/month",
      icon: <TrendingUp className="w-6 h-6" />,
      link: "/ai-business-intelligence-pro",
      color: "from-green-500 to-emerald-500"
    }
  ];

  const itServices = [
    {
      name: "Cloud Infrastructure",
      description: "Scalable cloud solutions and migration services",
      price: "From $299/month",
      icon: <Cloud className="w-6 h-6" />,
      link: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security services and monitoring",
      price: "From $199/month",
      icon: <Lock className="w-6 h-6" />,
      link: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500"
    },
    {
      name: "Web Development",
      description: "Modern web applications and e-commerce solutions",
      price: "From $149/month",
      icon: <Globe className="w-6 h-6" />,
      link: "/web-development",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Mobile Development",
      description: "iOS and Android app development services",
      price: "From $199/month",
      icon: <Smartphone className="w-6 h-6" />,
      link: "/mobile-development",
      color: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { label: "Happy Clients", value: "10,000+", icon: <Users className="w-6 h-6" /> },
    { label: "Projects Completed", value: "50,000+", icon: <Award className="w-6 h-6" /> },
    { label: "Uptime", value: "99.9%", icon: <Shield className="w-6 h-6" /> },
    { label: "Customer Satisfaction", value: "4.9/5", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions | Leading Technology Company</title>
        <meta
          name="description"
          content="Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI solutions, IT services, digital transformation, business automation, technology consulting, micro SAAS, 5G solutions"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center px-6 py-3 rounded-full glass border border-cyan-400/30 mb-8">
            <Sparkles className="w-5 h-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">Leading Technology Innovation</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-8">
            Welcome to
            <span className="holographic block mt-4">
              Zion Tech Group
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
            Leading provider of AI-powered solutions, IT services, and digital transformation for modern businesses. 
            Transform your operations with cutting-edge technology and innovative solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
            <Link
              to="/contact"
              className="neon-button neon-cyan px-10 py-5 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center text-lg"
            >
              Get Started Today
              <ArrowRight className="w-6 h-6 ml-3" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-400 text-cyan-400 px-10 py-5 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg"
            >
              Learn More
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 rounded-full glass flex items-center justify-center text-cyan-400 neon-glow">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-lg">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Our Core Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="holographic-card p-8 hover:scale-105 transition-all duration-300 group"
              >
                <div className={`w-20 h-20 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4 text-center">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4">
                  {feature.description}
                </p>
                <div className="flex items-center justify-center text-cyan-400 group-hover:text-white transition-colors duration-300">
                  <span className="mr-2">Explore</span>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Micro SAAS Products Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Micro SAAS Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Ready-to-use software solutions for immediate deployment. Start with our most popular products.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {microSaasProducts.map((product, index) => (
              <Link
                key={index}
                to={product.link}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group border border-white/20"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${product.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {product.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{product.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{product.description}</p>
                <div className="text-cyan-400 font-semibold">{product.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              AI-Powered Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group border border-white/20"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-cyan-400 font-semibold">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
              IT Services
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              Comprehensive technology solutions for modern businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="glass rounded-2xl p-6 hover:scale-105 transition-all duration-300 group border border-white/20"
              >
                <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{service.name}</h3>
                <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                <div className="text-cyan-400 font-semibold">{service.price}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="glass rounded-3xl p-16 border border-white/20">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Join thousands of businesses already using our solutions to drive growth and innovation. 
              Get started today with our comprehensive technology solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="neon-button neon-cyan px-12 py-6 rounded-lg font-semibold hover:scale-105 transition-all duration-300 flex items-center justify-center text-lg"
              >
                Start Your Journey
                <ArrowRight className="w-6 h-6 ml-3" />
              </Link>
              <Link
                to="/services"
                className="border border-cyan-400 text-cyan-400 px-12 py-6 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-lg"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
