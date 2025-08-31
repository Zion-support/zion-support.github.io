import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import {
  Server,
  Users,
  Building,
  Database,
  Cloud,
  Shield,
  Brain,
  Zap,
  Globe,
  Cpu,
  Lock,
  BarChart3,
  Palette,
  Smartphone,
  Rocket,
  Target,
  Lightbulb,
  Code,
  Network,
  Eye,
  Star,
  ArrowRight,
  BarChart,
  PieChart,
  LineChart,
  Settings,
  Tool,
  Briefcase,
  Home,
  Car,
  Truck,
  Plane,
  Ship,
  Leaf,
  Gauge,
  ShieldAlert,
  UserCheck,
  Users2,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck2,
  UserClock,
  UserStar,
  UserHeart,
  UserShield,
  UserZap,
  TrendingUp,
  TrendingDown,
  UserPlus,
  UserMinus,
  UserX,
  UserCog,
  UserEdit,
  UserSearch,
  UserVoice,
  UserCheck,
  UserClock,
  UserStar,
  UserHeart
} from 'lucide-react';

interface Category {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  count: number;
  description: string;
}

interface SubCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  services: number;
  talent: number;
  equipment: number;
}

const Categories: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const mainCategories: Category[] = [
    {
      id: 'all',
      name: 'All Categories',
      icon: Globe,
      color: 'from-blue-500 to-cyan-500',
      count: 0,
      description: 'Explore all our technology categories and services'
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      count: 45,
      description: 'Advanced artificial intelligence and machine learning solutions'
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      count: 32,
      description: 'Cloud computing, infrastructure, and DevOps solutions'
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      count: 28,
      description: 'Security, compliance, and threat protection services'
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      count: 36,
      description: 'Data analytics, business intelligence, and insights'
    },
    {
      id: 'development',
      name: 'Development',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      count: 41,
      description: 'Software development, APIs, and technical solutions'
    },
    {
      id: 'iot',
      name: 'IoT & Edge Computing',
      icon: Network,
      color: 'from-yellow-500 to-orange-500',
      count: 24,
      description: 'Internet of Things and edge computing solutions'
    },
    {
      id: 'quantum',
      name: 'Quantum Computing',
      icon: Cpu,
      color: 'from-violet-500 to-purple-500',
      count: 12,
      description: 'Quantum computing and quantum-safe solutions'
    }
  ];

  const subCategories: Record<string, SubCategory[]> = {
    'ai-ml': [
      {
        name: 'Natural Language Processing',
        description: 'Text analysis, language models, and conversational AI',
        icon: Brain,
        services: 12,
        talent: 8,
        equipment: 3
      },
      {
        name: 'Computer Vision',
        description: 'Image recognition, object detection, and visual AI',
        icon: Eye,
        services: 9,
        talent: 6,
        equipment: 4
      },
      {
        name: 'Machine Learning Platforms',
        description: 'ML model training, deployment, and management',
        icon: Cpu,
        services: 15,
        talent: 12,
        equipment: 7
      },
      {
        name: 'AI Consulting',
        description: 'Strategic AI implementation and optimization',
        icon: Target,
        services: 8,
        talent: 5,
        equipment: 1
      }
    ],
    'cloud': [
      {
        name: 'Cloud Migration',
        description: 'Legacy system migration and cloud transformation',
        icon: Rocket,
        services: 11,
        talent: 7,
        equipment: 2
      },
      {
        name: 'DevOps & CI/CD',
        description: 'Automated deployment and continuous integration',
        icon: Code,
        services: 14,
        talent: 9,
        equipment: 3
      },
      {
        name: 'Container Orchestration',
        description: 'Kubernetes, Docker, and container management',
        icon: Server,
        services: 8,
        talent: 6,
        equipment: 4
      },
      {
        name: 'Serverless Computing',
        description: 'Function-as-a-Service and event-driven architecture',
        icon: Zap,
        services: 6,
        talent: 4,
        equipment: 1
      }
    ],
    'cybersecurity': [
      {
        name: 'Threat Detection',
        description: 'Advanced threat detection and response systems',
        icon: Shield,
        services: 10,
        talent: 8,
        equipment: 5
      },
      {
        name: 'Identity & Access Management',
        description: 'User authentication and authorization solutions',
        icon: Lock,
        services: 7,
        talent: 5,
        equipment: 2
      },
      {
        name: 'Compliance & Governance',
        description: 'Regulatory compliance and security governance',
        icon: UserCheck,
        services: 9,
        talent: 6,
        equipment: 1
      },
      {
        name: 'Penetration Testing',
        description: 'Security assessment and vulnerability testing',
        icon: Target,
        services: 5,
        talent: 4,
        equipment: 3
      }
    ],
    'data': [
      {
        name: 'Business Intelligence',
        description: 'Data visualization and reporting solutions',
        icon: BarChart3,
        services: 12,
        talent: 8,
        equipment: 4
      },
      {
        name: 'Big Data Processing',
        description: 'Large-scale data processing and analytics',
        icon: Database,
        services: 10,
        talent: 7,
        equipment: 6
      },
      {
        name: 'Data Warehousing',
        description: 'Data storage and management solutions',
        icon: Server,
        services: 8,
        talent: 5,
        equipment: 3
      },
      {
        name: 'Predictive Analytics',
        description: 'Machine learning for predictive insights',
        icon: UserTrendingUp,
        services: 9,
        talent: 6,
        equipment: 2
      }
    ],
    'development': [
      {
        name: 'Web Development',
        description: 'Frontend and backend web applications',
        icon: Code,
        services: 15,
        talent: 12,
        equipment: 3
      },
      {
        name: 'Mobile Development',
        description: 'iOS and Android mobile applications',
        icon: Smartphone,
        services: 11,
        talent: 9,
        equipment: 4
      },
      {
        name: 'API Development',
        description: 'RESTful APIs and microservices',
        icon: Network,
        services: 13,
        talent: 8,
        equipment: 2
      },
      {
        name: 'DevOps Engineering',
        description: 'Infrastructure automation and deployment',
        icon: Settings,
        services: 10,
        talent: 7,
        equipment: 5
      }
    ],
    'iot': [
      {
        name: 'IoT Platforms',
        description: 'Internet of Things device management',
        icon: Network,
        services: 8,
        talent: 6,
        equipment: 7
      },
      {
        name: 'Edge Computing',
        description: 'Distributed computing at the network edge',
        icon: Cpu,
        services: 6,
        talent: 4,
        equipment: 5
      },
      {
        name: 'Sensor Networks',
        description: 'Connected sensor systems and monitoring',
        icon: Gauge,
        services: 5,
        talent: 3,
        equipment: 8
      },
      {
        name: 'Smart Cities',
        description: 'Urban infrastructure and smart city solutions',
        icon: Building,
        services: 7,
        talent: 5,
        equipment: 4
      }
    ],
    'quantum': [
      {
        name: 'Quantum Algorithms',
        description: 'Quantum computing algorithms and applications',
        icon: Brain,
        services: 4,
        talent: 3,
        equipment: 2
      },
      {
        name: 'Quantum Security',
        description: 'Quantum-safe cryptography and security',
        icon: Shield,
        services: 3,
        talent: 2,
        equipment: 1
      },
      {
        name: 'Quantum Simulation',
        description: 'Quantum simulation and modeling',
        icon: Cpu,
        services: 2,
        talent: 2,
        equipment: 1
      },
      {
        name: 'Quantum Consulting',
        description: 'Quantum computing strategy and implementation',
        icon: Target,
        services: 3,
        talent: 2,
        equipment: 0
      }
    ]
  };

  const getCategoryStats = (categoryId: string) => {
    if (categoryId === 'all') {
      return {
        services: mainCategories.reduce((sum, cat) => sum + cat.count, 0),
        talent: mainCategories.reduce((sum, cat) => sum + cat.count * 0.7, 0),
        equipment: mainCategories.reduce((sum, cat) => sum + cat.count * 0.3, 0)
      };
    }
    
    const subs = subCategories[categoryId] || [];
    return {
      services: subs.reduce((sum, sub) => sum + sub.services, 0),
      talent: subs.reduce((sum, sub) => sum + sub.talent, 0),
      equipment: subs.reduce((sum, sub) => sum + sub.equipment, 0)
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO
        title="Service Categories - Zion Tech Group"
        description="Explore our comprehensive range of technology services across AI, cloud computing, cybersecurity, data analytics, and more."
        keywords="service categories, AI services, cloud computing, cybersecurity, data analytics, Zion Tech Group"
      />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Service Categories
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Explore our comprehensive range of technology services across multiple domains, 
              from AI and machine learning to cybersecurity and quantum computing.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12"
          >
            {mainCategories.map((category, index) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`p-6 rounded-2xl border transition-all duration-300 text-left ${
                  activeCategory === category.id
                    ? 'border-blue-500 bg-blue-500/10'
                    : 'border-slate-600/20 bg-slate-800/50 hover:border-slate-500/40'
                }`}
              >
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-xl flex items-center justify-center mb-4`}>
                  <category.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-400 text-sm mb-3">{category.description}</p>
                <div className="text-blue-400 text-sm font-medium">
                  {category.count} services
                </div>
              </button>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Category Details */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-7xl mx-auto">
          {activeCategory !== 'all' && subCategories[activeCategory] && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-center mb-12"
              >
                <h2 className="text-3xl font-bold text-white mb-4">
                  {mainCategories.find(c => c.id === activeCategory)?.name} Services
                </h2>
                <p className="text-gray-300 max-w-3xl mx-auto">
                  Discover our specialized services in {mainCategories.find(c => c.id === activeCategory)?.name.toLowerCase()}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {subCategories[activeCategory].map((subCategory, index) => (
                  <motion.div
                    key={subCategory.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-6 border border-slate-600/20 hover:border-slate-500/40 transition-all duration-300"
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <subCategory.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">{subCategory.name}</h3>
                        <p className="text-gray-300 text-sm">{subCategory.description}</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{subCategory.services}</div>
                        <div className="text-gray-400 text-sm">Services</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-green-400">{subCategory.talent}</div>
                        <div className="text-gray-400 text-sm">Experts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{subCategory.equipment}</div>
                        <div className="text-gray-400 text-sm">Tools</div>
                      </div>
                    </div>

                    <Link
                      to={`/services?category=${activeCategory}&subcategory=${subCategory.name.toLowerCase().replace(/\s+/g, '-')}`}
                      className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      Explore Services
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </>
          )}

          {/* Category Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="mt-16"
          >
            <div className="bg-slate-800/80 backdrop-blur-sm rounded-2xl p-8 border border-slate-600/20">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">
                {activeCategory === 'all' ? 'All Categories' : mainCategories.find(c => c.id === activeCategory)?.name} Overview
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {Object.entries(getCategoryStats(activeCategory)).map(([key, value]) => (
                  <div key={key} className="text-center">
                    <div className="text-4xl font-bold text-blue-400 mb-2">{Math.round(value)}</div>
                    <div className="text-gray-300 capitalize">{key}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-3xl p-8 text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Get Started?
            </h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Explore our services in detail or contact our team to discuss your specific needs 
              and find the perfect solution for your business.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/services"
                className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-xl transition-colors"
              >
                <ArrowRight className="w-5 h-5 mr-2" />
                Browse All Services
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-colors"
              >
                <Users className="w-5 h-5 mr-2" />
                Contact Our Team
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Categories;
