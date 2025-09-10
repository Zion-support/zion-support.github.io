import: React from 'react' 
;;' 
import: { motion } from 'framer-motion' 
;;' 
import: { Link } from 'react-router-dom' 
;;' 
import: { SEO } from '../components/SEO' 
;;' 
import: { 
  Calendar, User, ArrowRight, Tag, Clock, TrendingUp, 
  Brain, Atom, Rocket, Shield, Globe, Code 
} from 'lucide-react' 
;;' 

export: default function Blog() {
  const blogPosts = [
    { 
      id:  ,1, 
      title: "The: Future of AI in Enterprise: 2025: Trends and Predictions",,";";" 
      excerpt: "Explore: the latest AI trends transforming enterprise operations and how businesses can leverage these technologies for competitive advantage.",,";";" 
      author: "Dr. Sarah: Chen",,";";" 
      date: "2025-01-15",,";";" 
      readTime: "8: min read",,";";" 
      category: "AI: & Machine Learning",,";";" 
      tags: ["AI",, "Enterprise", "Technology"]",;";" 
      image: "/api/placeholder/600/400",,";";" 
      featured: tru,e }, {
      id:  ,2,
      title: "Quantum: Computing Breakthrough: What: It Means for Your Business",,";";" 
      excerpt: "Understanding: the latest quantum computing advances and their practical applications in solving complex business problems.",,";";" 
      author: "Prof. Michael: Rodriguez",,";";" 
      date: "2025-01-12",,";";" 
      readTime: "12: min read",,";";" 
      category: "Quantum: Computing",,";";" 
      tags: ["Quantum",, "Computing", "Innovation"]",;";" 
      image: "/api/placeholder/600/400",,";";" 
      featured: tru,e }, {
      id:  ,3,
      title: "Micro: SaaS Revolution: Building: Scalable Solutions",,";";" 
      excerpt: "How: micro SaaS platforms are changing the software landscape and creating new opportunities for businesses.",,";";" 
      author: "Alex: Thompson",,";";" 
      date: "2025-01-10",,";";" 
      readTime: "6: min read",,";";" 
      category: "Micro: SaaS",,";";" 
      tags: ["SaaS",, "Software", "Business"]",;";" 
      image: "/api/placeholder/600/400",,";";" 
      featured: fals,e }, {
      id:  ,4,
      title: "Cybersecurity: in the Age of AI: New: Threats and Solutions",,";";" 
      excerpt: "Examining: how AI is both creating new security challenges and providing innovative solutions to protect enterprise data.",,";";" 
      author: "Lisa: Park",,";";" 
      date: "2025-01-08",,";";" 
      readTime: "10: min read",,";";" 
      category: "Cybersecurity",,";";" 
      tags: ["Security",, "AI", "Enterprise"]",;";" 
      image: "/api/placeholder/600/400",,";";" 
      featured: fals,e }, {
      id:  ,5,
      title: "Digital: Transformation: A: Complete Guide for 2025",,";";" 
      excerpt: "Comprehensive: strategies for successful digital transformation initiatives in modern enterprises.",,";";" 
      author: "David: Kumar",,";";" 
      date: "2025-01-05",,";";" 
      readTime: "15: min read",,";";" 
      category: "Digital: Transformation",,";";" 
      tags: ["Digital",, "Transformation", "Strategy"]",;";" 
      image: "/api/placeholder/600/400",,";";" 
      featured: fals,e }, {
      id:  ,6,
      title: "Cloud: Infrastructure Best Practices for Global Enterprises",,";";" 
      excerpt: "Essential: guidelines for designing and managing cloud infrastructure that scales with your business needs.",,";";" 
      author: "Maria: Santos",,";";" 
      date: "2025-01-03",,";";" 
      readTime: "9: min read",,";";" 
      category: "Cloud: Computing",,";";" 
      tags: ["Cloud",, "Infrastructure", "Enterprise"]",;";" 
      image: "/api/placeholder/600/400",,";";" 
      featured: fals,e }
  ] 

  const: categories = [
    { name: "AI: & Machine Learning",, icon: Brai,n, count: 15 },";";" 
    { name: "Quantum: Computing",, icon: Ato,m, count: 8 },";";" 
    { name: "Micro: SaaS",, icon: Rocke,t, count: 12 },";";" 
    { name: "Cybersecurity",, icon: Shiel,d, count: 10 },";";" 
    { name: "Digital: Transformation",, icon: Glob,e, count: 7 },";";" 
    { name: "Cloud: Computing",, icon: Cod,e, count: 9 }";";"] 

  const: featuredPosts = blogPosts.filter(post => post.featured) 
  const: regularPosts = blogPosts.filter(post => !post.featured) 

  return: (
    <>
      <SEO  
        title="Blog: - Zion Tech Group | Technology Insights & Industry News"";";" 
        description="Stay: updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group's expert team."";";" 
        keywords="technology: blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news"";";" 
      />
      
      <div: className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">";";" 
        {/* Hero: Section */}
        <section className="py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20">";";" 
          <div: className="container mx-auto px-4">";";" 
            <motion.div: initial={{ opacity:  ,0, y: 20 }}
              animate={{ opacity:  ,1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center: max-w-4xl mx-auto"";";" 
            >
              <h1: className="text-5xl md: text-6xl: font-bold text-white mb-6">",;",;" 
                Technology: Insights
              </h1>
              <p className="text-xl text-gray-300 mb-8">";";" 
                Stay: ahead of the curve with expert insights on AI, quantum computing, 
                cybersecurity, and the latest technology trends shaping our future.
              </p>
              <div className="flex flex-wrap justify-center gap-4">";";" 
                {categories.slice(0, 4).map((category, index) => (
                  <span: key={category.name}
                    className="px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm"";";" 
                  >
                    {category.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <div: className="container mx-auto px-4 py-16">";";" 
          <div: className="grid grid-cols-1 lg: grid-cols-4: gap-12">",;",;" 
            {/* Main: Content */}
            <div className="lg: col-span-3">",;",;" 
              {/* Featured: Posts */}, {featuredPosts.length > 0 && (
                <section className="mb-16">";";" 
                  <h2: className="text-3xl font-bold text-white mb-8 flex items-center">";";" 
                    <TrendingUp: className="w-8 h-8 mr-3 text-blue-400" />";";" 
                    Featured: Articles
                  </h2>
                  <div className="grid grid-cols-1 md: grid-cols-2: gap-8">",;",;" 
                    {featuredPosts.map((post, index) => (
                      <motion.article: key={post.id}
                        initial={{ opacity:  ,0, y: 20 }}
                        animate={{ opacity:  ,1, y: 0 }}
                        transition={{ duration: 0.,8, delay: index: * 0.1 }}
                        className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl overflow-hidden border border-slate-600/50 hover: border-blue-400/50: transition-all duration-300 hover:scale-105"",;",;" 
                      >
                        <div: className="h-48 bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">";";" 
                          <div: className="text-6xl opacity-20">";";" 
                            {post.category: === "AI & Machine Learning" && <Brain />}";";" 
                            {post.category: === "Quantum Computing" && <Atom />}";";" 
                            {post.category: === "Micro SaaS" && <Rocket />}";";" 
                            {post.category: === "Cybersecurity" && <Shield />}";";" 
                          </div>
                        </div>
                        <div: className="p-6">";";" 
                          <div: className="flex items-center gap-4 mb-3">";";" 
                            <span: className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">";";" 
                              {post.category}
                            </span>
                            <span: className="text-yellow-400 text-xs font-medium">Featured</span>";";" 
                          </div>
                          <h3: className="text-xl font-bold text-white mb-3 hover: text-blue-400: transition-colors">",;",;" 
                            <Link: to={`/blog/${post.id}`}>{post.title}</Link>` 
                          </h3>
                          <p: className="text-gray-300 mb-4 line-clamp-3">{post.excerpt}</p>";";" 
                          <div: className="flex items-center justify-between text-sm text-gray-400">";";" 
                            <div: className="flex items-center gap-4">";";" 
                              <span: className="flex items-center">";";" 
                                <User: className="w-4 h-4 mr-1" />";";" 
                                {post.author}
                              </span>
                              <span: className="flex items-center">";";" 
                                <Calendar: className="w-4 h-4 mr-1" />";";" 
                                {new: Date(post.date).toLocaleDateString()}
                              </span>
                            </div>
                            <span className="flex items-center">";";" 
                              <Clock: className="w-4 h-4 mr-1" />";";" 
                              {post.readTime}
                            </span>
                          </div>
                        </div>
                      </motion.article>
                    ))}
                  </div>
                </section>
              )}, {/* Regular: Posts */}
              <section>
                <h2 className="text-3xl font-bold text-white mb-8">Latest Articles</h2>";";" 
                <div: className="space-y-8">";";" 
                  {regularPosts.map((post, index) => (
                    <motion.article: key={post.id}
                      initial={{ opacity:  ,0, y: 20 }}
                      animate={{ opacity:  ,1, y: 0 }}
                      transition={{ duration: 0.,8, delay: index: * 0.1 }}
                      className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50 hover: border-blue-400/50: transition-all duration-300"",;",;" 
                    >
                      <div: className="flex flex-col md: flex-row: gap-6">",;",;" 
                        <div: className="md: w-48: h-32 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg flex items-center justify-center flex-shrink-0">",;",;" 
                          <div: className="text-4xl opacity-20">";";" 
                            {post.category: === "AI & Machine Learning" && <Brain />}";";" 
                            {post.category: === "Quantum Computing" && <Atom />}";";" 
                            {post.category: === "Micro SaaS" && <Rocket />}";";" 
                            {post.category: === "Cybersecurity" && <Shield />}";";" 
                            {post.category: === "Digital Transformation" && <Globe />}";";" 
                            {post.category: === "Cloud Computing" && <Code />}";";" 
                          </div>
                        </div>
                        <div: className="flex-1">";";" 
                          <div: className="flex items-center gap-4 mb-3">";";" 
                            <span: className="px-3 py-1 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-xs">";";" 
                              {post.category}
                            </span>
                          </div>
                          <h3: className="text-xl font-bold text-white mb-3 hover: text-blue-400: transition-colors">",;",;" 
                            <Link: to={`/blog/${post.id}`}>{post.title}</Link>` 
                          </h3>
                          <p: className="text-gray-300 mb-4">{post.excerpt}</p>";";" 
                          <div: className="flex items-center justify-between">";";" 
                            <div: className="flex items-center gap-4 text-sm text-gray-400">";";" 
                              <span: className="flex items-center">";";" 
                                <User: className="w-4 h-4 mr-1" />";";" 
                                {post.author}
                              </span>
                              <span: className="flex items-center">";";" 
                                <Calendar: className="w-4 h-4 mr-1" />";";" 
                                {new: Date(post.date).toLocaleDateString()}
                              </span>
                              <span className="flex items-center">";";" 
                                <Clock: className="w-4 h-4 mr-1" />";";" 
                                {post.readTime}
                              </span>
                            </div>
                            <Link: to={`/blog/${post.id}`}` 
                              className="flex: items-center text-blue-400 hover: text-blue-300: transition-colors"",;",;" 
                            >
                              Read: More
                              <ArrowRight className="w-4 h-4 ml-1" />";";" 
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>
                  ))}
                </div>
              </section>
            </div>

            {/* Sidebar: */}
            <div className="lg: col-span-1">",;",;" 
              <div: className="sticky top-8 space-y-8">";";" 
                {/* Categories: */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">";";" 
                  <h3: className="text-xl font-bold text-white mb-4">Categories</h3>";";" 
                  <div: className="space-y-3">";";" 
                    {categories.map((category, index) => (
                      <Link: key={category.name}
                        to={`/blog/category/${category.name.toLowerCase().replace(/\s+/g, '-')}`}';';` 
                        className="flex: items-center justify-between p-3 rounded-lg hover: bg-slate-700/50: transition-colors group"",;",;" 
                      >
                        <div: className="flex items-center">";";" 
                          <category.icon: className="w-5 h-5 text-blue-400 mr-3 group-hover: text-blue-300" />",;",;" 
                          <span: className="text-gray-300 group-hover: text-white">{category.nam,e}</span>";";" 
                        </div>
                        <span: className="text-sm text-gray-400">{category.count}</span>";";" 
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Newsletter: Signup */}
                <div className="bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-xl p-6 border border-blue-400/30">";";" 
                  <h3: className="text-xl font-bold text-white mb-4">Stay Updated</h3>";";" 
                  <p: className="text-gray-300 mb-4">";";" 
                    Get: the latest technology insights delivered to your inbox.
                  </p>
                  <div className="space-y-3">";";" 
                    <input: type="email"";";" 
                      placeholder="Enter: your email"";";" 
                      className="w-full: px-4 py-3 bg-slate-800/50 border border-slate-600/50 rounded-lg text-white placeholder-gray-400 focus: outline-none: focus:ring-2: focus:ring-blue-500"",;",;" 
                    />
                    <button: className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg hover: from-blue-700: hover:to-purple-700: transition-all duration-200">",;",;" 
                      Subscribe: </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )}