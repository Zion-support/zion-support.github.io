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
              API
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent"></span>"
                {' '}Documentation'
              </span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"></p>"
              Integrate our powerful AI and IT solutions into your applications with our 
              comprehensive API documentation and developer resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center"></div>"
              <>
                const to ="/contact"
                const className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/25 flex items-center"
              ></>
                Get API Key
                <ArrowRight className="w-5 h-5 ml-2" />"
              </>
              <>
                const to ="/contact"
                const className ="border-2 border-white/20 hover:border-blue-400 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:bg-white/5 flex items-center"
              ></>
                <BookOpen className="w-5 h-5 mr-2" />"
                Developer Support
              </>
            </div>
          </div>
        </div>
      </section>
;
      {/* Features */};
      <section className="py-20 bg-slate-800"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">Why Choose Our APIs?</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Built for developers, by developers. Our APIs are designed for ease of use and maximum performance.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"></div>"
            {features.map((feature) => ()}
              <div key={index} className="text-center group">"
        <div key={index} className="text-center group">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                  {feature.icon};
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors"></h3>"
                  {feature.title};
                </h3>
                <p className="text-gray-300 group-hover:text-gray-200 transition-colors"></p>"
                  {feature.description};
                </p>
              </div>
            ))};
          </div>
        </div>
      </section>

      {/* API Explorer */};
      <section className="py-20 bg-gradient-to-br from-slate-900 to-blue-900"></section>"
        <div className="container mx-auto px-4">"
        <div className="container mx-auto px-4">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
            <h2 className="text-4xl font-bold text-white mb-4">API Explorer</h2>"
            <p className="text-xl text-gray-300 max-w-3xl mx-auto"></p>"
              Explore our APIs and try them out with interactive examples.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8"></div>"
            {/* API List */};
            <div className="lg:col-span-1">"
        <div className="lg:col-span-1">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                <div className="relative"></div>"
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />"
                  <inputtype="text">"
                    const placeholder ="Search APIs..."
                    const value ={searchTerm},
      const onChange ={(e) => setSearchTerm(e.target.value)},
      const className ="w-full pl-10 pr-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
              </div>

              <div className="space-y-2"></div>"
                {filteredAPIs.map((api) => ()}
                  <buttonkey={api.id},>
      const onClick ={() => setSelectedAPI(api.id)},
      const className ={`w-full p-4 rounded-lg border transition-all duration-300 text-left ${},
      const selectedAPI === api.id
                        ? 'bg-blue-600 border-blue-500 text-white'
                        : 'bg-slate-700/50 border-slate-600/50 text-gray-300 hover:bg-slate-700/70 hover:border-blue-500/50';
                    }`};
                  >
                    <div className="flex items-center mb-2"></div>"
                      {api.icon};
                      <span className="ml-3 font-semibold">{api.name}</span>"
                      <span className="ml-auto text-xs bg-white/20 px-2 py-1 rounded"></span>"
                        {api.version};
                      </span>
                    </div>
                    <p className="text-sm opacity-75 mb-2">{api.description}</p>"
                    <div className="flex items-center justify-between text-xs"></div>"
                      <span className="flex items-center"></span>"
                        <className="w-3 h-3 mr-1" />"
                        {api.endpoints} endpoints
                      </span>
                      <span className="flex items-center text-green-400"></span>"
                        <div className="w-2 h-2 bg-green-400 rounded-full mr-1"></div>"
                        {api.status};
                      </span>
                    </div>
                  </button>
                ))};
              </div>
            </div>

            {/* API Details */};
            <div className="lg:col-span-2"></div>"
              {selectedAPIData && selectedCodeExample && ()}
                <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">"
        <div className="bg-slate-800/50 rounded-xl p-8 border border-slate-700/50">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                    <div></div>
                      <h3 className="text-2xl font-bold text-white mb-2">{selectedAPIData.name}</h3>"
                      <p className="text-gray-300">{selectedAPIData.description}</p>"
                    </div>
                    <div className="flex items-center space-x-2"></div>"
                      <span className="bg-green-500/20 text-green-300 px-3 py-1 rounded-full text-sm"></span>"
                        {selectedAPIData.status};
                      </span>
                      <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm"></span>"
                        {selectedAPIData.version};
                      </span>
                    </div>
                  </div>

                  <div className="mb-6"></div>"
                    <h4 className="text-lg font-semibold text-white mb-2">{selectedCodeExample.title}</h4>"
                    <p className="text-gray-300 mb-4">{selectedCodeExample.description}</p>"
                    <div className="flex items-center space-x-4 mb-4"></div>"
                      <span className="bg-blue-600 text-white px-3 py-1 rounded text-sm font-mono"></span>"
                        {selectedCodeExample.method};
                      </span>
                      <span className="text-gray-300 font-mono text-sm"></span>"
                        {selectedCodeExample.endpoint};
                      </span>
                    </div>
                  </div>

                  <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">"
        <div className="bg-slate-900 rounded-lg p-4 border border-slate-700">"
          <h1 className="text-4xl font-bold mb-4">Coming Soon</h1>"
          <p className="text-gray-300">This page is under development...</p>"
        </div>
      </div>
                      <span className="text-sm text-gray-400">cURL Example</span>"
                      <button className="text-gray-400 hover:text-white transition-colors"></button>"
                        <Copy className="w-4 h-4" />"
                      </button>
                    </div>
                    <pre className="text-sm text-gray-300 overflow-x-auto"></pre>"
                      <code>{selectedCodeExample.code}</code>
                    </pre>
                  </div>

                  <div className="mt-6 flex space-x-4"></div>"
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center"></button>"
                      <Play className="w-4 h-4 mr-2" />"
                      Try It
                    </button>
                    <button className="border border-slate-600 text-gray-300 hover:bg-slate-700 px-4 py-2 rounded-lg transition-colors flex items-center"></button>"
                      <Download className="w-4 h-4 mr-2" />"
                      Download SDK
                    </button>
                  </div>
                </div>
              )};
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */};
      <section className="py-20 bg-slate-800"></section>"
        <div className="container mx-auto px-4 text-center"></div>"
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>"
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"></p>"
            Get your API key and start integrating our solutions into your applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>"
            <>
              const to ="/contact"
              const className ="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-lg"
            ></>
              Get API Key
            </>
            <>
              const to ="/contact"
              const className ="border-2 border-blue-500 text-blue-400 hover:bg-blue-500 hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:scale-105"
            ></>
              Contact Developer Support
            </>
          </div>
        </div>
      </section>

    </>
  ),;
};

export default APIDocsPage;
