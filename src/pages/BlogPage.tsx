import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Brain,
  Shield,
  Cpu,
  Rocket,
  Zap,
  ArrowRight,
  Star,
  Users,
  Award,
  CheckCircle,
  Globe,
  Target,
  TrendingUp,
  Heart,
  Eye,
  Atom,
  Activity,
  Code,
  Database,
  Server,
  Network,
  BarChart3,
  Lock,
  Building,
  Briefcase,
  Newspaper,
  TestTube,
  GraduationCap,
  HelpCircle,
  Search,
  Menu,
  X,
  MapPin,
  Phone,
  Mail,
  Linkedin,
  Twitter,
  Github,
  Facebook,
  Instagram,
  Youtube,
  Calendar,
  Clock,
  DollarSign,
  Users2,
  Lightbulb,
  Handshake,
  BookOpen,
  Video,
  PenTool,
  Palette,
  Settings,
  Cog,
  Wrench,
  Tool,
  Hammer,
  Screwdriver,
  Ruler,
  Compass,
  Navigation,
  Compass2,
  Map,
  Location,
  Home,
  Building2,
  Factory,
  Warehouse,
  Store,
  Bank,
  CreditCard,
  PiggyBank,
  ChartLine,
  PieChart,
  TrendingDown,
  AlertTriangle,
  Info,
  AlertCircle,
  CheckCircle2,
  XCircle,
  MinusCircle,
  PlusCircle,
  Circle,
  Square,
  Triangle,
  Hexagon,
  Octagon,
  Star2,
  Heart2,
  ThumbsUp,
  ThumbsDown,
  Smile,
  Frown,
  Meh,
  Laugh,
  Cry,
  Angry,
  Surprised,
  Wink,
  Tongue,
  Kiss,
  Wink2,
  Grin,
  Joy,
  Sunglasses,
  Confused,
  Neutral,
  Expressionless,
  Unamused,
  RollingEyes,
  Zany,
  Hugging,
  Nerd,
  Cool,
  Party,
  Sleepy,
  Sick,
  Vomiting,
  ExplodingHead,
  CowboyHatFace,
  DisguisedFace,
  PregnantWoman,
  BreastFeeding,
  PersonWithTurban,
  PersonWithSkullcap,
  WomanWithHeadscarf,
  PersonWithVeil,
  PersonWithCrown,
  PersonWithTiara,
  PersonWithGraduationCap,
  PersonWithTuxedo,
  PersonWithDress,
  PersonWithSuit,
  PersonWithTurban2,
  PersonWithSkullcap2,
  WomanWithHeadscarf2,
  PersonWithVeil2,
  PersonWithCrown2,
  PersonWithTiara2,
  PersonWithGraduationCap2,
  PersonWithTuxedo2,
  PersonWithDress2,
  PersonWithSuit2,
  Cloud,
  Wifi,
  Link,
  Truck,
  MessageCircle,
  Tag,
  User,
  Eye as EyeIcon,
  MessageCircle as MessageCircleIcon,
  Share2,
  Bookmark,
  ExternalLink
} from 'lucide-react';

