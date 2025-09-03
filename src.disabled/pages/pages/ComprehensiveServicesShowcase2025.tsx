import {}
  Zap, ;
  Brain, ;
  Shield, ;
  Users, ;
  HardDrive, ;
  TrendingUp, ;
  Building2, ;
  FileText, ;
  HelpCircle, ;
  BarChart3,;
  Globe,;
  Cpu,;
  Database,;
  Lock,;
  Cloud,;
  Rocket,;
  Code,;
  Server,;
  Chip,;
  Wifi,;
  ShieldCheck,;
  Bot,;
  Workflow,;
  Eye,;
  Sparkles,;
  Atom,;
  Leaf,;
  Gamepad2,;
  Coins,;
  Satellite,;
  Activity,;
  MessageCircle,;
  Search,;
  BarChart,;
  Users2,;
  Settings,;
  Palette,;
  Target,;
  Handshake,;
  Lightbulb,;
  Network,;
  Smartphone,;
  Star,;
  CheckCircle,;
  ArrowRight,;
  Play,;
  ChevronLeft,;
  ChevronRight,;
  Phone,;
  Mail,;
  MapPin,;
  Clock,;
  DollarSign,;
  Award,;
  Heart,;
  Briefcase,;
  Newspaper,;
  Video,;
  TestTube,;
  Truck,;
  BookOpen,;
  ShoppingCart,;
  Link as LinkIcon,;
  Heart as HeartIcon,;
  Atom as AtomIcon,;
  Rocket as RocketIcon,;
  Leaf as LeafIcon,;
  Shield as ShieldIcon,;
  Zap as ZapIcon,;
  Cpu as CpuIcon,;
  Database as DatabaseIcon,;
  Users as UsersIcon,;
  X''''} from 'lucide-react';
interface Service {}
  id: string;
  name: string;
  description: string;
  category: string;
  icon: unknown;
  features: string[];
  pricing: {}
    starter: string;
    professional: string;
    enterprise: string}
  benefits: string[];';
  useCases: string[];'';
  link: string;''';
  status: 'available' | 'coming-soon' | 'beta'}
;const services: Service[] = [];
  // AI Services;
  {}
';
'';
''';
    id: 'ai-autonomous-research-assistant',''';
    name: 'AI Autonomous Research Assistant',''';
    description: 'Advanced AI-powered research platform that autonomously conducts comprehensive research, analyzes data, and generates insights across multiple domains.',''';
    category: 'AI & Research','';
    icon: Brain,''';
    features: ['''';
      'Autonomous research execution',Multi-source data analysis',Intelligent insight generation',Real-time collaboration tools',Custom research workflows',Advanced analytics dashboard';
    ],;
    pricing: {}
';
'';
''';
      starter: '$299/month',''';
      professional: '$799/month',''';
      enterprise: 'Custom'''},''';
    benefits: ['''';
      'Reduce research time by 80%',Improve accuracy with AI validation',Scale research operations',Generate actionable insights',Maintain research quality standards''';
    ],''';
    useCases: ['''';
      'Market research and analysis',Academic research projects',Competitive intelligence',Product development research',Scientific research collaboration''';
    ],''';
    link: '/services/ai-autonomous-research-assistant',''';
    status: 'available'},;
  {}
';
'';
''';
    id: 'ai-cybersecurity-platform',''';
    name: 'AI Cybersecurity Platform',''';
    description: 'Next-generation cybersecurity solution powered by artificial intelligence for real-time threat detection, automated response, and predictive security.',''';
    category: 'AI & Security','';
    icon: Shield,''';
    features: ['''';
      'AI-powered threat detection',Automated incident response',Predictive security analytics',Zero-day vulnerability detection',Behavioral analysis',Security orchestration';
    ],;
    pricing: {}
