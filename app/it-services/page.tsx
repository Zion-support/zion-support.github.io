<<<<<<< HEAD
<<<<<<< HEAD

=======
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

<<<<<<< HEAD
export default function ItServices() {
=======
export default ItServicesPage;
export default ITServicesPage;
export default ITServicesPage;
'use client';

const ItServicesPage: React.FC = () => {

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const itServices = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: [
        'Cloud migration and setup',
        'Infrastructure as Code',
        'Auto-scaling solutions',
        'Cost optimization',
        '24/7 monitoring',
        'Disaster recovery'
      ],
      icon: Cloud,
      color: 'from-cyan-500 to-blue-500',
      category: 'Infrastructure'
    },
    {
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets',
      price: 'Starting at $3,000',
      features: [
        'Security assessment',
        'Penetration testing',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Staff training'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security'

const ITServicesPage: React.FC = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with AWS, Azure, and Google Cloud expertise.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Setup', 'Hybrid Cloud Solutions'],
      price: 'Starting at $2,500',
      color: 'from-cyan-500 to-blue-500',
      link: '/cloud-migration'
    },
    {
      icon: Shield,
      title: 'Cybersecurity Solutions',
      description: 'Comprehensive security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $1,500',
      color: 'from-red-500 to-orange-500',
      link: '/cybersecurity-solutions'
    },
    {
      icon: Code,
      title: 'Web Development',
      description: 'Modern, responsive web applications built to scale',
      price: 'Starting at $8,000',
      features: [
        'Responsive design',
        'SEO optimization',
        'Performance tuning',
        'Maintenance support',
        'Mobile optimization',
        'Cross-browser compatibility'
      ],
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'Mobile Development',
      description: 'Native and cross-platform mobile applications',
      price: 'Starting at $12,000',
      features: [
        'iOS & Android apps',
        'Cross-platform development',
        'App store optimization',
        'Push notifications',
        'Offline functionality',
        'Performance optimization'
      ],
      icon: Smartphone,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'API Development',
      description: 'RESTful and GraphQL APIs for seamless integration',
      price: 'Starting at $4,000',
      features: [
        'RESTful API design',
        'GraphQL implementation',
        'API documentation',
        'Rate limiting',
        'Authentication',
        'Performance monitoring'
      ],
      icon: LinkIcon,
      color: 'from-indigo-500 to-purple-500',
      category: 'Development'
    },
    {
      title: 'Database Management',
      description: 'Database design, optimization, and maintenance',
      price: 'Starting at $2,500',
      features: [
        'Database design',
        'Performance optimization',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        '24/7 monitoring'
      ],
      icon: Database,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure'
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      price: 'Starting at $6,000',
      features: [
        'CI/CD pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring and logging',
        'Security scanning',
        'Performance optimization'
      ],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      category: 'DevOps'
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenance services',
      price: 'Starting at $1,500/month',
      features: [
        '24/7 technical support',
        'Remote monitoring',
        'Preventive maintenance',
        'Hardware support',
        'Software updates',
        'User training'
      ],
      icon: Users,
      color: 'from-blue-500 to-indigo-500',
      category: 'Support'
    },
    {
      title: 'Blockchain Development',
      description: 'Custom blockchain solutions, smart contracts, and decentralized applications',
      price: 'Starting at $15,000',
      features: [
        'Smart contract development',
        'DApp creation',
        'Token development',
        'Blockchain integration',
        'Security auditing',
        'DeFi solutions'
      ],
      icon: LinkIcon,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'IoT Development',
      description: 'Internet of Things solutions with device connectivity and data management',
      price: 'Starting at $12,000',
      features: [
        'Device connectivity',
        'Data collection',
        'Real-time monitoring',
        'Cloud integration',
        'Mobile apps',
        'Analytics dashboard'
      ],
      icon: Wifi,
      color: 'from-cyan-500 to-blue-500',
      category: 'Development'
    },
    {
      title: 'E-commerce Development',
      description: 'Custom e-commerce platforms with payment integration and inventory management',
      price: 'Starting at $10,000',
      features: [
        'Custom storefront',
        'Payment integration',
        'Inventory management',
        'Order processing',
        'Customer portal',
        'Analytics tracking'
      ],
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'Data Engineering',
      description: 'Big data processing, ETL pipelines, and data warehouse solutions',
      price: 'Starting at $8,000',
      features: [
        'ETL pipeline design',
        'Data warehouse setup',
        'Big data processing',
        'Real-time streaming',
        'Data quality assurance',
        'Performance optimization'
      ],
      icon: Database,
      color: 'from-orange-500 to-red-500',
      category: 'Infrastructure'
    },
    {
      title: 'Machine Learning Ops',
      description: 'ML model deployment, monitoring, and maintenance in production environments',
      price: 'Starting at $12,000',
      features: [
        'Model deployment',
        'Performance monitoring',
        'A/B testing',
        'Auto-scaling',
        'Model versioning',
        'Continuous training'
      ],
      icon: Cpu,
      color: 'from-indigo-500 to-purple-500',
      category: 'DevOps'
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamless integration of disparate systems and applications',
      price: 'Starting at $6,000',
      features: [
        'API integration',
        'Data synchronization',
        'Legacy system migration',
        'Real-time connectivity',
        'Error handling',
        'Monitoring dashboard'
      ],
      icon: LinkIcon,
      color: 'from-teal-500 to-cyan-500',
      category: 'Infrastructure'
    },
    {
      title: 'Performance Optimization',
      description: 'Application and infrastructure performance tuning for maximum efficiency',
      price: 'Starting at $4,000',
      features: [
        'Performance analysis',
        'Code optimization',
        'Database tuning',
        'Caching strategies',
        'Load balancing',
        'Monitoring setup'
      ],
      icon: TrendingUp,
      color: 'from-yellow-500 to-orange-500',
      category: 'Infrastructure'
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensive backup and disaster recovery solutions',
      price: 'Starting at $5,000',
      features: [
        'Backup strategies',
        'Recovery planning',
        'Data replication',
        'Failover systems',
        'Testing procedures',
        'Documentation'
      ],
      icon: Shield,
      color: 'from-red-500 to-pink-500',
      category: 'Security'
    },
    {
      title: 'Compliance Automation',
      description: 'Automated compliance monitoring and reporting for various standards',
      price: 'Starting at $7,000',
      features: [
        'Compliance monitoring',
        'Automated reporting',
        'Audit trails',
        'Policy enforcement',
        'Risk assessment',
        'Documentation management'
      ],
      icon: CheckSquare,
      color: 'from-gray-500 to-slate-500',
      category: 'Security'
    },
    {
      title: 'Cloud Cost Optimization',
      description: 'Cloud resource optimization and cost reduction strategies',
      price: 'Starting at $3,000',
      features: [
        'Cost analysis',
        'Resource optimization',
        'Right-sizing recommendations',
        'Reserved instance planning',
        'Cost monitoring',
        'Budget management'
      ],
      icon: DollarSign,
      color: 'from-green-500 to-teal-500',
      category: 'Infrastructure'
    },
    {
      title: 'Security Automation',
      description: 'Automated security monitoring, incident response, and threat hunting',
      price: 'Starting at $8,000',
      features: [
        'Threat detection',
        'Incident response',
        'Vulnerability scanning',
        'Security orchestration',
        'Compliance monitoring',
        'Forensic analysis'
      ],
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      category: 'Security'
    },
    {
      title: 'Data Visualization',
      description: 'Interactive dashboards and data visualization solutions',
      price: 'Starting at $5,000',
      features: [
        'Custom dashboards',
        'Interactive charts',
        'Real-time data',
        'Mobile responsive',
        'Export capabilities',
        'User management'
      ],
      icon: BarChart,
      color: 'from-blue-500 to-purple-500',
      category: 'Development'
    },
    {
      title: 'Workflow Automation',
      description: 'Business process automation and workflow optimization',
      price: 'Starting at $6,000',
      features: [
        'Process mapping',
        'Workflow design',
        'Automation rules',
        'Integration APIs',
        'Monitoring dashboard',
        'Performance analytics'
      ],
      icon: Workflow,
      color: 'from-cyan-500 to-blue-500',
      category: 'Automation'
    },
    {
      title: 'Cloud Native Security',
      description: 'Security solutions specifically designed for cloud-native applications',
      price: 'Starting at $9,000',
      features: [
        'Container security',
        'Kubernetes security',
        'API security',
        'Identity management',
        'Network security',
        'Compliance monitoring'
      ],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      category: 'Security'
    }
  ];
  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'DevOps', 'Support', 'Automation'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredServices = selectedCategory === 'All' 
    ? itServices;
    : itServices.filter(service => service.category === selectedCategory);
      description: 'Modern web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js backend', 'Database design', 'API development'],
      price: 'Starting at $3,000/project'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'iOS and Android applications for all business needs',
      features: ['Native development', 'Cross-platform', 'App store deployment', 'Maintenance'],
      price: 'Starting at $5,000/app'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Data processing, storage, and analytics solutions',
      features: ['Database design', 'Performance optimization', 'Data migration', 'Backup solutions'],
      price: 'Starting at $1,200/month'
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integration pipelines',
      features: ['CI/CD setup', 'Container orchestration', 'Monitoring', 'Automated testing'],
      price: 'Starting at $2,000/month'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: CheckCircle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

