import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  CheckCircle,
  Star,
  ArrowRight,
  Zap,
  Shield,
  Clock,
  Users,
  TrendingUp,
  Globe,
  Smartphone,
  Database,
  BarChart3,
  Mail,
  Calendar,
  FileText,
  Image,
  Video,
  Music,
  Code,
  Palette,
  Search,
  Lock,
  Cloud,
  Wifi,
  Monitor,
  Headphones,
  Camera,
  Printer,
  HardDrive,
  Cpu,
  MemoryStick,
  Wrench,
  Settings,
  Bell,
  Heart,
  ThumbsUp,
  Share2,
  Download,
  Upload,
  Eye,
  Edit,
  Trash2,
  Plus,
  Minus,
  X,
  Check,
  AlertCircle,
  Info,
  HelpCircle,
  ExternalLink,
  Brain,
  Cpu as CpuIcon,
  Bot,
  Target,
  Layers,
  BarChart,
  PieChart,
  LineChart,
  Activity,
  Zap as ZapIcon,
  Sparkles,
  Atom,
  Cpu as CpuIcon2,
} from "lucide-react";

const biServices = [
  {
    id: 1,
    name: "Data Analytics Platform",
    description:
      "Comprehensive data analysis and visualization platform for business insights",
    price: "$2,999/month",
    features: [
      "Real-time Data Processing",
      "Interactive Dashboards",
      "Predictive Analytics",
      "Custom Report Builder",
      "Data Integration",
      "Advanced Visualizations",
      "Mobile Access",
      "API Integration",
    ],
    icon: <BarChart3 className="w-8 h-8" />,
    category: "Analytics",
    popular: true,
    rating: 4.9,
    users: "1,500+",
    color: "from-blue-500 to-purple-600",
    capabilities: [
      "Process 50TB+ data daily",
      "99.9% uptime guarantee",
      "Real-time insights",
      "Custom dashboard creation",
    ],
  },
  {
    id: 2,
    name: "Business Intelligence Suite",
    description:
      "End-to-end BI solution with advanced reporting and data management",
    price: "$4,499/month",
    features: [
      "Executive Dashboards",
      "KPI Monitoring",
      "Trend Analysis",
      "Automated Reports",
      "Data Warehousing",
      "ETL Processes",
      "Security Controls",
      "Multi-tenant Support",
    ],
    icon: <Database className="w-8 h-8" />,
    category: "Business Intelligence",
    popular: true,
    rating: 4.8,
    users: "2,200+",
    color: "from-green-500 to-teal-600",
    capabilities: [
      "360° business view",
      "Automated insights",
      "Scalable architecture",
      "Enterprise security",
    ],
  },
  {
    id: 3,
    name: "Predictive Analytics Engine",
    description:
      "AI-powered predictive modeling for forecasting and trend prediction",
    price: "$3,599/month",
    features: [
      "Machine Learning Models",
      "Forecasting Algorithms",
      "Risk Assessment",
      "Scenario Planning",
      "Model Management",
      "A/B Testing",
      "Performance Monitoring",
      "Custom Algorithms",
    ],
    icon: <Brain className="w-8 h-8" />,
    category: "Predictive Analytics",
    popular: false,
    rating: 4.7,
    users: "1,800+",
    color: "from-purple-500 to-pink-600",
    capabilities: [
      "95% prediction accuracy",
      "Real-time forecasting",
      "Custom model training",
      "Automated insights",
    ],
  },
  {
    id: 4,
    name: "Data Visualization Studio",
    description: "Create stunning interactive visualizations and infographics",
    price: "$1,999/month",
    features: [
      "Interactive Charts",
      "Custom Visualizations",
      "Animation Effects",
      "Export Options",
      "Template Library",
      "Collaboration Tools",
      "Version Control",
      "Mobile Responsive",
    ],
    icon: <PieChart className="w-8 h-8" />,
    category: "Visualization",
    popular: false,
    rating: 4.6,
    users: "1,200+",
    color: "from-orange-500 to-red-600",
    capabilities: [
      "50+ chart types",
      "Real-time updates",
      "Interactive features",
      "Professional templates",
    ],
  },
  {
    id: 5,
    name: "Data Integration Hub",
    description: "Seamlessly connect and integrate data from multiple sources",
    price: "$2,499/month",
    features: [
      "API Integration",
      "Database Connectors",
      "Cloud Integration",
      "Real-time Sync",
      "Data Transformation",
      "Error Handling",
      "Monitoring Tools",
      "Custom Connectors",
    ],
    icon: <Cloud className="w-8 h-8" />,
    category: "Integration",
    popular: false,
    rating: 4.8,
    users: "1,600+",
    color: "from-indigo-500 to-blue-600",
    capabilities: [
      "100+ data sources",
      "Real-time processing",
      "Automated mapping",
      "Error recovery",
    ],
  },
  {
    id: 6,
    name: "Self-Service Analytics",
    description:
      "Empower business users with self-service data exploration tools",
    price: "$1,799/month",
    features: [
      "Drag & Drop Interface",
      "Natural Language Queries",
      "Data Discovery",
      "Collaborative Workspace",
      "Template Library",
      "User Management",
      "Access Controls",
      "Training Resources",
    ],
    icon: <Users className="w-8 h-8" />,
    category: "Self-Service",
    popular: true,
    rating: 4.7,
    users: "2,500+",
    color: "from-teal-500 to-cyan-600",
    capabilities: [
      "No-code analytics",
      "Business user friendly",
      "Collaborative features",
      "Guided workflows",
    ],
  },
];

