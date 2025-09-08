
import { 
  Calendar, User, ArrowRight, Tag, Clock, TrendingUp, 
  Brain, Atom, Rocket, Shield, Globe, Code 
} from &apos;lucide-react';&apos;&apos;

export default function Blog() {}
  const blogPosts = [{
      id: 1,
      title: &quot;The Future of AI in Enterpris,e: 2025 Trends and Predictions&quot;,
      excerpt: &quot;Explore the latest AI trends transforming enterprise operations and how businesses can leverage these technologies for competitive advantage.&quot;,
      author: &quot;Dr. Sarah Chen&quot;,
      date: &quot;2025-01-15&quot;,
      readTime: &quot;8 min read&quot;,
      category: &quot;AI & Machine Learning&quot;,
      tags: [&quot;AI&quot;, &quot;Enterprise&quot;, &quot;Technology&quot],
      image: &quot;/api/placeholder/600/400&quot;,


      featured: true

      title: "Quantum Computing Breakthrough: What It Means for Your Business", excerpt: "Understanding the latest quantum computing advances and their practical applications in solving complex business problems.",
      author: "Prof. Michael Rodriguez", date: "2025-01-12",
      readTime: "12 min read", category: "Quantum Computing",


      featured: true

      title: "Micro SaaS Revolution: Building Scalable Solutions", excerpt: "How micro SaaS platforms are changing the software landscape and creating new opportunities for businesses.",
      author: "Alex Thompson", date: "2025-01-10",
      readTime: "6 min read", category: "Micro SaaS",


      featured: false

      title: "Cybersecurity in the Age of AI: New Threats and Solutions", excerpt: "Examining how AI is both creating new security challenges and providing innovative solutions to protect enterprise data.",
      author: "Lisa Park", date: "2025-01-08",
      readTime: "10 min read", category: "Cybersecurity",


      featured: false

      title: "Digital Transformation: A Complete Guide for 2025", excerpt: "Comprehensive strategies for successful digital transformation initiatives in modern enterprises.",
      author: "David Kumar", date: "2025-01-05",
      readTime: "15 min read", category: "Digital Transformation",


      featured: false

      title: "Cloud Infrastructure Best Practices for Global Enterprises", excerpt: "Essential guidelines for designing and managing cloud infrastructure that scales with your business needs.",
      author: "Maria Santos", date: "2025-01-03",
      readTime: "9 min read", category: "Cloud Computing",

      featured: false
    }
  ];
  const categories = [

    { name: "Micro SaaS", icon: Rocket, count: 12 }, { name: "Cybersecurity", icon: Shield, count: 10 }, { name: "Digital Transformation", icon: Globe, count: 7 }, { name: "Cloud Computing", icon: Code, count: 9 }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured)
  return (
    <>
      <SEO 

        description="Stay updated with the latest insights on AI, quantum computing, cybersecurity, and emerging technologies from Zion Tech Group&apos;s expert team."
        keywords="technology blog, AI insights, quantum computing, cybersecurity, digital transformation, tech news"

      />

      
      <div className=&quot;min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900&quot;>
        {/* Hero Section */}&quot;
        <section className=&quot;py-20 bg-gradient-to-r from-blue-600/20 to-purple-600/20&quot;>&quot;"
          <div className=&quot;container mx-auto px-4&quot;>&quot;"
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}

              </h1>

              </p>
              <div className=&quot;flex flex-wrap justify-center gap-4&quot;>
                {categories.slice(0, 4).map((category, index) => (&quot}
                  <span
                    key={category.name}
                    className=&quot;px-4 py-2 bg-blue-600/20 border border-blue-400/30 rounded-full text-blue-300 text-sm&quot;
                  >
                    {category.name}&quot;
                  </span>

                ))}
              </div>;
            </motion.div>;
          </div>;
        </section>;


              {/* Featured Posts */}, {featuredPosts.length > 0 && (&quot}
                <section className=&quot;mb-16&quot;>&quot;"
                  <h2 className=&quot;text-3xl font-bold text-white mb-8 flex items-center&quot;>&quot;"
                    <TrendingUp className=&quot;w-8 h-8 mr-3 text-blue-400&quot; />
                    Featured Articles&quot;
                  </h2>
                  <div className=&quot;grid grid-cols-1 md:grid-cols-2 gap-8&quot;>
                    {featuredPosts.map((post, index) => (&quot}
                      <motion.article

                        key={post.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: index * 0.1 }}

                    ))}
                  </div>;
                </section>;
              )}
