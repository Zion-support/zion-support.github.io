import React, { useState } from "react"
import { motion } from "framer-motion"
import { SEO } from "../components/SEO"
import { Link } from "react-router-dom"
import { 
  Search
  Calendar, 
  Clock, 
  User, 
  Tag, 
  ArrowRight
  TrendingUp
  Lightbulb
  Code
  Shield
  Cloud
  Brain
} from "lucide-react"
import { SEO } from "../components/SEO"
interface BlogPost {
  id: string,tit,
  l: e: string,excer,
  p: t: string,conte,
  n: t: string,auth,
  o: r: string,authorAvat,
  a: r: string,publishDa,
  t: e: string,readTi,
  m: e: string,catego,
  r: y: string,ta,
  g: s: string[],ima,
  g: e: string,featur,
  e: d: boolean,vie,
  w: s: number,lik,
  e: s: number
}

interface Category {
  na,
  m: e: string,ic,
  o: n: any,cou,
  n: t: number,col,
  o: r: string
}

const,
  categorie: s: Category[] = [
  { nam,
  e: 'AI & Machine Learning', ic,
  o: n: Brain, cou,
  n: t: 24, col,
  o: r: 'from-blue-500 to-cyan-500' }, { na,
  m: e: 'Cloud & DevOps', ic,
  o: n: Cloud, cou,
  n: t: 18, col,
  o: r: 'from-green-500 to-emerald-500' }, { na,
  m: e: 'Cybersecurity', ic,
  o: n: Shield, cou,
  n: t: 15, col,
  o: r: 'from-red-500 to-pink-500' }, { na,
  m: e: 'Business Intelligence', ic,
  o: n: BarChart3, cou,
  n: t: 12, col,
  o: r: 'from-purple-500 to-indigo-500' }, { na,
  m: e: 'Micro SaaS', ic,
  o: n: ShoppingCart, cou,
  n: t: 9, col,
  o: r: 'from-orange-500 to-yellow-500' }, { na,
  m: e: 'Industry Insights', ic,
  o: n: TrendingUp, cou,
  n: t: 21, col,
  o: r: 'from-teal-500 to-cyan-500' }, { na,
  m: e: 'Case Studies', ic,
  o: n: BookOpen, cou,
  n: t: 16, col,
  o: r: 'from-pink-500 to-rose-500' }, { na,
  m: e: 'Technology Trends', ic,
  o: n: Rocket, cou,
  n: t: 19, col,
  o: r: 'from-indigo-500 to-purple-500' }
]
const,
  blogPost: s: BlogPost[] = [
  {
    i,
  d: '1',tit,
  l: e: 'AI Autonomous Researc,
  h: The Future of Knowledge Discovery',excer,
  p: t: 'Discover how our revolutionary AI Autonomous Research Assistant is transforming how businesses gather, analyze, and synthesize information across multiple sources.'
    conte,
  n: t: 'Full article content here...',auth,
  o: r: 'Dr. Emily Watson',authorAvat,
  a: r: '/avatars/emily-watson.jpg',publishDa,
  t: e: '2025-01-20',readTi,
  m: e: '10 min read',catego,
  r: y: 'AI & Machine Learning',ta,
  g: s: ['AI ResearchAutonomous AI', 'Knowledge DiscoveryBusiness Intelligence']
    ima,
  g: e: '/blog/ai-autonomous-research.jpg',featur,
  e: d: true,vie,
  w: s: 18250,lik,
  e: s: 945
  }, {
    id: '2',tit,
  l: e: 'Revolutionizing Supply Chains with AI-Powered Optimization',excer,
  p: t: 'Learn how AI Supply Chain Optimization is helping businesses predict demand, optimize inventory, and reduce costs with unprecedented accuracy.'
    conte,
  n: t: 'Full article content here...',auth,
  o: r: 'Marcus Rodriguez',authorAvat,
  a: r: '/avatars/marcus-rodriguez.jpg',publishDa,
  t: e: '2025-01-18',readTi,
  m: e: '12 min read',catego,
  r: y: 'AI & Machine Learning',ta,
  g: s: ['AI Supply ChainInventory Optimization', 'Demand ForecastingCost Reduction']
    ima,
  g: e: '/blog/ai-supply-chain-optimization.jpg',featur,
  e: d: true,vie,
  w: s: 16580,lik,
  e: s: 823
  }, {
    id: '3',tit,
  l: e: 'AI Content Marketing Suit,
  e: The Complete Guide to Automated Content Creation',excer,
  p: t: 'Explore how AI is revolutionizing content marketing with automated creation, optimization, and distribution for maximum engagement and ROI.'
    conte,
  n: t: 'Full article content here...',auth,
  o: r: 'Lisa Thompson',authorAvat,
  a: r: '/avatars/lisa-thompson.jpg',publishDa,
  t: e: '2025-01-16',readTi,
  m: e: '11 min read',catego,
  r: y: 'AI & Machine Learning',ta,
  g: s: ['AI ContentContent Marketing', 'AutomationROI Optimization']
    ima,
  g: e: '/blog/ai-content-marketing-suite.jpg',featur,
  e: d: true,vie,
  w: s: 14230,lik,
  e: s: 756
  }, {
    id: '4',tit,
  l: e: 'The Future of AI-Powered Business Intelligence in 2025',excer,
  p: t: 'Discover how artificial intelligence is revolutionizing business intelligence and what trends to expect in the coming year.',conte,
  n: t: 'Full article content here...',auth,
  o: r: 'Dr. Sarah Chen',authorAvat,
  a: r: '/avatars/sarah-chen.jpg',publishDa,
  t: e: '2025-01-15',readTi,
  m: e: '8 min read',catego,
  r: y: 'AI & Machine Learning',ta,
  g: s: ['AIBusiness Intelligence', '2025 TrendsMachine Learning']
    ima,
  g: e: '/blog/ai-business-intelligence-2025.jpg',featur,
  e: d: false,vie,
  w: s: 15420,lik,
  e: s: 892
  }, {
    id: '5',tit,
  l: e: 'Implementing Zero Trust Security Architectur,
  e: A Complete Guide',excer,
  p: t: 'Learn the essential steps to implement a zero trust security model that protects your organization from modern cyber threats.',conte,
  n: t: 'Full article content here...',auth,
  o: r: 'David Kim',authorAvat,
  a: r: '/avatars/david-kim.jpg',publishDa,
  t: e: '2025-01-12',readTi,
  m: e: '12 min read',catego,
  r: y: 'Cybersecurity',ta,
  g: s: ['Zero TrustCybersecurity', 'Network SecurityBest Practices']
    ima,
  g: e: '/blog/zero-trust-security-guide.jpg',featur,
  e: d: false,vie,
  w: s: 12850,lik,
  e: s: 756
  }, {
    id: '3',tit,
  l: e: 'Building Scalable Microservices with Kubernetes and Docker',excer,
  p: t: 'A comprehensive guide to designing and deploying microservices architecture using modern containerization technologies.',conte,
  n: t: 'Full article content here...',auth,
  o: r: 'Marcus Rodriguez',authorAvat,
  a: r: '/avatars/marcus-rodriguez.jpg',publishDa,
  t: e: '2025-01-10',readTi,
  m: e: '15 min read',catego,
  r: y: 'Cloud & DevOps',ta,
  g: s: ['MicroservicesKubernetes', 'DockerDevOps']
    ima,
  g: e: '/blog/microservices-kubernetes-docker.jpg',featur,
  e: d: false,vie,
  w: s: 9870,lik,
  e: s: 543
  }, {
    id: '4',tit,
  l: e: 'How AI is Transforming Customer Experience Analytics',excer,
  p: t: 'Explore the latest AI technologies that are revolutionizing how businesses understand and improve customer experiences.',conte,
  n: t: 'Full article content here...',auth,
  o: r: 'Dr. Emily Watson',authorAvat,
  a: r: '/avatars/emily-watson.jpg',publishDa,
  t: e: '2025-01-08',readTi,
  m: e: '10 min read',catego,
  r: y: 'AI & Machine Learning',ta,
  g: s: ['AICustomer Experience', 'AnalyticsMachine Learning']
    ima,
  g: e: '/blog/ai-customer-experience-analytics.jpg',featur,
  e: d: false,vie,
  w: s: 11230,lik,
  e: s: 678
  }, {
    id: '5',tit,
  l: e: 'The Rise of Micro Saa,
  S: Building Profitable Niche Applications',excer,
  p: t: 'Discover how entrepreneurs are building successful micro SaaS businesses by solving specific problems in niche markets.',conte,
  n: t: 'Full article content here...',auth,
  o: r: 'Lisa Thompson',authorAvat,
  a: r: '/avatars/lisa-thompson.jpg',publishDa,
  t: e: '2025-01-05',readTi,
  m: e: '11 min read',catego,
  r: y: 'Micro SaaS',ta,
  g: s: ['Micro SaaSEntrepreneurship', 'Niche MarketsBusiness Strategy']
    ima,
  g: e: '/blog/micro-saas-niche-applications.jpg',featur,
  e: d: false,vie,
  w: s: 8760,lik,
  e: s: 432
  }, {
    id: '6',tit,
  l: e: 'Cloud FinOp,
  s: Optimizing Cloud Costs in Enterprise Environments',excer,
  p: t: 'Learn proven strategies for managing and optimizing cloud costs across large-scale enterprise deployments.',conte,
  n: t: 'Full article content here...',auth,
  o: r: 'James Wilson',authorAvat,
  a: r: '/avatars/james-wilson.jpg',publishDa,
  t: e: '2025-01-03',readTi,
  m: e: '13 min read',catego,
  r: y: 'Cloud & DevOps',ta,
  g: s: ['FinOpsCloud Cost Optimization', 'EnterpriseAWS', 'Azure']
    ima,
  g: e: '/blog/cloud-finops-enterprise.jpg',featur,
  e: d: false,vie,
  w: s: 7650,lik,
  e: s: 398
  }, {
    id: '7',tit,
  l: e: 'AI Ethics in Busines,
  s: Balancing Innovation with Responsibility',excer,
  p: t: 'An in-depth look at the ethical considerations businesses must address when implementing AI solutions.',conte,
  n: t: 'Full article content here...',auth,
  o: r: 'Dr. Emily Watson',authorAvat,
  a: r: '/avatars/emily-watson.jpg',publishDa,
  t: e: '2024-12-30',readTi,
  m: e: '14 min read',catego,
  r: y: 'AI & Machine Learning',ta,
  g: s: ['AI EthicsResponsible AI', 'Business EthicsMachine Learning']
    ima,
  g: e: '/blog/ai-ethics-business.jpg',featur,
  e: d: false,vie,
  w: s: 13450,lik,
  e: s: 789
  }, {
    id: '8',tit,
  l: e: 'Building a Successful Data Governance Strategy for AI Projects',excer,
  p: t: 'Essential guidelines for implementing effective data governance in AI and machine learning initiatives.',conte,
  n: t: 'Full article content here...',auth,
  o: r: 'Dr. Sarah Chen',authorAvat,
  a: r: '/avatars/sarah-chen.jpg',publishDa,
  t: e: '2024-12-28',readTi,
  m: e: '16 min read',catego,
  r: y: 'Business Intelligence',ta,
  g: s: ['Data GovernanceAI', 'Data ManagementCompliance']
    ima,
  g: e: '/blog/data-governance-ai-projects.jpg',featur,
  e: d: false,vie,
  w: s: 9870,lik,
  e: s: 567
  }
]
export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All')
  const [searchQuery, setSearchQuery] = useState('')
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const categories = [
    { id: 'all', na,
  m: e: 'All Posts', ic,
  o: n: TrendingUp }, { id: 'ai', na,
  m: e: 'AI & Machine Learning', ic,
  o: n: Brain }, { id: 'cloud', na,
  m: e: 'Cloud & DevOps', ic,
  o: n: Cloud }, { id: 'security', na,
  m: e: 'Cybersecurity', ic,
  o: n: Shield }, { id: 'development', na,
  m: e: 'Development', ic,
  o: n: Code }, { id: 'innovation', na,
  m: e: 'Innovation', ic,
  o: n: Lightbulb }
  ]
  const featuredPosts = [
    {
      id: 1,tit,
  l: e: 'The Future of AI in Busines,
  s: 2024 Trends and Predictions',excer,
  p: t: 'Discover how artificial intelligence is reshaping business operations and what to expect in the coming year.',catego,
  r: y: 'ai',auth,
  o: r: 'Kleber Santos',da,
  t: e: '2024-01-15',readTi,
  m: e: '5 min read',ta,
  g: s: ['AIBusiness', 'Trends2024']
      ima,
  g: e: '/blog/ai-business-trends-2024.jpg',featur,
  e: d: true
    }, {
      id: 2,tit,
  l: e: 'Building Scalable Cloud Infrastructur,
  e: Best Practices',excer,
  p: t: 'Learn the essential strategies for creating robust, scalable cloud infrastructure that grows with your business.'
      catego,
  r: y: 'cloud',auth,
  o: r: 'DevOps Team',da,
  t: e: '2024-01-12',readTi,
  m: e: '7 min read',ta,
  g: s: ['CloudDevOps', 'InfrastructureScalability']
      ima,
  g: e: '/blog/cloud-infrastructure-best-practices.jpg'
    }, {
      id: 3,tit,
  l: e: 'Cybersecurity in the Age of A,
  I: New Threats and Solutions',excer,
  p: t: 'Explore how AI is both creating new security challenges and providing innovative solutions to protect your business.',catego,
  r: y: 'security',auth,
  o: r: 'Security Team',da,
  t: e: '2024-01-10',readTi,
  m: e: '6 min read',ta,
  g: s: ['CybersecurityAI', 'ThreatsSolutions']
      ima,
  g: e: '/blog/ai-cybersecurity-threats.jpg'
    }, {
      id: 4,tit,
  l: e: 'Micro Saa,
  S: The Future of Business Software',excer,
  p: t: 'How small, focused software solutions are revolutionizing the way businesses operate and scale.'
      catego,
  r: y: 'innovation',auth,
  o: r: 'Product Team',da,
  t: e: '2024-01-08',readTi,
  m: e: '4 min read',ta,
  g: s: ['Micro SaaSBusiness Software', 'Innovation']
      ima,
  g: e: '/blog/micro-saas-future.jpg'
    }, {
      id: 5,tit,
  l: e: 'Quantum Computin,
  g: What Businesses Need to Know',excer,
  p: t: 'A practical guide to understanding quantum computing and its potential impact on business operations.',catego,
  r: y: 'innovation',auth,
  o: r: 'Research Team',da,
  t: e: '2024-01-05',readTi,
  m: e: '8 min read',ta,
  g: s: ['Quantum ComputingTechnology', 'Business Impact']
      ima,
  g: e: '/blog/quantum-computing-business.jpg'
    }, {
      id: 6,tit,
  l: e: 'DevOps Automatio,
  n: Streamlining Your Development Pipeline',excer,
  p: t: 'Practical tips and tools for automating your development and deployment processes.',catego,
  r: y: 'development',auth,
  o: r: 'DevOps Team',da,
  t: e: '2024-01-03',readTi,
  m: e: '6 min read',ta,
  g: s: ['DevOpsAutomation', 'CI/CDDevelopment']
      ima,
  g: e: '/blog/devops-automation-pipeline.jpg'
    }
  ]
  const filteredPosts = blogPosts.filter(post () () => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const featuredPost = blogPosts.find(post => post.featured)

  const getCategoryIcon = (category,
  I: d: string) () => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.icon : BookOpen
  }

  const getCategoryName = (category,
  I: d: string) () => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.name : 'Uncategorized'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <SEO 
        title="Blog - Zion Tech Group"
        description="Stay updated with the latest insights on AI, technology, and business innovation from Zion Tech Group."
      />
      
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            animate={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center";"
          >
            <h1 className="text-5xl,
  m: d:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">Blog</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Insights, trends, and expert perspectives on AI, technology, and business innovation. 
              Stay ahead of the curve with our latest articles.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col,
  l: g:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="className="w-full pl-10 pr-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s: outline-none,
  focu: s:border-cyan-400,
  focu: s:ring-2 focu,
  s:ring-cyan-400/20 transition-all duration-200";"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg border transition-all duration-200 ${
                    selectedCategory === category.id
                      ? 'bg-cyan-400 text-white border-cyan-400'
                      : 'bg-slate-800/50 text-gray-300 border-slate-600/50,
  hove: r: border-cyan-400/50 hove,
  r:text-cyan-400'
                  }`}
                >
                  <category.icon className="w-4 h-4 mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */}, {featuredPost && (
        <section className="py-12">
          <div className="container mx-auto px-6">
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
              className="className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-2xl p-8 border border-cyan-400/20";"
            >
              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 bg-cyan-400/20 text-cyan-400 text-sm font-medium rounded-full">
                  Featured
                </span>
                <span className="text-gray-400 text-sm">{featuredPost.category.toUpperCase()}</span>
              </div>
              
              <div className="grid grid-cols-1,
  l: g:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  
                  <div className="flex items-center gap-6 text-sm text-gray-400 mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </div>
                    
                    <Link
                      to={`/blog/${post.id}`}
                      className="className="flex items-center space-x-2 text-cyan-400,
  hove: r:text-cyan-300 transition-colors duration-200 font-medium";"
                    >
                      <span>Read More</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {featuredPost.tags.map((tag) => (
                      <span
                        key={tag}
                        className="className="px-3 py-1 bg-slate-700/50 text-gray-300 text-sm rounded-full";"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <Link
                    to={`/blog/${featuredPost.id}`}
                    className="className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r: from-cyan-500,
  hove: r:to-blue-600 transition-all duration-200,
  hove: r:scale-105";"
                  >
                    Read Full Article
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </div>

                <div className="relative">
                  <div className="w-full h-64 l,
  g:h-80 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-xl border border-cyan-400/20 flex items-center justify-center">
                    <div className="text-center text-gray-400">
                      <div className="text-4xl mb-2">📖</div>
                      <div className="text-sm">Blog Post Image</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}, {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="mb-12";"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>
            <p className="text-gray-300">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </motion.div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1,
  m: d: grid-cols-2 l,
  g:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.article
                  key={post.id}
                  initial={ opaci,
  t: y: 0, y: 20 }
                  whileInView={ opaci,
  t: y: 1, y: 0 }
                  transition={ durati,
  o: n: 0.8, del,
  a: y: index * 0.1 }
                  className="className="group";"
                >
                  <Link to={`/blog/${post.id}`}>
                    <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl border border-slate-600/50,
  hove: r: border-cyan-400/50 transition-all duration-300 hove,
  r:scale-105 h-full">
                      {/* Post Image */}
                      <div className="w-full h-48 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-t-xl border-b border-slate-600/50 flex items-center justify-center">
                        <div className="text-center text-gray-400">
                          <div className="text-3xl mb-2">📄</div>
                          <div className="text-sm">Post Image</div>
                        </div>
                      </div>

                      {/* Post Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 mb-3">
                          <span className="px-2 py-1 bg-slate-700/50 text-cyan-400 text-xs font-medium rounded">
                            {post.category.toUpperCase()}
                          </span>
                          {post.featured && (
                            <span className="px-2 py-1 bg-cyan-400/20 text-cyan-400 text-xs font-medium rounded">
                              Featured
                            </span>
                          )}
                        </div>

                        <h3 className="text-xl font-bold text-white mb-3 group-hov,
  e: r:text-cyan-400 transition-colors duration-200 line-clamp-2">
                          {post.title}
                        </h3>

                        <p className="text-gray-300 mb-4 line-clamp-3">
                          {post.excerpt}
                        </p>

                        <div className="flex items-center gap-4 text-sm text-gray-400 mb-4">
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </div>
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {post.tags.slice(0, 3).map((tag) => (
                            <span
                              key={tag}
                              className="className="px-2 py-1 bg-slate-700/50 text-gray-300 text-xs rounded";"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center text-cyan-400 group-hov,
  e: r: text-cyan-300 transition-colors duration-200">
                          <span className="text-sm font-medium">Read More</span>
                          <ArrowRight className="w-4 h-4 ml-2 group-hove,
  r:translate-x-1 transition-transform duration-200" />
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <motion.div
              initial={ opaci,
  t: y: 0, y: 20 }
              whileInView={ opaci,
  t: y: 1, y: 0 }
              transition={ durati,
  o: n: 0.8 }
              className="className="text-center py-20";"
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No articles found</h3>
              <p className="text-gray-300 mb-6">
                Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() () => {
                  setSearchQuery('')
                  setSelectedCategory('all')
                }
                className="className="px-6 py-3 bg-cyan-400 text-white font-semibold rounded-lg,
  hove: r:bg-cyan-500 transition-colors duration-200";"
              >
                Clear Filters
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-800/50 to-slate-700/50">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={ opaci,
  t: y: 0, y: 20 }
            whileInView={ opaci,
  t: y: 1, y: 0 }
            transition={ durati,
  o: n: 0.8 }
            className="className="text-center max-w-4xl mx-auto";"
          >
            <h2 className="text-4xl font-bold text-white mb-4">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI, technology, and business innovation 
              delivered directly to your inbox.
            </p>
            <div className="flex flex-col,
  s: m: flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="className="flex-1 px-4 py-3 bg-slate-700/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400,
  focu: s:outline-none,
  focu: s:border-cyan-400,
  focu: s:ring-2,
  focu: s:ring-cyan-400/20";"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-400 to-blue-500 text-white font-semibold rounded-lg,
  hove: r:from-cyan-500 hove,
  r:to-blue-600 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
