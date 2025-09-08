                  className="mt-4 px-6 py-2 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors"
                >
                  Clear Filters;
                </button>
              </motion.div>

            )}
                      {/* Enhanced Price */}
                      <div className="mb-6 relative z-10">
                        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-4">
                          <div className="text-3xl font-bold text-white mb-1">${service.price.monthly}</div>
                          <div className="text-sm text-gray-300">/month</div>
                          <div className="text-xs text-cyan-400 font-medium mt-1">{service.price.trialDays}-day free trial</div>
                        </div>
                      </div>
          </div>;
                      {/* Enhanced Price *
}
                      <div className="mb-6 relative z-10">;"
                        <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 border border-cyan-500/30 rounded-2xl p-4">;"
                          <div className="text-3xl font-bold text-white mb-1">${service.price.monthly}</div>;"
                          <div className="text-sm text-gray-300">/month</div>;"
                          <div className="text-xs text-cyan-400 font-medium mt-1">{service.price.trialDays}-day free trial</div>;"
                        </div>;
        </section>;
                      {/* Enhanced Price */}


                      {/* Enhanced Features */}
                      <div className=\"mb-6 relative z-10\"    />;
                        <div className=\"text-sm text-cyan-400 font-medium mb-3\"    />✨ Key Features</div>;
                        <ul className=\"space-y-2\"    />;
                          {service.features.slice(0, 3).map((feature, idx) => (<li key={idx} className=\"text-sm text-gray-300 flex items-center group-hover:text-white transition-colors duration-300\"    />;
                              <Check className=\"w-4 h-4 text-green-400 mr-3 flex-shrink-0\"    />;

            {/* Enhanced Category Overview */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 }}
              animate={{ opacity: 1, coordinate_y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mb - 20";
            >;
              <div className="text - center mb - 16">;
                <h2 className="text - 4xl md:text - 5xl font - bold mb - 6">;
                  <span className="bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip - text text - transparent">;
                    Service Categories;
                  </span>;
                </h2>;
                <p className="text - lg text - gray - 300 max-w-3xl mx-auto">;"
                  Explore our comprehensive range of cutting - edge services across multiple domains;
                </p>;
              </div>;
              <div className="grid grid - cols - 1 "md":grid - cols - 2 "lg":grid - cols-3 gap-6">;"
                {categories.map ((category, index) => {const stats = getCategoryStats (category.id;
  }
  return (<motion.div;
                      key={category.id}
                      initial={{ "opacity": 0, "coordinate_y": 20 
}
                      animate={{ "opacity": 1, "coordinate_y": 0 
}
                      transition={{ "duration": 0.8, "delay": 0.6 + index * 0.1 
}
                      className="bg - gray - 900 / 60 backdrop - blur - xl border border - gray - 700 / 50 rounded - 3xl p - 8 "hover":border - cyan - 500 / 30 "hover":shadow - 2xl "hover":shadow - cyan - 500 / 20 transition - all duration-500 cursor-pointer group";"
                      on_click={() => setSelectedCategory (category.id)}
                    >;
                      <div className={`w - 20 h - 20 bg - gradient - to - r ${category.color} rounded - 3xl flex items - center justify - center mb - 6 group - "hover": scale - 110 transition - transform duration - 300 shadow - lg`}>`
                <Search className="w - 16 h - 16 text - gray - 400 mx-auto mb-4" />;"
                <h3 className="text - xl font - semibold text-white mb-2">No services found</h3>;"
                <p className="text-gray-400">Try adjusting your search criteria or browse all services</p>;"
                <button;
                  on_click={() => {setSearchTerm ('')setSelectedCategory ('All')}}'
                  className="mt - 4 px - 6 py - 2 bg - cyan - 500 text - white rounded - lg "hover":bg - cyan-600 transition-colors">"

                  Clear Filters;
                </button>;
              </motion.div>)}
          </div>;
        </section>;
                      {/* Enhanced Price */}
                      <div className="mb-6 relative z-10">;"
                        <div className="bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 rounded-2xl p-4">;"
                          <div className="text - 3xl font - bold text-white mb-1">${service.price.monthly}</div>;"
                          <div className="text - sm text-gray-300">/month</div>;"
                          <div className="text - xs text - cyan - 400 font-medium mt-1">{service.price.trial_days}-day free trial</div>;"
                        </div>;
                      {/* Enhanced Features */}
                      <div className="mb-6 relative z-10">;"
                        <div className="text - sm text - cyan - 400 font-medium mb-3">✨ Key Features</div>;"
                        <ul className="space-y-2">;"
                          {service.features.slice (0, 3).map ((feature, idx) => (<li key={idx} className="text - sm text - gray - 300 flex items - center group - "hover":text - white transition-colors duration-300">;"
                              <Check className="w - 4 h - 4 text - green - 400 mr - 3 flex-shrink-0" />;"
                              {feature}
                            </li>))}
                        </ul>;
                      </div>;
                      {/* Enhanced Stats */}
                      <div className="grid grid - cols - 3 gap - 3 mb - 6 text-center relative z-10">;"
                        <div className="bg - gray - 800 / 50 rounded - xl p - 3 border border - gray - 700 / 50 group - "hover":border - cyan - 500 / 30 transition-colors duration-300">;"
                          <div className="text - cyan - 400 font-bold text-lg">{service.rating}/5</div>;"
                          <div className="text - gray-300 text-xs">Rating</div>;"
                        </div>;
                        <div className="bg - gray - 800 / 50 rounded - xl p - 3 border border - gray - 700 / 50 group - "hover":border - purple - 500 / 30 transition-colors duration-300">;"
                          <div className="text - purple - 400 font-bold text-lg">{service.customers}+</div>;"
                          <div className="text - gray-300 text-xs">Customers</div>;"
                        </div>;
                        <div className="bg - gray - 800 / 50 rounded - xl p - 3 border border - gray - 700 / 50 group - "hover":border - green - 500 / 30 transition-colors duration-300">;"
                          <div className="text - green - 400 font-bold text-lg">{service.price.setup_time}</div>;"
                          <div className="text - gray-300 text-xs">Setup</div>;"
                        </div>;
                      {/* Enhanced CTA */}
                      <div className="relative z-10">;"
                        <a;
                          href={service.link}
                          className="block w - full bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white py - 4 px - 6 rounded - 2xl text - center font - semibold text - base "hover":from - cyan - 600 "hover":to - purple - 700 transition - all duration - 300 transform "hover":scale - 105 shadow - lg shadow - cyan - 500 / 25 group - "hover":shadow - xl group - "hover":shadow-cyan-500 / 40">"

                          Explore Service;
                          <ArrowRight className="w - 5 h - 5 inline ml - 2 group - "hover":translate - x-1 transition-transform duration-300" />;"
                        </a>;
                      </div>;
                    </motion.div>))}
                </div>) : (<div className="space-y-4">;"
                  {sorted_services.map ((service, index) => (<motion.div;
                      }
                      key={service.id}
                      initial={{ "opacity": 0, "coordinate_x": -20 
}
                      animate={{ "opacity": 1, "coordinate_x": 0 
}
                      transition={{ "duration": 0.8, "delay": 1 + index * 0.05 
}
                      className="bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - 2xl p - 6 "hover":border - gray - 600 / 50 transition-all duration-300">"

                      <div className="flex flex - col "lg":flex-row gap-6">;"
                        {/* Service Info */}
                        <div className="flex-1">;"
                          <div className="flex items - start justify-between mb-3">;"
                            <h3 className="text - xl font-bold text-white">{service.name}</h3>;"
                            {service.popular && (<span className="px - 3 py - 1 text - sm bg - gradient - to - r from - pink - 500 to - rose - 500 text-white rounded-full">;"
                                }
                                Popular;
                              </span>)}
                          </div>;
                          <p className="text - gray-300 mb-3">{service.description}</p>;"
                          <div className="flex flex - wrap gap-2 mb-4">;"
                            {service.features.slice (0, 4).map ((feature, idx) => (<span key={idx} className="px - 2 py - 1 bg - gray - 800 / 50 text - xs text - gray-300 rounded-lg">;"
                                {feature}
                              </span>
                            ))}
                          </div>

                        {/* Pricing & Stats */}

            {/* Enhanced Category Overview */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 ,}
}
              animate={{ opacity: 1, coordinate_y: 0 ,}
}
              transition={{ duration: 0.8, delay: 0.4 ,}
}
              className=\"mb-20\"    />

              <div className=\"text-center mb-16\"    />;
                <h2 className=\"text - 4xl md:text - 5xl font-bold mb-6\"    />;
                  <span className=\"bg - gradient - to - r from - cyan - 400 via - purple - 400 to - pink - 400 bg - clip-text text-transparent\"    />;
                    Service Categories;
                  </span>;
                </h2>;
                <p className=\"text - lg text - gray - 300 max-w-3xl mx-auto\"    />;
                  Explore our comprehensive range of cutting - edge services across multiple domains;
                </p>;
              </div>;
              <div className=\"grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-3 gap-6\"    />;
                {categories.map ((category, index) => {const stats = getCategoryStats (category.id;}
  return (<motion.div;}
                      key={category.id}
                      initial={{ opacity: 0, coordinate_y: 20 ,}
}
                      animate={{ opacity: 1, coordinate_y: 0 ,}
}
                      transition={{ duration: 0.8, delay: 0.6 + index * 0.1 ,}
}
                      className=\'bg - gray - 900 / 60 backdrop - blur - xl border border - gray - 700 / 50 rounded - 3xl p - 8 hover:border - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration-500 cursor-pointer group\';
                      on_click={() =    /> setSelectedCategory (category.id)}
                    >;
                      <div className={`w - 20 h - 20 bg - gradient - to - r ${category.color} rounded - 3xl flex items - center justify - center mb - 6 group - hover: scale - 110 transition - transform duration - 300 shadow - lg`}    />

                        {category.ico,}
}
                      </div>;
                      <h3 className=\"text - 2xl font - bold text - white mb - 3 group - hover: text - cyan - 300 transition-colors duration-300\"    />{category.nam,}
}</h3>;
                      <p className=\"text - gray - 300 text - base mb-6 leading-relaxed\"    />{category.description}</p>;
                      <div className=\"grid grid - cols - 3 gap-6 text-center\"    />;
                        <div className=\"group - hover:scale - 105 transition-transform duration-300\"    />;
                          <div className=\"text - 3xl font - bold text-cyan-400\"    />{stats.count}</div>;
                          <div className=\"text - sm text-gray-400\"    />Services</div>;
                        </div>;
                        <div className=\"group - hover:scale - 105 transition-transform duration-300\"    />;
                          <div className=\"text - 3xl font - bold text-purple-400\"    />${stats.avg_price}</div>;
                          <div className=\"text - sm text-gray-400\"    />Avg Price</div>;
                        </div>;
                        <div className=\"group - hover:scale - 105 transition-transform duration-300\"    />;
                          <div className=\"text - 3xl font - bold text-green-400\"    />{stats.avg_rating}</div>;
                          <div className=\"text - sm text-gray-400\"    />Rating</div>;
                        </div>;
                      </div>;
                      <div className=\"mt - 6 pt - 6 border - t border-gray-700 / 50\"    />;
                        <div className=\"text - cyan - 400 text - sm font - medium group - hover:text - cyan - 300 transition-colors duration-300\"    />;
                          Click to explore →;
                        </div>;
                      </div>;
            {/* Services Grid / List */}
            <motion.div;
              initial={{ opacity: 0, coordinate_y: 20 ,}
}
              animate={{ opacity: 1, coordinate_y: 0 ,}
}
              transition={{ duration: 0.8, delay: 0.8 ,}
}
                />;
              <h2 className=\"text - 3xl font - bold text-center mb-12\"    />;
                <span className=\"bg - gradient - to - r from - cyan - 400 to - purple - 400 bg - clip-text text-transparent\"    />;
                  {selected_category === 'all' ? 'All Services' : categories.find (c => c.id === selected_category)?.name}
                </span>;
              </h2>;
              {view_mode === 'grid' ? (<div className=\"grid grid - cols - 1 md:grid - cols - 2 lg:grid - cols-3 gap-8\"    />;}
                  {sorted_services.map ((service, index) => (<motion.div;}
                      key={service.id}
                      initial={{ opacity: 0, coordinate_y: 20 ,}
}
                      animate={{ opacity: 1, coordinate_y: 0 ,}
}
                      transition={{ duration: 0.8, delay: 1 + index * 0.05 }}
                      className=\"bg - gray - 900 / 60 backdrop - blur - xl border border - gray - 700 / 50 rounded - 3xl p - 8 hover:border - cyan - 500 / 30 hover:shadow - 2xl hover:shadow - cyan - 500 / 20 transition - all duration - 500 hover:transform hover:scale-105 group relative overflow-hidden\"    />

                      {/* Animated Background *,}
}
                      <div className=\"absolute inset - 0 bg - gradient - to - br from - cyan - 500 / 5 to - purple - 500 / 5 opacity - 0 group - hover:opacity - 100 transition-opacity duration-500\"    /></div>;
                      <div className=\"absolute top - 0 right - 0 w - 32 h - 32 bg - gradient - to - br from - cyan - 500 / 10 to - transparent rounded - full blur - 3xl group - hover:scale - 150 transition-transform duration-700\"    /></div>;
                      {/* Enhanced Service Header */}
                      <div className=\"relative z-10\"    />;
                        <div className=\"flex items - start justify-between mb-6\"    />;
                          <div className=\"flex-1\"    />;
                            <h3 className=\"text - xl font - bold text - white mb - 3 group - hover:text - cyan - 400 transition-colors duration-300\"    />;
                              {service.name}
                            </h3>;
                            <p className=\"text - base text - gray-300 leading-relaxed\"    />{service.tagline}</p>;
                          </div>;
                          {service.popular && (<span className=\"px - 3 py - 1.5 text - sm bg - gradient - to - r from - pink - 500 to - rose - 500 text - white rounded - full shadow - lg shadow-pink-500 / 25\"    />;}
                              ⭐ Popular;}
                            </span>)}
                        </div>;
                        {/* Service Icon */}
                        <div className=\"text-4xl mb-4\"    />{service.icon}</div>;
                      </div>;
                    </div>;
                  </motion.div>))}
              </div>) : (<motion.div;
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 ,}
}
                className=\"text-center py-20\"    />

                <Search className=\"w - 16 h - 16 text - gray - 400 mx-auto mb-4\"    />;
                <h3 className=\"text - xl font - semibold text-white mb-2\"    />No services found</h3>;
                <p className=\"text-gray-400\"    />Try adjusting your search criteria or browse all services</p>;
                <button;
                  on_click={() =    /> {setSearchTerm ('')setSelectedCategory ('All')}}
                  className=\"mt - 4 px - 6 py - 2 bg - cyan - 500 text - white rounded - lg hover:bg - cyan-600 transition-colors\">

                  Clear Filters;
                </button>;
              </motion.div>)}
          </div>;
        </section>;
                      {/* Enhanced Price */}
                      <div className=\"mb-6 relative z-10\"    />;
                        <div className=\"bg - gradient - to - r from - cyan - 500 / 20 to - purple - 500 / 20 border border - cyan - 500 / 30 rounded-2xl p-4\"    />;
                          <div className=\"text - 3xl font - bold text-white mb-1\"    />${service.price.monthly}</div>;
                          <div className=\"text - sm text-gray-300\"    />/month</div>;
                          <div className=\"text - xs text - cyan - 400 font-medium mt-1\"    />{service.price.trial_days}-day free trial</div>;
                        </div>;
                      </div>;
                      {/* Enhanced Features */}
                      <div className=\"mb-6 relative z-10\"    />;
                        <div className=\"text - sm text - cyan - 400 font-medium mb-3\"    />✨ Key Features</div>;
                        <ul className=\"space-y-2\"    />;
                          {service.features.slice (0, 3).map ((feature, idx) => (<li key={idx} className=\"text - sm text - gray - 300 flex items - center group - hover:text - white transition-colors duration-300\"    />;
                              <Check className=\"w - 4 h - 4 text - green - 400 mr - 3 flex-shrink-0\"    />;
                              {feature}
                            </li>))}
                        </ul>;
                      </div>;
                      {/* Enhanced Stats */}
                      <div className=\"grid grid - cols - 3 gap - 3 mb - 6 text-center relative z-10\"    />;
                        <div className=\"bg - gray - 800 / 50 rounded - xl p - 3 border border - gray - 700 / 50 group - hover:border - cyan - 500 / 30 transition-colors duration-300\"    />;
                          <div className=\"text - cyan - 400 font-bold text-lg\"    />{service.rating}/5</div>;
                          <div className=\"text - gray-300 text-xs\"    />Rating</div>;
                        </div>;
                        <div className=\"bg - gray - 800 / 50 rounded - xl p - 3 border border - gray - 700 / 50 group - hover:border - purple - 500 / 30 transition-colors duration-300\"    />;
                          <div className=\"text - purple - 400 font-bold text-lg\"    />{service.customers}+</div>;
                          <div className=\"text - gray-300 text-xs\"    />Customers</div>;
                        </div>;
                        <div className=\"bg - gray - 800 / 50 rounded - xl p - 3 border border - gray - 700 / 50 group - hover:border - green - 500 / 30 transition-colors duration-300\"    />;
                          <div className=\"text - green - 400 font-bold text-lg\"    />{service.price.setup_time}</div>;
                          <div className=\"text - gray-300 text-xs\"    />Setup</div>;
                        </div>;
                      </div>;
                      {/* Enhanced CTA */}
                      <div className=\"relative z-10\"    />;
                        <a;
                          href={service.link}
                          className=\"block w - full bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white py - 4 px - 6 rounded - 2xl text - center font - semibold text - base hover:from - cyan - 600 hover:to - purple - 700 transition - all duration - 300 transform hover:scale - 105 shadow - lg shadow - cyan - 500 / 25 group - hover:shadow - xl group - hover:shadow-cyan-500 / 40\"    />

                          Explore Service;
                          <ArrowRight className=\"w - 5 h - 5 inline ml - 2 group - hover:translate - x-1 transition-transform duration-300\"    />;
                        </a>;
                      </div>;
                    </motion.div>))}
                </div>) : (<div className=\"space-y-4\"    />;
                  {sorted_services.map ((service, index) => (<motion.div;}
                      key={service.id}
                      initial={{ opacity: 0, coordinate_x: -20 ,}
}
                      animate={{ opacity: 1, coordinate_x: 0 ,}
}
                      transition={{ duration: 0.8, delay: 1 + index * 0.05 ,}
}
                      className=\"bg - gray - 900 / 50 backdrop - blur - sm border border - gray - 700 / 50 rounded - 2xl p - 6 hover:border - gray - 600 / 50 transition-all duration-300\"    />

                      <div className=\"flex flex - col lg:flex-row gap-6\"    />;
                        {/* Service Info */}
                        <div className=\"flex-1\"    />;
                          <div className=\"flex items - start justify-between mb-3\"    />;
                            <h3 className=\"text - xl font-bold text-white\"    />{service.name}</h3>;
                            {service.popular && (<span className=\"px - 3 py - 1 text - sm bg - gradient - to - r from - pink - 500 to - rose - 500 text-white rounded-full\"    />;}
                                Popular;}
                              </span>)}
                          </div>;
                          <p className=\"text - gray-300 mb-3\"    />{service.description}</p>;
                          <div className=\"flex flex - wrap gap-2 mb-4\"    />;
                            {service.features.slice (0, 4).map ((feature, idx) => (<span key={idx} className=\"px - 2 py - 1 bg - gray - 800 / 50 text - xs text - gray-300 rounded-lg\"    />;
                                {feature}
                              </span>))}
                          </div>;
                        </div>;
                        {/* Pricing & Stats */}
                        <div className=\"lg:w-48 space-y-4\"    />;
                          <div className=\"text-center\"    />;
                            <div className=\"text - 3xl font-bold text-white\"    />${service.price.monthly}</div>;
                            <div className=\"text - sm text-gray-400\"    />/month</div>;
                            <div className=\"text - xs text-green-400\"    />{service.price.trial_days}-day trial</div>;
                          </div>;
                          <div className=\"grid grid - cols - 2 gap - 2 text-center text-xs\"    />;
                            <div className=\"bg - gray - 800 / 30 rounded-lg p-2\"    />;
                              <div className=\"text - cyan-400 font-semibold\"    />{service.rating}/5</div>;
                              <div className=\"text-gray-400\"    />Rating</div>;
                            </div>;
                            <div className=\"bg - gray - 800 / 30 rounded-lg p-2\"    />;
                              <div className=\"text - purple-400 font-semibold\"    />{service.customers}+</div>;
                              <div className=\"text-gray-400\"    />Customers</div>;
                            </div>;
                          </div>;
                          <a;
                            href={service.link}
                            className=\"block w - full bg - gradient - to - r from - cyan - 500 to - purple - 600 text - white py - 2 px - 4 rounded - lg text - center text - sm font - medium hover:from - cyan - 600 hover:to - purple - 700 transition-all duration-200\"    />



                      className="border-2 border-cyan-500/50 text-white px-10 py-5 rounded-2xl font-bold text-xl "hover": border-cyan-400 "hover":bg-cyan-500/10 transition-all duration-300 backdrop-blur-sm""
                    >
                      💰 View Pricing
                    </motion.a>
                  </div>







