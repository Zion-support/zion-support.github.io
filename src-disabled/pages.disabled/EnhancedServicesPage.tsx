return (
    <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/30 group">"
      <CardHeader className="pb-3">"
        <div className="flex items-start justify-between">"
          <div className="flex-1 min-w-0">"
            <div className="flex items-center gap-2 mb-2">"

            <div className="flex items-center gap-2 mb-2">"
              <div className="flex items-center gap-1">"
                <Star className="h-4 w-4 text-yellow-500 fill-current" />"
                <span className="text-sm font-medium">{service.rating}</span>"

          <div className="text-right">"
            <div className="text-xl font-bold text-green-600">{service.price}</div>"
            <div className="text-xs text-muted-foreground line-through">{service.marketPrice}</div>"
            <Badge variant={service.availability === "Available" ? "default" : "outline"} className="text-xs mt-1">"

              </Badge>
            )}
          </div>
        </div>

                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-3 mb-3">"
          <h4 className="text-xs font-semibold text-muted-foreground mb-2">Contact Zion Tech Group:</h4>"
          <div className="space-y-1 text-xs">"
            <div className="flex items-center gap-2">"
              <Phone className="h-3 w-3 text-blue-600" />"

          </Button>
        </div>
      </CardHeader>
    </Card>
  );
};

  <Card className="bg-gradient-to-r from-green-900/20 to-blue-900/20 border-green-700/30 mb-6">"
    <CardContent className="p-6">"
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">"
        <div className="text-center">"
          <div className="text-2xl font-bold text-green-400">${(stats.averagePrice / 1000).toFixed(1)}k</div>"

        Premium Services ({stats.premiumServices}) • AI Score Avg: {stats.averageAIScore}
      </div>
    </CardContent>
  </Card>
);

  sortBy,
  setSortBy,
  filterCategory,
  setFilterCategory,
  categories,
  showRecommended,
  setShowRecommended,

  <div className="flex flex-wrap gap-4 mb-6 p-4 bg-muted/30 rounded-lg relative">"
    {loading && <Spinner className="absolute right-4 top-4 h-4 w-4 text-primary" />}"
    <div className="flex items-center gap-2">"
      <Filter className="h-4 w-4 text-muted-foreground" />"
      <select value={filterCategory} onChange={(e) => setFilterCategory(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">"

    <div className="flex items-center gap-2">"
      <SortAsc className="h-4 w-4 text-muted-foreground" />"
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className="bg-background border border-border px-3 py-2 rounded">"
        <option value="newest">Newest First</option>"
        <option value="price-low">Price: Low to High</option>"
        <option value="price-high">Price: High to Low</option>"
        <option value="rating">Highest Rated</option>"

    items: services,
    loading,
    error,
    hasMore,
    isFetching,
    lastElementRef,
    scrollToTop,
    refresh,

        </motion.div>
        <ServicesLoadingGrid />
      </div>
    );
  }

        <Button onClick={refresh}>Retry</Button>
      </div>
    );
  }

              <span>{benefit}</span>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-6 mb-8">"
          <h3 className="text-xl font-semibold mb-4">Ready to Transform Your Business?</h3>"
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">"
            <div className="flex items-center gap-2">"

              <span>{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
      </motion.div>

      {marketStats && (
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}>
          <EnhancedMarketInsights stats={marketStats} />
        </motion.div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="mb-8">"
        <TabsList className="grid w-full grid-cols-6">"
          <TabsTrigger value="all">All Services</TabsTrigger>"
          <TabsTrigger value="micro-saas">Micro SAAS</TabsTrigger>"
          <TabsTrigger value="ai-services">AI Services</TabsTrigger>"
          <TabsTrigger value="it-services">IT Services</TabsTrigger>"
          <TabsTrigger value="blockchain">Blockchain</TabsTrigger>"

              sortBy={sortBy}
              setSortBy={setSortBy}
              filterCategory={filterCategory}
              setFilterCategory={setFilterCategory}
              categories={categories}
              showRecommended={showRecommended}
              setShowRecommended={setShowRecommended}
              loading={isFetching}
            />
          </motion.div>

                  key={item.id}
                  ref={index === services.length - 1 ? lastElementRef : null}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ delay: Math.min(index * 0.03, 0.5) }}
                  whileHover={{ scale: 1.02 }}

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

            </motion.div>
          )}
        </TabsContent>
      </Tabs>

            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}

          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );