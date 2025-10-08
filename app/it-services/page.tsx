import React from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { CheckCircle, Star, Server, Shield, Cloud, Database, Code, Network, Monitor, Zap } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 1,
      name: "Cloud Infrastructure Management",
      description: "Comprehensive cloud solutions including migration, optimization, and 24/7 monitoring across AWS, Azure, and Google Cloud.",
      features: [
        "Multi-cloud strategy implementation",
        "Cost optimization and resource management",
        "Disaster recovery and backup solutions",
        "Security compliance and monitoring",
        "Auto-scaling and load balancing",
        "Performance optimization"
      ],
      pricing: "$2,500/month",
      category: "Cloud Services",
      icon: "☁️",
      popular: true,
      marketPrice: "$4,000-8,000/month",
      technologies: ["AWS", "Azure", "Google Cloud", "Terraform", "Kubernetes", "Docker"]
    },
    {
      id: 2,
      name: "Cybersecurity Solutions",
      description: "Enterprise-grade security services including threat detection, vulnerability assessment, and incident response.",
      features: [
        "24/7 security monitoring",
        "Penetration testing and vulnerability assessment",
        "Security awareness training",
        "Compliance management (SOC 2, ISO 27001)",
        "Incident response and forensics",
        "Security architecture design"
      ],
      pricing: "$3,500/month",
      category: "Security",
      icon: "🛡️",
      popular: true,
      marketPrice: "$6,000-12,000/month",
      technologies: ["SIEM", "EDR", "Firewall", "VPN", "Zero Trust", "MFA"]
    },
    {
      id: 3,
      name: "Network Infrastructure Design",
      description: "Complete network architecture design, implementation, and management for enterprise environments.",
      features: [
        "Network architecture design",
        "Wireless network implementation",
        "Network security configuration",
        "Performance monitoring and optimization",
        "VLAN and subnet design",
        "Network documentation and training"
      ],
      pricing: "$1,800/month",
      category: "Networking",
      icon: "🌐",
      popular: false,
      marketPrice: "$3,000-6,000/month",
      technologies: ["Cisco", "Juniper", "Fortinet", "Aruba", "SD-WAN", "MPLS"]
    },
    {
      id: 4,
      name: "Database Administration",
      description: "Expert database management, optimization, and maintenance for SQL and NoSQL databases.",
      features: [
        "Database design and optimization",
        "Performance tuning and monitoring",
        "Backup and recovery strategies",
        "Database security implementation",
        "Migration and upgrade services",
        "24/7 database support"
      ],
      pricing: "$2,200/month",
      category: "Database",
      icon: "🗄️",
      popular: false,
      marketPrice: "$3,500-7,000/month",
      technologies: ["MySQL", "PostgreSQL", "MongoDB", "Redis", "Oracle", "SQL Server"]
    },
    {
      id: 5,
      name: "DevOps & CI/CD Implementation",
      description: "Complete DevOps transformation with automated pipelines, infrastructure as code, and continuous deployment.",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code (IaC)",
        "Container orchestration",
        "Monitoring and logging setup",
        "Automated testing integration",
        "Deployment automation"
      ],
      pricing: "$2,800/month",
      category: "DevOps",
      icon: "⚙️",
      popular: true,
      marketPrice: "$4,500-9,000/month",
      technologies: ["Jenkins", "GitLab CI", "Docker", "Kubernetes", "Ansible", "Terraform"]
    },
    {
      id: 6,
      name: "IT Support & Help Desk",
      description: "Comprehensive IT support services with 24/7 help desk, remote assistance, and on-site support.",
      features: [
        "24/7 help desk support",
        "Remote desktop assistance",
        "Hardware and software troubleshooting",
        "User account management",
        "Software installation and updates",
        "IT asset management"
      ],
      pricing: "$1,200/month",
      category: "Support",
      icon: "🎧",
      popular: false,
      marketPrice: "$2,000-4,000/month",
      technologies: ["ServiceNow", "Jira", "Remote Desktop", "Active Directory", "Office 365", "G Suite"]
    },
    {
      id: 7,
      name: "Data Center Management",
      description: "Complete data center operations including server management, power, cooling, and physical security.",
      features: [
        "Server hardware management",
        "Power and cooling optimization",
        "Physical security implementation",
        "Environmental monitoring",
        "Capacity planning",
        "Disaster recovery planning"
      ],
      pricing: "$4,500/month",
      category: "Data Center",
      icon: "🏢",
      popular: false,
      marketPrice: "$7,000-15,000/month",
      technologies: ["VMware", "Hyper-V", "SAN", "NAS", "UPS", "Environmental Monitoring"]
    },
    {
      id: 8,
      name: "IT Consulting & Strategy",
      description: "Strategic IT consulting to align technology with business objectives and digital transformation initiatives.",
      features: [
        "IT strategy development",
        "Technology roadmap planning",
        "Digital transformation consulting",
        "Vendor evaluation and selection",
        "IT governance and compliance",
        "Change management"
      ],
      pricing: "$3,000/month",
      category: "Consulting",
      icon: "💼",
      popular: true,
      marketPrice: "$5,000-10,000/month",
      technologies: ["ITIL", "COBIT", "Agile", "Scrum", "Project Management", "Business Analysis"]
    },
    {
      id: 9,
      name: "Mobile Device Management",
      description: "Comprehensive mobile device management including BYOD policies, security, and application management.",
      features: [
        "Mobile device enrollment",
        "Security policy enforcement",
        "App distribution and management",
        "Remote wipe and lock capabilities",
        "Compliance monitoring",
        "User training and support"
      ],
      pricing: "$800/month",
      category: "Mobile",
      icon: "📱",
      popular: false,
      marketPrice: "$1,500-3,000/month",
      technologies: ["Microsoft Intune", "VMware Workspace ONE", "MobileIron", "AirWatch", "iOS", "Android"]
    },
    {
      id: 10,
      name: "Backup & Disaster Recovery",
      description: "Comprehensive backup solutions and disaster recovery planning to ensure business continuity.",
      features: [
        "Automated backup scheduling",
        "Off-site backup storage",
        "Disaster recovery testing",
        "Recovery time optimization",
        "Compliance reporting",
        "Business continuity planning"
      ],
      pricing: "$1,500/month",
      category: "Backup",
      icon: "💾",
      popular: false,
      marketPrice: "$2,500-5,000/month",
      technologies: ["Veeam", "Commvault", "Acronis", "AWS Backup", "Azure Backup", "Google Cloud Backup"]
    },
    {
      id: 11,
      name: "IT Asset Management",
      description: "Complete IT asset lifecycle management including procurement, tracking, and disposal.",
      features: [
        "Asset inventory management",
        "License compliance tracking",
        "Procurement optimization",
        "Asset lifecycle planning",
        "Disposal and recycling",
        "Cost optimization"
      ],
      pricing: "$900/month",
      category: "Asset Management",
      icon: "📋",
      popular: false,
      marketPrice: "$1,500-3,000/month",
      technologies: ["ServiceNow", "Lansweeper", "PDQ Inventory", "SCCM", "Asset Panda", "Flexera"]
    },
    {
      id: 12,
      name: "IT Training & Documentation",
      description: "Comprehensive IT training programs and documentation services for staff development and knowledge transfer.",
      features: [
        "Custom training programs",
        "Technical documentation",
        "Process documentation",
        "Video tutorials and guides",
        "Knowledge base creation",
        "Certification preparation"
      ],
      pricing: "$1,000/month",
      category: "Training",
      icon: "📚",
      popular: false,
      marketPrice: "$1,800-3,500/month",
      technologies: ["Confluence", "SharePoint", "LMS", "Video Production", "Technical Writing", "E-learning"]
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 cyber-grid">
      <Navigation />
      
      <main className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <section className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 font-medium">
            Comprehensive IT Services for Modern Businesses
          </p>
          <p className="text-lg text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
            Transform your IT infrastructure with our comprehensive suite of IT services. 
            From cloud migration to cybersecurity, we provide enterprise-grade solutions 
            that ensure your business stays secure, efficient, and competitive.
          </p>
          
          {/* Key Benefits */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🚀</div>
              <h3 className="font-bold text-white mb-3 text-lg">Rapid Deployment</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Deploy IT solutions quickly with our proven methodologies and expert team.</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-bold text-white mb-3 text-lg">Cost Effective</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Save up to 40% on IT costs with our optimized solutions and competitive pricing.</p>
            </div>
            <div className="cyber-card hologram-card">
              <div className="text-3xl mb-3">🔒</div>
              <h3 className="font-bold text-white mb-3 text-lg">Enterprise Security</h3>
              <p className="text-sm text-gray-300 leading-relaxed">Bank-level security with SOC 2 compliance and 24/7 monitoring.</p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map(service => (
              <div key={service.id} className={`cyber-card hologram-card relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <div className="text-5xl mb-4">{service.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{service.name}</h3>
                  <span className="inline-block bg-cyan-500/20 text-cyan-400 px-3 py-1 rounded-full text-sm">
                    {service.category}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-6 text-center leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, index) => (
                      <li key={index} className="text-sm text-gray-300 flex items-center">
                        <span className="text-cyan-400 mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.technologies.map((tech, index) => (
                      <span key={index} className="bg-cyan-500/20 text-cyan-400 text-xs px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-cyan-400 mb-2">{service.pricing}</div>
                  <div className="text-sm text-gray-400 mb-4">Market: {service.marketPrice}</div>
                  <button className="cyber-button w-full mb-3">
                    Get Started
                  </button>
                  <button className="text-cyan-400 hover:text-cyan-300 text-sm font-medium">
                    Learn More →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* IT Capabilities Showcase */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Our IT Capabilities
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card text-center">
              <Server className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Infrastructure</h3>
              <p className="text-gray-300">Server management, virtualization, and data center operations</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Shield className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Security</h3>
              <p className="text-gray-300">Cybersecurity, compliance, and threat protection</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Cloud className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Cloud Services</h3>
              <p className="text-gray-300">Cloud migration, optimization, and multi-cloud management</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Database className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Database</h3>
              <p className="text-gray-300">Database administration, optimization, and management</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Code className="w-12 h-12 text-pink-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">DevOps</h3>
              <p className="text-gray-300">CI/CD, automation, and infrastructure as code</p>
            </div>
            <div className="cyber-card hologram-card text-center">
              <Network className="w-12 h-12 text-indigo-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Networking</h3>
              <p className="text-gray-300">Network design, implementation, and management</p>
            </div>
          </div>
        </section>

        {/* Pricing Plans */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12 neon-text">
            Choose Your IT Support Plan
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="cyber-card">
              <h3 className="text-2xl font-bold text-white mb-4">Basic</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$1,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Basic IT support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Email support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Basic security monitoring
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Monthly reports
                </li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card ring-2 ring-cyan-400 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-purple-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  Most Popular
                </span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Professional</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">$3,500<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Comprehensive IT support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  24/7 phone support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Advanced security monitoring
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Cloud management
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Monthly strategy sessions
                </li>
              </ul>
              <button className="cyber-button w-full">Get Started</button>
            </div>
            
            <div className="cyber-card">
              <h3 className="text-2xl font-bold text-white mb-4">Enterprise</h3>
              <div className="text-4xl font-bold text-cyan-400 mb-6">Custom<span className="text-lg text-gray-400">/month</span></div>
              <ul className="space-y-3 mb-8">
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Dedicated IT team
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  On-site support
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Custom security solutions
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  Strategic IT consulting
                </li>
                <li className="text-gray-300 flex items-center">
                  <span className="text-cyan-400 mr-2">✓</span>
                  White-label solutions
                </li>
              </ul>
              <button className="cyber-button w-full">Contact Sales</button>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="text-center bg-gradient-to-r from-slate-800 to-purple-900 rounded-2xl p-12 cyber-card">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of businesses that trust us with their IT infrastructure. 
            Get started with a free IT assessment and consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href="tel:+13024640950"
              className="cyber-button"
            >
              📞 Call Now: (302) 464-0950
            </a>
            <a
              href="/contact"
              className="cyber-button"
              style={{background: 'linear-gradient(45deg, #8b5cf6, #ec4899)'}}
            >
              Get Free IT Assessment
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400">
            <p>✓ Free IT assessment and consultation</p>
            <p>✓ Custom solution design</p>
            <p>✓ 24/7 support available</p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ITServicesPage;