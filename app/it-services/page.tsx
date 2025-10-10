'use client';
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Cloud, Shield, Settings, Database, Smartphone, Globe, Zap, ArrowRight, CheckCircle, Star, Users, TrendingUp, Clock, Wrench, Server, Network, Lock, Monitor, HardDrive, Cpu, Wifi, Phone, Mail, MapPin } from 'lucide-react';

interface ITService {
  id: string;
  icon: React.ComponentType<any>;
  title: string;
  description: string;
  features: string[];
  price: string;
  category: string;
  popular: boolean;
  benefits: string[];
  useCases: string[];
}

const ItServicesPage: React.FC = () => {
  const itServices: ITService[] = [
    {
      id: '1',
      icon: Cloud,
      title: 'Cloud Infrastructure & Migration',
      description: 'Comprehensive cloud solutions including migration, optimization, and management across AWS, Azure, and Google Cloud platforms.',
      features: ['Cloud migration', 'Infrastructure as Code', 'Auto-scaling', 'Disaster recovery', 'Cost optimization', 'Multi-cloud management', 'Security compliance', 'Performance monitoring'],
      price: 'Starting at $2,999/month',
      category: 'Cloud Computing',
      popular: true,
      benefits: ['99.9% uptime guarantee', '50% cost reduction', 'Scalable infrastructure', 'Enhanced security'],
      useCases: ['Digital transformation', 'Disaster recovery', 'Global expansion', 'Cost optimization']
    },
    {
      id: '2',
      icon: Shield,
      title: 'Cybersecurity & Compliance',
      description: 'Advanced security solutions including threat detection, vulnerability assessment, and compliance management for enterprise environments.',
      features: ['Threat detection', 'Vulnerability scanning', 'Penetration testing', 'Compliance management', 'Incident response', 'Security training', 'Risk assessment', 'Security monitoring'],
      price: 'Starting at $1,999/month',
      category: 'Security',
      popular: true,
      benefits: ['99.9% threat detection', '24/7 monitoring', 'Compliance assurance', 'Reduced security risks'],
      useCases: ['Regulatory compliance', 'Threat prevention', 'Security audits', 'Incident response']
    },
    {
      id: '3',
      icon: Settings,
      title: 'DevOps & CI/CD Solutions',
      description: 'Streamlined development workflows with automated testing, deployment, and monitoring for faster, more reliable software delivery.',
      features: ['CI/CD pipelines', 'Automated testing', 'Container orchestration', 'Infrastructure monitoring', 'Version control', 'Deployment automation', 'Performance optimization', 'Collaboration tools'],
      price: 'Starting at $1,499/month',
      category: 'Development',
      popular: true,
      benefits: ['60% faster deployments', '90% fewer errors', 'Improved collaboration', 'Automated workflows'],
      useCases: ['Software development', 'Quality assurance', 'Deployment automation', 'Team collaboration']
    },
    {
      id: '4',
      icon: Database,
      title: 'Database Management & Analytics',
      description: 'Comprehensive database solutions including design, optimization, migration, and business intelligence analytics.',
      features: ['Database design', 'Performance tuning', 'Data migration', 'Backup & recovery', 'Data analytics', 'Business intelligence', 'Data warehousing', 'Real-time processing'],
      price: 'Starting at $1,299/month',
      category: 'Data Management',
      popular: false,
      benefits: ['99.9% data availability', '50% performance improvement', 'Automated backups', 'Real-time insights'],
      useCases: ['Data migration', 'Performance optimization', 'Business intelligence', 'Data governance']
    },
    {
      id: '5',
      icon: Smartphone,
      title: 'Mobile & Web Development',
      description: 'Custom mobile and web applications built with modern technologies for iOS, Android, and web platforms.',
      features: ['Native mobile apps', 'Cross-platform development', 'Progressive web apps', 'API development', 'UI/UX design', 'App store optimization', 'Performance optimization', 'Security implementation'],
      price: 'Starting at $2,499/month',
      category: 'Development',
      popular: true,
      benefits: ['Modern technology stack', 'Cross-platform compatibility', 'Optimized performance', 'Enhanced user experience'],
      useCases: ['Mobile app development', 'Web application', 'API development', 'Digital transformation']
    },
    {
      id: '6',
      icon: Globe,
      title: 'Network Infrastructure & Security',
      description: 'Complete network solutions including design, implementation, security, and monitoring for enterprise networks.',
      features: ['Network design', 'Firewall management', 'VPN solutions', 'Network monitoring', 'Load balancing', 'Traffic optimization', 'Security policies', 'Performance tuning'],
      price: 'Starting at $1,799/month',
      category: 'Infrastructure',
      popular: false,
      benefits: ['99.9% network uptime', 'Enhanced security', 'Optimized performance', 'Scalable architecture'],
      useCases: ['Network optimization', 'Security enhancement', 'Performance improvement', 'Scalability planning']
    },
    {
      id: '7',
      icon: Zap,
      title: 'IT Automation & Process Optimization',
      description: 'Intelligent automation solutions to streamline IT operations, reduce manual tasks, and improve efficiency.',
      features: ['Process automation', 'Workflow optimization', 'Task scheduling', 'Error handling', 'Performance monitoring', 'Resource optimization', 'Cost reduction', 'Scalability management'],
      price: 'Starting at $999/month',
      category: 'Automation',
      popular: false,
      benefits: ['70% time savings', '90% error reduction', '24/7 operation', 'Cost optimization'],
      useCases: ['Process optimization', 'Task automation', 'Resource management', 'Cost reduction']
    },
    {
      id: '8',
      icon: Server,
      title: 'Server Management & Virtualization',
      description: 'Comprehensive server solutions including virtualization, management, and optimization for physical and cloud environments.',
      features: ['Server virtualization', 'Performance monitoring', 'Capacity planning', 'Backup management', 'Disaster recovery', 'Security hardening', 'Patch management', 'Resource optimization'],
      price: 'Starting at $1,199/month',
      category: 'Infrastructure',
      popular: false,
      benefits: ['99.9% server uptime', 'Optimized resource usage', 'Enhanced security', 'Automated management'],
      useCases: ['Server consolidation', 'Performance optimization', 'Disaster recovery', 'Resource management']
    },
    {
      id: '9',
      icon: Monitor,
      title: 'IT Monitoring & Management',
      description: '24/7 IT monitoring and management services with proactive issue detection and resolution.',
      features: ['24/7 monitoring', 'Proactive alerts', 'Performance tracking', 'Issue resolution', 'Capacity planning', 'Security monitoring', 'Compliance reporting', 'Service level management'],
      price: 'Starting at $1,599/month',
      category: 'Managed Services',
      popular: true,
      benefits: ['24/7 support', 'Proactive monitoring', 'Faster issue resolution', 'Improved uptime'],
      useCases: ['System monitoring', 'Issue prevention', 'Performance optimization', 'Service management']
    },
    {
      id: '10',
      icon: HardDrive,
      title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive data protection solutions with automated backups, disaster recovery, and business continuity planning.',
      features: ['Automated backups', 'Disaster recovery', 'Business continuity', 'Data encryption', 'Offsite storage', 'Recovery testing', 'Compliance management', 'RTO/RPO optimization'],
      price: 'Starting at $799/month',
      category: 'Data Protection',
      popular: false,
      benefits: ['99.9% data protection', 'Fast recovery times', 'Compliance assurance', 'Business continuity'],
      useCases: ['Data protection', 'Disaster recovery', 'Compliance management', 'Business continuity']
    },
    {
      id: '11',
      icon: Cpu,
      title: 'IT Infrastructure Consulting',
      description: 'Strategic IT consulting services to optimize infrastructure, reduce costs, and align technology with business goals.',
      features: ['Technology assessment', 'Strategic planning', 'Cost optimization', 'Architecture design', 'Vendor management', 'Project management', 'Change management', 'Training & support'],
      price: 'Starting at $299/hour',
      category: 'Consulting',
      popular: false,
      benefits: ['Strategic guidance', 'Cost optimization', 'Technology alignment', 'Expert knowledge'],
      useCases: ['Technology strategy', 'Cost optimization', 'Digital transformation', 'Vendor selection']
    },
    {
      id: '12',
      icon: Wifi,
      title: 'Wireless & IoT Solutions',
      description: 'Advanced wireless networking and IoT solutions for modern connected environments and smart infrastructure.',
      features: ['Wireless network design', 'IoT device management', 'Connectivity optimization', 'Security implementation', 'Performance monitoring', 'Scalability planning', 'Integration services', 'Maintenance support'],
      price: 'Starting at $1,399/month',
      category: 'Connectivity',
      popular: false,
      benefits: ['Enhanced connectivity', 'IoT integration', 'Improved performance', 'Future-ready infrastructure'],
      useCases: ['Wireless optimization', 'IoT implementation', 'Smart infrastructure', 'Connectivity enhancement']
    }
  ];

  const categories = ['All', 'Cloud Computing', 'Security', 'Development', 'Data Management', 'Infrastructure', 'Automation', 'Managed Services', 'Data Protection', 'Consulting', 'Connectivity'];

  const benefits = [
    '24/7 expert support',
    'Proactive monitoring and maintenance',
    'Scalable and flexible solutions',
    'Enhanced security and compliance',
    'Cost optimization and ROI improvement',
    'Latest technology implementation',
    'Comprehensive documentation and training',
    'SLA-backed service guarantees'
  ];
  return (
    <React.Fragment>
      <Helmet>
        <title>IT Services - Zion Tech Group | Information Technology Solutions</title>
        <meta name="description" content="Comprehensive IT services including cloud solutions, cybersecurity, infrastructure management, and more. Expert IT support and consulting." />
        <meta name="keywords" content="IT services, cloud solutions, cybersecurity, IT infrastructure, managed IT, IT consulting, DevOps" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              IT <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Complete IT solutions to modernize your infrastructure, enhance security, and drive business growth.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">500+</div>
                <div className="text-gray-400 text-sm">Clients Served</div>
                <div className="text-gray-500 text-xs mt-1">Growing portfolio of satisfied customers</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <TrendingUp className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">99.9%</div>
                <div className="text-gray-400 text-sm">Uptime</div>
                <div className="text-gray-500 text-xs mt-1">Reliable service you can count on</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">24/7</div>
                <div className="text-gray-400 text-sm">Support</div>
                <div className="text-gray-500 text-xs mt-1">Always here when you need us</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Star className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-white mb-2">4.9/5</div>
                <div className="text-gray-400 text-sm">Rating</div>
                <div className="text-gray-500 text-xs mt-1">Highly rated by our clients</div>
              </div>
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-8 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === 'All'
                      ? 'bg-gradient-to-r from-cyan-500 to-purple-500 text-white'
                      : 'bg-white/10 text-gray-300 hover:bg-white/20'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* IT Services Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Our IT Services</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive suite of IT solutions designed to solve complex business challenges.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service) => (
                <div
                  key={service.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    service.popular
                      ? 'border-cyan-400 shadow-2xl shadow-cyan-500/25 scale-105'
                      : 'border-white/20'
                  } hover:border-cyan-400 transition-all duration-300 group`}
                >
                  {service.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                    <div className="text-2xl font-bold text-cyan-400 mb-2">{service.price}</div>
                    <div className="inline-block px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full">
                      {service.category}
                    </div>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {service.features.slice(0, 4).map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300 text-sm">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                    {service.features.length > 4 && (
                      <li className="text-gray-400 text-sm">
                        +{service.features.length - 4} more features
                      </li>
                    )}
                  </ul>
                  <div className="flex flex-col gap-3">
                    <a
                      href="/contact"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-cyan-500 to-purple-500 text-white hover:from-cyan-600 hover:to-purple-600 transform hover:scale-105 text-center"
                    >
                      Get Quote
                    </a>
                    <a
                      href={`/it-services/${service.id}`}
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 text-center"
                    >
                      Learn More
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">Why Choose Our IT Services?</h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We deliver IT solutions that drive measurable business results and competitive advantage.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-1" />
                    <span className="text-gray-300">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                  Ready to transform your IT infrastructure? Contact our experts for a free consultation.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
                  <p className="text-cyan-400 font-semibold">+1 302 464 0950</p>
                  <p className="text-gray-300 text-sm">24/7 Support Available</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Mail className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Email</h3>
                  <p className="text-cyan-400 font-semibold">kleber@ziontechgroup.com</p>
                  <p className="text-gray-300 text-sm">Quick Response Guaranteed</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Address</h3>
                  <p className="text-cyan-400 font-semibold">364 E Main St STE 1008</p>
                  <p className="text-gray-300 text-sm">Middletown DE 19709</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Transform Your IT Infrastructure?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Let's discuss your IT requirements and create a custom solution that drives real business value.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-600 transition-all duration-300 inline-flex items-center justify-center"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Get Free Consultation
                </a>
                <a
                  href="/pricing"
                  className="border-2 border-cyan-400 text-cyan-400 px-8 py-4 rounded-lg font-semibold hover:bg-cyan-400/10 transition-all duration-300"
                >
                  View Pricing
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </React.Fragment>
  );
};

export default ItServicesPage;
