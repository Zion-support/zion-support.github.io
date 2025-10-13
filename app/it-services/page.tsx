import { ArrowRight, Shield, Cloud, Database, Code, Smartphone, Globe, Server, CheckCircle, Star, Zap, Users, BarChart3, Lock, Settings } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function ITServices() {
  const itServices = [
    {
      title: "Cloud Infrastructure Management",
      description: "Complete cloud migration, optimization, and management services for AWS, Azure, and Google Cloud",
      features: ["Cloud migration", "Cost optimization", "Security hardening", "24/7 monitoring", "Auto-scaling"],
      pricing: "Starting at $2,500/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      path: "/cloud-infrastructure",
      category: "Cloud Services",
      popular: true
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive security services including threat assessment, penetration testing, and incident response",
      features: ["Security audits", "Penetration testing", "Incident response", "Compliance management", "Security training"],
      pricing: "Starting at $1,800/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      path: "/cybersecurity-solutions",
      category: "Security"
    },
    {
      title: "Database Administration",
      description: "Expert database management, optimization, and maintenance for MySQL, PostgreSQL, MongoDB, and more",
      features: ["Performance tuning", "Backup & recovery", "Security hardening", "Monitoring", "Migration services"],
      pricing: "Starting at $1,200/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      path: "/database-administration",
      category: "Database Services"
    },
    {
      title: "DevOps & CI/CD",
      description: "Complete DevOps implementation with automated deployment pipelines and infrastructure as code",
      features: ["CI/CD pipelines", "Infrastructure as Code", "Container orchestration", "Monitoring", "Automation"],
      pricing: "Starting at $2,000/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      path: "/devops-cicd",
      category: "Development"
    },
    {
      title: "Network Infrastructure",
      description: "Design, implementation, and management of enterprise network infrastructure and security",
      features: ["Network design", "Firewall configuration", "VPN setup", "Wireless networks", "Network monitoring"],
      pricing: "Starting at $1,500/month",
      icon: <Globe className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      path: "/network-infrastructure",
      category: "Infrastructure"
    },
    {
      title: "Server Management",
      description: "Complete server administration including Windows, Linux, and virtualized environments",
      features: ["Server setup", "Performance optimization", "Security hardening", "Backup management", "24/7 support"],
      pricing: "Starting at $800/month",
      icon: <Server className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      path: "/server-management",
      category: "Infrastructure"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile application development for iOS and Android",
      features: ["Native development", "Cross-platform", "UI/UX design", "App store deployment", "Maintenance"],
      pricing: "Starting at $5,000/project",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      path: "/mobile-development",
      category: "Development"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to align technology with business objectives and digital transformation",
      features: ["Technology strategy", "Digital transformation", "Process optimization", "Vendor management", "ROI analysis"],
      pricing: "Starting at $200/hour",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      path: "/it-consulting",
      category: "Consulting"
    },
    {
      title: "Data Analytics & BI",
      description: "Business intelligence solutions with data warehousing, reporting, and advanced analytics",
      features: ["Data warehousing", "ETL processes", "Dashboard creation", "Predictive analytics", "Data visualization"],
      pricing: "Starting at $3,000/month",
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      path: "/data-analytics",
      category: "Analytics"
    },
    {
      title: "IT Support & Helpdesk",
      description: "Comprehensive IT support services with 24/7 helpdesk and remote assistance",
      features: ["24/7 support", "Remote assistance", "Ticket management", "Knowledge base", "User training"],
      pricing: "Starting at $1,000/month",
      icon: <Settings className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      path: "/it-support",
      category: "Support"
    },
    {
      title: "Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions to ensure business continuity",
      features: ["Backup strategies", "Recovery planning", "Testing", "Cloud backup", "Business continuity"],
      pricing: "Starting at $1,500/month",
      icon: <Lock className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      path: "/disaster-recovery",
      category: "Security"
    },
    {
      title: "5G Implementation",
      description: "Next-generation 5G network implementation and optimization for enterprise environments",
      features: ["5G planning", "Network optimization", "IoT integration", "Edge computing", "Performance monitoring"],
      pricing: "Starting at $10,000/project",
      icon: <Zap className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      path: "/5g-implementation",
      category: "Infrastructure"
    }
  ];

  const categories = ["All", "Cloud Services", "Security", "Database Services", "Development", "Infrastructure", "Consulting", "Analytics", "Support"];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud management, cybersecurity, DevOps, network infrastructure, and more. Expert technology solutions for modern businesses."
        />
        <meta
          name="keywords"
          content="IT services, cloud management, cybersecurity, DevOps, network infrastructure, database administration, IT consulting, server management"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                {" "}IT Services
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to optimize your infrastructure, enhance security, 
              and drive digital transformation across your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Started
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Assessment
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
                Our IT Service Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From cloud infrastructure to cybersecurity, we provide end-to-end IT solutions 
                tailored to your business needs and industry requirements.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
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
                        Most Popular
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
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 text-center text-sm"
                    >
                      Get Quote
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/5">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose Zion Tech Group?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business acumen to deliver IT solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Expert Team</h3>
                <p className="text-gray-300">Certified professionals with 10+ years of experience in enterprise IT solutions.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock monitoring and support to ensure your systems run smoothly.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Rapid Deployment</h3>
                <p className="text-gray-300">Quick implementation and deployment to minimize downtime and disruption.</p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">Track record of successful implementations and measurable business outcomes.</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let our expert team help you build a robust, secure, and scalable IT environment that supports your business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}