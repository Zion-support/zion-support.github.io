import { ArrowRight, Cloud, Shield, Code, Smartphone, Database, Network, Cpu, BarChart3, CheckCircle, Star, ExternalLink, Server, Lock, Zap, Globe, Building, Users } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ItServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions with automated scaling, backup, and disaster recovery. Multi-cloud and hybrid cloud support for enterprise environments.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "From $2,499/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening", "24/7 Monitoring"],
      benefits: ["99.9% uptime guarantee", "50% cost reduction", "Automated scaling"],
      marketPrice: "$5,000-15,000/month",
      category: "Cloud Services"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Advanced cybersecurity protection with threat detection, incident response, and compliance management. Protect your business from evolving threats.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cybersecurity-solutions",
      color: "from-red-500 to-orange-500",
      price: "From $1,999/month",
      features: ["Threat Detection", "Incident Response", "Compliance Management", "Security Audits", "Penetration Testing"],
      benefits: ["99.9% threat detection", "Reduced security incidents", "Compliance ready"],
      marketPrice: "$3,000-10,000/month",
      category: "Security"
    },
    {
      title: "Web Development",
      description: "Custom web applications and websites built with modern technologies. Responsive design, SEO optimization, and performance optimization.",
      icon: <Code className="w-8 h-8" />,
      path: "/web-development",
      color: "from-green-500 to-emerald-500",
      price: "From $1,499/month",
      features: ["Custom Development", "Responsive Design", "SEO Optimization", "Performance Tuning", "Maintenance"],
      benefits: ["Modern web presence", "SEO optimized", "Mobile responsive"],
      marketPrice: "$2,000-8,000/month",
      category: "Development"
    },
    {
      title: "Mobile Development",
      description: "Native and cross-platform mobile applications for iOS and Android. User experience optimization and app store deployment.",
      icon: <Smartphone className="w-8 h-8" />,
      path: "/mobile-development",
      color: "from-purple-500 to-pink-500",
      price: "From $2,999/month",
      features: ["Native Apps", "Cross-platform", "UI/UX Design", "App Store Deployment", "Push Notifications"],
      benefits: ["Native performance", "Cross-platform reach", "App store ready"],
      marketPrice: "$5,000-20,000/month",
      category: "Development"
    },
    {
      title: "Database Management",
      description: "Database design, optimization, and management services. Performance tuning, backup strategies, and data migration.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "From $1,299/month",
      features: ["Database Design", "Performance Tuning", "Backup Strategies", "Data Migration", "Monitoring"],
      benefits: ["Optimized performance", "Data security", "Automated backups"],
      marketPrice: "$2,000-6,000/month",
      category: "Data Management"
    },
    {
      title: "Custom Software Development",
      description: "Bespoke software solutions tailored to your business needs. From concept to deployment with ongoing support and maintenance.",
      icon: <Code className="w-8 h-8" />,
      path: "/custom-software",
      color: "from-teal-500 to-cyan-500",
      price: "From $3,999/month",
      features: ["Custom Development", "API Integration", "Third-party Integrations", "Testing", "Documentation"],
      benefits: ["Tailored solutions", "Scalable architecture", "Full ownership"],
      marketPrice: "$6,000-25,000/month",
      category: "Development"
    },
    {
      title: "Network Infrastructure",
      description: "Complete network design, implementation, and management. Secure, scalable, and high-performance network solutions.",
      icon: <Network className="w-8 h-8" />,
      path: "/network-infrastructure",
      color: "from-yellow-500 to-orange-500",
      price: "From $1,799/month",
      features: ["Network Design", "Implementation", "Security", "Monitoring", "Maintenance"],
      benefits: ["Secure networks", "High performance", "Scalable infrastructure"],
      marketPrice: "$3,000-12,000/month",
      category: "Infrastructure"
    },
    {
      title: "Data Analytics & BI",
      description: "Transform your data into actionable insights with advanced analytics and business intelligence solutions. Real-time dashboards and reporting.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/data-analytics",
      color: "from-pink-500 to-rose-500",
      price: "From $2,299/month",
      features: ["Data Visualization", "Real-time Dashboards", "Predictive Analytics", "Custom Reports", "Data Integration"],
      benefits: ["Data-driven decisions", "Real-time insights", "Predictive analytics"],
      marketPrice: "$4,000-15,000/month",
      category: "Analytics"
    },
    {
      title: "DevOps Solutions",
      description: "Streamline your development and operations with CI/CD pipelines, infrastructure as code, and automated deployment processes.",
      icon: <Zap className="w-8 h-8" />,
      path: "/devops-solutions",
      color: "from-amber-500 to-yellow-500",
      price: "From $2,799/month",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Automated Deployment", "Monitoring", "Containerization"],
      benefits: ["Faster deployments", "Reduced errors", "Automated processes"],
      marketPrice: "$4,500-18,000/month",
      category: "DevOps"
    },
    {
      title: "Blockchain Development",
      description: "Blockchain solutions including smart contracts, DApps, and cryptocurrency integrations. Secure and transparent decentralized applications.",
      icon: <Lock className="w-8 h-8" />,
      path: "/blockchain-development",
      color: "from-emerald-500 to-green-500",
      price: "From $4,999/month",
      features: ["Smart Contracts", "DApp Development", "Token Development", "DeFi Solutions", "Security Audits"],
      benefits: ["Decentralized solutions", "Enhanced security", "Transparent transactions"],
      marketPrice: "$8,000-30,000/month",
      category: "Blockchain"
    },
    {
      title: "Machine Learning Solutions",
      description: "AI and machine learning solutions for predictive analytics, automation, and intelligent decision making. Custom ML models and algorithms.",
      icon: <Cpu className="w-8 h-8" />,
      path: "/machine-learning",
      color: "from-violet-500 to-purple-500",
      price: "From $3,499/month",
      features: ["Custom ML Models", "Predictive Analytics", "Data Processing", "Model Training", "API Integration"],
      benefits: ["Intelligent automation", "Predictive insights", "Custom algorithms"],
      marketPrice: "$6,000-25,000/month",
      category: "AI/ML"
    },
    {
      title: "IoT Solutions",
      description: "Internet of Things solutions for connected devices, sensors, and smart systems. Real-time data collection and analysis.",
      icon: <Globe className="w-8 h-8" />,
      path: "/iot-solutions",
      color: "from-cyan-500 to-blue-500",
      price: "From $2,499/month",
      features: ["Device Management", "Sensor Integration", "Data Collection", "Real-time Analytics", "Remote Monitoring"],
      benefits: ["Connected devices", "Real-time monitoring", "Data insights"],
      marketPrice: "$4,000-15,000/month",
      category: "IoT"
    }
  ];

  const industries = [
    {
      name: "Healthcare",
      description: "HIPAA-compliant solutions, telemedicine, and patient management systems",
      icon: <Shield className="w-6 h-6" />,
      benefits: ["HIPAA compliance", "Telemedicine", "Patient data security"]
    },
    {
      name: "Finance",
      description: "Secure financial systems, payment processing, and compliance solutions",
      icon: <Lock className="w-6 h-6" />,
      benefits: ["PCI compliance", "Secure transactions", "Fraud detection"]
    },
    {
      name: "E-commerce",
      description: "Online stores, payment gateways, and inventory management systems",
      icon: <Building className="w-6 h-6" />,
      benefits: ["Scalable platforms", "Payment integration", "Inventory management"]
    },
    {
      name: "Manufacturing",
      description: "ERP systems, supply chain management, and production optimization",
      icon: <Cpu className="w-6 h-6" />,
      benefits: ["Process optimization", "Supply chain visibility", "Quality control"]
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Code className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime SLA", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Support Available", icon: <Users className="w-6 h-6" /> },
    { number: "50+", label: "Technologies", icon: <Zap className="w-6 h-6" /> }
  ];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta
          name="description"
          content="Complete IT services including cloud infrastructure, cybersecurity, web development, mobile apps, database management, and custom software solutions. Transform your business with technology."
        />
        <meta
          name="keywords"
          content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, database management, custom software, DevOps, blockchain, machine learning, IoT solutions"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-purple-500/10 to-blue-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 mb-6">
              <Server className="w-4 h-4 text-green-400 mr-2" />
              <span className="text-green-400 text-sm font-medium">Complete IT Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
              IT
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 animate-pulse">
                {" "}Services
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 rounded-lg blur opacity-30 animate-pulse"></div>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Comprehensive IT services designed to accelerate your digital transformation. 
              From cloud infrastructure to custom software development, we provide end-to-end technology solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-green-500/25 hover:scale-105"
              >
                Get IT Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                Watch Demo
                <ExternalLink className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {stats.map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Complete IT Solutions Suite
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From cloud infrastructure to custom software development, 
                we provide comprehensive IT services for every business need.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-green-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        {service.icon}
                      </div>
                      <div className="text-right">
                        <div className="text-green-400 font-bold text-lg">{service.price}</div>
                        <div className="text-xs text-gray-400">vs {service.marketPrice}</div>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-green-300 transition-colors">
                      {service.title}
                    </h3>
                    
                    <div className="mb-3">
                      <span className="inline-block px-2 py-1 rounded-full text-xs font-medium bg-green-500/20 text-green-300 border border-green-500/30">
                        {service.category}
                      </span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Features */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-green-300 mb-2">Key Features:</h4>
                      <div className="flex flex-wrap gap-1">
                        {service.features.slice(0, 3).map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-green-500/20 text-green-300 px-2 py-1 rounded-full border border-green-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                        {service.features.length > 3 && (
                          <span className="text-xs text-gray-400">+{service.features.length - 3} more</span>
                        )}
                      </div>
                    </div>
                    
                    {/* Benefits */}
                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-blue-300 mb-2">Benefits:</h4>
                      <ul className="text-xs text-gray-300 space-y-1">
                        {service.benefits.map((benefit, idx) => (
                          <li key={idx} className="flex items-center">
                            <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                            {benefit}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-green-400 hover:text-green-300 font-medium group-hover:translate-x-1 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Industries Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10 bg-gradient-to-r from-slate-800/50 to-blue-800/50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400">
                  Industry Expertise
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We have extensive experience across various industries, delivering tailored IT solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-green-500 to-blue-500 flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {industry.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-green-400 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                    {industry.description}
                  </p>
                  <ul className="text-xs text-gray-300 space-y-1">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Transform Your IT?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Get expert IT consultation and implementation services. 
                Transform your business with cutting-edge technology solutions.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-green-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-green-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-blue-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-green-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-green-500 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-green-600 hover:to-blue-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-green-500/25 hover:scale-105"
                >
                  Get IT Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/services"
                  className="border border-green-400 text-green-400 px-8 py-4 rounded-lg font-semibold hover:bg-green-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}