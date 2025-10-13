import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  Cloud, 
  Shield, 
  Code, 
  Smartphone, 
  Database, 
  Network, 
  Server, 
  Lock, 
  Zap, 
  Globe,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Users,
  Activity,
  Settings,
  Monitor,
  HardDrive,
  Wifi,
  Cpu,
  MemoryStick
} from "lucide-react";

export default function ItServicesPage() {
  const itServices = [
    {
      id: "cloud-infrastructure",
      title: "Cloud Infrastructure & Migration",
      description: "Comprehensive cloud solutions including AWS, Azure, and Google Cloud migration, optimization, and management services.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $2,500/month",
      features: [
        "Multi-cloud strategy and planning",
        "Cloud migration and optimization",
        "Infrastructure as Code (IaC)",
        "Auto-scaling and load balancing",
        "Disaster recovery solutions",
        "Cost optimization and monitoring"
      ],
      benefits: [
        "Reduce infrastructure costs by 40%",
        "Improve scalability and performance",
        "Enhance security and compliance",
        "Enable remote work capabilities"
      ],
      link: "/cloud-infrastructure"
    },
    {
      id: "cybersecurity-solutions",
      title: "Cybersecurity Solutions",
      description: "Advanced security services including threat detection, vulnerability assessment, and compliance management for enterprise environments.",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      price: "Starting at $1,800/month",
      features: [
        "Security assessment and auditing",
        "Penetration testing",
        "Incident response planning",
        "Compliance management (SOC2, GDPR)",
        "Security awareness training",
        "24/7 monitoring and support"
      ],
      benefits: [
        "Protect against 99.9% of threats",
        "Ensure regulatory compliance",
        "Reduce security incidents by 95%",
        "Protect customer data and reputation"
      ],
      link: "/cybersecurity-solutions"
    },
    {
      id: "web-development",
      title: "Web Development & Design",
      description: "Modern web applications with responsive design, progressive web app features, and optimal performance optimization.",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      price: "Starting at $5,000/project",
      features: [
        "Responsive web design",
        "Progressive Web Apps (PWA)",
        "E-commerce solutions",
        "CMS development",
        "API development and integration",
        "Performance optimization"
      ],
      benefits: [
        "Increase conversion rates by 200%",
        "Improve user experience",
        "Boost search engine rankings",
        "Enable mobile-first approach"
      ],
      link: "/web-development"
    },
    {
      id: "mobile-development",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with advanced features and seamless user experience.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $8,000/app",
      features: [
        "Native iOS and Android apps",
        "Cross-platform development (React Native)",
        "App store optimization",
        "Push notifications",
        "Offline functionality",
        "App analytics and monitoring"
      ],
      benefits: [
        "Reach mobile-first customers",
        "Increase user engagement",
        "Generate new revenue streams",
        "Improve brand visibility"
      ],
      link: "/mobile-development"
    },
    {
      id: "database-management",
      title: "Database Management & Optimization",
      description: "Comprehensive database services including design, optimization, migration, and maintenance for optimal performance.",
      icon: <Database className="w-8 h-8" />,
      color: "from-orange-500 to-yellow-500",
      price: "Starting at $1,200/month",
      features: [
        "Database design and architecture",
        "Performance optimization",
        "Data migration services",
        "Backup and recovery solutions",
        "Security hardening",
        "Monitoring and maintenance"
      ],
      benefits: [
        "Improve query performance by 300%",
        "Ensure data integrity and security",
        "Reduce downtime to near zero",
        "Scale with business growth"
      ],
      link: "/database-management"
    },
    {
      id: "network-infrastructure",
      title: "Network Infrastructure & Security",
      description: "Enterprise-grade network design, implementation, and security solutions for reliable and secure connectivity.",
      icon: <Network className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      price: "Starting at $2,000/month",
      features: [
        "Network design and implementation",
        "Wireless network solutions",
        "VPN and remote access",
        "Network security hardening",
        "Performance monitoring",
        "Disaster recovery planning"
      ],
      benefits: [
        "Ensure reliable connectivity",
        "Enhance network security",
        "Support remote work",
        "Optimize network performance"
      ],
      link: "/network-infrastructure"
    },
    {
      id: "custom-software",
      title: "Custom Software Development",
      description: "Tailored software solutions designed specifically for your business needs with modern technologies and best practices.",
      icon: <Server className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $10,000/project",
      features: [
        "Custom application development",
        "Legacy system modernization",
        "API development and integration",
        "Microservices architecture",
        "Quality assurance and testing",
        "Ongoing maintenance and support"
      ],
      benefits: [
        "Solve unique business challenges",
        "Improve operational efficiency",
        "Gain competitive advantage",
        "Scale with business needs"
      ],
      link: "/custom-software"
    },
    {
      id: "cloud-native-development",
      title: "Cloud-Native Development",
      description: "Modern cloud-native applications using containers, microservices, and serverless technologies for maximum scalability.",
      icon: <Zap className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      price: "Starting at $6,000/project",
      features: [
        "Container orchestration (Kubernetes)",
        "Microservices architecture",
        "Serverless applications",
        "CI/CD pipeline setup",
        "Monitoring and observability",
        "Auto-scaling solutions"
      ],
      benefits: [
        "Achieve maximum scalability",
        "Reduce operational overhead",
        "Improve deployment speed",
        "Lower infrastructure costs"
      ],
      link: "/cloud-native-development"
    },
    {
      id: "blockchain-development",
      title: "Blockchain & Web3 Solutions",
      description: "Cutting-edge blockchain development including smart contracts, DeFi applications, and Web3 integration services.",
      icon: <Lock className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      price: "Starting at $15,000/project",
      features: [
        "Smart contract development",
        "DeFi application development",
        "NFT marketplace creation",
        "Web3 integration",
        "Blockchain consulting",
        "Security auditing"
      ],
      benefits: [
        "Enter the Web3 ecosystem",
        "Create new revenue streams",
        "Enhance security and transparency",
        "Future-proof your business"
      ],
      link: "/blockchain-development"
    },
    {
      id: "data-engineering",
      title: "Data Engineering & Analytics",
      description: "Comprehensive data solutions including ETL pipelines, data warehousing, and advanced analytics platforms.",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      price: "Starting at $3,500/month",
      features: [
        "Data pipeline development",
        "Data warehousing solutions",
        "Real-time data processing",
        "Data visualization dashboards",
        "Machine learning integration",
        "Data governance and security"
      ],
      benefits: [
        "Make data-driven decisions",
        "Improve business intelligence",
        "Enable predictive analytics",
        "Optimize data workflows"
      ],
      link: "/data-engineering"
    },
    {
      id: "devops-automation",
      title: "DevOps & Automation",
      description: "Complete DevOps solutions including CI/CD pipelines, infrastructure automation, and monitoring systems.",
      icon: <Settings className="w-8 h-8" />,
      color: "from-amber-500 to-orange-500",
      price: "Starting at $2,200/month",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Automated testing",
        "Monitoring and alerting",
        "Deployment automation",
        "Performance optimization"
      ],
      benefits: [
        "Accelerate development cycles",
        "Reduce deployment errors",
        "Improve system reliability",
        "Enable continuous delivery"
      ],
      link: "/devops-automation"
    },
    {
      id: "it-consulting",
      title: "IT Strategy & Consulting",
      description: "Strategic IT consulting services to help align technology with business goals and optimize IT investments.",
      icon: <Users className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      price: "Starting at $200/hour",
      features: [
        "IT strategy development",
        "Technology assessment",
        "Digital transformation planning",
        "Vendor evaluation",
        "Cost optimization",
        "Change management"
      ],
      benefits: [
        "Align IT with business goals",
        "Optimize technology investments",
        "Plan digital transformation",
        "Reduce IT complexity"
      ],
      link: "/it-consulting"
    }
  ];

  const contactInfo = {
    phone: "+1 302 464 0950",
    email: "kleber@ziontechgroup.com",
    address: "364 E Main St STE 1008 Middletown DE 19709",
    website: "https://ziontechgroup.com"
  };

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud solutions, cybersecurity, web development, mobile apps, and digital transformation for modern businesses."
        />
        <meta
          name="keywords"
          content="IT services, cloud computing, cybersecurity, web development, mobile development, database management, network infrastructure, custom software"
        />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="neon-cyan">IT Services</span> & Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology services to power your digital transformation. 
              From cloud infrastructure to cybersecurity, we provide the expertise you need to succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-glow"
              >
                Get IT Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Free Technology Assessment
              </Link>
            </div>
            
            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 max-w-4xl mx-auto">
              <h3 className="text-xl font-semibold text-white mb-4">Ready to Transform Your IT Infrastructure?</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center space-x-2">
                  <Monitor className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">Call: {contactInfo.phone}</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <Settings className="w-4 h-4 text-cyan-400" />
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

        {/* IT Services Grid */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Our <span className="neon-purple">IT Services</span> Portfolio
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                End-to-end technology solutions designed to modernize your infrastructure, 
                enhance security, and drive business growth.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div
                  key={service.id}
                  className="futuristic-card group p-6 hover:scale-105 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div
                      className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      {service.icon}
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-white">{service.price}</div>
                      <div className="text-xs text-gray-400">starting price</div>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-300 mb-4 text-sm">
                    {service.description}
                  </p>
                  
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Features:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-green-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-purple-400 mb-2">Benefits:</h4>
                    <ul className="text-xs text-gray-300 space-y-1">
                      {service.benefits.slice(0, 2).map((benefit, idx) => (
                        <li key={idx} className="flex items-center space-x-2">
                          <TrendingUp className="w-3 h-3 text-purple-400" />
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex space-x-2">
                    <Link
                      to={service.link}
                      className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-2 rounded-lg text-sm font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 text-center"
                    >
                      Learn More
                    </Link>
                    <Link
                      to="/contact"
                      className="border border-cyan-400 text-cyan-400 px-4 py-2 rounded-lg text-sm font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
                    >
                      Contact
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technology Stack Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                <span className="neon-green">Technology Stack</span> & Expertise
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with the latest technologies and frameworks to deliver cutting-edge solutions.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cloud className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Cloud Platforms</h3>
                <p className="text-gray-300 text-sm">
                  AWS, Azure, Google Cloud, Kubernetes, Docker, Serverless
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Code className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Programming</h3>
                <p className="text-gray-300 text-sm">
                  React, Node.js, Python, Java, C#, Go, TypeScript
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Database className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Databases</h3>
                <p className="text-gray-300 text-sm">
                  PostgreSQL, MongoDB, Redis, MySQL, Elasticsearch
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Security</h3>
                <p className="text-gray-300 text-sm">
                  OWASP, Penetration Testing, SOC2, GDPR, Encryption
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Why Choose <span className="neon-green">Zion Tech Group</span> for IT?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We combine technical expertise with business understanding to deliver solutions that drive real results.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Certified Experts</h3>
                <p className="text-gray-300 text-sm">
                  AWS, Azure, and Google Cloud certified professionals with 10+ years experience.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Enterprise Security</h3>
                <p className="text-gray-300 text-sm">
                  Bank-level security with SOC2 compliance and industry best practices.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">Proven Track Record</h3>
                <p className="text-gray-300 text-sm">
                  Successfully delivered 500+ projects for Fortune 500 companies.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Activity className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">24/7 Support</h3>
                <p className="text-gray-300 text-sm">
                  Round-the-clock technical support and proactive monitoring.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Modernize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let us help you build a robust, scalable, and secure technology foundation for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center neon-glow"
              >
                Start Your IT Transformation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/consultation"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300"
              >
                Schedule Technology Assessment
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}