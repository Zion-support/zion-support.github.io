import { motion } from 'framer-motion';
import { comprehensiveMicroSaasServices2025 } from '../../data/2025-comprehensive-micro-saas-services';
import { innovativeITAIServices2025 } from '../../data/2025-innovative-it-ai-services';
import { expandedInnovativeServices2025 } from '../../data/2025-expanded-innovative-services';
import { emergingTechInnovationServices2025 } from '../../data/2025-emerging-tech-innovations';
import { enterpriseITInnovationServices2025 } from '../../data/2025-enterprise-it-innovations';
const ComprehensiveServicesShowcase = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const [selectedService, setSelectedService] = useState(null);
    const allServices = [
        ...comprehensiveMicroSaasServices2025,
        ...innovativeITAIServices2025,
        ...expandedInnovativeServices2025,
        ...emergingTechInnovationServices2025,
        ...enterpriseITInnovationServices2025
    ];
    const categories = [
        { id: 'all', name: 'All Services', count: allServices.length },
        { id: 'ai-content-marketing', name: 'AI Content & Marketing', count: allServices.filter(s => s.category.includes('Content') || s.category.includes('Marketing')).length },
        { id: 'ai-customer-service', name: 'AI Customer Service', count: allServices.filter(s => s.category.includes('Customer Service')).length },
        { id: 'data-analytics-bi', name: 'Data Analytics & BI', count: allServices.filter(s => s.category.includes('Analytics') || s.category.includes('BI')).length },
        { id: 'ai-sales-crm', name: 'AI Sales & CRM', count: allServices.filter(s => s.category.includes('Sales') || s.category.includes('CRM')).length },
        { id: 'ai-social-media', name: 'AI Social Media', count: allServices.filter(s => s.category.includes('Social Media')).length },
        { id: 'ai-supply-chain', name: 'AI Supply Chain', count: allServices.filter(s => s.category.includes('Supply Chain')).length },
        { id: 'ai-hr-recruitment', name: 'AI HR & Recruitment', count: allServices.filter(s => s.category.includes('HR') || s.category.includes('Recruitment')).length },
        { id: 'ai-finance-accounting', name: 'AI Finance & Accounting', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Accounting')).length },
        { id: 'quantum-computing-ai', name: 'Quantum Computing & AI', count: allServices.filter(s => s.category.includes('Quantum')).length },
        { id: 'autonomous-ai-ml', name: 'Autonomous AI & ML', count: allServices.filter(s => s.category.includes('Autonomous')).length },
        { id: 'edge-computing-ai', name: 'Edge Computing & AI', count: allServices.filter(s => s.category.includes('Edge')).length },
        { id: 'ai-cybersecurity', name: 'AI Cybersecurity', count: allServices.filter(s => s.category.includes('Cybersecurity')).length },
        { id: 'blockchain-ai', name: 'Blockchain & AI', count: allServices.filter(s => s.category.includes('Blockchain')).length },
        { id: 'autonomous-devops', name: 'Autonomous DevOps', count: allServices.filter(s => s.category.includes('DevOps')).length },
        { id: 'ai-data-governance', name: 'AI Data Governance', count: allServices.filter(s => s.category.includes('Data Governance')).length },
        { id: 'ai-api-management', name: 'AI API Management', count: allServices.filter(s => s.category.includes('API Management')).length },
        { id: 'autonomous-cloud-migration', name: 'Autonomous Cloud Migration', count: allServices.filter(s => s.category.includes('Cloud Migration')).length },
        { id: 'ai-legal-compliance', name: 'AI Legal & Compliance', count: allServices.filter(s => s.category.includes('Legal') || s.category.includes('Compliance')).length },
        { id: 'quantum-security-communication', name: 'Quantum Security & Communication', count: allServices.filter(s => s.category.includes('Quantum') && (s.category.includes('Security') || s.category.includes('Communication'))).length },
        { id: 'ai-healthcare-diagnostics', name: 'AI Healthcare & Diagnostics', count: allServices.filter(s => s.category.includes('Healthcare') || s.category.includes('Diagnostics')).length },
        { id: 'autonomous-supply-chain-logistics', name: 'Autonomous Supply Chain & Logistics', count: allServices.filter(s => s.category.includes('Supply Chain') || s.category.includes('Logistics')).length },
        { id: 'blockchain-digital-identity', name: 'Blockchain & Digital Identity', count: allServices.filter(s => s.category.includes('Blockchain') || s.category.includes('Digital Identity')).length },
        { id: 'ai-finance-trading', name: 'AI Finance & Trading', count: allServices.filter(s => s.category.includes('Finance') || s.category.includes('Trading')).length },
        { id: 'space-technology-innovation', name: 'Space Technology & Innovation', count: allServices.filter(s => s.category.includes('Space') || s.category.includes('Innovation')).length },
        { id: 'metaverse-virtual-reality', name: 'Metaverse & Virtual Reality', count: allServices.filter(s => s.category.includes('Metaverse') || s.category.includes('Virtual Reality')).length },
        { id: 'sustainable-energy-green-tech', name: 'Sustainable Energy & Green Tech', count: allServices.filter(s => s.category.includes('Energy') || s.category.includes('Green Tech')).length },
        { id: 'advanced-robotics-automation', name: 'Advanced Robotics & Automation', count: allServices.filter(s => s.category.includes('Robotics') || s.category.includes('Automation')).length },
        { id: 'quantum-internet-networking', name: 'Quantum Internet & Networking', count: allServices.filter(s => s.category.includes('Quantum') && (s.category.includes('Internet') || s.category.includes('Networking'))).length },
        { id: 'climate-tech-sustainability', name: 'Climate Tech & Sustainability', count: allServices.filter(s => s.category.includes('Climate') || s.category.includes('Sustainability')).length },
        { id: 'autonomous-vehicles-transportation', name: 'Autonomous Vehicles & Transportation', count: allServices.filter(s => s.category.includes('Vehicle') || s.category.includes('Transportation')).length },
        { id: 'brain-computer-interface-neuroscience', name: 'Brain-Computer Interface & Neuroscience', count: allServices.filter(s => s.category.includes('Brain-Computer') || s.category.includes('Neuroscience')).length },
        { id: 'synthetic-biology-biotechnology', name: 'Synthetic Biology & Biotechnology', count: allServices.filter(s => s.category.includes('Biology') || s.category.includes('Biotechnology')).length },
        { id: 'enterprise-data-analytics', name: 'Enterprise Data & Analytics', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Data') || s.category.includes('Analytics'))).length },
        { id: 'multi-cloud-infrastructure', name: 'Multi-Cloud & Infrastructure', count: allServices.filter(s => s.category.includes('Multi-Cloud') || s.category.includes('Infrastructure')).length },
        { id: 'enterprise-api-integration', name: 'Enterprise API & Integration', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('API') || s.category.includes('Integration'))).length },
        { id: 'enterprise-itsm', name: 'Enterprise IT Service Management', count: allServices.filter(s => s.category.includes('Enterprise') && s.category.includes('IT Service Management')).length },
        { id: 'enterprise-security-soc', name: 'Enterprise Security & SOC', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Security') || s.category.includes('SOC'))).length },
        { id: 'enterprise-governance', name: 'Enterprise Data Governance', count: allServices.filter(s => s.category.includes('Enterprise') && s.category.includes('Data Governance')).length },
        { id: 'enterprise-workflow-automation', name: 'Enterprise Workflow & Automation', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Workflow') || s.category.includes('Automation'))).length },
        { id: 'enterprise-digital-twin-iot', name: 'Enterprise Digital Twin & IoT', count: allServices.filter(s => s.category.includes('Enterprise') && (s.category.includes('Digital Twin') || s.category.includes('IoT'))).length }
    ];
    const filteredServices = selectedCategory === 'all'
        ? allServices
        : allServices.filter(service => {
            const category = categories.find(c => c.id === selectedCategory);
            if (!category)
                return true;
            // Handle special category mappings
            const categoryMappings = {
                'ai-legal-compliance': ['Legal', 'Compliance'],
                'quantum-security-communication': ['Quantum', 'Security', 'Communication'],
                'ai-healthcare-diagnostics': ['Healthcare', 'Diagnostics'],
                'autonomous-supply-chain-logistics': ['Supply Chain', 'Logistics'],
                'blockchain-digital-identity': ['Blockchain', 'Digital Identity'],
                'ai-finance-trading': ['Finance', 'Trading'],
                'space-technology-innovation': ['Space', 'Innovation'],
                'metaverse-virtual-reality': ['Metaverse', 'Virtual Reality'],
                'sustainable-energy-green-tech': ['Energy', 'Green Tech'],
                'advanced-robotics-automation': ['Robotics', 'Automation'],
                'quantum-internet-networking': ['Quantum', 'Internet', 'Networking'],
                'climate-tech-sustainability': ['Climate', 'Sustainability'],
                'autonomous-vehicles-transportation': ['Vehicle', 'Transportation'],
                'brain-computer-interface-neuroscience': ['Brain-Computer', 'Neuroscience'],
                'synthetic-biology-biotechnology': ['Biology', 'Biotechnology'],
                'enterprise-data-analytics': ['Enterprise', 'Data', 'Analytics'],
                'multi-cloud-infrastructure': ['Multi-Cloud', 'Infrastructure'],
                'enterprise-api-integration': ['Enterprise', 'API', 'Integration'],
                'enterprise-itsm': ['Enterprise', 'IT Service Management'],
                'enterprise-security-soc': ['Enterprise', 'Security', 'SOC'],
                'enterprise-governance': ['Enterprise', 'Data Governance'],
                'enterprise-workflow-automation': ['Enterprise', 'Workflow', 'Automation'],
                'enterprise-digital-twin-iot': ['Enterprise', 'Digital Twin', 'IoT']
            };
            const targetKeywords = categoryMappings[selectedCategory] || [category.name];
            return targetKeywords.some(keyword => service.category.toLowerCase().includes(keyword.toLowerCase().replace(' & ', ' ').replace('AI ', '').replace('Autonomous ', '')));
        });
    const fadeInUp = {
        initial: { opacity: 0, y: 60 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };
    const filteredServices = selectedCategory === 'all'
        ? COMPREHENSIVE_SERVICES
        : COMPREHENSIVE_SERVICES.filter(service => service.category === selectedCategory);
    return (<div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white pt-20">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <motion.div className="max-w-7xl mx-auto text-center" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 className="text-5xl md:text-7xl font-bold mb-8">
            Comprehensive
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 block">
              Innovative Services
            </span>
            <br />
            <span className="text-white">Comprehensive Tech Solutions</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
            Discover our cutting-edge collection of AI-powered micro SAAS services, innovative IT solutions, 
            emerging technology innovations, enterprise services, quantum computing solutions, and revolutionary 
            technology platforms designed to transform your business operations across all industries.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              Get Started Today
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="tel:+13024640950" className="inline-flex items-center px-8 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
              Call Now: +1 302 464 0950
            </a>
          </div>
        </motion.div>
      </section>
      {/* Category Filter */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (<button key={category.id} onClick={() => setSelectedCategory(category.id)} className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${selectedCategory === category.id
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg'
                : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white'}`}>
                {category.icon} {category.name}
              </TabsTrigger>))}
          </TabsList>
import {Brain,
            Shield,
            Cloud,
            Database,
            Users,
            Globe,
            Zap,
            Target,
            TrendingUp,
            Atom,
            Link,
            Leaf,
            Rocket,
            Package,
            ArrowRight,
            CheckCircle,
            Star,
            Award} from 'lucide-react';
export const ComprehensiveServicesShowcase: React.FC = () => {}
  const [activeCategory, setActiveCategory] = useState('all');
  const serviceCategories = [
    {id}: 'all', name: 'All Services', icon: Star },
    {id}: 'ai', name: 'AI & ML', icon: Brain },
    {id}: 'quantum', name: 'Quantum Computing', icon: Atom },
    {id}: 'security', name: 'Cybersecurity', icon: Shield },
    {id}: 'cloud', name: 'Cloud & DevOps', icon: Cloud },
    {id}: 'blockchain', name: 'Blockchain & Web3', icon: LinkIcon },
    {id}: 'enterprise', name: 'Enterprise IT', icon: Users },
    {id}: 'green', name: 'Green IT', icon: Leaf },
    {id}: 'space', name: 'Space Tech', icon: Rocket },
    {id}: 'saas', name: 'MicroSAAS', icon: Package }
  ];
  const services = [
    {id}: 'ai-solutions',
      title: 'AI Solutions',
      category: 'ai',
      description: 'Comprehensive artificial intelligence and machine learning solutions for business transformation.',
      icon: Brain,
      features: ['Predictive Analytics', 'Natural Language Processing', 'Computer Vision', 'AI Automation'],
      benefits: ['40% efficiency gains', 'Intelligent decision making', 'Scalable AI infrastructure'],
      color: 'from-purple-500 to-pink-500',
      href: '/services/ai-solutions'
    },
    {id}: 'quantum-computing',
      title: 'Quantum Computing',
      category: 'quantum',
      description: 'Cutting-edge quantum computing solutions for complex problem solving and optimization.',
      icon: Atom,
      features: ['Quantum Algorithms', 'Optimization Problems', 'Cryptography', 'Simulation'],
      benefits: ['Exponential speedup', 'Complex problem solving', 'Future-proof technology'],
      color: 'from-indigo-500 to-purple-500',
      href: '/services/quantum-computing'
    },
    {id}: 'cybersecurity',
      title: 'Cybersecurity',
      category: 'security',
      description: 'Advanced security solutions with AI-powered threat detection and prevention.',
      icon: Shield,
      features: ['Threat Detection', 'Incident Response', 'Compliance Management', 'Security Audits'],
      benefits: ['Real-time protection', 'Proactive defense', 'Compliance assurance'],
      color: 'from-red-500 to-orange-500',
      href: '/services/cybersecurity'
    },
    {id}: 'cloud-devops',
      title: 'Cloud & DevOps',
      category: 'cloud',
      description: 'Scalable cloud infrastructure and DevOps automation for modern applications.',
      icon: Cloud,
      features: ['Cloud Migration', 'DevOps Automation', 'Container Orchestration', 'Infrastructure as Code'],
      benefits: ['Scalable infrastructure', 'Faster deployment', 'Cost optimization'],
      color: 'from-blue-500 to-cyan-500',
      href: '/services/cloud-devops'
    },
    {id}: 'blockchain-web3',
      title: 'Blockchain & Web3',
      category: 'blockchain',
      description: 'Decentralized technology solutions for the next generation of digital applications.',
      icon: LinkIcon,
      features: ['Smart Contracts', 'DeFi Solutions', 'NFT Platforms', 'Supply Chain'],
      benefits: ['Transparency', 'Security', 'Innovation'],
      color: 'from-green-500 to-emerald-500',
      href: '/services/blockchain-web3'
    },
    {id}: 'enterprise-it',
      title: 'Enterprise IT',
      category: 'enterprise',
      description: 'Comprehensive IT solutions for large organizations and enterprises.',
      icon: Users,
      features: ['IT Infrastructure', 'Data Management', 'System Integration', 'Digital Transformation'],
      benefits: ['Enterprise-grade solutions', 'Scalable architecture', '24/7 support'],
      color: 'from-slate-500 to-gray-500',
      href: '/services/enterprise-it'
    },
    {id}: 'green-it',
      title: 'Green IT',
      category: 'green',
      description: 'Sustainable technology solutions for environmentally conscious businesses.',
      icon: Leaf,
      features: ['Energy Efficiency', 'Sustainable Infrastructure', 'Carbon Reduction', 'Green Computing'],
      benefits: ['Environmental impact', 'Cost savings', 'Sustainability compliance'],
      color: 'from-green-500 to-teal-500',
      href: '/services/green-it'
    },
    {id}: 'space-tech',
      title: 'Space Technology',
      category: 'space',
      description: 'Advanced space technology solutions for satellite systems and space exploration.',
      icon: Rocket,
      features: ['Satellite Systems', 'Space Data Analytics', 'Space Cybersecurity', 'Orbital Solutions'],
      benefits: ['Innovation leadership', 'Advanced technology', 'Space expertise'],
      color: 'from-violet-500 to-purple-500',
      href: '/services/space-tech'
    },
    {id}: 'microsaas',
      title: 'MicroSAAS Development',
      category: 'saas',
      description: 'Custom software-as-a-service solutions for niche markets and specific business needs.',
      icon: Package,
      features: ['Custom Development', 'Scalable Architecture', 'API Integration', 'User Management'],
      benefits: ['Custom solutions', 'Scalable business model', 'Recurring revenue'],
      color: 'from-orange-500 to-red-500',
      href: '/services/microsaas'
    }
  ];
  const solutions = [
    {id}: 'ai-autonomous-business',
      title: 'AI Autonomous Business',
      description: 'AI-powered autonomous systems for business operations and decision making.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-autonomous-business'
    },
    {id}: 'ai-autonomous-research',
      title: 'AI Autonomous Research',
      description: 'AI systems for accelerating scientific research and discovery processes.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-autonomous-research'
    },
    {id}: 'ai-autonomous-ecosystem',
      title: 'AI Autonomous Ecosystem',
      description: 'Integrated AI ecosystem for unified business intelligence and automation.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-autonomous-ecosystem'
    },
    {id}: 'quantum-neural-networks',
      title: 'Quantum Neural Networks',
      description: 'Quantum-enhanced neural networks for advanced AI applications.',
      icon: Atom,
      category: 'quantum',
      href: '/solutions/quantum-neural-networks'
    },
    {id}: 'quantum-edge-computing',
      title: 'Quantum Edge Computing',
      description: 'Quantum computing power at the edge for real-time applications.',
      icon: Atom,
      category: 'quantum',
      href: '/solutions/quantum-edge-computing'
    },
    {id}: 'ai-powered-security',
      title: 'AI Powered Security',
      description: 'Intelligent security systems with AI-driven threat detection.',
      icon: Shield,
      category: 'security',
      href: '/solutions/ai-powered-security'
    },
    {id}: 'ai-content-generation',
      title: 'AI Content Generation',
      description: 'AI-powered content creation and management solutions.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-content-generation'
    },
    {id}: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Advanced analytics and insights powered by artificial intelligence.',
      icon: Brain,
      category: 'ai',
      href: '/solutions/ai-business-intelligence'
    }
  ];
  const filteredServices = activeCategory === 'all' 
    ? services 
    : services.filter(service => service.category === activeCategory);
  const filteredSolutions = activeCategory === 'all' 
    ? solutions 
    : solutions.filter(solution => solution.category === activeCategory);
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 text-blue-400 rounded-full text-sm font-medium mb-6">
            <Award className="w-4 h-4 mr-2"/>
            Complete Service Portfolio
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Comprehensive Services & Solutions
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete range of cutting-edge technology services and solutions 
            designed to transform your business and drive innovation.
          </p>
        </div>
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {serviceCategories.map((category) => (<button key={category.id} onClick={() => setActiveCategory(category.id)} className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-300 ${activeCategory === category.id
                ? 'border-blue-500 bg-blue-500/20 text-blue-400'
                : 'border-white/20 text-gray-400 hover:border-blue-500/50 hover:text-blue-400'}`}>
              <category.icon className="w-4 h-4 mr-2"/>
              {category.name}
            </button>))}
        </div>
        {/* Services Section */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold text-white mb-8 text-center">
            Core Services
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (<div key={service.id} className="bg-slate-800/50 border border-white/10 rounded-xl p-6 hover:border-blue-500/50 transition-all duration-300 group">
                <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="w-8 h-8 text-white"/>
                </div>
                <h4 className="text-xl font-semibold text-white mb-3 text-center">
                  {service.title}
                </h4>
                <p className="text-gray-300 mb-4 text-center text-sm">
                  {service.description}
                </p>
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-blue-400 mb-2">Key Features:</h5>
                  <ul className="space-y-1">
                    {service.features.map((feature, idx) => (<li key={idx} className="text-xs text-gray-400 flex items-center">
                        <CheckCircle className="w-3 h-3 text-green-400 mr-2 flex-shrink-0"/>
                        {feature}
                      </li>))}
                  </ul>
      {/* Services Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service, index) => (<motion.div key={service.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} viewport={{ once: true }} className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-6 border transition-all duration-300 hover:scale-105 cursor-pointer ${service.popular
                    ? 'border-blue-400/50 bg-gradient-to-br from-blue-500/20 to-cyan-500/20'
                    : 'border-white/20 hover:border-white/40'}`} onClick={() => setSelectedService(service)}>
                {service.popular && (<div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-3 py-1 rounded-full text-xs font-semibold">
                      Popular
                    </span>
                  </div>)}
                <div className="text-center mb-6">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-4 text-2xl`}>
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{service.name}</h3>
                  <p className="text-sm text-gray-300 mb-4">{service.tagline}</p>
                  <div className="flex items-baseline justify-center mb-2">
                    <span className="text-3xl font-bold text-white">{service.price}</span>
                    <span className="text-gray-400 ml-1">{service.period}</span>
                  </div>
                  <p className="text-xs text-gray-400 mb-4">{service.category}</p>
                </div>
                <div className="space-y-3 mb-6">
                  {service.features.slice(0, 4).map((feature, featureIndex) => (<div key={featureIndex} className="flex items-center text-sm text-gray-300">
                      <div className="w-2 h-2 bg-blue-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="truncate">{feature}</span>
                    </div>))}
                  {service.features.length > 4 && (<div className="text-center">
                      <span className="text-xs text-blue-400">+{service.features.length - 4} more features</span>
                    </div>)}
                </div>
                <div className="flex items-center justify-between text-xs text-gray-400 mb-4">
                  <span>⭐ {service.rating} ({service.reviews})</span>
                  <span>👥 {service.customers} customers</span>
                </div>
                <div className="text-center">
                  <span className="text-xs text-gray-400">
                    {service.trialDays} days free trial • Setup: {service.setupTime}
                  </span>
                </div>
              </motion.div>))}
          </div>
        </div>
      </section>
      {/* Service Details Modal */}
      {selectedService && (<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="bg-slate-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 bg-gradient-to-r ${selectedService.color} rounded-2xl flex items-center justify-center text-3xl`}>
                    {selectedService.icon}
                  </div>
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedService.name}</h2>
                    <p className="text-xl text-gray-300">{selectedService.tagline}</p>
                  </div>
                </div>
                <button onClick={() => setSelectedService(null)} className="text-gray-400 hover:text-white transition-colors">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                  </svg>
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">Service Overview</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{selectedService.description}</p>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Key Features</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedService.features.map((feature, index) => (<div key={index} className="flex items-center text-sm text-gray-300">
                          <div className="w-2 h-2 bg-blue-400 rounded-full mr-2"></div>
                          {feature}
                        </div>))}
                    </div>
                  </div>
                  <div className="mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">Technology Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedService.technology.map((tech, index) => (<span key={index} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-lg text-sm">
                          {tech}
                        </span>))}
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Pricing & Details</h4>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-gray-300">Price:</span>
                        <span className="text-white font-semibold">{selectedService.price}{selectedService.period}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Trial:</span>
                        <span className="text-white">{selectedService.trialDays} days free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Setup:</span>
                        <span className="text-white">{selectedService.setupTime}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Customers:</span>
                        <span className="text-white">{selectedService.customers}+</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-300">Rating:</span>
                        <span className="text-white">⭐ {selectedService.rating}/5 ({selectedService.reviews} reviews)</span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Market Position</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedService.marketPosition}</p>
                  </div>
                  <div className="bg-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-4">ROI & Benefits</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{selectedService.roi}</p>
                  </div>
                  <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-xl p-6">
                    <h4 className="text-lg font-semibold text-white mb-4">Get Started</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center text-white">
                        <span className="mr-2">📱</span>
                        <a href={`tel:${selectedService.contactInfo.mobile}`} className="hover:underline">
                          {selectedService.contactInfo.mobile}
                        </a>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="mr-2">✉️</span>
                        <a href={`mailto:${selectedService.contactInfo.email}`} className="hover:underline">
                          {selectedService.contactInfo.email}
                        </a>
                      </div>
                      <div className="flex items-center text-white">
                        <span className="mr-2">🌐</span>
                        <a href={selectedService.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                          Learn More
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>)}
      {/* Contact CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-900/50 to-cyan-900/50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Contact us today to discuss how our innovative micro SAAS services can drive growth, 
            efficiency, and competitive advantage for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a href="mailto:kleber@ziontechgroup.com" className="inline-flex items-center px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg">
              Start Your Project
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6"/>
              </svg>
            </a>
            <a href="tel:+13024640950" className="inline-flex items-center px-10 py-4 border-2 border-white/30 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/50 transition-all duration-300 transform hover:scale-105">
              Call: +1 302 464 0950
            </a>
          </div>
          <div className="mt-8 text-gray-300">
            <p>📍 364 E Main St STE 1008, Middletown DE 19709</p>
            <p>🌐 <a href="https://ziontechgroup.com" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">https://ziontechgroup.com</a></p>
          </div>
        </div>
      </></div>
    </div>))};
}
interface ServiceCardProps {service}: any;
  getCategoryIcon: (category: string) => React.ReactNode;
}
function ServiceCard({service, getCategoryIcon}: ServiceCardProps) {}
  return (
    <Card className="group hover:scale-105 transition-all duration-300 bg-slate-800/50 backdrop-blur-sm border border-slate-700 hover:border-cyan-500/50">
      <div className="relative overflow-hidden rounded-t-lg">
        <img src={service.images[0]} alt={service.title} className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"/>
        {service.featured && (<div className="absolute top-2 right-2">
            <Badge className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white">
              Featured
            </Badge>
          </div>)}
        <div className="absolute bottom-2 left-2 flex items-center gap-2">
          <div className="flex items-center bg-black/70 rounded-full px-2 py-1">
            <Star className="w-3 h-3 text-yellow-400 fill-current"/>
            <span className="text-white text-xs ml-1">{service.rating}</span>
          </div>
          <div className="bg-black/70 rounded-full px-2 py-1">
            <span className="text-white text-xs">({service.reviewCount})</span>
          </div>
        </div>
      </div>
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center gap-2">
            {getCategoryIcon(service.category)}
            <Badge variant="secondary" className="text-xs">
              {service.category}
            </Badge>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-cyan-400">
              {service.currency}{service.price?.toLocaleString()}
            </div>
            {service.subcategory && (<div className="text-xs text-slate-400">{service.subcategory}</div>)}
          </div>
        </div>
        <CardTitle className="text-white text-lg leading-tight">{service.title}</CardTitle>
        <CardDescription className="text-slate-300 text-sm leading-relaxed">
          {service.description}
        </CardDescription>
      </CardHeader>
      <CardContent className="pt-0">
        <div className="flex flex-wrap gap-2 mb-4">
          {service.tags.slice(0, 3).map((tag, index) => (<Badge key={index} variant="outline" className="text-xs border-slate-600 text-slate-300">
              {tag}
            </Badge>))}
        </div>
        <div className="flex items-center justify-between text-sm text-slate-400 mb-4">
          <div className="flex items-center gap-1">
            <Clock className="w-3 h-3"/>
            {service.availability}
          </div>
          <div className="flex items-center gap-1">
            <Globe className="w-3 h-3"/>
            {service.location}
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full overflow-hidden">
              <img src={service.author.avatarUrl || 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&h=100'} alt={service.author.name} className="w-full h-full object-cover"/>
            </div>
            <div>
              <div className="text-white text-sm font-medium">{service.author.name}</div>
              <div className="text-slate-400 text-xs">{service.author.email}</div>
            </div>
          </div>
          <Button size="sm" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700">
            <ArrowRight className="w-3 h-3 mr-1"/>
            Learn More
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
                </div>
                <div className="mb-4">
                  <h5 className="text-sm font-semibold text-green-400 mb-2">Benefits:</h5>
                  <ul className="space-y-1">
                    {service.benefits.map((benefit, idx) => (<li key={idx} className="text-xs text-gray-400 flex items-center">
                        <Star className="w-3 h-3 text-yellow-400 mr-2 flex-shrink-0"/>
                        {benefit}
                      </li>))}
                  </ul>
                </div>
                <a href={service.href} className="w-full flex items-center justify-center px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-medium rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 group-hover:shadow-lg">
                  Learn More
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform duration-300"/>
                </a>
import React, {useState, useMemo, useCallback, useEffect} from 'react';
import {motion, AnimatePresence} from 'framer-motion';
import {Search,
            Filter,
            Star,
            TrendingUp,
            Zap,
            Shield,
            Brain,
            Globe,
            ArrowRight,
            CheckCircle,
            DollarSign,
            Clock,
            Users,
            Target,
            Sparkles,
            Eye,
            Heart,
            Share2,
            Download,
            Play,
            BookOpen,
            Code,
            Database,
            Cloud,
            Lock,
            Rocket,
            Lightbulb,
            Cpu,
            Network,
            Smartphone,
            Monitor,
            Server} from 'lucide-react';
import {INNOVATIVE_MICRO_SAAS_SERVICES, INNOVATIVE_SERVICE_CATEGORIES, InnovativeMicroSaasService} from '../data/innovativeMicroSaasServices';
interface ServiceCardProps {service}: InnovativeMicroSaasService;
  index: number;
  viewMode: 'grid' | 'list';
  onServiceClick: (service: InnovativeMicroSaasService) => void;
}
const ServiceCard: React.FC<ServiceCardProps> = ({service, index, viewMode, onServiceClick}) => {}
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const getCategoryIcon = useCallback((category: string) => {}
    const iconMap: {[key]}: string]: React.ReactNode } = {'AI & Business Intelligence'}: <Brain className="w-5 h-5"/>,
      'Cybersecurity': <Shield className="w-5 h-5"/>,
      'DevOps & Cloud': <Cloud className="w-5 h-5"/>,
      'Blockchain & Web3': <Globe className="w-5 h-5"/>,
      'IoT & Edge Computing': <Target className="w-5 h-5"/>,
      'Digital Marketing': <TrendingUp className="w-5 h-5"/>,
      'Virtual Reality': <Sparkles className="w-5 h-5"/>,
      'Infrastructure': <Server className="w-5 h-5"/>,
      'Quantum Computing': <Cpu className="w-5 h-5"/>,
      'Machine Learning': <Network className="w-5 h-5"/>,
      'Mobile Development': <Smartphone className="w-5 h-5"/>,
      'Web Development': <Monitor className="w-5 h-5"/>
    };
    return iconMap[category] || <Star className="w-5 h-5"/>;
  }, []);
  const getCategoryColor = useCallback((category: string) => {}
    const colorMap: {[key]}: string]: string } = {'AI & Business Intelligence'}: 'from-purple-500 to-pink-500',
      'Cybersecurity': 'from-red-500 to-orange-500',
      'DevOps & Cloud': 'from-blue-500 to-cyan-500',
      'Blockchain & Web3': 'from-green-500 to-emerald-500',
      'IoT & Edge Computing': 'from-yellow-500 to-orange-500',
      'Digital Marketing': 'from-indigo-500 to-purple-500',
      'Virtual Reality': 'from-pink-500 to-rose-500',
      'Infrastructure': 'from-gray-500 to-slate-500',
      'Quantum Computing': 'from-violet-500 to-purple-500',
      'Machine Learning': 'from-blue-500 to-indigo-500',
      'Mobile Development': 'from-green-500 to-blue-500',
      'Web Development': 'from-orange-500 to-red-500'
    };
    return colorMap[category] || 'from-blue-500 to-purple-500';
  }, []);
  const handleLike = useCallback((e: React.MouseEvent) => {e.stopPropagation()};
    setIsLiked(!isLiked);
  }, [isLiked]);
  const handleShare = useCallback((e: React.MouseEvent) => {e.stopPropagation()};
    if (navigator.share) {navigator.share({
            title: service.title,
            text: service.description,
            url: service.websiteUrl
        })};
    } else {navigator.clipboard.writeText(service.websiteUrl)};
    }
  }, [service]);
  if (viewMode === 'grid') {}
    return (
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ y: -5, scale: 1.02 }} onHoverStart={() => setIsHovered(true)} onHoverEnd={() => setIsHovered(false)} onClick={() => onServiceClick(service)} className="group cursor-pointer bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-300">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 transform rotate-12 scale-150"></div>
        </div>
        {/* Service Header */}
        <div className="relative z-10 flex items-start justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} shadow-lg`}>
              {getCategoryIcon(service.category)}
            </div>
            <div>
              <h3 className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-sm text-gray-400">{service.category}</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            {service.featured && (<span className="px-2 py-1 bg-yellow-600/20 text-yellow-400 text-xs rounded-full border border-yellow-500/30">
                Featured
              </span>)}
            <button onClick={handleLike} className={`p-2 rounded-lg transition-colors ${isLiked ? 'text-red-500 bg-red-500/20' : 'text-gray-400 hover:text-red-500 hover:bg-red-500/20'}`} aria-label={isLiked ? 'Unlike service' : 'Like service'}>
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`}/>
            </button>
          </div>
        </div>
        {/* Description */}
        <p className="relative z-10 text-gray-300 text-sm mb-4 line-clamp-3">
          {service.description}
        </p>
        {/* Stats Grid */}
        <div className="relative z-10 grid grid-cols-2 gap-3 mb-4 text-sm">
          <div className="flex items-center gap-2 text-gray-400">
            <Star className="w-4 h-4 text-yellow-400"/>
            <span>{service.rating || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Brain className="w-4 h-4 text-blue-400"/>
            <span>{service.aiScore || 'N/A'}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <DollarSign className="w-4 h-4 text-green-400"/>
            <span>{service.currency}{service.price}/mo</span>
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            <Clock className="w-4 h-4 text-purple-400"/>
            <span>{service.estimatedDelivery}</span>
          </div>
        </div>
        {/* Features Preview */}
        <div className="relative z-10 mb-4">
          <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
          <div className="space-y-1">
            {service.features.slice(0, 3).map((feature, idx) => (<div key={idx} className="flex items-center gap-2 text-xs text-gray-400">
                <CheckCircle className="w-3 h-3 text-green-400 flex-shrink-0"/>
                <span className="truncate">{feature}</span>
              </div>))}
          </div>
        </div>
        {/* Action Buttons */}
        <div className="relative z-10 flex gap-2">
          <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105" aria-label={`Learn more about ${service.title}`}>
            Learn More
            <ArrowRight className="w-4 h-4"/>
          </button>
          <button onClick={handleShare} className="p-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors" aria-label="Share service">
            <Share2 className="w-4 h-4 text-gray-400"/>
          </button>
        </div>
        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-purple-600/10 rounded-2xl"/>)}
        </AnimatePresence>
      </motion.div>
    );
  }
  // List View
  return (
    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: index * 0.1 }} whileHover={{ x: 5 }} onClick={() => onServiceClick(service)} className="group cursor-pointer bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* Service Info */}
        <div className="flex-1">
          <div className="flex items-start justify-between mb-4">
            <div className="flex items-center gap-4">
              <div className={`p-3 rounded-xl bg-gradient-to-r ${getCategoryColor(service.category)} shadow-lg`}>
                {getCategoryIcon(service.category)}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-400">{service.category} • {service.subcategory}</p>
              </div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-bold text-white mb-1">
                {service.currency}{service.price}
                <span className="text-sm text-gray-400">/mo</span>
              </div>
              <div className="text-sm text-gray-400">{service.pricingModel}</div>
            </div>
          </div>
          <p className="text-gray-300 mb-4">{service.description}</p>
          {/* Stats Row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
            <div className="text-center">
              <div className="text-lg font-bold text-white">{service.rating || 'N/A'}</div>
              <div className="text-xs text-gray-400">Rating</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">{service.aiScore || 'N/A'}</div>
              <div className="text-xs text-gray-400">AI Score</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">{service.reviewCount || 'N/A'}</div>
              <div className="text-xs text-gray-400">Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-bold text-white">{service.estimatedDelivery}</div>
              <div className="text-xs text-gray-400">Delivery</div>
            </div>
          </div>
          {/* Features */}
          <div className="mb-4">
            <h4 className="text-sm font-medium text-gray-300 mb-2">Key Features:</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {service.features.slice(0, 6).map((feature, idx) => (<div key={idx} className="flex items-center gap-2 text-sm text-gray-400">
                  <CheckCircle className="w-4 h-4 text-green-400 flex-shrink-0"/>
                  <span className="truncate">{feature}</span>
                </div>))}
            </div>
          </div>
        </div>
        {/* CTA Section */}
        <div className="lg:w-48 flex flex-col justify-between">
          <div className="space-y-3 mb-4">
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Market Price</div>
              <div className="text-lg font-bold text-white">{service.marketPrice}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">ROI</div>
              <div className="text-lg font-bold text-green-400">{service.roi}</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-gray-400 mb-1">Time to Value</div>
              <div className="text-lg font-bold text-blue-400">{service.timeToValue}</div>
            </div>
          </div>
          <div className="flex gap-2">
            <button className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105" aria-label={`Get started with ${service.title}`}>
              Get Started
              <ArrowRight className="w-4 h-4"/>
            </button>
            <button onClick={handleShare} className="p-3 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg transition-colors" aria-label="Share service">
              <Share2 className="w-4 h-4 text-gray-400"/>
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
const ComprehensiveServicesShowcase: React.FC = () => {}
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [sortBy, setSortBy] = useState< />'rating' | 'price' | 'aiScore' | 'name'>('rating');
  const [viewMode, setViewMode] = useState< />'grid' | 'list'>('grid');
  const [selectedService, setSelectedService] = useState<InnovativeMicroSaasService /> | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  // Memoized filtered services for better performance
  const filteredServices = useMemo(() => {let} filtered = INNOVATIVE_MICRO_SAAS_SERVICES;
    // Filter by search term
    if (searchTerm) {}
      const searchLower = searchTerm.toLowerCase();
      filtered = filtered.filter(service =>
        service.title.toLowerCase().includes(searchLower) ||
        service.description.toLowerCase().includes(searchLower) ||
        service.tags.some(tag => tag.toLowerCase().includes(searchLower)) ||
        service.category.toLowerCase().includes(searchLower)
      );
    }
    // Filter by category
    if (selectedCategory !== 'all') {filtered = filtered.filter(service => service.category === selectedCategory)};
    }
    // Sort services
    filtered.sort((a, b) => {}
      switch (sortBy) {}
        case 'rating':
          return (b.rating || 0) - (a.rating || 0);
        case 'price':
          return a.price - b.price;
        case 'aiScore':
          return (b.aiScore || 0) - (a.aiScore || 0);
        case 'name':
          return a.title.localeCompare(b.title);
        default:
          return 0;
      }
    });
    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);
  const handleServiceClick = useCallback((service: InnovativeMicroSaasService) => {setSelectedService(service)};
    // You can add navigation logic here
    console.log('Service clicked:', service);
  }, []);
  const clearFilters = useCallback(() => {setSearchTerm('')};
    setSelectedCategory('all');
    setSortBy('rating');
  }, []);
  // Keyboard navigation support
  useEffect(() => {}
    const handleKeyDown = (e: KeyboardEvent) => {}
      if (e.key === 'Escape') {setSelectedService(null)};
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white py-20">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
            Comprehensive Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our complete portfolio of cutting-edge technology solutions designed to transform your business 
            with AI, quantum computing, cybersecurity, and more.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-green-400"/>
              {INNOVATIVE_MICRO_SAAS_SERVICES.length} Services Available
            </span>
            <span className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-400"/>
              Industry Leading Quality
            </span>
            <span className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-blue-400"/>
              Instant Deployment
            </span>
          </div>
        </motion.div>
        {/* Search and Filter Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }} className="bg-gradient-to-r from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-2xl p-6 mb-12 border border-gray-700/50">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Search */}
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5"/>
              <input type="text" placeholder="Search services..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} className="w-full pl-10 pr-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" aria-label="Search services"/>
            </div>
            {/* Category Filter */}
            <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" aria-label="Filter by category">
              <option value="all">All Categories</option>
              {INNOVATIVE_SERVICE_CATEGORIES.map(category => (<option key={category} value={category}>{category}</option>))}
            </select>
            {/* Sort By */}
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="px-4 py-3 bg-gray-800/50 border border-gray-600/50 rounded-lg text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" aria-label="Sort services by">
              <option value="rating">Sort by Rating</option>
              <option value="price">Sort by Price</option>
              <option value="aiScore">Sort by AI Score</option>
              <option value="name">Sort by Name</option>
            </select>
            {/* View Mode */}
            <div className="flex gap-2">
              <button onClick={() => setViewMode('grid')} className={`px-4 py-3 rounded-lg transition-all duration-300 ${viewMode === 'grid'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`} aria-label="Grid view" aria-pressed={viewMode === 'grid'}>
                Grid
              </button>
              <button onClick={() => setViewMode('list')} className={`px-4 py-3 rounded-lg transition-all duration-300 ${viewMode === 'list'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-800/50 text-gray-400 hover:bg-gray-700/50'}`} aria-label="List view" aria-pressed={viewMode === 'list'}>
                List
              </button>
            </div>
          </div>
          {/* Clear Filters */}
          {(searchTerm || selectedCategory !== 'all') && (<div className="mt-4 flex items-center justify-between">
              <div className="text-sm text-gray-400">
                {filteredServices.length} of {INNOVATIVE_MICRO_SAAS_SERVICES.length} services
              </div>
              <button onClick={clearFilters} className="text-sm text-blue-400 hover:text-blue-300 transition-colors">
                Clear all filters
              </button>
            </div>)}
        </motion.div>
        {/* Services Grid/List */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
          {filteredServices.length > 0 ? (viewMode === 'grid' ? (<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredServices.map((service, index) => (<ServiceCard key={service.id} service={service} index={index} viewMode={viewMode} onServiceClick={handleServiceClick}/>))}
              </div>) : (<div className="space-y-6">
                {filteredServices.map((service, index) => (<ServiceCard key={service.id} service={service} index={index} viewMode={viewMode} onServiceClick={handleServiceClick}/>))}
              </div>)) : (<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No services found</h3>
              <p className="text-gray-400 mb-4">Try adjusting your search criteria or filters.</p>
              <button onClick={clearFilters} className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors">
                Clear Filters
              </button>
            </motion.div>)}
        </motion.div>
        {/* CTA Section */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.8 }} className="text-center mt-20">
          <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-12 border border-blue-500/30">
            <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Our comprehensive services combine cutting-edge technology with proven business value. 
              Get started today and experience the future of business technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-lg font-medium transition-all duration-300 transform hover:scale-105">
                Schedule a Demo
              </button>
              <button className="px-8 py-4 bg-gray-700/50 hover:bg-gray-600/50 rounded-lg font-medium transition-all duration-300">
                Contact Sales
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
export default ComprehensiveServicesShowcase;
    </></></></></></></></>);
};
