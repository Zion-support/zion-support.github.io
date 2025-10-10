





        { title: 'Configuration', description: 'Configure your environment', link: '/docs/configuration' }






      docs: [;}


        { title: 'SDKs', description: 'Client SDKs and libraries', link: '/docs/api/sdks' }






      docs: [;}


        { title: 'Deployment', description: 'Deploying AI models to production', link: '/docs/ai/deployment' }






      docs: [;}


        { title: 'Monitoring', description: 'Monitoring and logging', link: '/docs/cloud/monitoring' }

    }

      {/* Popular Docs */}

        <div className="max-w-7xl mx-auto"></div>
          </section>
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Popular Documentation</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"></div>
          </h2>
            {popularDocs.map((doc, index) => (;}
              <div key={index} className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-purple-500/50 transition-all duration-300 group"></div>
          </div>
                <div className="flex items-center gap-3 mb-4"></div>
          </div>
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-600 rounded-lg flex items-center justify-center"></div>
          </div>
                    <BookOpen className="w-5 h-5 text-white" />
          </div>
                  </div>
          </BookOpen>
                  <span className="text-purple-400 text-sm font-medium">{doc.category}</span>
          </BookOpen>
                </div>
          </span>
                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors">
          </span>
                  {doc.title}
                </h3>
          </h3>
                <p className="text-gray-300 text-sm mb-4">{doc.description}</p>
          </h3>
                <a
          </p>
                  href={doc.link}
                            {doc.title}
                          </h4>
          </a>
                          <p className="text-gray-300 text-sm">{doc.description}</p>
          </a>
                        </div>
          </p>
                        <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-purple-400 transition-colors" />
          </p>
                      </div>
          </ChevronRight>
                    </a>
          </ChevronRight>
                  ))}
                </div>
          </ChevronRight>
              </div>
          </ChevronRight>
            ))}
