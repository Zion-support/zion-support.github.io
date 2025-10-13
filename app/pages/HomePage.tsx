import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Zap, 
  Brain, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Globe, 
  ArrowRight, 
  CheckCircle, 
  Star,
  Users,
  TrendingUp,
  Award,
  Clock,
  Target,
  Rocket
} from 'lucide-react';

const HomePage: React.FC = () => {
  const microSaasServices = [
    {
      title: "AI Content Generator Pro",
      description: "Generate high-quality content using advanced AI models. Perfect for blogs, social media, and marketing materials.",
      price: "$29/month",
      features: ["Unlimited content generation", "Multiple AI models", "SEO optimization", "Brand voice training"],
      icon: Brain,
      category: "AI Tools",
      popular: true
    },
    {
      title: "Smart Analytics Dashboard",
      description: "Real-time business analytics with AI-powered insights and predictive forecasting.",
      price: "$49/month",
      features: ["Real-time data visualization", "AI predictions", "Custom reports", "API integration"],
      icon: TrendingUp,
      category: "Analytics",
      popular: true
    },
    {
      title: "Automated Security Monitor",
      description: "24/7 cybersecurity monitoring with AI threat detection and automated response.",
      price: "$79/month",
      features: ["Real-time threat detection", "Automated responses", "Compliance reporting", "Incident management"],
      icon: Shield,
      category: "Security",
      popular: false
    },
    {
      title: "Cloud Infrastructure Manager",
      description: "Automate cloud resource management with intelligent scaling and cost optimization.",
      price: "$99/month",
      features: ["Auto-scaling", "Cost optimization", "Multi-cloud support", "Performance monitoring"],
      icon: Cloud,
      category: "Cloud",
      popular: false
    },
    {
      title: "AI Customer Support Bot",
      description: "Intelligent chatbot with natural language processing for 24/7 customer support.",
      price: "$39/month",
      features: ["Natural language processing", "Multi-language support", "Integration APIs", "Analytics dashboard"],
      icon: Users,
      category: "Customer Service",
      popular: true
    },
    {
      title: "Data Processing Pipeline",
      description: "Automated data processing and transformation with real-time streaming capabilities.",
      price: "$59/month",
      features: ["Real-time processing", "Data transformation", "Error handling", "Scalable infrastructure"],
      icon: Database,
      category: "Data",
      popular: false
    }
  ];

  const aiServices = [
    {
      title: "Machine Learning Solutions",
      description: "Custom ML models for predictive analytics, recommendation systems, and automation.",
      icon: Brain,
      price: "Starting at $5,000"
    },
    {
      title: "Computer Vision",
      description: "Image recognition, object detection, and visual analysis solutions.",
      icon: Target,
      price: "Starting at $3,500"
    },
    {
      title: "Natural Language Processing",
      description: "Text analysis, sentiment analysis, and language understanding systems.",
      icon: Code,
      price: "Starting at $4,000"
    },
    {
      title: "AI Automation",
      description: "Intelligent process automation and workflow optimization.",
      icon: Rocket,
      price: "Starting at $6,000"
    }
  ];

  const itServices = [
    {
      title: "Cloud Migration",
      description: "Seamless migration to AWS, Azure, or Google Cloud with zero downtime.",
      icon: Cloud,
      price: "Starting at $10,000"
    },
    {
      title: "Cybersecurity Audit",
      description: "Comprehensive security assessment and vulnerability testing.",
      icon: Shield,
      price: "Starting at $2,500"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications.",
      icon: Globe,
      price: "Starting at $3,000"
    },
    {
      title: "Database Optimization",
      description: "Performance tuning and optimization for existing databases.",
      icon: Database,
      price: "Starting at $1,500"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Award },
    { number: "99.9%", label: "Uptime Guarantee", icon: Clock },
    { number: "50+", label: "Happy Clients", icon: Users },
    { number: "24/7", label: "Support Available", icon: Shield }
  ];

  return (
    <>
      <Helmet>
        <title>Zion Tech Group - Advanced AI and IT Solutions</title>
        <meta name="description" content="Leading provider of advanced AI and IT solutions, micro SAAS services, and digital transformation for businesses worldwide. Contact us at +1 302 464 0950." />
        <meta name="keywords" content="AI solutions, IT services, micro SAAS, cloud computing, cybersecurity, data analytics, digital transformation" />
      </Helmet>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="w-full h-full" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat'
          }}></div>
        </div>
        
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Transform Your Business with
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400 block">
                AI & IT Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Leading provider of advanced AI services, micro SAAS solutions, and comprehensive IT services. 
              Accelerate your digital transformation with cutting-edge technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 flex items-center"
              >
                Get Started Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/services" 
                className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Explore Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="text-center">
                  <div className="flex justify-center mb-4">
                    <div className="p-3 bg-cyan-500/20 rounded-full">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>
                  <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Micro SAAS Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Micro SAAS <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Powerful, ready-to-use micro SAAS solutions that can be deployed instantly. 
              No complex setup, no lengthy implementation - just results.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {microSaasServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="relative bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className="flex items-center mb-4">
                    <div className="p-3 bg-cyan-500/20 rounded-lg mr-4">
                      <Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-sm text-cyan-400 font-semibold">{service.category}</div>
                      <h3 className="text-xl font-bold text-white">{service.title}</h3>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">{service.price}</div>
                    <div className="text-sm text-gray-400">per month</div>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link 
                    to="/contact" 
                    className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-blue-700 transition-all duration-300 text-center block group-hover:shadow-lg group-hover:shadow-cyan-500/25"
                  >
                    Get Started
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="py-20 bg-gradient-to-br from-purple-900 to-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom AI solutions tailored to your business needs. From machine learning models to intelligent automation.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:border-purple-400/50 transition-all duration-300 group">
                  <div className="p-4 bg-purple-500/20 rounded-lg w-fit mb-4">
                    <Icon className="w-8 h-8 text-purple-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-lg font-semibold text-purple-400">{service.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* IT Services Section */}
      <section className="py-20 bg-slate-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT solutions to modernize your infrastructure and optimize your operations.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {itServices.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 group">
                  <div className="p-4 bg-cyan-500/20 rounded-lg w-fit mb-4">
                    <Icon className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                  <p className="text-gray-300 mb-4">{service.description}</p>
                  <div className="text-lg font-semibold text-cyan-400">{service.price}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-blue-600">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-cyan-100 mb-8 max-w-3xl mx-auto">
            Join hundreds of companies that have already transformed their operations with our AI and IT solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              to="/contact" 
              className="bg-white text-cyan-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center"
            >
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-cyan-600 transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;