>>>>>>> origin/main
  return (
<<<<<<< HEAD

        <>
      <title>ItServices - Zion Tech Group</title>
      
            <h1 className="text-4xl font-bold text-white mb-6">ItServices</h1>
            <p className="text-lg text-gray-300 mb-8">Professional itservices services coming soon.</p>
            
              Contact Us

      </>
  );
=======
    <></>
      <Helmet></Helmet>
        <title />IT Services - Zion Tech Group | Comprehensive IT Solutions</title>
        <meta const name = "description" content="Professional IT services including cloud infrastructure, cybersecurity, web development, mobile apps, and DevOps. Transform your business with our expert IT solutions." /  /></meta>
        <meta name="keywords" content="IT services, cloud computing, cybersecurity, web development, mobile development, DevOps, database management, IT support" /></meta>
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
        {/* Hero Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h1 className="{`text-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} /></h1>
                IT Services;
                <span className="w-5h-5ml-2" />& Solutions;
                </span>
              </h1>
              <p className="{`text-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} /></p>
                Comprehensive IT services to build, secure, and optimize your technology infrastructure. 
                From cloud migration to cybersecurity, we have the expertise you need.
              </p>
              <div className="{`flex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} /></div>
                <Link;</Link></Link>
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        ></Link>
          Get Started Today;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
                <a;
                  href="tel:+13024640950"
                  className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300transformhover:scale-105" /></a>
                  Call +1 302 464 0950;
                </a>
              </div>
          </div>
        </section>
        {/* Category Filter */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {categories.map((category) => (
                <button;
                  key="{category}"
                  onClick="{()" =  />setSelectedCategory(category)}
                  className="{`px-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selectedCategory === category;
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </section>
        {/* Services Grid */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {filteredServices.map((service, index) => (
                <div;
                  key="{index}"
                  className="group relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 borderborder-gray-700hover:border-cyan-500" /></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <div className="{`inline- flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`} /></div>
                      <service.icon className="h-8w-8text-white"  /></service>
                    </div>
                    <h3 className="w-5h-5ml-2" />{service.title}</h3>
                    <p className="w-5h-5ml-2">{service.description}</p>
                    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">{service.price}</div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    {service.features.map((feature, idx) => (
                      <div key="{idx}" className="flex items-centertext-sm text-gray-300" /></div>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        <span />{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <Link;</Link></Link>
          to="/contact"
          className="w-full inline-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300transformhover:scale-105"
        ></Link>
          Get Quote;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
                    <Link to="/contact" className="w-full inline-flex items-center justify-center px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-whitetransition-all duration-300">Learn More;
                    </Link>
                  </div>
              ))}
            </div>
        </section>
        {/* CTA Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <h2 className="w-5h-5ml-2" />Ready to Transform Your IT Infrastructure?
            </h2>
            <p className="w-5h-5ml-2">Let our expert team help you build, secure, and optimize your technology infrastructure;
              for maximum performance and security.
            </p>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <Link;</Link></Link>
          to="/contact"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl"
        ></Link>
          Get Started Today;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
              <a;
                href="tel:+13024640950"
                className="inline-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300transformhover:scale-105" /></a>
                Call +1 302 464 0950;
              </a>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <p />Email: kleber@ziontechgroup.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
            </div>
        </section>
        {/* Services Grid */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Our <span className="w-5h-5ml-2" />IT Solutions</span>
              </h2>
              <p className="w-5h-5ml-2">End-to-end IT services designed to modernize your infrastructure and accelerate your digital transformation;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {services.map((service, index) => (
                <div;
                  key="{index}"
                  className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover: transformhove,
  r:scale-105" /></div>
                  <div className="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} /></div>
                    <service.icon className="w-8 h-8text-white"  /></service>
                  </div>
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  <p className="w-5h-5ml-2">{service.description}
                  </p>
                  <ul className="w-5h-5ml-2" /></ul>
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-centertext-sm text-gray-300" /></li>
                        <CheckCircle className="w-5h-5ml-2" /></CheckCircle>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span className="w-5h-5ml-2" />{service.price}</span>
                    <Link;</Link></Link>
          to="{service.link}"
          className="text-cyan-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1inline-flex items-center"
        ></Link>
          Learn More;
          <ArrowRight className="w-5h-5ml-2" /></ArrowRight>
        </Link>
                  </div>
              ))}
            </div>
        </section>
        {/* Process Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Our <span className="w-5h-5ml-2" />Process</span>
              </h2>
              <p className="w-5h-5ml-2">A proven methodology that ensures successful project delivery and maximum value for your investment;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              {process.map((step, index) => (
                <div key={index} className="text-centergroup" /></div>
                  <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                    <span className="w-5h-5ml-2" />{step.step}</span>
                  </div>
                  <h3 className="w-5h-5ml-2" />{step.title}</h3>
                  <p className="w-5h-5ml-2">{step.description}</p>
                </div>
              ))}
            </div>
        </section>
        {/* Why Choose Us */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" /></h2>
                Why Choose <span className="w-5h-5ml-2" />Zion Tech Group</span>?
              </h2>
              <p className="w-5h-5ml-2">We deliver exceptional IT solutions through expertise, innovation, and unwavering commitment to your success;
              </p>
            </div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <Zap className="w-5h-5ml-2" /></Zap>
                </div>
                <h3 className="w-5h-5ml-2" />Rapid Deployment</h3>
                <p className="w-5h-5ml-2">Fast implementation with minimal downtime. We get your solutions up and running quickly.
                </p>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <Users className="w-5h-5ml-2" /></Users>
                </div>
                <h3 className="w-5h-5ml-2" />Expert Team</h3>
                <p className="w-5h-5ml-2">Certified professionals with years of experience in enterprise IT solutions and cloud technologies.
                </p>
              </div>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                  <Award className="w-5h-5ml-2" /></Award>
                </div>
                <h3 className="w-5h-5ml-2" />Proven Results</h3>
                <p className="w-5h-5ml-2">Track record of successful projects with measurable business impact and client satisfaction.
                </p>
              </div>
          </div>
        </section>
        {/* CTA Section */}
        <section className="w-5h-5ml-2" /></section>
          <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
            <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
              <h2 className="w-5h-5ml-2" />Ready to Modernize Your IT Infrastructure?
              </h2>
              <p className="w-5h-5ml-2">Let's discuss your IT needs and create a customized solution that drives your business forward.
              </p>
              <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20"></div>
                <Link to="/contact" className="bg-gradient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project;
                </Link>
                <Link to="/about" className="border border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

<<<<<<< HEAD
=======
export default function ItServicesPage() {
  return (
    <>
      <Helmet>
        <title>It Services - Zion Tech Group</title>
        <meta name="description" content="Professional it services by Zion Tech Group. Transform your business with our expert solutions." />
      </Helmet>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-4xl font-bold text-white mb-6">It Services</h1>
          <p className="text-lg text-gray-300 mb-8">Professional it services coming soon.</p>
          <Link
            to="/contact"
            className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 flex items-center justify-center mx-auto w-fit"
          >
            Contact Us
            <ArrowRight className="w-5 h-5 ml-2" />
          </Link>
        </div>
      </div>
    </>
  );
}
>>>>>>> cursor/fix-errors-and-merge-to-main-b918
=======
}
>>>>>>> cursor/fix-errors-and-merge-to-main-e6d0
>>>>>>> origin/main
