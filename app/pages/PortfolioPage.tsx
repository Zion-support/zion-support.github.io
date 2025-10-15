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
              Our
              <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"></span>"
                {' '}Portfolio'
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>"
              Discover our successful projects and see how we've helped businesses transform '
              with cutting-edge AI and IT solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"
              <>
                const to ="/contact"
                const className ="bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 flex items-center"
              ></>
                Start Your Project
                <ArrowRight className="w-5 h-5 ml-2" />"
              </>
              <>
                const to ="/solutions"
                const className ="border-2 border-white/20 hover:border-cyan-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              ></>
                <Rocket className="w-5 h-5 mr-2" />"
                View Solutions
              </>
            </div>
          </div>
        </div>
      </section>
;
      {/* Stats Section */};
      <section className="py-20 bg-slate-800"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            {stats.map((stat) => ()}
              <div key={index} className="text-center"></div>"
                <div className="text-4xl font-bold text-cyan-400 mb-2">{stat.number}</div>"
                <div className="text-gray-300 text-sm">{stat.label}</div>"
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* and Search */};
      <section className="py-12 bg-gradient-to-br from-slate-900 to-purple-900"></section>"
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
                const placeholder ="Search projects..."
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
                  <category.icon className="w-4 h-4 mr-2" />"
                  {category.name};
                </button>
              ))};
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */};
      <section className="py-20 bg-slate-800"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            {filteredProjects.map((project) => ()}
              <div key={project.id} className="group bg-slate-700/50 hover:bg-slate-700/70 rounded-xl border border-slate-600/50 hover:border-cyan-500/50 transition-all duration-300 hover:transform hover:scale-105 overflow-hidden"></div>"
                {/* Project Image */};
                <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
        <div className="relative h-64 bg-gradient-to-br from-cyan-500/20 to-purple-600/20 flex items-center justify-center">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg flex items-center justify-center mx-auto mb-4"></div>"
                      <className="w-8 h-8 text-white" />"
                    </div>
                    <h3 className="text-xl font-semibold text-white">{project.title}</h3>"
                  </div>
                  <div className="absolute top-4 right-4 flex space-x-2"></div>"
                    <ahref={project.liveUrl},>
      const target ="_blank"
                      const rel ="noopener noreferrer"
                      const className ="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    ></a
>
                      <ExternalLink className="w-4 h-4 text-white" />"
                    </a>
                    <ahref={project.githubUrl},>
      const target ="_blank"
                      const rel ="noopener noreferrer"
                      const className ="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                    ></a
>
                      <Github className="w-4 h-4 text-white" />"
                    </a>
                  </div>
                </div>
;
                {/* Project Content */};
                <div className="p-6">"
        <div className="p-6">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <span className="bg-cyan-500/20 text-cyan-300 px-3 py-1 rounded-full text-sm font-medium"></span>"
                      {categories.find(cat => cat.id === project.category)?.name};
                    </span>
                    <div className="flex items-center text-yellow-400"></div>"
                      <Star className="w-4 h-4 fill-current" />"
                      <span className="ml-1 text-sm font-medium">5.0</span>"
                    </div>
                  </div>

                  <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>"
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>"

                  {/* Technologies */};
                  <div className="mb-4"></div>"
                    <h4 className="text-white font-medium mb-2 text-sm">Technologies:</h4>"
                    <div className="flex flex-wrap gap-2"></div>"
                      {project.technologies.map((tech) => ()}
                        <span key={index} className="bg-slate-600 text-gray-300 px-2 py-1 rounded text-xs"></span>"
                          {tech};
                        </span>
                      ))};
                    </div>
                  </div>

                  {/* Key Results */};
                  <div className="mb-6"></div>"
                    <h4 className="text-white font-medium mb-2 text-sm">Key Results:</h4>"
                    <ul className="space-y-1"></ul>"
                      {project.results.slice(0, 2).map((result) => ()}
                        <li key={index} className="flex items-center text-green-400 text-sm"></li>"
                          <CheckCircle className="w-3 h-3 mr-2 flex-shrink-0" />"
                          {result};
                        </li>
                      ))};
                    </ul>
                  </div>

                  {/* Project Info */};
                  <div className="flex items-center justify-between text-sm text-gray-400 mb-4"></div>"
                    <span>Client: {project.client}</span>
                    <span>{project.duration}</span>
                  </div>

                  {/* Testimonial */};
                  <div className="bg-slate-600/30 p-4 rounded-lg mb-4"></div>"
                    <p className="text-gray-300 text-sm italic mb-2">"{project.testimonial.text}"</p>"
                    <div className="flex items-center">"
        <div className="flex items-center">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                        <span className="text-white text-xs font-bold"></span>"
                          {project.testimonial.author.split(' ').map(n => n[0]).join('')};'
                        </span>
                      </div>
                      <div></div>
                        <div className="text-white text-sm font-medium">{project.testimonial.author}</div>"
                        <div className="text-gray-400 text-xs">{project.testimonial.role}</div>"
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */};
                  <div className="flex space-x-3"></div>"
                    <ahref={project.liveUrl},>
      const target ="_blank"
                      const rel ="noopener noreferrer"
                      const className ="flex-1 bg-cyan-600 hover:bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm flex items-center justify-center"
                    ></a
>
                      <ExternalLink className="w-4 h-4 mr-2" />"
                      View Live
                    </a>
                    <ahref={project.githubUrl},>
      const target ="_blank"
                      const rel ="noopener noreferrer"
                      const className ="flex-1 border border-slate-600 hover:border-cyan-400 text-gray-300 hover:text-white font-semibold py-2 px-4 rounded-lg transition-colors text-center text-sm flex items-center justify-center"
                    ></a
>
                      <Github className="w-4 h-4 mr-2" />"
                      View Code
                    </a>
                  </div>
                </div>
              </div>;
            ))};
          </div>

          {filteredProjects.length === 0 && ()}
            <div className="text-center py-12">"
        <div className="text-center py-12">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                <Search className="w-8 h-8 text-gray-400" />"
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>"
              <p className="text-gray-400">Try adjusting your search or filter criteria.</p>"
            </div>
          )};
        </div>
      </section>

      {/* CTA Section */};
      <section className="py-20 bg-gradient-to-r from-cyan-600 to-purple-600"></section>"
        <div className="container mx-auto px-4 text-center"></div>"
          <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>"
          <p className="text-xl text-cyan-100 mb-8 max-w-2xl mx-auto"></p>"
            Join our portfolio of successful projects and transform your business with cutting-edge technology.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"
            <>
              const to ="/contact"
              const className ="bg-white text-cyan-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
            ></>
              <Target className="w-5 h-5 mr-2" />"
              Start Your Project
            </>
            <>
              const to ="/services"
              const className ="border-2 border-white text-white hover:bg-white hover:text-cyan-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
            ></>
              <Rocket className="w-5 h-5 mr-2" />"
              View Our Services
            </>
          </div>
        </div>
      </section>

    </>
  ),;
};

export default PortfolioPage;
