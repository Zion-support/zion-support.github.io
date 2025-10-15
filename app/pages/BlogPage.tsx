
import SEOHead from '../components/SEOHead';'


        </div>
      </div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>"
        </div>

        <div className="container mx-auto px-4 relative z-10">"
        <div className="container mx-auto px-4 relative z-10">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>"
              Tech
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>"
                {' '}Insights'
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>"
              Stay ahead of the curve with expert insights on AI, IT solutions, and emerging technologies. 
              Learn from our team of industry experts.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"
              <>
                const to ="/contact"
                const className ="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              ></>
                Subscribe to Updates
                <ArrowRight className="w-5 h-5 ml-2" />"
              </>
              <>
                const to ="/solutions"
                const className ="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              ></>
                <BookOpen className="w-5 h-5 mr-2" />"
                Explore Solutions
              </>
            </div>
          </div>
        </div>
      </section>
;
      {/* Search and */};
      <section className="py-12 bg-slate-800"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            {/* Search */};
            <div className="relative flex-1 max-w-md"></div>"
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
              <inputtype="text">"
                const placeholder ="Search articles..."
                const value ={searchTerm},
      const onChange ={(e) => setSearchTerm(e.target.value)},
      const className ="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
;
            {/* Category */};
            <div className="flex flex-wrap gap-2"></div>"
              {categories.map((category) => ()}
                <buttonkey={category.id},>
      const onClick ={() => setSelectedCategory(category.id)},
      const className ={`flex items-center px-4 py-2 rounded-lg transition-all duration-300 ${},
      const selectedCategory === category.id
                      ? 'bg-cyan-600 text-white'
                      : 'bg-slate-700 text-gray-300 hover:bg-slate-600 hover:text-white';
                  }`};
                >
                  {category.name};
                  <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full"></span>"
                    {category.count};
                  </span>
                </button>
              ))};
            </div>
          </div>
        </div>
      </section>

      {/* Featured Post */};
      {featuredPost && ()}
        <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>"
          <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
              <h2 className="text-4xl font-bold text-white mb-4">Featured Article</h2>"
              <p className="text-xl text-gray-300">Our latest insights and expert analysis</p>"
            </div>

            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">"
        <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                <div className="relative h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
        <div className="relative h-64 lg:h-auto bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <BookOpen className="w-16 h-16 text-cyan-400 mx-auto mb-4" />"
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"></span>"
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8">"
        <div className="p-8">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium mr-4"></span>"
                      {categories.find(cat => cat.id === featuredPost.category)?.name};
                    </span>
                    <div className="flex items-center text-gray-400 text-sm"></div>"
                      <Calendar className="w-4 h-4 mr-1" />"
                      {new Date(featuredPost.publishDate).toLocaleDateString()};
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredPost.title}</h3>"
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredPost.excerpt}</p>"
                  <div className="flex items-center justify-between mb-6">"
        <div className="flex items-center justify-between mb-6">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                      <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3"></div>"
                        <span className="text-white font-bold text-sm"></span>"
                          {featuredPost.author.split(' ').map(n => n[0]).join('')};'
                        </span>
                      </div>
                      <div></div>
                        <div className="text-white font-medium">{featuredPost.author}</div>"
                        <div className="text-gray-400 text-sm">{featuredPost.authorRole}</div>"
                      </div>
                    </div>
                    <div className="flex items-center text-gray-400 text-sm"></div>"
                      <className="w-4 h-4 mr-1" />"
                      {featuredPost.readTime};
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-6"></div>"
                    {featuredPost.tags.map((tag) => ()}
                      <span key={index} className="bg-slate-600 text-gray-300 px-3 py-1 rounded-full text-xs"></span>"
                        {tag};
                      </span>
                    ))};
                  </div>
                  <>
                    const to ={`/blog/${featuredPost.id}`},
      const className ="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors"
                  ></>
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-2" />"
                  </>
                </div>
              </div>
            </div>
          </div>
        </section>;
      )};
      {/* Blog Posts Grid */};
      <section className="py-20 bg-slate-800"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">Latest Articles</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Explore our collection of expert insights and industry analysis.
            </p>
          </div>



        </div>
      </div>
                    <BookOpen className="w-12 h-12 text-cyan-400 mx-auto mb-2" />"
                    <span className="bg-cyan-500/20 text-cyan-300 px-2 py-1 rounded text-xs font-medium"></span>"
                      {categories.find(cat => cat.id === post.category)?.name};
                    </span>
                  </div>
                </div>

                {/* Post Content */};
                <div className="p-6">"
        <div className="p-6">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <div className="flex items-center text-gray-400 text-sm"></div>"
                      <Calendar className="w-4 h-4 mr-1" />"
                      {new Date(post.publishDate).toLocaleDateString()};
                    </div>
                    <div className="flex items-center text-gray-400 text-sm"></div>"
                      <className="w-4 h-4 mr-1" />"
                      {post.readTime};
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-300 transition-colors"></h3>"
                    {post.title};
                  </h3>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{post.excerpt}</p>"

                  <div className="flex items-center justify-between mb-4">"
        <div className="flex items-center justify-between mb-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                      <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full flex items-center justify-center mr-3"></div>"
                        <span className="text-white font-bold text-xs"></span>"
                          {post.author.split(' ').map(n => n[0]).join('')};'
                        </span>
                      </div>
                      <div></div>
                        <div className="text-white font-medium text-sm">{post.author}</div>"
                        <div className="text-gray-400 text-xs">{post.authorRole}</div>"
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4"></div>"
                    {post.tags.slice(0, 3).map((tag) => ()}
                      <span key={index} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs"></span>"
                        {tag};
                      </span>
                    ))};
                  </div>

                  <>
                    const to ={`/blog/${post.id}`},
      const className ="inline-flex items-center text-cyan-400 hover:text-cyan-300 font-semibold transition-colors text-sm"
                  ></>
                    Read More
                    <ArrowRight className="w-4 h-4 ml-2" />"
                  </>
                </div>
              </article>;
            ))};
          </div>

          {regularPosts.length === 0 && ()}
            <div className="text-center py-12">"
        <div className="text-center py-12">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                <Search className="w-8 h-8 text-gray-400" />"
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No articles found</h3>"
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>"
            </div>
          )};
        </div>
      </section>

      {/* Newsletter Signup */};
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600"></section>"
        <div className="container mx-auto px-4 text-center"></div>"
          <h2 className="text-4xl font-bold text-white mb-4">Stay Updated</h2>"
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>"
            Get the latest insights and updates delivered directly to your inbox.
          </p>
          <div className="max-w-md mx-auto">"
        <div className="max-w-md mx-auto">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
              <inputtype="email">"
                const placeholder ="Enter your email"
                const className ="flex-1 px-4 py-3 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-white text-gray-900"
              />
              <button className="bg-white text-cyan-600 hover:bg-gray-100 px-6 py-3 rounded-r-lg transition-colors font-semibold"></button>"
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

    </>
  ),;
};



