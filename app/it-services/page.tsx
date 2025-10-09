import React, { useState, useEffect } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { 
  Cloud, 
  Shield, 
  Server, 
  Database, 
  Network, 
  Smartphone, 
  Globe, 
  Code, 
  Settings, 
  Monitor, 
  HardDrive, 
  Wifi, 
  Lock, 
  CheckCircle, 
  Star, 
  ArrowRight, 
  ExternalLink,
  Zap,
  BarChart,
  Users,
  Mail,
  Calendar,
  FileText,
  Image,
  Video,
  Cpu,
  Eye,
  MessageSquare,
  TrendingUp,
  Target
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const itServices = [
    {
      id: 1,
      name: "Cloud Infrastructure",
      description: "Comprehensive cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud.",
      icon: Cloud,
      price: "$2,000",
      period: "/month",
      features: [
        "Cloud Migration Strategy",
        "Multi-cloud Architecture",
        "Cost Optimization",
        "Security Implementation",
        "24/7 Monitoring",
        "Disaster Recovery"
      ],
      category: "Infrastructure",
      color: "text-blue-400",
      bgColor: "bg-blue-500/10",
      borderColor: "border-blue-500/30",
      useCases: ["Cloud Migration", "Hybrid Cloud", "Cost Optimization", "Scalability"]
    },
    {
      id: 2,
      name: "Cybersecurity Solutions",
      description: "Advanced security services including threat detection, vulnerability assessment, and compliance management.",
      icon: Shield,
      price: "$3,500",
      period: "/month",
      features: [
        "Threat Detection & Response",
        "Vulnerability Assessment",
        "Security Auditing",
        "Compliance Management",
        "Incident Response",
        "Security Training"
      ],
      category: "Security",
      color: "text-red-400",
      bgColor: "bg-red-500/10",
      borderColor: "border-red-500/30",
      useCases: ["Threat Protection", "Compliance", "Risk Assessment", "Incident Response"]
    },
    {
      id: 3,
      name: "Network Management",
      description: "Complete network infrastructure design, implementation, and ongoing management for optimal performance.",
      icon: Network,
      price: "$1,800",
      period: "/month",
      features: [
        "Network Design & Planning",
        "Router & Switch Configuration",
        "Wireless Solutions",
        "Network Monitoring",
        "Performance Optimization",
        "Troubleshooting & Support"
      ],
      category: "Networking",
      color: "text-green-400",
      bgColor: "bg-green-500/10",
      borderColor: "border-green-500/30",
      useCases: ["Network Design", "Performance Optimization", "Wireless Solutions", "Monitoring"]
    },
    {
      id: 4,
      name: "Database Management",
      description: "Expert database administration, optimization, and maintenance for SQL and NoSQL databases.",
      icon: Database,
      price: "$2,200",
      period: "/month",
      features: [
        "Database Design & Optimization",
        "Performance Tuning",
        "Backup & Recovery",
        "Security Implementation",
        "Migration Services",
        "24/7 Monitoring"
      ],
      category: "Database",
      color: "text-purple-400",
      bgColor: "bg-purple-500/10",
      borderColor: "border-purple-500/30",
      useCases: ["Database Optimization", "Migration", "Backup & Recovery", "Performance Tuning"]
    },
    {
      id: 5,
      name: "DevOps & CI/CD",
      description: "Streamlined development workflows with automated testing, deployment, and infrastructure management.",
      icon: Settings,
      price: "$2,800",
      period: "/month",
      features: [
        "CI/CD Pipeline Setup",
        "Infrastructure as Code",
        "Automated Testing",
        "Container Orchestration",
        "Monitoring & Logging",
        "Security Integration"
      ],
      category: "DevOps",
      color: "text-orange-400",
      bgColor: "bg-orange-500/10",
      borderColor: "border-orange-500/30",
      useCases: ["Automated Deployment", "Infrastructure Management", "Testing Automation", "Monitoring"]
    },
    {
      id: 6,
      name: "Web Development",
      description: "Custom web applications and websites built with modern technologies and best practices.",
      icon: Globe,
      price: "$1,500",
      period: "/month",
      features: [
        "Custom Web Applications",
        "Responsive Design",
        "E-commerce Solutions",
        "API Development",
        "Performance Optimization",
        "SEO Implementation"
      ],
      category: "Development",
      color: "text-cyan-400",
      bgColor: "bg-cyan-500/10",
      borderColor: "border-cyan-500/30",
      useCases: ["Custom Applications", "E-commerce", "API Development", "Performance Optimization"]
    },
    {
      id: 7,
      name: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with modern UI/UX design.",
      icon: Smartphone,
      price: "$2,500",
      period: "/month",
      features: [
        "Native iOS & Android Apps",
        "Cross-platform Development",
        "UI/UX Design",
        "App Store Deployment",
        "Push Notifications",
        "Analytics Integration"
      ],
      category: "Mobile",
      color: "text-indigo-400",
      bgColor: "bg-indigo-500/10",
      borderColor: "border-indigo-500/30",
      useCases: ["Native Apps", "Cross-platform", "App Store Deployment", "UI/UX Design"]
    },
    {
      id: 8,
      name: "IT Support & Helpdesk",
      description: "Comprehensive IT support services with 24/7 helpdesk, remote assistance, and proactive monitoring.",
      icon: Monitor,
      price: "$1,200",
      period: "/month",
      features: [
        "24/7 Helpdesk Support",
        "Remote Assistance",
        "Hardware & Software Support",
        "User Training",
        "Proactive Monitoring",
        "Incident Management"
      ],
      category: "Support",
      color: "text-yellow-400",
      bgColor: "bg-yellow-500/10",
      borderColor: "border-yellow-500/30",
      useCases: ["Technical Support", "User Training", "Incident Management", "Proactive Monitoring"]
    }
  ];

  const categories = [
    "All",
    "Infrastructure",
    "Security",
    "Networking",
    "Database",
    "DevOps",
    "Development",
    "Mobile",
    "Support"
  ];

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredServices, setFilteredServices] = useState(itServices);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredServices(itServices);
    } else {
      setFilteredServices(itServices.filter(service => service.category === selectedCategory));
    }
  }, [selectedCategory]);

  const stats = [
    { number: "99.9%", label: "Uptime Guarantee", icon: Shield },
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "24/7", label: "Support Available", icon: Monitor },
    { number: "50+", label: "Expert Engineers", icon: Users }
  ];

  const technologies = [
    { name: "AWS", icon: Cloud, color: "text-orange-400" },
    { name: "Azure", icon: Cloud, color: "text-blue-400" },
    { name: "Google Cloud", icon: Cloud, color: "text-green-400" },
    { name: "Docker", icon: Settings, color: "text-cyan-400" },
    { name: "Kubernetes", icon: Settings, color: "text-blue-400" },
    { name: "Terraform", icon: Code, color: "text-purple-400" },
    { name: "Jenkins", icon: Settings, color: "text-red-400" },
    { name: "GitLab", icon: Code, color: "text-orange-400" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid neural-network-bg">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16 pt-24">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 neon-text cyber-text">
            IT Services
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium cyber-glow">
            Comprehensive technology solutions for modern businesses
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto mb-8 leading-relaxed">
            From cloud infrastructure to cybersecurity, our IT services provide the foundation 
            for your digital transformation with enterprise-grade solutions and expert support.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="quantum-card p-6 energy-pulse text-center">
                <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <div className="text-2xl md:text-3xl font-bold text-white mb-2 neon-text">
                  {stat.number}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Technologies We Work With */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Technologies We Work With
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 max-w-6xl mx-auto">
            {technologies.map((tech, index) => (
              <div key={index} className="quantum-card p-4 energy-pulse text-center">
                <tech.icon className={`w-8 h-8 ${tech.color} mx-auto mb-2`} />
                <div className="text-sm text-white font-medium">{tech.name}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Category Filter */}
        <section className="mb-12">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  selectedCategory === category
                    ? 'cyber-button'
                    : 'quantum-card text-gray-300 hover:text-white hover:neon-glow'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className={`quantum-card p-6 energy-pulse ${service.borderColor} border-2`}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center`}>
                    <service.icon className={`w-6 h-6 ${service.color}`} />
                  </div>
                  <span className={`text-xs font-medium px-3 py-1 rounded-full ${service.bgColor} ${service.color}`}>
                    {service.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 neon-text">
                  {service.name}
                </h3>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <span className="text-3xl font-bold text-white">{service.price}</span>
                  <span className="text-gray-400">{service.period}</span>
                </div>
                
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-white mb-2">Use Cases:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.useCases.map((useCase, index) => (
                      <span key={index} className="text-xs px-2 py-1 bg-gray-800 text-gray-300 rounded">
                        {useCase}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <button className="cyber-button flex-1 text-center py-3">
                    Get Started
                  </button>
                  <button className={`quantum-card ${service.borderColor} border-2 px-4 py-3 hover:neon-glow transition-all duration-300`}>
                    <ExternalLink className="w-5 h-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IT Service Process */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            Our IT Service Process
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            <div className="quantum-card p-6 energy-pulse text-center">
              <div className="w-16 h-16 bg-cyan-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-cyan-400">1</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Assessment</h3>
              <p className="text-gray-300 text-sm">
                Comprehensive analysis of your current IT infrastructure and business requirements.
              </p>
            </div>

            <div className="quantum-card p-6 energy-pulse text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-400">2</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Planning</h3>
              <p className="text-gray-300 text-sm">
                Develop a customized IT strategy and roadmap aligned with your business goals.
              </p>
            </div>

            <div className="quantum-card p-6 energy-pulse text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-400">3</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Implementation</h3>
              <p className="text-gray-300 text-sm">
                Deploy and configure IT solutions with minimal disruption to your operations.
              </p>
            </div>

            <div className="quantum-card p-6 energy-pulse text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-400">4</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Support</h3>
              <p className="text-gray-300 text-sm">
                Ongoing monitoring, maintenance, and support to ensure optimal performance.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center neon-text">
            IT Service Packages
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="quantum-card p-8 energy-pulse">
              <h3 className="text-2xl font-bold text-white mb-4">Basic IT</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$1,200</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Basic IT Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Email Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Remote Assistance
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Monthly Reports
                </li>
              </ul>
              <button className="cyber-button w-full text-center py-3">
                Get Started
              </button>
            </div>

            <div className="quantum-card p-8 energy-pulse border-2 border-cyan-400 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional IT</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$3,500</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Priority IT Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 Phone Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Proactive Monitoring
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Security Management
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Cloud Services
                </li>
              </ul>
              <button className="cyber-button w-full text-center py-3">
                Get Started
              </button>
            </div>

            <div className="quantum-card p-8 energy-pulse">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise IT</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold text-white">$8,000</span>
                <span className="text-gray-400">/month</span>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Dedicated IT Team
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  24/7 On-site Support
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Custom Solutions
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  Disaster Recovery
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="w-5 h-5 text-green-400 mr-3" />
                  SLA Guarantee
                </li>
              </ul>
              <button className="cyber-button w-full text-center py-3">
                Contact Sales
              </button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-8 sm:p-12 quantum-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our expert IT team help you build a robust, secure, and scalable technology foundation 
            that drives your business forward.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button w-full sm:w-auto text-center"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button w-full sm:w-auto text-center"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free IT Consultation
            </a>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;