'use client';
import { use State, use Effect} from 'react';
import { Link } from 'react-router-dom';
import { Arrow Right, Check Circle, Users, Shield, Cloud, Code, Settings, Link as Link Icon, Database, Smartphone } from 'lucide-react';

const It Services Page: React.F C = () => {

  use Effect(() => {
    set Is Visible(true);
  }, []);

  const it Services = [
    {
      title: 'Cloud Infrastructure',
      description: 'Scalable cloud solutions with A W S, Azure, and Google Cloud expertise',
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

const I T Services Page: React.F C = () => {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Migration',
      description: 'Seamlessly migrate your infrastructure to the cloud with A W S, Azure, and Google Cloud expertise.',
      features: ['A W S Migration', 'Azure Migration', 'Google Cloud Setup', 'Hybrid Cloud Solutions'],
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
        'S E O optimization',
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
        'i O S & Android apps',
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
      title: 'A P I Development',
      description: 'R E S Tful and Graph Q L A P Is for seamless integration',
      price: 'Starting at $4,000',
      features: [
        'R E S Tful A P I design',
        'Graph Q L implementation',
        'A P I documentation',
        'Rate limiting',
        'Authentication',
        'Performance monitoring'
      ],
      icon: Link Icon,
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
      title: 'Dev Ops & C I/C D',
      description: 'Automated deployment and continuous integration pipelines',
      price: 'Starting at $6,000',
      features: [
        'C I/C D pipeline setup',
        'Container orchestration',
        'Infrastructure automation',
        'Monitoring and logging',
        'Security scanning',
        'Performance optimization'
      ],
      icon: Settings,
      color: 'from-teal-500 to-cyan-500',
      category: 'Dev Ops'
    },
    {
      title: 'I T Support',
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
        'D App creation',
        'Token development',
        'Blockchain integration',
        'Security auditing',
        'De Fi solutions'
      ],
      icon: Link Icon,
      color: 'from-purple-500 to-pink-500',
      category: 'Development'
    },
    {
      title: 'Io T Development',
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
      icon: Shopping Cart,
      color: 'from-green-500 to-emerald-500',
      category: 'Development'
    },
    {
      title: 'Data Engineering',
      description: 'Big data processing, E T L pipelines, and data warehouse solutions',
      price: 'Starting at $8,000',
      features: [
        'E T L pipeline design',
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
      description: 'M L model deployment, monitoring, and maintenance in production environments',
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
      category: 'Dev Ops'
    },
    {
      title: 'Enterprise Integration',
      description: 'Seamless integration of disparate systems and applications',
      price: 'Starting at $6,000',
      features: [
        'A P I integration',
        'Data synchronization',
        'Legacy system migration',
        'Real-time connectivity',
        'Error handling',
        'Monitoring dashboard'
      ],
      icon: Link Icon,
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
      icon: Trending Up,
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
      icon: Check Square,
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
      icon: Dollar Sign,
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
      icon: Bar Chart,
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
        'Integration A P Is',
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
        'A P I security',
        'Identity management',
        'Network security',
        'Compliance monitoring'
      ],
      icon: Shield,
      color: 'from-indigo-500 to-purple-500',
      category: 'Security'
    }
  ];
  const categories = ['All', 'Infrastructure', 'Security', 'Development', 'Dev Ops', 'Support', 'Automation'];
  const [selected Category, set Selected Category] = use State('All');

  const filtered Services = selected Category === 'All' 
    ? it Services 
    : it Services.filter(service => service.category === selected Category);
      description: 'Modern web applications built with cutting-edge technologies',
      features: ['React/Next.js', 'Node.js backend', 'Database design', 'A P I development'],
      price: 'Starting at $3,000/project'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'i O S and Android applications for all business needs',
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
      title: 'Dev Ops & C I/C D',
      description: 'Automated deployment and continuous integration pipelines',
      features: ['C I/C D setup', 'Container orchestration', 'Monitoring', 'Automated testing'],
      price: 'Starting at $2,000/month'
    }
  ];

  const stats = [
    { number: '500+', label: 'Projects Completed', icon: Check Circle },
    { number: '50+', label: 'Happy Clients', icon: Users },
    { number: '99%', label: 'Client Satisfaction', icon: Star },
    { number: '24/7', label: 'Support Available', icon: Award },
  ];

  return (

      <H elmet>
        <t itle>5G Data Analytics - Zion Tech Group</t itle>
        <m eta name="description" content="Professional 5G data analytics services by Zion Tech Group. Transform your business with our expert solutions." />
      </H elmet>
        <t itle>I T Services - Zion Tech Group | Comprehensive I T Solutions</t itle>
        <m etaconstname = "description" content="Professional I T services including cloud infrastructure, cybersecurity, web development, mobile apps, and Dev Ops. Transform your business with our expert I T solutions." / / />
        <m eta name="keywords" content="I T services, cloud computing, cybersecurity, web development, mobile development, Dev Ops, database management, I T support" / / />
      </H elmet>

      <d iv class Name="m in-h-s c reen bg-gradient-to-br from-slate-900via-cyan-900to-slate-900">
        </d iv>
        {/* Hero Section */}

        <s ection class Name="r e l a tive overflow-hiddenpt-20pb-16" />
          <d iv class Name="a b s o luteinset-0opacity-20" / />
          <d iv class Name="r e l a tive max-w-7 xl mx-auto px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="t e x t-center" />
              <h1 c lass Name="{`t e xt-4" xl md: text-6 xl font-bold text-white mb-6 transition-all duration-1000 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                I T Services

                <s pan class Name="b l o c k bg-gradient-to-r from-cyan-400 to-blue-400bg-clip-texttext-transparent">& Solutions
                </s pan>
              </h1>
              <p c lass Name="{`t e xt-xl" text-gray-300 mb-8 max-w-3 xl mx-auto transition-all duration-1000 delay-300 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />

                Comprehensive I T services to build, secure, and optimize your technology infrastructure. 
                From cloud migration to cybersecurity, we have the expertise you need.

              </p>
              <d iv class Name="{`f l ex" flex-col sm: flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${is Visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`} />
                <L ink to="/contact" class Name="i n l i ne-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                  Get Started Today

                  <A rrow Rightclass Name="m l-2h-5w-5" />
                </L ink>

                <a
                  h r ef="tel:+13024640950"
                  class Name="i n l i ne-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                  Call +1 302 464 0950

                </a>
              </d iv>
          </d iv>
        </s ection>

        {/* Category Filter */}

        <s ection class Name="p y-8b g-g r ay-900/50" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="f l ex f l ex-wrapjustify-centergap-4">
        </d iv>

              {categories.map((category) => (
                <b utton
                  key="{category}"
                  on Click="{()" =>set Selected Category(category)}
                  class Name="{`p x-6" py-3 rounded-lg font-semibold transition-all duration-300 ${
                    selected Category === category
                      ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-lg'
                      : 'bg-gray-800 text-gray-300 hover: bg-gray-700 hover:text-white'
                  }`}
                >
                  {category}
                </b utton>
              ))}

            </d iv>
        </s ection>

        {/* Services Grid */}

        <s ection class Name="p y-16" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4sm:px-6lg:px-8">
        </d iv>
            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2 lg:grid-cols-3xl:grid-cols-4gap-8">
        </d iv>

              {filtered Services.map((service, index) => (
                <d iv
                  key="{index}"
                  class Name="g r o u p relative bg-gray-800 rounded-xl p-6 hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 borderborder-gray-700hover:border-cyan-500" />

                  <d iv class Name="t e x t-centermb-6">
        </d iv>
                    <d iv class Name="{`i n l i ne-flex" items-center justify-center w-16 h-16 bg-gradient-to-r ${service.color} rounded-xl mb-4`} />
                      <s ervice.icon class Name="h-8w-8t e xt-w h ite" />
                    </d iv>
                    <h3 c lass Name="t e xt-xl f o nt-boldtext-whitemb-2">{service.title}</h3>
                    <p c lass Name="t e xt-g r ay-300text-smmb-4">{service.description}</p>
                    <d iv class Name="t e xt-2 xl f o nt-boldtext-cyan-400mb-4">{service.price}</d iv>

                  <d iv class Name="s p a c e-y-3mb-6">
        </d iv>
                    {service.features.map((feature, idx) => (

                      <d ivkey="{idx}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                        <C heck Circleclass Name="h-4 w-4 t e xt-g r een-400mr-3flex-shrink-0" / />
                        <s pan>{feature}</s pan>
                      </d iv>

                    ))}
                  </d iv>

                  <d iv class Name="s p a c e-y-3">
        </d iv>
                    <L ink to="/contact" class Name="w-f u ll i n line-flex items-center justify-center px-4 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300transformhover:scale-105" />

                      Get Quote

                      <A rrow Rightclass Name="m l-2h-4w-4" />
                    </L ink>
                    <L ink to="/contact" class Name="w-f u ll i n line-flex items-center justify-center px-4 py-3 border border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-whitetransition-allduration-300">Learn More
                    </L ink>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20 b g-g r adient-to-brfrom-gray-900to-cyan-900" />
          <d iv class Name="m a x-w-7 xl mx-a u to px-4 sm:px-6lg:px-8text-center">
        </d iv>
            <h2 c lass Name="t e xt-3 xl md:t e xt-4 xl font-boldtext-whitemb-4">Ready to Transform Your I T Infrastructure?
            </h2>
            <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-3xlmx-auto" />

              Let our expert team help you build, secure, and optimize your technology infrastructure 
              for maximum performance and security.

            </p>
            <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
              <L ink to="/contact" class Name="i n l i ne-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold rounded-lg hover:from-cyan-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105shadow-lghover:shadow-xl" />

                Get Started Today

                <A rrow Rightclass Name="m l-2h-5w-5" />
              </L ink>

              <a
                h r ef="tel:+13024640950"
                class Name="i n l i ne-flex items-center px-8 py-4 border-2 border-cyan-400 text-cyan-400 font-semibold rounded-lg hover:bg-cyan-400 hover:text-white transition-all duration-300transformhover:scale-105" />
                Call +1 302 464 0950

              </a>
            </d iv>
            <d iv class Name="m t-8t e x t-gray-400">
        </d iv>
              <p>Email: kleber@ziontechgroup.com</p>
              <p>Address: 364 E Main St S T E 1008, Middletown D E 19709</p>
            </d iv>
        </s ection>
            </d iv>
        </s ection>

        {/* Services Grid */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6" />
                Our <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">I T Solutions</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                End-to-end I T services designed to modernize your infrastructure and accelerate your digital transformation

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1 md:grid-cols-2lg:grid-cols-3gap-8">
        </d iv>
              {services.map((service, index) => (
                <d iv 
                  key="{index}"
                  class Name="b g-g r a dient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm border border-gray-700/50 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 grouphover:transformhover:scale-105" />

                  <d iv class Name="{`w-16" h-16 bg-gradient-to-r ${service.color} rounded-xl flex items-center justify-center mb-6 group-hover: scale-110 transition-transform duration-300`} />
                    <s ervice.icon class Name="w-8h-8t e xt-w h ite" />
                  </d iv>

                  <h3 c lass Name="t e xt-2 xl f o nt-bold text-white mb-4group-hover:text-cyan-400transition-colors">{service.title}
                  </h3>

                  <p c lass Name="t e xt-g r ay-300mb-6leading-relaxed">
                    {service.description}
                  </p>

                  <u lclass Name="s p a c e-y-2mb-6" />
                    {service.features.map((feature, feature Index) => (

                      <l ikey="{feature Index}" class Name="f l ex i t ems-centertext-smtext-gray-300" />
                        <C heck Circleclass Name="w-4 h-4 t e xt-g r een-400mr-2flex-shrink-0" / />

                        {feature}
                      </l i>
                    ))}
                  </u l>

                  <d iv class Name="f l ex i t ems-centerjustify-betweenmb-6">
        </d iv>
                    <s pan class Name="t e xt-2 x l font-boldtext-cyan-400">{service.price}</s pan>
                    <L ink to="{service.link}" class Name="t e xt-c y an-400 hover:text-cyan-300 transition-colors text-sm font-medium group-hover:translate-x-1inline-flexitems-center" />
                      Learn More <A rrow Rightclass Name="w-4h-4m l-1" />
                    </L ink>
                  </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Process Section */}

        <s ection class Name="p y-20 b g-g r adient-to-rfrom-slate-800/30to-slate-900/30" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6" />
                Our <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Process</s pan>
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                A proven methodology that ensures successful project delivery and maximum value for your investment

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-5gap-8">
        </d iv>
              {process.map((step, index) => (

                <d ivkey="{index}" class Name="t e x t-centergroup" />
                  <d iv class Name="w-16 h-16 b g-g r a dient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                    <s pan class Name="t e xt-2 x l font-boldtext-cyan-400">{step.step}</s pan>
                  </d iv>
                  <h3 c lass Name="t e xt-xl f o nt-boldtext-whitemb-4">{step.title}</h3>
                  <p c lass Name="t e xt-g r ay-300text-smleading-relaxed">{step.description}</p>
                </d iv>

              ))}

            </d iv>
        </s ection>

        {/* Why Choose Us */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="t e x t-centermb-16">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6" />
                Why Choose <s pan class Name="b g-g r a dient-to-r from-cyan-400 to-purple-400bg-clip-texttext-transparent">Zion Tech Group</s pan>?
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 max-w-3xlmx-auto" />

                We deliver exceptional I T solutions through expertise, innovation, and unwavering commitment to your success

              </p>
            </d iv>

            <d iv class Name="g r id g r id-cols-1md:grid-cols-3gap-8">
        </d iv>
              <d iv class Name="t e x t-centergroup" />
                <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-cyan-500/20 to-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <Z apclass Name="w-10h-10t e xt-c y an-400" / />
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-4">Rapid Deployment</h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />

                  Fast implementation with minimal downtime. We get your solutions up and running quickly.

                </p>
              </d iv>

              <d iv class Name="t e x t-centergroup" />
                <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-purple-500/20 to-pink-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <U sersclass Name="w-10h-10t e xt-p u rple-400" / />
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-4">Expert Team</h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />

                  Certified professionals with years of experience in enterprise I T solutions and cloud technologies.

                </p>
              </d iv>

              <d iv class Name="t e x t-centergroup" />
                <d iv class Name="w-20 h-20 b g-g r a dient-to-r from-green-500/20 to-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110transition-transformduration-300">
        </d iv>
                  <A wardclass Name="w-10h-10t e xt-g r een-400" / />
                </d iv>
                <h3 c lass Name="t e xt-2 xl f o nt-boldtext-whitemb-4">Proven Results</h3>
                <p c lass Name="t e xt-g r ay-300leading-relaxed" />

                  Track record of successful projects with measurable business impact and client satisfaction.

                </p>
              </d iv>
          </d iv>
        </s ection>

        {/* C T A Section */}

        <s ection class Name="p y-20" />
          <d iv class Name="c o n t ainermx-autopx-4">
        </d iv>
            <d iv class Name="b g-g r a dient-to-r from-cyan-900/50 to-purple-900/50 backdrop-blur-sm border border-cyan-500/20 rounded-2 xlp-12text-center">
        </d iv>
              <h2 c lass Name="t e xt-4 xl f o nt-boldtext-white mb-6">Ready to Modernize Your I T Infrastructure?
              </h2>
              <p c lass Name="t e xt-xl t e xt-gray-300 mb-8 max-w-2xlmx-auto" />

                Let's discuss your I T needs and create a customized solution that drives your business forward.

              </p>
              <d iv class Name="f l ex f l ex-col sm:flex-rowgap-4justify-center">
        </d iv>
                <L ink to="/contact" class Name="b g-g r a dient-to-r from-cyan-500 to-purple-500 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-cyan-600 hover:to-purple-600 transition-all duration-300transformhover:scale-105">Start Your Project
                </L ink>
                <L ink to="/about" class Name="b o r d er border-cyan-500 text-cyan-400 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-cyan-500/10 transition-all duration-300transformhover:scale-105">Learn More About Us
                </L ink>
              </d iv>
          </d iv>
        </s ection>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
          </d iv>
        </d iv>
      </d iv>
        </d iv>
      </d iv>
      </d iv>

  );
};

export default It Services Page;
export default I T Services Page;
export default I T Services Page;
