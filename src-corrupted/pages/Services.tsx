<<<<<<< HEAD
import React from 'react',;',';';
    ';';';';
import { SEO } from '../components/SEO';

export default function Services(...args: an y[]): any {): unknown {): unknown {}
  const [activeCategory, setActiveCategory] = useState<any>(0);'
  const [searchTerm, setSearchTerm] = useState<any>('');

  const filteredServices: unknow n = allServices.filter(service => {}
    const matchesSearch: unknow n = service.name.toLowerCase () .includes(searchQuery.toLowerCase () ) ||
                         service.description.toLowerCase () .includes(searchQuery.toLowerCase () ) ;
    const matchesCategory: unknow n = selectedCategory === 'all' || service.category === selectedCategory;
    return matchesSearch && matchesCategory;
  }) ;

  return ()
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900">""""
      <div className="container mx-auto px-4 py-24 text-center text-white">"        <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          Our Services"""
        </h1>""""
        <p className="text-xl mb-8 max-w-3xl mx-auto text-gray-300">
          Cutting-edge technology solutions designed to transform your business."""
        </p>""""
        <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8 mt-16">""""
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
            <h3 className="text-2xl font-bold text-white mb-4">AI Development</h3>""""
            <p className="text-gray-300 mb-6">Custom AI models and machine learning solutions.</p>""""
            <p className="text-2xl font-bold text-blue-400 mb-4">$5,000 - $50,000</p>"""
          </div>""""
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
            <h3 className="text-2xl font-bold text-white mb-4">Cloud Migration</h3>""""
            <p className="text-gray-300 mb-6">Seamless cloud migration and scalable architecture.</p>""""
            <p className="text-2xl font-bold text-blue-400 mb-4">$10,000 - $100,000</p>"""
          </div>""""
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
            <h3 className="text-2xl font-bold text-white mb-4">Cybersecurity</h3>""""
            <p className="text-gray-300 mb-6">Comprehensive security solutions and assessments.</p>""""
            <p className="text-2xl font-bold text-blue-400 mb-4">$3,000 - $25,000</p>
          </div>
        </div>"""
        {/* New: A I-Powered Micro-SaaS Solutions */}""""
        <div className="mt-24 text-left">""""
          <h2 className="text-4xl font-bold mb-4">AI-Powered Micro-SaaS Solutions</h2>""""
          <p className="text-gray-300 mb-10 max-w-4xl">Intelligent, subscription-based tools that solve specific business problems with AI-powered automation and clear ROI.</p>""""
          <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">AI Workflow Orchestrator</h3>""""
              <p className="text-gray-300 mb-4">Intelligent workflow automation platform that orchestrates complex business processes with AI-powered optimization.</p>""""
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>AI-powered process optimization</li>
                <li>Visual workflow designer</li>
                <li>Real-time automation</li>
                <li>Team collaboration tools</li>"""
              </ul>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$299 - $1,999/month</p>""""
              <a href="/services/ai-workflow-orchestrator" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Learn more →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">AI Data Governance Platform</h3>""""
              <p className="text-gray-300 mb-4">Intelligent data governance that automatically discovers, classifies, and protects sensitive data while ensuring compliance.</p>""""
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>AI-powered data discovery</li>
                <li>Global compliance framework</li>
                <li>Advanced access control</li>
                <li>Data lineage tracking</li>"""
              </ul>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$399 - $2,999/month</p>""""
              <a href="/services/ai-data-governance-platform" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Learn more →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">AI Customer Experience Analytics</h3>""""
              <p className="text-gray-300 mb-4">Transform customer insights into actionable intelligence with AI-powered analytics that reveal the true voice of your customers.</p>""""
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>AI-powered sentiment analysis</li>
                <li>Real-time experience monitoring</li>
                <li>Customer journey mapping</li>
                <li>Predictive analytics</li>"""
              </ul>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$199 - $1,499/month</p>""""
              <a href="/services/ai-customer-experience-analytics" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Learn more →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">AI Sales Email Optimizer</h3>""""
              <p className="text-gray-300 mb-4">Auto-drafts and A/B tests emails based on CRM context to raise reply rates.</p>""""
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>CRM integration (HubSpot, Salesforce)</li>
                <li>Sequence testing and analytics</li>
                <li>Compliance guardrails</li>"""
              </ul>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$299 - $799/month</p>""""
              <a href="/contact" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Get a demo →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">Support Ticket Triage Copilot</h3>""""
              <p className="text-gray-300 mb-4">Classifies, deduplicates, and suggests resolutions; integrates with Zendesk/Jira.</p>""""
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Auto-priority and routing</li>
                <li>Knowledge base suggestions</li>
                <li>First-response macros</li>"""
              </ul>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$249 - $999/month</p>""""
              <a href="/solutions" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">See solution →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">Invoice OCR + Reconciliation</h3>""""
              <p className="text-gray-300 mb-4">Extracts line-items and auto-matches to POs; exports to QuickBooks/Xero.</p>""""
              <ul className="text-sm text-gray-300 mb-4 list-disc pl-5 space-y-1">
                <li>Vendor anomaly detection</li>
                <li>Tax and currency support</li>
                <li>Audit trails</li>"""
              </ul>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$199 - $799/month</p>""""
              <a href="/services" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Learn more →</a>
            </div>
          </div>
        </section>
"""
        {/* New: AI Services & Solutions */}""""
        <div className="mt-24 text-left">""""
          <h2 className="text-4xl font-bold mb-4">AI Services & Solutions</h2>""""
          <p className="text-gray-300 mb-10 max-w-4xl">From strategy to production MLOps, we deliver outcomes, not experiments.</p>""""
          <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">AI Strategy & Roadmapping</h3>""""
              <p className="text-gray-300 mb-4">Use-case discovery, ROI modeling, and architecture blueprints.</p>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$8,000 - $35,000</p>""""
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Explore engagements →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">Custom LLM Apps & Integrations</h3>""""
              <p className="text-gray-300 mb-4">Build copilots, RAG search, and workflow agents integrated with your stack.</p>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$15,000 - $150,000</p>""""
              <a href="https://ziontechgroup.com/research-development" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">See R&D →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">Computer Vision & OCR</h3>""""
              <p className="text-gray-300 mb-4">Detection, tracking, and document understanding for real-world operations.</p>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$20,000 - $120,000</p>""""
              <a href="https://ziontechgroup.com/case-studies" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">View case studies →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">MLOps & Platform Engineering</h3>""""
              <p className="text-gray-300 mb-4">Feature stores, CI/CD for models, observability, and governance.</p>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$25,000 - $180,000</p>""""
              <a href="https://ziontechgroup.com/partners" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Our partners →</a>
            </div>
          </div>
        </section>