';
'';
''';
      starter: '$499/month',''';
      professional: '$1,299/month',''';
      enterprise: 'Custom'''},''';
    benefits: ['''';
      'Detect threats 10x faster',Reduce false positives by 90%',Automate security responses',Predict and prevent attacks',Compliance automation''';
    ],''';
    useCases: ['''';
      'Enterprise security operations',Financial institutions',Healthcare organizations',Government agencies',Critical infrastructure''';
    ],''';
    link: '/services/ai-cybersecurity-platform',''';
    status: 'available'},;
  {}
';
'';
''';
    id: 'ai-healthcare-platform',''';
    name: 'AI Healthcare Platform',''';
    description: 'Comprehensive AI platform for healthcare providers offering diagnostic assistance, patient monitoring, and predictive healthcare analytics.',''';
    category: 'AI & Healthcare','';
    icon: Heart,''';
    features: ['''';
      'AI diagnostic assistance',Patient monitoring systems',Predictive health analytics',Medical image analysis',Drug interaction checking',Healthcare workflow automation';
    ],;
    pricing: {}
';
'';
''';
      starter: '$399/month',''';
      professional: '$999/month',''';
      enterprise: 'Custom'''},''';
    benefits: ['''';
      'Improve diagnostic accuracy',Reduce healthcare costs',Enhance patient outcomes',Streamline workflows',Enable preventive care''';
    ],''';
    useCases: ['''';
      'Hospitals and clinics',Medical imaging centers',Pharmaceutical companies',Health insurance providers',Research institutions''';
    ],''';
    link: '/services/ai-healthcare-platform',''';
    status: 'available'},;
  {}
';
'';
''';
    id: 'ai-supply-chain-optimization',''';
    name: 'AI Supply Chain Optimization',''';
    description: 'Intelligent supply chain management platform that optimizes operations, predicts disruptions, and automates decision-making processes.',''';
    category: 'AI & Operations','';
    icon: Workflow,''';
    features: ['''';
      'Demand forecasting',Inventory optimization',Route optimization',Risk assessment',Supplier management',Real-time monitoring';
    ],;
    pricing: {}
';
'';
''';
      starter: '$599/month',''';
      professional: '$1,499/month',''';
      enterprise: 'Custom'''},''';
    benefits: ['''';
      'Reduce costs by 15-25%',Improve delivery times',Minimize inventory waste',Enhance supplier relationships',Increase operational efficiency''';
    ],''';
    useCases: ['''';
      'Manufacturing companies',Retail chains',Logistics providers',E-commerce platforms',Distribution networks''';
    ],''';
    link: '/services/ai-supply-chain-optimization',''';
    status: 'available'},;
  {}
';
'';
''';
    id: 'ai-quantum-hybrid-platform',''';
    name: 'AI Quantum Hybrid Platform',''';
    description: 'Revolutionary platform combining AI and quantum computing for solving complex optimization problems and advanced simulations.',''';
    category: 'AI & Quantum','';
    icon: Atom,''';
    features: ['''';
      'Quantum-AI hybrid algorithms',Complex optimization solving',Advanced simulations',Quantum machine learning',Hybrid computing workflows',Performance benchmarking';
    ],;
    pricing: {}
';
'';
''';
      starter: '$1,999/month',''';
      professional: '$4,999/month',''';
      enterprise: 'Custom'''},''';
    benefits: ['''';
      'Solve previously intractable problems',Exponential performance improvements',Advanced research capabilities',Competitive advantage',Future-proof technology''';
    ],''';
    useCases: ['''';
      'Research institutions',Financial services',Pharmaceutical research',Climate modeling',Cryptography and security''';
    ],''';
    link: '/services/ai-quantum-hybrid-platform',''';
    status: 'beta'},;
  // IT Services;
  {}
';
'';
''';
    id: 'cloud-devops-automation',''';
    name: 'Cloud DevOps Automation Platform',''';
    description: 'Comprehensive DevOps automation platform for cloud-native applications with CI/CD pipelines, infrastructure as code, and monitoring.',''';
    category: 'IT & Cloud','';
    icon: Cloud,''';
    features: ['''';
      'Automated CI/CD pipelines',Infrastructure as Code',Multi-cloud management',Monitoring and alerting',Security automation',Cost optimization';
    ],;
    pricing: {}
