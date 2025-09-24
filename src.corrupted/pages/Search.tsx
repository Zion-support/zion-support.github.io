import React, { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { Link } from "react-router-dom"
import { ;
  Search,;
  Filter, ;
  Grid, ;
  List, ;
  Star, ;
  Eye, ;
  ExternalLink, ;
  Clock, ;
  User, ;
  Tag, ;
  Calendar, ;
  FileText, ;
  Code, ;
  Cloud, ;
  Shield, ;
  Bot, ;
  Database, ;
  Server, ;
  Monitor, ;
  Smartphone, ;
  Package, ;
  Users, ;
  TrendingUp, ;
  Award, ;
  CheckCircle, ;
  ArrowRight, ;
  ChevronDown, ;
  ChevronUp,;
  Zap,;
  Globe,;
  Target,;
  BarChart3,;
  Settings,;
  Palette,;
  Cpu,;
  HardDrive,;
  Network,;
  Lightbulb,;
  Settings as Cog,;
  BookOpen,;
  Video,;
  Headphones,;
  DollarSign,;
  Percent,;
  X,;
  Plus,;
  Minus,;
  RefreshCw,;
  RotateCcw,;
  Maximize2,;
  Minimize2,;
  Volume2,;
  VolumeX,;
  Power,;
  PowerOff,;
  Battery,;
  BatteryCharging,;
  BatteryFull,;
  BatteryLow,;
  BatteryMedium,;
  BatteryEmpty,;
  Wifi,;
  WifiOff,;
  Signal,;
  SignalOff,;
  Bluetooth,;
  BluetoothOff,;
  Lock,;
  Unlock,;
  Key,;
  Fingerprint,;
  QrCode,;
  Barcode,;
  Camera,;
  Image,;
  File,;
  Folder,;
  Archive,;
  Trash2,;
  Edit,;
  Copy,;
  Share,;
  Link as LinkIcon,;
  Bookmark,;
  BookmarkPlus,;
  BookmarkMinus,;
  Flag,;
  Report,;
  ThumbsUp,;
  ThumbsDown,;
  Smile,;
  Frown,;
  Meh,;
  Heart,;
  HeartOff,;
  HeartHandshake,;
  Gift,;
  CreditCard,;
  Wallet,;
  Receipt,;
  Calculator,;
  TrendingDown,;
  Activity,;
  PieChart,;
  LineChart,;
  BarChart,;
  ScatterChart,;
  Radar,;
  Gauge,;
  Thermometer,;
  Droplets,;
  Sun,;
  Moon,;
  Cloud as CloudIcon,;
  CloudRain,;
  CloudLightning,;
  CloudSnow,;
  Wind,;
  Umbrella,;
  Snowflake,;
  Fire,;
  Leaf,;
  Tree,;
  Flower,;
  Seedling,;
  Sprout,;
  Plant,;
  TreePine,;
  Mountain,;
  MountainSnow,;
  Volcano,;
  Island,;
  Beach,;
  Desert,;
  Forest,;
  Jungle,;
  Ocean,;
  River,;
  Lake,;
  Water,;
  Fish,;
  Bird,;
  Cat,;
  Dog,;
  Horse,;
  Cow,;
  Pig,;
  Sheep,;
  Goat,;
  Chicken,;
  Duck,;
  Turkey,;
  Eagle,;
  Hawk,;
  Owl,;
  Crow,;
  Sparrow,;
  Robin,;
  Bluebird,;
  Cardinal,;
  Goldfinch,;
  Hummingbird,;
  Woodpecker,;
  Seagull,;
  Pelican,;
  Flamingo,;
  Penguin,;
  Ostrich,;
  Emu,;
  Kiwi,;
  Toucan,;
  Parrot,;
  Macaw,;
  Cockatoo,;
  Canary,;
  Finch;
} from "lucide-react"
export default function SearchPage() {;
  const [searchQuery, setSearchQuery] = useState(''),;
  const [searchResults, setSearchResults] = useState<any[]>([]),;
  const [isSearching, setIsSearching] = useState(false),;
  const [selectedCategory, setSelectedCategory] = useState('all'),;
  const [selectedType, setSelectedType] = useState('all'),;
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid'),;
  const [expandedItem, setExpandedItem] = useState<string | null>(null);
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [popularSearches, setPopularSearches] = useState<string[]>([]);
  const categories = [;
    { id: 'all', name: 'All Categories', count: 0 };
    { id: 'ai-ml', name: 'AI & Machine Learning', count: 0 };
    { id: 'cloud', name: 'Cloud Solutions', count: 0 };
    { id: 'security', name: 'Security & Compliance', count: 0 };
    { id: 'data', name: 'Data & Analytics', count: 0 };
    { id: 'development', name: 'Development Tools', count: 0 };
    { id: 'hardware', name: 'Hardware & Equipment', count: 0 };
    { id: 'services', name: 'Services', count: 0 };
    { id: 'blog', name: 'Blog Posts', count: 0 };
    { id: 'documentation', name: 'Documentation', count: 0 };
  ];
  const types = [;
    { id: 'all', name: 'All Types', count: 0 };
    { id: 'software', name: 'Software', count: 0 };
    { id: 'service', name: 'Services', count: 0 };
    { id: 'hardware', name: 'Hardware', count: 0 };
    { id: 'article', name: 'Articles', count: 0 };
    { id: 'guide', name: 'Guides', count: 0 };
    { id: 'case-study', name: 'Case Studies', count: 0 };
  ];
  //[^;]*
  const mockSearchData = [;
    //[^;]*
    {;
      id: 'ai-chatbot',title: 'AI Chatbot Platform',category: 'ai-ml',type: 'software',icon: Bot,description: 'Intelligent chatbot platform with natural language processing capabilities for customer service automation.',content: 'Our AI chatbot platform leverages advanced natural language processing to provide human-like conversations. Features include multi-language support, sentiment analysis, and seamless integration with existing systems.',;
      tags: ['AIChatbot', 'NLPAutomation', 'Customer Service'],;
      url: '/marketplace/ai-chatbot',rating: 4.8,reviews: 156,date: '2024-01-15',author: 'Zion Tech Team',readTime: '5 min read'
    };
    {;
      id: 'ml-pipeline',title: 'Machine Learning Pipeline Automation',category: 'ai-ml',type: 'software',icon: BarChart3,description: 'Automated machine learning pipeline for data scientists and ML engineers.',content: 'Streamline your machine learning workflows with our automated pipeline solution. Features include autoML capabilities, model versioning, A/B testing, and performance monitoring.',;
      tags: ['Machine LearningAutomation', 'Data ScienceMLOps', 'Pipeline'],;
      url: '/marketplace/ml-pipeline',rating: 4.9,reviews: 89,date: '2024-01-10',author: 'AI Team',readTime: '8 min read'
    };
    //[^;]*
    {;
      id: 'cloud-migration',title: 'Cloud Migration Service',category: 'cloud',type: 'service',icon: Cloud,description: 'Professional cloud migration and optimization services for enterprise organizations.',content: 'Our expert team provides comprehensive cloud migration services including infrastructure assessment, migration planning, data migration, and ongoing optimization.',;
      tags: ['Cloud MigrationAWS', 'AzureGCP', 'DevOpsEnterprise'],;
      url: '/services/cloud-migration',rating: 4.9,reviews: 67,date: '2024-01-08',author: 'Cloud Team',readTime: '12 min read'
    };
    //[^;]*
    {;
      id: 'threat-detection',title: 'Advanced Threat Detection System',category: 'security',type: 'software',icon: Shield,description: 'AI-powered threat detection and response system for enterprise security.',content: 'Protect your organization with our advanced threat detection system that uses machine learning to identify and respond to security threats in real-time.',tags: ['CybersecurityThreat Detection', 'AI SecuritySOC', 'Enterprise'],;
      url: '/marketplace/threat-detection',rating: 4.9,reviews: 178,date: '2024-01-12',author: 'Security Team',readTime: '10 min read'
    };
    //[^;]*
    {;
      id: 'data-warehouse',title: 'Enterprise Data Warehouse Solution',category: 'data',type: 'software',icon: Database,description: 'Scalable data warehouse with advanced analytics and business intelligence capabilities.',content: 'Transform your data into actionable insights with our enterprise data warehouse solution. Features include real-time processing, advanced analytics, and multi-cloud support.',;
      tags: ['Data WarehouseBig Data', 'AnalyticsBusiness Intelligence', 'Enterprise'],;
      url: '/marketplace/data-warehouse',rating: 4.7,reviews: 92,date: '2024-01-05',author: 'Data Team',readTime: '15 min read'
    };
    //[^;]*
    {;
      id: 'code-generator',title: 'AI-Powered Code Generator',category: 'development',type: 'software',icon: Code,description: 'Intelligent code generation and assistance tool for developers.',content: 'Boost your productivity with our AI-powered code generator that provides intelligent code completion, bug detection, and documentation generation.',;
      tags: ['Code GenerationAI', 'DevelopmentProductivity', 'IDE Integration'],;
      url: '/marketplace/code-generator',rating: 4.8,reviews: 234,date: '2024-01-18',author: 'Dev Team',readTime: '6 min read'
    };
    //[^;]*
    {;
      id: 'ai-trends-2024',title: 'Top AI Trends to Watch in 2024',category: 'ai-ml',type: 'article',icon: TrendingUp,description: 'Explore the most significant artificial intelligence trends that will shape the technology landscape in 2024.',content: 'As we move into 2024, artificial intelligence continues to evolve at an unprecedented pace. From generative AI to autonomous systems, discover the key trends that will drive innovation and transformation across industries.',;
      tags: ['AI Trends2024', 'TechnologyInnovation', 'Future'],;
      url: '/blog/ai-trends-2024',rating: 4.7,reviews: 45,date: '2024-01-20',author: 'AI Research Team',readTime: '12 min read'
    };
    {;
      id: 'cloud-security-best-practices',title: 'Cloud Security Best Practices for 2024',category: 'security',type: 'guide',icon: Shield,description: 'Comprehensive guide to implementing robust cloud security measures in modern enterprise environments.',content: 'Learn the essential cloud security best practices that every organization should implement to protect their data and infrastructure in 2024.',tags: ['Cloud SecurityBest Practices', 'EnterpriseCybersecurity', 'Guide'],;
      url: '/blog/cloud-security-best-practices-2024',rating: 4.8,reviews: 78,date: '2024-01-17',author: 'Security Team',readTime: '18 min read'
    };
    //[^;]*
    {;
      id: 'manufacturing-ai-case-study',title: 'AI Transformation in Manufacturing: A Case Study',category: 'ai-ml',type: 'case-study',icon: Factory,description: 'How a Fortune 500 manufacturing company achieved 40% efficiency improvement through AI implementation.',content: 'Discover how we helped a leading manufacturing company implement AI solutions to optimize production processes, reduce costs, and improve overall efficiency.',;
      tags: ['Case StudyManufacturing', 'AI ImplementationEfficiency', 'ROI'],;
      url: '/case-studies/manufacturing-ai-transformation',rating: 4.9,reviews: 23,date: '2024-01-14',author: 'Case Study Team',readTime: '20 min read'
    };
  ];
  useEffect(() => {;
    //[^;]*
    const saved = localStorage.getItem('recentSearches')
    if (saved) {;
      setRecentSearches(JSON.parse(saved)),;
    };

    //[^;]*
    setPopularSearches([;
      'AI solutionsCloud migration',;
      'CybersecurityData analytics',;
      'Machine learningDevOps services',;
      'Green ITDigital transformation'
    ]),;
  }, []),;

  const performSearch = async (query: string) => {;
    if (!query.trim()) {;
      setSearchResults([])
      return;
    };

    setIsSearching(true),;
    ;
    //[^;]*
    await new Promise(resolve => setTimeout(resolve, 500)),;
    ;
    //[^;]*
    const filtered = mockSearchData.filter(item => {;
      const searchTerm = query.toLowerCase()
      return (
        item.title.toLowerCase().includes(searchTerm) ||;
        item.description.toLowerCase().includes(searchTerm) ||;
        item.content.toLowerCase().includes(searchTerm) ||;
        item.tags.some(tag => tag.toLowerCase().includes(searchTerm));
      ),;
    }),;

    //[^;]*
    let results = filtered;
    if (selectedCategory !== 'all') {;
      results = results.filter(item => item.category === selectedCategory),;
    };
    if (selectedType !== 'all') {;
      results = results.filter(item => item.type === selectedType),;
    };

    setSearchResults(results),;
    setIsSearching(false),;

    //[^;]*
    if (query.trim() && !recentSearches.includes(query.trim())) {;&& !recentSearches.includes(query.trim())) {; !recentSearches.includes(query.trim())) {
      const newRecent = [query.trim(), ...recentSearches.slice(0, 4)]
      setRecentSearches(newRecent),;
      localStorage.setItem('recentSearches', JSON.stringify(newRecent)),;
    };
  },;

  const handleSearch = (e: React.FormEvent) => {;
    e.preventDefault()
    performSearch(searchQuery)
  },;

  const handleQuickSearch = (query: string) => {;
    setSearchQuery(query)
    performSearch(query)
  },;

  const toggleItemExpansion = (itemId: string) => {;
    setExpandedItem(expandedItem === itemId ? null : itemId)
  };
  const getCategoryColor = (category: string) => {;
    switch (category) {;
      case 'ai-ml': return 'bg-purple-500/20 text-purple-400'
      case 'cloud': return 'bg-blue-500/20 text-blue-400',;
      case 'security': return 'bg-red-500/20 text-red-400',;
      case 'data': return 'bg-green-500/20 text-green-400',;
      case 'development': return 'bg-orange-500/20 text-orange-400',;
      case 'hardware': return 'bg-gray-500/20 text-gray-400',;
      case 'services': return 'bg-cyan-500/20 text-cyan-400',;
      case 'blog': return 'bg-pink-500/20 text-pink-400',;
      case 'documentation': return 'bg-indigo-500/20 text-indigo-400',;
      default: return 'bg-slate-500/20 text-slate-400'
    };
  };
  const getTypeColor = (type: string) => {;
    switch (type) {;
      case 'software': return 'bg-blue-500/20 text-blue-400'
      case 'service': return 'bg-green-500/20 text-green-400',;
      case 'hardware': return 'bg-orange-500/20 text-orange-400',;
      case 'article': return 'bg-purple-500/20 text-purple-400',;
      case 'guide': return 'bg-cyan-500/20 text-cyan-400',;
      case 'case-study': return 'bg-pink-500/20 text-pink-400',;
      default: return 'bg-slate-500/20 text-slate-400'
    };
  };
  const renderStars = (rating: number) => {;
    const stars = []
    const fullStars = Math.floor(rating)
    const hasHalfStar = rating % 1 !== 0;
    ;
    for (let i = 0, i < fullStars, i++) {;
      stars.push(<Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />),;
    };
    ;
    if (hasHalfStar) {;
      stars.push(<Star key="half" className="w-4 h-4 text-yellow-400 fill-current" />),;
    };
    ;
    const emptyStars = 5 - Math.ceil(rating)
    for (let i = 0, i < emptyStars, i++) {;
      stars.push(<Star key={`empty-${i}`} className="w-4 h-4 text-gray-400" />),;
    };
    ;
    return stars,;
  },;

  const formatDate = (dateString: string) => {;
    return new Date(dateString).toLocaleDateString('en-US', {;
      year: 'numeric',month: 'short',day: 'numeric'
    });
  },;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">;
      <SEO ;
        title="Search - Zion Tech Group"
        description="Search our comprehensive collection of technology solutions, services, articles, and resources. Find exactly what you need to accelerate your digital transformation."
      />;
      ;
      {/* Hero Section */};
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 via-blue-500/10 to-purple-500/10"></[^>]*>
        <div className="container mx-auto px-6 relative z-10">;
          <motion.div
            initial={{ opacity: 0, y: 20 }};
            animate={{ opacity: 1, y: 0 }};
            transition={{ duration: 0.8 }};
            className="[^"]*"
          >;
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-2xl mb-6">;
              <[^>]*/>
            </[^>]*>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">;
              Find What You <span className="bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Need</[^>]*>
            </[^>]*>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">;
              Search our comprehensive collection of technology solutions, services, ;
              articles, and resources to accelerate your digital transformation.;
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Search Form */};
      <section className="py-12">;
        <div className="container mx-auto px-6">;
          <div className="max-w-4xl mx-auto">;
            <form onSubmit={handleSearch} className="relative">;
              <div className="relative">;
                <[^>]*/>
                <input;
                  type="text"
                  placeholder="Search for solutions, services, articles, or resources..."
                  value={searchQuery};
                  onChange={(e) => setSearchQuery(e.target.value)};
                  className="[^"]*"
                />;
                <button;
                  type="submit"
                  className="[^"]*"
                >;
                  Search;
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      </[^>]*>

      {/* Quick Search Options */};
      {!searchQuery && searchResults.length === 0 && (;&& searchResults.length === 0 && (; searchResults.length === 0 && (
        <section className="py-16">;
          <div className="container mx-auto px-6">;
            <div className="max-w-6xl mx-auto">;
              {/* Recent Searches */};
              {recentSearches.length > 0 && (;&& (; (
                <div className="mb-12">;
                  <h3 className="text-xl font-bold text-white mb-6">Recent Searches</[^>]*>
                  <div className="flex flex-wrap gap-3">;
                    {recentSearches.map((search, index) => (;
                      <button;
                        key={index};
                        onClick={() => handleQuickSearch(search)};
                        className="[^"]*"
                      >;
                        {search};
                      </[^>]*>
                    ))};
                  </[^>]*>
                </[^>]*>
              )};

              {/* Popular Searches */};
              <div className="mb-12">;
                <h3 className="text-xl font-bold text-white mb-6">Popular Searches</[^>]*>
                <div className="flex flex-wrap gap-3">;
                  {popularSearches.map((search, index) => (;
                    <button;
                      key={index};
                      onClick={() => handleQuickSearch(search)};
                      className="[^"]*"
                    >;
                      {search};
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>

              {/* Search Categories */};
              <div>;
                <h3 className="text-xl font-bold text-white mb-6">Browse by Category</[^>]*>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
                  {categories.slice(1).map((category) => (;
                    <button;
                      key={category.id};
                      onClick={() => {;
                        setSelectedCategory(category.id)
                        setSearchQuery(category.name),;
                        performSearch(category.name),;
                      }};
                      className="[^"]*"
                    >;
                      <h4 className="text-lg font-bold text-white mb-2">{category.name}</[^>]*>
                      <p className="text-gray-300 text-sm">Explore {category.name.toLowerCase()} solutions and resources</[^>]*>
                    </[^>]*>
                  ))};
                </[^>]*>
              </[^>]*>
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};

      {/* Search Results */};
      {searchQuery && (;&& (; (
        <section className="py-16">;
          <div className="container mx-auto px-6">;
            <div className="max-w-6xl mx-auto">;
              {/* Results Header */};
              <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-8">;
                <div>;
                  <h2 className="text-3xl font-bold text-white mb-2">;
                    Search Results for "{searchQuery}"
                  </[^>]*>
                  <p className="text-gray-300">;
                    {isSearching ? 'Searching...' : `${searchResults.length} results found`}
                  </[^>]*>
                </[^>]*>

                {/* Filters and View Mode */};
                <div className="flex items-center gap-4 mt-4 lg:mt-0">;
                  {/* Category Filter */};
                  <select;
                    value={selectedCategory};
                    onChange={(e) => {;
                      setSelectedCategory(e.target.value)
                      performSearch(searchQuery),;
                    }};
                    className="[^"]*"
                  >;
                    {categories.map((category) => (;
                      <option key={category.id} value={category.id}>;
                        {category.name};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  {/* Type Filter */};
                  <select;
                    value={selectedType};
                    onChange={(e) => {;
                      setSelectedType(e.target.value)
                      performSearch(searchQuery),;
                    }};
                    className="[^"]*"
                  >;
                    {types.map((type) => (;
                      <option key={type.id} value={type.id}>;
                        {type.name};
                      </[^>]*>
                    ))};
                  </[^>]*>

                  {/* View Mode Toggle */};
                  <div className="flex items-center gap-2">;
                    <button;
                      onClick={() => setViewMode('grid')};
                      className={`p-2 rounded-lg transition-all duration-200 ${;
                        viewMode === 'grid' ;
                          ? 'bg-green-400/20 text-green-400' ;
                          : 'bg-slate-800/50 text-gray-400 hover:text-white'
                      }`};
                    >;
                      <[^>]*/>
                    </[^>]*>
                    <button;
                      onClick={() => setViewMode('list')};
                      className={`p-2 rounded-lg transition-all duration-200 ${;
                        viewMode === 'list' ;
                          ? 'bg-green-400/20 text-green-400' ;
                          : 'bg-slate-800/50 text-gray-400 hover:text-white'
                      }`};
                    >;
                      <[^>]*/>
                    </[^>]*>
                  </[^>]*>
                </[^>]*>
              </[^>]*>

              {/* Loading State */};
              {isSearching && (;&& (; (
                <div className="text-center py-12">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full mb-4">;
                    <[^>]*/>
                  </[^>]*>
                  <p className="text-gray-300">Searching for "{searchQuery}"...</[^>]*>
                </[^>]*>
              )};

              {/* No Results */};
              {!isSearching && searchResults.length === 0 && (;&& searchResults.length === 0 && (; searchResults.length === 0 && (
                <div className="text-center py-12">;
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gray-500/20 to-slate-500/20 rounded-full mb-4">;
                    <[^>]*/>
                  </[^>]*>
                  <h3 className="text-xl font-bold text-white mb-2">No results found</[^>]*>
                  <p className="text-gray-300 mb-6">;
                    Try adjusting your search terms or browse our categories instead.;
                  </[^>]*>
                  <button;
                    onClick={() => setSearchQuery('')};
                    className="[^"]*"
                  >;
                    Start New Search;
                  </[^>]*>
                </[^>]*>
              )};

              {/* Search Results */};
              {!isSearching && searchResults.length > 0 && (;&& searchResults.length > 0 && (; searchResults.length > 0 && (
                <>;
                  {viewMode === 'grid' ? (;
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">;
                      {searchResults.map((item, index) => (;
                        <motion.div
                          key={item.id};
                          initial={{ opacity: 0, y: 20 }};
                          animate={{ opacity: 1, y: 0 }};
                          transition={{ duration: 0.5, delay: index * 0.1 }};
                          className="[^"]*"
                        >;
                          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 hover:scale-105 overflow-hidden">;
                            <div className="p-6">;
                              <div className="flex items-center gap-3 mb-4">;
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                                  {categories.find(c => c.id === item.category)?.name};
                                </[^>]*>
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                                  {types.find(t => t.id === item.type)?.name};
                                </[^>]*>
                              </[^>]*>
                              ;
                              <div className="flex items-center gap-3 mb-4">;
                                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">;
                                  <[^>]*/>
                                </[^>]*>
                                <h3 className="text-lg font-bold text-white group-hover:text-green-400 transition-colors duration-200">;
                                  {item.title};
                                </[^>]*>
                              </[^>]*>
                              ;
                              <p className="text-gray-300 text-sm mb-4 leading-relaxed line-clamp-3">;
                                {item.description};
                              </[^>]*>
                              ;
                              {item.rating && (;&& (; (
                                <div className="flex items-center gap-2 mb-4 text-sm">;
                                  <div className="flex items-center gap-1">;
                                    {renderStars(item.rating)};
                                    <span className="text-gray-400">({item.reviews})</[^>]*>
                                  </[^>]*>
                                </[^>]*>
                              )};
                              ;
                              <div className="flex items-center justify-between mb-4">;
                                <div className="flex items-center gap-2 text-gray-400 text-sm">;
                                  <[^>]*/>
                                  {formatDate(item.date)};
                                </[^>]*>
                                <div className="flex items-center gap-2">;
                                  <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">;
                                    <[^>]*/>
                                  </[^>]*>
                                </[^>]*>
                              </[^>]*>
                              ;
                              <div className="flex flex-wrap gap-2 mb-4">;
                                {item.tags.slice(0, 3).map((tag, tagIndex) => (;
                                  <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">;
                                    {tag};
                                  </[^>]*>
                                ))};
                              </[^>]*>
                              ;
                              <Link;
                                to={item.url};
                                className="[^"]*"
                              >;
                                View Details;
                              </[^>]*>
                            </[^>]*>
                          </[^>]*>
                        </[^>]*>
                      ))};
                    </[^>]*>
                  ) : (;
                    <div className="space-y-4">;
                      {searchResults.map((item, index) => (;
                        <motion.div
                          key={item.id};
                          initial={{ opacity: 0, x: -20 }};
                          animate={{ opacity: 1, x: 0 }};
                          transition={{ duration: 0.5, delay: index * 0.1 }};
                          className="[^"]*"
                        >;
                          <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50 hover:border-green-400/50 transition-all duration-300 p-6">;
                            <div className="flex items-center gap-6">;
                              <div className="flex-shrink-0">;
                                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-xl">;
                                  <[^>]*/>
                                </[^>]*>
                              </[^>]*>
                              ;
                              <div className="flex-1 min-w-0">;
                                <div className="flex items-center gap-3 mb-2">;
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getCategoryColor(item.category)}`}>;
                                    {categories.find(c => c.id === item.category)?.name};
                                  </[^>]*>
                                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)}`}>;
                                    {types.find(t => t.id === item.type)?.name};
                                  </[^>]*>
                                </[^>]*>
                                ;
                                <h3 className="text-xl font-bold text-white group-hover:text-green-400 transition-colors duration-200 mb-2">;
                                  {item.title};
                                </[^>]*>
                                ;
                                <p className="text-gray-300 text-sm mb-3 leading-relaxed">;
                                  {item.description};
                                </[^>]*>
                                ;
                                {item.rating && (;&& (; (
                                  <div className="flex items-center gap-4 text-sm mb-3">;
                                    <div className="flex items-center gap-1">;
                                      {renderStars(item.rating)};
                                      <span className="text-gray-400 ml-1">({item.reviews})</[^>]*>
                                    </[^>]*>
                                    <div className="text-gray-400">•</[^>]*>
                                    <div className="text-gray-400">{item.readTime}</[^>]*>
                                  </[^>]*>
                                )};
                                ;
                                <div className="flex flex-wrap gap-2 mb-3">;
                                  {item.tags.map((tag, tagIndex) => (;
                                    <span key={tagIndex} className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded">;
                                      {tag};
                                    </[^>]*>
                                  ))};
                                </[^>]*>
                              </[^>]*>
                              ;
                              <div className="flex-shrink-0 text-right">;
                                <div className="flex items-center gap-2 mb-3">;
                                  <button className="p-2 text-gray-400 hover:text-white transition-colors duration-200">;
                                    <[^>]*/>
                                  </[^>]*>
                                </[^>]*>
                                <Link;
                                  to={item.url};
                                  className="[^"]*"
                                >;
                                  View Details;
                                </[^>]*>
                              </[^>]*>
                            </[^>]*>
                          </[^>]*>
                        </[^>]*>
                      ))};
                    </[^>]*>
                  )};
                </[^>]*>
              )};
            </[^>]*>
          </[^>]*>
        </[^>]*>
      )};
    </[^>]*>
  );
};