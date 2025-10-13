import { ArrowRight, Cloud, Shield, Database, Zap, Globe, BarChart3, Users, Mail, Smartphone } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function CloudServices() {
  const services = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud infrastructure setup, monitoring, and optimization. Multi-cloud and hybrid cloud solutions with automated scaling and disaster recovery.",
      icon: <Cloud className="w-8 h-8" />,
      path: "/cloud-infrastructure",
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $249/month",
      features: ["Auto-scaling", "Disaster Recovery", "Cost Optimization", "Security Hardening"]
    },
    {
      title: "Cloud Migration Services",
      description: "Seamless migration to cloud platforms with zero downtime. Assessment, planning, and execution of cloud migration strategies.",
      icon: <Zap className="w-8 h-8" />,
      path: "/cloud-migration-advanced",
      color: "from-green-500 to-emerald-500",
      price: "Custom Pricing",
      features: ["Zero Downtime", "Data Migration", "Application Modernization", "Performance Optimization"]
    },
    {
      title: "Cloud Security Solutions",
      description: "Comprehensive cloud security with advanced threat protection, compliance management, and automated security monitoring.",
      icon: <Shield className="w-8 h-8" />,
      path: "/cloud-native-security",
      color: "from-red-500 to-orange-500",
      price: "Starting at $299/month",
      features: ["Threat Protection", "Compliance Management", "Security Monitoring", "Incident Response"]
    },
    {
      title: "Cloud Cost Optimization",
      description: "Intelligent cost management and optimization strategies. Automated resource scaling and cost monitoring to reduce cloud expenses.",
      icon: <BarChart3 className="w-8 h-8" />,
      path: "/cloud-cost-optimization",
      color: "from-purple-500 to-pink-500",
      price: "Starting at $199/month",
      features: ["Cost Analysis", "Resource Optimization", "Automated Scaling", "Budget Management"]
    },
    {
      title: "Cloud Database Services",
      description: "Managed database solutions with high availability, automated backups, and performance optimization for all major cloud providers.",
      icon: <Database className="w-8 h-8" />,
      path: "/database-management",
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $179/month",
      features: ["High Availability", "Automated Backups", "Performance Tuning", "Security Hardening"]
    },
    {
      title: "Cloud-Native Development",
      description: "Modern application development using cloud-native technologies. Microservices, containers, and serverless architectures.",
      icon: <Globe className="w-8 h-8" />,
      path: "/cloud-native-development",
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $349/month",
      features: ["Microservices", "Containerization", "Serverless", "API Development"]
    }
  ];
  return (
    <>
      <Helmet>
        <title>Cloud Services - Zion Tech Group | Cloud Solutions & Infrastructure</title>
        <meta
          name="description"
          content="Comprehensive cloud services including infrastructure management, migration, security, cost optimization, and cloud-native development. Transform your business with scalable cloud solutions."
        />
        <meta
          name="keywords"
          content="cloud services, cloud infrastructure, cloud migration, cloud security, cloud cost optimization, cloud-native development, AWS, Azure, Google Cloud, hybrid cloud"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-pulse"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.3),transparent_50%)]"></div>
        
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto text-center">
            <div className="inline-block">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 relative">
                Cloud
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
                  {" "}Services
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 rounded-lg blur opacity-30 animate-pulse"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Comprehensive cloud solutions designed to accelerate your digital transformation. 
              From infrastructure management to cloud-native development, we provide end-to-end cloud services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
              >
                Free Consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                  Cloud Solutions
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Discover our comprehensive suite of cloud services designed to optimize your infrastructure and accelerate your business growth.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
                >
                  {/* Animated background effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                    >
                      {service.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-3 text-center group-hover:text-cyan-300 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-center mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    {/* Price and Features */}
                    <div className="space-y-3">
                      <div className="text-center">
                        <span className="text-cyan-400 font-bold text-lg">{service.price}</span>
                      </div>
                      <div className="flex flex-wrap gap-2 justify-center">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="text-xs bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded-full border border-cyan-500/30"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mt-4 text-center">
                      <Link
                        to={service.path}
                        className="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-medium group-hover:translate-x-1 transition-all duration-300"
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

        {/* Contact Information Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Move to the Cloud?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Join thousands of businesses already using our cloud solutions to drive growth and innovation. 
                Contact us today for a personalized consultation.
              </p>
              
              {/* Contact Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Email</h3>
                  <p className="text-cyan-400">kleber@ziontechgroup.com</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Phone</h3>
                  <p className="text-cyan-400">+1 302 464 0950</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-white font-semibold mb-2">Address</h3>
                  <p className="text-cyan-400 text-sm">364 E Main St STE 1008<br />Middletown DE 19709</p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="group bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
                >
                  Start Your Cloud Journey
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/consultation"
                  className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 hover:scale-105"
                >
                  Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