"""
        {/* New: IT Services & Modernization */}""""
        <div className="mt-24 text-left">""""
          <h2 className="text-4xl font-bold mb-4">IT Services & Modernization</h2>""""
          <p className="text-gray-300 mb-10 max-w-4xl">End-to-end services to secure, scale, and streamline your technology footprint.</p>""""
          <div className="grid md: gri d-cols-2 lg: gri d-cols-3 gap-8">""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">Cloud Cost Optimization</h3>""""
              <p className="text-gray-300 mb-4">FinOps audits, rightsizing, reserved instances, and tagging strategies.</p>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$6,000 - $45,000</p>""""
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Learn more →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">Zero Trust Security</h3>""""
              <p className="text-gray-300 mb-4">Identity-first controls, microsegmentation, and continuous verification.</p>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$12,000 - $95,000</p>""""
              <a href="https://ziontechgroup.com/advanced-cybersecurity" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Security services →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">Data Platform Modernization</h3>""""
              <p className="text-gray-300 mb-4">Lakehouse design, ETL pipelines, and real-time analytics platforms.</p>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$18,000 - $140,000</p>""""
              <a href="https://ziontechgroup.com/solutions" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Get details →</a>"""
            </div>""""
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">""""
              <h3 className="text-2xl font-bold mb-2">Managed IT & Onsite Support</h3>""""
              <p className="text-gray-300 mb-4">SLAs, patching, endpoint management, and onsite troubleshooting.</p>""""
              <p className="text-2xl font-bold text-blue-400 mb-4">$2,000 - $25,000/month</p>""""
              <a href="https://ziontechgroup.com/contact" className="text-cyan-300 hover: tex t-cyan-200 font-semibold">Contact us →</a>
            </div>
          </div>
        </section>
"""
        {/* CTA and Contact */}""""
        <div className="mt-24 text-left">""""
          <div className="bg-white/5 rounded-2xl p-8 border border-white/10">""""
            <h3 className="text-3xl font-bold mb-4">Ready to start?</h3>""""
            <p className="text-gray-300 mb-6 max-w-3xl">Talk with our experts to scope a pilot or request a tailored quote. We respond within 24 hours.</p>""""
            <div className="flex flex-col md: fle x-row gap-4 items-start md: item s-center">""""
              <a href="https://ziontechgroup.com/contact" className="px-6 py-3 rounded-lg bg-cyan-600 hover: b g-cyan-500 font-semibold">Book a consultation</a>""""
              <a href="tel:+13024640950" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover: b g-cyan-500/10">Call +1 302 464 0950</a>""""
              <a href="mailto: klebe r@ziontechgroup.com" className="px-6 py-3 rounded-lg border border-cyan-500 text-cyan-300 hover: b g-cyan-500/10">kleber@ziontechgroup.com</a>"""
            </div>""""
            <div className="mt-4 text-sm text-gray-400">
              Address: 364 E Main St STE 1008, Middletown, DE 19709 • Website: ziontechgrou p.com;
            </div>
          </div>"""
        </div>""""
        <div className="mt-16">""""
          <a href="tel:+13024640950" className="bg-blue-600 hover: b g-blue-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors">
            📞 Call +1 (302) 464-0950;
          </a>
        </div>
      </div>
    </>
  )};
export default Services;'"""
'"'"""

export { Services };
export default function Services(props: any) {
  const services = [
    {
      id: 'ai',
      title: "AI Solutions",
      description: "Transform your business with cutting-edge artificial intelligence and machine learning solutions",
      icon: Brai n,
      color: "from-purple-500 to-pink-500",
      features: [
        "Machine Learning Models",
        "Natural Language Processing",
        "Computer Vision",
        "Predictive Analytics",
        "AI-Powered Automation",
        "Data Science Consulting"
      ],
      benefits: [
        "Increase operational efficiency by up to 300%",
        "Reduce costs through intelligent automation",
        "Gain competitive advantage with AI insights",
        "Scale operations without proportional cost increase"
      ],
      link: "/services/ai"
    },
    {
      id: 'talent',
      title: "Tech Talent",
      description: "Access world-class developers, engineers, and IT professionals for your projects",
      icon: User s,      color: "from-blue-500 to-cyan-500",
      features: [
        "Full-Stack Developers",
        "DevOps Engineers",
        "Data Scientists",
        "UI/UX Designers",
        "Project Managers",
        "QA Engineers"
      ],
      benefits: [
        "Reduce hiring time by 70%",
        "Access global talent pool",
        "Flexible engagement models",
        "Proven track record of success"
      ],
      link: "/talent"
    },
    {
      id: 'equipment',
      title: "Equipment & Infrastructure",
      description: "High-performance technology infrastructure and hardware solutions for modern businesses",
      icon: Za p,
      color: "from-yellow-500 to-orange-500",
      features: [
        "Cloud Infrastructure",
        "High-Performance Computing",
        "Network Solutions",
        "Security Hardware",
        "Data Center Equipment",
        "IoT Devices"
      ],
      benefits: [
        "Optimize performance and reliability",
        "Reduce infrastructure costs",
        "Scale with business growth",
        "Enhanced security and compliance"
      ],
      link: "/equipment"
    },
    {
      id: 'consulting',
      title: "Technology Consulting",
      description: "Strategic guidance for digital transformation and technology optimization",
      icon: TrendingU p,
      color: "from-green-500 to-emerald-500",
      features: [
        "Digital Strategy",
        "Technology Roadmap",
        "Process Optimization",
        "Change Management",
        "Risk Assessment",
        "Performance Audits"
      ],
      benefits: [
        "Align technology with business goals",
        "Reduce technology risks",
        "Optimize IT investments",
        "Accelerate digital transformation"
      ],
      link: "/consulting"
    },
    {
      id: 'cybersecurity',
      title: "Cybersecurity Services",
      description: "Comprehensive security solutions to protect your digital assets and ensure compliance",
      icon: Shiel d,
      color: "from-red-500 to-pink-500",
      features: [
        "Security Audits",
        "Penetration Testing",
        "SOC2 Compliance",
        "Incident Response",
        "Security Training",
        "Threat Intelligence"
      ],
      benefits: [
        "Protect against cyber threats",
        "Achieve compliance standards",
        "Reduce security risks",
        "Build customer trust"
      ],
      link: "/services/cybersecurity"
    },
    {
      id: 'cloud',
      title: "Cloud Services",
      description: "Scalable cloud solutions and DevOps services for modern application development",
      icon: Clou d,
      color: "from-indigo-500 to-purple-500",
      features: [
        "Cloud Migration",
        "DevOps Automation",
        "Container Orchestration",
        "Serverless Architecture",
        "Monitoring & Logging",
        "Cost Optimization"
      ],
      benefits: [
        "Reduce infrastructure costs",
        "Improve scalability and reliability",
        "Accelerate development cycles",
        "Enhanced disaster recovery"
      ],
      link: "/services/cloud"    }
  ];

  const stats = [
    {
      icon: Glob e,
      value: "500+",
      label: "Projects Delivered",
      description: "Across 25+ countries"
    },
    {
      icon: Cod e,
      value: "50+",
      label: "Technologies",
      description: "Modern tech stack"
    },
    {
      icon: Sta r,
      value: "99.9%",
      label: "Client Satisfaction",
      description: "Proven track record"
    },
    {
      icon: Loc k,
      value: "100%",
      label: "Security",
      description: "Zero breaches"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 2 0 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
=======
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Brain, 
  Cloud, 
  Shield, 
  Globe, 
  Cpu, 
  Database, 
  ShoppingCart, 
  Heart, 
  Atom, 
  Rocket, 
  Leaf, 
  Satellite,
  ArrowRight,
  CheckCircle,
  Star,
  Zap,
  BarChart3,
  Server,
  Network,
  Code,
  Lock,
  Users,
  Target,
  TrendingUp,
  MessageCircle,
  Phone,
  Mail,
  Clock
} from 'lucide-react';

export default function Services(props: any) {
  const [activeCategory, setActiveCategory] = useState<any>('all');

  const serviceCategories = [
    { id: 'all', name: 'All Services', icon: Zap },
    { id: 'ai', name: 'AI & Analytics', icon: Brain },
    { id: 'infrastructure', name: 'Infrastructure', icon: Server },
    { id: 'security', name: 'Security', icon: Shield },
    { id: 'saas', name: 'Micro SaaS', icon: ShoppingCart },
    { id: 'innovation', name: 'Innovation', icon: Rocket }
  ];

  const allServices = [
    // AI & Analytics Services
    {
      id: 'ai-business-intelligence',
      title: 'AI Business Intelligence',
      description: 'Transform data into actionable insights with our AI-powered analytics platform.',
      category: 'ai',
      icon: Brain,
      price: '$2,500/mo',
      features: ['Real-time Analytics', 'Predictive Modeling', 'Custom Dashboards', 'API Integration'],
      path: '/services/ai-business-intelligence',
      featured: true,
      color: 'from-purple-500 to-cyan-500'
    },
    {
      id: 'ai-healthcare-analytics',
      title: 'AI Healthcare Analytics',
      description: 'Advanced healthcare analytics platform with AI-powered diagnostics and predictive insights.',
      category: 'ai',
      icon: Heart,
      price: '$3,500/mo',
      features: ['Medical AI', 'Predictive Diagnostics', 'HIPAA Compliance', 'Real-time Monitoring'],
      path: '/services/ai-healthcare-analytics-platform',
      featured: true,
      color: 'from-red-500 to-pink-500'
    },
    {
      id: 'ai-cybersecurity',
      title: 'AI Cybersecurity Suite',
      description: 'AI-powered threat detection and cybersecurity protection for modern enterprises.',
      category: 'ai',
      icon: Shield,
      price: '$2,800/mo',
      features: ['Threat Detection', 'Behavioral Analysis', 'Incident Response', '24/7 Monitoring'],
      path: '/services/ai-cybersecurity-threat-detection',
      featured: true,
      color: 'from-green-500 to-blue-500'
    },
    {
      id: 'ai-workflow-orchestrator',
      title: 'AI Workflow Orchestrator',
      description: 'Intelligent workflow automation and orchestration powered by artificial intelligence.',
      category: 'ai',
      icon: Brain,
      price: '$2,200/mo',
      features: ['Process Automation', 'Smart Routing', 'Performance Analytics', 'Integration Hub'],
      path: '/services/ai-workflow-orchestrator',
      featured: false,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'ai-content-marketing',
      title: 'AI Content Marketing',
      description: 'Automate content creation and marketing campaigns with AI-powered tools.',
      category: 'ai',
      icon: MessageCircle,
      price: '$1,800/mo',
      features: ['Content Generation', 'Campaign Automation', 'SEO Optimization', 'Performance Tracking'],
      path: '/services/ai-content-marketing-automation',
      featured: false,
      color: 'from-purple-500 to-pink-500'
    },

    // Infrastructure Services
    {
      id: 'cloud-devops',
      title: 'Cloud DevOps',
      description: 'Streamline your development and deployment processes with modern DevOps practices.',
      category: 'infrastructure',
      icon: Cloud,
      price: '$1,800/mo',
      features: ['CI/CD Pipelines', 'Infrastructure as Code', 'Monitoring & Alerting', 'Security Best Practices'],
      path: '/services/cloud-devops',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'it-infrastructure',
      title: 'IT Infrastructure',
      description: 'Comprehensive IT infrastructure solutions for enterprise environments.',
      category: 'infrastructure',
      icon: Server,
      price: '$2,200/mo',
      features: ['Network Design', 'Server Management', 'Storage Solutions', 'Backup & Recovery'],
      path: '/services/it-infrastructure',
      featured: true,
      color: 'from-gray-500 to-slate-500'
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Business intelligence and data analytics solutions for informed decision-making.',
      category: 'infrastructure',
      icon: BarChart3,
      price: '$1,900/mo',
      features: ['Data Warehousing', 'Business Intelligence', 'Reporting Tools', 'Data Visualization'],
      path: '/services/data-analytics',
      featured: true,
      color: 'from-blue-500 to-indigo-500'
    },

    // Security Services
    {
      id: 'zero-trust-architecture',
      title: 'Zero Trust Network Architecture',
      description: 'Implement modern zero-trust security principles for comprehensive network protection.',
      category: 'security',
      icon: Lock,
      price: '$3,200/mo',
      features: ['Identity Verification', 'Micro-segmentation', 'Continuous Monitoring', 'Threat Prevention'],
      path: '/services/zero-trust-network-architecture',
      featured: true,
      color: 'from-red-500 to-orange-500'
    },

    // Micro SaaS Services
    {
      id: 'micro-saas',
      title: 'Micro SaaS Solutions',
      description: 'Custom SaaS applications designed to streamline operations and boost productivity.',
      category: 'saas',
      icon: ShoppingCart,
      price: '$1,500/mo',
      features: ['Custom Development', 'Scalable Architecture', 'User Management', 'Analytics Dashboard'],
      path: '/services/micro-saas',
      featured: true,
      color: 'from-orange-500 to-red-500'
    },
    {
      id: 'affiliate-marketing-tracker',
      title: 'Affiliate Marketing Tracker',
      description: 'Comprehensive affiliate marketing tracking and analytics platform.',
      category: 'saas',
      icon: TrendingUp,
      price: '$800/mo',
      features: ['Affiliate Tracking', 'Commission Management', 'Performance Analytics', 'Payment Processing'],
      path: '/services/affiliate-marketing-tracker',
      featured: false,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'uptime-sla-monitor',
      title: 'Uptime SLA Monitor',
      description: 'Monitor service uptime and SLA compliance with real-time alerts.',
      category: 'saas',
      icon: Clock,
      price: '$600/mo',
      features: ['Uptime Monitoring', 'SLA Tracking', 'Alert System', 'Performance Reports'],
      path: '/services/uptime-sla-monitor',
      featured: false,
      color: 'from-blue-500 to-cyan-500'
    },

    // Innovation Services
    {
      id: 'quantum-computing',
      title: 'Quantum Computing',
      description: 'Quantum computing solutions for complex optimization and simulation problems.',
      category: 'innovation',
      icon: Atom,
      price: '$5,000/mo',
      features: ['Quantum Algorithms', 'Optimization Problems', 'Simulation Tools', 'Research Support'],
      path: '/services/quantum-computing',
      featured: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'digital-twin',
      title: 'Digital Twin Platform',
      description: 'Create virtual replicas of your physical systems for simulation and optimization.',
      category: 'innovation',
      icon: Globe,
      price: '$3,200/mo',
      features: ['3D Modeling', 'Real-time Simulation', 'Predictive Analytics', 'IoT Integration'],
      path: '/services/digital-twin',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: 'iot-edge',
      title: 'IoT Edge Computing',
      description: 'IoT solutions with edge computing capabilities for real-time processing.',
      category: 'innovation',
      icon: Cpu,
      price: '$2,800/mo',
      features: ['Edge Processing', 'Real-time Analytics', 'Device Management', 'Data Synchronization'],
      path: '/services/iot-edge',
      featured: true,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'space-tech',
      title: 'Space Technology',
      description: 'Innovative space technology solutions for aerospace and satellite applications.',
      category: 'innovation',
      icon: Satellite,
      price: '$4,500/mo',
      features: ['Satellite Systems', 'Aerospace Solutions', 'Navigation Systems', 'Communication Tech'],
      path: '/services/space-tech',
      featured: true,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      id: 'green-it',
      title: 'Green IT Solutions',
      description: 'Sustainable technology solutions for environmentally conscious organizations.',
      category: 'innovation',
      icon: Leaf,
      price: '$2,100/mo',
      features: ['Energy Efficiency', 'Sustainable Practices', 'Carbon Footprint Reduction', 'Green Certifications'],
      path: '/services/green-it',
      featured: true,
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const filteredServices = activeCategory === 'all' 
    ? allServices 
    : allServices.filter(service => service.category === activeCategory);

  const contactInfo = {
    phone: '+1 302 464 0950',
    email: 'kleber@ziontechgroup.com'
>>>>>>> merge-all-prs-20250904-105408
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
<<<<<<< HEAD
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto"
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl md: tex t-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
            >
              Our Services
            </motion.h1>
            <motion.p 
              variants={itemVariants}
              className="text-xl md: tex t-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            >
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation
            </motion.p>            </h1>
            <p className="text-xl text-gray-600 mb-12">
              Professional Services services and solutions
            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-lg font-semibold hover: fro m-blue-600 hover: t o-purple-600 transition-all duration-300 transform hover: scal e-105"
              >
                Get Started
                <ArrowRight className="inline ml-2 h-5 w-5"  />
              </Link>
              <Link
                to="/solutions"
                className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover: b g-white hover: tex t-gray-900 transition-all duration-300"
              >
                View Solutions
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black/50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: tru e }}
            className="grid grid-cols-2 md: gri d-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div 
                key={index} 
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full mb-4 group-hover: scal e-110 transition-transform duration-300 shadow-lg">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl md: tex t-4xl font-bold text-cyan-400 mb-2">{stat.value}</div>
                <div className="text-lg font-semibold text-white mb-2">{stat.label}</div>
                <div className="text-sm text-gray-400">{stat.description}</div>              </motion.div>
            ))}
          </motion.div>
=======
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold text-white mb-6">
              Our Services
            </h1>
            <p className="text-xl text-slate-300 mb-8">
              Comprehensive technology solutions designed to transform your business. 
              From AI-powered analytics to infrastructure management, we have the expertise 
              to drive your digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Get Your Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Schedule a Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                    : 'bg-slate-700/50 text-slate-300 hover:bg-slate-600/50 hover:text-white'
                }`}
              >
                <category.icon className="w-5 h-5" />
                {category.name}
              </button>
            ))}
          </div>
>>>>>>> merge-all-prs-20250904-105408
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
<<<<<<< HEAD
        <div className="max-w-7xl mx-auto px-6">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: tru e }}
            className="grid grid-cols-1 lg: gri d-cols-2 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                variants={itemVariants}
                className="group bg-slate-800/50 p-8 rounded-xl border border-slate-700 hover: borde r-cyan-500 transition-all duration-300 hover: b g-slate-800/70 hover: shado w-xl hover: shado w-cyan-500/10"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${service.color} rounded-full group-hover: scal e-110 transition-transform duration-300`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <Link 
                    to={service.link}
                    className="text-cyan-400 hover: tex t-cyan-300 transition-colors group/link"
                  >
                    <ArrowRight className="w-5 h-5 group-hover/link: translat e-x-1 transition-transform"  />
                  </Link>
                </div>
                
                <h3 className="text-2xl font-semibold text-white mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md: gri d-cols-2 gap-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-300">
                        <CheckCircle className="w-4 h-4 text-cyan-400 mr-2 flex-shrink-0"  />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits */}
                <div className="mb-6">
                  <h4 className="text-white font-medium mb-3">Business Benefits</h4>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-sm text-gray-300">
                        <Star className="w-4 h-4 text-yellow-400 mr-2 flex-shrink-0 mt-0.5"  />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to={service.link}
                  className="inline-flex items-center text-cyan-400 hover: tex t-cyan-300 transition-colors font-medium"
                >
                  Learn More About {service.title}
                  <ArrowRight className="w-4 h-4 ml-2"  />
                </Link>
              </motion.div>
            ))}
          </motion.div>        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-cyan-900/20 to-blue-900/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: tru e }}
          >
            <h2 className="text-3xl md: tex t-4xl font-bold text-white mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how our services can help transform your business            </p>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link 
                to="/contact"
                className="group px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover: fro m-cyan-600 hover: t o-blue-700 transition-all duration-300 transform hover: scal e-105 shadow-lg hover: shado w-cyan-500/25"
              >
                <span className="flex items-center justify-center">
                  Get a Free Consultation
                  <ArrowRight className="w-5 h-5 ml-2 group-hover: translat e-x-1 transition-transform"  />
                </span>
              </Link>
              <Link 
                to="/contact"
                className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 rounded-lg font-semibold hover: b g-cyan-500 hover: tex t-white transition-all duration-300 hover: shado w-lg hover: shado w-cyan-500/25"
              >
                Request a Quote            <div className="grid md: gri d-cols-2 gap-8 mb-12">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Professional Solutions</li>
                  <li>• Expert Implementation</li>
                  <li>• 24/7 Support</li>
                  <li>• Custom Development</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-4">Why Choose Us</h2>
                <ul className="text-gray-600 space-y-2">
                  <li>• Industry Expertise</li>
                  <li>• Proven Results</li>
                  <li>• Scalable Solutions</li>
                  <li>• Competitive Pricing</li>
                </ul>
              </div>
            <div className="flex flex-col sm: fle x-row gap-4 justify-center">
              <Link href="/pricing/" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover: b g-blue-700 transition-colors">
                View Pricing
              </Link>
              <Link href="/contact/" className="bg-gray-600 text-white px-6 py-3 rounded-lg hover: b g-gray-700 transition-colors">
                Contact Us
              </Link>
            </div>
    </>
  );
}
export default Services
=======
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => (
              <div key={service.id} className="group bg-slate-800/50 rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 bg-gradient-to-br ${service.color} rounded-xl`}>
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                  {service.featured && (
                    <span className="inline-flex items-center gap-1 text-xs text-yellow-400">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                  )}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-slate-300 mb-6">{service.description}</p>
                
                <div className="text-2xl font-bold text-cyan-400 mb-6">{service.price}</div>
                
                <ul className="space-y-2 mb-8">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-slate-300">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={service.path}
                  className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 font-medium group-hover:gap-3 transition-all duration-300"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-slate-800/30">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-3xl p-12 text-center border border-cyan-500/30">
            <h2 className="text-4xl font-bold text-white mb-6">
              Need a Custom Solution?
            </h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Can't find exactly what you're looking for? We specialize in custom solutions 
              tailored to your specific business needs and requirements.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/request-quote"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
              >
                Request Custom Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 font-semibold rounded-lg transition-all duration-300"
              >
                Contact Our Team
              </Link>
            </div>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-300">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                <span>{contactInfo.email}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
>>>>>>> merge-all-prs-20250904-105408

</div>
</motion>
</div>
</motion>
</motion>
</motion>
</motion>
</div>
</section>
</motion>
</motion>
</motion>
</div>
</any>
</div>
</div>
</div>
</div>
</any>
</any>