import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Code, 
  Cloud, 
  Shield, 
  Database, 
  Zap, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  Sparkles,
  TrendingUp,
  Clock,
  Award,
  Phone,
  Mail,
  MapPin,
  Server,
  Settings,
  Lock,
  BarChart3
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      icon: <Cloud className="w-8 h-8" />,
      title: "AI Cloud Infrastructure",
      description: "Scalable cloud solutions with AI-powered auto-scaling, intelligent monitoring, and cost optimization for modern businesses.",
      price: "$499/month",
      features: [
        "Intelligent Auto-scaling",
        "AI-powered Monitoring",
        "Cost Optimization Engine",
        "99.9% Uptime Guarantee",
        "Multi-cloud Support",
        "Security Automation",
        "Performance Analytics",
        "Disaster Recovery"
      ],
      category: "Cloud Computing",
      marketPrice: "$800-1200/month",
      link: "/ai-cloud-infrastructure"
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "AI API Management",
      description: "Intelligent API gateway with AI-powered monitoring, security, and optimization for microservices architecture.",
      price: "$249/month",
      features: [
        "API Gateway Management",
        "Rate Limiting & Throttling",
        "Security Policies",
        "Analytics Dashboard",
        "Auto-scaling APIs",
        "Documentation Generation",
        "Testing Automation",
        "Performance Monitoring"
      ],
      category: "API Management",
      marketPrice: "$400-700/month",
      link: "/ai-api-management"
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Advanced Security Suite",
      description: "Comprehensive cybersecurity with AI threat detection, automated response, and compliance management.",
      price: "$399/month",
      features: [
        "AI Threat Detection",
        "Automated Incident Response",
        "Compliance Management",
        "24/7 Security Monitoring",
        "Zero Trust Architecture",
        "Behavioral Analytics",
        "Threat Intelligence",
        "Security Training"
      ],
      category: "Cybersecurity",
      marketPrice: "$600-1000/month",
      link: "/advanced-security-suite"
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "AI Database Solutions",
      description: "Intelligent database management with AI-powered optimization, automated backups, and performance tuning.",
      price: "$299/month",
      features: [
        "AI Query Optimization",
        "Automated Backups",
        "Performance Tuning",
        "Data Migration",
        "Security Hardening",
        "Monitoring & Alerts",
        "Scalability Management",
        "Disaster Recovery"
      ],
      category: "Database",
      marketPrice: "$500-800/month",
      link: "/ai-database-solutions"
    },
    {
      icon: <Server className="w-8 h-8" />,
      title: "DevOps Solutions",
      description: "Comprehensive DevOps automation with CI/CD pipelines, infrastructure as code, and automated deployment.",
      price: "$349/month",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Automated Deployment",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security Scanning",
        "Performance Optimization",
        "Team Collaboration Tools"
      ],
      category: "DevOps",
      marketPrice: "$500-900/month",
      link: "/devops-solutions"
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Performance Monitoring",
      description: "Advanced application performance monitoring with AI-powered insights and automated optimization recommendations.",
      price: "$199/month",
      features: [
        "Real-time Monitoring",
        "AI Performance Insights",
        "Automated Alerts",
        "Root Cause Analysis",
        "Capacity Planning",
        "User Experience Tracking",
        "Custom Dashboards",
        "Integration APIs"
      ],
      category: "Monitoring",
      marketPrice: "$300-600/month",
      link: "/performance-monitoring"
    }
  ];

  const categories = ['All', 'Cloud Computing', 'API Management', 'Cybersecurity', 'Database', 'DevOps', 'Monitoring'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: <Clock className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-6 h-6" /> },
    { number: "500+", label: "Infrastructure Projects", icon: <Server className="w-6 h-6" /> },
    { number: "50+", label: "Technologies Supported", icon: <Code className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive IT Solutions & Infrastructure</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, API management, cybersecurity, database solutions, DevOps, and performance monitoring for modern businesses." />
        <meta name="keywords" content="IT services, cloud computing, API management, cybersecurity, database solutions, DevOps, infrastructure, performance monitoring" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive IT solutions for modern businesses." />
        <meta property="og:type" content="website" />
      </Helmet>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-20 left-1/4 w-80 h-80 bg-pink-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full" style={{
            backgroundImage: `
              linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}></div>
        </div>

        <main className="relative z-10">
          {/* Hero Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-sm font-medium mb-8 backdrop-blur-sm">
                  <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
                  Comprehensive IT Solutions
                </div>
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    IT Services
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
                  Comprehensive IT infrastructure and services designed to keep your business running smoothly. 
                  From cloud computing to cybersecurity, we provide enterprise-grade solutions.
                </p>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-lg flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-cyan-400">{stat.icon}</div>
                    </div>
                    <div className="text-3xl font-bold text-white mb-1">{stat.number}</div>
                    <div className="text-gray-400 text-sm">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Services Section */}
          <section className="py-20">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Our IT Services</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Comprehensive IT solutions designed to optimize your infrastructure and ensure business continuity
                </p>
              </div>

              {/* Category Filter */}
              <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                      selectedCategory === category
                        ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white shadow-lg shadow-cyan-500/25'
                        : 'bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white border border-cyan-500/20'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (
                  <div 
                    key={index} 
                    className="group bg-gradient-to-br from-slate-800/60 to-slate-900/60 backdrop-blur-md border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-400/60 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20 relative overflow-hidden"
                  >
                    {/* Animated background glow */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    {/* Category Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-full text-xs font-medium text-cyan-400 backdrop-blur-sm">
                        {service.category}
                      </span>
                    </div>
                    
                    <div className="relative z-10">
                      <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-cyan-500/25">
                        <div className="text-white">{service.icon}</div>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <div className="text-right">
                            <div className="text-sm text-gray-400">Market Price</div>
                            <div className="text-lg font-semibold text-gray-300 line-through">{service.marketPrice}</div>
                          </div>
                        </div>
                        <div className="space-y-2">
                          {service.features.map((feature, featureIndex) => (
                            <div key={featureIndex} className="flex items-center text-sm text-gray-300">
                              <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                              {feature}
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <a
                        href={service.link}
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Our IT Services Section */}
          <section className="py-20 bg-slate-800/30 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  We combine technical expertise with business acumen to deliver reliable IT solutions
                </p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Enterprise Security</h3>
                  <p className="text-gray-300">Bank-level security measures to protect your data and systems from threats.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-green-600 to-cyan-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">Rapid Deployment</h3>
                  <p className="text-gray-300">Fast implementation with minimal disruption to your business operations.</p>
                </div>
                
                <div className="text-center group">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Settings className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-4">24/7 Support</h3>
                  <p className="text-gray-300">Round-the-clock support to ensure your systems run smoothly at all times.</p>
                </div>
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 bg-gradient-to-r from-cyan-600/20 to-purple-600/20">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl font-bold text-white mb-6">Ready to Optimize Your IT Infrastructure?</h2>
                <p className="text-xl text-gray-300 mb-8">
                  Let's discuss how our IT services can improve your business operations and security.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-600 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Quote
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

export default ITServicesPage;