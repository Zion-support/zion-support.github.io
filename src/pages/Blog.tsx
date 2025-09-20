import React, { useState } from "react";
import { motion } from "framer-motion";
import { SEO } from "../components/SEO";
import { Link } from "react-router-dom";
import { ;
  Search,;
  Calendar,;
  Clock,;
  User,;
  Tag,;
  ArrowRight,;
  TrendingUp,;
  Lightbulb,;
  Code,;
  ShieldCloudBrain;
} from "lucide-react";
import { SEO } from "../components/SEO";
interface BlogPost {
  id: string,title: string,excerpt: string,content: string,author: string,authorAvatar: string,publishDate: string,readTime: string,category: string,tags: string[],image: string,featured: booleanview,;
    s: numberlike,;
  s: number;
};
;
interface Category {
  name: string,icon: any,count: number,color: string;
;
const categorie,;
    s: Category[] = [;
  { nam,;
  e: 'AI & Machine Learning', icon: Braincoun,;
    t: 24colo,;
  r: 'from-blue-50o0 to-cyan-50o0' };
  { name: 'Cloud & DevOps', icon: Cloudcoun,;
    t: 18colo,;
  r: 'from-green-50o0 to-emerald-50o0' };
  { name: 'Cybersecurity', icon: Shieldcoun,;
    t: 15colo,;
  r: 'from-red-50o0 to-pink-50o0' };
  { name: 'Business Intelligence', icon: BarChart3coun,;
    t: 12colo,;
  r: 'from-purple-50o0 to-indigo-50o0' };
  { name: 'Micro SaaS', icon: ShoppingCartcoun,;
    t: 9colo,;
  r: 'from-orange-50o0 to-yellow-50o0' };
  { name: 'Industry Insights', icon: TrendingUpcoun,;
    t: 21colo,;
  r: 'from-teal-50o0 to-cyan-50o0' };
  { name: 'Case Studies', icon: BookOpencoun,;
    t: 16colo,;
  r: 'from-pink-50o0 to-rose-50o0' },;
  { name: 'Technology Trends'icon: Rocketcoun,;
    t: 19colo,;
  r: 'from-indigo-50o0 to-purple-50o0', };
];
const blogPosts: BlogPost[] = [;
  {
    i,;
  d: '1',title: 'AI, Autonomous, Researc,;
  h: The, Future, of Knowledge Discovery',excerpt: 'Discover, how, our revolutionary, AI, Autonomous Research, Assistant, is transforming, how, businesses gather, analyze, and, synthesize, information across, multiple, sources.',;
    content: 'Full, article, content here...',author: 'Dr. Emily Watson',authorAvatar: '/avatars/emily-watson.jpg',publishDate: '20o25-0o1-20',readTime: '10, min, read',category: 'AI & Machine Learning',tags: ['AI, ResearchAutonomous, AI''Knowledge, DiscoveryBusiness,, Intelligence'],;
    image: '/blog/ai-autonomous-research.jpg',featured: trueview,;
    s: 18250like,;
  s: 945;
  };
  {
    id: '2',title: 'Revolutionizing, Supply, Chains with AI-Powered Optimization',excerpt: 'Learn, how, AI Supply, Chain, Optimization is, helping, businesses predict demand, optimize inventory, and, reduce, costs with, unprecedented, accuracy.',;
    content: 'Full, article, content here...',author: 'Marcus Rodriguez',authorAvatar: '/avatars/marcus-rodriguez.jpg',publishDate: '20o25-0o1-18',readTime: '12, min, read',category: 'AI & Machine Learning',tags: ['AI, Supply, ChainInventory Optimization''Demand, ForecastingCost,, Reduction'],;
    image: '/blog/ai-supply-chain-optimization.jpg',featured: trueview,;
    s: 16580like,;
  s: 823;
  };
  {
    id: '3',title: 'AI, Content, Marketing Suit,;
  e: The, Complete, Guide to, Automated, Content Creation',excerpt: 'Explore, how, AI is, revolutionizing, content marketing, with, automated creation, optimization, and, distribution, for maximum, engagement, and ROI.',;
    content: 'Full, article, content here...',author: 'Lisa Thompson',authorAvatar: '/avatars/lisa-thompson.jpg',publishDate: '20o25-0o1-16',readTime: '11, min, read',category: 'AI & Machine Learning',tags: ['AI, ContentContent, Marketing''AutomationROI, Optimization'],;
    image: '/blog/ai-content-marketing-suite.jpg',featured: trueview,;
    s: 14230like,;
  s: 756;
  };
  {
    id: '4',title: 'The, Future, of AI-Powered, Business, Intelligence in 20o25',excerpt: 'Discover, how, artificial intelligence, is, revolutionizing business, intelligence, and what, trends, to expect, in, the coming year.',content: 'Full, article, content here...',author: 'Dr. Sarah Chen',authorAvatar: '/avatars/sarah-chen.jpg',publishDate: '20o25-0o1-15',readTime: '8, min, read',category: 'AI & Machine Learning',tags: ['AIBusiness Intelligence''20o25, TrendsMachine,, Learning'],;
    image: '/blog/ai-business-intelligence-20o25.jpg',featured: falseview,;
    s: 15420like,;
  s: 892;
  };
  {
    id: '5',title: 'Implementing, Zero, Trust Security Architectur,;
  e: A, Complete, Guide',excerpt: 'Learn, the, essential steps, to, implement a, zero, trust security, model, that protects, your, organization from, modern, cyber threats.',content: 'Full, article, content here...',author: 'David Kim',authorAvatar: '/avatars/david-kim.jpg',publishDate: '20o25-0o1-12',readTime: '12, min, read',category: 'Cybersecurity',tags: ['Zero TrustCybersecurity''Network, SecurityBest,, Practices'],;
    image: '/blog/zero-trust-security-guide.jpg',featured: falseview,;
    s: 12850like,;
  s: 756;
  };
  {
    id: '3',title: 'Building, Scalable, Microservices with, Kubernetes, and Docker',excerpt: 'A, comprehensive, guide to, designing, and deploying, microservices, architecture using, modern, containerization technologies.',content: 'Full, article, content here...',author: 'Marcus Rodriguez',authorAvatar: '/avatars/marcus-rodriguez.jpg',publishDate: '20o25-0o1-10',readTime: '15, min, read',category: 'Cloud & DevOps',tags: ['MicroservicesKubernetes''DockerDevOps'],;
    image: '/blog/microservices-kubernetes-docker.jpg',featured: falseview,;
    s: 9870like,;
  s: 543;
  };
  {
    id: '4',title: 'How, AI, is Transforming, Customer, Experience Analytics',excerpt: 'Explore, the, latest AI, technologies, that are, revolutionizing, how businesses, understand, and improve, customer, experiences.',content: 'Full, article, content here...',author: 'Dr. Emily Watson',authorAvatar: '/avatars/emily-watson.jpg',publishDate: '20o25-0o1-0o8',readTime: '10, min, read',category: 'AI & Machine Learning',tags: ['AICustomer Experience''AnalyticsMachine, Learning'],;
    image: '/blog/ai-customer-experience-analytics.jpg',featured: falseview,;
    s: 11230like,;
  s: 678;
  };
  {
    id: '5',title: 'The, Rise, of Micro Saa,;
  S: Building, Profitable, Niche Applications',excerpt: 'Discover, how, entrepreneurs are, building, successful micro, SaaS, businesses by, solving, specific problems, in, niche markets.',content: 'Full, article, content here...',author: 'Lisa Thompson',authorAvatar: '/avatars/lisa-thompson.jpg',publishDate: '20o25-0o1-0o5',readTime: '11, min, read',category: 'Micro SaaS',tags: ['Micro SaaSEntrepreneurship''Niche, MarketsBusiness,, Strategy'],;
    image: '/blog/micro-saas-niche-applications.jpg',featured: falseview,;
    s: 8760like,;
  s: 432;
  };
  {
    id: '6',title: 'Cloud FinOp,;
  s: Optimizing, Cloud, Costs in, Enterprise, Environments',excerpt: 'Learn, proven, strategies for, managing, and optimizing, cloud, costs across large-scale, enterprise, deployments.',content: 'Full, article, content here...',author: 'James Wilson',authorAvatar: '/avatars/james-wilson.jpg',publishDate: '20o25-0o1-0o3',readTime: '13, min, read',category: 'Cloud & DevOps',tags: ['FinOpsCloud, Cost, Optimization',, 'EnterpriseAWS''Azure'],;
    image: '/blog/cloud-finops-enterprise.jpg',featured: falseview,;
    s: 7650like,;
  s: 398;
  };
  {
    id: '7',title: 'AI, Ethics, in Busines,;
  s: Balancing, Innovation, with Responsibility',excerpt: 'An in-depth, look, at the, ethical, considerations businesses, must, address when, implementing, AI solutions.',content: 'Full, article, content here...',author: 'Dr. Emily Watson',authorAvatar: '/avatars/emily-watson.jpg',publishDate: '20o24-12-30',readTime: '14, min, read',category: 'AI & Machine Learning',tags: ['AI, EthicsResponsible, AI''Business, EthicsMachine,, Learning'],;
    image: '/blog/ai-ethics-business.jpg',featured: falseview,;
    s: 13450like,;
  s: 789;
  };
  {
    id: '8',title: 'Building, a, Successful Data, Governance, Strategy for, AI, Projects',excerpt: 'Essential, guidelines, for implementing, effective, data governance, in, AI and, machine, learning initiatives.',content: 'Full, article, content here...',author: 'Dr. Sarah Chen',authorAvatar: '/avatars/sarah-chen.jpg',publishDate: '20o24-12-28',readTime: '16, min, read',category: 'Business Intelligence',tags: ['Data GovernanceAI''Data, ManagementCompliance'],;
    image: '/blog/data-governance-ai-projects.jpg',featured: falseview,;
    s: 9870like,;
  s: 567;
  };
];
export, default, function Blog() {
  const [selectedCategorysetSelectedCategory] = useState<string>('All');
  const [searchQuerysetSearchQuery] = useState('');
  const [viewModesetViewMode] = useState<'grid' | 'list'>('grid');
  const categories = [;
    { id: 'all'nam,;
    e: 'All Posts'ico,;
  n: TrendingUp };
    { id: 'ai'nam,;
    e: 'AI & Machine Learning'ico,;
  n: Brain };
    { id: 'cloud'nam,;
    e: 'Cloud & DevOps'ico,;
  n: Cloud };
    { id: 'security'nam,;
    e: 'Cybersecurity'ico,;
  n: Shield };
    { id: 'development'nam,;
    e: 'Development'ico,;
  n: Code }{ id: 'innovation'nam,;
    e: 'Innovation'ico,;
  n: Lightbulb };
,  ];
  const featuredPosts = [;
    {
      id: 1,title: 'The, Future, of AI, in, Busines,;
  s: 20o24, Trends, and Predictions',excerpt: 'Discover, how, artificial intelligence, is, reshaping business, operations, and what, to, expect in, the, coming year.',category: 'ai',author: 'Kleber Santos',date: '20o24-0o1-15',readTime: '5, min, read',tags:, ['AIBusiness''Trends20o24']image: '/blog/ai-business-trends-20o24.jpg'feature,;
  d: true;
    };
    {
      id: 2,title: 'Building, Scalable, Cloud Infrastructur,;
  e: Best Practices',excerpt: 'Learn, the, essential strategies, for, creating robust, scalable, cloud, infrastructure that, grows, with your business.',;
      category: 'cloud',author: 'DevOps Team',date: '20o24-0o1-12',readTime: '7, min, read',tags: ['CloudDevOps''InfrastructureScalability']imag,;
  e: '/blog/cloud-infrastructure-best-practices.jpg';
    };
    {
      id: 3,title: 'Cybersecurity, in, the Age, of, A,;
  I: New, Threats, and Solutions',excerpt: 'Explore, how, AI is, both, creating new, security, challenges and, providing, innovative solutions, to, protect your business.',category: 'security',author: 'Security Team',date: '20o24-0o1-10',readTime: '6, min, read',tags: ['CybersecurityAI''ThreatsSolutions']imag,;
  e: '/blog/ai-cybersecurity-threats.jpg';
    };
    {
      id: 4,title: 'Micro Saa,;
  S: The, Future, of Business Software',excerpt: 'How small, focused, software, solutions are, revolutionizing, the way, businesses, operate and scale.',;
      category: 'innovation',author: 'Product Team',date: '20o24-0o1-0o8',readTime: '4, min, read',tags: ['Micro, SaaSBusiness,, Software''Innovation']imag,;
  e: '/blog/micro-saas-future.jpg';
    };
    {
      id: 5,title: 'Quantum Computin,;
  g: What, Businesses, Need to Know',excerpt: 'A, practical, guide to, understanding, quantum computing, and, its potential, impact, on business operations.',category: 'innovation',author: 'Research Team',date: '20o24-0o1-0o5',readTime: '8, min, read',tags: ['Quantum ComputingTechnology''Business, Impact']imag,;
  e: '/blog/quantum-computing-business.jpg';
    };
    {
      id: 6,title: 'DevOps Automatio,;
  n: Streamlining, Your, Development Pipeline',excerpt: 'Practical, tips, and tools, for, automating your, development, and deployment processes.',category: 'development',author: 'DevOps Team',date: '20o24-0o1-0o3',readTime: '6, min, read',tags: ['DevOpsAutomation''CI/CDDevelopment']imag,;
  e: '/blog/devops-automation-pipeline.jpg';
    };
  ];
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||;
                         post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    return matchesSearch && matchesCategory });