';
'';
''';
      starter: '$299/month',''';
      professional: '$799/month',''';
      enterprise: 'Custom'''},''';
    benefits: ['''';
      'Deploy 10x faster',Reduce operational costs',Improve reliability',Enhance security',Scale efficiently''';
    ],''';
    useCases: ['''';
      'Software development teams',DevOps engineers',Cloud architects',System administrators',Startup companies''';
    ],''';
    link: '/services/cloud-devops-automation',''';
    status: 'available'},;
  {}
';
'';
''';
    id: 'it-infrastructure-management',''';
    name: 'IT Infrastructure Management',''';
    description: 'Comprehensive IT infrastructure management solution for enterprise environments with monitoring, automation, and optimization.',''';
    category: 'IT & Infrastructure','';
    icon: Server,''';
    features: ['''';
      'Infrastructure monitoring',Automated provisioning',Performance optimization',Security management',Backup and recovery',Capacity planning';
    ],;
    pricing: {}
';
'';
''';
      starter: '$199/month',''';
      professional: '$599/month',''';
      enterprise: 'Custom'''},''';
    benefits: ['''';
      'Reduce downtime by 99.9%',Lower operational costs',Improve performance',Enhance security posture',Streamline management''';
    ],''';
    useCases: ['''';
      'Enterprise IT departments',Data centers',Managed service providers',Educational institutions',Healthcare organizations''';
    ],''';
    link: '/services/it-infrastructure',''';
    status: 'available'},;
  // Micro SAAS Services;
  {}
';
'';
''';
    id: 'micro-crm-platform',''';
    name: 'Micro CRM Platform',''';
    description: 'Lightweight, powerful CRM solution designed for small to medium businesses with essential features and easy customization.',''';
    category: 'Micro SAAS','';
    icon: Users,''';
    features: ['''';
      'Contact management',Lead tracking',Sales pipeline',Email integration',Reporting and analytics',Mobile app access';
    ],;
    pricing: {}
';
'';
''';
      starter: '$29/month',''';
      professional: '$79/month',''';
      enterprise: '$199/month'''},''';
    benefits: ['''';
      'Affordable pricing',Easy to implement',Scalable solution',Improve customer relationships',Increase sales efficiency''';
    ],''';
    useCases: ['''';
      'Small businesses',Sales teams',Real estate agents',Consultants',Startups''';
    ],''';
    link: '/services/micro-crm',''';
    status: 'available'},;
  {}
';
'';
''';
    id: 'ai-business-intelligence',''';
    name: 'AI Business Intelligence',''';
    description: 'Intelligent business analytics platform that transforms data into actionable insights using advanced AI and machine learning.',''';
    category: 'AI & Analytics','';
    icon: BarChart3,''';
    features: ['''';
      'AI-powered analytics',Predictive modeling',Interactive dashboards',Data visualization',Automated reporting',Real-time insights';
    ],;
    pricing: {}
';
'';
''';
      starter: '$399/month',''';
      professional: '$999/month',''';
      enterprise: 'Custom'''},''';
    benefits: ['''';
      'Make data-driven decisions',Identify trends and patterns',Predict future outcomes',Improve operational efficiency',Gain competitive advantage''';
    ],''';
    useCases: ['''';
      'Business analysts',Executives and managers',Marketing teams',Operations teams',Financial analysts''';
    ],''';
    link: '/services/ai-business-intelligence',''';
    status: 'available'}
];

