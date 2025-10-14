import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { 
  CpuChipIcon,
  ShieldCheckIcon,
  CloudIcon,
  ChartBarIcon,
  CogIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  PhoneIcon,
  EnvelopeIcon,
  CurrencyDollarIcon,
  ClockIcon,
  UserGroupIcon,
  SparklesIcon,
  AcademicCapIcon,
  BriefcaseIcon,
  HeartIcon,
  StarIcon,
  RocketLaunchIcon,
  DocumentTextIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  LightBulbIcon,
  ServerIcon,
  WrenchScrewdriverIcon,
  ComputerDesktopIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline';

const ITSolutionsPage: React.FC = () => {
  const itServices = [
    {
      title: "IT Infrastructure",
      description: "Complete IT infrastructure setup, management, and optimization for your business.",
      icon: ServerIcon,
      features: ["Server setup", "Network configuration", "Hardware management", "Performance optimization"],
      color: "from-blue-500 to-purple-500",
      price: "Starting at $2,500/month",
      benefits: ["Reliable systems", "Scalable infrastructure", "Reduced downtime", "Cost optimization"],
      useCases: ["Server management", "Network setup", "Hardware maintenance", "System optimization"],
      href: "/it-infrastructure"
    },
    {
      title: "Cloud Solutions",
      description: "Comprehensive cloud migration, management, and optimization services.",
      icon: CloudIcon,
      features: ["Cloud migration", "Multi-cloud management", "Cost optimization", "Security compliance"],
      color: "from-green-500 to-teal-500",
      price: "Starting at $1,800/month",
      benefits: ["Scalability", "Cost savings", "Flexibility", "Global reach"],
      useCases: ["Cloud migration", "Hybrid cloud", "Cloud optimization", "Disaster recovery"],
      href: "/cloud-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Advanced cybersecurity solutions to protect your business from threats.",
      icon: ShieldCheckIcon,
      features: ["Threat detection", "Security audits", "Compliance management", "Incident response"],
      color: "from-pink-500 to-rose-500",
      price: "Starting at $3,200/month",
      benefits: ["Enhanced security", "Compliance", "Risk mitigation", "Peace of mind"],
      useCases: ["Security audits", "Threat monitoring", "Compliance", "Incident response"],
      href: "/cybersecurity"
    },
    {
      title: "Network Management",
      description: "Professional network design, implementation, and ongoing management.",
      icon: GlobeAltIcon,
      features: ["Network design", "Performance monitoring", "Troubleshooting", "Security implementation"],
      color: "from-indigo-500 to-purple-500",
      price: "Starting at $2,000/month",
      benefits: ["Reliable connectivity", "Better performance", "Enhanced security", "Reduced downtime"],
      useCases: ["Network setup", "Performance optimization", "Security implementation", "Troubleshooting"],
      href: "/network-management"
    },
    {
      title: "IT Support",
      description: "24/7 IT support and helpdesk services for your business needs.",
      icon: WrenchScrewdriverIcon,
      features: ["24/7 support", "Remote assistance", "Issue resolution", "Preventive maintenance"],
      color: "from-orange-500 to-red-500",
      price: "Starting at $1,500/month",
      benefits: ["Quick resolution", "Minimal downtime", "Proactive support", "Cost efficiency"],
      useCases: ["Technical support", "Issue resolution", "System maintenance", "User training"],
      href: "/it-support"
    },
    {
      title: "Digital Transformation",
      description: "Complete digital transformation strategies and implementation services.",
      icon: RocketLaunchIcon,
      features: ["Strategy development", "Process automation", "Technology integration", "Change management"],
      color: "from-cyan-500 to-blue-500",
      price: "Starting at $5,000/project",
      benefits: ["Modernized systems", "Improved efficiency", "Competitive advantage", "Future readiness"],
      useCases: ["Process automation", "System modernization", "Technology integration", "Change management"],
      href: "/digital-transformation"
    }
  ];

  const technologies = [
    "Microsoft Azure",
    "Amazon AWS",
    "Google Cloud",
    "Microsoft 365",
    "Cisco Networking",
    "VMware",
    "Docker",
    "Kubernetes",
    "Linux",
    "Windows Server",
    "Active Directory",
    "Office 365"
  ];

  return (
    <>
      <Helmet>
        <title>IT Solutions - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT solutions including infrastructure, cloud services, cybersecurity, and digital transformation. Professional IT services for modern businesses." />
        <meta name="keywords" content="IT solutions, IT services, cloud computing, cybersecurity, network management, IT support, digital transformation" />
      </Helmet>
      
      <div className="min-h-screen bg-slate-900 text-white">
        {/* Hero Section */}
        <section className="relative py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                IT Solutions
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT services to power your business
              </p>
              <p className="text-lg text-gray-400 max-w-3xl mx-auto">
                From infrastructure setup to cloud migration, our expert IT solutions help you
                build, secure, and optimize your technology environment for maximum efficiency and growth.
              </p>
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-20 bg-slate-900">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our IT Services
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Professional IT services designed to meet your business needs
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-slate-800 rounded-xl p-8 hover:bg-slate-700 transition-all duration-300 transform hover:scale-105 border border-slate-700 hover:border-purple-500">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-6`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>
                  
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-300">
                          <CheckCircleIcon className="w-5 h-5 text-green-400 mr-2" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <div className="text-purple-400 font-semibold text-lg mb-2">{service.price}</div>
                    <div className="text-gray-400 text-sm">Professional service</div>
                  </div>
                  
                  <Link
                    to={service.href}
                    className="inline-flex items-center bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300"
                  >
                    Learn More
                    <ArrowRightIcon className="w-4 h-4 ml-2" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Technologies We Work With
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with leading technologies to deliver the best solutions
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {technologies.map((tech, index) => (
                <div key={index} className="bg-slate-800/50 p-6 rounded-lg text-center hover:bg-slate-700/50 transition-colors">
                  <span className="text-gray-300 font-medium">{tech}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-purple-900/30 to-cyan-900/30">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our IT solutions can improve your technology environment
              and drive business growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-purple-600 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105"
              >
                Get Started Today
              </Link>
              <Link
                to="/demo"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-slate-900 transition-all duration-300"
              >
                Schedule Demo
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITSolutionsPage;