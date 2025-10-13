import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Brain, 
  Shield, 
  Zap, 
  Globe, 
  ArrowRight, 
  Star, 
  TrendingUp, 
  Users, 
  CheckCircle,
  BarChart3,
  Settings,
  Cloud,
  Database,
  Code,
  Smartphone,
  MessageSquare,
  FileText,
  Activity,
  Lock
} from "lucide-react";

const HomePage = () => {
  const features = [
    {
      title: "AI-Powered Solutions",
      description: "Cutting-edge artificial intelligence to transform your business operations with machine learning, computer vision, and natural language processing.",
      icon: <Brain className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/ai-services",
      stats: "300% productivity increase"
    },
    {
      title: "IT Services",
      description: "Comprehensive technology solutions including cloud infrastructure, cybersecurity, web development, and custom software solutions.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/it-services",
      stats: "99.9% uptime guarantee"
    },
    {
      title: "Micro SAAS",
      description: "Ready-to-use software solutions for immediate deployment including analytics, automation, and productivity tools.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/micro-saas",
      stats: "12+ ready solutions"
    },
    {
      title: "5G Solutions",
      description: "Next-generation connectivity and infrastructure services for smart cities, IoT, and edge computing applications.",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/5g-solutions",
      stats: "10x faster connectivity"
    },
  ];

  const services = [
    { name: "AI Chatbot Enterprise", icon: <MessageSquare className="w-5 h-5" />, link: "/ai-chatbot-enterprise" },
    { name: "Cloud Infrastructure", icon: <Cloud className="w-5 h-5" />, link: "/cloud-infrastructure" },
    { name: "Analytics Pro", icon: <BarChart3 className="w-5 h-5" />, link: "/zion-analytics-pro" },
    { name: "Security Shield", icon: <Lock className="w-5 h-5" />, link: "/zion-security-shield" },
    { name: "Web Development", icon: <Code className="w-5 h-5" />, link: "/web-development" },
    { name: "Mobile Apps", icon: <Smartphone className="w-5 h-5" />, link: "/mobile-development" },
    { name: "Data Engineering", icon: <Database className="w-5 h-5" />, link: "/data-engineering" },
    { name: "Process Automation", icon: <Activity className="w-5 h-5" />, link: "/ai-automation" }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <CheckCircle className="w-6 h-6" /> },
    { number: "1000+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Settings className="w-6 h-6" /> }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta
          name="description"
          content="Leading provider of AI-powered solutions, IT services, micro SAAS, and digital transformation for modern businesses. Transform your operations with cutting-edge technology."
        />
        <meta
          name="keywords"
          content="AI solutions, IT services, micro SAAS, digital transformation, business automation, technology consulting, cloud computing, cybersecurity"
        />
      </Helmet>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 animate-pulse"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Welcome to
            <span className="neon-cyan block mt-2">
              Zion Tech Group
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Leading provider of AI-powered solutions, IT services, micro SAAS, and digital
            transformation for modern businesses. Transform your operations with
            cutting-edge technology and innovative solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-glow"
            >
              Get Started Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/about"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              Learn More
            </Link>
          </div>
          
          {/* Contact Info */}
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your Business?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center justify-center space-x-2">
                <Star className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">Call: {contactInfo.phone}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <FileText className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">{contactInfo.email}</span>
              </div>
              <div className="flex items-center justify-center space-x-2">
                <Globe className="w-4 h-4 text-cyan-400" />
                <span className="text-gray-300">{contactInfo.website}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-white mb-2 neon-cyan">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="neon-purple">Core Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your
              business growth and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Link
                key={index}
                to={feature.link}
                className="futuristic-card group p-6 hover:scale-105 transition-all duration-300"
              >
                <div
                  className={`w-16 h-16 rounded-lg bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 text-center mb-4 text-sm">
                  {feature.description}
                </p>
                <div className="text-center">
                  <span className="text-cyan-400 text-sm font-semibold">{feature.stats}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Services Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="neon-green">Popular Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our most popular solutions trusted by businesses worldwide.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {services.map((service, index) => (
              <Link
                key={index}
                to={service.link}
                className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 hover:bg-white/10 hover:border-cyan-500/50 transition-all duration-300 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="text-cyan-400 group-hover:text-cyan-300 transition-colors">
                    {service.icon}
                  </div>
                  <span className="text-white text-sm group-hover:text-cyan-400 transition-colors">
                    {service.name}
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of businesses already using our solutions to drive
            growth and innovation. Get started with a free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-glow"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
            <Link
              to="/services"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
