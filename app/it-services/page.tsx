import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Server, 
  Shield, 
  Cloud, 
  Database, 
  Lock, 
  Globe, 
  Cpu, 
  BarChart3, 
  Users, 
  Mail, 
  Calendar,
  CheckCircle,
  Star,
  ArrowRight,
  Sparkles,
  Rocket,
  Target,
  TrendingUp,
  DollarSign,
  Clock,
  Award,
  Monitor,
  Smartphone,
  Laptop,
  Wifi,
  HardDrive,
  Network,
  Settings,
  Zap,
  Layers,
  Code,
  Terminal,
  GitBranch,
  Package,
  AlertTriangle,
  CheckSquare,
  RefreshCw,
  Download,
  Upload,
  Eye,
  Key,
  FileText,
  Headphones
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      id: 1,
      name: "Cloud Infrastructure & Migration",
      description: "Complete cloud transformation services including migration, optimization, and management across AWS, Azure, and Google Cloud platforms.",
      features: [
        "Multi-cloud Strategy & Planning",
        "Cloud Migration & Modernization",
        "Infrastructure as Code (IaC)",
        "Cost Optimization & Monitoring",
        "Disaster Recovery & Backup",
        "Security & Compliance",
        "24/7 Monitoring & Support",
        "Performance Optimization"
      ],
      pricing: {
        starter: { price: 1999, period: "month", features: ["Single cloud", "Basic monitoring", "Email support"] },
        professional: { price: 4999, period: "month", features: ["Multi-cloud", "Advanced monitoring", "Phone support"] },
        enterprise: { price: 9999, period: "month", features: ["Hybrid cloud", "Custom solutions", "Dedicated support"] }
      },
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      category: "Cloud Services",
      marketPrice: "$3999-14999/month",
      savings: "50%",
      useCases: ["Digital Transformation", "Scalability", "Cost Reduction", "Disaster Recovery"]
    },
    {
      id: 2,
      name: "Cybersecurity & Compliance",
      description: "Comprehensive security solutions including threat detection, vulnerability assessment, compliance management, and incident response.",
      features: [
        "Threat Detection & Response",
        "Vulnerability Assessment",
        "Penetration Testing",
        "Security Audits & Compliance",
        "Identity & Access Management",
        "Data Protection & Encryption",
        "Security Training & Awareness",
        "Incident Response Planning"
      ],
      pricing: {
        starter: { price: 1499, period: "month", features: ["Basic security", "Monthly reports", "Email support"] },
        professional: { price: 3999, period: "month", features: ["Advanced security", "Weekly reports", "Phone support"] },
        enterprise: { price: 7999, period: "month", features: ["Enterprise security", "Real-time monitoring", "Dedicated support"] }
      },
      icon: Shield,
      color: "from-red-500 to-orange-500",
      category: "Security",
      marketPrice: "$2999-11999/month",
      savings: "50%",
      useCases: ["Data Protection", "Compliance", "Threat Prevention", "Risk Management"]
    },
    {
      id: 3,
      name: "Network Infrastructure & Management",
      description: "Complete network design, implementation, and management services including LAN, WAN, wireless, and SD-WAN solutions.",
      features: [
        "Network Design & Architecture",
        "LAN/WAN Implementation",
        "Wireless Network Solutions",
        "SD-WAN & SDN",
        "Network Security",
        "Performance Monitoring",
        "Capacity Planning",
        "Network Optimization"
      ],
      pricing: {
        starter: { price: 999, period: "month", features: ["Basic network", "Standard monitoring", "Email support"] },
        professional: { price: 2499, period: "month", features: ["Advanced network", "Real-time monitoring", "Phone support"] },
        enterprise: { price: 4999, period: "month", features: ["Enterprise network", "Custom solutions", "Dedicated support"] }
      },
      icon: Network,
      color: "from-green-500 to-emerald-500",
      category: "Networking",
      marketPrice: "$1999-6999/month",
      savings: "50%",
      useCases: ["Connectivity", "Performance", "Scalability", "Reliability"]
    },
    {
      id: 4,
      name: "Data Management & Analytics",
      description: "Comprehensive data solutions including database management, data warehousing, analytics, and business intelligence platforms.",
      features: [
        "Database Design & Optimization",
        "Data Warehousing",
        "ETL/ELT Processes",
        "Business Intelligence",
        "Data Analytics & Reporting",
        "Data Governance",
        "Data Quality Management",
        "Real-time Data Processing"
      ],
      pricing: {
        starter: { price: 1299, period: "month", features: ["Single database", "Basic analytics", "Email support"] },
        professional: { price: 2999, period: "month", features: ["Multiple databases", "Advanced analytics", "Phone support"] },
        enterprise: { price: 5999, period: "month", features: ["Data lake", "Custom analytics", "Dedicated support"] }
      },
      icon: Database,
      color: "from-purple-500 to-pink-500",
      category: "Data Management",
      marketPrice: "$2599-8999/month",
      savings: "50%",
      useCases: ["Data Insights", "Business Intelligence", "Data Quality", "Compliance"]
    },
    {
      id: 5,
      name: "IT Support & Help Desk",
      description: "24/7 IT support services including help desk, remote support, on-site assistance, and IT asset management.",
      features: [
        "24/7 Help Desk Support",
        "Remote & On-site Support",
        "IT Asset Management",
        "Software License Management",
        "Hardware Procurement",
        "User Training & Onboarding",
        "IT Documentation",
        "Performance Monitoring"
      ],
      pricing: {
        starter: { price: 799, period: "month", features: ["50 users", "Business hours", "Email support"] },
        professional: { price: 1999, period: "month", features: ["200 users", "Extended hours", "Phone support"] },
        enterprise: { price: 3999, period: "month", features: ["Unlimited users", "24/7 support", "Dedicated support"] }
      },
      icon: Headphones,
      color: "from-indigo-500 to-blue-500",
      category: "Support",
      marketPrice: "$1599-5999/month",
      savings: "50%",
      useCases: ["User Support", "Issue Resolution", "IT Management", "Productivity"]
    },
    {
      id: 6,
      name: "DevOps & CI/CD Pipeline",
      description: "Complete DevOps solutions including continuous integration, deployment automation, infrastructure management, and monitoring.",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure Automation",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security Integration",
        "Performance Optimization",
        "Disaster Recovery",
        "Team Training"
      ],
      pricing: {
        starter: { price: 1999, period: "month", features: ["Basic pipeline", "Standard monitoring", "Email support"] },
        professional: { price: 4999, period: "month", features: ["Advanced pipeline", "Real-time monitoring", "Phone support"] },
        enterprise: { price: 9999, period: "month", features: ["Custom pipeline", "Enterprise monitoring", "Dedicated support"] }
      },
      icon: GitBranch,
      color: "from-yellow-500 to-orange-500",
      category: "DevOps",
      marketPrice: "$3999-14999/month",
      savings: "50%",
      useCases: ["Automation", "Deployment", "Monitoring", "Scalability"]
    },
    {
      id: 7,
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup and disaster recovery solutions ensuring business continuity and data protection.",
      features: [
        "Automated Backup Systems",
        "Disaster Recovery Planning",
        "Data Replication",
        "Recovery Testing",
        "Compliance Backup",
        "Cloud Backup Solutions",
        "Recovery Time Optimization",
        "Business Continuity Planning"
      ],
      pricing: {
        starter: { price: 599, period: "month", features: ["Basic backup", "Daily backups", "Email support"] },
        professional: { price: 1499, period: "month", features: ["Advanced backup", "Real-time backup", "Phone support"] },
        enterprise: { price: 2999, period: "month", features: ["Enterprise backup", "Custom solutions", "Dedicated support"] }
      },
      icon: HardDrive,
      color: "from-teal-500 to-cyan-500",
      category: "Backup & Recovery",
      marketPrice: "$1199-4999/month",
      savings: "50%",
      useCases: ["Data Protection", "Business Continuity", "Compliance", "Risk Mitigation"]
    },
    {
      id: 8,
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting services including technology assessment, roadmap planning, and digital transformation guidance.",
      features: [
        "Technology Assessment",
        "IT Strategy & Roadmap",
        "Digital Transformation",
        "Technology Selection",
        "Cost-Benefit Analysis",
        "Vendor Management",
        "Change Management",
        "Training & Development"
      ],
      pricing: {
        starter: { price: 2999, period: "project", features: ["Basic assessment", "Standard report", "Email support"] },
        professional: { price: 7999, period: "project", features: ["Comprehensive assessment", "Detailed roadmap", "Phone support"] },
        enterprise: { price: 19999, period: "project", features: ["Full transformation", "Ongoing support", "Dedicated support"] }
      },
      icon: Target,
      color: "from-pink-500 to-rose-500",
      category: "Consulting",
      marketPrice: "$5999-29999/project",
      savings: "50%",
      useCases: ["Strategic Planning", "Technology Selection", "Digital Transformation", "Cost Optimization"]
    }
  ];

  const categories = ["All", "Cloud Services", "Security", "Networking", "Data Management", "Support", "DevOps", "Backup & Recovery", "Consulting"];
  const filteredServices = selectedCategory === "All" 
    ? itServices 
    : itServices.filter(service => service.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      {/* Animated Background Particles */}
      <div className="particles">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${6 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
            <Server className="w-4 h-4" />
            <span>IT Services & Solutions</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6">
            <span className="holographic">Enterprise-Grade</span>
            <br />
            <span className="text-white">IT Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
            Comprehensive IT services that keep your business running smoothly, securely, and efficiently. 
            From cloud migration to cybersecurity, we've got you covered.
          </p>

          {/* Key Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-cyan-400 mb-2">8+</div>
              <div className="text-gray-300">IT Service Categories</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-green-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
            <div className="cyber-card p-6 text-center">
              <div className="text-3xl font-bold text-yellow-400 mb-2">50%</div>
              <div className="text-gray-300">Cost Savings</div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg'
                  : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredServices.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`cyber-card p-8 hover:scale-105 transition-all duration-500 group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Service Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${service.color}`}>
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-400">{service.category}</div>
                    <div className="text-xs text-green-400 font-semibold">{service.savings} Savings</div>
                  </div>
                </div>

                {/* Service Info */}
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Key Features</h4>
                  <ul className="space-y-2">
                    {service.features.slice(0, 4).map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Use Cases */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-purple-400 mb-3 uppercase tracking-wider">Use Cases</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.slice(0, 2).map((useCase, idx) => (
                      <span key={idx} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Pricing */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-cyan-400 mb-3 uppercase tracking-wider">Pricing</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Starter</span>
                      <span className="text-lg font-bold text-white">${service.pricing.starter.price}/{service.pricing.starter.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Professional</span>
                      <span className="text-lg font-bold text-cyan-400">${service.pricing.professional.price}/{service.pricing.professional.period}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-300">Enterprise</span>
                      <span className="text-lg font-bold text-purple-400">${service.pricing.enterprise.price}/{service.pricing.enterprise.period}</span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2">
                    Market Price: {service.marketPrice}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full futuristic-btn group">
                  <span className="flex items-center justify-center space-x-2">
                    <span>Get Started</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </span>
                </button>
              </div>
            );
          })}
        </div>

        {/* IT Capabilities Section */}
        <div className="cyber-card p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Our <span className="holographic">IT Capabilities</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We provide comprehensive IT services that cover every aspect of your technology infrastructure and operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Cloud className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cloud Services</h3>
              <p className="text-gray-300 text-sm">
                Complete cloud transformation, migration, and management across all major cloud platforms.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Cybersecurity</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive security solutions to protect your data, systems, and business operations.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Network className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Networking</h3>
              <p className="text-gray-300 text-sm">
                Advanced network design, implementation, and management for optimal connectivity and performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Database className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Data Management</h3>
              <p className="text-gray-300 text-sm">
                Complete data solutions including storage, analytics, and business intelligence platforms.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="cyber-card p-12 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-6">
              Why Choose Our <span className="holographic">IT Services</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver enterprise-grade IT solutions with unmatched expertise, reliability, and cost-effectiveness.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Certified Experts</h3>
              <p className="text-gray-300">
                Our team holds industry-leading certifications and has decades of combined experience in enterprise IT.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">24/7 Support</h3>
              <p className="text-gray-300">
                Round-the-clock monitoring and support to ensure your systems are always running at peak performance.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cost Effective</h3>
              <p className="text-gray-300">
                Save up to 50% on IT costs while getting enterprise-grade solutions and support.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our comprehensive IT services and experience the difference professional IT management can make.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="futuristic-btn text-lg px-8 py-4"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="mailto:kleber@ziontechgroup.com"
              className="bg-white/10 text-white px-8 py-4 rounded-xl font-semibold border border-cyan-500 hover:bg-cyan-500/20 transition-all duration-300"
            >
              Get Free IT Assessment
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;