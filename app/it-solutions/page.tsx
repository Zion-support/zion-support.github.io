import React from 'react';
import SEOHead from '../../components/SEOHead';
import { 
  Cloud, 
  Shield, 
  Zap, 
  Globe, 
  Database, 
  Lock, 
  BarChart3, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star, 
  Award, 
  TrendingUp, 
  Target, 
  Rocket,
  Server,
  Network,
  Settings,
  Smartphone,
  Cpu,
  HardDrive,
  Wifi,
  Shield as ShieldIcon,
  Zap as ZapIcon,
  Globe as GlobeIcon
} from 'lucide-react';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      name: "Cloud Infrastructure Solutions",
      description: "Comprehensive cloud architecture design, implementation, and management for scalable, secure, and cost-effective infrastructure.",
      price: "Starting at $2,500/month",
      features: [
        "AWS, Azure, and GCP expertise",
        "Auto-scaling and load balancing",
        "Disaster recovery planning",
        "24/7 monitoring and support",
        "Security compliance (SOC2, ISO27001)",
        "Cost optimization",
        "Migration services",
        "DevOps implementation"
      ],
      icon: Cloud,
      category: "Cloud Computing",
      complexity: "Advanced",
      link: "/cloud-infrastructure",
      popular: true
    },
    {
      name: "Cybersecurity Solutions",
      description: "Comprehensive security solutions to protect your organization from evolving cyber threats and ensure compliance.",
      price: "Starting at $1,800/month",
      features: [
        "Threat detection and response",
        "Vulnerability assessment",
        "Security compliance management",
        "Incident response planning",
        "Penetration testing",
        "Security awareness training",
        "Firewall and endpoint protection",
        "Security monitoring and SIEM"
      ],
      icon: Shield,
      category: "Security",
      complexity: "Advanced",
      link: "/cybersecurity"
    },
    {
      name: "Digital Transformation",
      description: "Complete business digitization and modernization services to accelerate growth and improve efficiency.",
      price: "Starting at $5,000/month",
      features: [
        "Process automation and optimization",
        "Legacy system modernization",
        "Change management and training",
        "Digital strategy development",
        "Workflow digitization",
        "Data migration services",
        "Integration services",
        "Performance monitoring"
      ],
      icon: Zap,
      category: "Transformation",
      complexity: "Advanced",
      link: "/digital-transformation",
      popular: true
    },
    {
      name: "5G Network Solutions",
      description: "Next-generation network infrastructure and IoT connectivity solutions for enhanced performance and capabilities.",
      price: "Starting at $3,500/month",
      features: [
        "5G network deployment",
        "IoT device integration",
        "Edge computing solutions",
        "Network optimization",
        "Performance monitoring",
        "Security implementation",
        "Scalability planning",
        "Integration services"
      ],
      icon: Globe,
      category: "Networking",
      complexity: "Advanced",
      link: "/5g-solutions"
    },
    {
      name: "IT Consulting Services",
      description: "Strategic IT consulting to align technology with business objectives and drive digital innovation.",
      price: "Starting at $1,200/month",
      features: [
        "IT strategy development",
        "Technology assessment",
        "Architecture planning",
        "Vendor selection",
        "Project management",
        "Risk assessment",
        "Compliance consulting",
        "Performance optimization"
      ],
      icon: Users,
      category: "Consulting",
      complexity: "Intermediate",
      link: "/it-services"
    },
    {
      name: "DevOps Services",
      description: "Complete DevOps implementation and management for faster, more reliable software delivery.",
      price: "Starting at $2,200/month",
      features: [
        "CI/CD pipeline setup",
        "Infrastructure as Code",
        "Container orchestration",
        "Monitoring and logging",
        "Security integration",
        "Performance optimization",
        "Team training",
        "Tool selection and setup"
      ],
      icon: Settings,
      category: "DevOps",
      complexity: "Advanced",
      link: "/devops-services"
    },
    {
      name: "Data Management Solutions",
      description: "Comprehensive data management, analytics, and business intelligence solutions for data-driven decisions.",
      price: "Starting at $1,800/month",
      features: [
        "Data architecture design",
        "Data warehousing",
        "ETL/ELT processes",
        "Business intelligence dashboards",
        "Data governance",
        "Data quality management",
        "Analytics implementation",
        "Data security and compliance"
      ],
      icon: Database,
      category: "Data Management",
      complexity: "Advanced",
      link: "/data-management"
    },
    {
      name: "Network Security Solutions",
      description: "Advanced network security solutions to protect your infrastructure from cyber threats and ensure compliance.",
      price: "Starting at $1,500/month",
      features: [
        "Firewall configuration and management",
        "Intrusion detection and prevention",
        "Network segmentation",
        "VPN and remote access",
        "Network monitoring",
        "Security policy implementation",
        "Compliance management",
        "Incident response"
      ],
      icon: Lock,
      category: "Network Security",
      complexity: "Intermediate",
      link: "/network-security"
    }
  ];

  const technologies = [
    { name: "Cloud Platforms", icon: Cloud, count: 8 },
    { name: "Security Tools", icon: Shield, count: 12 },
    { name: "Networking", icon: Network, count: 6 },
    { name: "Databases", icon: Database, count: 10 },
    { name: "DevOps Tools", icon: Settings, count: 15 },
    { name: "Monitoring", icon: BarChart3, count: 7 }
  ];

  const itCapabilities = [
    {
      title: "Cloud Computing",
      description: "Scalable cloud infrastructure and migration services",
      icon: Cloud,
      features: ["AWS/Azure/GCP", "Hybrid Cloud", "Cloud Migration", "Cost Optimization"]
    },
    {
      title: "Cybersecurity",
      description: "Comprehensive security solutions and compliance",
      icon: Shield,
      features: ["Threat Detection", "Vulnerability Assessment", "Compliance", "Incident Response"]
    },
    {
      title: "Digital Transformation",
      description: "Business process automation and modernization",
      icon: Zap,
      features: ["Process Automation", "Legacy Modernization", "Change Management", "Digital Strategy"]
    },
    {
      title: "Network Solutions",
      description: "Advanced networking and connectivity solutions",
      icon: Network,
      features: ["5G Networks", "SD-WAN", "Network Security", "Performance Optimization"]
    },
    {
      title: "Data Management",
      description: "Data architecture and business intelligence",
      icon: Database,
      features: ["Data Warehousing", "ETL/ELT", "Business Intelligence", "Data Governance"]
    },
    {
      title: "DevOps & Automation",
      description: "CI/CD pipelines and infrastructure automation",
      icon: Settings,
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Container Orchestration", "Monitoring"]
    }
  ];

  return (
    <>
      <SEOHead
        title="IT Solutions - Zion Tech Group | Enterprise IT Services & Infrastructure"
        description="Comprehensive IT solutions for enterprise. Cloud infrastructure, cybersecurity, digital transformation, 5G networks, DevOps, and data management services. Transform your IT infrastructure."
        keywords="it solutions, cloud computing, cybersecurity, digital transformation, 5g networks, devops, data management, it consulting, enterprise it services"
      />
      
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.1"%3E%3Ccircle cx="30" cy="30" r="2"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              IT Solutions
              <span className="block bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                for Enterprise
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto">
              Transform your IT infrastructure with our comprehensive solutions. 
              From cloud computing to cybersecurity, we deliver enterprise-grade IT services.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#services" 
              className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Explore IT Solutions
            </a>
            <a 
              href="/contact" 
              className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Get IT Consultation
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">200+</div>
              <div className="text-gray-300">IT Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">50+</div>
              <div className="text-gray-300">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300">Uptime Guarantee</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300">Support Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* IT Capabilities */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Capabilities
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our comprehensive IT solutions cover all aspects of enterprise technology, 
              from infrastructure to security and digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itCapabilities.map((capability, index) => (
              <div key={index} className="bg-slate-700 rounded-xl p-6 hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-3 rounded-lg mr-4">
                    <capability.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{capability.title}</h3>
                    <p className="text-gray-300 text-sm">{capability.description}</p>
                  </div>
                </div>
                <ul className="space-y-2">
                  {capability.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services Grid */}
      <section id="services" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              IT Services & Solutions
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive IT services designed to modernize your infrastructure, 
              enhance security, and drive digital transformation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 shadow-xl relative ${service.popular ? 'ring-2 ring-cyan-500' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-6 bg-gradient-to-r from-cyan-500 to-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full">
                    Most Popular
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-lg">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">{service.name}</h3>
                      <div className="flex items-center space-x-2 mt-1">
                        <span className="text-cyan-400 font-semibold text-lg">{service.price}</span>
                        <span className="bg-slate-700 text-cyan-400 text-xs px-2 py-1 rounded">
                          {service.category}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-6 text-lg">{service.description}</p>

                <div className="mb-6">
                  <div className="flex items-center space-x-2 mb-3">
                    <span className="text-sm text-gray-400">Complexity:</span>
                    <span className={`px-2 py-1 rounded text-xs font-semibold ${
                      service.complexity === 'Advanced' 
                        ? 'bg-red-900 text-red-300' 
                        : service.complexity === 'Intermediate'
                        ? 'bg-yellow-900 text-yellow-300'
                        : 'bg-green-900 text-green-300'
                    }`}>
                      {service.complexity}
                    </span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-300">
                      <CheckCircle className="w-5 h-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="flex space-x-3">
                  <a 
                    href={service.link}
                    className="flex-1 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-3 px-6 rounded-lg text-center transition-all duration-300"
                  >
                    Learn More
                  </a>
                  <a 
                    href="/contact"
                    className="bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 px-6 rounded-lg transition-colors"
                  >
                    Contact
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Technologies We Use
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and industry-leading tools 
              to deliver robust, scalable, and secure IT solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center group">
                <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <tech.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{tech.name}</h3>
                <p className="text-cyan-400 font-bold">{tech.count} Tools</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Implementation Process */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our IT Implementation Process
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a proven methodology to deliver IT solutions that meet your business objectives 
              and deliver measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Target className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">1. Assessment</h3>
              <p className="text-gray-300">We analyze your current IT infrastructure and identify improvement opportunities.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Settings className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">2. Planning</h3>
              <p className="text-gray-300">We design a comprehensive IT strategy tailored to your business needs.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Cpu className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">3. Implementation</h3>
              <p className="text-gray-300">Our expert team implements the solution with minimal disruption to your business.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">4. Optimization</h3>
              <p className="text-gray-300">We continuously monitor and optimize your IT infrastructure for peak performance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our IT Solutions */}
      <section className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose Our IT Solutions?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver IT solutions that drive real results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Certified Experts</h3>
              <p className="text-gray-300">Certified professionals with 10+ years of experience in enterprise IT solutions.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Rocket className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
              <p className="text-gray-300">200+ successful IT implementations with measurable ROI and business impact.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-cyan-500 to-purple-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ShieldIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with compliance, encryption, and comprehensive protection.</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-purple-500 to-cyan-600 p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <ZapIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock monitoring and support to ensure your systems run smoothly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Transform Your IT Infrastructure?
          </h2>
          <p className="text-xl text-cyan-100 mb-8">
            Get started with our comprehensive IT solutions today. Contact us for a free consultation and custom IT strategy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-white text-cyan-600 hover:bg-gray-100 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get Free IT Consultation
            </a>
            <a 
              href="tel:+13024640950" 
              className="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
            >
              Call +1 302 464 0950
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ITSolutionsPage;