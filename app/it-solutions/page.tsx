import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  GlobeAltIcon,
  RocketLaunchIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  CogIcon,
  EyeIcon,
  ChatBubbleLeftRightIcon,
  DocumentTextIcon,
  LightBulbIcon,
  ServerIcon,
  WifiIcon,
  CircleStackIcon,
  DevicePhoneMobileIcon,
  ComputerDesktopIcon,
  ServerStackIcon
} from '@heroicons/react/24/outline';

export default function ITSolutionsPage() {
  const solutions = [
    {
      title: "Cloud Infrastructure",
      description: "Scalable and secure cloud infrastructure solutions for modern businesses with 99.9% uptime guarantee.",
      icon: CloudIcon,
      features: [
        "Scalable architecture",
        "High availability",
        "Security compliance",
        "Cost optimization",
        "24/7 monitoring",
        "Disaster recovery"
      ],
      color: "from-blue-500 to-cyan-500",
      price: "Starting at $1,500/month",
      benefits: ["Scalability", "Reliability", "Cost efficiency"],
      useCases: ["Web hosting", "Data storage", "Application hosting"],
      href: "/cloud-infrastructure"
    },
    {
      title: "Cybersecurity Solutions",
      description: "Comprehensive cybersecurity solutions to protect your digital assets and data with enterprise-grade security.",
      icon: ShieldCheckIcon,
      features: [
        "Threat detection",
        "Vulnerability assessment",
        "Security monitoring",
        "Incident response",
        "Compliance management",
        "Security training"
      ],
      color: "from-red-500 to-pink-500",
      price: "Starting at $2,200/month",
      benefits: ["Enhanced security", "Risk mitigation", "Compliance"],
      useCases: ["Data protection", "Network security", "Compliance"],
      href: "/cybersecurity"
    },
    {
      title: "IT Consulting",
      description: "Strategic IT consulting to help you make informed technology decisions and optimize your IT infrastructure.",
      icon: LightBulbIcon,
      features: [
        "Technology assessment",
        "Strategic planning",
        "Vendor selection",
        "Implementation guidance",
        "Change management",
        "Training and support"
      ],
      color: "from-green-500 to-emerald-500",
      price: "Starting at $1,200/month",
      benefits: ["Expert guidance", "Cost savings", "Risk reduction"],
      useCases: ["Technology planning", "Digital transformation", "System integration"],
      href: "/it-consulting"
    },
    {
      title: "Network Solutions",
      description: "Advanced networking solutions for reliable and secure connectivity with enterprise-grade performance.",
      icon: GlobeAltIcon,
      features: [
        "Network design",
        "Security implementation",
        "Performance optimization",
        "Monitoring and maintenance",
        "Disaster recovery",
        "Remote access"
      ],
      color: "from-purple-500 to-indigo-500",
      price: "Starting at $1,800/month",
      benefits: ["Reliable connectivity", "Enhanced security", "Performance"],
      useCases: ["Office networking", "Remote work", "Data centers"],
      href: "/network-solutions"
    },
    {
      title: "Data Management",
      description: "Comprehensive data management solutions for storage, processing, and analytics with AI-powered insights.",
      icon: ChartBarIcon,
      features: [
        "Data storage",
        "Data processing",
        "Analytics and reporting",
        "Data security",
        "Backup and recovery",
        "Data governance"
      ],
      color: "from-orange-500 to-red-500",
      price: "Starting at $2,000/month",
      benefits: ["Better insights", "Data security", "Compliance"],
      useCases: ["Business intelligence", "Data analytics", "Compliance"],
      href: "/data-management"
    },
    {
      title: "IT Support",
      description: "Comprehensive IT support services to keep your systems running smoothly with 24/7 expert assistance.",
      icon: UserGroupIcon,
      features: [
        "24/7 support",
        "Remote assistance",
        "System maintenance",
        "Software updates",
        "Hardware support",
        "User training"
      ],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $1,000/month",
      benefits: ["Reduced downtime", "Expert support", "Cost efficiency"],
      useCases: ["Help desk", "System maintenance", "User support"],
      href: "/it-support"
    },
    {
      title: "Server Management",
      description: "Complete server management services including setup, monitoring, maintenance, and optimization.",
      icon: ServerIcon,
      features: [
        "Server setup",
        "Performance monitoring",
        "Security hardening",
        "Backup management",
        "Load balancing",
        "Capacity planning"
      ],
      color: "from-gray-500 to-slate-500",
      price: "Starting at $2,500/month",
      benefits: ["Optimal performance", "Enhanced security", "Reduced downtime"],
      useCases: ["Web servers", "Database servers", "Application servers"],
      href: "/server-management"
    },
    {
      title: "Database Solutions",
      description: "Advanced database solutions including design, implementation, optimization, and maintenance services.",
      icon: CircleStackIcon,
      features: [
        "Database design",
        "Performance tuning",
        "Backup and recovery",
        "Security implementation",
        "Migration services",
        "Monitoring and maintenance"
      ],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $1,800/month",
      benefits: ["Data integrity", "Performance optimization", "Security"],
      useCases: ["Business applications", "Data warehousing", "Analytics"],
      href: "/database-solutions"
    },
    {
      title: "Mobile Solutions",
      description: "Comprehensive mobile solutions including app development, device management, and mobile security.",
      icon: DevicePhoneMobileIcon,
      features: [
        "Mobile app development",
        "Device management",
        "Mobile security",
        "Cross-platform solutions",
        "Performance optimization",
        "User experience design"
      ],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $3,000/month",
      benefits: ["Mobile optimization", "Enhanced security", "Better UX"],
      useCases: ["Mobile apps", "Device management", "Mobile security"],
      href: "/mobile-solutions"
    },
    {
      title: "Desktop Solutions",
      description: "Complete desktop solutions including hardware, software, and support services for your workforce.",
      icon: ComputerDesktopIcon,
      features: [
        "Hardware procurement",
        "Software installation",
        "System configuration",
        "User training",
        "Maintenance and support",
        "Security implementation"
      ],
      color: "from-teal-500 to-green-500",
      price: "Starting at $800/month",
      benefits: ["Productivity", "Reliability", "Cost efficiency"],
      useCases: ["Workplace setup", "Hardware management", "User support"],
      href: "/desktop-solutions"
    },
    {
      title: "IT Infrastructure",
      description: "Complete IT infrastructure solutions including servers, storage, networking, and security systems.",
      icon: ServerStackIcon,
      features: [
        "Infrastructure design",
        "Hardware procurement",
        "System integration",
        "Security implementation",
        "Performance optimization",
        "Ongoing maintenance"
      ],
      color: "from-amber-500 to-yellow-500",
      price: "Starting at $4,000/month",
      benefits: ["Complete solution", "Scalability", "Reliability"],
      useCases: ["New infrastructure", "System upgrades", "Data centers"],
      href: "/it-infrastructure"
    },
    {
      title: "IT Security",
      description: "Advanced IT security solutions including firewalls, antivirus, intrusion detection, and security monitoring.",
      icon: ShieldCheckIcon,
      features: [
        "Firewall management",
        "Antivirus solutions",
        "Intrusion detection",
        "Security monitoring",
        "Vulnerability scanning",
        "Incident response"
      ],
      color: "from-red-600 to-pink-600",
      price: "Starting at $1,500/month",
      benefits: ["Enhanced security", "Threat protection", "Compliance"],
      useCases: ["Network security", "Data protection", "Compliance"],
      href: "/it-security"
    }
  ];

  const features = [
    {
      title: "Expert Solutions",
      description: "Our team of certified professionals delivers cutting-edge IT solutions tailored to your needs.",
      icon: CpuChipIcon
    },
    {
      title: "Scalable Architecture",
      description: "Solutions that grow with your business and adapt to changing technology requirements.",
      icon: CloudIcon
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock support to ensure your systems are always running at optimal performance.",
      icon: UserGroupIcon
    },
    {
      title: "Security First",
      description: "Security is built into every solution we deliver, protecting your data and systems.",
      icon: ShieldCheckIcon
    }
  ];

  const stats = [
    { number: "1000+", label: "Projects Completed" },
    { number: "99.9%", label: "Uptime Guarantee" },
    { number: "50+", label: "Technology Partners" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including cloud infrastructure, cybersecurity, network solutions, data management, and IT consulting services." />
        <meta name="keywords" content="IT solutions, cloud infrastructure, cybersecurity, network solutions, data management, IT consulting, IT support" />
        <meta property="og:title" content="IT Solutions - Zion Tech Group" />
        <meta property="og:description" content="Transform your IT infrastructure with our comprehensive solutions. From cloud to cybersecurity, we deliver technology that drives business success." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-solutions" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900">
        {/* Hero Section */}
        <section className="relative py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT Solutions
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your IT infrastructure with our comprehensive solutions. 
              From cloud to cybersecurity, we deliver technology that drives business success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Started
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl lg:text-5xl font-bold text-blue-400 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm lg:text-base">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Solutions Grid */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our IT Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {solutions.map((solution, index) => (
                <div key={index} className="bg-slate-800 rounded-lg p-6 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${solution.color} flex items-center justify-center mb-4`}>
                    <solution.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{solution.title}</h3>
                  <p className="text-gray-300 mb-4">{solution.description}</p>
                  <div className="mb-4">
                    <p className="text-blue-400 font-semibold">{solution.price}</p>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Benefits:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.benefits.map((benefit, benefitIndex) => (
                        <span key={benefitIndex} className="text-xs bg-green-900/30 text-green-300 px-2 py-1 rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-400 mb-2">Use Cases:</h4>
                    <div className="flex flex-wrap gap-2">
                      {solution.useCases.map((useCase, useCaseIndex) => (
                        <span key={useCaseIndex} className="text-xs bg-blue-900/30 text-blue-300 px-2 py-1 rounded-full">
                          {useCase}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Link 
                    to={solution.href}
                    className="text-blue-400 hover:text-blue-300 font-medium flex items-center"
                  >
                    Learn More <ArrowRightIcon className="w-4 h-4 ml-1" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Why Choose Our IT Solutions?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 mx-auto bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                  <p className="text-gray-300">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* IT Implementation Process */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
              Our IT Implementation Process
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Assessment & Planning</h3>
                <p className="text-gray-300">
                  We assess your current IT infrastructure and develop a comprehensive implementation plan.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Solution Design</h3>
                <p className="text-gray-300">
                  We design custom IT solutions tailored to your specific business requirements and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Implementation</h3>
                <p className="text-gray-300">
                  Our experts implement the solution with minimal disruption to your business operations.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-bold text-xl">4</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Support & Optimization</h3>
                <p className="text-gray-300">
                  We provide ongoing support, monitoring, and optimization to ensure peak performance.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-blue-900/30 to-cyan-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our IT solutions can help you achieve your business goals and drive growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/contact" 
                className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
              >
                Get Free IT Consultation
              </Link>
              <Link 
                to="/demo" 
                className="border border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
              >
                Schedule IT Demo
              </Link>
            </div>
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center text-gray-300 mt-12">
              <div className="flex items-center gap-3">
                <PhoneIcon className="w-6 h-6 text-blue-400" />
                <span>+1-302-464-0950</span>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="w-6 h-6 text-blue-400" />
                <span>kleber@ziontechgroup.com</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
