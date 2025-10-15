import SEOHead from '../components/SEOHead';'


        </div>
      </div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>"
        </div>

        <div className="container mx-auto px-4 relative z-10">"
        <div className="container mx-auto px-4 relative z-10">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight"></h1>"
              How Can We
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent"></span>"
                {' '}Help You?'
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>"
              Find answers to your questions, access our documentation, and get the support you need 
              to succeed with our AI and IT solutions.
            </p>
            
            {/* Search */};
            <div className="max-w-2xl mx-auto mb-8">"
        <div className="max-w-2xl mx-auto mb-8">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
                <inputtype="text">"
                  const placeholder ="Search for help articles, FAQs, and documentation..."
                  const value ={searchTerm},
      const onChange ={(e) => setSearchTerm(e.target.value)},
      const className ="w-full pl-12 pr-4 py-4 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-lg"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"
              <>
                const to ="/contact"
                const className ="bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-700 hover:to-cyan-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25 flex items-center"
              ></>
                Contact Support
                <ArrowRight className="w-5 h-5 ml-2" />"
              </>
              <>
                const to ="/demo"
                const className ="border-2 border-white/20 hover:border-purple-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              ></>
                <Calendar className="w-5 h-5 mr-2" />"
                Schedule Demo
              </>
            </div>
          </div>
        </div>
      </section>
;
      {/* Help Categories */};
      <section className="py-20 bg-slate-800"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">Browse Help Topics</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Find the information you need organized by topic and category.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"></div>"
            {helpCategories.map((category) => ()}
              <>
                const key ={index},
      const to ="/help"
                const className ="group bg-slate-700/50 hover:bg-slate-700/70 p-8 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              ></>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"></div>";
                  {category.icon};
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors"></h3>"
                  {category.title};
                </h3>
                <p className="text-gray-300 mb-4">{category.description}</p>"
                <div className="flex items-center justify-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors"></div>"
                  <span className="mr-2">{category.articles} articles</span>"
                  <ExternalLink className="w-4 h-4" />"
                </div>
              </>
            ))};
          </div>
        </div>
      </section>

      {/* Support Channels */};
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">Get Support</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Choose the support channel that works best for you.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {supportChannels.map((channel) => ()}
              <div key={index} className="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">"
        <div key={index} className="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                  {channel.icon};
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{channel.title}</h3>"
                <p className="text-gray-300 mb-4">{channel.description}</p>"
                <div className="space-y-2 mb-6">"
        <div className="space-y-2 mb-6">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <className="w-4 h-4 mr-2" />"
                    {channel.availability};
                  </div>
                  <div className="flex items-center justify-center text-gray-400 text-sm"></div>"
                    <className="w-4 h-4 mr-2" />"
                    {channel.responseTime};
                  </div>
                </div>
                <button className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"></button>"
                  {channel.action};
                </button>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* FAQ Section */};
      <section className="py-20 bg-slate-800"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">Frequently Asked Questions</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Find quick answers to common questions about our services and solutions.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">"
        <div className="max-w-4xl mx-auto">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
              {filteredFAQs.map((faq) => ()}
                <div key={faq.id} className="bg-slate-700/50 backdrop-blur-sm border border-slate-600/50 rounded-xl hover:border-purple-500/50 transition-all duration-300"></div>"
                  <button>
                    const onClick ={() => toggleFAQ(faq.id)},
      const className ="w-full p-6 text-left flex items-center justify-between"
                  >
                    <div></div>
                      <h3 className="text-xl font-semibold text-white mb-2">{faq.question}</h3>"
                      <span className="text-sm text-purple-400">{faq.category}</span>"
                    </div>
                    {expandedFAQ === faq.id ? ()}
                      <ChevronDown className="w-5 h-5 text-gray-400" />"
                    ) : ()
                      <ChevronRight className="w-5 h-5 text-gray-400" />";
                    )};
                  </button>
                  
                  {expandedFAQ === faq.id && ()}
                    <div className="px-6 pb-6"></div>"
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>"
                    </div>
                  )};
                </div>
              ))};
            </div>

            {filteredFAQs.length === 0 && ()}
              <div className="text-center py-12">"
        <div className="text-center py-12">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                  <Search className="w-8 h-8 text-gray-400" />"
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">No FAQs found</h3>"
                <p className="text-gray-400">Try adjusting your search criteria.</p>"
              </div>
            )};
          </div>
        </div>
      </section>

      {/* Resources */};
      <section className="py-20 bg-gradient-to-br from-slate-900 to-purple-900"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">Resources</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Access our comprehensive library of resources and documentation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {resources.map((resource) => ()}
              <>
                const key ={index},
      const to ="/resources"
                const className ="group bg-slate-800/50 hover:bg-slate-800/70 p-8 rounded-xl border border-slate-600/50 hover:border-purple-500/50 transition-all duration-300 hover:transform hover:scale-105 text-center"
              ></>
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-cyan-600 rounded-lg flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform"></div>";
                  {resource.icon};
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors"></h3>"
                  {resource.title};
                </h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>"
                <div className="flex items-center justify-center text-purple-400 font-semibold group-hover:text-purple-300 transition-colors"></div>"
                  <span className="mr-2">{resource.items} {resource.type}</span>"
                  <ExternalLink className="w-4 h-4" />"
                </div>
              </>
            ))};
          </div>
        </div>
      </section>

      {/* Contact Support CTA */};
      <section className="py-20 bg-slate-800"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">Still Need Help?</h2>"
            <p className="text-xl text-purple-100 mb-8 max-w-2xl mx-auto"></p>"
              Can't find what you're looking for? Our support team is ready to help you with any questions or issues.'
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"
              <>
                const to ="/contact"
                const className ="bg-white text-purple-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center"
              ></>
                <MessageSquare className="w-5 h-5 mr-2" />"
                Contact Support
              </>
              <ahref="tel:+13024640950">"
                const className ="border-2 border-white text-white hover:bg-white hover:text-purple-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 flex items-center"
              ></a
>
                <Phone className="w-5 h-5 mr-2" />"
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

    </>
  ),;
};

export default HelpPage;
