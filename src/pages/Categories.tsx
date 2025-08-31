import React, { useState } from 'react';
import { motion } from 'framer-motion';
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
  ChevronDown,
  ChevronUp,
  Heart,
  Share2,
  Bookmark,
  MessageCircle,
  Phone,
  Mail,
  MapPin as MapPinIcon,
  Navigation,
  Compass,
  Home,
  ShoppingCart,
  CreditCard,
  Wallet,
  Receipt,
  Calculator,
  TrendingDown,
  MinusCircle,
  PlusCircle,
  AlertCircle,
  AlertTriangle,
  Info,
  HelpCircle,
  CheckSquare,
  Square,
  Radio,
  ToggleLeft,
  ToggleRight,
  Sliders,
  SlidersHorizontal,
  Volume1,
  Volume3,
  Mic,
  MicOff,
  Headphones,
  Speaker,
  SpeakerOff,
  Play as PlayIcon,
  Pause,
  SkipBack,
  SkipForward,
  Rewind,
  FastForward,
  Shuffle,
  Repeat,
  Repeat1,
  Shuffle as ShuffleIcon,
  SkipBack as SkipBackIcon,
  SkipForward as SkipForwardIcon,
  Rewind as RewindIcon,
  FastForward as FastForwardIcon,
  Repeat as RepeatIcon,
  Repeat1 as Repeat1Icon,
  Shuffle as ShuffleIcon2,
  SkipBack as SkipBackIcon2,
  SkipForward as SkipForwardIcon2,
  Rewind as RewindIcon2,
  FastForward as FastForwardIcon2,
  Repeat as RepeatIcon2,
  Repeat1 as Repeat1Icon2
} from 'lucide-react';

interface MainCategory {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  color: string;
  count: number;
}

interface SubCategory {
  name: string;
  description: string;
  icon: React.ComponentType<any>;
  services: number;
  talent: number;
  equipment: number;
}

