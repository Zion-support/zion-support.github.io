import React from 'react'

<<<<<<< HEAD
import { Server, Lock, Monitor } from 'lucide-react'
import { CheckCircle, Star, Zap, BarChart, Shield, Helmet } from 'lucide-react'
import { Clock } from 'lucide-react'

<<<<<<< HEAD
=======
import { Server, Lock, Monitor, CheckCircle, Star, Shield, Zap, BarChart, Helmet, Check, Clock } from 'lucide-react';
>>>>>>> cde52f2fe8728de91fd270eb444a2268f737a3f4
const ITInfrastructurePage: React.FC = () => {
  const itServices = [
=======
import {Server, Lock, Monitor, CheckCircle, Star, Zap, BarChart, Shield, Helmet} from 'lucide-react';;
constITInfrastructurePage: React.FC= () =>{constitServices= [
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
    {
      title: 'Cloud Infrastructure Management',
      description: 'Comprehensive cloud infrastructure setup, optimization, and management across AWS, Azure, and Google Cloud platforms.',
      icon: '☁️',
      price: '$2,99 9/month',
      features: [
        'Multi-cloud architecture design',
        'Infrastructure as Code (IaC)',
        'Auto-scaling and load balancing',
        'Cost optimization',
        'Security hardening',
        '2 4/7 monitoring and support'
      ],
      benefits: [
        'Reduce infrastructure costs by 4 0%',
        'Improve system reliability by 9 9.9%',
        'Scale automatically with demand',
        'Ensure enterprise-grade security'
      ],
      marketPrice: '$500 0-1000 0/month',
      technologies: ['AWS', 'Azure', 'Google Cloud', 'Terraform', 'Kubernetes', 'Docker'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'DevOps & CI/CD Pipeline',
      description: 'Complete DevOps transformation with automated deployment pipelines, testing, and continuous integration.',
      icon: '🔄',
      price: '$1,99 9/month',
      features: [
        'CI/CD pipeline setup',
        'Automated testing integration',
        'Container orchestration',
        'Infrastructure monitoring',
        'Security scanning',
        'Deployment automation'
      ],
      benefits: [
        'Deploy 10 x faster',
        'Reduce deployment errors by 9 0%',
        'Improve team productivity',
        'Ensure consistent deployments'
      ],
      marketPrice: '$300 0-600 0/month',
      technologies: ['Jenkins', 'GitLab CI', 'GitHub Actions', 'Docker', 'Kubernetes', 'Ansible'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Database Administration & Optimization',
      description: 'Expert database management, optimization, and migration services for MySQL, PostgreSQL, MongoDB, and more.',
      icon: '🗄️',
      price: '$1,49 9/month',
      features: [
        'Database design and optimization',
        'Performance tuning',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        'Monitoring and alerting'
      ],
      benefits: [
        'Improve query performance by 30 0%',
        'Ensure data security and compliance',
        'Reduce do wntime to near zero',
        'Optimize storage costs'
      ],
      marketPrice: '$250 0-500 0/month',
      technologies: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis', 'Elasticsearch', 'AWS RDS'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Network Security & Firewall Management',
      description: 'Advanced network security solutions with firewall configuration, intrusion detection, and threat monitoring.',
      icon: '🛡️',
      price: '$2,49 9/month',
      features: [
        'Firewall configuration and management',
        'Intrusion detection systems',
        'VPN setup and management',
        'Network monitoring',
        'Security policy implementation',
        'Threat response and mitigation'
      ],
      benefits: [
        'Prevent 9 9% of security breaches',
        'Ensure compliance with regulations',
        'Reduce security incidents by 9 5%',
        'Protect sensitive data'
      ],
      marketPrice: '$400 0-800 0/month',
      technologies: ['Cisco', 'Fortinet', 'Palo Alto', 'pfSense', 'Snort', 'Wireshark'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Server Management & Maintenance',
      description: 'Comprehensive server administration including Windo ws, Linux, and virtualized environments.',
      icon: '🖥️',
      price: '$1,79 9/month',
      features: [
        'Server setup and configuration',
        'OS updates and patching',
        'Performance monitoring',
        'Backup and disaster recovery',
        'User management',
        'Security hardening'
      ],
      benefits: [
        'Ensure 9 9.9% uptime',
        'Reduce maintenance costs by 5 0%',
        'Improve system performance',
        'Prevent security vulnerabilities'
      ],
      marketPrice: '$300 0-600 0/month',
      technologies: ['Windo ws Server', 'Linux', 'VMware', 'Hyper-V', 'Ansible', 'Puppet'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'IT Support & Help Desk',
      description: '2 4/7 IT support services with remote assistance, ticketing system, and proactive monitoring.',
      icon: '🎧',
      price: '$1,29 9/month',
      features: [
        '2 4/7 technical support',
        'Remote desktop assistance',
        'Ticketing and issue tracking',
        'Proactive system monitoring',
        'User training and do cumentation',
        'Hardware and software support'
      ],
      benefits: [
        'Reduce IT do wntime by 8 0%',
        'Improve user satisfaction',
        'Resolve issues faster',
        'Prevent problems proactively'
      ],
      marketPrice: '$200 0-400 0/month',
      technologies: ['ServiceNow', 'Jira', 'TeamViewer', 'SCCM', 'Active Directory', 'Office 36 5'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Data Backup & Disaster Recovery',
      description: 'Comprehensive backup solutions and disaster recovery planning to protect your critical data.',
      icon: '💾',
      price: '$99 9/month',
      features: [
        'Automated backup systems',
        'Disaster recovery planning',
        'Data encryption',
        'Offsite storage',
        'Recovery testing',
        'Compliance monitoring'
      ],
      benefits: [
        'Protect against data loss',
        'Ensure business continuity',
        'Meet compliance requirements',
        'Reduce recovery time to minutes'
      ],
      marketPrice: '$150 0-300 0/month',
      technologies: ['Veeam', 'Acronis', 'AWS Backup', 'Azure Backup', 'Commvault', 'Rubrik'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 30 2 46 40950'
   },
    {title: 'Email & Communication Systems',
      description: 'Enterprise email solutions with Microsoft 36 5, Google Workspace, and custom email server management.',
      icon: '📧',
      price: '$79 9/month',
      features: [
        'Email server setup and management',
        'Microsoft 36 5 administration',
        'Google Workspace management',
        'Email security and filtering',
        'Mobile device management',
        'User provisioning and deprovisioning'
      ],
      benefits: [
        'Improve email security',
        'Reduce spam and phishing',
        'Ensure email compliance',
        'Enhance productivity'
      ],
<<<<<<< HEAD
      marketPrice: '$1200-2500/month',
      technologies: ['Microsoft 365', 'Google Workspace', 'Exchange Server', 'Postfix', 'SpamAssassin', 'MDM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +1 302 464 0950'
    }
  ]
  const infrastructureStats = [
    { metric: '99.9%', description: 'Uptime Guarantee' },
    { metric: '500+', description: 'Servers Managed' },
    { metric: '50+', description: 'Enterprise Clients' },
    { metric: '24/7', description: 'Support Available' },
    { metric: '< 1hr', description: 'Response Time' },
    { metric: '100%', description: 'Security Compliance' }
  ]
  return (
    <>
      <Helmet>
        <title>IT Infrastructure Services - Zion Tech Group</title>
        <meta name="description" content="Comprehensive IT infrastructure services including cloud management, DevOps, database administration, and 24/7 support. Enterprise-grade solutions at competitive prices." />
        <meta name="keywords" content="IT infrastructure, cloud management, DevOps, database administration, server management, IT support, cybersecurity" />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                IT Infrastructure Services
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
                Enterprise-grade IT infrastructure solutions with 99.9% uptime guarantee and 24/7 expert support
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="tel:+13024640950"
                  className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
                >
                  📞 +1 302 464 0950
                </a>
                <a
                  href="mailto:kleber@ziontechgroup.com"
                  className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
                >
                  ✉️ Get Free Infrastructure Audit
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* Infrastructure Statistics */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Infrastructure Track Record
              </h2>
              <p className="text-xl text-gray-600">
                Proven results from our IT infrastructure services
              </p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
              {infrastructureStats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">{stat.metric}</div>
                  <div className="text-lg font-semibold text-gray-900 mb-1">{stat.description}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Key Benefits */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose Our IT Infrastructure Services?
              </h2>
              <p className="text-xl text-gray-600">
                Enterprise-grade solutions with unmatched reliability and support
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Enterprise Security</h3>
                <p className="text-gray-600">Bank-level security with advanced threat protection and compliance monitoring</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">99.9% Uptime</h3>
                <p className="text-gray-600">Guaranteed uptime with redundant systems and proactive monitoring</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock expert support with rapid response times</p>
              </div>
              <div className="text-center">
                <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BarChart className="w-8 h-8 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Cost Optimization</h3>
                <p className="text-gray-600">Reduce IT costs by up to 40% while improving performance and reliability</p>
              </div>
            </div>
          </div>
        </section>
        {/* Services Grid */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                IT Infrastructure Services
              </h2>
              <p className="text-xl text-gray-600">
                Comprehensive infrastructure solutions for modern businesses
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {itServices.map((service, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow border border-gray-200">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-2xl font-bold text-blue-600">{service.price}</span>
                      <span className="text-sm text-gray-500">Market: {service.marketPrice}</span>
                    </div>
                    <div className="text-sm text-green-600 font-semibold">
                      Save up to 50% vs market rates
                    </div>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="space-y-1">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {service.technologies.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-2">Business Benefits:</h4>
                    <ul className="space-y-1">
                      {service.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                          <Star className="w-4 h-4 text-yellow-500 mr-2 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mb-4 p-3 bg-gray-50 rounded-lg">
                    <p className="text-sm text-gray-700 font-medium">{service.contactInfo}</p>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href="tel:+13024640950"
                      className="flex-1 bg-blue-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors text-center"
                    >
                      Call Now
                    </a>
                    <a
                      href="mailto:kleber@ziontechgroup.com"
                      className="flex-1 border border-blue-600 text-blue-600 py-2 px-4 rounded-lg font-semibold hover:bg-blue-50 transition-colors text-center"
                    >
                      Email Us
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Process Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Our Infrastructure Implementation Process
              </h2>
              <p className="text-xl text-gray-600">
                How we design, implement, and manage your IT infrastructure
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">1</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Assessment & Planning</h3>
                <p className="text-gray-600">We analyze your current infrastructure and design an optimal solution</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">2</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Implementation</h3>
                <p className="text-gray-600">We implement the infrastructure with minimal downtime and disruption</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">3</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Testing & Optimization</h3>
                <p className="text-gray-600">We thoroughly test and optimize the system for peak performance</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold">4</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Monitoring & Support</h3>
                <p className="text-gray-600">We provide ongoing monitoring and 24/7 support for your infrastructure</p>
              </div>
            </div>
          </div>
        </section>
        {/* Contact Section */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Optimize Your IT Infrastructure?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Contact our IT infrastructure experts for a free assessment and custom solution design
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href="tel:+13024640950"
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors inline-flex items-center"
              >
                📞 +1 302 464 0950
              </a>
              <a
                href="mailto:kleber@ziontechgroup.com"
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                ✉️ kleber@ziontechgroup.com
              </a>
            </div>
            <div className="text-sm text-blue-200">
              <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
              <p className="mt-2">🌐 https://ziontechgroup.com</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default ITInfrastructurePage
=======
      marketPrice: '$120 0-250 0/month',
      technologies: ['Microsoft 36 5', 'Google Workspace', 'Exchange Server', 'Postfix', 'SpamAssassin', 'MDM'],
      contactInfo: 'Contact: kleber@ziontechgroup.com | +13024640950'
   }
  ];
  constinfrastructureStats= [
    {metric: '9 9.9%', description: 'Uptime Guarantee'},
    {metric: '50 0+', description: 'Servers Managed'},
    {metric: '5 0+', description: 'Enterprise Clients'},
    {metric: '2 4/7', description: 'Support Available'},
   {metric:'<1hr', description: 'Response Time'},
    {metric: '10 0%', description: 'Security Compliance'}
  ];
  return (
    <><Helme t><titl e>IT Infrastructure Services - ZionTechGroup</titl><metaname="description"content="Comprehensive IT infrastructure services including cloud management, DevOps, database administration, and24/7 support. Enterprise-grade solutions at competitiveprices." /><metaname="keywords"content="IT infrastructure, cloud management, DevOps, database administration, server management, IT support,cybersecurity" /></Helme><divclassName="min-h-screen bg-gradient-to-brfrom-slate-50to-blue-50">{/* HeroSection */}
      <sectionclassName="relative overflow-hidden bg-gradient-to-r from-blue-600to-indigo-700text-whitepy-20"><divclassName="absolute inset-0 bg-blackopacity-20"></di><divclassName="relative max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-center"><spanclassName="text-4 xlmd:text-6 xlfont-boldmb-6"></className="text-4 xlmd:text-6 xlfont-boldmb-6">IT Infrastructure Services
            </h><spanclassName="text-xlmd:text-2 xl mb-8 text-blue-100max-w-3xlmx-auto"></className="text-xlmd:text-2 xl mb-8 text-blue-100max-w-3xlmx-auto">Enterprise-grade IT infrastructure solutions with99.9% uptime guarantee and24/7 expert support
            </p><divclassName="flex flex-colsm:flex-rowgap-4justify-center"><ahref="tel:+13024640950"
                 className="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colorsinline-flexitems-center"
                >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
                 className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors"
                >✉️ Get Free Infrastructure Audit
              </a></di></di></di></sectio>{/* InfrastructureStatistics */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Infrastructure Track Record
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Proven results from our IT infrastructure services
            </p></di><divclassName="grid grid-cols-2 md:grid-cols-3lg:grid-cols-6gap-8">{infrastructureStats.map((statindex) => (
             <divkey={index}className="text-center"><divclassName="text-3 xlmd:text-4 xl font-bold text-blue-600mb-2">{stat.metric}</di><divclassName="text-lg font-semibold text-gray-900mb-1">{stat.description}</di></di>))}
          </di></di></sectio>{/* KeyBenefits */}
      <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Why Choose Our IT Infrastructure Services?
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Enterprise-grade solutions with unmatched reliability and support
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-blue-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ShieldclassName="w-8 h-8text-blue-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">EnterpriseSecurity</h><pclassName="text-gray-600">Bank-level security with advanced threat protection andcompliancemonitoring</p></di><divclassName="text-center"><divclassName="bg-green-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ZapclassName="w-8 h-8text-green-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">99.9%Uptime</h><pclassName="text-gray-600">Guaranteed uptime with redundant systems andproactivemonitoring</p></di><divclassName="text-center"><divclassName="bg-purple-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><ClockclassName="w-8 h-8text-purple-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">24/7Support</h><pclassName="text-gray-600">Round-the-clock expert support with rapidresponsetimes</p></di><divclassName="text-center"><divclassName="bg-orange-100w-16h-16rounded-full flex items-center justify-centermx-automb-4"><BarChartclassName="w-8 h-8text-orange-600" /></di><h3className="text-xl font-semibold text-gray-900mb-2">CostOptimization</h><pclassName="text-gray-600">Reduce IT costs by up to40% while improving performanceandreliability</p></di></di></di></sectio>{/* ServicesGrid */}
      <sectionclassName="py-16bg-white"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">IT Infrastructure Services
            </h><spanclassName="text-xltext-gray-600"></className="text-xltext-gray-600">Comprehensive infrastructure solutions for modern businesses
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">{itServices.map((serviceindex) => (
             <divkey={index}className="bg-white rounded-lg shado w-lg p-6 hover:shado w-xl transition-shado w borderborder-gray-200"><divclassName="text-4xlmb-4">{service.icon}</di><h3className="text-xl font-semibold text-gray-900mb-3">{service.title}</h><pclassName="text-gray-600mb-4">{service.description}</p><divclassName="mb-4"><divclassName="flex items-centerjustify-betweenmb-2"><spanclassName="text-2 xl font-boldtext-blue-600">{service.price}</spa><spanclassName="text-smtext-gray-500">Market:{service.marketPrice}</spa></di><divclassName="text-sm text-green-600font-semibold">Save up to50% vs market rates
                  </di></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">KeyFeatures:</h><ulclassName="space-y-1">{service.features.map((featurefeatureIndex) => (
                     <likey={featureIndex}className="flex items-center text-smtext-gray-600"><CheckCircleclassName="w-4 h-4text-green-500mr-2flex-shrink-0" />{feature}
                      </l>))}
                  </u></di><divclassName="mb-4"><h4className="font-semibold text-gray-900mb-2">Technologies:</h><divclassName="flexflex-wrapgap-2">{service.technologies.map((techtechIndex) => (
                      <key={techIndex}className="bg-blue-100text-blue-800text-xs px-2py-1rounded"></ key={techIndex}className="bg-blue-100text-blue-800text-xs px-2py-1rounded">{tech}
                      </spa>))}
                  </di></di><divclassName="mb-6"><h4className="font-semibold text-gray-900mb-2">BusinessBenefits:</h><ulclassName="space-y-1">{service.benefits.map((benefitbenefitIndex) => (
                     <likey={benefitIndex}className="flex items-center text-smtext-gray-600"><StarclassName="w-4 h-4text-yellow-500mr-2flex-shrink-0" />{benefit}
                      </l>))}
                  </u></di><divclassName="mb-4 p-3 bg-gray-50rounded-lg"><pclassName="text-sm text-gray-700font-medium">{service.contactInfo}</p></di><divclassName="flexgap-2"><ahref="tel:+13024640950"
                     className="flex-1 bg-blue-600text-white py-2 px-4 rounded-lgfont-semiboldhover:bg-blue-700transition-colorstext-center"
                    >Call Now
                  </a><ahref="mailto:kleber@ziontechgroup.com"
                     className="flex-1 border border-blue-600text-blue-600py-2 px-4 rounded-lgfont-semiboldhover:bg-blue-50transition-colorstext-center"
                    >Email Us
                  </a></di></di>))}
          </di></di></sectio>{/* ProcessSection */}
      <sectionclassName="py-16bg-gray-50"><divclassName="max-w-7 xl mx-auto px-4sm:px-6lg:px-8"><divclassName="text-centermb-12"><spanclassName="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4"></spa></className="text-3 xlmd:text-4 xl font-bold text-gray-900mb-4">Our Infrastructure Implementation Process
            </h><spanclassName="text-xltext-gray-600"></spa></className="text-xltext-gray-600">How we design, implement, and manage your IT infrastructure
            </p></di><divclassName="grid grid-cols-1 md:grid-cols-2lg:grid-cols-4gap-8"><divclassName="text-center"><divclassName="bg-blue-600text-white w-16h-16rounded-full flex items-center justify-center mx-auto mb-4 text-2xlfont-bold">1</di><h3className="text-xl font-semibold text-gray-900mb-2">Assessment&Planning</h><pclassName="text-gray-600">We analyze your current infrastructure and design anoptimalsolution</p></di><divclassName="text-center"><divclassName="bg-blue-600text-white w-16h-16rounded-full flex items-center justify-center mx-auto mb-4 text-2xlfont-bold">2</di><h3className="text-xl font-semibold text-gray-900mb-2">Implementation</h><pclassName="text-gray-600">We implement the infrastructure with minimal do wntimeanddisruption</p></di><divclassName="text-center"><divclassName="bg-blue-600text-white w-16h-16rounded-full flex items-center justify-center mx-auto mb-4 text-2xlfont-bold">3</di><h3className="text-xl font-semibold text-gray-900mb-2">Testing&Optimization</h><pclassName="text-gray-600">We thoroughly test and optimize the system forpeakperformance</p></di><divclassName="text-center"><divclassName="bg-blue-600text-white w-16h-16rounded-full flex items-center justify-center mx-auto mb-4 text-2xlfont-bold">4</di><h3className="text-xl font-semibold text-gray-900mb-2">Monitoring&Support</h><pclassName="text-gray-600">We provide ongoing monitoring and24/7 support foryourinfrastructure</p></di></di></di></sectio>{/* ContactSection */}
      <sectionclassName="py-16bg-gradient-to-r from-blue-600to-indigo-600text-white"><divclassName="max-w-7 xl mx-auto px-4 sm:px-6lg:px-8text-center"><spanclassName="text-3 xlmd:text-4 xlfont-boldmb-4"></spa></className="text-3 xlmd:text-4 xlfont-boldmb-4">Ready to Optimize Your IT Infrastructure?
          </h><spanclassName="text-xl mb-8text-blue-100"></spa></className="text-xl mb-8text-blue-100">Contact our IT infrastructure experts for a free assessment and custom solution design
          </p><divclassName="flex flex-colsm:flex-row gap-4justify-centermb-8"><ahref="tel:+13024640950"
               className="bg-white text-blue-600px-8 py-3 rounded-lg font-semiboldhover:bg-blue-50transition-colorsinline-flexitems-center"
              >📞 +1 3024640950</a><ahref="mailto:kleber@ziontechgroup.com"
               className="border-2 border-white text-white px-8 py-3 rounded-lg font-semiboldhover:bg-whitehover:text-blue-600transition-colors"
              >✉️ kleber@ziontechgroup.com
            </a></di><divclassName="text-smtext-blue-200"><p>📍 364E Main St STE1008,MiddletownDE19709</p><pclassName="mt-2">🌐https://ziontechgroup.com</p></di></di></sectio></di></>
  );
};
export default ITInfrastructurePage;
>>>>>>> cursor/fix-errors-and-merge-to-main-56a1
