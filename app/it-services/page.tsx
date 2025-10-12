import { useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShoppingCa r t } from 'lucide-react';
import { ArrowRight, ShoppingCa r t} from 'lucide-react';
'use client';

const ItServicesPa g e: React.FC = () => {

  useEffect(() => {)
    setIsVisib l e(true);
  }, []);

  constitServices= [
    {
      title: 'Cloud Infrastructu r e',
      description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud expertise',
      price: 'Starting at $5,000',
      features: [
        'Cloud migration and setup',
        'Infrastructu r e as Code',
        'Auto-scalingsolutions',
        'Cost optimizati o n',
        '24/7 monitoring',
        'Disaster recovery';
      ],
      icon: Cloud,
      color: 'from-cyan-500to-blue-500',
      category: 'Infrastructu r e';
    },
    {
      title: 'Cybersecuri t y Solutions',
      description: 'Comprehensi v e security solutions to protect your digital assets',
      price: 'Starting at $3,000',
      features: [
        'Security assessment',
        'Penetrati o n testing',
        'Security monitoring',
        'Compliance management',
        'Incident response',
        'Staff training';
      ],
      icon: Shield,
      color: 'from-red-500to-orange-500',
      category: 'Security';

const ITServicesPa g e: React.FC = () => {
  constservices= [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructu r e to the cloud with AWS, Azure, and Google Cloud expertise.',
      features: ['AWS Migration', 'Azure Migration', 'Google Cloud Setup', 'Hybrid Cloud Solutions'],
      price: 'Starting at $2,500',
      color: 'from-cyan-500to-blue-500',
      link: '/cloud-migration';
    },
    {
      icon: Shield,
      title: 'Cybersecuri t y Solutions',
      description: 'Comprehensi v e security solutions to protect your digital assets and ensure compliance.',
      features: ['Security Audits', 'Penetrati o n Testing', 'Compliance Management', 'Incident Response'],
      price: 'Starting at $1,500',
      color: 'from-red-500to-orange-500',
      link: '/cybersecuri t y-solutions';
    },
    {
      icon: Code,
      title: 'Web Developme n t',
      description: 'Modern, responsive web applicatio n s built to scale',
      price: 'Starting at $8,000',
      features: [
        'Responsive design',
        'SEO optimizati o n',
        'Performan c e tuning',
        'Maintenan c e support',
        'Mobile optimizati o n',
        'Cross-browsercompatibilit y';
      ],
      color: 'from-green-500to-emerald-500',
      category: 'Developme n t';
    },
    {
      title: 'Mobile Developme n t',
      description: 'Native and cross-platformmobileapplicatio n s',
      price: 'Starting at $12,000',
      features: [
        'iOS & Android apps',
        'Cross-platformdevelopmen t',
        'App store optimizati o n',
        'Push notificatio n s',
        'Offline functionali t y',
        'Performan c e optimizati o n';
      ],
      icon: Smartphone,
      color: 'from-purple-500to-pink-500',
      category: 'Developme n t';
    },
    {
      title: 'API Developme n t',
      description: 'RESTful and GraphQL APIs for seamless integrati o n',
      price: 'Starting at $4,000',
      features: [
        'RESTful API design',
        'GraphQL implementati o n',
        'API documentati o n',
        'Rate limiting',
        'Authenticati o n',
        'Performan c e monitoring';
      ],
      icon: LinkIcon,
      color: 'from-indigo-500to-purple-500',
      category: 'Developme n t';
    },
    {
      title: 'Database Management',
      description: 'Database design, optimizati o n, and maintenan c e',
      price: 'Starting at $2,500',
      features: [
        'Database design',
        'Performan c e optimizati o n',
        'Backup and recovery',
        'Security hardening',
        'Migration services',
        '24/7 monitoring';
      ],
      icon: Database,
      color: 'from-yellow-500to-orange-500',
      category: 'Infrastructu r e';
    },
    {
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integrati o n pipelines',
      price: 'Starting at $6,000',
      features: [
        'CI/CD pipeline setup',
        'Container orchestrati o n',
        'Infrastructu r e automation',
        'Monitoring and logging',
        'Security scanning',
        'Performan c e optimizati o n';
      ],
      icon: Settings,
      color: 'from-teal-500to-cyan-500',
      category: 'DevOps';
    },
    {
      title: 'IT Support',
      description: '24/7 technical support and maintenan c e services',
      price: 'Starting at $1,500/month',
      features: [
        '24/7 technical support',
        'Remote monitoring',
        'Preventive maintenan c e',
        'Hardware support',
        'Software updates',
        'User training';
      ],
      icon: Users,
      color: 'from-blue-500to-indigo-500',
      category: 'Support';
    },
    {
      title: 'Blockchain Developme n t',
      description: 'Custom blockchain solutions, smart contracts, and decentraliz e d applicatio n s',
      price: 'Starting at $15,000',
      features: [
        'Smart contract developme n t',
        'DApp creation',
        'Token developme n t',
        'Blockchain integrati o n',
        'Security auditing',
        'DeFi solutions';
      ],
      icon: LinkIcon,
      color: 'from-purple-500to-pink-500',
      category: 'Developme n t';
    },
    {
      title: 'IoT Developme n t',
      description: 'Internet of Things solutions with device connectivi t y and data management',
      price: 'Starting at $12,000',
      features: [
        'Device connectivi t y',
        'Data collection',
        'Real-timemonitoring',
        'Cloud integrati o n',
        'Mobile apps',
        'Analytics dashboard';
      ],
      icon: Wifi,
      color: 'from-cyan-500to-blue-500',
      category: 'Developme n t';
    },
    {
      title: 'E-commerceDevelopmen t',
      description: 'Custom e-commerceplatformswith payment integrati o n and inventory management',
      price: 'Starting at $10,000',
      features: [
        'Custom storefront',
        'Payment integrati o n',
        'Inventory management',
        'Order processing',
        'Customer portal',
        'Analytics tracking';
      ],
      icon: ShoppingCa r t,
      color: 'from-green-500to-emerald-500',
      category: 'Developme n t';
    },
    {
      title: 'Data Engineeri n g',
      description: 'Big data processing, ETL pipelines, and data warehouse solutions',
      price: 'Starting at $8,000',
      features: [
        'ETL pipeline design',
        'Data warehouse setup',
        'Big data processing',
        'Real-timestreaming',
        'Data quality assurance',
        'Performan c e optimizati o n';
      ],
      icon: Database,
      color: 'from-orange-500to-red-500',
      category: 'Infrastructu r e';
    },
    {
      title: 'Machine Learning Ops',
      description: 'ML model deployment, monitoring, and maintenan c e in production environmen t s',
      price: 'Starting at $12,000',
      features: [
        'Model deployment',
        'Performan c e monitoring',
        'A/B testing',
        'Auto-scaling',
        'Model versioning',
        'Continuous training';
      ],
      icon: Cpu,
      color: 'from-indigo-500to-purple-500',
      category: 'DevOps';
    },
    {
      title: 'Enterprise Integrati o n',
      description: 'Seamless integrati o n of disparate systems and applicatio n s',
      price: 'Starting at $6,000',
      features: [
        'API integrati o n',
        'Data synchronizati o n',
        'Legacy system migration',
        'Real-timeconnectivit y',
        'Error handling',
        'Monitoring dashboard';
      ],
      icon: LinkIcon,
      color: 'from-teal-500to-cyan-500',
      category: 'Infrastructu r e';
    },
    {
      title: 'Performan c e Optimizati o n',
      description: 'Applicati o n and infrastructu r e performan c e tuning for maximum efficiency',
      price: 'Starting at $4,000',
      features: [
        'Performan c e analysis',
        'Code optimizati o n',
        'Database tuning',
        'Caching strategies',
        'Load balancing',
        'Monitoring setup';
      ],
      icon: TrendingUp,
      color: 'from-yellow-500to-orange-500',
      category: 'Infrastructu r e';
    },
    {
      title: 'Disaster Recovery',
      description: 'Comprehensi v e backup and disaster recovery solutions',
      price: 'Starting at $5,000',
      features: [
        'Backup strategies',
        'Recovery planning',
        'Data replicati o n',
        'Failover systems',
        'Testing procedures',
        'Documentati o n';
      ],
      icon: Shield,
      color: 'from-red-500to-pink-500',
      category: 'Security';
    },
    {
      title: 'Compliance Automation',
      description: 'Automated compliance monitoring and reporting for various standards',
      price: 'Starting at $7,000',
      features: [
        'Compliance monitoring',
        'Automated reporting',
        'Audit trails',
        'Policy enforceme n t',
        'Risk assessment',
        'Documentati o n management';
      ],
      icon: CheckSqua r e,
      color: 'from-gray-500to-slate-500',
      category: 'Security';
    },
    {
      title: 'Cloud Cost Optimizati o n',
      description: 'Cloud resource optimizati o n and cost reduction strategies',
      price: 'Starting at $3,000',
      features: [
        'Cost analysis',
        'Resource optimizati o n',
        'Right-sizingrecommendation s',
        'Reserved instance planning',
        'Cost monitoring',
        'Budget management';
      ],
      icon: DollarSign,
      color: 'from-green-500to-teal-500',
      category: 'Infrastructu r e';
    },
    {
      title: 'Security Automation',
      description: 'Automated security monitoring, incident response, and threat hunting',
      price: 'Starting at $8,000',
      features: [
        'Threat detection',
        'Incident response',
        'Vulnerabili t y scanning',
        'Security orchestrati o n',
        'Compliance monitoring',
        'Forensic analysis';
      ],
      icon: Shield,
      color: 'from-red-500to-orange-500',
      category: 'Security';
    },
    {
      title: 'Data Visualizati o n',
      description: 'Interacti v e dashboards and data visualizati o n solutions',
      price: 'Starting at $5,000',
      features: [
        'Custom dashboards',
        'Interacti v e charts',
        'Real-timedata',
        'Mobile responsive',
        'Export capabiliti e s',
        'User management';
      ],
      icon: BarChart,
      color: 'from-blue-500to-purple-500',
      category: 'Developme n t';
    },
    {
      title: 'Workflow Automation',
      description: 'Business process automation and workflow optimizati o n',
      price: 'Starting at $6,000',
      features: [
        'Process mapping',
        'Workflow design',
        'Automation rules',
        'Integrati o n APIs',
        'Monitoring dashboard',
        'Performan c e analytics';
      ],
      icon: Workflow,
      color: 'from-cyan-500to-blue-500',
      category: 'Automation';
    },
    {
      title: 'Cloud Native Security',
      description: 'Security solutions specifical l y designed for cloud-nativeapplication s',
      price: 'Starting at $9,000',
      features: [
        'Container security',
        'Kubernetes security',
        'API security',
        'Identity management',
        'Network security',
        'Compliance monitoring';
      ],
      icon: Shield,
      color: 'from-indigo-500to-purple-500',
      category: 'Security';
    }
  ];
  constcategories= ['All', 'Infrastructu r e', 'Security', 'Developme n t', 'DevOps', 'Support', 'Automation'];
  const [selectedCatego r y, setSelectedCatego r y] = useState('All');

  const filteredServices= selectedCategory=== 'All' 
    ? itServices;
    : itServices.filter(service => service.category === selectedCatego r y);
      description: 'Modern web applicatio n s built with cutting-edgetechnologie s',
      features: ['React/Next.js', 'Node.js backend', 'Database design', 'API developme n t'],
      price: 'Starting at $3,000/project';
    },
    {
      icon: Smartphone,
      title: 'Mobile Developme n t',
      description: 'iOS and Android applicatio n s for all business needs',
      features: ['Native developme n t', 'Cross-platform', 'App store deployment', 'Maintenan c e'],
      price: 'Starting at $5,000/app';
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Data processing, storage, and analytics solutions',
      features: ['Database design', 'Performan c e optimizati o n', 'Data migration', 'Backup solutions'],
      price: 'Starting at $1,200/month';
    },
    {
      icon: Settings,
      title: 'DevOps & CI/CD',
      description: 'Automated deployment and continuous integrati o n pipelines',
      features: ['CI/CD setup', 'Container orchestrati o n', 'Monitoring', 'Automated testing'],
      price: 'Starting at $2,000/month';
    }
  ];

  conststats= [
    { number: '500+', label: 'Projects Completed', icon: CheckCirc l e ,},
    { number: '50+', label: 'Happy Clients', icon: Users ,},
    { number: '99%', label: 'Client Satisfacti o n', icon: Star ,},
    { number: '24/7', label: 'Support Available', icon: Award ,},
  ];