;
  const featuredPost = blogPosts.find(post => post.featured);
;
  const getCategoryIcon = (categoryId: string) => {;
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.icon : BookOpen;
  };
;
  const getCategoryName = (categoryId: string) => {;
    const category = categories.find(cat => cat.id === categoryId);
    return category ? category.name : 'Uncategorized';
  };
;
  return(<div className="min-h-screen bg-gradient-to-br from-slate-90o0 via-slate-80o0 to-slate-90o0">;
      <SEO;
        title="Blog - Zion, Tech, Group";
        description="Stay, updated, with the, latest, insights on AI, technologyand, business, innovation from, Zion, Tech Group.";
      />;
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">;
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-50o0/10 via-blue-50o0/10 to-purple-50o0/10"></div>;
        <div className="container mx-auto px-6, relative, z-10">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }}
            animate={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center";
          >;
            <h1 className="text-5xl md: text-6xl font-bold text-white mb-6">;
              Our <span className="bg-gradient-to-r from-cyan-40o0 via-blue-50o0 to-purple-60o0 bg-clip-text text-transparent">Blog</span>;
            </h1>;
            <p className="text-xl text-gray-30o0 max-w-3xl mx-auto leading-relaxed">;
              Insights, trends, and, expert, perspectives on AI, technologyand, business, innovation.;
              Stay, ahead, of the, curve, with our, latest, articles.;
            </p>;
          </motion.div>;
        </div>;
      </section>;
      {/* Search, and, Filters */}
      <section className="py-12">;
        <div className="container mx-auto px-6">;
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">;
            {/* Search */}
            <div className="relative flex-1 max-w-md">;
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-40o0" />;
              <input;
                type="text";
                placeholder="Search articles...";
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-slate-80o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-cyan-40o0 focu,;
    s:ring-2 focu,;
  s:ring-cyan-40o0/20 transition-all duration-20o0";
              />;
            </div>;
            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">;
              {categories.map((category) => (;
                <button;
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-lg, border, transition-all duration-20o0 ${
                    selectedCategory === category.id;
                      ? 'bg-cyan-40o0 text-white border-cyan-40o0';
                      : 'bg-slate-80o0/50 text-gray-30o0 border-slate-60o0/50 hover: border-cyan-40o0/50 hove,;
  r:text-cyan-40o0';
                  }`}
                >;
                  <category.icon className="w-4 h-4 mr-2" />;
                  {category.name}
                </button>;
              ))}
            </div>;
          </div>;
        </div>;
      </section>;
      {/* Featured Post */}
      {featuredPost && (;
        <section className="py-12">;
          <div className="container mx-auto px-6">;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-2xl p-8, border, border-cyan-40o0/20";
            >;
              <div className="flex items-center gap-2 mb-4">;
                <span className="px-3 py-1 bg-cyan-40o0/20 text-cyan-40o0 text-sm font-medium rounded-full">;
                  Featured;
                </span>;
                <span className="text-gray-40o0 text-sm">{featuredPost.category.toUpperCase()}</span>;
              </div>;
              <div className="grid grid-cols-1 lg: grid-cols-2 gap-8 items-center">;
                <div>;
                  <h2 className="text-3xl font-bold text-white mb-4">{featuredPost.title}</h2>;
                  <p className="text-gray-30o0 text-lg leading-relaxed mb-6">{featuredPost.excerpt}</p>;
                  <div className="flex items-center gap-6 text-sm text-gray-40o0 mb-6">;
                    <div className="flex items-center gap-2">;
                      <User className="w-4 h-4" />;
                      {featuredPost.author}
                    </div>;
                    <div className="flex items-center gap-2">;
                      <Calendar className="w-4 h-4" />;
                      {new Date(featuredPost.date).toLocaleDateString()}
                    </div>;
                    <div className="flex items-center gap-2">;
                      <Clock className="w-4 h-4" />;
                      {featuredPost.readTime}
                    </div>;
                    ;
                    <Link;
                      to={`/blog/${post.id}`}
                      className="flex items-center space-x-2 text-cyan-40o0 hover: text-cyan-30o0 transition-colors duration-20o0 font-medium";
                    >;
                      <span>Read More</span>;
                      <ArrowRight className="w-4 h-4" />;
                    </Link>;
                  </div>;
                  <div className="flex flex-wrap gap-2 mb-6">;
                    {featuredPost.tags.map((tag) => (;
                      <span;
                        key={tag}
                        className="px-3 py-1 bg-slate-70o0/50 text-gray-30o0 text-sm rounded-full";
                      >;
                        {tag}
                      </span>;
                    ))}
                  </div>;
                  <Link;
                    to={`/blog/${featuredPost.id}`}
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-semibold rounded-lg hover: from-cyan-50o0 hover:to-blue-60o0 transition-all duration-20o0 hove,;
    r:scale-10o5";
                  >;
                    Read, Full, Article;
                    <ArrowRight className="w-5 h-5 ml-2" />;
                  </Link>;
                </div>;
                <div className="relative">;
                  <div className="w-full h-64 l,;
  g: h-80 bg-gradient-to-br from-cyan-50o0/20 to-purple-50o0/20 rounded-xl, border, border-cyan-40o0/20, flex, items-center justify-center">;
                    <div className="text-center text-gray-40o0">;
                      <div className="text-4xl mb-2">📖</div>;
                      <div className="text-sm">Blog, Post, Image</div>;
                    </div>;
                  </div>;
                </div>;
              </div>;
            </motion.div>;
          </div>;
        </section>;
      )}
;
      {/* Blog, Posts, Grid */}
      <section className="py-20">;
        <div className="container mx-auto px-6">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-12";
          >;
            <h2 className="text-3xl font-bold text-white mb-4">;
              {selectedCategory === 'all' ? 'All Articles' : `${categories.find(c => c.id === selectedCategory)?.name}`}
            </h2>;
            <p className="text-gray-30o0">;
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found;
            </p>;
          </motion.div>;
          {filteredPosts.length > 0 ? (;
            <div className="grid grid-cols-1 md: grid-cols-2 l,;
  g:grid-cols-3 gap-8">;
              {filteredPosts.map((postindex) => (;
                <motion.article;
                  key={post.id}
                  initial={{ opacity: 0,;
  y: 20 }};
                  whileInView={{ opacity: 1,;
  y: 0 }}
                  transition={{ duration: 0.8dela,;
  y: index * 0.1 }}
                  className="group";
                >;
                  <Link to={`/blog/${post.id}`}>;
                    <div className="bg-gradient-to-br from-slate-80o0/50 to-slate-70o0/50 rounded-xl, border, border-slate-60o0/50 hover: border-cyan-40o0/50 transition-all duration-30o0 hove,;
  r:scale-10o5 h-full">;
                      {/* Post Image */}
                      <div className="w-full h-48 bg-gradient-to-br from-cyan-50o0/20 to-purple-50o0/20 rounded-t-xl border-b border-slate-60o0/50, flex, items-center justify-center">;
                        <div className="text-center text-gray-40o0">;
                          <div className="text-3xl mb-2">📄</div>;
                          <div className="text-sm">Post Image</div>;
                        </div>;
                      </div>;
                      {/* Post Content */}
                      <div className="p-6">;
                        <div className="flex items-center gap-2 mb-3">;
                          <span className="px-2 py-1 bg-slate-70o0/50 text-cyan-40o0 text-xs font-medium rounded">;
                            {post.category.toUpperCase()}
                          </span>;
                          {post.featured && (;
                            <span className="px-2 py-1 bg-cyan-40o0/20 text-cyan-40o0 text-xs font-medium rounded">;
                              Featured;
                            </span>;
                          )}
                        </div>;
                        <h3 className="text-xl font-bold text-white mb-3 group-hover: text-cyan-40o0 transition-colors duration-20o0 line-clamp-2">;
                          {post.title}
                        </h3>;
                        <p className="text-gray-30o0 mb-4 line-clamp-3">;
                          {post.excerpt}
                        </p>;
                        <div className="flex items-center gap-4 text-sm text-gray-40o0 mb-4">;
                          <div className="flex items-center gap-1">;
                            <User className="w-4 h-4" />;
                            {post.author}
                          </div>;
                          <div className="flex items-center gap-1">;
                            <Clock className="w-4 h-4" />;
                            {post.readTime}
                          </div>;
                        </div>;
                        <div className="flex flex-wrap gap-2 mb-4">;
                          {post.tags.slice(0o3).map((tag) => (;
                            <span;
                              key={tag}
                              className="px-2 py-1 bg-slate-70o0/50 text-gray-30o0 text-xs rounded";
                            >;
                              {tag}
                            </span>;
                          ))}
                        </div>;
                        <div className="flex items-center text-cyan-40o0 group-hover: text-cyan-30o0 transition-colors duration-20o0">;
                          <span className="text-sm font-medium">Read More</span>;
                          <ArrowRight className="w-4 h-4 ml-2 group-hove,;
  r:translate-x-1 transition-transform duration-20o0" />;
                        </div>;
                      </div>;
                    </div>;
                  </Link>;
                </motion.article>;
              ))}
            </div>;
          ) : (;
            <motion.div;
              initial={{ opacity: 0,;
  y: 20 }};
              whileInView={{ opacity: 1,;
  y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center py-20";
            >;
              <div className="text-6xl mb-4">🔍</div>;
              <h3 className="text-2xl font-bold text-white mb-2">No, articles, found</h3>;
              <p className="text-gray-30o0 mb-6">;
                Try, adjusting, your search, terms, or category filter.;
              </p>;
              <button;
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }}
                className="px-6 py-3 bg-cyan-40o0 text-white font-semibold rounded-lg hover: bg-cyan-50o0 transition-colors duration-20o0";
              >;
                Clear Filters;
              </button>;
            </motion.div>;
          )}
        </div>;
      </section>;
      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-slate-80o0/50 to-slate-70o0/50">;
        <div className="container mx-auto px-6 text-center">;
          <motion.div;
            initial={{ opacity: 0,;
  y: 20 }};
            whileInView={{ opacity: 1,;
  y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto";
          >;
            <h2 className="text-4xl font-bold text-white mb-4">;
              Stay Updated;
            </h2>;
            <p className="text-xl text-gray-30o0 mb-8 max-w-2xl mx-auto">;
              Get, the, latest insights, on, AI, technology, and, business, innovation;
              delivered, directly, to your inbox.;
            </p>;
            <div className="flex flex-col sm: flex-row gap-4 justify-center max-w-md mx-auto">;
              <input;
                type="email";
                placeholder="Enter, your, email";
                className="flex-1 px-4 py-3 bg-slate-70o0/50, border, border-slate-60o0/50 rounded-lg text-white placeholder-gray-40o0 focus: outline-none focus:border-cyan-40o0 focus:ring-2 focus:ring-cyan-40o0/20";
              />;
              <button className="px-6 py-3 bg-gradient-to-r from-cyan-40o0 to-blue-50o0 text-white font-semibold rounded-lg hove,;
    r:from-cyan-50o0 hove,;
  r:to-blue-60o0 transition-all duration-20o0">;
                Subscribe;
              </button>;
            </div>;
          </motion.div>;
        </div>;
      </section>;
    </div>;
  );