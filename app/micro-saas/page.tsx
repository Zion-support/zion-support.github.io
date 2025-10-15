import React, { useState } from 'react';
import { 
  CheckCircle,
  Star,
  Zap,
  Users,
  TrendingUp,
  Shield,
  Cloud,
  Database,
  Smartphone,
  Mail,
  MessageCircle,
  BarChart3,
  Settings,
  Lock,
  Globe,
  Target,
  FileText,
  Calendar,
  CreditCard,
  Headphones,
  Search,
  Filter,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  ArrowRight,
  ExternalLink,
  Check,
  X,
  AlertCircle,
  Info,
  HelpCircle,
  Phone,
  MapPin,
  Clock,
  DollarSign,
  Percent,
  PieChart,
  LineChart,
  Activity,
  Brain,
  Code,
  Wifi,
  Server,
  HardDrive,
  Cpu,
  MemoryStick,
  Monitor,
  Camera,
  Mic,
  Speaker,
  Bluetooth,
  Battery,
  Power,
  RefreshCw,
  Maximize,
  Minimize,
  Copy,
  Scissors,
  Clipboard,
  Bookmark,
  Tag,
  Flag,
  Heart,
  ThumbsUp,
  ThumbsDown,
  Sun,
  Moon,
  CloudRain,
  CloudSnow,
  CloudLightning,
  Wind,
  Thermometer,
  Droplets,
  Snowflake,
  Sparkles,
  Flame,
  Droplet,
  Mountain,
  TreePine,
  Leaf,
  Flower,
  Bug,
  Fish,
  Bird,
  Cat,
  Dog,
  Rabbit,
  Cow,
  Pig,
  Frog,
  Turtle,
  Snake,
  Spider,
  Bee,
  Butterfly,
  Ant,
  Ladybug,
  Dragonfly,
  Firefly,
  Snail,
  Octopus,
  Whale,
  Shark,
  Dolphin,
  Penguin,
  Eagle,
  Owl,
  Parrot,
  Peacock,
  Swan,
  Duck,
  Chicken,
  Rooster,
  Turkey,
  Goose,
  Pigeon,
  Crow,
  Raven,
  Sparrow,
  Robin,
  Bluebird,
  Cardinal,
  Hummingbird,
  Woodpecker,
  Toucan,
  Flamingo,
  Pelican,
  Seagull,
  Albatross,
  Ostrich,
  Emu,
  Kiwi,
  PolarBear,
  Panda,
  Koala,
  Kangaroo,
  Wombat,
  Platypus,
  Echidna,
  Sloth,
  Armadillo,
  Hedgehog,
  Squirrel,
  Chipmunk,
  Beaver,
  Otter,
  Seal,
  Walrus,
  SeaLion,
  Elephant,
  Giraffe,
  Zebra,
  Hippo,
  Rhino,
  Lion,
  Tiger,
  Leopard,
  Cheetah,
  Jaguar,
  Panther,
  Lynx,
  Bobcat,
  Cougar,
  Wolf,
  Fox,
  Coyote,
  Jackal,
  Hyena,
  Bear,
  Raccoon,
  Skunk,
  Badger,
  Wolverine,
  Weasel,
  Ferret,
  Mink
} from 'lucide-react';

import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

interface MicroSaasProduct {
  id: string;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  price: string;
  originalPrice?: string;
  users: string;
  popular: boolean;
  category: string;
  link: string;
  marketPrice: string;
  benefits: string[];
  useCases: string[];
}

const MicroSaasPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const microSaasProducts: MicroSaasProduct[] = [
    // AI & Analytics
    {
      id: "1",
      icon: <BarChart3 className="w-8 h-8" />,
      title: "AI Analytics Dashboard Pro",
      description: "Advanced business intelligence with real-time analytics, predictive insights, and automated reporting for data-driven decisions.",
      features: [
        "Real-time dashboards & KPIs",
        "Predictive analytics & forecasting",
        "Custom report generation",
        "Mobile & desktop apps",
        "API integrations",
        "White-label options",
        "Advanced data visualization",
        "Automated alerts & notifications"
      ],
      price: "$99/month",
      originalPrice: "$149/month",
      users: "Up to 50 users",
      popular: true,
      category: "AI & Analytics",
      link: "https://ziontechgroup.com/ai-analytics-dashboard-pro",
      marketPrice: "$200-500/month",
      benefits: ["Increase revenue by 25%", "Reduce reporting time by 80%", "Improve decision accuracy by 40%"],
      useCases: ["E-commerce analytics", "Marketing performance", "Financial reporting", "Operations monitoring"]
    },
    {
      id: "2",
      icon: <Brain className="w-8 h-8" />,
      title: "AI Content Generation Pro",
      description: "Generate high-quality content at scale with AI-powered writing, editing, and optimization tools for all content types.",
      features: [
        "AI writing assistant",
        "Content optimization",
        "SEO-friendly content",
        "Multi-language support",
        "Brand voice training",
        "Plagiarism detection",
        "Content scheduling",
        "Performance analytics"
      ],
      price: "$79/month",
      originalPrice: "$129/month",
      users: "Unlimited content",
      popular: false,
      category: "AI & Analytics",
      link: "https://ziontechgroup.com/ai-content-generation-pro",
      marketPrice: "$150-300/month",
      benefits: ["Save 70% content creation time", "Increase engagement by 45%", "Scale content production 10x"],
      useCases: ["Blog writing", "Social media", "Email campaigns", "Product descriptions"]
    },
    {
      id: "3",
      icon: <Target className="w-8 h-8" />,
      title: "AI Lead Generation Pro",
      description: "Automated lead discovery, qualification, and nurturing with AI-powered prospecting and engagement tools.",
      features: [
        "Automated lead discovery",
        "Lead scoring & qualification",
        "Email sequence automation",
        "CRM integration",
        "Social media prospecting",
        "Lead enrichment",
        "Follow-up automation",
        "Performance tracking"
      ],
      price: "$149/month",
      originalPrice: "$199/month",
      users: "Up to 100 users",
      popular: true,
      category: "AI & Analytics",
      link: "https://ziontechgroup.com/ai-lead-generation-pro",
      marketPrice: "$300-600/month",
      benefits: ["Increase qualified leads by 200%", "Reduce lead cost by 60%", "Improve conversion by 35%"],
      useCases: ["B2B sales", "Real estate", "Insurance", "Professional services"]
    },

    // Business & Productivity
    {
      id: "4",
      icon: <Users className="w-8 h-8" />,
      title: "AI CRM Enterprise",
      description: "Intelligent customer relationship management with AI-powered insights, automation, and predictive analytics.",
      features: [
        "Contact & lead management",
        "AI-powered insights",
        "Sales forecasting",
        "Email automation",
        "Pipeline management",
        "Custom fields & workflows",
        "Mobile app",
        "Advanced reporting"
      ],
      price: "$199/month",
      originalPrice: "$299/month",
      users: "Up to 200 users",
      popular: false,
      category: "Business & Productivity",
      link: "https://ziontechgroup.com/ai-crm-enterprise",
      marketPrice: "$400-800/month",
      benefits: ["Increase sales by 30%", "Reduce admin time by 50%", "Improve customer retention by 25%"],
      useCases: ["Sales teams", "Customer service", "Account management", "Business development"]
    },
    {
      id: "5",
      icon: <Calendar className="w-8 h-8" />,
      title: "AI Scheduling Assistant Pro",
      description: "Smart scheduling and meeting management with AI-powered optimization and conflict resolution.",
      features: [
        "Smart scheduling",
        "Meeting optimization",
        "Conflict resolution",
        "Calendar integration",
        "Time zone management",
        "Meeting analytics",
        "Automated reminders",
        "Resource booking"
      ],
      price: "$49/month",
      originalPrice: "$79/month",
      users: "Up to 25 users",
      popular: false,
      category: "Business & Productivity",
      link: "https://ziontechgroup.com/ai-scheduling-assistant-pro",
      marketPrice: "$100-200/month",
      benefits: ["Save 5 hours/week", "Reduce no-shows by 40%", "Optimize meeting efficiency"],
      useCases: ["Consulting", "Healthcare", "Legal services", "Real estate"]
    },
    {
      id: "6",
      icon: <FileText className="w-8 h-8" />,
      title: "AI Document Processor Pro",
      description: "Automated document processing, analysis, and management with AI-powered extraction and organization.",
      features: [
        "Document OCR & extraction",
        "AI-powered analysis",
        "Automated categorization",
        "Search & retrieval",
        "Version control",
        "Collaboration tools",
        "Compliance tracking",
        "Integration APIs"
      ],
      price: "$89/month",
      originalPrice: "$139/month",
      users: "Up to 100 users",
      popular: false,
      category: "Business & Productivity",
      link: "https://ziontechgroup.com/ai-document-processor-pro",
      marketPrice: "$200-400/month",
      benefits: ["Process documents 10x faster", "Reduce errors by 90%", "Improve compliance by 100%"],
      useCases: ["Legal firms", "Accounting", "Insurance", "Healthcare"]
    },

    // Marketing & Sales
    {
      id: "7",
      icon: <Mail className="w-8 h-8" />,
      title: "AI Email Marketing Pro",
      description: "Intelligent email marketing with AI-powered personalization, automation, and optimization.",
      features: [
        "AI-powered personalization",
        "Automated campaigns",
        "A/B testing",
        "Advanced segmentation",
        "Deliverability optimization",
        "Performance analytics",
        "Template library",
        "Integration tools"
      ],
      price: "$69/month",
      originalPrice: "$99/month",
      users: "Up to 25,000 contacts",
      popular: true,
      category: "Marketing & Sales",
      link: "https://ziontechgroup.com/ai-email-marketing-pro",
      marketPrice: "$150-300/month",
      benefits: ["Increase open rates by 35%", "Boost click-through by 50%", "Reduce unsubscribe by 60%"],
      useCases: ["E-commerce", "SaaS", "Agencies", "Non-profits"]
    },
    {
      id: "8",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Social Media Manager Pro",
      description: "Automated social media management with AI-powered content creation, scheduling, and engagement.",
      features: [
        "AI content creation",
        "Multi-platform posting",
        "Engagement automation",
        "Hashtag optimization",
        "Performance analytics",
        "Competitor analysis",
        "Influencer outreach",
        "Crisis management"
      ],
      price: "$79/month",
      originalPrice: "$119/month",
      users: "Up to 10 accounts",
      popular: false,
      category: "Marketing & Sales",
      link: "https://ziontechgroup.com/ai-social-media-manager-pro",
      marketPrice: "$200-500/month",
      benefits: ["Save 15 hours/week", "Increase engagement by 60%", "Grow followers by 200%"],
      useCases: ["Brands", "Agencies", "Influencers", "Small businesses"]
    },
    {
      id: "9",
      icon: <DollarSign className="w-8 h-8" />,
      title: "AI Price Optimization Pro",
      description: "Dynamic pricing optimization with AI-powered analysis and automated price adjustments.",
      features: [
        "Dynamic pricing algorithms",
        "Competitor analysis",
        "Demand forecasting",
        "Price elasticity analysis",
        "A/B testing",
        "Revenue optimization",
        "Real-time adjustments",
        "Performance tracking"
      ],
      price: "$199/month",
      originalPrice: "$299/month",
      users: "Up to 100 products",
      popular: false,
      category: "Marketing & Sales",
      link: "https://ziontechgroup.com/ai-price-optimization-pro",
      marketPrice: "$500-1000/month",
      benefits: ["Increase revenue by 15%", "Optimize margins by 20%", "Reduce pricing errors by 95%"],
      useCases: ["E-commerce", "Hotels", "Airlines", "Retail"]
    },

    // Security & Compliance
    {
      id: "10",
      icon: <Shield className="w-8 h-8" />,
      title: "AI Security Monitor Pro",
      description: "Advanced cybersecurity monitoring with AI-powered threat detection and automated response.",
      features: [
        "Real-time threat detection",
        "AI-powered analysis",
        "Automated response",
        "Vulnerability scanning",
        "Compliance monitoring",
        "Incident management",
        "Security reporting",
        "24/7 monitoring"
      ],
      price: "$299/month",
      originalPrice: "$399/month",
      users: "Up to 500 users",
      popular: true,
      category: "Security & Compliance",
      link: "https://ziontechgroup.com/ai-security-monitor-pro",
      marketPrice: "$800-2000/month",
      benefits: ["Prevent 99% of threats", "Reduce response time by 80%", "Ensure compliance 100%"],
      useCases: ["Enterprises", "Healthcare", "Finance", "Government"]
    },
    {
      id: "11",
      icon: <Lock className="w-8 h-8" />,
      title: "AI Password Manager Pro",
      description: "Advanced password management with AI-powered security analysis and automated password generation.",
      features: [
        "Secure password storage",
        "AI security analysis",
        "Automated generation",
        "Breach monitoring",
        "Multi-factor authentication",
        "Password sharing",
        "Security dashboard",
        "Team management"
      ],
      price: "$39/month",
      originalPrice: "$59/month",
      users: "Up to 50 users",
      popular: false,
      category: "Security & Compliance",
      link: "https://ziontechgroup.com/ai-password-manager-pro",
      marketPrice: "$100-200/month",
      benefits: ["Eliminate password reuse", "Prevent 100% of breaches", "Save 2 hours/week"],
      useCases: ["Small businesses", "Remote teams", "Personal use", "Families"]
    },
    {
      id: "12",
      icon: <CheckCircle className="w-8 h-8" />,
      title: "AI Compliance Monitor Pro",
      description: "Automated compliance monitoring and reporting with AI-powered risk assessment and audit preparation.",
      features: [
        "Compliance monitoring",
        "Risk assessment",
        "Audit preparation",
        "Policy management",
        "Training tracking",
        "Incident reporting",
        "Regulatory updates",
        "Custom frameworks"
      ],
      price: "$199/month",
      originalPrice: "$299/month",
      users: "Up to 100 users",
      popular: false,
      category: "Security & Compliance",
      link: "https://ziontechgroup.com/ai-compliance-monitor-pro",
      marketPrice: "$500-1500/month",
      benefits: ["Ensure 100% compliance", "Reduce audit prep by 70%", "Minimize risk by 90%"],
      useCases: ["Healthcare", "Finance", "Legal", "Manufacturing"]
    },

    // Industry-Specific
    {
      id: "13",
      icon: <Heart className="w-8 h-8" />,
      title: "AI Healthcare Assistant Pro",
      description: "Specialized AI tools for healthcare providers with patient management, diagnosis support, and compliance.",
      features: [
        "Patient management",
        "Diagnosis support",
        "Treatment recommendations",
        "Compliance tracking",
        "Appointment scheduling",
        "Medical records",
        "Insurance processing",
        "Telemedicine support"
      ],
      price: "$399/month",
      originalPrice: "$599/month",
      users: "Up to 25 providers",
      popular: false,
      category: "Industry-Specific",
      link: "https://ziontechgroup.com/ai-healthcare-assistant-pro",
      marketPrice: "$1000-3000/month",
      benefits: ["Improve patient outcomes", "Reduce admin time by 50%", "Ensure HIPAA compliance"],
      useCases: ["Clinics", "Hospitals", "Private practices", "Telemedicine"]
    },
    {
      id: "14",
      icon: <Scale className="w-8 h-8" />,
      title: "AI Legal Assistant Pro",
      description: "Comprehensive legal AI tools for case management, document analysis, and research automation.",
      features: [
        "Case management",
        "Document analysis",
        "Legal research",
        "Contract review",
        "Time tracking",
        "Billing automation",
        "Client portal",
        "Compliance monitoring"
      ],
      price: "$299/month",
      originalPrice: "$449/month",
      users: "Up to 50 attorneys",
      popular: false,
      category: "Industry-Specific",
      link: "https://ziontechgroup.com/ai-legal-assistant-pro",
      marketPrice: "$800-2000/month",
      benefits: ["Reduce research time by 60%", "Improve accuracy by 40%", "Increase billable hours"],
      useCases: ["Law firms", "Corporate legal", "Solo practitioners", "Legal departments"]
    },
    {
      id: "15",
      icon: <Leaf className="w-8 h-8" />,
      title: "AI Agricultural Intelligence Pro",
      description: "Smart farming solutions with AI-powered crop monitoring, yield prediction, and resource optimization.",
      features: [
        "Crop monitoring",
        "Yield prediction",
        "Weather analysis",
        "Pest detection",
        "Resource optimization",
        "Market analysis",
        "Equipment management",
        "Sustainability tracking"
      ],
      price: "$199/month",
      originalPrice: "$299/month",
      users: "Up to 100 acres",
      popular: false,
      category: "Industry-Specific",
      link: "https://ziontechgroup.com/ai-agricultural-intelligence-pro",
      marketPrice: "$500-1500/month",
      benefits: ["Increase yield by 20%", "Reduce costs by 30%", "Improve sustainability"],
      useCases: ["Farms", "Greenhouses", "Vineyards", "Agricultural consultants"]
    },

    // Development & IT
    {
      id: "16",
      icon: <Code className="w-8 h-8" />,
      title: "AI Code Assistant Pro",
      description: "Advanced AI-powered coding assistant with code generation, debugging, and optimization tools.",
      features: [
        "Code generation",
        "Bug detection",
        "Code optimization",
        "Documentation generation",
        "Testing automation",
        "Code review",
        "Refactoring suggestions",
        "Multi-language support"
      ],
      price: "$99/month",
      originalPrice: "$149/month",
      users: "Up to 10 developers",
      popular: true,
      category: "Development & IT",
      link: "https://ziontechgroup.com/ai-code-assistant-pro",
      marketPrice: "$200-500/month",
      benefits: ["Increase productivity by 40%", "Reduce bugs by 60%", "Accelerate development"],
      useCases: ["Software companies", "Freelancers", "Startups", "Enterprise teams"]
    },
    {
      id: "17",
      icon: <Server className="w-8 h-8" />,
      title: "AI DevOps Automation Pro",
      description: "Automated DevOps pipeline with AI-powered monitoring, deployment, and infrastructure management.",
      features: [
        "Automated deployments",
        "Infrastructure monitoring",
        "Performance optimization",
        "Security scanning",
        "Backup automation",
        "Scaling management",
        "Incident response",
        "Cost optimization"
      ],
      price: "$199/month",
      originalPrice: "$299/month",
      users: "Up to 50 servers",
      popular: false,
      category: "Development & IT",
      link: "https://ziontechgroup.com/ai-devops-automation-pro",
      marketPrice: "$500-1500/month",
      benefits: ["Reduce deployment time by 80%", "Minimize downtime by 90%", "Optimize costs by 30%"],
      useCases: ["Tech companies", "SaaS providers", "E-commerce", "Enterprises"]
    },
    {
      id: "18",
      icon: <Database className="w-8 h-8" />,
      title: "AI Database Optimizer Pro",
      description: "Intelligent database management with AI-powered optimization, monitoring, and performance tuning.",
      features: [
        "Query optimization",
        "Performance monitoring",
        "Index recommendations",
        "Backup automation",
        "Security scanning",
        "Capacity planning",
        "Migration tools",
        "Real-time alerts"
      ],
      price: "$149/month",
      originalPrice: "$199/month",
      users: "Up to 25 databases",
      popular: false,
      category: "Development & IT",
      link: "https://ziontechgroup.com/ai-database-optimizer-pro",
      marketPrice: "$300-800/month",
      benefits: ["Improve performance by 50%", "Reduce costs by 25%", "Prevent data loss"],
      useCases: ["SaaS companies", "E-commerce", "Financial services", "Healthcare"]
    },

    // Customer Service
    {
      id: "19",
      icon: <Headphones className="w-8 h-8" />,
      title: "AI Customer Support Pro",
      description: "Intelligent customer service with AI-powered chatbots, ticket management, and sentiment analysis.",
      features: [
        "AI chatbots",
        "Ticket management",
        "Sentiment analysis",
        "Knowledge base",
        "Multi-channel support",
        "Escalation management",
        "Performance analytics",
        "Integration tools"
      ],
      price: "$79/month",
      originalPrice: "$119/month",
      users: "Up to 100 agents",
      popular: true,
      category: "Customer Service",
      link: "https://ziontechgroup.com/ai-customer-support-pro",
      marketPrice: "$200-600/month",
      benefits: ["Reduce response time by 70%", "Increase satisfaction by 40%", "Handle 80% queries automatically"],
      useCases: ["E-commerce", "SaaS", "Agencies", "Service businesses"]
    },
    {
      id: "20",
      icon: <MessageCircle className="w-8 h-8" />,
      title: "AI Live Chat Pro",
      description: "Advanced live chat solution with AI-powered responses, routing, and analytics.",
      features: [
        "AI-powered responses",
        "Smart routing",
        "Real-time analytics",
        "Custom branding",
        "Mobile app",
        "Integration APIs",
        "Team management",
        "Performance tracking"
      ],
      price: "$49/month",
      originalPrice: "$79/month",
      users: "Up to 25 agents",
      popular: false,
      category: "Customer Service",
      link: "https://ziontechgroup.com/ai-live-chat-pro",
      marketPrice: "$100-300/month",
      benefits: ["Increase conversions by 30%", "Reduce wait times by 60%", "Improve customer satisfaction"],
      useCases: ["Online stores", "Service providers", "Consultants", "Agencies"]
    }
  ];

  const benefits = [
    "No upfront costs or setup fees",
    "Quick deployment in 24-48 hours",
    "Scalable solutions that grow with you",
    "Regular updates and new features",
    "24/7 technical support",
    "Easy integration with existing tools",
    "Free trial for all products",
    "Cancel anytime, no long-term contracts",
    "White-label options available",
    "Custom development services",
    "Training and onboarding included",
    "SLA guarantees for enterprise plans"
  ];

  const categories = [
    "All",
    "AI & Analytics",
    "Business & Productivity",
    "Marketing & Sales",
    "Security & Compliance",
    "Industry-Specific",
    "Development & IT",
    "Customer Service"
  ];

  const stats = [
    {
      icon: Users,
      value: "50,000+",
      label: "Active Users",
      description: "Growing community of satisfied customers worldwide"
    },
    {
      icon: TrendingUp,
      value: "99.9%",
      label: "Uptime",
      description: "Reliable service you can count on 24/7"
    },
    {
      icon: Star,
      value: "4.9/5",
      label: "Rating",
      description: "Highly rated by our customers and industry experts"
    },
    {
      icon: Zap,
      value: "24/7",
      label: "Support",
      description: "Always here when you need us with expert assistance"
    }
  ];

  const filteredProducts = selectedCategory === "All" 
    ? microSaasProducts 
    : microSaasProducts.filter(product => product.category === selectedCategory);

  return (
    <>
      <Helmet>
        <title>
          Micro SaaS Solutions - Zion Tech Group | Ready-to-Use Business Tools
        </title>
        <meta
          name="description"
          content="Discover our comprehensive collection of micro SaaS solutions designed for businesses of all sizes. AI-powered tools for analytics, CRM, security, marketing, and more. Start your free trial today!"
        />
        <meta
          name="keywords"
          content="micro SaaS, business tools, AI analytics, CRM, security monitoring, cloud management, small business software, enterprise solutions, AI automation, productivity tools"
        />
        <meta property="og:title" content="Micro SaaS Solutions - Zion Tech Group" />
        <meta property="og:description" content="Comprehensive micro SaaS solutions for modern businesses. AI-powered tools that scale with your growth." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://ziontechgroup.com/micro-saas" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Micro{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                SaaS
              </span>{" "}
              Solutions
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12">
              Comprehensive collection of ready-to-use business tools powered by AI and cutting-edge technology. 
              No complex setup, no long-term commitments - just powerful solutions that solve real business problems.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto mb-12">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-400 text-sm font-semibold">{stat.label}</div>
                  <div className="text-gray-500 text-xs mt-1">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Info */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 max-w-4xl mx-auto mb-12">
              <h3 className="text-2xl font-bold text-white mb-6">Ready to Get Started?</h3>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div className="flex items-center justify-center space-x-3">
                  <Phone className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">+1 302 464 0950</div>
                    <div className="text-gray-400 text-sm">24/7 Support</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <Mail className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">kleber@ziontechgroup.com</div>
                    <div className="text-gray-400 text-sm">Email Support</div>
                  </div>
                </div>
                <div className="flex items-center justify-center space-x-3">
                  <MapPin className="w-5 h-5 text-cyan-400" />
                  <div>
                    <div className="text-white font-semibold">Middletown, DE</div>
                    <div className="text-gray-400 text-sm">Headquarters</div>
                  </div>
                </div>
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
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                    category === selectedCategory
                      ? "bg-gradient-to-r from-purple-500 to-blue-500 text-white shadow-lg"
                      : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Products Grid */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                Our Micro SaaS Products
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Choose from our comprehensive collection of specialized business tools
                designed to solve specific challenges and accelerate your growth.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProducts.map((product) => (
                <div
                  key={product.id}
                  className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border ${
                    product.popular
                      ? "border-purple-400 shadow-2xl shadow-purple-500/25 scale-105"
                      : "border-white/20"
                  } hover:border-purple-400 transition-all duration-300 group`}
                >
                  {product.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-purple-500 to-blue-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                        <Star className="w-4 h-4 fill-current" />
                        Most Popular
                      </div>
                    </div>
                  )}

                  <div className="text-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg mx-auto mb-4 flex items-center justify-center">
                      {product.icon}
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {product.title}
                    </h3>
                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {product.description}
                    </p>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-2xl font-bold text-white">
                        {product.price}
                      </span>
                      {product.originalPrice && (
                        <span className="text-gray-400 text-sm line-through">
                          {product.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-4">
                      <span className="text-gray-400 text-sm">
                        {product.users}
                      </span>
                      <span className="text-gray-500 text-xs">•</span>
                      <span className="text-cyan-400 text-xs">
                        Market: {product.marketPrice}
                      </span>
                    </div>
                    <div className="inline-block px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full">
                      {product.category}
                    </div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {product.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center text-gray-300 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="space-y-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Benefits:</h4>
                      <div className="space-y-1">
                        {product.benefits.map((benefit, index) => (
                          <div key={index} className="text-xs text-gray-300 flex items-center">
                            <div className="w-1 h-1 bg-cyan-400 rounded-full mr-2"></div>
                            {benefit}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col gap-3">
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 bg-gradient-to-r from-purple-500 to-blue-500 text-white hover:from-purple-600 hover:to-blue-600 transform hover:scale-105 flex items-center justify-center gap-2"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Start Free Trial
                    </a>
                    <a
                      href={product.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-2 px-6 rounded-lg font-semibold transition-all duration-300 bg-white/10 text-white border border-white/20 hover:bg-white/20 flex items-center justify-center gap-2"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
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
              <h2 className="text-3xl font-bold text-white mb-6">
                Why Choose Our Micro SaaS Solutions?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We&apos;ve designed our micro SaaS products to be simple,
                powerful, and accessible to businesses of all sizes.
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

        {/* How It Works */}
        <section className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-white mb-6">
                How It Works
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Getting started with our micro SaaS solutions is simple and
                straightforward. Follow these three easy steps.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Choose Your Solution
                </h3>
                <p className="text-gray-300">
                  Browse our comprehensive collection and select the micro SaaS product that
                  best fits your business needs and goals.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Start Free Trial
                </h3>
                <p className="text-gray-300">
                  Sign up for a free trial and explore all features without any
                  commitment. Get full access to test the solution.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Scale & Grow
                </h3>
                <p className="text-gray-300">
                  Upgrade when you&apos;re ready and scale your usage as your
                  business grows. We&apos;re here to support your success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-12 border border-white/20">
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Choose the micro SaaS solution that fits your business needs.
                Start with a free trial and scale as you grow. Our team is here to help you succeed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-500 to-blue-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-purple-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-105"
                >
                  <Zap className="w-5 h-5" />
                  Start Free Trial
                </Link>
                <a
                  href="tel:+13024640950"
                  className="inline-flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300"
                >
                  <Phone className="w-5 h-5" />
                  Call Us Now
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default MicroSaasPage;