import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Star, Zap, Brain, Cloud, Shield, Code, BarChart, Users, Mail, Calendar, FileText, Image, Video, Music, Globe, Smartphone, Laptop, Database, Lock, Settings, TrendingUp, Target, Rocket, Award, Clock, DollarSign, Server, Network, HardDrive, Cpu, Monitor, Wifi, Smartphone as Phone, Headphones, Printer, Camera, Wrench, Cog, Activity, Globe as Web, Mail as Email, MessageCircle, Mic, Phone as PhoneIcon } from 'lucide-react';

const ITServicesPage: React.FC = () => {
  const itServices = [
    {
      id: 'cloud-infrastructure',
      name: 'Cloud Infrastructure Management',
      description: 'Complete cloud infrastructure setup, migration, and management with 99.9% uptime guarantee.',
      icon: Cloud,
      price: 2999,
      period: 'month',
      features: [
        'Multi-Cloud Strategy',
        'Infrastructure as Code',
        'Auto-Scaling',
        'Disaster Recovery',
        'Cost Optimization',
        'Security Hardening',
        '24/7 Monitoring',
        'Performance Tuning'
      ],
      category: 'Infrastructure',
      popular: true,
      savings: '$15,000/year vs in-house team'
    },
    {
      id: 'cybersecurity',
      name: 'Advanced Cybersecurity',
      description: 'Comprehensive security solutions including threat detection, incident response, and compliance management.',
      icon: Shield,
      price: 2499,
      period: 'month',
      features: [
        'Threat Detection & Response',
        'Vulnerability Assessment',
        'Penetration Testing',
        'SOC Services',
        'Compliance Management',
        'Security Training',
        'Incident Response',
        'Risk Assessment'
      ],
      category: 'Security',
      popular: true,
      savings: '$20,000/year vs security consultants'
    },
    {
      id: 'network-management',
      name: 'Network Infrastructure',
      description: 'Design, implement, and manage enterprise networks with advanced monitoring and optimization.',
      icon: Network,
      price: 1999,
      period: 'month',
      features: [
        'Network Design & Implementation',
        'Wireless Solutions',
        'VPN & Remote Access',
        'Network Monitoring',
        'Traffic Optimization',
        'Load Balancing',
        'Network Security',
        'Performance Analytics'
      ],
      category: 'Infrastructure',
      savings: '$12,000/year vs network specialists'
    },
    {
      id: 'data-center',
      name: 'Data Center Services',
      description: 'Complete data center management including hardware, virtualization, and disaster recovery.',
      icon: Server,
      price: 3999,
      period: 'month',
      features: [
        'Hardware Management',
        'Virtualization',
        'Backup & Recovery',
        'Power Management',
        'Environmental Monitoring',
        'Capacity Planning',
        'Disaster Recovery',
        'Maintenance & Support'
      ],
      category: 'Infrastructure',
      savings: '$25,000/year vs data center costs'
    },
    {
      id: 'devops-automation',
      name: 'DevOps & Automation',
      description: 'Streamline development and deployment with CI/CD pipelines, infrastructure automation, and monitoring.',
      icon: Code,
      price: 1799,
      period: 'month',
      features: [
        'CI/CD Pipeline Setup',
        'Infrastructure Automation',
        'Container Orchestration',
        'Monitoring & Alerting',
        'Testing Automation',
        'Deployment Strategies',
        'Version Control',
        'Performance Optimization'
      ],
      category: 'Development',
      popular: true,
      savings: '$18,000/year vs DevOps engineers'
    },
    {
      id: 'database-management',
      name: 'Database Administration',
      description: 'Expert database management including optimization, backup, security, and performance tuning.',
      icon: Database,
      price: 1299,
      period: 'month',
      features: [
        'Database Design & Optimization',
        'Backup & Recovery',
        'Performance Tuning',
        'Security Hardening',
        'Migration Services',
        'Monitoring & Alerting',
        'Capacity Planning',
        '24/7 Support'
      ],
      category: 'Data Management',
      savings: '$8,000/year vs DBA consultants'
    },
    {
      id: 'help-desk',
      name: 'IT Help Desk Services',
      description: '24/7 technical support for end users with advanced ticketing and remote assistance.',
      icon: Headphones,
      price: 899,
      period: 'month',
      features: [
        '24/7 Technical Support',
        'Remote Desktop Support',
        'Ticket Management',
        'Knowledge Base',
        'User Training',
        'Software Installation',
        'Hardware Troubleshooting',
        'Performance Reports'
      ],
      category: 'Support',
      popular: true,
      savings: '$6,000/year vs in-house support'
    },
    {
      id: 'backup-recovery',
      name: 'Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions with automated testing and rapid disaster recovery capabilities.',
      icon: HardDrive,
      price: 1199,
      period: 'month',
      features: [
        'Automated Backups',
        'Disaster Recovery Planning',
        'Data Replication',
        'Recovery Testing',
        'Compliance Backup',
        'Cloud Storage',
        'Recovery Time Optimization',
        'Business Continuity'
      ],
      category: 'Data Management',
      savings: '$7,500/year vs backup solutions'
    },
    {
      id: 'email-systems',
      name: 'Email & Communication Systems',
      description: 'Enterprise email solutions with security, archiving, and advanced collaboration features.',
      icon: Mail,
      price: 799,
      period: 'month',
      features: [
        'Email Server Management',
        'Security & Spam Protection',
        'Email Archiving',
        'Mobile Device Management',
        'Collaboration Tools',
        'Compliance Features',
        'Migration Services',
        'Performance Monitoring'
      ],
      category: 'Communication',
      savings: '$4,800/year vs email services'
    },
    {
      id: 'monitoring',
      name: 'IT Monitoring & Analytics',
      description: 'Comprehensive monitoring of IT infrastructure with predictive analytics and automated alerting.',
      icon: Activity,
      price: 999,
      period: 'month',
      features: [
        'Infrastructure Monitoring',
        'Performance Analytics',
        'Predictive Maintenance',
        'Automated Alerting',
        'Custom Dashboards',
        'Capacity Planning',
        'Trend Analysis',
        'Reporting & Insights'
      ],
      category: 'Monitoring',
      savings: '$6,000/year vs monitoring tools'
    },
    {
      id: 'mobile-management',
      name: 'Mobile Device Management',
      description: 'Complete mobile device lifecycle management with security, app management, and compliance.',
      icon: Smartphone,
      price: 599,
      period: 'month',
      features: [
        'Device Enrollment',
        'Security Policies',
        'App Management',
        'Remote Wipe',
        'Compliance Monitoring',
        'Location Tracking',
        'Update Management',
        'User Support'
      ],
      category: 'Mobile',
      savings: '$3,600/year vs MDM solutions'
    },
    {
      id: 'print-services',
      name: 'Print & Document Management',
      description: 'Enterprise print management with document workflow, security, and cost optimization.',
      icon: Printer,
      price: 499,
      period: 'month',
      features: [
        'Print Server Management',
        'Document Workflow',
        'Print Security',
        'Cost Tracking',
        'Driver Management',
        'Mobile Printing',
        'Maintenance Services',
        'Usage Analytics'
      ],
      category: 'Document Management',
      savings: '$2,400/year vs print services'
    }
  ];

  const categories = [
    { name: 'Infrastructure', icon: Server, count: 3 },
    { name: 'Security', icon: Shield, count: 1 },
    { name: 'Development', icon: Code, count: 1 },
    { name: 'Data Management', icon: Database, count: 2 },
    { name: 'Support', icon: Headphones, count: 1 },
    { name: 'Communication', icon: Mail, count: 1 },
    { name: 'Monitoring', icon: Activity, count: 1 },
    { name: 'Mobile', icon: Smartphone, count: 1 },
    { name: 'Document Management', icon: Printer, count: 1 }
  ];

  const pricingPlans = [
    {
      name: 'Basic IT Support',
      price: 999,
      period: 'month',
      description: 'Essential IT services for small businesses',
      features: [
        'Help Desk Support',
        'Basic Monitoring',
        'Email Management',
        'Backup Services',
        'Security Updates',
        'Remote Support'
      ],
      popular: false
    },
    {
      name: 'Professional IT',
      price: 2499,
      period: 'month',
      description: 'Comprehensive IT services for growing businesses',
      features: [
        'All Basic Services',
        'Cloud Infrastructure',
        'Advanced Security',
        'Network Management',
        'DevOps Support',
        'Database Administration',
        '24/7 Monitoring',
        'Priority Support'
      ],
      popular: true
    },
    {
      name: 'Enterprise IT',
      price: 4999,
      period: 'month',
      description: 'Full-scale IT services for large organizations',
      features: [
        'All Professional Services',
        'Data Center Management',
        'Advanced Analytics',
        'Custom Solutions',
        'Dedicated Team',
        'SLA Guarantee',
        'Compliance Management',
        'Strategic Consulting'
      ],
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Hero Section */}
      <section className="relative py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 neon-text">
            IT Services & Solutions
          </h1>
          <p className="text-xl md:text-2xl text-cyan-400 mb-8 max-w-3xl mx-auto">
            Comprehensive IT services designed to keep your business running smoothly. From infrastructure to security, we've got you covered.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
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
              Get Free Assessment
            </a>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-2">99.9%</div>
              <div className="text-gray-300 text-sm">Uptime Guarantee</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-green-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">Support Available</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-purple-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Clients Served</div>
            </div>
            <div className="cyber-card hologram-card p-4 text-center">
              <div className="text-2xl md:text-3xl font-bold text-orange-400 mb-2">15min</div>
              <div className="text-gray-300 text-sm">Response Time</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Service Categories
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {categories.map((category, index) => (
              <div key={index} className="cyber-card hologram-card p-6 text-center hover:scale-105 transition-all duration-300">
                <category.icon className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-white font-semibold mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm">{category.count} services</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IT Services */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Our IT Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {itServices.map((service, index) => (
              <div key={index} className={`cyber-card hologram-card p-6 hover:scale-105 transition-all duration-300 relative ${service.popular ? 'ring-2 ring-cyan-400' : ''}`}>
                {service.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                      <Star className="w-4 h-4 mr-1" />
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-center mb-4">
                  <service.icon className="w-8 h-8 text-cyan-400 mr-3" />
                  <div>
                    <h3 className="text-xl font-bold text-white">{service.name}</h3>
                    <span className="text-sm text-gray-400">{service.category}</span>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-4">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold text-cyan-400">${service.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{service.period}</span>
                  </div>
                  {service.savings && (
                    <p className="text-green-400 text-sm mt-1">{service.savings}</p>
                  )}
                </div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className="w-full cyber-button text-center">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Choose Your IT Plan
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div key={index} className={`cyber-card hologram-card p-8 text-center relative ${plan.popular ? 'ring-2 ring-cyan-400 scale-105' : ''}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <div className="mb-6">
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-cyan-400">${plan.price.toLocaleString()}</span>
                    <span className="text-gray-400 ml-1">/{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular 
                    ? 'bg-cyan-600 hover:bg-cyan-700 text-white' 
                    : 'bg-gray-700 hover:bg-gray-600 text-white'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12 neon-text">
            Why Choose Our IT Services?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cyber-card hologram-card p-6 text-center">
              <Shield className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Enterprise Security</h3>
              <p className="text-gray-300">Bank-level security with SOC 2 compliance and advanced threat protection.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Clock className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">24/7 Support</h3>
              <p className="text-gray-300">Round-the-clock monitoring and support to keep your systems running.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <TrendingUp className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proactive Management</h3>
              <p className="text-gray-300">Predictive maintenance and optimization to prevent issues before they occur.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Cloud className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Cloud Expertise</h3>
              <p className="text-gray-300">Deep expertise in AWS, Azure, and Google Cloud platforms.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Settings className="w-12 h-12 text-orange-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Custom Solutions</h3>
              <p className="text-gray-300">Tailored IT solutions designed specifically for your business needs.</p>
            </div>
            
            <div className="cyber-card hologram-card p-6 text-center">
              <Award className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-3">Proven Results</h3>
              <p className="text-gray-300">Trusted by 500+ businesses with proven ROI and success stories.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-slate-800 to-purple-900">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">
            Ready to Optimize Your IT Infrastructure?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Let our experts assess your current IT setup and recommend the best solutions for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              Get Free Assessment
            </a>
          </div>
          
          <div className="mt-8 text-sm text-gray-400 space-y-1">
            <p>✓ Free IT assessment • ✓ Custom recommendations • ✓ No obligation</p>
            <p>✓ 24/7 support • ✓ 99.9% uptime guarantee • ✓ Enterprise security</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ITServicesPage;