const categories = [;
  { id: 'all', name: 'All Services', icon: Globe, count: services.length },;
  { id: 'ai', name: 'AI Services', icon: Brain, count: services.filter(s => s.category.includes('AI')).length },;
  { id: 'it', name: 'IT Services', icon: Cpu, count: services.filter(s => s.category.includes('IT')).length },;
  { id: 'micro-saas', name: 'Micro SAAS', icon: Zap, count: services.filter(s => s.category.includes('Micro SAAS')).length },;
  { id: 'security', name: 'Security', icon: Shield, count: services.filter(s => s.category.includes('Security')).length },;
  { id: 'healthcare', name: 'Healthcare', icon: Heart, count: services.filter(s => s.category.includes('Healthcare')).length }
];
;
export default function ComprehensiveServicesShowcase2025(...args: unknown[]): unknown {};
});
;
  const handleServiceClick = (service: Service) => {};
};
;
  const closeModal = () => {};
};
    setSelectedService(null);,
};
;
  return (;
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <div>Broken JSX</div>
      />;

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-zion-blue/20 via-zion-purple/20 to-zion-cyan/20"></div>        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">;
          <div>Broken JSX</div>
            transition={{ duration: 0.6 }}">"";
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">";
              Comprehensive Services"";
              <span className="block bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent">;
                Showcase 2025;
              </span>";
            </h1>"";
            <p className="text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto">;
              Discover our cutting-edge portfolio of AI, IT, and Micro SAAS services designed to;
              transform your business and drive innovation in the digital age.";
            </p>"";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <div>Broken JSX</div>
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 shadow-lg hover:shadow-xl">;
                Get Started Today;
              </Link>";
              <div>Broken JSX</div>
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
                View Pricing;
              </Link>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
";
      {/* Search and Filter Section */}"";
      <section className="py-12">"";
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"";
          <div className="bg-zion-blue-dark/50 backdrop-blur-sm rounded-2xl p-6 border border-zion-purple/30">";
            {/* Search Bar */}"";
            <div className="mb-8">"";
              <div className="relative max-w-2xl mx-auto">"";
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-zion-slate-light"  />";
                <div>Broken JSX</div>
                  onChange={(e) => setSearchQuery(e.target.value)}"";
                  className="w-full pl-12 pr-4 py-4 bg-zion-blue-darker border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent text-lg";
                />;
              </div>;
            </div>;
";
            {/* Category Filters */}"";
            <div className="flex flex-wrap justify-center gap-4">;
              {};
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${}
';
'';
'''`;
                    selectedCategory === category.id'''`'`;
                      ? 'bg-gradient-to-r from-zion-cyan to-zion-purple text-white shadow-lg'''`'`'`;
                      : 'bg-zion-blue-darker text-zion-slate-light hover:bg-zion-purple/20 hover:text-white'````}`}
                >;
                  Grid;
                </button>';
                <div>Broken JSX</div>
                  onClick={() => setViewMode('list')}``;
                  className={`flex-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${}
