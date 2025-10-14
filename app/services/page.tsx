import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Code, 
  Cloud, 
  Wifi, 
  Shield, 
  Users, 
  Globe, 
  BarChart3, 
  Database, 
  Smartphone, 
  Settings, 
  Lock, 
  CheckCircle, 
  ArrowRight, 
  Star,
  Phone,
  Mail,
  MapPin,
  Zap,
  Target,
  Award,
  TrendingUp,
  Clock,
  DollarSign
} from 'lucide-react';

const ServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const serviceCategories = [
    {
      title: "AI Services",
      icon: <Brain className="w-8 h-8" />,
      description: "Transform your business with cutting-edge artificial intelligence solutions",
      services: [
        {
          name: "AI Analytics Dashboard Pro",
          description: "Advanced AI-powered analytics with real-time insights and predictive modeling",
          price: "$299/month",
          features: ["Real-time Analytics", "Predictive Modeling", "Custom Dashboards", "API Integration"],
          link: "/ai-analytics-dashboard-pro"
        },
        {
          name: "AI Code Assistant Pro",
          description: "Intelligent code generation and debugging for 50+ programming languages",
          price: "$199/month",
          features: ["Code Generation", "Bug Detection", "Performance Optimization", "Multi-language Support"],
          link: "/ai-code-assistant-pro"
        },
        {
          name: "AI Content Generation Pro",
          description: "Create high-quality content at scale with AI-powered writing and generation",
          price: "$249/month",
          features: ["Content Writing", "Image Generation", "Video Production", "SEO Optimization"],
          link: "/ai-content-generation-pro"
        },
        {
          name: "AI Business Intelligence Pro",
          description: "Transform raw data into strategic insights with AI-powered analytics",
          price: "$349/month",
          features: ["Data Integration", "Predictive Analytics", "Custom Reports", "Real-time Dashboards"],
          link: "/ai-business-intelligence-pro"
        }
      ]
    },
    {
      title: "IT Services",
      icon: <Code className="w-8 h-8" />,
      description: "Comprehensive IT solutions to modernize and secure your infrastructure",
      services: [
        {
          name: "AI Cloud Infrastructure",
          description: "Scalable cloud solutions with AI-powered auto-scaling and monitoring",
          price: "$499/month",
          features: ["Auto-scaling", "AI Monitoring", "Cost Optimization", "99.9% Uptime"],
          link: "/ai-cloud-infrastructure"
        },
        {
          name: "Advanced Security Suite",
          description: "Comprehensive cybersecurity with AI threat detection and automated response",
          price: "$399/month",
          features: ["AI Threat Detection", "Automated Response", "Compliance Management", "24/7 Monitoring"],
          link: "/advanced-security-suite"
        },
        {
          name: "AI Database Solutions",
          description: "Intelligent database management with AI-powered optimization and tuning",
          price: "$199/month",
          features: ["Database Optimization", "Automated Backups", "Performance Tuning", "Query Optimization"],
          link: "/ai-database-solutions"
        },
        {
          name: "AI Automation Suite",
          description: "Automate business processes with AI-powered workflow automation",
          price: "$299/month",
          features: ["Workflow Automation", "Process Optimization", "Task Automation", "Integration APIs"],
          link: "/ai-automation-suite"
        }
      ]
    },
    {
      title: "5G Solutions",
      icon: <Wifi className="w-8 h-8" />,
      description: "Next-generation wireless technology for ultra-fast connectivity and IoT",
      services: [
        {
          name: "5G Implementation",
          description: "Complete 5G network deployment with ultra-low latency and massive IoT connectivity",
          price: "$999/month",
          features: ["5G Network Setup", "IoT Integration", "Edge Computing", "Performance Monitoring"],
          link: "/5g-implementation"
        },
        {
          name: "5G Mobile Applications",
          description: "Build next-generation mobile apps optimized for 5G networks",
          price: "$599/month",
          features: ["5G Optimization", "Cross-platform Development", "Real-time Features", "Edge Computing"],
          link: "/5g-mobile-applications"
        },
        {
          name: "5G IoT Solutions",
          description: "Connect and manage millions of IoT devices with 5G technology",
          price: "$799/month",
          features: ["Device Management", "Real-time Monitoring", "Data Analytics", "Security"],
          link: "/5g-iot-solutions"
        },
        {
          name: "5G Smart City Solutions",
          description: "Build connected cities with 5G infrastructure for smart services",
          price: "$1,499/month",
          features: ["Traffic Management", "Public Safety", "Environmental Monitoring", "Citizen Services"],
          link: "/5g-smart-city-solutions"
        }
      ]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "150+", label: "Happy Clients", icon: <Users className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <TrendingUp className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Clock className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>Our Services - AI, IT & 5G Solutions | Zion Tech Group</title>
        <meta name="description" content="Comprehensive AI, IT, and 5G solutions designed to accelerate your business growth. From micro SAAS platforms to enterprise-grade systems." />
        <meta name="keywords" content="AI services, IT solutions, 5G technology, cloud computing, cybersecurity, business automation, micro SAAS" />
        <meta property="og:title" content="Our Services - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive AI, IT, and 5G solutions for modern businesses" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/services" />
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
          <section className="relative py-20 overflow-hidden">
            <div className="container mx-auto px-4">
              <div className={`text-center max-w-6xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="inline-flex items-center px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-medium mb-8">
                  <Star className="w-4 h-4 mr-2" />
                  Comprehensive Technology Solutions
                </div>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Our Services
                  </span>
                </h1>
                <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed max-w-4xl mx-auto">
                  Transform your business with our comprehensive suite of AI, IT, and 5G solutions. 
                  From micro SAAS platforms to enterprise-grade systems, we have everything you need.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Get Free Consultation
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </a>
                </div>
                
                {/* Stats */}
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
            </div>
          </section>

          {/* Service Categories */}
          {serviceCategories.map((category, categoryIndex) => (
            <section key={categoryIndex} className={`py-20 ${categoryIndex % 2 === 0 ? 'bg-gradient-to-b from-slate-800 to-slate-900' : 'bg-slate-900'}`}>
              <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                  <div className="flex items-center justify-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <div className="text-white">{category.icon}</div>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-white">
                      <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                        {category.title}
                      </span>
                    </h2>
                  </div>
                  <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                    {category.description}
                  </p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
                  {category.services.map((service, serviceIndex) => (
                    <div 
                      key={serviceIndex} 
                      className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2xl p-8 hover:border-cyan-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 neon-card"
                    >
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                        {service.name}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {service.description}
                      </p>
                      <div className="mb-6">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-2xl font-bold text-cyan-400">{service.price}</span>
                          <div className="flex items-center text-yellow-400">
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
                            <Star className="w-4 h-4 fill-current" />
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
                        className="inline-flex items-center justify-center w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 neon-button"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          ))}

          {/* CTA Section */}
          <section className="py-20 bg-slate-900">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-xl text-gray-300 mb-8">
                  Contact us today to discuss how our AI, IT, and 5G solutions can accelerate your success. 
                  Get a free consultation and customized proposal for your business needs.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="tel:+13024640950"
                    className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25 flex items-center justify-center"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call +1 302 464 0950
                  </a>
                  <a
                    href="mailto:kleber@ziontechgroup.com"
                    className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Get Free Quote
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

export default ServicesPage;
