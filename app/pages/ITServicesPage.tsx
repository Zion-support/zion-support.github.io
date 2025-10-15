import React from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Brain, 
  Shield, 
  Zap, 
  BarChart3, 
  Users, 
  Globe, 
  Database, 
  Lock, 
  Smartphone, 
  Cloud, 
  Mail, 
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Code,
  Settings,
  CheckCircle,
  Star,
  ArrowRight,
  Phone,
  ExternalLink,
  Cpu,
  Eye,
  MessageSquare,
  Bot,
  Target,
  TrendingUp,
  Server,
  Network,
  HardDrive,
  Wifi,
  Monitor,
  Printer,
  Router
} from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Services',
      description: 'Comprehensive cloud infrastructure design, implementation, and management solutions',
      features: [
        'AWS, Azure, GCP expertise',
        'Cloud migration services',
        'Infrastructure as Code (IaC)',
        'Auto-scaling solutions',
        'Disaster recovery planning',
        'Cost optimization',
        'Security hardening',
        '24/7 monitoring'
      ],
      pricing: {
        basic: { price: 2000, period: 'month', features: ['Basic cloud setup', 'Standard monitoring', 'Email support'] },
        professional: { price: 5000, period: 'month', features: ['Advanced cloud architecture', 'Priority support', 'Custom solutions'] },
        enterprise: { price: 12000, period: 'month', features: ['Full cloud transformation', 'Dedicated support', 'Custom development'] }
      },
      icon: Cloud,
      color: 'from-blue-500 to-cyan-600',
      category: 'Infrastructure',
      marketPrice: '$2,000-12,000/month',
      link: 'https://ziontechgroup.com/cloud-infrastructure'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity Solutions',
      description: 'Enterprise-grade cybersecurity services including threat detection, prevention, and response',
      features: [
        'Security assessment and auditing',
        'Penetration testing',
        'Vulnerability management',
        'Incident response',
        'Security awareness training',
        'Compliance management',
        'Threat intelligence',
        '24/7 SOC monitoring'
      ],
      pricing: {
        basic: { price: 3000, period: 'month', features: ['Basic security', 'Standard monitoring', 'Email support'] },
        advanced: { price: 8000, period: 'month', features: ['Advanced security', 'Priority support', 'Custom solutions'] },
        enterprise: { price: 20000, period: 'month', features: ['Full security suite', 'Dedicated support', 'Custom development'] }
      },
      icon: Shield,
      color: 'from-red-500 to-orange-600',
      category: 'Security',
      marketPrice: '$3,000-20,000/month',
      link: 'https://ziontechgroup.com/cybersecurity'
    },
    {
      id: 'network-infrastructure',
      name: 'Network Infrastructure Services',
      description: 'Complete network design, implementation, and management for enterprise environments',
      features: [
        'Network design and planning',
        'Cisco, Juniper, Aruba expertise',
        'SD-WAN implementation',
        'Network security',
        'Performance optimization',
        'Disaster recovery',
        'Remote access solutions',
        '24/7 network monitoring'
      ],
      pricing: {
        basic: { price: 2500, period: 'month', features: ['Basic network setup', 'Standard monitoring', 'Email support'] },
        advanced: { price: 6000, period: 'month', features: ['Advanced network architecture', 'Priority support', 'Custom solutions'] },
        enterprise: { price: 15000, period: 'month', features: ['Full network transformation', 'Dedicated support', 'Custom development'] }
      },
      icon: Network,
      color: 'from-green-500 to-emerald-600',
      category: 'Networking',
      marketPrice: '$2,500-15,000/month',
      link: 'https://ziontechgroup.com/network-infrastructure'
    },
    {
      id: 'data-center-services',
      name: 'Data Center Services',
      description: 'Complete data center solutions including design, implementation, and management',
      features: [
        'Data center design',
        'Server and storage solutions',
        'Power and cooling systems',
        'Physical security',
        'Backup and recovery',
        'Environmental monitoring',
        'Maintenance services',
        '24/7 on-site support'
      ],
      pricing: {
        basic: { price: 4000, period: 'month', features: ['Basic data center', 'Standard monitoring', 'Email support'] },
        advanced: { price: 10000, period: 'month', features: ['Advanced data center', 'Priority support', 'Custom solutions'] },
        enterprise: { price: 25000, period: 'month', features: ['Full data center suite', 'Dedicated support', 'Custom development'] }
      },
      icon: Server,
      color: 'from-purple-500 to-pink-600',
      category: 'Data Center',
      marketPrice: '$4,000-25,000/month',
      link: 'https://ziontechgroup.com/data-center-services'
    },
    {
      id: 'it-support',
      name: 'IT Support & Helpdesk',
      description: 'Comprehensive IT support services including helpdesk, troubleshooting, and maintenance',
      features: [
        '24/7 helpdesk support',
        'Remote troubleshooting',
        'Hardware and software support',
        'User training',
        'System maintenance',
        'Incident management',
        'Knowledge base management',
        'SLA guarantees'
      ],
      pricing: {
        basic: { price: 1500, period: 'month', features: ['Basic support', 'Email support', 'Standard SLA'] },
        advanced: { price: 4000, period: 'month', features: ['Advanced support', 'Priority support', 'Enhanced SLA'] },
        enterprise: { price: 8000, period: 'month', features: ['Full support suite', 'Dedicated support', 'Premium SLA'] }
      },
      icon: Users,
      color: 'from-indigo-500 to-purple-600',
      category: 'Support',
      marketPrice: '$1,500-8,000/month',
      link: 'https://ziontechgroup.com/it-support'
    },
    {
      id: 'software-development',
      name: 'Custom Software Development',
      description: 'Custom software development services for web, mobile, and enterprise applications',
      features: [
        'Web application development',
        'Mobile app development',
        'API development',
        'Database design',
        'UI/UX design',
        'Quality assurance',
        'Deployment and maintenance',
        'Agile development methodology'
      ],
      pricing: {
        basic: { price: 5000, period: 'month', features: ['Basic development', 'Standard features', 'Email support'] },
        advanced: { price: 12000, period: 'month', features: ['Advanced development', 'Priority support', 'Custom features'] },
        enterprise: { price: 25000, period: 'month', features: ['Full development suite', 'Dedicated support', 'Custom solutions'] }
      },
      icon: Code,
      color: 'from-teal-500 to-cyan-600',
      category: 'Development',
      marketPrice: '$5,000-25,000/month',
      link: 'https://ziontechgroup.com/software-development'
    },
    {
      id: 'database-services',
      name: 'Database Services',
      description: 'Database design, implementation, optimization, and management services',
      features: [
        'Database design and architecture',
        'Performance optimization',
        'Backup and recovery',
        'Data migration',
        'Security hardening',
        'Monitoring and maintenance',
        'Cloud database solutions',
        '24/7 database support'
      ],
      pricing: {
        basic: { price: 2000, period: 'month', features: ['Basic database', 'Standard monitoring', 'Email support'] },
        advanced: { price: 5000, period: 'month', features: ['Advanced database', 'Priority support', 'Custom solutions'] },
        enterprise: { price: 12000, period: 'month', features: ['Full database suite', 'Dedicated support', 'Custom development'] }
      },
      icon: Database,
      color: 'from-yellow-500 to-orange-600',
      category: 'Database',
      marketPrice: '$2,000-12,000/month',
      link: 'https://ziontechgroup.com/database-services'
    },
    {
      id: 'it-consulting',
      name: 'IT Strategy Consulting',
      description: 'Strategic IT consulting services for digital transformation and technology planning',
      features: [
        'IT strategy development',
        'Technology assessment',
        'Digital transformation planning',
        'Vendor evaluation',
        'Cost optimization',
        'Risk assessment',
        'Change management',
        'Implementation planning'
      ],
      pricing: {
        basic: { price: 3000, period: 'month', features: ['Basic consulting', 'Standard assessment', 'Email support'] },
        advanced: { price: 7500, period: 'month', features: ['Advanced consulting', 'Priority support', 'Custom solutions'] },
        enterprise: { price: 15000, period: 'month', features: ['Full consulting suite', 'Dedicated support', 'Custom development'] }
      },
      icon: Settings,
      color: 'from-gray-500 to-slate-600',
      category: 'Consulting',
      marketPrice: '$3,000-15,000/month',
      link: 'https://ziontechgroup.com/it-consulting'
    }
  ];

  const categories = [...new Set(itServices.map(service => service.category))];

  return (
    <>
      <Helmet>
        <title>IT Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT services including cloud infrastructure, cybersecurity, networking, data center, and custom software development. Professional IT solutions with competitive pricing." />
        <meta name="keywords" content="it services, cloud infrastructure, cybersecurity, networking, data center, software development, it consulting, it support" />
        <meta property="og:title" content="IT Services - Zion Tech Group" />
        <meta property="og:description" content="Professional IT services with enterprise-grade solutions and competitive pricing." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/it-services" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="pt-24 pb-16 lg:pt-32 lg:pb-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Professional
                <span className="block bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                  IT Services
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 mb-8 leading-relaxed">
                Comprehensive IT services for enterprises. From cloud infrastructure to cybersecurity, 
                we provide complete technology solutions that drive business success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Call (302) 464-0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-8 py-4 rounded-lg font-bold transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Mail className="w-5 h-5 mr-2" />
                  Get Quote
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Our IT Services
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                Professional IT services with enterprise-grade solutions, competitive pricing, and expert implementation.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
                <div key={service.id} className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 hover:border-cyan-400/50 transition-all duration-300 group">
                  <div className="flex items-center mb-4">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${service.color} flex items-center justify-center mr-4`}>
                      <service.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                        {service.name}
                      </h3>
                      <span className="text-sm text-cyan-400 font-medium">{service.category}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-white mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.slice(0, 4).map((feature, index) => (
                        <li key={index} className="flex items-center text-sm text-gray-300">
                          <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                      {service.features.length > 4 && (
                        <li className="text-sm text-cyan-400">
                          +{service.features.length - 4} more features
                        </li>
                      )}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-400">Starting from</span>
                      <span className="text-2xl font-bold text-white">
                        ${service.pricing.basic.price.toLocaleString()}
                        <span className="text-sm text-gray-400">/{service.pricing.basic.period}</span>
                      </span>
                    </div>
                    <div className="text-sm text-gray-400">
                      Market Price: {service.marketPrice}
                    </div>
                  </div>

                  <div className="flex flex-col gap-2">
                    <a
                      href={service.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
                    >
                      View Details
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                      href="tel:+13024640950"
                      className="w-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20 bg-slate-800/50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Why Choose Our IT Services?
              </h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto">
                We combine cutting-edge technology with deep industry expertise to deliver IT solutions that drive real business value.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Cpu className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Expert IT Team</h3>
                <p className="text-gray-300">Certified IT professionals with 15+ years experience in enterprise solutions</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Enterprise Security</h3>
                <p className="text-gray-300">Bank-level security with ISO 27001 certification and compliance</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Proven Results</h3>
                <p className="text-gray-300">300% average ROI with measurable business impact</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Settings className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">24/7 Support</h3>
                <p className="text-gray-300">Round-the-clock support and monitoring for all IT solutions</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-700">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Get started with our IT services today. Contact us for a free consultation and custom solution design.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+13024640950"
                className="bg-white text-cyan-600 px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors inline-flex items-center justify-center"
              >
                <Phone className="w-5 h-5 mr-2" />
                Call (302) 464-0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-bold hover:bg-white hover:text-cyan-600 transition-colors inline-flex items-center justify-center"
              >
                <Mail className="w-5 h-5 mr-2" />
                Email Us
              </a>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ITServicesPage;