';
'';
'''`;
                    viewMode === 'list' '''`'`;
                      ? 'bg-zion-cyan text-white' ''`'`'`;
                      : 'text-zion-slate-light hover:text-white'````}`}
                >;
                  List;
                </button>;
              </div>;
            </div>;
          </div>;
";
          {/* Advanced Filters */}"";
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">;
            {/* Price Range */}";
            <div>"";
              <label className="block text-sm font-medium text-zion-slate-light mb-2">;
                Price Range: ${priceRange[0]} - ${priceRange[1]}";
              </label>"";
              <div className="flex gap-2">";
                <div>Broken JSX</div>
                  onChange={(e) => setPriceRange([parseInt(e.target.value), priceRange[1]])}"";
                  className="flex-1";
                />";
                <div>Broken JSX</div>
                  onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}"";
                  className="flex-1";
                />;
              </div>;
            </div>;

            {/* Innovation Level */}";
            <div>"";
              <label className="block text-sm font-medium text-zion-slate-light mb-2">;
                Innovation Level;
              </label>;
              <div>Broken JSX</div>
                onChange={(e) => setInnovationLevel(e.target.value)}"";
                className="w-full px-3 py-2 bg-zion-slate-dark border border-zion-slate-light/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"">"";
                <option value="all">All Levels</option>"";
                <option value="Breakthrough">Breakthrough</option>"";
                <option value="Revolutionary">Revolutionary</option>"";
                <option value="Advanced">Advanced</option>;
              </select>;
            </div>;
";
            {/* Results Count */}"";
            <div className="flex items-center justify-end">"";
              <span className="text-zion-slate-light">;
                Showing {filteredServices.length} of {allServices.length} services;
              </span>;
            </div>;
          </div>;
        </div>;
      </section>;
";
      {/* Categories */}"";
      <section className="py-8">;"";
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"";
          <div className="flex flex-wrap gap-3">;
            {};
                onClick={() => setActiveCategory(category.id)}``;
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${}
';
                  activeCategory === category.id'';
                    ? 'bg-zion-cyan text-white shadow-lg shadow-zion-cyan/25'''`;
                    : 'bg-zion-slate-dark text-zion-slate-light hover:bg-zion-slate hover:text-white border border-zion-slate-light/20'``}`}">"";
                <span className="mr-2">{category.icon}</span>;
                {category.name} ({category.count}) </button>) ) }
          </div>;
        </div>;
      </section>;
";
      {/* Services Grid */}"";
      <section className="py-16">;"";
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">"";
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">;
            {};
                onClick={() => handleServiceClick(service)}
              >";
                {/* Service Header */}"";
                <div className="flex items-start justify-between mb-4">"";
                  <div className="w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">"";
                    <service.icon className="w-6 h-6 text-white" />`;
                  </div>``;
                  <div>Broken JSX</div>
}`}>''';
                    {};
                     service.status === 'beta' ? 'Beta' : 'Coming Soon'}
                  </span>;
                </div>;
";
                {/* Service Content */}"";
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors">;
                  {service.name}";
                </h3>"";
                <p className="text-zion-slate-light mb-4 line-clamp-3">;
                  {service.description}
                </p>;
";
                {/* Category */}"";
                <div className="mb-4">"";
                  <span className="text-zion-cyan text-sm font-medium">;
                    {service.category}
                  </span>;
                </div>;
";
                {/* Features Preview */}"";
                <div className="mb-6">"";
                  <div className="flex flex-wrap gap-2">;
                    {};
                        {feature}
                      </span>;
                    ))}";
                    {};
                        +{service.features.length - 3} more;
                      </span>) }
                  </div>;
                </div>;
";
                {/* Pricing Preview */}"";
                <div className="mb-4">"";
                  <span className="text-white font-semibold">;
                    Starting at {service.pricing.starter}
                  </span>;
                </div>;
";
                {/* CTA */}"";
                <div className="flex items-center justify-between">"";
                  <span className="text-zion-cyan text-sm font-medium group-hover:text-zion-cyan-light transition-colors">;
                    Learn More";
                  </span>"";
                  <ArrowRight className="w-5 h-5 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300"  />                </div>;
              </motion.div>) ) }
          </div>;
";
          {};
            </div>) }
        </div>;
      </section>;
";
      {/* CTA Section */}"";
      <section className="py-20">;"";
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">"";
          <div className="bg-gradient-to-r from-zion-cyan/10 to-zion-purple/10 rounded-3xl p-12 border border-zion-cyan/20">"";
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">;
              Ready to Transform Your Business?";
            </h2>"";
            <p className="text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto">;
              Our team of experts is ready to help you implement the right solutions;
              for your unique business needs. Get started today and see the difference;
              our innovative services can make.";
            </p>"";
            <div className="flex flex-col sm:flex-row gap-4 justify-center">";
              <div>Broken JSX</div>
                className="bg-gradient-to-r from-zion-cyan to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg hover:from-zion-cyan-light hover:to-zion-purple-light transition-all duration-300 shadow-lg hover:shadow-xl">;
                Schedule a Consultation;
              </Link>";
              <div>Broken JSX</div>
                className="border-2 border-zion-cyan text-zion-cyan px-8 py-4 rounded-lg font-semibold text-lg hover:bg-zion-cyan hover:text-white transition-all duration-300">;
                Call + 1 302 464 0950;
              </a>;
            </div>;
          </div>;
        </div>;
      </section>;

      {/* Service Detail Modal */}
      <AnimatePresence>;
        {};
              onClick={(e) => e.stopPropagation()}
            >";
              {/* Modal Header */}"";
              <div className="flex items-start justify-between mb-6">"";
                <div className="flex items-center space-x-4">"";
                  <div className="w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-2xl flex items-center justify-center">"";
                    <selectedService.icon className="w-8 h-8 text-white" />;
                  </div>";
                  <div>"";
                    <h2 className="text-3xl font-bold text-white">{selectedService.name}</h2>"";
                    <p className="text-zion-cyan font-medium">{selectedService.category}</p>;
                  </div>;
                </div>;
                <div>Broken JSX</div>
                  className="text-zion-slate-light hover:text-white transition-colors"">"";
                  <X className="w-6 h-6"  />                </button>;
              </div>;
";
              {/* Service Description */}"";
              <p className="text-zion-slate-light text-lg mb-8 leading-relaxed">;
                {selectedService.description}
              </p>";
"";
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">;
                {/* Features */}";
                <div>"";
                  <h3 className="text-xl font-bold text-white mb-4">Key Features</h3>"";
                  <ul className="space-y-3">";
                    {};
                      <li key={index} className="flex items-center space-x-3">"";
                        <CheckCircle className="w-5 h-5 text-zion-cyan flex-shrink-0"  />"                        <span className="text-zion-slate-light">{feature}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;

                {/* Benefits */}";
                <div>"";
                  <h3 className="text-xl font-bold text-white mb-4">Benefits</h3>"";
                  <ul className="space-y-3">";
                    {};
                      <li key={index} className="flex items-center space-x-3">"";
                        <Star className="w-5 h-5 text-zion-cyan flex-shrink-0"  />"                        <span className="text-zion-slate-light">{benefit}</span>;
                      </li>;
                    ))}
                  </ul>;
                </div>;
              </div>;
";
              {/* Use Cases */}"";
              <div className="mt-8">"";
                <h3 className="text-xl font-bold text-white mb-4">Use Cases</h3>"";
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">";
                  {};
                    <div key={index} className="bg-zion-blue-darker rounded-lg p-4 border border-zion-purple/20">"";
                      <span className="text-zion-slate-light">{useCase}</span>;
                    </div>;
                  ))}
                </div>;
              </div>;
";
              {/* Pricing */}"";
              <div className="mt-8">"";
                <h3 className="text-xl font-bold text-white mb-4">Pricing Plans</h3>"";
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">"";
                  <div className="bg-zion-blue-darker rounded-lg p-4 border border-zion-purple/20 text-center">"";
                    <h4 className="text-zion-cyan font-semibold mb-2">Starter</h4>"";
                    <p className="text-white text-2xl font-bold">{selectedService.pricing.starter}</p>";
                  </div>"";
                  <div className="bg-zion-blue-darker rounded-lg p-4 border border-zion-cyan/20 text-center">"";
                    <h4 className="text-zion-cyan font-semibold mb-2">Professional</h4>"";
                    <p className="text-white text-2xl font-bold">{selectedService.pricing.professional}</p>";
                  </div>"";
                  <div className="bg-zion-blue-darker rounded-lg p-4 border border-zion-purple/20 text-center">"";
                    <h4 className="text-zion-cyan font-semibold mb-2">Enterprise</h4>"";
                    <p className="text-white text-2xl font-bold">{selectedService.pricing.enterprise}</p>;
                  </div>;
                </div>;
              </div>;
";
              {/* CTA */}"";
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">;
                <div>Broken JSX</div>
                >;
                  Learn More;
                </Link>";
                <div>Broken JSX</div>
                >;
                  Get Started;
                </Link>;
              </div>;
            </motion.div>;
          </motion.div>;
        )}
      </AnimatePresence>;
    </div>;
  )}


export { ComprehensiveServicesShowcase2025 }
export { ComprehensiveServicesShowcase2025 }
export { ComprehensiveServicesShowcase2025 }
export { ComprehensiveServicesShowcase2025 }
export { ComprehensiveServicesShowcase2025 }
))