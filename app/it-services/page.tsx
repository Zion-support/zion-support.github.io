import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  Check, 
  Star, 
  Shield, 
  Cloud, 
  Database, 
  Code, 
  Users, 
  Globe,
  Lock,
  Zap,
  BarChart3,
  Smartphone,
  Server,
  Network,
  HardDrive,
  Monitor,
  Settings,
  Wrench,
  Award,
  Clock,
  Phone,
  Mail,
  MapPin
} from "lucide-react";

const ITServices = () => {
  const [activeTab, setActiveTab] = useState('all');

  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Solutions',
      description: 'Complete cloud migration, management, and optimization services for AWS, Azure, and Google Cloud',
      price: 'From $2,500/month',
      features: ['Cloud migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster recovery', '24/7 monitoring'],
      icon: <Cloud className="w-8 h-8" />,
      color: 'from-blue-500 to-cyan-500',
      category: 'infrastructure',
      popular: true,
      link: '/cloud-infrastructure',
      benefits: ['50% cost reduction', '99.99% uptime', 'Scalable architecture', 'Expert support'],
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes']
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Services',
      description: 'Comprehensive security solutions including threat detection, vulnerability assessment, and incident response',
      price: 'From $1,800/month',
      features: ['Security audit', 'Penetration testing', 'Threat monitoring', 'Incident response', 'Compliance'],
      icon: <Shield className="w-8 h-8" />,
      color: 'from-red-500 to-pink-500',
      category: 'security',
      popular: true,
      link: '/cybersecurity',
      benefits: ['Zero security breaches', '24/7 monitoring', 'Compliance ready', 'Expert team'],
      technologies: ['SIEM', 'EDR', 'Firewall', 'VPN', 'MFA']
    },
    {
      id: 'network-solutions',
      name: 'Network Solutions',
      description: 'Design, implementation, and management of enterprise-grade network infrastructure',
      price: 'From $1,200/month',
      features: ['Network design', 'Hardware installation', 'Performance optimization', 'Security configuration', 'Maintenance'],
      icon: <Network className="w-8 h-8" />,
      color: 'from-green-500 to-teal-500',
      category: 'infrastructure',
      popular: false,
      link: '/network-solutions',
      benefits: ['High performance', 'Reliable connectivity', 'Scalable design', 'Expert support'],
      technologies: ['Cisco', 'Juniper', 'Fortinet', 'SD-WAN', 'WiFi 6']
    },
    {
      id: 'data-management',
      name: 'Data Management & Analytics',
      description: 'Complete data lifecycle management, analytics, and business intelligence solutions',
      price: 'From $2,000/month',
      features: ['Data warehousing', 'ETL processes', 'Analytics dashboards', 'Data governance', 'ML integration'],
      icon: <Database className="w-8 h-8" />,
      color: 'from-purple-500 to-indigo-500',
      category: 'data',
      popular: true,
      link: '/data-management',
      benefits: ['Data-driven insights', 'Real-time analytics', 'Scalable storage', 'AI integration'],
      technologies: ['SQL Server', 'PostgreSQL', 'MongoDB', 'Power BI', 'Tableau']
    },
    {
      id: 'software-development',
      name: 'Custom Software Development',
      description: 'Bespoke software solutions tailored to your business needs and requirements',
      price: 'From $3,000/month',
      features: ['Custom applications', 'API development', 'Integration services', 'Testing', 'Deployment'],
      icon: <Code className="w-8 h-8" />,
      color: 'from-orange-500 to-yellow-500',
      category: 'development',
      popular: false,
      link: '/software-development',
      benefits: ['Tailored solutions', 'Modern architecture', 'Agile development', 'Ongoing support'],
      technologies: ['React', 'Node.js', 'Python', 'Java', 'Microservices']
    },
    {
      id: 'helpdesk-support',
      name: 'IT Helpdesk & Support',
      description: '24/7 technical support and helpdesk services for your organization',
      price: 'From $800/month',
      features: ['24/7 support', 'Remote assistance', 'Ticket management', 'Knowledge base', 'User training'],
      icon: <Users className="w-8 h-8" />,
      color: 'from-pink-500 to-rose-500',
      category: 'support',
      popular: false,
      link: '/helpdesk-support',
      benefits: ['Fast response times', 'Expert technicians', 'Proactive monitoring', 'User satisfaction'],
      technologies: ['ServiceNow', 'Jira', 'Remote Desktop', 'TeamViewer', 'Slack']
    },
    {
      id: 'mobile-solutions',
      name: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      price: 'From $2,500/month',
      features: ['Native apps', 'Cross-platform', 'UI/UX design', 'App store deployment', 'Maintenance'],
      icon: <Smartphone className="w-8 h-8" />,
      color: 'from-indigo-500 to-blue-500',
      category: 'development',
      popular: true,
      link: '/mobile-solutions',
      benefits: ['Modern design', 'High performance', 'Cross-platform', 'App store ready'],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Xamarin']
    },
    {
      id: 'backup-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning for business continuity',
      price: 'From $1,000/month',
      features: ['Automated backups', 'Disaster recovery', 'Data replication', 'Testing', 'Documentation'],
      icon: <HardDrive className="w-8 h-8" />,
      color: 'from-teal-500 to-cyan-500',
      category: 'infrastructure',
      popular: false,
      link: '/backup-recovery',
      benefits: ['Zero data loss', 'Fast recovery', 'Compliance ready', 'Regular testing'],
      technologies: ['Veeam', 'Commvault', 'AWS Backup', 'Azure Site Recovery', 'VMware']
    }
  ];

  const categories = [
    { id: 'all', name: 'All Services', count: itServices.length },
    { id: 'infrastructure', name: 'Infrastructure', count: itServices.filter(s => s.category === 'infrastructure').length },
    { id: 'security', name: 'Security', count: itServices.filter(s => s.category === 'security').length },
    { id: 'data', name: 'Data & Analytics', count: itServices.filter(s => s.category === 'data').length },
    { id: 'development', name: 'Development', count: itServices.filter(s => s.category === 'development').length },
    { id: 'support', name: 'Support', count: itServices.filter(s => s.category === 'support').length }
  ];

  const filteredServices = activeTab === 'all' 
    ? itServices 
    : itServices.filter(service => service.category === activeTab);

  return (
    <>
      <Helmet>
        <title>IT Services & Solutions - Zion Tech Group</title>
        <meta
          name="description"
          content="Comprehensive IT services including cloud infrastructure, cybersecurity, network solutions, and custom software development. Expert solutions for modern businesses."
        />
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, network solutions, software development, data management" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
        {/* Hero Section */}
        <div className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                IT Services & Solutions
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive technology solutions designed to accelerate your business growth. 
              From cloud infrastructure to cybersecurity, we provide expert IT services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/case-studies"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                View Case Studies
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">500+</div>
                <div className="text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
                <div className="text-gray-300">Uptime SLA</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">24/7</div>
                <div className="text-gray-300">Support</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">15+</div>
                <div className="text-gray-300">Years Experience</div>
              </div>
            </div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="px-4 sm:px-6 lg:px-8 mb-12">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveTab(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activeTab === category.id
                      ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map((service) => (
                <div
                  key={service.id}
                  className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-blue-500/50 transition-all duration-300 group"
                >
                  {service.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black px-3 py-1 rounded-full text-xs font-bold flex items-center">
                        <Star className="w-3 h-3 mr-1" />
                        Popular
                      </span>
                    </div>
                  )}
                  
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-gray-300 mb-4 text-sm">{service.description}</p>
                  
                  <div className="text-2xl font-bold text-blue-400 mb-4">{service.price}</div>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-300">
                        <Check className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-blue-400">Key Benefits:</h4>
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="text-xs text-gray-400 flex items-center">
                        <Award className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0" />
                        {benefit}
                      </div>
                    ))}
                  </div>

                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-cyan-400">Technologies:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.technologies.map((tech, index) => (
                        <span key={index} className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <Link
                    to={service.link}
                    className="w-full bg-gradient-to-r from-blue-500 to-cyan-600 text-white py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center group"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="px-4 sm:px-6 lg:px-8 pb-16">
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-2xl p-8 border border-blue-500/20">
            <h2 className="text-3xl font-bold text-white mb-6 text-center">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-gray-300 mb-8 text-center">
              Contact our expert team for a free consultation and customized solution for your business needs.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <Phone className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <p className="text-gray-300">+1 302 464 0950</p>
              </div>
              <div className="text-center">
                <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <p className="text-gray-300">kleber@ziontechgroup.com</p>
              </div>
              <div className="text-center">
                <MapPin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-white mb-2">Address</h3>
                <p className="text-gray-300">364 E Main St STE 1008<br />Middletown DE 19709</p>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-700 transition-all duration-300 flex items-center justify-center"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link
                to="/pricing"
                className="border border-blue-400 text-blue-400 px-8 py-4 rounded-lg font-semibold hover:bg-blue-400 hover:text-slate-900 transition-all duration-300"
              >
                View Pricing
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ITServices;