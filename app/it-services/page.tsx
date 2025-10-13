import React from "react";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Shield, 
  Code, 
  Database, 
  Smartphone, 
  Server, 
  Network, 
  Lock, 
  Settings, 
  Monitor, 
  Zap, 
  Globe,
  ArrowRight,
  Star,
  CheckCircle,
  DollarSign,
  Clock,
  Award,
  Sparkles,
  TrendingUp,
  Users,
  FileText,
  Cpu,
  HardDrive,
  Wifi,
  Layers,
  Workflow,
  BarChart3,
  Target,
  Eye,
  MessageSquare,
  Search,
  Filter
} from "lucide-react";
import SEOOptimizer from "../components/SEOOptimizer";

const ITServicesPage = () => {
  const itServices = [
    {
      id: "cloud-infrastructure",
      name: "Cloud Infrastructure Solutions",
      tagline: "Scalable Cloud Architecture & Management",
      description: "Design, deploy, and manage robust cloud infrastructure solutions. AWS, Azure, and Google Cloud expertise with 99.9% uptime guarantee.",
      price: "From $1,999/month",
      features: [
        "Multi-cloud architecture design",
        "Auto-scaling & load balancing",
        "Disaster recovery planning",
        "Cost optimization strategies",
        "24/7 monitoring & support",
        "Security compliance",
        "Performance optimization",
        "Migration services"
      ],
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      category: "Cloud Computing",
      popular: true,
      link: "/cloud-infrastructure"
    },
    {
      id: "cybersecurity-solutions",
      name: "Advanced Cybersecurity Solutions",
      tagline: "Comprehensive Security Protection Suite",
      description: "Protect your business with enterprise-grade cybersecurity solutions. Threat detection, incident response, and compliance management.",
      price: "From $2,499/month",
      features: [
        "Advanced threat detection",
        "Incident response planning",
        "Security compliance (SOC2, ISO27001)",
        "Penetration testing",
        "Security awareness training",
        "Vulnerability assessments",
        "24/7 security monitoring",
        "Emergency response team"
      ],
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      category: "Cybersecurity",
      popular: true,
      link: "/cybersecurity-solutions"
    },
    {
      id: "web-development",
      name: "Full-Stack Web Development",
      tagline: "Modern Web Applications & Platforms",
      description: "Build responsive, scalable web applications with modern technologies. React, Node.js, Python, and more with agile development methodology.",
      price: "From $3,999/project",
      features: [
        "Responsive web design",
        "Progressive Web Apps (PWA)",
        "API development & integration",
        "Database design & optimization",
        "Performance optimization",
        "SEO optimization",
        "Cross-browser compatibility",
        "Maintenance & support"
      ],
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      category: "Development",
      popular: true,
      link: "/web-development"
    },
    {
      id: "mobile-development",
      name: "Mobile App Development",
      tagline: "Native & Cross-Platform Mobile Solutions",
      description: "Create powerful mobile applications for iOS and Android. Native development, React Native, and Flutter expertise with app store optimization.",
      price: "From $4,999/project",
      features: [
        "Native iOS & Android apps",
        "Cross-platform development",
        "UI/UX design",
        "App store optimization",
        "Push notifications",
        "Offline functionality",
        "Performance optimization",
        "App maintenance & updates"
      ],
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      category: "Development",
      popular: false,
      link: "/mobile-development"
    },
    {
      id: "database-management",
      name: "Database Management & Optimization",
      tagline: "High-Performance Database Solutions",
      description: "Design, implement, and optimize database systems for maximum performance. SQL, NoSQL, and cloud database expertise.",
      price: "From $1,499/month",
      features: [
        "Database design & architecture",
        "Performance optimization",
        "Data migration services",
        "Backup & recovery planning",
        "Security hardening",
        "Monitoring & maintenance",
        "Scalability planning",
        "24/7 support"
      ],
      icon: <Database className="w-8 h-8" />,
      color: "from-indigo-500 to-blue-500",
      category: "Database",
      popular: false,
      link: "/database-management"
    },
    {
      id: "custom-software",
      name: "Custom Software Development",
      tagline: "Tailored Business Software Solutions",
      description: "Build custom software solutions tailored to your business needs. Enterprise applications, workflow automation, and system integration.",
      price: "From $5,999/project",
      features: [
        "Custom application development",
        "Workflow automation",
        "System integration",
        "API development",
        "User interface design",
        "Testing & quality assurance",
        "Documentation & training",
        "Ongoing maintenance"
      ],
      icon: <Settings className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      category: "Custom Development",
      popular: false,
      link: "/custom-software"
    },
    {
      id: "network-infrastructure",
      name: "Network Infrastructure & Security",
      tagline: "Robust Network Architecture & Management",
      description: "Design and implement secure, scalable network infrastructure. LAN, WAN, VPN, and wireless network solutions with 24/7 monitoring.",
      price: "From $1,799/month",
      features: [
        "Network design & implementation",
        "Wireless network solutions",
        "VPN & remote access",
        "Network security hardening",
        "Performance monitoring",
        "Disaster recovery planning",
        "Hardware procurement",
        "24/7 network support"
      ],
      icon: <Network className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      category: "Networking",
      popular: false,
      link: "/network-infrastructure"
    },
    {
      id: "data-analytics",
      name: "Data Analytics & Business Intelligence",
      tagline: "Transform Data into Business Insights",
      description: "Extract valuable insights from your data with advanced analytics solutions. Data visualization, reporting, and predictive analytics.",
      price: "From $2,199/month",
      features: [
        "Data warehouse design",
        "ETL pipeline development",
        "Business intelligence dashboards",
        "Predictive analytics",
        "Data visualization",
        "Report automation",
        "Data quality management",
        "Training & support"
      ],
      icon: <BarChart3 className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      category: "Analytics",
      popular: false,
      link: "/data-analytics"
    },
    {
      id: "devops-solutions",
      name: "DevOps & CI/CD Solutions",
      tagline: "Streamlined Development & Deployment",
      description: "Implement DevOps practices and CI/CD pipelines for faster, more reliable software delivery. Automation, monitoring, and infrastructure as code.",
      price: "From $2,999/month",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Automated testing",
        "Monitoring & alerting",
        "Deployment automation",
        "Security scanning",
        "Performance optimization"
      ],
      icon: <Workflow className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-500",
      category: "DevOps",
      popular: false,
      link: "/devops-solutions"
    },
    {
      id: "blockchain-development",
      name: "Blockchain & Web3 Solutions",
      tagline: "Next-Generation Decentralized Applications",
      description: "Build secure, scalable blockchain applications and smart contracts. Ethereum, Polygon, and other blockchain platforms with DeFi expertise.",
      price: "From $7,999/project",
      features: [
        "Smart contract development",
        "DeFi protocol development",
        "NFT marketplace creation",
        "Blockchain integration",
        "Security auditing",
        "Token development",
        "Web3 frontend development",
        "Maintenance & support"
      ],
      icon: <Layers className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      category: "Blockchain",
      popular: false,
      link: "/blockchain-development"
    },
    {
      id: "machine-learning",
      name: "Machine Learning & AI Solutions",
      tagline: "Intelligent Data Processing & Automation",
      description: "Implement machine learning models and AI solutions for business automation. Predictive analytics, natural language processing, and computer vision.",
      price: "From $4,999/month",
      features: [
        "ML model development",
        "Predictive analytics",
        "Natural language processing",
        "Computer vision solutions",
        "Model training & optimization",
        "API development",
        "Performance monitoring",
        "Continuous learning"
      ],
      icon: <Cpu className="w-8 h-8" />,
      color: "from-rose-500 to-pink-500",
      category: "AI/ML",
      popular: false,
      link: "/machine-learning"
    },
    {
      id: "iot-solutions",
      name: "IoT & Smart Device Solutions",
      tagline: "Connected Device Architecture & Management",
      description: "Design and implement IoT solutions for smart devices and connected systems. Sensor integration, data processing, and real-time monitoring.",
      price: "From $3,499/month",
      features: [
        "IoT device integration",
        "Sensor data processing",
        "Real-time monitoring",
        "Edge computing solutions",
        "Data analytics & insights",
        "Security implementation",
        "Scalable architecture",
        "Maintenance & support"
      ],
      icon: <Wifi className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      category: "IoT",
      popular: false,
      link: "/iot-solutions"
    }
  ];

  const categories = [
    { name: "All", count: itServices.length },
    { name: "Cloud Computing", count: itServices.filter(s => s.category === "Cloud Computing").length },
    { name: "Cybersecurity", count: itServices.filter(s => s.category === "Cybersecurity").length },
    { name: "Development", count: itServices.filter(s => s.category === "Development").length },
    { name: "Database", count: itServices.filter(s => s.category === "Database").length },
    { name: "Custom Development", count: itServices.filter(s => s.category === "Custom Development").length },
    { name: "Networking", count: itServices.filter(s => s.category === "Networking").length },
    { name: "Analytics", count: itServices.filter(s => s.category === "Analytics").length },
    { name: "DevOps", count: itServices.filter(s => s.category === "DevOps").length },
    { name: "Blockchain", count: itServices.filter(s => s.category === "Blockchain").length },
    { name: "AI/ML", count: itServices.filter(s => s.category === "AI/ML").length },
    { name: "IoT", count: itServices.filter(s => s.category === "IoT").length }
  ];

  const stats = [
    { number: "12+", label: "IT Service Categories", icon: <Server className="w-6 h-6" /> },
    { number: "500+", label: "Projects Completed", icon: <Award className="w-6 h-6" /> },
    { number: "99.9%", label: "Uptime Guarantee", icon: <Shield className="w-6 h-6" /> },
    { number: "24/7", label: "Expert Support", icon: <Users className="w-6 h-6" /> }
  ];

  const technologies = [
    { name: "Cloud Platforms", items: ["AWS", "Azure", "Google Cloud", "DigitalOcean"] },
    { name: "Programming Languages", items: ["Python", "JavaScript", "Java", "C#", "Go", "Rust"] },
    { name: "Frameworks", items: ["React", "Angular", "Vue.js", "Node.js", "Django", "Spring"] },
    { name: "Databases", items: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "Elasticsearch"] },
    { name: "DevOps Tools", items: ["Docker", "Kubernetes", "Jenkins", "Terraform", "Ansible"] },
    { name: "Security Tools", items: ["OWASP", "Nessus", "Burp Suite", "Wireshark", "Metasploit"] }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <SEOOptimizer
        title="IT Services - Zion Tech Group | Comprehensive Technology Solutions"
        description="Transform your business with our comprehensive IT services. Cloud infrastructure, cybersecurity, web development, mobile apps, and more. Enterprise-grade solutions starting from $1,499/month."
        keywords="IT services, cloud computing, cybersecurity, web development, mobile development, database management, custom software, network infrastructure"
        canonical="https://ziontechgroup.com/it-services"
      />

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Enterprise IT Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            IT Services
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse">
              {" "}
              & Solutions
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive technology solutions to power your business growth. 
            From cloud infrastructure to cybersecurity, we provide enterprise-grade IT services that drive innovation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Get IT Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/demo"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View Our Work
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {stat.icon}
                </div>
                <div className="text-2xl md:text-3xl font-bold text-white mb-2">{stat.number}</div>
                <div className="text-gray-300 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We Master
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We work with cutting-edge technologies to deliver the best solutions for your business
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
              >
                <h3 className="text-lg font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {tech.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {tech.items.map((item, itemIndex) => (
                    <span
                      key={itemIndex}
                      className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 text-cyan-400 text-xs rounded-full border border-cyan-500/30"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category.name}
                className="px-6 py-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service) => (
              <div
                key={service.id}
                className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
              >
                {service.popular && (
                  <div className="absolute top-4 right-4">
                    <div className="flex items-center px-2 py-1 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                      <Star className="w-3 h-3 text-yellow-400 fill-current mr-1" />
                      <span className="text-xs text-yellow-400 font-medium">Popular</span>
                    </div>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform`}
                  >
                    {service.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      {service.name}
                    </h3>
                    <p className="text-cyan-400 font-medium text-sm">{service.tagline}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-xs bg-purple-500/20 text-purple-400 px-2 py-1 rounded-full">
                        {service.category}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-2xl font-bold text-white">{service.price}</span>
                    <span className="text-xs text-gray-400">
                      {service.price.includes('/project') ? 'per project' : 'per month'}
                    </span>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Key Features:</h4>
                  <ul className="space-y-1">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-xs text-gray-300">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-xs text-cyan-400">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                </div>
                
                <div className="flex gap-2">
                  <Link
                    to={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 inline group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <Link
                    to="/contact"
                    className="px-4 py-2 border border-cyan-400 text-cyan-400 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-cyan-900/30 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 leading-relaxed">
            Partner with us to build a robust, scalable, and secure technology foundation for your business. 
            From cloud migration to cybersecurity, we have the expertise you need.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
            >
              Start Your IT Transformation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/pricing"
              className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
            >
              View IT Pricing
              <Sparkles className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;