export default function Categories() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [expandedSubCategory, setExpandedSubCategory] = useState<string | null>(null);

  const mainCategories: MainCategory[] = [
    {
      id: 'all',
      name: 'All Categories',
      icon: Globe,
      color: 'from-cyan-500 to-blue-500',
      count: 182
    },
    {
      id: 'ai-ml',
      name: 'AI & Machine Learning',
      icon: Brain,
      color: 'from-purple-500 to-pink-500',
      count: 45
    },
    {
      id: 'cloud',
      name: 'Cloud & Infrastructure',
      icon: Cloud,
      color: 'from-blue-500 to-cyan-500',
      count: 32
    },
    {
      id: 'cybersecurity',
      name: 'Cybersecurity',
      icon: Shield,
      color: 'from-red-500 to-orange-500',
      count: 28
    },
    {
      id: 'data',
      name: 'Data & Analytics',
      icon: BarChart3,
      color: 'from-green-500 to-emerald-500',
      count: 36
    },
    {
      id: 'development',
      name: 'Development',
      icon: Code,
      color: 'from-indigo-500 to-purple-500',
      count: 41
    }
  ];

  const subCategories: { [key: string]: SubCategory[] } = {
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
        name: 'Cloud Architecture',
        description: 'Scalable and resilient cloud infrastructure design',
        icon: Building,
        services: 14,
        talent: 9,
        equipment: 5
      },
      {
        name: 'DevOps & CI/CD',
        description: 'Automated deployment and continuous integration',
        icon: Zap,
        services: 18,
        talent: 12,
        equipment: 8
      },
      {
        name: 'Container Orchestration',
        description: 'Kubernetes, Docker, and microservices management',
        icon: Server,
        services: 16,
        talent: 10,
        equipment: 6
      }
    ],
    'cybersecurity': [
      {
        name: 'Threat Detection',
        description: 'Advanced threat detection and response systems',
        icon: Shield,
        services: 13,
        talent: 8,
        equipment: 4
      },
      {
        name: 'Security Auditing',
        description: 'Comprehensive security assessments and compliance',
        icon: Lock,
        services: 9,
        talent: 6,
        equipment: 2
      },
      {
        name: 'Incident Response',
        description: '24/7 security monitoring and incident management',
        icon: AlertTriangle,
        services: 11,
        talent: 7,
        equipment: 3
      },
      {
        name: 'Penetration Testing',
        description: 'Ethical hacking and vulnerability assessment',
        icon: Target,
        services: 7,
        talent: 5,
        equipment: 1
      }
    ],
    'data': [
      {
        name: 'Big Data Processing',
        description: 'Large-scale data processing and analytics',
        icon: Database,
        services: 15,
        talent: 10,
        equipment: 6
      },
      {
        name: 'Business Intelligence',
        description: 'Data visualization and business insights',
        icon: BarChart3,
        services: 12,
        talent: 8,
        equipment: 4
      },
      {
        name: 'Data Engineering',
        description: 'Data pipeline design and ETL processes',
        icon: Network,
        services: 18,
        talent: 12,
        equipment: 7
      },
      {
        name: 'Predictive Analytics',
        description: 'Machine learning-based forecasting and insights',
        icon: TrendingUp,
        services: 14,
        talent: 9,
        equipment: 5
      }
    ],
    'development': [
      {
        name: 'Web Development',
        description: 'Modern web applications and responsive design',
        icon: Code,
        services: 22,
        talent: 15,
        equipment: 8
      },
      {
        name: 'Mobile Development',
        description: 'iOS and Android mobile applications',
        icon: Smartphone,
        services: 19,
        talent: 12,
        equipment: 6
      },
      {
        name: 'API Development',
        description: 'RESTful APIs and microservices architecture',
        icon: Server,
        services: 16,
        talent: 10,
        equipment: 4
      },
      {
        name: 'Full-Stack Development',
        description: 'End-to-end application development',
        icon: Layers,
        services: 25,
        talent: 18,
        equipment: 10
      }
    ]
  };

  const toggleSubCategoryExpansion = (categoryName: string) => {
    setExpandedSubCategory(expandedSubCategory === categoryName ? null : categoryName);
  };

  const getCategoryColor = (categoryId: string) => {
    const category = mainCategories.find(cat => cat.id === categoryId);
    return category ? category.color : 'from-gray-500 to-gray-600';
  };

  const getCategoryIcon = (categoryId: string) => {
    const category = mainCategories.find(cat => cat.id === categoryId);
    return category ? category.icon : Globe;
  };

  return (
    <>
      <SEO 
        title="Service Categories - Zion Tech Group"
        description="Explore our comprehensive service categories including AI & Machine Learning, Cloud & Infrastructure, Cybersecurity, Data & Analytics, and Development."
        keywords="service categories, AI, cloud, cybersecurity, data analytics, development, Zion Tech Group"
      />
      
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
        {/* Header Section */}
        <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex justify-center mb-6">
                <div className="p-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                  <Globe className="w-16 h-16 text-white" />
                </div>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Service{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Categories
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto mb-8">
                Discover our comprehensive range of technology services organized by category. 
                From AI and machine learning to cybersecurity and development, we have the expertise you need.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Main Categories */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Explore Our Service Categories
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Browse through our organized service categories to find the perfect solution for your needs
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainCategories.map((category, index) => (
                <motion.div
                  key={category.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative group cursor-pointer ${
                    activeCategory === category.id ? 'ring-2 ring-cyan-400' : ''
                  }`}
                  onClick={() => setActiveCategory(category.id)}
                >
                  <div className={`bg-gradient-to-br ${category.color} p-8 rounded-xl text-white text-center transition-all duration-300 transform group-hover:scale-105 group-hover:shadow-2xl`}>
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-white/20 rounded-full">
                        <category.icon className="w-8 h-8" />
                      </div>
                    </div>
                    <h3 className="text-xl font-bold mb-2">{category.name}</h3>
                    <p className="text-white/80 mb-4">
                      {category.count} services available
                    </p>
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-sm">View Services</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Sub Categories */}
        {activeCategory !== 'all' && (
          <section className="py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-bold text-white mb-4">
                  {mainCategories.find(cat => cat.id === activeCategory)?.name} Services
                </h2>
                <p className="text-xl text-gray-300">
                  Explore our specialized services in this category
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {subCategories[activeCategory]?.map((subCategory, index) => (
                  <motion.div
                    key={subCategory.name}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:border-white/40 transition-all duration-300"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg">
                          <subCategory.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="text-xl font-bold text-white">{subCategory.name}</h3>
                      </div>
                      <button
                        onClick={() => toggleSubCategoryExpansion(subCategory.name)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        {expandedSubCategory === subCategory.name ? (
                          <ChevronUp className="w-5 h-5" />
                        ) : (
                          <ChevronDown className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    <p className="text-gray-300 mb-4">{subCategory.description}</p>

                    {/* Service Counts */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-cyan-400">{subCategory.services}</div>
                        <div className="text-sm text-gray-400">Services</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-blue-400">{subCategory.talent}</div>
                        <div className="text-sm text-gray-400">Experts</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-purple-400">{subCategory.equipment}</div>
                        <div className="text-sm text-gray-400">Tools</div>
                      </div>
                    </div>

                    {/* Expandable Content */}
                    {expandedSubCategory === subCategory.name && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-white/20 pt-4 mt-4"
                      >
                        <div className="space-y-3">
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Service Quality</span>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className={`w-4 h-4 ${i < 4 ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} />
                              ))}
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Response Time</span>
                            <span className="text-green-400 font-medium">24-48 hours</span>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="text-gray-300">Support Level</span>
                            <span className="text-blue-400 font-medium">24/7 Available</span>
                          </div>
                        </div>

                        <div className="mt-4 flex gap-2">
                          <button className="flex-1 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300">
                            View Details
                          </button>
                          <button className="px-4 py-2 border border-white/20 text-white rounded-lg hover:bg-white/10 transition-colors">
                            Contact
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Choose a category that matches your needs and explore our specialized services. 
                Our experts are ready to help you achieve your technology goals.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  Get a Quote
                </a>
                <a
                  href="/services"
                  className="border-2 border-white text-white font-semibold py-4 px-8 rounded-lg hover:bg-white hover:text-gray-900 transition-all duration-300"
                >
                  View All Services
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
