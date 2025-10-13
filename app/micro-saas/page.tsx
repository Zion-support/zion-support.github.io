import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Clock, 
  Smartphone, 
  Mail,
  FileText,
  BarChart3,
  Database,
  Target,
  Activity,
  LineChart,
  DollarSign,
  UserCheck,
  Calendar,
  Settings,
  Cpu,
  Sparkles,
  Lock,
  Search,
  Filter,
  Download,
  Upload,
  Share,
  Bell,
  Heart,
  ThumbsUp,
  Wifi,
  Battery,
  Camera,
  Headphones,
  Mic,
  Video,
  Music,
  BookOpen,
  Lightbulb,
  Puzzle,
  Gamepad2,
  Monitor,
  Laptop,
  Tablet,
  HardDrive,
  Server,
  Router,
  Signal,
  Power,
  Lightning,
  Flame,
  Snowflake,
  Sun,
  Moon,
  Cloud,
  CloudRain,
  CloudSnow,
  Wind,
  Droplets,
  Thermometer,
  Gauge,
  Timer,
  Stopwatch
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const MicroSaasPage: React.FC = () => {
  const microSaasProducts = [
    {
      id: 1,
      name: "Zion AI Analytics Pro",
      description: "Advanced AI-powered analytics platform for business intelligence",
      price: "$99/month",
      features: ["Real-time analytics", "AI insights", "Custom dashboards", "API integration"],
      icon: <BarChart3 className="w-8 h-8 text-cyan-400" />,
      href: "/zion-ai-analytics-pro",
      popular: true
    },
    {
      id: 2,
      name: "Zion AI CRM Pro",
      description: "Intelligent customer relationship management with AI automation",
      price: "$79/month",
      features: ["AI lead scoring", "Automated follow-ups", "Sales forecasting", "Team collaboration"],
      icon: <Users className="w-8 h-8 text-purple-400" />,
      href: "/zion-ai-crm-pro",
      popular: false
    },
    {
      id: 3,
      name: "Zion AI Video Generator",
      description: "Create professional videos with AI-powered automation",
      price: "$149/month",
      features: ["AI video creation", "Template library", "Brand customization", "Multi-format export"],
      icon: <Video className="w-8 h-8 text-pink-400" />,
      href: "/zion-ai-video-generator",
      popular: true
    },
    {
      id: 4,
      name: "Zion AI Invoice Generator",
      description: "Automated invoice generation and management system",
      price: "$49/month",
      features: ["Auto-invoice creation", "Payment tracking", "Tax calculations", "Multi-currency support"],
      icon: <FileText className="w-8 h-8 text-green-400" />,
      href: "/zion-ai-invoice-generator",
      popular: false
    },
    {
      id: 5,
      name: "Zion AI Customer Insights",
      description: "Deep customer behavior analysis and sentiment tracking",
      price: "$89/month",
      features: ["Sentiment analysis", "Behavior tracking", "Predictive analytics", "Custom reports"],
      icon: <Brain className="w-8 h-8 text-orange-400" />,
      href: "/zion-ai-customer-insights",
      popular: false
    },
    {
      id: 6,
      name: "Zion AI Email Analyzer",
      description: "AI-powered email optimization and performance tracking",
      price: "$69/month",
      features: ["Email optimization", "A/B testing", "Performance metrics", "Spam detection"],
      icon: <Mail className="w-8 h-8 text-blue-400" />,
      href: "/zion-ai-email-analyzer",
      popular: false
    },
    {
      id: 7,
      name: "Zion Smart Inventory Optimizer",
      description: "Intelligent inventory management with predictive analytics",
      price: "$119/month",
      features: ["Demand forecasting", "Stock optimization", "Supplier management", "Cost analysis"],
      icon: <Database className="w-8 h-8 text-indigo-400" />,
      href: "/zion-smart-inventory-optimizer",
      popular: true
    },
    {
      id: 8,
      name: "Zion AI Customer Sentiment Tracker",
      description: "Real-time customer sentiment monitoring and analysis",
      price: "$79/month",
      features: ["Real-time monitoring", "Sentiment scoring", "Alert system", "Trend analysis"],
      icon: <Heart className="w-8 h-8 text-red-400" />,
      href: "/zion-ai-customer-sentiment-tracker",
      popular: false
    }
  ];

  const features = [
    {
      icon: <Zap className="w-6 h-6 text-cyan-400" />,
      title: "AI-Powered Automation",
      description: "Leverage advanced AI to automate complex business processes and workflows."
    },
    {
      icon: <Shield className="w-6 h-6 text-green-400" />,
      title: "Enterprise Security",
      description: "Bank-level security with end-to-end encryption and compliance standards."
    },
    {
      icon: <Globe className="w-6 h-6 text-purple-400" />,
      title: "Cloud-Native",
      description: "Built for the cloud with 99.9% uptime and global scalability."
    },
    {
      icon: <Settings className="w-6 h-6 text-orange-400" />,
      title: "Easy Integration",
      description: "Seamlessly integrate with your existing tools and workflows."
    }
  ];

  const stats = [
    { number: "50+", label: "Micro SAAS Products" },
    { number: "10,000+", label: "Active Users" },
    { number: "99.9%", label: "Uptime SLA" },
    { number: "24/7", label: "Support" }
  ];

  return (
    <>
      <Helmet>
        <title>Micro SAAS Solutions - Zion Tech Group</title>
        <meta name="description" content="Discover our comprehensive suite of AI-powered micro SAAS applications designed to streamline your business operations and boost productivity." />
        <meta name="keywords" content="micro saas, ai applications, business automation, productivity tools, zion tech group" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Micro SAAS
                <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                  Solutions
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
                Discover our comprehensive suite of AI-powered micro SAAS applications designed to streamline your business operations and boost productivity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                >
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
                <Link
                  to="/demo"
                  className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
                >
                  View Demo
                </Link>
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
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Our Micro SAAS?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our micro SAAS applications are built with cutting-edge technology and designed for maximum efficiency.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our Micro SAAS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our extensive collection of AI-powered micro SAAS applications.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {microSaasProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-lg p-6 hover:border-cyan-500/50 transition-all duration-200 ${
                    product.popular ? 'border-cyan-500/50 ring-1 ring-cyan-500/20' : 'border-gray-700'
                  }`}
                >
                  {product.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Popular
                      </span>
                    </div>
                  )}
                  <div className="flex items-center mb-4">
                    {product.icon}
                    <h3 className="text-xl font-semibold text-white ml-3">{product.name}</h3>
                  </div>
                  <p className="text-gray-300 mb-4">{product.description}</p>
                  <div className="text-2xl font-bold text-cyan-400 mb-4">{product.price}</div>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={product.href}
                    className="block w-full text-center bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
                  >
                    Learn More
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Get started with our micro SAAS solutions today and experience the power of AI-driven automation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-white font-semibold rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-200"
              >
                Start Free Trial
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/consultation"
                className="inline-flex items-center px-8 py-3 border border-cyan-500 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-500/10 transition-all duration-200"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;