const categories = [
  "All",
  "Analytics",
  "Business Intelligence",
  "Predictive Analytics",
  "Visualization",
  "Integration",
  "Self-Service",
];

const BusinessIntelligencePage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = React.useState("All");
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredServices = biServices.filter((service) => {
    const matchesCategory =
      selectedCategory === "All" || service.category === selectedCategory;
    const matchesSearch =
      service.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      service.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <Helmet>
        <title>Business Intelligence | Zion Tech Group</title>

      </Helmet>

      {/* Header */}
        
          </div><div className="relative overflow-hidden">
        
          </div><div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20">
        
          </div><div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
          </div><div className="text-center">
          <h$1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Business Intelligence Services
            </h1>
          
          </div><p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your data into strategic insights that drive business
              growth. Make informed decisions with our comprehensive BI
              solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                Get Free Consultation
              </Link>

                Learn More
              </Link>
        </div>
      </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
          </div><div className="flex flex-col md:flex-row gap-6 mb-12">
        
          </div><div className="flex-1">
        
          </div><div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        
          </div><div className="flex flex-wrap gap-2">

                {category}
              </button>
            ))}
        </div>
      </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
          </div><div className="flex items-center justify-between mb-6">

                  {service.icon}
                </div>
                {service.popular && (
                  <span className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Popular
                  </span>
                )}
          <h$1 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {service.name}
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              <div className="space-y-4 mb-6">
        
          </div><div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">
                    {service.price}
                  </span>
        
          </div><div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-gray-300">{service.rating}</span>
                    <span className="text-gray-500">({service.users})</span>
        
          </div><div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span className="flex items-center">
                    <Users className="w-4 h-4 mr-1" />
                    {service.users} users
                  </span>
                  <span className="flex items-center">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    {service.category}
                  </span>
        
          </div><div className="space-y-3 mb-6">
          <h$1 className="font-semibold text-white">Key Features:</h4>
            
          </div><ul className="space-y-2">

                      <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
        <div className="space-y-3 mb-8">
          <h$1 className="font-semibold text-white">Capabilities:</h4>
        
          </div><div className="flex flex-wrap gap-2">

                      {capability}
                    </span>
                  ))}
        
          </div><div className="flex space-x-3">

                  Get Started
                </Link>
                <button className="px-4 py-3 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-all duration-300">
                  <Eye className="w-5 h-5" />
                </button>
        </div>
      </div>
          ))}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <Search className="w-16 h-16 text-gray-400 mx-auto mb-4" />
          <h$1 className="text-xl font-semibold text-white mb-2">
              No services found
            </h3>
          
          </div><p className="text-gray-400">
              Try adjusting your search or filter criteria
            </p>
          </div>
        )}
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 border-t border-white/10">
        
          </div><div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
          </div><div className="text-center">
          <h$1 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Data into Insights?
            </h2>
          
          </div><p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of businesses who have unlocked the power of their
              data with our comprehensive BI solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">

                Start Your BI Journey
              </Link>

                Schedule a Demo
              </Link>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessIntelligencePage;
