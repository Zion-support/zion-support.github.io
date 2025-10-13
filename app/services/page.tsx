import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  Shield, 
  Cloud, 
  Globe, 
  Settings, 
  Users, 
  BarChart3, 
  ArrowRight,
  Sparkles,
  Star,
  CheckCircle,
  TrendingUp,
  Code,
  Database,
  Server,
  Smartphone,
  Monitor,
  Wifi,
  Lock,
  Zap,
  Target,
  Award,
  DollarSign,
  Play,
  ExternalLink,
  Clock,
  Headphones,
  FileText,
  Network,
  HardDrive,
  Cpu,
  Smartphone as Mobile
} from 'lucide-react';

const ITServicesPage = () => {
  const itServices = [
    {
      name: "Cloud Infrastructure Solutions",
      description: "Comprehensive cloud migration, management, and optimization services for AWS, Azure, and Google Cloud",
      price: "From $2,999/month",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-500",
      link: "/cloud-infrastructure",
      features: ["Cloud Migration", "Infrastructure Management", "Cost Optimization", "Security Implementation", "24/7 Monitoring"],
      popular: true,
      category: "Cloud Services"
    },
    {
      name: "Cybersecurity Solutions",
      description: "Advanced security services including threat assessment, penetration testing, and security monitoring",
      price: "From $1,999/month",
      icon: <Shield className="w-8 h-8" />,
      color: "from-red-500 to-orange-500",
      link: "/cybersecurity-solutions",
      features: ["Threat Assessment", "Penetration Testing", "Security Monitoring", "Incident Response", "Compliance Audits"],
      popular: true,
      category: "Security"
    },
    {
      name: "Network Infrastructure",
      description: "Complete network design, implementation, and management for enterprise-grade connectivity",
      price: "From $1,499/month",
      icon: <Network className="w-8 h-8" />,
      color: "from-green-500 to-emerald-500",
      link: "/network-infrastructure",
      features: ["Network Design", "Implementation", "Performance Optimization", "Security Configuration", "Maintenance"],
      category: "Infrastructure"
    },
    {
      name: "DevOps & CI/CD",
      description: "Automated deployment pipelines, infrastructure as code, and continuous integration services",
      price: "From $2,499/month",
      icon: <Code className="w-8 h-8" />,
      color: "from-purple-500 to-pink-500",
      link: "/devops-cicd",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring & Logging", "Automated Testing"],
      category: "Development"
    },
    {
      name: "Data Center Services",
      description: "Enterprise data center solutions with colocation, managed hosting, and disaster recovery",
      price: "From $3,999/month",
      icon: <Server className="w-8 h-8" />,
      color: "from-slate-500 to-gray-500",
      link: "/data-center-services",
      features: ["Colocation Services", "Managed Hosting", "Disaster Recovery", "Backup Solutions", "24/7 Support"],
      category: "Infrastructure"
    },
    {
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern frameworks",
      price: "From $4,999/project",
      icon: <Mobile className="w-8 h-8" />,
      color: "from-indigo-500 to-purple-500",
      link: "/mobile-development",
      features: ["Native Development", "Cross-platform Apps", "UI/UX Design", "App Store Publishing", "Maintenance"],
      category: "Development"
    },
    {
      name: "Web Development",
      description: "Custom web applications, e-commerce solutions, and content management systems",
      price: "From $3,999/project",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-cyan-500 to-blue-500",
      link: "/web-development",
      features: ["Custom Web Apps", "E-commerce Solutions", "CMS Development", "API Integration", "Performance Optimization"],
      category: "Development"
    },
    {
      name: "IT Support & Helpdesk",
      description: "24/7 technical support, helpdesk services, and IT consulting for businesses of all sizes",
      price: "From $99/user/month",
      icon: <Headphones className="w-8 h-8" />,
      color: "from-orange-500 to-red-500",
      link: "/it-support",
      features: ["24/7 Support", "Remote Assistance", "Hardware Support", "Software Troubleshooting", "User Training"],
      category: "Support"
    },
    {
      name: "Blockchain Development",
      description: "Custom blockchain solutions, smart contracts, and decentralized applications (DApps)",
      price: "From $5,999/project",
      icon: <Database className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/blockchain-development",
      features: ["Smart Contracts", "DApp Development", "Token Creation", "Blockchain Integration", "Security Audits"],
      category: "Development"
    },
    {
      name: "IoT Solutions",
      description: "Internet of Things implementation with device management, data analytics, and connectivity",
      price: "From $2,999/project",
      icon: <Wifi className="w-8 h-8" />,
      color: "from-teal-500 to-cyan-500",
      link: "/iot-solutions",
      features: ["Device Management", "Data Analytics", "Connectivity Solutions", "Security Implementation", "Monitoring"],
      category: "IoT"
    },
    {
      name: "AR/VR Development",
      description: "Immersive experiences with augmented reality and virtual reality applications",
      price: "From $4,999/project",
      icon: <Monitor className="w-8 h-8" />,
      color: "from-pink-500 to-rose-500",
      link: "/ar-vr-development",
      features: ["AR Applications", "VR Experiences", "3D Modeling", "Interactive Design", "Platform Integration"],
      category: "Development"
    },
    {
      name: "IT Consulting",
      description: "Strategic IT consulting, technology assessment, and digital transformation planning",
      price: "From $299/hour",
      icon: <Users className="w-8 h-8" />,
      color: "from-violet-500 to-purple-500",
      link: "/it-consulting",
      features: ["Technology Assessment", "Digital Transformation", "Strategic Planning", "Vendor Selection", "Implementation"],
      category: "Consulting"
    },
    {
      name: "Asset Management",
      description: "IT asset tracking, inventory management, and lifecycle optimization services",
      price: "From $199/month",
      icon: <FileText className="w-8 h-8" />,
      color: "from-emerald-500 to-green-500",
      link: "/asset-management",
      features: ["Asset Tracking", "Inventory Management", "Lifecycle Planning", "Cost Optimization", "Reporting"],
      category: "Management"
    },
    {
      name: "Backup & Recovery",
      description: "Comprehensive backup solutions with disaster recovery and business continuity planning",
      price: "From $499/month",
      icon: <HardDrive className="w-8 h-8" />,
      color: "from-gray-500 to-slate-500",
      link: "/backup-recovery",
      features: ["Automated Backups", "Disaster Recovery", "Business Continuity", "Data Encryption", "Testing"],
      category: "Data Management"
    },
    {
      name: "Performance Optimization",
      description: "System performance tuning, database optimization, and application speed enhancement",
      price: "From $1,999/project",
      icon: <Zap className="w-8 h-8" />,
      color: "from-yellow-500 to-orange-500",
      link: "/performance-optimization",
      features: ["System Tuning", "Database Optimization", "Application Speed", "Load Testing", "Monitoring"],
      category: "Optimization"
    },
    {
      name: "API Development & Management",
      description: "Custom API development, integration services, and API management platforms",
      price: "From $2,499/project",
      icon: <Settings className="w-8 h-8" />,
      color: "from-cyan-500 to-teal-500",
      link: "/api-development",
      features: ["Custom APIs", "Integration Services", "API Management", "Documentation", "Testing"],
      category: "Development"
    },
    {
      name: "Database Services",
      description: "Database design, optimization, migration, and management for all major database systems",
      price: "From $1,999/month",
      icon: <Database className="w-8 h-8" />,
      color: "from-blue-500 to-indigo-500",
      link: "/database-services",
      features: ["Database Design", "Performance Tuning", "Migration Services", "Backup & Recovery", "Monitoring"],
      category: "Data Management"
    },
    {
      name: "Security Auditing",
      description: "Comprehensive security assessments, vulnerability testing, and compliance auditing",
      price: "From $3,999/audit",
      icon: <Lock className="w-8 h-8" />,
      color: "from-red-500 to-pink-500",
      link: "/security-auditing",
      features: ["Security Assessment", "Vulnerability Testing", "Compliance Auditing", "Risk Analysis", "Remediation"],
      category: "Security"
    },
    {
      name: "Cloud Migration",
      description: "Seamless migration to cloud platforms with minimal downtime and data integrity",
      price: "From $4,999/project",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-sky-500 to-blue-500",
      link: "/cloud-migration",
      features: ["Migration Planning", "Data Transfer", "Application Migration", "Testing", "Go-live Support"],
      category: "Cloud Services"
    },
    {
      name: "IT Training & Certification",
      description: "Comprehensive IT training programs and certification preparation for your team",
      price: "From $199/person",
      icon: <Users className="w-8 h-8" />,
      color: "from-purple-500 to-violet-500",
      link: "/it-training",
      features: ["Technical Training", "Certification Prep", "Hands-on Labs", "Custom Curriculum", "Certification"],
      category: "Training"
    }
  ];

  const categories = [
    { name: "Cloud Services", count: 2, color: "from-blue-500 to-cyan-500" },
    { name: "Security", count: 2, color: "from-red-500 to-orange-500" },
    { name: "Infrastructure", count: 2, color: "from-green-500 to-emerald-500" },
    { name: "Development", count: 5, color: "from-purple-500 to-pink-500" },
    { name: "Support", count: 1, color: "from-orange-500 to-red-500" },
    { name: "IoT", count: 1, color: "from-teal-500 to-cyan-500" },
    { name: "Consulting", count: 1, color: "from-violet-500 to-purple-500" },
    { name: "Management", count: 1, color: "from-emerald-500 to-green-500" },
    { name: "Data Management", count: 2, color: "from-gray-500 to-slate-500" },
    { name: "Optimization", count: 1, color: "from-yellow-500 to-orange-500" },
    { name: "Training", count: 1, color: "from-purple-500 to-violet-500" }
  ];

  const benefits = [
    {
      title: "Expert Team",
      description: "Certified professionals with years of experience in enterprise IT solutions",
      icon: <Users className="w-6 h-6" />,
      stat: "50+ experts"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock technical support and monitoring services",
      icon: <Clock className="w-6 h-6" />,
      stat: "Always available"
    },
    {
      title: "Proven Results",
      description: "Track record of successful implementations and satisfied clients",
      icon: <Award className="w-6 h-6" />,
      stat: "99% success rate"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>IT Services - Zion Tech Group | Comprehensive Technology Solutions</title>
        <meta name="description" content="Discover our comprehensive range of IT services including cloud infrastructure, cybersecurity, development, and more. Transform your business with expert technology solutions." />
        <meta name="keywords" content="IT services, cloud infrastructure, cybersecurity, web development, mobile development, DevOps, network solutions, technology consulting" />
      </Helmet>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 mb-6">
            <Sparkles className="w-4 h-4 text-cyan-400 mr-2" />
            <span className="text-cyan-400 text-sm font-medium">Comprehensive IT Solutions</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400">
              IT Services
            </span>
          </h1>
          
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Transform your business with our comprehensive suite of IT services. From cloud infrastructure to cybersecurity, 
            we provide expert technology solutions tailored to your specific business needs.
          </p>
        </div>

        {/* Benefits Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
              <p className="text-gray-300 mb-3">{benefit.description}</p>
              <div className="text-2xl font-bold text-cyan-400">{benefit.stat}</div>
            </div>
          ))}
        </div>

        {/* Categories */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Service Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {categories.map((category, index) => (
              <div key={index} className="text-center group">
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${category.color} flex items-center justify-center mx-auto mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  <Settings className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-white font-medium text-sm">{category.name}</h3>
                <p className="text-gray-400 text-xs">{category.count} services</p>
              </div>
            ))}
          </div>
        </div>

        {/* IT Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {itServices.map((service, index) => (
            <Link
              key={index}
              to={service.link}
              className="group bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10 relative overflow-hidden"
            >
              {service.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Popular
                  </span>
                </div>
              )}
              
              <div className={`w-16 h-16 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              
              <div className="mb-2">
                <span className="text-xs text-cyan-400 font-medium bg-cyan-400/10 px-2 py-1 rounded-full">
                  {service.category}
                </span>
              </div>
              
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                {service.name}
              </h3>
              
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              
              <div className="text-2xl font-bold text-cyan-400 mb-4">
                {service.price}
              </div>
              
              <ul className="space-y-2 mb-6">
                {service.features.slice(0, 3).map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                    <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0" />
                    {feature}
                  </li>
                ))}
                {service.features.length > 3 && (
                  <li className="text-sm text-cyan-400 font-medium">
                    +{service.features.length - 3} more features
                  </li>
                )}
              </ul>
              
              <div className="flex items-center text-cyan-400 text-sm font-medium group-hover:text-cyan-300 transition-colors">
                Learn More
                <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-cyan-500/10 to-purple-500/10 rounded-xl p-8 border border-cyan-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">
              Need a Custom IT Solution?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Our IT experts can create a custom solution tailored to your specific business requirements. 
              Let's discuss your needs and build something extraordinary together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center group shadow-lg hover:shadow-cyan-500/25 hover:scale-105"
              >
                Discuss Your IT Needs
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/demo"
                className="border border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400 hover:text-slate-900 transition-all duration-300 group hover:scale-105"
              >
                View IT Demo
                <Play className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ITServicesPage;