export function BlogPage() {
  const featuredPosts = [
    {
      id: 1,
      title: 'The Future of AI in Enterprise: 2025 and Beyond',
      excerpt: 'Discover how artificial intelligence is reshaping enterprise operations and what businesses need to prepare for in the coming years.',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO & AI Research Lead',
      authorAvatar: '/images/team/sarah-chen.jpg',
      publishDate: '2025-01-15',
      readTime: '8 min read',
      category: 'Artificial Intelligence',
      tags: ['AI', 'Enterprise', 'Future Tech', 'Digital Transformation'],
      image: '/images/blog/ai-enterprise-future.jpg',
      views: 1247,
      comments: 23,
      featured: true
    },
    {
      id: 2,
      title: 'Quantum Computing: Breaking Down the Hype vs. Reality',
      excerpt: 'A comprehensive look at where quantum computing stands today and its practical applications for businesses.',
      author: 'Dr. Emily Watson',
      authorRole: 'Quantum Research Director',
      authorAvatar: '/images/team/emily-watson.jpg',
      publishDate: '2025-01-10',
      readTime: '12 min read',
      category: 'Quantum Computing',
      tags: ['Quantum Computing', 'Technology', 'Research', 'Innovation'],
      image: '/images/blog/quantum-computing-reality.jpg',
      views: 892,
      comments: 18,
      featured: true
    },
    {
      id: 3,
      title: 'Cybersecurity in the Age of AI: New Threats and Solutions',
      excerpt: 'How AI is both creating new security challenges and providing innovative solutions to protect digital assets.',
      author: 'Marcus Rodriguez',
      authorRole: 'Head of Engineering',
      authorAvatar: '/images/team/marcus-rodriguez.jpg',
      publishDate: '2025-01-05',
      readTime: '10 min read',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'AI Security', 'Threat Detection', 'Digital Protection'],
      image: '/images/blog/ai-cybersecurity.jpg',
      views: 1563,
      comments: 31,
      featured: true
    }
  ];

  const recentPosts = [
    {
      id: 4,
      title: 'Digital Transformation Success Stories: Lessons from Industry Leaders',
      excerpt: 'Real-world examples of successful digital transformations and the key factors that contributed to their success.',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      authorAvatar: '/images/team/kleber-santos.jpg',
      publishDate: '2025-01-03',
      readTime: '6 min read',
      category: 'Digital Transformation',
      tags: ['Digital Transformation', 'Success Stories', 'Leadership', 'Innovation'],
      image: '/images/blog/digital-transformation-success.jpg',
      views: 734,
      comments: 15
    },
    {
      id: 5,
      title: 'The Rise of Edge Computing: Bringing Intelligence Closer to Data',
      excerpt: 'Understanding edge computing and its role in modern IT infrastructure and IoT applications.',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO & AI Research Lead',
      authorAvatar: '/images/team/sarah-chen.jpg',
      publishDate: '2024-12-28',
      readTime: '7 min read',
      category: 'Edge Computing',
      tags: ['Edge Computing', 'IoT', 'Infrastructure', 'Technology'],
      image: '/images/blog/edge-computing-rise.jpg',
      views: 621,
      comments: 12
    },
    {
      id: 6,
      title: 'Blockchain Beyond Cryptocurrency: Enterprise Applications',
      excerpt: 'Exploring practical blockchain applications in supply chain, healthcare, and financial services.',
      author: 'Dr. Emily Watson',
      authorRole: 'Quantum Research Director',
      authorAvatar: '/images/team/emily-watson.jpg',
      publishDate: '2024-12-20',
      readTime: '9 min read',
      category: 'Blockchain',
      tags: ['Blockchain', 'Enterprise', 'Supply Chain', 'Innovation'],
      image: '/images/blog/blockchain-enterprise.jpg',
      views: 543,
      comments: 9
    },
    {
      id: 7,
      title: 'Machine Learning in Healthcare: Improving Patient Outcomes',
      excerpt: 'How machine learning is revolutionizing healthcare delivery and improving patient care quality.',
      author: 'Marcus Rodriguez',
      authorRole: 'Head of Engineering',
      authorAvatar: '/images/team/marcus-rodriguez.jpg',
      publishDate: '2024-12-15',
      readTime: '11 min read',
      category: 'Healthcare Technology',
      tags: ['Machine Learning', 'Healthcare', 'Patient Care', 'AI'],
      image: '/images/blog/ml-healthcare.jpg',
      views: 892,
      comments: 21
    },
    {
      id: 8,
      title: 'Cloud Migration Strategies: A Comprehensive Guide',
      excerpt: 'Best practices and strategies for successful cloud migration and digital transformation.',
      author: 'Kleber Santos',
      authorRole: 'CEO & Founder',
      authorAvatar: '/images/team/kleber-santos.jpg',
      publishDate: '2024-12-10',
      readTime: '8 min read',
      category: 'Cloud Computing',
      tags: ['Cloud Migration', 'Digital Transformation', 'Strategy', 'Best Practices'],
      image: '/images/blog/cloud-migration-guide.jpg',
      views: 756,
      comments: 16
    },
    {
      id: 9,
      title: 'The Future of Work: How Technology is Reshaping the Workplace',
      excerpt: 'Examining the impact of AI, automation, and remote work on the future of employment and workplace culture.',
      author: 'Dr. Sarah Chen',
      authorRole: 'CTO & AI Research Lead',
      authorAvatar: '/images/team/sarah-chen.jpg',
      publishDate: '2024-12-05',
      readTime: '10 min read',
      category: 'Future of Work',
      tags: ['Future of Work', 'AI', 'Automation', 'Workplace Culture'],
      image: '/images/blog/future-of-work.jpg',
      views: 678,
      comments: 14
    }
  ];

  const categories = [
    { name: 'Artificial Intelligence', count: 15, icon: Brain },
    { name: 'Quantum Computing', count: 8, icon: Atom },
    { name: 'Cybersecurity', count: 12, icon: Shield },
    { name: 'Digital Transformation', count: 10, icon: Rocket },
    { name: 'Cloud Computing', count: 9, icon: Cloud },
    { name: 'Blockchain', count: 6, icon: Link },
    { name: 'Healthcare Technology', count: 7, icon: Heart },
    { name: 'Edge Computing', count: 5, icon: Server }
  ];

  const tags = [
    'AI', 'Machine Learning', 'Quantum Computing', 'Cybersecurity', 'Digital Transformation',
    'Cloud Computing', 'Blockchain', 'IoT', 'Edge Computing', 'Healthcare',
    'Finance', 'Manufacturing', 'Retail', 'Education', 'Government',
    'Innovation', 'Technology', 'Business', 'Strategy', 'Best Practices'
  ];

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  };

  const PostCard = ({ post, featured = false }: { post: any; featured?: boolean }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={`group ${featured ? 'lg:col-span-2' : ''} bg-zion-slate-darker rounded-lg border border-zion-purple/20 hover:border-zion-cyan/40 transition-all duration-300 overflow-hidden`}
    >
      <div className="relative">
        <div className="aspect-video bg-zion-slate-dark flex items-center justify-center">
          <div className="text-zion-cyan text-4xl">📷</div>
        </div>
        {featured && (
          <div className="absolute top-4 left-4 bg-zion-cyan text-zion-slate-dark px-3 py-1 rounded-full text-sm font-semibold">
            Featured
          </div>
        )}
        <div className="absolute top-4 right-4 flex space-x-2">
          <button className="p-2 bg-zion-slate-dark/80 rounded-full text-zion-slate-light hover:text-zion-cyan transition-colors">
            <Bookmark className="h-4 w-4" />
          </button>
          <button className="p-2 bg-zion-slate-dark/80 rounded-full text-zion-slate-light hover:text-zion-cyan transition-colors">
            <Share2 className="h-4 w-4" />
          </button>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-xs text-zion-cyan font-semibold">{post.category}</span>
          <span className="text-xs text-zion-slate-light">•</span>
          <span className="text-xs text-zion-slate-light">{post.readTime}</span>
        </div>
        
        <h3 className={`font-bold mb-3 group-hover:text-zion-cyan transition-colors ${featured ? 'text-xl' : 'text-lg'}`}>
          {post.title}
        </h3>
        
        <p className="text-zion-slate-light mb-4 line-clamp-3">{post.excerpt}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-zion-purple/20 rounded-full flex items-center justify-center">
              <User className="h-4 w-4 text-zion-cyan" />
            </div>
            <div>
              <div className="text-sm font-semibold">{post.author}</div>
              <div className="text-xs text-zion-slate-light">{post.authorRole}</div>
            </div>
          </div>
          <div className="text-xs text-zion-slate-light">{formatDate(post.publishDate)}</div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-4 text-xs text-zion-slate-light">
            <span className="flex items-center">
              <EyeIcon className="h-3 w-3 mr-1" />
              {post.views}
            </span>
            <span className="flex items-center">
              <MessageCircleIcon className="h-3 w-3 mr-1" />
              {post.comments}
            </span>
          </div>
          <Link 
            to={`/blog/${post.id}`}
            className="text-zion-cyan hover:text-zion-cyan/80 font-semibold text-sm group-hover:translate-x-1 transition-all duration-300"
          >
            Read More
            <ArrowRight className="inline h-3 w-3 ml-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-zion-slate-dark text-white">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-br from-zion-purple/20 via-zion-slate-darker to-zion-slate-dark"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6"
          >
            Zion Tech <span className="text-zion-cyan">Blog</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl sm:text-2xl text-zion-slate-light max-w-4xl mx-auto mb-8"
          >
            Insights, analysis, and thought leadership on the latest technology trends and innovations.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Subscribe to Newsletter
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              Write for Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">Featured Articles</h2>
            <p className="text-lg text-zion-slate-light max-w-3xl mx-auto">
              Our most popular and insightful content on emerging technologies and industry trends.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-3 gap-8">
            {featuredPosts.map((post) => (
              <PostCard key={post.id} post={post} featured={true} />
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zion-slate-darker">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-3">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-2xl font-bold mb-6">Latest Articles</h2>
                <div className="grid md:grid-cols-2 gap-6">
                  {recentPosts.map((post) => (
                    <PostCard key={post.id} post={post} />
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="space-y-8"
              >
                {/* Search */}
                <div className="bg-zion-slate-dark p-6 rounded-lg border border-zion-purple/20">
                  <h3 className="text-lg font-semibold mb-4">Search Articles</h3>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" />
                    <input
                      type="text"
                      placeholder="Search articles..."
                      className="w-full pl-10 pr-4 py-2 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                    />
                  </div>
                </div>

                {/* Categories */}
                <div className="bg-zion-slate-dark p-6 rounded-lg border border-zion-purple/20">
                  <h3 className="text-lg font-semibold mb-4">Categories</h3>
                  <div className="space-y-3">
                    {categories.map((category) => (
                      <Link
                        key={category.name}
                        to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}
                        className="flex items-center justify-between p-3 rounded-lg hover:bg-zion-slate-darker transition-colors group"
                      >
                        <div className="flex items-center space-x-3">
                          <category.icon className="h-4 w-4 text-zion-cyan" />
                          <span className="group-hover:text-zion-cyan transition-colors">{category.name}</span>
                        </div>
                        <span className="text-sm text-zion-slate-light bg-zion-slate-darker px-2 py-1 rounded-full">
                          {category.count}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Popular Tags */}
                <div className="bg-zion-slate-dark p-6 rounded-lg border border-zion-purple/20">
                  <h3 className="text-lg font-semibold mb-4">Popular Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {tags.slice(0, 20).map((tag) => (
                      <Link
                        key={tag}
                        to={`/blog/tag/${tag.toLowerCase()}`}
                        className="px-3 py-1 bg-zion-slate-darker border border-zion-purple/20 rounded-full text-sm text-zion-slate-light hover:bg-zion-cyan hover:text-zion-slate-dark hover:border-zion-cyan transition-all duration-300"
                      >
                        {tag}
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter Signup */}
                <div className="bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 p-6 rounded-lg border border-zion-purple/20">
                  <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
                  <p className="text-sm text-zion-slate-light mb-4">
                    Get the latest insights and trends delivered to your inbox.
                  </p>
                  <div className="space-y-3">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="w-full px-4 py-2 bg-zion-slate-darker border border-zion-purple/20 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan"
                    />
                    <button className="w-full px-4 py-2 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300">
                      Subscribe
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl font-bold mb-6"
          >
            Share Your Knowledge
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg text-zion-slate-light mb-8"
          >
            Have insights to share? We're always looking for industry experts and thought leaders to contribute to our blog.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 bg-zion-cyan hover:bg-zion-cyan/80 text-zion-slate-dark font-semibold rounded-lg transition-all duration-300 group"
            >
              Submit Your Article
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link 
              to="/contact" 
              className="inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-slate-dark font-semibold rounded-lg transition-all duration-300"
            >
              Become a Contributor
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}