;
              {/* Regular Posts */}

                      key={post.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: index * 0.1 }}

                            >
                              Read More&quot;
                              <ArrowRight className=&quot;w-4 h-4 ml-1&quot; />&quot;
                            </Link>
                          </div>
                        </div>
                      </div>
                    </motion.article>

                  ))}
                </div>;
              </section>;
            </div>;

            {/* Sidebar */}, {/* Categories */}
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/50 rounded-xl p-6 border border-slate-600/50">;
                  <h3 className="text-xl font-bold text-white mb-4">Categories</h3>;
                  <div className="space-y-3">;
                    {categories.map((category, index) => (;
                      <Link;
                        key={category.name}

                        className="flex items-center justify-between p-3 rounded-lg hover: bg-slate-700/50 transition-colors group"
                      >
                        <div className="flex items-center">
                          <category.icon className="w-5 h-5 text-blue-400 mr-3 group-hover:text-blue-300" />
                          <span className="text-gray-300 group-hover:text-white">{category.name}</span>

                        </div>
                        <span className=&quot;text-sm text-gray-400&quot;>{category.count}&quot;</span>
                      </Link>

                    ))}
                  </div>;
                </div>;

                {/* Newsletter Signup */}

                    </button>
                  </div>
                </motion.article>
                ))}
              </div>
            </div>
          </section>
        )}

      {/* Search Results or Recent Posts */}
      <section className="py-20 bg-slate-800/50">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/30"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              {searchQuery 
                ? `Found ${searchResults.length} articles matching your search`
                : 'Stay updated with our latest insights and analysis'
              }
            </p>
          </div>
          
          {searchQuery && searchResults.length === 0 ? (
            <motion.div 
              className="text-center py-16"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-white mb-2">No results found</h3>
              <p className="text-slate-300 mb-6">Try adjusting your search terms or browse our categories</p>
              <button
                onClick={() => setSearchQuery('')}
                className="px-6 py-3 bg-cyan-500 text-white rounded-lg font-semibold hover:bg-cyan-600 transition-colors duration-300"
              >
                Clear Search
              </button>
            </motion.div>
          ) : (
            <div className="grid md: anygrid-cols-2 lg:grid-cols-3 gap-8">
              {(searchQuery ? searchResults : filteredPosts).map((post, index)  => (
                <motion.article
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden h-full">
                    <div className="h-40 bg-gradient-to-br from-slate-700/50 to-slate-800/50 flex items-center justify-center">
                      <div className="text-4xl">📄</div>
                    </div>
                    
                    <div className="p-6 flex flex-col h-full">
                      <div className="flex items-center space-x-2 mb-3">
                        <span className="px-3 py-1 bg-cyan-500/20 text-cyan-400 text-xs rounded-full font-medium">
                          {categories.find(c => c.id === post.category)?.name}
                        </span>
                        <span className="text-slate-400 text-sm">•</span>
                        <span className="text-slate-400 text-sm">{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-lg font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-slate-300 mb-4 line-clamp-3 flex-grow">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>
                  <Button 
                    asChild
                    className="bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple w-fit"
                  >
                    <Link to={`/blog/${featuredPosts[0].slug}`}>
                      Read Article
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
            
            <p className="text-sm text-slate-400 mt-4">
              No spam, unsubscribe at  time. We respect your privacy.
            </p>
          </motion.div>
        </div>
      </div>
</>


  )}