return (
    <>
      <Helmet></Helmet>
        <title />IT Services - Zion Tech Group | Comprehensi v e IT Solutions</title>
        <metaconstname= "description" content="Professional IT services including cloud infrastructu r e, cybersecuri t y, web developme n t, mobile apps, and DevOps. Transform your business with our expert IT solutions." /  />
        <meta name="keywords" content="IT services, cloud computing, cybersecuri t y, web developme n t, mobile developme n t, DevOps, database management, IT support" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
        {/* Hero Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h1 className="{`text-4" xl md: text-6xlfont-boldtext-whitemb-6transition-allduration-1000 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                IT Services;
                <span className="w-5h-5ml-2" />& Solutions;
                </span>
              </h1>
              <p className="{`text-xl" text-gray-300mb-8max-w-3xlmx-autotransition-allduration-1000delay-300 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10'}`} />
                Comprehensi v e IT services to build, secure, and optimize your technology infrastructu r e.;
                From cloud migration to cybersecuri t y, we have the expertise you need.;
              </p>
              <div className="{`flex" flex-colsm: flex-rowgap-4justify-centertransition-allduration-1000delay-500 ${isVisible ? 'opacity-100translate-y-0' : 'opacity-0translate-y-10',}`} />
                <Link;
          to="/contact";
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-cyan-600to-blue-600text-whitefont-semiboldrounded-lghover:from-cyan-700hover:to-blue-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Get Started Today;
                  
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                <a;
                  href="tel:+130246409 5 0";
                  className="inline-flexitems-centerpx-8py-4border-2border-cyan-400text-cyan-400font-semiboldrounded-lghover:bg-cyan-400hover:text-whitetransition-allduration-300transformhover:scale-105" />
                  Call +1 302 464 0950;
                </a>
              </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {categories.map((category) => ())
                <button;
                  key="{category}";
                  onClick="{()" =  />setSelectedCatego r y(category)}
                  className="{`px-6" py-3rounded-lgfont-semiboldtransition-allduration-300 ${
                    selectedCategory=== category;
                      ? 'bg-gradient-to-rfrom-cyan-600to-blue-600text-whiteshadow-lg';
                      : 'bg-gray-800text-gray-300hover: bg-gray-700hover:text-white';
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
        </section>

        {/* Services Grid */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {filteredServic e s.map((service, index) => ())
                <div>>
                  key="{index}";
                  className="grouprelativebg-gray-800rounded-xlp-6hover:bg-gray-700transition-allduration-300transformhover:scale-105borderborder-gray-700hover:border-cyan-500" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <div className="{`inline-flex" items-centerjustify-centerw-16h-16bg-gradient-to-r ${service.color} rounded-xlmb-4`} />
                      <service.iconclassName="h-8w-8text-white"  />
                    </div>
                    <h3 className="w-5h-5ml-2" />{service.title}</h3>
                    <p className="w-5h-5ml-2">{service.description}</p>
                    <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">{service.price}</div>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    {service.features.map((feature, idx) => ())
                      <divkey="{idx}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        <span />{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <Link;
          to="/contact";
          className="w-fullinline-flexitems-centerjustify-centerpx-4py-3bg-gradient-to-rfrom-cyan-600to-blue-600text-whitefont-semiboldrounded-lghover:from-cyan-700hover:to-blue-700transition-allduration-300transformhover:scale-105"
        >
          Get Quote;
                      
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                    <Linkto="/contact" className="w-fullinline-flexitems-centerjustify-centerpx-4py-3borderborder-cyan-400text-cyan-400font-semiboldrounded-lghover:bg-cyan-400hover:text-whitetransition-allduration-300">Learn More;
                    </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <h2 className="w-5h-5ml-2" />Ready to Transform Your IT Infrastructu r e?;
            </h2>
            <p className="w-5h-5ml-2">Let our expert team help you build, secure, and optimize your technology infrastructu r e;
              for maximum performan c e and security.;
            </p>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <Link;
          to="/contact";
          className="inline-flexitems-centerpx-8py-4bg-gradient-to-rfrom-cyan-600to-blue-600text-whitefont-semiboldrounded-lghover:from-cyan-700hover:to-blue-700transition-allduration-300transformhover:scale-105shadow-lghover:shadow-xl"
        >
          Get Started Today;
                
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
              <a;
                href="tel:+130246409 5 0";
                className="inline-flexitems-centerpx-8py-4border-2border-cyan-400text-cyan-400font-semiboldrounded-lghover:bg-cyan-400hover:text-whitetransition-allduration-300transformhover:scale-105" />
                Call +1 302 464 0950;
              </a>
            </div>
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <p />Email: kleber@ziontechgro u p.com</p>
              <p />Address: 364 E Main St STE 1008, Middletown DE 19709</p>
            </div>
        </section>
            </div>
        </section>

        {/* Services Grid */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Our <span className="w-5h-5ml-2" />IT Solutions</span>
              </h2>
              <p className="w-5h-5ml-2">End-to-endITservices designed to modernize your infrastructu r e and accelerate your digital transformati o n;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {services.map((service, index) => ())
                <div>>
                  key="{index}";
                  className="bg-gradient-to-brfrom-slate-800/50to-slate-900/50backdrop-blur-smborderborder-gray-700/50rounded-xlp-8hover:border-cyan-400/40transition-allduration-300grouphover:transformhover:scale-105" />
                  <div className="{`w-16" h-16bg-gradient-to-r ${service.color} rounded-xlflexitems-centerjustify-centermb-6group-hover: scale-110transition-transformduration-300`,} />
                    <service.iconclassName="w-8h-8text-white"  />
                  </div>
                  
                  <h3 className="w-5h-5ml-2" />{service.title}
                  </h3>
                  
                  <p className="w-5h-5ml-2">{service.description}
                  </p>

                  <ulclassName="w-5h-5ml-2" />
                    {service.features.map((feature, featureInd e x) => ())
                      <likey="{featureInd e x}" className="flexitems-centertext-smtext-gray-300" />
                        <CheckCirc leclassName="w-5h-5ml-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{service.price}</span>
                    <Link;
          to="{service.link}";
          className="text-cyan-400hover:text-cyan-300transition-colorstext-smfont-mediumgroup-hover:translate-x-1inline-flexitems-center"
        >
          Learn More;
          <ArrowRight className="w-5h-5ml-2" />
        </Link>
                  </div>
              ))}
            </div>
        </section>

        {/* Process Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Our <span className="w-5h-5ml-2" />Process</span>
              </h2>
              <p className="w-5h-5ml-2">A proven methodolo g y that ensures successful project delivery and maximum value for your investment;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              {process.map((step, index) => ())
                <divkey="{index}" className="text-centergroup" />
                  <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                    <span className="w-5h-5ml-2" />{step.step}</span>
                  </div>
                  <h3 className="w-5h-5ml-2" />{step.title}</h3>
                  <p className="w-5h-5ml-2">{step.description}</p>
                </div>
              ))}
            </div>
        </section>

        {/* Why Choose Us */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />
                Why Choose <span className="w-5h-5ml-2" />Zion Tech Group</span>?;
              </h2>
              <p className="w-5h-5ml-2">We deliver exception a l IT solutions through expertise, innovation, and unwavering commitment to your success;
              </p>
            </div>

            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <ZapclassName="w-5h-5ml-2" />
                </div>
                <h3 className="w-5h-5ml-2" />Rapid Deployment</h3>
                <p className="w-5h-5ml-2">Fast implementati o n with minimal downtime. We get your solutions up and running quickly.;
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <UsersclassName="w-5h-5ml-2" />
                </div>
                <h3 className="w-5h-5ml-2" />Expert Team</h3>
                <p className="w-5h-5ml-2">Certified professiona l s with years of experience in enterprise IT solutions and cloud technologi e s.;
                </p>
              </div>

              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                  <AwardclassName="w-5h-5ml-2" />
                </div>
                <h3 className="w-5h-5ml-2" />Proven Results</h3>
                <p className="w-5h-5ml-2">Track record of successful projects with measurable business impact and client satisfacti o n.;
                </p>
              </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-5h-5ml-2" />
          <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
            <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
              <h2 className="w-5h-5ml-2" />Ready to Modernize Your IT Infrastructu r e?;
              </h2>
              <p className="w-5h-5ml-2">Let's discuss your IT needs and create a customized solution that drives your business forward.;
              </p>
              <div className="min-h-screen bg-gradient-to-brfrom-slate-900via-purple-900to-slate-900pt-20">
                <Linkto="/contact" className="bg-gradient-to-rfrom-cyan-500to-purple-500text-whitepx-8py-4rounded-lgfont-semiboldtext-lghover:from-cyan-600hover:to-purple-600transition-allduration-300transformhover:scale-105">Start Your Project;
                </Link>
                <Linkto="/about" className="borderborder-cyan-500text-cyan-400px-8py-4rounded-lgfont-semiboldtext-lghover:bg-cyan-500/10transition-allduration-300transformhover:scale-105">Learn More About Us;
                </Link>
              </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ItServicesPa g e;
export default ITServicesPa g e;
export default ITServicesPa g e;
