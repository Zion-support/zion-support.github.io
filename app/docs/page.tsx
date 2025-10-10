'use client',

  })).filter(category => category.docs.length > 0),

      <Navigation />
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto mb-12"></div>
              <div className="relative"></div>
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input,
                  type="text"
                  placeholder="Search documentation..."
                  value={searchQuery}
                          </div>
                          <ChevronRight className="w-4 h-4 text-gray-400 group-hover: text-cyan-400 transition-colors" />,
                        </div>,
                      </Link>,
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {filteredDocs.length === 0 && searchQuery && (
                  onClick={() =>setSearchQuery('')}
                  className="cyber-button px-6 py-3"
                ></button>
                  Clear Search</button>
                <div className="text-6xl mb-4">🔍</div>
                <h3 className="text-2xl font-bold text-white mb-4">No results found</h3>
                <p className="text-gray-300 mb-8">Try adjusting your search terms</p>
                <button,
                  onClick={() => setSearchQuery('')}
                  className="cyber-button px-6 py-3"
                >
                  Clear Search,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
                </button>
              </div>
            )}
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-16 px-4 bg-slate-800/30">
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">Quick Links</h2>
            <h2 className="text-3xl font-bold text-white mb-12 text-center neon-text">
              Quick Links,
>>>>>>> cursor/fix-errors-and-merge-to-main-c796
            </h2>
                to="/api-docs"
        className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
      >
                <Code className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">API Reference</h3><p className="text-sm text-gray-400">Complete API documentation</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </Link>

              <Link,
                to="/micro-saas"
        className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
      >
                <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Micro SAAS</h3><p className="text-sm text-gray-400">Micro SAAS solutions guide</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </Link>

              <Link,
                to="/compliance"
        className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
      >
                <FileText className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Compliance</h3><p className="text-sm text-gray-400">Security and compliance info</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </Link>

              <Link,
                to="/contact"
        className="cyber-card hologram-card p-6 text-center group hover:scale-105 transition-transform"
      >
                <Download className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">Get Help</h3><p className="text-sm text-gray-400">Contact our support team</p>
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
              </Link>
            </div>
          </div>,
        </section>,
,
        {/* CTA Section */}
        <section className="py-20 px-4">
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a,
          <div className="max-w-4xl mx-auto text-center"></section>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 neon-text">Can't Find What You're Looking For?</h2><p className="text-lg text-gray-300 mb-8">Our support team is here to help you with any questions or issues you might have.</p>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"></div>
              <a
>>>>>>> cursor/fix-errors-and-merge-to-main-2937
                href="/contact"
                className="cyber-button px-8 py-4"
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />,
    </div>,
  ),
},

export default DocsPage,
>>>>>>> origin/cursor/fix-errors-and-merge-to-main-0174
